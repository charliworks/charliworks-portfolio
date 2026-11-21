/**
 * The ride: a low-poly Philippine valley at golden hour, three.js.
 * Rice terraces step up both sides of a road, coconut palms and nipa huts
 * line it, Mayon stands at the end, and a rider on a motorbike leads the
 * camera. Scroll moves the camera along the road (state.progress) and the
 * time of day (state.phase). Loaded after first paint.
 */
import {
  AdditiveBlending,
  BackSide,
  BoxGeometry,
  BufferAttribute,
  BufferGeometry,
  CanvasTexture,
  CatmullRomCurve3,
  Color,
  ConeGeometry,
  CylinderGeometry,
  DoubleSide,
  DirectionalLight,
  Fog,
  Group,
  HemisphereLight,
  InstancedMesh,
  LatheGeometry,
  Mesh,
  MeshBasicMaterial,
  MeshLambertMaterial,
  Object3D,
  PerspectiveCamera,
  PlaneGeometry,
  Points,
  PointsMaterial,
  Scene,
  ShaderMaterial,
  SphereGeometry,
  SpotLight,
  TorusGeometry,
  Vector2,
  Vector3,
  WebGLRenderer,
  type BufferGeometry as Geo,
} from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { PHASES, type Phase } from './phases';

export type RideState = {
  /** 0–1 along this page's stretch of road. */
  progress: number;
  /** Fractional index into PHASES. */
  phase: number;
  /** Stops the scene's own motion (WCAG 2.2.2). */
  paused: boolean;
  /** prefers-reduced-motion: the camera holds still. */
  reduced: boolean;
  /** 0–1, from scroll speed. Bends the palms. */
  wind: number;
  /** Pointer, -1–1, for a small parallax. */
  pointer: Vector2;
  /** Where this page's stretch starts and ends on the road. */
  from: number;
  to: number;
};

// ——— helpers ———————————————————————————————————————————————

const rand = (() => {
  let s = 7;
  return () => {
    s = (s * 16807) % 2147483647;
    return (s - 1) / 2147483646;
  };
})();

function roadX(z: number): number {
  return 16 * Math.sin(z * 0.011) + 7 * Math.sin(z * 0.029 + 1.3);
}

/** Valley height: flat at the road, terraced hills rising away from it. */
function groundHeight(x: number, z: number): number {
  const d = Math.abs(x - roadX(z));
  const rise = Math.max(0, d - 7);
  const hills =
    rise * 0.45 +
    Math.sin(x * 0.045 + z * 0.02) * 4 +
    Math.sin(z * 0.06 - x * 0.03) * 2.5;
  const h = Math.max(0, hills) * Math.min(1, rise / 10);
  // Terrace steps: flat paddies with a short riser between them.
  const step = 4.5;
  const k = h / step;
  const f = k - Math.floor(k);
  // Gentle shelves: a smoothstep riser over most of each step, so no edge is
  // steeper than the mesh can draw. Colour bands carry the terrace lines.
  const r = Math.min(1, Math.max(0, (f - 0.25) / 0.75));
  return (Math.floor(k) + r * r * (3 - 2 * r)) * step;
}

function colorize(geo: Geo, hex: string): Geo {
  const c = new Color(hex);
  const n = geo.getAttribute('position').count;
  const arr = new Float32Array(n * 3);
  for (let i = 0; i < n; i++) {
    arr[i * 3] = c.r;
    arr[i * 3 + 1] = c.g;
    arr[i * 3 + 2] = c.b;
  }
  geo.setAttribute('color', new BufferAttribute(arr, 3));
  return geo;
}

function softDot(): CanvasTexture {
  const c = document.createElement('canvas');
  c.width = c.height = 64;
  const g = c.getContext('2d')!;
  const grad = g.createRadialGradient(32, 32, 0, 32, 32, 32);
  grad.addColorStop(0, 'rgba(255,255,255,1)');
  grad.addColorStop(0.35, 'rgba(255,255,255,0.55)');
  grad.addColorStop(1, 'rgba(255,255,255,0)');
  g.fillStyle = grad;
  g.fillRect(0, 0, 64, 64);
  return new CanvasTexture(c);
}

