typeof CanvasRenderingContext2D < "u" &&
  !CanvasRenderingContext2D.prototype.roundRect &&
  (CanvasRenderingContext2D.prototype.roundRect = function (x, y, w, h, r) {
    if (typeof r > "u") r = 0;
    if (typeof r == "number") r = [r, r, r, r];
    let [tl, tr, br, bl] = r;
    this.moveTo(x + tl, y);
    this.lineTo(x + w - tr, y);
    this.quadraticCurveTo(x + w, y, x + w, y + tr);
    this.lineTo(x + w, y + h - br);
    this.quadraticCurveTo(x + w, y + h, x + w - br, y + h);
    this.lineTo(x + bl, y + h);
    this.quadraticCurveTo(x, y + h, x, y + h - bl);
    this.lineTo(x, y + tl);
    this.quadraticCurveTo(x, y, x + tl, y);
    this.closePath();
    return this;
  });
import { n as e, r as t, t as n } from "./index-D5qtuHJz.js";
var r = (...e) =>
    e
      .filter((e, t, n) => !!e && e.trim() !== `` && n.indexOf(e) === t)
      .join(` `)
      .trim(),
  i = (e) => e.replace(/([a-z0-9])([A-Z])/g, `$1-$2`).toLowerCase(),
  a = (e) =>
    e.replace(/^([A-Z])|[\s-_]+(\w)/g, (e, t, n) =>
      n ? n.toUpperCase() : t.toLowerCase(),
    ),
  o = (e) => {
    let t = a(e);
    return t.charAt(0).toUpperCase() + t.slice(1);
  },
  s = {
    xmlns: `http://www.w3.org/2000/svg`,
    width: 24,
    height: 24,
    viewBox: `0 0 24 24`,
    fill: `none`,
    stroke: `currentColor`,
    strokeWidth: 2,
    strokeLinecap: `round`,
    strokeLinejoin: `round`,
  },
  c = (e) => {
    for (let t in e)
      if (t.startsWith(`aria-`) || t === `role` || t === `title`) return !0;
    return !1;
  },
  l = t(e()),
  u = (0, l.forwardRef)(
    (
      {
        color: e = `currentColor`,
        size: t = 24,
        strokeWidth: n = 2,
        absoluteStrokeWidth: i,
        className: a = ``,
        children: o,
        iconNode: u,
        ...d
      },
      f,
    ) =>
      (0, l.createElement)(
        `svg`,
        {
          ref: f,
          ...s,
          width: t,
          height: t,
          stroke: e,
          strokeWidth: i ? (Number(n) * 24) / Number(t) : n,
          className: r(`lucide`, a),
          ...(!o && !c(d) && { "aria-hidden": `true` }),
          ...d,
        },
        [
          ...u.map(([e, t]) => (0, l.createElement)(e, t)),
          ...(Array.isArray(o) ? o : [o]),
        ],
      ),
  ),
  d = (e, t) => {
    let n = (0, l.forwardRef)(({ className: n, ...a }, s) =>
      (0, l.createElement)(u, {
        ref: s,
        iconNode: t,
        className: r(`lucide-${i(o(e))}`, `lucide-${e}`, n),
        ...a,
      }),
    );
    return ((n.displayName = o(e)), n);
  },
  f = d(`car`, [
    [
      `path`,
      {
        d: `M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2`,
        key: `5owen`,
      },
    ],
    [`circle`, { cx: `7`, cy: `17`, r: `2`, key: `u2ysq9` }],
    [`path`, { d: `M9 17h6`, key: `r8uit2` }],
    [`circle`, { cx: `17`, cy: `17`, r: `2`, key: `axvx0g` }],
  ]),
  p = d(`coins`, [
    [`path`, { d: `M13.744 17.736a6 6 0 1 1-7.48-7.48`, key: `bq4yh3` }],
    [`path`, { d: `M15 6h1v4`, key: `11y1tn` }],
    [`path`, { d: `m6.134 14.768.866-.5 2 3.464`, key: `17snzx` }],
    [`circle`, { cx: `16`, cy: `8`, r: `6`, key: `14bfc9` }],
  ]),
  m = d(`fuel`, [
    [
      `path`,
      {
        d: `M14 13h2a2 2 0 0 1 2 2v2a2 2 0 0 0 4 0v-6.998a2 2 0 0 0-.59-1.42L18 5`,
        key: `1wtuz0`,
      },
    ],
    [`path`, { d: `M14 21V5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v16`, key: `e09ifn` }],
    [`path`, { d: `M2 21h13`, key: `1x0fut` }],
    [`path`, { d: `M3 9h11`, key: `1p7c0w` }],
  ]),
  h = d(`house`, [
    [
      `path`,
      { d: `M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8`, key: `5wwlr5` },
    ],
    [
      `path`,
      {
        d: `M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z`,
        key: `r6nss1`,
      },
    ],
  ]),
  g = d(`lock`, [
    [
      `rect`,
      {
        width: `18`,
        height: `11`,
        x: `3`,
        y: `11`,
        rx: `2`,
        ry: `2`,
        key: `1w4ew1`,
      },
    ],
    [`path`, { d: `M7 11V7a5 5 0 0 1 10 0v4`, key: `fwvmzm` }],
  ]),
  _ = d(`map`, [
    [
      `path`,
      {
        d: `M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z`,
        key: `169xi5`,
      },
    ],
    [`path`, { d: `M15 5.764v15`, key: `1pn4in` }],
    [`path`, { d: `M9 3.236v15`, key: `1uimfh` }],
  ]),
  v = d(`music`, [
    [`path`, { d: `M9 18V5l12-2v13`, key: `1jmyc2` }],
    [`circle`, { cx: `6`, cy: `18`, r: `3`, key: `fqmcym` }],
    [`circle`, { cx: `18`, cy: `16`, r: `3`, key: `1hluhg` }],
  ]),
  y = d(`pause`, [
    [
      `rect`,
      { x: `14`, y: `3`, width: `5`, height: `18`, rx: `1`, key: `kaeet6` },
    ],
    [
      `rect`,
      { x: `5`, y: `3`, width: `5`, height: `18`, rx: `1`, key: `1wsw3u` },
    ],
  ]),
  b = d(`play`, [
    [
      `path`,
      {
        d: `M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z`,
        key: `10ikf1`,
      },
    ],
  ]),
  x = d(`rotate-ccw`, [
    [
      `path`,
      { d: `M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8`, key: `1357e3` },
    ],
    [`path`, { d: `M3 3v5h5`, key: `1xhq8a` }],
  ]),
  S = d(`settings`, [
    [
      `path`,
      {
        d: `M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915`,
        key: `1i5ecw`,
      },
    ],
    [`circle`, { cx: `12`, cy: `12`, r: `3`, key: `1v7zrd` }],
  ]),
  C = d(`volume-2`, [
    [
      `path`,
      {
        d: `M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z`,
        key: `uqj9uw`,
      },
    ],
    [`path`, { d: `M16 9a5 5 0 0 1 0 6`, key: `1q6k2b` }],
    [`path`, { d: `M19.364 18.364a9 9 0 0 0 0-12.728`, key: `ijwkga` }],
  ]),
  w = d(`wrench`, [
    [
      `path`,
      {
        d: `M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z`,
        key: `1ngwbx`,
      },
    ],
  ]),
  T = [
    {
      id: `beetle`,
      name: `فولکس ۵۳`,
      price: 0,
      kind: `beetle`,
      body: [
        [2.489, -0.306],
        [2.206, 0.091],
        [1.827, 0.336],
        [0.194, 0.932],
        [-0.394, 0.974],
        [-1.628, 0.266],
        [-2.09, -0.218],
        [-2.111, -0.306],
      ],
      head: { x: -0.1, y: 0.8, r: 0.3 },
      wheelR: 0.453,
      wheelRFront: 0.453,
      com: [0.22, -0.38],
      wheelX: [-1.296, 1.296],
      wheelY: -0.45,
      density: 0.628,
      wheelDensity: 1,
      torque: 36,
      maxSpeed: 18,
      hz: 4,
      damping: 0.6,
      friction: 0.95,
      fuel: 36,
      color: `#d9dde3`,
      accent: `#ffffff`,
      rim: `#d9dde3`,
      sprite: { x: -2.223, y: 1.025, w: 4.803, h: 1.978 },
    },
    {
      id: `yellowjeep`,
      name: `جیپ آفرود زرد`,
      price: 12e3,
      kind: `yellowjeep`,
      body: [
        [2.061, -0.309],
        [2.013, -0.003],
        [1.543, 0.284],
        [0.436, 0.767],
        [-1.281, 0.767],
        [-1.94, 0.48],
        [-2.143, 0.046],
        [-2.056, -0.309],
      ],
      head: { x: -0.2, y: 0.59, r: 0.3 },
      wheelR: 0.482,
      wheelRFront: 0.482,
      com: [0.22, -0.38],
      wheelX: [-1.168, 1.168],
      wheelY: -0.45,
      density: 0.811,
      wheelDensity: 1,
      torque: 50,
      maxSpeed: 18,
      hz: 3.8,
      damping: 0.6,
      friction: 1.12,
      fuel: 40,
      color: `#d9dde3`,
      accent: `#ffffff`,
      rim: `#d9dde3`,
      sprite: { x: -2.212, y: 0.806, w: 4.402, h: 1.723 },
    },
    {
      id: `police`,
      name: `ماشین پلیس`,
      price: 16e3,
      kind: `police`,
      body: [
        [2.61, -0.309],
        [2.545, 0.067],
        [2.328, 0.2],
        [0.149, 0.691],
        [-0.265, 0.719],
        [-2.073, 0.445],
        [-2.08, 0.396],
        [-2.059, -0.309],
      ],
      head: { x: -0.1, y: 0.52, r: 0.3 },
      wheelR: 0.453,
      wheelRFront: 0.453,
      com: [0.22, -0.38],
      wheelX: [-1.332, 1.332],
      wheelY: -0.45,
      density: 0.767,
      wheelDensity: 1,
      torque: 56,
      maxSpeed: 25,
      hz: 4.6,
      damping: 0.65,
      friction: 0.95,
      fuel: 32,
      color: `#d9dde3`,
      accent: `#ffffff`,
      rim: `#d9dde3`,
      sprite: { x: -2.201, y: 0.74, w: 4.913, h: 1.752 },
    },
    {
      id: `redsport`,
      name: `اسپرت آفرود قرمز`,
      price: 18e3,
      kind: `redsport`,
      body: [
        [-1.799, 0.626],
        [-1.813, -0.201],
        [-1.792, -0.31],
        [2.318, -0.31],
        [2.258, -0.054],
        [0.619, 0.612],
        [0.436, 0.661],
        [-1.771, 0.654],
      ],
      head: { x: -0.1, y: 0.37, r: 0.3 },
      wheelR: 0.467,
      wheelRFront: 0.467,
      com: [0.22, -0.38],
      wheelX: [-1.124, 1.124],
      wheelY: -0.45,
      density: 0.846,
      wheelDensity: 1,
      torque: 56,
      maxSpeed: 26,
      hz: 4.6,
      damping: 0.65,
      friction: 1,
      fuel: 32,
      color: `#e5302a`,
      accent: `#ffffff`,
      rim: `#e5302a`,
      sprite: { x: -1.891, y: 0.682, w: 4.322, h: 1.613 },
    },
    {
      id: `muscle`,
      name: `ماسل‌کار سوپرشارژ`,
      price: 22e3,
      kind: `muscle`,
      body: [
        [1.635, 0.491],
        [1.537, 0.505],
        [-0.194, 0.533],
        [-2.023, 0.463],
        [-1.995, -0.21],
        [-1.948, -0.312],
        [2.312, -0.312],
        [2.259, 0.014],
      ],
      head: { x: -0.1, y: 0.33, r: 0.3 },
      wheelR: 0.438,
      wheelRFront: 0.438,
      com: [0.22, -0.38],
      wheelX: [-1.292, 1.292],
      wheelY: -0.45,
      density: 0.925,
      wheelDensity: 1,
      torque: 70,
      maxSpeed: 28,
      hz: 4.8,
      damping: 0.7,
      friction: 0.95,
      fuel: 30,
      color: `#d9dde3`,
      accent: `#ffffff`,
      rim: `#d9dde3`,
      sprite: { x: -2.139, y: 0.55, w: 4.555, h: 1.46 },
    },
    {
      id: `firetruck`,
      name: `ماشین آتش‌نشانی`,
      price: 28e3,
      kind: `firetruck`,
      body: [
        [2.425, -0.304],
        [2.294, 0.064],
        [1.902, 0.611],
        [1.467, 0.758],
        [-2.044, 0.744],
        [-2.31, 0.337],
        [-2.373, -0.104],
        [-2.287, -0.304],
      ],
      head: { x: 1.45, y: 0.56, r: 0.3 },
      wheelR: 0.423,
      wheelRFront: 0.423,
      com: [0.22, -0.38],
      wheelX: [-1.361, 1.361],
      wheelY: -0.45,
      density: 0.989,
      wheelDensity: 1,
      torque: 86,
      maxSpeed: 15,
      hz: 3.6,
      damping: 0.6,
      friction: 1.05,
      fuel: 55,
      color: `#d9dde3`,
      accent: `#ffffff`,
      rim: `#d9dde3`,
      sprite: { x: -2.464, y: 0.776, w: 5.015, h: 1.679 },
    },
    {
      id: `bigfoot`,
      name: `مانستر تراک سبز`,
      price: 35e3,
      kind: `bigfoot`,
      body: [
        [2.259, -0.307],
        [2.397, 0.128],
        [2.145, 0.464],
        [0.379, 0.891],
        [0.008, 0.933],
        [-1.835, 0.576],
        [-1.997, 0.057],
        [-1.705, -0.307],
      ],
      head: { x: 0.1, y: 0.74, r: 0.3 },
      wheelR: 0.606,
      wheelRFront: 0.606,
      com: [0.22, -0.38],
      wheelX: [-1.402, 1.402],
      wheelY: -0.45,
      density: 0.833,
      wheelDensity: 1,
      torque: 70,
      maxSpeed: 17,
      hz: 3,
      damping: 0.55,
      friction: 1.1,
      fuel: 42,
      color: `#8be02a`,
      accent: `#ffffff`,
      rim: `#8be02a`,
      sprite: { x: -2.102, y: 0.963, w: 4.599, h: 1.978 },
    },
    {
      id: `hyperwhite`,
      name: `هایپرکار یخی`,
      price: 5e4,
      kind: `hyperwhite`,
      body: [
        [2.419, -0.315],
        [2.385, -0.21],
        [2.203, -0.056],
        [1.922, 0.084],
        [1.558, 0.183],
        [0.395, 0.4],
        [-1.883, 0.435],
        [-1.96, -0.315],
      ],
      head: { x: -0.1, y: 0.21, r: 0.3 },
      wheelR: 0.438,
      wheelRFront: 0.431,
      com: [0.22, -0.38],
      wheelX: [-1.329, 1.329],
      wheelY: -0.45,
      density: 1.078,
      wheelDensity: 1,
      torque: 68,
      maxSpeed: 33,
      hz: 5.2,
      damping: 0.75,
      friction: 1,
      fuel: 30,
      color: `#2ec7ff`,
      accent: `#ffffff`,
      rim: `#2ec7ff`,
      sprite: { x: -2.102, y: 0.452, w: 4.584, h: 1.394 },
    },
    {
      id: `hyperorange`,
      name: `هایپرکار شعله`,
      price: 6e4,
      kind: `hyperorange`,
      body: [
        [2.333, -0.313],
        [2.098, -0.029],
        [1.825, 0.125],
        [1.488, 0.223],
        [0.276, 0.504],
        [0.087, 0.525],
        [-1.973, 0.553],
        [-1.937, -0.313],
      ],
      head: { x: -0.1, y: 0.35, r: 0.3 },
      wheelR: 0.438,
      wheelRFront: 0.438,
      com: [0.22, -0.38],
      wheelX: [-1.314, 1.314],
      wheelY: -0.45,
      density: 0.997,
      wheelDensity: 1,
      torque: 72,
      maxSpeed: 35,
      hz: 5.2,
      damping: 0.75,
      friction: 1,
      fuel: 30,
      color: `#e5302a`,
      accent: `#ffffff`,
      rim: `#e5302a`,
      sprite: { x: -2.102, y: 0.572, w: 4.577, h: 1.489 },
    },
    {
      id: `hypergreen`,
      name: `هایپرکار سمی`,
      price: 75e3,
      kind: `hypergreen`,
      body: [
        [-2.121, -0.309],
        [2.436, -0.309],
        [2.387, -0.109],
        [2.093, 0.115],
        [1.651, 0.29],
        [0.467, 0.55],
        [0.194, 0.585],
        [-2.105, 0.571],
      ],
      head: { x: -0.1, y: 0.38, r: 0.3 },
      wheelR: 0.453,
      wheelRFront: 0.453,
      com: [0.22, -0.38],
      wheelX: [-1.321, 1.321],
      wheelY: -0.45,
      density: 0.893,
      wheelDensity: 1,
      torque: 78,
      maxSpeed: 37,
      hz: 5.4,
      damping: 0.75,
      friction: 1.02,
      fuel: 31,
      color: `#8be02a`,
      accent: `#ffffff`,
      rim: `#8be02a`,
      sprite: { x: -2.256, y: 0.601, w: 4.803, h: 1.518 },
    },
  ],
  E = [
    {
      id: `countryside`,
      name: `کوهستان غروب`,
      price: 0,
      seed: 11,
      gravity: 10,
      groundFriction: 1,
      amplitude: 7,
      roughness: 1,
      sky: [`#381745`, `#ff7826`],
      ground: {
        top: `#4a8b2c`,
        topLight: `#7fd844`,
        fill: `#4a3020`,
        dark: `#2a1a10`,
        pebble: `#70503a`,
        dust: `#f5a647`,
      },
      far: `#5a4670`,
      near: `#244d38`,
    },
    {
      id: `desert`,
      name: `صحرا`,
      price: 5e3,
      seed: 23,
      gravity: 10,
      groundFriction: 0.75,
      amplitude: 9,
      roughness: 0.8,
      sky: [`#f5a35c`, `#ffe7b8`],
      ground: {
        top: `#e8b25e`,
        topLight: `#f7d088`,
        fill: `#c98a45`,
        dark: `#8f5a28`,
        pebble: `#a86d34`,
        dust: `#f0c98a`,
      },
      far: `#f2c08a`,
      near: `#e09a52`,
    },
    {
      id: `snow`,
      name: `کوهستان برفی`,
      price: 12e3,
      seed: 37,
      gravity: 10,
      groundFriction: 0.45,
      amplitude: 10,
      roughness: 1.1,
      sky: [`#7fa6d6`, `#eef5ff`],
      ground: {
        top: `#f4f9ff`,
        topLight: `#ffffff`,
        fill: `#8aa0b8`,
        dark: `#556a82`,
        pebble: `#6f849c`,
        dust: `#ffffff`,
      },
      far: `#c9d8ec`,
      near: `#a9bfd9`,
    },
    {
      id: `moon`,
      name: `ماه`,
      price: 25e3,
      seed: 53,
      gravity: 3.6,
      groundFriction: 0.9,
      amplitude: 12,
      roughness: 1.4,
      sky: [`#05060f`, `#1d2140`],
      ground: {
        top: `#b9bcc6`,
        topLight: `#dcdee6`,
        fill: `#7c7f8c`,
        dark: `#4a4c57`,
        pebble: `#5d606c`,
        dust: `#d0d2da`,
      },
      far: `#2e3255`,
      near: `#3d4166`,
      night: !0,
    },
  ],
  D = [...T],
  O = [
    { id: `engine`, name: `موتور`, hint: `قدرت و سرعت بیشتر` },
    { id: `suspension`, name: `کمک‌فنر`, hint: `پایداری روی دست‌انداز` },
    { id: `tires`, name: `لاستیک`, hint: `چسبندگی بیشتر` },
    { id: `drive`, name: `دیفرانسیل جلو`, hint: `قدرت به چرخ جلو` },
  ],
  ee = (e) => E.find((t) => t.id === e) ?? E[0],
  te = (e) => D.find((t) => t.id === e) ?? D[0],
  ne = function (e, t) {
    return (
      (ne =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (e, t) {
            e.__proto__ = t;
          }) ||
        function (e, t) {
          for (var n in t)
            Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
        }),
      ne(e, t)
    );
  };
function k(e, t) {
  if (typeof t != `function` && t !== null)
    throw TypeError(
      `Class extends value ` + String(t) + ` is not a constructor or null`,
    );
  ne(e, t);
  function n() {
    this.constructor = e;
  }
  e.prototype =
    t === null ? Object.create(t) : ((n.prototype = t.prototype), new n());
}
var A = function () {
    return (
      (A =
        Object.assign ||
        function (e) {
          for (var t, n = 1, r = arguments.length; n < r; n++)
            for (var i in ((t = arguments[n]), t))
              Object.prototype.hasOwnProperty.call(t, i) && (e[i] = t[i]);
          return e;
        }),
      A.apply(this, arguments)
    );
  },
  re = function (e, t) {
    e ??= {};
    var n = A({}, e);
    for (var r in t) t.hasOwnProperty(r) && e[r] === void 0 && (n[r] = t[r]);
    if (typeof Object.getOwnPropertySymbols == `function`)
      for (var i = Object.getOwnPropertySymbols(t), a = 0; a < i.length; a++) {
        var o = i[a];
        t.propertyIsEnumerable(o) && e[o] === void 0 && (n[o] = t[o]);
      }
    return n;
  },
  ie = Math.random,
  ae = 1e-9,
  oe = Number.isFinite;
function se(e) {
  return (
    (e |= e >> 1),
    (e |= e >> 2),
    (e |= e >> 4),
    (e |= e >> 8),
    (e |= e >> 16),
    e + 1
  );
}
function ce(e) {
  return e > 0 && !(e & (e - 1));
}
function le(e, t, n) {
  return (
    t === void 0 ? ((n = 1), (t = 0)) : n === void 0 && ((n = t), (t = 0)),
    n > t
      ? ((e = (e - t) % (n - t)), e + (e < 0 ? n : t))
      : ((e = (e - n) % (t - n)), e + (e <= 0 ? t : n))
  );
}
function ue(e, t, n) {
  return e < t ? t : e > n ? n : e;
}
function de(e, t) {
  return (
    e === void 0 ? ((t = 1), (e = 0)) : t === void 0 && ((t = e), (e = 0)),
    e === t ? e : ie() * (t - e) + e
  );
}
var fe = Object.create(Math);
((fe.EPSILON = ae),
  (fe.isFinite = oe),
  (fe.nextPowerOfTwo = se),
  (fe.isPowerOfTwo = ce),
  (fe.mod = le),
  (fe.clamp = ue),
  (fe.random = de));
var pe = Math.abs,
  me = Math.sqrt,
  he = Math.max,
  ge = Math.min,
  j = (function () {
    function e(t, n) {
      if (!(this instanceof e)) return new e(t, n);
      t === void 0
        ? ((this.x = 0), (this.y = 0))
        : typeof t == `object`
          ? ((this.x = t.x), (this.y = t.y))
          : ((this.x = t), (this.y = n));
    }
    return (
      (e.prototype._serialize = function () {
        return { x: this.x, y: this.y };
      }),
      (e._deserialize = function (t) {
        var n = Object.create(e.prototype);
        return ((n.x = t.x), (n.y = t.y), n);
      }),
      (e.zero = function () {
        var t = Object.create(e.prototype);
        return ((t.x = 0), (t.y = 0), t);
      }),
      (e.neo = function (t, n) {
        var r = Object.create(e.prototype);
        return ((r.x = t), (r.y = n), r);
      }),
      (e.clone = function (t) {
        return e.neo(t.x, t.y);
      }),
      (e.prototype.toString = function () {
        return JSON.stringify(this);
      }),
      (e.isValid = function (e) {
        return e != null && Number.isFinite(e.x) && Number.isFinite(e.y);
      }),
      (e.assert = function (e) {}),
      (e.prototype.clone = function () {
        return e.clone(this);
      }),
      (e.prototype.setZero = function () {
        return ((this.x = 0), (this.y = 0), this);
      }),
      (e.prototype.set = function (e, t) {
        return (
          typeof e == `object`
            ? ((this.x = e.x), (this.y = e.y))
            : ((this.x = e), (this.y = t)),
          this
        );
      }),
      (e.prototype.setNum = function (e, t) {
        return ((this.x = e), (this.y = t), this);
      }),
      (e.prototype.setVec2 = function (e) {
        return ((this.x = e.x), (this.y = e.y), this);
      }),
      (e.prototype.wSet = function (e, t, n, r) {
        return n !== void 0 || r !== void 0
          ? this.setCombine(e, t, n, r)
          : this.setMul(e, t);
      }),
      (e.prototype.setCombine = function (e, t, n, r) {
        var i = e * t.x + n * r.x,
          a = e * t.y + n * r.y;
        return ((this.x = i), (this.y = a), this);
      }),
      (e.prototype.setMul = function (e, t) {
        var n = e * t.x,
          r = e * t.y;
        return ((this.x = n), (this.y = r), this);
      }),
      (e.prototype.add = function (e) {
        return ((this.x += e.x), (this.y += e.y), this);
      }),
      (e.prototype.wAdd = function (e, t, n, r) {
        return n !== void 0 || r !== void 0
          ? this.addCombine(e, t, n, r)
          : this.addMul(e, t);
      }),
      (e.prototype.addCombine = function (e, t, n, r) {
        var i = e * t.x + n * r.x,
          a = e * t.y + n * r.y;
        return ((this.x += i), (this.y += a), this);
      }),
      (e.prototype.addMul = function (e, t) {
        var n = e * t.x,
          r = e * t.y;
        return ((this.x += n), (this.y += r), this);
      }),
      (e.prototype.wSub = function (e, t, n, r) {
        return n !== void 0 || r !== void 0
          ? this.subCombine(e, t, n, r)
          : this.subMul(e, t);
      }),
      (e.prototype.subCombine = function (e, t, n, r) {
        var i = e * t.x + n * r.x,
          a = e * t.y + n * r.y;
        return ((this.x -= i), (this.y -= a), this);
      }),
      (e.prototype.subMul = function (e, t) {
        var n = e * t.x,
          r = e * t.y;
        return ((this.x -= n), (this.y -= r), this);
      }),
      (e.prototype.sub = function (e) {
        return ((this.x -= e.x), (this.y -= e.y), this);
      }),
      (e.prototype.mul = function (e) {
        return ((this.x *= e), (this.y *= e), this);
      }),
      (e.prototype.length = function () {
        return e.lengthOf(this);
      }),
      (e.prototype.lengthSquared = function () {
        return e.lengthSquared(this);
      }),
      (e.prototype.normalize = function () {
        var e = this.length();
        if (e < ae) return 0;
        var t = 1 / e;
        return ((this.x *= t), (this.y *= t), e);
      }),
      (e.normalize = function (t) {
        var n = e.lengthOf(t);
        if (n < ae) return e.zero();
        var r = 1 / n;
        return e.neo(t.x * r, t.y * r);
      }),
      (e.lengthOf = function (e) {
        return me(e.x * e.x + e.y * e.y);
      }),
      (e.lengthSquared = function (e) {
        return e.x * e.x + e.y * e.y;
      }),
      (e.distance = function (e, t) {
        var n = e.x - t.x,
          r = e.y - t.y;
        return me(n * n + r * r);
      }),
      (e.distanceSquared = function (e, t) {
        var n = e.x - t.x,
          r = e.y - t.y;
        return n * n + r * r;
      }),
      (e.areEqual = function (e, t) {
        return (
          e === t || (typeof t == `object` && !!t && e.x === t.x && e.y === t.y)
        );
      }),
      (e.skew = function (t) {
        return e.neo(-t.y, t.x);
      }),
      (e.dot = function (e, t) {
        return e.x * t.x + e.y * t.y;
      }),
      (e.cross = function (t, n) {
        return typeof n == `number`
          ? e.neo(n * t.y, -n * t.x)
          : typeof t == `number`
            ? e.neo(-t * n.y, t * n.x)
            : t.x * n.y - t.y * n.x;
      }),
      (e.crossVec2Vec2 = function (e, t) {
        return e.x * t.y - e.y * t.x;
      }),
      (e.crossVec2Num = function (t, n) {
        return e.neo(n * t.y, -n * t.x);
      }),
      (e.crossNumVec2 = function (t, n) {
        return e.neo(-t * n.y, t * n.x);
      }),
      (e.addCross = function (t, n, r) {
        if (typeof r == `number`) return e.neo(r * n.y + t.x, -r * n.x + t.y);
        if (typeof n == `number`) return e.neo(-n * r.y + t.x, n * r.x + t.y);
      }),
      (e.addCrossVec2Num = function (t, n, r) {
        return e.neo(r * n.y + t.x, -r * n.x + t.y);
      }),
      (e.addCrossNumVec2 = function (t, n, r) {
        return e.neo(-n * r.y + t.x, n * r.x + t.y);
      }),
      (e.add = function (t, n) {
        return e.neo(t.x + n.x, t.y + n.y);
      }),
      (e.wAdd = function (t, n, r, i) {
        return r !== void 0 || i !== void 0
          ? e.combine(t, n, r, i)
          : e.mulNumVec2(t, n);
      }),
      (e.combine = function (t, n, r, i) {
        return e.zero().setCombine(t, n, r, i);
      }),
      (e.sub = function (t, n) {
        return e.neo(t.x - n.x, t.y - n.y);
      }),
      (e.mul = function (t, n) {
        if (typeof t == `object`) return e.neo(t.x * n, t.y * n);
        if (typeof n == `object`) return e.neo(t * n.x, t * n.y);
      }),
      (e.mulVec2Num = function (t, n) {
        return e.neo(t.x * n, t.y * n);
      }),
      (e.mulNumVec2 = function (t, n) {
        return e.neo(t * n.x, t * n.y);
      }),
      (e.prototype.neg = function () {
        return ((this.x = -this.x), (this.y = -this.y), this);
      }),
      (e.neg = function (t) {
        return e.neo(-t.x, -t.y);
      }),
      (e.abs = function (t) {
        return e.neo(pe(t.x), pe(t.y));
      }),
      (e.mid = function (t, n) {
        return e.neo((t.x + n.x) * 0.5, (t.y + n.y) * 0.5);
      }),
      (e.upper = function (t, n) {
        return e.neo(he(t.x, n.x), he(t.y, n.y));
      }),
      (e.lower = function (t, n) {
        return e.neo(ge(t.x, n.x), ge(t.y, n.y));
      }),
      (e.prototype.clamp = function (e) {
        var t = this.x * this.x + this.y * this.y;
        if (t > e * e) {
          var n = e / me(t);
          ((this.x *= n), (this.y *= n));
        }
        return this;
      }),
      (e.clamp = function (t, n) {
        var r = e.neo(t.x, t.y);
        return (r.clamp(n), r);
      }),
      (e.clampVec2 = function (e, t, n) {
        return { x: ue(e.x, t?.x, n?.x), y: ue(e.y, t?.y, n?.y) };
      }),
      (e.scaleFn = function (t, n) {
        return function (r) {
          return e.neo(r.x * t, r.y * n);
        };
      }),
      (e.translateFn = function (t, n) {
        return function (r) {
          return e.neo(r.x + t, r.y + n);
        };
      }),
      e
    );
  })(),
  _e = Math.max,
  ve = Math.min,
  ye = (function () {
    function e(t, n) {
      if (!(this instanceof e)) return new e(t, n);
      ((this.lowerBound = j.zero()),
        (this.upperBound = j.zero()),
        typeof t == `object` && this.lowerBound.setVec2(t),
        typeof n == `object`
          ? this.upperBound.setVec2(n)
          : typeof t == `object` && this.upperBound.setVec2(t));
    }
    return (
      (e.prototype.isValid = function () {
        return e.isValid(this);
      }),
      (e.isValid = function (e) {
        return (
          e != null &&
          j.isValid(e.lowerBound) &&
          j.isValid(e.upperBound) &&
          j.sub(e.upperBound, e.lowerBound).lengthSquared() >= 0
        );
      }),
      (e.assert = function (e) {}),
      (e.prototype.getCenter = function () {
        return j.neo(
          (this.lowerBound.x + this.upperBound.x) * 0.5,
          (this.lowerBound.y + this.upperBound.y) * 0.5,
        );
      }),
      (e.prototype.getExtents = function () {
        return j.neo(
          (this.upperBound.x - this.lowerBound.x) * 0.5,
          (this.upperBound.y - this.lowerBound.y) * 0.5,
        );
      }),
      (e.prototype.getPerimeter = function () {
        return (
          2 *
          (this.upperBound.x -
            this.lowerBound.x +
            this.upperBound.y -
            this.lowerBound.y)
        );
      }),
      (e.prototype.combine = function (e, t) {
        t ||= this;
        var n = e.lowerBound,
          r = e.upperBound,
          i = t.lowerBound,
          a = t.upperBound,
          o = ve(n.x, i.x),
          s = ve(n.y, i.y),
          c = _e(a.x, r.x),
          l = _e(a.y, r.y);
        (this.lowerBound.setNum(o, s), this.upperBound.setNum(c, l));
      }),
      (e.prototype.combinePoints = function (e, t) {
        (this.lowerBound.setNum(ve(e.x, t.x), ve(e.y, t.y)),
          this.upperBound.setNum(_e(e.x, t.x), _e(e.y, t.y)));
      }),
      (e.prototype.set = function (e) {
        (this.lowerBound.setNum(e.lowerBound.x, e.lowerBound.y),
          this.upperBound.setNum(e.upperBound.x, e.upperBound.y));
      }),
      (e.prototype.contains = function (e) {
        var t = !0;
        return (
          (t &&= this.lowerBound.x <= e.lowerBound.x),
          (t &&= this.lowerBound.y <= e.lowerBound.y),
          (t &&= e.upperBound.x <= this.upperBound.x),
          (t &&= e.upperBound.y <= this.upperBound.y),
          t
        );
      }),
      (e.prototype.extend = function (t) {
        return (e.extend(this, t), this);
      }),
      (e.extend = function (e, t) {
        return (
          (e.lowerBound.x -= t),
          (e.lowerBound.y -= t),
          (e.upperBound.x += t),
          (e.upperBound.y += t),
          e
        );
      }),
      (e.testOverlap = function (e, t) {
        var n = t.lowerBound.x - e.upperBound.x,
          r = e.lowerBound.x - t.upperBound.x,
          i = t.lowerBound.y - e.upperBound.y,
          a = e.lowerBound.y - t.upperBound.y;
        return !(n > 0 || i > 0 || r > 0 || a > 0);
      }),
      (e.areEqual = function (e, t) {
        return (
          j.areEqual(e.lowerBound, t.lowerBound) &&
          j.areEqual(e.upperBound, t.upperBound)
        );
      }),
      (e.diff = function (e, t) {
        var n = _e(
            0,
            ve(e.upperBound.x, t.upperBound.x) -
              _e(t.lowerBound.x, e.lowerBound.x),
          ),
          r = _e(
            0,
            ve(e.upperBound.y, t.upperBound.y) -
              _e(t.lowerBound.y, e.lowerBound.y),
          ),
          i = e.upperBound.x - e.lowerBound.x,
          a = e.upperBound.y - e.lowerBound.y,
          o = t.upperBound.x - t.lowerBound.x,
          s = t.upperBound.y - t.lowerBound.y;
        return i * a + o * s - n * r;
      }),
      (e.prototype.rayCast = function (e, t) {
        var n = -1 / 0,
          r = 1 / 0,
          i = t.p1,
          a = j.sub(t.p2, t.p1),
          o = j.abs(a),
          s = j.zero();
        if (o.x < ae) {
          if (i.x < this.lowerBound.x || this.upperBound.x < i.x) return !1;
        } else {
          var c = 1 / a.x,
            l = (this.lowerBound.x - i.x) * c,
            u = (this.upperBound.x - i.x) * c,
            d = -1;
          if (l > u) {
            var f = l;
            ((l = u), (u = f), (d = 1));
          }
          if (
            (l > n && (s.setZero(), (s.x = d), (n = l)), (r = ve(r, u)), n > r)
          )
            return !1;
        }
        if (o.y < ae) {
          if (i.y < this.lowerBound.y || this.upperBound.y < i.y) return !1;
        } else {
          var c = 1 / a.y,
            l = (this.lowerBound.y - i.y) * c,
            u = (this.upperBound.y - i.y) * c,
            d = -1;
          if (l > u) {
            var f = l;
            ((l = u), (u = f), (d = 1));
          }
          if (
            (l > n && (s.setZero(), (s.y = d), (n = l)), (r = ve(r, u)), n > r)
          )
            return !1;
        }
        return n < 0 || t.maxFraction < n
          ? !1
          : ((e.fraction = n), (e.normal = s), !0);
      }),
      (e.prototype.toString = function () {
        return JSON.stringify(this);
      }),
      (e.combinePoints = function (e, t, n) {
        return (
          (e.lowerBound.x = ve(t.x, n.x)),
          (e.lowerBound.y = ve(t.y, n.y)),
          (e.upperBound.x = _e(t.x, n.x)),
          (e.upperBound.y = _e(t.y, n.y)),
          e
        );
      }),
      (e.combinedPerimeter = function (e, t) {
        var n = ve(e.lowerBound.x, t.lowerBound.x),
          r = ve(e.lowerBound.y, t.lowerBound.y),
          i = _e(e.upperBound.x, t.upperBound.x),
          a = _e(e.upperBound.y, t.upperBound.y);
        return 2 * (i - n + a - r);
      }),
      e
    );
  })(),
  be = Math.PI,
  M = (function () {
    function e() {}
    return (
      Object.defineProperty(e, "polygonRadius", {
        get: function () {
          return 2 * e.linearSlop;
        },
        enumerable: !1,
        configurable: !0,
      }),
      (e.lengthUnitsPerMeter = 1),
      (e.maxManifoldPoints = 2),
      (e.maxPolygonVertices = 12),
      (e.aabbExtension = 0.1),
      (e.aabbMultiplier = 2),
      (e.linearSlop = 0.005),
      (e.angularSlop = (2 / 180) * be),
      (e.maxSubSteps = 8),
      (e.maxTOIContacts = 32),
      (e.maxTOIIterations = 20),
      (e.maxDistanceIterations = 20),
      (e.velocityThreshold = 1),
      (e.maxLinearCorrection = 0.2),
      (e.maxAngularCorrection = (8 / 180) * be),
      (e.maxTranslation = 2),
      (e.maxRotation = 0.5 * be),
      (e.baumgarte = 0.2),
      (e.toiBaugarte = 0.75),
      (e.timeToSleep = 0.5),
      (e.linearSleepTolerance = 0.01),
      (e.angularSleepTolerance = (2 / 180) * be),
      e
    );
  })(),
  N = (function () {
    function e() {}
    return (
      Object.defineProperty(e, "maxManifoldPoints", {
        get: function () {
          return M.maxManifoldPoints;
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(e, "maxPolygonVertices", {
        get: function () {
          return M.maxPolygonVertices;
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(e, "aabbExtension", {
        get: function () {
          return M.aabbExtension * M.lengthUnitsPerMeter;
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(e, "aabbMultiplier", {
        get: function () {
          return M.aabbMultiplier;
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(e, "linearSlop", {
        get: function () {
          return M.linearSlop * M.lengthUnitsPerMeter;
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(e, "linearSlopSquared", {
        get: function () {
          return (
            M.linearSlop *
            M.lengthUnitsPerMeter *
            M.linearSlop *
            M.lengthUnitsPerMeter
          );
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(e, "angularSlop", {
        get: function () {
          return M.angularSlop;
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(e, "polygonRadius", {
        get: function () {
          return 2 * M.linearSlop;
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(e, "maxSubSteps", {
        get: function () {
          return M.maxSubSteps;
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(e, "maxTOIContacts", {
        get: function () {
          return M.maxTOIContacts;
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(e, "maxTOIIterations", {
        get: function () {
          return M.maxTOIIterations;
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(e, "maxDistanceIterations", {
        get: function () {
          return M.maxDistanceIterations;
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(e, "velocityThreshold", {
        get: function () {
          return M.velocityThreshold * M.lengthUnitsPerMeter;
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(e, "maxLinearCorrection", {
        get: function () {
          return M.maxLinearCorrection * M.lengthUnitsPerMeter;
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(e, "maxAngularCorrection", {
        get: function () {
          return M.maxAngularCorrection;
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(e, "maxTranslation", {
        get: function () {
          return M.maxTranslation * M.lengthUnitsPerMeter;
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(e, "maxTranslationSquared", {
        get: function () {
          return (
            M.maxTranslation *
            M.lengthUnitsPerMeter *
            M.maxTranslation *
            M.lengthUnitsPerMeter
          );
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(e, "maxRotation", {
        get: function () {
          return M.maxRotation;
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(e, "maxRotationSquared", {
        get: function () {
          return M.maxRotation * M.maxRotation;
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(e, "baumgarte", {
        get: function () {
          return M.baumgarte;
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(e, "toiBaugarte", {
        get: function () {
          return M.toiBaugarte;
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(e, "timeToSleep", {
        get: function () {
          return M.timeToSleep;
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(e, "linearSleepTolerance", {
        get: function () {
          return M.linearSleepTolerance * M.lengthUnitsPerMeter;
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(e, "linearSleepToleranceSqr", {
        get: function () {
          return (
            M.linearSleepTolerance *
            M.lengthUnitsPerMeter *
            M.linearSleepTolerance *
            M.lengthUnitsPerMeter
          );
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(e, "angularSleepTolerance", {
        get: function () {
          return M.angularSleepTolerance;
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(e, "angularSleepToleranceSqr", {
        get: function () {
          return M.angularSleepTolerance * M.angularSleepTolerance;
        },
        enumerable: !1,
        configurable: !0,
      }),
      e
    );
  })(),
  xe = (function () {
    function e(e) {
      ((this._list = []),
        (this._max = 1 / 0),
        (this._hasCreateFn = !1),
        (this._createCount = 0),
        (this._hasAllocateFn = !1),
        (this._allocateCount = 0),
        (this._hasReleaseFn = !1),
        (this._releaseCount = 0),
        (this._hasDisposeFn = !1),
        (this._disposeCount = 0),
        (this._list = []),
        (this._max = e.max || this._max),
        (this._createFn = e.create),
        (this._hasCreateFn = typeof this._createFn == `function`),
        (this._allocateFn = e.allocate),
        (this._hasAllocateFn = typeof this._allocateFn == `function`),
        (this._releaseFn = e.release),
        (this._hasReleaseFn = typeof this._releaseFn == `function`),
        (this._disposeFn = e.dispose),
        (this._hasDisposeFn = typeof this._disposeFn == `function`));
    }
    return (
      (e.prototype.max = function (e) {
        return typeof e == `number` ? ((this._max = e), this) : this._max;
      }),
      (e.prototype.size = function () {
        return this._list.length;
      }),
      (e.prototype.allocate = function () {
        var e;
        return (
          this._list.length > 0
            ? (e = this._list.shift())
            : (this._createCount++,
              (e = this._hasCreateFn ? this._createFn() : {})),
          this._allocateCount++,
          this._hasAllocateFn && this._allocateFn(e),
          e
        );
      }),
      (e.prototype.release = function (e) {
        this._list.length < this._max
          ? (this._releaseCount++,
            this._hasReleaseFn && this._releaseFn(e),
            this._list.push(e))
          : (this._disposeCount++,
            this._hasDisposeFn && (e = this._disposeFn(e)));
      }),
      (e.prototype.toString = function () {
        return (
          ` +` +
          this._createCount +
          ` >` +
          this._allocateCount +
          ` <` +
          this._releaseCount +
          ` -` +
          this._disposeCount +
          ` =` +
          this._list.length +
          `/` +
          this._max
        );
      }),
      e
    );
  })(),
  Se = Math.abs,
  Ce = Math.max,
  we = (function () {
    function e(e) {
      ((this.aabb = new ye()),
        (this.userData = null),
        (this.parent = null),
        (this.child1 = null),
        (this.child2 = null),
        (this.height = -1),
        (this.id = e));
    }
    return (
      (e.prototype.toString = function () {
        return this.id + `: ` + this.userData;
      }),
      (e.prototype.isLeaf = function () {
        return this.child1 == null;
      }),
      e
    );
  })(),
  Te = new xe({
    create: function () {
      return new we();
    },
    release: function (e) {
      ((e.userData = null),
        (e.parent = null),
        (e.child1 = null),
        (e.child2 = null),
        (e.height = -1),
        (e.id = void 0));
    },
  }),
  Ee = (function () {
    function e() {
      ((this.inputPool = new xe({
        create: function () {
          return {};
        },
        release: function (e) {},
      })),
        (this.stackPool = new xe({
          create: function () {
            return [];
          },
          release: function (e) {
            e.length = 0;
          },
        })),
        (this.iteratorPool = new xe({
          create: function () {
            return new De();
          },
          release: function (e) {
            e.close();
          },
        })),
        (this.m_root = null),
        (this.m_nodes = {}),
        (this.m_lastProxyId = 0));
    }
    return (
      (e.prototype.getUserData = function (e) {
        return this.m_nodes[e].userData;
      }),
      (e.prototype.getFatAABB = function (e) {
        return this.m_nodes[e].aabb;
      }),
      (e.prototype.allocateNode = function () {
        var e = Te.allocate();
        return ((e.id = ++this.m_lastProxyId), (this.m_nodes[e.id] = e), e);
      }),
      (e.prototype.freeNode = function (e) {
        (delete this.m_nodes[e.id], Te.release(e));
      }),
      (e.prototype.createProxy = function (e, t) {
        var n = this.allocateNode();
        return (
          n.aabb.set(e),
          ye.extend(n.aabb, N.aabbExtension),
          (n.userData = t),
          (n.height = 0),
          this.insertLeaf(n),
          n.id
        );
      }),
      (e.prototype.destroyProxy = function (e) {
        var t = this.m_nodes[e];
        (this.removeLeaf(t), this.freeNode(t));
      }),
      (e.prototype.moveProxy = function (e, t, n) {
        var r = this.m_nodes[e];
        return (
          !r.aabb.contains(t) &&
          (this.removeLeaf(r),
          r.aabb.set(t),
          (t = r.aabb),
          ye.extend(t, N.aabbExtension),
          n.x < 0
            ? (t.lowerBound.x += n.x * N.aabbMultiplier)
            : (t.upperBound.x += n.x * N.aabbMultiplier),
          n.y < 0
            ? (t.lowerBound.y += n.y * N.aabbMultiplier)
            : (t.upperBound.y += n.y * N.aabbMultiplier),
          this.insertLeaf(r),
          !0)
        );
      }),
      (e.prototype.insertLeaf = function (e) {
        if (this.m_root == null) {
          ((this.m_root = e), (this.m_root.parent = null));
          return;
        }
        for (var t = e.aabb, n = this.m_root; !n.isLeaf();) {
          var r = n.child1,
            i = n.child2,
            a = n.aabb.getPerimeter(),
            o = ye.combinedPerimeter(n.aabb, t),
            s = 2 * o,
            c = 2 * (o - a),
            l = ye.combinedPerimeter(t, r.aabb) + c;
          if (!r.isLeaf()) {
            var u = r.aabb.getPerimeter();
            l -= u;
          }
          var d = ye.combinedPerimeter(t, i.aabb) + c;
          if (!i.isLeaf()) {
            var u = i.aabb.getPerimeter();
            d -= u;
          }
          if (s < l && s < d) break;
          n = l < d ? r : i;
        }
        var f = n,
          p = f.parent,
          m = this.allocateNode();
        for (
          m.parent = p,
            m.userData = null,
            m.aabb.combine(t, f.aabb),
            m.height = f.height + 1,
            p == null
              ? ((m.child1 = f),
                (m.child2 = e),
                (f.parent = m),
                (e.parent = m),
                (this.m_root = m))
              : (p.child1 === f ? (p.child1 = m) : (p.child2 = m),
                (m.child1 = f),
                (m.child2 = e),
                (f.parent = m),
                (e.parent = m)),
            n = e.parent;
          n != null;
        ) {
          n = this.balance(n);
          var r = n.child1,
            i = n.child2;
          ((n.height = 1 + Ce(r.height, i.height)),
            n.aabb.combine(r.aabb, i.aabb),
            (n = n.parent));
        }
      }),
      (e.prototype.removeLeaf = function (e) {
        if (e === this.m_root) {
          this.m_root = null;
          return;
        }
        var t = e.parent,
          n = t.parent,
          r = t.child1 === e ? t.child2 : t.child1;
        if (n != null) {
          (n.child1 === t ? (n.child1 = r) : (n.child2 = r),
            (r.parent = n),
            this.freeNode(t));
          for (var i = n; i != null;) {
            i = this.balance(i);
            var a = i.child1,
              o = i.child2;
            (i.aabb.combine(a.aabb, o.aabb),
              (i.height = 1 + Ce(a.height, o.height)),
              (i = i.parent));
          }
        } else ((this.m_root = r), (r.parent = null), this.freeNode(t));
      }),
      (e.prototype.balance = function (e) {
        var t = e;
        if (t.isLeaf() || t.height < 2) return e;
        var n = t.child1,
          r = t.child2,
          i = r.height - n.height;
        if (i > 1) {
          var a = r.child1,
            o = r.child2;
          return (
            (r.child1 = t),
            (r.parent = t.parent),
            (t.parent = r),
            r.parent == null
              ? (this.m_root = r)
              : r.parent.child1 === e
                ? (r.parent.child1 = r)
                : (r.parent.child2 = r),
            a.height > o.height
              ? ((r.child2 = a),
                (t.child2 = o),
                (o.parent = t),
                t.aabb.combine(n.aabb, o.aabb),
                r.aabb.combine(t.aabb, a.aabb),
                (t.height = 1 + Ce(n.height, o.height)),
                (r.height = 1 + Ce(t.height, a.height)))
              : ((r.child2 = o),
                (t.child2 = a),
                (a.parent = t),
                t.aabb.combine(n.aabb, a.aabb),
                r.aabb.combine(t.aabb, o.aabb),
                (t.height = 1 + Ce(n.height, a.height)),
                (r.height = 1 + Ce(t.height, o.height))),
            r
          );
        }
        if (i < -1) {
          var s = n.child1,
            c = n.child2;
          return (
            (n.child1 = t),
            (n.parent = t.parent),
            (t.parent = n),
            n.parent == null
              ? (this.m_root = n)
              : n.parent.child1 === t
                ? (n.parent.child1 = n)
                : (n.parent.child2 = n),
            s.height > c.height
              ? ((n.child2 = s),
                (t.child1 = c),
                (c.parent = t),
                t.aabb.combine(r.aabb, c.aabb),
                n.aabb.combine(t.aabb, s.aabb),
                (t.height = 1 + Ce(r.height, c.height)),
                (n.height = 1 + Ce(t.height, s.height)))
              : ((n.child2 = c),
                (t.child1 = s),
                (s.parent = t),
                t.aabb.combine(r.aabb, s.aabb),
                n.aabb.combine(t.aabb, c.aabb),
                (t.height = 1 + Ce(r.height, s.height)),
                (n.height = 1 + Ce(t.height, c.height))),
            n
          );
        }
        return t;
      }),
      (e.prototype.getHeight = function () {
        return this.m_root == null ? 0 : this.m_root.height;
      }),
      (e.prototype.getAreaRatio = function () {
        if (this.m_root == null) return 0;
        for (
          var e = this.m_root.aabb.getPerimeter(),
            t = 0,
            n,
            r = this.iteratorPool.allocate().preorder(this.m_root);
          (n = r.next());
        )
          n.height < 0 || (t += n.aabb.getPerimeter());
        return (this.iteratorPool.release(r), t / e);
      }),
      (e.prototype.computeHeight = function (e) {
        var t = e === void 0 ? this.m_root : this.m_nodes[e];
        return t.isLeaf()
          ? 0
          : 1 +
              Ce(
                this.computeHeight(t.child1.id),
                this.computeHeight(t.child2.id),
              );
      }),
      (e.prototype.validateStructure = function (e) {
        if (e != null) {
          this.m_root;
          var t = e.child1,
            n = e.child2;
          e.isLeaf() || (this.validateStructure(t), this.validateStructure(n));
        }
      }),
      (e.prototype.validateMetrics = function (e) {
        if (e != null) {
          var t = e.child1,
            n = e.child2;
          e.isLeaf() || (this.validateMetrics(t), this.validateMetrics(n));
        }
      }),
      (e.prototype.validate = function () {}),
      (e.prototype.getMaxBalance = function () {
        for (
          var e = 0, t, n = this.iteratorPool.allocate().preorder(this.m_root);
          (t = n.next());
        )
          if (!(t.height <= 1)) {
            var r = Se(t.child2.height - t.child1.height);
            e = Ce(e, r);
          }
        return (this.iteratorPool.release(n), e);
      }),
      (e.prototype.rebuildBottomUp = function () {
        for (
          var e = [],
            t = 0,
            n,
            r = this.iteratorPool.allocate().preorder(this.m_root);
          (n = r.next());
        )
          n.height < 0 ||
            (n.isLeaf()
              ? ((n.parent = null), (e[t] = n), ++t)
              : this.freeNode(n));
        for (this.iteratorPool.release(r); t > 1;) {
          for (var i = 1 / 0, a = -1, o = -1, s = 0; s < t; ++s)
            for (var c = e[s].aabb, l = s + 1; l < t; ++l) {
              var u = e[l].aabb,
                d = ye.combinedPerimeter(c, u);
              d < i && ((a = s), (o = l), (i = d));
            }
          var f = e[a],
            p = e[o],
            m = this.allocateNode();
          ((m.child1 = f),
            (m.child2 = p),
            (m.height = 1 + Ce(f.height, p.height)),
            m.aabb.combine(f.aabb, p.aabb),
            (m.parent = null),
            (f.parent = m),
            (p.parent = m),
            (e[o] = e[t - 1]),
            (e[a] = m),
            --t);
        }
        this.m_root = e[0];
      }),
      (e.prototype.shiftOrigin = function (e) {
        for (
          var t, n = this.iteratorPool.allocate().preorder(this.m_root);
          (t = n.next());
        ) {
          var r = t.aabb;
          ((r.lowerBound.x -= e.x),
            (r.lowerBound.y -= e.y),
            (r.upperBound.x -= e.x),
            (r.upperBound.y -= e.y));
        }
        this.iteratorPool.release(n);
      }),
      (e.prototype.query = function (e, t) {
        var n = this.stackPool.allocate();
        for (n.push(this.m_root); n.length > 0;) {
          var r = n.pop();
          if (r != null && ye.testOverlap(r.aabb, e))
            if (r.isLeaf()) {
              if (t(r.id) === !1) return;
            } else (n.push(r.child1), n.push(r.child2));
        }
        this.stackPool.release(n);
      }),
      (e.prototype.rayCast = function (e, t) {
        var n = e.p1,
          r = e.p2,
          i = j.sub(r, n);
        i.normalize();
        var a = j.crossNumVec2(1, i),
          o = j.abs(a),
          s = e.maxFraction,
          c = new ye(),
          l = j.combine(1 - s, n, s, r);
        c.combinePoints(n, l);
        var u = this.stackPool.allocate(),
          d = this.inputPool.allocate();
        for (u.push(this.m_root); u.length > 0;) {
          var f = u.pop();
          if (f != null && ye.testOverlap(f.aabb, c) !== !1) {
            var p = f.aabb.getCenter(),
              m = f.aabb.getExtents();
            if (!(Se(j.dot(a, j.sub(n, p))) - j.dot(o, m) > 0))
              if (f.isLeaf()) {
                ((d.p1 = j.clone(e.p1)),
                  (d.p2 = j.clone(e.p2)),
                  (d.maxFraction = s));
                var h = t(d, f.id);
                if (h === 0) break;
                h > 0 &&
                  ((s = h),
                  (l = j.combine(1 - s, n, s, r)),
                  c.combinePoints(n, l));
              } else (u.push(f.child1), u.push(f.child2));
          }
        }
        (this.stackPool.release(u), this.inputPool.release(d));
      }),
      e
    );
  })(),
  De = (function () {
    function e() {
      ((this.parents = []), (this.states = []));
    }
    return (
      (e.prototype.preorder = function (e) {
        return (
          (this.parents.length = 0),
          this.parents.push(e),
          (this.states.length = 0),
          this.states.push(0),
          this
        );
      }),
      (e.prototype.next = function () {
        for (; this.parents.length > 0;) {
          var e = this.parents.length - 1,
            t = this.parents[e];
          if (this.states[e] === 0) return ((this.states[e] = 1), t);
          if (this.states[e] === 1 && ((this.states[e] = 2), t.child1))
            return (this.parents.push(t.child1), this.states.push(1), t.child1);
          if (this.states[e] === 2 && ((this.states[e] = 3), t.child2))
            return (this.parents.push(t.child2), this.states.push(1), t.child2);
          (this.parents.pop(), this.states.pop());
        }
      }),
      (e.prototype.close = function () {
        this.parents.length = 0;
      }),
      e
    );
  })(),
  Oe = Math.max,
  ke = Math.min,
  Ae = (function () {
    function e() {
      var e = this;
      ((this.m_tree = new Ee()),
        (this.m_moveBuffer = []),
        (this.query = function (t, n) {
          e.m_tree.query(t, n);
        }),
        (this.queryCallback = function (t) {
          if (t === e.m_queryProxyId) return !0;
          var n = ke(t, e.m_queryProxyId),
            r = Oe(t, e.m_queryProxyId),
            i = e.m_tree.getUserData(n),
            a = e.m_tree.getUserData(r);
          return (e.m_callback(i, a), !0);
        }));
    }
    return (
      (e.prototype.getUserData = function (e) {
        return this.m_tree.getUserData(e);
      }),
      (e.prototype.testOverlap = function (e, t) {
        var n = this.m_tree.getFatAABB(e),
          r = this.m_tree.getFatAABB(t);
        return ye.testOverlap(n, r);
      }),
      (e.prototype.getFatAABB = function (e) {
        return this.m_tree.getFatAABB(e);
      }),
      (e.prototype.getProxyCount = function () {
        return this.m_moveBuffer.length;
      }),
      (e.prototype.getTreeHeight = function () {
        return this.m_tree.getHeight();
      }),
      (e.prototype.getTreeBalance = function () {
        return this.m_tree.getMaxBalance();
      }),
      (e.prototype.getTreeQuality = function () {
        return this.m_tree.getAreaRatio();
      }),
      (e.prototype.rayCast = function (e, t) {
        this.m_tree.rayCast(e, t);
      }),
      (e.prototype.shiftOrigin = function (e) {
        this.m_tree.shiftOrigin(e);
      }),
      (e.prototype.createProxy = function (e, t) {
        var n = this.m_tree.createProxy(e, t);
        return (this.bufferMove(n), n);
      }),
      (e.prototype.destroyProxy = function (e) {
        (this.unbufferMove(e), this.m_tree.destroyProxy(e));
      }),
      (e.prototype.moveProxy = function (e, t, n) {
        this.m_tree.moveProxy(e, t, n) && this.bufferMove(e);
      }),
      (e.prototype.touchProxy = function (e) {
        this.bufferMove(e);
      }),
      (e.prototype.bufferMove = function (e) {
        this.m_moveBuffer.push(e);
      }),
      (e.prototype.unbufferMove = function (e) {
        for (var t = 0; t < this.m_moveBuffer.length; ++t)
          this.m_moveBuffer[t] === e && (this.m_moveBuffer[t] = null);
      }),
      (e.prototype.updatePairs = function (e) {
        for (this.m_callback = e; this.m_moveBuffer.length > 0;)
          if (
            ((this.m_queryProxyId = this.m_moveBuffer.pop()),
            this.m_queryProxyId !== null)
          ) {
            var t = this.m_tree.getFatAABB(this.m_queryProxyId);
            this.m_tree.query(t, this.queryCallback);
          }
      }),
      e
    );
  })(),
  je = Math.sin,
  Me = Math.cos,
  Ne = Math.sqrt;
function P(e, t) {
  return { x: e, y: t };
}
function Pe(e) {
  return { s: je(e), c: Me(e) };
}
function Fe(e, t, n) {
  return ((e.x = t), (e.y = n), e);
}
function F(e, t) {
  return ((e.x = t.x), (e.y = t.y), e);
}
function I(e) {
  return ((e.x = 0), (e.y = 0), e);
}
function Ie(e) {
  return ((e.x = -e.x), (e.y = -e.y), e);
}
function Le(e, t) {
  return ((e.x += t.x), (e.y += t.y), e);
}
function Re(e, t, n) {
  return ((e.x = t.x + n.x), (e.y = t.y + n.y), e);
}
function ze(e, t) {
  return ((e.x -= t.x), (e.y -= t.y), e);
}
function L(e, t, n) {
  return ((e.x = t.x - n.x), (e.y = t.y - n.y), e);
}
function Be(e, t) {
  return ((e.x *= t), (e.y *= t), e);
}
function R(e, t, n) {
  return ((e.x = t * n.x), (e.y = t * n.y), e);
}
function Ve(e, t, n) {
  return ((e.x += t * n.x), (e.y += t * n.y), e);
}
function He(e, t, n) {
  return ((e.x -= t * n.x), (e.y -= t * n.y), e);
}
function z(e, t, n, r, i) {
  return ((e.x = t * n.x + r * i.x), (e.y = t * n.y + r * i.y), e);
}
function Ue(e, t, n, r, i, a, o) {
  return (
    (e.x = t * n.x + r * i.x + a * o.x),
    (e.y = t * n.y + r * i.y + a * o.y),
    e
  );
}
function We(e) {
  var t = Ne(e.x * e.x + e.y * e.y);
  if (t !== 0) {
    var n = 1 / t;
    ((e.x *= n), (e.y *= n));
  }
  return t;
}
function Ge(e) {
  var t = Ne(e.x * e.x + e.y * e.y);
  if (t > 0) {
    var n = 1 / t;
    ((e.x *= n), (e.y *= n));
  }
  return e;
}
function Ke(e, t, n) {
  var r = n * t.y,
    i = -n * t.x;
  return ((e.x = r), (e.y = i), e);
}
function qe(e, t, n) {
  var r = -t * n.y,
    i = t * n.x;
  return ((e.x = r), (e.y = i), e);
}
function B(e, t) {
  return e.x * t.y - e.y * t.x;
}
function V(e, t) {
  return e.x * t.x + e.y * t.y;
}
function Je(e) {
  return e.x * e.x + e.y * e.y;
}
function Ye(e, t) {
  var n = e.x - t.x,
    r = e.y - t.y;
  return Ne(n * n + r * r);
}
function Xe(e, t) {
  var n = e.x - t.x,
    r = e.y - t.y;
  return n * n + r * r;
}
function Ze(e, t) {
  return ((e.c = Me(t)), (e.s = je(t)), e);
}
function Qe(e, t, n) {
  return ((e.x = t.c * n.x - t.s * n.y), (e.y = t.s * n.x + t.c * n.y), e);
}
function $e(e, t, n) {
  var r = t.c * n.x + t.s * n.y,
    i = -t.s * n.x + t.c * n.y;
  return ((e.x = r), (e.y = i), e);
}
function et(e, t, n, r) {
  var i = t.c * r.x + t.s * r.y,
    a = -t.s * r.x + t.c * r.y,
    o = n.c * i - n.s * a,
    s = n.s * i + n.c * a;
  return ((e.x = o), (e.y = s), e);
}
function tt(e, t, n) {
  return { p: P(e, t), q: Pe(n) };
}
function nt(e, t) {
  return (
    (e.p.x = t.p.x),
    (e.p.y = t.p.y),
    (e.q.s = t.q.s),
    (e.q.c = t.q.c),
    e
  );
}
function H(e, t, n) {
  var r = t.q.c * n.x - t.q.s * n.y + t.p.x,
    i = t.q.s * n.x + t.q.c * n.y + t.p.y;
  return ((e.x = r), (e.y = i), e);
}
function rt(e, t, n) {
  var r = n.x - t.p.x,
    i = n.y - t.p.y,
    a = t.q.c * r + t.q.s * i,
    o = -t.q.s * r + t.q.c * i;
  return ((e.x = a), (e.y = o), e);
}
function it(e, t, n, r) {
  var i = t.q.c * r.x - t.q.s * r.y + t.p.x,
    a = t.q.s * r.x + t.q.c * r.y + t.p.y,
    o = i - n.p.x,
    s = a - n.p.y,
    c = n.q.c * o + n.q.s * s,
    l = -n.q.s * o + n.q.c * s;
  return ((e.x = c), (e.y = l), e);
}
function at(e, t, n) {
  var r = t.q.c * n.q.c + t.q.s * n.q.s,
    i = t.q.c * n.q.s - t.q.s * n.q.c,
    a = t.q.c * (n.p.x - t.p.x) + t.q.s * (n.p.y - t.p.y),
    o = -t.q.s * (n.p.x - t.p.x) + t.q.c * (n.p.y - t.p.y);
  return ((e.q.c = r), (e.q.s = i), (e.p.x = a), (e.p.y = o), e);
}
var ot = Math.sin,
  st = Math.cos,
  ct = Math.atan2,
  U = (function () {
    function e(t) {
      if (!(this instanceof e)) return new e(t);
      typeof t == `number`
        ? this.setAngle(t)
        : typeof t == `object`
          ? this.setRot(t)
          : this.setIdentity();
    }
    return (
      (e.neo = function (t) {
        var n = Object.create(e.prototype);
        return (n.setAngle(t), n);
      }),
      (e.clone = function (t) {
        var n = Object.create(e.prototype);
        return ((n.s = t.s), (n.c = t.c), n);
      }),
      (e.identity = function () {
        var t = Object.create(e.prototype);
        return ((t.s = 0), (t.c = 1), t);
      }),
      (e.isValid = function (e) {
        return e != null && Number.isFinite(e.s) && Number.isFinite(e.c);
      }),
      (e.assert = function (e) {}),
      (e.prototype.setIdentity = function () {
        ((this.s = 0), (this.c = 1));
      }),
      (e.prototype.set = function (e) {
        typeof e == `object`
          ? ((this.s = e.s), (this.c = e.c))
          : ((this.s = ot(e)), (this.c = st(e)));
      }),
      (e.prototype.setRot = function (e) {
        ((this.s = e.s), (this.c = e.c));
      }),
      (e.prototype.setAngle = function (e) {
        ((this.s = ot(e)), (this.c = st(e)));
      }),
      (e.prototype.getAngle = function () {
        return ct(this.s, this.c);
      }),
      (e.prototype.getXAxis = function () {
        return j.neo(this.c, this.s);
      }),
      (e.prototype.getYAxis = function () {
        return j.neo(-this.s, this.c);
      }),
      (e.mul = function (t, n) {
        if (`c` in n && `s` in n) {
          var r = e.identity();
          return (
            (r.s = t.s * n.c + t.c * n.s),
            (r.c = t.c * n.c - t.s * n.s),
            r
          );
        }
        if (`x` in n && `y` in n)
          return j.neo(t.c * n.x - t.s * n.y, t.s * n.x + t.c * n.y);
      }),
      (e.mulRot = function (t, n) {
        var r = e.identity();
        return (
          (r.s = t.s * n.c + t.c * n.s),
          (r.c = t.c * n.c - t.s * n.s),
          r
        );
      }),
      (e.mulVec2 = function (e, t) {
        return j.neo(e.c * t.x - e.s * t.y, e.s * t.x + e.c * t.y);
      }),
      (e.mulSub = function (e, t, n) {
        var r = e.c * (t.x - n.x) - e.s * (t.y - n.y),
          i = e.s * (t.x - n.x) + e.c * (t.y - n.y);
        return j.neo(r, i);
      }),
      (e.mulT = function (t, n) {
        if (`c` in n && `s` in n) {
          var r = e.identity();
          return (
            (r.s = t.c * n.s - t.s * n.c),
            (r.c = t.c * n.c + t.s * n.s),
            r
          );
        }
        if (`x` in n && `y` in n)
          return j.neo(t.c * n.x + t.s * n.y, -t.s * n.x + t.c * n.y);
      }),
      (e.mulTRot = function (t, n) {
        var r = e.identity();
        return (
          (r.s = t.c * n.s - t.s * n.c),
          (r.c = t.c * n.c + t.s * n.s),
          r
        );
      }),
      (e.mulTVec2 = function (e, t) {
        return j.neo(e.c * t.x + e.s * t.y, -e.s * t.x + e.c * t.y);
      }),
      e
    );
  })(),
  lt = Math.atan2,
  ut = Math.PI,
  dt = P(0, 0),
  ft = (function () {
    function e() {
      ((this.localCenter = j.zero()),
        (this.c = j.zero()),
        (this.a = 0),
        (this.alpha0 = 0),
        (this.c0 = j.zero()),
        (this.a0 = 0));
    }
    return (
      (e.prototype.recycle = function () {
        (I(this.localCenter),
          I(this.c),
          (this.a = 0),
          (this.alpha0 = 0),
          I(this.c0),
          (this.a0 = 0));
      }),
      (e.prototype.setTransform = function (e) {
        (H(dt, e, this.localCenter),
          F(this.c, dt),
          F(this.c0, dt),
          (this.a = this.a0 = lt(e.q.s, e.q.c)));
      }),
      (e.prototype.setLocalCenter = function (e, t) {
        (F(this.localCenter, e),
          H(dt, t, this.localCenter),
          F(this.c, dt),
          F(this.c0, dt));
      }),
      (e.prototype.getTransform = function (e, t) {
        (t === void 0 && (t = 0),
          Ze(e.q, (1 - t) * this.a0 + t * this.a),
          z(e.p, 1 - t, this.c0, t, this.c),
          ze(e.p, Qe(dt, e.q, this.localCenter)));
      }),
      (e.prototype.advance = function (e) {
        var t = (e - this.alpha0) / (1 - this.alpha0);
        (z(this.c0, t, this.c, 1 - t, this.c0),
          (this.a0 = t * this.a + (1 - t) * this.a0),
          (this.alpha0 = e));
      }),
      (e.prototype.forward = function () {
        ((this.a0 = this.a), F(this.c0, this.c));
      }),
      (e.prototype.normalize = function () {
        var e = le(this.a0, -ut, +ut);
        ((this.a -= this.a0 - e), (this.a0 = e));
      }),
      (e.prototype.isValid = function () {
        return (
          Number.isFinite(this.localCenter.x) &&
          Number.isFinite(this.localCenter.y) &&
          Number.isFinite(this.c0.x) &&
          Number.isFinite(this.c0.y) &&
          Number.isFinite(this.c.x) &&
          Number.isFinite(this.c.y) &&
          Number.isFinite(this.a0) &&
          Number.isFinite(this.a) &&
          Number.isFinite(this.alpha0)
        );
      }),
      (e.prototype.set = function (e) {
        (F(this.localCenter, e.localCenter),
          F(this.c, e.c),
          (this.a = e.a),
          (this.alpha0 = e.alpha0),
          F(this.c0, e.c0),
          (this.a0 = e.a0));
      }),
      e
    );
  })(),
  pt = (function () {
    function e(t, n) {
      if (!(this instanceof e)) return new e(t, n);
      ((this.p = j.zero()),
        (this.q = U.identity()),
        t !== void 0 && this.p.setVec2(t),
        n !== void 0 && this.q.setAngle(n));
    }
    return (
      (e.clone = function (t) {
        var n = Object.create(e.prototype);
        return ((n.p = j.clone(t.p)), (n.q = U.clone(t.q)), n);
      }),
      (e.neo = function (t, n) {
        var r = Object.create(e.prototype);
        return ((r.p = j.clone(t)), (r.q = U.clone(n)), r);
      }),
      (e.identity = function () {
        var t = Object.create(e.prototype);
        return ((t.p = j.zero()), (t.q = U.identity()), t);
      }),
      (e.prototype.setIdentity = function () {
        (this.p.setZero(), this.q.setIdentity());
      }),
      (e.prototype.set = function (e, t) {
        t === void 0
          ? (this.p.set(e.p), this.q.set(e.q))
          : (this.p.set(e), this.q.set(t));
      }),
      (e.prototype.setNum = function (e, t) {
        (this.p.setVec2(e), this.q.setAngle(t));
      }),
      (e.prototype.setTransform = function (e) {
        (this.p.setVec2(e.p), this.q.setRot(e.q));
      }),
      (e.isValid = function (e) {
        return e != null && j.isValid(e.p) && U.isValid(e.q);
      }),
      (e.assert = function (e) {}),
      (e.mul = function (t, n) {
        if (Array.isArray(n)) {
          for (var r = [], i = 0; i < n.length; i++) r[i] = e.mul(t, n[i]);
          return r;
        }
        if (`x` in n && `y` in n) return e.mulVec2(t, n);
        if (`p` in n && `q` in n) return e.mulXf(t, n);
      }),
      (e.mulAll = function (t, n) {
        for (var r = [], i = 0; i < n.length; i++) r[i] = e.mul(t, n[i]);
        return r;
      }),
      (e.mulFn = function (t) {
        return function (n) {
          return e.mul(t, n);
        };
      }),
      (e.mulVec2 = function (e, t) {
        var n = e.q.c * t.x - e.q.s * t.y + e.p.x,
          r = e.q.s * t.x + e.q.c * t.y + e.p.y;
        return j.neo(n, r);
      }),
      (e.mulXf = function (t, n) {
        var r = e.identity();
        return (
          (r.q = U.mulRot(t.q, n.q)),
          (r.p = j.add(U.mulVec2(t.q, n.p), t.p)),
          r
        );
      }),
      (e.mulT = function (t, n) {
        if (`x` in n && `y` in n) return e.mulTVec2(t, n);
        if (`p` in n && `q` in n) return e.mulTXf(t, n);
      }),
      (e.mulTVec2 = function (e, t) {
        var n = t.x - e.p.x,
          r = t.y - e.p.y,
          i = e.q.c * n + e.q.s * r,
          a = -e.q.s * n + e.q.c * r;
        return j.neo(i, a);
      }),
      (e.mulTXf = function (t, n) {
        var r = e.identity();
        return (
          r.q.setRot(U.mulTRot(t.q, n.q)),
          r.p.setVec2(U.mulTVec2(t.q, j.sub(n.p, t.p))),
          r
        );
      }),
      e
    );
  })(),
  mt = (function () {
    function e() {
      ((this.v = j.zero()), (this.w = 0));
    }
    return e;
  })(),
  ht = Math.sin,
  gt = Math.cos,
  _t = (function () {
    function e() {
      ((this.c = j.zero()), (this.a = 0));
    }
    return (
      (e.prototype.getTransform = function (e, t) {
        return (
          (e.q.c = gt(this.a)),
          (e.q.s = ht(this.a)),
          (e.p.x = this.c.x - (e.q.c * t.x - e.q.s * t.y)),
          (e.p.y = this.c.y - (e.q.s * t.x + e.q.c * t.y)),
          e
        );
      }),
      e
    );
  })();
function vt(e, t, n, r) {
  return (
    (e.q.c = gt(r)),
    (e.q.s = ht(r)),
    (e.p.x = n.x - (e.q.c * t.x - e.q.s * t.y)),
    (e.p.y = n.y - (e.q.s * t.x + e.q.c * t.y)),
    e
  );
}
var yt = (function () {
    function e() {
      ((this.style = {}), (this.appData = {}));
    }
    return (
      (e.isValid = function (e) {
        return (
          e != null &&
          typeof e.m_type == `string` &&
          typeof e.m_radius == `number`
        );
      }),
      e
    );
  })(),
  bt = new ye(),
  xt = new ye(),
  St = P(0, 0),
  Ct = {
    userData: null,
    friction: 0.2,
    restitution: 0,
    density: 0,
    isSensor: !1,
    filterGroupIndex: 0,
    filterCategoryBits: 1,
    filterMaskBits: 65535,
  },
  wt = (function () {
    function e(e, t) {
      ((this.aabb = new ye()), (this.fixture = e), (this.childIndex = t));
    }
    return e;
  })(),
  Tt = (function () {
    function e(e, t, n) {
      ((this.style = {}),
        (this.appData = {}),
        t.shape
          ? ((n = t), (t = t.shape))
          : typeof n == `number` && (n = { density: n }),
        (n = re(n, Ct)),
        (this.m_body = e),
        (this.m_friction = n.friction),
        (this.m_restitution = n.restitution),
        (this.m_density = n.density),
        (this.m_isSensor = n.isSensor),
        (this.m_filterGroupIndex = n.filterGroupIndex),
        (this.m_filterCategoryBits = n.filterCategoryBits),
        (this.m_filterMaskBits = n.filterMaskBits),
        (this.m_shape = t),
        (this.m_next = null),
        (this.m_proxies = []),
        (this.m_proxyCount = 0));
      for (var r = this.m_shape.getChildCount(), i = 0; i < r; ++i)
        this.m_proxies[i] = new wt(this, i);
      ((this.m_userData = n.userData),
        typeof n.style == `object` &&
          n.style !== null &&
          (this.style = n.style));
    }
    return (
      (e.prototype._reset = function () {
        var e = this.getBody(),
          t = e.m_world.m_broadPhase;
        (this.destroyProxies(t), this.m_shape._reset && this.m_shape._reset());
        for (var n = this.m_shape.getChildCount(), r = 0; r < n; ++r)
          this.m_proxies[r] = new wt(this, r);
        (this.createProxies(t, e.m_xf), e.resetMassData());
      }),
      (e.prototype._serialize = function () {
        return {
          friction: this.m_friction,
          restitution: this.m_restitution,
          density: this.m_density,
          isSensor: this.m_isSensor,
          filterGroupIndex: this.m_filterGroupIndex,
          filterCategoryBits: this.m_filterCategoryBits,
          filterMaskBits: this.m_filterMaskBits,
          shape: this.m_shape,
        };
      }),
      (e._deserialize = function (t, n, r) {
        var i = r(yt, t.shape);
        return i && new e(n, i, t);
      }),
      (e.prototype.getType = function () {
        return this.m_shape.m_type;
      }),
      (e.prototype.getShape = function () {
        return this.m_shape;
      }),
      (e.prototype.isSensor = function () {
        return this.m_isSensor;
      }),
      (e.prototype.setSensor = function (e) {
        e != this.m_isSensor &&
          (this.m_body.setAwake(!0), (this.m_isSensor = e));
      }),
      (e.prototype.getUserData = function () {
        return this.m_userData;
      }),
      (e.prototype.setUserData = function (e) {
        this.m_userData = e;
      }),
      (e.prototype.getBody = function () {
        return this.m_body;
      }),
      (e.prototype.getNext = function () {
        return this.m_next;
      }),
      (e.prototype.getDensity = function () {
        return this.m_density;
      }),
      (e.prototype.setDensity = function (e) {
        this.m_density = e;
      }),
      (e.prototype.getFriction = function () {
        return this.m_friction;
      }),
      (e.prototype.setFriction = function (e) {
        this.m_friction = e;
      }),
      (e.prototype.getRestitution = function () {
        return this.m_restitution;
      }),
      (e.prototype.setRestitution = function (e) {
        this.m_restitution = e;
      }),
      (e.prototype.testPoint = function (e) {
        return this.m_shape.testPoint(this.m_body.getTransform(), e);
      }),
      (e.prototype.rayCast = function (e, t, n) {
        return this.m_shape.rayCast(e, t, this.m_body.getTransform(), n);
      }),
      (e.prototype.getMassData = function (e) {
        this.m_shape.computeMass(e, this.m_density);
      }),
      (e.prototype.getAABB = function (e) {
        return this.m_proxies[e].aabb;
      }),
      (e.prototype.createProxies = function (e, t) {
        this.m_proxyCount = this.m_shape.getChildCount();
        for (var n = 0; n < this.m_proxyCount; ++n) {
          var r = this.m_proxies[n];
          (this.m_shape.computeAABB(r.aabb, t, n),
            (r.proxyId = e.createProxy(r.aabb, r)));
        }
      }),
      (e.prototype.destroyProxies = function (e) {
        for (var t = 0; t < this.m_proxyCount; ++t) {
          var n = this.m_proxies[t];
          (e.destroyProxy(n.proxyId), (n.proxyId = null));
        }
        this.m_proxyCount = 0;
      }),
      (e.prototype.synchronize = function (e, t, n) {
        for (var r = 0; r < this.m_proxyCount; ++r) {
          var i = this.m_proxies[r];
          (this.m_shape.computeAABB(bt, t, i.childIndex),
            this.m_shape.computeAABB(xt, n, i.childIndex),
            i.aabb.combine(bt, xt),
            L(St, n.p, t.p),
            e.moveProxy(i.proxyId, i.aabb, St));
        }
      }),
      (e.prototype.setFilterData = function (e) {
        ((this.m_filterGroupIndex = e.groupIndex),
          (this.m_filterCategoryBits = e.categoryBits),
          (this.m_filterMaskBits = e.maskBits),
          this.refilter());
      }),
      (e.prototype.getFilterGroupIndex = function () {
        return this.m_filterGroupIndex;
      }),
      (e.prototype.setFilterGroupIndex = function (e) {
        ((this.m_filterGroupIndex = e), this.refilter());
      }),
      (e.prototype.getFilterCategoryBits = function () {
        return this.m_filterCategoryBits;
      }),
      (e.prototype.setFilterCategoryBits = function (e) {
        ((this.m_filterCategoryBits = e), this.refilter());
      }),
      (e.prototype.getFilterMaskBits = function () {
        return this.m_filterMaskBits;
      }),
      (e.prototype.setFilterMaskBits = function (e) {
        ((this.m_filterMaskBits = e), this.refilter());
      }),
      (e.prototype.refilter = function () {
        if (this.m_body != null) {
          for (var e = this.m_body.getContactList(); e;) {
            var t = e.contact,
              n = t.getFixtureA(),
              r = t.getFixtureB();
            ((n == this || r == this) && t.flagForFiltering(), (e = e.next));
          }
          var i = this.m_body.getWorld();
          if (i != null)
            for (var a = i.m_broadPhase, o = 0; o < this.m_proxyCount; ++o)
              a.touchProxy(this.m_proxies[o].proxyId);
        }
      }),
      (e.prototype.shouldCollide = function (e) {
        if (
          e.m_filterGroupIndex === this.m_filterGroupIndex &&
          e.m_filterGroupIndex !== 0
        )
          return e.m_filterGroupIndex > 0;
        var t = (e.m_filterMaskBits & this.m_filterCategoryBits) !== 0,
          n = (e.m_filterCategoryBits & this.m_filterMaskBits) !== 0;
        return t && n;
      }),
      e
    );
  })(),
  Et = `static`,
  Dt = `kinematic`,
  Ot = `dynamic`,
  kt = P(0, 0),
  At = P(0, 0),
  jt = P(0, 0),
  Mt = P(0, 0),
  Nt = tt(0, 0, 0),
  Pt = {
    type: Et,
    position: j.zero(),
    angle: 0,
    linearVelocity: j.zero(),
    angularVelocity: 0,
    linearDamping: 0,
    angularDamping: 0,
    fixedRotation: !1,
    bullet: !1,
    gravityScale: 1,
    allowSleep: !0,
    awake: !0,
    active: !0,
    userData: null,
  },
  W = (function () {
    function e(e, t) {
      ((this.style = {}),
        (this.appData = {}),
        (t = re(t, Pt)),
        (this.m_world = e),
        (this.m_awakeFlag = t.awake),
        (this.m_autoSleepFlag = t.allowSleep),
        (this.m_bulletFlag = t.bullet),
        (this.m_fixedRotationFlag = t.fixedRotation),
        (this.m_activeFlag = t.active),
        (this.m_islandFlag = !1),
        (this.m_toiFlag = !1),
        (this.m_userData = t.userData),
        (this.m_type = t.type),
        this.m_type == Ot
          ? ((this.m_mass = 1), (this.m_invMass = 1))
          : ((this.m_mass = 0), (this.m_invMass = 0)),
        (this.m_I = 0),
        (this.m_invI = 0),
        (this.m_xf = pt.identity()),
        this.m_xf.p.setVec2(t.position),
        this.m_xf.q.setAngle(t.angle),
        (this.m_sweep = new ft()),
        this.m_sweep.setTransform(this.m_xf),
        (this.c_velocity = new mt()),
        (this.c_position = new _t()),
        (this.m_force = j.zero()),
        (this.m_torque = 0),
        (this.m_linearVelocity = j.clone(t.linearVelocity)),
        (this.m_angularVelocity = t.angularVelocity),
        (this.m_linearDamping = t.linearDamping),
        (this.m_angularDamping = t.angularDamping),
        (this.m_gravityScale = t.gravityScale),
        (this.m_sleepTime = 0),
        (this.m_jointList = null),
        (this.m_contactList = null),
        (this.m_fixtureList = null),
        (this.m_prev = null),
        (this.m_next = null),
        (this.m_destroyed = !1),
        typeof t.style == `object` &&
          t.style !== null &&
          (this.style = t.style));
    }
    return (
      (e.prototype._serialize = function () {
        for (var e = [], t = this.m_fixtureList; t; t = t.m_next) e.push(t);
        return {
          type: this.m_type,
          bullet: this.m_bulletFlag,
          fixedRotation: this.m_fixedRotationFlag,
          position: this.m_xf.p,
          angle: this.m_xf.q.getAngle(),
          linearVelocity: this.m_linearVelocity,
          angularVelocity: this.m_angularVelocity,
          fixtures: e,
        };
      }),
      (e._deserialize = function (t, n, r) {
        var i = new e(n, t);
        if (t.fixtures)
          for (var a = t.fixtures.length - 1; a >= 0; a--) {
            var o = r(Tt, t.fixtures[a], i);
            i._addFixture(o);
          }
        return i;
      }),
      (e.prototype.isWorldLocked = function () {
        return !!(this.m_world && this.m_world.isLocked());
      }),
      (e.prototype.getWorld = function () {
        return this.m_world;
      }),
      (e.prototype.getNext = function () {
        return this.m_next;
      }),
      (e.prototype.setUserData = function (e) {
        this.m_userData = e;
      }),
      (e.prototype.getUserData = function () {
        return this.m_userData;
      }),
      (e.prototype.getFixtureList = function () {
        return this.m_fixtureList;
      }),
      (e.prototype.getJointList = function () {
        return this.m_jointList;
      }),
      (e.prototype.getContactList = function () {
        return this.m_contactList;
      }),
      (e.prototype.isStatic = function () {
        return this.m_type == Et;
      }),
      (e.prototype.isDynamic = function () {
        return this.m_type == Ot;
      }),
      (e.prototype.isKinematic = function () {
        return this.m_type == Dt;
      }),
      (e.prototype.setStatic = function () {
        return (this.setType(Et), this);
      }),
      (e.prototype.setDynamic = function () {
        return (this.setType(Ot), this);
      }),
      (e.prototype.setKinematic = function () {
        return (this.setType(Dt), this);
      }),
      (e.prototype.getType = function () {
        return this.m_type;
      }),
      (e.prototype.setType = function (e) {
        if (this.isWorldLocked() != 1 && this.m_type != e) {
          ((this.m_type = e),
            this.resetMassData(),
            this.m_type == Et &&
              (this.m_linearVelocity.setZero(),
              (this.m_angularVelocity = 0),
              this.m_sweep.forward(),
              this.synchronizeFixtures()),
            this.setAwake(!0),
            this.m_force.setZero(),
            (this.m_torque = 0));
          for (var t = this.m_contactList; t;) {
            var n = t;
            ((t = t.next), this.m_world.destroyContact(n.contact));
          }
          this.m_contactList = null;
          for (
            var r = this.m_world.m_broadPhase, i = this.m_fixtureList;
            i;
            i = i.m_next
          )
            for (var a = 0; a < i.m_proxyCount; ++a)
              r.touchProxy(i.m_proxies[a].proxyId);
        }
      }),
      (e.prototype.isBullet = function () {
        return this.m_bulletFlag;
      }),
      (e.prototype.setBullet = function (e) {
        this.m_bulletFlag = !!e;
      }),
      (e.prototype.isSleepingAllowed = function () {
        return this.m_autoSleepFlag;
      }),
      (e.prototype.setSleepingAllowed = function (e) {
        ((this.m_autoSleepFlag = !!e),
          this.m_autoSleepFlag == 0 && this.setAwake(!0));
      }),
      (e.prototype.isAwake = function () {
        return this.m_awakeFlag;
      }),
      (e.prototype.setAwake = function (e) {
        e
          ? ((this.m_awakeFlag = !0), (this.m_sleepTime = 0))
          : ((this.m_awakeFlag = !1),
            (this.m_sleepTime = 0),
            this.m_linearVelocity.setZero(),
            (this.m_angularVelocity = 0),
            this.m_force.setZero(),
            (this.m_torque = 0));
      }),
      (e.prototype.isActive = function () {
        return this.m_activeFlag;
      }),
      (e.prototype.setActive = function (e) {
        if (e != this.m_activeFlag)
          if (((this.m_activeFlag = !!e), this.m_activeFlag)) {
            for (
              var t = this.m_world.m_broadPhase, n = this.m_fixtureList;
              n;
              n = n.m_next
            )
              n.createProxies(t, this.m_xf);
            this.m_world.m_newFixture = !0;
          } else {
            for (
              var t = this.m_world.m_broadPhase, n = this.m_fixtureList;
              n;
              n = n.m_next
            )
              n.destroyProxies(t);
            for (var r = this.m_contactList; r;) {
              var i = r;
              ((r = r.next), this.m_world.destroyContact(i.contact));
            }
            this.m_contactList = null;
          }
      }),
      (e.prototype.isFixedRotation = function () {
        return this.m_fixedRotationFlag;
      }),
      (e.prototype.setFixedRotation = function (e) {
        this.m_fixedRotationFlag != e &&
          ((this.m_fixedRotationFlag = !!e),
          (this.m_angularVelocity = 0),
          this.resetMassData());
      }),
      (e.prototype.getTransform = function () {
        return this.m_xf;
      }),
      (e.prototype.setTransform = function (e, t) {
        if (this.isWorldLocked() != 1) {
          (typeof t == `number`
            ? this.m_xf.setNum(e, t)
            : this.m_xf.setTransform(e),
            this.m_sweep.setTransform(this.m_xf));
          for (
            var n = this.m_world.m_broadPhase, r = this.m_fixtureList;
            r;
            r = r.m_next
          )
            r.synchronize(n, this.m_xf, this.m_xf);
          this.setAwake(!0);
        }
      }),
      (e.prototype.synchronizeTransform = function () {
        this.m_sweep.getTransform(this.m_xf, 1);
      }),
      (e.prototype.synchronizeFixtures = function () {
        this.m_sweep.getTransform(Nt, 0);
        for (
          var e = this.m_world.m_broadPhase, t = this.m_fixtureList;
          t;
          t = t.m_next
        )
          t.synchronize(e, Nt, this.m_xf);
      }),
      (e.prototype.advance = function (e) {
        (this.m_sweep.advance(e),
          F(this.m_sweep.c, this.m_sweep.c0),
          (this.m_sweep.a = this.m_sweep.a0),
          this.m_sweep.getTransform(this.m_xf, 1));
      }),
      (e.prototype.getPosition = function () {
        return this.m_xf.p;
      }),
      (e.prototype.setPosition = function (e) {
        this.setTransform(e, this.m_sweep.a);
      }),
      (e.prototype.getAngle = function () {
        return this.m_sweep.a;
      }),
      (e.prototype.setAngle = function (e) {
        this.setTransform(this.m_xf.p, e);
      }),
      (e.prototype.getWorldCenter = function () {
        return this.m_sweep.c;
      }),
      (e.prototype.getLocalCenter = function () {
        return this.m_sweep.localCenter;
      }),
      (e.prototype.getLinearVelocity = function () {
        return this.m_linearVelocity;
      }),
      (e.prototype.getLinearVelocityFromWorldPoint = function (e) {
        var t = j.sub(e, this.m_sweep.c);
        return j.add(
          this.m_linearVelocity,
          j.crossNumVec2(this.m_angularVelocity, t),
        );
      }),
      (e.prototype.getLinearVelocityFromLocalPoint = function (e) {
        return this.getLinearVelocityFromWorldPoint(this.getWorldPoint(e));
      }),
      (e.prototype.setLinearVelocity = function (e) {
        this.m_type != Et &&
          (j.dot(e, e) > 0 && this.setAwake(!0),
          this.m_linearVelocity.setVec2(e));
      }),
      (e.prototype.getAngularVelocity = function () {
        return this.m_angularVelocity;
      }),
      (e.prototype.setAngularVelocity = function (e) {
        this.m_type != Et &&
          (e * e > 0 && this.setAwake(!0), (this.m_angularVelocity = e));
      }),
      (e.prototype.getLinearDamping = function () {
        return this.m_linearDamping;
      }),
      (e.prototype.setLinearDamping = function (e) {
        this.m_linearDamping = e;
      }),
      (e.prototype.getAngularDamping = function () {
        return this.m_angularDamping;
      }),
      (e.prototype.setAngularDamping = function (e) {
        this.m_angularDamping = e;
      }),
      (e.prototype.getGravityScale = function () {
        return this.m_gravityScale;
      }),
      (e.prototype.setGravityScale = function (e) {
        this.m_gravityScale = e;
      }),
      (e.prototype.getMass = function () {
        return this.m_mass;
      }),
      (e.prototype.getInertia = function () {
        return (
          this.m_I +
          this.m_mass *
            j.dot(this.m_sweep.localCenter, this.m_sweep.localCenter)
        );
      }),
      (e.prototype.getMassData = function (e) {
        ((e.mass = this.m_mass),
          (e.I = this.getInertia()),
          F(e.center, this.m_sweep.localCenter));
      }),
      (e.prototype.resetMassData = function () {
        if (
          ((this.m_mass = 0),
          (this.m_invMass = 0),
          (this.m_I = 0),
          (this.m_invI = 0),
          I(this.m_sweep.localCenter),
          this.isStatic() || this.isKinematic())
        ) {
          (F(this.m_sweep.c0, this.m_xf.p),
            F(this.m_sweep.c, this.m_xf.p),
            (this.m_sweep.a0 = this.m_sweep.a));
          return;
        }
        I(At);
        for (var e = this.m_fixtureList; e; e = e.m_next)
          if (e.m_density != 0) {
            var t = { mass: 0, center: P(0, 0), I: 0 };
            (e.getMassData(t),
              (this.m_mass += t.mass),
              Ve(At, t.mass, t.center),
              (this.m_I += t.I));
          }
        (this.m_mass > 0
          ? ((this.m_invMass = 1 / this.m_mass), R(At, this.m_invMass, At))
          : ((this.m_mass = 1), (this.m_invMass = 1)),
          this.m_I > 0 && this.m_fixedRotationFlag == 0
            ? ((this.m_I -= this.m_mass * V(At, At)),
              (this.m_invI = 1 / this.m_I))
            : ((this.m_I = 0), (this.m_invI = 0)),
          F(kt, this.m_sweep.c),
          this.m_sweep.setLocalCenter(At, this.m_xf),
          L(jt, this.m_sweep.c, kt),
          qe(Mt, this.m_angularVelocity, jt),
          Le(this.m_linearVelocity, Mt));
      }),
      (e.prototype.setMassData = function (e) {
        this.isWorldLocked() != 1 &&
          this.m_type == Ot &&
          ((this.m_invMass = 0),
          (this.m_I = 0),
          (this.m_invI = 0),
          (this.m_mass = e.mass),
          this.m_mass <= 0 && (this.m_mass = 1),
          (this.m_invMass = 1 / this.m_mass),
          e.I > 0 &&
            this.m_fixedRotationFlag == 0 &&
            ((this.m_I = e.I - this.m_mass * V(e.center, e.center)),
            (this.m_invI = 1 / this.m_I)),
          F(kt, this.m_sweep.c),
          this.m_sweep.setLocalCenter(e.center, this.m_xf),
          L(jt, this.m_sweep.c, kt),
          qe(Mt, this.m_angularVelocity, jt),
          Le(this.m_linearVelocity, Mt));
      }),
      (e.prototype.applyForce = function (e, t, n) {
        (n === void 0 && (n = !0),
          this.m_type == Ot &&
            (n && this.m_awakeFlag == 0 && this.setAwake(!0),
            this.m_awakeFlag &&
              (this.m_force.add(e),
              (this.m_torque += j.crossVec2Vec2(
                j.sub(t, this.m_sweep.c),
                e,
              )))));
      }),
      (e.prototype.applyForceToCenter = function (e, t) {
        (t === void 0 && (t = !0),
          this.m_type == Ot &&
            (t && this.m_awakeFlag == 0 && this.setAwake(!0),
            this.m_awakeFlag && this.m_force.add(e)));
      }),
      (e.prototype.applyTorque = function (e, t) {
        (t === void 0 && (t = !0),
          this.m_type == Ot &&
            (t && this.m_awakeFlag == 0 && this.setAwake(!0),
            this.m_awakeFlag && (this.m_torque += e)));
      }),
      (e.prototype.applyLinearImpulse = function (e, t, n) {
        (n === void 0 && (n = !0),
          this.m_type == Ot &&
            (n && this.m_awakeFlag == 0 && this.setAwake(!0),
            this.m_awakeFlag &&
              (this.m_linearVelocity.addMul(this.m_invMass, e),
              (this.m_angularVelocity +=
                this.m_invI * j.crossVec2Vec2(j.sub(t, this.m_sweep.c), e)))));
      }),
      (e.prototype.applyAngularImpulse = function (e, t) {
        (t === void 0 && (t = !0),
          this.m_type == Ot &&
            (t && this.m_awakeFlag == 0 && this.setAwake(!0),
            this.m_awakeFlag && (this.m_angularVelocity += this.m_invI * e)));
      }),
      (e.prototype.shouldCollide = function (e) {
        if (this.m_type != Ot && e.m_type != Ot) return !1;
        for (var t = this.m_jointList; t; t = t.next)
          if (t.other == e && t.joint.m_collideConnected == 0) return !1;
        return !0;
      }),
      (e.prototype._addFixture = function (e) {
        if (this.isWorldLocked() == 1) return null;
        if (this.m_activeFlag) {
          var t = this.m_world.m_broadPhase;
          e.createProxies(t, this.m_xf);
        }
        return (
          (e.m_next = this.m_fixtureList),
          (this.m_fixtureList = e),
          e.m_density > 0 && this.resetMassData(),
          (this.m_world.m_newFixture = !0),
          e
        );
      }),
      (e.prototype.createFixture = function (e, t) {
        if (this.isWorldLocked() == 1) return null;
        var n = new Tt(this, e, t);
        return (this._addFixture(n), this.m_world.publish(`add-fixture`, n), n);
      }),
      (e.prototype.destroyFixture = function (e) {
        if (this.isWorldLocked() != 1) {
          if (this.m_fixtureList === e) this.m_fixtureList = e.m_next;
          else
            for (var t = this.m_fixtureList; t != null;) {
              if (t.m_next === e) {
                t.m_next = e.m_next;
                break;
              }
              t = t.m_next;
            }
          for (var n = this.m_contactList; n;) {
            var r = n.contact;
            n = n.next;
            var i = r.getFixtureA(),
              a = r.getFixtureB();
            (e == i || e == a) && this.m_world.destroyContact(r);
          }
          if (this.m_activeFlag) {
            var o = this.m_world.m_broadPhase;
            e.destroyProxies(o);
          }
          ((e.m_body = null),
            (e.m_next = null),
            this.m_world.publish(`remove-fixture`, e),
            this.resetMassData());
        }
      }),
      (e.prototype.getWorldPoint = function (e) {
        return pt.mulVec2(this.m_xf, e);
      }),
      (e.prototype.getWorldVector = function (e) {
        return U.mulVec2(this.m_xf.q, e);
      }),
      (e.prototype.getLocalPoint = function (e) {
        return pt.mulTVec2(this.m_xf, e);
      }),
      (e.prototype.getLocalVector = function (e) {
        return U.mulTVec2(this.m_xf.q, e);
      }),
      (e.STATIC = `static`),
      (e.KINEMATIC = `kinematic`),
      (e.DYNAMIC = `dynamic`),
      e
    );
  })(),
  Ft = (function () {
    function e() {
      ((this.other = null),
        (this.joint = null),
        (this.prev = null),
        (this.next = null));
    }
    return e;
  })(),
  It = (function () {
    function e(e, t, n) {
      ((this.m_type = `unknown-joint`),
        (this.m_prev = null),
        (this.m_next = null),
        (this.m_edgeA = new Ft()),
        (this.m_edgeB = new Ft()),
        (this.m_islandFlag = !1),
        (this.style = {}),
        (this.appData = {}),
        (t = `bodyA` in e ? e.bodyA : t),
        (n = `bodyB` in e ? e.bodyB : n),
        (this.m_bodyA = t),
        (this.m_bodyB = n),
        (this.m_collideConnected = !!e.collideConnected),
        (this.m_userData = e.userData),
        typeof e.style == `object` &&
          e.style !== null &&
          (this.style = e.style));
    }
    return (
      (e.prototype.isActive = function () {
        return this.m_bodyA.isActive() && this.m_bodyB.isActive();
      }),
      (e.prototype.getType = function () {
        return this.m_type;
      }),
      (e.prototype.getBodyA = function () {
        return this.m_bodyA;
      }),
      (e.prototype.getBodyB = function () {
        return this.m_bodyB;
      }),
      (e.prototype.getNext = function () {
        return this.m_next;
      }),
      (e.prototype.getUserData = function () {
        return this.m_userData;
      }),
      (e.prototype.setUserData = function (e) {
        this.m_userData = e;
      }),
      (e.prototype.getCollideConnected = function () {
        return this.m_collideConnected;
      }),
      (e.prototype.shiftOrigin = function (e) {}),
      (e.prototype._resetAnchors = function (e) {
        return this._reset(e);
      }),
      e
    );
  })(),
  Lt = {
    gjkCalls: 0,
    gjkIters: 0,
    gjkMaxIters: 0,
    toiTime: 0,
    toiMaxTime: 0,
    toiCalls: 0,
    toiIters: 0,
    toiMaxIters: 0,
    toiRootIters: 0,
    toiMaxRootIters: 0,
    toString: function (e) {
      e =
        typeof e == `string`
          ? e
          : `
`;
      var t = ``;
      for (var n in this)
        typeof this[n] != `function` &&
          typeof this[n] != `object` &&
          (t += n + `: ` + this[n] + e);
      return t;
    },
  },
  Rt = {
    now: function () {
      return Date.now();
    },
    diff: function (e) {
      return Date.now() - e;
    },
  },
  zt = Math.max,
  Bt = P(0, 0),
  Vt = P(0, 0),
  Ht = P(0, 0),
  Ut = P(0, 0),
  Wt = P(0, 0),
  Gt = P(0, 0),
  Kt = P(0, 0);
((Lt.gjkCalls = 0), (Lt.gjkIters = 0), (Lt.gjkMaxIters = 0));
var qt = (function () {
    function e() {
      ((this.proxyA = new Zt()),
        (this.proxyB = new Zt()),
        (this.transformA = pt.identity()),
        (this.transformB = pt.identity()),
        (this.useRadii = !1));
    }
    return (
      (e.prototype.recycle = function () {
        (this.proxyA.recycle(),
          this.proxyB.recycle(),
          this.transformA.setIdentity(),
          this.transformB.setIdentity(),
          (this.useRadii = !1));
      }),
      e
    );
  })(),
  Jt = (function () {
    function e() {
      ((this.pointA = P(0, 0)),
        (this.pointB = P(0, 0)),
        (this.distance = 0),
        (this.iterations = 0));
    }
    return (
      (e.prototype.recycle = function () {
        (I(this.pointA),
          I(this.pointB),
          (this.distance = 0),
          (this.iterations = 0));
      }),
      e
    );
  })(),
  Yt = (function () {
    function e() {
      ((this.metric = 0),
        (this.indexA = []),
        (this.indexB = []),
        (this.count = 0));
    }
    return (
      (e.prototype.recycle = function () {
        ((this.metric = 0),
          (this.indexA.length = 0),
          (this.indexB.length = 0),
          (this.count = 0));
      }),
      e
    );
  })(),
  Xt = function (e, t, n) {
    ++Lt.gjkCalls;
    var r = n.proxyA,
      i = n.proxyB,
      a = n.transformA,
      o = n.transformB;
    (tn.recycle(), tn.readCache(t, r, a, i, o));
    for (
      var s = tn.m_v, c = N.maxDistanceIterations, l = [], u = [], d = 0, f = 0;
      f < c;
    ) {
      d = tn.m_count;
      for (var p = 0; p < d; ++p) ((l[p] = s[p].indexA), (u[p] = s[p].indexB));
      if ((tn.solve(), tn.m_count === 3)) break;
      var m = tn.getSearchDirection();
      if (Je(m) < ae * ae) break;
      var h = s[tn.m_count];
      ((h.indexA = r.getSupport($e(Bt, a.q, R(Bt, -1, m)))),
        H(h.wA, a, r.getVertex(h.indexA)),
        (h.indexB = i.getSupport($e(Bt, o.q, m))),
        H(h.wB, o, i.getVertex(h.indexB)),
        L(h.w, h.wB, h.wA),
        ++f,
        ++Lt.gjkIters);
      for (var g = !1, p = 0; p < d; ++p)
        if (h.indexA === l[p] && h.indexB === u[p]) {
          g = !0;
          break;
        }
      if (g) break;
      ++tn.m_count;
    }
    if (
      ((Lt.gjkMaxIters = zt(Lt.gjkMaxIters, f)),
      tn.getWitnessPoints(e.pointA, e.pointB),
      (e.distance = Ye(e.pointA, e.pointB)),
      (e.iterations = f),
      tn.writeCache(t),
      n.useRadii)
    ) {
      var _ = r.m_radius,
        v = i.m_radius;
      if (e.distance > _ + v && e.distance > ae)
        ((e.distance -= _ + v),
          L(Vt, e.pointB, e.pointA),
          Ge(Vt),
          Ve(e.pointA, _, Vt),
          He(e.pointB, v, Vt));
      else {
        var y = L(Bt, e.pointA, e.pointB);
        (F(e.pointA, y), F(e.pointB, y), (e.distance = 0));
      }
    }
  },
  Zt = (function () {
    function e() {
      ((this.m_vertices = []), (this.m_count = 0), (this.m_radius = 0));
    }
    return (
      (e.prototype.recycle = function () {
        ((this.m_vertices.length = 0), (this.m_count = 0), (this.m_radius = 0));
      }),
      (e.prototype.getVertexCount = function () {
        return this.m_count;
      }),
      (e.prototype.getVertex = function (e) {
        return this.m_vertices[e];
      }),
      (e.prototype.getSupport = function (e) {
        for (var t = 0, n = -1 / 0, r = 0; r < this.m_count; ++r) {
          var i = V(this.m_vertices[r], e);
          i > n && ((t = r), (n = i));
        }
        return t;
      }),
      (e.prototype.getSupportVertex = function (e) {
        return this.m_vertices[this.getSupport(e)];
      }),
      (e.prototype.set = function (e, t) {
        e.computeDistanceProxy(this, t);
      }),
      (e.prototype.setVertices = function (e, t, n) {
        ((this.m_vertices = e), (this.m_count = t), (this.m_radius = n));
      }),
      e
    );
  })(),
  Qt = (function () {
    function e() {
      ((this.wA = P(0, 0)),
        (this.indexA = 0),
        (this.wB = P(0, 0)),
        (this.indexB = 0),
        (this.w = P(0, 0)),
        (this.a = 0));
    }
    return (
      (e.prototype.recycle = function () {
        ((this.indexA = 0),
          (this.indexB = 0),
          I(this.wA),
          I(this.wB),
          I(this.w),
          (this.a = 0));
      }),
      (e.prototype.set = function (e) {
        ((this.indexA = e.indexA),
          (this.indexB = e.indexB),
          F(this.wA, e.wA),
          F(this.wB, e.wB),
          F(this.w, e.w),
          (this.a = e.a));
      }),
      e
    );
  })(),
  $t = P(0, 0),
  en = P(0, 0),
  tn = new ((function () {
    function e() {
      ((this.m_v1 = new Qt()),
        (this.m_v2 = new Qt()),
        (this.m_v3 = new Qt()),
        (this.m_v = [this.m_v1, this.m_v2, this.m_v3]));
    }
    return (
      (e.prototype.recycle = function () {
        (this.m_v1.recycle(),
          this.m_v2.recycle(),
          this.m_v3.recycle(),
          (this.m_count = 0));
      }),
      (e.prototype.toString = function () {
        return this.m_count === 3
          ? [
              `+` + this.m_count,
              this.m_v1.a,
              this.m_v1.wA.x,
              this.m_v1.wA.y,
              this.m_v1.wB.x,
              this.m_v1.wB.y,
              this.m_v2.a,
              this.m_v2.wA.x,
              this.m_v2.wA.y,
              this.m_v2.wB.x,
              this.m_v2.wB.y,
              this.m_v3.a,
              this.m_v3.wA.x,
              this.m_v3.wA.y,
              this.m_v3.wB.x,
              this.m_v3.wB.y,
            ].toString()
          : this.m_count === 2
            ? [
                `+` + this.m_count,
                this.m_v1.a,
                this.m_v1.wA.x,
                this.m_v1.wA.y,
                this.m_v1.wB.x,
                this.m_v1.wB.y,
                this.m_v2.a,
                this.m_v2.wA.x,
                this.m_v2.wA.y,
                this.m_v2.wB.x,
                this.m_v2.wB.y,
              ].toString()
            : this.m_count === 1
              ? [
                  `+` + this.m_count,
                  this.m_v1.a,
                  this.m_v1.wA.x,
                  this.m_v1.wA.y,
                  this.m_v1.wB.x,
                  this.m_v1.wB.y,
                ].toString()
              : `+` + this.m_count;
      }),
      (e.prototype.readCache = function (e, t, n, r, i) {
        this.m_count = e.count;
        for (var a = 0; a < this.m_count; ++a) {
          var o = this.m_v[a];
          ((o.indexA = e.indexA[a]), (o.indexB = e.indexB[a]));
          var s = t.getVertex(o.indexA),
            c = r.getVertex(o.indexB);
          (H(o.wA, n, s), H(o.wB, i, c), L(o.w, o.wB, o.wA), (o.a = 0));
        }
        if (this.m_count > 1) {
          var l = e.metric,
            u = this.getMetric();
          (u < 0.5 * l || 2 * l < u || u < ae) && (this.m_count = 0);
        }
        if (this.m_count === 0) {
          var o = this.m_v[0];
          ((o.indexA = 0), (o.indexB = 0));
          var s = t.getVertex(0),
            c = r.getVertex(0);
          (H(o.wA, n, s),
            H(o.wB, i, c),
            L(o.w, o.wB, o.wA),
            (o.a = 1),
            (this.m_count = 1));
        }
      }),
      (e.prototype.writeCache = function (e) {
        ((e.metric = this.getMetric()), (e.count = this.m_count));
        for (var t = 0; t < this.m_count; ++t)
          ((e.indexA[t] = this.m_v[t].indexA),
            (e.indexB[t] = this.m_v[t].indexB));
      }),
      (e.prototype.getSearchDirection = function () {
        var e = this.m_v1,
          t = this.m_v2;
        switch (this.m_count) {
          case 1:
            return Fe($t, -e.w.x, -e.w.y);
          case 2:
            return (
              L(Ht, t.w, e.w),
              -B(Ht, e.w) > 0 ? Fe($t, -Ht.y, Ht.x) : Fe($t, Ht.y, -Ht.x)
            );
          default:
            return I($t);
        }
      }),
      (e.prototype.getClosestPoint = function () {
        var e = this.m_v1,
          t = this.m_v2;
        switch (this.m_count) {
          case 0:
            return I(en);
          case 1:
            return F(en, e.w);
          case 2:
            return z(en, e.a, e.w, t.a, t.w);
          case 3:
            return I(en);
          default:
            return I(en);
        }
      }),
      (e.prototype.getWitnessPoints = function (e, t) {
        var n = this.m_v1,
          r = this.m_v2,
          i = this.m_v3;
        switch (this.m_count) {
          case 0:
            break;
          case 1:
            (F(e, n.wA), F(t, n.wB));
            break;
          case 2:
            (z(e, n.a, n.wA, r.a, r.wA), z(t, n.a, n.wB, r.a, r.wB));
            break;
          case 3:
            (Ue(e, n.a, n.wA, r.a, r.wA, i.a, i.wA), F(t, e));
        }
      }),
      (e.prototype.getMetric = function () {
        switch (this.m_count) {
          case 0:
            return 0;
          case 1:
            return 0;
          case 2:
            return Ye(this.m_v1.w, this.m_v2.w);
          case 3:
            return B(
              L(Gt, this.m_v2.w, this.m_v1.w),
              L(Kt, this.m_v3.w, this.m_v1.w),
            );
          default:
            return 0;
        }
      }),
      (e.prototype.solve = function () {
        switch (this.m_count) {
          case 1:
            break;
          case 2:
            this.solve2();
            break;
          case 3:
            this.solve3();
        }
      }),
      (e.prototype.solve2 = function () {
        var e = this.m_v1.w,
          t = this.m_v2.w;
        L(Ht, t, e);
        var n = -V(e, Ht);
        if (n <= 0) {
          ((this.m_v1.a = 1), (this.m_count = 1));
          return;
        }
        var r = V(t, Ht);
        if (r <= 0) {
          ((this.m_v2.a = 1), (this.m_count = 1), this.m_v1.set(this.m_v2));
          return;
        }
        var i = 1 / (r + n);
        ((this.m_v1.a = r * i), (this.m_v2.a = n * i), (this.m_count = 2));
      }),
      (e.prototype.solve3 = function () {
        var e = this.m_v1.w,
          t = this.m_v2.w,
          n = this.m_v3.w;
        L(Ht, t, e);
        var r = V(e, Ht),
          i = V(t, Ht),
          a = -r;
        L(Ut, n, e);
        var o = V(e, Ut),
          s = V(n, Ut),
          c = -o;
        L(Wt, n, t);
        var l = V(t, Wt),
          u = V(n, Wt),
          d = -l,
          f = B(Ht, Ut),
          p = f * B(t, n),
          m = f * B(n, e),
          h = f * B(e, t);
        if (a <= 0 && c <= 0) {
          ((this.m_v1.a = 1), (this.m_count = 1));
          return;
        }
        if (i > 0 && a > 0 && h <= 0) {
          var g = 1 / (i + a);
          ((this.m_v1.a = i * g), (this.m_v2.a = a * g), (this.m_count = 2));
          return;
        }
        if (s > 0 && c > 0 && m <= 0) {
          var _ = 1 / (s + c);
          ((this.m_v1.a = s * _),
            (this.m_v3.a = c * _),
            (this.m_count = 2),
            this.m_v2.set(this.m_v3));
          return;
        }
        if (i <= 0 && d <= 0) {
          ((this.m_v2.a = 1), (this.m_count = 1), this.m_v1.set(this.m_v2));
          return;
        }
        if (s <= 0 && u <= 0) {
          ((this.m_v3.a = 1), (this.m_count = 1), this.m_v1.set(this.m_v3));
          return;
        }
        if (u > 0 && d > 0 && p <= 0) {
          var v = 1 / (u + d);
          ((this.m_v2.a = u * v),
            (this.m_v3.a = d * v),
            (this.m_count = 2),
            this.m_v1.set(this.m_v3));
          return;
        }
        var y = 1 / (p + m + h);
        ((this.m_v1.a = p * y),
          (this.m_v2.a = m * y),
          (this.m_v3.a = h * y),
          (this.m_count = 3));
      }),
      e
    );
  })())(),
  nn = new qt(),
  rn = new Yt(),
  an = new Jt(),
  on = function (e, t, n, r, i, a) {
    return (
      nn.recycle(),
      nn.proxyA.set(e, t),
      nn.proxyB.set(n, r),
      nt(nn.transformA, i),
      nt(nn.transformB, a),
      (nn.useRadii = !0),
      an.recycle(),
      rn.recycle(),
      Xt(an, rn, nn),
      an.distance < 10 * ae
    );
  };
((Xt.testOverlap = on),
  (Xt.Input = qt),
  (Xt.Output = Jt),
  (Xt.Proxy = Zt),
  (Xt.Cache = Yt),
  (function () {
    function e() {
      ((this.proxyA = new Zt()),
        (this.proxyB = new Zt()),
        (this.transformA = pt.identity()),
        (this.transformB = pt.identity()),
        (this.translationB = j.zero()));
    }
    return (
      (e.prototype.recycle = function () {
        (this.proxyA.recycle(),
          this.proxyB.recycle(),
          this.transformA.setIdentity(),
          this.transformB.setIdentity(),
          I(this.translationB));
      }),
      e
    );
  })());
var sn = Math.abs,
  cn = Math.max,
  ln = (function () {
    function e() {
      ((this.proxyA = new Zt()),
        (this.proxyB = new Zt()),
        (this.sweepA = new ft()),
        (this.sweepB = new ft()));
    }
    return (
      (e.prototype.recycle = function () {
        (this.proxyA.recycle(),
          this.proxyB.recycle(),
          this.sweepA.recycle(),
          this.sweepB.recycle(),
          (this.tMax = -1));
      }),
      e
    );
  })(),
  un;
(function (e) {
  ((e[(e.e_unset = -1)] = `e_unset`),
    (e[(e.e_unknown = 0)] = `e_unknown`),
    (e[(e.e_failed = 1)] = `e_failed`),
    (e[(e.e_overlapped = 2)] = `e_overlapped`),
    (e[(e.e_touching = 3)] = `e_touching`),
    (e[(e.e_separated = 4)] = `e_separated`));
})((un ||= {}));
var dn = (function () {
  function e() {
    ((this.state = un.e_unset), (this.t = -1));
  }
  return (
    (e.prototype.recycle = function () {
      ((this.state = un.e_unset), (this.t = -1));
    }),
    e
  );
})();
((Lt.toiTime = 0),
  (Lt.toiMaxTime = 0),
  (Lt.toiCalls = 0),
  (Lt.toiIters = 0),
  (Lt.toiMaxIters = 0),
  (Lt.toiRootIters = 0),
  (Lt.toiMaxRootIters = 0));
var fn = new qt(),
  pn = new Jt(),
  mn = new Yt(),
  hn = tt(0, 0, 0),
  gn = tt(0, 0, 0),
  _n = P(0, 0),
  vn = P(0, 0),
  yn = P(0, 0),
  bn = P(0, 0),
  xn = P(0, 0),
  Sn = P(0, 0),
  Cn = P(0, 0),
  wn = P(0, 0),
  Tn = function (e, t) {
    var n = Rt.now();
    (++Lt.toiCalls, (e.state = un.e_unknown), (e.t = t.tMax));
    var r = t.proxyA,
      i = t.proxyB,
      a = t.sweepA,
      o = t.sweepB;
    if ((a.normalize(), o.normalize(), !a.isValid() || !o.isValid())) {
      e.state = un.e_failed;
      return;
    }
    var s = t.tMax,
      c = r.m_radius + i.m_radius,
      l = cn(N.linearSlop, c - 3 * N.linearSlop),
      u = 0.25 * N.linearSlop,
      d = 0,
      f = N.maxTOIIterations,
      p = 0;
    for (
      mn.recycle(),
        fn.proxyA.setVertices(r.m_vertices, r.m_count, r.m_radius),
        fn.proxyB.setVertices(i.m_vertices, i.m_count, i.m_radius),
        fn.useRadii = !1;
      ;
    ) {
      if (
        (a.getTransform(hn, d),
        o.getTransform(gn, d),
        nt(fn.transformA, hn),
        nt(fn.transformB, gn),
        Xt(pn, mn, fn),
        pn.distance <= 0)
      ) {
        ((e.state = un.e_overlapped), (e.t = 0));
        break;
      }
      if (pn.distance < l + u) {
        ((e.state = un.e_touching), (e.t = d));
        break;
      }
      Dn.initialize(mn, r, a, i, o, d);
      for (var m = !1, h = s, g = 0; ;) {
        var _ = Dn.findMinSeparation(h);
        if (_ > l + u) {
          ((e.state = un.e_separated), (e.t = s), (m = !0));
          break;
        }
        if (_ > l - u) {
          d = h;
          break;
        }
        var v = Dn.evaluate(d);
        if (v < l - u) {
          ((e.state = un.e_failed), (e.t = d), (m = !0));
          break;
        }
        if (v <= l + u) {
          ((e.state = un.e_touching), (e.t = d), (m = !0));
          break;
        }
        for (var y = 0, b = d, x = h; ;) {
          var S = void 0;
          ((S = y & 1 ? b + ((l - v) * (x - b)) / (_ - v) : 0.5 * (b + x)),
            ++y,
            ++Lt.toiRootIters);
          var C = Dn.evaluate(S);
          if (sn(C - l) < u) {
            h = S;
            break;
          }
          if ((C > l ? ((b = S), (v = C)) : ((x = S), (_ = C)), y === 50))
            break;
        }
        if (
          ((Lt.toiMaxRootIters = cn(Lt.toiMaxRootIters, y)),
          ++g,
          g === N.maxPolygonVertices)
        )
          break;
      }
      if ((++p, ++Lt.toiIters, m)) break;
      if (p === f) {
        ((e.state = un.e_failed), (e.t = d));
        break;
      }
    }
    Lt.toiMaxIters = cn(Lt.toiMaxIters, p);
    var w = Rt.diff(n);
    ((Lt.toiMaxTime = cn(Lt.toiMaxTime, w)), (Lt.toiTime += w), Dn.recycle());
  },
  En;
(function (e) {
  ((e[(e.e_unset = -1)] = `e_unset`),
    (e[(e.e_points = 1)] = `e_points`),
    (e[(e.e_faceA = 2)] = `e_faceA`),
    (e[(e.e_faceB = 3)] = `e_faceB`));
})((En ||= {}));
var Dn = new ((function () {
  function e() {
    ((this.m_proxyA = null),
      (this.m_proxyB = null),
      (this.m_sweepA = null),
      (this.m_sweepB = null),
      (this.m_type = En.e_unset),
      (this.m_localPoint = P(0, 0)),
      (this.m_axis = P(0, 0)),
      (this.indexA = -1),
      (this.indexB = -1));
  }
  return (
    (e.prototype.recycle = function () {
      ((this.m_proxyA = null),
        (this.m_proxyB = null),
        (this.m_sweepA = null),
        (this.m_sweepB = null),
        (this.m_type = En.e_unset),
        I(this.m_localPoint),
        I(this.m_axis),
        (this.indexA = -1),
        (this.indexB = -1));
    }),
    (e.prototype.initialize = function (e, t, n, r, i, a) {
      var o = e.count;
      if (
        ((this.m_proxyA = t),
        (this.m_proxyB = r),
        (this.m_sweepA = n),
        (this.m_sweepB = i),
        this.m_sweepA.getTransform(hn, a),
        this.m_sweepB.getTransform(gn, a),
        o === 1)
      ) {
        this.m_type = En.e_points;
        var s = this.m_proxyA.getVertex(e.indexA[0]),
          c = this.m_proxyB.getVertex(e.indexB[0]);
        (H(vn, hn, s), H(yn, gn, c), L(this.m_axis, yn, vn));
        var l = We(this.m_axis);
        return l;
      }
      if (e.indexA[0] === e.indexA[1]) {
        this.m_type = En.e_faceB;
        var u = r.getVertex(e.indexB[0]),
          d = r.getVertex(e.indexB[1]);
        (Ke(this.m_axis, L(_n, d, u), 1),
          Ge(this.m_axis),
          Qe(bn, gn.q, this.m_axis),
          z(this.m_localPoint, 0.5, u, 0.5, d),
          H(yn, gn, this.m_localPoint));
        var f = t.getVertex(e.indexA[0]),
          l = V(pt.mulVec2(hn, f), bn) - V(yn, bn);
        return (l < 0 && (Ie(this.m_axis), (l = -l)), l);
      }
      this.m_type = En.e_faceA;
      var p = this.m_proxyA.getVertex(e.indexA[0]),
        m = this.m_proxyA.getVertex(e.indexA[1]);
      (Ke(this.m_axis, L(_n, m, p), 1),
        Ge(this.m_axis),
        Qe(bn, hn.q, this.m_axis),
        z(this.m_localPoint, 0.5, p, 0.5, m),
        H(vn, hn, this.m_localPoint),
        H(yn, gn, this.m_proxyB.getVertex(e.indexB[0])));
      var l = V(yn, bn) - V(vn, bn);
      return (l < 0 && (Ie(this.m_axis), (l = -l)), l);
    }),
    (e.prototype.compute = function (e, t) {
      switch (
        (this.m_sweepA.getTransform(hn, t),
        this.m_sweepB.getTransform(gn, t),
        this.m_type)
      ) {
        case En.e_points:
          (e &&
            ($e(xn, hn.q, this.m_axis),
            $e(Sn, gn.q, R(_n, -1, this.m_axis)),
            (this.indexA = this.m_proxyA.getSupport(xn)),
            (this.indexB = this.m_proxyB.getSupport(Sn))),
            F(Cn, this.m_proxyA.getVertex(this.indexA)),
            F(wn, this.m_proxyB.getVertex(this.indexB)),
            H(vn, hn, Cn),
            H(yn, gn, wn));
          var n = V(yn, this.m_axis) - V(vn, this.m_axis);
          return n;
        case En.e_faceA:
          (Qe(bn, hn.q, this.m_axis),
            H(vn, hn, this.m_localPoint),
            e &&
              ($e(Sn, gn.q, R(_n, -1, bn)),
              (this.indexA = -1),
              (this.indexB = this.m_proxyB.getSupport(Sn))),
            F(wn, this.m_proxyB.getVertex(this.indexB)),
            H(yn, gn, wn));
          var n = V(yn, bn) - V(vn, bn);
          return n;
        case En.e_faceB:
          (Qe(bn, gn.q, this.m_axis),
            H(yn, gn, this.m_localPoint),
            e &&
              ($e(xn, hn.q, R(_n, -1, bn)),
              (this.indexB = -1),
              (this.indexA = this.m_proxyA.getSupport(xn))),
            F(Cn, this.m_proxyA.getVertex(this.indexA)),
            H(vn, hn, Cn));
          var n = V(vn, bn) - V(yn, bn);
          return n;
        default:
          return (e && ((this.indexA = -1), (this.indexB = -1)), 0);
      }
    }),
    (e.prototype.findMinSeparation = function (e) {
      return this.compute(!0, e);
    }),
    (e.prototype.evaluate = function (e) {
      return this.compute(!1, e);
    }),
    e
  );
})())();
((Tn.Input = ln), (Tn.Output = dn));
var On = Math.abs,
  kn = Math.sqrt,
  An = Math.min,
  jn = (function () {
    function e() {
      ((this.dt = 0),
        (this.inv_dt = 0),
        (this.velocityIterations = 0),
        (this.positionIterations = 0),
        (this.warmStarting = !1),
        (this.blockSolve = !0),
        (this.inv_dt0 = 0),
        (this.dtRatio = 1));
    }
    return (
      (e.prototype.reset = function (e) {
        (this.dt > 0 && (this.inv_dt0 = this.inv_dt),
          (this.dt = e),
          (this.inv_dt = e == 0 ? 0 : 1 / e),
          (this.dtRatio = e * this.inv_dt0));
      }),
      e
    );
  })(),
  Mn = new jn(),
  Nn = P(0, 0),
  Pn = P(0, 0),
  Fn = P(0, 0),
  In = new ln(),
  Ln = new dn(),
  Rn = new ft(),
  zn = new ft(),
  Bn = new ft(),
  Vn = (function () {
    function e(e) {
      ((this.contact = e), (this.normals = []), (this.tangents = []));
    }
    return (
      (e.prototype.recycle = function () {
        ((this.normals.length = 0), (this.tangents.length = 0));
      }),
      Object.defineProperty(e.prototype, "normalImpulses", {
        get: function () {
          var e = this.contact,
            t = this.normals;
          t.length = 0;
          for (var n = 0; n < e.v_points.length; ++n)
            t.push(e.v_points[n].normalImpulse);
          return t;
        },
        enumerable: !1,
        configurable: !0,
      }),
      Object.defineProperty(e.prototype, "tangentImpulses", {
        get: function () {
          var e = this.contact,
            t = this.tangents;
          t.length = 0;
          for (var n = 0; n < e.v_points.length; ++n)
            t.push(e.v_points[n].tangentImpulse);
          return t;
        },
        enumerable: !1,
        configurable: !0,
      }),
      e
    );
  })(),
  Hn = (function () {
    function e(e) {
      ((this.m_world = e),
        (this.m_stack = []),
        (this.m_bodies = []),
        (this.m_contacts = []),
        (this.m_joints = []));
    }
    return (
      (e.prototype.clear = function () {
        ((this.m_stack.length = 0),
          (this.m_bodies.length = 0),
          (this.m_contacts.length = 0),
          (this.m_joints.length = 0));
      }),
      (e.prototype.addBody = function (e) {
        this.m_bodies.push(e);
      }),
      (e.prototype.addContact = function (e) {
        this.m_contacts.push(e);
      }),
      (e.prototype.addJoint = function (e) {
        this.m_joints.push(e);
      }),
      (e.prototype.solveWorld = function (e) {
        for (var t = this.m_world, n = t.m_bodyList; n; n = n.m_next)
          n.m_islandFlag = !1;
        for (var r = t.m_contactList; r; r = r.m_next) r.m_islandFlag = !1;
        for (var i = t.m_jointList; i; i = i.m_next) i.m_islandFlag = !1;
        for (var a = this.m_stack, o = t.m_bodyList; o; o = o.m_next)
          if (
            !o.m_islandFlag &&
            o.isAwake() != 0 &&
            o.isActive() != 0 &&
            !o.isStatic()
          ) {
            for (this.clear(), a.push(o), o.m_islandFlag = !0; a.length > 0;) {
              var n = a.pop();
              if ((this.addBody(n), (n.m_awakeFlag = !0), !n.isStatic())) {
                for (var s = n.m_contactList; s; s = s.next) {
                  var c = s.contact;
                  if (
                    !c.m_islandFlag &&
                    c.isEnabled() != 0 &&
                    c.isTouching() != 0
                  ) {
                    var l = c.m_fixtureA.m_isSensor,
                      u = c.m_fixtureB.m_isSensor;
                    if (!(l || u)) {
                      (this.addContact(c), (c.m_islandFlag = !0));
                      var d = s.other;
                      d.m_islandFlag ||= (a.push(d), !0);
                    }
                  }
                }
                for (var f = n.m_jointList; f; f = f.next)
                  if (f.joint.m_islandFlag != 1) {
                    var d = f.other;
                    d.isActive() != 0 &&
                      (this.addJoint(f.joint),
                      (f.joint.m_islandFlag = !0),
                      !d.m_islandFlag && (a.push(d), (d.m_islandFlag = !0)));
                  }
              }
            }
            this.solveIsland(e);
            for (var p = 0; p < this.m_bodies.length; ++p) {
              var n = this.m_bodies[p];
              n.isStatic() && (n.m_islandFlag = !1);
            }
          }
      }),
      (e.prototype.solveIsland = function (e) {
        for (
          var t = this.m_world,
            n = t.m_gravity,
            r = t.m_allowSleep,
            i = e.dt,
            a = 0;
          a < this.m_bodies.length;
          ++a
        ) {
          var o = this.m_bodies[a];
          F(Nn, o.m_sweep.c);
          var s = o.m_sweep.a;
          F(Pn, o.m_linearVelocity);
          var c = o.m_angularVelocity;
          (F(o.m_sweep.c0, o.m_sweep.c),
            (o.m_sweep.a0 = o.m_sweep.a),
            o.isDynamic() &&
              (Ve(Pn, i * o.m_gravityScale, n),
              Ve(Pn, i * o.m_invMass, o.m_force),
              (c += i * o.m_invI * o.m_torque),
              R(Pn, 1 / (1 + i * o.m_linearDamping), Pn),
              (c *= 1 / (1 + i * o.m_angularDamping))),
            F(o.c_position.c, Nn),
            (o.c_position.a = s),
            F(o.c_velocity.v, Pn),
            (o.c_velocity.w = c));
        }
        for (var a = 0; a < this.m_contacts.length; ++a) {
          var l = this.m_contacts[a];
          l.initConstraint(e);
        }
        for (var a = 0; a < this.m_contacts.length; ++a) {
          var l = this.m_contacts[a];
          l.initVelocityConstraint(e);
        }
        if (e.warmStarting)
          for (var a = 0; a < this.m_contacts.length; ++a) {
            var l = this.m_contacts[a];
            l.warmStartConstraint(e);
          }
        for (var a = 0; a < this.m_joints.length; ++a) {
          var u = this.m_joints[a];
          u.initVelocityConstraints(e);
        }
        for (var a = 0; a < e.velocityIterations; ++a) {
          for (var d = 0; d < this.m_joints.length; ++d) {
            var u = this.m_joints[d];
            u.solveVelocityConstraints(e);
          }
          for (var d = 0; d < this.m_contacts.length; ++d) {
            var l = this.m_contacts[d];
            l.solveVelocityConstraint(e);
          }
        }
        for (var a = 0; a < this.m_contacts.length; ++a) {
          var l = this.m_contacts[a];
          l.storeConstraintImpulses(e);
        }
        for (var a = 0; a < this.m_bodies.length; ++a) {
          var o = this.m_bodies[a];
          F(Nn, o.c_position.c);
          var s = o.c_position.a;
          F(Pn, o.c_velocity.v);
          var c = o.c_velocity.w;
          R(Fn, i, Pn);
          var f = Je(Fn);
          if (f > N.maxTranslationSquared) {
            var p = N.maxTranslation / kn(f);
            Be(Pn, p);
          }
          var m = i * c;
          if (m * m > N.maxRotationSquared) {
            var p = N.maxRotation / On(m);
            c *= p;
          }
          (Ve(Nn, i, Pn),
            (s += i * c),
            F(o.c_position.c, Nn),
            (o.c_position.a = s),
            F(o.c_velocity.v, Pn),
            (o.c_velocity.w = c));
        }
        for (var h = !1, a = 0; a < e.positionIterations; ++a) {
          for (var g = 0, d = 0; d < this.m_contacts.length; ++d) {
            var l = this.m_contacts[d],
              _ = l.solvePositionConstraint(e);
            g = An(g, _);
          }
          for (
            var v = g >= -3 * N.linearSlop, y = !0, d = 0;
            d < this.m_joints.length;
            ++d
          ) {
            var u = this.m_joints[d],
              b = u.solvePositionConstraints(e);
            y &&= b;
          }
          if (v && y) {
            h = !0;
            break;
          }
        }
        for (var a = 0; a < this.m_bodies.length; ++a) {
          var o = this.m_bodies[a];
          (F(o.m_sweep.c, o.c_position.c),
            (o.m_sweep.a = o.c_position.a),
            F(o.m_linearVelocity, o.c_velocity.v),
            (o.m_angularVelocity = o.c_velocity.w),
            o.synchronizeTransform());
        }
        if ((this.postSolveIsland(), r)) {
          for (
            var x = 1 / 0,
              S = N.linearSleepToleranceSqr,
              C = N.angularSleepToleranceSqr,
              a = 0;
            a < this.m_bodies.length;
            ++a
          ) {
            var o = this.m_bodies[a];
            o.isStatic() ||
              (o.m_autoSleepFlag == 0 ||
              o.m_angularVelocity * o.m_angularVelocity > C ||
              Je(o.m_linearVelocity) > S
                ? ((o.m_sleepTime = 0), (x = 0))
                : ((o.m_sleepTime += i), (x = An(x, o.m_sleepTime))));
          }
          if (x >= N.timeToSleep && h)
            for (var a = 0; a < this.m_bodies.length; ++a) {
              var o = this.m_bodies[a];
              o.setAwake(!1);
            }
        }
      }),
      (e.prototype.solveWorldTOI = function (e) {
        var t = this.m_world;
        if (t.m_stepComplete) {
          for (var n = t.m_bodyList; n; n = n.m_next)
            ((n.m_islandFlag = !1), (n.m_sweep.alpha0 = 0));
          for (var r = t.m_contactList; r; r = r.m_next)
            ((r.m_toiFlag = !1),
              (r.m_islandFlag = !1),
              (r.m_toiCount = 0),
              (r.m_toi = 1));
        }
        for (;;) {
          for (var i = null, a = 1, o = t.m_contactList; o; o = o.m_next)
            if (o.isEnabled() != 0 && !(o.m_toiCount > N.maxSubSteps)) {
              var s = 1;
              if (o.m_toiFlag) s = o.m_toi;
              else {
                var c = o.getFixtureA(),
                  l = o.getFixtureB();
                if (c.isSensor() || l.isSensor()) continue;
                var u = c.getBody(),
                  d = l.getBody(),
                  f = u.isAwake() && !u.isStatic(),
                  p = d.isAwake() && !d.isStatic();
                if (f == 0 && p == 0) continue;
                var m = u.isBullet() || !u.isDynamic(),
                  h = d.isBullet() || !d.isDynamic();
                if (m == 0 && h == 0) continue;
                var g = u.m_sweep.alpha0;
                u.m_sweep.alpha0 < d.m_sweep.alpha0
                  ? ((g = d.m_sweep.alpha0), u.m_sweep.advance(g))
                  : d.m_sweep.alpha0 < u.m_sweep.alpha0 &&
                    ((g = u.m_sweep.alpha0), d.m_sweep.advance(g));
                var _ = o.getChildIndexA(),
                  v = o.getChildIndexB();
                (In.proxyA.set(c.getShape(), _),
                  In.proxyB.set(l.getShape(), v),
                  In.sweepA.set(u.m_sweep),
                  In.sweepB.set(d.m_sweep),
                  (In.tMax = 1),
                  Tn(Ln, In));
                var y = Ln.t;
                ((s = Ln.state == un.e_touching ? An(g + (1 - g) * y, 1) : 1),
                  (o.m_toi = s),
                  (o.m_toiFlag = !0));
              }
              s < a && ((i = o), (a = s));
            }
          if (i == null || 1 - 10 * ae < a) {
            t.m_stepComplete = !0;
            break;
          }
          var b = i.getFixtureA(),
            x = i.getFixtureB(),
            S = b.getBody(),
            C = x.getBody();
          if (
            (zn.set(S.m_sweep),
            Bn.set(C.m_sweep),
            S.advance(a),
            C.advance(a),
            i.update(t),
            (i.m_toiFlag = !1),
            ++i.m_toiCount,
            i.isEnabled() == 0 || i.isTouching() == 0)
          ) {
            (i.setEnabled(!1),
              S.m_sweep.set(zn),
              C.m_sweep.set(Bn),
              S.synchronizeTransform(),
              C.synchronizeTransform());
            continue;
          }
          (S.setAwake(!0),
            C.setAwake(!0),
            this.clear(),
            this.addBody(S),
            this.addBody(C),
            this.addContact(i),
            (S.m_islandFlag = !0),
            (C.m_islandFlag = !0),
            (i.m_islandFlag = !0));
          for (var w = [S, C], T = 0; T < w.length; ++T) {
            var E = w[T];
            if (E.isDynamic())
              for (var D = E.m_contactList; D; D = D.next) {
                var O = D.contact;
                if (!O.m_islandFlag) {
                  var ee = D.other;
                  if (!(ee.isDynamic() && !E.isBullet() && !ee.isBullet())) {
                    var te = O.m_fixtureA.m_isSensor,
                      ne = O.m_fixtureB.m_isSensor;
                    if (!(te || ne)) {
                      if (
                        (Rn.set(ee.m_sweep),
                        ee.m_islandFlag == 0 && ee.advance(a),
                        O.update(t),
                        O.isEnabled() == 0 || O.isTouching() == 0)
                      ) {
                        (ee.m_sweep.set(Rn), ee.synchronizeTransform());
                        continue;
                      }
                      ((O.m_islandFlag = !0),
                        this.addContact(O),
                        !ee.m_islandFlag &&
                          ((ee.m_islandFlag = !0),
                          ee.isStatic() || ee.setAwake(!0),
                          this.addBody(ee)));
                    }
                  }
                }
              }
          }
          (Mn.reset((1 - a) * e.dt),
            (Mn.dtRatio = 1),
            (Mn.positionIterations = 20),
            (Mn.velocityIterations = e.velocityIterations),
            (Mn.warmStarting = !1),
            this.solveIslandTOI(Mn, S, C));
          for (var T = 0; T < this.m_bodies.length; ++T) {
            var E = this.m_bodies[T];
            if (((E.m_islandFlag = !1), E.isDynamic())) {
              E.synchronizeFixtures();
              for (var D = E.m_contactList; D; D = D.next)
                ((D.contact.m_toiFlag = !1), (D.contact.m_islandFlag = !1));
            }
          }
          if ((t.findNewContacts(), t.m_subStepping)) {
            t.m_stepComplete = !1;
            break;
          }
        }
      }),
      (e.prototype.solveIslandTOI = function (e, t, n) {
        for (var r = 0; r < this.m_bodies.length; ++r) {
          var i = this.m_bodies[r];
          (F(i.c_position.c, i.m_sweep.c),
            (i.c_position.a = i.m_sweep.a),
            F(i.c_velocity.v, i.m_linearVelocity),
            (i.c_velocity.w = i.m_angularVelocity));
        }
        for (var r = 0; r < this.m_contacts.length; ++r) {
          var a = this.m_contacts[r];
          a.initConstraint(e);
        }
        for (var r = 0; r < e.positionIterations; ++r) {
          for (var o = 0, s = 0; s < this.m_contacts.length; ++s) {
            var a = this.m_contacts[s],
              c = a.solvePositionConstraintTOI(e, t, n);
            o = An(o, c);
          }
          if (o >= -1.5 * N.linearSlop) break;
        }
        var r;
        (F(t.m_sweep.c0, t.c_position.c),
          (t.m_sweep.a0 = t.c_position.a),
          F(n.m_sweep.c0, n.c_position.c),
          (n.m_sweep.a0 = n.c_position.a));
        for (var r = 0; r < this.m_contacts.length; ++r) {
          var a = this.m_contacts[r];
          a.initVelocityConstraint(e);
        }
        for (var r = 0; r < e.velocityIterations; ++r)
          for (var s = 0; s < this.m_contacts.length; ++s) {
            var a = this.m_contacts[s];
            a.solveVelocityConstraint(e);
          }
        for (var l = e.dt, r = 0; r < this.m_bodies.length; ++r) {
          var i = this.m_bodies[r];
          F(Nn, i.c_position.c);
          var u = i.c_position.a;
          F(Pn, i.c_velocity.v);
          var d = i.c_velocity.w;
          R(Fn, l, Pn);
          var f = Je(Fn);
          if (f > N.maxTranslationSquared) {
            var p = N.maxTranslation / kn(f);
            Be(Pn, p);
          }
          var m = l * d;
          if (m * m > N.maxRotationSquared) {
            var p = N.maxRotation / On(m);
            d *= p;
          }
          (Ve(Nn, l, Pn),
            (u += l * d),
            F(i.c_position.c, Nn),
            (i.c_position.a = u),
            F(i.c_velocity.v, Pn),
            (i.c_velocity.w = d),
            F(i.m_sweep.c, Nn),
            (i.m_sweep.a = u),
            F(i.m_linearVelocity, Pn),
            (i.m_angularVelocity = d),
            i.synchronizeTransform());
        }
        this.postSolveIsland();
      }),
      (e.prototype.postSolveIsland = function () {
        for (var e = 0; e < this.m_contacts.length; ++e) {
          var t = this.m_contacts[e];
          this.m_world.postSolve(t, t.m_impulse);
        }
      }),
      e
    );
  })();
Hn.TimeStep = jn;
var Un = (function () {
    function e(e, t, n, r) {
      typeof e == `object` && e
        ? ((this.ex = j.clone(e)), (this.ey = j.clone(t)))
        : typeof e == `number`
          ? ((this.ex = j.neo(e, n)), (this.ey = j.neo(t, r)))
          : ((this.ex = j.zero()), (this.ey = j.zero()));
    }
    return (
      (e.prototype.toString = function () {
        return JSON.stringify(this);
      }),
      (e.isValid = function (e) {
        return e != null && j.isValid(e.ex) && j.isValid(e.ey);
      }),
      (e.assert = function (e) {}),
      (e.prototype.set = function (e, t, n, r) {
        typeof e == `number` &&
        typeof t == `number` &&
        typeof n == `number` &&
        typeof r == `number`
          ? (this.ex.setNum(e, n), this.ey.setNum(t, r))
          : typeof e == `object` && typeof t == `object`
            ? (this.ex.setVec2(e), this.ey.setVec2(t))
            : typeof e == `object` &&
              (this.ex.setVec2(e.ex), this.ey.setVec2(e.ey));
      }),
      (e.prototype.setIdentity = function () {
        ((this.ex.x = 1), (this.ey.x = 0), (this.ex.y = 0), (this.ey.y = 1));
      }),
      (e.prototype.setZero = function () {
        ((this.ex.x = 0), (this.ey.x = 0), (this.ex.y = 0), (this.ey.y = 0));
      }),
      (e.prototype.getInverse = function () {
        var t = this.ex.x,
          n = this.ey.x,
          r = this.ex.y,
          i = this.ey.y,
          a = t * i - n * r;
        a !== 0 && (a = 1 / a);
        var o = new e();
        return (
          (o.ex.x = a * i),
          (o.ey.x = -a * n),
          (o.ex.y = -a * r),
          (o.ey.y = a * t),
          o
        );
      }),
      (e.prototype.solve = function (e) {
        var t = this.ex.x,
          n = this.ey.x,
          r = this.ex.y,
          i = this.ey.y,
          a = t * i - n * r;
        a !== 0 && (a = 1 / a);
        var o = j.zero();
        return (
          (o.x = a * (i * e.x - n * e.y)),
          (o.y = a * (t * e.y - r * e.x)),
          o
        );
      }),
      (e.mul = function (t, n) {
        if (n && `x` in n && `y` in n) {
          var r = t.ex.x * n.x + t.ey.x * n.y,
            i = t.ex.y * n.x + t.ey.y * n.y;
          return j.neo(r, i);
        }
        if (n && `ex` in n && `ey` in n)
          return new e(
            t.ex.x * n.ex.x + t.ey.x * n.ex.y,
            t.ex.x * n.ey.x + t.ey.x * n.ey.y,
            t.ex.y * n.ex.x + t.ey.y * n.ex.y,
            t.ex.y * n.ey.x + t.ey.y * n.ey.y,
          );
      }),
      (e.mulVec2 = function (e, t) {
        var n = e.ex.x * t.x + e.ey.x * t.y,
          r = e.ex.y * t.x + e.ey.y * t.y;
        return j.neo(n, r);
      }),
      (e.mulMat22 = function (t, n) {
        return new e(
          t.ex.x * n.ex.x + t.ey.x * n.ex.y,
          t.ex.x * n.ey.x + t.ey.x * n.ey.y,
          t.ex.y * n.ex.x + t.ey.y * n.ex.y,
          t.ex.y * n.ey.x + t.ey.y * n.ey.y,
        );
      }),
      (e.mulT = function (t, n) {
        if (n && `x` in n && `y` in n)
          return j.neo(j.dot(n, t.ex), j.dot(n, t.ey));
        if (n && `ex` in n && `ey` in n)
          return new e(
            j.neo(j.dot(t.ex, n.ex), j.dot(t.ey, n.ex)),
            j.neo(j.dot(t.ex, n.ey), j.dot(t.ey, n.ey)),
          );
      }),
      (e.mulTVec2 = function (e, t) {
        return j.neo(j.dot(t, e.ex), j.dot(t, e.ey));
      }),
      (e.mulTMat22 = function (t, n) {
        return new e(
          j.neo(j.dot(t.ex, n.ex), j.dot(t.ey, n.ex)),
          j.neo(j.dot(t.ex, n.ey), j.dot(t.ey, n.ey)),
        );
      }),
      (e.abs = function (t) {
        return new e(j.abs(t.ex), j.abs(t.ey));
      }),
      (e.add = function (t, n) {
        return new e(j.add(t.ex, n.ex), j.add(t.ey, n.ey));
      }),
      e
    );
  })(),
  Wn = Math.sqrt,
  Gn = P(0, 0),
  Kn = P(0, 0),
  qn = P(0, 0),
  Jn = P(0, 0),
  Yn = P(0, 0),
  Xn = P(0, 0),
  Zn = P(0, 0),
  Qn = P(0, 0),
  $n;
(function (e) {
  ((e[(e.e_unset = -1)] = `e_unset`),
    (e[(e.e_circles = 0)] = `e_circles`),
    (e[(e.e_faceA = 1)] = `e_faceA`),
    (e[(e.e_faceB = 2)] = `e_faceB`));
})(($n ||= {}));
var G;
(function (e) {
  ((e[(e.e_unset = -1)] = `e_unset`),
    (e[(e.e_vertex = 0)] = `e_vertex`),
    (e[(e.e_face = 1)] = `e_face`));
})((G ||= {}));
var er;
(function (e) {
  ((e[(e.nullState = 0)] = `nullState`),
    (e[(e.addState = 1)] = `addState`),
    (e[(e.persistState = 2)] = `persistState`),
    (e[(e.removeState = 3)] = `removeState`));
})((er ||= {}));
var tr = (function () {
    function e() {
      ((this.v = P(0, 0)), (this.id = new ir()));
    }
    return (
      (e.prototype.set = function (e) {
        (F(this.v, e.v), this.id.set(e.id));
      }),
      (e.prototype.recycle = function () {
        (I(this.v), this.id.recycle());
      }),
      e
    );
  })(),
  nr = (function () {
    function e() {
      ((this.localNormal = P(0, 0)),
        (this.localPoint = P(0, 0)),
        (this.points = [new rr(), new rr()]),
        (this.pointCount = 0));
    }
    return (
      (e.prototype.set = function (e) {
        ((this.type = e.type),
          F(this.localNormal, e.localNormal),
          F(this.localPoint, e.localPoint),
          (this.pointCount = e.pointCount),
          this.points[0].set(e.points[0]),
          this.points[1].set(e.points[1]));
      }),
      (e.prototype.recycle = function () {
        ((this.type = $n.e_unset),
          I(this.localNormal),
          I(this.localPoint),
          (this.pointCount = 0),
          this.points[0].recycle(),
          this.points[1].recycle());
      }),
      (e.prototype.getWorldManifold = function (e, t, n, r, i) {
        if (this.pointCount == 0) return e;
        ((e ||= new ar()), (e.pointCount = this.pointCount));
        var a = e.normal,
          o = e.points,
          s = e.separations;
        switch (this.type) {
          case $n.e_circles:
            Fe(a, 1, 0);
            var c = this.points[0];
            (H(Gn, t, this.localPoint), H(Kn, r, c.localPoint), L(Xn, Kn, Gn));
            var l = Je(Xn);
            (l > ae * ae && R(a, 1 / Wn(l), Xn),
              z(Jn, 1, Gn, n, a),
              z(Yn, 1, Kn, -i, a),
              z(o[0], 0.5, Jn, 0.5, Yn),
              (s[0] = V(L(qn, Yn, Jn), a)));
            break;
          case $n.e_faceA:
            (Qe(a, t.q, this.localNormal), H(Zn, t, this.localPoint));
            for (var u = 0; u < this.pointCount; ++u) {
              var c = this.points[u];
              (H(Qn, r, c.localPoint),
                z(Jn, 1, Qn, n - V(L(qn, Qn, Zn), a), a),
                z(Yn, 1, Qn, -i, a),
                z(o[u], 0.5, Jn, 0.5, Yn),
                (s[u] = V(L(qn, Yn, Jn), a)));
            }
            break;
          case $n.e_faceB:
            (Qe(a, r.q, this.localNormal), H(Zn, r, this.localPoint));
            for (var u = 0; u < this.pointCount; ++u) {
              var c = this.points[u];
              (H(Qn, t, c.localPoint),
                z(Yn, 1, Qn, i - V(L(qn, Qn, Zn), a), a),
                z(Jn, 1, Qn, -n, a),
                z(o[u], 0.5, Jn, 0.5, Yn),
                (s[u] = V(L(qn, Jn, Yn), a)));
            }
            Ie(a);
        }
        return e;
      }),
      (e.clipSegmentToLine = sr),
      (e.ClipVertex = tr),
      (e.getPointStates = or),
      (e.PointState = er),
      e
    );
  })(),
  rr = (function () {
    function e() {
      ((this.localPoint = P(0, 0)),
        (this.normalImpulse = 0),
        (this.tangentImpulse = 0),
        (this.id = new ir()));
    }
    return (
      (e.prototype.set = function (e) {
        (F(this.localPoint, e.localPoint),
          (this.normalImpulse = e.normalImpulse),
          (this.tangentImpulse = e.tangentImpulse),
          this.id.set(e.id));
      }),
      (e.prototype.recycle = function () {
        (I(this.localPoint),
          (this.normalImpulse = 0),
          (this.tangentImpulse = 0),
          this.id.recycle());
      }),
      e
    );
  })(),
  ir = (function () {
    function e() {
      ((this.key = -1),
        (this.indexA = -1),
        (this.indexB = -1),
        (this.typeA = G.e_unset),
        (this.typeB = G.e_unset));
    }
    return (
      (e.prototype.setFeatures = function (e, t, n, r) {
        ((this.indexA = e),
          (this.indexB = n),
          (this.typeA = t),
          (this.typeB = r),
          (this.key =
            this.indexA +
            this.indexB * 256 +
            this.typeA * 65536 +
            this.typeB * 16777216));
      }),
      (e.prototype.set = function (e) {
        ((this.indexA = e.indexA),
          (this.indexB = e.indexB),
          (this.typeA = e.typeA),
          (this.typeB = e.typeB),
          (this.key =
            this.indexA +
            this.indexB * 256 +
            this.typeA * 65536 +
            this.typeB * 16777216));
      }),
      (e.prototype.swapFeatures = function () {
        var e = this.indexA,
          t = this.indexB,
          n = this.typeA,
          r = this.typeB;
        ((this.indexA = t),
          (this.indexB = e),
          (this.typeA = r),
          (this.typeB = n),
          (this.key =
            this.indexA +
            this.indexB * 256 +
            this.typeA * 65536 +
            this.typeB * 16777216));
      }),
      (e.prototype.recycle = function () {
        ((this.indexA = 0),
          (this.indexB = 0),
          (this.typeA = G.e_unset),
          (this.typeB = G.e_unset),
          (this.key = -1));
      }),
      e
    );
  })(),
  ar = (function () {
    function e() {
      ((this.normal = P(0, 0)),
        (this.points = [P(0, 0), P(0, 0)]),
        (this.separations = [0, 0]),
        (this.pointCount = 0));
    }
    return (
      (e.prototype.recycle = function () {
        (I(this.normal),
          I(this.points[0]),
          I(this.points[1]),
          (this.separations[0] = 0),
          (this.separations[1] = 0),
          (this.pointCount = 0));
      }),
      e
    );
  })();
function or(e, t, n, r) {
  for (var i = 0; i < n.pointCount; ++i) {
    var a = n.points[i].id;
    e[i] = er.removeState;
    for (var o = 0; o < r.pointCount; ++o)
      if (r.points[o].id.key === a.key) {
        e[i] = er.persistState;
        break;
      }
  }
  for (var i = 0; i < r.pointCount; ++i) {
    var a = r.points[i].id;
    t[i] = er.addState;
    for (var o = 0; o < n.pointCount; ++o)
      if (n.points[o].id.key === a.key) {
        t[i] = er.persistState;
        break;
      }
  }
}
function sr(e, t, n, r, i) {
  var a = 0,
    o = V(n, t[0].v) - r,
    s = V(n, t[1].v) - r;
  if ((o <= 0 && e[a++].set(t[0]), s <= 0 && e[a++].set(t[1]), o * s < 0)) {
    var c = o / (o - s);
    (z(e[a].v, 1 - c, t[0].v, c, t[1].v),
      e[a].id.setFeatures(i, G.e_vertex, t[0].id.indexB, G.e_face),
      ++a);
  }
  return a;
}
var cr = Math.sqrt,
  lr = Math.max,
  ur = Math.min,
  dr = new xe({
    create: function () {
      return new Ur();
    },
    release: function (e) {
      e.recycle();
    },
  }),
  fr = new nr(),
  pr = new ar(),
  mr = (function () {
    function e(e) {
      ((this.prev = null),
        (this.next = null),
        (this.other = null),
        (this.contact = e));
    }
    return (
      (e.prototype.recycle = function () {
        ((this.prev = null), (this.next = null), (this.other = null));
      }),
      e
    );
  })();
function hr(e, t) {
  return cr(e * t);
}
function gr(e, t) {
  return e > t ? e : t;
}
var _r = [],
  vr = (function () {
    function e() {
      ((this.rA = P(0, 0)),
        (this.rB = P(0, 0)),
        (this.normalImpulse = 0),
        (this.tangentImpulse = 0),
        (this.normalMass = 0),
        (this.tangentMass = 0),
        (this.velocityBias = 0));
    }
    return (
      (e.prototype.recycle = function () {
        (I(this.rA),
          I(this.rB),
          (this.normalImpulse = 0),
          (this.tangentImpulse = 0),
          (this.normalMass = 0),
          (this.tangentMass = 0),
          (this.velocityBias = 0));
      }),
      e
    );
  })(),
  yr = P(0, 0),
  br = P(0, 0),
  xr = P(0, 0),
  Sr = P(0, 0),
  Cr = P(0, 0),
  wr = tt(0, 0, 0),
  Tr = tt(0, 0, 0),
  Er = P(0, 0),
  Dr = P(0, 0),
  Or = P(0, 0),
  kr = P(0, 0),
  Ar = P(0, 0),
  jr = P(0, 0),
  Mr = P(0, 0),
  K = P(0, 0),
  Nr = P(0, 0),
  Pr = P(0, 0),
  Fr = P(0, 0),
  Ir = P(0, 0),
  Lr = P(0, 0),
  Rr = P(0, 0),
  q = P(0, 0),
  zr = P(0, 0),
  Br = P(0, 0),
  Vr = P(0, 0),
  Hr = P(0, 0),
  Ur = (function () {
    function e() {
      ((this.m_nodeA = new mr(this)),
        (this.m_nodeB = new mr(this)),
        (this.m_fixtureA = null),
        (this.m_fixtureB = null),
        (this.m_indexA = -1),
        (this.m_indexB = -1),
        (this.m_evaluateFcn = null),
        (this.m_manifold = new nr()),
        (this.m_prev = null),
        (this.m_next = null),
        (this.m_toi = 1),
        (this.m_toiCount = 0),
        (this.m_toiFlag = !1),
        (this.m_friction = 0),
        (this.m_restitution = 0),
        (this.m_tangentSpeed = 0),
        (this.m_enabledFlag = !0),
        (this.m_islandFlag = !1),
        (this.m_touchingFlag = !1),
        (this.m_filterFlag = !1),
        (this.m_bulletHitFlag = !1),
        (this.m_impulse = new Vn(this)),
        (this.v_points = [new vr(), new vr()]),
        (this.v_normal = P(0, 0)),
        (this.v_normalMass = new Un()),
        (this.v_K = new Un()),
        (this.v_pointCount = 0),
        (this.v_tangentSpeed = 0),
        (this.v_friction = 0),
        (this.v_restitution = 0),
        (this.v_invMassA = 0),
        (this.v_invMassB = 0),
        (this.v_invIA = 0),
        (this.v_invIB = 0),
        (this.p_localPoints = [P(0, 0), P(0, 0)]),
        (this.p_localNormal = P(0, 0)),
        (this.p_localPoint = P(0, 0)),
        (this.p_localCenterA = P(0, 0)),
        (this.p_localCenterB = P(0, 0)),
        (this.p_type = $n.e_unset),
        (this.p_radiusA = 0),
        (this.p_radiusB = 0),
        (this.p_pointCount = 0),
        (this.p_invMassA = 0),
        (this.p_invMassB = 0),
        (this.p_invIA = 0),
        (this.p_invIB = 0));
    }
    return (
      (e.prototype.initialize = function (e, t, n, r, i) {
        ((this.m_fixtureA = e),
          (this.m_fixtureB = n),
          (this.m_indexA = t),
          (this.m_indexB = r),
          (this.m_evaluateFcn = i),
          (this.m_friction = hr(
            this.m_fixtureA.m_friction,
            this.m_fixtureB.m_friction,
          )),
          (this.m_restitution = gr(
            this.m_fixtureA.m_restitution,
            this.m_fixtureB.m_restitution,
          )));
      }),
      (e.prototype.recycle = function () {
        (this.m_nodeA.recycle(),
          this.m_nodeB.recycle(),
          (this.m_fixtureA = null),
          (this.m_fixtureB = null),
          (this.m_indexA = -1),
          (this.m_indexB = -1),
          (this.m_evaluateFcn = null),
          this.m_manifold.recycle(),
          (this.m_prev = null),
          (this.m_next = null),
          (this.m_toi = 1),
          (this.m_toiCount = 0),
          (this.m_toiFlag = !1),
          (this.m_friction = 0),
          (this.m_restitution = 0),
          (this.m_tangentSpeed = 0),
          (this.m_enabledFlag = !0),
          (this.m_islandFlag = !1),
          (this.m_touchingFlag = !1),
          (this.m_filterFlag = !1),
          (this.m_bulletHitFlag = !1),
          this.m_impulse.recycle());
        for (var e = 0, t = this.v_points; e < t.length; e++) t[e].recycle();
        (I(this.v_normal),
          this.v_normalMass.setZero(),
          this.v_K.setZero(),
          (this.v_pointCount = 0),
          (this.v_tangentSpeed = 0),
          (this.v_friction = 0),
          (this.v_restitution = 0),
          (this.v_invMassA = 0),
          (this.v_invMassB = 0),
          (this.v_invIA = 0),
          (this.v_invIB = 0));
        for (var n = 0, r = this.p_localPoints; n < r.length; n++) {
          var i = r[n];
          I(i);
        }
        (I(this.p_localNormal),
          I(this.p_localPoint),
          I(this.p_localCenterA),
          I(this.p_localCenterB),
          (this.p_type = $n.e_unset),
          (this.p_radiusA = 0),
          (this.p_radiusB = 0),
          (this.p_pointCount = 0),
          (this.p_invMassA = 0),
          (this.p_invMassB = 0),
          (this.p_invIA = 0),
          (this.p_invIB = 0));
      }),
      (e.prototype.initConstraint = function (e) {
        var t = this.m_fixtureA,
          n = this.m_fixtureB;
        if (t !== null && n !== null) {
          var r = t.m_body,
            i = n.m_body;
          if (r !== null && i !== null) {
            var a = t.m_shape,
              o = n.m_shape;
            if (a !== null && o !== null) {
              var s = this.m_manifold,
                c = s.pointCount;
              ((this.v_invMassA = r.m_invMass),
                (this.v_invMassB = i.m_invMass),
                (this.v_invIA = r.m_invI),
                (this.v_invIB = i.m_invI),
                (this.v_friction = this.m_friction),
                (this.v_restitution = this.m_restitution),
                (this.v_tangentSpeed = this.m_tangentSpeed),
                (this.v_pointCount = c),
                this.v_K.setZero(),
                this.v_normalMass.setZero(),
                (this.p_invMassA = r.m_invMass),
                (this.p_invMassB = i.m_invMass),
                (this.p_invIA = r.m_invI),
                (this.p_invIB = i.m_invI),
                F(this.p_localCenterA, r.m_sweep.localCenter),
                F(this.p_localCenterB, i.m_sweep.localCenter),
                (this.p_radiusA = a.m_radius),
                (this.p_radiusB = o.m_radius),
                (this.p_type = s.type),
                F(this.p_localNormal, s.localNormal),
                F(this.p_localPoint, s.localPoint),
                (this.p_pointCount = c));
              for (var l = 0; l < N.maxManifoldPoints; ++l)
                (this.v_points[l].recycle(), I(this.p_localPoints[l]));
              for (var l = 0; l < c; ++l) {
                var u = s.points[l],
                  d = this.v_points[l];
                (e.warmStarting &&
                  ((d.normalImpulse = e.dtRatio * u.normalImpulse),
                  (d.tangentImpulse = e.dtRatio * u.tangentImpulse)),
                  F(this.p_localPoints[l], u.localPoint));
              }
            }
          }
        }
      }),
      (e.prototype.getManifold = function () {
        return this.m_manifold;
      }),
      (e.prototype.getWorldManifold = function (e) {
        var t = this.m_fixtureA,
          n = this.m_fixtureB;
        if (t !== null && n !== null) {
          var r = t.m_body,
            i = n.m_body;
          if (r !== null && i !== null) {
            var a = t.m_shape,
              o = n.m_shape;
            if (a !== null && o !== null)
              return this.m_manifold.getWorldManifold(
                e,
                r.getTransform(),
                a.m_radius,
                i.getTransform(),
                o.m_radius,
              );
          }
        }
      }),
      (e.prototype.setEnabled = function (e) {
        this.m_enabledFlag = !!e;
      }),
      (e.prototype.isEnabled = function () {
        return this.m_enabledFlag;
      }),
      (e.prototype.isTouching = function () {
        return this.m_touchingFlag;
      }),
      (e.prototype.getNext = function () {
        return this.m_next;
      }),
      (e.prototype.getFixtureA = function () {
        return this.m_fixtureA;
      }),
      (e.prototype.getFixtureB = function () {
        return this.m_fixtureB;
      }),
      (e.prototype.getChildIndexA = function () {
        return this.m_indexA;
      }),
      (e.prototype.getChildIndexB = function () {
        return this.m_indexB;
      }),
      (e.prototype.flagForFiltering = function () {
        this.m_filterFlag = !0;
      }),
      (e.prototype.setFriction = function (e) {
        this.m_friction = e;
      }),
      (e.prototype.getFriction = function () {
        return this.m_friction;
      }),
      (e.prototype.resetFriction = function () {
        var e = this.m_fixtureA,
          t = this.m_fixtureB;
        e !== null &&
          t !== null &&
          (this.m_friction = hr(e.m_friction, t.m_friction));
      }),
      (e.prototype.setRestitution = function (e) {
        this.m_restitution = e;
      }),
      (e.prototype.getRestitution = function () {
        return this.m_restitution;
      }),
      (e.prototype.resetRestitution = function () {
        var e = this.m_fixtureA,
          t = this.m_fixtureB;
        e !== null &&
          t !== null &&
          (this.m_restitution = gr(e.m_restitution, t.m_restitution));
      }),
      (e.prototype.setTangentSpeed = function (e) {
        this.m_tangentSpeed = e;
      }),
      (e.prototype.getTangentSpeed = function () {
        return this.m_tangentSpeed;
      }),
      (e.prototype.evaluate = function (e, t, n) {
        var r = this.m_fixtureA,
          i = this.m_fixtureB;
        r !== null &&
          i !== null &&
          this.m_evaluateFcn(e, t, r, this.m_indexA, n, i, this.m_indexB);
      }),
      (e.prototype.update = function (e) {
        var t = this.m_fixtureA,
          n = this.m_fixtureB;
        if (t !== null && n !== null) {
          var r = t.m_body,
            i = n.m_body;
          if (r !== null && i !== null) {
            var a = t.m_shape,
              o = n.m_shape;
            if (a !== null && o !== null) {
              this.m_enabledFlag = !0;
              var s = !1,
                c = this.m_touchingFlag,
                l = t.m_isSensor,
                u = n.m_isSensor,
                d = l || u,
                f = r.m_xf,
                p = i.m_xf;
              if (d)
                ((s = on(a, this.m_indexA, o, this.m_indexB, f, p)),
                  (this.m_manifold.pointCount = 0));
              else {
                (fr.recycle(),
                  fr.set(this.m_manifold),
                  this.m_manifold.recycle(),
                  this.evaluate(this.m_manifold, f, p),
                  (s = this.m_manifold.pointCount > 0));
                for (var m = 0; m < this.m_manifold.pointCount; ++m) {
                  var h = this.m_manifold.points[m];
                  ((h.normalImpulse = 0), (h.tangentImpulse = 0));
                  for (var g = 0; g < fr.pointCount; ++g) {
                    var _ = fr.points[g];
                    if (_.id.key === h.id.key) {
                      ((h.normalImpulse = _.normalImpulse),
                        (h.tangentImpulse = _.tangentImpulse));
                      break;
                    }
                  }
                }
                s !== c && (r.setAwake(!0), i.setAwake(!0));
              }
              this.m_touchingFlag = s;
              var v = typeof e == `object` && !!e;
              (!c && s && v && e.beginContact(this),
                c && !s && v && e.endContact(this),
                !d && s && v && fr && e.preSolve(this, fr));
            }
          }
        }
      }),
      (e.prototype.solvePositionConstraint = function (e) {
        return this._solvePositionConstraint(e, null, null);
      }),
      (e.prototype.solvePositionConstraintTOI = function (e, t, n) {
        return this._solvePositionConstraint(e, t, n);
      }),
      (e.prototype._solvePositionConstraint = function (e, t, n) {
        var r = t !== null && n !== null,
          i = 0,
          a = this.m_fixtureA,
          o = this.m_fixtureB;
        if (a === null || o === null) return i;
        var s = a.m_body,
          c = o.m_body;
        if (s === null || c === null) return i;
        var l = s.c_position,
          u = c.c_position,
          d = this.p_localCenterA,
          f = this.p_localCenterB,
          p = 0,
          m = 0;
        (!r || s === t || s === n) &&
          ((p = this.p_invMassA), (m = this.p_invIA));
        var h = 0,
          g = 0;
        ((!r || c === t || c === n) &&
          ((h = this.p_invMassB), (g = this.p_invIB)),
          F(yr, l.c));
        var _ = l.a;
        F(xr, u.c);
        for (var v = u.a, y = 0; y < this.p_pointCount; ++y) {
          (vt(wr, d, yr, _), vt(Tr, f, xr, v));
          var b = void 0;
          switch (this.p_type) {
            case $n.e_circles:
              (H(Er, wr, this.p_localPoint),
                H(Dr, Tr, this.p_localPoints[0]),
                L(K, Dr, Er),
                Ge(K),
                z(Nr, 0.5, Er, 0.5, Dr),
                (b = V(Dr, K) - V(Er, K) - this.p_radiusA - this.p_radiusB));
              break;
            case $n.e_faceA:
              (Qe(K, wr.q, this.p_localNormal),
                H(kr, wr, this.p_localPoint),
                H(Or, Tr, this.p_localPoints[y]),
                (b = V(Or, K) - V(kr, K) - this.p_radiusA - this.p_radiusB),
                F(Nr, Or));
              break;
            case $n.e_faceB:
              (Qe(K, Tr.q, this.p_localNormal),
                H(kr, Tr, this.p_localPoint),
                H(Or, wr, this.p_localPoints[y]),
                (b = V(Or, K) - V(kr, K) - this.p_radiusA - this.p_radiusB),
                F(Nr, Or),
                Ie(K));
              break;
            default:
              return i;
          }
          (L(Ar, Nr, yr), L(jr, Nr, xr), (i = ur(i, b)));
          var x = r ? N.toiBaugarte : N.baumgarte,
            S = N.linearSlop,
            C = N.maxLinearCorrection,
            w = ue(x * (b + S), -C, 0),
            T = B(Ar, K),
            E = B(jr, K),
            D = p + h + m * T * T + g * E * E;
          (R(Mr, D > 0 ? -w / D : 0, K),
            He(yr, p, Mr),
            (_ -= m * B(Ar, Mr)),
            Ve(xr, h, Mr),
            (v += g * B(jr, Mr)));
        }
        return (F(l.c, yr), (l.a = _), F(u.c, xr), (u.a = v), i);
      }),
      (e.prototype.initVelocityConstraint = function (e) {
        var t = this.m_fixtureA,
          n = this.m_fixtureB;
        if (t !== null && n !== null) {
          var r = t.m_body,
            i = n.m_body;
          if (r !== null && i !== null) {
            var a = r.c_velocity,
              o = i.c_velocity,
              s = r.c_position,
              c = i.c_position,
              l = this.p_radiusA,
              u = this.p_radiusB,
              d = this.m_manifold,
              f = this.v_invMassA,
              p = this.v_invMassB,
              m = this.v_invIA,
              h = this.v_invIB,
              g = this.p_localCenterA,
              _ = this.p_localCenterB;
            F(yr, s.c);
            var v = s.a;
            F(br, a.v);
            var y = a.w;
            F(xr, c.c);
            var b = c.a;
            F(Sr, o.v);
            var x = o.w;
            (vt(wr, g, yr, v),
              vt(Tr, _, xr, b),
              pr.recycle(),
              d.getWorldManifold(pr, wr, l, Tr, u),
              F(this.v_normal, pr.normal));
            for (var S = 0; S < this.v_pointCount; ++S) {
              var C = this.v_points[S],
                w = pr.points[S];
              (L(C.rA, w, yr), L(C.rB, w, xr));
              var T = B(C.rA, this.v_normal),
                E = B(C.rB, this.v_normal),
                D = f + p + m * T * T + h * E * E;
              ((C.normalMass = D > 0 ? 1 / D : 0), Ke(Cr, this.v_normal, 1));
              var O = B(C.rA, Cr),
                ee = B(C.rB, Cr),
                te = f + p + m * O * O + h * ee * ee;
              ((C.tangentMass = te > 0 ? 1 / te : 0), (C.velocityBias = 0));
              var ne = 0;
              ((ne += V(this.v_normal, Sr)),
                (ne += V(this.v_normal, qe(Hr, x, C.rB))),
                (ne -= V(this.v_normal, br)),
                (ne -= V(this.v_normal, qe(Hr, y, C.rA))),
                ne < -N.velocityThreshold &&
                  (C.velocityBias = -this.v_restitution * ne));
            }
            if (this.v_pointCount == 2 && e.blockSolve) {
              var k = this.v_points[0],
                A = this.v_points[1],
                re = B(k.rA, this.v_normal),
                ie = B(k.rB, this.v_normal),
                ae = B(A.rA, this.v_normal),
                oe = B(A.rB, this.v_normal),
                se = f + p + m * re * re + h * ie * ie,
                ce = f + p + m * ae * ae + h * oe * oe,
                le = f + p + m * re * ae + h * ie * oe;
              if (se * se < 1e3 * (se * ce - le * le)) {
                (this.v_K.ex.setNum(se, le), this.v_K.ey.setNum(le, ce));
                var ue = this.v_K.ex.x,
                  de = this.v_K.ey.x,
                  fe = this.v_K.ex.y,
                  pe = this.v_K.ey.y,
                  me = ue * pe - de * fe;
                (me !== 0 && (me = 1 / me),
                  (this.v_normalMass.ex.x = me * pe),
                  (this.v_normalMass.ey.x = -me * de),
                  (this.v_normalMass.ex.y = -me * fe),
                  (this.v_normalMass.ey.y = me * ue));
              } else this.v_pointCount = 1;
            }
            (F(s.c, yr),
              (s.a = v),
              F(a.v, br),
              (a.w = y),
              F(c.c, xr),
              (c.a = b),
              F(o.v, Sr),
              (o.w = x));
          }
        }
      }),
      (e.prototype.warmStartConstraint = function (e) {
        var t = this.m_fixtureA,
          n = this.m_fixtureB;
        if (t !== null && n !== null) {
          var r = t.m_body,
            i = n.m_body;
          if (r !== null && i !== null) {
            var a = r.c_velocity,
              o = i.c_velocity,
              s = this.v_invMassA,
              c = this.v_invIA,
              l = this.v_invMassB,
              u = this.v_invIB;
            F(br, a.v);
            var d = a.w;
            F(Sr, o.v);
            var f = o.w;
            (F(K, this.v_normal), Ke(Cr, K, 1));
            for (var p = 0; p < this.v_pointCount; ++p) {
              var m = this.v_points[p];
              (z(Mr, m.normalImpulse, K, m.tangentImpulse, Cr),
                (d -= c * B(m.rA, Mr)),
                He(br, s, Mr),
                (f += u * B(m.rB, Mr)),
                Ve(Sr, l, Mr));
            }
            (F(a.v, br), (a.w = d), F(o.v, Sr), (o.w = f));
          }
        }
      }),
      (e.prototype.storeConstraintImpulses = function (e) {
        for (var t = this.m_manifold, n = 0; n < this.v_pointCount; ++n)
          ((t.points[n].normalImpulse = this.v_points[n].normalImpulse),
            (t.points[n].tangentImpulse = this.v_points[n].tangentImpulse));
      }),
      (e.prototype.solveVelocityConstraint = function (e) {
        var t = this.m_fixtureA,
          n = this.m_fixtureB;
        if (t !== null && n !== null) {
          var r = t.m_body,
            i = n.m_body;
          if (r !== null && i !== null) {
            var a = r.c_velocity,
              o = i.c_velocity,
              s = this.v_invMassA,
              c = this.v_invIA,
              l = this.v_invMassB,
              u = this.v_invIB;
            F(br, a.v);
            var d = a.w;
            F(Sr, o.v);
            var f = o.w;
            (F(K, this.v_normal), Ke(Cr, K, 1));
            for (var p = this.v_friction, m = 0; m < this.v_pointCount; ++m) {
              var h = this.v_points[m];
              (I(Pr),
                Le(Pr, Sr),
                Le(Pr, qe(Hr, f, h.rB)),
                ze(Pr, br),
                ze(Pr, qe(Hr, d, h.rA)));
              var g = V(Pr, Cr) - this.v_tangentSpeed,
                _ = h.tangentMass * -g,
                v = p * h.normalImpulse,
                y = ue(h.tangentImpulse + _, -v, v);
              ((_ = y - h.tangentImpulse),
                (h.tangentImpulse = y),
                R(Mr, _, Cr),
                He(br, s, Mr),
                (d -= c * B(h.rA, Mr)),
                Ve(Sr, l, Mr),
                (f += u * B(h.rB, Mr)));
            }
            if (this.v_pointCount == 1 || e.blockSolve == 0)
              for (var b = 0; b < this.v_pointCount; ++b) {
                var h = this.v_points[b];
                (I(Pr),
                  Le(Pr, Sr),
                  Le(Pr, qe(Hr, f, h.rB)),
                  ze(Pr, br),
                  ze(Pr, qe(Hr, d, h.rA)));
                var x = V(Pr, K),
                  _ = -h.normalMass * (x - h.velocityBias),
                  y = lr(h.normalImpulse + _, 0);
                ((_ = y - h.normalImpulse),
                  (h.normalImpulse = y),
                  R(Mr, _, K),
                  He(br, s, Mr),
                  (d -= c * B(h.rA, Mr)),
                  Ve(Sr, l, Mr),
                  (f += u * B(h.rB, Mr)));
              }
            else {
              var S = this.v_points[0],
                C = this.v_points[1];
              (Fe(Rr, S.normalImpulse, C.normalImpulse),
                I(Fr),
                Le(Fr, Sr),
                Le(Fr, qe(Hr, f, S.rB)),
                ze(Fr, br),
                ze(Fr, qe(Hr, d, S.rA)),
                I(Ir),
                Le(Ir, Sr),
                Le(Ir, qe(Hr, f, C.rB)),
                ze(Ir, br),
                ze(Ir, qe(Hr, d, C.rA)));
              var w = V(Fr, K),
                T = V(Ir, K);
              for (
                Fe(Lr, w - S.velocityBias, T - C.velocityBias),
                  Lr.x -= this.v_K.ex.x * Rr.x + this.v_K.ey.x * Rr.y,
                  Lr.y -= this.v_K.ex.y * Rr.x + this.v_K.ey.y * Rr.y;
                ;
              ) {
                if (
                  (I(q),
                  (q.x = -(
                    this.v_normalMass.ex.x * Lr.x +
                    this.v_normalMass.ey.x * Lr.y
                  )),
                  (q.y = -(
                    this.v_normalMass.ex.y * Lr.x +
                    this.v_normalMass.ey.y * Lr.y
                  )),
                  q.x >= 0 && q.y >= 0)
                ) {
                  (L(zr, q, Rr),
                    R(Br, zr.x, K),
                    R(Vr, zr.y, K),
                    Ue(br, -s, Br, -s, Vr, 1, br),
                    (d -= c * (B(S.rA, Br) + B(C.rA, Vr))),
                    Ue(Sr, l, Br, l, Vr, 1, Sr),
                    (f += u * (B(S.rB, Br) + B(C.rB, Vr))),
                    (S.normalImpulse = q.x),
                    (C.normalImpulse = q.y));
                  break;
                }
                if (
                  ((q.x = -S.normalMass * Lr.x),
                  (q.y = 0),
                  (w = 0),
                  (T = this.v_K.ex.y * q.x + Lr.y),
                  q.x >= 0 && T >= 0)
                ) {
                  (L(zr, q, Rr),
                    R(Br, zr.x, K),
                    R(Vr, zr.y, K),
                    Ue(br, -s, Br, -s, Vr, 1, br),
                    (d -= c * (B(S.rA, Br) + B(C.rA, Vr))),
                    Ue(Sr, l, Br, l, Vr, 1, Sr),
                    (f += u * (B(S.rB, Br) + B(C.rB, Vr))),
                    (S.normalImpulse = q.x),
                    (C.normalImpulse = q.y));
                  break;
                }
                if (
                  ((q.x = 0),
                  (q.y = -C.normalMass * Lr.y),
                  (w = this.v_K.ey.x * q.y + Lr.x),
                  (T = 0),
                  q.y >= 0 && w >= 0)
                ) {
                  (L(zr, q, Rr),
                    R(Br, zr.x, K),
                    R(Vr, zr.y, K),
                    Ue(br, -s, Br, -s, Vr, 1, br),
                    (d -= c * (B(S.rA, Br) + B(C.rA, Vr))),
                    Ue(Sr, l, Br, l, Vr, 1, Sr),
                    (f += u * (B(S.rB, Br) + B(C.rB, Vr))),
                    (S.normalImpulse = q.x),
                    (C.normalImpulse = q.y));
                  break;
                }
                if (
                  ((q.x = 0),
                  (q.y = 0),
                  (w = Lr.x),
                  (T = Lr.y),
                  w >= 0 && T >= 0)
                ) {
                  (L(zr, q, Rr),
                    R(Br, zr.x, K),
                    R(Vr, zr.y, K),
                    Ue(br, -s, Br, -s, Vr, 1, br),
                    (d -= c * (B(S.rA, Br) + B(C.rA, Vr))),
                    Ue(Sr, l, Br, l, Vr, 1, Sr),
                    (f += u * (B(S.rB, Br) + B(C.rB, Vr))),
                    (S.normalImpulse = q.x),
                    (C.normalImpulse = q.y));
                  break;
                }
                break;
              }
            }
            (F(a.v, br), (a.w = d), F(o.v, Sr), (o.w = f));
          }
        }
      }),
      (e.addType = function (e, t, n) {
        ((_r[e] = _r[e] || {}), (_r[e][t] = n));
      }),
      (e.create = function (e, t, n, r) {
        var i = e.m_shape.m_type,
          a = n.m_shape.m_type,
          o = dr.allocate(),
          s;
        if ((s = _r[i] && _r[i][a])) o.initialize(e, t, n, r, s);
        else if ((s = _r[a] && _r[a][i])) o.initialize(n, r, e, t, s);
        else return null;
        ((e = o.m_fixtureA),
          (n = o.m_fixtureB),
          (t = o.getChildIndexA()),
          (r = o.getChildIndexB()));
        var c = e.m_body,
          l = n.m_body;
        return (
          (o.m_nodeA.contact = o),
          (o.m_nodeA.other = l),
          (o.m_nodeA.prev = null),
          (o.m_nodeA.next = c.m_contactList),
          c.m_contactList != null && (c.m_contactList.prev = o.m_nodeA),
          (c.m_contactList = o.m_nodeA),
          (o.m_nodeB.contact = o),
          (o.m_nodeB.other = c),
          (o.m_nodeB.prev = null),
          (o.m_nodeB.next = l.m_contactList),
          l.m_contactList != null && (l.m_contactList.prev = o.m_nodeB),
          (l.m_contactList = o.m_nodeB),
          e.isSensor() == 0 &&
            n.isSensor() == 0 &&
            (c.setAwake(!0), l.setAwake(!0)),
          o
        );
      }),
      (e.destroy = function (e, t) {
        var n = e.m_fixtureA,
          r = e.m_fixtureB;
        if (n !== null && r !== null) {
          var i = n.m_body,
            a = r.m_body;
          i !== null &&
            a !== null &&
            (e.isTouching() && t.endContact(e),
            e.m_nodeA.prev && (e.m_nodeA.prev.next = e.m_nodeA.next),
            e.m_nodeA.next && (e.m_nodeA.next.prev = e.m_nodeA.prev),
            e.m_nodeA == i.m_contactList && (i.m_contactList = e.m_nodeA.next),
            e.m_nodeB.prev && (e.m_nodeB.prev.next = e.m_nodeB.next),
            e.m_nodeB.next && (e.m_nodeB.next.prev = e.m_nodeB.prev),
            e.m_nodeB == a.m_contactList && (a.m_contactList = e.m_nodeB.next),
            e.m_manifold.pointCount > 0 &&
              !n.m_isSensor &&
              !r.m_isSensor &&
              (i.setAwake(!0), a.setAwake(!0)),
            dr.release(e));
        }
      }),
      e
    );
  })(),
  Wr = {
    gravity: j.zero(),
    allowSleep: !0,
    warmStarting: !0,
    continuousPhysics: !0,
    subStepping: !1,
    blockSolve: !0,
    velocityIterations: 8,
    positionIterations: 3,
  },
  Gr = (function () {
    function e(t) {
      if (!(this instanceof e)) return new e(t);
      ((this.s_step = new jn()),
        t ? j.isValid(t) && (t = { gravity: t }) : (t = {}),
        (t = re(t, Wr)),
        (this.m_solver = new Hn(this)),
        (this.m_broadPhase = new Ae()),
        (this.m_contactList = null),
        (this.m_contactCount = 0),
        (this.m_bodyList = null),
        (this.m_bodyCount = 0),
        (this.m_jointList = null),
        (this.m_jointCount = 0),
        (this.m_stepComplete = !0),
        (this.m_allowSleep = t.allowSleep),
        (this.m_gravity = j.clone(t.gravity)),
        (this.m_clearForces = !0),
        (this.m_newFixture = !1),
        (this.m_locked = !1),
        (this.m_warmStarting = t.warmStarting),
        (this.m_continuousPhysics = t.continuousPhysics),
        (this.m_subStepping = t.subStepping),
        (this.m_blockSolve = t.blockSolve),
        (this.m_velocityIterations = t.velocityIterations),
        (this.m_positionIterations = t.positionIterations),
        (this.m_t = 0),
        (this.m_step_callback = []));
    }
    return (
      (e.prototype._serialize = function () {
        for (var e = [], t = [], n = this.getBodyList(); n; n = n.getNext())
          e.push(n);
        for (var r = this.getJointList(); r; r = r.getNext())
          typeof r._serialize == `function` && t.push(r);
        return { gravity: this.m_gravity, bodies: e, joints: t };
      }),
      (e._deserialize = function (t, n, r) {
        if (!t) return new e();
        var i = new e(t.gravity);
        if (t.bodies)
          for (var a = t.bodies.length - 1; a >= 0; --a)
            i._addBody(r(W, t.bodies[a], i));
        if (t.joints)
          for (var a = t.joints.length - 1; a >= 0; a--)
            i.createJoint(r(It, t.joints[a], i));
        return i;
      }),
      (e.prototype.getBodyList = function () {
        return this.m_bodyList;
      }),
      (e.prototype.getJointList = function () {
        return this.m_jointList;
      }),
      (e.prototype.getContactList = function () {
        return this.m_contactList;
      }),
      (e.prototype.getBodyCount = function () {
        return this.m_bodyCount;
      }),
      (e.prototype.getJointCount = function () {
        return this.m_jointCount;
      }),
      (e.prototype.getContactCount = function () {
        return this.m_contactCount;
      }),
      (e.prototype.setGravity = function (e) {
        this.m_gravity.set(e);
      }),
      (e.prototype.getGravity = function () {
        return this.m_gravity;
      }),
      (e.prototype.isLocked = function () {
        return this.m_locked;
      }),
      (e.prototype.setAllowSleeping = function (e) {
        if (
          e != this.m_allowSleep &&
          ((this.m_allowSleep = e), this.m_allowSleep == 0)
        )
          for (var t = this.m_bodyList; t; t = t.m_next) t.setAwake(!0);
      }),
      (e.prototype.getAllowSleeping = function () {
        return this.m_allowSleep;
      }),
      (e.prototype.setWarmStarting = function (e) {
        this.m_warmStarting = e;
      }),
      (e.prototype.getWarmStarting = function () {
        return this.m_warmStarting;
      }),
      (e.prototype.setContinuousPhysics = function (e) {
        this.m_continuousPhysics = e;
      }),
      (e.prototype.getContinuousPhysics = function () {
        return this.m_continuousPhysics;
      }),
      (e.prototype.setSubStepping = function (e) {
        this.m_subStepping = e;
      }),
      (e.prototype.getSubStepping = function () {
        return this.m_subStepping;
      }),
      (e.prototype.setAutoClearForces = function (e) {
        this.m_clearForces = e;
      }),
      (e.prototype.getAutoClearForces = function () {
        return this.m_clearForces;
      }),
      (e.prototype.clearForces = function () {
        for (var e = this.m_bodyList; e; e = e.getNext())
          (e.m_force.setZero(), (e.m_torque = 0));
      }),
      (e.prototype.queryAABB = function (e, t) {
        var n = this.m_broadPhase;
        this.m_broadPhase.query(e, function (e) {
          return t(n.getUserData(e).fixture);
        });
      }),
      (e.prototype.rayCast = function (e, t, n) {
        var r = this.m_broadPhase;
        this.m_broadPhase.rayCast(
          { maxFraction: 1, p1: e, p2: t },
          function (e, t) {
            var i = r.getUserData(t),
              a = i.fixture,
              o = i.childIndex,
              s = {};
            if (a.rayCast(s, e, o)) {
              var c = s.fraction;
              return n(
                a,
                j.add(j.mulNumVec2(1 - c, e.p1), j.mulNumVec2(c, e.p2)),
                s.normal,
                c,
              );
            }
            return e.maxFraction;
          },
        );
      }),
      (e.prototype.getProxyCount = function () {
        return this.m_broadPhase.getProxyCount();
      }),
      (e.prototype.getTreeHeight = function () {
        return this.m_broadPhase.getTreeHeight();
      }),
      (e.prototype.getTreeBalance = function () {
        return this.m_broadPhase.getTreeBalance();
      }),
      (e.prototype.getTreeQuality = function () {
        return this.m_broadPhase.getTreeQuality();
      }),
      (e.prototype.shiftOrigin = function (e) {
        if (!this.isLocked()) {
          for (var t = this.m_bodyList; t; t = t.m_next)
            (t.m_xf.p.sub(e), t.m_sweep.c0.sub(e), t.m_sweep.c.sub(e));
          for (var n = this.m_jointList; n; n = n.m_next) n.shiftOrigin(e);
          this.m_broadPhase.shiftOrigin(e);
        }
      }),
      (e.prototype._addBody = function (e) {
        this.isLocked() ||
          ((e.m_prev = null),
          (e.m_next = this.m_bodyList),
          this.m_bodyList && (this.m_bodyList.m_prev = e),
          (this.m_bodyList = e),
          ++this.m_bodyCount,
          this.publish(`add-body`, e));
      }),
      (e.prototype.createBody = function (e, t) {
        if (this.isLocked()) return null;
        var n = {};
        e &&
          (j.isValid(e)
            ? (n = { position: e, angle: t })
            : typeof e == `object` && (n = e));
        var r = new W(this, n);
        return (this._addBody(r), r);
      }),
      (e.prototype.createDynamicBody = function (e, t) {
        var n = {};
        return (
          e &&
            (j.isValid(e)
              ? (n = { position: e, angle: t })
              : typeof e == `object` && (n = e)),
          (n.type = `dynamic`),
          this.createBody(n)
        );
      }),
      (e.prototype.createKinematicBody = function (e, t) {
        var n = {};
        return (
          e &&
            (j.isValid(e)
              ? (n = { position: e, angle: t })
              : typeof e == `object` && (n = e)),
          (n.type = `kinematic`),
          this.createBody(n)
        );
      }),
      (e.prototype.destroyBody = function (e) {
        if (!this.isLocked()) {
          if (e.m_destroyed) return !1;
          for (var t = e.m_jointList; t;) {
            var n = t;
            ((t = t.next),
              this.publish(`remove-joint`, n.joint),
              this.destroyJoint(n.joint),
              (e.m_jointList = t));
          }
          e.m_jointList = null;
          for (var r = e.m_contactList; r;) {
            var i = r;
            ((r = r.next),
              this.destroyContact(i.contact),
              (e.m_contactList = r));
          }
          e.m_contactList = null;
          for (var a = e.m_fixtureList; a;) {
            var o = a;
            ((a = a.m_next),
              this.publish(`remove-fixture`, o),
              o.destroyProxies(this.m_broadPhase),
              (e.m_fixtureList = a));
          }
          return (
            (e.m_fixtureList = null),
            e.m_prev && (e.m_prev.m_next = e.m_next),
            e.m_next && (e.m_next.m_prev = e.m_prev),
            e == this.m_bodyList && (this.m_bodyList = e.m_next),
            (e.m_destroyed = !0),
            --this.m_bodyCount,
            this.publish(`remove-body`, e),
            !0
          );
        }
      }),
      (e.prototype.createJoint = function (e) {
        if (this.isLocked()) return null;
        if (
          ((e.m_prev = null),
          (e.m_next = this.m_jointList),
          this.m_jointList && (this.m_jointList.m_prev = e),
          (this.m_jointList = e),
          ++this.m_jointCount,
          (e.m_edgeA.joint = e),
          (e.m_edgeA.other = e.m_bodyB),
          (e.m_edgeA.prev = null),
          (e.m_edgeA.next = e.m_bodyA.m_jointList),
          e.m_bodyA.m_jointList && (e.m_bodyA.m_jointList.prev = e.m_edgeA),
          (e.m_bodyA.m_jointList = e.m_edgeA),
          (e.m_edgeB.joint = e),
          (e.m_edgeB.other = e.m_bodyA),
          (e.m_edgeB.prev = null),
          (e.m_edgeB.next = e.m_bodyB.m_jointList),
          e.m_bodyB.m_jointList && (e.m_bodyB.m_jointList.prev = e.m_edgeB),
          (e.m_bodyB.m_jointList = e.m_edgeB),
          e.m_collideConnected == 0)
        )
          for (var t = e.m_bodyB.getContactList(); t; t = t.next)
            t.other == e.m_bodyA && t.contact.flagForFiltering();
        return (this.publish(`add-joint`, e), e);
      }),
      (e.prototype.destroyJoint = function (e) {
        if (!this.isLocked()) {
          (e.m_prev && (e.m_prev.m_next = e.m_next),
            e.m_next && (e.m_next.m_prev = e.m_prev),
            e == this.m_jointList && (this.m_jointList = e.m_next));
          var t = e.m_bodyA,
            n = e.m_bodyB;
          if (
            (t.setAwake(!0),
            n.setAwake(!0),
            e.m_edgeA.prev && (e.m_edgeA.prev.next = e.m_edgeA.next),
            e.m_edgeA.next && (e.m_edgeA.next.prev = e.m_edgeA.prev),
            e.m_edgeA == t.m_jointList && (t.m_jointList = e.m_edgeA.next),
            (e.m_edgeA.prev = null),
            (e.m_edgeA.next = null),
            e.m_edgeB.prev && (e.m_edgeB.prev.next = e.m_edgeB.next),
            e.m_edgeB.next && (e.m_edgeB.next.prev = e.m_edgeB.prev),
            e.m_edgeB == n.m_jointList && (n.m_jointList = e.m_edgeB.next),
            (e.m_edgeB.prev = null),
            (e.m_edgeB.next = null),
            --this.m_jointCount,
            e.m_collideConnected == 0)
          )
            for (var r = n.getContactList(); r;)
              (r.other == t && r.contact.flagForFiltering(), (r = r.next));
          this.publish(`remove-joint`, e);
        }
      }),
      (e.prototype.step = function (e, t, n) {
        if (
          (this.publish(`pre-step`, e),
          (t | 0) !== t && (t = 0),
          (t ||= this.m_velocityIterations),
          (n ||= this.m_positionIterations),
          (this.m_newFixture &&= (this.findNewContacts(), !1)),
          (this.m_locked = !0),
          this.s_step.reset(e),
          (this.s_step.velocityIterations = t),
          (this.s_step.positionIterations = n),
          (this.s_step.warmStarting = this.m_warmStarting),
          (this.s_step.blockSolve = this.m_blockSolve),
          this.updateContacts(),
          this.m_stepComplete && e > 0)
        ) {
          this.m_solver.solveWorld(this.s_step);
          for (var r = this.m_bodyList; r; r = r.getNext())
            r.m_islandFlag != 0 && (r.isStatic() || r.synchronizeFixtures());
          this.findNewContacts();
        }
        (this.m_continuousPhysics &&
          e > 0 &&
          this.m_solver.solveWorldTOI(this.s_step),
          this.m_clearForces && this.clearForces(),
          (this.m_locked = !1));
        for (var i; (i = this.m_step_callback.shift());) i(this);
        this.publish(`post-step`, e);
      }),
      (e.prototype.queueUpdate = function (e) {
        this.isLocked() ? this.m_step_callback.push(e) : e(this);
      }),
      (e.prototype.findNewContacts = function () {
        var e = this;
        this.m_broadPhase.updatePairs(function (t, n) {
          return e.createContact(t, n);
        });
      }),
      (e.prototype.createContact = function (e, t) {
        var n = e.fixture,
          r = t.fixture,
          i = e.childIndex,
          a = t.childIndex,
          o = n.getBody(),
          s = r.getBody();
        if (o != s) {
          for (var c = s.getContactList(); c;) {
            if (c.other == o) {
              var l = c.contact.getFixtureA(),
                u = c.contact.getFixtureB(),
                d = c.contact.getChildIndexA(),
                f = c.contact.getChildIndexB();
              if (
                (l == n && u == r && d == i && f == a) ||
                (l == r && u == n && d == a && f == i)
              )
                return;
            }
            c = c.next;
          }
          if (s.shouldCollide(o) != 0 && r.shouldCollide(n) != 0) {
            var p = Ur.create(n, i, r, a);
            p != null &&
              ((p.m_prev = null),
              this.m_contactList != null &&
                ((p.m_next = this.m_contactList),
                (this.m_contactList.m_prev = p)),
              (this.m_contactList = p),
              ++this.m_contactCount);
          }
        }
      }),
      (e.prototype.updateContacts = function () {
        for (var e, t = this.m_contactList; (e = t);) {
          t = e.getNext();
          var n = e.getFixtureA(),
            r = e.getFixtureB(),
            i = e.getChildIndexA(),
            a = e.getChildIndexB(),
            o = n.getBody(),
            s = r.getBody();
          if (e.m_filterFlag) {
            if (s.shouldCollide(o) == 0) {
              this.destroyContact(e);
              continue;
            }
            if (r.shouldCollide(n) == 0) {
              this.destroyContact(e);
              continue;
            }
            e.m_filterFlag = !1;
          }
          var c = o.isAwake() && !o.isStatic(),
            l = s.isAwake() && !s.isStatic();
          if (c != 0 || l != 0) {
            var u = n.m_proxies[i].proxyId,
              d = r.m_proxies[a].proxyId;
            if (this.m_broadPhase.testOverlap(u, d) == 0) {
              this.destroyContact(e);
              continue;
            }
            e.update(this);
          }
        }
      }),
      (e.prototype.destroyContact = function (e) {
        (e.m_prev && (e.m_prev.m_next = e.m_next),
          e.m_next && (e.m_next.m_prev = e.m_prev),
          e == this.m_contactList && (this.m_contactList = e.m_next),
          Ur.destroy(e, this),
          --this.m_contactCount);
      }),
      (e.prototype.on = function (e, t) {
        return typeof e != `string` || typeof t != `function`
          ? this
          : ((this._listeners ||= {}),
            this._listeners[e] || (this._listeners[e] = []),
            this._listeners[e].push(t),
            this);
      }),
      (e.prototype.off = function (e, t) {
        if (typeof e != `string` || typeof t != `function`) return this;
        var n = this._listeners && this._listeners[e];
        if (!n || !n.length) return this;
        var r = n.indexOf(t);
        return (r >= 0 && n.splice(r, 1), this);
      }),
      (e.prototype.publish = function (e, t, n, r) {
        var i = this._listeners && this._listeners[e];
        if (!i || !i.length) return 0;
        for (var a = 0; a < i.length; a++) i[a].call(this, t, n, r);
        return i.length;
      }),
      (e.prototype.beginContact = function (e) {
        this.publish(`begin-contact`, e);
      }),
      (e.prototype.endContact = function (e) {
        this.publish(`end-contact`, e);
      }),
      (e.prototype.preSolve = function (e, t) {
        this.publish(`pre-solve`, e, t);
      }),
      (e.prototype.postSolve = function (e, t) {
        this.publish(`post-solve`, e, t);
      }),
      e
    );
  })(),
  J = (function () {
    function e(t, n, r) {
      if (!(this instanceof e)) return new e(t, n, r);
      t === void 0
        ? ((this.x = 0), (this.y = 0), (this.z = 0))
        : typeof t == `object`
          ? ((this.x = t.x), (this.y = t.y), (this.z = t.z))
          : ((this.x = t), (this.y = n), (this.z = r));
    }
    return (
      (e.prototype._serialize = function () {
        return { x: this.x, y: this.y, z: this.z };
      }),
      (e._deserialize = function (t) {
        var n = Object.create(e.prototype);
        return ((n.x = t.x), (n.y = t.y), (n.z = t.z), n);
      }),
      (e.neo = function (t, n, r) {
        var i = Object.create(e.prototype);
        return ((i.x = t), (i.y = n), (i.z = r), i);
      }),
      (e.zero = function () {
        var t = Object.create(e.prototype);
        return ((t.x = 0), (t.y = 0), (t.z = 0), t);
      }),
      (e.clone = function (t) {
        return e.neo(t.x, t.y, t.z);
      }),
      (e.prototype.toString = function () {
        return JSON.stringify(this);
      }),
      (e.isValid = function (e) {
        return (
          e != null &&
          Number.isFinite(e.x) &&
          Number.isFinite(e.y) &&
          Number.isFinite(e.z)
        );
      }),
      (e.assert = function (e) {}),
      (e.prototype.setZero = function () {
        return ((this.x = 0), (this.y = 0), (this.z = 0), this);
      }),
      (e.prototype.set = function (e, t, n) {
        return ((this.x = e), (this.y = t), (this.z = n), this);
      }),
      (e.prototype.add = function (e) {
        return ((this.x += e.x), (this.y += e.y), (this.z += e.z), this);
      }),
      (e.prototype.sub = function (e) {
        return ((this.x -= e.x), (this.y -= e.y), (this.z -= e.z), this);
      }),
      (e.prototype.mul = function (e) {
        return ((this.x *= e), (this.y *= e), (this.z *= e), this);
      }),
      (e.areEqual = function (e, t) {
        return (
          e === t ||
          (typeof e == `object` &&
            !!e &&
            typeof t == `object` &&
            !!t &&
            e.x === t.x &&
            e.y === t.y &&
            e.z === t.z)
        );
      }),
      (e.dot = function (e, t) {
        return e.x * t.x + e.y * t.y + e.z * t.z;
      }),
      (e.cross = function (t, n) {
        return new e(
          t.y * n.z - t.z * n.y,
          t.z * n.x - t.x * n.z,
          t.x * n.y - t.y * n.x,
        );
      }),
      (e.add = function (t, n) {
        return new e(t.x + n.x, t.y + n.y, t.z + n.z);
      }),
      (e.sub = function (t, n) {
        return new e(t.x - n.x, t.y - n.y, t.z - n.z);
      }),
      (e.mul = function (t, n) {
        return new e(n * t.x, n * t.y, n * t.z);
      }),
      (e.prototype.neg = function () {
        return (
          (this.x = -this.x),
          (this.y = -this.y),
          (this.z = -this.z),
          this
        );
      }),
      (e.neg = function (t) {
        return new e(-t.x, -t.y, -t.z);
      }),
      e
    );
  })(),
  Kr = P(0, 0),
  qr = P(0, 0),
  Jr = (function (e) {
    k(t, e);
    function t(n, r) {
      var i = this;
      return i instanceof t
        ? ((i = e.call(this) || this),
          (i.m_type = t.TYPE),
          (i.m_radius = N.polygonRadius),
          (i.m_vertex1 = n ? j.clone(n) : j.zero()),
          (i.m_vertex2 = r ? j.clone(r) : j.zero()),
          (i.m_vertex0 = j.zero()),
          (i.m_vertex3 = j.zero()),
          (i.m_hasVertex0 = !1),
          (i.m_hasVertex3 = !1),
          i)
        : new t(n, r);
    }
    return (
      (t.prototype._serialize = function () {
        return {
          type: this.m_type,
          vertex1: this.m_vertex1,
          vertex2: this.m_vertex2,
          vertex0: this.m_vertex0,
          vertex3: this.m_vertex3,
        };
      }),
      (t._deserialize = function (e) {
        var n = new t(e.vertex1, e.vertex2);
        return (
          n.m_hasVertex0 && n.setPrevVertex(e.vertex0),
          n.m_hasVertex3 && n.setNextVertex(e.vertex3),
          n
        );
      }),
      (t.prototype._reset = function () {}),
      (t.prototype.getRadius = function () {
        return this.m_radius;
      }),
      (t.prototype.getType = function () {
        return this.m_type;
      }),
      (t.prototype.setNext = function (e) {
        return this.setNextVertex(e);
      }),
      (t.prototype.setNextVertex = function (e) {
        return (
          e
            ? (this.m_vertex3.setVec2(e), (this.m_hasVertex3 = !0))
            : (this.m_vertex3.setZero(), (this.m_hasVertex3 = !1)),
          this
        );
      }),
      (t.prototype.getNextVertex = function () {
        return this.m_vertex3;
      }),
      (t.prototype.setPrev = function (e) {
        return this.setPrevVertex(e);
      }),
      (t.prototype.setPrevVertex = function (e) {
        return (
          e
            ? (this.m_vertex0.setVec2(e), (this.m_hasVertex0 = !0))
            : (this.m_vertex0.setZero(), (this.m_hasVertex0 = !1)),
          this
        );
      }),
      (t.prototype.getPrevVertex = function () {
        return this.m_vertex0;
      }),
      (t.prototype._set = function (e, t) {
        return (
          this.m_vertex1.setVec2(e),
          this.m_vertex2.setVec2(t),
          (this.m_hasVertex0 = !1),
          (this.m_hasVertex3 = !1),
          this
        );
      }),
      (t.prototype._clone = function () {
        var e = new t();
        return (
          (e.m_type = this.m_type),
          (e.m_radius = this.m_radius),
          e.m_vertex1.setVec2(this.m_vertex1),
          e.m_vertex2.setVec2(this.m_vertex2),
          e.m_vertex0.setVec2(this.m_vertex0),
          e.m_vertex3.setVec2(this.m_vertex3),
          (e.m_hasVertex0 = this.m_hasVertex0),
          (e.m_hasVertex3 = this.m_hasVertex3),
          e
        );
      }),
      (t.prototype.getChildCount = function () {
        return 1;
      }),
      (t.prototype.testPoint = function (e, t) {
        return !1;
      }),
      (t.prototype.rayCast = function (e, t, n, r) {
        var i = U.mulTVec2(n.q, j.sub(t.p1, n.p)),
          a = U.mulTVec2(n.q, j.sub(t.p2, n.p)),
          o = j.sub(a, i),
          s = this.m_vertex1,
          c = this.m_vertex2,
          l = j.sub(c, s),
          u = j.neo(l.y, -l.x);
        u.normalize();
        var d = j.dot(u, j.sub(s, i)),
          f = j.dot(u, o);
        if (f == 0) return !1;
        var p = d / f;
        if (p < 0 || t.maxFraction < p) return !1;
        var m = j.add(i, j.mulNumVec2(p, o)),
          h = j.sub(c, s),
          g = j.dot(h, h);
        if (g == 0) return !1;
        var _ = j.dot(j.sub(m, s), h) / g;
        return _ < 0 || 1 < _
          ? !1
          : ((e.fraction = p),
            (e.normal = d > 0 ? U.mulVec2(n.q, u).neg() : U.mulVec2(n.q, u)),
            !0);
      }),
      (t.prototype.computeAABB = function (e, t, n) {
        (H(Kr, t, this.m_vertex1),
          H(qr, t, this.m_vertex2),
          ye.combinePoints(e, Kr, qr),
          ye.extend(e, this.m_radius));
      }),
      (t.prototype.computeMass = function (e, t) {
        ((e.mass = 0),
          z(e.center, 0.5, this.m_vertex1, 0.5, this.m_vertex2),
          (e.I = 0));
      }),
      (t.prototype.computeDistanceProxy = function (e) {
        ((e.m_vertices[0] = this.m_vertex1),
          (e.m_vertices[1] = this.m_vertex2),
          (e.m_vertices.length = 2),
          (e.m_count = 2),
          (e.m_radius = this.m_radius));
      }),
      (t.TYPE = `edge`),
      t
    );
  })(yt),
  Yr = P(0, 0),
  Xr = P(0, 0),
  Zr = (function (e) {
    k(t, e);
    function t(n, r) {
      var i = this;
      return i instanceof t
        ? ((i = e.call(this) || this),
          (i.m_type = t.TYPE),
          (i.m_radius = N.polygonRadius),
          (i.m_vertices = []),
          (i.m_count = 0),
          (i.m_prevVertex = null),
          (i.m_nextVertex = null),
          (i.m_hasPrevVertex = !1),
          (i.m_hasNextVertex = !1),
          (i.m_isLoop = !!r),
          n && n.length && (r ? i._createLoop(n) : i._createChain(n)),
          i)
        : new t(n, r);
    }
    return (
      (t.prototype._serialize = function () {
        var e = {
          type: this.m_type,
          vertices: this.m_isLoop
            ? this.m_vertices.slice(0, this.m_vertices.length - 1)
            : this.m_vertices,
          isLoop: this.m_isLoop,
          hasPrevVertex: this.m_hasPrevVertex,
          hasNextVertex: this.m_hasNextVertex,
          prevVertex: null,
          nextVertex: null,
        };
        return (
          this.m_prevVertex && (e.prevVertex = this.m_prevVertex),
          this.m_nextVertex && (e.nextVertex = this.m_nextVertex),
          e
        );
      }),
      (t._deserialize = function (e, n, r) {
        var i = [];
        if (e.vertices)
          for (var a = 0; a < e.vertices.length; a++) i.push(e.vertices[a]);
        var o = new t(i, e.isLoop);
        return (
          e.prevVertex && o.setPrevVertex(e.prevVertex),
          e.nextVertex && o.setNextVertex(e.nextVertex),
          o
        );
      }),
      (t.prototype.getType = function () {
        return this.m_type;
      }),
      (t.prototype.getRadius = function () {
        return this.m_radius;
      }),
      (t.prototype._createLoop = function (e) {
        if (!(e.length < 3)) {
          var t;
          ((this.m_vertices = []), (this.m_count = e.length + 1));
          for (var t = 0; t < e.length; ++t) this.m_vertices[t] = j.clone(e[t]);
          return (
            (this.m_vertices[e.length] = j.clone(e[0])),
            (this.m_prevVertex = this.m_vertices[this.m_count - 2]),
            (this.m_nextVertex = this.m_vertices[1]),
            (this.m_hasPrevVertex = !0),
            (this.m_hasNextVertex = !0),
            this
          );
        }
      }),
      (t.prototype._createChain = function (e) {
        var t;
        ((this.m_vertices = []), (this.m_count = e.length));
        for (var t = 0; t < e.length; ++t) this.m_vertices[t] = j.clone(e[t]);
        return (
          (this.m_prevVertex = null),
          (this.m_nextVertex = null),
          (this.m_hasPrevVertex = !1),
          (this.m_hasNextVertex = !1),
          this
        );
      }),
      (t.prototype._reset = function () {
        this.m_isLoop
          ? this._createLoop(
              this.m_vertices.slice(0, this.m_vertices.length - 1),
            )
          : this._createChain(this.m_vertices);
      }),
      (t.prototype.setPrevVertex = function (e) {
        ((this.m_prevVertex = e), (this.m_hasPrevVertex = !0));
      }),
      (t.prototype.getPrevVertex = function () {
        return this.m_prevVertex;
      }),
      (t.prototype.setNextVertex = function (e) {
        ((this.m_nextVertex = e), (this.m_hasNextVertex = !0));
      }),
      (t.prototype.getNextVertex = function () {
        return this.m_nextVertex;
      }),
      (t.prototype._clone = function () {
        var e = new t();
        return (
          e._createChain(this.m_vertices),
          (e.m_type = this.m_type),
          (e.m_radius = this.m_radius),
          (e.m_prevVertex = this.m_prevVertex),
          (e.m_nextVertex = this.m_nextVertex),
          (e.m_hasPrevVertex = this.m_hasPrevVertex),
          (e.m_hasNextVertex = this.m_hasNextVertex),
          e
        );
      }),
      (t.prototype.getChildCount = function () {
        return this.m_count - 1;
      }),
      (t.prototype.getChildEdge = function (e, t) {
        ((e.m_type = Jr.TYPE),
          (e.m_radius = this.m_radius),
          (e.m_vertex1 = this.m_vertices[t]),
          (e.m_vertex2 = this.m_vertices[t + 1]),
          t > 0
            ? ((e.m_vertex0 = this.m_vertices[t - 1]), (e.m_hasVertex0 = !0))
            : ((e.m_vertex0 = this.m_prevVertex),
              (e.m_hasVertex0 = this.m_hasPrevVertex)),
          t < this.m_count - 2
            ? ((e.m_vertex3 = this.m_vertices[t + 2]), (e.m_hasVertex3 = !0))
            : ((e.m_vertex3 = this.m_nextVertex),
              (e.m_hasVertex3 = this.m_hasNextVertex)));
      }),
      (t.prototype.getVertex = function (e) {
        return e < this.m_count ? this.m_vertices[e] : this.m_vertices[0];
      }),
      (t.prototype.isLoop = function () {
        return this.m_isLoop;
      }),
      (t.prototype.testPoint = function (e, t) {
        return !1;
      }),
      (t.prototype.rayCast = function (e, t, n, r) {
        return new Jr(this.getVertex(r), this.getVertex(r + 1)).rayCast(
          e,
          t,
          n,
          0,
        );
      }),
      (t.prototype.computeAABB = function (e, t, n) {
        (H(Yr, t, this.getVertex(n)),
          H(Xr, t, this.getVertex(n + 1)),
          ye.combinePoints(e, Yr, Xr));
      }),
      (t.prototype.computeMass = function (e, t) {
        ((e.mass = 0), I(e.center), (e.I = 0));
      }),
      (t.prototype.computeDistanceProxy = function (e, t) {
        ((e.m_vertices[0] = this.getVertex(t)),
          (e.m_vertices[1] = this.getVertex(t + 1)),
          (e.m_count = 2),
          (e.m_radius = this.m_radius));
      }),
      (t.TYPE = `chain`),
      t
    );
  })(yt),
  Qr = Math.max,
  $r = Math.min,
  ei = P(0, 0),
  ti = P(0, 0),
  ni = P(0, 0),
  ri = P(0, 0),
  ii = P(0, 0),
  ai = P(0, 0),
  oi = (function (e) {
    k(t, e);
    function t(n) {
      var r = this;
      return r instanceof t
        ? ((r = e.call(this) || this),
          (r.m_type = t.TYPE),
          (r.m_radius = N.polygonRadius),
          (r.m_centroid = j.zero()),
          (r.m_vertices = []),
          (r.m_normals = []),
          (r.m_count = 0),
          n && n.length && r._set(n),
          r)
        : new t(n);
    }
    return (
      (t.prototype._serialize = function () {
        return { type: this.m_type, vertices: this.m_vertices };
      }),
      (t._deserialize = function (e, n, r) {
        var i = [];
        if (e.vertices)
          for (var a = 0; a < e.vertices.length; a++) i.push(e.vertices[a]);
        return new t(i);
      }),
      (t.prototype.getType = function () {
        return this.m_type;
      }),
      (t.prototype.getRadius = function () {
        return this.m_radius;
      }),
      (t.prototype._clone = function () {
        var e = new t();
        ((e.m_type = this.m_type),
          (e.m_radius = this.m_radius),
          (e.m_count = this.m_count),
          e.m_centroid.setVec2(this.m_centroid));
        for (var n = 0; n < this.m_count; n++)
          e.m_vertices.push(this.m_vertices[n].clone());
        for (var n = 0; n < this.m_normals.length; n++)
          e.m_normals.push(this.m_normals[n].clone());
        return e;
      }),
      (t.prototype.getChildCount = function () {
        return 1;
      }),
      (t.prototype._reset = function () {
        this._set(this.m_vertices);
      }),
      (t.prototype._set = function (e) {
        if (e.length < 3) {
          this._setAsBox(1, 1);
          return;
        }
        for (
          var t = $r(e.length, N.maxPolygonVertices), n = [], r = 0;
          r < t;
          ++r
        ) {
          for (var i = e[r], a = !0, o = 0; o < n.length; ++o)
            if (j.distanceSquared(i, n[o]) < 0.25 * N.linearSlopSquared) {
              a = !1;
              break;
            }
          a && n.push(j.clone(i));
        }
        if (((t = n.length), t < 3)) {
          this._setAsBox(1, 1);
          return;
        }
        for (var s = 0, c = n[0].x, r = 1; r < t; ++r) {
          var l = n[r].x;
          (l > c || (l === c && n[r].y < n[s].y)) && ((s = r), (c = l));
        }
        for (var u = [], d = 0, f = s; ;) {
          u[d] = f;
          for (var p = 0, o = 1; o < t; ++o) {
            if (p === f) {
              p = o;
              continue;
            }
            var m = j.sub(n[p], n[u[d]]),
              i = j.sub(n[o], n[u[d]]),
              h = j.crossVec2Vec2(m, i);
            (h < 0 && (p = o),
              h === 0 && i.lengthSquared() > m.lengthSquared() && (p = o));
          }
          if ((++d, (f = p), p === s)) break;
        }
        if (d < 3) {
          this._setAsBox(1, 1);
          return;
        }
        ((this.m_count = d), (this.m_vertices = []));
        for (var r = 0; r < d; ++r) this.m_vertices[r] = n[u[r]];
        for (var r = 0; r < d; ++r) {
          var g = r,
            _ = r + 1 < d ? r + 1 : 0,
            v = j.sub(this.m_vertices[_], this.m_vertices[g]);
          ((this.m_normals[r] = j.crossVec2Num(v, 1)),
            this.m_normals[r].normalize());
        }
        this.m_centroid = si(this.m_vertices, d);
      }),
      (t.prototype._setAsBox = function (e, t, n, r) {
        if (
          ((this.m_vertices[0] = j.neo(e, -t)),
          (this.m_vertices[1] = j.neo(e, t)),
          (this.m_vertices[2] = j.neo(-e, t)),
          (this.m_vertices[3] = j.neo(-e, -t)),
          (this.m_normals[0] = j.neo(1, 0)),
          (this.m_normals[1] = j.neo(0, 1)),
          (this.m_normals[2] = j.neo(-1, 0)),
          (this.m_normals[3] = j.neo(0, -1)),
          (this.m_count = 4),
          n && j.isValid(n))
        ) {
          ((r ||= 0), F(this.m_centroid, n));
          var i = pt.identity();
          (i.p.setVec2(n), i.q.setAngle(r));
          for (var a = 0; a < this.m_count; ++a)
            ((this.m_vertices[a] = pt.mulVec2(i, this.m_vertices[a])),
              (this.m_normals[a] = U.mulVec2(i.q, this.m_normals[a])));
        }
      }),
      (t.prototype.testPoint = function (e, t) {
        for (var n = rt(ei, e, t), r = 0; r < this.m_count; ++r)
          if (
            V(this.m_normals[r], n) - V(this.m_normals[r], this.m_vertices[r]) >
            0
          )
            return !1;
        return !0;
      }),
      (t.prototype.rayCast = function (e, t, n, r) {
        for (
          var i = U.mulTVec2(n.q, j.sub(t.p1, n.p)),
            a = U.mulTVec2(n.q, j.sub(t.p2, n.p)),
            o = j.sub(a, i),
            s = 0,
            c = t.maxFraction,
            l = -1,
            u = 0;
          u < this.m_count;
          ++u
        ) {
          var d = j.dot(this.m_normals[u], j.sub(this.m_vertices[u], i)),
            f = j.dot(this.m_normals[u], o);
          if (f == 0) {
            if (d < 0) return !1;
          } else
            f < 0 && d < s * f
              ? ((s = d / f), (l = u))
              : f > 0 && d < c * f && (c = d / f);
          if (c < s) return !1;
        }
        return (
          l >= 0 &&
          ((e.fraction = s), (e.normal = U.mulVec2(n.q, this.m_normals[l])), !0)
        );
      }),
      (t.prototype.computeAABB = function (e, t, n) {
        for (
          var r = 1 / 0, i = 1 / 0, a = -1 / 0, o = -1 / 0, s = 0;
          s < this.m_count;
          ++s
        ) {
          var c = H(ei, t, this.m_vertices[s]);
          ((r = $r(r, c.x)),
            (a = Qr(a, c.x)),
            (i = $r(i, c.y)),
            (o = Qr(o, c.y)));
        }
        (Fe(e.lowerBound, r - this.m_radius, i - this.m_radius),
          Fe(e.upperBound, a + this.m_radius, o + this.m_radius));
      }),
      (t.prototype.computeMass = function (e, t) {
        I(ii);
        var n = 0,
          r = 0;
        I(ai);
        for (var i = 0; i < this.m_count; ++i) Le(ai, this.m_vertices[i]);
        R(ai, 1 / this.m_count, ai);
        for (var a = 1 / 3, i = 0; i < this.m_count; ++i) {
          (L(ni, this.m_vertices[i], ai),
            i + 1 < this.m_count
              ? L(ri, this.m_vertices[i + 1], ai)
              : L(ri, this.m_vertices[0], ai));
          var o = B(ni, ri),
            s = 0.5 * o;
          ((n += s), z(ei, s * a, ni, s * a, ri), Le(ii, ei));
          var c = ni.x,
            l = ni.y,
            u = ri.x,
            d = ri.y,
            f = c * c + u * c + u * u,
            p = l * l + d * l + d * d;
          r += 0.25 * a * o * (f + p);
        }
        ((e.mass = t * n),
          R(ii, 1 / n, ii),
          Re(e.center, ii, ai),
          (e.I = t * r),
          (e.I += e.mass * (V(e.center, e.center) - V(ii, ii))));
      }),
      (t.prototype.validate = function () {
        for (var e = 0; e < this.m_count; ++e) {
          var t = e,
            n = e < this.m_count - 1 ? t + 1 : 0,
            r = this.m_vertices[t];
          L(ti, this.m_vertices[n], r);
          for (var i = 0; i < this.m_count; ++i)
            if (i != t && i != n && B(ti, L(ei, this.m_vertices[i], r)) < 0)
              return !1;
        }
        return !0;
      }),
      (t.prototype.computeDistanceProxy = function (e) {
        for (var t = 0; t < this.m_count; ++t)
          e.m_vertices[t] = this.m_vertices[t];
        ((e.m_vertices.length = this.m_count),
          (e.m_count = this.m_count),
          (e.m_radius = this.m_radius));
      }),
      (t.TYPE = `polygon`),
      t
    );
  })(yt);
function si(e, t) {
  for (var n = j.zero(), r = 0, i = j.zero(), a, o = 1 / 3, a = 0; a < t; ++a) {
    var s = i,
      c = e[a],
      l = a + 1 < t ? e[a + 1] : e[0],
      u = j.sub(c, s),
      d = j.sub(l, s),
      f = 0.5 * j.crossVec2Vec2(u, d);
    ((r += f), Ue(ei, 1, s, 1, c, 1, l), Ve(n, f * o, ei));
  }
  return (n.mul(1 / r), n);
}
var ci = Math.sqrt,
  li = Math.PI,
  ui = P(0, 0),
  di = (function (e) {
    k(t, e);
    function t(n, r) {
      var i = this;
      return i instanceof t
        ? ((i = e.call(this) || this),
          (i.m_type = t.TYPE),
          (i.m_p = j.zero()),
          (i.m_radius = 1),
          typeof n == `object` && j.isValid(n)
            ? (i.m_p.setVec2(n), typeof r == `number` && (i.m_radius = r))
            : typeof n == `number` && (i.m_radius = n),
          i)
        : new t(n, r);
    }
    return (
      (t.prototype._serialize = function () {
        return { type: this.m_type, p: this.m_p, radius: this.m_radius };
      }),
      (t._deserialize = function (e) {
        return new t(e.p, e.radius);
      }),
      (t.prototype._reset = function () {}),
      (t.prototype.getType = function () {
        return this.m_type;
      }),
      (t.prototype.getRadius = function () {
        return this.m_radius;
      }),
      (t.prototype.getCenter = function () {
        return this.m_p;
      }),
      (t.prototype._clone = function () {
        var e = new t();
        return (
          (e.m_type = this.m_type),
          (e.m_radius = this.m_radius),
          (e.m_p = this.m_p.clone()),
          e
        );
      }),
      (t.prototype.getChildCount = function () {
        return 1;
      }),
      (t.prototype.testPoint = function (e, t) {
        return Xe(t, H(ui, e, this.m_p)) <= this.m_radius * this.m_radius;
      }),
      (t.prototype.rayCast = function (e, t, n, r) {
        var i = j.add(n.p, U.mulVec2(n.q, this.m_p)),
          a = j.sub(t.p1, i),
          o = j.dot(a, a) - this.m_radius * this.m_radius,
          s = j.sub(t.p2, t.p1),
          c = j.dot(a, s),
          l = j.dot(s, s),
          u = c * c - l * o;
        if (u < 0 || l < ae) return !1;
        var d = -(c + ci(u));
        return (
          0 <= d &&
          d <= t.maxFraction * l &&
          ((d /= l),
          (e.fraction = d),
          (e.normal = j.add(a, j.mulNumVec2(d, s))),
          e.normal.normalize(),
          !0)
        );
      }),
      (t.prototype.computeAABB = function (e, t, n) {
        var r = H(ui, t, this.m_p);
        (Fe(e.lowerBound, r.x - this.m_radius, r.y - this.m_radius),
          Fe(e.upperBound, r.x + this.m_radius, r.y + this.m_radius));
      }),
      (t.prototype.computeMass = function (e, t) {
        ((e.mass = t * li * this.m_radius * this.m_radius),
          F(e.center, this.m_p),
          (e.I =
            e.mass * (0.5 * this.m_radius * this.m_radius + Je(this.m_p))));
      }),
      (t.prototype.computeDistanceProxy = function (e) {
        ((e.m_vertices[0] = this.m_p),
          (e.m_vertices.length = 1),
          (e.m_count = 1),
          (e.m_radius = this.m_radius));
      }),
      (t.TYPE = `circle`),
      t
    );
  })(yt),
  fi = Math.abs,
  pi = Math.PI,
  mi = { frequencyHz: 0, dampingRatio: 0 },
  hi = (function (e) {
    k(t, e);
    function t(n, r, i, a, o) {
      var s = this;
      if (!(s instanceof t)) return new t(n, r, i, a, o);
      if (i && a && `m_type` in a && `x` in i && `y` in i) {
        var c = i;
        ((i = a), (a = c));
      }
      return (
        (n = re(n, mi)),
        (s = e.call(this, n, r, i) || this),
        (r = s.m_bodyA),
        (i = s.m_bodyB),
        (s.m_type = t.TYPE),
        (s.m_localAnchorA = j.clone(
          a ? r.getLocalPoint(a) : n.localAnchorA || j.zero(),
        )),
        (s.m_localAnchorB = j.clone(
          o ? i.getLocalPoint(o) : n.localAnchorB || j.zero(),
        )),
        (s.m_length = Number.isFinite(n.length)
          ? n.length
          : j.distance(
              r.getWorldPoint(s.m_localAnchorA),
              i.getWorldPoint(s.m_localAnchorB),
            )),
        (s.m_frequencyHz = n.frequencyHz),
        (s.m_dampingRatio = n.dampingRatio),
        (s.m_impulse = 0),
        (s.m_gamma = 0),
        (s.m_bias = 0),
        s
      );
    }
    return (
      (t.prototype._serialize = function () {
        return {
          type: this.m_type,
          bodyA: this.m_bodyA,
          bodyB: this.m_bodyB,
          collideConnected: this.m_collideConnected,
          frequencyHz: this.m_frequencyHz,
          dampingRatio: this.m_dampingRatio,
          localAnchorA: this.m_localAnchorA,
          localAnchorB: this.m_localAnchorB,
          length: this.m_length,
        };
      }),
      (t._deserialize = function (e, n, r) {
        return (
          (e = A({}, e)),
          (e.bodyA = r(W, e.bodyA, n)),
          (e.bodyB = r(W, e.bodyB, n)),
          new t(e)
        );
      }),
      (t.prototype._reset = function (e) {
        (e.anchorA
          ? this.m_localAnchorA.setVec2(this.m_bodyA.getLocalPoint(e.anchorA))
          : e.localAnchorA && this.m_localAnchorA.setVec2(e.localAnchorA),
          e.anchorB
            ? this.m_localAnchorB.setVec2(this.m_bodyB.getLocalPoint(e.anchorB))
            : e.localAnchorB && this.m_localAnchorB.setVec2(e.localAnchorB),
          e.length > 0
            ? (this.m_length = +e.length)
            : e.length < 0 ||
              ((e.anchorA || e.anchorA || e.anchorA || e.anchorA) &&
                (this.m_length = j.distance(
                  this.m_bodyA.getWorldPoint(this.m_localAnchorA),
                  this.m_bodyB.getWorldPoint(this.m_localAnchorB),
                ))),
          Number.isFinite(e.frequencyHz) &&
            (this.m_frequencyHz = e.frequencyHz),
          Number.isFinite(e.dampingRatio) &&
            (this.m_dampingRatio = e.dampingRatio));
      }),
      (t.prototype.getLocalAnchorA = function () {
        return this.m_localAnchorA;
      }),
      (t.prototype.getLocalAnchorB = function () {
        return this.m_localAnchorB;
      }),
      (t.prototype.setLength = function (e) {
        this.m_length = e;
      }),
      (t.prototype.getLength = function () {
        return this.m_length;
      }),
      (t.prototype.setFrequency = function (e) {
        this.m_frequencyHz = e;
      }),
      (t.prototype.getFrequency = function () {
        return this.m_frequencyHz;
      }),
      (t.prototype.setDampingRatio = function (e) {
        this.m_dampingRatio = e;
      }),
      (t.prototype.getDampingRatio = function () {
        return this.m_dampingRatio;
      }),
      (t.prototype.getAnchorA = function () {
        return this.m_bodyA.getWorldPoint(this.m_localAnchorA);
      }),
      (t.prototype.getAnchorB = function () {
        return this.m_bodyB.getWorldPoint(this.m_localAnchorB);
      }),
      (t.prototype.getReactionForce = function (e) {
        return j.mulNumVec2(this.m_impulse, this.m_u).mul(e);
      }),
      (t.prototype.getReactionTorque = function (e) {
        return 0;
      }),
      (t.prototype.initVelocityConstraints = function (e) {
        ((this.m_localCenterA = this.m_bodyA.m_sweep.localCenter),
          (this.m_localCenterB = this.m_bodyB.m_sweep.localCenter),
          (this.m_invMassA = this.m_bodyA.m_invMass),
          (this.m_invMassB = this.m_bodyB.m_invMass),
          (this.m_invIA = this.m_bodyA.m_invI),
          (this.m_invIB = this.m_bodyB.m_invI));
        var t = this.m_bodyA.c_position.c,
          n = this.m_bodyA.c_position.a,
          r = this.m_bodyA.c_velocity.v,
          i = this.m_bodyA.c_velocity.w,
          a = this.m_bodyB.c_position.c,
          o = this.m_bodyB.c_position.a,
          s = this.m_bodyB.c_velocity.v,
          c = this.m_bodyB.c_velocity.w,
          l = U.neo(n),
          u = U.neo(o);
        ((this.m_rA = U.mulVec2(
          l,
          j.sub(this.m_localAnchorA, this.m_localCenterA),
        )),
          (this.m_rB = U.mulVec2(
            u,
            j.sub(this.m_localAnchorB, this.m_localCenterB),
          )),
          (this.m_u = j.sub(j.add(a, this.m_rB), j.add(t, this.m_rA))));
        var d = this.m_u.length();
        d > N.linearSlop ? this.m_u.mul(1 / d) : this.m_u.setNum(0, 0);
        var f = j.crossVec2Vec2(this.m_rA, this.m_u),
          p = j.crossVec2Vec2(this.m_rB, this.m_u),
          m =
            this.m_invMassA +
            this.m_invIA * f * f +
            this.m_invMassB +
            this.m_invIB * p * p;
        if (((this.m_mass = m == 0 ? 0 : 1 / m), this.m_frequencyHz > 0)) {
          var h = d - this.m_length,
            g = 2 * pi * this.m_frequencyHz,
            _ = 2 * this.m_mass * this.m_dampingRatio * g,
            v = this.m_mass * g * g,
            y = e.dt;
          ((this.m_gamma = y * (_ + y * v)),
            (this.m_gamma = this.m_gamma == 0 ? 0 : 1 / this.m_gamma),
            (this.m_bias = h * y * v * this.m_gamma),
            (m += this.m_gamma),
            (this.m_mass = m == 0 ? 0 : 1 / m));
        } else ((this.m_gamma = 0), (this.m_bias = 0));
        if (e.warmStarting) {
          this.m_impulse *= e.dtRatio;
          var b = j.mulNumVec2(this.m_impulse, this.m_u);
          (r.subMul(this.m_invMassA, b),
            (i -= this.m_invIA * j.crossVec2Vec2(this.m_rA, b)),
            s.addMul(this.m_invMassB, b),
            (c += this.m_invIB * j.crossVec2Vec2(this.m_rB, b)));
        } else this.m_impulse = 0;
        (this.m_bodyA.c_velocity.v.setVec2(r),
          (this.m_bodyA.c_velocity.w = i),
          this.m_bodyB.c_velocity.v.setVec2(s),
          (this.m_bodyB.c_velocity.w = c));
      }),
      (t.prototype.solveVelocityConstraints = function (e) {
        var t = this.m_bodyA.c_velocity.v,
          n = this.m_bodyA.c_velocity.w,
          r = this.m_bodyB.c_velocity.v,
          i = this.m_bodyB.c_velocity.w,
          a = j.add(t, j.crossNumVec2(n, this.m_rA)),
          o = j.add(r, j.crossNumVec2(i, this.m_rB)),
          s = j.dot(this.m_u, o) - j.dot(this.m_u, a),
          c = -this.m_mass * (s + this.m_bias + this.m_gamma * this.m_impulse);
        this.m_impulse += c;
        var l = j.mulNumVec2(c, this.m_u);
        (t.subMul(this.m_invMassA, l),
          (n -= this.m_invIA * j.crossVec2Vec2(this.m_rA, l)),
          r.addMul(this.m_invMassB, l),
          (i += this.m_invIB * j.crossVec2Vec2(this.m_rB, l)),
          this.m_bodyA.c_velocity.v.setVec2(t),
          (this.m_bodyA.c_velocity.w = n),
          this.m_bodyB.c_velocity.v.setVec2(r),
          (this.m_bodyB.c_velocity.w = i));
      }),
      (t.prototype.solvePositionConstraints = function (e) {
        if (this.m_frequencyHz > 0) return !0;
        var t = this.m_bodyA.c_position.c,
          n = this.m_bodyA.c_position.a,
          r = this.m_bodyB.c_position.c,
          i = this.m_bodyB.c_position.a,
          a = U.neo(n),
          o = U.neo(i),
          s = U.mulSub(a, this.m_localAnchorA, this.m_localCenterA),
          c = U.mulSub(o, this.m_localAnchorB, this.m_localCenterB),
          l = j.sub(j.add(r, c), j.add(t, s)),
          u = ue(
            l.normalize() - this.m_length,
            -N.maxLinearCorrection,
            N.maxLinearCorrection,
          ),
          d = -this.m_mass * u,
          f = j.mulNumVec2(d, l);
        return (
          t.subMul(this.m_invMassA, f),
          (n -= this.m_invIA * j.crossVec2Vec2(s, f)),
          r.addMul(this.m_invMassB, f),
          (i += this.m_invIB * j.crossVec2Vec2(c, f)),
          this.m_bodyA.c_position.c.setVec2(t),
          (this.m_bodyA.c_position.a = n),
          this.m_bodyB.c_position.c.setVec2(r),
          (this.m_bodyB.c_position.a = i),
          fi(u) < N.linearSlop
        );
      }),
      (t.TYPE = `distance-joint`),
      t
    );
  })(It),
  gi = { maxForce: 0, maxTorque: 0 },
  _i = (function (e) {
    k(t, e);
    function t(n, r, i, a) {
      var o = this;
      return o instanceof t
        ? ((n = re(n, gi)),
          (o = e.call(this, n, r, i) || this),
          (r = o.m_bodyA),
          (i = o.m_bodyB),
          (o.m_type = t.TYPE),
          (o.m_localAnchorA = j.clone(
            a ? r.getLocalPoint(a) : n.localAnchorA || j.zero(),
          )),
          (o.m_localAnchorB = j.clone(
            a ? i.getLocalPoint(a) : n.localAnchorB || j.zero(),
          )),
          (o.m_linearImpulse = j.zero()),
          (o.m_angularImpulse = 0),
          (o.m_maxForce = n.maxForce),
          (o.m_maxTorque = n.maxTorque),
          o)
        : new t(n, r, i, a);
    }
    return (
      (t.prototype._serialize = function () {
        return {
          type: this.m_type,
          bodyA: this.m_bodyA,
          bodyB: this.m_bodyB,
          collideConnected: this.m_collideConnected,
          maxForce: this.m_maxForce,
          maxTorque: this.m_maxTorque,
          localAnchorA: this.m_localAnchorA,
          localAnchorB: this.m_localAnchorB,
        };
      }),
      (t._deserialize = function (e, n, r) {
        return (
          (e = A({}, e)),
          (e.bodyA = r(W, e.bodyA, n)),
          (e.bodyB = r(W, e.bodyB, n)),
          new t(e)
        );
      }),
      (t.prototype._reset = function (e) {
        (e.anchorA
          ? this.m_localAnchorA.setVec2(this.m_bodyA.getLocalPoint(e.anchorA))
          : e.localAnchorA && this.m_localAnchorA.setVec2(e.localAnchorA),
          e.anchorB
            ? this.m_localAnchorB.setVec2(this.m_bodyB.getLocalPoint(e.anchorB))
            : e.localAnchorB && this.m_localAnchorB.setVec2(e.localAnchorB),
          Number.isFinite(e.maxForce) && (this.m_maxForce = e.maxForce),
          Number.isFinite(e.maxTorque) && (this.m_maxTorque = e.maxTorque));
      }),
      (t.prototype.getLocalAnchorA = function () {
        return this.m_localAnchorA;
      }),
      (t.prototype.getLocalAnchorB = function () {
        return this.m_localAnchorB;
      }),
      (t.prototype.setMaxForce = function (e) {
        this.m_maxForce = e;
      }),
      (t.prototype.getMaxForce = function () {
        return this.m_maxForce;
      }),
      (t.prototype.setMaxTorque = function (e) {
        this.m_maxTorque = e;
      }),
      (t.prototype.getMaxTorque = function () {
        return this.m_maxTorque;
      }),
      (t.prototype.getAnchorA = function () {
        return this.m_bodyA.getWorldPoint(this.m_localAnchorA);
      }),
      (t.prototype.getAnchorB = function () {
        return this.m_bodyB.getWorldPoint(this.m_localAnchorB);
      }),
      (t.prototype.getReactionForce = function (e) {
        return j.mulNumVec2(e, this.m_linearImpulse);
      }),
      (t.prototype.getReactionTorque = function (e) {
        return e * this.m_angularImpulse;
      }),
      (t.prototype.initVelocityConstraints = function (e) {
        ((this.m_localCenterA = this.m_bodyA.m_sweep.localCenter),
          (this.m_localCenterB = this.m_bodyB.m_sweep.localCenter),
          (this.m_invMassA = this.m_bodyA.m_invMass),
          (this.m_invMassB = this.m_bodyB.m_invMass),
          (this.m_invIA = this.m_bodyA.m_invI),
          (this.m_invIB = this.m_bodyB.m_invI));
        var t = this.m_bodyA.c_position.a,
          n = this.m_bodyA.c_velocity.v,
          r = this.m_bodyA.c_velocity.w,
          i = this.m_bodyB.c_position.a,
          a = this.m_bodyB.c_velocity.v,
          o = this.m_bodyB.c_velocity.w,
          s = U.neo(t),
          c = U.neo(i);
        ((this.m_rA = U.mulVec2(
          s,
          j.sub(this.m_localAnchorA, this.m_localCenterA),
        )),
          (this.m_rB = U.mulVec2(
            c,
            j.sub(this.m_localAnchorB, this.m_localCenterB),
          )));
        var l = this.m_invMassA,
          u = this.m_invMassB,
          d = this.m_invIA,
          f = this.m_invIB,
          p = new Un();
        if (
          ((p.ex.x =
            l +
            u +
            d * this.m_rA.y * this.m_rA.y +
            f * this.m_rB.y * this.m_rB.y),
          (p.ex.y =
            -d * this.m_rA.x * this.m_rA.y - f * this.m_rB.x * this.m_rB.y),
          (p.ey.x = p.ex.y),
          (p.ey.y =
            l +
            u +
            d * this.m_rA.x * this.m_rA.x +
            f * this.m_rB.x * this.m_rB.x),
          (this.m_linearMass = p.getInverse()),
          (this.m_angularMass = d + f),
          this.m_angularMass > 0 &&
            (this.m_angularMass = 1 / this.m_angularMass),
          e.warmStarting)
        ) {
          (this.m_linearImpulse.mul(e.dtRatio),
            (this.m_angularImpulse *= e.dtRatio));
          var m = j.neo(this.m_linearImpulse.x, this.m_linearImpulse.y);
          (n.subMul(l, m),
            (r -= d * (j.crossVec2Vec2(this.m_rA, m) + this.m_angularImpulse)),
            a.addMul(u, m),
            (o += f * (j.crossVec2Vec2(this.m_rB, m) + this.m_angularImpulse)));
        } else (this.m_linearImpulse.setZero(), (this.m_angularImpulse = 0));
        ((this.m_bodyA.c_velocity.v = n),
          (this.m_bodyA.c_velocity.w = r),
          (this.m_bodyB.c_velocity.v = a),
          (this.m_bodyB.c_velocity.w = o));
      }),
      (t.prototype.solveVelocityConstraints = function (e) {
        var t = this.m_bodyA.c_velocity.v,
          n = this.m_bodyA.c_velocity.w,
          r = this.m_bodyB.c_velocity.v,
          i = this.m_bodyB.c_velocity.w,
          a = this.m_invMassA,
          o = this.m_invMassB,
          s = this.m_invIA,
          c = this.m_invIB,
          l = e.dt,
          u = i - n,
          d = -this.m_angularMass * u,
          f = this.m_angularImpulse,
          p = l * this.m_maxTorque;
        ((this.m_angularImpulse = ue(this.m_angularImpulse + d, -p, p)),
          (d = this.m_angularImpulse - f),
          (n -= s * d),
          (i += c * d));
        var u = j.sub(
            j.add(r, j.crossNumVec2(i, this.m_rB)),
            j.add(t, j.crossNumVec2(n, this.m_rA)),
          ),
          d = j.neg(Un.mulVec2(this.m_linearMass, u)),
          f = this.m_linearImpulse;
        this.m_linearImpulse.add(d);
        var p = l * this.m_maxForce;
        (this.m_linearImpulse.lengthSquared() > p * p &&
          (this.m_linearImpulse.normalize(), this.m_linearImpulse.mul(p)),
          (d = j.sub(this.m_linearImpulse, f)),
          t.subMul(a, d),
          (n -= s * j.crossVec2Vec2(this.m_rA, d)),
          r.addMul(o, d),
          (i += c * j.crossVec2Vec2(this.m_rB, d)),
          (this.m_bodyA.c_velocity.v = t),
          (this.m_bodyA.c_velocity.w = n),
          (this.m_bodyB.c_velocity.v = r),
          (this.m_bodyB.c_velocity.w = i));
      }),
      (t.prototype.solvePositionConstraints = function (e) {
        return !0;
      }),
      (t.TYPE = `friction-joint`),
      t
    );
  })(It),
  vi = (function () {
    function e(e, t, n) {
      typeof e == `object` && e
        ? ((this.ex = J.clone(e)),
          (this.ey = J.clone(t)),
          (this.ez = J.clone(n)))
        : ((this.ex = J.zero()), (this.ey = J.zero()), (this.ez = J.zero()));
    }
    return (
      (e.prototype.toString = function () {
        return JSON.stringify(this);
      }),
      (e.isValid = function (e) {
        return (
          e != null && J.isValid(e.ex) && J.isValid(e.ey) && J.isValid(e.ez)
        );
      }),
      (e.assert = function (e) {}),
      (e.prototype.setZero = function () {
        return (this.ex.setZero(), this.ey.setZero(), this.ez.setZero(), this);
      }),
      (e.prototype.solve33 = function (e) {
        var t = this.ey.y * this.ez.z - this.ey.z * this.ez.y,
          n = this.ey.z * this.ez.x - this.ey.x * this.ez.z,
          r = this.ey.x * this.ez.y - this.ey.y * this.ez.x,
          i = this.ex.x * t + this.ex.y * n + this.ex.z * r;
        i !== 0 && (i = 1 / i);
        var a = new J();
        return (
          (t = this.ey.y * this.ez.z - this.ey.z * this.ez.y),
          (n = this.ey.z * this.ez.x - this.ey.x * this.ez.z),
          (r = this.ey.x * this.ez.y - this.ey.y * this.ez.x),
          (a.x = i * (e.x * t + e.y * n + e.z * r)),
          (t = e.y * this.ez.z - e.z * this.ez.y),
          (n = e.z * this.ez.x - e.x * this.ez.z),
          (r = e.x * this.ez.y - e.y * this.ez.x),
          (a.y = i * (this.ex.x * t + this.ex.y * n + this.ex.z * r)),
          (t = this.ey.y * e.z - this.ey.z * e.y),
          (n = this.ey.z * e.x - this.ey.x * e.z),
          (r = this.ey.x * e.y - this.ey.y * e.x),
          (a.z = i * (this.ex.x * t + this.ex.y * n + this.ex.z * r)),
          a
        );
      }),
      (e.prototype.solve22 = function (e) {
        var t = this.ex.x,
          n = this.ey.x,
          r = this.ex.y,
          i = this.ey.y,
          a = t * i - n * r;
        a !== 0 && (a = 1 / a);
        var o = j.zero();
        return (
          (o.x = a * (i * e.x - n * e.y)),
          (o.y = a * (t * e.y - r * e.x)),
          o
        );
      }),
      (e.prototype.getInverse22 = function (e) {
        var t = this.ex.x,
          n = this.ey.x,
          r = this.ex.y,
          i = this.ey.y,
          a = t * i - n * r;
        (a !== 0 && (a = 1 / a),
          (e.ex.x = a * i),
          (e.ey.x = -a * n),
          (e.ex.z = 0),
          (e.ex.y = -a * r),
          (e.ey.y = a * t),
          (e.ey.z = 0),
          (e.ez.x = 0),
          (e.ez.y = 0),
          (e.ez.z = 0));
      }),
      (e.prototype.getSymInverse33 = function (e) {
        var t = J.dot(this.ex, J.cross(this.ey, this.ez));
        t !== 0 && (t = 1 / t);
        var n = this.ex.x,
          r = this.ey.x,
          i = this.ez.x,
          a = this.ey.y,
          o = this.ez.y,
          s = this.ez.z;
        ((e.ex.x = t * (a * s - o * o)),
          (e.ex.y = t * (i * o - r * s)),
          (e.ex.z = t * (r * o - i * a)),
          (e.ey.x = e.ex.y),
          (e.ey.y = t * (n * s - i * i)),
          (e.ey.z = t * (i * r - n * o)),
          (e.ez.x = e.ex.z),
          (e.ez.y = e.ey.z),
          (e.ez.z = t * (n * a - r * r)));
      }),
      (e.mul = function (e, t) {
        if (t && `z` in t && `y` in t && `x` in t) {
          var n = e.ex.x * t.x + e.ey.x * t.y + e.ez.x * t.z,
            r = e.ex.y * t.x + e.ey.y * t.y + e.ez.y * t.z;
          return new J(n, r, e.ex.z * t.x + e.ey.z * t.y + e.ez.z * t.z);
        }
        if (t && `y` in t && `x` in t) {
          var n = e.ex.x * t.x + e.ey.x * t.y,
            r = e.ex.y * t.x + e.ey.y * t.y;
          return j.neo(n, r);
        }
      }),
      (e.mulVec3 = function (e, t) {
        return new J(
          e.ex.x * t.x + e.ey.x * t.y + e.ez.x * t.z,
          e.ex.y * t.x + e.ey.y * t.y + e.ez.y * t.z,
          e.ex.z * t.x + e.ey.z * t.y + e.ez.z * t.z,
        );
      }),
      (e.mulVec2 = function (e, t) {
        var n = e.ex.x * t.x + e.ey.x * t.y,
          r = e.ex.y * t.x + e.ey.y * t.y;
        return j.neo(n, r);
      }),
      (e.add = function (t, n) {
        return new e(J.add(t.ex, n.ex), J.add(t.ey, n.ey), J.add(t.ez, n.ez));
      }),
      e
    );
  })(),
  yi = Math.abs,
  bi;
(function (e) {
  ((e[(e.inactiveLimit = 0)] = `inactiveLimit`),
    (e[(e.atLowerLimit = 1)] = `atLowerLimit`),
    (e[(e.atUpperLimit = 2)] = `atUpperLimit`),
    (e[(e.equalLimits = 3)] = `equalLimits`));
})((bi ||= {}));
var xi = {
    lowerAngle: 0,
    upperAngle: 0,
    maxMotorTorque: 0,
    motorSpeed: 0,
    enableLimit: !1,
    enableMotor: !1,
  },
  Si = (function (e) {
    k(t, e);
    function t(n, r, i, a) {
      var o = this;
      return o instanceof t
        ? ((n ??= {}),
          (o = e.call(this, n, r, i) || this),
          (r = o.m_bodyA),
          (i = o.m_bodyB),
          (o.m_mass = new vi()),
          (o.m_limitState = bi.inactiveLimit),
          (o.m_type = t.TYPE),
          j.isValid(a)
            ? (o.m_localAnchorA = r.getLocalPoint(a))
            : j.isValid(n.localAnchorA)
              ? (o.m_localAnchorA = j.clone(n.localAnchorA))
              : (o.m_localAnchorA = j.zero()),
          j.isValid(a)
            ? (o.m_localAnchorB = i.getLocalPoint(a))
            : j.isValid(n.localAnchorB)
              ? (o.m_localAnchorB = j.clone(n.localAnchorB))
              : (o.m_localAnchorB = j.zero()),
          Number.isFinite(n.referenceAngle)
            ? (o.m_referenceAngle = n.referenceAngle)
            : (o.m_referenceAngle = i.getAngle() - r.getAngle()),
          (o.m_impulse = new J()),
          (o.m_motorImpulse = 0),
          (o.m_lowerAngle = n.lowerAngle ?? xi.lowerAngle),
          (o.m_upperAngle = n.upperAngle ?? xi.upperAngle),
          (o.m_maxMotorTorque = n.maxMotorTorque ?? xi.maxMotorTorque),
          (o.m_motorSpeed = n.motorSpeed ?? xi.motorSpeed),
          (o.m_enableLimit = n.enableLimit ?? xi.enableLimit),
          (o.m_enableMotor = n.enableMotor ?? xi.enableMotor),
          o)
        : new t(n, r, i, a);
    }
    return (
      (t.prototype._serialize = function () {
        return {
          type: this.m_type,
          bodyA: this.m_bodyA,
          bodyB: this.m_bodyB,
          collideConnected: this.m_collideConnected,
          lowerAngle: this.m_lowerAngle,
          upperAngle: this.m_upperAngle,
          maxMotorTorque: this.m_maxMotorTorque,
          motorSpeed: this.m_motorSpeed,
          enableLimit: this.m_enableLimit,
          enableMotor: this.m_enableMotor,
          localAnchorA: this.m_localAnchorA,
          localAnchorB: this.m_localAnchorB,
          referenceAngle: this.m_referenceAngle,
        };
      }),
      (t._deserialize = function (e, n, r) {
        return (
          (e = A({}, e)),
          (e.bodyA = r(W, e.bodyA, n)),
          (e.bodyB = r(W, e.bodyB, n)),
          new t(e)
        );
      }),
      (t.prototype._reset = function (e) {
        (e.anchorA
          ? this.m_localAnchorA.setVec2(this.m_bodyA.getLocalPoint(e.anchorA))
          : e.localAnchorA && this.m_localAnchorA.setVec2(e.localAnchorA),
          e.anchorB
            ? this.m_localAnchorB.setVec2(this.m_bodyB.getLocalPoint(e.anchorB))
            : e.localAnchorB && this.m_localAnchorB.setVec2(e.localAnchorB),
          Number.isFinite(e.referenceAngle) &&
            (this.m_referenceAngle = e.referenceAngle),
          e.enableLimit !== void 0 && (this.m_enableLimit = e.enableLimit),
          Number.isFinite(e.lowerAngle) && (this.m_lowerAngle = e.lowerAngle),
          Number.isFinite(e.upperAngle) && (this.m_upperAngle = e.upperAngle),
          Number.isFinite(e.maxMotorTorque) &&
            (this.m_maxMotorTorque = e.maxMotorTorque),
          Number.isFinite(e.motorSpeed) && (this.m_motorSpeed = e.motorSpeed),
          e.enableMotor !== void 0 && (this.m_enableMotor = e.enableMotor));
      }),
      (t.prototype.getLocalAnchorA = function () {
        return this.m_localAnchorA;
      }),
      (t.prototype.getLocalAnchorB = function () {
        return this.m_localAnchorB;
      }),
      (t.prototype.getReferenceAngle = function () {
        return this.m_referenceAngle;
      }),
      (t.prototype.getJointAngle = function () {
        var e = this.m_bodyA;
        return this.m_bodyB.m_sweep.a - e.m_sweep.a - this.m_referenceAngle;
      }),
      (t.prototype.getJointSpeed = function () {
        var e = this.m_bodyA;
        return this.m_bodyB.m_angularVelocity - e.m_angularVelocity;
      }),
      (t.prototype.isMotorEnabled = function () {
        return this.m_enableMotor;
      }),
      (t.prototype.enableMotor = function (e) {
        e != this.m_enableMotor &&
          (this.m_bodyA.setAwake(!0),
          this.m_bodyB.setAwake(!0),
          (this.m_enableMotor = e));
      }),
      (t.prototype.getMotorTorque = function (e) {
        return e * this.m_motorImpulse;
      }),
      (t.prototype.setMotorSpeed = function (e) {
        e != this.m_motorSpeed &&
          (this.m_bodyA.setAwake(!0),
          this.m_bodyB.setAwake(!0),
          (this.m_motorSpeed = e));
      }),
      (t.prototype.getMotorSpeed = function () {
        return this.m_motorSpeed;
      }),
      (t.prototype.setMaxMotorTorque = function (e) {
        e != this.m_maxMotorTorque &&
          (this.m_bodyA.setAwake(!0),
          this.m_bodyB.setAwake(!0),
          (this.m_maxMotorTorque = e));
      }),
      (t.prototype.getMaxMotorTorque = function () {
        return this.m_maxMotorTorque;
      }),
      (t.prototype.isLimitEnabled = function () {
        return this.m_enableLimit;
      }),
      (t.prototype.enableLimit = function (e) {
        e != this.m_enableLimit &&
          (this.m_bodyA.setAwake(!0),
          this.m_bodyB.setAwake(!0),
          (this.m_enableLimit = e),
          (this.m_impulse.z = 0));
      }),
      (t.prototype.getLowerLimit = function () {
        return this.m_lowerAngle;
      }),
      (t.prototype.getUpperLimit = function () {
        return this.m_upperAngle;
      }),
      (t.prototype.setLimits = function (e, t) {
        (e != this.m_lowerAngle || t != this.m_upperAngle) &&
          (this.m_bodyA.setAwake(!0),
          this.m_bodyB.setAwake(!0),
          (this.m_impulse.z = 0),
          (this.m_lowerAngle = e),
          (this.m_upperAngle = t));
      }),
      (t.prototype.getAnchorA = function () {
        return this.m_bodyA.getWorldPoint(this.m_localAnchorA);
      }),
      (t.prototype.getAnchorB = function () {
        return this.m_bodyB.getWorldPoint(this.m_localAnchorB);
      }),
      (t.prototype.getReactionForce = function (e) {
        return j.neo(this.m_impulse.x, this.m_impulse.y).mul(e);
      }),
      (t.prototype.getReactionTorque = function (e) {
        return e * this.m_impulse.z;
      }),
      (t.prototype.initVelocityConstraints = function (e) {
        ((this.m_localCenterA = this.m_bodyA.m_sweep.localCenter),
          (this.m_localCenterB = this.m_bodyB.m_sweep.localCenter),
          (this.m_invMassA = this.m_bodyA.m_invMass),
          (this.m_invMassB = this.m_bodyB.m_invMass),
          (this.m_invIA = this.m_bodyA.m_invI),
          (this.m_invIB = this.m_bodyB.m_invI));
        var t = this.m_bodyA.c_position.a,
          n = this.m_bodyA.c_velocity.v,
          r = this.m_bodyA.c_velocity.w,
          i = this.m_bodyB.c_position.a,
          a = this.m_bodyB.c_velocity.v,
          o = this.m_bodyB.c_velocity.w,
          s = U.neo(t),
          c = U.neo(i);
        ((this.m_rA = U.mulVec2(
          s,
          j.sub(this.m_localAnchorA, this.m_localCenterA),
        )),
          (this.m_rB = U.mulVec2(
            c,
            j.sub(this.m_localAnchorB, this.m_localCenterB),
          )));
        var l = this.m_invMassA,
          u = this.m_invMassB,
          d = this.m_invIA,
          f = this.m_invIB,
          p = d + f === 0;
        if (
          ((this.m_mass.ex.x =
            l +
            u +
            this.m_rA.y * this.m_rA.y * d +
            this.m_rB.y * this.m_rB.y * f),
          (this.m_mass.ey.x =
            -this.m_rA.y * this.m_rA.x * d - this.m_rB.y * this.m_rB.x * f),
          (this.m_mass.ez.x = -this.m_rA.y * d - this.m_rB.y * f),
          (this.m_mass.ex.y = this.m_mass.ey.x),
          (this.m_mass.ey.y =
            l +
            u +
            this.m_rA.x * this.m_rA.x * d +
            this.m_rB.x * this.m_rB.x * f),
          (this.m_mass.ez.y = this.m_rA.x * d + this.m_rB.x * f),
          (this.m_mass.ex.z = this.m_mass.ez.x),
          (this.m_mass.ey.z = this.m_mass.ez.y),
          (this.m_mass.ez.z = d + f),
          (this.m_motorMass = d + f),
          this.m_motorMass > 0 && (this.m_motorMass = 1 / this.m_motorMass),
          (this.m_enableMotor == 0 || p) && (this.m_motorImpulse = 0),
          this.m_enableLimit && p == 0)
        ) {
          var m = i - t - this.m_referenceAngle;
          yi(this.m_upperAngle - this.m_lowerAngle) < 2 * N.angularSlop
            ? (this.m_limitState = bi.equalLimits)
            : m <= this.m_lowerAngle
              ? (this.m_limitState != bi.atLowerLimit && (this.m_impulse.z = 0),
                (this.m_limitState = bi.atLowerLimit))
              : m >= this.m_upperAngle
                ? (this.m_limitState != bi.atUpperLimit &&
                    (this.m_impulse.z = 0),
                  (this.m_limitState = bi.atUpperLimit))
                : ((this.m_limitState = bi.inactiveLimit),
                  (this.m_impulse.z = 0));
        } else this.m_limitState = bi.inactiveLimit;
        if (e.warmStarting) {
          (this.m_impulse.mul(e.dtRatio), (this.m_motorImpulse *= e.dtRatio));
          var h = j.neo(this.m_impulse.x, this.m_impulse.y);
          (n.subMul(l, h),
            (r -=
              d *
              (j.crossVec2Vec2(this.m_rA, h) +
                this.m_motorImpulse +
                this.m_impulse.z)),
            a.addMul(u, h),
            (o +=
              f *
              (j.crossVec2Vec2(this.m_rB, h) +
                this.m_motorImpulse +
                this.m_impulse.z)));
        } else (this.m_impulse.setZero(), (this.m_motorImpulse = 0));
        ((this.m_bodyA.c_velocity.v = n),
          (this.m_bodyA.c_velocity.w = r),
          (this.m_bodyB.c_velocity.v = a),
          (this.m_bodyB.c_velocity.w = o));
      }),
      (t.prototype.solveVelocityConstraints = function (e) {
        var t = this.m_bodyA.c_velocity.v,
          n = this.m_bodyA.c_velocity.w,
          r = this.m_bodyB.c_velocity.v,
          i = this.m_bodyB.c_velocity.w,
          a = this.m_invMassA,
          o = this.m_invMassB,
          s = this.m_invIA,
          c = this.m_invIB,
          l = s + c === 0;
        if (
          this.m_enableMotor &&
          this.m_limitState != bi.equalLimits &&
          l == 0
        ) {
          var u = i - n - this.m_motorSpeed,
            d = -this.m_motorMass * u,
            f = this.m_motorImpulse,
            p = e.dt * this.m_maxMotorTorque;
          ((this.m_motorImpulse = ue(this.m_motorImpulse + d, -p, p)),
            (d = this.m_motorImpulse - f),
            (n -= s * d),
            (i += c * d));
        }
        if (
          this.m_enableLimit &&
          this.m_limitState != bi.inactiveLimit &&
          l == 0
        ) {
          var m = j.zero();
          (m.addCombine(1, r, 1, j.crossNumVec2(i, this.m_rB)),
            m.subCombine(1, t, 1, j.crossNumVec2(n, this.m_rA)));
          var h = i - n,
            u = new J(m.x, m.y, h),
            d = J.neg(this.m_mass.solve33(u));
          if (this.m_limitState == bi.equalLimits) this.m_impulse.add(d);
          else if (this.m_limitState == bi.atLowerLimit) {
            var g = this.m_impulse.z + d.z;
            if (g < 0) {
              var _ = j.combine(
                  -1,
                  m,
                  this.m_impulse.z,
                  j.neo(this.m_mass.ez.x, this.m_mass.ez.y),
                ),
                v = this.m_mass.solve22(_);
              ((d.x = v.x),
                (d.y = v.y),
                (d.z = -this.m_impulse.z),
                (this.m_impulse.x += v.x),
                (this.m_impulse.y += v.y),
                (this.m_impulse.z = 0));
            } else this.m_impulse.add(d);
          } else if (this.m_limitState == bi.atUpperLimit) {
            var g = this.m_impulse.z + d.z;
            if (g > 0) {
              var _ = j.combine(
                  -1,
                  m,
                  this.m_impulse.z,
                  j.neo(this.m_mass.ez.x, this.m_mass.ez.y),
                ),
                v = this.m_mass.solve22(_);
              ((d.x = v.x),
                (d.y = v.y),
                (d.z = -this.m_impulse.z),
                (this.m_impulse.x += v.x),
                (this.m_impulse.y += v.y),
                (this.m_impulse.z = 0));
            } else this.m_impulse.add(d);
          }
          var y = j.neo(d.x, d.y);
          (t.subMul(a, y),
            (n -= s * (j.crossVec2Vec2(this.m_rA, y) + d.z)),
            r.addMul(o, y),
            (i += c * (j.crossVec2Vec2(this.m_rB, y) + d.z)));
        } else {
          var u = j.zero();
          (u.addCombine(1, r, 1, j.crossNumVec2(i, this.m_rB)),
            u.subCombine(1, t, 1, j.crossNumVec2(n, this.m_rA)));
          var d = this.m_mass.solve22(j.neg(u));
          ((this.m_impulse.x += d.x),
            (this.m_impulse.y += d.y),
            t.subMul(a, d),
            (n -= s * j.crossVec2Vec2(this.m_rA, d)),
            r.addMul(o, d),
            (i += c * j.crossVec2Vec2(this.m_rB, d)));
        }
        ((this.m_bodyA.c_velocity.v = t),
          (this.m_bodyA.c_velocity.w = n),
          (this.m_bodyB.c_velocity.v = r),
          (this.m_bodyB.c_velocity.w = i));
      }),
      (t.prototype.solvePositionConstraints = function (e) {
        var t = this.m_bodyA.c_position.c,
          n = this.m_bodyA.c_position.a,
          r = this.m_bodyB.c_position.c,
          i = this.m_bodyB.c_position.a,
          a = U.neo(n),
          o = U.neo(i),
          s = 0,
          c = 0,
          l = this.m_invIA + this.m_invIB == 0;
        if (
          this.m_enableLimit &&
          this.m_limitState != bi.inactiveLimit &&
          l == 0
        ) {
          var u = i - n - this.m_referenceAngle,
            d = 0;
          if (this.m_limitState == bi.equalLimits) {
            var f = ue(
              u - this.m_lowerAngle,
              -N.maxAngularCorrection,
              N.maxAngularCorrection,
            );
            ((d = -this.m_motorMass * f), (s = yi(f)));
          } else if (this.m_limitState == bi.atLowerLimit) {
            var f = u - this.m_lowerAngle;
            ((s = -f),
              (f = ue(f + N.angularSlop, -N.maxAngularCorrection, 0)),
              (d = -this.m_motorMass * f));
          } else if (this.m_limitState == bi.atUpperLimit) {
            var f = u - this.m_upperAngle;
            ((s = f),
              (f = ue(f - N.angularSlop, 0, N.maxAngularCorrection)),
              (d = -this.m_motorMass * f));
          }
          ((n -= this.m_invIA * d), (i += this.m_invIB * d));
        }
        (a.setAngle(n), o.setAngle(i));
        var p = U.mulVec2(a, j.sub(this.m_localAnchorA, this.m_localCenterA)),
          m = U.mulVec2(o, j.sub(this.m_localAnchorB, this.m_localCenterB)),
          f = j.zero();
        (f.addCombine(1, r, 1, m), f.subCombine(1, t, 1, p), (c = f.length()));
        var h = this.m_invMassA,
          g = this.m_invMassB,
          _ = this.m_invIA,
          v = this.m_invIB,
          y = new Un();
        ((y.ex.x = h + g + _ * p.y * p.y + v * m.y * m.y),
          (y.ex.y = -_ * p.x * p.y - v * m.x * m.y),
          (y.ey.x = y.ex.y),
          (y.ey.y = h + g + _ * p.x * p.x + v * m.x * m.x));
        var b = j.neg(y.solve(f));
        return (
          t.subMul(h, b),
          (n -= _ * j.crossVec2Vec2(p, b)),
          r.addMul(g, b),
          (i += v * j.crossVec2Vec2(m, b)),
          this.m_bodyA.c_position.c.setVec2(t),
          (this.m_bodyA.c_position.a = n),
          this.m_bodyB.c_position.c.setVec2(r),
          (this.m_bodyB.c_position.a = i),
          c <= N.linearSlop && s <= N.angularSlop
        );
      }),
      (t.TYPE = `revolute-joint`),
      t
    );
  })(It),
  Ci = Math.abs,
  wi = Math.max,
  Ti = Math.min,
  Ei;
(function (e) {
  ((e[(e.inactiveLimit = 0)] = `inactiveLimit`),
    (e[(e.atLowerLimit = 1)] = `atLowerLimit`),
    (e[(e.atUpperLimit = 2)] = `atUpperLimit`),
    (e[(e.equalLimits = 3)] = `equalLimits`));
})((Ei ||= {}));
var Di = {
    enableLimit: !1,
    lowerTranslation: 0,
    upperTranslation: 0,
    enableMotor: !1,
    maxMotorForce: 0,
    motorSpeed: 0,
  },
  Oi = (function (e) {
    k(t, e);
    function t(n, r, i, a, o) {
      var s = this;
      return s instanceof t
        ? ((n = re(n, Di)),
          (s = e.call(this, n, r, i) || this),
          (r = s.m_bodyA),
          (i = s.m_bodyB),
          (s.m_type = t.TYPE),
          (s.m_localAnchorA = j.clone(
            a ? r.getLocalPoint(a) : n.localAnchorA || j.zero(),
          )),
          (s.m_localAnchorB = j.clone(
            a ? i.getLocalPoint(a) : n.localAnchorB || j.zero(),
          )),
          (s.m_localXAxisA = j.clone(
            o ? r.getLocalVector(o) : n.localAxisA || j.neo(1, 0),
          )),
          s.m_localXAxisA.normalize(),
          (s.m_localYAxisA = j.crossNumVec2(1, s.m_localXAxisA)),
          (s.m_referenceAngle = Number.isFinite(n.referenceAngle)
            ? n.referenceAngle
            : i.getAngle() - r.getAngle()),
          (s.m_impulse = new J()),
          (s.m_motorMass = 0),
          (s.m_motorImpulse = 0),
          (s.m_lowerTranslation = n.lowerTranslation),
          (s.m_upperTranslation = n.upperTranslation),
          (s.m_maxMotorForce = n.maxMotorForce),
          (s.m_motorSpeed = n.motorSpeed),
          (s.m_enableLimit = n.enableLimit),
          (s.m_enableMotor = n.enableMotor),
          (s.m_limitState = Ei.inactiveLimit),
          (s.m_axis = j.zero()),
          (s.m_perp = j.zero()),
          (s.m_K = new vi()),
          s)
        : new t(n, r, i, a, o);
    }
    return (
      (t.prototype._serialize = function () {
        return {
          type: this.m_type,
          bodyA: this.m_bodyA,
          bodyB: this.m_bodyB,
          collideConnected: this.m_collideConnected,
          lowerTranslation: this.m_lowerTranslation,
          upperTranslation: this.m_upperTranslation,
          maxMotorForce: this.m_maxMotorForce,
          motorSpeed: this.m_motorSpeed,
          enableLimit: this.m_enableLimit,
          enableMotor: this.m_enableMotor,
          localAnchorA: this.m_localAnchorA,
          localAnchorB: this.m_localAnchorB,
          localAxisA: this.m_localXAxisA,
          referenceAngle: this.m_referenceAngle,
        };
      }),
      (t._deserialize = function (e, n, r) {
        return (
          (e = A({}, e)),
          (e.bodyA = r(W, e.bodyA, n)),
          (e.bodyB = r(W, e.bodyB, n)),
          (e.localAxisA = j.clone(e.localAxisA)),
          new t(e)
        );
      }),
      (t.prototype._reset = function (e) {
        (e.anchorA
          ? this.m_localAnchorA.setVec2(this.m_bodyA.getLocalPoint(e.anchorA))
          : e.localAnchorA && this.m_localAnchorA.setVec2(e.localAnchorA),
          e.anchorB
            ? this.m_localAnchorB.setVec2(this.m_bodyB.getLocalPoint(e.anchorB))
            : e.localAnchorB && this.m_localAnchorB.setVec2(e.localAnchorB),
          e.localAxisA &&
            (this.m_localXAxisA.setVec2(e.localAxisA),
            this.m_localYAxisA.setVec2(j.crossNumVec2(1, e.localAxisA))),
          Number.isFinite(e.referenceAngle) &&
            (this.m_referenceAngle = e.referenceAngle),
          e.enableLimit !== void 0 && (this.m_enableLimit = !!e.enableLimit),
          Number.isFinite(e.lowerTranslation) &&
            (this.m_lowerTranslation = e.lowerTranslation),
          Number.isFinite(e.upperTranslation) &&
            (this.m_upperTranslation = e.upperTranslation),
          e.enableMotor !== void 0 && (this.m_enableMotor = !!e.enableMotor),
          Number.isFinite(e.maxMotorForce) &&
            (this.m_maxMotorForce = e.maxMotorForce),
          Number.isFinite(e.motorSpeed) && (this.m_motorSpeed = e.motorSpeed));
      }),
      (t.prototype.getLocalAnchorA = function () {
        return this.m_localAnchorA;
      }),
      (t.prototype.getLocalAnchorB = function () {
        return this.m_localAnchorB;
      }),
      (t.prototype.getLocalAxisA = function () {
        return this.m_localXAxisA;
      }),
      (t.prototype.getReferenceAngle = function () {
        return this.m_referenceAngle;
      }),
      (t.prototype.getJointTranslation = function () {
        var e = this.m_bodyA.getWorldPoint(this.m_localAnchorA),
          t = this.m_bodyB.getWorldPoint(this.m_localAnchorB),
          n = j.sub(t, e),
          r = this.m_bodyA.getWorldVector(this.m_localXAxisA);
        return j.dot(n, r);
      }),
      (t.prototype.getJointSpeed = function () {
        var e = this.m_bodyA,
          t = this.m_bodyB,
          n = U.mulVec2(
            e.m_xf.q,
            j.sub(this.m_localAnchorA, e.m_sweep.localCenter),
          ),
          r = U.mulVec2(
            t.m_xf.q,
            j.sub(this.m_localAnchorB, t.m_sweep.localCenter),
          ),
          i = j.add(e.m_sweep.c, n),
          a = j.add(t.m_sweep.c, r),
          o = j.sub(a, i),
          s = U.mulVec2(e.m_xf.q, this.m_localXAxisA),
          c = e.m_linearVelocity,
          l = t.m_linearVelocity,
          u = e.m_angularVelocity,
          d = t.m_angularVelocity;
        return (
          j.dot(o, j.crossNumVec2(u, s)) +
          j.dot(
            s,
            j.sub(j.addCrossNumVec2(l, d, r), j.addCrossNumVec2(c, u, n)),
          )
        );
      }),
      (t.prototype.isLimitEnabled = function () {
        return this.m_enableLimit;
      }),
      (t.prototype.enableLimit = function (e) {
        e != this.m_enableLimit &&
          (this.m_bodyA.setAwake(!0),
          this.m_bodyB.setAwake(!0),
          (this.m_enableLimit = e),
          (this.m_impulse.z = 0));
      }),
      (t.prototype.getLowerLimit = function () {
        return this.m_lowerTranslation;
      }),
      (t.prototype.getUpperLimit = function () {
        return this.m_upperTranslation;
      }),
      (t.prototype.setLimits = function (e, t) {
        (e != this.m_lowerTranslation || t != this.m_upperTranslation) &&
          (this.m_bodyA.setAwake(!0),
          this.m_bodyB.setAwake(!0),
          (this.m_lowerTranslation = e),
          (this.m_upperTranslation = t),
          (this.m_impulse.z = 0));
      }),
      (t.prototype.isMotorEnabled = function () {
        return this.m_enableMotor;
      }),
      (t.prototype.enableMotor = function (e) {
        e != this.m_enableMotor &&
          (this.m_bodyA.setAwake(!0),
          this.m_bodyB.setAwake(!0),
          (this.m_enableMotor = e));
      }),
      (t.prototype.setMotorSpeed = function (e) {
        e != this.m_motorSpeed &&
          (this.m_bodyA.setAwake(!0),
          this.m_bodyB.setAwake(!0),
          (this.m_motorSpeed = e));
      }),
      (t.prototype.setMaxMotorForce = function (e) {
        e != this.m_maxMotorForce &&
          (this.m_bodyA.setAwake(!0),
          this.m_bodyB.setAwake(!0),
          (this.m_maxMotorForce = e));
      }),
      (t.prototype.getMaxMotorForce = function () {
        return this.m_maxMotorForce;
      }),
      (t.prototype.getMotorSpeed = function () {
        return this.m_motorSpeed;
      }),
      (t.prototype.getMotorForce = function (e) {
        return e * this.m_motorImpulse;
      }),
      (t.prototype.getAnchorA = function () {
        return this.m_bodyA.getWorldPoint(this.m_localAnchorA);
      }),
      (t.prototype.getAnchorB = function () {
        return this.m_bodyB.getWorldPoint(this.m_localAnchorB);
      }),
      (t.prototype.getReactionForce = function (e) {
        return j
          .combine(
            this.m_impulse.x,
            this.m_perp,
            this.m_motorImpulse + this.m_impulse.z,
            this.m_axis,
          )
          .mul(e);
      }),
      (t.prototype.getReactionTorque = function (e) {
        return e * this.m_impulse.y;
      }),
      (t.prototype.initVelocityConstraints = function (e) {
        ((this.m_localCenterA = this.m_bodyA.m_sweep.localCenter),
          (this.m_localCenterB = this.m_bodyB.m_sweep.localCenter),
          (this.m_invMassA = this.m_bodyA.m_invMass),
          (this.m_invMassB = this.m_bodyB.m_invMass),
          (this.m_invIA = this.m_bodyA.m_invI),
          (this.m_invIB = this.m_bodyB.m_invI));
        var t = this.m_bodyA.c_position.c,
          n = this.m_bodyA.c_position.a,
          r = this.m_bodyA.c_velocity.v,
          i = this.m_bodyA.c_velocity.w,
          a = this.m_bodyB.c_position.c,
          o = this.m_bodyB.c_position.a,
          s = this.m_bodyB.c_velocity.v,
          c = this.m_bodyB.c_velocity.w,
          l = U.neo(n),
          u = U.neo(o),
          d = U.mulVec2(l, j.sub(this.m_localAnchorA, this.m_localCenterA)),
          f = U.mulVec2(u, j.sub(this.m_localAnchorB, this.m_localCenterB)),
          p = j.zero();
        (p.addCombine(1, a, 1, f), p.subCombine(1, t, 1, d));
        var m = this.m_invMassA,
          h = this.m_invMassB,
          g = this.m_invIA,
          _ = this.m_invIB;
        ((this.m_axis = U.mulVec2(l, this.m_localXAxisA)),
          (this.m_a1 = j.crossVec2Vec2(j.add(p, d), this.m_axis)),
          (this.m_a2 = j.crossVec2Vec2(f, this.m_axis)),
          (this.m_motorMass =
            m + h + g * this.m_a1 * this.m_a1 + _ * this.m_a2 * this.m_a2),
          this.m_motorMass > 0 && (this.m_motorMass = 1 / this.m_motorMass),
          (this.m_perp = U.mulVec2(l, this.m_localYAxisA)),
          (this.m_s1 = j.crossVec2Vec2(j.add(p, d), this.m_perp)),
          (this.m_s2 = j.crossVec2Vec2(f, this.m_perp)),
          j.crossVec2Vec2(d, this.m_perp));
        var v = m + h + g * this.m_s1 * this.m_s1 + _ * this.m_s2 * this.m_s2,
          y = g * this.m_s1 + _ * this.m_s2,
          b = g * this.m_s1 * this.m_a1 + _ * this.m_s2 * this.m_a2,
          x = g + _;
        x == 0 && (x = 1);
        var S = g * this.m_a1 + _ * this.m_a2,
          C = m + h + g * this.m_a1 * this.m_a1 + _ * this.m_a2 * this.m_a2;
        if (
          (this.m_K.ex.set(v, y, b),
          this.m_K.ey.set(y, x, S),
          this.m_K.ez.set(b, S, C),
          this.m_enableLimit)
        ) {
          var w = j.dot(this.m_axis, p);
          Ci(this.m_upperTranslation - this.m_lowerTranslation) <
          2 * N.linearSlop
            ? (this.m_limitState = Ei.equalLimits)
            : w <= this.m_lowerTranslation
              ? this.m_limitState != Ei.atLowerLimit &&
                ((this.m_limitState = Ei.atLowerLimit), (this.m_impulse.z = 0))
              : w >= this.m_upperTranslation
                ? this.m_limitState != Ei.atUpperLimit &&
                  ((this.m_limitState = Ei.atUpperLimit),
                  (this.m_impulse.z = 0))
                : ((this.m_limitState = Ei.inactiveLimit),
                  (this.m_impulse.z = 0));
        } else ((this.m_limitState = Ei.inactiveLimit), (this.m_impulse.z = 0));
        if (
          (this.m_enableMotor == 0 && (this.m_motorImpulse = 0), e.warmStarting)
        ) {
          (this.m_impulse.mul(e.dtRatio), (this.m_motorImpulse *= e.dtRatio));
          var T = j.combine(
              this.m_impulse.x,
              this.m_perp,
              this.m_motorImpulse + this.m_impulse.z,
              this.m_axis,
            ),
            E =
              this.m_impulse.x * this.m_s1 +
              this.m_impulse.y +
              (this.m_motorImpulse + this.m_impulse.z) * this.m_a1,
            D =
              this.m_impulse.x * this.m_s2 +
              this.m_impulse.y +
              (this.m_motorImpulse + this.m_impulse.z) * this.m_a2;
          (r.subMul(m, T), (i -= g * E), s.addMul(h, T), (c += _ * D));
        } else (this.m_impulse.setZero(), (this.m_motorImpulse = 0));
        (this.m_bodyA.c_velocity.v.setVec2(r),
          (this.m_bodyA.c_velocity.w = i),
          this.m_bodyB.c_velocity.v.setVec2(s),
          (this.m_bodyB.c_velocity.w = c));
      }),
      (t.prototype.solveVelocityConstraints = function (e) {
        var t = this.m_bodyA.c_velocity.v,
          n = this.m_bodyA.c_velocity.w,
          r = this.m_bodyB.c_velocity.v,
          i = this.m_bodyB.c_velocity.w,
          a = this.m_invMassA,
          o = this.m_invMassB,
          s = this.m_invIA,
          c = this.m_invIB;
        if (this.m_enableMotor && this.m_limitState != Ei.equalLimits) {
          var l =
              j.dot(this.m_axis, j.sub(r, t)) + this.m_a2 * i - this.m_a1 * n,
            u = this.m_motorMass * (this.m_motorSpeed - l),
            d = this.m_motorImpulse,
            f = e.dt * this.m_maxMotorForce;
          ((this.m_motorImpulse = ue(this.m_motorImpulse + u, -f, f)),
            (u = this.m_motorImpulse - d));
          var p = j.mulNumVec2(u, this.m_axis),
            m = u * this.m_a1,
            h = u * this.m_a2;
          (t.subMul(a, p), (n -= s * m), r.addMul(o, p), (i += c * h));
        }
        var g = j.zero();
        if (
          ((g.x += j.dot(this.m_perp, r) + this.m_s2 * i),
          (g.x -= j.dot(this.m_perp, t) + this.m_s1 * n),
          (g.y = i - n),
          this.m_enableLimit && this.m_limitState != Ei.inactiveLimit)
        ) {
          var _ = 0;
          ((_ += j.dot(this.m_axis, r) + this.m_a2 * i),
            (_ -= j.dot(this.m_axis, t) + this.m_a1 * n));
          var l = new J(g.x, g.y, _),
            v = J.clone(this.m_impulse),
            y = this.m_K.solve33(J.neg(l));
          (this.m_impulse.add(y),
            this.m_limitState == Ei.atLowerLimit
              ? (this.m_impulse.z = wi(this.m_impulse.z, 0))
              : this.m_limitState == Ei.atUpperLimit &&
                (this.m_impulse.z = Ti(this.m_impulse.z, 0)));
          var b = j.combine(
              -1,
              g,
              -(this.m_impulse.z - v.z),
              j.neo(this.m_K.ez.x, this.m_K.ez.y),
            ),
            x = j.add(this.m_K.solve22(b), j.neo(v.x, v.y));
          ((this.m_impulse.x = x.x),
            (this.m_impulse.y = x.y),
            (y = J.sub(this.m_impulse, v)));
          var p = j.combine(y.x, this.m_perp, y.z, this.m_axis),
            m = y.x * this.m_s1 + y.y + y.z * this.m_a1,
            h = y.x * this.m_s2 + y.y + y.z * this.m_a2;
          (t.subMul(a, p), (n -= s * m), r.addMul(o, p), (i += c * h));
        } else {
          var y = this.m_K.solve22(j.neg(g));
          ((this.m_impulse.x += y.x), (this.m_impulse.y += y.y));
          var p = j.mulNumVec2(y.x, this.m_perp),
            m = y.x * this.m_s1 + y.y,
            h = y.x * this.m_s2 + y.y;
          (t.subMul(a, p), (n -= s * m), r.addMul(o, p), (i += c * h));
        }
        ((this.m_bodyA.c_velocity.v = t),
          (this.m_bodyA.c_velocity.w = n),
          (this.m_bodyB.c_velocity.v = r),
          (this.m_bodyB.c_velocity.w = i));
      }),
      (t.prototype.solvePositionConstraints = function (e) {
        var t = this.m_bodyA.c_position.c,
          n = this.m_bodyA.c_position.a,
          r = this.m_bodyB.c_position.c,
          i = this.m_bodyB.c_position.a,
          a = U.neo(n),
          o = U.neo(i),
          s = this.m_invMassA,
          c = this.m_invMassB,
          l = this.m_invIA,
          u = this.m_invIB,
          d = U.mulVec2(a, j.sub(this.m_localAnchorA, this.m_localCenterA)),
          f = U.mulVec2(o, j.sub(this.m_localAnchorB, this.m_localCenterB)),
          p = j.sub(j.add(r, f), j.add(t, d)),
          m = U.mulVec2(a, this.m_localXAxisA),
          h = j.crossVec2Vec2(j.add(p, d), m),
          g = j.crossVec2Vec2(f, m),
          _ = U.mulVec2(a, this.m_localYAxisA),
          v = j.crossVec2Vec2(j.add(p, d), _),
          y = j.crossVec2Vec2(f, _),
          b = new J(),
          x = j.zero();
        ((x.x = j.dot(_, p)), (x.y = i - n - this.m_referenceAngle));
        var S = Ci(x.x),
          C = Ci(x.y),
          w = N.linearSlop,
          T = N.maxLinearCorrection,
          E = !1,
          D = 0;
        if (this.m_enableLimit) {
          var O = j.dot(m, p);
          Ci(this.m_upperTranslation - this.m_lowerTranslation) < 2 * w
            ? ((D = ue(O, -T, T)), (S = wi(S, Ci(O))), (E = !0))
            : O <= this.m_lowerTranslation
              ? ((D = ue(O - this.m_lowerTranslation + w, -T, 0)),
                (S = Math.max(S, this.m_lowerTranslation - O)),
                (E = !0))
              : O >= this.m_upperTranslation &&
                ((D = ue(O - this.m_upperTranslation - w, 0, T)),
                (S = Math.max(S, O - this.m_upperTranslation)),
                (E = !0));
        }
        if (E) {
          var ee = s + c + l * v * v + u * y * y,
            te = l * v + u * y,
            ne = l * v * h + u * y * g,
            k = l + u;
          k == 0 && (k = 1);
          var A = l * h + u * g,
            re = s + c + l * h * h + u * g * g,
            ie = new vi();
          (ie.ex.set(ee, te, ne), ie.ey.set(te, k, A), ie.ez.set(ne, A, re));
          var ae = new J();
          ((ae.x = x.x), (ae.y = x.y), (ae.z = D), (b = ie.solve33(J.neg(ae))));
        } else {
          var ee = s + c + l * v * v + u * y * y,
            te = l * v + u * y,
            k = l + u;
          k == 0 && (k = 1);
          var ie = new Un();
          (ie.ex.setNum(ee, te), ie.ey.setNum(te, k));
          var oe = ie.solve(j.neg(x));
          ((b.x = oe.x), (b.y = oe.y), (b.z = 0));
        }
        var se = j.combine(b.x, _, b.z, m),
          ce = b.x * v + b.y + b.z * h,
          le = b.x * y + b.y + b.z * g;
        return (
          t.subMul(s, se),
          (n -= l * ce),
          r.addMul(c, se),
          (i += u * le),
          (this.m_bodyA.c_position.c = t),
          (this.m_bodyA.c_position.a = n),
          (this.m_bodyB.c_position.c = r),
          (this.m_bodyB.c_position.a = i),
          S <= N.linearSlop && C <= N.angularSlop
        );
      }),
      (t.TYPE = `prismatic-joint`),
      t
    );
  })(It),
  ki = { ratio: 1 },
  Ai = (function (e) {
    k(t, e);
    function t(n, r, i, a, o, s) {
      var c = this;
      if (!(c instanceof t)) return new t(n, r, i, a, o, s);
      ((n = re(n, ki)),
        (c = e.call(this, n, r, i) || this),
        (r = c.m_bodyA),
        (i = c.m_bodyB),
        (c.m_type = t.TYPE),
        (c.m_joint1 = a || n.joint1),
        (c.m_joint2 = o || n.joint2),
        (c.m_ratio = Number.isFinite(s) ? s : n.ratio),
        (c.m_type1 = c.m_joint1.getType()),
        (c.m_type2 = c.m_joint2.getType()));
      var l, u;
      ((c.m_bodyC = c.m_joint1.getBodyA()),
        (c.m_bodyA = c.m_joint1.getBodyB()));
      var d = c.m_bodyA.m_xf,
        f = c.m_bodyA.m_sweep.a,
        p = c.m_bodyC.m_xf,
        m = c.m_bodyC.m_sweep.a;
      if (c.m_type1 === Si.TYPE) {
        var h = c.m_joint1;
        ((c.m_localAnchorC = h.m_localAnchorA),
          (c.m_localAnchorA = h.m_localAnchorB),
          (c.m_referenceAngleA = h.m_referenceAngle),
          (c.m_localAxisC = j.zero()),
          (l = f - m - c.m_referenceAngleA));
      } else {
        var g = c.m_joint1;
        ((c.m_localAnchorC = g.m_localAnchorA),
          (c.m_localAnchorA = g.m_localAnchorB),
          (c.m_referenceAngleA = g.m_referenceAngle),
          (c.m_localAxisC = g.m_localXAxisA));
        var _ = c.m_localAnchorC,
          v = U.mulTVec2(
            p.q,
            j.add(U.mulVec2(d.q, c.m_localAnchorA), j.sub(d.p, p.p)),
          );
        l = j.dot(v, c.m_localAxisC) - j.dot(_, c.m_localAxisC);
      }
      ((c.m_bodyD = c.m_joint2.getBodyA()),
        (c.m_bodyB = c.m_joint2.getBodyB()));
      var y = c.m_bodyB.m_xf,
        b = c.m_bodyB.m_sweep.a,
        x = c.m_bodyD.m_xf,
        S = c.m_bodyD.m_sweep.a;
      if (c.m_type2 === Si.TYPE) {
        var h = c.m_joint2;
        ((c.m_localAnchorD = h.m_localAnchorA),
          (c.m_localAnchorB = h.m_localAnchorB),
          (c.m_referenceAngleB = h.m_referenceAngle),
          (c.m_localAxisD = j.zero()),
          (u = b - S - c.m_referenceAngleB));
      } else {
        var g = c.m_joint2;
        ((c.m_localAnchorD = g.m_localAnchorA),
          (c.m_localAnchorB = g.m_localAnchorB),
          (c.m_referenceAngleB = g.m_referenceAngle),
          (c.m_localAxisD = g.m_localXAxisA));
        var C = c.m_localAnchorD,
          w = U.mulTVec2(
            x.q,
            j.add(U.mulVec2(y.q, c.m_localAnchorB), j.sub(y.p, x.p)),
          );
        u = j.dot(w, c.m_localAxisD) - j.dot(C, c.m_localAxisD);
      }
      return ((c.m_constant = l + c.m_ratio * u), (c.m_impulse = 0), c);
    }
    return (
      (t.prototype._serialize = function () {
        return {
          type: this.m_type,
          bodyA: this.m_bodyA,
          bodyB: this.m_bodyB,
          collideConnected: this.m_collideConnected,
          joint1: this.m_joint1,
          joint2: this.m_joint2,
          ratio: this.m_ratio,
        };
      }),
      (t._deserialize = function (e, n, r) {
        return (
          (e = A({}, e)),
          (e.bodyA = r(W, e.bodyA, n)),
          (e.bodyB = r(W, e.bodyB, n)),
          (e.joint1 = r(It, e.joint1, n)),
          (e.joint2 = r(It, e.joint2, n)),
          new t(e)
        );
      }),
      (t.prototype._reset = function (e) {
        Number.isFinite(e.ratio) && (this.m_ratio = e.ratio);
      }),
      (t.prototype.getJoint1 = function () {
        return this.m_joint1;
      }),
      (t.prototype.getJoint2 = function () {
        return this.m_joint2;
      }),
      (t.prototype.setRatio = function (e) {
        this.m_ratio = e;
      }),
      (t.prototype.getRatio = function () {
        return this.m_ratio;
      }),
      (t.prototype.getAnchorA = function () {
        return this.m_bodyA.getWorldPoint(this.m_localAnchorA);
      }),
      (t.prototype.getAnchorB = function () {
        return this.m_bodyB.getWorldPoint(this.m_localAnchorB);
      }),
      (t.prototype.getReactionForce = function (e) {
        return j.mulNumVec2(this.m_impulse, this.m_JvAC).mul(e);
      }),
      (t.prototype.getReactionTorque = function (e) {
        return e * (this.m_impulse * this.m_JwA);
      }),
      (t.prototype.initVelocityConstraints = function (e) {
        ((this.m_lcA = this.m_bodyA.m_sweep.localCenter),
          (this.m_lcB = this.m_bodyB.m_sweep.localCenter),
          (this.m_lcC = this.m_bodyC.m_sweep.localCenter),
          (this.m_lcD = this.m_bodyD.m_sweep.localCenter),
          (this.m_mA = this.m_bodyA.m_invMass),
          (this.m_mB = this.m_bodyB.m_invMass),
          (this.m_mC = this.m_bodyC.m_invMass),
          (this.m_mD = this.m_bodyD.m_invMass),
          (this.m_iA = this.m_bodyA.m_invI),
          (this.m_iB = this.m_bodyB.m_invI),
          (this.m_iC = this.m_bodyC.m_invI),
          (this.m_iD = this.m_bodyD.m_invI));
        var t = this.m_bodyA.c_position.a,
          n = this.m_bodyA.c_velocity.v,
          r = this.m_bodyA.c_velocity.w,
          i = this.m_bodyB.c_position.a,
          a = this.m_bodyB.c_velocity.v,
          o = this.m_bodyB.c_velocity.w,
          s = this.m_bodyC.c_position.a,
          c = this.m_bodyC.c_velocity.v,
          l = this.m_bodyC.c_velocity.w,
          u = this.m_bodyD.c_position.a,
          d = this.m_bodyD.c_velocity.v,
          f = this.m_bodyD.c_velocity.w,
          p = U.neo(t),
          m = U.neo(i),
          h = U.neo(s),
          g = U.neo(u);
        if (((this.m_mass = 0), this.m_type1 == Si.TYPE))
          ((this.m_JvAC = j.zero()),
            (this.m_JwA = 1),
            (this.m_JwC = 1),
            (this.m_mass += this.m_iA + this.m_iC));
        else {
          var _ = U.mulVec2(h, this.m_localAxisC),
            v = U.mulSub(h, this.m_localAnchorC, this.m_lcC),
            y = U.mulSub(p, this.m_localAnchorA, this.m_lcA);
          ((this.m_JvAC = _),
            (this.m_JwC = j.crossVec2Vec2(v, _)),
            (this.m_JwA = j.crossVec2Vec2(y, _)),
            (this.m_mass +=
              this.m_mC +
              this.m_mA +
              this.m_iC * this.m_JwC * this.m_JwC +
              this.m_iA * this.m_JwA * this.m_JwA));
        }
        if (this.m_type2 == Si.TYPE)
          ((this.m_JvBD = j.zero()),
            (this.m_JwB = this.m_ratio),
            (this.m_JwD = this.m_ratio),
            (this.m_mass +=
              this.m_ratio * this.m_ratio * (this.m_iB + this.m_iD)));
        else {
          var _ = U.mulVec2(g, this.m_localAxisD),
            b = U.mulSub(g, this.m_localAnchorD, this.m_lcD),
            x = U.mulSub(m, this.m_localAnchorB, this.m_lcB);
          ((this.m_JvBD = j.mulNumVec2(this.m_ratio, _)),
            (this.m_JwD = this.m_ratio * j.crossVec2Vec2(b, _)),
            (this.m_JwB = this.m_ratio * j.crossVec2Vec2(x, _)),
            (this.m_mass +=
              this.m_ratio * this.m_ratio * (this.m_mD + this.m_mB) +
              this.m_iD * this.m_JwD * this.m_JwD +
              this.m_iB * this.m_JwB * this.m_JwB));
        }
        ((this.m_mass = this.m_mass > 0 ? 1 / this.m_mass : 0),
          e.warmStarting
            ? (n.addMul(this.m_mA * this.m_impulse, this.m_JvAC),
              (r += this.m_iA * this.m_impulse * this.m_JwA),
              a.addMul(this.m_mB * this.m_impulse, this.m_JvBD),
              (o += this.m_iB * this.m_impulse * this.m_JwB),
              c.subMul(this.m_mC * this.m_impulse, this.m_JvAC),
              (l -= this.m_iC * this.m_impulse * this.m_JwC),
              d.subMul(this.m_mD * this.m_impulse, this.m_JvBD),
              (f -= this.m_iD * this.m_impulse * this.m_JwD))
            : (this.m_impulse = 0),
          this.m_bodyA.c_velocity.v.setVec2(n),
          (this.m_bodyA.c_velocity.w = r),
          this.m_bodyB.c_velocity.v.setVec2(a),
          (this.m_bodyB.c_velocity.w = o),
          this.m_bodyC.c_velocity.v.setVec2(c),
          (this.m_bodyC.c_velocity.w = l),
          this.m_bodyD.c_velocity.v.setVec2(d),
          (this.m_bodyD.c_velocity.w = f));
      }),
      (t.prototype.solveVelocityConstraints = function (e) {
        var t = this.m_bodyA.c_velocity.v,
          n = this.m_bodyA.c_velocity.w,
          r = this.m_bodyB.c_velocity.v,
          i = this.m_bodyB.c_velocity.w,
          a = this.m_bodyC.c_velocity.v,
          o = this.m_bodyC.c_velocity.w,
          s = this.m_bodyD.c_velocity.v,
          c = this.m_bodyD.c_velocity.w,
          l =
            j.dot(this.m_JvAC, t) -
            j.dot(this.m_JvAC, a) +
            j.dot(this.m_JvBD, r) -
            j.dot(this.m_JvBD, s);
        l +=
          this.m_JwA * n - this.m_JwC * o + (this.m_JwB * i - this.m_JwD * c);
        var u = -this.m_mass * l;
        ((this.m_impulse += u),
          t.addMul(this.m_mA * u, this.m_JvAC),
          (n += this.m_iA * u * this.m_JwA),
          r.addMul(this.m_mB * u, this.m_JvBD),
          (i += this.m_iB * u * this.m_JwB),
          a.subMul(this.m_mC * u, this.m_JvAC),
          (o -= this.m_iC * u * this.m_JwC),
          s.subMul(this.m_mD * u, this.m_JvBD),
          (c -= this.m_iD * u * this.m_JwD),
          this.m_bodyA.c_velocity.v.setVec2(t),
          (this.m_bodyA.c_velocity.w = n),
          this.m_bodyB.c_velocity.v.setVec2(r),
          (this.m_bodyB.c_velocity.w = i),
          this.m_bodyC.c_velocity.v.setVec2(a),
          (this.m_bodyC.c_velocity.w = o),
          this.m_bodyD.c_velocity.v.setVec2(s),
          (this.m_bodyD.c_velocity.w = c));
      }),
      (t.prototype.solvePositionConstraints = function (e) {
        var t = this.m_bodyA.c_position.c,
          n = this.m_bodyA.c_position.a,
          r = this.m_bodyB.c_position.c,
          i = this.m_bodyB.c_position.a,
          a = this.m_bodyC.c_position.c,
          o = this.m_bodyC.c_position.a,
          s = this.m_bodyD.c_position.c,
          c = this.m_bodyD.c_position.a,
          l = U.neo(n),
          u = U.neo(i),
          d = U.neo(o),
          f = U.neo(c),
          p = 0,
          m,
          h,
          g,
          _,
          v,
          y,
          b,
          x,
          S = 0;
        if (this.m_type1 == Si.TYPE)
          ((g = j.zero()),
            (v = 1),
            (b = 1),
            (S += this.m_iA + this.m_iC),
            (m = n - o - this.m_referenceAngleA));
        else {
          var C = U.mulVec2(d, this.m_localAxisC),
            w = U.mulSub(d, this.m_localAnchorC, this.m_lcC),
            T = U.mulSub(l, this.m_localAnchorA, this.m_lcA);
          ((g = C),
            (b = j.crossVec2Vec2(w, C)),
            (v = j.crossVec2Vec2(T, C)),
            (S +=
              this.m_mC + this.m_mA + this.m_iC * b * b + this.m_iA * v * v));
          var E = j.sub(this.m_localAnchorC, this.m_lcC),
            D = U.mulTVec2(d, j.add(T, j.sub(t, a)));
          m = j.dot(j.sub(D, E), this.m_localAxisC);
        }
        if (this.m_type2 == Si.TYPE)
          ((_ = j.zero()),
            (y = this.m_ratio),
            (x = this.m_ratio),
            (S += this.m_ratio * this.m_ratio * (this.m_iB + this.m_iD)),
            (h = i - c - this.m_referenceAngleB));
        else {
          var C = U.mulVec2(f, this.m_localAxisD),
            O = U.mulSub(f, this.m_localAnchorD, this.m_lcD),
            ee = U.mulSub(u, this.m_localAnchorB, this.m_lcB);
          ((_ = j.mulNumVec2(this.m_ratio, C)),
            (x = this.m_ratio * j.crossVec2Vec2(O, C)),
            (y = this.m_ratio * j.crossVec2Vec2(ee, C)),
            (S +=
              this.m_ratio * this.m_ratio * (this.m_mD + this.m_mB) +
              this.m_iD * x * x +
              this.m_iB * y * y));
          var te = j.sub(this.m_localAnchorD, this.m_lcD),
            ne = U.mulTVec2(f, j.add(ee, j.sub(r, s)));
          h = j.dot(ne, this.m_localAxisD) - j.dot(te, this.m_localAxisD);
        }
        var k = m + this.m_ratio * h - this.m_constant,
          A = 0;
        return (
          S > 0 && (A = -k / S),
          t.addMul(this.m_mA * A, g),
          (n += this.m_iA * A * v),
          r.addMul(this.m_mB * A, _),
          (i += this.m_iB * A * y),
          a.subMul(this.m_mC * A, g),
          (o -= this.m_iC * A * b),
          s.subMul(this.m_mD * A, _),
          (c -= this.m_iD * A * x),
          this.m_bodyA.c_position.c.setVec2(t),
          (this.m_bodyA.c_position.a = n),
          this.m_bodyB.c_position.c.setVec2(r),
          (this.m_bodyB.c_position.a = i),
          this.m_bodyC.c_position.c.setVec2(a),
          (this.m_bodyC.c_position.a = o),
          this.m_bodyD.c_position.c.setVec2(s),
          (this.m_bodyD.c_position.a = c),
          p < N.linearSlop
        );
      }),
      (t.TYPE = `gear-joint`),
      t
    );
  })(It),
  ji = { maxForce: 1, maxTorque: 1, correctionFactor: 0.3 },
  Mi = (function (e) {
    k(t, e);
    function t(n, r, i) {
      var a = this;
      return a instanceof t
        ? ((n = re(n, ji)),
          (a = e.call(this, n, r, i) || this),
          (r = a.m_bodyA),
          (i = a.m_bodyB),
          (a.m_type = t.TYPE),
          (a.m_linearOffset = j.isValid(n.linearOffset)
            ? j.clone(n.linearOffset)
            : r.getLocalPoint(i.getPosition())),
          (a.m_angularOffset = Number.isFinite(n.angularOffset)
            ? n.angularOffset
            : i.getAngle() - r.getAngle()),
          (a.m_linearImpulse = j.zero()),
          (a.m_angularImpulse = 0),
          (a.m_maxForce = n.maxForce),
          (a.m_maxTorque = n.maxTorque),
          (a.m_correctionFactor = n.correctionFactor),
          a)
        : new t(n, r, i);
    }
    return (
      (t.prototype._serialize = function () {
        return {
          type: this.m_type,
          bodyA: this.m_bodyA,
          bodyB: this.m_bodyB,
          collideConnected: this.m_collideConnected,
          maxForce: this.m_maxForce,
          maxTorque: this.m_maxTorque,
          correctionFactor: this.m_correctionFactor,
          linearOffset: this.m_linearOffset,
          angularOffset: this.m_angularOffset,
        };
      }),
      (t._deserialize = function (e, n, r) {
        return (
          (e = A({}, e)),
          (e.bodyA = r(W, e.bodyA, n)),
          (e.bodyB = r(W, e.bodyB, n)),
          new t(e)
        );
      }),
      (t.prototype._reset = function (e) {
        (Number.isFinite(e.angularOffset) &&
          (this.m_angularOffset = e.angularOffset),
          Number.isFinite(e.maxForce) && (this.m_maxForce = e.maxForce),
          Number.isFinite(e.maxTorque) && (this.m_maxTorque = e.maxTorque),
          Number.isFinite(e.correctionFactor) &&
            (this.m_correctionFactor = e.correctionFactor),
          j.isValid(e.linearOffset) && this.m_linearOffset.set(e.linearOffset));
      }),
      (t.prototype.setMaxForce = function (e) {
        this.m_maxForce = e;
      }),
      (t.prototype.getMaxForce = function () {
        return this.m_maxForce;
      }),
      (t.prototype.setMaxTorque = function (e) {
        this.m_maxTorque = e;
      }),
      (t.prototype.getMaxTorque = function () {
        return this.m_maxTorque;
      }),
      (t.prototype.setCorrectionFactor = function (e) {
        this.m_correctionFactor = e;
      }),
      (t.prototype.getCorrectionFactor = function () {
        return this.m_correctionFactor;
      }),
      (t.prototype.setLinearOffset = function (e) {
        (e.x != this.m_linearOffset.x || e.y != this.m_linearOffset.y) &&
          (this.m_bodyA.setAwake(!0),
          this.m_bodyB.setAwake(!0),
          this.m_linearOffset.set(e));
      }),
      (t.prototype.getLinearOffset = function () {
        return this.m_linearOffset;
      }),
      (t.prototype.setAngularOffset = function (e) {
        e != this.m_angularOffset &&
          (this.m_bodyA.setAwake(!0),
          this.m_bodyB.setAwake(!0),
          (this.m_angularOffset = e));
      }),
      (t.prototype.getAngularOffset = function () {
        return this.m_angularOffset;
      }),
      (t.prototype.getAnchorA = function () {
        return this.m_bodyA.getPosition();
      }),
      (t.prototype.getAnchorB = function () {
        return this.m_bodyB.getPosition();
      }),
      (t.prototype.getReactionForce = function (e) {
        return j.mulNumVec2(e, this.m_linearImpulse);
      }),
      (t.prototype.getReactionTorque = function (e) {
        return e * this.m_angularImpulse;
      }),
      (t.prototype.initVelocityConstraints = function (e) {
        ((this.m_localCenterA = this.m_bodyA.m_sweep.localCenter),
          (this.m_localCenterB = this.m_bodyB.m_sweep.localCenter),
          (this.m_invMassA = this.m_bodyA.m_invMass),
          (this.m_invMassB = this.m_bodyB.m_invMass),
          (this.m_invIA = this.m_bodyA.m_invI),
          (this.m_invIB = this.m_bodyB.m_invI));
        var t = this.m_bodyA.c_position.c,
          n = this.m_bodyA.c_position.a,
          r = this.m_bodyA.c_velocity.v,
          i = this.m_bodyA.c_velocity.w,
          a = this.m_bodyB.c_position.c,
          o = this.m_bodyB.c_position.a,
          s = this.m_bodyB.c_velocity.v,
          c = this.m_bodyB.c_velocity.w,
          l = U.neo(n),
          u = U.neo(o);
        ((this.m_rA = U.mulVec2(
          l,
          j.sub(this.m_linearOffset, this.m_localCenterA),
        )),
          (this.m_rB = U.mulVec2(u, j.neg(this.m_localCenterB))));
        var d = this.m_invMassA,
          f = this.m_invMassB,
          p = this.m_invIA,
          m = this.m_invIB,
          h = new Un();
        if (
          ((h.ex.x =
            d +
            f +
            p * this.m_rA.y * this.m_rA.y +
            m * this.m_rB.y * this.m_rB.y),
          (h.ex.y =
            -p * this.m_rA.x * this.m_rA.y - m * this.m_rB.x * this.m_rB.y),
          (h.ey.x = h.ex.y),
          (h.ey.y =
            d +
            f +
            p * this.m_rA.x * this.m_rA.x +
            m * this.m_rB.x * this.m_rB.x),
          (this.m_linearMass = h.getInverse()),
          (this.m_angularMass = p + m),
          this.m_angularMass > 0 &&
            (this.m_angularMass = 1 / this.m_angularMass),
          (this.m_linearError = j.zero()),
          this.m_linearError.addCombine(1, a, 1, this.m_rB),
          this.m_linearError.subCombine(1, t, 1, this.m_rA),
          (this.m_angularError = o - n - this.m_angularOffset),
          e.warmStarting)
        ) {
          (this.m_linearImpulse.mul(e.dtRatio),
            (this.m_angularImpulse *= e.dtRatio));
          var g = j.neo(this.m_linearImpulse.x, this.m_linearImpulse.y);
          (r.subMul(d, g),
            (i -= p * (j.crossVec2Vec2(this.m_rA, g) + this.m_angularImpulse)),
            s.addMul(f, g),
            (c += m * (j.crossVec2Vec2(this.m_rB, g) + this.m_angularImpulse)));
        } else (this.m_linearImpulse.setZero(), (this.m_angularImpulse = 0));
        ((this.m_bodyA.c_velocity.v = r),
          (this.m_bodyA.c_velocity.w = i),
          (this.m_bodyB.c_velocity.v = s),
          (this.m_bodyB.c_velocity.w = c));
      }),
      (t.prototype.solveVelocityConstraints = function (e) {
        var t = this.m_bodyA.c_velocity.v,
          n = this.m_bodyA.c_velocity.w,
          r = this.m_bodyB.c_velocity.v,
          i = this.m_bodyB.c_velocity.w,
          a = this.m_invMassA,
          o = this.m_invMassB,
          s = this.m_invIA,
          c = this.m_invIB,
          l = e.dt,
          u = e.inv_dt,
          d = i - n + u * this.m_correctionFactor * this.m_angularError,
          f = -this.m_angularMass * d,
          p = this.m_angularImpulse,
          m = l * this.m_maxTorque;
        ((this.m_angularImpulse = ue(this.m_angularImpulse + f, -m, m)),
          (f = this.m_angularImpulse - p),
          (n -= s * f),
          (i += c * f));
        var d = j.zero();
        (d.addCombine(1, r, 1, j.crossNumVec2(i, this.m_rB)),
          d.subCombine(1, t, 1, j.crossNumVec2(n, this.m_rA)),
          d.addMul(u * this.m_correctionFactor, this.m_linearError));
        var f = j.neg(Un.mulVec2(this.m_linearMass, d)),
          p = j.clone(this.m_linearImpulse);
        this.m_linearImpulse.add(f);
        var m = l * this.m_maxForce;
        (this.m_linearImpulse.clamp(m),
          (f = j.sub(this.m_linearImpulse, p)),
          t.subMul(a, f),
          (n -= s * j.crossVec2Vec2(this.m_rA, f)),
          r.addMul(o, f),
          (i += c * j.crossVec2Vec2(this.m_rB, f)),
          (this.m_bodyA.c_velocity.v = t),
          (this.m_bodyA.c_velocity.w = n),
          (this.m_bodyB.c_velocity.v = r),
          (this.m_bodyB.c_velocity.w = i));
      }),
      (t.prototype.solvePositionConstraints = function (e) {
        return !0;
      }),
      (t.TYPE = `motor-joint`),
      t
    );
  })(It),
  Ni = Math.PI,
  Pi = { maxForce: 0, frequencyHz: 5, dampingRatio: 0.7 },
  Fi = (function (e) {
    k(t, e);
    function t(n, r, i, a) {
      var o = this;
      return o instanceof t
        ? ((n = re(n, Pi)),
          (o = e.call(this, n, r, i) || this),
          (r = o.m_bodyA),
          (i = o.m_bodyB),
          (o.m_type = t.TYPE),
          j.isValid(a)
            ? (o.m_targetA = j.clone(a))
            : j.isValid(n.target)
              ? (o.m_targetA = j.clone(n.target))
              : (o.m_targetA = j.zero()),
          (o.m_localAnchorB = pt.mulTVec2(i.getTransform(), o.m_targetA)),
          (o.m_maxForce = n.maxForce),
          (o.m_impulse = j.zero()),
          (o.m_frequencyHz = n.frequencyHz),
          (o.m_dampingRatio = n.dampingRatio),
          (o.m_beta = 0),
          (o.m_gamma = 0),
          (o.m_rB = j.zero()),
          (o.m_localCenterB = j.zero()),
          (o.m_invMassB = 0),
          (o.m_invIB = 0),
          (o.m_mass = new Un()),
          (o.m_C = j.zero()),
          o)
        : new t(n, r, i, a);
    }
    return (
      (t.prototype._serialize = function () {
        return {
          type: this.m_type,
          bodyA: this.m_bodyA,
          bodyB: this.m_bodyB,
          collideConnected: this.m_collideConnected,
          target: this.m_targetA,
          maxForce: this.m_maxForce,
          frequencyHz: this.m_frequencyHz,
          dampingRatio: this.m_dampingRatio,
          _localAnchorB: this.m_localAnchorB,
        };
      }),
      (t._deserialize = function (e, n, r) {
        ((e = A({}, e)),
          (e.bodyA = r(W, e.bodyA, n)),
          (e.bodyB = r(W, e.bodyB, n)),
          (e.target = j.clone(e.target)));
        var i = new t(e);
        return (e._localAnchorB && (i.m_localAnchorB = e._localAnchorB), i);
      }),
      (t.prototype._reset = function (e) {
        (Number.isFinite(e.maxForce) && (this.m_maxForce = e.maxForce),
          Number.isFinite(e.frequencyHz) &&
            (this.m_frequencyHz = e.frequencyHz),
          Number.isFinite(e.dampingRatio) &&
            (this.m_dampingRatio = e.dampingRatio));
      }),
      (t.prototype.setTarget = function (e) {
        j.areEqual(e, this.m_targetA) ||
          (this.m_bodyB.setAwake(!0), this.m_targetA.set(e));
      }),
      (t.prototype.getTarget = function () {
        return this.m_targetA;
      }),
      (t.prototype.setMaxForce = function (e) {
        this.m_maxForce = e;
      }),
      (t.prototype.getMaxForce = function () {
        return this.m_maxForce;
      }),
      (t.prototype.setFrequency = function (e) {
        this.m_frequencyHz = e;
      }),
      (t.prototype.getFrequency = function () {
        return this.m_frequencyHz;
      }),
      (t.prototype.setDampingRatio = function (e) {
        this.m_dampingRatio = e;
      }),
      (t.prototype.getDampingRatio = function () {
        return this.m_dampingRatio;
      }),
      (t.prototype.getAnchorA = function () {
        return j.clone(this.m_targetA);
      }),
      (t.prototype.getAnchorB = function () {
        return this.m_bodyB.getWorldPoint(this.m_localAnchorB);
      }),
      (t.prototype.getReactionForce = function (e) {
        return j.mulNumVec2(e, this.m_impulse);
      }),
      (t.prototype.getReactionTorque = function (e) {
        return e * 0;
      }),
      (t.prototype.shiftOrigin = function (e) {
        this.m_targetA.sub(e);
      }),
      (t.prototype.initVelocityConstraints = function (e) {
        ((this.m_localCenterB = this.m_bodyB.m_sweep.localCenter),
          (this.m_invMassB = this.m_bodyB.m_invMass),
          (this.m_invIB = this.m_bodyB.m_invI));
        var t = this.m_bodyB.c_position,
          n = this.m_bodyB.c_velocity,
          r = t.c,
          i = t.a,
          a = n.v,
          o = n.w,
          s = U.neo(i),
          c = this.m_bodyB.getMass(),
          l = 2 * Ni * this.m_frequencyHz,
          u = 2 * c * this.m_dampingRatio * l,
          d = l * l * c,
          f = e.dt;
        ((this.m_gamma = f * (u + f * d)),
          this.m_gamma != 0 && (this.m_gamma = 1 / this.m_gamma),
          (this.m_beta = f * d * this.m_gamma),
          (this.m_rB = U.mulVec2(
            s,
            j.sub(this.m_localAnchorB, this.m_localCenterB),
          )));
        var p = new Un();
        ((p.ex.x =
          this.m_invMassB +
          this.m_invIB * this.m_rB.y * this.m_rB.y +
          this.m_gamma),
          (p.ex.y = -this.m_invIB * this.m_rB.x * this.m_rB.y),
          (p.ey.x = p.ex.y),
          (p.ey.y =
            this.m_invMassB +
            this.m_invIB * this.m_rB.x * this.m_rB.x +
            this.m_gamma),
          (this.m_mass = p.getInverse()),
          this.m_C.setVec2(r),
          this.m_C.addCombine(1, this.m_rB, -1, this.m_targetA),
          this.m_C.mul(this.m_beta),
          (o *= 0.98),
          e.warmStarting
            ? (this.m_impulse.mul(e.dtRatio),
              a.addMul(this.m_invMassB, this.m_impulse),
              (o += this.m_invIB * j.crossVec2Vec2(this.m_rB, this.m_impulse)))
            : this.m_impulse.setZero(),
          n.v.setVec2(a),
          (n.w = o));
      }),
      (t.prototype.solveVelocityConstraints = function (e) {
        var t = this.m_bodyB.c_velocity,
          n = j.clone(t.v),
          r = t.w,
          i = j.crossNumVec2(r, this.m_rB);
        (i.add(n),
          i.addCombine(1, this.m_C, this.m_gamma, this.m_impulse),
          i.neg());
        var a = Un.mulVec2(this.m_mass, i),
          o = j.clone(this.m_impulse);
        this.m_impulse.add(a);
        var s = e.dt * this.m_maxForce;
        (this.m_impulse.clamp(s),
          (a = j.sub(this.m_impulse, o)),
          n.addMul(this.m_invMassB, a),
          (r += this.m_invIB * j.crossVec2Vec2(this.m_rB, a)),
          t.v.setVec2(n),
          (t.w = r));
      }),
      (t.prototype.solvePositionConstraints = function (e) {
        return !0;
      }),
      (t.TYPE = `mouse-joint`),
      t
    );
  })(It),
  Ii = Math.abs,
  Li = { collideConnected: !0 },
  Ri = (function (e) {
    k(t, e);
    function t(n, r, i, a, o, s, c, l) {
      var u = this;
      return u instanceof t
        ? ((n = re(n, Li)),
          (u = e.call(this, n, r, i) || this),
          (r = u.m_bodyA),
          (i = u.m_bodyB),
          (u.m_type = t.TYPE),
          (u.m_groundAnchorA = j.clone(a || n.groundAnchorA || j.neo(-1, 1))),
          (u.m_groundAnchorB = j.clone(o || n.groundAnchorB || j.neo(1, 1))),
          (u.m_localAnchorA = j.clone(
            s ? r.getLocalPoint(s) : n.localAnchorA || j.neo(-1, 0),
          )),
          (u.m_localAnchorB = j.clone(
            c ? i.getLocalPoint(c) : n.localAnchorB || j.neo(1, 0),
          )),
          (u.m_lengthA = Number.isFinite(n.lengthA)
            ? n.lengthA
            : j.distance(s, a)),
          (u.m_lengthB = Number.isFinite(n.lengthB)
            ? n.lengthB
            : j.distance(c, o)),
          (u.m_ratio = Number.isFinite(l) ? l : n.ratio),
          (u.m_constant = u.m_lengthA + u.m_ratio * u.m_lengthB),
          (u.m_impulse = 0),
          u)
        : new t(n, r, i, a, o, s, c, l);
    }
    return (
      (t.prototype._serialize = function () {
        return {
          type: this.m_type,
          bodyA: this.m_bodyA,
          bodyB: this.m_bodyB,
          collideConnected: this.m_collideConnected,
          groundAnchorA: this.m_groundAnchorA,
          groundAnchorB: this.m_groundAnchorB,
          localAnchorA: this.m_localAnchorA,
          localAnchorB: this.m_localAnchorB,
          lengthA: this.m_lengthA,
          lengthB: this.m_lengthB,
          ratio: this.m_ratio,
        };
      }),
      (t._deserialize = function (e, n, r) {
        return (
          (e = A({}, e)),
          (e.bodyA = r(W, e.bodyA, n)),
          (e.bodyB = r(W, e.bodyB, n)),
          new t(e)
        );
      }),
      (t.prototype._reset = function (e) {
        (j.isValid(e.groundAnchorA) &&
          this.m_groundAnchorA.set(e.groundAnchorA),
          j.isValid(e.groundAnchorB) &&
            this.m_groundAnchorB.set(e.groundAnchorB),
          j.isValid(e.localAnchorA)
            ? this.m_localAnchorA.set(e.localAnchorA)
            : j.isValid(e.anchorA) &&
              this.m_localAnchorA.set(this.m_bodyA.getLocalPoint(e.anchorA)),
          j.isValid(e.localAnchorB)
            ? this.m_localAnchorB.set(e.localAnchorB)
            : j.isValid(e.anchorB) &&
              this.m_localAnchorB.set(this.m_bodyB.getLocalPoint(e.anchorB)),
          Number.isFinite(e.lengthA) && (this.m_lengthA = e.lengthA),
          Number.isFinite(e.lengthB) && (this.m_lengthB = e.lengthB),
          Number.isFinite(e.ratio) && (this.m_ratio = e.ratio));
      }),
      (t.prototype.getGroundAnchorA = function () {
        return this.m_groundAnchorA;
      }),
      (t.prototype.getGroundAnchorB = function () {
        return this.m_groundAnchorB;
      }),
      (t.prototype.getLengthA = function () {
        return this.m_lengthA;
      }),
      (t.prototype.getLengthB = function () {
        return this.m_lengthB;
      }),
      (t.prototype.getRatio = function () {
        return this.m_ratio;
      }),
      (t.prototype.getCurrentLengthA = function () {
        var e = this.m_bodyA.getWorldPoint(this.m_localAnchorA),
          t = this.m_groundAnchorA;
        return j.distance(e, t);
      }),
      (t.prototype.getCurrentLengthB = function () {
        var e = this.m_bodyB.getWorldPoint(this.m_localAnchorB),
          t = this.m_groundAnchorB;
        return j.distance(e, t);
      }),
      (t.prototype.shiftOrigin = function (e) {
        (this.m_groundAnchorA.sub(e), this.m_groundAnchorB.sub(e));
      }),
      (t.prototype.getAnchorA = function () {
        return this.m_bodyA.getWorldPoint(this.m_localAnchorA);
      }),
      (t.prototype.getAnchorB = function () {
        return this.m_bodyB.getWorldPoint(this.m_localAnchorB);
      }),
      (t.prototype.getReactionForce = function (e) {
        return j.mulNumVec2(this.m_impulse, this.m_uB).mul(e);
      }),
      (t.prototype.getReactionTorque = function (e) {
        return 0;
      }),
      (t.prototype.initVelocityConstraints = function (e) {
        ((this.m_localCenterA = this.m_bodyA.m_sweep.localCenter),
          (this.m_localCenterB = this.m_bodyB.m_sweep.localCenter),
          (this.m_invMassA = this.m_bodyA.m_invMass),
          (this.m_invMassB = this.m_bodyB.m_invMass),
          (this.m_invIA = this.m_bodyA.m_invI),
          (this.m_invIB = this.m_bodyB.m_invI));
        var t = this.m_bodyA.c_position.c,
          n = this.m_bodyA.c_position.a,
          r = this.m_bodyA.c_velocity.v,
          i = this.m_bodyA.c_velocity.w,
          a = this.m_bodyB.c_position.c,
          o = this.m_bodyB.c_position.a,
          s = this.m_bodyB.c_velocity.v,
          c = this.m_bodyB.c_velocity.w,
          l = U.neo(n),
          u = U.neo(o);
        ((this.m_rA = U.mulVec2(
          l,
          j.sub(this.m_localAnchorA, this.m_localCenterA),
        )),
          (this.m_rB = U.mulVec2(
            u,
            j.sub(this.m_localAnchorB, this.m_localCenterB),
          )),
          (this.m_uA = j.sub(j.add(t, this.m_rA), this.m_groundAnchorA)),
          (this.m_uB = j.sub(j.add(a, this.m_rB), this.m_groundAnchorB)));
        var d = this.m_uA.length(),
          f = this.m_uB.length();
        (d > 10 * N.linearSlop ? this.m_uA.mul(1 / d) : this.m_uA.setZero(),
          f > 10 * N.linearSlop ? this.m_uB.mul(1 / f) : this.m_uB.setZero());
        var p = j.crossVec2Vec2(this.m_rA, this.m_uA),
          m = j.crossVec2Vec2(this.m_rB, this.m_uB),
          h = this.m_invMassA + this.m_invIA * p * p,
          g = this.m_invMassB + this.m_invIB * m * m;
        if (
          ((this.m_mass = h + this.m_ratio * this.m_ratio * g),
          this.m_mass > 0 && (this.m_mass = 1 / this.m_mass),
          e.warmStarting)
        ) {
          this.m_impulse *= e.dtRatio;
          var _ = j.mulNumVec2(-this.m_impulse, this.m_uA),
            v = j.mulNumVec2(-this.m_ratio * this.m_impulse, this.m_uB);
          (r.addMul(this.m_invMassA, _),
            (i += this.m_invIA * j.crossVec2Vec2(this.m_rA, _)),
            s.addMul(this.m_invMassB, v),
            (c += this.m_invIB * j.crossVec2Vec2(this.m_rB, v)));
        } else this.m_impulse = 0;
        ((this.m_bodyA.c_velocity.v = r),
          (this.m_bodyA.c_velocity.w = i),
          (this.m_bodyB.c_velocity.v = s),
          (this.m_bodyB.c_velocity.w = c));
      }),
      (t.prototype.solveVelocityConstraints = function (e) {
        var t = this.m_bodyA.c_velocity.v,
          n = this.m_bodyA.c_velocity.w,
          r = this.m_bodyB.c_velocity.v,
          i = this.m_bodyB.c_velocity.w,
          a = j.add(t, j.crossNumVec2(n, this.m_rA)),
          o = j.add(r, j.crossNumVec2(i, this.m_rB)),
          s = -j.dot(this.m_uA, a) - this.m_ratio * j.dot(this.m_uB, o),
          c = -this.m_mass * s;
        this.m_impulse += c;
        var l = j.mulNumVec2(-c, this.m_uA),
          u = j.mulNumVec2(-this.m_ratio * c, this.m_uB);
        (t.addMul(this.m_invMassA, l),
          (n += this.m_invIA * j.crossVec2Vec2(this.m_rA, l)),
          r.addMul(this.m_invMassB, u),
          (i += this.m_invIB * j.crossVec2Vec2(this.m_rB, u)),
          (this.m_bodyA.c_velocity.v = t),
          (this.m_bodyA.c_velocity.w = n),
          (this.m_bodyB.c_velocity.v = r),
          (this.m_bodyB.c_velocity.w = i));
      }),
      (t.prototype.solvePositionConstraints = function (e) {
        var t = this.m_bodyA.c_position.c,
          n = this.m_bodyA.c_position.a,
          r = this.m_bodyB.c_position.c,
          i = this.m_bodyB.c_position.a,
          a = U.neo(n),
          o = U.neo(i),
          s = U.mulVec2(a, j.sub(this.m_localAnchorA, this.m_localCenterA)),
          c = U.mulVec2(o, j.sub(this.m_localAnchorB, this.m_localCenterB)),
          l = j.sub(j.add(t, this.m_rA), this.m_groundAnchorA),
          u = j.sub(j.add(r, this.m_rB), this.m_groundAnchorB),
          d = l.length(),
          f = u.length();
        (d > 10 * N.linearSlop ? l.mul(1 / d) : l.setZero(),
          f > 10 * N.linearSlop ? u.mul(1 / f) : u.setZero());
        var p = j.crossVec2Vec2(s, l),
          m = j.crossVec2Vec2(c, u),
          h = this.m_invMassA + this.m_invIA * p * p,
          g = this.m_invMassB + this.m_invIB * m * m,
          _ = h + this.m_ratio * this.m_ratio * g;
        _ > 0 && (_ = 1 / _);
        var v = this.m_constant - d - this.m_ratio * f,
          y = Ii(v),
          b = -_ * v,
          x = j.mulNumVec2(-b, l),
          S = j.mulNumVec2(-this.m_ratio * b, u);
        return (
          t.addMul(this.m_invMassA, x),
          (n += this.m_invIA * j.crossVec2Vec2(s, x)),
          r.addMul(this.m_invMassB, S),
          (i += this.m_invIB * j.crossVec2Vec2(c, S)),
          (this.m_bodyA.c_position.c = t),
          (this.m_bodyA.c_position.a = n),
          (this.m_bodyB.c_position.c = r),
          (this.m_bodyB.c_position.a = i),
          y < N.linearSlop
        );
      }),
      (t.TYPE = `pulley-joint`),
      t
    );
  })(It),
  zi = Math.min,
  Bi;
(function (e) {
  ((e[(e.inactiveLimit = 0)] = `inactiveLimit`),
    (e[(e.atLowerLimit = 1)] = `atLowerLimit`),
    (e[(e.atUpperLimit = 2)] = `atUpperLimit`),
    (e[(e.equalLimits = 3)] = `equalLimits`));
})((Bi ||= {}));
var Vi = { maxLength: 0 },
  Hi = (function (e) {
    k(t, e);
    function t(n, r, i, a) {
      var o = this;
      return o instanceof t
        ? ((n = re(n, Vi)),
          (o = e.call(this, n, r, i) || this),
          (r = o.m_bodyA),
          (i = o.m_bodyB),
          (o.m_type = t.TYPE),
          (o.m_localAnchorA = j.clone(
            a ? r.getLocalPoint(a) : n.localAnchorA || j.neo(-1, 0),
          )),
          (o.m_localAnchorB = j.clone(
            a ? i.getLocalPoint(a) : n.localAnchorB || j.neo(1, 0),
          )),
          (o.m_maxLength = n.maxLength),
          (o.m_mass = 0),
          (o.m_impulse = 0),
          (o.m_length = 0),
          (o.m_state = Bi.inactiveLimit),
          o)
        : new t(n, r, i, a);
    }
    return (
      (t.prototype._serialize = function () {
        return {
          type: this.m_type,
          bodyA: this.m_bodyA,
          bodyB: this.m_bodyB,
          collideConnected: this.m_collideConnected,
          localAnchorA: this.m_localAnchorA,
          localAnchorB: this.m_localAnchorB,
          maxLength: this.m_maxLength,
        };
      }),
      (t._deserialize = function (e, n, r) {
        return (
          (e = A({}, e)),
          (e.bodyA = r(W, e.bodyA, n)),
          (e.bodyB = r(W, e.bodyB, n)),
          new t(e)
        );
      }),
      (t.prototype._reset = function (e) {
        Number.isFinite(e.maxLength) && (this.m_maxLength = e.maxLength);
      }),
      (t.prototype.getLocalAnchorA = function () {
        return this.m_localAnchorA;
      }),
      (t.prototype.getLocalAnchorB = function () {
        return this.m_localAnchorB;
      }),
      (t.prototype.setMaxLength = function (e) {
        this.m_maxLength = e;
      }),
      (t.prototype.getMaxLength = function () {
        return this.m_maxLength;
      }),
      (t.prototype.getLimitState = function () {
        return this.m_state;
      }),
      (t.prototype.getAnchorA = function () {
        return this.m_bodyA.getWorldPoint(this.m_localAnchorA);
      }),
      (t.prototype.getAnchorB = function () {
        return this.m_bodyB.getWorldPoint(this.m_localAnchorB);
      }),
      (t.prototype.getReactionForce = function (e) {
        return j.mulNumVec2(this.m_impulse, this.m_u).mul(e);
      }),
      (t.prototype.getReactionTorque = function (e) {
        return 0;
      }),
      (t.prototype.initVelocityConstraints = function (e) {
        ((this.m_localCenterA = this.m_bodyA.m_sweep.localCenter),
          (this.m_localCenterB = this.m_bodyB.m_sweep.localCenter),
          (this.m_invMassA = this.m_bodyA.m_invMass),
          (this.m_invMassB = this.m_bodyB.m_invMass),
          (this.m_invIA = this.m_bodyA.m_invI),
          (this.m_invIB = this.m_bodyB.m_invI));
        var t = this.m_bodyA.c_position.c,
          n = this.m_bodyA.c_position.a,
          r = this.m_bodyA.c_velocity.v,
          i = this.m_bodyA.c_velocity.w,
          a = this.m_bodyB.c_position.c,
          o = this.m_bodyB.c_position.a,
          s = this.m_bodyB.c_velocity.v,
          c = this.m_bodyB.c_velocity.w,
          l = U.neo(n),
          u = U.neo(o);
        if (
          ((this.m_rA = U.mulSub(l, this.m_localAnchorA, this.m_localCenterA)),
          (this.m_rB = U.mulSub(u, this.m_localAnchorB, this.m_localCenterB)),
          (this.m_u = j.zero()),
          this.m_u.addCombine(1, a, 1, this.m_rB),
          this.m_u.subCombine(1, t, 1, this.m_rA),
          (this.m_length = this.m_u.length()),
          (this.m_state =
            this.m_length - this.m_maxLength > 0
              ? Bi.atUpperLimit
              : Bi.inactiveLimit),
          this.m_length > N.linearSlop)
        )
          this.m_u.mul(1 / this.m_length);
        else {
          (this.m_u.setZero(), (this.m_mass = 0), (this.m_impulse = 0));
          return;
        }
        var d = j.crossVec2Vec2(this.m_rA, this.m_u),
          f = j.crossVec2Vec2(this.m_rB, this.m_u),
          p =
            this.m_invMassA +
            this.m_invIA * d * d +
            this.m_invMassB +
            this.m_invIB * f * f;
        if (((this.m_mass = p == 0 ? 0 : 1 / p), e.warmStarting)) {
          this.m_impulse *= e.dtRatio;
          var m = j.mulNumVec2(this.m_impulse, this.m_u);
          (r.subMul(this.m_invMassA, m),
            (i -= this.m_invIA * j.crossVec2Vec2(this.m_rA, m)),
            s.addMul(this.m_invMassB, m),
            (c += this.m_invIB * j.crossVec2Vec2(this.m_rB, m)));
        } else this.m_impulse = 0;
        (this.m_bodyA.c_velocity.v.setVec2(r),
          (this.m_bodyA.c_velocity.w = i),
          this.m_bodyB.c_velocity.v.setVec2(s),
          (this.m_bodyB.c_velocity.w = c));
      }),
      (t.prototype.solveVelocityConstraints = function (e) {
        var t = this.m_bodyA.c_velocity.v,
          n = this.m_bodyA.c_velocity.w,
          r = this.m_bodyB.c_velocity.v,
          i = this.m_bodyB.c_velocity.w,
          a = j.addCrossNumVec2(t, n, this.m_rA),
          o = j.addCrossNumVec2(r, i, this.m_rB),
          s = this.m_length - this.m_maxLength,
          c = j.dot(this.m_u, j.sub(o, a));
        s < 0 && (c += e.inv_dt * s);
        var l = -this.m_mass * c,
          u = this.m_impulse;
        ((this.m_impulse = zi(0, this.m_impulse + l)),
          (l = this.m_impulse - u));
        var d = j.mulNumVec2(l, this.m_u);
        (t.subMul(this.m_invMassA, d),
          (n -= this.m_invIA * j.crossVec2Vec2(this.m_rA, d)),
          r.addMul(this.m_invMassB, d),
          (i += this.m_invIB * j.crossVec2Vec2(this.m_rB, d)),
          (this.m_bodyA.c_velocity.v = t),
          (this.m_bodyA.c_velocity.w = n),
          (this.m_bodyB.c_velocity.v = r),
          (this.m_bodyB.c_velocity.w = i));
      }),
      (t.prototype.solvePositionConstraints = function (e) {
        var t = this.m_bodyA.c_position.c,
          n = this.m_bodyA.c_position.a,
          r = this.m_bodyB.c_position.c,
          i = this.m_bodyB.c_position.a,
          a = U.neo(n),
          o = U.neo(i),
          s = U.mulSub(a, this.m_localAnchorA, this.m_localCenterA),
          c = U.mulSub(o, this.m_localAnchorB, this.m_localCenterB),
          l = j.zero();
        (l.addCombine(1, r, 1, c), l.subCombine(1, t, 1, s));
        var u = l.normalize(),
          d = u - this.m_maxLength;
        d = ue(d, 0, N.maxLinearCorrection);
        var f = -this.m_mass * d,
          p = j.mulNumVec2(f, l);
        return (
          t.subMul(this.m_invMassA, p),
          (n -= this.m_invIA * j.crossVec2Vec2(s, p)),
          r.addMul(this.m_invMassB, p),
          (i += this.m_invIB * j.crossVec2Vec2(c, p)),
          this.m_bodyA.c_position.c.setVec2(t),
          (this.m_bodyA.c_position.a = n),
          this.m_bodyB.c_position.c.setVec2(r),
          (this.m_bodyB.c_position.a = i),
          u - this.m_maxLength < N.linearSlop
        );
      }),
      (t.TYPE = `rope-joint`),
      t
    );
  })(It),
  Ui = Math.abs,
  Wi = Math.PI,
  Gi = { frequencyHz: 0, dampingRatio: 0 },
  Ki = (function (e) {
    k(t, e);
    function t(n, r, i, a) {
      var o = this;
      return o instanceof t
        ? ((n = re(n, Gi)),
          (o = e.call(this, n, r, i) || this),
          (r = o.m_bodyA),
          (i = o.m_bodyB),
          (o.m_type = t.TYPE),
          (o.m_localAnchorA = j.clone(
            a ? r.getLocalPoint(a) : n.localAnchorA || j.zero(),
          )),
          (o.m_localAnchorB = j.clone(
            a ? i.getLocalPoint(a) : n.localAnchorB || j.zero(),
          )),
          (o.m_referenceAngle = Number.isFinite(n.referenceAngle)
            ? n.referenceAngle
            : i.getAngle() - r.getAngle()),
          (o.m_frequencyHz = n.frequencyHz),
          (o.m_dampingRatio = n.dampingRatio),
          (o.m_impulse = new J()),
          (o.m_bias = 0),
          (o.m_gamma = 0),
          (o.m_mass = new vi()),
          o)
        : new t(n, r, i, a);
    }
    return (
      (t.prototype._serialize = function () {
        return {
          type: this.m_type,
          bodyA: this.m_bodyA,
          bodyB: this.m_bodyB,
          collideConnected: this.m_collideConnected,
          frequencyHz: this.m_frequencyHz,
          dampingRatio: this.m_dampingRatio,
          localAnchorA: this.m_localAnchorA,
          localAnchorB: this.m_localAnchorB,
          referenceAngle: this.m_referenceAngle,
        };
      }),
      (t._deserialize = function (e, n, r) {
        return (
          (e = A({}, e)),
          (e.bodyA = r(W, e.bodyA, n)),
          (e.bodyB = r(W, e.bodyB, n)),
          new t(e)
        );
      }),
      (t.prototype._reset = function (e) {
        (e.anchorA
          ? this.m_localAnchorA.setVec2(this.m_bodyA.getLocalPoint(e.anchorA))
          : e.localAnchorA && this.m_localAnchorA.setVec2(e.localAnchorA),
          e.anchorB
            ? this.m_localAnchorB.setVec2(this.m_bodyB.getLocalPoint(e.anchorB))
            : e.localAnchorB && this.m_localAnchorB.setVec2(e.localAnchorB),
          Number.isFinite(e.frequencyHz) &&
            (this.m_frequencyHz = e.frequencyHz),
          Number.isFinite(e.dampingRatio) &&
            (this.m_dampingRatio = e.dampingRatio));
      }),
      (t.prototype.getLocalAnchorA = function () {
        return this.m_localAnchorA;
      }),
      (t.prototype.getLocalAnchorB = function () {
        return this.m_localAnchorB;
      }),
      (t.prototype.getReferenceAngle = function () {
        return this.m_referenceAngle;
      }),
      (t.prototype.setFrequency = function (e) {
        this.m_frequencyHz = e;
      }),
      (t.prototype.getFrequency = function () {
        return this.m_frequencyHz;
      }),
      (t.prototype.setDampingRatio = function (e) {
        this.m_dampingRatio = e;
      }),
      (t.prototype.getDampingRatio = function () {
        return this.m_dampingRatio;
      }),
      (t.prototype.getAnchorA = function () {
        return this.m_bodyA.getWorldPoint(this.m_localAnchorA);
      }),
      (t.prototype.getAnchorB = function () {
        return this.m_bodyB.getWorldPoint(this.m_localAnchorB);
      }),
      (t.prototype.getReactionForce = function (e) {
        return j.neo(this.m_impulse.x, this.m_impulse.y).mul(e);
      }),
      (t.prototype.getReactionTorque = function (e) {
        return e * this.m_impulse.z;
      }),
      (t.prototype.initVelocityConstraints = function (e) {
        ((this.m_localCenterA = this.m_bodyA.m_sweep.localCenter),
          (this.m_localCenterB = this.m_bodyB.m_sweep.localCenter),
          (this.m_invMassA = this.m_bodyA.m_invMass),
          (this.m_invMassB = this.m_bodyB.m_invMass),
          (this.m_invIA = this.m_bodyA.m_invI),
          (this.m_invIB = this.m_bodyB.m_invI));
        var t = this.m_bodyA.c_position.a,
          n = this.m_bodyA.c_velocity.v,
          r = this.m_bodyA.c_velocity.w,
          i = this.m_bodyB.c_position.a,
          a = this.m_bodyB.c_velocity.v,
          o = this.m_bodyB.c_velocity.w,
          s = U.neo(t),
          c = U.neo(i);
        ((this.m_rA = U.mulVec2(
          s,
          j.sub(this.m_localAnchorA, this.m_localCenterA),
        )),
          (this.m_rB = U.mulVec2(
            c,
            j.sub(this.m_localAnchorB, this.m_localCenterB),
          )));
        var l = this.m_invMassA,
          u = this.m_invMassB,
          d = this.m_invIA,
          f = this.m_invIB,
          p = new vi();
        if (
          ((p.ex.x =
            l +
            u +
            this.m_rA.y * this.m_rA.y * d +
            this.m_rB.y * this.m_rB.y * f),
          (p.ey.x =
            -this.m_rA.y * this.m_rA.x * d - this.m_rB.y * this.m_rB.x * f),
          (p.ez.x = -this.m_rA.y * d - this.m_rB.y * f),
          (p.ex.y = p.ey.x),
          (p.ey.y =
            l +
            u +
            this.m_rA.x * this.m_rA.x * d +
            this.m_rB.x * this.m_rB.x * f),
          (p.ez.y = this.m_rA.x * d + this.m_rB.x * f),
          (p.ex.z = p.ez.x),
          (p.ey.z = p.ez.y),
          (p.ez.z = d + f),
          this.m_frequencyHz > 0)
        ) {
          p.getInverse22(this.m_mass);
          var m = d + f,
            h = m > 0 ? 1 / m : 0,
            g = i - t - this.m_referenceAngle,
            _ = 2 * Wi * this.m_frequencyHz,
            v = 2 * h * this.m_dampingRatio * _,
            y = h * _ * _,
            b = e.dt;
          ((this.m_gamma = b * (v + b * y)),
            (this.m_gamma = this.m_gamma == 0 ? 0 : 1 / this.m_gamma),
            (this.m_bias = g * b * y * this.m_gamma),
            (m += this.m_gamma),
            (this.m_mass.ez.z = m == 0 ? 0 : 1 / m));
        } else
          p.ez.z == 0
            ? (p.getInverse22(this.m_mass),
              (this.m_gamma = 0),
              (this.m_bias = 0))
            : (p.getSymInverse33(this.m_mass),
              (this.m_gamma = 0),
              (this.m_bias = 0));
        if (e.warmStarting) {
          this.m_impulse.mul(e.dtRatio);
          var x = j.neo(this.m_impulse.x, this.m_impulse.y);
          (n.subMul(l, x),
            (r -= d * (j.crossVec2Vec2(this.m_rA, x) + this.m_impulse.z)),
            a.addMul(u, x),
            (o += f * (j.crossVec2Vec2(this.m_rB, x) + this.m_impulse.z)));
        } else this.m_impulse.setZero();
        ((this.m_bodyA.c_velocity.v = n),
          (this.m_bodyA.c_velocity.w = r),
          (this.m_bodyB.c_velocity.v = a),
          (this.m_bodyB.c_velocity.w = o));
      }),
      (t.prototype.solveVelocityConstraints = function (e) {
        var t = this.m_bodyA.c_velocity.v,
          n = this.m_bodyA.c_velocity.w,
          r = this.m_bodyB.c_velocity.v,
          i = this.m_bodyB.c_velocity.w,
          a = this.m_invMassA,
          o = this.m_invMassB,
          s = this.m_invIA,
          c = this.m_invIB;
        if (this.m_frequencyHz > 0) {
          var l = i - n,
            u =
              -this.m_mass.ez.z *
              (l + this.m_bias + this.m_gamma * this.m_impulse.z);
          ((this.m_impulse.z += u), (n -= s * u), (i += c * u));
          var d = j.zero();
          (d.addCombine(1, r, 1, j.crossNumVec2(i, this.m_rB)),
            d.subCombine(1, t, 1, j.crossNumVec2(n, this.m_rA)));
          var f = j.neg(vi.mulVec2(this.m_mass, d));
          ((this.m_impulse.x += f.x), (this.m_impulse.y += f.y));
          var p = j.clone(f);
          (t.subMul(a, p),
            (n -= s * j.crossVec2Vec2(this.m_rA, p)),
            r.addMul(o, p),
            (i += c * j.crossVec2Vec2(this.m_rB, p)));
        } else {
          var d = j.zero();
          (d.addCombine(1, r, 1, j.crossNumVec2(i, this.m_rB)),
            d.subCombine(1, t, 1, j.crossNumVec2(n, this.m_rA)));
          var l = i - n,
            m = new J(d.x, d.y, l),
            h = J.neg(vi.mulVec3(this.m_mass, m));
          this.m_impulse.add(h);
          var p = j.neo(h.x, h.y);
          (t.subMul(a, p),
            (n -= s * (j.crossVec2Vec2(this.m_rA, p) + h.z)),
            r.addMul(o, p),
            (i += c * (j.crossVec2Vec2(this.m_rB, p) + h.z)));
        }
        ((this.m_bodyA.c_velocity.v = t),
          (this.m_bodyA.c_velocity.w = n),
          (this.m_bodyB.c_velocity.v = r),
          (this.m_bodyB.c_velocity.w = i));
      }),
      (t.prototype.solvePositionConstraints = function (e) {
        var t = this.m_bodyA.c_position.c,
          n = this.m_bodyA.c_position.a,
          r = this.m_bodyB.c_position.c,
          i = this.m_bodyB.c_position.a,
          a = U.neo(n),
          o = U.neo(i),
          s = this.m_invMassA,
          c = this.m_invMassB,
          l = this.m_invIA,
          u = this.m_invIB,
          d = U.mulVec2(a, j.sub(this.m_localAnchorA, this.m_localCenterA)),
          f = U.mulVec2(o, j.sub(this.m_localAnchorB, this.m_localCenterB)),
          p,
          m,
          h = new vi();
        if (
          ((h.ex.x = s + c + d.y * d.y * l + f.y * f.y * u),
          (h.ey.x = -d.y * d.x * l - f.y * f.x * u),
          (h.ez.x = -d.y * l - f.y * u),
          (h.ex.y = h.ey.x),
          (h.ey.y = s + c + d.x * d.x * l + f.x * f.x * u),
          (h.ez.y = d.x * l + f.x * u),
          (h.ex.z = h.ez.x),
          (h.ey.z = h.ez.y),
          (h.ez.z = l + u),
          this.m_frequencyHz > 0)
        ) {
          var g = j.zero();
          (g.addCombine(1, r, 1, f),
            g.subCombine(1, t, 1, d),
            (p = g.length()),
            (m = 0));
          var _ = j.neg(h.solve22(g));
          (t.subMul(s, _),
            (n -= l * j.crossVec2Vec2(d, _)),
            r.addMul(c, _),
            (i += u * j.crossVec2Vec2(f, _)));
        } else {
          var g = j.zero();
          (g.addCombine(1, r, 1, f), g.subCombine(1, t, 1, d));
          var v = i - n - this.m_referenceAngle;
          ((p = g.length()), (m = Ui(v)));
          var y = new J(g.x, g.y, v),
            b = new J();
          if (h.ez.z > 0) b = J.neg(h.solve33(y));
          else {
            var x = j.neg(h.solve22(g));
            b.set(x.x, x.y, 0);
          }
          var _ = j.neo(b.x, b.y);
          (t.subMul(s, _),
            (n -= l * (j.crossVec2Vec2(d, _) + b.z)),
            r.addMul(c, _),
            (i += u * (j.crossVec2Vec2(f, _) + b.z)));
        }
        return (
          (this.m_bodyA.c_position.c = t),
          (this.m_bodyA.c_position.a = n),
          (this.m_bodyB.c_position.c = r),
          (this.m_bodyB.c_position.a = i),
          p <= N.linearSlop && m <= N.angularSlop
        );
      }),
      (t.TYPE = `weld-joint`),
      t
    );
  })(It),
  qi = Math.abs,
  Ji = Math.PI,
  Yi = {
    enableMotor: !1,
    maxMotorTorque: 0,
    motorSpeed: 0,
    frequencyHz: 2,
    dampingRatio: 0.7,
  },
  Xi = (function (e) {
    k(t, e);
    function t(n, r, i, a, o) {
      var s = this;
      return s instanceof t
        ? ((n = re(n, Yi)),
          (s = e.call(this, n, r, i) || this),
          (r = s.m_bodyA),
          (i = s.m_bodyB),
          (s.m_ax = j.zero()),
          (s.m_ay = j.zero()),
          (s.m_type = t.TYPE),
          (s.m_localAnchorA = j.clone(
            a ? r.getLocalPoint(a) : n.localAnchorA || j.zero(),
          )),
          (s.m_localAnchorB = j.clone(
            a ? i.getLocalPoint(a) : n.localAnchorB || j.zero(),
          )),
          j.isValid(o)
            ? (s.m_localXAxisA = r.getLocalVector(o))
            : j.isValid(n.localAxisA)
              ? (s.m_localXAxisA = j.clone(n.localAxisA))
              : j.isValid(n.localAxis)
                ? (s.m_localXAxisA = j.clone(n.localAxis))
                : (s.m_localXAxisA = j.neo(1, 0)),
          (s.m_localYAxisA = j.crossNumVec2(1, s.m_localXAxisA)),
          (s.m_mass = 0),
          (s.m_impulse = 0),
          (s.m_motorMass = 0),
          (s.m_motorImpulse = 0),
          (s.m_springMass = 0),
          (s.m_springImpulse = 0),
          (s.m_maxMotorTorque = n.maxMotorTorque),
          (s.m_motorSpeed = n.motorSpeed),
          (s.m_enableMotor = n.enableMotor),
          (s.m_frequencyHz = n.frequencyHz),
          (s.m_dampingRatio = n.dampingRatio),
          (s.m_bias = 0),
          (s.m_gamma = 0),
          s)
        : new t(n, r, i, a, o);
    }
    return (
      (t.prototype._serialize = function () {
        return {
          type: this.m_type,
          bodyA: this.m_bodyA,
          bodyB: this.m_bodyB,
          collideConnected: this.m_collideConnected,
          enableMotor: this.m_enableMotor,
          maxMotorTorque: this.m_maxMotorTorque,
          motorSpeed: this.m_motorSpeed,
          frequencyHz: this.m_frequencyHz,
          dampingRatio: this.m_dampingRatio,
          localAnchorA: this.m_localAnchorA,
          localAnchorB: this.m_localAnchorB,
          localAxisA: this.m_localXAxisA,
        };
      }),
      (t._deserialize = function (e, n, r) {
        return (
          (e = A({}, e)),
          (e.bodyA = r(W, e.bodyA, n)),
          (e.bodyB = r(W, e.bodyB, n)),
          new t(e)
        );
      }),
      (t.prototype._reset = function (e) {
        (e.anchorA
          ? this.m_localAnchorA.setVec2(this.m_bodyA.getLocalPoint(e.anchorA))
          : e.localAnchorA && this.m_localAnchorA.setVec2(e.localAnchorA),
          e.anchorB
            ? this.m_localAnchorB.setVec2(this.m_bodyB.getLocalPoint(e.anchorB))
            : e.localAnchorB && this.m_localAnchorB.setVec2(e.localAnchorB),
          e.localAxisA &&
            (this.m_localXAxisA.setVec2(e.localAxisA),
            this.m_localYAxisA.setVec2(j.crossNumVec2(1, e.localAxisA))),
          e.enableMotor !== void 0 && (this.m_enableMotor = e.enableMotor),
          Number.isFinite(e.maxMotorTorque) &&
            (this.m_maxMotorTorque = e.maxMotorTorque),
          Number.isFinite(e.motorSpeed) && (this.m_motorSpeed = e.motorSpeed),
          Number.isFinite(e.frequencyHz) &&
            (this.m_frequencyHz = e.frequencyHz),
          Number.isFinite(e.dampingRatio) &&
            (this.m_dampingRatio = e.dampingRatio));
      }),
      (t.prototype.getLocalAnchorA = function () {
        return this.m_localAnchorA;
      }),
      (t.prototype.getLocalAnchorB = function () {
        return this.m_localAnchorB;
      }),
      (t.prototype.getLocalAxisA = function () {
        return this.m_localXAxisA;
      }),
      (t.prototype.getJointTranslation = function () {
        var e = this.m_bodyA,
          t = this.m_bodyB,
          n = e.getWorldPoint(this.m_localAnchorA),
          r = t.getWorldPoint(this.m_localAnchorB),
          i = j.sub(r, n),
          a = e.getWorldVector(this.m_localXAxisA);
        return j.dot(i, a);
      }),
      (t.prototype.getJointSpeed = function () {
        var e = this.m_bodyA.m_angularVelocity;
        return this.m_bodyB.m_angularVelocity - e;
      }),
      (t.prototype.isMotorEnabled = function () {
        return this.m_enableMotor;
      }),
      (t.prototype.enableMotor = function (e) {
        e != this.m_enableMotor &&
          (this.m_bodyA.setAwake(!0),
          this.m_bodyB.setAwake(!0),
          (this.m_enableMotor = e));
      }),
      (t.prototype.setMotorSpeed = function (e) {
        e != this.m_motorSpeed &&
          (this.m_bodyA.setAwake(!0),
          this.m_bodyB.setAwake(!0),
          (this.m_motorSpeed = e));
      }),
      (t.prototype.getMotorSpeed = function () {
        return this.m_motorSpeed;
      }),
      (t.prototype.setMaxMotorTorque = function (e) {
        e != this.m_maxMotorTorque &&
          (this.m_bodyA.setAwake(!0),
          this.m_bodyB.setAwake(!0),
          (this.m_maxMotorTorque = e));
      }),
      (t.prototype.getMaxMotorTorque = function () {
        return this.m_maxMotorTorque;
      }),
      (t.prototype.getMotorTorque = function (e) {
        return e * this.m_motorImpulse;
      }),
      (t.prototype.setSpringFrequencyHz = function (e) {
        this.m_frequencyHz = e;
      }),
      (t.prototype.getSpringFrequencyHz = function () {
        return this.m_frequencyHz;
      }),
      (t.prototype.setSpringDampingRatio = function (e) {
        this.m_dampingRatio = e;
      }),
      (t.prototype.getSpringDampingRatio = function () {
        return this.m_dampingRatio;
      }),
      (t.prototype.getAnchorA = function () {
        return this.m_bodyA.getWorldPoint(this.m_localAnchorA);
      }),
      (t.prototype.getAnchorB = function () {
        return this.m_bodyB.getWorldPoint(this.m_localAnchorB);
      }),
      (t.prototype.getReactionForce = function (e) {
        return j
          .combine(this.m_impulse, this.m_ay, this.m_springImpulse, this.m_ax)
          .mul(e);
      }),
      (t.prototype.getReactionTorque = function (e) {
        return e * this.m_motorImpulse;
      }),
      (t.prototype.initVelocityConstraints = function (e) {
        ((this.m_localCenterA = this.m_bodyA.m_sweep.localCenter),
          (this.m_localCenterB = this.m_bodyB.m_sweep.localCenter),
          (this.m_invMassA = this.m_bodyA.m_invMass),
          (this.m_invMassB = this.m_bodyB.m_invMass),
          (this.m_invIA = this.m_bodyA.m_invI),
          (this.m_invIB = this.m_bodyB.m_invI));
        var t = this.m_invMassA,
          n = this.m_invMassB,
          r = this.m_invIA,
          i = this.m_invIB,
          a = this.m_bodyA.c_position.c,
          o = this.m_bodyA.c_position.a,
          s = this.m_bodyA.c_velocity.v,
          c = this.m_bodyA.c_velocity.w,
          l = this.m_bodyB.c_position.c,
          u = this.m_bodyB.c_position.a,
          d = this.m_bodyB.c_velocity.v,
          f = this.m_bodyB.c_velocity.w,
          p = U.neo(o),
          m = U.neo(u),
          h = U.mulVec2(p, j.sub(this.m_localAnchorA, this.m_localCenterA)),
          g = U.mulVec2(m, j.sub(this.m_localAnchorB, this.m_localCenterB)),
          _ = j.zero();
        if (
          (_.addCombine(1, l, 1, g),
          _.subCombine(1, a, 1, h),
          (this.m_ay = U.mulVec2(p, this.m_localYAxisA)),
          (this.m_sAy = j.crossVec2Vec2(j.add(_, h), this.m_ay)),
          (this.m_sBy = j.crossVec2Vec2(g, this.m_ay)),
          (this.m_mass =
            t + n + r * this.m_sAy * this.m_sAy + i * this.m_sBy * this.m_sBy),
          this.m_mass > 0 && (this.m_mass = 1 / this.m_mass),
          (this.m_springMass = 0),
          (this.m_bias = 0),
          (this.m_gamma = 0),
          this.m_frequencyHz > 0)
        ) {
          ((this.m_ax = U.mulVec2(p, this.m_localXAxisA)),
            (this.m_sAx = j.crossVec2Vec2(j.add(_, h), this.m_ax)),
            (this.m_sBx = j.crossVec2Vec2(g, this.m_ax)));
          var v =
            t + n + r * this.m_sAx * this.m_sAx + i * this.m_sBx * this.m_sBx;
          if (v > 0) {
            this.m_springMass = 1 / v;
            var y = j.dot(_, this.m_ax),
              b = 2 * Ji * this.m_frequencyHz,
              x = 2 * this.m_springMass * this.m_dampingRatio * b,
              S = this.m_springMass * b * b,
              C = e.dt;
            ((this.m_gamma = C * (x + C * S)),
              this.m_gamma > 0 && (this.m_gamma = 1 / this.m_gamma),
              (this.m_bias = y * C * S * this.m_gamma),
              (this.m_springMass = v + this.m_gamma),
              this.m_springMass > 0 &&
                (this.m_springMass = 1 / this.m_springMass));
          }
        } else this.m_springImpulse = 0;
        if (
          (this.m_enableMotor
            ? ((this.m_motorMass = r + i),
              this.m_motorMass > 0 && (this.m_motorMass = 1 / this.m_motorMass))
            : ((this.m_motorMass = 0), (this.m_motorImpulse = 0)),
          e.warmStarting)
        ) {
          ((this.m_impulse *= e.dtRatio),
            (this.m_springImpulse *= e.dtRatio),
            (this.m_motorImpulse *= e.dtRatio));
          var w = j.combine(
              this.m_impulse,
              this.m_ay,
              this.m_springImpulse,
              this.m_ax,
            ),
            T =
              this.m_impulse * this.m_sAy +
              this.m_springImpulse * this.m_sAx +
              this.m_motorImpulse,
            E =
              this.m_impulse * this.m_sBy +
              this.m_springImpulse * this.m_sBx +
              this.m_motorImpulse;
          (s.subMul(this.m_invMassA, w),
            (c -= this.m_invIA * T),
            d.addMul(this.m_invMassB, w),
            (f += this.m_invIB * E));
        } else
          ((this.m_impulse = 0),
            (this.m_springImpulse = 0),
            (this.m_motorImpulse = 0));
        (this.m_bodyA.c_velocity.v.setVec2(s),
          (this.m_bodyA.c_velocity.w = c),
          this.m_bodyB.c_velocity.v.setVec2(d),
          (this.m_bodyB.c_velocity.w = f));
      }),
      (t.prototype.solveVelocityConstraints = function (e) {
        var t = this.m_invMassA,
          n = this.m_invMassB,
          r = this.m_invIA,
          i = this.m_invIB,
          a = this.m_bodyA.c_velocity.v,
          o = this.m_bodyA.c_velocity.w,
          s = this.m_bodyB.c_velocity.v,
          c = this.m_bodyB.c_velocity.w,
          l =
            j.dot(this.m_ax, s) -
            j.dot(this.m_ax, a) +
            this.m_sBx * c -
            this.m_sAx * o,
          u =
            -this.m_springMass *
            (l + this.m_bias + this.m_gamma * this.m_springImpulse);
        this.m_springImpulse += u;
        var d = j.mulNumVec2(u, this.m_ax),
          f = u * this.m_sAx,
          p = u * this.m_sBx;
        (a.subMul(t, d), (o -= r * f), s.addMul(n, d), (c += i * p));
        var l = c - o - this.m_motorSpeed,
          u = -this.m_motorMass * l,
          m = this.m_motorImpulse,
          h = e.dt * this.m_maxMotorTorque;
        ((this.m_motorImpulse = ue(this.m_motorImpulse + u, -h, h)),
          (u = this.m_motorImpulse - m),
          (o -= r * u),
          (c += i * u));
        var l =
            j.dot(this.m_ay, s) -
            j.dot(this.m_ay, a) +
            this.m_sBy * c -
            this.m_sAy * o,
          u = -this.m_mass * l;
        this.m_impulse += u;
        var d = j.mulNumVec2(u, this.m_ay),
          f = u * this.m_sAy,
          p = u * this.m_sBy;
        (a.subMul(t, d),
          (o -= r * f),
          s.addMul(n, d),
          (c += i * p),
          this.m_bodyA.c_velocity.v.setVec2(a),
          (this.m_bodyA.c_velocity.w = o),
          this.m_bodyB.c_velocity.v.setVec2(s),
          (this.m_bodyB.c_velocity.w = c));
      }),
      (t.prototype.solvePositionConstraints = function (e) {
        var t = this.m_bodyA.c_position.c,
          n = this.m_bodyA.c_position.a,
          r = this.m_bodyB.c_position.c,
          i = this.m_bodyB.c_position.a,
          a = U.neo(n),
          o = U.neo(i),
          s = U.mulVec2(a, j.sub(this.m_localAnchorA, this.m_localCenterA)),
          c = U.mulVec2(o, j.sub(this.m_localAnchorB, this.m_localCenterB)),
          l = j.zero();
        (l.addCombine(1, r, 1, c), l.subCombine(1, t, 1, s));
        var u = U.mulVec2(a, this.m_localYAxisA),
          d = j.crossVec2Vec2(j.add(l, s), u),
          f = j.crossVec2Vec2(c, u),
          p = j.dot(l, u),
          m =
            this.m_invMassA +
            this.m_invMassB +
            this.m_invIA * this.m_sAy * this.m_sAy +
            this.m_invIB * this.m_sBy * this.m_sBy,
          h = m == 0 ? 0 : -p / m,
          g = j.mulNumVec2(h, u),
          _ = h * d,
          v = h * f;
        return (
          t.subMul(this.m_invMassA, g),
          (n -= this.m_invIA * _),
          r.addMul(this.m_invMassB, g),
          (i += this.m_invIB * v),
          this.m_bodyA.c_position.c.setVec2(t),
          (this.m_bodyA.c_position.a = n),
          this.m_bodyB.c_position.c.setVec2(r),
          (this.m_bodyB.c_position.a = i),
          qi(p) <= N.linearSlop
        );
      }),
      (t.TYPE = `wheel-joint`),
      t
    );
  })(It),
  Zi,
  Qi = 0,
  $i = { World: Gr, Body: W, Joint: It, Fixture: Tt, Shape: yt },
  ea = {
    Vec2: j,
    Vec3: J,
    World: Gr,
    Body: W,
    Joint: It,
    Fixture: Tt,
    Shape: yt,
  },
  ta =
    ((Zi = {}),
    (Zi[W.STATIC] = W),
    (Zi[W.DYNAMIC] = W),
    (Zi[W.KINEMATIC] = W),
    (Zi[Zr.TYPE] = Zr),
    (Zi[oi.TYPE] = oi),
    (Zi[Jr.TYPE] = Jr),
    (Zi[di.TYPE] = di),
    (Zi[hi.TYPE] = hi),
    (Zi[_i.TYPE] = _i),
    (Zi[Ai.TYPE] = Ai),
    (Zi[Mi.TYPE] = Mi),
    (Zi[Fi.TYPE] = Fi),
    (Zi[Oi.TYPE] = Oi),
    (Zi[Ri.TYPE] = Ri),
    (Zi[Si.TYPE] = Si),
    (Zi[Hi.TYPE] = Hi),
    (Zi[Ki.TYPE] = Ki),
    (Zi[Xi.TYPE] = Xi),
    Zi),
  na = {
    rootClass: Gr,
    preSerialize: function (e) {
      return e;
    },
    postSerialize: function (e, t) {
      return e;
    },
    preDeserialize: function (e) {
      return e;
    },
    postDeserialize: function (e, t) {
      return e;
    },
  },
  ra = (function () {
    function e(e) {
      var t = this;
      ((this.toJson = function (e) {
        var n = t.options.preSerialize,
          r = t.options.postSerialize,
          i = [],
          a = [e],
          o = {};
        function s(e, t) {
          if (((e.__sid = e.__sid || ++Qi), !o[e.__sid])) {
            a.push(e);
            var n = { refIndex: i.length + a.length, refType: t };
            o[e.__sid] = n;
          }
          return o[e.__sid];
        }
        function c(e) {
          e = n(e);
          var t = e._serialize();
          return ((t = r(t, e)), t);
        }
        function l(e, t) {
          if ((t === void 0 && (t = !1), typeof e != `object` || !e)) return e;
          if (typeof e._serialize == `function`) {
            if (!t) {
              for (var n in $i) if (e instanceof $i[n]) return s(e, n);
            }
            e = c(e);
          }
          if (Array.isArray(e)) {
            for (var r = [], i = 0; i < e.length; i++) r[i] = l(e[i]);
            e = r;
          } else {
            var r = {};
            for (var i in e) e.hasOwnProperty(i) && (r[i] = l(e[i]));
            e = r;
          }
          return e;
        }
        for (; a.length;) {
          var u = l(a.shift(), !0);
          i.push(u);
        }
        return i;
      }),
        (this.fromJson = function (e) {
          var n = t.options.preDeserialize,
            r = t.options.postDeserialize,
            i = t.options.rootClass,
            a = {};
          function o(e, t, i) {
            if (
              ((!e || !e._deserialize) && (e = ta[t.type]), e && e._deserialize)
            ) {
              t = n(t);
              var a = e._deserialize,
                o = a(t, i, s);
              return ((o = r(o, t)), o);
            }
          }
          function s(t, n, r) {
            if (!(n.refIndex && n.refType)) return o(t, n, r);
            var i = n;
            ea[i.refType] && (t = ea[i.refType]);
            var s = i.refIndex;
            if (!a[s]) {
              var c = e[s];
              a[s] = o(t, c, r);
            }
            return a[s];
          }
          return o(i, e[0], null);
        }),
        (this.options = A(A({}, na), e)));
    }
    return e;
  })(),
  ia = new ra({ rootClass: Gr });
((ra.fromJson = ia.fromJson),
  (ra.toJson = ia.toJson),
  (function () {
    function e() {}
    return (
      (e.mount = function (e) {
        throw Error(`Not implemented`);
      }),
      (e.start = function (t) {
        var n = e.mount();
        return (n.start(t), n);
      }),
      e
    );
  })());
var aa = (function (e) {
  k(t, e);
  function t(n, r, i, a) {
    var o = this;
    return o instanceof t
      ? ((o = e.call(this) || this), o._setAsBox(n, r, i, a), o)
      : new t(n, r, i, a);
  }
  return ((t.TYPE = `polygon`), t);
})(oi);
Ur.addType(di.TYPE, di.TYPE, oa);
function oa(e, t, n, r, i, a, o) {
  la(e, n.getShape(), t, a.getShape(), i);
}
var sa = P(0, 0),
  ca = P(0, 0),
  la = function (e, t, n, r, i) {
    ((e.pointCount = 0), H(sa, n, t.m_p), H(ca, i, r.m_p));
    var a = Xe(ca, sa),
      o = t.m_radius + r.m_radius;
    a > o * o ||
      ((e.type = $n.e_circles),
      F(e.localPoint, t.m_p),
      I(e.localNormal),
      (e.pointCount = 1),
      F(e.points[0].localPoint, r.m_p),
      e.points[0].id.setFeatures(0, G.e_vertex, 0, G.e_vertex));
  };
(Ur.addType(Jr.TYPE, di.TYPE, ua), Ur.addType(Zr.TYPE, di.TYPE, da));
function ua(e, t, n, r, i, a, o) {
  va(e, n.getShape(), t, a.getShape(), i);
}
function da(e, t, n, r, i, a, o) {
  var s = n.getShape(),
    c = new Jr();
  (s.getChildEdge(c, r), va(e, c, t, a.getShape(), i));
}
var fa = P(0, 0),
  pa = P(0, 0),
  ma = P(0, 0),
  ha = P(0, 0),
  ga = P(0, 0),
  _a = P(0, 0),
  va = function (e, t, n, r, i) {
    ((e.pointCount = 0), it(ha, i, n, r.m_p));
    var a = t.m_vertex1,
      o = t.m_vertex2;
    L(fa, o, a);
    var s = V(fa, o) - V(fa, ha),
      c = V(fa, ha) - V(fa, a),
      l = t.m_radius + r.m_radius;
    if (c <= 0) {
      if ((F(ga, a), Xe(ha, a) > l * l)) return;
      if (t.m_hasVertex0) {
        var u = t.m_vertex0,
          d = a;
        if ((L(pa, d, u), V(pa, d) - V(pa, ha) > 0)) return;
      }
      ((e.type = $n.e_circles),
        I(e.localNormal),
        F(e.localPoint, ga),
        (e.pointCount = 1),
        F(e.points[0].localPoint, r.m_p),
        e.points[0].id.setFeatures(0, G.e_vertex, 0, G.e_vertex));
      return;
    }
    if (s <= 0) {
      if ((F(ga, o), Xe(ha, ga) > l * l)) return;
      if (t.m_hasVertex3) {
        var f = t.m_vertex3,
          p = o;
        if ((L(ma, f, p), V(ma, ha) - V(ma, p) > 0)) return;
      }
      ((e.type = $n.e_circles),
        I(e.localNormal),
        F(e.localPoint, ga),
        (e.pointCount = 1),
        F(e.points[0].localPoint, r.m_p),
        e.points[0].id.setFeatures(1, G.e_vertex, 0, G.e_vertex));
      return;
    }
    var m = Je(fa);
    (z(ga, s / m, a, c / m, o),
      !(Xe(ha, ga) > l * l) &&
        (qe(_a, 1, fa),
        V(_a, ha) - V(_a, a) < 0 && Ie(_a),
        Ge(_a),
        (e.type = $n.e_faceA),
        F(e.localNormal, _a),
        F(e.localPoint, a),
        (e.pointCount = 1),
        F(e.points[0].localPoint, r.m_p),
        e.points[0].id.setFeatures(0, G.e_face, 0, G.e_vertex)));
  },
  ya = [new tr(), new tr()],
  ba = [new tr(), new tr()],
  xa = [new tr(), new tr()],
  Sa = P(0, 0),
  Ca = P(0, 0),
  wa = P(0, 0),
  Ta = tt(0, 0, 0),
  Ea = P(0, 0),
  Da = P(0, 0),
  Oa = P(0, 0),
  ka = P(0, 0),
  Aa = P(0, 0),
  ja = P(0, 0),
  Ma = P(0, 0),
  Na = P(0, 0);
Ur.addType(oi.TYPE, oi.TYPE, Pa);
function Pa(e, t, n, r, i, a, o) {
  Ra(e, n.getShape(), t, a.getShape(), i);
}
function Fa(e, t, n, r, i) {
  var a = e.m_count,
    o = n.m_count,
    s = e.m_normals,
    c = e.m_vertices,
    l = n.m_vertices;
  at(Ta, r, t);
  for (var u = 0, d = -1 / 0, f = 0; f < a; ++f) {
    (Qe(wa, Ta.q, s[f]), H(Ca, Ta, c[f]));
    for (var p = 1 / 0, m = 0; m < o; ++m) {
      var h = V(wa, l[m]) - V(wa, Ca);
      h < p && (p = h);
    }
    p > d && ((d = p), (u = f));
  }
  ((i.maxSeparation = d), (i.bestIndex = u));
}
function Ia(e, t, n, r, i, a) {
  var o = t.m_normals,
    s = i.m_count,
    c = i.m_vertices,
    l = i.m_normals;
  et(Na, a.q, n.q, o[r]);
  for (var u = 0, d = 1 / 0, f = 0; f < s; ++f) {
    var p = V(Na, l[f]);
    p < d && ((d = p), (u = f));
  }
  var m = u,
    h = m + 1 < s ? m + 1 : 0;
  (H(e[0].v, a, c[m]),
    e[0].id.setFeatures(r, G.e_face, m, G.e_vertex),
    H(e[1].v, a, c[h]),
    e[1].id.setFeatures(r, G.e_face, h, G.e_vertex));
}
var La = { maxSeparation: 0, bestIndex: 0 },
  Ra = function (e, t, n, r, i) {
    e.pointCount = 0;
    var a = t.m_radius + r.m_radius;
    Fa(t, n, r, i, La);
    var o = La.bestIndex,
      s = La.maxSeparation;
    if (!(s > a)) {
      Fa(r, i, t, n, La);
      var c = La.bestIndex,
        l = La.maxSeparation;
      if (!(l > a)) {
        var u, d, f, p, m, h;
        (l > s + 0.1 * N.linearSlop
          ? ((u = r),
            (d = t),
            (f = i),
            (p = n),
            (m = c),
            (e.type = $n.e_faceB),
            (h = !0))
          : ((u = t),
            (d = r),
            (f = n),
            (p = i),
            (m = o),
            (e.type = $n.e_faceA),
            (h = !1)),
          ya[0].recycle(),
          ya[1].recycle(),
          Ia(ya, u, f, m, d, p));
        var g = u.m_count,
          _ = u.m_vertices,
          v = m,
          y = m + 1 < g ? m + 1 : 0;
        (F(Ea, _[v]),
          F(Da, _[y]),
          L(Oa, Da, Ea),
          Ge(Oa),
          Ke(ka, Oa, 1),
          z(Aa, 0.5, Ea, 0.5, Da),
          Qe(ja, f.q, Oa),
          Ke(Ma, ja, 1),
          H(Ea, f, Ea),
          H(Da, f, Da));
        var b = V(Ma, Ea),
          x = -V(ja, Ea) + a,
          S = V(ja, Da) + a;
        if (
          (ba[0].recycle(),
          ba[1].recycle(),
          xa[0].recycle(),
          xa[1].recycle(),
          Fe(Sa, -ja.x, -ja.y),
          !(sr(ba, ya, Sa, x, v) < 2) &&
            (Fe(Sa, ja.x, ja.y), !(sr(xa, ba, Sa, S, y) < 2)))
        ) {
          (F(e.localNormal, ka), F(e.localPoint, Aa));
          for (var C = 0, w = 0; w < xa.length; ++w)
            if (V(Ma, xa[w].v) - b <= a) {
              var T = e.points[C];
              (rt(T.localPoint, p, xa[w].v),
                T.id.set(xa[w].id),
                h && T.id.swapFeatures(),
                ++C);
            }
          e.pointCount = C;
        }
      }
    }
  };
Ur.addType(oi.TYPE, di.TYPE, za);
function za(e, t, n, r, i, a, o) {
  Ha(e, n.getShape(), t, a.getShape(), i);
}
var Ba = P(0, 0),
  Va = P(0, 0),
  Ha = function (e, t, n, r, i) {
    ((e.pointCount = 0), it(Ba, i, n, r.m_p));
    for (
      var a = 0,
        o = -1 / 0,
        s = t.m_radius + r.m_radius,
        c = t.m_count,
        l = t.m_vertices,
        u = t.m_normals,
        d = 0;
      d < c;
      ++d
    ) {
      var f = V(u[d], Ba) - V(u[d], l[d]);
      if (f > s) return;
      f > o && ((o = f), (a = d));
    }
    var p = a,
      m = p + 1 < c ? p + 1 : 0,
      h = l[p],
      g = l[m];
    if (o < ae) {
      ((e.pointCount = 1),
        (e.type = $n.e_faceA),
        F(e.localNormal, u[a]),
        z(e.localPoint, 0.5, h, 0.5, g),
        F(e.points[0].localPoint, r.m_p),
        e.points[0].id.setFeatures(0, G.e_vertex, 0, G.e_vertex));
      return;
    }
    var _ = V(Ba, g) - V(Ba, h) - V(h, g) + V(h, h),
      v = V(Ba, h) - V(Ba, g) - V(g, h) + V(g, g);
    if (_ <= 0) {
      if (Xe(Ba, h) > s * s) return;
      ((e.pointCount = 1),
        (e.type = $n.e_faceA),
        L(e.localNormal, Ba, h),
        Ge(e.localNormal),
        F(e.localPoint, h),
        F(e.points[0].localPoint, r.m_p),
        e.points[0].id.setFeatures(0, G.e_vertex, 0, G.e_vertex));
    } else if (v <= 0) {
      if (Xe(Ba, g) > s * s) return;
      ((e.pointCount = 1),
        (e.type = $n.e_faceA),
        L(e.localNormal, Ba, g),
        Ge(e.localNormal),
        F(e.localPoint, g),
        F(e.points[0].localPoint, r.m_p),
        e.points[0].id.setFeatures(0, G.e_vertex, 0, G.e_vertex));
    } else {
      if ((z(Va, 0.5, h, 0.5, g), V(Ba, u[p]) - V(Va, u[p]) > s)) return;
      ((e.pointCount = 1),
        (e.type = $n.e_faceA),
        F(e.localNormal, u[p]),
        F(e.localPoint, Va),
        F(e.points[0].localPoint, r.m_p),
        e.points[0].id.setFeatures(0, G.e_vertex, 0, G.e_vertex));
    }
  },
  Ua = Math.min;
(Ur.addType(Jr.TYPE, oi.TYPE, Wa), Ur.addType(Zr.TYPE, oi.TYPE, Ka));
function Wa(e, t, n, r, i, a, o) {
  go(e, n.getShape(), t, a.getShape(), i);
}
var Ga = new Jr();
function Ka(e, t, n, r, i, a, o) {
  (n.getShape().getChildEdge(Ga, r), go(e, Ga, t, a.getShape(), i));
}
var qa;
(function (e) {
  ((e[(e.e_unknown = -1)] = `e_unknown`),
    (e[(e.e_edgeA = 1)] = `e_edgeA`),
    (e[(e.e_edgeB = 2)] = `e_edgeB`));
})((qa ||= {}));
var Ja;
(function (e) {
  ((e[(e.e_isolated = 0)] = `e_isolated`),
    (e[(e.e_concave = 1)] = `e_concave`),
    (e[(e.e_convex = 2)] = `e_convex`));
})((Ja ||= {}));
var Ya = (function () {
    function e() {}
    return e;
  })(),
  Xa = (function () {
    function e() {
      ((this.vertices = []), (this.normals = []), (this.count = 0));
      for (var e = 0; e < N.maxPolygonVertices; e++)
        (this.vertices.push(P(0, 0)), this.normals.push(P(0, 0)));
    }
    return e;
  })(),
  Za = (function () {
    function e() {
      ((this.v1 = P(0, 0)),
        (this.v2 = P(0, 0)),
        (this.normal = P(0, 0)),
        (this.sideNormal1 = P(0, 0)),
        (this.sideNormal2 = P(0, 0)));
    }
    return (
      (e.prototype.recycle = function () {
        (I(this.v1),
          I(this.v2),
          I(this.normal),
          I(this.sideNormal1),
          I(this.sideNormal2));
      }),
      e
    );
  })(),
  Qa = [new tr(), new tr()],
  $a = [new tr(), new tr()],
  eo = [new tr(), new tr()],
  to = new Ya(),
  no = new Ya(),
  ro = new Xa(),
  Y = new Za(),
  io = P(0, 0),
  ao = P(0, 0),
  oo = P(0, 0),
  so = P(0, 0),
  co = tt(0, 0, 0),
  X = P(0, 0),
  lo = P(0, 0),
  Z = P(0, 0),
  uo = P(0, 0),
  fo = P(0, 0),
  po = P(0, 0),
  mo = P(0, 0),
  ho = P(0, 0),
  go = function (e, t, n, r, i) {
    (at(co, n, i), H(io, co, r.m_centroid));
    var a = t.m_vertex0,
      o = t.m_vertex1,
      s = t.m_vertex2,
      c = t.m_vertex3,
      l = t.m_hasVertex0,
      u = t.m_hasVertex3;
    (L(oo, s, o), Ge(oo), Fe(Z, oo.y, -oo.x));
    var d = V(Z, io) - V(Z, o),
      f = 0,
      p = 0,
      m = !1,
      h = !1;
    (I(lo),
      I(uo),
      l &&
        (L(ao, o, a),
        Ge(ao),
        Fe(lo, ao.y, -ao.x),
        (m = B(ao, oo) >= 0),
        (f = j.dot(lo, io) - j.dot(lo, a))),
      u &&
        (L(so, c, s),
        Ge(so),
        Fe(uo, so.y, -so.x),
        (h = j.crossVec2Vec2(oo, so) > 0),
        (p = j.dot(uo, io) - j.dot(uo, s))));
    var g;
    (I(X),
      I(fo),
      I(po),
      l && u
        ? m && h
          ? ((g = f >= 0 || d >= 0 || p >= 0),
            g
              ? (F(X, Z), F(fo, lo), F(po, uo))
              : (R(X, -1, Z), R(fo, -1, Z), R(po, -1, Z)))
          : m
            ? ((g = f >= 0 || (d >= 0 && p >= 0)),
              g
                ? (F(X, Z), F(fo, lo), F(po, Z))
                : (R(X, -1, Z), R(fo, -1, uo), R(po, -1, Z)))
            : h
              ? ((g = p >= 0 || (f >= 0 && d >= 0)),
                g
                  ? (F(X, Z), F(fo, Z), F(po, uo))
                  : (R(X, -1, Z), R(fo, -1, Z), R(po, -1, lo)))
              : ((g = f >= 0 && d >= 0 && p >= 0),
                g
                  ? (F(X, Z), F(fo, Z), F(po, Z))
                  : (R(X, -1, Z), R(fo, -1, uo), R(po, -1, lo)))
        : l
          ? m
            ? ((g = f >= 0 || d >= 0),
              g
                ? (F(X, Z), F(fo, lo), R(po, -1, Z))
                : (R(X, -1, Z), F(fo, Z), R(po, -1, Z)))
            : ((g = f >= 0 && d >= 0),
              g
                ? (F(X, Z), F(fo, Z), R(po, -1, Z))
                : (R(X, -1, Z), F(fo, Z), R(po, -1, lo)))
          : u
            ? h
              ? ((g = d >= 0 || p >= 0),
                g
                  ? (F(X, Z), R(fo, -1, Z), F(po, uo))
                  : (R(X, -1, Z), R(fo, -1, Z), F(po, Z)))
              : ((g = d >= 0 && p >= 0),
                g
                  ? (F(X, Z), R(fo, -1, Z), F(po, Z))
                  : (R(X, -1, Z), R(fo, -1, uo), F(po, Z)))
            : ((g = d >= 0),
              g
                ? (F(X, Z), R(fo, -1, Z), R(po, -1, Z))
                : (R(X, -1, Z), F(fo, Z), F(po, Z))),
      (ro.count = r.m_count));
    for (var _ = 0; _ < r.m_count; ++_)
      (H(ro.vertices[_], co, r.m_vertices[_]),
        Qe(ro.normals[_], co.q, r.m_normals[_]));
    var v = r.m_radius + t.m_radius;
    ((e.pointCount = 0),
      (to.type = qa.e_edgeA),
      (to.index = +!g),
      (to.separation = 1 / 0));
    for (var _ = 0; _ < ro.count; ++_) {
      var y = ro.vertices[_],
        b = V(X, y) - V(X, o);
      b < to.separation && (to.separation = b);
    }
    if (to.type != qa.e_unknown && !(to.separation > v)) {
      ((no.type = qa.e_unknown),
        (no.index = -1),
        (no.separation = -1 / 0),
        Fe(mo, -X.y, X.x));
      for (var _ = 0; _ < ro.count; ++_) {
        R(ho, -1, ro.normals[_]);
        var b = Ua(
          V(ho, ro.vertices[_]) - V(ho, o),
          V(ho, ro.vertices[_]) - V(ho, s),
        );
        if (b > v) {
          ((no.type = qa.e_edgeB), (no.index = _), (no.separation = b));
          break;
        }
        if (V(ho, mo) >= 0) {
          if (V(ho, X) - V(po, X) < -N.angularSlop) continue;
        } else if (V(ho, X) - V(fo, X) < -N.angularSlop) continue;
        b > no.separation &&
          ((no.type = qa.e_edgeB), (no.index = _), (no.separation = b));
      }
      if (!(no.type != qa.e_unknown && no.separation > v)) {
        var x =
          no.type == qa.e_unknown
            ? to
            : no.separation > 0.98 * to.separation + 0.001
              ? no
              : to;
        if ((eo[0].recycle(), eo[1].recycle(), x.type == qa.e_edgeA)) {
          e.type = $n.e_faceA;
          for (var S = 0, C = V(X, ro.normals[0]), _ = 1; _ < ro.count; ++_) {
            var w = V(X, ro.normals[_]);
            w < C && ((C = w), (S = _));
          }
          var T = S,
            E = T + 1 < ro.count ? T + 1 : 0;
          (F(eo[0].v, ro.vertices[T]),
            eo[0].id.setFeatures(0, G.e_face, T, G.e_vertex),
            F(eo[1].v, ro.vertices[E]),
            eo[1].id.setFeatures(0, G.e_face, E, G.e_vertex),
            g
              ? ((Y.i1 = 0), (Y.i2 = 1), F(Y.v1, o), F(Y.v2, s), F(Y.normal, Z))
              : ((Y.i1 = 1),
                (Y.i2 = 0),
                F(Y.v1, s),
                F(Y.v2, o),
                R(Y.normal, -1, Z)));
        } else
          ((e.type = $n.e_faceB),
            F(eo[0].v, o),
            eo[0].id.setFeatures(x.index, G.e_face, 0, G.e_vertex),
            F(eo[1].v, s),
            eo[1].id.setFeatures(x.index, G.e_face, 1, G.e_vertex),
            (Y.i1 = x.index),
            (Y.i2 = Y.i1 + 1 < ro.count ? Y.i1 + 1 : 0),
            F(Y.v1, ro.vertices[Y.i1]),
            F(Y.v2, ro.vertices[Y.i2]),
            F(Y.normal, ro.normals[Y.i1]));
        if (
          (Fe(Y.sideNormal1, Y.normal.y, -Y.normal.x),
          Fe(Y.sideNormal2, -Y.sideNormal1.x, -Y.sideNormal1.y),
          (Y.sideOffset1 = V(Y.sideNormal1, Y.v1)),
          (Y.sideOffset2 = V(Y.sideNormal2, Y.v2)),
          Qa[0].recycle(),
          Qa[1].recycle(),
          $a[0].recycle(),
          $a[1].recycle(),
          !(
            sr(Qa, eo, Y.sideNormal1, Y.sideOffset1, Y.i1) < N.maxManifoldPoints
          ) &&
            !(
              sr($a, Qa, Y.sideNormal2, Y.sideOffset2, Y.i2) <
              N.maxManifoldPoints
            ))
        ) {
          x.type == qa.e_edgeA
            ? (F(e.localNormal, Y.normal), F(e.localPoint, Y.v1))
            : (F(e.localNormal, r.m_normals[Y.i1]),
              F(e.localPoint, r.m_vertices[Y.i1]));
          for (var D = 0, _ = 0; _ < N.maxManifoldPoints; ++_)
            if (V(Y.normal, $a[_].v) - V(Y.normal, Y.v1) <= v) {
              var O = e.points[D];
              (x.type == qa.e_edgeA
                ? (rt(O.localPoint, co, $a[_].v), O.id.set($a[_].id))
                : (F(O.localPoint, $a[_].v),
                  O.id.set($a[_].id),
                  O.id.swapFeatures()),
                ++D);
            }
          e.pointCount = D;
        }
      }
    }
  };
(function () {
  function e(e, t) {
    ((this._refMap = {}),
      (this._map = {}),
      (this._xmap = {}),
      (this._data = []),
      (this._entered = []),
      (this._exited = []),
      (this._key = e),
      (this._listener = t));
  }
  return (
    (e.prototype.update = function (e) {
      if (!Array.isArray(e)) throw `Invalid data: ` + e;
      ((this._entered.length = 0),
        (this._exited.length = 0),
        (this._data.length = e.length));
      for (var t = 0; t < e.length; t++)
        if (typeof e[t] == `object` && e[t] !== null) {
          var n = e[t],
            r = this._key(n);
          (this._map[r] ? delete this._map[r] : this._entered.push(n),
            (this._data[t] = n),
            (this._xmap[r] = n));
        }
      for (var r in this._map)
        (this._exited.push(this._map[r]), delete this._map[r]);
      var i = this._map;
      ((this._map = this._xmap), (this._xmap = i));
      for (var t = 0; t < this._exited.length; t++) {
        var n = this._exited[t],
          a = this._key(n),
          o = this._refMap[a];
        (this._listener.exit(n, o), delete this._refMap[a]);
      }
      for (var t = 0; t < this._entered.length; t++) {
        var n = this._entered[t],
          a = this._key(n),
          o = this._listener.enter(n);
        o && (this._refMap[a] = o);
      }
      for (var t = 0; t < this._data.length; t++)
        if (typeof e[t] == `object` && e[t] !== null) {
          var n = this._data[t],
            a = this._key(n),
            o = this._refMap[a];
          this._listener.update(n, o);
        }
      ((this._entered.length = 0),
        (this._exited.length = 0),
        (this._data.length = 0));
    }),
    (e.prototype.ref = function (e) {
      return this._refMap[this._key(e)];
    }),
    e
  );
})();
var _o = () => ({ engine: 0, suspension: 0, tires: 0, drive: 0 });
function vo() {
  return {
    coins: 9999999,
    vehicle: `beetle`,
    stage: `countryside`,
    ownedVehicles: D.map((e) => e.id),
    ownedStages: E.map((e) => e.id),
    upgrades: Object.fromEntries(D.map((e) => [e.id, _o()])),
    best: Object.fromEntries(E.map((e) => [e.id, 0])),
    custom: {},
    muted: !1,
    music: 0.6,
    sfx: 0.8,
  };
}
function yo(e) {
  return Math.round((250 * 1.5 ** e) / 10) * 10;
}
function bo(e, t, n) {
  let r = e.upgrades[t]?.[n] || 0;
  if (r >= 10) return null;
  return {
    ...e,
    coins: 9999999,
    upgrades: {
      ...e.upgrades,
      [t]: { ...(e.upgrades[t] || _o()), [n]: r + 1 },
    },
  };
}
function xo(e, t) {
  return {
    ...e,
    coins: 9999999,
    ownedVehicles: e.ownedVehicles.includes(t.id)
      ? e.ownedVehicles
      : [...e.ownedVehicles, t.id],
    vehicle: t.id,
  };
}
function So(e, t) {
  return e.ownedStages.includes(t.id) || e.coins < t.price
    ? null
    : {
        ...e,
        coins: e.coins - t.price,
        ownedStages: [...e.ownedStages, t.id],
        stage: t.id,
      };
}
function Co(e, t, n, r) {
  return {
    ...e,
    coins: e.coins + r,
    best: { ...e.best, [t]: Math.max(e.best[t] ?? 0, Math.floor(n)) },
  };
}
function wo(e, t) {
  return {
    torque: e.torque * (1 + 0.032 * t.engine),
    maxSpeed: e.maxSpeed * (1 + 0.038 * t.engine),
    hz: e.hz + 0.03 * t.suspension,
    damping: Math.min(0.92, e.damping + 0.035 * t.suspension),
    friction: e.friction + 0.04 * t.tires,
    frontDrive: 0.85 + 0.02 * t.drive,
    fuel: e.fuel,
  };
}
function To(e, t) {
  let n = Math.sin(e * 127.1 + t * 311.7) * 43758.5453;
  return (n - Math.floor(n)) * 2 - 1;
}
function Eo(e, t) {
  let n = Math.floor(e),
    r = e - n,
    i = r * r * r * (r * (r * 6 - 15) + 10);
  return To(n, t) * (1 - i) + To(n + 1, t) * i;
}
function Do(e) {
  let { seed: t, amplitude: n, roughness: r } = e;
  return (e) => {
    if (e < -8) return (-8 - e) * 1.6;
    if (e < 0 || e <= 30) return 0;
    let i = e < 70 ? ((e - 30) / 40) ** 2 : 1,
      a = Math.min(2.2, 1 + e / 900),
      o = n * a,
      s = Eo(e * 0.013, t) * o,
      c = Eo(e * 0.042 + 100, t + 1) * o * 0.32 * r,
      l = Eo(e * 0.16 + 300, t + 2) * 0.35 * r * Math.min(a, 1.8);
    return (s + c + l) * i;
  };
}
function Oo(e, t) {
  return e > 1500 && t > 0.85
    ? 500
    : e > 700 && t > 0.6
      ? 100
      : e > 250 && t > 0.45
        ? 25
        : 5;
}
function ko(e) {
  return Math.min(450, 170 + e * 0.12);
}
var Ao = 1 / 60,
  jo = 1.25,
  Mo = 3.4,
  No = 60;
function Po(e) {
  let t = e >>> 0;
  return () => {
    t = (t + 1831565813) >>> 0;
    let e = t;
    return (
      (e = Math.imul(e ^ (e >>> 15), e | 1)),
      (e ^= e + Math.imul(e ^ (e >>> 7), e | 61)),
      ((e ^ (e >>> 14)) >>> 0) / 4294967296
    );
  };
}
var Fo = class {
    stage;
    vehicle;
    best;
    world;
    height;
    stats;
    chassis;
    rear;
    front;
    rearJoint;
    frontJoint;
    input = { gas: !1, brake: !1, shoot: !1 };
    weaponCooldown = 0;
    weaponHeat = 0;
    muzzleFlash = 0;
    projectiles = [];
    casings = [];
    fuel;
    maxFuel;
    distance = 0;
    runCoins = 0;
    bonusCoins = 0;
    time = 0;
    rpm = 0;
    airTime = 0;
    airRot = 0;
    lastAngle = 0;
    rearGround = !0;
    frontGround = !0;
    ended = null;
    endTimer = 0;
    finished = !1;
    stopTimer = 0;
    noFuelWarned = !1;
    items = [];
    popups = [];
    particles = [];
    cam = { x: 0, y: 0, ppm: 40, basePpm: 40 };
    shake = 0;
    onEvent;
    view = { cx: 0, cy: 0, ca: 0, rx: 0, ry: 0, ra: 0, fx: 0, fy: 0, fa: 0 };
    prev = new Float64Array(9);
    cur = new Float64Array(9);
    lowFuelWarned = !1;
    chunks = new Map();
    nextFuelX;
    nextCoinX = 30;
    rng;
    acc = 0;
    zombieMode = !0;
    zombies = [];
    zombieKills = 0;
    zombieCoins = 0;
    zombieCombo = 0;
    zombieComboTimer = 0;
    nextZombieX = 25;
    zombieLimbs = [];
    bloodSplats = [];
    constructor(e, t, n, r, i, modeConfig) {
      if (
        ((this.stage = e),
        (this.vehicle = t),
        (this.upgrades = n),
        (this.best = r),
        (this.modeConfig = modeConfig),
        (this.zombieMode = modeConfig?.zombieMode !== !1),
        (this.zombies = []),
        (this.zombieKills = 0),
        (this.zombieCoins = 0),
        (this.zombieCombo = 0),
        (this.zombieComboTimer = 0),
        (this.nextZombieX = 25),
        (this.zombieLimbs = []),
        (this.bloodSplats = []),
        (this.bots = []),
        (this.world = new Gr({ gravity: j(0, -e.gravity) })),
        i === void 0)
      )
        this.height = Do(e);
      else {
        let t = Po(i);
        this.height = Do({
          seed: e.seed * 1e3 + (i % 1e5),
          amplitude: e.amplitude * (0.88 + t() * 0.24),
          roughness: e.roughness * (0.85 + t() * 0.3),
        });
      }
      this.weapon = t.weapon || t.custom?.weapon || "minigun";
        this.weaponStats = t.weaponStats || t.custom?.weaponStats || { damage: 1, fireRate: 1, cooling: 1, impact: 1 };
        this.projectiles = [];
        this.casings = [];
        this.weaponCooldown = 0;
        this.weaponHeat = 0;
        this.muzzleFlash = 0;
        ((this.stats = wo(t, n)),
        (this.fuel = this.maxFuel = this.stats.fuel),
        (this.rng = Po(e.seed * 7919 + (i ?? 0))),
        (this.nextFuelX = ko(0)));
      for (let e = -1; e <= 2; e++) this.ensureChunk(e);
      this.buildCar();
      let a = this.chassis.getPosition();
      ((this.cam.x = a.x),
        (this.cam.y = a.y),
        this.snap(this.prev),
        this.update(0));
    }
    snap(e) {
      let t = [this.chassis, this.rear, this.front];
      for (let n = 0; n < 3; n++) {
        let r = t[n].getPosition();
        ((e[n * 3] = r.x),
          (e[n * 3 + 1] = r.y),
          (e[n * 3 + 2] = t[n].getAngle()));
      }
    }
    get speed() {
      return this.chassis.getLinearVelocity().length();
    }
    buildCar() {
      let e = this.vehicle,
        t = this.stats,
        n = j(0, this.height(0) + e.wheelR - e.wheelY + 0.05);
      this.chassis = this.world.createBody({
        type: `dynamic`,
        position: n,
        angularDamping: 0.95,
      });
      let fix1 = this.chassis.createFixture(
          new oi(e.body.map(([e, t]) => j(e, t))),
          { density: e.density, friction: 0.6, userData: `chassis` },
        ),
        fix2 = this.chassis.createFixture(
          new di(j(e.head.x, e.head.y), e.head.r),
          { density: 0.2, friction: 0.6, userData: `head` },
        );
      try {
        (fix1.setFilterData({
          groupIndex: -1,
          categoryBits: 1,
          maskBits: 65535,
        }),
          fix2.setFilterData({
            groupIndex: -1,
            categoryBits: 1,
            maskBits: 65535,
          }));
      } catch (err) {}
      let r = { mass: 0, center: j(0, 0), I: 0 };
      this.chassis.getMassData(r);
      let i = j(e.com[0], e.com[1]),
        a = (i.x - r.center.x) ** 2 + (i.y - r.center.y) ** 2;
      this.chassis.setMassData({
        mass: r.mass,
        center: i,
        I: (r.I + r.mass * a) * 2.2,
      });
      let o = (r, i) => {
        let a = this.world.createBody({
          type: `dynamic`,
          position: j(n.x + r, n.y + e.wheelY + (e.wheelR - i)),
          angularDamping: 0.2,
        });
        let wf = a.createFixture(new di(i), {
          density: e.wheelDensity,
          friction: t.friction,
          restitution: 0.05,
          userData: `wheel`,
        });
        try {
          wf.setFilterData({
            groupIndex: -1,
            categoryBits: 1,
            maskBits: 65535,
          });
        } catch (err) {}
        return [
          a,
          this.world.createJoint(
            new Xi(
              {
                enableMotor: !0,
                maxMotorTorque: 0,
                motorSpeed: 0,
                frequencyHz: t.hz,
                dampingRatio: t.damping,
              },
              this.chassis,
              a,
              a.getPosition(),
              j(0, 1),
            ),
          ),
        ];
      };
      (([this.rear, this.rearJoint] = o(e.wheelX[0], e.wheelR)),
        ([this.front, this.frontJoint] = o(
          e.wheelX[1],
          e.wheelRFront ?? e.wheelR,
        )),
        (this.lastAngle = this.chassis.getAngle()));
    }
    buildBots() {
      this.bots = [];
    }
    ensureChunk(e) {
      if (this.chunks.has(e)) return;
      let t = e * No,
        n = [];
      for (let e = 0; e <= No; e++) n.push(j(t + e, this.height(t + e)));
      let r = this.world.createBody();
      (r.createFixture(new Zr(n, !1), {
        friction: this.stage.groundFriction,
        userData: `ground`,
      }),
        e === -1 &&
          r.createFixture(new aa(0.5, 40, j(-30, 20)), { userData: `ground` }),
        this.chunks.set(e, r),
        e >= 0 && this.spawnItems(t, t + No));
    }
    spawnItems(e, t) {
      for (; this.nextFuelX < t;) {
        let e = this.nextFuelX;
        (this.items.push({
          kind: `fuel`,
          x: e,
          y: this.height(e) + 1.1,
          value: 0,
          taken: !1,
        }),
          (this.nextFuelX += ko(e)),
          Math.abs(this.nextCoinX - e) < 12 && (this.nextCoinX = e + 14));
      }
      for (; this.nextCoinX < t;) {
        let e = this.nextCoinX,
          t = 5 + Math.floor(this.rng() * 5),
          n = Oo(e, this.rng());
        for (let r = 0; r < t; r++) {
          let t = e + r * 1.15;
          this.items.push({
            kind: `coin`,
            x: t,
            y: this.height(t) + 1.25,
            value: n,
            taken: !1,
          });
        }
        this.nextCoinX += t * 1.15 + 30 + this.rng() * 45;
      }
    }
    grounded(e) {
      for (let t = e.getContactList(); t; t = t.next)
        if (t.contact.isTouching()) return !0;
      return !1;
    }
    headHit() {
      for (let e = this.chassis.getContactList(); e; e = e.next) {
        let t = e.contact;
        if (!t.isTouching()) continue;
        let n = t.getFixtureA().getUserData(),
          r = t.getFixtureB().getUserData();
        if (
          (n === `head` && r === `ground`) ||
          (r === `head` && n === `ground`)
        )
          return !0;
      }
      return !1;
    }
    setViewport(e, t) {
      this.cam.basePpm =
        t > e
          ? Math.max(24, Math.min(52, e / 10.5))
          : Math.max(20, Math.min(64, t / 10.5, e / 19));
    }
    update(e) {
      let t = Math.min(e, 0.1);
      for (this.acc += t; this.acc >= Ao;)
        (this.snap(this.prev), this.fixedStep(), (this.acc -= Ao));
      this.snap(this.cur);
      let n = this.acc / Ao,
        r = (e) => this.prev[e] + (this.cur[e] - this.prev[e]) * n,
        i = this.view;
      ((i.cx = r(0)),
        (i.cy = r(1)),
        (i.ca = r(2)),
        (i.rx = r(3)),
        (i.ry = r(4)),
        (i.ra = r(5)),
        (i.fx = r(6)),
        (i.fy = r(7)),
        (i.fa = r(8)));
      if (this.bots && this.bots.length > 0) this.bots = [];
      let a = { x: i.cx, y: i.cy },
        o = this.chassis.getLinearVelocity(),
        s = o.length(),
        c = this.cam.basePpm * Math.max(0.58, 1 / (1 + s * 0.028)),
        l = (e) => Math.min(1, t * e);
      ((this.cam.ppm += (c - this.cam.ppm) * l(1.5)),
        (this.cam.x +=
          (a.x + Math.max(-3, Math.min(9, o.x * 0.42)) - this.cam.x) * l(3.5)),
        (this.cam.y +=
          (a.y + Math.max(-2, Math.min(2, o.y * 0.15)) - this.cam.y) * l(3.5)),
        (this.shake = Math.max(0, this.shake - t * 2.5)));
    }
    sim(e) {
      let t = Math.round(e / Ao);
      for (let e = 0; e < t; e++) this.fixedStep();
    }
    fixedStep() {
      this.time += Ao;
      let e = this.chassis.getPosition(),
        t = Math.floor(e.x / No);
      for (let e = t - 1; e <= t + 2; e++) this.ensureChunk(e);
      for (let [e, n] of this.chunks)
        e < t - 2 && (this.world.destroyBody(n), this.chunks.delete(e));
      if (this.zombieMode) {
        let pX = this.chassis.getPosition().x;
        while (this.nextZombieX < pX + 95) {
          let zx = this.nextZombieX;
          let zy = this.height(zx);
          let rngVal = Math.random();
          let zType = zx > 110 && rngVal < 0.2 ? "brute" : rngVal < 0.45 ? "mutant" : rngVal < 0.72 ? "crawler" : "walker";
          let baseHp = zType === "brute" ? 320 : zType === "mutant" ? 160 : zType === "crawler" ? 80 : 120;
          let baseCoins = zType === "brute" ? 400 : zType === "mutant" ? 220 : zType === "crawler" ? 120 : 150;
          this.zombies.push({
            x: zx,
            y: zy,
            type: zType,
            hp: baseHp,
            maxHp: baseHp,
            coins: baseCoins,
            alive: !0,
            facing: -1,
            animTime: Math.random() * 10,
            groanCooldown: 2 + Math.random() * 3,
            hitCooldown: 0,
          });
          this.nextZombieX += 8 + Math.random() * 15;
        }

        if (this.zombieComboTimer > 0) {
          this.zombieComboTimer -= Ao;
          if (this.zombieComboTimer <= 0) this.zombieCombo = 0;
        }

        for (let limb of this.zombieLimbs) {
          limb.x += limb.vx * Ao;
          limb.y += limb.vy * Ao;
          limb.vy -= 18 * Ao;
          limb.rot += limb.vrot * Ao;
          limb.life += Ao;
          let groundY = this.height(limb.x);
          if (limb.y < groundY + 0.15) {
            limb.y = groundY + 0.15;
            limb.vy = -limb.vy * 0.35;
            limb.vx *= 0.65;
            limb.vrot *= 0.5;
          }
        }
        this.zombieLimbs = this.zombieLimbs.filter((l) => l.life < 4.5 && l.x > pX - 50);
        this.bloodSplats = this.bloodSplats.filter((b) => b.x > pX - 60);

        // WEAPON SHOOTING LOGIC
        if (this.weaponCooldown > 0) this.weaponCooldown -= Ao;
        if (this.muzzleFlash > 0) this.muzzleFlash -= Ao;
        this.vehicle.muzzleFlash = this.muzzleFlash;
        if (this.weaponHeat > 0) this.weaponHeat = Math.max(0, this.weaponHeat - 18 * Ao);

        let wpType = this.weapon || "minigun";
        let wpLvl = this.weaponStats || { damage: 1, fireRate: 1, cooling: 1, impact: 1 };
        let dmgMultiplier = 1 + (wpLvl.damage - 1) * 0.22;
        let rateMultiplier = 1 + (wpLvl.fireRate - 1) * 0.12;

        if (this.input.shoot && !this.ended && this.weaponCooldown <= 0 && this.weaponHeat < 95) {
          let cPos = this.chassis.getPosition();
          let cAng = this.chassis.getAngle();
          let cVel = this.chassis.getLinearVelocity();
          let fwdX = Math.cos(cAng);
          let fwdY = Math.sin(cAng);
          let upX = -Math.sin(cAng);
          let upY = Math.cos(cAng);

          // Roof mount origin
          let mountX = cPos.x + fwdX * 0.2 + upX * 0.85;
          let mountY = cPos.y + fwdY * 0.2 + upY * 0.85;

          if (wpType === "missile") {
            this.projectiles.push({
              x: mountX,
              y: mountY,
              vx: cVel.x + fwdX * 48,
              vy: cVel.y + fwdY * 48,
              damage: 260 * dmgMultiplier,
              type: "missile",
              blastRadius: 4.8 * (1 + (wpLvl.impact - 1) * 0.1),
              life: 3.5,
            });
            this.weaponCooldown = 0.45 / rateMultiplier;
            this.weaponHeat += 22 / (1 + (wpLvl.cooling - 1) * 0.15);
            this.onEvent?.("shoot", "missile");
          } else if (wpType === "plasma") {
            this.projectiles.push({
              x: mountX,
              y: mountY,
              vx: cVel.x + fwdX * 72,
              vy: cVel.y + fwdY * 72,
              damage: 105 * dmgMultiplier,
              type: "plasma",
              life: 2.5,
            });
            this.weaponCooldown = 0.13 / rateMultiplier;
            this.weaponHeat += 7.5 / (1 + (wpLvl.cooling - 1) * 0.15);
            this.onEvent?.("shoot", "plasma");
          } else if (wpType === "autocannon") {
            this.projectiles.push({
              x: mountX,
              y: mountY,
              vx: cVel.x + fwdX * 85,
              vy: cVel.y + fwdY * 85,
              damage: 155 * dmgMultiplier,
              type: "heavy_bullet",
              life: 2.8,
            });
            this.weaponCooldown = 0.2 / rateMultiplier;
            this.weaponHeat += 11 / (1 + (wpLvl.cooling - 1) * 0.15);
            this.onEvent?.("shoot", "autocannon");
          } else {
            // Minigun
            this.projectiles.push({
              x: mountX,
              y: mountY,
              vx: cVel.x + fwdX * 76 + (Math.random() - 0.5) * 3,
              vy: cVel.y + fwdY * 76 + (Math.random() - 0.5) * 3,
              damage: 48 * dmgMultiplier,
              type: "bullet",
              life: 2.2,
            });
            this.weaponCooldown = 0.08 / rateMultiplier;
            this.weaponHeat += 3.8 / (1 + (wpLvl.cooling - 1) * 0.15);
            this.onEvent?.("shoot", "minigun");
          }

          this.muzzleFlash = 0.06;
          this.shake = Math.min(1.2, this.shake + 0.12);

          // Eject shell casing
          if (wpType !== "plasma") {
            this.casings.push({
              x: mountX - fwdX * 0.3,
              y: mountY,
              vx: cVel.x - fwdX * (3 + Math.random() * 3) + upX * (4 + Math.random() * 4),
              vy: cVel.y - fwdY * 2 + upY * (4 + Math.random() * 4),
              rot: Math.random() * Math.PI * 2,
              vrot: (Math.random() - 0.5) * 25,
              life: 0,
            });
          }
        }

        // UPDATE SHELL CASINGS
        for (let c of this.casings) {
          c.x += c.vx * Ao;
          c.y += c.vy * Ao;
          c.vy -= 18 * Ao;
          c.rot += c.vrot * Ao;
          c.life += Ao;
          let gY = this.height(c.x);
          if (c.y < gY + 0.05) {
            c.y = gY + 0.05;
            c.vy = -c.vy * 0.3;
            c.vx *= 0.5;
            c.vrot *= 0.4;
          }
        }
        this.casings = this.casings.filter((c) => c.life < 2.5 && c.x > pX - 40);

        // UPDATE PROJECTILES & HIT TESTS
        for (let p of this.projectiles) {
          p.x += p.vx * Ao;
          p.y += p.vy * Ao;
          p.life -= Ao;
          let gY = this.height(p.x);

          // Terrain hit
          if (p.y <= gY + 0.1) {
            p.life = 0;
            if (p.type === "missile") {
              this.onEvent?.("explosion");
              this.shake = Math.min(2.0, this.shake + 0.6);
              // AoE damage
              for (let z of this.zombies) {
                if (!z.alive) continue;
                let dExpl = Math.hypot(z.x - p.x, z.y - p.y);
                if (dExpl <= p.blastRadius) {
                  let blastDmg = p.damage * (1 - dExpl / p.blastRadius);
                  z.hp -= blastDmg;
                  z.hitCooldown = 0.2;
                }
              }
            }
          }

          // Zombie direct hit test
          for (let z of this.zombies) {
            if (!z.alive || p.life <= 0) continue;
            let zH = z.type === "brute" ? 2.2 : z.type === "crawler" ? 0.75 : 1.6;
            let zW = z.type === "brute" ? 1.1 : 0.65;
            let dZ = Math.hypot(p.x - z.x, p.y - (z.y + zH * 0.5));
            if (dZ < zW + 0.3) {
              p.life = 0;
              z.hp -= p.damage;
              z.hitCooldown = 0.15;
              this.onEvent?.("zombie_hit");
              this.shake = Math.min(1.5, this.shake + 0.2);

              if (p.type === "missile") {
                this.onEvent?.("explosion");
                for (let otherZ of this.zombies) {
                  if (!otherZ.alive) continue;
                  let dExp = Math.hypot(otherZ.x - p.x, otherZ.y - p.y);
                  if (dExp <= p.blastRadius) {
                    otherZ.hp -= p.damage * (1 - dExp / p.blastRadius);
                    otherZ.hitCooldown = 0.2;
                  }
                }
              }
              break;
            }
          }
        }
        this.projectiles = this.projectiles.filter((p) => p.life > 0 && p.x < pX + 110);

        let carPos = this.chassis.getPosition(),
          carVel = this.chassis.getLinearVelocity(),
          carSpeed = carVel.length(),
          rPos = this.rear.getPosition(),
          fPos = this.front.getPosition(),
          rR = this.vehicle.wheelR,
          fR = this.vehicle.wheelRFront ?? this.vehicle.wheelR;

        for (let z of this.zombies) {
          if (!z.alive) continue;
          let distToCar = z.x - carPos.x;
          if (distToCar < -30 || distToCar > 110) continue;

          z.animTime += Ao;
          if (Math.abs(distToCar) < 45) {
            z.facing = distToCar > 0 ? -1 : 1;
            let walkSpd = z.type === "crawler" ? 2.6 : z.type === "brute" ? 0.9 : 1.35;
            z.x += z.facing * walkSpd * Ao;
            z.y = this.height(z.x);

            z.groanCooldown -= Ao;
            if (z.groanCooldown <= 0 && Math.abs(distToCar) < 26) {
              z.groanCooldown = 4 + Math.random() * 4;
              this.onEvent?.("zombie_groan");
            }
          }

          let zW = z.type === "brute" ? 1.1 : 0.65;
          let zH = z.type === "brute" ? 2.2 : z.type === "crawler" ? 0.75 : 1.6;
          let hit = !1;
          let dFront = Math.hypot(fPos.x - z.x, fPos.y - (z.y + zH * 0.35));
          let dRear = Math.hypot(rPos.x - z.x, rPos.y - (z.y + zH * 0.35));
          let dBody = Math.hypot(carPos.x - z.x, carPos.y - (z.y + zH * 0.5));

          if (dFront < fR + zW * 0.55 || dRear < rR + zW * 0.55 || dBody < 2.1) {
            hit = !0;
          }

          if (hit && z.hitCooldown <= 0) {
            z.hitCooldown = 0.2;
            let impactSpeed = Math.max(carSpeed, Math.abs(carVel.x));
            let damage = Math.max(40, impactSpeed * (z.type === "brute" ? 25 : 55));
            z.hp -= damage;

            this.shake = Math.min(1.4, this.shake + 0.32 + impactSpeed * 0.035);
            this.onEvent?.("zombie_hit");

            if (z.hp <= 0 || impactSpeed > 2.8) {
              z.alive = !1;
              this.zombieKills++;
              if (this.zombieComboTimer > 0) {
                this.zombieCombo++;
              } else {
                this.zombieCombo = 1;
              }
              this.zombieComboTimer = 2.4;
              let comboMult = Math.min(5, this.zombieCombo);
              let bonus = z.coins + (comboMult > 1 ? comboMult * 60 : 0);
              this.runCoins += bonus;
              this.zombieCoins += bonus;

              let popupText =
                this.zombieCombo > 1
                  ? `🔥 کومبو x${this.zombieCombo}! +${Io(bonus)}`
                  : z.type === "brute"
                  ? `🧟 غول متلاشی شد! +${Io(bonus)}`
                  : `💀 له شد! +${Io(bonus)}`;
              this.popup(
                popupText,
                z.x,
                z.y + zH + 0.5,
                this.zombieCombo > 2 ? "#ff2a2a" : z.type === "brute" ? "#ff9900" : "#44ff44",
              );

              for (let s = 0; s < 3; s++) {
                this.bloodSplats.push({
                  x: z.x + (Math.random() - 0.5) * 1.6,
                  y: this.height(z.x),
                  rad: 0.4 + Math.random() * 0.5,
                  color: Math.random() < 0.7 ? "#8a0a0a" : "#520606",
                });
              }

              let pCount = z.type === "brute" ? 40 : 28;
              let bColors = ["#b30000", "#800000", "#ff1a1a", "#4d7c0f", "#365314", "#ffffff", "#e2e8f0"];
              for (let p = 0; p < pCount; p++) {
                let pCol = bColors[Math.floor(Math.random() * bColors.length)];
                let ang = Math.random() * Math.PI * 2;
                let pSpd = (Math.random() * 6 + 3) * (1 + impactSpeed * 0.08);
                this.particles.push({
                  x: z.x + (Math.random() - 0.5) * 0.4,
                  y: z.y + Math.random() * zH,
                  vx: Math.cos(ang) * pSpd + carVel.x * 0.4,
                  vy: Math.sin(ang) * pSpd * 0.7 + 3,
                  color: pCol,
                  size: 0.06 + Math.random() * 0.12,
                  life: 0,
                  max: 0.8 + Math.random() * 0.6,
                });
              }

              let limbDefs = [
                { type: "head", w: 0.35, h: 0.35, col: "#5a7d48" },
                { type: "torso", w: 0.5, h: 0.5, col: "#3a3344" },
                { type: "arm", w: 0.15, h: 0.4, col: "#5a7d48" },
                { type: "arm", w: 0.15, h: 0.4, col: "#5a7d48" },
                { type: "leg", w: 0.18, h: 0.5, col: "#252030" },
                { type: "leg", w: 0.18, h: 0.5, col: "#252030" },
              ];
              if (z.type === "brute") {
                limbDefs.push({ type: "spikes", w: 0.4, h: 0.4, col: "#888888" });
              }
              for (let ld of limbDefs) {
                let lAng = Math.random() * Math.PI * 0.8 + 0.1;
                let lSpd = Math.random() * 7 + 4 + impactSpeed * 0.35;
                this.zombieLimbs.push({
                  x: z.x,
                  y: z.y + zH * 0.5,
                  vx: Math.cos(lAng) * lSpd * (carVel.x >= 0 ? 1 : -1) + carVel.x * 0.3,
                  vy: Math.sin(lAng) * lSpd + 2.5,
                  rot: Math.random() * Math.PI * 2,
                  vrot: (Math.random() - 0.5) * 16,
                  life: 0,
                  type: ld.type,
                  w: ld.w * (z.type === "brute" ? 1.4 : 1),
                  h: ld.h * (z.type === "brute" ? 1.4 : 1),
                  color: ld.col,
                });
              }
            } else {
              let pushDir = z.facing;
              this.chassis.applyLinearImpulse(j(pushDir * 2, 0), carPos);
              z.x += -pushDir * 0.4;
            }
          }
        }
        this.zombies = this.zombies.filter((z) => z.alive || z.x > pX - 45);
      }

      (this.controls(),
        this.world.step(Ao, 8, 3),
        (this.rearGround = this.grounded(this.rear)),
        (this.frontGround = this.grounded(this.front)));
      let n = this.chassis.getPosition().x;
      this.distance = Math.max(this.distance, n);
      if (this.ended)
        ((this.endTimer += Ao),
          this.endTimer > (this.ended === `crash` ? 1.6 : 0.4) &&
            (this.finished = !0));
      else if (
        ((this.fuel = Math.max(0, this.fuel - Ao)),
        this.fuel < this.maxFuel * 0.25 &&
          !this.lowFuelWarned &&
          ((this.lowFuelWarned = !0), this.onEvent?.(`lowfuel`)),
        this.fuel <= 0 &&
          !this.noFuelWarned &&
          ((this.noFuelWarned = !0), this.onEvent?.(`nofuel`)),
        this.collect(),
        this.airAndFlips(),
        this.headHit())
      )
        ((this.ended = `crash`), this.onEvent?.(`crash`));
      else if (this.fuel <= 0) {
        let e = this.chassis.getLinearVelocity().length();
        ((this.stopTimer = e < 0.5 ? this.stopTimer + Ao : 0),
          this.stopTimer > 1.5 && (this.ended = `fuel`));
      }
      (this.updateFx(),
        (this.items = this.items.filter((e) => !e.taken && e.x > n - 40)));
    }
    controls() {
      let e = this.stats,
        t = e.maxSpeed / this.vehicle.wheelR,
        n = e.maxSpeed / (this.vehicle.wheelRFront ?? this.vehicle.wheelR),
        r = !this.ended && this.fuel > 0,
        { gas: i, brake: a } = this.input,
        o = this.rearJoint,
        s = this.frontJoint;

      let c = !this.rearGround && !this.frontGround,
        l = this.ended ? 0 : !!i - +!!a,
        u = this.chassis.getAngularVelocity(),
        pPos = this.chassis.getPosition(),
        pSl = Math.atan(
          (this.height(pPos.x + 1.2) - this.height(pPos.x - 1.2)) / 2.4,
        ),
        pAng = this.chassis.getAngle(),
        pRel = pAng - pSl;

      // Anti-wheelie torque governor
      let rearTorqueScale = 1.0;
      if (!this.frontGround || pRel > 0.03) {
        let lift = Math.max(0, pRel - 0.02);
        rearTorqueScale = Math.max(0.12, 1.0 - lift * 6.5);
      }

      let frontTorqueScale = e.frontDrive || 0.88;
      if (!this.frontGround && this.rearGround) {
        frontTorqueScale = Math.max(frontTorqueScale, 1.15);
      }

      if (r && i) {
        o.setMotorSpeed(-t);
        o.setMaxMotorTorque(e.torque * rearTorqueScale);
        s.setMotorSpeed(-n);
        s.setMaxMotorTorque(e.torque * frontTorqueScale);
      } else if (r && a) {
        o.setMotorSpeed(t * 0.45);
        o.setMaxMotorTorque(e.torque * 0.85);
        s.setMotorSpeed(n * 0.45);
        s.setMaxMotorTorque(e.torque * 0.85);
      } else {
        o.setMotorSpeed(0);
        o.setMaxMotorTorque(e.torque * 0.03);
        s.setMotorSpeed(0);
        s.setMaxMotorTorque(e.torque * 0.03);
      }

      if (c) {
        // IN AIR (Controlled jumps / intentional flips)
        for (let part of [this.chassis, this.rear, this.front])
          part.applyForceToCenter(j(0, -part.getMass() * this.stage.gravity * 0.8));
        let lv = this.chassis.getLinearVelocity();
        if (lv.length() > 17) {
          this.chassis.applyForceToCenter(
            j(-lv.x * 0.6, -Math.max(0, lv.y) * 0.35),
          );
        }
        let e = l * Mo;
        this.chassis.setAngularVelocity(l ? u + (e - u) * 0.08 : u * 0.985);
      } else {
        // ON GROUND (Driving & hill climbing)
        // 1. Aerodynamic downforce proportional to forward speed
        let spdX = this.chassis.getLinearVelocity().x;
        if (spdX > 1) {
          let df = this.chassis.getMass() * 4.0 * Math.min(2.5, spdX / 12);
          this.chassis.applyForceToCenter(j(0, -df));
        }

        // 2. ACTIVE PITCH STABILIZATION & ANTI-WHEELIE
        if (pRel > 0.02) {
          let pitchErr = pRel - 0.02;
          let restoringTorque = -(pitchErr * 9.5 + u * 0.42) * this.chassis.getInertia() * 7.5;
          this.chassis.applyTorque(restoringTorque);
        } else if (pRel < -0.2) {
          let pitchErr = pRel + 0.2;
          let restoringTorque = -(pitchErr * 6.0 + u * 0.35) * this.chassis.getInertia() * 5.0;
          this.chassis.applyTorque(restoringTorque);
        }

        if (a && !i) {
          this.chassis.applyTorque(-this.chassis.getInertia() * 0.3);
        }
      }

      let d = this.chassis.getAngularVelocity();
      Math.abs(d) > 5.0 && this.chassis.setAngularVelocity(Math.sign(d) * 5.0);
      let f = Math.abs(this.rear.getAngularVelocity()),
        p =
          r && i
            ? Math.min(1, 0.3 + (f / t) * 0.8)
            : Math.min(0.6, (f / t) * 0.5) + 0.08;
      this.rpm += (p - this.rpm) * 0.08;
    }
    collect() {
      let e = [
          this.chassis.getPosition(),
          this.chassis.getWorldPoint(
            j(this.vehicle.head.x, this.vehicle.head.y),
          ),
          this.rear.getPosition(),
          this.front.getPosition(),
        ],
        t = e[0].x;
      for (let n of this.items) {
        if (n.taken || Math.abs(n.x - t) > 4) continue;
        let r = n.kind === `fuel` ? 1.3 : 1;
        e.some((e) => (e.x - n.x) ** 2 + (e.y - n.y) ** 2 < r * r) &&
          ((n.taken = !0),
          n.kind === `coin`
            ? ((this.runCoins += n.value),
              this.burst(n.x, n.y, 6, `#ffe27a`, 2.5, 0.09),
              this.onEvent?.(`coin`))
            : ((this.fuel = this.maxFuel),
              (this.noFuelWarned = !1),
              (this.lowFuelWarned = !1),
              this.popup(`بنزین!`, n.x, n.y + 1, `#ff5a3c`),
              this.onEvent?.(`fuel`)));
      }
    }
    airAndFlips() {
      let e = this.chassis.getAngle();
      if (!this.rearGround && !this.frontGround)
        ((this.airTime += Ao), (this.airRot += e - this.lastAngle));
      else if (this.airTime > 0) {
        let e = this.chassis.getPosition();
        if (
          (this.airTime > 0.25 &&
            this.onEvent?.(`land`, Math.min(1, this.airTime * 0.6)),
          this.airTime > 0.45)
        ) {
          this.shake = Math.min(1, this.airTime * 0.45);
          let e = this.rear.getPosition();
          this.burst(
            e.x,
            e.y - this.vehicle.wheelR,
            10,
            this.stage.ground.dust,
            3,
            0.3,
          );
        }
        let t = Math.floor(Math.abs(this.airRot) / (Math.PI * 2 * 0.85));
        if (t > 0) {
          let n = t * 100;
          ((this.bonusCoins += n),
            this.popup(
              `${t > 1 ? `${Io(t)}× ` : ``}فلیپ! +${Io(n)}`,
              e.x,
              e.y + 2.4,
              `#ffd23f`,
            ),
            this.onEvent?.(`bonus`));
        }
        if (this.airTime > 1.2) {
          let t = Math.round(this.airTime * 2) * 10;
          ((this.bonusCoins += t),
            this.popup(`پرواز! +${Io(t)}`, e.x, e.y + 1.6, `#7fe0ff`),
            this.onEvent?.(`bonus`));
        }
        ((this.airTime = 0), (this.airRot = 0));
      }
      this.lastAngle = e;
    }
    burst(e, t, n, r, i, a) {
      let o = this.rng;
      for (let s = 0; s < n; s++) {
        let n = o() * Math.PI;
        this.particles.push({
          x: e,
          y: t,
          vx: Math.cos(n) * i * (0.4 + o()),
          vy: Math.sin(n) * i * (0.4 + o()),
          life: 0,
          max: 0.5 + o() * 0.4,
          size: a * (0.6 + o()),
          color: r,
        });
      }
    }
    popup(e, t, n, r) {
      this.popups.push({ text: e, x: t, y: n, age: 0, color: r });
    }
    updateFx() {
      let e = this.rng,
        t = this.chassis.getLinearVelocity().length();
      if (
        this.rearGround &&
        this.input.gas &&
        !this.ended &&
        this.fuel > 0 &&
        e() < 0.5
      ) {
        let n = this.rear.getPosition();
        this.particles.push({
          x: n.x - this.vehicle.wheelR * 0.5,
          y: n.y - this.vehicle.wheelR * 0.8,
          vx: -1.5 - e() * 2 - t * 0.1,
          vy: 0.8 + e() * 1.6,
          life: 0,
          max: 0.6 + e() * 0.5,
          size: 0.18 + e() * 0.25,
          color: this.stage.ground.dust,
        });
      }
      if (this.input.gas && !this.ended && this.fuel > 0 && e() < 0.25) {
        let t = this.vehicle,
          n = this.chassis.getWorldPoint(
            j(t.body[0][0] - 0.2, t.body[0][1] + 0.1),
          );
        this.particles.push({
          x: n.x,
          y: n.y,
          vx: -1 - e(),
          vy: 0.6 + e() * 0.5,
          life: 0,
          max: 0.7,
          size: 0.12,
          color: `#9a9a9a`,
        });
      }
      for (let e of this.particles)
        ((e.life += Ao),
          (e.x += e.vx * Ao),
          (e.y += e.vy * Ao),
          (e.vy -= 2 * Ao));
      this.particles = this.particles.filter((e) => e.life < e.max).slice(-120);
      for (let e of this.popups) ((e.age += Ao), (e.y += Ao * 1.2));
      this.popups = this.popups.filter((e) => e.age < 1.6);
    }
    get totalCoins() {
      return this.runCoins + this.bonusCoins;
    }
  },
  Io = (e) => Math.floor(e).toLocaleString(`fa-IR`),
  Lo = {
    beetle: {
      version: 1,
      asset_id: `2058fa3e-5315-4911-b1ff-4df72efa3277`,
      project_id: `d8cff372-efb9-4adc-9eb8-6b123b69c616`,
      url: `/__l5e/assets-v1/2058fa3e-5315-4911-b1ff-4df72efa3277/car-beetle.png`,
      r2_key: `a/v1/d8cff372-efb9-4adc-9eb8-6b123b69c616/2058fa3e-5315-4911-b1ff-4df72efa3277/car-beetle.png`,
      original_filename: `car-beetle.png`,
      size: 83652,
      content_type: `image/png`,
      created_at: `2026-11-15T07:43:25Z`,
    }.url,
    yellowjeep: {
      version: 1,
      asset_id: `7673c746-4f7d-4abe-8d95-4d409fe3e8bf`,
      project_id: `d8cff372-efb9-4adc-9eb8-6b123b69c616`,
      url: `/__l5e/assets-v1/7673c746-4f7d-4abe-8d95-4d409fe3e8bf/car-yellowjeep.png`,
      r2_key: `a/v1/d8cff372-efb9-4adc-9eb8-6b123b69c616/7673c746-4f7d-4abe-8d95-4d409fe3e8bf/car-yellowjeep.png`,
      original_filename: `car-yellowjeep.png`,
      size: 71206,
      content_type: `image/png`,
      created_at: `2026-11-15T07:43:32Z`,
    }.url,
    police: {
      version: 1,
      asset_id: `5b9c04a6-6a7c-4ba9-848e-38616272540b`,
      project_id: `d8cff372-efb9-4adc-9eb8-6b123b69c616`,
      url: `/__l5e/assets-v1/5b9c04a6-6a7c-4ba9-848e-38616272540b/car-police.png`,
      r2_key: `a/v1/d8cff372-efb9-4adc-9eb8-6b123b69c616/5b9c04a6-6a7c-4ba9-848e-38616272540b/car-police.png`,
      original_filename: `car-police.png`,
      size: 78062,
      content_type: `image/png`,
      created_at: `2026-11-15T07:43:29Z`,
    }.url,
    redsport: {
      version: 1,
      asset_id: `2298b0b6-1a58-47c3-afde-8a53bd77e810`,
      project_id: `d8cff372-efb9-4adc-9eb8-6b123b69c616`,
      url: `/__l5e/assets-v1/2298b0b6-1a58-47c3-afde-8a53bd77e810/car-redsport.png`,
      r2_key: `a/v1/d8cff372-efb9-4adc-9eb8-6b123b69c616/2298b0b6-1a58-47c3-afde-8a53bd77e810/car-redsport.png`,
      original_filename: `car-redsport.png`,
      size: 66636,
      content_type: `image/png`,
      created_at: `2026-11-15T07:43:15Z`,
    }.url,
    muscle: {
      version: 1,
      asset_id: `b99ecea8-1dd5-43e9-8be0-9035e9f72e81`,
      project_id: `d8cff372-efb9-4adc-9eb8-6b123b69c616`,
      url: `/__l5e/assets-v1/b99ecea8-1dd5-43e9-8be0-9035e9f72e81/car-muscle.png`,
      r2_key: `a/v1/d8cff372-efb9-4adc-9eb8-6b123b69c616/b99ecea8-1dd5-43e9-8be0-9035e9f72e81/car-muscle.png`,
      original_filename: `car-muscle.png`,
      size: 64262,
      content_type: `image/png`,
      created_at: `2026-11-15T07:43:19Z`,
    }.url,
    firetruck: {
      version: 1,
      asset_id: `13c0000b-2cb8-47b8-adf1-96f2da9d278a`,
      project_id: `d8cff372-efb9-4adc-9eb8-6b123b69c616`,
      url: `/__l5e/assets-v1/13c0000b-2cb8-47b8-adf1-96f2da9d278a/car-firetruck.png`,
      r2_key: `a/v1/d8cff372-efb9-4adc-9eb8-6b123b69c616/13c0000b-2cb8-47b8-adf1-96f2da9d278a/car-firetruck.png`,
      original_filename: `car-firetruck.png`,
      size: 94695,
      content_type: `image/png`,
      created_at: `2026-11-15T07:43:45Z`,
    }.url,
    bigfoot: {
      version: 1,
      asset_id: `842834be-2710-4146-ac63-9b64a6cbb024`,
      project_id: `d8cff372-efb9-4adc-9eb8-6b123b69c616`,
      url: `/__l5e/assets-v1/842834be-2710-4146-ac63-9b64a6cbb024/car-bigfoot.png`,
      r2_key: `a/v1/d8cff372-efb9-4adc-9eb8-6b123b69c616/842834be-2710-4146-ac63-9b64a6cbb024/car-bigfoot.png`,
      original_filename: `car-bigfoot.png`,
      size: 69819,
      content_type: `image/png`,
      created_at: `2026-11-15T07:43:22Z`,
    }.url,
    hyperwhite: {
      version: 1,
      asset_id: `692f03b9-941a-4394-a28c-8dabfb6a9021`,
      project_id: `d8cff372-efb9-4adc-9eb8-6b123b69c616`,
      url: `/__l5e/assets-v1/692f03b9-941a-4394-a28c-8dabfb6a9021/car-hyperwhite.png`,
      r2_key: `a/v1/d8cff372-efb9-4adc-9eb8-6b123b69c616/692f03b9-941a-4394-a28c-8dabfb6a9021/car-hyperwhite.png`,
      original_filename: `car-hyperwhite.png`,
      size: 64474,
      content_type: `image/png`,
      created_at: `2026-11-15T07:43:36Z`,
    }.url,
    hyperorange: {
      version: 1,
      asset_id: `842dbffa-6697-4746-840e-486eb3b81d5d`,
      project_id: `d8cff372-efb9-4adc-9eb8-6b123b69c616`,
      url: `/__l5e/assets-v1/842dbffa-6697-4746-840e-486eb3b81d5d/car-hyperorange.png`,
      r2_key: `a/v1/d8cff372-efb9-4adc-9eb8-6b123b69c616/842dbffa-6697-4746-840e-486eb3b81d5d/car-hyperorange.png`,
      original_filename: `car-hyperorange.png`,
      size: 67006,
      content_type: `image/png`,
      created_at: `2026-11-15T07:43:39Z`,
    }.url,
    hypergreen: {
      version: 1,
      asset_id: `efdd1917-e7d0-46f9-8661-5e5cbcf2f587`,
      project_id: `d8cff372-efb9-4adc-9eb8-6b123b69c616`,
      url: `/__l5e/assets-v1/efdd1917-e7d0-46f9-8661-5e5cbcf2f587/car-hypergreen.png`,
      r2_key: `a/v1/d8cff372-efb9-4adc-9eb8-6b123b69c616/efdd1917-e7d0-46f9-8661-5e5cbcf2f587/car-hypergreen.png`,
      original_filename: `car-hypergreen.png`,
      size: 79386,
      content_type: `image/png`,
      created_at: `2026-11-15T07:43:42Z`,
    }.url,
  },
  Ro = `#1f2433`;
function zo(e) {
  let t = Math.sin(e * 91.345 + 12.9898) * 43758.5453;
  return t - Math.floor(t);
}
function Bo(e, t, n, r, i, a, o = `#eef2f6`) {
  (e.save(), e.translate(t, n), e.rotate(-r));
  let s = e.createRadialGradient(-i * 0.3, -i * 0.3, i * 0.2, 0, 0, i * 1.05);
  (s.addColorStop(0, `#3a3d44`),
    s.addColorStop(1, `#15161a`),
    (e.fillStyle = s),
    e.beginPath(),
    e.arc(0, 0, i, 0, Math.PI * 2),
    e.fill());
  let c = a ? 12 : 16;
  for (let t = 0; t < c; t++)
    (e.rotate((Math.PI * 2) / c),
      e.fillRect(
        -i * 0.09,
        -i * (a ? 1.08 : 1.04),
        i * 0.18,
        i * (a ? 0.2 : 0.12),
      ));
  ((e.strokeStyle = `#3a3d44`),
    (e.lineWidth = i * 0.08),
    e.beginPath(),
    e.arc(0, 0, i * 0.78, 0, Math.PI * 2),
    e.stroke());
  let l = e.createRadialGradient(-i * 0.2, -i * 0.2, 0, 0, 0, i * 0.55);
  (l.addColorStop(0, o),
    l.addColorStop(1, o),
    (e.fillStyle = l),
    e.beginPath(),
    e.arc(0, 0, i * 0.55, 0, Math.PI * 2),
    e.fill());
  ((e.strokeStyle =
    o === `#23272e` ? `#111113` : o === `#eef2f6` ? `#b0b7c2` : o),
    (e.lineWidth = i * 0.09),
    e.stroke(),
    (e.lineWidth = i * 0.1));
  e.strokeStyle = o === `#23272e` ? `#404652` : `rgba(255,255,255,0.7)`;
  for (let t = 0; t < 5; t++) {
    let n = (t / 5) * Math.PI * 2;
    (e.beginPath(),
      e.moveTo(0, 0),
      e.lineTo(Math.cos(n) * i * 0.5, Math.sin(n) * i * 0.5),
      e.stroke());
  }
  ((e.fillStyle = `#4b5059`),
    e.beginPath(),
    e.arc(0, 0, i * 0.16, 0, Math.PI * 2),
    e.fill(),
    e.restore());
}
function Vo(e, t, n, r) {
  let [i, a, o, s] = n;
  ((e.fillStyle = `#2f6fd1`),
    e.beginPath(),
    e.roundRect(i, a, o, s, 0.12),
    e.fill());
  let { x: c, y: l, r: u } = t.head;
  ((e.fillStyle = `#f6c79c`),
    e.beginPath(),
    e.arc(c, l, u, 0, Math.PI * 2),
    e.fill(),
    (e.lineWidth = 0.05),
    (e.strokeStyle = Ro),
    e.stroke(),
    (e.fillStyle = r),
    e.beginPath(),
    e.arc(c, l + 0.02, u * 1.02, Math.PI * 0.05, Math.PI * 0.98),
    e.closePath(),
    e.fill(),
    e.stroke(),
    e.fillRect(c, l + 0.02, u * 1.25, 0.08),
    (e.fillStyle = Ro),
    e.beginPath(),
    e.arc(c + u * 0.5, l - u * 0.15, u * 0.12, 0, Math.PI * 2),
    e.fill(),
    (e.strokeStyle = `#a0522d`),
    (e.lineWidth = 0.035),
    e.beginPath(),
    e.arc(c + u * 0.35, l - u * 0.5, u * 0.25, Math.PI * 1.1, Math.PI * 1.8),
    e.stroke());
}
function Ho(e, t) {
  let n = parseInt(e.slice(1), 16),
    r = (e) =>
      Math.max(
        0,
        Math.min(255, Math.round(t > 0 ? e + (255 - e) * t : e * (1 + t))),
      );
  return `rgb(${r(n >> 16)},${r((n >> 8) & 255)},${r(n & 255)})`;
}
function Uo(e, t, n, r) {
  let i = e.createLinearGradient(0, n, 0, r);
  return (
    i.addColorStop(0, Ho(t, 0.45)),
    i.addColorStop(0.35, t),
    i.addColorStop(1, Ho(t, -0.35)),
    i
  );
}
function Wo(e, t) {
  (e.beginPath(),
    t.forEach(([t, n], r) => (r ? e.lineTo(t, n) : e.moveTo(t, n))),
    e.closePath());
}
var Go = new Map();
function Ko(e) {
  let t = Lo[e];
  if (!t || typeof Image > `u`) return Promise.resolve(null);
  let n = Go.get(e);
  if (
    (n ||
      ((n = new Image()), (n.decoding = `async`), (n.src = t), Go.set(e, n)),
    n.complete && n.naturalWidth)
  )
    return Promise.resolve(n);
  let r = n;
  return new Promise((e) => {
    (r.addEventListener(`load`, () => e(r), { once: !0 }),
      r.addEventListener(`error`, () => e(null), { once: !0 }));
  });
}
function qo(e, t) {
  if (t.sprite) {
    let n = Go.get(t.id);
    if (!n) Ko(t.id);
    else if (n.complete && n.naturalWidth) {
      let r = t.sprite;
      (e.save(), e.scale(1, -1), e.drawImage(n, r.x, -r.y, r.w, r.h));
      if (t.custom?.decal === `flames`) {
        let fx = r.x + r.w * 0.28,
          fy = -r.y + r.h * 0.52;
        ((e.fillStyle = `#ff3b30`),
          e.beginPath(),
          e.moveTo(fx, fy),
          e.quadraticCurveTo(fx + 0.6, fy - 0.22, fx + 1.35, fy - 0.05),
          e.quadraticCurveTo(fx + 0.8, fy + 0.04, fx + 1.5, fy + 0.12),
          e.quadraticCurveTo(fx + 0.65, fy + 0.24, fx, fy + 0.14),
          e.closePath(),
          e.fill());
        ((e.fillStyle = `#ffcc00`),
          e.beginPath(),
          e.moveTo(fx + 0.2, fy),
          e.quadraticCurveTo(fx + 0.6, fy - 0.12, fx + 1.05, fy),
          e.quadraticCurveTo(fx + 0.55, fy + 0.12, fx + 0.2, fy + 0.08),
          e.closePath(),
          e.fill());
      }
      if (t.custom?.spoiler && t.custom.spoiler !== `none`) {
        let sx = r.x + 0.15,
          sy = -r.y - 0.05;
        ((e.fillStyle = `#1c1e24`),
          e.fillRect(sx + 0.08, sy, 0.07, 0.38),
          e.fillRect(sx + 0.38, sy, 0.07, 0.38));
        ((e.fillStyle = `#ff2d55`),
          e.fillRect(sx - 0.1, sy - 0.12, 0.72, 0.14));
        ((e.fillStyle = `#ffffff`),
          e.fillRect(sx - 0.02, sy - 0.09, 0.56, 0.04));
        ((e.strokeStyle = `#1c1e24`),
          (e.lineWidth = 0.03),
          e.strokeRect(sx - 0.1, sy - 0.12, 0.72, 0.14));
      }
      e.restore();
    }
    return;
  }
  if (
    ((e.lineJoin = `round`),
    (e.lineWidth = 0.07),
    (e.strokeStyle = Ro),
    t.kind === `jeep`)
  )
    (Vo(e, t, [-0.8, 0.3, 0.6, 0.62], `#ffd23f`),
      (e.strokeStyle = `#f6c79c`),
      (e.lineWidth = 0.13),
      e.beginPath(),
      e.moveTo(-0.35, 0.75),
      e.lineTo(0.12, 0.6),
      e.stroke(),
      (e.strokeStyle = Ro),
      (e.lineWidth = 0.08),
      e.beginPath(),
      e.moveTo(0.05, 0.42),
      e.lineTo(0.22, 0.72),
      e.stroke(),
      Wo(e, [
        [-1.65, -0.3],
        [1.55, -0.3],
        [1.72, -0.15],
        [1.7, 0.18],
        [0.5, 0.32],
        [-1.5, 0.42],
        [-1.68, 0.3],
      ]),
      (e.fillStyle = Uo(e, t.color, 0.42, -0.3)),
      e.fill(),
      e.stroke(),
      Jo(e, [
        [-1.45, 0.33],
        [0.45, 0.24],
        [1.6, 0.1],
      ]),
      Yo(e, [
        [-0.3, 0.3],
        [-0.3, -0.25],
      ]),
      (e.fillStyle = t.accent),
      e.fillRect(-1.55, -0.05, 3.15, 0.1),
      (e.fillStyle = `rgba(190,230,255,0.55)`),
      Wo(e, [
        [0.42, 0.33],
        [0.2, 0.95],
        [0.3, 0.95],
        [0.52, 0.33],
      ]),
      e.fill(),
      (e.lineWidth = 0.06),
      e.beginPath(),
      e.moveTo(0.47, 0.33),
      e.lineTo(0.22, 0.98),
      e.stroke(),
      (e.lineWidth = 0.09),
      e.beginPath(),
      e.moveTo(-1.35, 0.42),
      e.lineTo(-1.25, 0.95),
      e.lineTo(-0.95, 0.95),
      e.stroke());
  else if (t.kind === `rally`) {
    (Wo(e, [
      [-1.2, 0.28],
      [-0.85, 0.85],
      [-0.4, 1.02],
      [0.2, 1.02],
      [0.55, 0.85],
      [1.05, 0.22],
    ]),
      (e.fillStyle = Uo(e, t.color, 1.02, 0.2)),
      e.fill(),
      e.stroke());
    let n = [
      [-0.95, 0.32],
      [-0.72, 0.78],
      [-0.38, 0.92],
      [0.15, 0.92],
      [0.45, 0.78],
      [0.85, 0.3],
    ];
    ((e.fillStyle = `#cfefff`),
      Wo(e, n),
      e.fill(),
      Vo(e, t, [-0.55, 0.28, 0.5, 0.35], `#ff4757`),
      (e.fillStyle = `rgba(150,210,255,0.35)`),
      Wo(e, n),
      e.fill(),
      Wo(e, [
        [-1.85, -0.25],
        [1.75, -0.25],
        [1.92, -0.05],
        [1.85, 0.08],
        [0.9, 0.3],
        [-1.75, 0.34],
      ]),
      (e.fillStyle = Uo(e, t.color, 0.34, -0.25)),
      e.fill(),
      e.stroke(),
      Jo(e, [
        [-1.7, 0.27],
        [0.85, 0.23],
        [1.75, 0.03],
      ]),
      Yo(e, [
        [-0.55, 0.3],
        [-0.55, -0.2],
      ]),
      Yo(e, [
        [0.6, 0.27],
        [0.6, -0.2],
      ]),
      (e.fillStyle = t.accent),
      e.fillRect(-1.8, 0, 3.6, 0.08),
      e.fillRect(-0.15, -0.2, 0.3, 0.45),
      (e.fillStyle = Ro),
      e.fillRect(-1.78, 0.3, 0.08, 0.3),
      (e.fillStyle = t.color),
      e.beginPath(),
      e.roundRect(-2, 0.55, 0.55, 0.12, 0.05),
      e.fill(),
      e.stroke());
  } else if (t.kind === `buggy`) Zo(e, t);
  else if (t.kind === `tractor`) Qo(e, t);
  else if (t.kind === `super`) $o(e, t);
  else {
    ((e.strokeStyle = Ro),
      Wo(e, [
        [-0.45, 0.4],
        [-0.4, 1.18],
        [0.45, 1.18],
        [0.95, 0.38],
      ]),
      (e.fillStyle = Uo(e, t.color, 1.18, 0.38)),
      e.fill(),
      e.stroke());
    let n = [
      [-0.3, 0.5],
      [-0.27, 1.08],
      [0.38, 1.08],
      [0.78, 0.5],
    ];
    ((e.fillStyle = `#cfefff`),
      Wo(e, n),
      e.fill(),
      Vo(e, t, [-0.25, 0.42, 0.45, 0.35], `#f04e23`),
      (e.fillStyle = `rgba(150,210,255,0.35)`),
      Wo(e, n),
      e.fill(),
      Wo(e, [
        [-1.75, -0.2],
        [1.7, -0.2],
        [1.82, 0],
        [1.78, 0.32],
        [0.9, 0.42],
        [-1.75, 0.48],
      ]),
      (e.fillStyle = Uo(e, t.color, 0.48, -0.2)),
      e.fill(),
      e.stroke(),
      Jo(e, [
        [-1.65, 0.41],
        [0.85, 0.36],
        [1.68, 0.26],
      ]),
      (e.fillStyle = `#ffd23f`));
    for (let t = 0; t < 3; t++)
      (e.beginPath(),
        e.moveTo(-1.5 + t * 0.4, 0.05),
        e.lineTo(-1.3 + t * 0.4, 0.3),
        e.lineTo(-1.1 + t * 0.4, 0.05),
        e.fill());
    ((e.fillStyle = Ro), e.fillRect(-1.75, 0.45, 1.2, 0.1));
  }
  ((e.fillStyle = `#fff6a8`),
    e.beginPath(),
    e.arc(
      t.body[1][0] + 0.02,
      (t.body[1][1] + t.body[2][1]) / 2 + 0.05,
      0.08,
      0,
      Math.PI * 2,
    ),
    e.fill(),
    (e.fillStyle = `#ff3b30`),
    e.fillRect(t.body[0][0] - 0.06, t.body[0][1] + 0.3, 0.08, 0.14),
    (e.fillStyle = `#6b6f78`),
    e.fillRect(t.body[0][0] - 0.25, t.body[0][1] + 0.02, 0.3, 0.1));
}
function Jo(e, t) {
  (e.save(),
    (e.strokeStyle = `rgba(255,255,255,0.6)`),
    (e.lineWidth = 0.05),
    (e.lineCap = `round`),
    e.beginPath(),
    t.forEach(([t, n], r) => (r ? e.lineTo(t, n) : e.moveTo(t, n))),
    e.stroke(),
    e.restore());
}
function Yo(e, t) {
  (e.save(),
    (e.strokeStyle = `rgba(20,24,36,0.45)`),
    (e.lineWidth = 0.03),
    e.beginPath(),
    t.forEach(([t, n], r) => (r ? e.lineTo(t, n) : e.moveTo(t, n))),
    e.stroke(),
    e.restore());
}
function Xo(e, t, n, r) {
  ((e.lineCap = `round`),
    (e.lineJoin = `round`),
    e.beginPath(),
    t.forEach(([t, n], r) => (r ? e.lineTo(t, n) : e.moveTo(t, n))),
    (e.strokeStyle = Ro),
    (e.lineWidth = n + 0.06),
    e.stroke(),
    (e.strokeStyle = r),
    (e.lineWidth = n),
    e.stroke(),
    (e.strokeStyle = `rgba(255,255,255,0.35)`),
    (e.lineWidth = n * 0.3),
    e.stroke());
}
function Zo(e, t) {
  ((e.fillStyle = `#5b616d`),
    (e.strokeStyle = Ro),
    (e.lineWidth = 0.05),
    e.beginPath(),
    e.roundRect(-1.55, 0.2, 0.6, 0.36, 0.06),
    e.fill(),
    e.stroke(),
    (e.fillStyle = `#8d949f`));
  for (let t = 0; t < 3; t++) e.fillRect(-1.48 + t * 0.17, 0.3, 0.1, 0.2);
  (Vo(e, t, [-0.6, 0.25, 0.52, 0.55], `#ffffff`),
    (e.lineWidth = 0.07),
    (e.strokeStyle = Ro),
    Wo(e, [
      [-1.5, -0.2],
      [1.35, -0.2],
      [1.62, 0.05],
      [1.2, 0.27],
      [-1.3, 0.32],
      [-1.56, 0.1],
    ]),
    (e.fillStyle = Uo(e, t.color, 0.32, -0.2)),
    e.fill(),
    e.stroke(),
    Jo(e, [
      [-1.2, 0.27],
      [1.1, 0.22],
    ]),
    (e.fillStyle = t.accent),
    e.fillRect(-1.4, -0.06, 2.9, 0.08),
    (e.fillStyle = `#ffffff`),
    e.beginPath(),
    e.arc(0.55, 0.06, 0.13, 0, Math.PI * 2),
    e.fill(),
    Xo(
      e,
      [
        [-1.15, 0.3],
        [-0.88, 1.28],
        [0.3, 1.28],
        [0.95, 0.26],
      ],
      0.08,
      t.accent,
    ),
    Xo(
      e,
      [
        [-0.88, 1.28],
        [0.15, 0.3],
      ],
      0.06,
      t.accent,
    ),
    (e.fillStyle = `#fff6a8`));
  for (let t = 0; t < 3; t++)
    (e.beginPath(),
      e.arc(-0.45 + t * 0.3, 1.38, 0.08, 0, Math.PI * 2),
      e.fill());
}
function Qo(e, t) {
  ((e.strokeStyle = Ro),
    (e.lineWidth = 0.06),
    (e.fillStyle = `#3a3d44`),
    e.fillRect(-1.3, -0.22, 3.05, 0.2),
    (e.fillStyle = `rgba(190,230,255,0.45)`),
    e.fillRect(-1.05, 0.45, 1.1, 1.25),
    Vo(e, t, [-0.78, 0.48, 0.52, 0.6], `#2b7de9`),
    Xo(
      e,
      [
        [-1.05, 0.45],
        [-1.05, 1.72],
      ],
      0.08,
      t.accent,
    ),
    Xo(
      e,
      [
        [0.05, 0.5],
        [0.05, 1.72],
      ],
      0.08,
      t.accent,
    ),
    e.beginPath(),
    e.roundRect(-1.2, 1.68, 1.4, 0.16, 0.05),
    (e.fillStyle = Uo(e, t.color, 1.84, 1.68)),
    e.fill(),
    e.stroke(),
    Wo(e, [
      [-0.15, -0.05],
      [1.82, -0.05],
      [1.88, 0.5],
      [1.6, 0.62],
      [-0.15, 0.64],
    ]),
    (e.fillStyle = Uo(e, t.color, 0.64, -0.05)),
    e.fill(),
    e.stroke(),
    Jo(e, [
      [0, 0.58],
      [1.55, 0.56],
    ]),
    Yo(e, [
      [0.9, 0.6],
      [0.9, 0],
    ]),
    (e.fillStyle = `#2b2b2b`),
    e.fillRect(1.66, 0.05, 0.18, 0.42),
    (e.strokeStyle = `#8d949f`),
    (e.lineWidth = 0.025));
  for (let t = 0; t < 4; t++)
    (e.beginPath(),
      e.moveTo(1.68, 0.12 + t * 0.1),
      e.lineTo(1.82, 0.12 + t * 0.1),
      e.stroke());
  (Xo(
    e,
    [
      [1.05, 0.64],
      [1.05, 1.35],
    ],
    0.09,
    `#6b6f78`,
  ),
    (e.fillStyle = Ro),
    e.fillRect(1, 1.33, 0.12, 0.06),
    e.beginPath(),
    e.arc(
      t.wheelX[0],
      t.wheelY,
      t.wheelR + 0.16,
      Math.PI * 0.12,
      Math.PI * 0.92,
    ),
    (e.lineWidth = 0.22),
    (e.strokeStyle = Ro),
    e.stroke(),
    (e.lineWidth = 0.16),
    (e.strokeStyle = t.color),
    e.stroke());
}
function $o(e, t) {
  ((e.lineWidth = 0.06),
    (e.strokeStyle = Ro),
    Wo(e, [
      [1.05, 0.2],
      [0.45, 0.6],
      [-0.55, 0.7],
      [-1.35, 0.46],
      [-1.35, 0.2],
    ]),
    (e.fillStyle = Uo(e, t.color, 0.7, 0.2)),
    e.fill(),
    e.stroke());
  let n = [
    [0.85, 0.24],
    [0.38, 0.55],
    [-0.5, 0.63],
    [-1, 0.45],
    [-1, 0.24],
  ];
  ((e.fillStyle = `#cfefff`),
    Wo(e, n),
    e.fill(),
    Vo(e, t, [-0.45, 0.22, 0.45, 0.28], t.accent),
    (e.fillStyle = `rgba(40,60,110,0.45)`),
    Wo(e, n),
    e.fill(),
    (e.fillStyle = Ro),
    e.fillRect(-1.85, 0.3, 0.07, 0.32),
    e.beginPath(),
    e.roundRect(-2.2, 0.6, 0.7, 0.1, 0.04),
    (e.fillStyle = t.color),
    e.fill(),
    e.stroke(),
    Wo(e, [
      [-2.05, -0.2],
      [1.95, -0.2],
      [2.18, -0.1],
      [2.12, 0.02],
      [1.05, 0.24],
      [-2.08, 0.36],
    ]),
    (e.fillStyle = Uo(e, t.color, 0.36, -0.2)),
    e.fill(),
    e.stroke(),
    Jo(e, [
      [-1.95, 0.31],
      [1, 0.2],
      [2, -0.02],
    ]),
    (e.strokeStyle = t.accent),
    (e.lineWidth = 0.05),
    e.beginPath(),
    e.moveTo(-1.9, 0),
    e.lineTo(1.9, -0.06),
    e.stroke(),
    (e.fillStyle = `#14161c`),
    e.beginPath(),
    e.ellipse(-0.85, 0.12, 0.32, 0.08, 0.05, 0, Math.PI * 2),
    e.fill());
}
function es(e, t, n, r) {
  ((e.lineCap = `round`),
    t.sprite ||
      n.wheels.forEach((t, i) => {
        let a = n.struts[i];
        ((e.strokeStyle = `#3b3f48`),
          (e.lineWidth = 0.16 * r),
          e.beginPath(),
          e.moveTo(a.ax, a.ay),
          e.lineTo(t.x, t.y),
          e.stroke(),
          (e.strokeStyle = `#e9a23b`),
          (e.lineWidth = 0.07 * r),
          e.stroke());
      }),
    e.save(),
    e.translate(n.x, n.y),
    e.rotate(-n.angle),
    e.scale(r, -r),
    qo(e, t),
    (() => {
      // High-Detail Mounted Heavy Weapon on Vehicle
      let curWp = t.weapon || t.custom?.weapon || "minigun";
      let wX = 0.15;
      let wY = (t.head ? t.head.y : 0.72) + 0.12;
      // 1. Turret ring & mount base
      e.fillStyle = "#1e242b";
      e.beginPath();
      e.roundRect(wX - 0.28, wY - 0.12, 0.56, 0.14, 0.04);
      e.fill();
      e.fillStyle = "#333d47";
      e.beginPath();
      e.arc(wX, wY - 0.02, 0.14, 0, Math.PI * 2);
      e.fill();

      if (curWp === "minigun") {
        // Heavy Vulcan M134 Rotary Minigun
        e.fillStyle = "#161a1f";
        e.beginPath();
        e.roundRect(wX - 0.22, wY - 0.05, 0.44, 0.24, 0.04);
        e.fill();
        e.fillStyle = "#b48608";
        e.fillRect(wX - 0.18, wY - 0.12, 0.12, 0.08);
        e.fillStyle = "#2d3748";
        e.fillRect(wX + 0.2, wY - 0.02, 0.15, 0.18);
        e.fillRect(wX + 0.55, wY - 0.02, 0.12, 0.18);
        e.fillStyle = "#0f172a";
        e.fillRect(wX + 0.2, wY + 0.08, 0.65, 0.04);
        e.fillRect(wX + 0.2, wY + 0.02, 0.68, 0.05);
        e.fillRect(wX + 0.2, wY - 0.04, 0.65, 0.04);
        if (t.muzzleFlash && t.muzzleFlash > 0) {
          let mfX = wX + 0.95, mfY = wY + 0.04;
          let rad = 0.28 + Math.random() * 0.15;
          e.fillStyle = "#ffcc00";
          e.beginPath();
          e.arc(mfX, mfY, rad, 0, Math.PI * 2);
          e.fill();
          e.fillStyle = "#ff3300";
          e.beginPath();
          e.arc(mfX, mfY, rad * 0.55, 0, Math.PI * 2);
          e.fill();
        }
      } else if (curWp === "autocannon") {
        // 30mm Anti-Armor Heavy Autocannon
        e.fillStyle = "#181b20";
        e.beginPath();
        e.roundRect(wX - 0.25, wY - 0.06, 0.55, 0.26, 0.04);
        e.fill();
        e.fillStyle = "#374151";
        e.fillRect(wX - 0.12, wY + 0.18, 0.22, 0.2);
        e.fillStyle = "#4b5563";
        e.fillRect(wX + 0.28, wY + 0.01, 0.18, 0.14);
        e.fillStyle = "#111827";
        e.fillRect(wX + 0.28, wY + 0.03, 0.82, 0.09);
        e.fillStyle = "#1f2937";
        e.fillRect(wX + 1.05, wY - 0.01, 0.18, 0.17);
        if (t.muzzleFlash && t.muzzleFlash > 0) {
          let mfX = wX + 1.32, mfY = wY + 0.07;
          e.fillStyle = "#ff5500";
          e.beginPath();
          e.moveTo(mfX, mfY - 0.25);
          e.lineTo(mfX + 0.5, mfY);
          e.lineTo(mfX, mfY + 0.25);
          e.closePath();
          e.fill();
        }
      } else if (curWp === "plasma") {
        // Dual Photon Plasma Blaster
        e.fillStyle = "#0c1322";
        e.beginPath();
        e.roundRect(wX - 0.24, wY - 0.07, 0.52, 0.28, 0.06);
        e.fill();
        e.fillStyle = "#00e5ff";
        e.beginPath();
        e.roundRect(wX - 0.14, wY + 0.02, 0.26, 0.12, 0.03);
        e.fill();
        e.fillStyle = "#1e293b";
        e.fillRect(wX + 0.25, wY + 0.11, 0.65, 0.06);
        e.fillRect(wX + 0.25, wY - 0.03, 0.65, 0.06);
        e.fillStyle = "#38bdf8";
        e.fillRect(wX + 0.45, wY - 0.05, 0.08, 0.24);
        e.fillRect(wX + 0.72, wY - 0.05, 0.08, 0.24);
        if (t.muzzleFlash && t.muzzleFlash > 0) {
          let mfX = wX + 0.98, mfY = wY + 0.04;
          e.fillStyle = "#00f0ff";
          e.beginPath();
          e.arc(mfX, mfY, 0.32, 0, Math.PI * 2);
          e.fill();
        }
      } else if (curWp === "missile") {
        // Quad Micro-Missile Pod
        e.fillStyle = "#27272a";
        e.beginPath();
        e.roundRect(wX - 0.3, wY - 0.1, 0.65, 0.38, 0.05);
        e.fill();
        e.fillStyle = "#eab308";
        e.fillRect(wX - 0.28, wY + 0.06, 0.6, 0.05);
        e.fillStyle = "#09090b";
        e.fillRect(wX + 0.32, wY + 0.12, 0.18, 0.12);
        e.fillRect(wX + 0.32, wY - 0.04, 0.18, 0.12);
        e.fillStyle = "#ef4444";
        e.beginPath();
        e.arc(wX + 0.42, wY + 0.18, 0.05, 0, Math.PI * 2);
        e.arc(wX + 0.42, wY + 0.02, 0.05, 0, Math.PI * 2);
        e.fill();
        if (t.muzzleFlash && t.muzzleFlash > 0) {
          let mfX = wX + 0.55, mfY = wY + 0.1;
          e.fillStyle = "#f97316";
          e.beginPath();
          e.arc(mfX, mfY, 0.35, 0, Math.PI * 2);
          e.fill();
        }
      }
    })(),
    e.restore());
  let i =
      t.kind === `monster` ||
      t.kind === `tractor` ||
      t.kind === `buggy` ||
      !!t.sprite,
    a =
      t.custom?.rim ||
      t.rim ||
      (t.kind === `tractor`
        ? `#ffd84a`
        : t.kind === `super`
          ? `#2b2f3a`
          : `#eef2f6`);
  n.wheels.forEach((n, o) =>
    Bo(
      e,
      n.x,
      n.y,
      n.angle,
      (o === 1 ? (t.wheelRFront ?? t.wheelR) : t.wheelR) * r,
      i,
      a,
    ),
  );
}
function ts(e, t, n, r) {
  return {
    x: t,
    y: n,
    angle: 0,
    wheels: e.wheelX.map((i, a) => {
      let o = a === 1 ? (e.wheelRFront ?? e.wheelR) : e.wheelR;
      return { x: t + i * r, y: n - (e.wheelY + e.wheelR - o) * r, angle: 0.3 };
    }),
    struts: e.wheelX.map((i) => ({
      ax: t + i * r,
      ay: n - e.wheelY * 0.2 * r,
    })),
  };
}
function ns(e, t, n, r, i, a, o, s) {
  ((e.fillStyle = o), e.beginPath(), e.moveTo(0, n));
  for (let n = 0; n <= t + 8; n += 8) {
    let t = (n + r) * s,
      o =
        i -
        (Math.sin(t) * 0.6 +
          Math.sin(t * 2.3 + 1.3) * 0.3 +
          Math.sin(t * 5.1 + 0.4) * 0.1) *
          a;
    e.lineTo(n, o);
  }
  (e.lineTo(t, n), e.closePath(), e.fill());
}
var rs = new Map();
function is(e, t, n, r, i) {
  let a = `${e}|${t}|${n}|${r}`,
    o = rs.get(a);
  if (!o) {
    (rs.size > 8 && rs.clear(),
      (o = document.createElement(`canvas`)),
      (o.width = Math.max(1, Math.round(t * r))),
      (o.height = Math.max(1, Math.round(n * r))));
    let e = o.getContext(`2d`);
    (e.setTransform(r, 0, 0, r, 0, 0), i(e), rs.set(a, o));
  }
  return o;
}
function as(e, t, n, r) {
  let i = e.createLinearGradient(0, 0, 0, r);
  if (
    (i.addColorStop(0, t.sky[0]),
    i.addColorStop(1, t.sky[1]),
    (e.fillStyle = i),
    e.fillRect(0, 0, n, r),
    t.night)
  ) {
    let t = n * 0.78,
      i = r * 0.18,
      a = Math.min(n, r) * 0.07,
      o = e.createRadialGradient(t - a * 0.3, i - a * 0.3, a * 0.1, t, i, a);
    (o.addColorStop(0, `#7fb6ff`),
      o.addColorStop(1, `#2457b8`),
      (e.fillStyle = o),
      e.beginPath(),
      e.arc(t, i, a, 0, Math.PI * 2),
      e.fill(),
      (e.fillStyle = `#58b85a`),
      e.beginPath(),
      e.ellipse(
        t - a * 0.3,
        i - a * 0.1,
        a * 0.35,
        a * 0.5,
        0.4,
        0,
        Math.PI * 2,
      ),
      e.fill());
  } else {
    let t = n * 0.75,
      i = r * 0.28,
      a = Math.min(n, r) * 0.085,
      o = e.createRadialGradient(t, i, a * 0.4, t, i, a * 6);
    (o.addColorStop(0, `rgba(255,200,80,0.88)`),
      o.addColorStop(1, `rgba(255,140,40,0)`),
      (e.fillStyle = o),
      e.fillRect(0, 0, n, r),
      (e.fillStyle = `#fff3b0`),
      e.beginPath(),
      e.arc(t, i, a, 0, Math.PI * 2),
      e.fill());
  }
}
function os(e, t, n, r, i, a, o) {
  if (
    (e.drawImage(
      is(`sky-${t.id}`, n, r, a, (e) => as(e, t, n, r)),
      0,
      0,
      n,
      r,
    ),
    t.night)
  ) {
    e.fillStyle = `#ffffff`;
    for (let t = 0; t < 90; t++) {
      let a = (((zo(t) * n * 2 - i * 0.02) % n) + n) % n;
      ((e.globalAlpha = 0.4 + zo(t + 7) * 0.6),
        e.fillRect(a, zo(t + 3) * r * 0.6, 2, 2));
    }
    e.globalAlpha = 1;
  } else {
    e.fillStyle = `rgba(255,255,255,0.9)`;
    for (let t = 0; t < 6; t++) {
      let a = n + 300,
        s =
          ((((zo(t) * a - i * 0.05 - o * (0.6 + zo(t + 2) * 0.8)) % a) + a) %
            a) -
          150,
        c = r * (0.08 + zo(t + 11) * 0.25),
        l = 30 + zo(t + 5) * 40;
      ((e.fillStyle = `rgba(200,215,235,0.75)`),
        e.beginPath(),
        e.ellipse(
          s + l * 0.65,
          c + l * 0.3,
          l * 1.3,
          l * 0.35,
          0,
          0,
          Math.PI * 2,
        ),
        e.fill(),
        (e.fillStyle = `rgba(255,255,255,0.92)`),
        e.beginPath(),
        e.arc(s, c, l * 0.6, 0, Math.PI * 2),
        e.arc(s + l * 0.6, c - l * 0.2, l * 0.7, 0, Math.PI * 2),
        e.arc(s + l * 1.3, c, l * 0.55, 0, Math.PI * 2),
        e.fill());
    }
  }
  let s = (i) => {
      let a = e.createLinearGradient(0, i - r * 0.1, 0, i + r * 0.15);
      (a.addColorStop(0, `rgba(255,255,255,0)`),
        a.addColorStop(
          1,
          t.night ? `rgba(30,34,70,0.5)` : `rgba(255,255,255,0.35)`,
        ),
        (e.fillStyle = a),
        e.fillRect(0, i - r * 0.1, n, r));
    },
    c = r > n ? r * 0.07 : 0;
  (ns(
    e,
    n,
    r,
    i * 0.04 + 900,
    r * 0.46 - c,
    r * 0.16,
    Ho(t.far, t.night ? -0.2 : 0.25),
    0.003,
  ),
    s(r * 0.5 - c),
    ns(e, n, r, i * 0.1, r * 0.55 - c, r * 0.16, t.far, 0.0045),
    s(r * 0.6 - c),
    ns(e, n, r, i * 0.22 + 400, r * 0.66 - c, r * 0.11, t.near, 0.007),
    t.night ||
      ss(
        e,
        n,
        r,
        i * 0.22 + 400,
        r * 0.66 - c,
        r * 0.11,
        Ho(t.near, -0.25),
        t.id,
      ));
}
function ss(e, t, n, r, i, a, o, s) {
  e.fillStyle = o;
  for (let n = Math.floor(r / 70); n * 70 - r < t + 70; n++) {
    if (zo(n * 3.1) < 0.45) continue;
    let t = n * 70 - r + zo(n) * 40,
      o = (t + r) * 0.007,
      c =
        i -
        (Math.sin(o) * 0.6 +
          Math.sin(o * 2.3 + 1.3) * 0.3 +
          Math.sin(o * 5.1 + 0.4) * 0.1) *
          a +
        4,
      l = 14 + zo(n + 2) * 16;
    (e.beginPath(),
      s === `desert`
        ? (e.roundRect(t - l * 0.12, c - l * 1.6, l * 0.24, l * 1.6, l * 0.12),
          e.roundRect(t - l * 0.5, c - l * 1.1, l * 0.18, l * 0.6, l * 0.09),
          e.roundRect(t - l * 0.5, c - l * 0.68, l * 0.45, l * 0.16, l * 0.08))
        : s === `snow`
          ? (e.moveTo(t, c - l * 2.2),
            e.lineTo(t + l * 0.7, c),
            e.lineTo(t - l * 0.7, c))
          : (e.rect(t - l * 0.08, c - l, l * 0.16, l),
            e.arc(t, c - l * 1.2, l * 0.6, 0, Math.PI * 2)),
      e.fill());
  }
}
function cs(e, t, n, r) {
  let i = t.stage,
    { x: a, y: o, ppm: s } = t.cam,
    c = r > n,
    l = t.shake * t.shake * 9,
    u = n * (c ? 0.3 : 0.36) + (zo(t.time * 60) - 0.5) * l,
    d = r * (c ? 0.6 : 0.56) + (zo(t.time * 60 + 3) - 0.5) * l,
    f = (e) => (e - a) * s + u,
    p = (e) => d - (e - o) * s,
    m = e.getTransform().a || 1;
  os(e, i, n, r, a * t.cam.basePpm, m, t.time * 9);
  let h = a - u / s - 2,
    g = a + (n - u) / s + 2,
    _ = [];
  for (let e = Math.floor(h); e <= g; e += 0.5) _.push([f(e), p(t.height(e))]);
  let v = e.createLinearGradient(0, p(o), 0, p(o) + r);
  (v.addColorStop(0, i.ground.fill),
    v.addColorStop(1, i.ground.dark),
    (e.fillStyle = v),
    e.beginPath(),
    e.moveTo(_[0][0], r + 10));
  for (let [t, n] of _) e.lineTo(t, n);
  (e.lineTo(_[_.length - 1][0], r + 10),
    e.closePath(),
    e.fill(),
    (e.fillStyle = i.ground.pebble));
  for (let n = Math.floor(h / 1.7); n * 1.7 < g; n++) {
    let r = n * 1.7 + zo(n) * 1.5,
      i = 0.9 + zo(n + 0.5) * 5,
      a = (0.12 + zo(n + 0.25) * 0.28) * s;
    (e.beginPath(),
      e.ellipse(
        f(r),
        p(t.height(r) - i),
        a * 1.3,
        a,
        zo(n) * 3,
        0,
        Math.PI * 2,
      ),
      e.fill());
  }
  ((e.lineJoin = `round`), (e.lineCap = `round`));
  let y = (t, n, r) => {
    ((e.strokeStyle = r),
      (e.lineWidth = n * s),
      e.beginPath(),
      _.forEach(([n, r], i) =>
        i ? e.lineTo(n, r + t * s) : e.moveTo(n, r + t * s),
      ),
      e.stroke());
  };
  if (
    (y(0.75, 0.5, `rgba(0,0,0,0.18)`),
    y(0.32, 0.64, i.ground.top),
    y(0.06, 0.12, i.ground.topLight),
    !i.night)
  ) {
    ((e.strokeStyle = i.ground.topLight),
      (e.lineWidth = Math.max(1.5, 0.06 * s)),
      e.beginPath());
    for (let n = Math.floor(h / 0.35); n * 0.35 < g; n++) {
      let r = n * 0.35 + zo(n) * 0.2,
        i = f(r),
        a = p(t.height(r)),
        o = (0.12 + zo(n + 9) * 0.22) * s,
        c = (zo(n + 4) - 0.5) * 0.2 * s;
      (e.moveTo(i, a + 1), e.lineTo(i + c, a - o));
    }
    e.stroke();
  }
  ((e.textAlign = `center`), (e.textBaseline = `middle`));
  for (let n = Math.max(1, Math.ceil(h / 100)); n * 100 <= g; n++) {
    let r = n * 100,
      i = f(r),
      a = p(t.height(r));
    ((e.fillStyle = `#6b4423`),
      e.fillRect(i - 0.06 * s, a - 2 * s, 0.12 * s, 2 * s),
      (e.fillStyle = `#fff6dc`),
      (e.strokeStyle = Ro),
      (e.lineWidth = 2),
      e.beginPath(),
      e.roundRect(i - 0.9 * s, a - 2.6 * s, 1.8 * s, 0.75 * s, 4),
      e.fill(),
      e.stroke(),
      (e.fillStyle = Ro),
      (e.font = `${Math.round(0.5 * s)}px Lalezar, sans-serif`),
      e.fillText(`${Io(r)} م`, i, a - 2.2 * s));
  }
  if (t.best > 20 && t.best > h && t.best < g) {
    let n = f(t.best),
      r = p(t.height(t.best));
    ((e.strokeStyle = Ro),
      (e.lineWidth = 0.1 * s),
      e.beginPath(),
      e.moveTo(n, r),
      e.lineTo(n, r - 4 * s),
      e.stroke(),
      (e.fillStyle = `#ff3b30`),
      e.beginPath(),
      e.moveTo(n, r - 4 * s),
      e.lineTo(n + 1.6 * s, r - 3.5 * s),
      e.lineTo(n, r - 3 * s),
      e.fill(),
      (e.fillStyle = `#ffffff`),
      (e.font = `${Math.round(0.45 * s)}px Lalezar, sans-serif`),
      e.fillText(`رکورد`, n + 0.65 * s, r - 3.5 * s));
  }
  for (let n of t.items) {
    if (n.x < h || n.x > g) continue;
    let r = f(n.x),
      i = p(n.y);
    if (n.kind === `coin`) {
      let a = 0.42 * s,
        o = 0.35 + 0.65 * Math.abs(Math.cos(t.time * 3 + n.x * 0.6)),
        c =
          n.value >= 500
            ? [`#e7a3ff`, `#9b3fd1`]
            : n.value >= 100
              ? [`#ffe066`, `#d08a00`]
              : n.value >= 25
                ? [`#e8eef5`, `#8a98a8`]
                : [`#ffcf6b`, `#c0761c`];
      ((e.fillStyle = c[1]),
        e.beginPath(),
        e.ellipse(r, i, a * o, a, 0, 0, Math.PI * 2),
        e.fill(),
        (e.fillStyle = c[0]),
        e.beginPath(),
        e.ellipse(r, i, a * o * 0.78, a * 0.78, 0, 0, Math.PI * 2),
        e.fill(),
        o > 0.75 &&
          ((e.fillStyle = c[1]),
          (e.font = `${Math.round(a * (n.value >= 100 ? 0.7 : 0.9))}px Lalezar, sans-serif`),
          e.fillText(Io(n.value), r, i + a * 0.05)));
    } else {
      let n = Math.sin(t.time * 3) * 0.12 * s,
        a = 0.85 * s,
        o = 1.05 * s;
      (e.save(),
        e.translate(r, i + n),
        e.rotate(-0.12),
        (e.fillStyle = `#e5301d`),
        (e.strokeStyle = Ro),
        (e.lineWidth = 2),
        e.beginPath(),
        e.roundRect(-a / 2, -o / 2, a, o, a * 0.15),
        e.fill(),
        e.stroke(),
        (e.fillStyle = `#ffcc33`),
        e.fillRect(-a * 0.3, -o * 0.72, a * 0.2, o * 0.24),
        e.strokeRect(-a * 0.3, -o * 0.72, a * 0.2, o * 0.24),
        (e.fillStyle = `#ffffff`),
        (e.font = `${Math.round(a * 0.36)}px Lalezar, sans-serif`),
        e.fillText(`بنزین`, 0, o * 0.06),
        e.restore());
    }
  }
  for (let n of t.particles) {
    let t = n.life / n.max;
    ((e.globalAlpha = (1 - t) * 0.8),
      (e.fillStyle = n.color),
      e.beginPath(),
      e.arc(f(n.x), p(n.y), n.size * s * (1 + t), 0, Math.PI * 2),
      e.fill());
  }
  e.globalAlpha = 1;
  let b = t.vehicle,
    x = t.view,
    S = { x: x.cx, y: x.cy },
    C = Math.cos(x.ca),
    w = Math.sin(x.ca),
    T = {
      x: f(S.x),
      y: p(S.y),
      angle: x.ca,
      wheels: [
        { x: f(x.rx), y: p(x.ry), angle: x.ra },
        { x: f(x.fx), y: p(x.fy), angle: x.fa },
      ],
      struts: b.wheelX.map((e) => {
        let t = b.wheelY * 0.2;
        return { ax: f(S.x + e * C - t * w), ay: p(S.y + e * w + t * C) };
      }),
    },
    E = t.height(S.x),
    D = Math.max(0, S.y - E - 1);
  ((e.globalAlpha = Math.max(0, 0.35 - D * 0.05)),
    (e.fillStyle = `#000000`),
    e.beginPath(),
    e.ellipse(
      f(S.x),
      p(E) + 0.1 * s,
      2.2 * s * (1 + D * 0.05),
      0.28 * s,
      -Math.atan(t.height(S.x + 0.5) - t.height(S.x - 0.5)),
      0,
      Math.PI * 2,
    ),
    e.fill(),
    (e.globalAlpha = 1),
    es(e, b, T, s));
  if (t.bloodSplats && t.bloodSplats.length > 0) {
    for (let b of t.bloodSplats) {
      if (b.x < h || b.x > g) continue;
      let bx = f(b.x),
        by = p(b.y);
      e.fillStyle = b.color;
      e.beginPath();
      e.ellipse(bx, by + 2, b.rad * s, b.rad * 0.28 * s, 0, 0, Math.PI * 2);
      e.fill();
    }
  }
  // DRAW PROJECTILES
  if (t.projectiles && t.projectiles.length > 0) {
    for (let p of t.projectiles) {
      if (p.x < h || p.x > g) continue;
      let px = f(p.x), py = p(p.y);
      e.save();
      e.translate(px, py);
      e.rotate(Math.atan2(-p.vy, p.vx));
      if (p.type === "missile") {
        e.fillStyle = "#374151";
        e.fillRect(-0.4 * s, -0.08 * s, 0.7 * s, 0.16 * s);
        e.fillStyle = "#ef4444";
        e.beginPath();
        e.moveTo(0.3 * s, -0.08 * s);
        e.lineTo(0.55 * s, 0);
        e.lineTo(0.3 * s, 0.08 * s);
        e.closePath();
        e.fill();
        e.fillStyle = "#f97316";
        e.beginPath();
        e.moveTo(-0.4 * s, -0.06 * s);
        e.lineTo(-0.75 * s - Math.random() * 0.3 * s, 0);
        e.lineTo(-0.4 * s, 0.06 * s);
        e.closePath();
        e.fill();
      } else if (p.type === "plasma") {
        e.fillStyle = "#00e5ff";
        e.beginPath();
        e.ellipse(0, 0, 0.45 * s, 0.12 * s, 0, 0, Math.PI * 2);
        e.fill();
        e.fillStyle = "#ffffff";
        e.beginPath();
        e.ellipse(0, 0, 0.22 * s, 0.06 * s, 0, 0, Math.PI * 2);
        e.fill();
      } else {
        e.strokeStyle = p.type === "heavy_bullet" ? "#ff4500" : "#ffcc00";
        e.lineWidth = (p.type === "heavy_bullet" ? 0.1 : 0.06) * s;
        e.beginPath();
        e.moveTo(-0.4 * s, 0);
        e.lineTo(0.3 * s, 0);
        e.stroke();
      }
      e.restore();
    }
  }

  // DRAW CASINGS
  if (t.casings && t.casings.length > 0) {
    for (let c of t.casings) {
      if (c.x < h || c.x > g) continue;
      let cx = f(c.x), cy = p(c.y);
      e.save();
      e.translate(cx, cy);
      e.rotate(c.rot);
      e.fillStyle = "#d4af37";
      e.fillRect(-0.06 * s, -0.02 * s, 0.12 * s, 0.04 * s);
      e.restore();
    }
  }

  if (t.zombies && t.zombies.length > 0) {
    for (let z of t.zombies) {
      if (!z.alive || z.x < h || z.x > g) continue;
      let zx = f(z.x),
        zy = p(z.y);
      e.save();
      e.translate(zx, zy);
      if (z.facing > 0) e.scale(-1, 1);
      let zScale = (z.type === "brute" ? 1.4 : z.type === "crawler" ? 0.75 : 1.0) * (s / 40);
      e.scale(zScale, zScale);
      let phase = Math.sin(z.animTime * (z.type === "crawler" ? 12 : 6));
      if (z.type === "crawler") {
        e.fillStyle = "#4e6b3b";
        e.beginPath();
        e.ellipse(-5, -12, 16, 9, -0.2, 0, Math.PI * 2);
        e.fill();
        e.fillStyle = "#5c8044";
        e.beginPath();
        e.arc(-18, -14, 9, 0, Math.PI * 2);
        e.fill();
        e.fillStyle = "#ff1100";
        e.beginPath();
        e.arc(-22, -15, 2.5, 0, Math.PI * 2);
        e.fill();
        e.strokeStyle = "#3e562e";
        e.lineWidth = 3.5;
        e.lineCap = "round";
        e.beginPath();
        e.moveTo(-10, -8);
        e.lineTo(-24 + phase * 6, 0);
        e.stroke();
        e.beginPath();
        e.moveTo(8, -8);
        e.lineTo(16 - phase * 6, 0);
        e.stroke();
      } else if (z.type === "brute") {
        e.strokeStyle = "#1e1c24";
        e.lineWidth = 8;
        e.lineCap = "round";
        e.beginPath();
        e.moveTo(-6, -25);
        e.lineTo(-8 + phase * 8, 0);
        e.moveTo(6, -25);
        e.lineTo(8 - phase * 8, 0);
        e.stroke();
        e.fillStyle = "#3a4a2c";
        e.beginPath();
        e.roundRect(-22, -65, 44, 42, 6);
        e.fill();
        e.fillStyle = "#e8e8e8";
        e.beginPath();
        e.moveTo(-20, -65);
        e.lineTo(-28, -80);
        e.lineTo(-14, -65);
        e.moveTo(20, -65);
        e.lineTo(28, -80);
        e.lineTo(14, -65);
        e.fill();
        e.fillStyle = "#8b1e1e";
        e.fillRect(-18, -35, 36, 12);
        e.fillStyle = "#485e35";
        e.beginPath();
        e.arc(0, -78, 14, 0, Math.PI * 2);
        e.fill();
        e.fillStyle = "#ffea00";
        e.beginPath();
        e.arc(-5, -80, 3.5, 0, Math.PI * 2);
        e.arc(5, -80, 3.5, 0, Math.PI * 2);
        e.fill();
        e.fillStyle = "#ff1100";
        e.beginPath();
        e.arc(-5, -80, 1.8, 0, Math.PI * 2);
        e.arc(5, -80, 1.8, 0, Math.PI * 2);
        e.fill();
        e.strokeStyle = "#3a4a2c";
        e.lineWidth = 9;
        e.beginPath();
        e.moveTo(-18, -58);
        e.lineTo(-38, -48 + phase * 6);
        e.stroke();
        e.fillStyle = "#2d3b22";
        e.beginPath();
        e.arc(-38, -48 + phase * 6, 7, 0, Math.PI * 2);
        e.fill();
        let hpRatio = Math.max(0, z.hp / z.maxHp);
        e.fillStyle = "rgba(0,0,0,0.6)";
        e.fillRect(-20, -100, 40, 6);
        e.fillStyle = "#e53935";
        e.fillRect(-19, -99, 38 * hpRatio, 4);
      } else {
        e.strokeStyle = "#252030";
        e.lineWidth = 4.5;
        e.lineCap = "round";
        e.beginPath();
        e.moveTo(-4, -18);
        e.lineTo(-6 + phase * 6, 0);
        e.moveTo(4, -18);
        e.lineTo(6 - phase * 6, 0);
        e.stroke();
        e.fillStyle = "#3d384d";
        e.beginPath();
        e.roundRect(-9, -42, 18, 26, 3);
        e.fill();
        e.fillStyle = "#5c8044";
        e.beginPath();
        e.arc(0, -51, 9, 0, Math.PI * 2);
        e.fill();
        e.fillStyle = "#ff2b2b";
        e.beginPath();
        e.arc(-3, -53, 2, 0, Math.PI * 2);
        e.arc(3, -53, 2, 0, Math.PI * 2);
        e.fill();
        e.strokeStyle = "#5c8044";
        e.lineWidth = 4;
        e.beginPath();
        e.moveTo(-6, -38);
        e.lineTo(-24, -36 + phase * 4);
        e.stroke();
      }
      e.restore();
    }
  }
  if (t.zombieLimbs && t.zombieLimbs.length > 0) {
    for (let l of t.zombieLimbs) {
      if (l.x < h || l.x > g) continue;
      let lx = f(l.x),
        ly = p(l.y);
      e.save();
      e.translate(lx, ly);
      e.rotate(l.rot);
      let lScale = s / 40;
      e.scale(lScale, lScale);
      if (l.type === "head") {
        e.fillStyle = l.color;
        e.beginPath();
        e.arc(0, 0, 9, 0, Math.PI * 2);
        e.fill();
        e.fillStyle = "#ff1100";
        e.beginPath();
        e.arc(-3, -2, 2, 0, Math.PI * 2);
        e.arc(3, -2, 2, 0, Math.PI * 2);
        e.fill();
      } else if (l.type === "arm" || l.type === "leg") {
        e.fillStyle = l.color;
        e.fillRect(-3, -8, 6, 16);
        e.fillStyle = "#ff2222";
        e.beginPath();
        e.arc(0, -8, 3.5, 0, Math.PI * 2);
        e.fill();
      } else {
        e.fillStyle = l.color;
        e.beginPath();
        e.roundRect(-8, -8, 16, 16, 4);
        e.fill();
      }
      e.restore();
    }
  }
  for (let n of t.popups)
    ((e.globalAlpha = Math.min(1, (1.6 - n.age) * 2)),
      (e.font = `${Math.round(Math.max(22, 0.9 * s) * (1 + Math.max(0, 0.2 - n.age)))}px Lalezar, sans-serif`),
      (e.lineWidth = 5),
      (e.strokeStyle = Ro),
      e.strokeText(n.text, f(n.x), p(n.y)),
      (e.fillStyle = n.color),
      e.fillText(n.text, f(n.x), p(n.y)));
  e.globalAlpha = 1;
  let O = is(`vignette`, n, r, Math.min(1, m), (e) => {
    let t = e.createRadialGradient(
      n / 2,
      r / 2,
      Math.min(n, r) * 0.45,
      n / 2,
      r / 2,
      Math.max(n, r) * 0.75,
    );
    (t.addColorStop(0, `rgba(0,0,0,0)`),
      t.addColorStop(1, `rgba(0,0,0,0.28)`),
      (e.fillStyle = t),
      e.fillRect(0, 0, n, r));
  });
  (e.drawImage(O, 0, 0, n, r), ls(e, n, r, t.rpm));
}
function ls(e, t, n, r) {
  let i = Math.max(38, Math.min(70, Math.min(t, n) * 0.09)),
    a = t - i - 95,
    o = n - i - 16,
    s = Math.PI * 0.75,
    c = Math.PI * 2.25;
  ((e.fillStyle = `rgba(12,18,28,0.78)`),
    (e.strokeStyle = `#00e5ff`),
    (e.lineWidth = 3),
    e.beginPath(),
    e.arc(a, o, i, 0, Math.PI * 2),
    e.fill(),
    e.stroke(),
    (e.lineWidth = i * 0.12),
    (e.strokeStyle = `#ff3b30`),
    e.beginPath(),
    e.arc(a, o, i * 0.8, s + (c - s) * 0.8, c),
    e.stroke(),
    (e.strokeStyle = `#ffffff`),
    (e.lineWidth = 2));
  for (let t = 0; t <= 8; t++) {
    let n = s + ((c - s) * t) / 8;
    (e.beginPath(),
      e.moveTo(a + Math.cos(n) * i * 0.62, o + Math.sin(n) * i * 0.62),
      e.lineTo(a + Math.cos(n) * i * 0.74, o + Math.sin(n) * i * 0.74),
      e.stroke());
  }
  let l = s + (c - s) * Math.max(0, Math.min(1, r));
  ((e.strokeStyle = `#ffd23f`),
    (e.lineWidth = 4),
    e.beginPath(),
    e.moveTo(a, o),
    e.lineTo(a + Math.cos(l) * i * 0.78, o + Math.sin(l) * i * 0.78),
    e.stroke(),
    (e.fillStyle = `#ffd23f`),
    e.beginPath(),
    e.arc(a, o, i * 0.1, 0, Math.PI * 2),
    e.fill(),
    (e.fillStyle = `#c7cede`),
    (e.font = `${Math.round(i * 0.24)}px Lalezar, sans-serif`),
    (e.textAlign = `center`),
    e.fillText(`دور موتور`, a, o + i * 0.5));
}
var us = class {
    ctx = null;
    master = null;
    engGain = null;
    engFilter = null;
    oscs = [];
    firing = null;
    intakeGain = null;
    intakeFilter = null;
    rollGain = null;
    rollFilter = null;
    noise = null;
    brown = null;
    last = { f: 0, g: -1, t: 0, r: -1 };
    musicBus = null;
    musicVol = 0.6;
    sfxVol = 0.8;
    song = null;
    wantSong = null;
    step = 0;
    nextAt = 0;
    timer = null;
    start() {
      if (this.ctx) {
        this.ctx.state !== `running` && this.ctx.resume();
        return;
      }
      let e = window.AudioContext ?? window.webkitAudioContext;
      if (!e) return;
      let t = new e({ latencyHint: `interactive` });
      this.ctx = t;
      let n = t.createDynamicsCompressor();
      ((n.threshold.value = -14),
        (n.ratio.value = 4),
        n.connect(t.destination),
        (this.master = t.createGain()),
        (this.master.gain.value = this.sfxVol * 0.8),
        this.master.connect(n),
        (this.musicBus = t.createGain()),
        (this.musicBus.gain.value = this.musicVol * 0.5),
        this.musicBus.connect(n));
      let r = t.sampleRate * 2;
      ((this.noise = t.createBuffer(1, r, t.sampleRate)),
        (this.brown = t.createBuffer(1, r, t.sampleRate)));
      let i = this.noise.getChannelData(0),
        a = this.brown.getChannelData(0),
        o = 0;
      for (let e = 0; e < r; e++) {
        let t = Math.random() * 2 - 1;
        ((i[e] = t), (o = (o + 0.02 * t) / 1.02), (a[e] = o * 3.5));
      }
      ((this.engFilter = t.createBiquadFilter()),
        (this.engFilter.type = `lowpass`),
        (this.engFilter.Q.value = 3),
        (this.engFilter.frequency.value = 500));
      let s = t.createWaveShaper(),
        c = new Float32Array(256);
      for (let e = 0; e < 256; e++) {
        let t = (e / 255) * 2 - 1;
        c[e] = Math.tanh(t * 2.2);
      }
      s.curve = c;
      let l = t.createGain();
      ((l.gain.value = 0.7),
        (this.firing = t.createOscillator()),
        (this.firing.type = `sine`));
      let u = t.createGain();
      ((u.gain.value = 0.3),
        this.firing.connect(u).connect(l.gain),
        (this.engGain = t.createGain()),
        (this.engGain.gain.value = 0));
      let d = t.createGain();
      for (let [e, , n] of [
        [`sawtooth`, 1, 0.35],
        [`sawtooth`, 1.012, 0.3],
        [`square`, 0.5, 0.25],
        [`sine`, 0.25, 0.6],
      ]) {
        let r = t.createOscillator();
        r.type = e;
        let i = t.createGain();
        ((i.gain.value = n), r.connect(i).connect(d), this.oscs.push(r));
      }
      d.connect(s)
        .connect(this.engFilter)
        .connect(l)
        .connect(this.engGain)
        .connect(this.master);
      let f = t.createBufferSource();
      ((f.buffer = this.noise),
        (f.loop = !0),
        (this.intakeFilter = t.createBiquadFilter()),
        (this.intakeFilter.type = `bandpass`),
        (this.intakeFilter.Q.value = 1.2),
        (this.intakeFilter.frequency.value = 900),
        (this.intakeGain = t.createGain()),
        (this.intakeGain.gain.value = 0),
        f
          .connect(this.intakeFilter)
          .connect(this.intakeGain)
          .connect(this.master));
      let p = t.createBufferSource();
      ((p.buffer = this.brown),
        (p.loop = !0),
        (this.rollFilter = t.createBiquadFilter()),
        (this.rollFilter.type = `lowpass`),
        (this.rollFilter.frequency.value = 300),
        (this.rollGain = t.createGain()),
        (this.rollGain.gain.value = 0),
        p.connect(this.rollFilter).connect(this.rollGain).connect(this.master));
      let m = t.currentTime;
      (this.oscs.forEach((e) => e.start(m)),
        this.firing.start(m),
        f.start(m),
        p.start(m),
        this.wantSong && this.playMusic(this.wantSong),
        document.addEventListener(`visibilitychange`, () => {
          document.hidden ? t.suspend() : t.resume();
        }));
    }
    setVolumes(e, t) {
      if (
        ((this.musicVol = e),
        (this.sfxVol = t),
        !this.ctx || !this.master || !this.musicBus)
      )
        return;
      let n = this.ctx.currentTime;
      (this.master.gain.setTargetAtTime(t * 0.8, n, 0.05),
        this.musicBus.gain.setTargetAtTime(e * 0.5, n, 0.05));
    }
    playMusic(e) {
      this.wantSong = e;
      let t = this.ctx;
      !t ||
        this.song === e ||
        ((this.song = e),
        (this.step = 0),
        (this.nextAt = t.currentTime + 0.1),
        this.timer && clearInterval(this.timer),
        (this.timer = null),
        e &&
          ((this.timer = setInterval(() => this.schedule(), 40)),
          this.schedule()));
    }
    schedule() {
      let e = this.ctx;
      if (!e || !this.song || !this.musicBus) return;
      this.nextAt < e.currentTime && (this.nextAt = e.currentTime + 0.02);
      let t = gs[this.song],
        n = 60 / t.bpm / 4;
      for (; this.nextAt < e.currentTime + 0.25;)
        (this.playStep(t, this.step, this.nextAt, n),
          (this.step = (this.step + 1) % (16 * t.chords.length)),
          (this.nextAt += n));
    }
    playStep(e, t, n, r) {
      let i = Math.floor(t / 16),
        a = t % 16,
        o = e.chords[i],
        s = this.musicBus;
      (e.kick[a] === `x` && this.drum(n, `kick`),
        e.snare[a] === `x` && this.drum(n, `snare`),
        e.hat[a] === `x` && this.drum(n, `hat`));
      let c = e.bass[a];
      if (
        (c !== `.` &&
          this.note(
            ds(o[0] - 24 + (c === `o` ? 12 : 0)),
            n,
            r * 1.8,
            `triangle`,
            0.34,
            s,
            900,
          ),
        e.arp[a] === `x` &&
          this.note(
            ds(o[(a >> 1) % o.length] + 12),
            n,
            r * 1.5,
            `sine`,
            0.08,
            s,
            3e3,
          ),
        a === 0)
      )
        for (let e of o)
          this.note(ds(e), n, r * 15, `triangle`, 0.035, s, 1400, 0.25);
      let l = e.melody[i][a];
      l !== null && this.note(ds(l), n, r * e.melodyLen, e.lead, 0.1, s, 2600);
    }
    note(e, t, n, r, i, a, o, s = 0.01) {
      let c = this.ctx,
        m = Math.max(t, c.currentTime + 0.004),
        l = c.createOscillator(),
        u = c.createBiquadFilter(),
        d = c.createGain();
      ((l.type = r),
        (l.frequency.value = e),
        (u.type = `lowpass`),
        (u.frequency.value = o),
        d.gain.setValueAtTime(1e-4, m),
        d.gain.linearRampToValueAtTime(i, m + s),
        d.gain.exponentialRampToValueAtTime(1e-4, m + n),
        l.connect(u).connect(d).connect(a),
        l.start(m),
        l.stop(m + n + 0.05));
    }
    drum(e, t) {
      let n = this.ctx,
        r = this.musicBus,
        m = Math.max(e, n.currentTime + 0.004);
      if (t === `kick`) {
        let t = n.createOscillator(),
          i = n.createGain();
        (t.frequency.setValueAtTime(130, m),
          t.frequency.exponentialRampToValueAtTime(45, m + 0.12),
          i.gain.setValueAtTime(1e-4, m),
          i.gain.linearRampToValueAtTime(0.45, m + 0.005),
          i.gain.exponentialRampToValueAtTime(1e-4, m + 0.22),
          t.connect(i).connect(r),
          t.start(m),
          t.stop(m + 0.25));
        return;
      }
      let i = n.createBufferSource();
      i.buffer = this.noise;
      let a = n.createBiquadFilter(),
        o = n.createGain(),
        s = t === `hat` ? 0.04 : 0.14;
      ((a.type = t === `hat` ? `highpass` : `bandpass`),
        (a.frequency.value = t === `hat` ? 7e3 : 1800),
        o.gain.setValueAtTime(1e-4, m),
        o.gain.linearRampToValueAtTime(t === `hat` ? 0.06 : 0.18, m + 0.004),
        o.gain.exponentialRampToValueAtTime(1e-4, m + s),
        i.connect(a).connect(o).connect(r),
        i.start(m, Math.random()),
        i.stop(m + s + 0.02));
    }
    engine(e, t, n = !1, r = 0) {
      let i = this.ctx;
      if (
        !i ||
        !this.engGain ||
        !this.engFilter ||
        !this.firing ||
        !this.intakeGain ||
        !this.rollGain
      )
        return;
      let a = performance.now(),
        o = 34 + e * 120,
        s = t ? 0.16 + e * 0.14 + (n ? 0.05 : 0) : 0,
        c = Math.min(0.22, r * 0.012),
        l = this.last;
      if (
        a - l.t < 33 &&
        Math.abs(o - l.f) < 2 &&
        Math.abs(s - l.g) < 0.01 &&
        Math.abs(c - l.r) < 0.01
      )
        return;
      ((l.t = a), (l.f = o), (l.g = s), (l.r = c));
      let u = i.currentTime,
        d = 0.04,
        f = [1, 1.012, 0.5, 0.25];
      (this.oscs.forEach((e, t) => e.frequency.setTargetAtTime(o * f[t], u, d)),
        this.firing.frequency.setTargetAtTime(o * 0.5, u, d),
        this.engFilter.frequency.setTargetAtTime(
          380 + e * 1900 + (n ? 400 : 0),
          u,
          d,
        ),
        this.engGain.gain.setTargetAtTime(s, u, 0.08),
        this.intakeFilter.frequency.setTargetAtTime(700 + e * 1600, u, d),
        this.intakeGain.gain.setTargetAtTime(
          t && n ? 0.025 + e * 0.05 : 0,
          u,
          0.06,
        ),
        this.rollFilter.frequency.setTargetAtTime(180 + r * 35, u, 0.1),
        this.rollGain.gain.setTargetAtTime(c, u, 0.08));
    }
    tone(e, t, n, r, i, a) {
      let o = this.ctx,
        s = o.createOscillator(),
        c = o.createGain();
      ((s.type = r),
        s.frequency.setValueAtTime(e, t),
        a && s.frequency.exponentialRampToValueAtTime(a, t + n),
        c.gain.setValueAtTime(1e-4, t),
        c.gain.exponentialRampToValueAtTime(i, t + 0.008),
        c.gain.exponentialRampToValueAtTime(1e-4, t + n),
        s.connect(c).connect(this.master),
        s.start(t),
        s.stop(t + n + 0.02));
    }
    hit(e, t, n, r, i = `lowpass`) {
      let a = this.ctx,
        o = a.createBufferSource();
      o.buffer = this.noise;
      let s = a.createBiquadFilter();
      ((s.type = i),
        s.frequency.setValueAtTime(n, e),
        s.frequency.exponentialRampToValueAtTime(
          Math.max(60, n * 0.25),
          e + t,
        ));
      let c = a.createGain();
      (c.gain.setValueAtTime(r, e),
        c.gain.exponentialRampToValueAtTime(1e-4, e + t),
        o.connect(s).connect(c).connect(this.master),
        o.start(e, Math.random() * 1.5),
        o.stop(e + t + 0.02));
    }
    ok() {
      return !!(this.ctx && this.master && this.noise);
    }
    coin() {
      if (!this.ok()) return;
      let e = this.ctx.currentTime;
      (this.tone(1568, e, 0.07, `square`, 0.05),
        this.tone(2093, e + 0.05, 0.16, `triangle`, 0.09));
    }
    fuel() {
      if (!this.ok()) return;
      let e = this.ctx.currentTime;
      ([392, 523, 659, 784, 1047].forEach((t, n) =>
        this.tone(t, e + n * 0.06, 0.16, `triangle`, 0.12),
      ),
        this.hit(e, 0.35, 2500, 0.08, `bandpass`));
    }
    bonus() {
      if (!this.ok()) return;
      let e = this.ctx.currentTime;
      ([659, 831, 988, 1319].forEach((t, n) =>
        this.tone(t, e + n * 0.07, 0.2, `triangle`, 0.11),
      ),
        this.tone(1319, e + 0.28, 0.35, `sine`, 0.06));
    }
    land(e) {
      if (!this.ok()) return;
      let t = this.ctx.currentTime,
        n = 0.15 + e * 0.45;
      (this.tone(110, t, 0.22, `sine`, n, 40),
        this.hit(t, 0.18 + e * 0.15, 900, n * 0.6),
        e > 0.5 && this.tone(320, t + 0.02, 0.12, `triangle`, 0.05, 180));
    }
    lowFuel() {
      if (!this.ok()) return;
      let e = this.ctx.currentTime;
      (this.tone(880, e, 0.12, `square`, 0.06),
        this.tone(880, e + 0.2, 0.12, `square`, 0.06));
    }
    crash() {
      if (!this.ok()) return;
      let e = this.ctx.currentTime;
      (this.hit(e, 0.7, 3e3, 0.5),
        this.hit(e + 0.05, 0.4, 6e3, 0.18, `highpass`),
        this.tone(90, e, 0.5, `sine`, 0.5, 30),
        this.tone(220, e + 0.03, 0.25, `sawtooth`, 0.08, 70));
    }
    zombieHit() {
      if (!this.ok()) return;
      let e = this.ctx.currentTime;
      this.hit(e, 0.45, 1400, 0.35, "lowpass");
      this.hit(e + 0.02, 0.25, 4200, 0.18, "bandpass");
      this.tone(130, e, 0.2, "sawtooth", 0.25, 45);
    }
    zombieGroan() {
      if (!this.ok()) return;
      let e = this.ctx.currentTime;
      this.tone(75, e, 0.4, "sine", 0.12, 50);
    }
    stop() {
      (this.timer && clearInterval(this.timer),
        this.ctx?.close(),
        (this.ctx = null));
    }
  },
  ds = (e) => 440 * 2 ** ((e - 69) / 12),
  Q = null,
  fs = [60, 64, 67],
  ps = [55, 59, 62],
  ms = [57, 60, 64],
  hs = [53, 57, 60],
  gs = {
    menu: {
      bpm: 108,
      chords: [fs, ms, hs, ps, fs, ms, [62, 65, 69], ps],
      kick: `x.......x.......`,
      snare: `....x.......x...`,
      hat: `..x...x...x...x.`,
      bass: `x..x..x.x..x..x.`,
      arp: `x.x.x.x.x.x.x.x.`,
      melody: [
        [76, Q, Q, 79, Q, Q, 76, Q, 74, Q, 72, Q, Q, Q, Q, Q],
        [72, Q, Q, 76, Q, Q, 72, Q, 69, Q, Q, Q, Q, Q, Q, Q],
        [69, Q, 72, Q, 77, Q, Q, 76, Q, 74, Q, 72, Q, Q, Q, Q],
        [74, Q, Q, 71, Q, Q, 74, Q, 79, Q, Q, Q, Q, Q, Q, Q],
        [76, Q, Q, 79, Q, Q, 84, Q, 83, Q, 79, Q, Q, Q, Q, Q],
        [81, Q, Q, 79, Q, Q, 76, Q, 72, Q, Q, Q, Q, Q, Q, Q],
        [74, Q, 77, Q, 81, Q, Q, 79, Q, 77, Q, 74, Q, Q, Q, Q],
        [79, Q, 77, Q, 74, Q, 71, Q, 74, Q, Q, Q, Q, Q, Q, Q],
      ],
      melodyLen: 3,
      lead: `triangle`,
    },
    game: {
      bpm: 140,
      chords: [ms, hs, fs, ps, ms, hs, [64, 67, 71], ps],
      kick: `x...x...x...x...`,
      snare: `....x.......x...`,
      hat: `x.x.x.x.x.x.x.xx`,
      bass: `x.ox.ox.x.ox.oxo`,
      arp: `xxxxxxxxxxxxxxxx`,
      melody: [
        [81, Q, 81, Q, 84, Q, 81, Q, 79, Q, 76, Q, 79, Q, Q, Q],
        [77, Q, 77, Q, 81, Q, 77, Q, 76, Q, 72, Q, 74, Q, Q, Q],
        [76, Q, 79, Q, 84, Q, 79, Q, 83, Q, 84, Q, 79, Q, Q, Q],
        [79, Q, 78, Q, 79, Q, 83, Q, 86, Q, Q, Q, 83, Q, Q, Q],
        [81, Q, 81, Q, 84, Q, 81, Q, 88, Q, 86, Q, 84, Q, Q, Q],
        [77, Q, 81, Q, 84, Q, 81, Q, 79, Q, 77, Q, 76, Q, Q, Q],
        [76, Q, 79, Q, 83, Q, 79, Q, 76, Q, 74, Q, 71, Q, Q, Q],
        [74, Q, 79, Q, 83, Q, 86, Q, 83, Q, Q, Q, 79, Q, Q, Q],
      ],
      melodyLen: 1.8,
      lead: `square`,
    },
  },
  $ = n();
function _s({
  stage: e,
  vehicle: t,
  upgrades: n,
  best: r,
  sfx: i,
  raceConfig: R,
  onFinish: a,
  onRetry: o,
  onMenu: s,
}) {
  let c = (0, l.useRef)(null),
    u = (0, l.useRef)(null),
    d = (0, l.useRef)(null),
    f = (0, l.useRef)(!1),
    [g, _] = (0, l.useState)(!1),
    [v, S] = (0, l.useState)({ fuel: 1, dist: 0, coins: 0 }),
    [C, w] = (0, l.useState)(null),
    T = (e) => {
      let t = e ?? !f.current;
      ((f.current = t), _(t));
    };
  (0, l.useEffect)(() => {
    let o = new Fo(e, t, n, r, Math.floor(Math.random() * 1e9), R);
    ((d.current = o),
      (o.onEvent = (e, t) => {
        e === `coin`
          ? i.coin()
          : e === `land`
            ? i.land(t ?? 0.3)
            : e === `lowfuel`
              ? i.lowFuel()
              : e === `fuel`
                ? i.fuel()
                : e === `bonus`
                  ? i.bonus()
                  : e === `crash`
                    ? i.crash()
                    : e === `zombie_hit`
                      ? i.zombieHit()
                      : e === `zombie_groan` ? i.zombieGroan() :
       e === `shoot` ? i.shootSound(t) :
       e === `explosion` && i.explosionSound();
      }));
    let s = c.current,
      l = u.current,
      p = l.getContext(`2d`),
      m = 0,
      h = 0,
      g = 1,
      _ = () => {
        let e = s.getBoundingClientRect();
        ((g = Math.min(1.4, window.devicePixelRatio || 1)),
          (m = e.width),
          (h = e.height),
          (l.width = Math.round(m * g)),
          (l.height = Math.round(h * g)),
          o.setViewport(m, h));
      };
    _();
    let v = new ResizeObserver(_);
    v.observe(s);
    let y = 0,
      b = performance.now(),
      x = 0,
      C = !1,
      E = -1,
      D = -1,
      O = -1,
      ee = (e) => {
        let t = (e - b) / 1e3;
        ((b = e),
          !f.current && !C && o.update(t),
          p.setTransform(g, 0, 0, g, 0, 0),
          cs(p, o, m, h),
          (s.dataset.sceneReady = `true`));
        let n = !f.current && !C,
          c = o.rearGround || o.frontGround;
        if (
          (i.engine(
            o.rpm,
            n && !o.ended && o.fuel > 0,
            n && o.input.gas && o.fuel > 0,
            n && c ? o.speed : 0,
          ),
          e - x > 150)
        ) {
          x = e;
          let t = Math.round((o.fuel / o.maxFuel) * 100),
            n = Math.floor(o.distance),
            r = o.totalCoins;
          if (t !== E || n !== D || r !== O) {
            E = t;
            D = n;
            O = r;
            S({
              fuel: t / 100,
              dist: n,
              coins: r,
              spd: Math.round(Math.abs(o.speed || 0) * 3.6),
              zombieKills: o.zombieKills || 0,
              zombieCombo: o.zombieCombo || 0,
              zombieCoins: o.zombieCoins || 0,
            });
          }
        }
        if (o.finished && !C) {
          C = !0;
          let e = {
            reason: o.ended,
            distance: o.distance,
            coins: o.totalCoins,
            record: o.distance > r,
            zombieKills: o.zombieKills || 0,
            zombieCoins: o.zombieCoins || 0,
            zombieMode: o.zombieMode,
          };
          (w(e), a(e));
        }
        y = requestAnimationFrame(ee);
      };
    y = requestAnimationFrame(ee);
    let te = (e) => (t) => {
        let n = t.key.toLowerCase();
        if (n === `arrowright` || n === `d`) o.input.gas = e;
        else if (n === `arrowleft` || n === `a`) o.input.brake = e;
        else if (n === ` ` || n === `space` || n === `z` || n === `x` || n === `s` || n === `arrowup`) o.input.shoot = e;
        else if (e && (n === `escape` || n === `p`)) T();
        else return;
        (e && i.start(), t.preventDefault());
      },
      ne = te(!0),
      k = te(!1);
    return (
      window.addEventListener(`keydown`, ne),
      window.addEventListener(`keyup`, k),
      () => {
        (cancelAnimationFrame(y),
          v.disconnect(),
          window.removeEventListener(`keydown`, ne),
          window.removeEventListener(`keyup`, k),
          i.engine(0, !1, !1, 0));
      }
    );
  }, []);
  let E = (e) => ({
      onPointerDown: (t) => {
        (t.currentTarget.setPointerCapture(t.pointerId),
          i.start(),
          d.current && (d.current.input[e] = !0));
      },
      onPointerUp: () => d.current && (d.current.input[e] = !1),
      onPointerCancel: () => d.current && (d.current.input[e] = !1),
      onContextMenu: (e) => e.preventDefault(),
    }),
    D = v.fuel < 0.25 && !C;
  return (0, $.jsx)(`div`, {
    className: `fixed inset-0 bg-foreground`,
    children: (0, $.jsxs)(`div`, {
      ref: c,
      dir: `ltr`,
      className: `relative mx-auto h-full w-full touch-none select-none overflow-hidden bg-background`,
      children: [
        (0, $.jsx)(`canvas`, {
          ref: u,
          className: `absolute inset-0 h-full w-full`,
        }),
        (0, $.jsxs)(`div`, {
            className: `pointer-events-none absolute left-1/2 top-3 -translate-x-1/2 flex items-center gap-2 rounded-full border border-red-500/50 bg-black/85 px-4 py-1.5 font-display text-sm sm:text-base text-white shadow-lg backdrop-blur-md`,
            children: [
              (0, $.jsx)(`span`, {
                className: `text-red-400 font-bold text-lg`,
                children: `💀`,
              }),
              (0, $.jsxs)(`span`, {
                className: `text-white font-bold`,
                children: [Io(v.zombieKills || 0), ` زامبی`],
              }),
              v.zombieCombo > 1 &&
                (0, $.jsxs)(`span`, {
                  className: `bg-red-600 text-yellow-300 px-2 py-0.5 rounded-full text-xs font-bold animate-pulse`,
                  children: [`کومبو x`, Io(v.zombieCombo)],
                }),
            ],
          }),
        (0, $.jsxs)(`div`, {
          className: `pointer-events-none absolute left-3 top-3 flex flex-col gap-2`,
          dir: `rtl`,
          children: [
            (0, $.jsxs)(`div`, {
              className: `panel-game flex items-center gap-2 bg-card px-3 py-2`,
              children: [
                (0, $.jsx)(m, { className: `size-5 text-fuel` }),
                (0, $.jsx)(`div`, {
                  className: `h-4 w-32 overflow-hidden rounded-full border-2 border-outline bg-muted sm:w-44`,
                  children: (0, $.jsx)(`div`, {
                    className: `h-full ${v.fuel < 0.25 ? `bg-fuel` : `bg-secondary`}`,
                    style: { width: `${Math.max(0, v.fuel) * 100}%` },
                  }),
                }),
              ],
            }),
            (0, $.jsxs)(`div`, {
              className: `flex items-center gap-1.5 rounded-full border border-white/20 bg-black/45 px-2.5 py-1 font-display text-sm text-white backdrop-blur-sm`,
              children: [
                (0, $.jsxs)(`span`, { children: [Io(v.dist), ` م`] }),
                r > 0 &&
                  (0, $.jsxs)(`span`, {
                    className: `border-r border-white/20 pr-1.5 text-xs text-white/70`,
                    children: [`رکورد: `, Io(r), ` م`],
                  }),
              ],
            }),
          ],
        }),
        (0, $.jsxs)(`div`, {
          className: `absolute right-3 top-3 flex items-center gap-2`,
          children: [
            (0, $.jsxs)(`div`, {
              className: `panel-game flex items-center gap-2 bg-card px-3 py-2 font-display text-xl`,
              children: [
                (0, $.jsx)(p, { className: `size-5 text-coin` }),
                Io(v.coins),
              ],
            }),
            (0, $.jsx)(`button`, {
              "aria-label": `توقف`,
              onClick: () => T(!0),
              className: `btn-game bg-card p-2`,
              children: (0, $.jsx)(y, { className: `size-6` }),
            }),
          ],
        }),
        D &&
          (0, $.jsx)(`div`, {
            className: `pointer-events-none absolute left-1/2 top-20 -translate-x-1/2 font-display text-3xl text-fuel text-outline animate-blink`,
            children: `بنزین کم!`,
          }),
        (0, $.jsx)(`button`, {
          "aria-label": `ترمز`,
          ...E(`brake`),
          className: `glass-pedal absolute flex flex-col items-center justify-center rounded-2xl border-2 border-white/40 bg-white/15 backdrop-blur-md shadow-2xl active:scale-95 active:bg-red-500/30 transition-all select-none touch-none`,
          style: {
            position: `absolute`,
            bottom: `20px`,
            left: `20px`,
            width: `84px`,
            height: `84px`,
            zIndex: 30,
          },
          children: (0, $.jsxs)(`div`, {
            className: `flex flex-col items-center justify-center pointer-events-none opacity-85`,
            children: [
              (0, $.jsx)(`div`, { className: `h-1.5 w-10 rounded-full bg-white/70 mb-1.5` }),
              (0, $.jsx)(`div`, { className: `h-1.5 w-10 rounded-full bg-white/70 mb-1.5` }),
              (0, $.jsx)(`div`, { className: `h-1.5 w-10 rounded-full bg-white/70` }),
            ],
          }),
        }),
        (0, $.jsx)(`button`, {
          "aria-label": `شلیک`,
          ...E(`shoot`),
          className: `glass-shoot absolute flex items-center justify-center rounded-full border-2 border-red-500/70 bg-red-600/25 backdrop-blur-md shadow-[0_0_20px_rgba(239,68,68,0.5)] active:scale-90 active:bg-red-600/60 transition-all select-none touch-none`,
          style: {
            position: `absolute`,
            bottom: `160px`,
            right: `24px`,
            width: `72px`,
            height: `72px`,
            zIndex: 30,
          },
          children: (0, $.jsx)(`span`, {
            className: `text-3xl filter drop-shadow-[0_0_8px_#ef4444] pointer-events-none select-none`,
            children: `🎯`,
          }),
        }),
        (0, $.jsx)(`button`, {
          "aria-label": `گاز`,
          ...E(`gas`),
          className: `glass-pedal absolute flex flex-col items-center justify-center rounded-2xl border-2 border-white/40 bg-white/15 backdrop-blur-md shadow-2xl active:scale-95 active:bg-green-500/30 transition-all select-none touch-none`,
          style: {
            position: `absolute`,
            bottom: `20px`,
            right: `20px`,
            width: `80px`,
            height: `125px`,
            zIndex: 30,
          },
          children: (0, $.jsxs)(`div`, {
            className: `flex flex-col items-center justify-center pointer-events-none opacity-85 gap-2`,
            children: [
              (0, $.jsx)(`div`, { className: `h-1.5 w-11 rounded-full bg-white/70` }),
              (0, $.jsx)(`div`, { className: `h-1.5 w-11 rounded-full bg-white/70` }),
              (0, $.jsx)(`div`, { className: `h-1.5 w-11 rounded-full bg-white/70` }),
              (0, $.jsx)(`div`, { className: `h-1.5 w-11 rounded-full bg-white/70` }),
            ],
          }),
        }),
        (g || C) &&
          (0, $.jsx)(`div`, {
            className: `absolute inset-0 flex items-center justify-center bg-foreground/40 p-4`,
            dir: `rtl`,
            children: (0, $.jsxs)(`div`, {
              className: `panel-game w-full max-w-sm bg-card p-6 text-center`,
              children: [
                C
                  ? (0, $.jsxs)($.Fragment, {
                      children: [
                        (0, $.jsx)(`h2`, {
                          className: `font-display text-3xl sm:text-4xl text-accent`,
                          children: C.reason === `crash`
                              ? `راننده آسیب دید!`
                              : `بنزین تمام شد!`,
                        }),
                        C.zombieMode && C.zombieKills > 0
                          ? (0, $.jsxs)(`p`, {
                              className: `mt-1 font-display text-xl text-red-400 font-bold`,
                              children: [
                                `💀 `,
                                Io(C.zombieKills),
                                ` زامبی متلاشی شد!`,
                              ],
                            })
                          : C.record &&
                            (0, $.jsx)(`p`, {
                              className: `mt-1 font-display text-2xl text-secondary`,
                              children: `رکورد جدید!`,
                            }),
                        (0, $.jsxs)(`div`, {
                          className: `mt-4 space-y-1 text-lg font-semibold`,
                          children: [
                            (0, $.jsxs)(`p`, {
                              children: [`مسافت: `, Io(C.distance), ` متر`],
                            }),
                            (0, $.jsxs)(`p`, {
                              className: `flex items-center justify-center gap-2`,
                              children: [
                                (0, $.jsx)(p, {
                                  className: `size-5 text-coin`,
                                }),
                                ` `,
                                Io(C.coins),
                                ` سکه`,
                              ],
                            }),
                          ],
                        }),
                      ],
                    })
                  : (0, $.jsx)(`h2`, {
                      className: `font-display text-4xl`,
                      children: `توقف`,
                    }),
                (0, $.jsxs)(`div`, {
                  className: `mt-6 flex justify-center gap-3`,
                  children: [
                    !C &&
                      (0, $.jsxs)(`button`, {
                        onClick: () => T(!1),
                        className: `btn-game flex items-center gap-1 bg-secondary px-4 py-2 text-xl text-secondary-foreground`,
                        children: [
                          (0, $.jsx)(b, { className: `size-5` }),
                          ` ادامه`,
                        ],
                      }),
                    (0, $.jsxs)(`button`, {
                      onClick: o,
                      className: `btn-game flex items-center gap-1 bg-primary px-4 py-2 text-xl text-primary-foreground`,
                      children: [
                        (0, $.jsx)(x, { className: `size-5` }),
                        ` دوباره`,
                      ],
                    }),
                    (0, $.jsxs)(`button`, {
                      onClick: s,
                      className: `btn-game flex items-center gap-1 bg-muted px-4 py-2 text-xl`,
                      children: [
                        (0, $.jsx)(h, { className: `size-5` }),
                        ` منو`,
                      ],
                    }),
                  ],
                }),
              ],
            }),
          }),
      ],
    }),
  });
}
var Cu = d(`sparkles`, [
  [
    `path`,
    {
      d: `m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z`,
      key: `spk1`,
    },
  ],
  [`path`, { d: `M5 3v4`, key: `spk2` }],
  [`path`, { d: `M19 17v4`, key: `spk3` }],
]);
var vs = `tappeh-navard-v1`,
  ys = [
    { id: `start`, label: `شروع`, icon: b },
    { id: `garage`, label: `گاراژ`, icon: f },
    { id: `weapons`, label: `زرادخانه`, icon: Cu },
    { id: `upgrades`, label: `ارتقا`, icon: w },
    { id: `maps`, label: `نقشه‌ها`, icon: _ },
    { id: `settings`, label: `تنظیمات`, icon: S },
  ];
function bs({ v: e, className: t = `h-24` }) {
  let n = (0, l.useRef)(null);
  let k = `${e.id}-${e.custom?.weapon || ""}-${e.weapon || ""}-${e.custom?.rim || ""}`;
  (0, l.useEffect)(() => {
    let t = !0;
    return (
      e.sprite && Ko(e.id).then(() => t && r()),
      r(),
      () => {
        t = !1;
      }
    );
  }, [e, k]);
  function r() {
    let t = n.current;
    if (!t) return;
    let r = Math.min(2, window.devicePixelRatio || 1),
      i = t.clientWidth,
      a = t.clientHeight;
    if (!i || !a) return;
    ((t.width = i * r), (t.height = a * r));
    let o = t.getContext(`2d`);
    (o.setTransform(r, 0, 0, r, 0, 0), o.clearRect(0, 0, i, a));
    let s = e.sprite
        ? e.sprite.y + 0.12
        : e.kind === `tractor`
          ? 1.9
          : e.head.y + e.head.r + 0.15,
      c = e.wheelY - e.wheelR - 0.1,
      l = e.sprite ? e.sprite.x : -2.6,
      u = e.sprite ? e.sprite.x + e.sprite.w : 2.6,
      d = Math.min(i / (u - l + 0.2), a / (s - c));
    es(o, e, ts(e, i / 2 - ((l + u) / 2) * d, a / 2 + ((s + c) / 2) * d, d), d);
  }
  return (0, $.jsx)(`canvas`, { ref: n, className: `w-full ${t}` });
}
function xs({ s: e, className: t = `h-14` }) {
  return (0, $.jsx)(`div`, {
    className: t,
    style: {
      background: `linear-gradient(${e.sky[0]}, ${e.sky[1]} 60%, ${e.ground.top} 60%, ${e.ground.fill})`,
    },
  });
}
function Ss({ icon: e, label: t, value: n, onChange: r }) {
  return (0, $.jsxs)(`label`, {
    className: `panel-game flex items-center gap-3 bg-card px-4 py-3`,
    children: [
      (0, $.jsx)(e, { className: `size-6 shrink-0` }),
      (0, $.jsx)(`span`, {
        className: `w-28 shrink-0 font-display text-xl`,
        children: t,
      }),
      (0, $.jsx)(`input`, {
        type: `range`,
        min: 0,
        max: 100,
        value: Math.round(n * 100),
        onChange: (e) => r(Number(e.target.value) / 100),
        className: `h-3 w-full cursor-pointer accent-primary`,
        dir: `ltr`,
      }),
      (0, $.jsx)(`span`, {
        className: `w-10 shrink-0 text-center font-display text-lg`,
        children: Io(Math.round(n * 100)),
      }),
    ],
  });
}
function Cs() {
  let [e, t] = (0, l.useState)(vo),
    [n, r] = (0, l.useState)(!1),
    [i, a] = (0, l.useState)(!1),
    [o, s] = (0, l.useState)(`start`),
    [c, u] = (0, l.useState)(0),
    d = (0, l.useRef)(null),
    [zombieMode, setZombieMode] = (0, l.useState)(!0);
  (!d.current && typeof window < `u` && (d.current = new us()),
    (0, l.useEffect)(() => {
      try {
        let e = localStorage.getItem(vs);
        if (e) {
          let n = vo(),
            r = JSON.parse(e);
          let vId = D.some((d) => d.id === r.vehicle) ? r.vehicle : `beetle`;
          t({
            ...n,
            ...r,
            vehicle: vId,
            coins: 9999999,
            ownedVehicles: D.map((d) => d.id),
            ownedStages: E.map((d) => d.id),
            upgrades: { ...n.upgrades, ...r.upgrades },
            best: { ...n.best, ...r.best },
            custom: { ...n.custom, ...(r.custom || {}) },
          });
        }
      } catch {}
      r(!0);
    }, []),
    (0, l.useEffect)(() => {
      (n && localStorage.setItem(vs, JSON.stringify(e)),
        d.current?.setVolumes(e.music, e.sfx));
    }, [e, n]),
    (0, l.useEffect)(() => {
      d.current?.playMusic(i ? `game` : `menu`);
    }, [i]));
  let f = ee(e.stage),
    m = { ...te(e.vehicle), custom: e.custom?.[e.vehicle] || {} },
    h = (e) => e && t(e);
  return i && d.current
    ? (0, $.jsx)(
        _s,
        {
          stage: f,
          vehicle: m,
          upgrades: e.upgrades[m.id],
          best: e.best[f.id],
          sfx: d.current,
          raceConfig: {
            zombieMode: zombieMode,
          },
          onFinish: (e) => t((t) => Co(t, f.id, e.distance, e.coins)),
          onRetry: () => u((e) => e + 1),
          onMenu: () => a(!1),
        },
        c,
      )
    : (0, $.jsxs)(`main`, {
        className: `flex h-dvh flex-col bg-gradient-to-b from-sky-deep to-sky`,
        onPointerDown: () => d.current?.start(),
        children: [
          (0, $.jsxs)(`header`, {
            className: `flex shrink-0 items-center justify-between gap-2 px-3 pt-2`,
            children: [
              (0, $.jsx)(`h1`, {
                className: `font-display text-3xl text-primary text-outline sm:text-4xl`,
                children: `تپه‌نورد`,
              }),
              (0, $.jsxs)(`div`, {
                className: `panel-game flex items-center gap-2 bg-card px-3 py-1 font-display text-xl`,
                children: [
                  (0, $.jsx)(p, { className: `size-5 text-coin` }),
                  ` `,
                  Io(e.coins),
                ],
              }),
            ],
          }),
          (0, $.jsx)(`nav`, {
            className: `flex shrink-0 justify-center gap-1.5 px-2 py-2 sm:gap-2`,
            "aria-label": `منو`,
            children: ys.map((e) =>
              (0, $.jsxs)(
                `button`,
                {
                  onClick: () => s(e.id),
                  "aria-current": o === e.id ? `page` : void 0,
                  className: `btn-game flex items-center gap-1.5 px-3 py-1.5 text-lg sm:px-4 ${o === e.id ? `bg-primary text-primary-foreground` : `bg-card`}`,
                  children: [
                    (0, $.jsx)(e.icon, { className: `size-5` }),
                    (0, $.jsx)(`span`, { children: e.label }),
                  ],
                },
                e.id,
              ),
            ),
          }),
          (0, $.jsxs)(`section`, {
            className: `mx-auto w-full max-w-4xl flex-1 overflow-y-auto px-3 pb-4`,
            children: [
              o === `start` &&
                (0, $.jsxs)(`div`, {
                  className: `grid h-full items-center gap-3 sm:grid-cols-2`,
                  children: [
                    (0, $.jsxs)(`div`, {
                      className: `panel-game bg-card p-3 text-center`,
                      children: [
                        (0, $.jsx)(bs, { v: m, className: `h-28` }),
                        (0, $.jsx)(`div`, {
                          className: `font-display text-2xl`,
                          children: m.name,
                        }),
                      ],
                    }),
                    (0, $.jsxs)(`div`, {
                      className: `flex flex-col items-center gap-3`,
                      children: [
                        (0, $.jsxs)(`div`, {
                          className: `panel-game w-full overflow-hidden bg-card text-center`,
                          children: [
                            (0, $.jsx)(xs, { s: f, className: `h-10` }),
                            (0, $.jsxs)(`div`, {
                              className: `p-2`,
                              children: [
                                (0, $.jsx)(`div`, {
                                  className: `font-display text-xl`,
                                  children: f.name,
                                }),
                                (0, $.jsxs)(`div`, {
                                  className: `text-sm text-muted-foreground`,
                                  children: [
                                    `رکورد: `,
                                    Io(e.best[f.id] ?? 0),
                                    ` متر`,
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                        (0, $.jsxs)(`div`, {
                          className: `panel-game w-full bg-card p-3 flex flex-col gap-2.5`,
                          children: [
                            (0, $.jsxs)(`div`, {
                              className: `flex items-center justify-between border-b border-border/40 pb-2`,
                              children: [
                                (0, $.jsx)(`span`, {
                                  className: `font-display text-base sm:text-lg`,
                                  children: `حالت بازی:`,
                                }),
                                (0, $.jsxs)(`div`, {
                                  className: `flex gap-1.5`,
                                  children: [
                                    (0, $.jsx)(`button`, {
                                      type: `button`,
                                      onClick: () => setZombieMode(!0),
                                      className: `btn-game px-3 py-1.5 text-xs sm:text-sm ${zombieMode ? `bg-red-600 text-white font-bold ring-2 ring-red-400` : `bg-muted text-muted-foreground`}`,
                                      children: `🧟 حالت زامبی (خردکن)`,
                                    }),
                                    (0, $.jsx)(`button`, {
                                      type: `button`,
                                      onClick: () => setZombieMode(!1),
                                      className: `btn-game px-3 py-1.5 text-xs sm:text-sm ${!zombieMode ? `bg-primary text-primary-foreground font-bold` : `bg-muted text-muted-foreground`}`,
                                      children: `🏔️ تپه‌نوردی آزاد`,
                                    }),
                                  ],
                                }),
                              ],
                            }),
                            zombieMode
                              ? (0, $.jsxs)(`div`, {
                                  className: `flex items-center justify-between text-xs text-muted-foreground pt-0.5`,
                                  children: [
                                    (0, $.jsx)(`span`, {
                                      children: `💀 زامبی‌ها را له کن، امتیاز کومبو و سکه بگیر!`,
                                    }),
                                    (0, $.jsx)(`span`, {
                                      className: `text-red-400 font-bold`,
                                      children: `💥 خرد شدن هیجانی`,
                                    }),
                                  ],
                                })
                              : (0, $.jsx)(`div`, {
                                  className: `text-xs text-muted-foreground pt-0.5`,
                                  children: `حرکت بی‌پایان، رکورد مسافت و بدون زامبی`,
                                }),
                          ],
                        }),
                        (0, $.jsx)(`button`, {
                          onClick: () => {
                            (d.current?.start(),
                              matchMedia(`(pointer: coarse)`).matches &&
                                !document.fullscreenElement &&
                                document.documentElement
                                  .requestFullscreen?.()
                                  .then(() =>
                                    screen.orientation.lock?.(`landscape`),
                                  )
                                  .catch(() => {}),
                              u((e) => e + 1),
                              a(!0));
                          },
                          className: `btn-game px-12 py-3 text-3xl sm:text-4xl ${zombieMode ? `bg-red-600 text-white hover:bg-red-700` : `bg-secondary text-secondary-foreground`}`,
                          children: zombieMode ? `🧟 خرد کردن زامبی‌ها!` : `حرکت!`,
                        })
                      ],
                    }),
                  ],
                }),
              o === `garage` &&
                (0, $.jsx)(`div`, {
                  className: `grid grid-cols-2 gap-3 sm:grid-cols-3`,
                  children: [...D]
                    .sort((e, t) => e.price - t.price)
                    .map((n) => {
                      let r = e.ownedVehicles.includes(n.id),
                        i = e.vehicle === n.id;
                      return (0, $.jsxs)(
                        `div`,
                        {
                          className: `panel-game bg-card p-3 ${i ? `ring-4 ring-primary` : ``}`,
                          children: [
                            (0, $.jsx)(bs, { v: n }),
                            (0, $.jsx)(`div`, {
                              className: `mt-1 text-center font-display text-xl`,
                              children: n.name,
                            }),
                            (0, $.jsx)(`button`, {
                              disabled: i || (!r && e.coins < n.price),
                              onClick: () =>
                                r ? t({ ...e, vehicle: n.id }) : h(xo(e, n)),
                              className: `btn-game mt-2 flex w-full items-center justify-center gap-1 bg-primary py-1 text-lg text-primary-foreground`,
                              children: i
                                ? `انتخاب شده`
                                : r
                                  ? `انتخاب`
                                  : (0, $.jsxs)($.Fragment, {
                                      children: [
                                        (0, $.jsx)(g, { className: `size-4` }),
                                        ` `,
                                        Io(n.price),
                                        ` سکه`,
                                      ],
                                    }),
                            }),
                          ],
                        },
                        n.id,
                      );
                    }),
                }),
              o === `weapons` &&
                (0, $.jsxs)(`div`, {
                  className: `flex flex-col gap-3`,
                  children: [
                    (0, $.jsxs)(`div`, {
                      className: `panel-game bg-card p-3 text-center shadow-lg border border-primary/30`,
                      children: [
                        (0, $.jsx)(bs, { v: m, className: `h-32` }),
                        (0, $.jsxs)(`div`, {
                          className: `font-display text-2xl text-foreground mt-1 flex items-center justify-center gap-2`,
                          children: [
                            (0, $.jsx)(`span`, { className: `text-primary font-bold`, children: `⚔️` }),
                            m.name,
                            ` · زرادخانه و تجهیز سلاح`,
                          ],
                        }),
                        (0, $.jsx)(`p`, {
                          className: `text-xs text-muted-foreground mt-0.5`,
                          children: `سلاح دلخواه را انتخاب و ارتقا دهید تا روی سقف خودرو نصب و آماده شلیک در بازی شود`,
                        }),
                      ],
                    }),
                    (0, $.jsxs)(`div`, {
                      className: `panel-game bg-card p-3`,
                      children: [
                        (0, $.jsx)(`div`, {
                          className: `mb-2 font-display text-lg text-primary flex items-center justify-between`,
                          children: [
                            (0, $.jsx)(`span`, { children: `انتخاب سلاح سنگین نصب‌شده روی خودرو` }),
                            (0, $.jsx)(`span`, { className: `text-xs text-secondary font-bold`, children: `آماده نبرد` }),
                          ],
                        }),
                        (0, $.jsx)(`div`, {
                          className: `grid grid-cols-1 sm:grid-cols-2 gap-2.5`,
                          children: [
                            {
                              id: `minigun`,
                              name: `تیربار روتاری ۶ لول ولکان M134`,
                              desc: `نرخ شلیک دیوانه‌وار ۷.۶۲ میلیمتری، عالی برای قلع‌وقمع لشکرهای زامبی`,
                              badge: `سرعت آتش بالا`,
                              color: `#ffcc00`,
                            },
                            {
                              id: `autocannon`,
                              name: `توپ سنگین ۳۰ میلیمتری ضد زره`,
                              desc: `پرتابه‌های کالیبر سنگین تخریب‌گر با لگد سنگین و نصف‌کردن زامبی‌های غول‌آسا`,
                              badge: `تخریب سنگین`,
                              color: `#ff4400`,
                            },
                            {
                              id: `plasma`,
                              name: `توپ دوگانه پلاسما فوتونی`,
                              desc: `پرتوهای فوق‌حرارتی متراکم نئونی که گوشت و استخوان زامبی را بخار می‌کند`,
                              badge: `فناوری پیشرفته`,
                              color: `#00e5ff`,
                            },
                            {
                              id: `missile`,
                              name: `راکت‌انداز تهاجمی ۴ لول هایپرباریک`,
                              desc: `شلیک راکت‌های انفجاری با موج انفجار وسیع و متلاشی‌کردن دسته‌جمعی`,
                              badge: `تخریب منطقه‌ای`,
                              color: `#ef4444`,
                            },
                          ].map((wp) => {
                            let isEquipped = (m.weapon || m.custom?.weapon || `minigun`) === wp.id;
                            return (0, $.jsxs)(`button`, {
                              key: wp.id,
                              onClick: () => {
                                let curCustom = e.custom || {};
                                let carCustom = curCustom[m.id] || {};
                                let newCustom = {
                                  ...curCustom,
                                  [m.id]: { ...carCustom, weapon: wp.id },
                                };
                                t({ ...e, custom: newCustom });
                              },
                              className: `flex flex-col text-right rounded-xl border-2 p-3 transition-all ${isEquipped ? `border-primary bg-primary/20 shadow-md scale-[1.01]` : `border-outline bg-muted/40 hover:bg-muted/70`}`,
                              children: [
                                (0, $.jsxs)(`div`, {
                                  className: `flex items-center justify-between gap-2`,
                                  children: [
                                    (0, $.jsx)(`span`, {
                                      className: `font-display text-base font-bold text-foreground`,
                                      children: wp.name,
                                    }),
                                    (0, $.jsx)(`span`, {
                                      className: `rounded-md px-2 py-0.5 text-[10px] font-bold ${isEquipped ? `bg-primary text-primary-foreground` : `bg-black/30 text-muted-foreground`}`,
                                      children: isEquipped ? `نصب شده ✔` : `انتخاب`,
                                    }),
                                  ],
                                }),
                                (0, $.jsx)(`p`, {
                                  className: `text-xs text-muted-foreground mt-1 line-clamp-2`,
                                  children: wp.desc,
                                }),
                                (0, $.jsxs)(`div`, {
                                  className: `mt-2 flex items-center justify-between text-[11px] font-semibold`,
                                  children: [
                                    (0, $.jsx)(`span`, {
                                      style: { color: wp.color },
                                      children: wp.badge,
                                    }),
                                    (0, $.jsx)(`span`, {
                                      className: `text-primary font-bold`,
                                      children: `رایگان (تست نامحدود)`,
                                    }),
                                  ],
                                }),
                              ],
                            });
                          }),
                        }),
                      ],
                    }),
                    (0, $.jsxs)(`div`, {
                      className: `panel-game bg-card p-3`,
                      children: [
                        (0, $.jsx)(`div`, {
                          className: `mb-2 font-display text-lg text-primary`,
                          children: `ارتقای مشخصات فنی سلاح خودرو`,
                        }),
                        (0, $.jsx)(`div`, {
                          className: `grid grid-cols-1 sm:grid-cols-2 gap-3`,
                          children: [
                            { id: `damage`, name: `قدرت تخریب (Damage)`, icon: `💥` },
                            { id: `fireRate`, name: `سرعت شلیک (Fire Rate)`, icon: `⚡` },
                            { id: `cooling`, name: `خنک‌کننده و خشاب (Cooling)`, icon: `❄️` },
                            { id: `impact`, name: `نفوذ و انفجار (Penetration)`, icon: `🎯` },
                          ].map((up) => {
                            let curCustom = e.custom || {};
                            let carCustom = curCustom[m.id] || {};
                            let wStats = carCustom.weaponStats || { damage: 1, fireRate: 1, cooling: 1, impact: 1 };
                            let lvl = wStats[up.id] || 1;
                            let isMax = lvl >= 10;
                            return (0, $.jsxs)(`div`, {
                              key: up.id,
                              className: `flex items-center justify-between rounded-xl border border-outline bg-muted/40 p-2.5`,
                              children: [
                                (0, $.jsxs)(`div`, {
                                  className: `flex flex-col`,
                                  children: [
                                    (0, $.jsxs)(`span`, {
                                      className: `font-display text-sm flex items-center gap-1.5`,
                                      children: [(0, $.jsx)(`span`, { children: up.icon }), up.name],
                                    }),
                                    (0, $.jsxs)(`div`, {
                                      className: `flex items-center gap-1 mt-1`,
                                      children: Array.from({ length: 10 }).map((_, i) =>
                                        (0, $.jsx)(`span`, {
                                          key: i,
                                          className: `h-1.5 w-3 rounded-sm ${i < lvl ? `bg-primary shadow-sm` : `bg-black/30`}`,
                                        })
                                      ),
                                    }),
                                  ],
                                }),
                                (0, $.jsx)(`button`, {
                                  disabled: isMax,
                                  onClick: () => {
                                    if (isMax) return;
                                    let nextStats = { ...wStats, [up.id]: Math.min(10, lvl + 1) };
                                    let newCustom = {
                                      ...curCustom,
                                      [m.id]: { ...carCustom, weaponStats: nextStats },
                                    };
                                    t({ ...e, custom: newCustom });
                                  },
                                  className: `btn-game px-3 py-1.5 text-xs font-bold ${isMax ? `bg-muted text-muted-foreground opacity-60 cursor-not-allowed` : `bg-primary text-primary-foreground hover:scale-105 active:scale-95`}`,
                                  children: isMax ? `حداکثر (Lv 10)` : `ارتقا به لول ${lvl + 1}`,
                                }),
                              ],
                            });
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              o === `upgrades` &&
                (0, $.jsxs)($.Fragment, {
                  children: [
                    (0, $.jsx)(`p`, {
                      className: `mb-2 text-center font-display text-xl text-foreground`,
                      children: m.name,
                    }),
                    (0, $.jsx)(`div`, {
                      className: `grid grid-cols-2 gap-3 sm:grid-cols-4`,
                      children: O.map((t) => {
                        let n = e.upgrades[m.id][t.id],
                          r = n >= 10,
                          i = yo(n);
                        return (0, $.jsxs)(
                          `div`,
                          {
                            className: `panel-game bg-card p-3 text-center`,
                            children: [
                              (0, $.jsx)(`div`, {
                                className: `font-display text-xl`,
                                children: t.name,
                              }),
                              (0, $.jsx)(`div`, {
                                className: `text-xs text-muted-foreground`,
                                children: t.hint,
                              }),
                              (0, $.jsx)(`div`, {
                                className: `mt-2 flex justify-center gap-0.5`,
                                dir: `ltr`,
                                children: Array.from({ length: 10 }, (e, t) =>
                                  (0, $.jsx)(
                                    `span`,
                                    {
                                      className: `h-3 w-2 rounded-sm border border-outline ${t < n ? `bg-secondary` : `bg-muted`}`,
                                    },
                                    t,
                                  ),
                                ),
                              }),
                              (0, $.jsx)(`button`, {
                                disabled: r || e.coins < i,
                                onClick: () => h(bo(e, m.id, t.id)),
                                className: `btn-game mt-2 w-full bg-primary py-1 text-lg text-primary-foreground`,
                                children: r ? `حداکثر` : `${Io(i)} سکه`,
                              }),
                            ],
                          },
                          t.id,
                        );
                      }),
                    }),
                  ],
                }),
              o === `maps` &&
                (0, $.jsx)(`div`, {
                  className: `grid grid-cols-2 gap-3 sm:grid-cols-4`,
                  children: E.map((n) => {
                    let r = e.ownedStages.includes(n.id),
                      i = e.stage === n.id;
                    return (0, $.jsxs)(
                      `div`,
                      {
                        className: `panel-game overflow-hidden bg-card ${i ? `ring-4 ring-primary` : ``}`,
                        children: [
                          (0, $.jsx)(xs, { s: n }),
                          (0, $.jsxs)(`div`, {
                            className: `p-3 text-center`,
                            children: [
                              (0, $.jsx)(`div`, {
                                className: `font-display text-xl`,
                                children: n.name,
                              }),
                              (0, $.jsxs)(`div`, {
                                className: `text-xs text-muted-foreground`,
                                children: [
                                  `رکورد: `,
                                  Io(e.best[n.id] ?? 0),
                                  ` م`,
                                ],
                              }),
                              (0, $.jsx)(`button`, {
                                disabled: i || (!r && e.coins < n.price),
                                onClick: () =>
                                  r ? t({ ...e, stage: n.id }) : h(So(e, n)),
                                className: `btn-game mt-2 flex w-full items-center justify-center gap-1 bg-primary py-1 text-lg text-primary-foreground`,
                                children: i
                                  ? `انتخاب شده`
                                  : r
                                    ? `انتخاب`
                                    : (0, $.jsxs)($.Fragment, {
                                        children: [
                                          (0, $.jsx)(g, {
                                            className: `size-4`,
                                          }),
                                          ` `,
                                          Io(n.price),
                                        ],
                                      }),
                              }),
                            ],
                          }),
                        ],
                      },
                      n.id,
                    );
                  }),
                }),
              o === `settings` &&
                (0, $.jsxs)(`div`, {
                  className: `mx-auto flex max-w-lg flex-col gap-3`,
                  children: [
                    (0, $.jsx)(Ss, {
                      icon: v,
                      label: `موسیقی`,
                      value: e.music,
                      onChange: (n) => t({ ...e, music: n }),
                    }),
                    (0, $.jsx)(Ss, {
                      icon: C,
                      label: `صدای افکت‌ها`,
                      value: e.sfx,
                      onChange: (n) => t({ ...e, sfx: n }),
                    }),
                    (0, $.jsx)(`p`, {
                      className: `text-center text-sm text-muted-foreground`,
                      children: `کنترل: دکمه‌ی گاز (راست) و ترمز (چپ) پایین صفحه · روی کامپیوتر ← و →`,
                    }),
                  ],
                }),
            ],
          }),
        ],
      });
}
function ws() {
  return (0, $.jsxs)($.Fragment, {
    children: [
      (0, $.jsx)(Cs, {}),
      (0, $.jsxs)(`div`, {
        className: `fixed inset-0 z-50 hidden flex-col items-center justify-center gap-4 bg-sky-deep p-6 text-center [@media(orientation:portrait)_and_(pointer:coarse)]:flex`,
        children: [
          (0, $.jsx)(`div`, {
            className: `rotate-90 text-7xl`,
            children: `📱`,
          }),
          (0, $.jsx)(`p`, {
            className: `font-display text-3xl text-foreground`,
            children: `گوشی را افقی بگیر`,
          }),
        ],
      }),
    ],
  });
}
export { ws as component };
