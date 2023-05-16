import { computed as u, ref as z, onMounted as O, onUnmounted as D, reactive as b, openBlock as s, createElementBlock as c, normalizeStyle as L, createElementVNode as l, toDisplayString as i, Fragment as k, renderList as m, withDirectives as J, vShow as q } from "vue";
const A = (_, w) => {
  const d = _.__vccOpts || _;
  for (const [v, x] of w)
    d[v] = x;
  return d;
}, I = ["viewBox"], N = {
  x: "35",
  y: "30",
  "text-anchor": "end",
  class: "horizontal_text"
}, P = {
  x: "35",
  y: "55",
  "text-anchor": "end",
  class: "horizontal_text"
}, T = {
  x: "35",
  y: "80",
  "text-anchor": "end",
  class: "horizontal_text"
}, $ = {
  x: "35",
  y: "105",
  "text-anchor": "end",
  class: "horizontal_text"
}, H = {
  x: "35",
  y: "130",
  "text-anchor": "end",
  class: "horizontal_text"
}, U = ["x2"], V = ["x2"], W = ["x2"], X = ["x2"], Y = ["x2"], G = ["x"], K = ["x1", "x2"], Q = ["points"], R = ["points"], Z = ["cx", "cy"], ee = ["cx", "cy", "onMouseenter"], te = { class: "tooltip-atribute tooltip-key" }, oe = { class: "tooltip-atribute" }, le = {
  __name: "LineChart",
  props: {
    color: {
      type: String,
      required: !1,
      default: "red"
    }
  },
  setup(_) {
    const w = _, d = u(() => {
      switch (w.color) {
        case "amber":
          return {
            op200: "#fde68a",
            op300: "#fcd34d",
            op500: "#f59e0b"
          };
        case "blue":
          return {
            op200: "#bfcbea",
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
        default:
          return {
            200: "#fed7aa",
            300: "#fdba74",
            500: "#f97316"
          };
      }
    }), v = z(0), x = z(0);
    function C(e) {
      v.value = e.pageX, x.value = e.pageY;
    }
    O(() => window.addEventListener("mousemove", C)), D(() => window.removeEventListener("mousemove", C));
    function F(e, a, t) {
      n.value = !0, n.data.key = e, n.data.value = a, n.data.index = t;
    }
    function S() {
      n.value = !1, n.data.key = "", n.data.value = "", n.data.index = null;
    }
    const n = b({
      value: !1,
      data: {
        key: "",
        value: "",
        index: null
      }
    }), M = b([
      { key: "Jan" },
      { key: "Fev" },
      { key: "Mar" },
      { key: "Abr" },
      { key: "Mai" },
      { key: "Jun" },
      { key: "Jul" },
      { key: "Ago" },
      { key: "Set" },
      { key: "Out" },
      { key: "Nov" },
      { key: "Dez" }
    ]), r = b([
      { value: 1093 },
      { value: 1068 },
      { value: 1127 },
      { value: 1072 },
      { value: 1105 },
      { value: 1100 },
      { value: 1138 },
      { value: 1074 },
      { value: 1051 },
      { value: 1086 },
      { value: 1129 },
      { value: 1120 }
    ]);
    u(() => window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches);
    const p = u(() => Math.max(...r.map((e) => e.value))), y = u(() => Math.min(...r.map((e) => e.value)));
    function f(e) {
      let a = e - y.value, t = p.value - y.value;
      return (100 - a * 100 / t + 30).toFixed(2);
    }
    const g = u(() => (p.value - y.value) / 4), j = u(() => {
      let e = [];
      for (let a = 0; a < r.length; a++)
        e.push(a * 40 + 40), e.push(f(r[a].value));
      return e.join(" ");
    }), B = u(() => {
      let e = [40, 130];
      for (let t = 0; t < r.length; t++)
        e.push(t * 40 + 40), e.push(f(r[t].value));
      let a = r.length * 40;
      return e.push(a, 130), e.join(" ");
    }), E = u(() => `0 0 ${r.length * 40 + 30} 150`), h = u(() => r.length * 40);
    return (e, a) => (s(), c("div", {
      style: L({
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
        l("text", N, i(p.value), 1),
        l("text", P, i((p.value - g.value).toFixed(0)), 1),
        l("text", T, i((p.value - g.value * 2).toFixed(0)), 1),
        l("text", $, i((p.value - g.value * 3).toFixed(0)), 1),
        l("text", H, i(y.value), 1),
        l("line", {
          class: "line_color",
          x1: "40",
          y1: "30",
          x2: h.value,
          y2: "30",
          stroke: "currentColor",
          "stroke-width": "0.4"
        }, null, 8, U),
        l("line", {
          class: "line_color",
          x1: "40",
          y1: "55",
          x2: h.value,
          y2: "55",
          stroke: "currentColor",
          "stroke-width": "0.4"
        }, null, 8, V),
        l("line", {
          class: "line_color",
          x1: "40",
          y1: "80",
          x2: h.value,
          y2: "80",
          stroke: "currentColor",
          "stroke-width": "0.4"
        }, null, 8, W),
        l("line", {
          class: "line_color",
          x1: "40",
          y1: "105",
          x2: h.value,
          y2: "105",
          stroke: "currentColor",
          "stroke-width": "0.4"
        }, null, 8, X),
        l("line", {
          class: "line_color",
          x1: "40",
          y1: "130",
          x2: h.value,
          y2: "130",
          stroke: "currentColor",
          "stroke-width": "0.4"
        }, null, 8, Y),
        (s(!0), c(k, null, m(M, (t, o) => (s(), c("text", {
          key: o,
          x: o * 40 + 40,
          y: "145",
          "text-anchor": "middle"
        }, i(t.key), 9, G))), 128)),
        (s(!0), c(k, null, m(r, (t, o) => (s(), c("line", {
          key: o,
          x1: o * 40 + 40,
          y1: "30",
          x2: o * 40 + 40,
          y2: "130",
          stroke: "currentColor",
          "stroke-dasharray": "2,5",
          class: "line_color",
          "stroke-width": "0.5"
        }, null, 8, K))), 128)),
        l("polygon", {
          points: B.value,
          class: "polygon",
          stroke: "currentColor",
          "stroke-width": "0",
          "stroke-linejoin": "round"
        }, null, 8, Q),
        l("polyline", {
          points: j.value,
          stroke: "currentColor",
          "stroke-width": "1.5",
          "stroke-linecap": "round",
          fill: "none",
          "stroke-linejoin": "round"
        }, null, 8, R),
        (s(!0), c(k, null, m(r, (t, o) => (s(), c("circle", {
          key: o,
          cx: o * 40 + 40,
          cy: f(t.value),
          r: "2.5",
          fill: "currentColor"
        }, null, 8, Z))), 128)),
        (s(!0), c(k, null, m(r, (t, o) => (s(), c("circle", {
          key: o,
          cx: o * 40 + 40,
          cy: f(t.value),
          r: "7",
          class: "circle",
          onMouseenter: (re) => F(M[o].key, t.value, o),
          onMouseleave: S
        }, null, 40, ee))), 128))
      ], 8, I)),
      J(l("div", {
        style: L({
          "--x": (n.data.index + 1 > r.length / 2 ? v.value - 150 : v.value) + "px",
          "--y": x.value - 75 + "px",
          "--color-200-20": d.value.op200 + "20"
        }),
        class: "tooltip"
      }, [
        l("div", te, i(n.data.key), 1),
        l("div", oe, i(n.data.value), 1)
      ], 4), [
        [q, n.value]
      ])
    ], 4));
  }
}, ae = /* @__PURE__ */ A(le, [["__scopeId", "data-v-9c41210e"]]);
require("./style.css");
export {
  ae as LineChart
};