// ——— sky ———————————————————————————————————————————————————

const skyVertex = /* glsl */ `
  varying vec3 vDir;
  void main() {
    vDir = normalize(position);
    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
  }
`;

const skyFragment = /* glsl */ `
  uniform vec3 uTop;
  uniform vec3 uMid;
  uniform vec3 uHorizon;
  uniform vec3 uSunDir;
  uniform vec3 uSunColor;
  uniform float uNight;
  uniform float uTime;
  varying vec3 vDir;

  float hash(vec3 p) {
    p = fract(p * 0.3183099 + 0.1);
    p *= 17.0;
    return fract(p.x * p.y * p.z * (p.x + p.y + p.z));
  }

  void main() {
    vec3 d = normalize(vDir);
    float h = d.y;
    vec3 col = mix(uHorizon, uMid, smoothstep(0.0, 0.2, h));
    col = mix(col, uTop, smoothstep(0.16, 0.62, h));
    col = mix(col, uHorizon * 0.8, smoothstep(0.0, -0.2, h));

    float s = max(dot(d, uSunDir), 0.0);
    float day = 1.0 - uNight;
    col += uSunColor * pow(s, 9.0) * 0.42 * (0.4 + day);
    col += uSunColor * pow(s, 90.0) * 0.6;
    col = mix(col, uSunColor * 1.15, smoothstep(0.9985, 0.9992, s));

    // Stars: one possible star per cell on the dome, twinkling.
    vec3 p = d * 260.0;
    vec3 cell = floor(p);
    float r = hash(cell);
    float dist = length(fract(p) - 0.5);
    float star = step(0.985, r) * smoothstep(0.16, 0.0, dist);
    star *= 0.6 + 0.4 * sin(uTime * (1.0 + r * 3.0) + r * 40.0);
    col += vec3(1.0, 0.96, 0.88) * star * smoothstep(0.04, 0.3, h) * uNight;

    gl_FragColor = vec4(col, 1.0);
    #include <tonemapping_fragment>
    #include <colorspace_fragment>
  }
`;

// ——— the scene ——————————————————————————————————————————————

