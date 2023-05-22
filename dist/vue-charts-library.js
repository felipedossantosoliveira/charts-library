(function(){"use strict";try{if(typeof document<"u"){var a=document.createElement("style");a.appendChild(document.createTextNode(".tooltip[data-v-eb02e19e]{position:absolute;top:var(--y);left:var(--x);width:150px;z-index:100;overflow-y:hidden;border-radius:.5rem;background-color:var(--color-200-20);backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px)}.horizontal_text[data-v-eb02e19e]{font-size:9pt}.svg[data-v-eb02e19e]{color:var(--color)}.line_color[data-v-eb02e19e]{color:#a3a3a3}svg text[data-v-eb02e19e]{fill:#000;font-size:9pt}.polygon[data-v-eb02e19e]{fill:var(--color-300);fill-opacity:.2}.circle[data-v-eb02e19e]{fill-opacity:0;fill:var(--color)}.circle[data-v-eb02e19e]:hover{fill-opacity:.2}.tooltip-atribute[data-v-eb02e19e]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;border-left-width:8px;border-left-style:solid;border-color:var(--color);padding:.25rem .75rem}.tooltip-key[data-v-eb02e19e]{border-bottom-width:1px;border-bottom-style:solid}.tooltip[data-v-cc9464d4]{position:absolute;top:var(--y);left:var(--x);width:150px;z-index:100;overflow-y:hidden;border-radius:.5rem;background-color:var(--color-200-20);backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px)}.horizontal_text[data-v-cc9464d4]{font-size:9pt}.svg[data-v-cc9464d4]{color:var(--color)}.line_color[data-v-cc9464d4]{color:#a3a3a3}svg text[data-v-cc9464d4]{fill:#000;font-size:9pt}.polygon[data-v-cc9464d4]{fill-opacity:.5}.circle[data-v-cc9464d4]{fill-opacity:0}.circle[data-v-cc9464d4]:hover{fill-opacity:.2}.tooltip-atribute[data-v-cc9464d4]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;border-left-width:8px;border-left-style:solid;border-color:var(--color);padding:.25rem .75rem}.tooltip-key[data-v-cc9464d4]{border-bottom-width:1px;border-bottom-style:solid}.checked[data-v-cc9464d4]{display:flex;align-items:center;border:0;border-left:5px solid;background-color:transparent;font-size:13pt;padding:4px 10px;cursor:pointer}@media (max-width: 768px){.checked[data-v-cc9464d4]{font-size:10pt}}.checkbox[data-v-cc9464d4]{display:flex;align-items:center;justify-items:center;padding:2px 1px 2px 3px;margin-right:7px;width:17px;height:17px;border-radius:4px}.items-check-container[data-v-cc9464d4]{display:flex;flex-wrap:wrap;margin-left:15px}.all[data-v-6a4a7fb7]{width:100%;height:500px;overflow:scroll}.container[data-v-6a4a7fb7]{height:100%;display:flex}.chart-container[data-v-6a4a7fb7]{width:100%;padding:10px}.bars-container[data-v-6a4a7fb7]{width:100%;height:90%;display:flex;justify-content:space-between}.bar-container[data-v-6a4a7fb7]{margin:0 8px;display:flex;align-items:end;width:100%;height:100%}.bar-container-top[data-v-6a4a7fb7]{width:100%;height:100%;display:flex;align-items:end;animation:fade-in-6a4a7fb7 .5s ease-in-out}.bar-top[data-v-6a4a7fb7]{z-index:2;width:100%;border-top-left-radius:5px;border-top-right-radius:5px}.keys-container[data-v-6a4a7fb7]{width:100%;height:10%;display:grid;grid-template-columns:repeat(12,1fr)}.key-container[data-v-6a4a7fb7]{display:flex;justify-content:center;align-items:center;font-size:12px;font-weight:500;margin:0 5px}@keyframes fade-in-6a4a7fb7{0%{height:0}to{height:100%}}.interval-container[data-v-6a4a7fb7]{height:100%;text-align:right}.interval[data-v-6a4a7fb7]{display:grid;height:97%}.lines-container[data-v-6a4a7fb7]{position:relative;z-index:1}.line-container[data-v-6a4a7fb7]{position:absolute;width:100%}.zero[data-v-6a4a7fb7]{transform:translateY(-53px)}.line[data-v-6a4a7fb7]{width:100%;border-bottom:#737373 1px solid;border-right:1px dashed #737373;display:grid}.line-container-setup[data-v-6a4a7fb7]{display:grid;opacity:.5;height:390px}.last-line-container[data-v-6a4a7fb7]{display:grid;width:100%;height:42px;opacity:.5}.first-line[data-v-6a4a7fb7]{border-top:#737373 1px solid}.vertical-line[data-v-6a4a7fb7]{border-left:1px dashed #737373}.items-check-container[data-v-6a4a7fb7]{display:flex;flex-wrap:wrap;margin-left:15px}.checked[data-v-6a4a7fb7]{display:flex;align-items:center;border:0;border-left:5px solid;background-color:transparent;font-size:13pt;padding:4px 10px;cursor:pointer}@media (max-width: 768px){.checked[data-v-6a4a7fb7]{font-size:10pt}}.checkbox[data-v-6a4a7fb7]{display:flex;align-items:center;justify-items:center;padding:2px 1px 2px 3px;margin-right:7px;width:17px;height:17px;border-radius:4px}.tooltip-atribute[data-v-6a4a7fb7]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;border-left-width:8px;border-left-style:solid;border-color:var(--color);padding:.25rem .75rem}.tooltip-key[data-v-6a4a7fb7]{border-bottom-width:1px;border-bottom-style:solid}.tooltip[data-v-6a4a7fb7]{position:absolute;top:var(--y);left:var(--x);width:150px;z-index:100;overflow-y:hidden;border-radius:.5rem;background-color:var(--color-200-20);backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px)}")),document.head.appendChild(a)}}catch(e){console.error("vite-plugin-css-injected-by-js",e)}})();
import { computed as x, ref as N, onMounted as A, onUnmounted as P, reactive as W, openBlock as a, createElementBlock as l, normalizeStyle as d, createElementVNode as e, toDisplayString as _, Fragment as y, renderList as b, unref as $, withDirectives as V, vShow as X, createCommentVNode as T, createTextVNode as Y, pushScopeId as D, popScopeId as O } from "vue";
const H = (p, c) => {
  const m = p.__vccOpts || p;
  for (const [M, E] of c)
    m[M] = E;
  return m;
}, G = ["viewBox"], J = ["x2"], K = ["x2"], Q = ["x2"], R = ["x2"], Z = ["x2"], ee = ["x"], te = ["x1", "x2"], oe = ["points"], ae = ["values"], le = ["points"], ne = ["values"], re = ["cx", "cy"], se = ["values"], ce = ["cx", "cy", "onMouseenter"], ue = ["values"], ie = { class: "tooltip-atribute tooltip-key" }, de = { class: "tooltip-atribute" }, pe = {
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
    }), M = N(0), E = N(0);
    function F(s) {
      M.value = s.pageX, E.value = s.pageY;
    }
    A(() => window.addEventListener("mousemove", F)), P(() => window.removeEventListener("mousemove", F));
    function k(s, n, o) {
      u.value = !0, u.data.key = s, u.data.value = n.toFixed(4), u.data.index = o;
    }
    function q() {
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
      let n = s - I.value, o = i.value - I.value;
      return (100 - n * 100 / o + 30).toFixed(2);
    }
    const f = x(() => (i.value - I.value) / 4), g = x(() => {
      let s = [];
      for (let n = 0; n < h.length; n++)
        s.push(n * 40 + 40), s.push(L(h[n].value));
      return s.join(" ");
    }), v = x(() => {
      let s = [];
      for (let n = 0; n < h.length; n++)
        s.push(n * 40 + 40), s.push(80);
      return s.join(" ");
    }), w = x(() => {
      let s = [40, 130];
      for (let o = 0; o < h.length; o++)
        s.push(o * 40 + 40), s.push(L(h[o].value));
      let n = h.length * 40;
      return s.push(n, 130), s.join(" ");
    }), z = x(() => {
      let s = [40, 130];
      for (let o = 0; o < h.length; o++)
        s.push(o * 40 + 40), s.push(80);
      let n = h.length * 40;
      return s.push(n, 130), s.join(" ");
    }), S = x(() => `0 0 ${h.length * 40 + 30} 150`), j = x(() => h.length * 40);
    return (s, n) => (a(), l("div", {
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
          }, null, 8, ne)
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
        ], 8, re))), 128)),
        (a(!0), l(y, null, b($(h), (o, t) => (a(), l("circle", {
          key: t,
          cx: t * 40 + 40,
          cy: L(o.value),
          r: "7",
          class: "circle",
          onMouseenter: (r) => k($(h)[t].key, o.value, t),
          onMouseleave: q
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
}, ut = /* @__PURE__ */ H(pe, [["__scopeId", "data-v-eb02e19e"]]);
const fe = (p) => (D("data-v-cc9464d4"), p = p(), O(), p), he = ["viewBox"], ve = ["x2"], ye = ["x2"], _e = ["x2"], ke = ["x2"], xe = ["x2"], me = ["x"], be = ["x1", "x2"], ge = ["points"], we = ["values"], $e = ["points"], Ce = ["values"], Me = ["cx", "cy"], Ie = ["values"], Le = ["cx", "cy", "onMouseenter"], ze = ["values"], Ee = { class: "tooltip-atribute tooltip-key" }, je = { class: "tooltip-atribute" }, Fe = { class: "items-check-container" }, Te = ["onClick"], Se = {
  key: 0,
  width: "15px",
  height: "15px",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  "stroke-width": "2.5",
  stroke: "currentColor"
}, Be = /* @__PURE__ */ fe(() => /* @__PURE__ */ e("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M4.5 12.75l6 6 9-13.5"
}, null, -1)), Ne = [
  Be
], qe = {
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
    function m(n) {
      switch (n) {
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
    const M = N(0), E = N(0);
    function F(n) {
      M.value = n.pageX, E.value = n.pageY;
    }
    A(() => window.addEventListener("mousemove", F)), P(() => window.removeEventListener("mousemove", F));
    function k(n, o, t, r) {
      u.value = !0, u.data.key = n, u.data.value = o.toFixed(4), u.data.index = t, u.data.line = r;
    }
    function q() {
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
      let n = [];
      return i.forEach((o) => {
        n.push(Math.max(...o.data.map((t) => t.value)));
      }), Math.max(...n);
    }), L = x(() => {
      let n = [];
      return i.forEach((o) => {
        n.push(Math.min(...o.data.map((t) => t.value)));
      }), Math.min(...n);
    });
    function f(n) {
      let o = n - L.value, t = I.value - L.value;
      return (100 - o * 100 / t + 30).toFixed(2);
    }
    const g = x(() => (I.value - L.value) / 4);
    x(() => {
      let n = [];
      for (let o = 0; o < h.length; o++)
        n.push(o * 40 + 40), n.push(f(h[o].value));
      return n.join(" ");
    });
    const v = x(() => {
      let n = [], o = [];
      return i.forEach((t) => {
        for (let r = 0; r < t.data.length; r++)
          o.push(r * 40 + 40), o.push(f(t.data[r].value));
        n.push({ points: o.join(" "), color: m(t.color) }), o = [];
      }), n;
    }), w = x(() => {
      let n = [], o = [];
      return i.forEach((t) => {
        for (let r = 0; r < t.data.length; r++)
          o.push(r * 40 + 40), o.push(80);
        n.push({ points: o.join(" ") }), o = [];
      }), n;
    }), z = x(() => {
      let n = [], o = [40, 130];
      return i.forEach((t) => {
        for (let C = 0; C < t.data.length; C++)
          o.push(C * 40 + 40), o.push(f(t.data[C].value));
        let r = t.data.length * 40;
        o.push(r, 130), n.push({ points: o.join(" "), color: m(t.color) }), o = [40, 130];
      }), n;
    }), S = x(() => {
      let n = [], o = [40, 130];
      return i.forEach((t) => {
        for (let C = 0; C < t.data.length; C++)
          o.push(C * 40 + 40), o.push(80);
        let r = t.data.length * 40;
        o.push(r, 130), n.push({ points: o.join(" ") }), o = [40, 130];
      }), n;
    }), j = x(() => `0 0 ${i[1].data.length * 40 + 30} 150`), s = x(() => i[1].data.length * 40);
    return (n, o) => (a(), l(y, null, [
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
          (a(!0), l(y, null, b(p.keys, (t, r) => (a(), l("text", {
            key: r,
            x: r * 40 + 40,
            y: "145",
            style: d("fill: " + (c.theme === "dark" ? "#ffffff" : "#000000")),
            "text-anchor": "middle"
          }, _(t.value), 13, me))), 128)),
          (a(!0), l(y, null, b($(i)[1].data, (t, r) => (a(), l("line", {
            key: r,
            x1: r * 40 + 40,
            y1: "30",
            x2: r * 40 + 40,
            y2: "130",
            stroke: "currentColor",
            "stroke-dasharray": "2,5",
            class: "line_color",
            "stroke-width": "0.5"
          }, null, 8, be))), 128)),
          (a(!0), l(y, null, b(z.value, (t, r) => (a(), l("g", null, [
            $(i)[r].checked ? (a(), l("polygon", {
              key: r,
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
          (a(!0), l(y, null, b(v.value, (t, r) => (a(), l("g", null, [
            $(i)[r].checked ? (a(), l("polyline", {
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
          (a(!0), l(y, null, b($(i), (t, r) => (a(), l("g", { key: r }, [
            $(i)[r].checked ? (a(!0), l(y, { key: 0 }, b(t.data, (C, B) => (a(), l("circle", {
              style: d("fill:" + m(t.color).op500),
              cx: B * 40 + 40,
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
          (a(!0), l(y, null, b($(i), (t, r) => (a(), l("g", { key: r }, [
            $(i)[r].checked ? (a(!0), l(y, { key: 0 }, b(t.data, (C, B) => (a(), l("circle", {
              style: d("fill:" + m(t.color).op500),
              key: B,
              cx: B * 40 + 40,
              cy: f(C.value),
              r: "7",
              class: "circle",
              onMouseenter: (st) => k(p.keys[B].value, C.value, B, r),
              onMouseleave: q
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
        (a(!0), l(y, null, b($(i), (t, r) => (a(), l("div", { key: r }, [
          e("button", {
            onClick: (C) => t.checked = !t.checked,
            style: d({ "border-left-color": m(t.color).op500, color: c.theme === "dark" ? "#ffffff" : "#000000" }),
            class: "checked"
          }, [
            e("div", {
              class: "checkbox",
              style: d({ "background-color": c.theme === "dark" ? "#cccccc20" : "#cccccc90" })
            }, [
              t.checked ? (a(), l("svg", Se, Ne)) : T("", !0)
            ], 4),
            Y(" " + _(t.label), 1)
          ], 12, Te)
        ]))), 128))
      ])
    ], 64));
  }
}, it = /* @__PURE__ */ H(qe, [["__scopeId", "data-v-cc9464d4"]]);
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
], lt = { class: "tooltip-atribute tooltip-key" }, nt = { class: "tooltip-atribute" }, rt = {
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
    const M = N(0), E = N(0);
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
    function q(f, g, v) {
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
                    onClick: (j) => q(z, w, S),
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
        e("div", nt, _(k.value), 1)
      ], 4)) : T("", !0)
    ], 64));
  }
}, dt = /* @__PURE__ */ H(rt, [["__scopeId", "data-v-6a4a7fb7"]]);
export {
  dt as BarsChart,
  ut as LineChart,
  it as MultiLineChart
};
