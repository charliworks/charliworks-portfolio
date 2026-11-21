// Interactive lanterns and capiz cards.
//
// Each lantern is a damped pendulum. Scrolling, a passing pointer and a tap
// push it; it swings and settles. The loop sleeps once every lantern is
// still. Capiz cards keep a warm spot under the pointer. Nothing runs with
// reduced motion, and the page reads the same without this script.

type Lantern = {
  el: HTMLElement;
  /** Swing angle in degrees and its velocity in degrees per second. */
  angle: number;
  speed: number;
  /** Bigger lanterns are heavier and move less. */
  mass: number;
};

const STIFFNESS = 38;
const DAMPING = 2.2;
const MAX_ANGLE = 28;
const REST = 0.02;

const reduced = window.matchMedia('(prefers-reduced-motion: reduce)');

function start() {
  if (reduced.matches) return;

  const lanterns: Lantern[] = [
    ...document.querySelectorAll<HTMLElement>('.parol'),
  ].map((el) => ({
    el,
    angle: 0,
    speed: 0,
    mass: Math.max(1, el.getBoundingClientRect().width / 40),
  }));

  document.documentElement.classList.add('lanterns-live');

  let frame = 0;
  let last = 0;

  const push = (l: Lantern, impulse: number) => {
    l.speed += impulse / l.mass;
    wake();
  };

  const step = (now: number) => {
    const dt = Math.min((now - last) / 1000, 1 / 30);
    last = now;
    let moving = false;
    for (const l of lanterns) {
      const accel = -STIFFNESS * l.angle - DAMPING * l.speed;
      l.speed += accel * dt;
      l.angle = Math.max(
        -MAX_ANGLE,
        Math.min(MAX_ANGLE, l.angle + l.speed * dt),
      );
      if (Math.abs(l.angle) > REST || Math.abs(l.speed) > REST) moving = true;
      else {
        l.angle = 0;
        l.speed = 0;
      }
      l.el.style.rotate = `${l.angle.toFixed(2)}deg`;
    }
    frame = moving ? requestAnimationFrame(step) : 0;
  };

  const wake = () => {
    if (frame) return;
    last = performance.now();
    frame = requestAnimationFrame(step);
  };

  const onScreen = (l: Lantern) => {
    const r = l.el.getBoundingClientRect();
    return r.bottom > 0 && r.top < window.innerHeight;
  };

  // Scrolling: the lanterns lag behind the page, like a sudden stop on a jeepney.
  let lastY = window.scrollY;
  window.addEventListener(
    'scroll',
    () => {
      const dy = window.scrollY - lastY;
      lastY = window.scrollY;
      const kick = Math.max(-60, Math.min(60, dy)) * 4;
      lanterns.forEach((l, i) => {
        if (onScreen(l)) push(l, kick * (i % 2 ? 0.8 : 1));
      });
    },
    { passive: true },
  );

  // A passing pointer: a breeze, stronger the closer and faster it moves.
  let lastX = 0;
  let lastT = 0;
  window.addEventListener(
    'pointermove',
    (e) => {
      if (e.pointerType !== 'mouse') return;
      const vx = lastT
        ? (e.clientX - lastX) / Math.max(1, e.timeStamp - lastT)
        : 0;
      lastX = e.clientX;
      lastT = e.timeStamp;
      for (const l of lanterns) {
        const star = l.el.querySelector('svg')?.getBoundingClientRect();
        if (!star) continue;
        const dx = e.clientX - (star.left + star.width / 2);
        const dyp = e.clientY - (star.top + star.height / 2);
        const dist = Math.hypot(dx, dyp);
        if (dist < 160) push(l, vx * 60 * (1 - dist / 160));
      }
    },
    { passive: true },
  );

  // A tap: a big swing, a flash and a few falling sparks.
  for (const l of lanterns) {
    l.el.querySelector('svg')?.addEventListener('pointerdown', (e) => {
      const side =
        e.offsetX < (e.currentTarget as SVGElement).clientWidth / 2 ? 1 : -1;
      push(l, 220 * side);
      l.el.classList.add('is-lit');
      window.setTimeout(() => l.el.classList.remove('is-lit'), 700);
      sparks(l.el);
    });
  }

  // Capiz cards: the warm spot follows the pointer.
  for (const card of document.querySelectorAll<HTMLElement>('.capiz')) {
    card.addEventListener('pointermove', (e) => {
      const r = card.getBoundingClientRect();
      card.style.setProperty('--mx', `${e.clientX - r.left}px`);
      card.style.setProperty('--my', `${e.clientY - r.top}px`);
    });
  }
}

function sparks(lantern: HTMLElement) {
  const star = lantern.querySelector('svg');
  if (!star) return;
  const r = star.getBoundingClientRect();
  for (let i = 0; i < 6; i++) {
    const s = document.createElement('span');
    s.className = 'spark-fall';
    s.setAttribute('aria-hidden', 'true');
    s.style.left = `${r.left + r.width / 2}px`;
    s.style.top = `${r.top + r.height * 0.55}px`;
    s.style.setProperty('--dx', `${(Math.random() - 0.5) * 120}px`);
    s.style.setProperty('--dy', `${60 + Math.random() * 90}px`);
    s.style.setProperty('--spin', `${(Math.random() - 0.5) * 360}deg`);
    s.style.animationDelay = `${i * 30}ms`;
    s.addEventListener('animationend', () => s.remove());
    document.body.append(s);
  }
}

start();
