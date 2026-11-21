/**
 * Page motion: smooth scroll, the ride's progress and time of day, the
 * odometer, and each section's own scroll moment. Content is visible
 * without this script; it only adds motion on top.
 */
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { skyAt } from './phases';
import type { RideState } from './scene';

gsap.registerPlugin(ScrollTrigger);

const root = document.documentElement;
const body = document.body;
const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

const state: RideState = {
  progress: 0,
  phase: Number(body.dataset.phase ?? 0),
  paused: false,
  reduced,
  wind: 0,
  pointer: { x: 0, y: 0 } as RideState['pointer'],
  from: Number(body.dataset.rideFrom ?? 0),
  to: Number(body.dataset.rideTo ?? 1),
};

// ——— smooth scroll ———
let lenis: Lenis | undefined;
if (!reduced) {
  lenis = new Lenis({ lerp: 0.09, wheelMultiplier: 0.9 });
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add((t) => lenis?.raf(t * 1000));
  gsap.ticker.lagSmoothing(0);

  document.addEventListener('click', (e) => {
    const a = (e.target as Element).closest<HTMLAnchorElement>('a[href*="#"]');
    if (!a) return;
    const url = new URL(a.href);
    if (url.pathname !== location.pathname || !url.hash) return;
    const target = document.querySelector<HTMLElement>(url.hash);
    if (!target) return;
    e.preventDefault();
    lenis?.scrollTo(target, { offset: -24, duration: 1.6 });
    history.pushState(null, '', url.hash);
    target.focus({ preventScroll: true });
  });
}

// ——— ride progress, sky and tone ———
const odoKm = document.querySelector<HTMLElement>('[data-odo-km]');
const odoStop = document.querySelector<HTMLElement>('[data-odo-stop]');
const odoBar = document.querySelector<HTMLElement>('[data-odo-bar]');
const KM = Number(body.dataset.rideKm ?? 18);

function paintSky(phase: number) {
  const s = skyAt(phase);
  root.style.setProperty('--sky-top', s.top);
  root.style.setProperty('--sky-mid', s.mid);
  root.style.setProperty('--sky-horizon', s.horizon);
}
paintSky(state.phase);

ScrollTrigger.create({
  start: 0,
  end: 'max',
  onUpdate(self) {
    state.progress = self.progress;
    if (odoKm)
      odoKm.textContent = (self.progress * KM).toFixed(1).padStart(4, '0');
    if (odoBar) odoBar.style.transform = `scaleX(${self.progress})`;
  },
});

const sky = { phase: state.phase };
for (const section of document.querySelectorAll<HTMLElement>('[data-sky]')) {
  const phase = Number(section.dataset.sky);
  const stop = section.dataset.stop ?? '';
  const enter = () => {
    state.phase = phase;
    root.dataset.tone = phase < 0.5 ? 'day' : 'night';
    if (odoStop) odoStop.textContent = stop;
    gsap.to(sky, {
      phase,
      duration: reduced ? 0 : 1.4,
      ease: 'power2.out',
      overwrite: true,
      onUpdate: () => paintSky(sky.phase),
    });
  };
  ScrollTrigger.create({
    trigger: section,
    start: 'top 55%',
    end: 'bottom 55%',
    onEnter: enter,
    onEnterBack: enter,
  });
}

// The header steps aside while you ride down, and returns when you look back.
const header = document.querySelector<HTMLElement>('.site-header');
let lastY = window.scrollY;
window.addEventListener(
  'scroll',
  () => {
    const y = window.scrollY;
    if (header && Math.abs(y - lastY) > 6) {
      header.classList.toggle('is-away', y > lastY && y > 240);
      lastY = y;
    }
  },
  { passive: true },
);
header?.addEventListener('focusin', () => header.classList.remove('is-away'));

// Wind from scroll speed; the name stretches with it.
let wind = 0;
gsap.ticker.add(() => {
  const v = lenis ? Math.abs(lenis.velocity) : 0;
  wind += (Math.min(v / 45, 1) - wind) * 0.08;
  state.wind = wind;
  root.style.setProperty('--wind', wind.toFixed(3));
});

window.addEventListener(
  'pointermove',
  (e) => {
    state.pointer.x = (e.clientX / window.innerWidth) * 2 - 1;
    state.pointer.y = -((e.clientY / window.innerHeight) * 2 - 1);
  },
  { passive: true },
);

// ——— pause control (WCAG 2.2.2) ———
const pause = document.querySelector<HTMLButtonElement>('[data-pause]');
if (pause && !reduced) {
  pause.hidden = false;
  pause.addEventListener('click', () => {
    state.paused = !state.paused;
    pause.setAttribute('aria-pressed', String(state.paused));
    pause.querySelector('span')!.textContent = state.paused
      ? 'Play motion'
      : 'Pause motion';
    root.classList.toggle('is-paused', state.paused);
  });
}

// ——— the 3D scene, after first paint ———
const canvas = document.querySelector<HTMLCanvasElement>('[data-ride]');
function hasWebGL(): boolean {
  try {
    const c = document.createElement('canvas');
    return !!(c.getContext('webgl2') || c.getContext('webgl'));
  } catch {
    return false;
  }
}
if (canvas && hasWebGL()) {
  const boot = () =>
    import('./scene')
      .then(({ startScene }) => startScene(canvas, state))
      .catch(() => {
        /* The CSS sky stays. */
      });
  const idle = (cb: () => void) =>
    'requestIdleCallback' in window
      ? window.requestIdleCallback(cb, { timeout: 1500 })
      : setTimeout(cb, 300);
  if (document.readyState === 'complete') idle(boot);
  else window.addEventListener('load', () => idle(boot), { once: true });
}

