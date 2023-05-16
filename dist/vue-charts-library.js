import { computed as u, ref as z, onMounted as I, onUnmounted as S, reactive as q, openBlock as s, createElementBlock as c, normalizeStyle as M, createElementVNode as n, toDisplayString as i, Fragment as b, renderList as w, unref as f, withDirectives as D, vShow as P } from "vue";
const T = (_, x) => {
  const d = _.__vccOpts || _;
  for (const [v, y] of x)
    d[v] = y;
  return d;
}, $ = ["viewBox"], A = {
  x: "35",
  y: "30",
  "text-anchor": "end",
  class: "horizontal_text"
}, H = {
  x: "35",
  y: "55",
  "text-anchor": "end",
  class: "horizontal_text"
}, N = {
  x: "35",
  y: "80",
  "text-anchor": "end",
  class: "horizontal_text"
}, O = {
  x: "35",
  y: "105",
  "text-anchor": "end",
  class: "horizontal_text"
}, U = {
  x: "35",
  y: "130",
  "text-anchor": "end",
  class: "horizontal_text"
}, V = ["x2"], W = ["x2"], X = ["x2"], Y = ["x2"], G = ["x2"], J = ["x"], K = ["x1", "x2"], Q = ["points"], R = ["points"], Z = ["cx", "cy"], ee = ["cx", "cy", "onMouseenter"], oe = { class: "tooltip-atribute tooltip-key" }, te = { class: "tooltip-atribute" }, re = {
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
    }
  },
  setup(_) {
    const x = _, d = u(() => {
      switch (x.color) {
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
    }), v = z(0), y = z(0);
    function C(e) {
      v.value = e.pageX, y.value = e.pageY;
    }
    I(() => window.addEventListener("mousemove", C)), S(() => window.removeEventListener("mousemove", C));
    function L(e, l, o) {
      a.value = !0, a.data.key = e, a.data.value = l.toFixed(4), a.data.index = o;
    }
    function F() {
      a.value = !1, a.data.key = "", a.data.value = "", a.data.index = null;
    }
    const a = q({
      value: !1,
      data: {
        key: "",
        value: 0,
        index: null
      }
    }), t = x.data;
    u(() => window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches);
    const p = u(() => Math.max(...t.map((e) => e.value))), k = u(() => Math.min(...t.map((e) => e.value)));
    function m(e) {
      let l = e - k.value, o = p.value - k.value;
      return (100 - l * 100 / o + 30).toFixed(2);
    }
    const g = u(() => (p.value - k.value) / 4), j = u(() => {
      let e = [];
      for (let l = 0; l < t.length; l++)
        e.push(l * 40 + 40), e.push(m(t[l].value));
      return e.join(" ");
    }), B = u(() => {
      let e = [40, 130];
      for (let o = 0; o < t.length; o++)
        e.push(o * 40 + 40), e.push(m(t[o].value));
      let l = t.length * 40;
      return e.push(l, 130), e.join(" ");
    }), E = u(() => `0 0 ${t.length * 40 + 30} 150`), h = u(() => t.length * 40);
    return (e, l) => (s(), c("div", {
      style: M({
        "--color": d.value.op500,
        "--color-200": d.value.op200,
        "--color-300": d.value.op300
      })
    }, [
      (s(), c("svg", {
        class: "svg",
        viewBox: E.value,
        xmlns: "http://www.w3.org/2000/svg"
      }, [
        n("text", A, i(p.value), 1),
        n("text", H, i((p.value - g.value).toFixed(0)), 1),
        n("text", N, i((p.value - g.value * 2).toFixed(0)), 1),
        n("text", O, i((p.value - g.value * 3).toFixed(0)), 1),
        n("text", U, i(k.value), 1),
        n("line", {
          class: "line_color",
          x1: "40",
          y1: "30",
          x2: h.value,
          y2: "30",
          stroke: "currentColor",
          "stroke-width": "0.4"
        }, null, 8, V),
        n("line", {
          class: "line_color",
          x1: "40",
          y1: "55",
          x2: h.value,
          y2: "55",
          stroke: "currentColor",
          "stroke-width": "0.4"
        }, null, 8, W),
        n("line", {
          class: "line_color",
          x1: "40",
          y1: "80",
          x2: h.value,
          y2: "80",
          stroke: "currentColor",
          "stroke-width": "0.4"
        }, null, 8, X),
        n("line", {
          class: "line_color",
          x1: "40",
          y1: "105",
          x2: h.value,
          y2: "105",
          stroke: "currentColor",
          "stroke-width": "0.4"
        }, null, 8, Y),
        n("line", {
          class: "line_color",
          x1: "40",
          y1: "130",
          x2: h.value,
          y2: "130",
          stroke: "currentColor",
          "stroke-width": "0.4"
        }, null, 8, G),
        (s(!0), c(b, null, w(f(t), (o, r) => (s(), c("text", {
          key: r,
          x: r * 40 + 40,
          y: "145",
          "text-anchor": "middle"
        }, i(o.key), 9, J))), 128)),
        (s(!0), c(b, null, w(f(t), (o, r) => (s(), c("line", {
          key: r,
          x1: r * 40 + 40,
          y1: "30",
          x2: r * 40 + 40,
          y2: "130",
          stroke: "currentColor",
          "stroke-dasharray": "2,5",
          class: "line_color",
          "stroke-width": "0.5"
        }, null, 8, K))), 128)),
        n("polygon", {
          points: B.value,
          class: "polygon",
          stroke: "currentColor",
          "stroke-width": "0",
          "stroke-linejoin": "round"
        }, null, 8, Q),
        n("polyline", {
          points: j.value,
          stroke: "currentColor",
          "stroke-width": "1.5",
          "stroke-linecap": "round",
          fill: "none",
          "stroke-linejoin": "round"
        }, null, 8, R),
        (s(!0), c(b, null, w(f(t), (o, r) => (s(), c("circle", {
          key: r,
          cx: r * 40 + 40,
          cy: m(o.value),
          r: "2.5",
          fill: "currentColor"
        }, null, 8, Z))), 128)),
        (s(!0), c(b, null, w(f(t), (o, r) => (s(), c("circle", {
          key: r,
          cx: r * 40 + 40,
          cy: m(o.value),
          r: "7",
          class: "circle",
          onMouseenter: (ne) => L(f(t)[r].key, o.value, r),
          onMouseleave: F
        }, null, 40, ee))), 128))
      ], 8, $)),
      D(n("div", {
        style: M({
          "--x": (a.data.index + 1 > f(t).length / 2 ? v.value - 150 : v.value) + "px",
          "--y": y.value - 75 + "px",
          "--color-200-20": d.value.op200 + "20"
        }),
        class: "tooltip"
      }, [
        n("div", oe, i(a.data.key), 1),
        n("div", te, i(a.data.value), 1)
      ], 4), [
        [P, a.value]
      ])
    ], 4));
  }
}, le = /* @__PURE__ */ T(re, [["__scopeId", "data-v-042fba4a"]]);
require("./style.css");
export {
  le as LineChart
};
