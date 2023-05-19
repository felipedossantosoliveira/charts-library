import { computed as f, ref as F, onMounted as A, onUnmounted as B, reactive as V, openBlock as n, createElementBlock as s, normalizeStyle as p, createElementVNode as l, toDisplayString as v, Fragment as x, renderList as k, unref as h, withDirectives as D, vShow as H, createCommentVNode as T, createTextVNode as X, pushScopeId as Y, popScopeId as O } from "vue";
const W = (m, i) => {
  const _ = m.__vccOpts || m;
  for (const [C, $] of i)
    _[C] = $;
  return _;
}, U = ["viewBox"], G = ["x2"], J = ["x2"], K = ["x2"], Q = ["x2"], R = ["x2"], Z = ["x"], ee = ["x1", "x2"], te = ["points"], oe = ["values"], le = ["points"], ae = ["values"], re = ["cx", "cy"], ne = ["values"], se = ["cx", "cy", "onMouseenter"], ue = ["values"], ce = { class: "tooltip-atribute tooltip-key" }, ie = { class: "tooltip-atribute" }, de = {
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
  setup(m) {
    const i = m, _ = f(() => {
      switch (i.color) {
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
    }), C = F(0), $ = F(0);
    function L(r) {
      C.value = r.pageX, $.value = r.pageY;
    }
    A(() => window.addEventListener("mousemove", L)), B(() => window.removeEventListener("mousemove", L));
    function I(r, o, t) {
      u.value = !0, u.data.key = r, u.data.value = o.toFixed(4), u.data.index = t;
    }
    function N() {
      u.value = !1, u.data.key = "", u.data.value = "", u.data.index = null;
    }
    const u = V({
      value: !1,
      data: {
        key: "",
        value: 0,
        index: null
      }
    }), d = i.data, c = f(() => Math.max(...d.map((r) => r.value))), b = f(() => Math.min(...d.map((r) => r.value)));
    function g(r) {
      let o = r - b.value, t = c.value - b.value;
      return (100 - o * 100 / t + 30).toFixed(2);
    }
    const w = f(() => (c.value - b.value) / 4), z = f(() => {
      let r = [];
      for (let o = 0; o < d.length; o++)
        r.push(o * 40 + 40), r.push(g(d[o].value));
      return r.join(" ");
    }), S = f(() => {
      let r = [];
      for (let o = 0; o < d.length; o++)
        r.push(o * 40 + 40), r.push(80);
      return r.join(" ");
    }), E = f(() => {
      let r = [40, 130];
      for (let t = 0; t < d.length; t++)
        r.push(t * 40 + 40), r.push(g(d[t].value));
      let o = d.length * 40;
      return r.push(o, 130), r.join(" ");
    }), P = f(() => {
      let r = [40, 130];
      for (let t = 0; t < d.length; t++)
        r.push(t * 40 + 40), r.push(80);
      let o = d.length * 40;
      return r.push(o, 130), r.join(" ");
    }), q = f(() => `0 0 ${d.length * 40 + 30} 150`), M = f(() => d.length * 40);
    return (r, o) => (n(), s("div", {
      style: p({
        "--color": _.value.op500,
        "--color-200": _.value.op200,
        "--color-300": _.value.op300
      })
    }, [
      (n(), s("svg", {
        class: "svg",
        viewBox: q.value,
        xmlns: "http://www.w3.org/2000/svg"
      }, [
        l("text", {
          style: p("fill: " + (i.theme === "dark" ? "#ffffff" : "#000000")),
          x: "35",
          y: "30",
          "text-anchor": "end",
          class: "horizontal_text"
        }, v(c.value), 5),
        l("text", {
          style: p("fill: " + (i.theme === "dark" ? "#ffffff" : "#000000")),
          x: "35",
          y: "55",
          "text-anchor": "end",
          class: "horizontal_text"
        }, v((c.value - w.value).toFixed(0)), 5),
        l("text", {
          style: p("fill: " + (i.theme === "dark" ? "#ffffff" : "#000000")),
          x: "35",
          y: "80",
          "text-anchor": "end",
          class: "horizontal_text"
        }, v((c.value - w.value * 2).toFixed(0)), 5),
        l("text", {
          style: p("fill: " + (i.theme === "dark" ? "#ffffff" : "#000000")),
          x: "35",
          y: "105",
          "text-anchor": "end",
          class: "horizontal_text"
        }, v((c.value - w.value * 3).toFixed(0)), 5),
        l("text", {
          style: p("fill: " + (i.theme === "dark" ? "#ffffff" : "#000000")),
          x: "35",
          y: "130",
          "text-anchor": "end",
          class: "horizontal_text"
        }, v(b.value), 5),
        l("line", {
          class: "line_color",
          x1: "40",
          y1: "30",
          x2: M.value,
          y2: "30",
          stroke: "currentColor",
          "stroke-width": "0.4"
        }, null, 8, G),
        l("line", {
          class: "line_color",
          x1: "40",
          y1: "55",
          x2: M.value,
          y2: "55",
          stroke: "currentColor",
          "stroke-width": "0.4"
        }, null, 8, J),
        l("line", {
          class: "line_color",
          x1: "40",
          y1: "80",
          x2: M.value,
          y2: "80",
          stroke: "currentColor",
          "stroke-width": "0.4"
        }, null, 8, K),
        l("line", {
          class: "line_color",
          x1: "40",
          y1: "105",
          x2: M.value,
          y2: "105",
          stroke: "currentColor",
          "stroke-width": "0.4"
        }, null, 8, Q),
        l("line", {
          class: "line_color",
          x1: "40",
          y1: "130",
          x2: M.value,
          y2: "130",
          stroke: "currentColor",
          "stroke-width": "0.4"
        }, null, 8, R),
        (n(!0), s(x, null, k(h(d), (t, e) => (n(), s("text", {
          style: p("fill: " + (i.theme === "dark" ? "#ffffff" : "#000000")),
          key: e,
          x: e * 40 + 40,
          y: "145",
          "text-anchor": "middle"
        }, v(t.key), 13, Z))), 128)),
        (n(!0), s(x, null, k(h(d), (t, e) => (n(), s("line", {
          key: e,
          x1: e * 40 + 40,
          y1: "30",
          x2: e * 40 + 40,
          y2: "130",
          stroke: "currentColor",
          "stroke-dasharray": "2,5",
          class: "line_color",
          "stroke-width": "0.5"
        }, null, 8, ee))), 128)),
        l("polygon", {
          class: "polygon",
          stroke: "currentColor",
          points: E.value,
          "stroke-width": "0",
          "stroke-linejoin": "round"
        }, [
          l("animate", {
            attributeName: "points",
            dur: "0.3s",
            repeatCount: "1",
            values: P.value + ";" + E.value,
            keyTimes: "0; 1"
          }, null, 8, oe)
        ], 8, te),
        l("polyline", {
          stroke: "currentColor",
          "stroke-width": "1.5",
          points: z.value,
          "stroke-linecap": "round",
          fill: "none",
          "stroke-linejoin": "round"
        }, [
          l("animate", {
            attributeName: "points",
            dur: "0.3s",
            repeatCount: "1",
            values: S.value + ";" + z.value,
            keyTimes: "0; 1"
          }, null, 8, ae)
        ], 8, le),
        (n(!0), s(x, null, k(h(d), (t, e) => (n(), s("circle", {
          key: e,
          cx: e * 40 + 40,
          cy: g(t.value),
          r: "2.5",
          fill: "currentColor"
        }, [
          l("animate", {
            attributeName: "cy",
            dur: "0.3s",
            repeatCount: "1",
            values: "80;" + g(t.value),
            keyTimes: "0; 1"
          }, null, 8, ne)
        ], 8, re))), 128)),
        (n(!0), s(x, null, k(h(d), (t, e) => (n(), s("circle", {
          key: e,
          cx: e * 40 + 40,
          cy: g(t.value),
          r: "7",
          class: "circle",
          onMouseenter: (a) => I(h(d)[e].key, t.value, e),
          onMouseleave: N
        }, [
          l("animate", {
            attributeName: "cy",
            dur: "0.3s",
            repeatCount: "1",
            values: "80;" + g(t.value),
            keyTimes: "0;1"
          }, null, 8, ue)
        ], 40, se))), 128))
      ], 8, U)),
      D(l("div", {
        style: p({
          "--x": (u.data.index + 1 > h(d).length / 2 ? C.value - 150 : C.value) + "px",
          "--y": $.value - 75 + "px",
          "--color-200-20": _.value.op300 + "70"
        }),
        class: "tooltip"
      }, [
        l("div", ce, v(u.data.key), 1),
        l("div", ie, v(u.data.value), 1)
      ], 4), [
        [H, u.value]
      ])
    ], 4));
  }
}, Be = /* @__PURE__ */ W(de, [["__scopeId", "data-v-a7215e30"]]);
const pe = (m) => (Y("data-v-3b9c0d9f"), m = m(), O(), m), fe = ["viewBox"], he = ["x2"], ve = ["x2"], ye = ["x2"], _e = ["x2"], xe = ["x2"], ke = ["x"], me = ["x1", "x2"], be = ["points"], ge = ["values"], we = ["points"], Ce = ["values"], $e = ["cx", "cy"], Me = ["values"], ze = ["cx", "cy", "onMouseenter"], je = ["values"], Le = { class: "tooltip-atribute tooltip-key" }, Te = { class: "tooltip-atribute" }, Ee = { class: "items-check-container" }, Fe = ["onClick"], Ie = {
  key: 0,
  width: "15px",
  height: "15px",
  xmlns: "http://www.w3.org/2000/svg",
  fill: "none",
  viewBox: "0 0 24 24",
  "stroke-width": "2.5",
  stroke: "currentColor"
}, Ne = /* @__PURE__ */ pe(() => /* @__PURE__ */ l("path", {
  "stroke-linecap": "round",
  "stroke-linejoin": "round",
  d: "M4.5 12.75l6 6 9-13.5"
}, null, -1)), Se = [
  Ne
], Pe = {
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
  setup(m) {
    const i = m;
    function _(o) {
      switch (o) {
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
    const C = F(0), $ = F(0);
    function L(o) {
      C.value = o.pageX, $.value = o.pageY;
    }
    A(() => window.addEventListener("mousemove", L)), B(() => window.removeEventListener("mousemove", L));
    function I(o, t, e, a) {
      u.value = !0, u.data.key = o, u.data.value = t.toFixed(4), u.data.index = e, u.data.line = a;
    }
    function N() {
      u.value = !1, u.data.key = "", u.data.value = "", u.data.index = null, u.data.line = 1;
    }
    const u = V({
      value: !1,
      data: {
        key: "",
        value: 0,
        index: null,
        line: 1
      }
    }), d = i.data, c = i.data, b = f(() => {
      let o = [];
      return c.forEach((t) => {
        o.push(Math.max(...t.data.map((e) => e.value)));
      }), Math.max(...o);
    }), g = f(() => {
      let o = [];
      return c.forEach((t) => {
        o.push(Math.min(...t.data.map((e) => e.value)));
      }), Math.min(...o);
    });
    function w(o) {
      let t = o - g.value, e = b.value - g.value;
      return (100 - t * 100 / e + 30).toFixed(2);
    }
    const z = f(() => (b.value - g.value) / 4);
    f(() => {
      let o = [];
      for (let t = 0; t < d.length; t++)
        o.push(t * 40 + 40), o.push(w(d[t].value));
      return o.join(" ");
    });
    const S = f(() => {
      let o = [], t = [];
      return c.forEach((e) => {
        for (let a = 0; a < e.data.length; a++)
          t.push(a * 40 + 40), t.push(w(e.data[a].value));
        o.push({ points: t.join(" "), color: _(e.color) }), t = [];
      }), o;
    }), E = f(() => {
      let o = [], t = [];
      return c.forEach((e) => {
        for (let a = 0; a < e.data.length; a++)
          t.push(a * 40 + 40), t.push(80);
        o.push({ points: t.join(" ") }), t = [];
      }), o;
    }), P = f(() => {
      let o = [], t = [40, 130];
      return c.forEach((e) => {
        for (let y = 0; y < e.data.length; y++)
          t.push(y * 40 + 40), t.push(w(e.data[y].value));
        let a = e.data.length * 40;
        t.push(a, 130), o.push({ points: t.join(" "), color: _(e.color) }), t = [40, 130];
      }), o;
    }), q = f(() => {
      let o = [], t = [40, 130];
      return c.forEach((e) => {
        for (let y = 0; y < e.data.length; y++)
          t.push(y * 40 + 40), t.push(80);
        let a = e.data.length * 40;
        t.push(a, 130), o.push({ points: t.join(" ") }), t = [40, 130];
      }), o;
    }), M = f(() => `0 0 ${c[1].data.length * 40 + 30} 150`), r = f(() => c[1].data.length * 40);
    return (o, t) => (n(), s(x, null, [
      l("div", null, [
        (n(), s("svg", {
          class: "svg",
          viewBox: M.value,
          xmlns: "http://www.w3.org/2000/svg"
        }, [
          l("text", {
            style: p("fill: " + (i.theme === "dark" ? "#ffffff" : "#000000")),
            x: "35",
            y: "30",
            "text-anchor": "end",
            class: "horizontal_text"
          }, v(b.value), 5),
          l("text", {
            style: p("fill: " + (i.theme === "dark" ? "#ffffff" : "#000000")),
            x: "35",
            y: "55",
            "text-anchor": "end",
            class: "horizontal_text"
          }, v((b.value - z.value).toFixed(0)), 5),
          l("text", {
            style: p("fill: " + (i.theme === "dark" ? "#ffffff" : "#000000")),
            x: "35",
            y: "80",
            "text-anchor": "end",
            class: "horizontal_text"
          }, v((b.value - z.value * 2).toFixed(0)), 5),
          l("text", {
            style: p("fill: " + (i.theme === "dark" ? "#ffffff" : "#000000")),
            x: "35",
            y: "105",
            "text-anchor": "end",
            class: "horizontal_text"
          }, v((b.value - z.value * 3).toFixed(0)), 5),
          l("text", {
            style: p("fill: " + (i.theme === "dark" ? "#ffffff" : "#000000")),
            x: "35",
            y: "130",
            "text-anchor": "end",
            class: "horizontal_text"
          }, v(g.value), 5),
          l("line", {
            class: "line_color",
            x1: "40",
            y1: "30",
            x2: r.value,
            y2: "30",
            stroke: "currentColor",
            "stroke-width": "0.4"
          }, null, 8, he),
          l("line", {
            class: "line_color",
            x1: "40",
            y1: "55",
            x2: r.value,
            y2: "55",
            stroke: "currentColor",
            "stroke-width": "0.4"
          }, null, 8, ve),
          l("line", {
            class: "line_color",
            x1: "40",
            y1: "80",
            x2: r.value,
            y2: "80",
            stroke: "currentColor",
            "stroke-width": "0.4"
          }, null, 8, ye),
          l("line", {
            class: "line_color",
            x1: "40",
            y1: "105",
            x2: r.value,
            y2: "105",
            stroke: "currentColor",
            "stroke-width": "0.4"
          }, null, 8, _e),
          l("line", {
            class: "line_color",
            x1: "40",
            y1: "130",
            x2: r.value,
            y2: "130",
            stroke: "currentColor",
            "stroke-width": "0.4"
          }, null, 8, xe),
          (n(!0), s(x, null, k(m.keys, (e, a) => (n(), s("text", {
            key: a,
            x: a * 40 + 40,
            y: "145",
            style: p("fill: " + (i.theme === "dark" ? "#ffffff" : "#000000")),
            "text-anchor": "middle"
          }, v(e.value), 13, ke))), 128)),
          (n(!0), s(x, null, k(h(c)[1].data, (e, a) => (n(), s("line", {
            key: a,
            x1: a * 40 + 40,
            y1: "30",
            x2: a * 40 + 40,
            y2: "130",
            stroke: "currentColor",
            "stroke-dasharray": "2,5",
            class: "line_color",
            "stroke-width": "0.5"
          }, null, 8, me))), 128)),
          (n(!0), s(x, null, k(P.value, (e, a) => (n(), s("g", null, [
            h(c)[a].checked ? (n(), s("polygon", {
              key: a,
              points: e.points,
              style: p("fill:" + e.color.op300),
              class: "polygon",
              stroke: "currentColor",
              "stroke-width": "0",
              "stroke-linejoin": "round"
            }, [
              l("animate", {
                attributeName: "points",
                dur: "0.3s",
                repeatCount: "1",
                values: q.value[1].points + ";" + e.points,
                keyTimes: "0; 1"
              }, null, 8, ge)
            ], 12, be)) : T("", !0)
          ]))), 256)),
          (n(!0), s(x, null, k(S.value, (e, a) => (n(), s("g", null, [
            h(c)[a].checked ? (n(), s("polyline", {
              key: 0,
              points: e.points,
              style: p("stroke:" + e.color.op500),
              stroke: "currentColor",
              "stroke-width": "1.5",
              "stroke-linecap": "round",
              fill: "none",
              "stroke-linejoin": "round"
            }, [
              l("animate", {
                attributeName: "points",
                dur: "0.3s",
                repeatCount: "1",
                values: E.value[1].points + ";" + e.points,
                keyTimes: "0; 1"
              }, null, 8, Ce)
            ], 12, we)) : T("", !0)
          ]))), 256)),
          (n(!0), s(x, null, k(h(c), (e, a) => (n(), s("g", { key: a }, [
            h(c)[a].checked ? (n(!0), s(x, { key: 0 }, k(e.data, (y, j) => (n(), s("circle", {
              style: p("fill:" + _(e.color).op500),
              cx: j * 40 + 40,
              cy: w(y.value),
              r: "2.5",
              fill: "currentColor"
            }, [
              l("animate", {
                attributeName: "cy",
                dur: "0.3s",
                repeatCount: "1",
                values: "80;" + w(y.value),
                keyTimes: "0; 1"
              }, null, 8, Me)
            ], 12, $e))), 256)) : T("", !0)
          ]))), 128)),
          (n(!0), s(x, null, k(h(c), (e, a) => (n(), s("g", { key: a }, [
            h(c)[a].checked ? (n(!0), s(x, { key: 0 }, k(e.data, (y, j) => (n(), s("circle", {
              style: p("fill:" + _(e.color).op500),
              key: j,
              cx: j * 40 + 40,
              cy: w(y.value),
              r: "7",
              class: "circle",
              onMouseenter: (qe) => I(m.keys[j].value, y.value, j, a),
              onMouseleave: N
            }, [
              l("animate", {
                attributeName: "cy",
                dur: "0.3s",
                repeatCount: "1",
                values: "80;" + w(y.value),
                keyTimes: "0; 1"
              }, null, 8, je)
            ], 44, ze))), 128)) : T("", !0)
          ]))), 128))
        ], 8, fe)),
        D(l("div", {
          style: p({
            "--x": (u.data.index + 1 > h(c)[1].data.length / 2 ? C.value - 150 : C.value) + "px",
            "--y": $.value - 75 + "px",
            "--color-200-20": _(h(c)[u.data.line].color).op300 + "70",
            "--color": _(h(c)[u.data.line].color).op500,
            color: "#000"
          }),
          class: "tooltip"
        }, [
          l("div", Le, v(u.data.key), 1),
          l("div", Te, v(u.data.value), 1)
        ], 4), [
          [H, u.value]
        ])
      ]),
      l("div", Ee, [
        (n(!0), s(x, null, k(h(c), (e, a) => (n(), s("div", { key: a }, [
          l("button", {
            onClick: (y) => e.checked = !e.checked,
            style: p({ "border-left-color": _(e.color).op500, color: i.theme === "dark" ? "#ffffff" : "#000000" }),
            class: "checked"
          }, [
            l("div", {
              class: "checkbox",
              style: p({ "background-color": i.theme === "dark" ? "#cccccc20" : "#cccccc90" })
            }, [
              e.checked ? (n(), s("svg", Ie, Se)) : T("", !0)
            ], 4),
            X(" " + v(e.label), 1)
          ], 12, Fe)
        ]))), 128))
      ])
    ], 64));
  }
}, Ve = /* @__PURE__ */ W(Pe, [["__scopeId", "data-v-3b9c0d9f"]]);
require("./style.css");
export {
  Be as LineChart,
  Ve as MultiLineChart
};