export function startScene(
  canvas: HTMLCanvasElement,
  state: RideState,
): () => void {
  const small = window.matchMedia('(max-width: 720px)').matches;
  const renderer = new WebGLRenderer({
    canvas,
    antialias: !small,
    alpha: false,
    powerPreference: 'high-performance',
  });
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, small ? 1.25 : 1.6));

  const scene = new Scene();
  const fog = new Fog('#fde1a8', 60, 760);
  scene.fog = fog;

  const camera = new PerspectiveCamera(58, 1, 0.5, 2400);

  // Road path: from the near valley toward the volcano.
  const roadPoints: Vector3[] = [];
  for (let z = 60; z >= -470; z -= 30) {
    roadPoints.push(new Vector3(roadX(z), 0, z));
  }
  const road = new CatmullRomCurve3(roadPoints);

  // Sky dome.
  const skyUniforms = {
    uTop: { value: new Color() },
    uMid: { value: new Color() },
    uHorizon: { value: new Color() },
    uSunDir: { value: new Vector3() },
    uSunColor: { value: new Color() },
    uNight: { value: 0 },
    uTime: { value: 0 },
  };
  const sky = new Mesh(
    new SphereGeometry(2000, 32, 16),
    new ShaderMaterial({
      uniforms: skyUniforms,
      vertexShader: skyVertex,
      fragmentShader: skyFragment,
      side: BackSide,
      depthWrite: false,
      fog: false,
    }),
  );
  scene.add(sky);

  // Lights.
  const hemi = new HemisphereLight('#ffd6a3', '#4d6a34', 1.2);
  scene.add(hemi);
  const sun = new DirectionalLight('#fff0c4', 2.4);
  scene.add(sun);
  scene.add(sun.target);

  // ——— valley ———
  // Fine enough that every terrace riser lands on its own row of faces.
  const segX = small ? 170 : 280;
  const segZ = small ? 220 : 320;
  const ground = new PlaneGeometry(640, 900, segX, segZ);
  ground.rotateX(-Math.PI / 2);
  ground.translate(0, 0, -330);
  const pos = ground.getAttribute('position');
  const colors = new Float32Array(pos.count * 3);
  const paddies = ['#7fae4f', '#5e9440', '#8cbb58', '#4f8338', '#9cc463'].map(
    (h) => new Color(h),
  );
  const riser = new Color('#4a4a26');
  // Flooded paddies hold a little of the sky.
  // Flooded paddies: a base mud-green, tinted live with the sky in the shader.
  const waterBase = new Color('#7d9a76');
  const waterFlags = new Float32Array(pos.count);
  const shoulder = new Color('#b89a68');
  for (let i = 0; i < pos.count; i++) {
    const x = pos.getX(i);
    const z = pos.getZ(i);
    const y = groundHeight(x, z);
    pos.setY(i, y);
    const d = Math.abs(x - roadX(z));
    let c: Color;
    if (d < 6.5) c = shoulder;
    else if (d < 30) {
      // Close to the camera the mesh is coarse on screen: plain paddy green,
      // with the terrace bands starting a little way up the slope.
      c = paddies[Math.abs(Math.floor(x * 0.05 + z * 0.03)) % 5];
    } else {
      const k = y / 4.5;
      // The terrace wall: the steep middle of each smoothstep riser.
      const fk = k - Math.floor(k);
      const onRiser = fk > 0.35 && fk < 0.7;
      const level = Math.floor(k);
      const flooded = !onRiser && level > 0 && level % 3 === 1;
      if (flooded) waterFlags[i] = 1;
      c = onRiser
        ? riser
        : flooded
          ? waterBase
          : paddies[Math.abs(Math.floor(k + x * 0.01)) % 5];
    }
    colors.set([c.r, c.g, c.b], i * 3);
  }
  ground.setAttribute('color', new BufferAttribute(colors, 3));
  ground.setAttribute('water', new BufferAttribute(waterFlags, 1));
  ground.computeVertexNormals();
  // The flooded paddies mirror the sky: their colour follows the time of day
  // and glows a little on its own, so they catch the sunset and the night.
  const waterTint = { value: new Color() };
  // Smooth shading: faceted shading turned the risers into teeth along the
  // mesh diagonals; smooth normals let each terrace read as a contour band.
  const groundMat = new MeshLambertMaterial({ vertexColors: true });
  groundMat.onBeforeCompile = (shader) => {
    shader.uniforms.uWaterTint = waterTint;
    shader.vertexShader = shader.vertexShader
      .replace(
        '#include <common>',
        '#include <common>\nattribute float water;\nvarying float vWater;',
      )
      .replace(
        '#include <begin_vertex>',
        '#include <begin_vertex>\nvWater = water;',
      );
    shader.fragmentShader = shader.fragmentShader
      .replace(
        '#include <common>',
        '#include <common>\nuniform vec3 uWaterTint;\nvarying float vWater;',
      )
      .replace(
        '#include <color_fragment>',
        '#include <color_fragment>\ndiffuseColor.rgb = mix(diffuseColor.rgb, uWaterTint, vWater * 0.75);',
      )
      .replace(
        '#include <emissivemap_fragment>',
        '#include <emissivemap_fragment>\ntotalEmissiveRadiance += uWaterTint * vWater * 0.6;',
      );
  };
  scene.add(new Mesh(ground, groundMat));

  // Road ribbon.
  {
    const samples = 400;
    const verts = new Float32Array((samples + 1) * 2 * 3);
    const idx: number[] = [];
    const up = new Vector3(0, 1, 0);
    for (let i = 0; i <= samples; i++) {
      const t = i / samples;
      const p = road.getPointAt(t);
      const tan = road.getTangentAt(t);
      const side = new Vector3().crossVectors(tan, up).normalize();
      const a = p.clone().addScaledVector(side, 3.2);
      const b = p.clone().addScaledVector(side, -3.2);
      verts.set([a.x, 0.06, a.z, b.x, 0.06, b.z], i * 6);
      if (i < samples) {
        const j = i * 2;
        idx.push(j, j + 1, j + 2, j + 1, j + 3, j + 2);
      }
    }
    const g = new BufferGeometry();
    g.setAttribute('position', new BufferAttribute(verts, 3));
    g.setIndex(idx);
    g.computeVertexNormals();
    scene.add(new Mesh(g, new MeshLambertMaterial({ color: '#6d5c4f' })));

    // Centre dashes.
    const dashes: Geo[] = [];
    for (let i = 0; i < 160; i++) {
      const t = i / 160;
      const p = road.getPointAt(t);
      const tan = road.getTangentAt(t);
      const dash = new BoxGeometry(0.22, 0.02, 1.6);
      dash.rotateY(Math.atan2(tan.x, tan.z));
      dash.translate(p.x, 0.09, p.z);
      dashes.push(dash);
    }
    scene.add(
      new Mesh(
        mergeGeometries(dashes),
        new MeshLambertMaterial({ color: '#f3e3b5' }),
      ),
    );
  }

  // ——— Mayon ———
  {
    const R = 260;
    const H = 210;
    const profile: Vector2[] = [];
    for (let i = 0; i <= 24; i++) {
      const r = (i / 24) * R;
      profile.push(new Vector2(Math.max(r, 6), H * Math.pow(1 - r / R, 1.75)));
    }
    profile.unshift(new Vector2(0, H - 4));
    const g = new LatheGeometry(profile.reverse(), 48);
    const p = g.getAttribute('position');
    const c = new Float32Array(p.count * 3);
    const base = new Color('#56705a');
    const slate = new Color('#6a7996');
    const ash = new Color('#e8ddd8');
    for (let i = 0; i < p.count; i++) {
      const t = p.getY(i) / H;
      const col =
        t < 0.25
          ? base.clone().lerp(slate, t / 0.25)
          : slate.clone().lerp(ash, Math.pow((t - 0.25) / 0.75, 2.2));
      c.set([col.r, col.g, col.b], i * 3);
    }
    g.setAttribute('color', new BufferAttribute(c, 3));
    g.computeVertexNormals();
    const mayon = new Mesh(
      g,
      new MeshLambertMaterial({ vertexColors: true, flatShading: true }),
    );
    mayon.position.set(70, -6, -760);
    scene.add(mayon);
  }

  // Smoke from the crater.
  const dot = softDot();
  const smokeCount = 60;
  const smokeGeo = new BufferGeometry();
  const smokePos = new Float32Array(smokeCount * 3);
  const smokeSeed = new Float32Array(smokeCount);
  const smokeJitter = new Float32Array(smokeCount * 2);
  for (let i = 0; i < smokeCount; i++) {
    smokeSeed[i] = rand();
    smokeJitter[i * 2] = (rand() - 0.5) * 2;
    smokeJitter[i * 2 + 1] = (rand() - 0.5) * 2;
  }
  smokeGeo.setAttribute('position', new BufferAttribute(smokePos, 3));
  const smokeMat = new PointsMaterial({
    map: dot,
    size: 60,
    color: '#f3e6dc',
    transparent: true,
    opacity: 0.22,
    depthWrite: false,
  });
  scene.add(new Points(smokeGeo, smokeMat));

  // ——— palms ———
  const palmGeo = (() => {
    const parts: Geo[] = [];
    const trunk = new CylinderGeometry(0.22, 0.42, 9, 6, 6, true);
    const tp = trunk.getAttribute('position');
    for (let i = 0; i < tp.count; i++) {
      const y = tp.getY(i) + 4.5;
      tp.setX(i, tp.getX(i) + Math.pow(y / 9, 2) * 1.4);
    }
    trunk.translate(0, 4.5, 0);
    trunk.computeVertexNormals();
    parts.push(colorize(trunk.toNonIndexed(), '#6e4f34'));
    for (let k = 0; k < 8; k++) {
      const frond = new PlaneGeometry(4.6, 0.9, 6, 1);
      const fp = frond.getAttribute('position');
      for (let i = 0; i < fp.count; i++) {
        const x = fp.getX(i) + 2.3;
        fp.setX(i, x);
        fp.setZ(i, fp.getY(i));
        fp.setY(i, -Math.pow(x / 4.6, 2) * 2.2 + x * 0.25);
      }
      frond.rotateY((k / 8) * Math.PI * 2 + rand() * 0.3);
      frond.translate(1.4, 9, 0);
      frond.computeVertexNormals();
      parts.push(colorize(frond.toNonIndexed(), k % 2 ? '#3e6b30' : '#4c7d36'));
    }
    return mergeGeometries(parts);
  })();
  const palmCount = small ? 70 : 120;
  const palms = new InstancedMesh(
    palmGeo,
    new MeshLambertMaterial({ vertexColors: true, side: DoubleSide }),
    palmCount,
  );
  const palmData: { x: number; z: number; s: number; r: number; ph: number }[] =
    [];
  for (let i = 0; i < palmCount; i++) {
    const z = 50 - rand() * 560;
    const side = rand() < 0.5 ? -1 : 1;
    // Keep the opening view clear around the road.
    const near = z > -60 ? 26 : 8;
    const x = roadX(z) + side * (near + Math.pow(rand(), 1.6) * 60);
    palmData.push({
      x,
      z,
      s: 0.75 + rand() * 0.6,
      r: rand() * Math.PI * 2,
      ph: rand() * 10,
    });
  }
  scene.add(palms);

  // Kilometre posts on the shoulder, like the ones on every national road.
  // Posts near the camera hide, so none fills the frame beside the copy.
  const postGeo = (() => {
    const body = colorize(new BoxGeometry(0.4, 1, 0.22), '#f6f2ea');
    body.translate(0, 0.5, 0);
    const cap = colorize(new BoxGeometry(0.42, 0.22, 0.24), '#d23a3f');
    cap.translate(0, 1.1, 0);
    return mergeGeometries([body.toNonIndexed(), cap.toNonIndexed()]);
  })();
  const postCount = 30;
  const posts = new InstancedMesh(
    postGeo,
    new MeshLambertMaterial({ vertexColors: true, emissive: '#4a4440' }),
    postCount,
  );
  const postAt: { pos: Vector3; rot: number }[] = [];
  for (let i = 1; i <= postCount; i++) {
    const t = i / (postCount + 1);
    const p = road.getPointAt(t);
    const tan = road.getTangentAt(t);
    const side = new Vector3(-tan.z, 0, tan.x).normalize();
    postAt.push({
      pos: new Vector3(p.x + side.x * 5, 0, p.z + side.z * 5),
      rot: Math.atan2(tan.x, tan.z),
    });
  }
  scene.add(posts);

  // Nipa huts on the paddies.
  {
    const huts: Geo[] = [];
    for (let i = 0; i < 14; i++) {
      const z = -60 - rand() * 420;
      const side = rand() < 0.5 ? -1 : 1;
      const x = roadX(z) + side * (14 + rand() * 40);
      const y = groundHeight(x, z);
      const rot = rand() * Math.PI;
      const body = colorize(new BoxGeometry(3.4, 2.2, 2.8), '#c9a46a');
      body.translate(0, 2.2, 0);
      const roof = colorize(new ConeGeometry(3.1, 2.4, 4), '#8a6a3c');
      roof.rotateY(Math.PI / 4);
      roof.translate(0, 4.4, 0);
      const stilts = colorize(new BoxGeometry(3.2, 1.1, 2.6), '#5c4430');
      stilts.translate(0, 0.55, 0);
      for (const g of [body, roof, stilts]) {
        g.rotateY(rot);
        g.translate(x, y, z);
        huts.push(g.toNonIndexed());
      }
    }
    scene.add(
      new Mesh(
        mergeGeometries(huts),
        new MeshLambertMaterial({ vertexColors: true, flatShading: true }),
      ),
    );
  }

  // ——— rider ———
  const bike = new Group();
  {
    const dark = new MeshLambertMaterial({ color: '#2d2622' });
    const wheelGeo = new TorusGeometry(0.36, 0.11, 6, 14);
    const w1 = new Mesh(wheelGeo, dark);
    w1.position.set(0, 0.42, 0.62);
    w1.rotation.y = Math.PI / 2;
    const w2 = w1.clone();
    w2.position.z = -0.62;
    const body = new Mesh(
      new BoxGeometry(0.4, 0.42, 1.3),
      new MeshLambertMaterial({ color: '#c8553a' }),
    );
    body.position.set(0, 0.72, 0);
    const rider = new Mesh(
      new BoxGeometry(0.46, 0.8, 0.42),
      new MeshLambertMaterial({ color: '#2f5d8a' }),
    );
    rider.position.set(0, 1.3, 0.08);
    rider.rotation.x = -0.25;
    const helmet = new Mesh(
      new SphereGeometry(0.24, 10, 8),
      new MeshLambertMaterial({ color: '#f2c14e' }),
    );
    helmet.position.set(0, 1.86, -0.05);
    const tail = new Mesh(
      new SphereGeometry(0.07, 6, 4),
      new MeshBasicMaterial({ color: '#ff3b4f' }),
    );
    tail.position.set(0, 0.85, 0.68);
    bike.add(w1, w2, body, rider, helmet, tail);
  }
  const headlight = new SpotLight('#ffe9a6', 0, 70, 0.42, 0.6, 1.2);
  headlight.position.set(0, 0.9, -0.6);
  bike.add(headlight);
  bike.add(headlight.target);
  headlight.target.position.set(0, 0, -20);
  const beam = new Mesh(
    new ConeGeometry(2.6, 14, 18, 1, true),
    new MeshBasicMaterial({
      color: '#ffe37a',
      transparent: true,
      opacity: 0,
      blending: AdditiveBlending,
      depthWrite: false,
    }),
  );
  beam.rotation.x = -Math.PI / 2;
  beam.position.set(0, 0.6, -7.6);
  bike.add(beam);
  scene.add(bike);

  // Fireflies.
  const flyCount = small ? 140 : 260;
  const flyGeo = new BufferGeometry();
  const flyPos = new Float32Array(flyCount * 3);
  const flyBase = new Float32Array(flyCount * 3);
  for (let i = 0; i < flyCount; i++) {
    const z = 40 - rand() * 520;
    const x = roadX(z) + (rand() - 0.5) * 70;
    flyBase.set([x, groundHeight(x, z) + 0.8 + rand() * 4, z], i * 3);
  }
  flyGeo.setAttribute('position', new BufferAttribute(flyPos, 3));
  const flyMat = new PointsMaterial({
    map: dot,
    size: 1.1,
    color: '#ffe066',
    transparent: true,
    opacity: 0,
    blending: AdditiveBlending,
    depthWrite: false,
  });
  scene.add(new Points(flyGeo, flyMat));

  // ——— update ———
  const tmp = new Object3D();
  const look = new Vector3();
  const camPos = new Vector3();
  const lerped = {
    progress: state.progress,
    phase: state.phase,
    px: 0,
    py: 0,
    wind: 0,
  };
  const ca = new Color();
  const cb = new Color();

  function phaseMix(key: keyof Phase, out: Color, p: number): Color {
    const i = Math.min(Math.floor(p), PHASES.length - 2);
    const t = p - i;
    ca.set(PHASES[i][key] as string);
    cb.set(PHASES[i + 1][key] as string);
    return out.copy(ca).lerp(cb, t);
  }

  function phaseNum(key: keyof Phase, p: number): number {
    const i = Math.min(Math.floor(p), PHASES.length - 2);
    const t = p - i;
    return (
      (PHASES[i][key] as number) +
      ((PHASES[i + 1][key] as number) - (PHASES[i][key] as number)) * t
    );
  }

  function applyPhase(p: number) {
    p = Math.min(Math.max(p, 0), PHASES.length - 1);
    phaseMix('top', skyUniforms.uTop.value, p);
    phaseMix('mid', skyUniforms.uMid.value, p);
    phaseMix('horizon', skyUniforms.uHorizon.value, p);
    phaseMix('sun', skyUniforms.uSunColor.value, p);
    fog.color
      .copy(skyUniforms.uHorizon.value)
      .lerp(skyUniforms.uMid.value, 0.25);
    waterTint.value
      .copy(skyUniforms.uHorizon.value)
      .lerp(skyUniforms.uMid.value, 0.4);
    const night = phaseNum('night', p);
    skyUniforms.uNight.value = night;
    const elev = phaseNum('sunElevation', p);
    // The sun sets just right of Mayon.
    const sunDir = new Vector3(
      0.32,
      Math.sin(Math.max(elev, -0.2)),
      -1,
    ).normalize();
    skyUniforms.uSunDir.value.copy(sunDir);
    sun.color.copy(skyUniforms.uSunColor.value);
    sun.intensity = phaseNum('sunIntensity', p);
    phaseMix('hemiSky', hemi.color, p);
    phaseMix('hemiGround', hemi.groundColor, p);
    hemi.intensity = phaseNum('hemiIntensity', p);
    headlight.intensity = night * 60;
    (beam.material as MeshBasicMaterial).opacity = night * 0.12;
    flyMat.opacity = Math.max(0, night - 0.3) * 1.3;
    smokeMat.opacity = 0.22 * (1 - night * 0.6);
    return sunDir;
  }

  // Phones resize the viewport whenever the address bar shows or hides.
  // Following that would make the camera jump mid-scroll, so on touch
  // screens only a width change or a large height change resizes.
  const coarse = window.matchMedia('(pointer: coarse)').matches;
  let sizeW = 0;
  let sizeH = 0;
  let dirty = true;

  function resize() {
    const w = window.innerWidth;
    const h = window.innerHeight;
    if (coarse && w === sizeW && Math.abs(h - sizeH) < 160) return;
    sizeW = w;
    sizeH = h;
    dirty = true;
    renderer.setSize(w, h, false);
    camera.aspect = w / h;
    camera.fov = w < h ? 68 : 56;
    camera.updateProjectionMatrix();
  }
  resize();
  window.addEventListener('resize', resize);

  let time = 0;
  let last = performance.now();
  let raf = 0;
  let firstFrame = true;
  let running = true;
  // Frame-time budget: a phone that cannot hold ~40fps drops to 1x pixels.
  let slowFrames = 0;
  let sampled = 0;
  let lowered = false;

  function frame(now: number) {
    raf = requestAnimationFrame(frame);
    const rawDt = (now - last) / 1000;
    const dt = Math.min(rawDt, 0.05);
    last = now;
    const still = state.paused || state.reduced;
    if (!still) time += dt;

    if (!lowered && !still && sampled < 180) {
      sampled++;
      if (rawDt > 1 / 40) slowFrames++;
      if (sampled === 180 && slowFrames > 90 && renderer.getPixelRatio() > 1) {
        renderer.setPixelRatio(1);
        lowered = true;
        dirty = true;
      }
    }

    // Paused or reduced motion: draw only when the view actually changes.
    if (
      still &&
      !dirty &&
      Math.abs(state.progress - lerped.progress) < 1e-4 &&
      Math.abs(state.phase - lerped.phase) < 1e-4 &&
      Math.abs((state.reduced ? 0 : state.pointer.x) - lerped.px) < 1e-3 &&
      Math.abs((state.reduced ? 0 : state.pointer.y) - lerped.py) < 1e-3
    ) {
      return;
    }
    dirty = false;

    // Easing uses real elapsed time (up to 0.25s), so a slow device settles
    // the camera as quickly as a fast one instead of crawling.
    const k = state.reduced ? 1 : 1 - Math.pow(0.0015, Math.min(rawDt, 0.25));
    lerped.progress += (state.progress - lerped.progress) * k;
    lerped.phase += (state.phase - lerped.phase) * k;
    lerped.px += ((state.reduced ? 0 : state.pointer.x) - lerped.px) * k * 0.6;
    lerped.py += ((state.reduced ? 0 : state.pointer.y) - lerped.py) * k * 0.6;
    lerped.wind += (state.wind - lerped.wind) * k * 0.5;

    const sunDir = applyPhase(lerped.phase);
    sun.position.copy(camera.position).addScaledVector(sunDir, 300);
    sun.target.position.copy(camera.position);
    skyUniforms.uTime.value = time;

    // Camera rides behind the bike. Reduced motion keeps the first view.
    const span = state.reduced ? 0 : lerped.progress;
    const u = Math.min(state.from + (state.to - state.from) * span, 0.9);
    const bikeU = Math.min(u + 0.03, 0.97);
    road.getPointAt(u, camPos);
    camera.position.set(
      camPos.x + lerped.px * 1.6,
      3.4 + lerped.py * 0.8 + Math.sin(time * 1.3) * 0.04,
      camPos.z,
    );
    road.getPointAt(Math.min(u + 0.07, 1), look);
    // At the opening the camera looks up, so the sky sits behind the copy.
    const lift = state.reduced ? 7 : Math.max(0, 1 - lerped.phase) * 7;
    look.y = 3.2 + lift + lerped.py * 0.6;
    camera.lookAt(look);
    sky.position.copy(camera.position);

    const bp = road.getPointAt(bikeU);
    const bt = road.getTangentAt(bikeU);
    bike.position.set(
      bp.x + 1.4,
      0.08 + Math.abs(Math.sin(time * 9)) * 0.03,
      bp.z,
    );
    bike.rotation.y = Math.atan2(-bt.x, -bt.z);
    bike.rotation.z = Math.sin(time * 0.8) * 0.03;

    // Palms sway; scroll speed is the wind.
    const gust = 0.04 + lerped.wind * 0.16;
    for (let i = 0; i < palmCount; i++) {
      const d = palmData[i];
      tmp.position.set(d.x, groundHeight(d.x, d.z) - 0.2, d.z);
      tmp.rotation.set(0, d.r, Math.sin(time * 1.6 + d.ph) * gust + gust * 0.6);
      tmp.scale.setScalar(d.s);
      tmp.updateMatrix();
      palms.setMatrixAt(i, tmp.matrix);
    }
    palms.instanceMatrix.needsUpdate = true;

    for (let i = 0; i < postCount; i++) {
      const { pos, rot } = postAt[i];
      const d = pos.distanceTo(camera.position);
      tmp.position.copy(pos);
      tmp.rotation.set(0, rot, 0);
      tmp.scale.setScalar(d < 26 ? 0.0001 : 1);
      tmp.updateMatrix();
      posts.setMatrixAt(i, tmp.matrix);
    }
    posts.instanceMatrix.needsUpdate = true;

    // Smoke rises from the crater and drifts with the wind.
    for (let i = 0; i < smokeCount; i++) {
      const s = smokeSeed[i];
      const a = (time * 0.04 + s) % 1;
      const spread = 4 + a * 40;
      smokePos.set(
        [
          70 + a * 110 + smokeJitter[i * 2] * spread,
          200 + a * 130 + smokeJitter[i * 2 + 1] * spread * 0.4,
          -760 + smokeJitter[i * 2 + 1] * spread,
        ],
        i * 3,
      );
    }
    smokeGeo.attributes.position.needsUpdate = true;

    for (let i = 0; i < flyCount; i++) {
      const j = i * 3;
      flyPos[j] = flyBase[j] + Math.sin(time * 0.7 + i) * 1.2;
      flyPos[j + 1] = flyBase[j + 1] + Math.sin(time * 1.1 + i * 2.3) * 0.6;
      flyPos[j + 2] = flyBase[j + 2] + Math.cos(time * 0.5 + i) * 1.2;
    }
    flyGeo.attributes.position.needsUpdate = true;

    renderer.render(scene, camera);
    if (firstFrame) {
      firstFrame = false;
      canvas.dataset.ready = '';
    }
  }
  raf = requestAnimationFrame(frame);

  function onVisibility() {
    if (document.hidden && running) {
      cancelAnimationFrame(raf);
      running = false;
    } else if (!document.hidden && !running) {
      running = true;
      last = performance.now();
      raf = requestAnimationFrame(frame);
    }
  }
  document.addEventListener('visibilitychange', onVisibility);

  // If the GPU drops the context, hand the page back to the CSS sky.
  function onContextLost(e: Event) {
    e.preventDefault();
    cancelAnimationFrame(raf);
    running = false;
    delete canvas.dataset.ready;
    document.removeEventListener('visibilitychange', onVisibility);
  }
  canvas.addEventListener('webglcontextlost', onContextLost);

  return () => {
    canvas.removeEventListener('webglcontextlost', onContextLost);
    cancelAnimationFrame(raf);
    window.removeEventListener('resize', resize);
    document.removeEventListener('visibilitychange', onVisibility);
    renderer.dispose();
  };
}