// ——— section moments ———
if (!reduced) {
  // Work: the cover opens like a window and drifts inside its frame.
  for (const frame of document.querySelectorAll<HTMLElement>('[data-cover]')) {
    const img = frame.querySelector('img');
    gsap.fromTo(
      frame,
      { clipPath: 'inset(6% 7% 6% 7% round 28px)' },
      {
        clipPath: 'inset(0% 0% 0% 0% round 20px)',
        ease: 'none',
        scrollTrigger: {
          trigger: frame,
          start: 'top 95%',
          end: 'top 35%',
          scrub: true,
        },
      },
    );
    if (img) {
      gsap.fromTo(
        img,
        { yPercent: -2, scale: 1.05 },
        {
          yPercent: 2,
          scale: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: frame,
            start: 'top bottom',
            end: 'bottom top',
            scrub: true,
          },
        },
      );
    }
    // Tilt toward the pointer.
    const card = frame.closest<HTMLElement>('[data-tilt]');
    if (card && window.matchMedia('(hover: hover)').matches) {
      const rx = gsap.quickTo(frame, 'rotationX', {
        duration: 0.6,
        ease: 'power3.out',
      });
      const ry = gsap.quickTo(frame, 'rotationY', {
        duration: 0.6,
        ease: 'power3.out',
      });
      gsap.set(frame, { transformPerspective: 1100 });
      card.addEventListener('pointermove', (e) => {
        const r = frame.getBoundingClientRect();
        ry(((e.clientX - r.left) / r.width - 0.5) * 8);
        rx(-((e.clientY - r.top) / r.height - 0.5) * 6);
      });
      card.addEventListener('pointerleave', () => {
        rx(0);
        ry(0);
      });
    }
  }

  // Big headings rise out of their line.
  for (const h of document.querySelectorAll<HTMLElement>('[data-rise]')) {
    gsap.from(h.children.length ? h.children : h, {
      yPercent: 110,
      duration: 1.1,
      ease: 'expo.out',
      stagger: 0.08,
      scrollTrigger: { trigger: h, start: 'top 88%', once: true },
    });
  }

  // Experience: rows slide in on a rule that draws itself.
  ScrollTrigger.batch('[data-row]', {
    start: 'top 88%',
    once: true,
    onEnter: (rows) => {
      gsap.from(rows, {
        x: -40,
        opacity: 0,
        duration: 1,
        ease: 'expo.out',
        stagger: 0.12,
      });
      gsap.from(
        rows.map((r) => r.querySelector('[data-rule]')),
        {
          scaleX: 0,
          transformOrigin: 'left',
          duration: 1.3,
          ease: 'expo.out',
          stagger: 0.12,
        },
      );
    },
  });

  // About: the words light up as you read them.
  for (const block of document.querySelectorAll<HTMLElement>('[data-read]')) {
    const words: HTMLElement[] = [];
    const walker = document.createTreeWalker(block, NodeFilter.SHOW_TEXT);
    const nodes: Text[] = [];
    while (walker.nextNode()) nodes.push(walker.currentNode as Text);
    for (const node of nodes) {
      const frag = document.createDocumentFragment();
      for (const part of node.textContent!.split(/(\s+)/)) {
        if (!part) continue;
        if (/^\s+$/.test(part)) {
          frag.append(part);
        } else {
          const span = document.createElement('span');
          span.className = 'word';
          span.textContent = part;
          words.push(span);
          frag.append(span);
        }
      }
      node.replaceWith(frag);
    }
    gsap.fromTo(
      words,
      { opacity: 0.4 },
      {
        opacity: 1,
        stagger: 0.1,
        ease: 'none',
        scrollTrigger: {
          trigger: block,
          start: 'top 80%',
          end: 'bottom 45%',
          scrub: true,
        },
      },
    );
  }

  // Tools: scroll speed pushes the rows apart like wind; at rest they settle flush.
  const drifts = [...document.querySelectorAll<HTMLElement>('[data-drift]')];
  if (drifts.length && lenis) {
    const setters = drifts.map((row) => gsap.quickSetter(row, 'x', 'px'));
    let push = 0;
    gsap.ticker.add(() => {
      const max = window.innerWidth < 760 ? 6 : 32;
      const target = Math.max(
        -max,
        Math.min(max, (lenis?.velocity ?? 0) * 1.4),
      );
      push += (target - push) * 0.08;
      if (Math.abs(push) < 0.05) push = 0;
      setters.forEach((set, i) => set(i % 2 ? push : -push));
    });
  }

  // Contact: the links arrive one after another.
  const contact = document.querySelectorAll('[data-contact] > *');
  if (contact.length) {
    gsap.from(contact, {
      yPercent: 60,
      opacity: 0,
      duration: 1.2,
      ease: 'expo.out',
      stagger: 0.1,
      scrollTrigger: {
        trigger: '[data-contact]',
        start: 'top 85%',
        once: true,
      },
    });
  }
}
