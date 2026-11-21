// The parcel drive.
//
// Without this script (or with reduced motion) every parcel shows its
// delivered state. With it, each parcel starts at the first release and,
// when it scrolls into view, the line fills to the latest one while the
// steps light in turn and the status stamps Delivered. Hovering or focusing
// a release in the log moves the line's marker to that release's day.

const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const parcels = [...document.querySelectorAll<HTMLElement>('[data-parcel]')];

function arm() {
  const root = document.documentElement;
  // Jump to the start without animating backwards, then allow transitions.
  root.classList.add('drive', 'drive-arming');
  requestAnimationFrame(() =>
    requestAnimationFrame(() => root.classList.remove('drive-arming')),
  );

  const seen = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        const parcel = entry.target as HTMLElement;
        seen.unobserve(parcel);
        parcel.classList.add('is-driving');
        window.setTimeout(() => parcel.classList.add('is-settled'), 2600);
      }
    },
    { threshold: 0.3 },
  );
  parcels.forEach((p) => seen.observe(p));
}

function scrub() {
  for (const parcel of parcels) {
    const road = parcel.querySelector<HTMLElement>('[data-road]');
    const log = parcel.querySelector<HTMLElement>('.log');
    if (!road || !log) continue;

    const moveTo = (row: Element | null) => {
      const at = row?.getAttribute('data-at');
      if (at == null) return;
      parcel.classList.add('is-driving', 'is-settled');
      road.style.setProperty('--pos', at);
    };
    const reset = () => road.style.removeProperty('--pos');

    log.addEventListener('pointerover', (e) =>
      moveTo((e.target as Element).closest('[data-at]')),
    );
    log.addEventListener('focusin', (e) =>
      moveTo((e.target as Element).closest('[data-at]')),
    );
    log.addEventListener('pointerleave', reset);
    log.addEventListener('focusout', (e) => {
      if (!log.contains(e.relatedTarget as Node)) reset();
    });
  }
}

if (parcels.length > 0) {
  if (!reduced) arm();
  scrub();
}

// Clips: play only while on screen, never with reduced motion (the poster
// stays), and always with a working Pause button. A box may hold a wide clip
// and a phone cut; CSS shows one, and only the one on screen plays. The
// box's one button pauses both.
for (const box of document.querySelectorAll<HTMLElement>('[data-clip-box]')) {
  const videos = [...box.querySelectorAll<HTMLVideoElement>('[data-clip]')];
  const toggle = box.querySelector<HTMLButtonElement>('[data-clip-toggle]');
  if (videos.length === 0 || !toggle) continue;
  const label = toggle.querySelector('span');
  const visible = new Map(videos.map((v) => [v, false]));
  let paused = reduced;

  const render = () => {
    toggle.dataset.paused = String(paused);
    if (label) label.textContent = paused ? 'Play video' : 'Pause video';
    for (const video of videos) {
      if (!paused && visible.get(video)) {
        video.preload = 'auto';
        video.play().catch(() => {});
      } else {
        video.pause();
      }
    }
  };

  toggle.hidden = false;
  toggle.addEventListener('click', () => {
    paused = !paused;
    render();
  });
  const seen = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        visible.set(entry.target as HTMLVideoElement, entry.isIntersecting);
      }
      render();
    },
    { threshold: 0.25 },
  );
  videos.forEach((v) => seen.observe(v));
  render();
}
