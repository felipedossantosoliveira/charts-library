import { computed as x, ref as B, onMounted as A, onUnmounted as P, reactive as W, openBlock as a, createElementBlock as l, normalizeStyle as d, createElementVNode as e, toDisplayString as _, Fragment as y, renderList as b, unref as $, withDirectives as V, vShow as X, createCommentVNode as T, createTextVNode as Y, pushScopeId as D, popScopeId as O } from "vue";
const H = (p, c) => {
  const m = p.__vccOpts || p;
  for (const [M, E] of c)
    m[M] = E;
  return m;
}, G = ["viewBox"], J = ["x2"], K = ["x2"], Q = ["x2"], R = ["x2"], Z = ["x2"], ee = ["x"], te = ["x1", "x2"], oe = ["points"], ae = ["values"], le = ["points"], re = ["values"], ne = ["cx", "cy"], se = ["values"], ce = ["cx", "cy", "onMouseenter"], ue = ["values"], ie = { class: "tooltip-atribute tooltip-key" }, de = { class: "tooltip-atribute" }, pe = {
  __name: "LineChart",
  props: {
    color: {
      type: String,
      required: !1,
      default: "red"
    },
    data: {
      type: Array,
      required: !0
    },
    theme: {
      type: String,
      required: !1,
      default: "light"
    }
  },
  setup(p) {
    const c = p, m = x(() => {
      switch (c.color) {
        case "amber":
          return {
            op200: "#fde68a",
            op300: "#fcd34d",
            op500: "#f59e0b"
          };
        case "blue":
          return {
            op200: "#bfdbff",
            op300: "#93c5fd",
            op500: "#3b82f6"
          };
        case "cyan":
          return {
            op200: "#a5f3fc",
            op300: "#67e8f9",
            op500: "#06b6d4"
          };
        case "emerald":
          return {
            op200: "#a7f3d0",
            op300: "#6ee7b7",
            op500: "#10b981"
          };
        case "fuchsia":
          return {
            op200: "#f5d0fe",
            op300: "#f0abfc",
            op500: "#d946ef"
          };
        case "gray":
          return {
            op200: "#e5e7eb",
            op300: "#d1d5db",
            op500: "#6b7280"
          };
        case "green":
          return {
            op200: "#bbf7d0",
            op300: "#86efac",
            op500: "#22c55e"
          };
        case "indigo":
          return {
            op200: "#c7d2fe",
            op300: "#a5b4fc",
            op500: "#6366f1"
          };
        case "lime":
          return {
            op200: "#d9f99d",
            op300: "#bee264",
            op500: "#84cc16"
          };
        case "neutral":
          return {
            op200: "#e5e5e5",
            op300: "#d4d4d4",
            op500: "#737373"
          };
        case "orange":
          return {
            op200: "#fed7aa",
            op300: "#fdba74",
            op500: "#f97316"
          };
        case "pink":
          return {
            op200: "#fbcfe8",
            op300: "#f9a8d4",
            op500: "#ec4899"
          };
        case "purple":
          return {
            op200: "#e9d5ff",
            op300: "#d8b4fe",
            op500: "#a855f7"
          };
        case "red":
          return {
            op200: "#fecaca",
            op300: "#fca5a5",
            op500: "#ef4444"
          };
        case "rose":
          return {
            op200: "#fecdd3",
            op300: "#fda4af",
            op500: "#f43f5e"
          };
        case "sky":
          return {
            op200: "#bae6fd",
            op300: "#7dd3fc",
            op500: "#0ea5e9"
          };
        case "slate":
          return {
            op200: "#e2e8f0",
            op300: "#cbd5e1",
            op500: "#64748b"
          };
        case "stone":
          return {
            op200: "#e7e5e4",
            op300: "#d6d3d1",
            op500: "#78716c"
          };
        case "teal":
          return {
            op200: "#99f6e4",
            op300: "#5eead4",
            op500: "#14b8a6"
          };
        case "violet":
          return {
            op200: "#ddd6fe",
            op300: "#c4b5fd",
            op500: "#8b5cf6"
          };
        case "yellow":
          return {
            op200: "#fef08a",
            op300: "#fde047",
            op500: "#e6b308"
          };
        case "zinc":
          return {
            op200: "#e4e4e7",
            op300: "#d4d4d8",
            op500: "#717179"
          };
        default:
          return {
            op200: "#fed7aa",
            op300: "#fdba74",
            op500: "#f97316"
          };
      }
    }), M = B(0), E = B(0);
    function F(s) {
      M.value = s.pageX, E.value = s.pageY;
    }
    A(() => window.addEventListener("mousemove", F)), P(() => window.removeEventListener("mousemove", F));
    function k(s, r, o) {
      u.value = !0, u.data.key = s, u.data.value = r.toFixed(4), u.data.index = o;
    }
    function N() {
      u.value = !1, u.data.key = "", u.data.value = "", u.data.index = null;
    }
    const u = W({
      value: !1,
      data: {
        key: "",
        value: 0,
        index: null
      }
    }), h = c.data, i = x(() => Math.max(...h.map((s) => s.value))), I = x(() => Math.min(...h.map((s) => s.value)));
    function L(s) {
      let r = s - I.value, o = i.value - I.value;
      return (100 - r * 100 / o + 30).toFixed(2);
    }
    const f = x(() => (i.value - I.value) / 4), g = x(() => {
      let s = [];
      for (let r = 0; r < h.length; r++)
        s.push(r * 40 + 40), s.push(L(h[r].value));
      return s.join(" ");
    }), v = x(() => {
      let s = [];
      for (let r = 0; r < h.length; r++)
        s.push(r * 40 + 40), s.push(80);
      return s.join(" ");
    }), w = x(() => {
      let s = [40, 130];
      for (let o = 0; o < h.length; o++)
        s.push(o * 40 + 40), s.push(L(h[o].value));
      let r = h.length * 40;
      return s.push(r, 130), s.join(" ");
    }), z = x(() => {
      let s = [40, 130];
      for (let o = 0; o < h.length; o++)
        s.push(o * 40 + 40), s.push(80);
      let r = h.length * 40;
      return s.push(r, 130), s.join(" ");
    }), S = x(() => `0 0 ${h.length * 40 + 30} 150`), j = x(() => h.length * 40);
    return (s, r) => (a(), l("div", {
      style: d({
        "--color": m.value.op500,
        "--color-200": m.value.op200,
        "--color-300": m.value.op300
      })
    }, [
      (a(), l("svg", {
        class: "svg",
        viewBox: S.value,
        xmlns: "http://www.w3.org/2000/svg"
      }, [
        e("text", {
          style: d("fill: " + (c.theme === "dark" ? "#ffffff" : "#000000")),
          x: "35",
          y: "30",
          "text-anchor": "end",
          class: "horizontal_text"
        }, _(i.value), 5),
        e("text", {
          style: d("fill: " + (c.theme === "dark" ? "#ffffff" : "#000000")),
          x: "35",
          y: "55",
          "text-anchor": "end",
          class: "horizontal_text"
        }, _((i.value - f.value).toFixed(0)), 5),
        e("text", {
          style: d("fill: " + (c.theme === "dark" ? "#ffffff" : "#000000")),
          x: "35",
          y: "80",
          "text-anchor": "end",
          class: "horizontal_text"
        }, _((i.value - f.value * 2).toFixed(0)), 5),
        e("text", {
          style: d("fill: " + (c.theme === "dark" ? "#ffffff" : "#000000")),
          x: "35",
          y: "105",
          "text-anchor": "end",
          class: "horizontal_text"
        }, _((i.value - f.value * 3).toFixed(0)), 5),
        e("text", {
          style: d("fill: " + (c.theme === "dark" ? "#ffffff" : "#000000")),
          x: "35",
          y: "130",
          "text-anchor": "end",
          class: "horizontal_text"
        }, _(I.value), 5),
        e("line", {
          class: "line_color",
          x1: "40",
          y1: "30",
          x2: j.value,
          y2: "30",
          stroke: "currentColor",
          "stroke-width": "0.4"
        }, null, 8, J),
        e("line", {
          class: "line_color",
          x1: "40",
          y1: "55",
          x2: j.value,
          y2: "55",
          stroke: "currentColor",
          "stroke-width": "0.4"
        }, null, 8, K),
        e("line", {
          class: "line_color",
          x1: "40",
          y1: "80",
          x2: j.value,
          y2: "80",
          stroke: "currentColor",
          "stroke-width": "0.4"
        }, null, 8, Q),
        e("line", {
          class: "line_color",
          x1: "40",
          y1: "105",
          x2: j.value,
          y2: "105",
          stroke: "currentColor",
          "stroke-width": "0.4"
        }, null, 8, R),
        e("line", {
          class: "line_color",
          x1: "40",
          y1: "130",
          x2: j.value,
          y2: "130",
          stroke: "currentColor",
          "stroke-width": "0.4"
        }, null, 8, Z),
        (a(!0), l(y, null, b($(h), (o, t) => (a(), l("text", {
          style: d("fill: " + (c.theme === "dark" ? "#ffffff" : "#000000")),
          key: t,
          x: t * 40 + 40,
          y: "145",
          "text-anchor": "middle"
        }, _(o.key), 13, ee))), 128)),
        (a(!0), l(y, null, b($(h), (o, t) => (a(), l("line", {
          key: t,
          x1: t * 40 + 40,
          y1: "30",
          x2: t * 40 + 40,
          y2: "130",
          stroke: "currentColor",
          "stroke-dasharray": "2,5",
          class: "line_color",
          "stroke-width": "0.5"
        }, null, 8, te))), 128)),
        e("polygon", {
          class: "polygon",
          stroke: "currentColor",
          points: w.value,
          "stroke-width": "0",
          "stroke-linejoin": "round"
        }, [
          e("animate", {
            attributeName: "points",
            dur: "0.3s",
            repeatCount: "1",
            values: z.value + ";" + w.value,
            keyTimes: "0; 1"
          }, null, 8, ae)
        ], 8, oe),
        e("polyline", {
          stroke: "currentColor",
          "stroke-width": "1.5",
          points: g.value,
          "stroke-linecap": "round",
          fill: "none",
          "stroke-linejoin": "round"
        }, [
          e("animate", {
            attributeName: "points",
            dur: "0.3s",
            repeatCount: "1",
            values: v.value + ";" + g.value,
            keyTimes: "0; 1"
          }, null, 8, re)
        ], 8, le),
        (a(!0), l(y, null, b($(h), (o, t) => (a(), l("circle", {
          key: t,
          cx: t * 40 + 40,
          cy: L(o.value),
          r: "2.5",
          fill: "currentColor"
        }, [
          e("animate", {
            attributeName: "cy",
            dur: "0.3s",
            repeatCount: "1",
            values: "80;" + L(o.value),
            keyTimes: "0; 1"
          }, null, 8, se)
        ], 8, ne))), 128)),
        (a(!0), l(y, null, b($(h), (o, t) => (a(), l("circle", {
          key: t,
          cx: t * 40 + 40,
          cy: L(o.value),
          r: "7",
          class: "circle",
          onMouseenter: (n) => k($(h)[t].key, o.value, t),
          onMouseleave: N
        }, [
          e("animate", {
            attributeName: "cy",
            dur: "0.3s",
            repeatCount: "1",
            values: "80;" + L(o.value),
            keyTimes: "0;1"
          }, null, 8, ue)
        ], 40, ce))), 128))
      ], 8, G)),
      V(e("div", {
        style: d({
          "--x": (u.data.index + 1 > $(h).length / 2 ? M.value - 150 : M.value) + "px",
          "--y": E.value - 75 + "px",
          "--color-200-20": m.value.op300 + "70"
        }),
        class: "tooltip"
      }, [
        e("div", ie, _(u.data.key), 1),
        e("div", de, _(u.data.value), 1)
      ], 4), [
        [X, u.value]
      ])
    ], 4));
  }
}, ut = /* @__PURE__ */ H(pe, [["__scopeId", "data-v-a7215e30"]]);
const fe = (p) => (D("data-v-3b9c0d9f"), p = p(), O(), p), he = ["viewBox"], ve = ["x2"], ye = ["x2"], _e = ["x2"], ke = ["x2"], xe = ["x2"], me = ["x"], be = ["x1", "x2"], ge = ["points"], we = ["values"], $e = ["points"], Ce = ["values"], Me = ["cx", "cy"], Ie = ["values"], Le = ["cx", "cy", "onMouseenter"], ze = ["values"], Ee = { class: "tooltip-atribute tooltip-key" }, je = { class: "tooltip-atribute" }, Fe = { class: "items-check-container" }, Te = ["onClick"], Se = {
  key: 0,
  width: "15px",
  height: "15px",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  "stroke-width": "2.5",
  stroke: "currentColor"
}, qe = /* @__PURE__ */ fe(() => /* @__PURE__ */ e("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M4.5 12.75l6 6 9-13.5"
}, null, -1)), Be = [
  qe
], Ne = {
  __name: "MultiLineChart",
  props: {
    keys: {
      type: Array,
      required: !0
    },
    data: {
      type: Array,
      required: !1
    },
    theme: {
      type: String,
      required: !1,
      default: "light"
    }
  },
  setup(p) {
    const c = p;
    function m(r) {
      switch (r) {
        case "amber":
          return {
            op200: "#fde68a",
            op300: "#fcd34d",
            op500: "#f59e0b"
          };
        case "blue":
          return {
            op200: "#bfdbff",
            op300: "#93c5fd",
            op500: "#3b82f6"
          };
        case "cyan":
          return {
            op200: "#a5f3fc",
            op300: "#67e8f9",
            op500: "#06b6d4"
          };
        case "emerald":
          return {
            op200: "#a7f3d0",
            op300: "#6ee7b7",
            op500: "#10b981"
          };
        case "fuchsia":
          return {
            op200: "#f5d0fe",
            op300: "#f0abfc",
            op500: "#d946ef"
          };
        case "gray":
          return {
            op200: "#e5e7eb",
            op300: "#d1d5db",
            op500: "#6b7280"
          };
        case "green":
          return {
            op200: "#bbf7d0",
            op300: "#86efac",
            op500: "#22c55e"
          };
        case "indigo":
          return {
            op200: "#c7d2fe",
            op300: "#a5b4fc",
            op500: "#6366f1"
          };
        case "lime":
          return {
            op200: "#d9f99d",
            op300: "#bee264",
            op500: "#84cc16"
          };
        case "neutral":
          return {
            op200: "#e5e5e5",
            op300: "#d4d4d4",
            op500: "#737373"
          };
        case "orange":
          return {
            op200: "#fed7aa",
            op300: "#fdba74",
            op500: "#f97316"
          };
        case "pink":
          return {
            op200: "#fbcfe8",
            op300: "#f9a8d4",
            op500: "#ec4899"
          };
        case "purple":
          return {
            op200: "#e9d5ff",
            op300: "#d8b4fe",
            op500: "#a855f7"
          };
        case "red":
          return {
            op200: "#fecaca",
            op300: "#fca5a5",
            op500: "#ef4444"
          };
        case "rose":
          return {
            op200: "#fecdd3",
            op300: "#fda4af",
            op500: "#f43f5e"
          };
        case "sky":
          return {
            op200: "#bae6fd",
            op300: "#7dd3fc",
            op500: "#0ea5e9"
          };
        case "slate":
          return {
            op200: "#e2e8f0",
            op300: "#cbd5e1",
            op500: "#64748b"
          };
        case "stone":
          return {
            op200: "#e7e5e4",
            op300: "#d6d3d1",
            op500: "#78716c"
          };
        case "teal":
          return {
            op200: "#99f6e4",
            op300: "#5eead4",
            op500: "#14b8a6"
          };
        case "violet":
          return {
            op200: "#ddd6fe",
            op300: "#c4b5fd",
            op500: "#8b5cf6"
          };
        case "yellow":
          return {
            op200: "#fef08a",
            op300: "#fde047",
            op500: "#e6b308"
          };
        case "zinc":
          return {
            op200: "#e4e4e7",
            op300: "#d4d4d8",
            op500: "#717179"
          };
        default:
          return {
            op200: "#fed7aa",
            op300: "#fdba74",
            op500: "#f97316"
          };
      }
    }
    const M = B(0), E = B(0);
    function F(r) {
      M.value = r.pageX, E.value = r.pageY;
    }
    A(() => window.addEventListener("mousemove", F)), P(() => window.removeEventListener("mousemove", F));
    function k(r, o, t, n) {
      u.value = !0, u.data.key = r, u.data.value = o.toFixed(4), u.data.index = t, u.data.line = n;
    }
    function N() {
      u.value = !1, u.data.key = "", u.data.value = "", u.data.index = null, u.data.line = 1;
    }
    const u = W({
      value: !1,
      data: {
        key: "",
        value: 0,
        index: null,
        line: 1
      }
    }), h = c.data, i = c.data, I = x(() => {
      let r = [];
      return i.forEach((o) => {
        r.push(Math.max(...o.data.map((t) => t.value)));
      }), Math.max(...r);
    }), L = x(() => {
      let r = [];
      return i.forEach((o) => {
        r.push(Math.min(...o.data.map((t) => t.value)));
      }), Math.min(...r);
    });
    function f(r) {
      let o = r - L.value, t = I.value - L.value;
      return (100 - o * 100 / t + 30).toFixed(2);
    }
    const g = x(() => (I.value - L.value) / 4);
    x(() => {
      let r = [];
      for (let o = 0; o < h.length; o++)
        r.push(o * 40 + 40), r.push(f(h[o].value));
      return r.join(" ");
    });
    const v = x(() => {
      let r = [], o = [];
      return i.forEach((t) => {
        for (let n = 0; n < t.data.length; n++)
          o.push(n * 40 + 40), o.push(f(t.data[n].value));
        r.push({ points: o.join(" "), color: m(t.color) }), o = [];
      }), r;
    }), w = x(() => {
      let r = [], o = [];
      return i.forEach((t) => {
        for (let n = 0; n < t.data.length; n++)
          o.push(n * 40 + 40), o.push(80);
        r.push({ points: o.join(" ") }), o = [];
      }), r;
    }), z = x(() => {
      let r = [], o = [40, 130];
      return i.forEach((t) => {
        for (let C = 0; C < t.data.length; C++)
          o.push(C * 40 + 40), o.push(f(t.data[C].value));
        let n = t.data.length * 40;
        o.push(n, 130), r.push({ points: o.join(" "), color: m(t.color) }), o = [40, 130];
      }), r;
    }), S = x(() => {
      let r = [], o = [40, 130];
      return i.forEach((t) => {
        for (let C = 0; C < t.data.length; C++)
          o.push(C * 40 + 40), o.push(80);
        let n = t.data.length * 40;
        o.push(n, 130), r.push({ points: o.join(" ") }), o = [40, 130];
      }), r;
    }), j = x(() => `0 0 ${i[1].data.length * 40 + 30} 150`), s = x(() => i[1].data.length * 40);
    return (r, o) => (a(), l(y, null, [
      e("div", null, [
        (a(), l("svg", {
          class: "svg",
          viewBox: j.value,
          xmlns: "http://www.w3.org/2000/svg"
        }, [
          e("text", {
            style: d("fill: " + (c.theme === "dark" ? "#ffffff" : "#000000")),
            x: "35",
            y: "30",
            "text-anchor": "end",
            class: "horizontal_text"
          }, _(I.value), 5),
          e("text", {
            style: d("fill: " + (c.theme === "dark" ? "#ffffff" : "#000000")),
            x: "35",
            y: "55",
            "text-anchor": "end",
            class: "horizontal_text"
          }, _((I.value - g.value).toFixed(0)), 5),
          e("text", {
            style: d("fill: " + (c.theme === "dark" ? "#ffffff" : "#000000")),
            x: "35",
            y: "80",
            "text-anchor": "end",
            class: "horizontal_text"
          }, _((I.value - g.value * 2).toFixed(0)), 5),
          e("text", {
            style: d("fill: " + (c.theme === "dark" ? "#ffffff" : "#000000")),
            x: "35",
            y: "105",
            "text-anchor": "end",
            class: "horizontal_text"
          }, _((I.value - g.value * 3).toFixed(0)), 5),
          e("text", {
            style: d("fill: " + (c.theme === "dark" ? "#ffffff" : "#000000")),
            x: "35",
            y: "130",
            "text-anchor": "end",
            class: "horizontal_text"
          }, _(L.value), 5),
          e("line", {
            class: "line_color",
            x1: "40",
            y1: "30",
            x2: s.value,
            y2: "30",
            stroke: "currentColor",
            "stroke-width": "0.4"
          }, null, 8, ve),
          e("line", {
            class: "line_color",
            x1: "40",
            y1: "55",
            x2: s.value,
            y2: "55",
            stroke: "currentColor",
            "stroke-width": "0.4"
          }, null, 8, ye),
          e("line", {
            class: "line_color",
            x1: "40",
            y1: "80",
            x2: s.value,
            y2: "80",
            stroke: "currentColor",
            "stroke-width": "0.4"
          }, null, 8, _e),
          e("line", {
            class: "line_color",
            x1: "40",
            y1: "105",
            x2: s.value,
            y2: "105",
            stroke: "currentColor",
            "stroke-width": "0.4"
          }, null, 8, ke),
          e("line", {
            class: "line_color",
            x1: "40",
            y1: "130",
            x2: s.value,
            y2: "130",
            stroke: "currentColor",
            "stroke-width": "0.4"
          }, null, 8, xe),
          (a(!0), l(y, null, b(p.keys, (t, n) => (a(), l("text", {
            key: n,
            x: n * 40 + 40,
            y: "145",
            style: d("fill: " + (c.theme === "dark" ? "#ffffff" : "#000000")),
            "text-anchor": "middle"
          }, _(t.value), 13, me))), 128)),
          (a(!0), l(y, null, b($(i)[1].data, (t, n) => (a(), l("line", {
            key: n,
            x1: n * 40 + 40,
            y1: "30",
            x2: n * 40 + 40,
            y2: "130",
            stroke: "currentColor",
            "stroke-dasharray": "2,5",
            class: "line_color",
            "stroke-width": "0.5"
          }, null, 8, be))), 128)),
          (a(!0), l(y, null, b(z.value, (t, n) => (a(), l("g", null, [
            $(i)[n].checked ? (a(), l("polygon", {
              key: n,
              points: t.points,
              style: d("fill:" + t.color.op300),
              class: "polygon",
              stroke: "currentColor",
              "stroke-width": "0",
              "stroke-linejoin": "round"
            }, [
              e("animate", {
                attributeName: "points",
                dur: "0.3s",
                repeatCount: "1",
                values: S.value[1].points + ";" + t.points,
                keyTimes: "0; 1"
              }, null, 8, we)
            ], 12, ge)) : T("", !0)
          ]))), 256)),
          (a(!0), l(y, null, b(v.value, (t, n) => (a(), l("g", null, [
            $(i)[n].checked ? (a(), l("polyline", {
              key: 0,
              points: t.points,
              style: d("stroke:" + t.color.op500),
              stroke: "currentColor",
              "stroke-width": "1.5",
              "stroke-linecap": "round",
              fill: "none",
              "stroke-linejoin": "round"
            }, [
              e("animate", {
                attributeName: "points",
                dur: "0.3s",
                repeatCount: "1",
                values: w.value[1].points + ";" + t.points,
                keyTimes: "0; 1"
              }, null, 8, Ce)
            ], 12, $e)) : T("", !0)
          ]))), 256)),
          (a(!0), l(y, null, b($(i), (t, n) => (a(), l("g", { key: n }, [
            $(i)[n].checked ? (a(!0), l(y, { key: 0 }, b(t.data, (C, q) => (a(), l("circle", {
              style: d("fill:" + m(t.color).op500),
              cx: q * 40 + 40,
              cy: f(C.value),
              r: "2.5",
              fill: "currentColor"
            }, [
              e("animate", {
                attributeName: "cy",
                dur: "0.3s",
                repeatCount: "1",
                values: "80;" + f(C.value),
                keyTimes: "0; 1"
              }, null, 8, Ie)
            ], 12, Me))), 256)) : T("", !0)
          ]))), 128)),
          (a(!0), l(y, null, b($(i), (t, n) => (a(), l("g", { key: n }, [
            $(i)[n].checked ? (a(!0), l(y, { key: 0 }, b(t.data, (C, q) => (a(), l("circle", {
              style: d("fill:" + m(t.color).op500),
              key: q,
              cx: q * 40 + 40,
              cy: f(C.value),
              r: "7",
              class: "circle",
              onMouseenter: (st) => k(p.keys[q].value, C.value, q, n),
              onMouseleave: N
            }, [
              e("animate", {
                attributeName: "cy",
                dur: "0.3s",
                repeatCount: "1",
                values: "80;" + f(C.value),
                keyTimes: "0; 1"
              }, null, 8, ze)
            ], 44, Le))), 128)) : T("", !0)
          ]))), 128))
        ], 8, he)),
        V(e("div", {
          style: d({
            "--x": (u.data.index + 1 > $(i)[1].data.length / 2 ? M.value - 150 : M.value) + "px",
            "--y": E.value - 75 + "px",
            "--color-200-20": m($(i)[u.data.line].color).op300 + "70",
            "--color": m($(i)[u.data.line].color).op500,
            color: "#000"
          }),
          class: "tooltip"
        }, [
          e("div", Ee, _(u.data.key), 1),
          e("div", je, _(u.data.value), 1)
        ], 4), [
          [X, u.value]
        ])
      ]),
      e("div", Fe, [
        (a(!0), l(y, null, b($(i), (t, n) => (a(), l("div", { key: n }, [
          e("button", {
            onClick: (C) => t.checked = !t.checked,
            style: d({ "border-left-color": m(t.color).op500, color: c.theme === "dark" ? "#ffffff" : "#000000" }),
            class: "checked"
          }, [
            e("div", {
              class: "checkbox",
              style: d({ "background-color": c.theme === "dark" ? "#cccccc20" : "#cccccc90" })
            }, [
              t.checked ? (a(), l("svg", Se, Be)) : T("", !0)
            ], 4),
            Y(" " + _(t.label), 1)
          ], 12, Te)
        ]))), 128))
      ])
    ], 64));
  }
}, it = /* @__PURE__ */ H(Ne, [["__scopeId", "data-v-3b9c0d9f"]]);
const U = (p) => (D("data-v-6a4a7fb7"), p = p(), O(), p), Ae = { class: "all" }, Pe = { class: "interval" }, We = /* @__PURE__ */ U(() => /* @__PURE__ */ e("div", { class: "zero" }, "0", -1)), He = { class: "chart-container" }, Ve = { class: "lines-container" }, Xe = { class: "line-container" }, Ye = { class: "line-container-setup" }, De = { class: "vertical-line" }, Oe = { class: "vertical-line" }, Ue = { class: "last-line-container" }, Ge = { class: "vertical-line" }, Je = { class: "bars-container" }, Ke = { class: "bar-container-top" }, Qe = ["onClick"], Re = { class: "keys-container" }, Ze = { class: "items-check-container" }, et = ["onClick"], tt = {
  key: 0,
  width: "15px",
  height: "15px",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  "stroke-width": "2.5",
  stroke: "currentColor"
}, ot = /* @__PURE__ */ U(() => /* @__PURE__ */ e("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M4.5 12.75l6 6 9-13.5"
}, null, -1)), at = [
  ot
], lt = { class: "tooltip-atribute tooltip-key" }, rt = { class: "tooltip-atribute" }, nt = {
  __name: "BarsChart",
  props: {
    keys: {
      type: Array,
      required: !0
    },
    data: {
      type: Array,
      required: !1
    },
    theme: {
      type: String,
      required: !1,
      default: "light"
    },
    minWidth: {
      type: String,
      required: !1,
      default: null
    }
  },
  setup(p) {
    const c = p;
    function m(f) {
      switch (f) {
        case "amber":
          return {
            op200: "#fde68a",
            op300: "#fcd34d",
            op500: "#f59e0b"
          };
        case "blue":
          return {
            op200: "#bfdbff",
            op300: "#93c5fd",
            op500: "#3b82f6"
          };
        case "cyan":
          return {
            op200: "#a5f3fc",
            op300: "#67e8f9",
            op500: "#06b6d4"
          };
        case "emerald":
          return {
            op200: "#a7f3d0",
            op300: "#6ee7b7",
            op500: "#10b981"
          };
        case "fuchsia":
          return {
            op200: "#f5d0fe",
            op300: "#f0abfc",
            op500: "#d946ef"
          };
        case "gray":
          return {
            op200: "#e5e7eb",
            op300: "#d1d5db",
            op500: "#6b7280"
          };
        case "green":
          return {
            op200: "#bbf7d0",
            op300: "#86efac",
            op500: "#22c55e"
          };
        case "indigo":
          return {
            op200: "#c7d2fe",
            op300: "#a5b4fc",
            op500: "#6366f1"
          };
        case "lime":
          return {
            op200: "#d9f99d",
            op300: "#bee264",
            op500: "#84cc16"
          };
        case "neutral":
          return {
            op200: "#e5e5e5",
            op300: "#d4d4d4",
            op500: "#737373"
          };
        case "orange":
          return {
            op200: "#fed7aa",
            op300: "#fdba74",
            op500: "#f97316"
          };
        case "pink":
          return {
            op200: "#fbcfe8",
            op300: "#f9a8d4",
            op500: "#ec4899"
          };
        case "purple":
          return {
            op200: "#e9d5ff",
            op300: "#d8b4fe",
            op500: "#a855f7"
          };
        case "red":
          return {
            op200: "#fecaca",
            op300: "#fca5a5",
            op500: "#ef4444"
          };
        case "rose":
          return {
            op200: "#fecdd3",
            op300: "#fda4af",
            op500: "#f43f5e"
          };
        case "sky":
          return {
            op200: "#bae6fd",
            op300: "#7dd3fc",
            op500: "#0ea5e9"
          };
        case "slate":
          return {
            op200: "#e2e8f0",
            op300: "#cbd5e1",
            op500: "#64748b"
          };
        case "stone":
          return {
            op200: "#e7e5e4",
            op300: "#d6d3d1",
            op500: "#78716c"
          };
        case "teal":
          return {
            op200: "#99f6e4",
            op300: "#5eead4",
            op500: "#14b8a6"
          };
        case "violet":
          return {
            op200: "#ddd6fe",
            op300: "#c4b5fd",
            op500: "#8b5cf6"
          };
        case "yellow":
          return {
            op200: "#fef08a",
            op300: "#fde047",
            op500: "#e6b308"
          };
        case "zinc":
          return {
            op200: "#e4e4e7",
            op300: "#d4d4d8",
            op500: "#717179"
          };
        default:
          return {
            op200: "#fed7aa",
            op300: "#fdba74",
            op500: "#f97316"
          };
      }
    }
    const M = B(0), E = B(0);
    function F(f) {
      M.value = f.pageX, E.value = f.pageY;
    }
    A(() => window.addEventListener("mousemove", F)), P(() => window.removeEventListener("mousemove", F));
    const k = W({
      show: !1,
      key: "",
      value: 0,
      index: null,
      barIndex: null
    });
    function N(f, g, v) {
      k.show = !0, k.key = c.keys[g].value, k.value = c.data[v].data[g].value, k.barIndex = v, k.index = g, console.log(f);
    }
    function u() {
      k.show = !1, k.key = "", k.value = 0, k.index = null, k.barIndex = null;
    }
    const h = x(() => {
      let f = [];
      return c.data.forEach((g) => {
        f.push(Math.max(...g.data.map((v) => v.value)));
      }), Math.max(...f);
    }), i = x(() => {
      let f = [];
      return c.data.forEach((g) => {
        f.push(Math.min(...g.data.map((v) => v.value)));
      }), Math.min(...f);
    }), I = x(() => (h.value - i.value) / 4);
    function L(f) {
      let g = f - i.value, v = h.value - i.value;
      return (g * 100 / v * 0.9 + 10).toFixed(2);
    }
    return (f, g) => (a(), l(y, null, [
      e("div", Ae, [
        e("div", {
          class: "container",
          style: d(p.minWidth != null ? "min-width:" + p.minWidth : "")
        }, [
          e("div", {
            class: "interval-container",
            style: d(c.theme === "dark" ? "color: #fff" : "color: #000")
          }, [
            e("div", Pe, [
              e("div", null, _(h.value), 1),
              (a(), l(y, null, b(3, (v) => e("div", null, _((h.value - I.value * v).toFixed(0)), 1)), 64)),
              e("div", null, _(i.value), 1)
            ]),
            We
          ], 4),
          e("div", He, [
            e("div", Ve, [
              e("div", Xe, [
                e("div", Ye, [
                  e("div", {
                    class: "line first-line",
                    style: d({
                      "grid-template-columns": "repeat(" + p.keys.length + ", 1fr)"
                    })
                  }, [
                    (a(!0), l(y, null, b(p.keys, (v, w) => (a(), l("div", De))), 256))
                  ], 4),
                  (a(), l(y, null, b(3, (v) => e("div", {
                    class: "line",
                    style: d({
                      "grid-template-columns": "repeat(" + p.keys.length + ", 1fr)"
                    })
                  }, [
                    (a(!0), l(y, null, b(p.keys, (w, z) => (a(), l("div", Oe))), 256))
                  ], 4)), 64))
                ]),
                e("div", Ue, [
                  e("div", {
                    class: "line",
                    style: d({
                      "grid-template-columns": "repeat(" + p.keys.length + ", 1fr)"
                    })
                  }, [
                    (a(!0), l(y, null, b(p.keys, (v, w) => (a(), l("div", Ge))), 256))
                  ], 4)
                ])
              ])
            ]),
            e("div", Je, [
              (a(!0), l(y, null, b(p.keys, (v, w) => (a(), l("div", {
                class: "bar-container",
                key: w
              }, [
                e("div", Ke, [
                  (a(!0), l(y, null, b(p.data, (z, S) => (a(), l("div", {
                    class: "bar-top",
                    onClick: (j) => N(z, w, S),
                    onMouseleave: g[0] || (g[0] = (j) => u()),
                    style: d({
                      "background-color": k.barIndex === S && k.index === w ? m(z.color).op500 : k.index !== null ? m(z.color).op500 + "20" : m(z.color).op500,
                      height: L(z.data[w].value) + "%",
                      cursor: "pointer",
                      width: z.checked ? "100%" : "0%"
                    })
                  }, null, 44, Qe))), 256))
                ])
              ]))), 128))
            ]),
            e("div", Re, [
              (a(!0), l(y, null, b(p.keys, (v, w) => (a(), l("div", {
                key: w,
                class: "key-container",
                style: d(c.theme === "dark" ? "color: #fff" : "color: #000")
              }, _(v.value), 5))), 128))
            ])
          ])
        ], 4)
      ]),
      e("div", Ze, [
        (a(!0), l(y, null, b(c.data, (v, w) => (a(), l("div", { key: w }, [
          e("button", {
            onClick: (z) => v.checked = !v.checked,
            style: d({
              "border-left-color": m(v.color).op500,
              color: c.theme === "dark" ? "#ffffff" : "#000000"
            }),
            class: "checked"
          }, [
            e("div", {
              class: "checkbox",
              style: d({
                "background-color": c.theme === "dark" ? "#cccccc20" : "#cccccc90"
              })
            }, [
              v.checked ? (a(), l("svg", tt, at)) : T("", !0)
            ], 4),
            Y(" " + _(v.label), 1)
          ], 12, et)
        ]))), 128))
      ]),
      k.show ? (a(), l("div", {
        key: 0,
        style: d({
          "--x": (k.index + 1 > c.data[1].data.length / 2 ? M.value - 150 : M.value) + "px",
          "--y": E.value - 75 + "px",
          "--color-200-20": m(c.data[k.barIndex].color).op300 + "70",
          "--color": m(c.data[k.barIndex].color).op300,
          color: "#000"
        }),
        class: "tooltip"
      }, [
        e("div", lt, _(k.key), 1),
        e("div", rt, _(k.value), 1)
      ], 4)) : T("", !0)
    ], 64));
  }
}, dt = /* @__PURE__ */ H(nt, [["__scopeId", "data-v-6a4a7fb7"]]);
require("./style.css");
export {
  dt as BarsChart,
  ut as LineChart,
  it as MultiLineChart
};
