var Rr = Array.isArray, As = Array.prototype.indexOf, Nt = Array.prototype.includes, pn = Array.from, Ts = Object.defineProperty, St = Object.getOwnPropertyDescriptor, ks = Object.getOwnPropertyDescriptors, xs = Object.prototype, Ms = Array.prototype, Or = Object.getPrototypeOf, _r = Object.isExtensible;
const Ir = () => {
};
function Rs(e) {
  for (var t = 0; t < e.length; t++)
    e[t]();
}
function Cr() {
  var e, t, n = new Promise((r, i) => {
    e = r, t = i;
  });
  return { promise: n, resolve: e, reject: t };
}
const se = 2, fn = 4, _n = 8, Fn = 1 << 24, Ze = 16, Ie = 32, _t = 64, zn = 128, Ne = 512, te = 1024, he = 2048, $e = 4096, we = 8192, Ge = 16384, Hn = 32768, dt = 65536, vr = 1 << 17, Gn = 1 << 18, Rt = 1 << 19, Os = 1 << 20, Je = 1 << 25, gt = 32768, On = 1 << 21, Kn = 1 << 22, Qe = 1 << 23, Gt = /* @__PURE__ */ Symbol("$state"), Is = /* @__PURE__ */ Symbol("legacy props"), Cs = /* @__PURE__ */ Symbol(""), yt = new class extends Error {
  name = "StaleReactionError";
  message = "The reaction that called `getAbortSignal()` was re-run or destroyed";
}();
function Lr(e) {
  throw new Error("https://svelte.dev/e/lifecycle_outside_component");
}
function Ls() {
  throw new Error("https://svelte.dev/e/async_derived_orphan");
}
function Ds(e) {
  throw new Error("https://svelte.dev/e/effect_in_teardown");
}
function Bs() {
  throw new Error("https://svelte.dev/e/effect_in_unowned_derived");
}
function Ps(e) {
  throw new Error("https://svelte.dev/e/effect_orphan");
}
function Us() {
  throw new Error("https://svelte.dev/e/effect_update_depth_exceeded");
}
function Fs(e) {
  throw new Error("https://svelte.dev/e/props_invalid_value");
}
function zs() {
  throw new Error("https://svelte.dev/e/state_descriptors_fixed");
}
function Hs() {
  throw new Error("https://svelte.dev/e/state_prototype_fixed");
}
function Gs() {
  throw new Error("https://svelte.dev/e/state_unsafe_mutation");
}
function Ks() {
  throw new Error("https://svelte.dev/e/svelte_boundary_reset_onerror");
}
const js = 1, Zs = 2, $s = 16, Ws = 1, qs = 2, Ys = 4, Xs = 8, Vs = 16, Js = 1, Qs = 2, re = /* @__PURE__ */ Symbol(), ea = "http://www.w3.org/1999/xhtml";
function ta() {
  console.warn("https://svelte.dev/e/svelte_boundary_reset_noop");
}
function Dr(e) {
  return e === this.v;
}
function na(e, t) {
  return e != e ? t == t : e !== t || e !== null && typeof e == "object" || typeof e == "function";
}
function Br(e) {
  return !na(e, this.v);
}
let Ot = !1;
function ra() {
  Ot = !0;
}
let $ = null;
function At(e) {
  $ = e;
}
function ia(e) {
  return (
    /** @type {T} */
    Pr().get(e)
  );
}
function sa(e, t) {
  return Pr().set(e, t), t;
}
function We(e, t = !1, n) {
  $ = {
    p: $,
    i: !1,
    c: null,
    e: null,
    s: e,
    x: null,
    l: Ot && !t ? { s: null, u: null, $: [] } : null
  };
}
function qe(e) {
  var t = (
    /** @type {ComponentContext} */
    $
  ), n = t.e;
  if (n !== null) {
    t.e = null;
    for (var r of n)
      ei(r);
  }
  return t.i = !0, $ = t.p, /** @type {T} */
  {};
}
function It() {
  return !Ot || $ !== null && $.l === null;
}
function Pr(e) {
  return $ === null && Lr(), $.c ??= new Map(aa($) || void 0);
}
function aa(e) {
  let t = e.p;
  for (; t !== null; ) {
    const n = t.c;
    if (n !== null)
      return n;
    t = t.p;
  }
  return null;
}
let lt = [];
function Ur() {
  var e = lt;
  lt = [], Rs(e);
}
function et(e) {
  if (lt.length === 0 && !Kt) {
    var t = lt;
    queueMicrotask(() => {
      t === lt && Ur();
    });
  }
  lt.push(e);
}
function oa() {
  for (; lt.length > 0; )
    Ur();
}
function Fr(e) {
  var t = F;
  if (t === null)
    return D.f |= Qe, e;
  if ((t.f & Hn) === 0) {
    if ((t.f & zn) === 0)
      throw e;
    t.b.error(e);
  } else
    Tt(e, t);
}
function Tt(e, t) {
  for (; t !== null; ) {
    if ((t.f & zn) !== 0)
      try {
        t.b.error(e);
        return;
      } catch (n) {
        e = n;
      }
    t = t.parent;
  }
  throw e;
}
const la = -7169;
function Q(e, t) {
  e.f = e.f & la | t;
}
function jn(e) {
  (e.f & Ne) !== 0 || e.deps === null ? Q(e, te) : Q(e, $e);
}
function zr(e) {
  if (e !== null)
    for (const t of e)
      (t.f & se) === 0 || (t.f & gt) === 0 || (t.f ^= gt, zr(
        /** @type {Derived} */
        t.deps
      ));
}
function Hr(e, t, n) {
  (e.f & he) !== 0 ? t.add(e) : (e.f & $e) !== 0 && n.add(e), zr(e.deps), Q(e, te);
}
const ln = /* @__PURE__ */ new Set();
let H = null, In = null, Re = null, Ee = [], vn = null, Cn = !1, Kt = !1;
class tt {
  committed = !1;
  /**
   * The current values of any sources that are updated in this batch
   * They keys of this map are identical to `this.#previous`
   * @type {Map<Source, any>}
   */
  current = /* @__PURE__ */ new Map();
  /**
   * The values of any sources that are updated in this batch _before_ those updates took place.
   * They keys of this map are identical to `this.#current`
   * @type {Map<Source, any>}
   */
  previous = /* @__PURE__ */ new Map();
  /**
   * When the batch is committed (and the DOM is updated), we need to remove old branches
   * and append new ones by calling the functions added inside (if/each/key/etc) blocks
   * @type {Set<() => void>}
   */
  #t = /* @__PURE__ */ new Set();
  /**
   * If a fork is discarded, we need to destroy any effects that are no longer needed
   * @type {Set<(batch: Batch) => void>}
   */
  #a = /* @__PURE__ */ new Set();
  /**
   * The number of async effects that are currently in flight
   */
  #e = 0;
  /**
   * The number of async effects that are currently in flight, _not_ inside a pending boundary
   */
  #i = 0;
  /**
   * A deferred that resolves when the batch is committed, used with `settled()`
   * TODO replace with Promise.withResolvers once supported widely enough
   * @type {{ promise: Promise<void>, resolve: (value?: any) => void, reject: (reason: unknown) => void } | null}
   */
  #s = null;
  /**
   * Deferred effects (which run after async work has completed) that are DIRTY
   * @type {Set<Effect>}
   */
  #r = /* @__PURE__ */ new Set();
  /**
   * Deferred effects that are MAYBE_DIRTY
   * @type {Set<Effect>}
   */
  #n = /* @__PURE__ */ new Set();
  /**
   * A set of branches that still exist, but will be destroyed when this batch
   * is committed — we skip over these during `process`
   * @type {Set<Effect>}
   */
  skipped_effects = /* @__PURE__ */ new Set();
  is_fork = !1;
  #o = !1;
  is_deferred() {
    return this.is_fork || this.#i > 0;
  }
  /**
   *
   * @param {Effect[]} root_effects
   */
  process(t) {
    Ee = [], this.apply();
    var n = [], r = [];
    for (const i of t)
      this.#l(i, n, r);
    if (this.is_deferred()) {
      this.#c(r), this.#c(n);
      for (const i of this.skipped_effects)
        Zr(i);
    } else {
      for (const i of this.#t) i();
      this.#t.clear(), this.#e === 0 && this.#u(), In = this, H = null, br(r), br(n), In = null, this.#s?.resolve();
    }
    Re = null;
  }
  /**
   * Traverse the effect tree, executing effects or stashing
   * them for later execution as appropriate
   * @param {Effect} root
   * @param {Effect[]} effects
   * @param {Effect[]} render_effects
   */
  #l(t, n, r) {
    t.f ^= te;
    for (var i = t.first, s = null; i !== null; ) {
      var l = i.f, a = (l & (Ie | _t)) !== 0, c = a && (l & te) !== 0, u = c || (l & we) !== 0 || this.skipped_effects.has(i);
      if (!u && i.fn !== null) {
        a ? i.f ^= te : s !== null && (l & (fn | _n | Fn)) !== 0 ? s.b.defer_effect(i) : (l & fn) !== 0 ? n.push(i) : Jt(i) && ((l & Ze) !== 0 && this.#n.add(i), qt(i));
        var d = i.first;
        if (d !== null) {
          i = d;
          continue;
        }
      }
      var h = i.parent;
      for (i = i.next; i === null && h !== null; )
        h === s && (s = null), i = h.next, h = h.parent;
    }
  }
  /**
   * @param {Effect[]} effects
   */
  #c(t) {
    for (var n = 0; n < t.length; n += 1)
      Hr(t[n], this.#r, this.#n);
  }
  /**
   * Associate a change to a given source with the current
   * batch, noting its previous and current values
   * @param {Source} source
   * @param {any} value
   */
  capture(t, n) {
    n !== re && !this.previous.has(t) && this.previous.set(t, n), (t.f & Qe) === 0 && (this.current.set(t, t.v), Re?.set(t, t.v));
  }
  activate() {
    H = this, this.apply();
  }
  deactivate() {
    H === this && (H = null, Re = null);
  }
  flush() {
    if (this.activate(), Ee.length > 0) {
      if (Gr(), H !== null && H !== this)
        return;
    } else this.#e === 0 && this.process([]);
    this.deactivate();
  }
  discard() {
    for (const t of this.#a) t(this);
    this.#a.clear();
  }
  #u() {
    if (ln.size > 1) {
      this.previous.clear();
      var t = Re, n = !0;
      for (const i of ln) {
        if (i === this) {
          n = !1;
          continue;
        }
        const s = [];
        for (const [a, c] of this.current) {
          if (i.current.has(a))
            if (n && c !== i.current.get(a))
              i.current.set(a, c);
            else
              continue;
          s.push(a);
        }
        if (s.length === 0)
          continue;
        const l = [...i.current.keys()].filter((a) => !this.current.has(a));
        if (l.length > 0) {
          var r = Ee;
          Ee = [];
          const a = /* @__PURE__ */ new Set(), c = /* @__PURE__ */ new Map();
          for (const u of s)
            Kr(u, l, a, c);
          if (Ee.length > 0) {
            H = i, i.apply();
            for (const u of Ee)
              i.#l(u, [], []);
            i.deactivate();
          }
          Ee = r;
        }
      }
      H = null, Re = t;
    }
    this.committed = !0, ln.delete(this);
  }
  /**
   *
   * @param {boolean} blocking
   */
  increment(t) {
    this.#e += 1, t && (this.#i += 1);
  }
  /**
   *
   * @param {boolean} blocking
   */
  decrement(t) {
    this.#e -= 1, t && (this.#i -= 1), !this.#o && (this.#o = !0, et(() => {
      this.#o = !1, this.is_deferred() ? Ee.length > 0 && this.flush() : this.revive();
    }));
  }
  revive() {
    for (const t of this.#r)
      this.#n.delete(t), Q(t, he), je(t);
    for (const t of this.#n)
      Q(t, $e), je(t);
    this.flush();
  }
  /** @param {() => void} fn */
  oncommit(t) {
    this.#t.add(t);
  }
  /** @param {(batch: Batch) => void} fn */
  ondiscard(t) {
    this.#a.add(t);
  }
  settled() {
    return (this.#s ??= Cr()).promise;
  }
  static ensure() {
    if (H === null) {
      const t = H = new tt();
      ln.add(H), Kt || et(() => {
        H === t && t.flush();
      });
    }
    return H;
  }
  apply() {
  }
}
function ca(e) {
  var t = Kt;
  Kt = !0;
  try {
    for (var n; ; ) {
      if (oa(), Ee.length === 0 && (H?.flush(), Ee.length === 0))
        return vn = null, /** @type {T} */
        n;
      Gr();
    }
  } finally {
    Kt = t;
  }
}
function Gr() {
  Cn = !0;
  var e = null;
  try {
    for (var t = 0; Ee.length > 0; ) {
      var n = tt.ensure();
      if (t++ > 1e3) {
        var r, i;
        ua();
      }
      n.process(Ee), nt.clear();
    }
  } finally {
    Cn = !1, vn = null;
  }
}
function ua() {
  try {
    Us();
  } catch (e) {
    Tt(e, vn);
  }
}
let ze = null;
function br(e) {
  var t = e.length;
  if (t !== 0) {
    for (var n = 0; n < t; ) {
      var r = e[n++];
      if ((r.f & (Ge | we)) === 0 && Jt(r) && (ze = /* @__PURE__ */ new Set(), qt(r), r.deps === null && r.first === null && r.nodes === null && (r.teardown === null && r.ac === null ? ii(r) : r.fn = null), ze?.size > 0)) {
        nt.clear();
        for (const i of ze) {
          if ((i.f & (Ge | we)) !== 0) continue;
          const s = [i];
          let l = i.parent;
          for (; l !== null; )
            ze.has(l) && (ze.delete(l), s.push(l)), l = l.parent;
          for (let a = s.length - 1; a >= 0; a--) {
            const c = s[a];
            (c.f & (Ge | we)) === 0 && qt(c);
          }
        }
        ze.clear();
      }
    }
    ze = null;
  }
}
function Kr(e, t, n, r) {
  if (!n.has(e) && (n.add(e), e.reactions !== null))
    for (const i of e.reactions) {
      const s = i.f;
      (s & se) !== 0 ? Kr(
        /** @type {Derived} */
        i,
        t,
        n,
        r
      ) : (s & (Kn | Ze)) !== 0 && (s & he) === 0 && jr(i, t, r) && (Q(i, he), je(
        /** @type {Effect} */
        i
      ));
    }
}
function jr(e, t, n) {
  const r = n.get(e);
  if (r !== void 0) return r;
  if (e.deps !== null)
    for (const i of e.deps) {
      if (Nt.call(t, i))
        return !0;
      if ((i.f & se) !== 0 && jr(
        /** @type {Derived} */
        i,
        t,
        n
      ))
        return n.set(
          /** @type {Derived} */
          i,
          !0
        ), !0;
    }
  return n.set(e, !1), !1;
}
function je(e) {
  for (var t = vn = e; t.parent !== null; ) {
    t = t.parent;
    var n = t.f;
    if (Cn && t === F && (n & Ze) !== 0 && (n & Gn) === 0)
      return;
    if ((n & (_t | Ie)) !== 0) {
      if ((n & te) === 0) return;
      t.f ^= te;
    }
  }
  Ee.push(t);
}
function Zr(e) {
  if (!((e.f & Ie) !== 0 && (e.f & te) !== 0)) {
    Q(e, te);
    for (var t = e.first; t !== null; )
      Zr(t), t = t.next;
  }
}
function fa(e) {
  let t = 0, n = ht(0), r;
  return () => {
    Wn() && (G(n), Yn(() => (t === 0 && (r = Qt(() => e(() => Zt(n)))), t += 1, () => {
      et(() => {
        t -= 1, t === 0 && (r?.(), r = void 0, Zt(n));
      });
    })));
  };
}
var da = dt | Rt | zn;
function ga(e, t, n) {
  new ha(e, t, n);
}
class ha {
  /** @type {Boundary | null} */
  parent;
  is_pending = !1;
  /** @type {TemplateNode} */
  #t;
  /** @type {TemplateNode | null} */
  #a = null;
  /** @type {BoundaryProps} */
  #e;
  /** @type {((anchor: Node) => void)} */
  #i;
  /** @type {Effect} */
  #s;
  /** @type {Effect | null} */
  #r = null;
  /** @type {Effect | null} */
  #n = null;
  /** @type {Effect | null} */
  #o = null;
  /** @type {DocumentFragment | null} */
  #l = null;
  /** @type {TemplateNode | null} */
  #c = null;
  #u = 0;
  #d = 0;
  #h = !1;
  #g = !1;
  /** @type {Set<Effect>} */
  #p = /* @__PURE__ */ new Set();
  /** @type {Set<Effect>} */
  #_ = /* @__PURE__ */ new Set();
  /**
   * A source containing the number of pending async deriveds/expressions.
   * Only created if `$effect.pending()` is used inside the boundary,
   * otherwise updating the source results in needless `Batch.ensure()`
   * calls followed by no-op flushes
   * @type {Source<number> | null}
   */
  #f = null;
  #w = fa(() => (this.#f = ht(this.#u), () => {
    this.#f = null;
  }));
  /**
   * @param {TemplateNode} node
   * @param {BoundaryProps} props
   * @param {((anchor: Node) => void)} children
   */
  constructor(t, n, r) {
    this.#t = t, this.#e = n, this.#i = r, this.parent = /** @type {Effect} */
    F.b, this.is_pending = !!this.#e.pending, this.#s = Ct(() => {
      F.b = this;
      {
        var i = this.#E();
        try {
          this.#r = me(() => r(i));
        } catch (s) {
          this.error(s);
        }
        this.#d > 0 ? this.#b() : this.is_pending = !1;
      }
      return () => {
        this.#c?.remove();
      };
    }, da);
  }
  #y() {
    try {
      this.#r = me(() => this.#i(this.#t));
    } catch (t) {
      this.error(t);
    }
  }
  #S() {
    const t = this.#e.pending;
    t && (this.#n = me(() => t(this.#t)), et(() => {
      var n = this.#E();
      this.#r = this.#v(() => (tt.ensure(), me(() => this.#i(n)))), this.#d > 0 ? this.#b() : (ut(
        /** @type {Effect} */
        this.#n,
        () => {
          this.#n = null;
        }
      ), this.is_pending = !1);
    }));
  }
  #E() {
    var t = this.#t;
    return this.is_pending && (this.#c = Ke(), this.#t.before(this.#c), t = this.#c), t;
  }
  /**
   * Defer an effect inside a pending boundary until the boundary resolves
   * @param {Effect} effect
   */
  defer_effect(t) {
    Hr(t, this.#p, this.#_);
  }
  /**
   * Returns `false` if the effect exists inside a boundary whose pending snippet is shown
   * @returns {boolean}
   */
  is_rendered() {
    return !this.is_pending && (!this.parent || this.parent.is_rendered());
  }
  has_pending_snippet() {
    return !!this.#e.pending;
  }
  /**
   * @param {() => Effect | null} fn
   */
  #v(t) {
    var n = F, r = D, i = $;
    De(this.#s), Te(this.#s), At(this.#s.ctx);
    try {
      return t();
    } catch (s) {
      return Fr(s), null;
    } finally {
      De(n), Te(r), At(i);
    }
  }
  #b() {
    const t = (
      /** @type {(anchor: Node) => void} */
      this.#e.pending
    );
    this.#r !== null && (this.#l = document.createDocumentFragment(), this.#l.append(
      /** @type {TemplateNode} */
      this.#c
    ), oi(this.#r, this.#l)), this.#n === null && (this.#n = me(() => t(this.#t)));
  }
  /**
   * Updates the pending count associated with the currently visible pending snippet,
   * if any, such that we can replace the snippet with content once work is done
   * @param {1 | -1} d
   */
  #m(t) {
    if (!this.has_pending_snippet()) {
      this.parent && this.parent.#m(t);
      return;
    }
    if (this.#d += t, this.#d === 0) {
      this.is_pending = !1;
      for (const n of this.#p)
        Q(n, he), je(n);
      for (const n of this.#_)
        Q(n, $e), je(n);
      this.#p.clear(), this.#_.clear(), this.#n && ut(this.#n, () => {
        this.#n = null;
      }), this.#l && (this.#t.before(this.#l), this.#l = null);
    }
  }
  /**
   * Update the source that powers `$effect.pending()` inside this boundary,
   * and controls when the current `pending` snippet (if any) is removed.
   * Do not call from inside the class
   * @param {1 | -1} d
   */
  update_pending_count(t) {
    this.#m(t), this.#u += t, !(!this.#f || this.#h) && (this.#h = !0, et(() => {
      this.#h = !1, this.#f && kt(this.#f, this.#u);
    }));
  }
  get_effect_pending() {
    return this.#w(), G(
      /** @type {Source<number>} */
      this.#f
    );
  }
  /** @param {unknown} error */
  error(t) {
    var n = this.#e.onerror;
    let r = this.#e.failed;
    if (this.#g || !n && !r)
      throw t;
    this.#r && (ue(this.#r), this.#r = null), this.#n && (ue(this.#n), this.#n = null), this.#o && (ue(this.#o), this.#o = null);
    var i = !1, s = !1;
    const l = () => {
      if (i) {
        ta();
        return;
      }
      i = !0, s && Ks(), tt.ensure(), this.#u = 0, this.#o !== null && ut(this.#o, () => {
        this.#o = null;
      }), this.is_pending = this.has_pending_snippet(), this.#r = this.#v(() => (this.#g = !1, me(() => this.#i(this.#t)))), this.#d > 0 ? this.#b() : this.is_pending = !1;
    };
    et(() => {
      try {
        s = !0, n?.(t, l), s = !1;
      } catch (a) {
        Tt(a, this.#s && this.#s.parent);
      }
      r && (this.#o = this.#v(() => {
        tt.ensure(), this.#g = !0;
        try {
          return me(() => {
            r(
              this.#t,
              () => t,
              () => l
            );
          });
        } catch (a) {
          return Tt(
            a,
            /** @type {Effect} */
            this.#s.parent
          ), null;
        } finally {
          this.#g = !1;
        }
      }));
    });
  }
}
function pa(e, t, n, r) {
  const i = It() ? bn : Zn;
  var s = e.filter((f) => !f.settled);
  if (n.length === 0 && s.length === 0) {
    r(t.map(i));
    return;
  }
  var l = H, a = (
    /** @type {Effect} */
    F
  ), c = _a(), u = s.length === 1 ? s[0].promise : s.length > 1 ? Promise.all(s.map((f) => f.promise)) : null;
  function d(f) {
    c();
    try {
      r(f);
    } catch (_) {
      (a.f & Ge) === 0 && Tt(_, a);
    }
    l?.deactivate(), Ln();
  }
  if (n.length === 0) {
    u.then(() => d(t.map(i)));
    return;
  }
  function h() {
    c(), Promise.all(n.map((f) => /* @__PURE__ */ va(f))).then((f) => d([...t.map(i), ...f])).catch((f) => Tt(f, a));
  }
  u ? u.then(h) : h();
}
function _a() {
  var e = F, t = D, n = $, r = H;
  return function(s = !0) {
    De(e), Te(t), At(n), s && r?.activate();
  };
}
function Ln() {
  De(null), Te(null), At(null);
}
// @__NO_SIDE_EFFECTS__
function bn(e) {
  var t = se | he, n = D !== null && (D.f & se) !== 0 ? (
    /** @type {Derived} */
    D
  ) : null;
  return F !== null && (F.f |= Rt), {
    ctx: $,
    deps: null,
    effects: null,
    equals: Dr,
    f: t,
    fn: e,
    reactions: null,
    rv: 0,
    v: (
      /** @type {V} */
      re
    ),
    wv: 0,
    parent: n ?? F,
    ac: null
  };
}
// @__NO_SIDE_EFFECTS__
function va(e, t, n) {
  let r = (
    /** @type {Effect | null} */
    F
  );
  r === null && Ls();
  var i = (
    /** @type {Boundary} */
    r.b
  ), s = (
    /** @type {Promise<V>} */
    /** @type {unknown} */
    void 0
  ), l = ht(
    /** @type {V} */
    re
  ), a = !D, c = /* @__PURE__ */ new Map();
  return xa(() => {
    var u = Cr();
    s = u.promise;
    try {
      Promise.resolve(e()).then(u.resolve, u.reject).then(() => {
        d === H && d.committed && d.deactivate(), Ln();
      });
    } catch (_) {
      u.reject(_), Ln();
    }
    var d = (
      /** @type {Batch} */
      H
    );
    if (a) {
      var h = i.is_rendered();
      i.update_pending_count(1), d.increment(h), c.get(d)?.reject(yt), c.delete(d), c.set(d, u);
    }
    const f = (_, g = void 0) => {
      if (d.activate(), g)
        g !== yt && (l.f |= Qe, kt(l, g));
      else {
        (l.f & Qe) !== 0 && (l.f ^= Qe), kt(l, _);
        for (const [m, x] of c) {
          if (c.delete(m), m === d) break;
          x.reject(yt);
        }
      }
      a && (i.update_pending_count(-1), d.decrement(h));
    };
    u.promise.then(f, (_) => f(null, _ || "unknown"));
  }), qn(() => {
    for (const u of c.values())
      u.reject(yt);
  }), new Promise((u) => {
    function d(h) {
      function f() {
        h === s ? u(l) : d(s);
      }
      h.then(f, f);
    }
    d(s);
  });
}
// @__NO_SIDE_EFFECTS__
function jt(e) {
  const t = /* @__PURE__ */ bn(e);
  return li(t), t;
}
// @__NO_SIDE_EFFECTS__
function Zn(e) {
  const t = /* @__PURE__ */ bn(e);
  return t.equals = Br, t;
}
function $r(e) {
  var t = e.effects;
  if (t !== null) {
    e.effects = null;
    for (var n = 0; n < t.length; n += 1)
      ue(
        /** @type {Effect} */
        t[n]
      );
  }
}
function ba(e) {
  for (var t = e.parent; t !== null; ) {
    if ((t.f & se) === 0)
      return (t.f & Ge) === 0 ? (
        /** @type {Effect} */
        t
      ) : null;
    t = t.parent;
  }
  return null;
}
function $n(e) {
  var t, n = F;
  De(ba(e));
  try {
    e.f &= ~gt, $r(e), t = di(e);
  } finally {
    De(n);
  }
  return t;
}
function Wr(e) {
  var t = $n(e);
  if (!e.equals(t) && (e.wv = ui(), (!H?.is_fork || e.deps === null) && (e.v = t, e.deps === null))) {
    Q(e, te);
    return;
  }
  rt || (Re !== null ? (Wn() || H?.is_fork) && Re.set(e, t) : jn(e));
}
let Dn = /* @__PURE__ */ new Set();
const nt = /* @__PURE__ */ new Map();
let qr = !1;
function ht(e, t) {
  var n = {
    f: 0,
    // TODO ideally we could skip this altogether, but it causes type errors
    v: e,
    reactions: null,
    equals: Dr,
    rv: 0,
    wv: 0
  };
  return n;
}
// @__NO_SIDE_EFFECTS__
function de(e, t) {
  const n = ht(e);
  return li(n), n;
}
// @__NO_SIDE_EFFECTS__
function Ea(e, t = !1, n = !0) {
  const r = ht(e);
  return t || (r.equals = Br), Ot && n && $ !== null && $.l !== null && ($.l.s ??= []).push(r), r;
}
function ce(e, t, n = !1) {
  D !== null && // since we are untracking the function inside `$inspect.with` we need to add this check
  // to ensure we error if state is set inside an inspect effect
  (!Oe || (D.f & vr) !== 0) && It() && (D.f & (se | Ze | Kn | vr)) !== 0 && (Ae === null || !Nt.call(Ae, e)) && Gs();
  let r = n ? He(t) : t;
  return kt(e, r);
}
function kt(e, t) {
  if (!e.equals(t)) {
    var n = e.v;
    rt ? nt.set(e, t) : nt.set(e, n), e.v = t;
    var r = tt.ensure();
    if (r.capture(e, n), (e.f & se) !== 0) {
      const i = (
        /** @type {Derived} */
        e
      );
      (e.f & he) !== 0 && $n(i), jn(i);
    }
    e.wv = ui(), Yr(e, he), It() && F !== null && (F.f & te) !== 0 && (F.f & (Ie | _t)) === 0 && (ye === null ? Ia([e]) : ye.push(e)), !r.is_fork && Dn.size > 0 && !qr && ma();
  }
  return t;
}
function ma() {
  qr = !1;
  for (const e of Dn)
    (e.f & te) !== 0 && Q(e, $e), Jt(e) && qt(e);
  Dn.clear();
}
function Zt(e) {
  ce(e, e.v + 1);
}
function Yr(e, t) {
  var n = e.reactions;
  if (n !== null)
    for (var r = It(), i = n.length, s = 0; s < i; s++) {
      var l = n[s], a = l.f;
      if (!(!r && l === F)) {
        var c = (a & he) === 0;
        if (c && Q(l, t), (a & se) !== 0) {
          var u = (
            /** @type {Derived} */
            l
          );
          Re?.delete(u), (a & gt) === 0 && (a & Ne && (l.f |= gt), Yr(u, $e));
        } else c && ((a & Ze) !== 0 && ze !== null && ze.add(
          /** @type {Effect} */
          l
        ), je(
          /** @type {Effect} */
          l
        ));
      }
    }
}
function He(e) {
  if (typeof e != "object" || e === null || Gt in e)
    return e;
  const t = Or(e);
  if (t !== xs && t !== Ms)
    return e;
  var n = /* @__PURE__ */ new Map(), r = Rr(e), i = /* @__PURE__ */ de(0), s = ft, l = (a) => {
    if (ft === s)
      return a();
    var c = D, u = ft;
    Te(null), wr(s);
    var d = a();
    return Te(c), wr(u), d;
  };
  return r && n.set("length", /* @__PURE__ */ de(
    /** @type {any[]} */
    e.length
  )), new Proxy(
    /** @type {any} */
    e,
    {
      defineProperty(a, c, u) {
        (!("value" in u) || u.configurable === !1 || u.enumerable === !1 || u.writable === !1) && zs();
        var d = n.get(c);
        return d === void 0 ? d = l(() => {
          var h = /* @__PURE__ */ de(u.value);
          return n.set(c, h), h;
        }) : ce(d, u.value, !0), !0;
      },
      deleteProperty(a, c) {
        var u = n.get(c);
        if (u === void 0) {
          if (c in a) {
            const d = l(() => /* @__PURE__ */ de(re));
            n.set(c, d), Zt(i);
          }
        } else
          ce(u, re), Zt(i);
        return !0;
      },
      get(a, c, u) {
        if (c === Gt)
          return e;
        var d = n.get(c), h = c in a;
        if (d === void 0 && (!h || St(a, c)?.writable) && (d = l(() => {
          var _ = He(h ? a[c] : re), g = /* @__PURE__ */ de(_);
          return g;
        }), n.set(c, d)), d !== void 0) {
          var f = G(d);
          return f === re ? void 0 : f;
        }
        return Reflect.get(a, c, u);
      },
      getOwnPropertyDescriptor(a, c) {
        var u = Reflect.getOwnPropertyDescriptor(a, c);
        if (u && "value" in u) {
          var d = n.get(c);
          d && (u.value = G(d));
        } else if (u === void 0) {
          var h = n.get(c), f = h?.v;
          if (h !== void 0 && f !== re)
            return {
              enumerable: !0,
              configurable: !0,
              value: f,
              writable: !0
            };
        }
        return u;
      },
      has(a, c) {
        if (c === Gt)
          return !0;
        var u = n.get(c), d = u !== void 0 && u.v !== re || Reflect.has(a, c);
        if (u !== void 0 || F !== null && (!d || St(a, c)?.writable)) {
          u === void 0 && (u = l(() => {
            var f = d ? He(a[c]) : re, _ = /* @__PURE__ */ de(f);
            return _;
          }), n.set(c, u));
          var h = G(u);
          if (h === re)
            return !1;
        }
        return d;
      },
      set(a, c, u, d) {
        var h = n.get(c), f = c in a;
        if (r && c === "length")
          for (var _ = u; _ < /** @type {Source<number>} */
          h.v; _ += 1) {
            var g = n.get(_ + "");
            g !== void 0 ? ce(g, re) : _ in a && (g = l(() => /* @__PURE__ */ de(re)), n.set(_ + "", g));
          }
        if (h === void 0)
          (!f || St(a, c)?.writable) && (h = l(() => /* @__PURE__ */ de(void 0)), ce(h, He(u)), n.set(c, h));
        else {
          f = h.v !== re;
          var m = l(() => He(u));
          ce(h, m);
        }
        var x = Reflect.getOwnPropertyDescriptor(a, c);
        if (x?.set && x.set.call(d, u), !f) {
          if (r && typeof c == "string") {
            var T = (
              /** @type {Source<number>} */
              n.get("length")
            ), y = Number(c);
            Number.isInteger(y) && y >= T.v && ce(T, y + 1);
          }
          Zt(i);
        }
        return !0;
      },
      ownKeys(a) {
        G(i);
        var c = Reflect.ownKeys(a).filter((h) => {
          var f = n.get(h);
          return f === void 0 || f.v !== re;
        });
        for (var [u, d] of n)
          d.v !== re && !(u in a) && c.push(u);
        return c;
      },
      setPrototypeOf() {
        Hs();
      }
    }
  );
}
var Bn, Xr, Vr, Jr;
function wa() {
  if (Bn === void 0) {
    Bn = window, Xr = /Firefox/.test(navigator.userAgent);
    var e = Element.prototype, t = Node.prototype, n = Text.prototype;
    Vr = St(t, "firstChild").get, Jr = St(t, "nextSibling").get, _r(e) && (e.__click = void 0, e.__className = void 0, e.__attributes = null, e.__style = void 0, e.__e = void 0), _r(n) && (n.__t = void 0);
  }
}
function Ke(e = "") {
  return document.createTextNode(e);
}
// @__NO_SIDE_EFFECTS__
function Wt(e) {
  return (
    /** @type {TemplateNode | null} */
    Vr.call(e)
  );
}
// @__NO_SIDE_EFFECTS__
function Xt(e) {
  return (
    /** @type {TemplateNode | null} */
    Jr.call(e)
  );
}
function pt(e, t) {
  return /* @__PURE__ */ Wt(e);
}
function Vt(e, t = !1) {
  {
    var n = /* @__PURE__ */ Wt(e);
    return n instanceof Comment && n.data === "" ? /* @__PURE__ */ Xt(n) : n;
  }
}
function Se(e, t = 1, n = !1) {
  let r = e;
  for (; t--; )
    r = /** @type {TemplateNode} */
    /* @__PURE__ */ Xt(r);
  return r;
}
function ya(e) {
  e.textContent = "";
}
function Qr() {
  return !1;
}
let Er = !1;
function Sa() {
  Er || (Er = !0, document.addEventListener(
    "reset",
    (e) => {
      Promise.resolve().then(() => {
        if (!e.defaultPrevented)
          for (
            const t of
            /**@type {HTMLFormElement} */
            e.target.elements
          )
            t.__on_r?.();
      });
    },
    // In the capture phase to guarantee we get noticed of it (no possibility of stopPropagation)
    { capture: !0 }
  ));
}
function En(e) {
  var t = D, n = F;
  Te(null), De(null);
  try {
    return e();
  } finally {
    Te(t), De(n);
  }
}
function Na(e, t, n, r = n) {
  e.addEventListener(t, () => En(n));
  const i = e.__on_r;
  i ? e.__on_r = () => {
    i(), r(!0);
  } : e.__on_r = () => r(!0), Sa();
}
function Aa(e) {
  F === null && (D === null && Ps(), Bs()), rt && Ds();
}
function Ta(e, t) {
  var n = t.last;
  n === null ? t.last = t.first = e : (n.next = e, e.prev = n, t.last = e);
}
function Be(e, t, n) {
  var r = F;
  r !== null && (r.f & we) !== 0 && (e |= we);
  var i = {
    ctx: $,
    deps: null,
    nodes: null,
    f: e | he | Ne,
    first: null,
    fn: t,
    last: null,
    next: null,
    parent: r,
    b: r && r.b,
    prev: null,
    teardown: null,
    wv: 0,
    ac: null
  };
  if (n)
    try {
      qt(i), i.f |= Hn;
    } catch (a) {
      throw ue(i), a;
    }
  else t !== null && je(i);
  var s = i;
  if (n && s.deps === null && s.teardown === null && s.nodes === null && s.first === s.last && // either `null`, or a singular child
  (s.f & Rt) === 0 && (s = s.first, (e & Ze) !== 0 && (e & dt) !== 0 && s !== null && (s.f |= dt)), s !== null && (s.parent = r, r !== null && Ta(s, r), D !== null && (D.f & se) !== 0 && (e & _t) === 0)) {
    var l = (
      /** @type {Derived} */
      D
    );
    (l.effects ??= []).push(s);
  }
  return i;
}
function Wn() {
  return D !== null && !Oe;
}
function qn(e) {
  const t = Be(_n, null, !1);
  return Q(t, te), t.teardown = e, t;
}
function xt(e) {
  Aa();
  var t = (
    /** @type {Effect} */
    F.f
  ), n = !D && (t & Ie) !== 0 && (t & Hn) === 0;
  if (n) {
    var r = (
      /** @type {ComponentContext} */
      $
    );
    (r.e ??= []).push(e);
  } else
    return ei(e);
}
function ei(e) {
  return Be(fn | Os, e, !1);
}
function ka(e) {
  tt.ensure();
  const t = Be(_t | Rt, e, !0);
  return (n = {}) => new Promise((r) => {
    n.outro ? ut(t, () => {
      ue(t), r(void 0);
    }) : (ue(t), r(void 0));
  });
}
function ti(e) {
  return Be(fn, e, !1);
}
function xa(e) {
  return Be(Kn | Rt, e, !0);
}
function Yn(e, t = 0) {
  return Be(_n | t, e, !0);
}
function Mt(e, t = [], n = [], r = []) {
  pa(r, t, n, (i) => {
    Be(_n, () => e(...i.map(G)), !0);
  });
}
function Ct(e, t = 0) {
  var n = Be(Ze | t, e, !0);
  return n;
}
function Ma(e, t = 0) {
  var n = Be(Fn | t, e, !0);
  return n;
}
function me(e) {
  return Be(Ie | Rt, e, !0);
}
function ni(e) {
  var t = e.teardown;
  if (t !== null) {
    const n = rt, r = D;
    mr(!0), Te(null);
    try {
      t.call(null);
    } finally {
      mr(n), Te(r);
    }
  }
}
function ri(e, t = !1) {
  var n = e.first;
  for (e.first = e.last = null; n !== null; ) {
    const i = n.ac;
    i !== null && En(() => {
      i.abort(yt);
    });
    var r = n.next;
    (n.f & _t) !== 0 ? n.parent = null : ue(n, t), n = r;
  }
}
function Ra(e) {
  for (var t = e.first; t !== null; ) {
    var n = t.next;
    (t.f & Ie) === 0 && ue(t), t = n;
  }
}
function ue(e, t = !0) {
  var n = !1;
  (t || (e.f & Gn) !== 0) && e.nodes !== null && e.nodes.end !== null && (Oa(
    e.nodes.start,
    /** @type {TemplateNode} */
    e.nodes.end
  ), n = !0), ri(e, t && !n), dn(e, 0), Q(e, Ge);
  var r = e.nodes && e.nodes.t;
  if (r !== null)
    for (const s of r)
      s.stop();
  ni(e);
  var i = e.parent;
  i !== null && i.first !== null && ii(e), e.next = e.prev = e.teardown = e.ctx = e.deps = e.fn = e.nodes = e.ac = null;
}
function Oa(e, t) {
  for (; e !== null; ) {
    var n = e === t ? null : /* @__PURE__ */ Xt(e);
    e.remove(), e = n;
  }
}
function ii(e) {
  var t = e.parent, n = e.prev, r = e.next;
  n !== null && (n.next = r), r !== null && (r.prev = n), t !== null && (t.first === e && (t.first = r), t.last === e && (t.last = n));
}
function ut(e, t, n = !0) {
  var r = [];
  si(e, r, !0);
  var i = () => {
    n && ue(e), t && t();
  }, s = r.length;
  if (s > 0) {
    var l = () => --s || i();
    for (var a of r)
      a.out(l);
  } else
    i();
}
function si(e, t, n) {
  if ((e.f & we) === 0) {
    e.f ^= we;
    var r = e.nodes && e.nodes.t;
    if (r !== null)
      for (const a of r)
        (a.is_global || n) && t.push(a);
    for (var i = e.first; i !== null; ) {
      var s = i.next, l = (i.f & dt) !== 0 || // If this is a branch effect without a block effect parent,
      // it means the parent block effect was pruned. In that case,
      // transparency information was transferred to the branch effect.
      (i.f & Ie) !== 0 && (e.f & Ze) !== 0;
      si(i, t, l ? n : !1), i = s;
    }
  }
}
function Xn(e) {
  ai(e, !0);
}
function ai(e, t) {
  if ((e.f & we) !== 0) {
    e.f ^= we, (e.f & te) === 0 && (Q(e, he), je(e));
    for (var n = e.first; n !== null; ) {
      var r = n.next, i = (n.f & dt) !== 0 || (n.f & Ie) !== 0;
      ai(n, i ? t : !1), n = r;
    }
    var s = e.nodes && e.nodes.t;
    if (s !== null)
      for (const l of s)
        (l.is_global || t) && l.in();
  }
}
function oi(e, t) {
  if (e.nodes)
    for (var n = e.nodes.start, r = e.nodes.end; n !== null; ) {
      var i = n === r ? null : /* @__PURE__ */ Xt(n);
      t.append(n), n = i;
    }
}
let un = !1, rt = !1;
function mr(e) {
  rt = e;
}
let D = null, Oe = !1;
function Te(e) {
  D = e;
}
let F = null;
function De(e) {
  F = e;
}
let Ae = null;
function li(e) {
  D !== null && (Ae === null ? Ae = [e] : Ae.push(e));
}
let ge = null, be = 0, ye = null;
function Ia(e) {
  ye = e;
}
let ci = 1, ct = 0, ft = ct;
function wr(e) {
  ft = e;
}
function ui() {
  return ++ci;
}
function Jt(e) {
  var t = e.f;
  if ((t & he) !== 0)
    return !0;
  if (t & se && (e.f &= ~gt), (t & $e) !== 0) {
    for (var n = (
      /** @type {Value[]} */
      e.deps
    ), r = n.length, i = 0; i < r; i++) {
      var s = n[i];
      if (Jt(
        /** @type {Derived} */
        s
      ) && Wr(
        /** @type {Derived} */
        s
      ), s.wv > e.wv)
        return !0;
    }
    (t & Ne) !== 0 && // During time traveling we don't want to reset the status so that
    // traversal of the graph in the other batches still happens
    Re === null && Q(e, te);
  }
  return !1;
}
function fi(e, t, n = !0) {
  var r = e.reactions;
  if (r !== null && !(Ae !== null && Nt.call(Ae, e)))
    for (var i = 0; i < r.length; i++) {
      var s = r[i];
      (s.f & se) !== 0 ? fi(
        /** @type {Derived} */
        s,
        t,
        !1
      ) : t === s && (n ? Q(s, he) : (s.f & te) !== 0 && Q(s, $e), je(
        /** @type {Effect} */
        s
      ));
    }
}
function di(e) {
  var t = ge, n = be, r = ye, i = D, s = Ae, l = $, a = Oe, c = ft, u = e.f;
  ge = /** @type {null | Value[]} */
  null, be = 0, ye = null, D = (u & (Ie | _t)) === 0 ? e : null, Ae = null, At(e.ctx), Oe = !1, ft = ++ct, e.ac !== null && (En(() => {
    e.ac.abort(yt);
  }), e.ac = null);
  try {
    e.f |= On;
    var d = (
      /** @type {Function} */
      e.fn
    ), h = d(), f = e.deps, _ = H?.is_fork;
    if (ge !== null) {
      var g;
      if (_ || dn(e, be), f !== null && be > 0)
        for (f.length = be + ge.length, g = 0; g < ge.length; g++)
          f[be + g] = ge[g];
      else
        e.deps = f = ge;
      if (Wn() && (e.f & Ne) !== 0)
        for (g = be; g < f.length; g++)
          (f[g].reactions ??= []).push(e);
    } else !_ && f !== null && be < f.length && (dn(e, be), f.length = be);
    if (It() && ye !== null && !Oe && f !== null && (e.f & (se | $e | he)) === 0)
      for (g = 0; g < /** @type {Source[]} */
      ye.length; g++)
        fi(
          ye[g],
          /** @type {Effect} */
          e
        );
    if (i !== null && i !== e) {
      if (ct++, i.deps !== null)
        for (let m = 0; m < n; m += 1)
          i.deps[m].rv = ct;
      if (t !== null)
        for (const m of t)
          m.rv = ct;
      ye !== null && (r === null ? r = ye : r.push(.../** @type {Source[]} */
      ye));
    }
    return (e.f & Qe) !== 0 && (e.f ^= Qe), h;
  } catch (m) {
    return Fr(m);
  } finally {
    e.f ^= On, ge = t, be = n, ye = r, D = i, Ae = s, At(l), Oe = a, ft = c;
  }
}
function Ca(e, t) {
  let n = t.reactions;
  if (n !== null) {
    var r = As.call(n, e);
    if (r !== -1) {
      var i = n.length - 1;
      i === 0 ? n = t.reactions = null : (n[r] = n[i], n.pop());
    }
  }
  if (n === null && (t.f & se) !== 0 && // Destroying a child effect while updating a parent effect can cause a dependency to appear
  // to be unused, when in fact it is used by the currently-updating parent. Checking `new_deps`
  // allows us to skip the expensive work of disconnecting and immediately reconnecting it
  (ge === null || !Nt.call(ge, t))) {
    var s = (
      /** @type {Derived} */
      t
    );
    (s.f & Ne) !== 0 && (s.f ^= Ne, s.f &= ~gt), jn(s), $r(s), dn(s, 0);
  }
}
function dn(e, t) {
  var n = e.deps;
  if (n !== null)
    for (var r = t; r < n.length; r++)
      Ca(e, n[r]);
}
function qt(e) {
  var t = e.f;
  if ((t & Ge) === 0) {
    Q(e, te);
    var n = F, r = un;
    F = e, un = !0;
    try {
      (t & (Ze | Fn)) !== 0 ? Ra(e) : ri(e), ni(e);
      var i = di(e);
      e.teardown = typeof i == "function" ? i : null, e.wv = ci;
      var s;
    } finally {
      un = r, F = n;
    }
  }
}
async function La() {
  await Promise.resolve(), ca();
}
function G(e) {
  var t = e.f, n = (t & se) !== 0;
  if (D !== null && !Oe) {
    var r = F !== null && (F.f & Ge) !== 0;
    if (!r && (Ae === null || !Nt.call(Ae, e))) {
      var i = D.deps;
      if ((D.f & On) !== 0)
        e.rv < ct && (e.rv = ct, ge === null && i !== null && i[be] === e ? be++ : ge === null ? ge = [e] : ge.push(e));
      else {
        (D.deps ??= []).push(e);
        var s = e.reactions;
        s === null ? e.reactions = [D] : Nt.call(s, D) || s.push(D);
      }
    }
  }
  if (rt && nt.has(e))
    return nt.get(e);
  if (n) {
    var l = (
      /** @type {Derived} */
      e
    );
    if (rt) {
      var a = l.v;
      return ((l.f & te) === 0 && l.reactions !== null || hi(l)) && (a = $n(l)), nt.set(l, a), a;
    }
    var c = (l.f & Ne) === 0 && !Oe && D !== null && (un || (D.f & Ne) !== 0), u = l.deps === null;
    Jt(l) && (c && (l.f |= Ne), Wr(l)), c && !u && gi(l);
  }
  if (Re?.has(e))
    return Re.get(e);
  if ((e.f & Qe) !== 0)
    throw e.v;
  return e.v;
}
function gi(e) {
  if (e.deps !== null) {
    e.f |= Ne;
    for (const t of e.deps)
      (t.reactions ??= []).push(e), (t.f & se) !== 0 && (t.f & Ne) === 0 && gi(
        /** @type {Derived} */
        t
      );
  }
}
function hi(e) {
  if (e.v === re) return !0;
  if (e.deps === null) return !1;
  for (const t of e.deps)
    if (nt.has(t) || (t.f & se) !== 0 && hi(
      /** @type {Derived} */
      t
    ))
      return !0;
  return !1;
}
function Qt(e) {
  var t = Oe;
  try {
    return Oe = !0, e();
  } finally {
    Oe = t;
  }
}
const Da = ["touchstart", "touchmove"];
function Ba(e) {
  return Da.includes(e);
}
const pi = /* @__PURE__ */ new Set(), Pn = /* @__PURE__ */ new Set();
function Pa(e, t, n, r = {}) {
  function i(s) {
    if (r.capture || zt.call(t, s), !s.cancelBubble)
      return En(() => n?.call(this, s));
  }
  return e.startsWith("pointer") || e.startsWith("touch") || e === "wheel" ? et(() => {
    t.addEventListener(e, i, r);
  }) : t.addEventListener(e, i, r), i;
}
function _i(e, t, n, r, i) {
  var s = { capture: r, passive: i }, l = Pa(e, t, n, s);
  (t === document.body || // @ts-ignore
  t === window || // @ts-ignore
  t === document || // Firefox has quirky behavior, it can happen that we still get "canplay" events when the element is already removed
  t instanceof HTMLMediaElement) && qn(() => {
    t.removeEventListener(e, l, s);
  });
}
function vi(e) {
  for (var t = 0; t < e.length; t++)
    pi.add(e[t]);
  for (var n of Pn)
    n(e);
}
let yr = null;
function zt(e) {
  var t = this, n = (
    /** @type {Node} */
    t.ownerDocument
  ), r = e.type, i = e.composedPath?.() || [], s = (
    /** @type {null | Element} */
    i[0] || e.target
  );
  yr = e;
  var l = 0, a = yr === e && e.__root;
  if (a) {
    var c = i.indexOf(a);
    if (c !== -1 && (t === document || t === /** @type {any} */
    window)) {
      e.__root = t;
      return;
    }
    var u = i.indexOf(t);
    if (u === -1)
      return;
    c <= u && (l = c);
  }
  if (s = /** @type {Element} */
  i[l] || e.target, s !== t) {
    Ts(e, "currentTarget", {
      configurable: !0,
      get() {
        return s || n;
      }
    });
    var d = D, h = F;
    Te(null), De(null);
    try {
      for (var f, _ = []; s !== null; ) {
        var g = s.assignedSlot || s.parentNode || /** @type {any} */
        s.host || null;
        try {
          var m = s["__" + r];
          m != null && (!/** @type {any} */
          s.disabled || // DOM could've been updated already by the time this is reached, so we check this as well
          // -> the target could not have been disabled because it emits the event in the first place
          e.target === s) && m.call(s, e);
        } catch (x) {
          f ? _.push(x) : f = x;
        }
        if (e.cancelBubble || g === t || g === null)
          break;
        s = g;
      }
      if (f) {
        for (let x of _)
          queueMicrotask(() => {
            throw x;
          });
        throw f;
      }
    } finally {
      e.__root = t, delete e.currentTarget, Te(d), De(h);
    }
  }
}
function bi(e) {
  var t = document.createElement("template");
  return t.innerHTML = e.replaceAll("<!>", "<!---->"), t.content;
}
function gn(e, t) {
  var n = (
    /** @type {Effect} */
    F
  );
  n.nodes === null && (n.nodes = { start: e, end: t, a: null, t: null });
}
// @__NO_SIDE_EFFECTS__
function pe(e, t) {
  var n = (t & Js) !== 0, r = (t & Qs) !== 0, i, s = !e.startsWith("<!>");
  return () => {
    i === void 0 && (i = bi(s ? e : "<!>" + e), n || (i = /** @type {TemplateNode} */
    /* @__PURE__ */ Wt(i)));
    var l = (
      /** @type {TemplateNode} */
      r || Xr ? document.importNode(i, !0) : i.cloneNode(!0)
    );
    if (n) {
      var a = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Wt(l)
      ), c = (
        /** @type {TemplateNode} */
        l.lastChild
      );
      gn(a, c);
    } else
      gn(l, l);
    return l;
  };
}
function Vn() {
  var e = document.createDocumentFragment(), t = document.createComment(""), n = Ke();
  return e.append(t, n), gn(t, n), e;
}
function ae(e, t) {
  e !== null && e.before(
    /** @type {Node} */
    t
  );
}
function Ua(e, t) {
  return Fa(e, t);
}
const mt = /* @__PURE__ */ new Map();
function Fa(e, { target: t, anchor: n, props: r = {}, events: i, context: s, intro: l = !0 }) {
  wa();
  var a = /* @__PURE__ */ new Set(), c = (h) => {
    for (var f = 0; f < h.length; f++) {
      var _ = h[f];
      if (!a.has(_)) {
        a.add(_);
        var g = Ba(_);
        t.addEventListener(_, zt, { passive: g });
        var m = mt.get(_);
        m === void 0 ? (document.addEventListener(_, zt, { passive: g }), mt.set(_, 1)) : mt.set(_, m + 1);
      }
    }
  };
  c(pn(pi)), Pn.add(c);
  var u = void 0, d = ka(() => {
    var h = n ?? t.appendChild(Ke());
    return ga(
      /** @type {TemplateNode} */
      h,
      {
        pending: () => {
        }
      },
      (f) => {
        if (s) {
          We({});
          var _ = (
            /** @type {ComponentContext} */
            $
          );
          _.c = s;
        }
        i && (r.$$events = i), u = e(f, r) || {}, s && qe();
      }
    ), () => {
      for (var f of a) {
        t.removeEventListener(f, zt);
        var _ = (
          /** @type {number} */
          mt.get(f)
        );
        --_ === 0 ? (document.removeEventListener(f, zt), mt.delete(f)) : mt.set(f, _);
      }
      Pn.delete(c), h !== n && h.parentNode?.removeChild(h);
    };
  });
  return za.set(u, d), u;
}
let za = /* @__PURE__ */ new WeakMap();
class Jn {
  /** @type {TemplateNode} */
  anchor;
  /** @type {Map<Batch, Key>} */
  #t = /* @__PURE__ */ new Map();
  /**
   * Map of keys to effects that are currently rendered in the DOM.
   * These effects are visible and actively part of the document tree.
   * Example:
   * ```
   * {#if condition}
   * 	foo
   * {:else}
   * 	bar
   * {/if}
   * ```
   * Can result in the entries `true->Effect` and `false->Effect`
   * @type {Map<Key, Effect>}
   */
  #a = /* @__PURE__ */ new Map();
  /**
   * Similar to #onscreen with respect to the keys, but contains branches that are not yet
   * in the DOM, because their insertion is deferred.
   * @type {Map<Key, Branch>}
   */
  #e = /* @__PURE__ */ new Map();
  /**
   * Keys of effects that are currently outroing
   * @type {Set<Key>}
   */
  #i = /* @__PURE__ */ new Set();
  /**
   * Whether to pause (i.e. outro) on change, or destroy immediately.
   * This is necessary for `<svelte:element>`
   */
  #s = !0;
  /**
   * @param {TemplateNode} anchor
   * @param {boolean} transition
   */
  constructor(t, n = !0) {
    this.anchor = t, this.#s = n;
  }
  #r = () => {
    var t = (
      /** @type {Batch} */
      H
    );
    if (this.#t.has(t)) {
      var n = (
        /** @type {Key} */
        this.#t.get(t)
      ), r = this.#a.get(n);
      if (r)
        Xn(r), this.#i.delete(n);
      else {
        var i = this.#e.get(n);
        i && (this.#a.set(n, i.effect), this.#e.delete(n), i.fragment.lastChild.remove(), this.anchor.before(i.fragment), r = i.effect);
      }
      for (const [s, l] of this.#t) {
        if (this.#t.delete(s), s === t)
          break;
        const a = this.#e.get(l);
        a && (ue(a.effect), this.#e.delete(l));
      }
      for (const [s, l] of this.#a) {
        if (s === n || this.#i.has(s)) continue;
        const a = () => {
          if (Array.from(this.#t.values()).includes(s)) {
            var u = document.createDocumentFragment();
            oi(l, u), u.append(Ke()), this.#e.set(s, { effect: l, fragment: u });
          } else
            ue(l);
          this.#i.delete(s), this.#a.delete(s);
        };
        this.#s || !r ? (this.#i.add(s), ut(l, a, !1)) : a();
      }
    }
  };
  /**
   * @param {Batch} batch
   */
  #n = (t) => {
    this.#t.delete(t);
    const n = Array.from(this.#t.values());
    for (const [r, i] of this.#e)
      n.includes(r) || (ue(i.effect), this.#e.delete(r));
  };
  /**
   *
   * @param {any} key
   * @param {null | ((target: TemplateNode) => void)} fn
   */
  ensure(t, n) {
    var r = (
      /** @type {Batch} */
      H
    ), i = Qr();
    if (n && !this.#a.has(t) && !this.#e.has(t))
      if (i) {
        var s = document.createDocumentFragment(), l = Ke();
        s.append(l), this.#e.set(t, {
          effect: me(() => n(l)),
          fragment: s
        });
      } else
        this.#a.set(
          t,
          me(() => n(this.anchor))
        );
    if (this.#t.set(r, t), i) {
      for (const [a, c] of this.#a)
        a === t ? r.skipped_effects.delete(c) : r.skipped_effects.add(c);
      for (const [a, c] of this.#e)
        a === t ? r.skipped_effects.delete(c.effect) : r.skipped_effects.add(c.effect);
      r.oncommit(this.#r), r.ondiscard(this.#n);
    } else
      this.#r();
  }
}
function Ei(e, t, n = !1) {
  var r = new Jn(e), i = n ? dt : 0;
  function s(l, a) {
    r.ensure(l, a);
  }
  Ct(() => {
    var l = !1;
    t((a, c = !0) => {
      l = !0, s(c, a);
    }), l || s(!1, null);
  }, i);
}
function Ha(e, t, n) {
  var r = new Jn(e), i = !It();
  Ct(() => {
    var s = t();
    i && s !== null && typeof s == "object" && (s = /** @type {V} */
    {}), r.ensure(s, n);
  });
}
function mi(e, t) {
  return t;
}
function Ga(e, t, n) {
  for (var r = [], i = t.length, s, l = t.length, a = 0; a < i; a++) {
    let h = t[a];
    ut(
      h,
      () => {
        if (s) {
          if (s.pending.delete(h), s.done.add(h), s.pending.size === 0) {
            var f = (
              /** @type {Set<EachOutroGroup>} */
              e.outrogroups
            );
            Un(pn(s.done)), f.delete(s), f.size === 0 && (e.outrogroups = null);
          }
        } else
          l -= 1;
      },
      !1
    );
  }
  if (l === 0) {
    var c = r.length === 0 && n !== null;
    if (c) {
      var u = (
        /** @type {Element} */
        n
      ), d = (
        /** @type {Element} */
        u.parentNode
      );
      ya(d), d.append(u), e.items.clear();
    }
    Un(t, !c);
  } else
    s = {
      pending: new Set(t),
      done: /* @__PURE__ */ new Set()
    }, (e.outrogroups ??= /* @__PURE__ */ new Set()).add(s);
}
function Un(e, t = !0) {
  for (var n = 0; n < e.length; n++)
    ue(e[n], t);
}
var Sr;
function wi(e, t, n, r, i, s = null) {
  var l = e, a = /* @__PURE__ */ new Map();
  {
    var c = (
      /** @type {Element} */
      e
    );
    l = c.appendChild(Ke());
  }
  var u = null, d = /* @__PURE__ */ Zn(() => {
    var x = n();
    return Rr(x) ? x : x == null ? [] : pn(x);
  }), h, f = !0;
  function _() {
    m.fallback = u, Ka(m, h, l, t, r), u !== null && (h.length === 0 ? (u.f & Je) === 0 ? Xn(u) : (u.f ^= Je, Ht(u, null, l)) : ut(u, () => {
      u = null;
    }));
  }
  var g = Ct(() => {
    h = /** @type {V[]} */
    G(d);
    for (var x = h.length, T = /* @__PURE__ */ new Set(), y = (
      /** @type {Batch} */
      H
    ), M = Qr(), B = 0; B < x; B += 1) {
      var R = h[B], Z = r(R, B), W = f ? null : a.get(Z);
      W ? (W.v && kt(W.v, R), W.i && kt(W.i, B), M && y.skipped_effects.delete(W.e)) : (W = ja(
        a,
        f ? l : Sr ??= Ke(),
        R,
        Z,
        B,
        i,
        t,
        n
      ), f || (W.e.f |= Je), a.set(Z, W)), T.add(Z);
    }
    if (x === 0 && s && !u && (f ? u = me(() => s(l)) : (u = me(() => s(Sr ??= Ke())), u.f |= Je)), !f)
      if (M) {
        for (const [X, P] of a)
          T.has(X) || y.skipped_effects.add(P.e);
        y.oncommit(_), y.ondiscard(() => {
        });
      } else
        _();
    G(d);
  }), m = { effect: g, items: a, outrogroups: null, fallback: u };
  f = !1;
}
function Ft(e) {
  for (; e !== null && (e.f & Ie) === 0; )
    e = e.next;
  return e;
}
function Ka(e, t, n, r, i) {
  var s = t.length, l = e.items, a = Ft(e.effect.first), c, u = null, d = [], h = [], f, _, g, m;
  for (m = 0; m < s; m += 1) {
    if (f = t[m], _ = i(f, m), g = /** @type {EachItem} */
    l.get(_).e, e.outrogroups !== null)
      for (const X of e.outrogroups)
        X.pending.delete(g), X.done.delete(g);
    if ((g.f & Je) !== 0)
      if (g.f ^= Je, g === a)
        Ht(g, null, n);
      else {
        var x = u ? u.next : a;
        g === e.effect.last && (e.effect.last = g.prev), g.prev && (g.prev.next = g.next), g.next && (g.next.prev = g.prev), Ve(e, u, g), Ve(e, g, x), Ht(g, x, n), u = g, d = [], h = [], a = Ft(u.next);
        continue;
      }
    if ((g.f & we) !== 0 && Xn(g), g !== a) {
      if (c !== void 0 && c.has(g)) {
        if (d.length < h.length) {
          var T = h[0], y;
          u = T.prev;
          var M = d[0], B = d[d.length - 1];
          for (y = 0; y < d.length; y += 1)
            Ht(d[y], T, n);
          for (y = 0; y < h.length; y += 1)
            c.delete(h[y]);
          Ve(e, M.prev, B.next), Ve(e, u, M), Ve(e, B, T), a = T, u = B, m -= 1, d = [], h = [];
        } else
          c.delete(g), Ht(g, a, n), Ve(e, g.prev, g.next), Ve(e, g, u === null ? e.effect.first : u.next), Ve(e, u, g), u = g;
        continue;
      }
      for (d = [], h = []; a !== null && a !== g; )
        (c ??= /* @__PURE__ */ new Set()).add(a), h.push(a), a = Ft(a.next);
      if (a === null)
        continue;
    }
    (g.f & Je) === 0 && d.push(g), u = g, a = Ft(g.next);
  }
  if (e.outrogroups !== null) {
    for (const X of e.outrogroups)
      X.pending.size === 0 && (Un(pn(X.done)), e.outrogroups?.delete(X));
    e.outrogroups.size === 0 && (e.outrogroups = null);
  }
  if (a !== null || c !== void 0) {
    var R = [];
    if (c !== void 0)
      for (g of c)
        (g.f & we) === 0 && R.push(g);
    for (; a !== null; )
      (a.f & we) === 0 && a !== e.fallback && R.push(a), a = Ft(a.next);
    var Z = R.length;
    if (Z > 0) {
      var W = s === 0 ? n : null;
      Ga(e, R, W);
    }
  }
}
function ja(e, t, n, r, i, s, l, a) {
  var c = (l & js) !== 0 ? (l & $s) === 0 ? /* @__PURE__ */ Ea(n, !1, !1) : ht(n) : null, u = (l & Zs) !== 0 ? ht(i) : null;
  return {
    v: c,
    i: u,
    e: me(() => (s(t, c ?? n, u ?? i, a), () => {
      e.delete(r);
    }))
  };
}
function Ht(e, t, n) {
  if (e.nodes)
    for (var r = e.nodes.start, i = e.nodes.end, s = t && (t.f & Je) === 0 ? (
      /** @type {EffectNodes} */
      t.nodes.start
    ) : n; r !== null; ) {
      var l = (
        /** @type {TemplateNode} */
        /* @__PURE__ */ Xt(r)
      );
      if (s.before(r), r === i)
        return;
      r = l;
    }
}
function Ve(e, t, n) {
  t === null ? e.effect.first = n : t.next = n, n === null ? e.effect.last = t : n.prev = t;
}
function Qn(e, t, ...n) {
  var r = new Jn(e);
  Ct(() => {
    const i = t() ?? null;
    r.ensure(i, i && ((s) => i(s, ...n)));
  }, dt);
}
function Za(e) {
  return (t, ...n) => {
    var r = e(...n), i;
    {
      var s = r.render().trim(), l = bi(s);
      i = /** @type {Element} */
      /* @__PURE__ */ Wt(l), t.before(i);
    }
    const a = r.setup?.(i);
    gn(i, i), typeof a == "function" && qn(a);
  };
}
function $a(e, t) {
  var n;
  n = document.head.appendChild(Ke()), Ct(() => t(n), Gn);
}
function Wa(e, t) {
  var n = void 0, r;
  Ma(() => {
    n !== (n = t()) && (r && (ue(r), r = null), n && (r = me(() => {
      ti(() => (
        /** @type {(node: Element) => void} */
        n(e)
      ));
    })));
  });
}
const Nr = [...` 	
\r\f \v\uFEFF`];
function qa(e, t, n) {
  var r = "" + e;
  if (n) {
    for (var i in n)
      if (n[i])
        r = r ? r + " " + i : i;
      else if (r.length)
        for (var s = i.length, l = 0; (l = r.indexOf(i, l)) >= 0; ) {
          var a = l + s;
          (l === 0 || Nr.includes(r[l - 1])) && (a === r.length || Nr.includes(r[a])) ? r = (l === 0 ? "" : r.substring(0, l)) + r.substring(a + 1) : l = a;
        }
  }
  return r === "" ? null : r;
}
function Ya(e, t) {
  return e == null ? null : String(e);
}
function Xa(e, t, n, r, i, s) {
  var l = e.__className;
  if (l !== n || l === void 0) {
    var a = qa(n, r, s);
    a == null ? e.removeAttribute("class") : e.className = a, e.__className = n;
  } else if (s && i !== s)
    for (var c in s) {
      var u = !!s[c];
      (i == null || u !== !!i[c]) && e.classList.toggle(c, u);
    }
  return s;
}
function Yt(e, t, n, r) {
  var i = e.__style;
  if (i !== t) {
    var s = Ya(t);
    s == null ? e.removeAttribute("style") : e.style.cssText = s, e.__style = t;
  }
  return r;
}
const Va = /* @__PURE__ */ Symbol("is custom element"), Ja = /* @__PURE__ */ Symbol("is html");
function Me(e, t, n, r) {
  var i = Qa(e);
  i[t] !== (i[t] = n) && (t === "loading" && (e[Cs] = n), n == null ? e.removeAttribute(t) : typeof n != "string" && eo(e).includes(t) ? e[t] = n : e.setAttribute(t, n));
}
function Qa(e) {
  return (
    /** @type {Record<string | symbol, unknown>} **/
    // @ts-expect-error
    e.__attributes ??= {
      [Va]: e.nodeName.includes("-"),
      [Ja]: e.namespaceURI === ea
    }
  );
}
var Ar = /* @__PURE__ */ new Map();
function eo(e) {
  var t = e.getAttribute("is") || e.nodeName, n = Ar.get(t);
  if (n) return n;
  Ar.set(t, n = []);
  for (var r, i = e, s = Element.prototype; s !== i; ) {
    r = ks(i);
    for (var l in r)
      r[l].set && n.push(l);
    i = Or(i);
  }
  return n;
}
function to(e, t, n = t) {
  var r = /* @__PURE__ */ new WeakSet();
  Na(e, "input", async (i) => {
    var s = i ? e.defaultValue : e.value;
    if (s = kn(e) ? xn(s) : s, n(s), H !== null && r.add(H), await La(), s !== (s = t())) {
      var l = e.selectionStart, a = e.selectionEnd, c = e.value.length;
      if (e.value = s ?? "", a !== null) {
        var u = e.value.length;
        l === a && a === c && u > c ? (e.selectionStart = u, e.selectionEnd = u) : (e.selectionStart = l, e.selectionEnd = Math.min(a, u));
      }
    }
  }), // If we are hydrating and the value has since changed,
  // then use the updated value from the input instead.
  // If defaultValue is set, then value == defaultValue
  // TODO Svelte 6: remove input.value check and set to empty string?
  Qt(t) == null && e.value && (n(kn(e) ? xn(e.value) : e.value), H !== null && r.add(H)), Yn(() => {
    var i = t();
    if (e === document.activeElement) {
      var s = (
        /** @type {Batch} */
        In ?? H
      );
      if (r.has(s))
        return;
    }
    kn(e) && i === xn(e.value) || e.type === "date" && !i && !e.value || i !== e.value && (e.value = i ?? "");
  });
}
function kn(e) {
  var t = e.type;
  return t === "number" || t === "range";
}
function xn(e) {
  return e === "" ? null : +e;
}
function Tr(e, t) {
  return e === t || e?.[Gt] === t;
}
function Mn(e = {}, t, n, r) {
  return ti(() => {
    var i, s;
    return Yn(() => {
      i = s, s = [], Qt(() => {
        e !== n(...s) && (t(e, ...s), i && Tr(n(...i), e) && t(null, ...i));
      });
    }), () => {
      et(() => {
        s && Tr(n(...s), e) && t(null, ...s);
      });
    };
  }), e;
}
let cn = !1;
function no(e) {
  var t = cn;
  try {
    return cn = !1, [e(), cn];
  } finally {
    cn = t;
  }
}
function ie(e, t, n, r) {
  var i = !Ot || (n & qs) !== 0, s = (n & Xs) !== 0, l = (n & Vs) !== 0, a = (
    /** @type {V} */
    r
  ), c = !0, u = () => (c && (c = !1, a = l ? Qt(
    /** @type {() => V} */
    r
  ) : (
    /** @type {V} */
    r
  )), a), d;
  if (s) {
    var h = Gt in e || Is in e;
    d = St(e, t)?.set ?? (h && t in e ? (M) => e[t] = M : void 0);
  }
  var f, _ = !1;
  s ? [f, _] = no(() => (
    /** @type {V} */
    e[t]
  )) : f = /** @type {V} */
  e[t], f === void 0 && r !== void 0 && (f = u(), d && (i && Fs(), d(f)));
  var g;
  if (i ? g = () => {
    var M = (
      /** @type {V} */
      e[t]
    );
    return M === void 0 ? u() : (c = !0, M);
  } : g = () => {
    var M = (
      /** @type {V} */
      e[t]
    );
    return M !== void 0 && (a = /** @type {V} */
    void 0), M === void 0 ? a : M;
  }, i && (n & Ys) === 0)
    return g;
  if (d) {
    var m = e.$$legacy;
    return (
      /** @type {() => V} */
      (function(M, B) {
        return arguments.length > 0 ? ((!i || !B || m || _) && d(B ? g() : M), M) : g();
      })
    );
  }
  var x = !1, T = ((n & Ws) !== 0 ? bn : Zn)(() => (x = !1, g()));
  s && G(T);
  var y = (
    /** @type {Effect} */
    F
  );
  return (
    /** @type {() => V} */
    (function(M, B) {
      if (arguments.length > 0) {
        const R = B ? G(T) : i && s ? He(M) : M;
        return ce(T, R), x = !0, a !== void 0 && (a = R), M;
      }
      return rt && x || (y.f & Ge) !== 0 ? T.v : G(T);
    })
  );
}
function ro(e) {
  $ === null && Lr(), Ot && $.l !== null ? io($).m.push(e) : xt(() => {
    const t = Qt(e);
    if (typeof t == "function") return (
      /** @type {() => void} */
      t
    );
  });
}
function io(e) {
  var t = (
    /** @type {ComponentContextLegacy} */
    e.l
  );
  return t.u ??= { a: [], b: [], m: [] };
}
const so = "5";
typeof window < "u" && ((window.__svelte ??= {}).v ??= /* @__PURE__ */ new Set()).add(so);
ra();
var ao = /* @__PURE__ */ pe('<div data-mark="true" data-ready="true"><!></div>');
function oo(e, t) {
  We(t, !0);
  let n = /* @__PURE__ */ de(!1), r = !0;
  xt(() => {
    const l = !!t.snippet;
    r && l && (ce(n, !1), requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        ce(n, !0);
      });
    })), r = !l;
  });
  var i = ao(), s = pt(i);
  Qn(s, () => t.snippet ?? Ir), Mt(() => {
    Me(i, "id", t.id), Yt(i, `transition: ${G(n) ? "all 0.5s ease" : "none"}`);
  }), ae(e, i), qe();
}
function lo(e) {
  let t = null;
  return e({ before: (n) => t = n }), t;
}
let $t = null;
function yi(e) {
  if (!e)
    return { commentGroups: [], allElements: [] };
  const t = lo(e);
  let n = [];
  if (t && t.childNodes ? n = Array.from(t.childNodes) : Array.isArray(t) && (n = t), n.length === 0)
    return console.warn("Could not extract any nodes"), { commentGroups: [], allElements: [] };
  const r = [];
  let i = [];
  for (const a of n)
    a.nodeType === Node.COMMENT_NODE ? i.length > 0 && (r.push([...i]), i = []) : i.push(a);
  i.length > 0 && r.push(i);
  const s = r.filter((a) => a.some((c) => c.nodeType === Node.ELEMENT_NODE)), l = [];
  return s.forEach((a, c) => {
    a.filter((d) => d.nodeType === Node.ELEMENT_NODE).forEach((d, h) => {
      l.push({
        element: d,
        groupIndex: c,
        elementIndex: h,
        globalIndex: l.length
      });
    });
  }), { commentGroups: s, allElements: l };
}
function co(e) {
  if (!e)
    return [/* @__PURE__ */ new Set(), 0];
  $t = yi(e);
  const t = /* @__PURE__ */ new Set();
  $t.allElements.forEach(({ element: r }) => {
    r.id && t.add(r.id);
  });
  const n = $t.commentGroups.length;
  return [t, n];
}
function uo(e) {
  if (!e)
    return /* @__PURE__ */ new Map();
  const { allElements: t } = $t || yi(e), n = /* @__PURE__ */ new Map();
  return t.forEach(({ element: r, groupIndex: i, elementIndex: s, globalIndex: l }) => {
    r.id && n.set(`${i}#${r.id}`, Za(() => ({
      render: () => `<div data-element="${l}" data-group="${i}" data-element-in-group="${s}"></div>`,
      setup: (a) => {
        let c = a.parentNode;
        if (!c)
          return console.warn("No mark found for", r);
        if (!(c instanceof HTMLElement))
          return console.warn("Mark is not an HTMLElement", c);
        fo(c, r), kr(r, c), r.removeAttribute("id");
        let u = "";
        return r instanceof HTMLElement && (u = r.style.display, r.style.display = "contents"), a.appendChild(r), () => {
          kr(c, r), r.id = c.id, r instanceof HTMLElement && (r.style.display = u);
        };
      }
    })));
  }), $t = null, n;
}
function kr(e, t) {
  t.className = e.className, e.removeAttribute("class");
}
function fo(e, t) {
  e.ontransitionrun = (n) => {
    const r = new TransitionEvent("transitionrun", {
      propertyName: "mark",
      // Generic for multiple properties
      elapsedTime: 0,
      // Start of batched transition
      pseudoElement: n.pseudoElement,
      bubbles: !1,
      cancelable: !0
    });
    t.dispatchEvent(r);
  }, e.ontransitionstart = (n) => {
    const r = new TransitionEvent("transitionstart", {
      propertyName: "mark",
      // Generic for multiple properties
      elapsedTime: 0,
      // Start of batched transition
      pseudoElement: n.pseudoElement,
      bubbles: !1,
      cancelable: !0
    });
    t.dispatchEvent(r);
  }, e.ontransitionend = (n) => {
    const r = new TransitionEvent("transitionend", {
      propertyName: "mark",
      elapsedTime: n.elapsedTime,
      pseudoElement: n.pseudoElement,
      bubbles: !1,
      cancelable: !0
    });
    t.dispatchEvent(r);
  };
}
const Si = He({ updates: [] });
var go = /* @__PURE__ */ pe('<div id="stage-container"><div id="stage"></div></div>');
function ho(e, t) {
  We(t, !0);
  let n = ie(t, "width", 3, "1940"), r = ie(t, "height", 3, "1100");
  ie(t, "size", 3, 5), ie(t, "transitionTimeout", 3, 32);
  let i = /* @__PURE__ */ de(0);
  const [s, l] = co(t.children);
  let a = /* @__PURE__ */ de(void 0);
  ro(() => ce(a, uo(t.children)));
  function c(f = 1) {
    Si.updates.push(Date.now()), ce(i, Math.max(0, Math.min(l - 1, G(i) + f)), !0);
  }
  function u(f) {
    if (f.code === "ArrowLeft" || f.code === "KeyA") return c(-1);
    if (f.code === "ArrowRight" || f.code === "KeyD") return c(1);
  }
  var d = go();
  _i("keydown", Bn, u);
  var h = pt(d);
  wi(h, 21, () => s, mi, (f, _) => {
    {
      let g = /* @__PURE__ */ jt(() => G(a)?.get(`${G(i)}#${G(_)}`));
      oo(f, {
        get id() {
          return G(_);
        },
        get snippet() {
          return G(g);
        }
      });
    }
  }), Mt(() => Yt(d, `--width: ${n()}px; --height: ${r()}px;`)), ae(e, d), qe();
}
var po = /* @__PURE__ */ pe(`<div><textarea class="svelte-2dk08i"></textarea> <!> <pre class="svelte-2dk08i">
		<code class="svelte-2dk08i"></code>
	</pre></div>`);
function _o(e, t) {
  We(t, !0);
  let n = ie(t, "value", 15, ""), r = ie(t, "readonly", 3, !1), i = ie(t, "disabled", 3, !1);
  ie(t, "autofocus", 3, !1);
  let s = ie(t, "required", 3, !1), l = ie(t, "spellcheck", 3, !1), a = ie(t, "plugins", 19, () => []), c, u, d, h = /* @__PURE__ */ de(!1), f = !0;
  xt(() => {
    if (c && u && d) {
      ce(h, !0);
      const P = _();
      return g(), P;
    }
  });
  function _() {
    if (!c || !u) return;
    const P = () => {
      u.scrollTop = c.scrollTop, u.scrollLeft = c.scrollLeft;
    };
    return c.addEventListener("scroll", P), c.addEventListener("input", P), () => {
      c.removeEventListener("scroll", P), c.removeEventListener("input", P);
    };
  }
  function g() {
    if (!d || !t.highlighter) return;
    const P = t.highlighter(n() || "", t.language);
    d.innerHTML = P, a().forEach((fe) => {
      fe.afterHighlight?.(u, c);
    });
  }
  function m(P) {
    const fe = P.target;
    n(fe.value), g(), t.oninput?.(P);
  }
  function x(P) {
    a().forEach((fe) => {
      fe.beforeInput?.(P, c);
    });
  }
  function T(P) {
    a().forEach((fe) => {
      fe.keydown?.(P, c);
    }), t.onkeydown?.(P);
  }
  function y() {
  }
  xt(() => {
    g();
  });
  var M = po();
  let B;
  var R = pt(M);
  R.__input = m, R.__beforeinput = x, R.__keydown = T, Mn(R, (P) => c = P, () => c);
  var Z = Se(R, 2);
  Qn(Z, () => t.children ?? Ir);
  var W = Se(Z, 2), X = Se(pt(W));
  Mn(X, (P) => d = P, () => d), Mn(W, (P) => u = P, () => u), Mt(() => {
    B = Xa(M, 1, "code-input svelte-2dk08i", null, B, {
      "code-input_loaded": G(h),
      "code-input_registered": f,
      "code-input_pre-element-styled": !0
    }), Me(R, "placeholder", t.placeholder), R.readOnly = r(), R.disabled = i(), Me(R, "maxlength", t.maxlength), Me(R, "minlength", t.minlength), Me(R, "rows", t.rows), Me(R, "cols", t.cols), Me(R, "name", t.name), Me(R, "form", t.form), R.required = s(), Me(R, "spellcheck", l()), Me(R, "wrap", t.wrap), Me(R, "autocomplete", t.autocomplete);
  }), _i("selectionchange", R, y), to(R, n), ae(e, M), qe();
}
vi(["input", "beforeinput", "keydown"]);
var vo = /* @__PURE__ */ pe('<li class="svelte-gjctsr"><button class="svelte-gjctsr">:)</button></li>'), bo = /* @__PURE__ */ pe('<ol class="svelte-gjctsr"></ol>');
function Eo(e, t) {
  We(t, !0);
  let n = ie(t, "activeCallback", 3, () => {
  });
  const r = He(new Array(t.numLines).fill(""));
  var i = bo();
  wi(i, 21, () => r, mi, (s, l, a) => {
    var c = vo(), u = pt(c);
    u.__click = () => n()(a), Mt(() => Yt(c, `--line-num: ${a}; --color: ${a === t.activeLineIndex ? "lightgreen" : "grey"}; --bg-color: ${a === t.activeLineIndex ? "#ccc1" : "transparent"};`)), ae(s, c);
  }), Mt(() => Yt(i, `--num-lines: ${t.numLines};`)), ae(e, i), qe();
}
vi(["click"]);
function mo(e = { "(": ")", "[": "]", "{": "}", '"': '"' }) {
  return {
    beforeInput(t, n) {
      wo(t, n, e);
    },
    keydown(t, n) {
      yo(t, n, e);
    }
  };
}
function wo(e, t, n) {
  if (!e.data)
    return;
  const { selectionStart: r, selectionEnd: i, value: s } = t;
  if (e.data === s[r])
    for (const l in n) {
      const a = n[l];
      if (e.data === a) {
        e.preventDefault(), t.selectionStart = t.selectionEnd = r + 1;
        return;
      }
    }
  if (e.data in n) {
    const l = n[e.data], a = s.substring(r, i);
    e.preventDefault();
    const c = s.substring(0, r), u = s.substring(i), d = c + e.data + a + l + u;
    t.value = d;
    const h = r + 1 + a.length;
    t.selectionStart = t.selectionEnd = h, t.dispatchEvent(new Event("input", { bubbles: !0 }));
  }
}
function yo(e, t, n) {
  if (e.key !== "Backspace")
    return;
  const { selectionStart: r, selectionEnd: i, value: s } = t;
  if (r !== i)
    return;
  const l = s[r - 1], a = s[r], c = n[l];
  if (c && a === c) {
    e.preventDefault();
    const u = s.substring(0, r - 1), d = s.substring(r + 1);
    t.value = u + d, t.selectionStart = t.selectionEnd = r - 1, t.dispatchEvent(new Event("input", { bubbles: !0 }));
  }
}
function So(e = !1, t = 4, n = { "(": ")", "[": "]", "{": "}" }) {
  const r = e ? " ".repeat(t) : "	", i = e ? t : 1;
  return {
    keydown(s, l) {
      s.key === "Tab" ? No(s, l, r, i) : s.key === "Enter" ? Ao(s, l, r, i, n) : s.key === "Backspace" && To(s, l, r, i);
    },
    beforeInput(s, l) {
      s.data && Object.values(n).includes(s.data) && ko(s, l, r, i, n);
    }
  };
}
function No(e, t, n, r) {
  e.preventDefault();
  const { selectionStart: i, selectionEnd: s, value: l } = t;
  if (i === s)
    Ni(t, n);
  else {
    const a = l.split(`
`);
    let c = 0, u = -1, d = -1;
    for (let _ = 0; _ < a.length; _++) {
      const g = c + a[_].length;
      (i <= g && s >= c || i === s && i <= g + 1 && s >= c) && (u === -1 && (u = _), d = _), c = g + 1;
    }
    let h = i, f = s;
    for (let _ = u; _ <= d; _++) {
      const g = a.slice(0, _).join(`
`).length + (_ > 0 ? 1 : 0);
      e.shiftKey ? a[_].startsWith(n) && (a[_] = a[_].substring(r), h > g && (h = Math.max(h - r, g)), f -= r) : (a[_] = n + a[_], h > g && (h += r), f += r);
    }
    t.value = a.join(`
`), t.selectionStart = h, t.selectionEnd = f, t.dispatchEvent(new Event("input", { bubbles: !0 }));
  }
}
function Ao(e, t, n, r, i) {
  e.preventDefault();
  const { selectionStart: s, value: l } = t, a = l.split(`
`);
  let c = 0, u = 0;
  for (let T = 0; T < a.length; T++) {
    if (s <= u + a[T].length) {
      c = T;
      break;
    }
    u += a[T].length + 1;
  }
  const d = a[c], h = s - u;
  let f = 0;
  for (let T = 0; T < d.length && d.substring(T, T + r) === n; T += r)
    f++;
  let _ = !1;
  const g = d.substring(0, h), m = d.substring(h);
  for (const T in i)
    if (g.trimEnd().endsWith(T)) {
      const y = i[T];
      if (m.trimStart().startsWith(y)) {
        _ = !0;
        break;
      }
    }
  let x = `
` + n.repeat(f);
  if (_ && (x += n), Ni(t, x), _) {
    const T = t.value.substring(0, t.selectionStart), y = t.value.substring(t.selectionStart), M = `
` + n.repeat(f);
    t.value = T + M + y, t.selectionStart = t.selectionEnd = T.length, t.dispatchEvent(new Event("input", { bubbles: !0 }));
  }
}
function To(e, t, n, r) {
  const { selectionStart: i, selectionEnd: s, value: l } = t;
  if (i !== s)
    return;
  if (l.substring(Math.max(0, i - r), i) === n) {
    e.preventDefault();
    const c = l.substring(0, i - r), u = l.substring(i);
    t.value = c + u, t.selectionStart = t.selectionEnd = i - r, t.dispatchEvent(new Event("input", { bubbles: !0 }));
  }
}
function ko(e, t, n, r, i) {
  if (!e.data)
    return;
  const { selectionStart: s, value: l } = t, a = l.split(`
`);
  let c = 0, u = 0;
  for (let f = 0; f < a.length; f++) {
    if (s <= u + a[f].length) {
      c = f;
      break;
    }
    u += a[f].length + 1;
  }
  const d = a[c], h = s - u;
  for (const f in i) {
    const _ = i[f];
    if (e.data === _) {
      const g = d.substring(0, h), m = d.substring(h);
      if (g.trim() === "" && m.trim() === "") {
        const x = g.match(new RegExp(`^(${xo(n)})*`));
        if (x && x[0].length >= r) {
          e.preventDefault();
          const T = g.substring(r) + e.data + m;
          a[c] = T, t.value = a.join(`
`), t.selectionStart = t.selectionEnd = s - r + 1, t.dispatchEvent(new Event("input", { bubbles: !0 }));
        }
      }
      break;
    }
  }
}
function Ni(e, t) {
  const { selectionStart: n, selectionEnd: r, value: i } = e, s = i.substring(0, n), l = i.substring(r);
  e.value = s + t + l, e.selectionStart = e.selectionEnd = n + t.length, e.dispatchEvent(new Event("input", { bubbles: !0 }));
}
function xo(e) {
  return e.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
const Ai = {};
function Mo(e) {
  sa(Ai, e);
}
function Ro() {
  return ia(Ai);
}
var Oo = /* @__PURE__ */ pe('<div class="loading-placeholder svelte-1blb0dz">CodeEditor requires hljs object.</div>');
function Io(e, t) {
  We(t, !0);
  let n = ie(t, "code", 15), r = ie(t, "rows", 3, 5), i = ie(t, "indentSize", 3, 3), s = ie(t, "placeholder", 3, ""), l = ie(t, "callback", 3, () => {
  });
  const a = Ro(), c = /* @__PURE__ */ jt(() => n().split(`
`).map((y) => y.trim()));
  let u = /* @__PURE__ */ de(-1);
  const d = /* @__PURE__ */ jt(() => () => {
    const y = [];
    return y.push(mo({ "(": ")", "[": "]", "{": "}", '"': '"', "'": "'" })), y.push(So(
      !0,
      // useSpaces
      i(),
      // indentSize
      { "(": ")", "[": "]", "{": "}" }
      // bracketPairs
    )), y;
  });
  function h(y, M) {
    if (!a) return y;
    try {
      return M && a.getLanguage(M) ? a.highlight(y, { language: M }).value : a.highlightAuto(y).value;
    } catch (B) {
      return console.warn("Highlighting failed:", B), y;
    }
  }
  function f(y) {
    y.stopPropagation();
  }
  function _(y) {
    y.stopPropagation();
  }
  xt(() => {
    l()(G(c), G(u));
  });
  var g = Vn(), m = Vt(g);
  {
    var x = (y) => {
      {
        let M = /* @__PURE__ */ jt(() => G(d)());
        _o(y, {
          get language() {
            return t.language;
          },
          get placeholder() {
            return s();
          },
          highlighter: h,
          get plugins() {
            return G(M);
          },
          oninput: f,
          onkeydown: _,
          get rows() {
            return r();
          },
          get value() {
            return n();
          },
          set value(B) {
            n(B);
          },
          children: (B, R) => {
            Eo(B, {
              get numLines() {
                return r();
              },
              activeCallback: (Z) => ce(u, Z, !0),
              get activeLineIndex() {
                return G(u);
              }
            });
          },
          $$slots: { default: !0 }
        });
      }
    }, T = (y) => {
      var M = Oo();
      ae(y, M);
    };
    Ei(m, (y) => {
      a ? y(x) : y(T, !1);
    });
  }
  ae(e, g), qe();
}
function Co(e, t = 75, n = { " ": 2 }) {
  return (r) => {
    let i = null, s = 0, l = 0, a = 0;
    Si.updates.at(-1), s = 0, r.textContent = "", a = c(e?.[0] || ""), i = requestAnimationFrame(u);
    function c(d) {
      return t * (n[d] || 1);
    }
    function u(d) {
      if (e && !(s >= e.length))
        if (l + a <= d) {
          l = d;
          const h = e[s];
          r.textContent += h, s++, s < e.length && (a = c(e[s]), i = requestAnimationFrame(u));
        } else
          i = requestAnimationFrame(u);
    }
    return () => {
      i !== null && cancelAnimationFrame(i);
    };
  };
}
var Lo = /* @__PURE__ */ pe('<div class="console"></div>');
function Do(e, t) {
  We(t, !0);
  var n = Vn(), r = Vt(n);
  Ha(r, () => t.log, (i) => {
    var s = Lo();
    Wa(s, () => Co(t.log?.text ?? " ", 5)), Mt(() => Yt(s, `--color: ${t.log?.color ?? "white"};`)), ae(i, s);
  }), ae(e, n), qe();
}
function Bo(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
var Rn, xr;
function Po() {
  if (xr) return Rn;
  xr = 1;
  function e(o) {
    return o instanceof Map ? o.clear = o.delete = o.set = function() {
      throw new Error("map is read-only");
    } : o instanceof Set && (o.add = o.clear = o.delete = function() {
      throw new Error("set is read-only");
    }), Object.freeze(o), Object.getOwnPropertyNames(o).forEach((p) => {
      const b = o[p], O = typeof b;
      (O === "object" || O === "function") && !Object.isFrozen(b) && e(b);
    }), o;
  }
  class t {
    /**
     * @param {CompiledMode} mode
     */
    constructor(p) {
      p.data === void 0 && (p.data = {}), this.data = p.data, this.isMatchIgnored = !1;
    }
    ignoreMatch() {
      this.isMatchIgnored = !0;
    }
  }
  function n(o) {
    return o.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;");
  }
  function r(o, ...p) {
    const b = /* @__PURE__ */ Object.create(null);
    for (const O in o)
      b[O] = o[O];
    return p.forEach(function(O) {
      for (const q in O)
        b[q] = O[q];
    }), /** @type {T} */
    b;
  }
  const i = "</span>", s = (o) => !!o.scope, l = (o, { prefix: p }) => {
    if (o.startsWith("language:"))
      return o.replace("language:", "language-");
    if (o.includes(".")) {
      const b = o.split(".");
      return [
        `${p}${b.shift()}`,
        ...b.map((O, q) => `${O}${"_".repeat(q + 1)}`)
      ].join(" ");
    }
    return `${p}${o}`;
  };
  class a {
    /**
     * Creates a new HTMLRenderer
     *
     * @param {Tree} parseTree - the parse tree (must support `walk` API)
     * @param {{classPrefix: string}} options
     */
    constructor(p, b) {
      this.buffer = "", this.classPrefix = b.classPrefix, p.walk(this);
    }
    /**
     * Adds texts to the output stream
     *
     * @param {string} text */
    addText(p) {
      this.buffer += n(p);
    }
    /**
     * Adds a node open to the output stream (if needed)
     *
     * @param {Node} node */
    openNode(p) {
      if (!s(p)) return;
      const b = l(
        p.scope,
        { prefix: this.classPrefix }
      );
      this.span(b);
    }
    /**
     * Adds a node close to the output stream (if needed)
     *
     * @param {Node} node */
    closeNode(p) {
      s(p) && (this.buffer += i);
    }
    /**
     * returns the accumulated buffer
    */
    value() {
      return this.buffer;
    }
    // helpers
    /**
     * Builds a span element
     *
     * @param {string} className */
    span(p) {
      this.buffer += `<span class="${p}">`;
    }
  }
  const c = (o = {}) => {
    const p = { children: [] };
    return Object.assign(p, o), p;
  };
  class u {
    constructor() {
      this.rootNode = c(), this.stack = [this.rootNode];
    }
    get top() {
      return this.stack[this.stack.length - 1];
    }
    get root() {
      return this.rootNode;
    }
    /** @param {Node} node */
    add(p) {
      this.top.children.push(p);
    }
    /** @param {string} scope */
    openNode(p) {
      const b = c({ scope: p });
      this.add(b), this.stack.push(b);
    }
    closeNode() {
      if (this.stack.length > 1)
        return this.stack.pop();
    }
    closeAllNodes() {
      for (; this.closeNode(); ) ;
    }
    toJSON() {
      return JSON.stringify(this.rootNode, null, 4);
    }
    /**
     * @typedef { import("./html_renderer").Renderer } Renderer
     * @param {Renderer} builder
     */
    walk(p) {
      return this.constructor._walk(p, this.rootNode);
    }
    /**
     * @param {Renderer} builder
     * @param {Node} node
     */
    static _walk(p, b) {
      return typeof b == "string" ? p.addText(b) : b.children && (p.openNode(b), b.children.forEach((O) => this._walk(p, O)), p.closeNode(b)), p;
    }
    /**
     * @param {Node} node
     */
    static _collapse(p) {
      typeof p != "string" && p.children && (p.children.every((b) => typeof b == "string") ? p.children = [p.children.join("")] : p.children.forEach((b) => {
        u._collapse(b);
      }));
    }
  }
  class d extends u {
    /**
     * @param {*} options
     */
    constructor(p) {
      super(), this.options = p;
    }
    /**
     * @param {string} text
     */
    addText(p) {
      p !== "" && this.add(p);
    }
    /** @param {string} scope */
    startScope(p) {
      this.openNode(p);
    }
    endScope() {
      this.closeNode();
    }
    /**
     * @param {Emitter & {root: DataNode}} emitter
     * @param {string} name
     */
    __addSublanguage(p, b) {
      const O = p.root;
      b && (O.scope = `language:${b}`), this.add(O);
    }
    toHTML() {
      return new a(this, this.options).value();
    }
    finalize() {
      return this.closeAllNodes(), !0;
    }
  }
  function h(o) {
    return o ? typeof o == "string" ? o : o.source : null;
  }
  function f(o) {
    return m("(?=", o, ")");
  }
  function _(o) {
    return m("(?:", o, ")*");
  }
  function g(o) {
    return m("(?:", o, ")?");
  }
  function m(...o) {
    return o.map((b) => h(b)).join("");
  }
  function x(o) {
    const p = o[o.length - 1];
    return typeof p == "object" && p.constructor === Object ? (o.splice(o.length - 1, 1), p) : {};
  }
  function T(...o) {
    return "(" + (x(o).capture ? "" : "?:") + o.map((O) => h(O)).join("|") + ")";
  }
  function y(o) {
    return new RegExp(o.toString() + "|").exec("").length - 1;
  }
  function M(o, p) {
    const b = o && o.exec(p);
    return b && b.index === 0;
  }
  const B = /\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;
  function R(o, { joinWith: p }) {
    let b = 0;
    return o.map((O) => {
      b += 1;
      const q = b;
      let Y = h(O), S = "";
      for (; Y.length > 0; ) {
        const w = B.exec(Y);
        if (!w) {
          S += Y;
          break;
        }
        S += Y.substring(0, w.index), Y = Y.substring(w.index + w[0].length), w[0][0] === "\\" && w[1] ? S += "\\" + String(Number(w[1]) + q) : (S += w[0], w[0] === "(" && b++);
      }
      return S;
    }).map((O) => `(${O})`).join(p);
  }
  const Z = /\b\B/, W = "[a-zA-Z]\\w*", X = "[a-zA-Z_]\\w*", P = "\\b\\d+(\\.\\d+)?", fe = "(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)", vt = "\\b(0b[01]+)", Lt = "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~", Dt = (o = {}) => {
    const p = /^#![ ]*\//;
    return o.binary && (o.begin = m(
      p,
      /.*\b/,
      o.binary,
      /\b.*/
    )), r({
      scope: "meta",
      begin: p,
      end: /$/,
      relevance: 0,
      /** @type {ModeCallback} */
      "on:begin": (b, O) => {
        b.index !== 0 && O.ignoreMatch();
      }
    }, o);
  }, Pe = {
    begin: "\\\\[\\s\\S]",
    relevance: 0
  }, Bt = {
    scope: "string",
    begin: "'",
    end: "'",
    illegal: "\\n",
    contains: [Pe]
  }, it = {
    scope: "string",
    begin: '"',
    end: '"',
    illegal: "\\n",
    contains: [Pe]
  }, Pt = {
    begin: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/
  }, U = function(o, p, b = {}) {
    const O = r(
      {
        scope: "comment",
        begin: o,
        end: p,
        contains: []
      },
      b
    );
    O.contains.push({
      scope: "doctag",
      // hack to avoid the space from being included. the space is necessary to
      // match here to prevent the plain text rule below from gobbling up doctags
      begin: "[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",
      end: /(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,
      excludeBegin: !0,
      relevance: 0
    });
    const q = T(
      // list of common 1 and 2 letter words in English
      "I",
      "a",
      "is",
      "so",
      "us",
      "to",
      "at",
      "if",
      "in",
      "it",
      "on",
      // note: this is not an exhaustive list of contractions, just popular ones
      /[A-Za-z]+['](d|ve|re|ll|t|s|n)/,
      // contractions - can't we'd they're let's, etc
      /[A-Za-z]+[-][a-z]+/,
      // `no-way`, etc.
      /[A-Za-z][a-z]{2,}/
      // allow capitalized words at beginning of sentences
    );
    return O.contains.push(
      {
        // TODO: how to include ", (, ) without breaking grammars that use these for
        // comment delimiters?
        // begin: /[ ]+([()"]?([A-Za-z'-]{3,}|is|a|I|so|us|[tT][oO]|at|if|in|it|on)[.]?[()":]?([.][ ]|[ ]|\))){3}/
        // ---
        // this tries to find sequences of 3 english words in a row (without any
        // "programming" type syntax) this gives us a strong signal that we've
        // TRULY found a comment - vs perhaps scanning with the wrong language.
        // It's possible to find something that LOOKS like the start of the
        // comment - but then if there is no readable text - good chance it is a
        // false match and not a comment.
        //
        // for a visual example please see:
        // https://github.com/highlightjs/highlight.js/issues/2827
        begin: m(
          /[ ]+/,
          // necessary to prevent us gobbling up doctags like /* @author Bob Mcgill */
          "(",
          q,
          /[.]?[:]?([.][ ]|[ ])/,
          "){3}"
        )
        // look for 3 words in a row
      }
    ), O;
  }, le = U("//", "$"), _e = U("/\\*", "\\*/"), ke = U("#", "$"), Ue = {
    scope: "number",
    begin: P,
    relevance: 0
  }, st = {
    scope: "number",
    begin: fe,
    relevance: 0
  }, Bi = {
    scope: "number",
    begin: vt,
    relevance: 0
  }, Pi = {
    scope: "regexp",
    begin: /\/(?=[^/\n]*\/)/,
    end: /\/[gimuy]*/,
    contains: [
      Pe,
      {
        begin: /\[/,
        end: /\]/,
        relevance: 0,
        contains: [Pe]
      }
    ]
  }, Ui = {
    scope: "title",
    begin: W,
    relevance: 0
  }, Fi = {
    scope: "title",
    begin: X,
    relevance: 0
  }, zi = {
    // excludes method names from keyword processing
    begin: "\\.\\s*" + X,
    relevance: 0
  };
  var en = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    APOS_STRING_MODE: Bt,
    BACKSLASH_ESCAPE: Pe,
    BINARY_NUMBER_MODE: Bi,
    BINARY_NUMBER_RE: vt,
    COMMENT: U,
    C_BLOCK_COMMENT_MODE: _e,
    C_LINE_COMMENT_MODE: le,
    C_NUMBER_MODE: st,
    C_NUMBER_RE: fe,
    END_SAME_AS_BEGIN: function(o) {
      return Object.assign(
        o,
        {
          /** @type {ModeCallback} */
          "on:begin": (p, b) => {
            b.data._beginMatch = p[1];
          },
          /** @type {ModeCallback} */
          "on:end": (p, b) => {
            b.data._beginMatch !== p[1] && b.ignoreMatch();
          }
        }
      );
    },
    HASH_COMMENT_MODE: ke,
    IDENT_RE: W,
    MATCH_NOTHING_RE: Z,
    METHOD_GUARD: zi,
    NUMBER_MODE: Ue,
    NUMBER_RE: P,
    PHRASAL_WORDS_MODE: Pt,
    QUOTE_STRING_MODE: it,
    REGEXP_MODE: Pi,
    RE_STARTERS_RE: Lt,
    SHEBANG: Dt,
    TITLE_MODE: Ui,
    UNDERSCORE_IDENT_RE: X,
    UNDERSCORE_TITLE_MODE: Fi
  });
  function Hi(o, p) {
    o.input[o.index - 1] === "." && p.ignoreMatch();
  }
  function Gi(o, p) {
    o.className !== void 0 && (o.scope = o.className, delete o.className);
  }
  function Ki(o, p) {
    p && o.beginKeywords && (o.begin = "\\b(" + o.beginKeywords.split(" ").join("|") + ")(?!\\.)(?=\\b|\\s)", o.__beforeBegin = Hi, o.keywords = o.keywords || o.beginKeywords, delete o.beginKeywords, o.relevance === void 0 && (o.relevance = 0));
  }
  function ji(o, p) {
    Array.isArray(o.illegal) && (o.illegal = T(...o.illegal));
  }
  function Zi(o, p) {
    if (o.match) {
      if (o.begin || o.end) throw new Error("begin & end are not supported with match");
      o.begin = o.match, delete o.match;
    }
  }
  function $i(o, p) {
    o.relevance === void 0 && (o.relevance = 1);
  }
  const Wi = (o, p) => {
    if (!o.beforeMatch) return;
    if (o.starts) throw new Error("beforeMatch cannot be used with starts");
    const b = Object.assign({}, o);
    Object.keys(o).forEach((O) => {
      delete o[O];
    }), o.keywords = b.keywords, o.begin = m(b.beforeMatch, f(b.begin)), o.starts = {
      relevance: 0,
      contains: [
        Object.assign(b, { endsParent: !0 })
      ]
    }, o.relevance = 0, delete b.beforeMatch;
  }, qi = [
    "of",
    "and",
    "for",
    "in",
    "not",
    "or",
    "if",
    "then",
    "parent",
    // common variable name
    "list",
    // common variable name
    "value"
    // common variable name
  ], Yi = "keyword";
  function er(o, p, b = Yi) {
    const O = /* @__PURE__ */ Object.create(null);
    return typeof o == "string" ? q(b, o.split(" ")) : Array.isArray(o) ? q(b, o) : Object.keys(o).forEach(function(Y) {
      Object.assign(
        O,
        er(o[Y], p, Y)
      );
    }), O;
    function q(Y, S) {
      p && (S = S.map((w) => w.toLowerCase())), S.forEach(function(w) {
        const k = w.split("|");
        O[k[0]] = [Y, Xi(k[0], k[1])];
      });
    }
  }
  function Xi(o, p) {
    return p ? Number(p) : Vi(o) ? 0 : 1;
  }
  function Vi(o) {
    return qi.includes(o.toLowerCase());
  }
  const tr = {}, at = (o) => {
    console.error(o);
  }, nr = (o, ...p) => {
    console.log(`WARN: ${o}`, ...p);
  }, bt = (o, p) => {
    tr[`${o}/${p}`] || (console.log(`Deprecated as of ${o}. ${p}`), tr[`${o}/${p}`] = !0);
  }, tn = new Error();
  function rr(o, p, { key: b }) {
    let O = 0;
    const q = o[b], Y = {}, S = {};
    for (let w = 1; w <= p.length; w++)
      S[w + O] = q[w], Y[w + O] = !0, O += y(p[w - 1]);
    o[b] = S, o[b]._emit = Y, o[b]._multi = !0;
  }
  function Ji(o) {
    if (Array.isArray(o.begin)) {
      if (o.skip || o.excludeBegin || o.returnBegin)
        throw at("skip, excludeBegin, returnBegin not compatible with beginScope: {}"), tn;
      if (typeof o.beginScope != "object" || o.beginScope === null)
        throw at("beginScope must be object"), tn;
      rr(o, o.begin, { key: "beginScope" }), o.begin = R(o.begin, { joinWith: "" });
    }
  }
  function Qi(o) {
    if (Array.isArray(o.end)) {
      if (o.skip || o.excludeEnd || o.returnEnd)
        throw at("skip, excludeEnd, returnEnd not compatible with endScope: {}"), tn;
      if (typeof o.endScope != "object" || o.endScope === null)
        throw at("endScope must be object"), tn;
      rr(o, o.end, { key: "endScope" }), o.end = R(o.end, { joinWith: "" });
    }
  }
  function es(o) {
    o.scope && typeof o.scope == "object" && o.scope !== null && (o.beginScope = o.scope, delete o.scope);
  }
  function ts(o) {
    es(o), typeof o.beginScope == "string" && (o.beginScope = { _wrap: o.beginScope }), typeof o.endScope == "string" && (o.endScope = { _wrap: o.endScope }), Ji(o), Qi(o);
  }
  function ns(o) {
    function p(S, w) {
      return new RegExp(
        h(S),
        "m" + (o.case_insensitive ? "i" : "") + (o.unicodeRegex ? "u" : "") + (w ? "g" : "")
      );
    }
    class b {
      constructor() {
        this.matchIndexes = {}, this.regexes = [], this.matchAt = 1, this.position = 0;
      }
      // @ts-ignore
      addRule(w, k) {
        k.position = this.position++, this.matchIndexes[this.matchAt] = k, this.regexes.push([k, w]), this.matchAt += y(w) + 1;
      }
      compile() {
        this.regexes.length === 0 && (this.exec = () => null);
        const w = this.regexes.map((k) => k[1]);
        this.matcherRe = p(R(w, { joinWith: "|" }), !0), this.lastIndex = 0;
      }
      /** @param {string} s */
      exec(w) {
        this.matcherRe.lastIndex = this.lastIndex;
        const k = this.matcherRe.exec(w);
        if (!k)
          return null;
        const ee = k.findIndex((Ut, wn) => wn > 0 && Ut !== void 0), V = this.matchIndexes[ee];
        return k.splice(0, ee), Object.assign(k, V);
      }
    }
    class O {
      constructor() {
        this.rules = [], this.multiRegexes = [], this.count = 0, this.lastIndex = 0, this.regexIndex = 0;
      }
      // @ts-ignore
      getMatcher(w) {
        if (this.multiRegexes[w]) return this.multiRegexes[w];
        const k = new b();
        return this.rules.slice(w).forEach(([ee, V]) => k.addRule(ee, V)), k.compile(), this.multiRegexes[w] = k, k;
      }
      resumingScanAtSamePosition() {
        return this.regexIndex !== 0;
      }
      considerAll() {
        this.regexIndex = 0;
      }
      // @ts-ignore
      addRule(w, k) {
        this.rules.push([w, k]), k.type === "begin" && this.count++;
      }
      /** @param {string} s */
      exec(w) {
        const k = this.getMatcher(this.regexIndex);
        k.lastIndex = this.lastIndex;
        let ee = k.exec(w);
        if (this.resumingScanAtSamePosition() && !(ee && ee.index === this.lastIndex)) {
          const V = this.getMatcher(0);
          V.lastIndex = this.lastIndex + 1, ee = V.exec(w);
        }
        return ee && (this.regexIndex += ee.position + 1, this.regexIndex === this.count && this.considerAll()), ee;
      }
    }
    function q(S) {
      const w = new O();
      return S.contains.forEach((k) => w.addRule(k.begin, { rule: k, type: "begin" })), S.terminatorEnd && w.addRule(S.terminatorEnd, { type: "end" }), S.illegal && w.addRule(S.illegal, { type: "illegal" }), w;
    }
    function Y(S, w) {
      const k = (
        /** @type CompiledMode */
        S
      );
      if (S.isCompiled) return k;
      [
        Gi,
        // do this early so compiler extensions generally don't have to worry about
        // the distinction between match/begin
        Zi,
        ts,
        Wi
      ].forEach((V) => V(S, w)), o.compilerExtensions.forEach((V) => V(S, w)), S.__beforeBegin = null, [
        Ki,
        // do this later so compiler extensions that come earlier have access to the
        // raw array if they wanted to perhaps manipulate it, etc.
        ji,
        // default to 1 relevance if not specified
        $i
      ].forEach((V) => V(S, w)), S.isCompiled = !0;
      let ee = null;
      return typeof S.keywords == "object" && S.keywords.$pattern && (S.keywords = Object.assign({}, S.keywords), ee = S.keywords.$pattern, delete S.keywords.$pattern), ee = ee || /\w+/, S.keywords && (S.keywords = er(S.keywords, o.case_insensitive)), k.keywordPatternRe = p(ee, !0), w && (S.begin || (S.begin = /\B|\b/), k.beginRe = p(k.begin), !S.end && !S.endsWithParent && (S.end = /\B|\b/), S.end && (k.endRe = p(k.end)), k.terminatorEnd = h(k.end) || "", S.endsWithParent && w.terminatorEnd && (k.terminatorEnd += (S.end ? "|" : "") + w.terminatorEnd)), S.illegal && (k.illegalRe = p(
        /** @type {RegExp | string} */
        S.illegal
      )), S.contains || (S.contains = []), S.contains = [].concat(...S.contains.map(function(V) {
        return rs(V === "self" ? S : V);
      })), S.contains.forEach(function(V) {
        Y(
          /** @type Mode */
          V,
          k
        );
      }), S.starts && Y(S.starts, w), k.matcher = q(k), k;
    }
    if (o.compilerExtensions || (o.compilerExtensions = []), o.contains && o.contains.includes("self"))
      throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");
    return o.classNameAliases = r(o.classNameAliases || {}), Y(
      /** @type Mode */
      o
    );
  }
  function ir(o) {
    return o ? o.endsWithParent || ir(o.starts) : !1;
  }
  function rs(o) {
    return o.variants && !o.cachedVariants && (o.cachedVariants = o.variants.map(function(p) {
      return r(o, { variants: null }, p);
    })), o.cachedVariants ? o.cachedVariants : ir(o) ? r(o, { starts: o.starts ? r(o.starts) : null }) : Object.isFrozen(o) ? r(o) : o;
  }
  var is = "11.11.1";
  class ss extends Error {
    constructor(p, b) {
      super(p), this.name = "HTMLInjectionError", this.html = b;
    }
  }
  const mn = n, sr = r, ar = /* @__PURE__ */ Symbol("nomatch"), as = 7, or = function(o) {
    const p = /* @__PURE__ */ Object.create(null), b = /* @__PURE__ */ Object.create(null), O = [];
    let q = !0;
    const Y = "Could not find the language '{}', did you forget to load/include a language module?", S = { disableAutodetect: !0, name: "Plain text", contains: [] };
    let w = {
      ignoreUnescapedHTML: !1,
      throwUnescapedHTML: !1,
      noHighlightRe: /^(no-?highlight)$/i,
      languageDetectRe: /\blang(?:uage)?-([\w-]+)\b/i,
      classPrefix: "hljs-",
      cssSelector: "pre code",
      languages: null,
      // beta configuration options, subject to change, welcome to discuss
      // https://github.com/highlightjs/highlight.js/issues/1086
      __emitter: d
    };
    function k(v) {
      return w.noHighlightRe.test(v);
    }
    function ee(v) {
      let A = v.className + " ";
      A += v.parentNode ? v.parentNode.className : "";
      const L = w.languageDetectRe.exec(A);
      if (L) {
        const K = Ye(L[1]);
        return K || (nr(Y.replace("{}", L[1])), nr("Falling back to no-highlight mode for this block.", v)), K ? L[1] : "no-highlight";
      }
      return A.split(/\s+/).find((K) => k(K) || Ye(K));
    }
    function V(v, A, L) {
      let K = "", J = "";
      typeof A == "object" ? (K = v, L = A.ignoreIllegals, J = A.language) : (bt("10.7.0", "highlight(lang, code, ...args) has been deprecated."), bt("10.7.0", `Please use highlight(code, options) instead.
https://github.com/highlightjs/highlight.js/issues/2277`), J = v, K = A), L === void 0 && (L = !0);
      const xe = {
        code: K,
        language: J
      };
      rn("before:highlight", xe);
      const Xe = xe.result ? xe.result : Ut(xe.language, xe.code, L);
      return Xe.code = xe.code, rn("after:highlight", Xe), Xe;
    }
    function Ut(v, A, L, K) {
      const J = /* @__PURE__ */ Object.create(null);
      function xe(E, N) {
        return E.keywords[N];
      }
      function Xe() {
        if (!I.keywords) {
          ne.addText(j);
          return;
        }
        let E = 0;
        I.keywordPatternRe.lastIndex = 0;
        let N = I.keywordPatternRe.exec(j), C = "";
        for (; N; ) {
          C += j.substring(E, N.index);
          const z = Le.case_insensitive ? N[0].toLowerCase() : N[0], oe = xe(I, z);
          if (oe) {
            const [Fe, Ss] = oe;
            if (ne.addText(C), C = "", J[z] = (J[z] || 0) + 1, J[z] <= as && (on += Ss), Fe.startsWith("_"))
              C += N[0];
            else {
              const Ns = Le.classNameAliases[Fe] || Fe;
              Ce(N[0], Ns);
            }
          } else
            C += N[0];
          E = I.keywordPatternRe.lastIndex, N = I.keywordPatternRe.exec(j);
        }
        C += j.substring(E), ne.addText(C);
      }
      function sn() {
        if (j === "") return;
        let E = null;
        if (typeof I.subLanguage == "string") {
          if (!p[I.subLanguage]) {
            ne.addText(j);
            return;
          }
          E = Ut(I.subLanguage, j, !0, pr[I.subLanguage]), pr[I.subLanguage] = /** @type {CompiledMode} */
          E._top;
        } else
          E = yn(j, I.subLanguage.length ? I.subLanguage : null);
        I.relevance > 0 && (on += E.relevance), ne.__addSublanguage(E._emitter, E.language);
      }
      function ve() {
        I.subLanguage != null ? sn() : Xe(), j = "";
      }
      function Ce(E, N) {
        E !== "" && (ne.startScope(N), ne.addText(E), ne.endScope());
      }
      function fr(E, N) {
        let C = 1;
        const z = N.length - 1;
        for (; C <= z; ) {
          if (!E._emit[C]) {
            C++;
            continue;
          }
          const oe = Le.classNameAliases[E[C]] || E[C], Fe = N[C];
          oe ? Ce(Fe, oe) : (j = Fe, Xe(), j = ""), C++;
        }
      }
      function dr(E, N) {
        return E.scope && typeof E.scope == "string" && ne.openNode(Le.classNameAliases[E.scope] || E.scope), E.beginScope && (E.beginScope._wrap ? (Ce(j, Le.classNameAliases[E.beginScope._wrap] || E.beginScope._wrap), j = "") : E.beginScope._multi && (fr(E.beginScope, N), j = "")), I = Object.create(E, { parent: { value: I } }), I;
      }
      function gr(E, N, C) {
        let z = M(E.endRe, C);
        if (z) {
          if (E["on:end"]) {
            const oe = new t(E);
            E["on:end"](N, oe), oe.isMatchIgnored && (z = !1);
          }
          if (z) {
            for (; E.endsParent && E.parent; )
              E = E.parent;
            return E;
          }
        }
        if (E.endsWithParent)
          return gr(E.parent, N, C);
      }
      function bs(E) {
        return I.matcher.regexIndex === 0 ? (j += E[0], 1) : (Tn = !0, 0);
      }
      function Es(E) {
        const N = E[0], C = E.rule, z = new t(C), oe = [C.__beforeBegin, C["on:begin"]];
        for (const Fe of oe)
          if (Fe && (Fe(E, z), z.isMatchIgnored))
            return bs(N);
        return C.skip ? j += N : (C.excludeBegin && (j += N), ve(), !C.returnBegin && !C.excludeBegin && (j = N)), dr(C, E), C.returnBegin ? 0 : N.length;
      }
      function ms(E) {
        const N = E[0], C = A.substring(E.index), z = gr(I, E, C);
        if (!z)
          return ar;
        const oe = I;
        I.endScope && I.endScope._wrap ? (ve(), Ce(N, I.endScope._wrap)) : I.endScope && I.endScope._multi ? (ve(), fr(I.endScope, E)) : oe.skip ? j += N : (oe.returnEnd || oe.excludeEnd || (j += N), ve(), oe.excludeEnd && (j = N));
        do
          I.scope && ne.closeNode(), !I.skip && !I.subLanguage && (on += I.relevance), I = I.parent;
        while (I !== z.parent);
        return z.starts && dr(z.starts, E), oe.returnEnd ? 0 : N.length;
      }
      function ws() {
        const E = [];
        for (let N = I; N !== Le; N = N.parent)
          N.scope && E.unshift(N.scope);
        E.forEach((N) => ne.openNode(N));
      }
      let an = {};
      function hr(E, N) {
        const C = N && N[0];
        if (j += E, C == null)
          return ve(), 0;
        if (an.type === "begin" && N.type === "end" && an.index === N.index && C === "") {
          if (j += A.slice(N.index, N.index + 1), !q) {
            const z = new Error(`0 width match regex (${v})`);
            throw z.languageName = v, z.badRule = an.rule, z;
          }
          return 1;
        }
        if (an = N, N.type === "begin")
          return Es(N);
        if (N.type === "illegal" && !L) {
          const z = new Error('Illegal lexeme "' + C + '" for mode "' + (I.scope || "<unnamed>") + '"');
          throw z.mode = I, z;
        } else if (N.type === "end") {
          const z = ms(N);
          if (z !== ar)
            return z;
        }
        if (N.type === "illegal" && C === "")
          return j += `
`, 1;
        if (An > 1e5 && An > N.index * 3)
          throw new Error("potential infinite loop, way more iterations than matches");
        return j += C, C.length;
      }
      const Le = Ye(v);
      if (!Le)
        throw at(Y.replace("{}", v)), new Error('Unknown language: "' + v + '"');
      const ys = ns(Le);
      let Nn = "", I = K || ys;
      const pr = {}, ne = new w.__emitter(w);
      ws();
      let j = "", on = 0, ot = 0, An = 0, Tn = !1;
      try {
        if (Le.__emitTokens)
          Le.__emitTokens(A, ne);
        else {
          for (I.matcher.considerAll(); ; ) {
            An++, Tn ? Tn = !1 : I.matcher.considerAll(), I.matcher.lastIndex = ot;
            const E = I.matcher.exec(A);
            if (!E) break;
            const N = A.substring(ot, E.index), C = hr(N, E);
            ot = E.index + C;
          }
          hr(A.substring(ot));
        }
        return ne.finalize(), Nn = ne.toHTML(), {
          language: v,
          value: Nn,
          relevance: on,
          illegal: !1,
          _emitter: ne,
          _top: I
        };
      } catch (E) {
        if (E.message && E.message.includes("Illegal"))
          return {
            language: v,
            value: mn(A),
            illegal: !0,
            relevance: 0,
            _illegalBy: {
              message: E.message,
              index: ot,
              context: A.slice(ot - 100, ot + 100),
              mode: E.mode,
              resultSoFar: Nn
            },
            _emitter: ne
          };
        if (q)
          return {
            language: v,
            value: mn(A),
            illegal: !1,
            relevance: 0,
            errorRaised: E,
            _emitter: ne,
            _top: I
          };
        throw E;
      }
    }
    function wn(v) {
      const A = {
        value: mn(v),
        illegal: !1,
        relevance: 0,
        _top: S,
        _emitter: new w.__emitter(w)
      };
      return A._emitter.addText(v), A;
    }
    function yn(v, A) {
      A = A || w.languages || Object.keys(p);
      const L = wn(v), K = A.filter(Ye).filter(ur).map(
        (ve) => Ut(ve, v, !1)
      );
      K.unshift(L);
      const J = K.sort((ve, Ce) => {
        if (ve.relevance !== Ce.relevance) return Ce.relevance - ve.relevance;
        if (ve.language && Ce.language) {
          if (Ye(ve.language).supersetOf === Ce.language)
            return 1;
          if (Ye(Ce.language).supersetOf === ve.language)
            return -1;
        }
        return 0;
      }), [xe, Xe] = J, sn = xe;
      return sn.secondBest = Xe, sn;
    }
    function os(v, A, L) {
      const K = A && b[A] || L;
      v.classList.add("hljs"), v.classList.add(`language-${K}`);
    }
    function Sn(v) {
      let A = null;
      const L = ee(v);
      if (k(L)) return;
      if (rn(
        "before:highlightElement",
        { el: v, language: L }
      ), v.dataset.highlighted) {
        console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.", v);
        return;
      }
      if (v.children.length > 0 && (w.ignoreUnescapedHTML || (console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."), console.warn("https://github.com/highlightjs/highlight.js/wiki/security"), console.warn("The element with unescaped HTML:"), console.warn(v)), w.throwUnescapedHTML))
        throw new ss(
          "One of your code blocks includes unescaped HTML.",
          v.innerHTML
        );
      A = v;
      const K = A.textContent, J = L ? V(K, { language: L, ignoreIllegals: !0 }) : yn(K);
      v.innerHTML = J.value, v.dataset.highlighted = "yes", os(v, L, J.language), v.result = {
        language: J.language,
        // TODO: remove with version 11.0
        re: J.relevance,
        relevance: J.relevance
      }, J.secondBest && (v.secondBest = {
        language: J.secondBest.language,
        relevance: J.secondBest.relevance
      }), rn("after:highlightElement", { el: v, result: J, text: K });
    }
    function ls(v) {
      w = sr(w, v);
    }
    const cs = () => {
      nn(), bt("10.6.0", "initHighlighting() deprecated.  Use highlightAll() now.");
    };
    function us() {
      nn(), bt("10.6.0", "initHighlightingOnLoad() deprecated.  Use highlightAll() now.");
    }
    let lr = !1;
    function nn() {
      function v() {
        nn();
      }
      if (document.readyState === "loading") {
        lr || window.addEventListener("DOMContentLoaded", v, !1), lr = !0;
        return;
      }
      document.querySelectorAll(w.cssSelector).forEach(Sn);
    }
    function fs(v, A) {
      let L = null;
      try {
        L = A(o);
      } catch (K) {
        if (at("Language definition for '{}' could not be registered.".replace("{}", v)), q)
          at(K);
        else
          throw K;
        L = S;
      }
      L.name || (L.name = v), p[v] = L, L.rawDefinition = A.bind(null, o), L.aliases && cr(L.aliases, { languageName: v });
    }
    function ds(v) {
      delete p[v];
      for (const A of Object.keys(b))
        b[A] === v && delete b[A];
    }
    function gs() {
      return Object.keys(p);
    }
    function Ye(v) {
      return v = (v || "").toLowerCase(), p[v] || p[b[v]];
    }
    function cr(v, { languageName: A }) {
      typeof v == "string" && (v = [v]), v.forEach((L) => {
        b[L.toLowerCase()] = A;
      });
    }
    function ur(v) {
      const A = Ye(v);
      return A && !A.disableAutodetect;
    }
    function hs(v) {
      v["before:highlightBlock"] && !v["before:highlightElement"] && (v["before:highlightElement"] = (A) => {
        v["before:highlightBlock"](
          Object.assign({ block: A.el }, A)
        );
      }), v["after:highlightBlock"] && !v["after:highlightElement"] && (v["after:highlightElement"] = (A) => {
        v["after:highlightBlock"](
          Object.assign({ block: A.el }, A)
        );
      });
    }
    function ps(v) {
      hs(v), O.push(v);
    }
    function _s(v) {
      const A = O.indexOf(v);
      A !== -1 && O.splice(A, 1);
    }
    function rn(v, A) {
      const L = v;
      O.forEach(function(K) {
        K[L] && K[L](A);
      });
    }
    function vs(v) {
      return bt("10.7.0", "highlightBlock will be removed entirely in v12.0"), bt("10.7.0", "Please use highlightElement now."), Sn(v);
    }
    Object.assign(o, {
      highlight: V,
      highlightAuto: yn,
      highlightAll: nn,
      highlightElement: Sn,
      // TODO: Remove with v12 API
      highlightBlock: vs,
      configure: ls,
      initHighlighting: cs,
      initHighlightingOnLoad: us,
      registerLanguage: fs,
      unregisterLanguage: ds,
      listLanguages: gs,
      getLanguage: Ye,
      registerAliases: cr,
      autoDetection: ur,
      inherit: sr,
      addPlugin: ps,
      removePlugin: _s
    }), o.debugMode = function() {
      q = !1;
    }, o.safeMode = function() {
      q = !0;
    }, o.versionString = is, o.regex = {
      concat: m,
      lookahead: f,
      either: T,
      optional: g,
      anyNumberOfTimes: _
    };
    for (const v in en)
      typeof en[v] == "object" && e(en[v]);
    return Object.assign(o, en), o;
  }, Et = or({});
  return Et.newInstance = () => or({}), Rn = Et, Et.HighlightJS = Et, Et.default = Et, Rn;
}
var Uo = /* @__PURE__ */ Po();
const wt = /* @__PURE__ */ Bo(Uo), Mr = "[A-Za-z$_][0-9A-Za-z$_]*", Fo = [
  "as",
  // for exports
  "in",
  "of",
  "if",
  "for",
  "while",
  "finally",
  "var",
  "new",
  "function",
  "do",
  "return",
  "void",
  "else",
  "break",
  "catch",
  "instanceof",
  "with",
  "throw",
  "case",
  "default",
  "try",
  "switch",
  "continue",
  "typeof",
  "delete",
  "let",
  "yield",
  "const",
  "class",
  // JS handles these with a special rule
  // "get",
  // "set",
  "debugger",
  "async",
  "await",
  "static",
  "import",
  "from",
  "export",
  "extends",
  // It's reached stage 3, which is "recommended for implementation":
  "using"
], zo = [
  "true",
  "false",
  "null",
  "undefined",
  "NaN",
  "Infinity"
], Ti = [
  // Fundamental objects
  "Object",
  "Function",
  "Boolean",
  "Symbol",
  // numbers and dates
  "Math",
  "Date",
  "Number",
  "BigInt",
  // text
  "String",
  "RegExp",
  // Indexed collections
  "Array",
  "Float32Array",
  "Float64Array",
  "Int8Array",
  "Uint8Array",
  "Uint8ClampedArray",
  "Int16Array",
  "Int32Array",
  "Uint16Array",
  "Uint32Array",
  "BigInt64Array",
  "BigUint64Array",
  // Keyed collections
  "Set",
  "Map",
  "WeakSet",
  "WeakMap",
  // Structured data
  "ArrayBuffer",
  "SharedArrayBuffer",
  "Atomics",
  "DataView",
  "JSON",
  // Control abstraction objects
  "Promise",
  "Generator",
  "GeneratorFunction",
  "AsyncFunction",
  // Reflection
  "Reflect",
  "Proxy",
  // Internationalization
  "Intl",
  // WebAssembly
  "WebAssembly"
], ki = [
  "Error",
  "EvalError",
  "InternalError",
  "RangeError",
  "ReferenceError",
  "SyntaxError",
  "TypeError",
  "URIError"
], xi = [
  "setInterval",
  "setTimeout",
  "clearInterval",
  "clearTimeout",
  "require",
  "exports",
  "eval",
  "isFinite",
  "isNaN",
  "parseFloat",
  "parseInt",
  "decodeURI",
  "decodeURIComponent",
  "encodeURI",
  "encodeURIComponent",
  "escape",
  "unescape"
], Ho = [
  "arguments",
  "this",
  "super",
  "console",
  "window",
  "document",
  "localStorage",
  "sessionStorage",
  "module",
  "global"
  // Node.js
], Go = [].concat(
  xi,
  Ti,
  ki
);
function Ko(e) {
  const t = e.regex, n = (U, { after: le }) => {
    const _e = "</" + U[0].slice(1);
    return U.input.indexOf(_e, le) !== -1;
  }, r = Mr, i = {
    begin: "<>",
    end: "</>"
  }, s = /<[A-Za-z0-9\\._:-]+\s*\/>/, l = {
    begin: /<[A-Za-z0-9\\._:-]+/,
    end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
    /**
     * @param {RegExpMatchArray} match
     * @param {CallbackResponse} response
     */
    isTrulyOpeningTag: (U, le) => {
      const _e = U[0].length + U.index, ke = U.input[_e];
      if (
        // HTML should not include another raw `<` inside a tag
        // nested type?
        // `<Array<Array<number>>`, etc.
        ke === "<" || // the , gives away that this is not HTML
        // `<T, A extends keyof T, V>`
        ke === ","
      ) {
        le.ignoreMatch();
        return;
      }
      ke === ">" && (n(U, { after: _e }) || le.ignoreMatch());
      let Ue;
      const st = U.input.substring(_e);
      if (Ue = st.match(/^\s*=/)) {
        le.ignoreMatch();
        return;
      }
      if ((Ue = st.match(/^\s+extends\s+/)) && Ue.index === 0) {
        le.ignoreMatch();
        return;
      }
    }
  }, a = {
    $pattern: Mr,
    keyword: Fo,
    literal: zo,
    built_in: Go,
    "variable.language": Ho
  }, c = "[0-9](_?[0-9])*", u = `\\.(${c})`, d = "0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*", h = {
    className: "number",
    variants: [
      // DecimalLiteral
      { begin: `(\\b(${d})((${u})|\\.)?|(${u}))[eE][+-]?(${c})\\b` },
      { begin: `\\b(${d})\\b((${u})\\b|\\.)?|(${u})\\b` },
      // DecimalBigIntegerLiteral
      { begin: "\\b(0|[1-9](_?[0-9])*)n\\b" },
      // NonDecimalIntegerLiteral
      { begin: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b" },
      { begin: "\\b0[bB][0-1](_?[0-1])*n?\\b" },
      { begin: "\\b0[oO][0-7](_?[0-7])*n?\\b" },
      // LegacyOctalIntegerLiteral (does not include underscore separators)
      // https://tc39.es/ecma262/#sec-additional-syntax-numeric-literals
      { begin: "\\b0[0-7]+n?\\b" }
    ],
    relevance: 0
  }, f = {
    className: "subst",
    begin: "\\$\\{",
    end: "\\}",
    keywords: a,
    contains: []
    // defined later
  }, _ = {
    begin: ".?html`",
    end: "",
    starts: {
      end: "`",
      returnEnd: !1,
      contains: [
        e.BACKSLASH_ESCAPE,
        f
      ],
      subLanguage: "xml"
    }
  }, g = {
    begin: ".?css`",
    end: "",
    starts: {
      end: "`",
      returnEnd: !1,
      contains: [
        e.BACKSLASH_ESCAPE,
        f
      ],
      subLanguage: "css"
    }
  }, m = {
    begin: ".?gql`",
    end: "",
    starts: {
      end: "`",
      returnEnd: !1,
      contains: [
        e.BACKSLASH_ESCAPE,
        f
      ],
      subLanguage: "graphql"
    }
  }, x = {
    className: "string",
    begin: "`",
    end: "`",
    contains: [
      e.BACKSLASH_ESCAPE,
      f
    ]
  }, y = {
    className: "comment",
    variants: [
      e.COMMENT(
        /\/\*\*(?!\/)/,
        "\\*/",
        {
          relevance: 0,
          contains: [
            {
              begin: "(?=@[A-Za-z]+)",
              relevance: 0,
              contains: [
                {
                  className: "doctag",
                  begin: "@[A-Za-z]+"
                },
                {
                  className: "type",
                  begin: "\\{",
                  end: "\\}",
                  excludeEnd: !0,
                  excludeBegin: !0,
                  relevance: 0
                },
                {
                  className: "variable",
                  begin: r + "(?=\\s*(-)|$)",
                  endsParent: !0,
                  relevance: 0
                },
                // eat spaces (not newlines) so we can find
                // types or variables
                {
                  begin: /(?=[^\n])\s/,
                  relevance: 0
                }
              ]
            }
          ]
        }
      ),
      e.C_BLOCK_COMMENT_MODE,
      e.C_LINE_COMMENT_MODE
    ]
  }, M = [
    e.APOS_STRING_MODE,
    e.QUOTE_STRING_MODE,
    _,
    g,
    m,
    x,
    // Skip numbers when they are part of a variable name
    { match: /\$\d+/ },
    h
    // This is intentional:
    // See https://github.com/highlightjs/highlight.js/issues/3288
    // hljs.REGEXP_MODE
  ];
  f.contains = M.concat({
    // we need to pair up {} inside our subst to prevent
    // it from ending too early by matching another }
    begin: /\{/,
    end: /\}/,
    keywords: a,
    contains: [
      "self"
    ].concat(M)
  });
  const B = [].concat(y, f.contains), R = B.concat([
    // eat recursive parens in sub expressions
    {
      begin: /(\s*)\(/,
      end: /\)/,
      keywords: a,
      contains: ["self"].concat(B)
    }
  ]), Z = {
    className: "params",
    // convert this to negative lookbehind in v12
    begin: /(\s*)\(/,
    // to match the parms with
    end: /\)/,
    excludeBegin: !0,
    excludeEnd: !0,
    keywords: a,
    contains: R
  }, W = {
    variants: [
      // class Car extends vehicle
      {
        match: [
          /class/,
          /\s+/,
          r,
          /\s+/,
          /extends/,
          /\s+/,
          t.concat(r, "(", t.concat(/\./, r), ")*")
        ],
        scope: {
          1: "keyword",
          3: "title.class",
          5: "keyword",
          7: "title.class.inherited"
        }
      },
      // class Car
      {
        match: [
          /class/,
          /\s+/,
          r
        ],
        scope: {
          1: "keyword",
          3: "title.class"
        }
      }
    ]
  }, X = {
    relevance: 0,
    match: t.either(
      // Hard coded exceptions
      /\bJSON/,
      // Float32Array, OutT
      /\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,
      // CSSFactory, CSSFactoryT
      /\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,
      // FPs, FPsT
      /\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/
      // P
      // single letters are not highlighted
      // BLAH
      // this will be flagged as a UPPER_CASE_CONSTANT instead
    ),
    className: "title.class",
    keywords: {
      _: [
        // se we still get relevance credit for JS library classes
        ...Ti,
        ...ki
      ]
    }
  }, P = {
    label: "use_strict",
    className: "meta",
    relevance: 10,
    begin: /^\s*['"]use (strict|asm)['"]/
  }, fe = {
    variants: [
      {
        match: [
          /function/,
          /\s+/,
          r,
          /(?=\s*\()/
        ]
      },
      // anonymous function
      {
        match: [
          /function/,
          /\s*(?=\()/
        ]
      }
    ],
    className: {
      1: "keyword",
      3: "title.function"
    },
    label: "func.def",
    contains: [Z],
    illegal: /%/
  }, vt = {
    relevance: 0,
    match: /\b[A-Z][A-Z_0-9]+\b/,
    className: "variable.constant"
  };
  function Lt(U) {
    return t.concat("(?!", U.join("|"), ")");
  }
  const Dt = {
    match: t.concat(
      /\b/,
      Lt([
        ...xi,
        "super",
        "import"
      ].map((U) => `${U}\\s*\\(`)),
      r,
      t.lookahead(/\s*\(/)
    ),
    className: "title.function",
    relevance: 0
  }, Pe = {
    begin: t.concat(/\./, t.lookahead(
      t.concat(r, /(?![0-9A-Za-z$_(])/)
    )),
    end: r,
    excludeBegin: !0,
    keywords: "prototype",
    className: "property",
    relevance: 0
  }, Bt = {
    match: [
      /get|set/,
      /\s+/,
      r,
      /(?=\()/
    ],
    className: {
      1: "keyword",
      3: "title.function"
    },
    contains: [
      {
        // eat to avoid empty params
        begin: /\(\)/
      },
      Z
    ]
  }, it = "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" + e.UNDERSCORE_IDENT_RE + ")\\s*=>", Pt = {
    match: [
      /const|var|let/,
      /\s+/,
      r,
      /\s*/,
      /=\s*/,
      /(async\s*)?/,
      // async is optional
      t.lookahead(it)
    ],
    keywords: "async",
    className: {
      1: "keyword",
      3: "title.function"
    },
    contains: [
      Z
    ]
  };
  return {
    name: "JavaScript",
    aliases: ["js", "jsx", "mjs", "cjs"],
    keywords: a,
    // this will be extended by TypeScript
    exports: { PARAMS_CONTAINS: R, CLASS_REFERENCE: X },
    illegal: /#(?![$_A-z])/,
    contains: [
      e.SHEBANG({
        label: "shebang",
        binary: "node",
        relevance: 5
      }),
      P,
      e.APOS_STRING_MODE,
      e.QUOTE_STRING_MODE,
      _,
      g,
      m,
      x,
      y,
      // Skip numbers when they are part of a variable name
      { match: /\$\d+/ },
      h,
      X,
      {
        scope: "attr",
        match: r + t.lookahead(":"),
        relevance: 0
      },
      Pt,
      {
        // "value" container
        begin: "(" + e.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
        keywords: "return throw case",
        relevance: 0,
        contains: [
          y,
          e.REGEXP_MODE,
          {
            className: "function",
            // we have to count the parens to make sure we actually have the
            // correct bounding ( ) before the =>.  There could be any number of
            // sub-expressions inside also surrounded by parens.
            begin: it,
            returnBegin: !0,
            end: "\\s*=>",
            contains: [
              {
                className: "params",
                variants: [
                  {
                    begin: e.UNDERSCORE_IDENT_RE,
                    relevance: 0
                  },
                  {
                    className: null,
                    begin: /\(\s*\)/,
                    skip: !0
                  },
                  {
                    begin: /(\s*)\(/,
                    end: /\)/,
                    excludeBegin: !0,
                    excludeEnd: !0,
                    keywords: a,
                    contains: R
                  }
                ]
              }
            ]
          },
          {
            // could be a comma delimited list of params to a function call
            begin: /,/,
            relevance: 0
          },
          {
            match: /\s+/,
            relevance: 0
          },
          {
            // JSX
            variants: [
              { begin: i.begin, end: i.end },
              { match: s },
              {
                begin: l.begin,
                // we carefully check the opening tag to see if it truly
                // is a tag and not a false positive
                "on:begin": l.isTrulyOpeningTag,
                end: l.end
              }
            ],
            subLanguage: "xml",
            contains: [
              {
                begin: l.begin,
                end: l.end,
                skip: !0,
                contains: ["self"]
              }
            ]
          }
        ]
      },
      fe,
      {
        // prevent this from getting swallowed up by function
        // since they appear "function like"
        beginKeywords: "while if switch catch for"
      },
      {
        // we have to count the parens to make sure we actually have the correct
        // bounding ( ).  There could be any number of sub-expressions inside
        // also surrounded by parens.
        begin: "\\b(?!function)" + e.UNDERSCORE_IDENT_RE + "\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
        // end parens
        returnBegin: !0,
        label: "func.def",
        contains: [
          Z,
          e.inherit(e.TITLE_MODE, { begin: r, className: "title.function" })
        ]
      },
      // catch ... so it won't trigger the property rule below
      {
        match: /\.\.\./,
        relevance: 0
      },
      Pe,
      // hack: prevents detection of keywords in some circumstances
      // .keyword()
      // $keyword = x
      {
        match: "\\$" + r,
        relevance: 0
      },
      {
        match: [/\bconstructor(?=\s*\()/],
        className: { 1: "title.function" },
        contains: [Z]
      },
      Dt,
      vt,
      W,
      Bt,
      {
        match: /\$[(.]/
        // relevance booster for a pattern common to JS libs: `$(something)` and `$.something`
      }
    ]
  };
}
const hn = "[A-Za-z$_][0-9A-Za-z$_]*", Mi = [
  "as",
  // for exports
  "in",
  "of",
  "if",
  "for",
  "while",
  "finally",
  "var",
  "new",
  "function",
  "do",
  "return",
  "void",
  "else",
  "break",
  "catch",
  "instanceof",
  "with",
  "throw",
  "case",
  "default",
  "try",
  "switch",
  "continue",
  "typeof",
  "delete",
  "let",
  "yield",
  "const",
  "class",
  // JS handles these with a special rule
  // "get",
  // "set",
  "debugger",
  "async",
  "await",
  "static",
  "import",
  "from",
  "export",
  "extends",
  // It's reached stage 3, which is "recommended for implementation":
  "using"
], Ri = [
  "true",
  "false",
  "null",
  "undefined",
  "NaN",
  "Infinity"
], Oi = [
  // Fundamental objects
  "Object",
  "Function",
  "Boolean",
  "Symbol",
  // numbers and dates
  "Math",
  "Date",
  "Number",
  "BigInt",
  // text
  "String",
  "RegExp",
  // Indexed collections
  "Array",
  "Float32Array",
  "Float64Array",
  "Int8Array",
  "Uint8Array",
  "Uint8ClampedArray",
  "Int16Array",
  "Int32Array",
  "Uint16Array",
  "Uint32Array",
  "BigInt64Array",
  "BigUint64Array",
  // Keyed collections
  "Set",
  "Map",
  "WeakSet",
  "WeakMap",
  // Structured data
  "ArrayBuffer",
  "SharedArrayBuffer",
  "Atomics",
  "DataView",
  "JSON",
  // Control abstraction objects
  "Promise",
  "Generator",
  "GeneratorFunction",
  "AsyncFunction",
  // Reflection
  "Reflect",
  "Proxy",
  // Internationalization
  "Intl",
  // WebAssembly
  "WebAssembly"
], Ii = [
  "Error",
  "EvalError",
  "InternalError",
  "RangeError",
  "ReferenceError",
  "SyntaxError",
  "TypeError",
  "URIError"
], Ci = [
  "setInterval",
  "setTimeout",
  "clearInterval",
  "clearTimeout",
  "require",
  "exports",
  "eval",
  "isFinite",
  "isNaN",
  "parseFloat",
  "parseInt",
  "decodeURI",
  "decodeURIComponent",
  "encodeURI",
  "encodeURIComponent",
  "escape",
  "unescape"
], Li = [
  "arguments",
  "this",
  "super",
  "console",
  "window",
  "document",
  "localStorage",
  "sessionStorage",
  "module",
  "global"
  // Node.js
], Di = [].concat(
  Ci,
  Oi,
  Ii
);
function jo(e) {
  const t = e.regex, n = (U, { after: le }) => {
    const _e = "</" + U[0].slice(1);
    return U.input.indexOf(_e, le) !== -1;
  }, r = hn, i = {
    begin: "<>",
    end: "</>"
  }, s = /<[A-Za-z0-9\\._:-]+\s*\/>/, l = {
    begin: /<[A-Za-z0-9\\._:-]+/,
    end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
    /**
     * @param {RegExpMatchArray} match
     * @param {CallbackResponse} response
     */
    isTrulyOpeningTag: (U, le) => {
      const _e = U[0].length + U.index, ke = U.input[_e];
      if (
        // HTML should not include another raw `<` inside a tag
        // nested type?
        // `<Array<Array<number>>`, etc.
        ke === "<" || // the , gives away that this is not HTML
        // `<T, A extends keyof T, V>`
        ke === ","
      ) {
        le.ignoreMatch();
        return;
      }
      ke === ">" && (n(U, { after: _e }) || le.ignoreMatch());
      let Ue;
      const st = U.input.substring(_e);
      if (Ue = st.match(/^\s*=/)) {
        le.ignoreMatch();
        return;
      }
      if ((Ue = st.match(/^\s+extends\s+/)) && Ue.index === 0) {
        le.ignoreMatch();
        return;
      }
    }
  }, a = {
    $pattern: hn,
    keyword: Mi,
    literal: Ri,
    built_in: Di,
    "variable.language": Li
  }, c = "[0-9](_?[0-9])*", u = `\\.(${c})`, d = "0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*", h = {
    className: "number",
    variants: [
      // DecimalLiteral
      { begin: `(\\b(${d})((${u})|\\.)?|(${u}))[eE][+-]?(${c})\\b` },
      { begin: `\\b(${d})\\b((${u})\\b|\\.)?|(${u})\\b` },
      // DecimalBigIntegerLiteral
      { begin: "\\b(0|[1-9](_?[0-9])*)n\\b" },
      // NonDecimalIntegerLiteral
      { begin: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b" },
      { begin: "\\b0[bB][0-1](_?[0-1])*n?\\b" },
      { begin: "\\b0[oO][0-7](_?[0-7])*n?\\b" },
      // LegacyOctalIntegerLiteral (does not include underscore separators)
      // https://tc39.es/ecma262/#sec-additional-syntax-numeric-literals
      { begin: "\\b0[0-7]+n?\\b" }
    ],
    relevance: 0
  }, f = {
    className: "subst",
    begin: "\\$\\{",
    end: "\\}",
    keywords: a,
    contains: []
    // defined later
  }, _ = {
    begin: ".?html`",
    end: "",
    starts: {
      end: "`",
      returnEnd: !1,
      contains: [
        e.BACKSLASH_ESCAPE,
        f
      ],
      subLanguage: "xml"
    }
  }, g = {
    begin: ".?css`",
    end: "",
    starts: {
      end: "`",
      returnEnd: !1,
      contains: [
        e.BACKSLASH_ESCAPE,
        f
      ],
      subLanguage: "css"
    }
  }, m = {
    begin: ".?gql`",
    end: "",
    starts: {
      end: "`",
      returnEnd: !1,
      contains: [
        e.BACKSLASH_ESCAPE,
        f
      ],
      subLanguage: "graphql"
    }
  }, x = {
    className: "string",
    begin: "`",
    end: "`",
    contains: [
      e.BACKSLASH_ESCAPE,
      f
    ]
  }, y = {
    className: "comment",
    variants: [
      e.COMMENT(
        /\/\*\*(?!\/)/,
        "\\*/",
        {
          relevance: 0,
          contains: [
            {
              begin: "(?=@[A-Za-z]+)",
              relevance: 0,
              contains: [
                {
                  className: "doctag",
                  begin: "@[A-Za-z]+"
                },
                {
                  className: "type",
                  begin: "\\{",
                  end: "\\}",
                  excludeEnd: !0,
                  excludeBegin: !0,
                  relevance: 0
                },
                {
                  className: "variable",
                  begin: r + "(?=\\s*(-)|$)",
                  endsParent: !0,
                  relevance: 0
                },
                // eat spaces (not newlines) so we can find
                // types or variables
                {
                  begin: /(?=[^\n])\s/,
                  relevance: 0
                }
              ]
            }
          ]
        }
      ),
      e.C_BLOCK_COMMENT_MODE,
      e.C_LINE_COMMENT_MODE
    ]
  }, M = [
    e.APOS_STRING_MODE,
    e.QUOTE_STRING_MODE,
    _,
    g,
    m,
    x,
    // Skip numbers when they are part of a variable name
    { match: /\$\d+/ },
    h
    // This is intentional:
    // See https://github.com/highlightjs/highlight.js/issues/3288
    // hljs.REGEXP_MODE
  ];
  f.contains = M.concat({
    // we need to pair up {} inside our subst to prevent
    // it from ending too early by matching another }
    begin: /\{/,
    end: /\}/,
    keywords: a,
    contains: [
      "self"
    ].concat(M)
  });
  const B = [].concat(y, f.contains), R = B.concat([
    // eat recursive parens in sub expressions
    {
      begin: /(\s*)\(/,
      end: /\)/,
      keywords: a,
      contains: ["self"].concat(B)
    }
  ]), Z = {
    className: "params",
    // convert this to negative lookbehind in v12
    begin: /(\s*)\(/,
    // to match the parms with
    end: /\)/,
    excludeBegin: !0,
    excludeEnd: !0,
    keywords: a,
    contains: R
  }, W = {
    variants: [
      // class Car extends vehicle
      {
        match: [
          /class/,
          /\s+/,
          r,
          /\s+/,
          /extends/,
          /\s+/,
          t.concat(r, "(", t.concat(/\./, r), ")*")
        ],
        scope: {
          1: "keyword",
          3: "title.class",
          5: "keyword",
          7: "title.class.inherited"
        }
      },
      // class Car
      {
        match: [
          /class/,
          /\s+/,
          r
        ],
        scope: {
          1: "keyword",
          3: "title.class"
        }
      }
    ]
  }, X = {
    relevance: 0,
    match: t.either(
      // Hard coded exceptions
      /\bJSON/,
      // Float32Array, OutT
      /\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,
      // CSSFactory, CSSFactoryT
      /\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,
      // FPs, FPsT
      /\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/
      // P
      // single letters are not highlighted
      // BLAH
      // this will be flagged as a UPPER_CASE_CONSTANT instead
    ),
    className: "title.class",
    keywords: {
      _: [
        // se we still get relevance credit for JS library classes
        ...Oi,
        ...Ii
      ]
    }
  }, P = {
    label: "use_strict",
    className: "meta",
    relevance: 10,
    begin: /^\s*['"]use (strict|asm)['"]/
  }, fe = {
    variants: [
      {
        match: [
          /function/,
          /\s+/,
          r,
          /(?=\s*\()/
        ]
      },
      // anonymous function
      {
        match: [
          /function/,
          /\s*(?=\()/
        ]
      }
    ],
    className: {
      1: "keyword",
      3: "title.function"
    },
    label: "func.def",
    contains: [Z],
    illegal: /%/
  }, vt = {
    relevance: 0,
    match: /\b[A-Z][A-Z_0-9]+\b/,
    className: "variable.constant"
  };
  function Lt(U) {
    return t.concat("(?!", U.join("|"), ")");
  }
  const Dt = {
    match: t.concat(
      /\b/,
      Lt([
        ...Ci,
        "super",
        "import"
      ].map((U) => `${U}\\s*\\(`)),
      r,
      t.lookahead(/\s*\(/)
    ),
    className: "title.function",
    relevance: 0
  }, Pe = {
    begin: t.concat(/\./, t.lookahead(
      t.concat(r, /(?![0-9A-Za-z$_(])/)
    )),
    end: r,
    excludeBegin: !0,
    keywords: "prototype",
    className: "property",
    relevance: 0
  }, Bt = {
    match: [
      /get|set/,
      /\s+/,
      r,
      /(?=\()/
    ],
    className: {
      1: "keyword",
      3: "title.function"
    },
    contains: [
      {
        // eat to avoid empty params
        begin: /\(\)/
      },
      Z
    ]
  }, it = "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" + e.UNDERSCORE_IDENT_RE + ")\\s*=>", Pt = {
    match: [
      /const|var|let/,
      /\s+/,
      r,
      /\s*/,
      /=\s*/,
      /(async\s*)?/,
      // async is optional
      t.lookahead(it)
    ],
    keywords: "async",
    className: {
      1: "keyword",
      3: "title.function"
    },
    contains: [
      Z
    ]
  };
  return {
    name: "JavaScript",
    aliases: ["js", "jsx", "mjs", "cjs"],
    keywords: a,
    // this will be extended by TypeScript
    exports: { PARAMS_CONTAINS: R, CLASS_REFERENCE: X },
    illegal: /#(?![$_A-z])/,
    contains: [
      e.SHEBANG({
        label: "shebang",
        binary: "node",
        relevance: 5
      }),
      P,
      e.APOS_STRING_MODE,
      e.QUOTE_STRING_MODE,
      _,
      g,
      m,
      x,
      y,
      // Skip numbers when they are part of a variable name
      { match: /\$\d+/ },
      h,
      X,
      {
        scope: "attr",
        match: r + t.lookahead(":"),
        relevance: 0
      },
      Pt,
      {
        // "value" container
        begin: "(" + e.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
        keywords: "return throw case",
        relevance: 0,
        contains: [
          y,
          e.REGEXP_MODE,
          {
            className: "function",
            // we have to count the parens to make sure we actually have the
            // correct bounding ( ) before the =>.  There could be any number of
            // sub-expressions inside also surrounded by parens.
            begin: it,
            returnBegin: !0,
            end: "\\s*=>",
            contains: [
              {
                className: "params",
                variants: [
                  {
                    begin: e.UNDERSCORE_IDENT_RE,
                    relevance: 0
                  },
                  {
                    className: null,
                    begin: /\(\s*\)/,
                    skip: !0
                  },
                  {
                    begin: /(\s*)\(/,
                    end: /\)/,
                    excludeBegin: !0,
                    excludeEnd: !0,
                    keywords: a,
                    contains: R
                  }
                ]
              }
            ]
          },
          {
            // could be a comma delimited list of params to a function call
            begin: /,/,
            relevance: 0
          },
          {
            match: /\s+/,
            relevance: 0
          },
          {
            // JSX
            variants: [
              { begin: i.begin, end: i.end },
              { match: s },
              {
                begin: l.begin,
                // we carefully check the opening tag to see if it truly
                // is a tag and not a false positive
                "on:begin": l.isTrulyOpeningTag,
                end: l.end
              }
            ],
            subLanguage: "xml",
            contains: [
              {
                begin: l.begin,
                end: l.end,
                skip: !0,
                contains: ["self"]
              }
            ]
          }
        ]
      },
      fe,
      {
        // prevent this from getting swallowed up by function
        // since they appear "function like"
        beginKeywords: "while if switch catch for"
      },
      {
        // we have to count the parens to make sure we actually have the correct
        // bounding ( ).  There could be any number of sub-expressions inside
        // also surrounded by parens.
        begin: "\\b(?!function)" + e.UNDERSCORE_IDENT_RE + "\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
        // end parens
        returnBegin: !0,
        label: "func.def",
        contains: [
          Z,
          e.inherit(e.TITLE_MODE, { begin: r, className: "title.function" })
        ]
      },
      // catch ... so it won't trigger the property rule below
      {
        match: /\.\.\./,
        relevance: 0
      },
      Pe,
      // hack: prevents detection of keywords in some circumstances
      // .keyword()
      // $keyword = x
      {
        match: "\\$" + r,
        relevance: 0
      },
      {
        match: [/\bconstructor(?=\s*\()/],
        className: { 1: "title.function" },
        contains: [Z]
      },
      Dt,
      vt,
      W,
      Bt,
      {
        match: /\$[(.]/
        // relevance booster for a pattern common to JS libs: `$(something)` and `$.something`
      }
    ]
  };
}
function Zo(e) {
  const t = e.regex, n = jo(e), r = hn, i = [
    "any",
    "void",
    "number",
    "boolean",
    "string",
    "object",
    "never",
    "symbol",
    "bigint",
    "unknown"
  ], s = {
    begin: [
      /namespace/,
      /\s+/,
      e.IDENT_RE
    ],
    beginScope: {
      1: "keyword",
      3: "title.class"
    }
  }, l = {
    beginKeywords: "interface",
    end: /\{/,
    excludeEnd: !0,
    keywords: {
      keyword: "interface extends",
      built_in: i
    },
    contains: [n.exports.CLASS_REFERENCE]
  }, a = {
    className: "meta",
    relevance: 10,
    begin: /^\s*['"]use strict['"]/
  }, c = [
    "type",
    // "namespace",
    "interface",
    "public",
    "private",
    "protected",
    "implements",
    "declare",
    "abstract",
    "readonly",
    "enum",
    "override",
    "satisfies"
  ], u = {
    $pattern: hn,
    keyword: Mi.concat(c),
    literal: Ri,
    built_in: Di.concat(i),
    "variable.language": Li
  }, d = {
    className: "meta",
    begin: "@" + r
  }, h = (m, x, T) => {
    const y = m.contains.findIndex((M) => M.label === x);
    if (y === -1)
      throw new Error("can not find mode to replace");
    m.contains.splice(y, 1, T);
  };
  Object.assign(n.keywords, u), n.exports.PARAMS_CONTAINS.push(d);
  const f = n.contains.find((m) => m.scope === "attr"), _ = Object.assign(
    {},
    f,
    { match: t.concat(r, t.lookahead(/\s*\?:/)) }
  );
  n.exports.PARAMS_CONTAINS.push([
    n.exports.CLASS_REFERENCE,
    // class reference for highlighting the params types
    f,
    // highlight the params key
    _
    // Added for optional property assignment highlighting
  ]), n.contains = n.contains.concat([
    d,
    s,
    l,
    _
    // Added for optional property assignment highlighting
  ]), h(n, "shebang", e.SHEBANG()), h(n, "use_strict", a);
  const g = n.contains.find((m) => m.label === "func.def");
  return g.relevance = 0, Object.assign(n, {
    name: "TypeScript",
    aliases: [
      "ts",
      "tsx",
      "mts",
      "cts"
    ]
  }), n;
}
const $o = (e) => ({
  IMPORTANT: {
    scope: "meta",
    begin: "!important"
  },
  BLOCK_COMMENT: e.C_BLOCK_COMMENT_MODE,
  HEXCOLOR: {
    scope: "number",
    begin: /#(([0-9a-fA-F]{3,4})|(([0-9a-fA-F]{2}){3,4}))\b/
  },
  FUNCTION_DISPATCH: {
    className: "built_in",
    begin: /[\w-]+(?=\()/
  },
  ATTRIBUTE_SELECTOR_MODE: {
    scope: "selector-attr",
    begin: /\[/,
    end: /\]/,
    illegal: "$",
    contains: [
      e.APOS_STRING_MODE,
      e.QUOTE_STRING_MODE
    ]
  },
  CSS_NUMBER_MODE: {
    scope: "number",
    begin: e.NUMBER_RE + "(%|em|ex|ch|rem|vw|vh|vmin|vmax|cm|mm|in|pt|pc|px|deg|grad|rad|turn|s|ms|Hz|kHz|dpi|dpcm|dppx)?",
    relevance: 0
  },
  CSS_VARIABLE: {
    className: "attr",
    begin: /--[A-Za-z_][A-Za-z0-9_-]*/
  }
}), Wo = [
  "a",
  "abbr",
  "address",
  "article",
  "aside",
  "audio",
  "b",
  "blockquote",
  "body",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "dd",
  "del",
  "details",
  "dfn",
  "div",
  "dl",
  "dt",
  "em",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "header",
  "hgroup",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "label",
  "legend",
  "li",
  "main",
  "mark",
  "menu",
  "nav",
  "object",
  "ol",
  "optgroup",
  "option",
  "p",
  "picture",
  "q",
  "quote",
  "samp",
  "section",
  "select",
  "source",
  "span",
  "strong",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "tr",
  "ul",
  "var",
  "video"
], qo = [
  "defs",
  "g",
  "marker",
  "mask",
  "pattern",
  "svg",
  "switch",
  "symbol",
  "feBlend",
  "feColorMatrix",
  "feComponentTransfer",
  "feComposite",
  "feConvolveMatrix",
  "feDiffuseLighting",
  "feDisplacementMap",
  "feFlood",
  "feGaussianBlur",
  "feImage",
  "feMerge",
  "feMorphology",
  "feOffset",
  "feSpecularLighting",
  "feTile",
  "feTurbulence",
  "linearGradient",
  "radialGradient",
  "stop",
  "circle",
  "ellipse",
  "image",
  "line",
  "path",
  "polygon",
  "polyline",
  "rect",
  "text",
  "use",
  "textPath",
  "tspan",
  "foreignObject",
  "clipPath"
], Yo = [
  ...Wo,
  ...qo
], Xo = [
  "any-hover",
  "any-pointer",
  "aspect-ratio",
  "color",
  "color-gamut",
  "color-index",
  "device-aspect-ratio",
  "device-height",
  "device-width",
  "display-mode",
  "forced-colors",
  "grid",
  "height",
  "hover",
  "inverted-colors",
  "monochrome",
  "orientation",
  "overflow-block",
  "overflow-inline",
  "pointer",
  "prefers-color-scheme",
  "prefers-contrast",
  "prefers-reduced-motion",
  "prefers-reduced-transparency",
  "resolution",
  "scan",
  "scripting",
  "update",
  "width",
  // TODO: find a better solution?
  "min-width",
  "max-width",
  "min-height",
  "max-height"
].sort().reverse(), Vo = [
  "active",
  "any-link",
  "blank",
  "checked",
  "current",
  "default",
  "defined",
  "dir",
  // dir()
  "disabled",
  "drop",
  "empty",
  "enabled",
  "first",
  "first-child",
  "first-of-type",
  "fullscreen",
  "future",
  "focus",
  "focus-visible",
  "focus-within",
  "has",
  // has()
  "host",
  // host or host()
  "host-context",
  // host-context()
  "hover",
  "indeterminate",
  "in-range",
  "invalid",
  "is",
  // is()
  "lang",
  // lang()
  "last-child",
  "last-of-type",
  "left",
  "link",
  "local-link",
  "not",
  // not()
  "nth-child",
  // nth-child()
  "nth-col",
  // nth-col()
  "nth-last-child",
  // nth-last-child()
  "nth-last-col",
  // nth-last-col()
  "nth-last-of-type",
  //nth-last-of-type()
  "nth-of-type",
  //nth-of-type()
  "only-child",
  "only-of-type",
  "optional",
  "out-of-range",
  "past",
  "placeholder-shown",
  "read-only",
  "read-write",
  "required",
  "right",
  "root",
  "scope",
  "target",
  "target-within",
  "user-invalid",
  "valid",
  "visited",
  "where"
  // where()
].sort().reverse(), Jo = [
  "after",
  "backdrop",
  "before",
  "cue",
  "cue-region",
  "first-letter",
  "first-line",
  "grammar-error",
  "marker",
  "part",
  "placeholder",
  "selection",
  "slotted",
  "spelling-error"
].sort().reverse(), Qo = [
  "accent-color",
  "align-content",
  "align-items",
  "align-self",
  "alignment-baseline",
  "all",
  "anchor-name",
  "animation",
  "animation-composition",
  "animation-delay",
  "animation-direction",
  "animation-duration",
  "animation-fill-mode",
  "animation-iteration-count",
  "animation-name",
  "animation-play-state",
  "animation-range",
  "animation-range-end",
  "animation-range-start",
  "animation-timeline",
  "animation-timing-function",
  "appearance",
  "aspect-ratio",
  "backdrop-filter",
  "backface-visibility",
  "background",
  "background-attachment",
  "background-blend-mode",
  "background-clip",
  "background-color",
  "background-image",
  "background-origin",
  "background-position",
  "background-position-x",
  "background-position-y",
  "background-repeat",
  "background-size",
  "baseline-shift",
  "block-size",
  "border",
  "border-block",
  "border-block-color",
  "border-block-end",
  "border-block-end-color",
  "border-block-end-style",
  "border-block-end-width",
  "border-block-start",
  "border-block-start-color",
  "border-block-start-style",
  "border-block-start-width",
  "border-block-style",
  "border-block-width",
  "border-bottom",
  "border-bottom-color",
  "border-bottom-left-radius",
  "border-bottom-right-radius",
  "border-bottom-style",
  "border-bottom-width",
  "border-collapse",
  "border-color",
  "border-end-end-radius",
  "border-end-start-radius",
  "border-image",
  "border-image-outset",
  "border-image-repeat",
  "border-image-slice",
  "border-image-source",
  "border-image-width",
  "border-inline",
  "border-inline-color",
  "border-inline-end",
  "border-inline-end-color",
  "border-inline-end-style",
  "border-inline-end-width",
  "border-inline-start",
  "border-inline-start-color",
  "border-inline-start-style",
  "border-inline-start-width",
  "border-inline-style",
  "border-inline-width",
  "border-left",
  "border-left-color",
  "border-left-style",
  "border-left-width",
  "border-radius",
  "border-right",
  "border-right-color",
  "border-right-style",
  "border-right-width",
  "border-spacing",
  "border-start-end-radius",
  "border-start-start-radius",
  "border-style",
  "border-top",
  "border-top-color",
  "border-top-left-radius",
  "border-top-right-radius",
  "border-top-style",
  "border-top-width",
  "border-width",
  "bottom",
  "box-align",
  "box-decoration-break",
  "box-direction",
  "box-flex",
  "box-flex-group",
  "box-lines",
  "box-ordinal-group",
  "box-orient",
  "box-pack",
  "box-shadow",
  "box-sizing",
  "break-after",
  "break-before",
  "break-inside",
  "caption-side",
  "caret-color",
  "clear",
  "clip",
  "clip-path",
  "clip-rule",
  "color",
  "color-interpolation",
  "color-interpolation-filters",
  "color-profile",
  "color-rendering",
  "color-scheme",
  "column-count",
  "column-fill",
  "column-gap",
  "column-rule",
  "column-rule-color",
  "column-rule-style",
  "column-rule-width",
  "column-span",
  "column-width",
  "columns",
  "contain",
  "contain-intrinsic-block-size",
  "contain-intrinsic-height",
  "contain-intrinsic-inline-size",
  "contain-intrinsic-size",
  "contain-intrinsic-width",
  "container",
  "container-name",
  "container-type",
  "content",
  "content-visibility",
  "counter-increment",
  "counter-reset",
  "counter-set",
  "cue",
  "cue-after",
  "cue-before",
  "cursor",
  "cx",
  "cy",
  "direction",
  "display",
  "dominant-baseline",
  "empty-cells",
  "enable-background",
  "field-sizing",
  "fill",
  "fill-opacity",
  "fill-rule",
  "filter",
  "flex",
  "flex-basis",
  "flex-direction",
  "flex-flow",
  "flex-grow",
  "flex-shrink",
  "flex-wrap",
  "float",
  "flood-color",
  "flood-opacity",
  "flow",
  "font",
  "font-display",
  "font-family",
  "font-feature-settings",
  "font-kerning",
  "font-language-override",
  "font-optical-sizing",
  "font-palette",
  "font-size",
  "font-size-adjust",
  "font-smooth",
  "font-smoothing",
  "font-stretch",
  "font-style",
  "font-synthesis",
  "font-synthesis-position",
  "font-synthesis-small-caps",
  "font-synthesis-style",
  "font-synthesis-weight",
  "font-variant",
  "font-variant-alternates",
  "font-variant-caps",
  "font-variant-east-asian",
  "font-variant-emoji",
  "font-variant-ligatures",
  "font-variant-numeric",
  "font-variant-position",
  "font-variation-settings",
  "font-weight",
  "forced-color-adjust",
  "gap",
  "glyph-orientation-horizontal",
  "glyph-orientation-vertical",
  "grid",
  "grid-area",
  "grid-auto-columns",
  "grid-auto-flow",
  "grid-auto-rows",
  "grid-column",
  "grid-column-end",
  "grid-column-start",
  "grid-gap",
  "grid-row",
  "grid-row-end",
  "grid-row-start",
  "grid-template",
  "grid-template-areas",
  "grid-template-columns",
  "grid-template-rows",
  "hanging-punctuation",
  "height",
  "hyphenate-character",
  "hyphenate-limit-chars",
  "hyphens",
  "icon",
  "image-orientation",
  "image-rendering",
  "image-resolution",
  "ime-mode",
  "initial-letter",
  "initial-letter-align",
  "inline-size",
  "inset",
  "inset-area",
  "inset-block",
  "inset-block-end",
  "inset-block-start",
  "inset-inline",
  "inset-inline-end",
  "inset-inline-start",
  "isolation",
  "justify-content",
  "justify-items",
  "justify-self",
  "kerning",
  "left",
  "letter-spacing",
  "lighting-color",
  "line-break",
  "line-height",
  "line-height-step",
  "list-style",
  "list-style-image",
  "list-style-position",
  "list-style-type",
  "margin",
  "margin-block",
  "margin-block-end",
  "margin-block-start",
  "margin-bottom",
  "margin-inline",
  "margin-inline-end",
  "margin-inline-start",
  "margin-left",
  "margin-right",
  "margin-top",
  "margin-trim",
  "marker",
  "marker-end",
  "marker-mid",
  "marker-start",
  "marks",
  "mask",
  "mask-border",
  "mask-border-mode",
  "mask-border-outset",
  "mask-border-repeat",
  "mask-border-slice",
  "mask-border-source",
  "mask-border-width",
  "mask-clip",
  "mask-composite",
  "mask-image",
  "mask-mode",
  "mask-origin",
  "mask-position",
  "mask-repeat",
  "mask-size",
  "mask-type",
  "masonry-auto-flow",
  "math-depth",
  "math-shift",
  "math-style",
  "max-block-size",
  "max-height",
  "max-inline-size",
  "max-width",
  "min-block-size",
  "min-height",
  "min-inline-size",
  "min-width",
  "mix-blend-mode",
  "nav-down",
  "nav-index",
  "nav-left",
  "nav-right",
  "nav-up",
  "none",
  "normal",
  "object-fit",
  "object-position",
  "offset",
  "offset-anchor",
  "offset-distance",
  "offset-path",
  "offset-position",
  "offset-rotate",
  "opacity",
  "order",
  "orphans",
  "outline",
  "outline-color",
  "outline-offset",
  "outline-style",
  "outline-width",
  "overflow",
  "overflow-anchor",
  "overflow-block",
  "overflow-clip-margin",
  "overflow-inline",
  "overflow-wrap",
  "overflow-x",
  "overflow-y",
  "overlay",
  "overscroll-behavior",
  "overscroll-behavior-block",
  "overscroll-behavior-inline",
  "overscroll-behavior-x",
  "overscroll-behavior-y",
  "padding",
  "padding-block",
  "padding-block-end",
  "padding-block-start",
  "padding-bottom",
  "padding-inline",
  "padding-inline-end",
  "padding-inline-start",
  "padding-left",
  "padding-right",
  "padding-top",
  "page",
  "page-break-after",
  "page-break-before",
  "page-break-inside",
  "paint-order",
  "pause",
  "pause-after",
  "pause-before",
  "perspective",
  "perspective-origin",
  "place-content",
  "place-items",
  "place-self",
  "pointer-events",
  "position",
  "position-anchor",
  "position-visibility",
  "print-color-adjust",
  "quotes",
  "r",
  "resize",
  "rest",
  "rest-after",
  "rest-before",
  "right",
  "rotate",
  "row-gap",
  "ruby-align",
  "ruby-position",
  "scale",
  "scroll-behavior",
  "scroll-margin",
  "scroll-margin-block",
  "scroll-margin-block-end",
  "scroll-margin-block-start",
  "scroll-margin-bottom",
  "scroll-margin-inline",
  "scroll-margin-inline-end",
  "scroll-margin-inline-start",
  "scroll-margin-left",
  "scroll-margin-right",
  "scroll-margin-top",
  "scroll-padding",
  "scroll-padding-block",
  "scroll-padding-block-end",
  "scroll-padding-block-start",
  "scroll-padding-bottom",
  "scroll-padding-inline",
  "scroll-padding-inline-end",
  "scroll-padding-inline-start",
  "scroll-padding-left",
  "scroll-padding-right",
  "scroll-padding-top",
  "scroll-snap-align",
  "scroll-snap-stop",
  "scroll-snap-type",
  "scroll-timeline",
  "scroll-timeline-axis",
  "scroll-timeline-name",
  "scrollbar-color",
  "scrollbar-gutter",
  "scrollbar-width",
  "shape-image-threshold",
  "shape-margin",
  "shape-outside",
  "shape-rendering",
  "speak",
  "speak-as",
  "src",
  // @font-face
  "stop-color",
  "stop-opacity",
  "stroke",
  "stroke-dasharray",
  "stroke-dashoffset",
  "stroke-linecap",
  "stroke-linejoin",
  "stroke-miterlimit",
  "stroke-opacity",
  "stroke-width",
  "tab-size",
  "table-layout",
  "text-align",
  "text-align-all",
  "text-align-last",
  "text-anchor",
  "text-combine-upright",
  "text-decoration",
  "text-decoration-color",
  "text-decoration-line",
  "text-decoration-skip",
  "text-decoration-skip-ink",
  "text-decoration-style",
  "text-decoration-thickness",
  "text-emphasis",
  "text-emphasis-color",
  "text-emphasis-position",
  "text-emphasis-style",
  "text-indent",
  "text-justify",
  "text-orientation",
  "text-overflow",
  "text-rendering",
  "text-shadow",
  "text-size-adjust",
  "text-transform",
  "text-underline-offset",
  "text-underline-position",
  "text-wrap",
  "text-wrap-mode",
  "text-wrap-style",
  "timeline-scope",
  "top",
  "touch-action",
  "transform",
  "transform-box",
  "transform-origin",
  "transform-style",
  "transition",
  "transition-behavior",
  "transition-delay",
  "transition-duration",
  "transition-property",
  "transition-timing-function",
  "translate",
  "unicode-bidi",
  "user-modify",
  "user-select",
  "vector-effect",
  "vertical-align",
  "view-timeline",
  "view-timeline-axis",
  "view-timeline-inset",
  "view-timeline-name",
  "view-transition-name",
  "visibility",
  "voice-balance",
  "voice-duration",
  "voice-family",
  "voice-pitch",
  "voice-range",
  "voice-rate",
  "voice-stress",
  "voice-volume",
  "white-space",
  "white-space-collapse",
  "widows",
  "width",
  "will-change",
  "word-break",
  "word-spacing",
  "word-wrap",
  "writing-mode",
  "x",
  "y",
  "z-index",
  "zoom"
].sort().reverse();
function el(e) {
  const t = e.regex, n = $o(e), r = { begin: /-(webkit|moz|ms|o)-(?=[a-z])/ }, i = "and or not only", s = /@-?\w[\w]*(-\w+)*/, l = "[a-zA-Z-][a-zA-Z0-9_-]*", a = [
    e.APOS_STRING_MODE,
    e.QUOTE_STRING_MODE
  ];
  return {
    name: "CSS",
    case_insensitive: !0,
    illegal: /[=|'\$]/,
    keywords: { keyframePosition: "from to" },
    classNameAliases: {
      // for visual continuity with `tag {}` and because we
      // don't have a great class for this?
      keyframePosition: "selector-tag"
    },
    contains: [
      n.BLOCK_COMMENT,
      r,
      // to recognize keyframe 40% etc which are outside the scope of our
      // attribute value mode
      n.CSS_NUMBER_MODE,
      {
        className: "selector-id",
        begin: /#[A-Za-z0-9_-]+/,
        relevance: 0
      },
      {
        className: "selector-class",
        begin: "\\." + l,
        relevance: 0
      },
      n.ATTRIBUTE_SELECTOR_MODE,
      {
        className: "selector-pseudo",
        variants: [
          { begin: ":(" + Vo.join("|") + ")" },
          { begin: ":(:)?(" + Jo.join("|") + ")" }
        ]
      },
      // we may actually need this (12/2020)
      // { // pseudo-selector params
      //   begin: /\(/,
      //   end: /\)/,
      //   contains: [ hljs.CSS_NUMBER_MODE ]
      // },
      n.CSS_VARIABLE,
      {
        className: "attribute",
        begin: "\\b(" + Qo.join("|") + ")\\b"
      },
      // attribute values
      {
        begin: /:/,
        end: /[;}{]/,
        contains: [
          n.BLOCK_COMMENT,
          n.HEXCOLOR,
          n.IMPORTANT,
          n.CSS_NUMBER_MODE,
          ...a,
          // needed to highlight these as strings and to avoid issues with
          // illegal characters that might be inside urls that would tigger the
          // languages illegal stack
          {
            begin: /(url|data-uri)\(/,
            end: /\)/,
            relevance: 0,
            // from keywords
            keywords: { built_in: "url data-uri" },
            contains: [
              ...a,
              {
                className: "string",
                // any character other than `)` as in `url()` will be the start
                // of a string, which ends with `)` (from the parent mode)
                begin: /[^)]/,
                endsWithParent: !0,
                excludeEnd: !0
              }
            ]
          },
          n.FUNCTION_DISPATCH
        ]
      },
      {
        begin: t.lookahead(/@/),
        end: "[{;]",
        relevance: 0,
        illegal: /:/,
        // break on Less variables @var: ...
        contains: [
          {
            className: "keyword",
            begin: s
          },
          {
            begin: /\s/,
            endsWithParent: !0,
            excludeEnd: !0,
            relevance: 0,
            keywords: {
              $pattern: /[a-z-]+/,
              keyword: i,
              attribute: Xo.join(" ")
            },
            contains: [
              {
                begin: /[a-z-]+(?=:)/,
                className: "attribute"
              },
              ...a,
              n.CSS_NUMBER_MODE
            ]
          }
        ]
      },
      {
        className: "selector-tag",
        begin: "\\b(" + Yo.join("|") + ")\\b"
      }
    ]
  };
}
function tl(e) {
  const t = e.regex, n = t.concat(/[\p{L}_]/u, t.optional(/[\p{L}0-9_.-]*:/u), /[\p{L}0-9_.-]*/u), r = /[\p{L}0-9._:-]+/u, i = {
    className: "symbol",
    begin: /&[a-z]+;|&#[0-9]+;|&#x[a-f0-9]+;/
  }, s = {
    begin: /\s/,
    contains: [
      {
        className: "keyword",
        begin: /#?[a-z_][a-z1-9_-]+/,
        illegal: /\n/
      }
    ]
  }, l = e.inherit(s, {
    begin: /\(/,
    end: /\)/
  }), a = e.inherit(e.APOS_STRING_MODE, { className: "string" }), c = e.inherit(e.QUOTE_STRING_MODE, { className: "string" }), u = {
    endsWithParent: !0,
    illegal: /</,
    relevance: 0,
    contains: [
      {
        className: "attr",
        begin: r,
        relevance: 0
      },
      {
        begin: /=\s*/,
        relevance: 0,
        contains: [
          {
            className: "string",
            endsParent: !0,
            variants: [
              {
                begin: /"/,
                end: /"/,
                contains: [i]
              },
              {
                begin: /'/,
                end: /'/,
                contains: [i]
              },
              { begin: /[^\s"'=<>`]+/ }
            ]
          }
        ]
      }
    ]
  };
  return {
    name: "HTML, XML",
    aliases: [
      "html",
      "xhtml",
      "rss",
      "atom",
      "xjb",
      "xsd",
      "xsl",
      "plist",
      "wsf",
      "svg"
    ],
    case_insensitive: !0,
    unicodeRegex: !0,
    contains: [
      {
        className: "meta",
        begin: /<![a-z]/,
        end: />/,
        relevance: 10,
        contains: [
          s,
          c,
          a,
          l,
          {
            begin: /\[/,
            end: /\]/,
            contains: [
              {
                className: "meta",
                begin: /<![a-z]/,
                end: />/,
                contains: [
                  s,
                  l,
                  c,
                  a
                ]
              }
            ]
          }
        ]
      },
      e.COMMENT(
        /<!--/,
        /-->/,
        { relevance: 10 }
      ),
      {
        begin: /<!\[CDATA\[/,
        end: /\]\]>/,
        relevance: 10
      },
      i,
      // xml processing instructions
      {
        className: "meta",
        end: /\?>/,
        variants: [
          {
            begin: /<\?xml/,
            relevance: 10,
            contains: [
              c
            ]
          },
          {
            begin: /<\?[a-z][a-z0-9]+/
          }
        ]
      },
      {
        className: "tag",
        /*
        The lookahead pattern (?=...) ensures that 'begin' only matches
        '<style' as a single word, followed by a whitespace or an
        ending bracket.
        */
        begin: /<style(?=\s|>)/,
        end: />/,
        keywords: { name: "style" },
        contains: [u],
        starts: {
          end: /<\/style>/,
          returnEnd: !0,
          subLanguage: [
            "css",
            "xml"
          ]
        }
      },
      {
        className: "tag",
        // See the comment in the <style tag about the lookahead pattern
        begin: /<script(?=\s|>)/,
        end: />/,
        keywords: { name: "script" },
        contains: [u],
        starts: {
          end: /<\/script>/,
          returnEnd: !0,
          subLanguage: [
            "javascript",
            "handlebars",
            "xml"
          ]
        }
      },
      // we need this for now for jSX
      {
        className: "tag",
        begin: /<>|<\/>/
      },
      // open tag
      {
        className: "tag",
        begin: t.concat(
          /</,
          t.lookahead(t.concat(
            n,
            // <tag/>
            // <tag>
            // <tag ...
            t.either(/\/>/, />/, /\s/)
          ))
        ),
        end: /\/?>/,
        contains: [
          {
            className: "name",
            begin: n,
            relevance: 0,
            starts: u
          }
        ]
      },
      // close tag
      {
        className: "tag",
        begin: t.concat(
          /<\//,
          t.lookahead(t.concat(
            n,
            />/
          ))
        ),
        contains: [
          {
            className: "name",
            begin: n,
            relevance: 0
          },
          {
            begin: />/,
            relevance: 0,
            endsParent: !0
          }
        ]
      }
    ]
  };
}
function nl(e) {
  const t = e.regex, n = {
    begin: /<\/?[A-Za-z_]/,
    end: ">",
    subLanguage: "xml",
    relevance: 0
  }, r = {
    begin: "^[-\\*]{3,}",
    end: "$"
  }, i = {
    className: "code",
    variants: [
      // TODO: fix to allow these to work with sublanguage also
      { begin: "(`{3,})[^`](.|\\n)*?\\1`*[ ]*" },
      { begin: "(~{3,})[^~](.|\\n)*?\\1~*[ ]*" },
      // needed to allow markdown as a sublanguage to work
      {
        begin: "```",
        end: "```+[ ]*$"
      },
      {
        begin: "~~~",
        end: "~~~+[ ]*$"
      },
      { begin: "`.+?`" },
      {
        begin: "(?=^( {4}|\\t))",
        // use contains to gobble up multiple lines to allow the block to be whatever size
        // but only have a single open/close tag vs one per line
        contains: [
          {
            begin: "^( {4}|\\t)",
            end: "(\\n)$"
          }
        ],
        relevance: 0
      }
    ]
  }, s = {
    className: "bullet",
    begin: "^[ 	]*([*+-]|(\\d+\\.))(?=\\s+)",
    end: "\\s+",
    excludeEnd: !0
  }, l = {
    begin: /^\[[^\n]+\]:/,
    returnBegin: !0,
    contains: [
      {
        className: "symbol",
        begin: /\[/,
        end: /\]/,
        excludeBegin: !0,
        excludeEnd: !0
      },
      {
        className: "link",
        begin: /:\s*/,
        end: /$/,
        excludeBegin: !0
      }
    ]
  }, a = /[A-Za-z][A-Za-z0-9+.-]*/, c = {
    variants: [
      // too much like nested array access in so many languages
      // to have any real relevance
      {
        begin: /\[.+?\]\[.*?\]/,
        relevance: 0
      },
      // popular internet URLs
      {
        begin: /\[.+?\]\(((data|javascript|mailto):|(?:http|ftp)s?:\/\/).*?\)/,
        relevance: 2
      },
      {
        begin: t.concat(/\[.+?\]\(/, a, /:\/\/.*?\)/),
        relevance: 2
      },
      // relative urls
      {
        begin: /\[.+?\]\([./?&#].*?\)/,
        relevance: 1
      },
      // whatever else, lower relevance (might not be a link at all)
      {
        begin: /\[.*?\]\(.*?\)/,
        relevance: 0
      }
    ],
    returnBegin: !0,
    contains: [
      {
        // empty strings for alt or link text
        match: /\[(?=\])/
      },
      {
        className: "string",
        relevance: 0,
        begin: "\\[",
        end: "\\]",
        excludeBegin: !0,
        returnEnd: !0
      },
      {
        className: "link",
        relevance: 0,
        begin: "\\]\\(",
        end: "\\)",
        excludeBegin: !0,
        excludeEnd: !0
      },
      {
        className: "symbol",
        relevance: 0,
        begin: "\\]\\[",
        end: "\\]",
        excludeBegin: !0,
        excludeEnd: !0
      }
    ]
  }, u = {
    className: "strong",
    contains: [],
    // defined later
    variants: [
      {
        begin: /_{2}(?!\s)/,
        end: /_{2}/
      },
      {
        begin: /\*{2}(?!\s)/,
        end: /\*{2}/
      }
    ]
  }, d = {
    className: "emphasis",
    contains: [],
    // defined later
    variants: [
      {
        begin: /\*(?![*\s])/,
        end: /\*/
      },
      {
        begin: /_(?![_\s])/,
        end: /_/,
        relevance: 0
      }
    ]
  }, h = e.inherit(u, { contains: [] }), f = e.inherit(d, { contains: [] });
  u.contains.push(f), d.contains.push(h);
  let _ = [
    n,
    c
  ];
  return [
    u,
    d,
    h,
    f
  ].forEach((T) => {
    T.contains = T.contains.concat(_);
  }), _ = _.concat(u, d), {
    name: "Markdown",
    aliases: [
      "md",
      "mkdown",
      "mkd"
    ],
    contains: [
      {
        className: "section",
        variants: [
          {
            begin: "^#{1,6}",
            end: "$",
            contains: _
          },
          {
            begin: "(?=^.+?\\n[=-]{2,}$)",
            contains: [
              { begin: "^[=-]*$" },
              {
                begin: "^",
                end: "\\n",
                contains: _
              }
            ]
          }
        ]
      },
      n,
      s,
      u,
      d,
      {
        className: "quote",
        begin: "^>\\s+",
        contains: _,
        end: "$"
      },
      i,
      r,
      c,
      l,
      {
        //https://spec.commonmark.org/0.31.2/#entity-references
        scope: "literal",
        match: /&([a-zA-Z0-9]+|#[0-9]{1,7}|#[Xx][0-9a-fA-F]{1,6});/
      }
    ]
  };
}
var rl = /* @__PURE__ */ pe('<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.9.0/styles/github-dark-dimmed.css"/>');
function il(e, t) {
  We(t, !0), wt.registerLanguage("css", el), wt.registerLanguage("html", tl), wt.registerLanguage("javascript", Ko), wt.registerLanguage("typescript", Zo), wt.registerLanguage("markdown", nl), Mo(wt);
  var n = Vn();
  $a("15f7o3t", (i) => {
    var s = rl();
    ae(i, s);
  });
  var r = Vt(n);
  Qn(r, () => t.children), ae(e, n), qe();
}
const sl = `import { createRawSnippet } from 'svelte'

createRawSnippet(() => ({
   render: () => ""
}))
`;
var al = /* @__PURE__ */ pe('<div id="hello-there" class="svelte-gyireq">Hello there</div>'), ol = /* @__PURE__ */ pe('<div id="code-editor" class="svelte-gyireq"><!></div> <div id="console" class="svelte-gyireq"><!></div> <template><ol><li>Show blank render string (illegal invocation)</li> <li>Show text render string (should be html)</li> <li>Show valid render string</li></ol></template>', 1);
function ll(e, t) {
  We(t, !0);
  let n = He(sl.trim()), r = /* @__PURE__ */ de(""), i = /* @__PURE__ */ jt(() => l.find((g) => s(
    g.trigger,
    // externalise function that compares and replaces spaces in both
    G(r)
  )));
  const s = (g, m) => g.replaceAll(" ", "") === m.replaceAll(" ", ""), l = [
    {
      trigger: 'render:()=>"<div></div>"',
      text: "Success!",
      color: "lightgreen"
    },
    {
      trigger: 'render:()=>""',
      text: "Illegal invocation in <unknown> in __wrapper.svelte",
      color: "lightcoral"
    },
    {
      trigger: 'render:()=>"a"',
      text: "[svelte] invalid_raw_snippet_render\nThe `render` function passed to `createRawSnippet` should return HTML for a single element\nhttps://svelte.dev/e/invalid_raw_snippet_render",
      color: "lightcoral"
    }
  ];
  xt(() => console.log(G(r)));
  var a = ol(), c = Vt(a), u = pt(c);
  Io(u, {
    get code() {
      return n;
    },
    rows: 5,
    language: "js",
    callback: (g, m) => ce(r, g[m] ?? "", !0),
    indentSize: 3
  });
  var d = Se(c, 2), h = pt(d);
  {
    var f = (g) => {
      var m = al();
      ae(g, m);
    }, _ = (g) => {
      Do(g, {
        get log() {
          return G(i);
        }
      });
    };
    Ei(h, (g) => {
      G(i)?.trigger === 'render:()=>"<div></div>"' ? g(f) : g(_, !1);
    });
  }
  ae(e, a), qe();
}
var cl = /* @__PURE__ */ pe("<template><ol><li>Pass param in</li> <li>Use arg in template literal</li> <li>Show arg is function</li> <li>Show arg is nonreactive</li></ol></template>");
function ul(e) {
  var t = cl();
  ae(e, t);
}
var fl = /* @__PURE__ */ pe("<template><ol>Show how to type params as generics</ol></template>");
function dl(e) {
  var t = fl();
  ae(e, t);
}
var gl = /* @__PURE__ */ pe("<template><ol><li>Show how param is topmost element in render</li> <li></li></ol></template>");
function hl(e) {
  var t = gl();
  ae(e, t);
}
var pl = /* @__PURE__ */ pe("<!> <!> <!> <!> <!> <!> <!> <!> <!>", 1);
function _l(e) {
  il(e, {
    children: (t, n) => {
      ho(t, {
        children: (r, i) => {
          var s = pl(), l = Vt(s), a = Se(l, 2);
          ll(a, {});
          var c = Se(a, 2);
          ul(c);
          var u = Se(c, 2);
          dl(u);
          var d = Se(u, 2);
          hl(d);
          var h = Se(d, 2), f = Se(h, 2), _ = Se(f, 2);
          Se(_, 2), ae(r, s);
        },
        $$slots: { default: !0 }
      });
    },
    $$slots: { default: !0 }
  });
}
const El = Ua(_l, {
  target: document.getElementById("app")
});
export {
  El as default
};
