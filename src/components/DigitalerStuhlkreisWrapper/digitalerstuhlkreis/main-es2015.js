(window.webpackJsonp = window.webpackJsonp || []).push([
  [1],
  {
    0: function (e, t, n) {
      e.exports = n("zUnb");
    },
    zUnb: function (e, t, n) {
      "use strict";
      function r(e) {
        return "function" == typeof e;
      }
      n.r(t);
      let s = !1;
      const i = {
        Promise: void 0,
        set useDeprecatedSynchronousErrorHandling(e) {
          if (e) {
            const e = new Error();
            console.warn(
              "DEPRECATED! RxJS was set to use deprecated synchronous error handling behavior by code at: \n" +
                e.stack
            );
          } else
            s &&
              console.log(
                "RxJS: Back to a better error behavior. Thank you. <3"
              );
          s = e;
        },
        get useDeprecatedSynchronousErrorHandling() {
          return s;
        },
      };
      function o(e) {
        setTimeout(() => {
          throw e;
        }, 0);
      }
      const a = {
          closed: !0,
          next(e) {},
          error(e) {
            if (i.useDeprecatedSynchronousErrorHandling) throw e;
            o(e);
          },
          complete() {},
        },
        l = (() =>
          Array.isArray || ((e) => e && "number" == typeof e.length))();
      function c(e) {
        return null !== e && "object" == typeof e;
      }
      const u = (() => {
        function e(e) {
          return (
            Error.call(this),
            (this.message = e
              ? `${e.length} errors occurred during unsubscription:\n${e
                  .map((e, t) => `${t + 1}) ${e.toString()}`)
                  .join("\n  ")}`
              : ""),
            (this.name = "UnsubscriptionError"),
            (this.errors = e),
            this
          );
        }
        return (e.prototype = Object.create(Error.prototype)), e;
      })();
      let h = (() => {
        class e {
          constructor(e) {
            (this.closed = !1),
              (this._parentOrParents = null),
              (this._subscriptions = null),
              e && ((this._ctorUnsubscribe = !0), (this._unsubscribe = e));
          }
          unsubscribe() {
            let t;
            if (this.closed) return;
            let {
              _parentOrParents: n,
              _ctorUnsubscribe: s,
              _unsubscribe: i,
              _subscriptions: o,
            } = this;
            if (
              ((this.closed = !0),
              (this._parentOrParents = null),
              (this._subscriptions = null),
              n instanceof e)
            )
              n.remove(this);
            else if (null !== n)
              for (let e = 0; e < n.length; ++e) n[e].remove(this);
            if (r(i)) {
              s && (this._unsubscribe = void 0);
              try {
                i.call(this);
              } catch (a) {
                t = a instanceof u ? d(a.errors) : [a];
              }
            }
            if (l(o)) {
              let e = -1,
                n = o.length;
              for (; ++e < n; ) {
                const n = o[e];
                if (c(n))
                  try {
                    n.unsubscribe();
                  } catch (a) {
                    (t = t || []),
                      a instanceof u ? (t = t.concat(d(a.errors))) : t.push(a);
                  }
              }
            }
            if (t) throw new u(t);
          }
          add(t) {
            let n = t;
            if (!t) return e.EMPTY;
            switch (typeof t) {
              case "function":
                n = new e(t);
              case "object":
                if (
                  n === this ||
                  n.closed ||
                  "function" != typeof n.unsubscribe
                )
                  return n;
                if (this.closed) return n.unsubscribe(), n;
                if (!(n instanceof e)) {
                  const t = n;
                  (n = new e()), (n._subscriptions = [t]);
                }
                break;
              default:
                throw new Error(
                  "unrecognized teardown " + t + " added to Subscription."
                );
            }
            let { _parentOrParents: r } = n;
            if (null === r) n._parentOrParents = this;
            else if (r instanceof e) {
              if (r === this) return n;
              n._parentOrParents = [r, this];
            } else {
              if (-1 !== r.indexOf(this)) return n;
              r.push(this);
            }
            const s = this._subscriptions;
            return null === s ? (this._subscriptions = [n]) : s.push(n), n;
          }
          remove(e) {
            const t = this._subscriptions;
            if (t) {
              const n = t.indexOf(e);
              -1 !== n && t.splice(n, 1);
            }
          }
        }
        return (
          (e.EMPTY = (function (e) {
            return (e.closed = !0), e;
          })(new e())),
          e
        );
      })();
      function d(e) {
        return e.reduce((e, t) => e.concat(t instanceof u ? t.errors : t), []);
      }
      const p = (() =>
        "function" == typeof Symbol
          ? Symbol("rxSubscriber")
          : "@@rxSubscriber_" + Math.random())();
      class f extends h {
        constructor(e, t, n) {
          switch (
            (super(),
            (this.syncErrorValue = null),
            (this.syncErrorThrown = !1),
            (this.syncErrorThrowable = !1),
            (this.isStopped = !1),
            arguments.length)
          ) {
            case 0:
              this.destination = a;
              break;
            case 1:
              if (!e) {
                this.destination = a;
                break;
              }
              if ("object" == typeof e) {
                e instanceof f
                  ? ((this.syncErrorThrowable = e.syncErrorThrowable),
                    (this.destination = e),
                    e.add(this))
                  : ((this.syncErrorThrowable = !0),
                    (this.destination = new m(this, e)));
                break;
              }
            default:
              (this.syncErrorThrowable = !0),
                (this.destination = new m(this, e, t, n));
          }
        }
        [p]() {
          return this;
        }
        static create(e, t, n) {
          const r = new f(e, t, n);
          return (r.syncErrorThrowable = !1), r;
        }
        next(e) {
          this.isStopped || this._next(e);
        }
        error(e) {
          this.isStopped || ((this.isStopped = !0), this._error(e));
        }
        complete() {
          this.isStopped || ((this.isStopped = !0), this._complete());
        }
        unsubscribe() {
          this.closed || ((this.isStopped = !0), super.unsubscribe());
        }
        _next(e) {
          this.destination.next(e);
        }
        _error(e) {
          this.destination.error(e), this.unsubscribe();
        }
        _complete() {
          this.destination.complete(), this.unsubscribe();
        }
        _unsubscribeAndRecycle() {
          const { _parentOrParents: e } = this;
          return (
            (this._parentOrParents = null),
            this.unsubscribe(),
            (this.closed = !1),
            (this.isStopped = !1),
            (this._parentOrParents = e),
            this
          );
        }
      }
      class m extends f {
        constructor(e, t, n, s) {
          let i;
          super(), (this._parentSubscriber = e);
          let o = this;
          r(t)
            ? (i = t)
            : t &&
              ((i = t.next),
              (n = t.error),
              (s = t.complete),
              t !== a &&
                ((o = Object.create(t)),
                r(o.unsubscribe) && this.add(o.unsubscribe.bind(o)),
                (o.unsubscribe = this.unsubscribe.bind(this)))),
            (this._context = o),
            (this._next = i),
            (this._error = n),
            (this._complete = s);
        }
        next(e) {
          if (!this.isStopped && this._next) {
            const { _parentSubscriber: t } = this;
            i.useDeprecatedSynchronousErrorHandling && t.syncErrorThrowable
              ? this.__tryOrSetError(t, this._next, e) && this.unsubscribe()
              : this.__tryOrUnsub(this._next, e);
          }
        }
        error(e) {
          if (!this.isStopped) {
            const { _parentSubscriber: t } = this,
              { useDeprecatedSynchronousErrorHandling: n } = i;
            if (this._error)
              n && t.syncErrorThrowable
                ? (this.__tryOrSetError(t, this._error, e), this.unsubscribe())
                : (this.__tryOrUnsub(this._error, e), this.unsubscribe());
            else if (t.syncErrorThrowable)
              n ? ((t.syncErrorValue = e), (t.syncErrorThrown = !0)) : o(e),
                this.unsubscribe();
            else {
              if ((this.unsubscribe(), n)) throw e;
              o(e);
            }
          }
        }
        complete() {
          if (!this.isStopped) {
            const { _parentSubscriber: e } = this;
            if (this._complete) {
              const t = () => this._complete.call(this._context);
              i.useDeprecatedSynchronousErrorHandling && e.syncErrorThrowable
                ? (this.__tryOrSetError(e, t), this.unsubscribe())
                : (this.__tryOrUnsub(t), this.unsubscribe());
            } else this.unsubscribe();
          }
        }
        __tryOrUnsub(e, t) {
          try {
            e.call(this._context, t);
          } catch (n) {
            if ((this.unsubscribe(), i.useDeprecatedSynchronousErrorHandling))
              throw n;
            o(n);
          }
        }
        __tryOrSetError(e, t, n) {
          if (!i.useDeprecatedSynchronousErrorHandling)
            throw new Error("bad call");
          try {
            t.call(this._context, n);
          } catch (r) {
            return i.useDeprecatedSynchronousErrorHandling
              ? ((e.syncErrorValue = r), (e.syncErrorThrown = !0), !0)
              : (o(r), !0);
          }
          return !1;
        }
        _unsubscribe() {
          const { _parentSubscriber: e } = this;
          (this._context = null),
            (this._parentSubscriber = null),
            e.unsubscribe();
        }
      }
      const g = (() =>
        ("function" == typeof Symbol && Symbol.observable) || "@@observable")();
      function y(e) {
        return e;
      }
      let v = (() => {
        class e {
          constructor(e) {
            (this._isScalar = !1), e && (this._subscribe = e);
          }
          lift(t) {
            const n = new e();
            return (n.source = this), (n.operator = t), n;
          }
          subscribe(e, t, n) {
            const { operator: r } = this,
              s = (function (e, t, n) {
                if (e) {
                  if (e instanceof f) return e;
                  if (e[p]) return e[p]();
                }
                return e || t || n ? new f(e, t, n) : new f(a);
              })(e, t, n);
            if (
              (s.add(
                r
                  ? r.call(s, this.source)
                  : this.source ||
                    (i.useDeprecatedSynchronousErrorHandling &&
                      !s.syncErrorThrowable)
                  ? this._subscribe(s)
                  : this._trySubscribe(s)
              ),
              i.useDeprecatedSynchronousErrorHandling &&
                s.syncErrorThrowable &&
                ((s.syncErrorThrowable = !1), s.syncErrorThrown))
            )
              throw s.syncErrorValue;
            return s;
          }
          _trySubscribe(e) {
            try {
              return this._subscribe(e);
            } catch (t) {
              i.useDeprecatedSynchronousErrorHandling &&
                ((e.syncErrorThrown = !0), (e.syncErrorValue = t)),
                (function (e) {
                  for (; e; ) {
                    const { closed: t, destination: n, isStopped: r } = e;
                    if (t || r) return !1;
                    e = n && n instanceof f ? n : null;
                  }
                  return !0;
                })(e)
                  ? e.error(t)
                  : console.warn(t);
            }
          }
          forEach(e, t) {
            return new (t = b(t))((t, n) => {
              let r;
              r = this.subscribe(
                (t) => {
                  try {
                    e(t);
                  } catch (s) {
                    n(s), r && r.unsubscribe();
                  }
                },
                n,
                t
              );
            });
          }
          _subscribe(e) {
            const { source: t } = this;
            return t && t.subscribe(e);
          }
          [g]() {
            return this;
          }
          pipe(...e) {
            return 0 === e.length
              ? this
              : (0 === (t = e).length
                  ? y
                  : 1 === t.length
                  ? t[0]
                  : function (e) {
                      return t.reduce((e, t) => t(e), e);
                    })(this);
            var t;
          }
          toPromise(e) {
            return new (e = b(e))((e, t) => {
              let n;
              this.subscribe(
                (e) => (n = e),
                (e) => t(e),
                () => e(n)
              );
            });
          }
        }
        return (e.create = (t) => new e(t)), e;
      })();
      function b(e) {
        if ((e || (e = i.Promise || Promise), !e))
          throw new Error("no Promise impl found");
        return e;
      }
      const _ = (() => {
        function e() {
          return (
            Error.call(this),
            (this.message = "object unsubscribed"),
            (this.name = "ObjectUnsubscribedError"),
            this
          );
        }
        return (e.prototype = Object.create(Error.prototype)), e;
      })();
      class w extends h {
        constructor(e, t) {
          super(),
            (this.subject = e),
            (this.subscriber = t),
            (this.closed = !1);
        }
        unsubscribe() {
          if (this.closed) return;
          this.closed = !0;
          const e = this.subject,
            t = e.observers;
          if (
            ((this.subject = null),
            !t || 0 === t.length || e.isStopped || e.closed)
          )
            return;
          const n = t.indexOf(this.subscriber);
          -1 !== n && t.splice(n, 1);
        }
      }
      class S extends f {
        constructor(e) {
          super(e), (this.destination = e);
        }
      }
      let C = (() => {
        class e extends v {
          constructor() {
            super(),
              (this.observers = []),
              (this.closed = !1),
              (this.isStopped = !1),
              (this.hasError = !1),
              (this.thrownError = null);
          }
          [p]() {
            return new S(this);
          }
          lift(e) {
            const t = new E(this, this);
            return (t.operator = e), t;
          }
          next(e) {
            if (this.closed) throw new _();
            if (!this.isStopped) {
              const { observers: t } = this,
                n = t.length,
                r = t.slice();
              for (let s = 0; s < n; s++) r[s].next(e);
            }
          }
          error(e) {
            if (this.closed) throw new _();
            (this.hasError = !0), (this.thrownError = e), (this.isStopped = !0);
            const { observers: t } = this,
              n = t.length,
              r = t.slice();
            for (let s = 0; s < n; s++) r[s].error(e);
            this.observers.length = 0;
          }
          complete() {
            if (this.closed) throw new _();
            this.isStopped = !0;
            const { observers: e } = this,
              t = e.length,
              n = e.slice();
            for (let r = 0; r < t; r++) n[r].complete();
            this.observers.length = 0;
          }
          unsubscribe() {
            (this.isStopped = !0), (this.closed = !0), (this.observers = null);
          }
          _trySubscribe(e) {
            if (this.closed) throw new _();
            return super._trySubscribe(e);
          }
          _subscribe(e) {
            if (this.closed) throw new _();
            return this.hasError
              ? (e.error(this.thrownError), h.EMPTY)
              : this.isStopped
              ? (e.complete(), h.EMPTY)
              : (this.observers.push(e), new w(this, e));
          }
          asObservable() {
            const e = new v();
            return (e.source = this), e;
          }
        }
        return (e.create = (e, t) => new E(e, t)), e;
      })();
      class E extends C {
        constructor(e, t) {
          super(), (this.destination = e), (this.source = t);
        }
        next(e) {
          const { destination: t } = this;
          t && t.next && t.next(e);
        }
        error(e) {
          const { destination: t } = this;
          t && t.error && this.destination.error(e);
        }
        complete() {
          const { destination: e } = this;
          e && e.complete && this.destination.complete();
        }
        _subscribe(e) {
          const { source: t } = this;
          return t ? this.source.subscribe(e) : h.EMPTY;
        }
      }
      function k(e) {
        return e && "function" == typeof e.schedule;
      }
      function x(e, t) {
        return function (n) {
          if ("function" != typeof e)
            throw new TypeError(
              "argument is not a function. Are you looking for `mapTo()`?"
            );
          return n.lift(new T(e, t));
        };
      }
      class T {
        constructor(e, t) {
          (this.project = e), (this.thisArg = t);
        }
        call(e, t) {
          return t.subscribe(new I(e, this.project, this.thisArg));
        }
      }
      class I extends f {
        constructor(e, t, n) {
          super(e),
            (this.project = t),
            (this.count = 0),
            (this.thisArg = n || this);
        }
        _next(e) {
          let t;
          try {
            t = this.project.call(this.thisArg, e, this.count++);
          } catch (n) {
            return void this.destination.error(n);
          }
          this.destination.next(t);
        }
      }
      const A = (e) => (t) => {
        for (let n = 0, r = e.length; n < r && !t.closed; n++) t.next(e[n]);
        t.complete();
      };
      function O() {
        return "function" == typeof Symbol && Symbol.iterator
          ? Symbol.iterator
          : "@@iterator";
      }
      const R = O(),
        P = (e) => e && "number" == typeof e.length && "function" != typeof e;
      function D(e) {
        return (
          !!e && "function" != typeof e.subscribe && "function" == typeof e.then
        );
      }
      const N = (e) => {
        if (e && "function" == typeof e[g])
          return (
            (r = e),
            (e) => {
              const t = r[g]();
              if ("function" != typeof t.subscribe)
                throw new TypeError(
                  "Provided object does not correctly implement Symbol.observable"
                );
              return t.subscribe(e);
            }
          );
        if (P(e)) return A(e);
        if (D(e))
          return (
            (n = e),
            (e) => (
              n
                .then(
                  (t) => {
                    e.closed || (e.next(t), e.complete());
                  },
                  (t) => e.error(t)
                )
                .then(null, o),
              e
            )
          );
        if (e && "function" == typeof e[R])
          return (
            (t = e),
            (e) => {
              const n = t[R]();
              for (;;) {
                let t;
                try {
                  t = n.next();
                } catch (r) {
                  return e.error(r), e;
                }
                if (t.done) {
                  e.complete();
                  break;
                }
                if ((e.next(t.value), e.closed)) break;
              }
              return (
                "function" == typeof n.return &&
                  e.add(() => {
                    n.return && n.return();
                  }),
                e
              );
            }
          );
        {
          const t = c(e) ? "an invalid object" : `'${e}'`;
          throw new TypeError(
            `You provided ${t} where a stream was expected. You can provide an Observable, Promise, Array, or Iterable.`
          );
        }
        var t, n, r;
      };
      function M(e, t) {
        return new v((n) => {
          const r = new h();
          let s = 0;
          return (
            r.add(
              t.schedule(function () {
                s !== e.length
                  ? (n.next(e[s++]), n.closed || r.add(this.schedule()))
                  : n.complete();
              })
            ),
            r
          );
        });
      }
      function F(e, t) {
        return t
          ? (function (e, t) {
              if (null != e) {
                if (
                  (function (e) {
                    return e && "function" == typeof e[g];
                  })(e)
                )
                  return (function (e, t) {
                    return new v((n) => {
                      const r = new h();
                      return (
                        r.add(
                          t.schedule(() => {
                            const s = e[g]();
                            r.add(
                              s.subscribe({
                                next(e) {
                                  r.add(t.schedule(() => n.next(e)));
                                },
                                error(e) {
                                  r.add(t.schedule(() => n.error(e)));
                                },
                                complete() {
                                  r.add(t.schedule(() => n.complete()));
                                },
                              })
                            );
                          })
                        ),
                        r
                      );
                    });
                  })(e, t);
                if (D(e))
                  return (function (e, t) {
                    return new v((n) => {
                      const r = new h();
                      return (
                        r.add(
                          t.schedule(() =>
                            e.then(
                              (e) => {
                                r.add(
                                  t.schedule(() => {
                                    n.next(e),
                                      r.add(t.schedule(() => n.complete()));
                                  })
                                );
                              },
                              (e) => {
                                r.add(t.schedule(() => n.error(e)));
                              }
                            )
                          )
                        ),
                        r
                      );
                    });
                  })(e, t);
                if (P(e)) return M(e, t);
                if (
                  (function (e) {
                    return e && "function" == typeof e[R];
                  })(e) ||
                  "string" == typeof e
                )
                  return (function (e, t) {
                    if (!e) throw new Error("Iterable cannot be null");
                    return new v((n) => {
                      const r = new h();
                      let s;
                      return (
                        r.add(() => {
                          s && "function" == typeof s.return && s.return();
                        }),
                        r.add(
                          t.schedule(() => {
                            (s = e[R]()),
                              r.add(
                                t.schedule(function () {
                                  if (n.closed) return;
                                  let e, t;
                                  try {
                                    const n = s.next();
                                    (e = n.value), (t = n.done);
                                  } catch (r) {
                                    return void n.error(r);
                                  }
                                  t
                                    ? n.complete()
                                    : (n.next(e), this.schedule());
                                })
                              );
                          })
                        ),
                        r
                      );
                    });
                  })(e, t);
              }
              throw new TypeError(
                ((null !== e && typeof e) || e) + " is not observable"
              );
            })(e, t)
          : e instanceof v
          ? e
          : new v(N(e));
      }
      class j extends f {
        constructor(e) {
          super(), (this.parent = e);
        }
        _next(e) {
          this.parent.notifyNext(e);
        }
        _error(e) {
          this.parent.notifyError(e), this.unsubscribe();
        }
        _complete() {
          this.parent.notifyComplete(), this.unsubscribe();
        }
      }
      class L extends f {
        notifyNext(e) {
          this.destination.next(e);
        }
        notifyError(e) {
          this.destination.error(e);
        }
        notifyComplete() {
          this.destination.complete();
        }
      }
      function W(e, t) {
        if (t.closed) return;
        if (e instanceof v) return e.subscribe(t);
        let n;
        try {
          n = N(e)(t);
        } catch (r) {
          t.error(r);
        }
        return n;
      }
      function z(e, t, n = Number.POSITIVE_INFINITY) {
        return "function" == typeof t
          ? (r) =>
              r.pipe(
                z((n, r) => F(e(n, r)).pipe(x((e, s) => t(n, e, r, s))), n)
              )
          : ("number" == typeof t && (n = t), (t) => t.lift(new q(e, n)));
      }
      class q {
        constructor(e, t = Number.POSITIVE_INFINITY) {
          (this.project = e), (this.concurrent = t);
        }
        call(e, t) {
          return t.subscribe(new H(e, this.project, this.concurrent));
        }
      }
      class H extends L {
        constructor(e, t, n = Number.POSITIVE_INFINITY) {
          super(e),
            (this.project = t),
            (this.concurrent = n),
            (this.hasCompleted = !1),
            (this.buffer = []),
            (this.active = 0),
            (this.index = 0);
        }
        _next(e) {
          this.active < this.concurrent
            ? this._tryNext(e)
            : this.buffer.push(e);
        }
        _tryNext(e) {
          let t;
          const n = this.index++;
          try {
            t = this.project(e, n);
          } catch (r) {
            return void this.destination.error(r);
          }
          this.active++, this._innerSub(t);
        }
        _innerSub(e) {
          const t = new j(this),
            n = this.destination;
          n.add(t);
          const r = W(e, t);
          r !== t && n.add(r);
        }
        _complete() {
          (this.hasCompleted = !0),
            0 === this.active &&
              0 === this.buffer.length &&
              this.destination.complete(),
            this.unsubscribe();
        }
        notifyNext(e) {
          this.destination.next(e);
        }
        notifyComplete() {
          const e = this.buffer;
          this.active--,
            e.length > 0
              ? this._next(e.shift())
              : 0 === this.active &&
                this.hasCompleted &&
                this.destination.complete();
        }
      }
      function U(e = Number.POSITIVE_INFINITY) {
        return z(y, e);
      }
      function V(e, t) {
        return t ? M(e, t) : new v(A(e));
      }
      function B(...e) {
        let t = Number.POSITIVE_INFINITY,
          n = null,
          r = e[e.length - 1];
        return (
          k(r)
            ? ((n = e.pop()),
              e.length > 1 &&
                "number" == typeof e[e.length - 1] &&
                (t = e.pop()))
            : "number" == typeof r && (t = e.pop()),
          null === n && 1 === e.length && e[0] instanceof v
            ? e[0]
            : U(t)(V(e, n))
        );
      }
      function $() {
        return function (e) {
          return e.lift(new Q(e));
        };
      }
      class Q {
        constructor(e) {
          this.connectable = e;
        }
        call(e, t) {
          const { connectable: n } = this;
          n._refCount++;
          const r = new G(e, n),
            s = t.subscribe(r);
          return r.closed || (r.connection = n.connect()), s;
        }
      }
      class G extends f {
        constructor(e, t) {
          super(e), (this.connectable = t);
        }
        _unsubscribe() {
          const { connectable: e } = this;
          if (!e) return void (this.connection = null);
          this.connectable = null;
          const t = e._refCount;
          if (t <= 0) return void (this.connection = null);
          if (((e._refCount = t - 1), t > 1))
            return void (this.connection = null);
          const { connection: n } = this,
            r = e._connection;
          (this.connection = null), !r || (n && r !== n) || r.unsubscribe();
        }
      }
      class K extends v {
        constructor(e, t) {
          super(),
            (this.source = e),
            (this.subjectFactory = t),
            (this._refCount = 0),
            (this._isComplete = !1);
        }
        _subscribe(e) {
          return this.getSubject().subscribe(e);
        }
        getSubject() {
          const e = this._subject;
          return (
            (e && !e.isStopped) || (this._subject = this.subjectFactory()),
            this._subject
          );
        }
        connect() {
          let e = this._connection;
          return (
            e ||
              ((this._isComplete = !1),
              (e = this._connection = new h()),
              e.add(this.source.subscribe(new J(this.getSubject(), this))),
              e.closed && ((this._connection = null), (e = h.EMPTY))),
            e
          );
        }
        refCount() {
          return $()(this);
        }
      }
      const Z = (() => {
        const e = K.prototype;
        return {
          operator: { value: null },
          _refCount: { value: 0, writable: !0 },
          _subject: { value: null, writable: !0 },
          _connection: { value: null, writable: !0 },
          _subscribe: { value: e._subscribe },
          _isComplete: { value: e._isComplete, writable: !0 },
          getSubject: { value: e.getSubject },
          connect: { value: e.connect },
          refCount: { value: e.refCount },
        };
      })();
      class J extends S {
        constructor(e, t) {
          super(e), (this.connectable = t);
        }
        _error(e) {
          this._unsubscribe(), super._error(e);
        }
        _complete() {
          (this.connectable._isComplete = !0),
            this._unsubscribe(),
            super._complete();
        }
        _unsubscribe() {
          const e = this.connectable;
          if (e) {
            this.connectable = null;
            const t = e._connection;
            (e._refCount = 0),
              (e._subject = null),
              (e._connection = null),
              t && t.unsubscribe();
          }
        }
      }
      function Y() {
        return new C();
      }
      function X(e) {
        for (let t in e) if (e[t] === X) return t;
        throw Error("Could not find renamed property on target object.");
      }
      function ee(e) {
        if ("string" == typeof e) return e;
        if (Array.isArray(e)) return "[" + e.map(ee).join(", ") + "]";
        if (null == e) return "" + e;
        if (e.overriddenName) return `${e.overriddenName}`;
        if (e.name) return `${e.name}`;
        const t = e.toString();
        if (null == t) return "" + t;
        const n = t.indexOf("\n");
        return -1 === n ? t : t.substring(0, n);
      }
      function te(e, t) {
        return null == e || "" === e
          ? null === t
            ? ""
            : t
          : null == t || "" === t
          ? e
          : e + " " + t;
      }
      const ne = X({ __forward_ref__: X });
      function re(e) {
        return (
          (e.__forward_ref__ = re),
          (e.toString = function () {
            return ee(this());
          }),
          e
        );
      }
      function se(e) {
        return "function" == typeof (t = e) &&
          t.hasOwnProperty(ne) &&
          t.__forward_ref__ === re
          ? e()
          : e;
        var t;
      }
      class ie extends Error {
        constructor(e, t) {
          super(
            (function (e, t) {
              return `${e ? `NG0${e}: ` : ""}${t}`;
            })(e, t)
          ),
            (this.code = e);
        }
      }
      function oe(e) {
        return "string" == typeof e ? e : null == e ? "" : String(e);
      }
      function ae(e) {
        return "function" == typeof e
          ? e.name || e.toString()
          : "object" == typeof e && null != e && "function" == typeof e.type
          ? e.type.name || e.type.toString()
          : oe(e);
      }
      function le(e, t) {
        const n = t ? ` in ${t}` : "";
        throw new ie("201", `No provider for ${ae(e)} found${n}`);
      }
      function ce(e) {
        return {
          token: e.token,
          providedIn: e.providedIn || null,
          factory: e.factory,
          value: void 0,
        };
      }
      function ue(e) {
        return { providers: e.providers || [], imports: e.imports || [] };
      }
      function he(e) {
        return de(e, fe) || de(e, ge);
      }
      function de(e, t) {
        return e.hasOwnProperty(t) ? e[t] : null;
      }
      function pe(e) {
        return e && (e.hasOwnProperty(me) || e.hasOwnProperty(ye))
          ? e[me]
          : null;
      }
      const fe = X({ "\u0275prov": X }),
        me = X({ "\u0275inj": X }),
        ge = X({ ngInjectableDef: X }),
        ye = X({ ngInjectorDef: X });
      var ve = (function (e) {
        return (
          (e[(e.Default = 0)] = "Default"),
          (e[(e.Host = 1)] = "Host"),
          (e[(e.Self = 2)] = "Self"),
          (e[(e.SkipSelf = 4)] = "SkipSelf"),
          (e[(e.Optional = 8)] = "Optional"),
          e
        );
      })({});
      let be;
      function _e(e) {
        const t = be;
        return (be = e), t;
      }
      function we(e, t, n) {
        const r = he(e);
        return r && "root" == r.providedIn
          ? void 0 === r.value
            ? (r.value = r.factory())
            : r.value
          : n & ve.Optional
          ? null
          : void 0 !== t
          ? t
          : void le(ee(e), "Injector");
      }
      function Se(e) {
        return { toString: e }.toString();
      }
      var Ce = (function (e) {
          return (
            (e[(e.OnPush = 0)] = "OnPush"), (e[(e.Default = 1)] = "Default"), e
          );
        })({}),
        Ee = (function (e) {
          return (
            (e[(e.Emulated = 0)] = "Emulated"),
            (e[(e.None = 2)] = "None"),
            (e[(e.ShadowDom = 3)] = "ShadowDom"),
            e
          );
        })({});
      const ke = "undefined" != typeof globalThis && globalThis,
        xe = "undefined" != typeof window && window,
        Te =
          "undefined" != typeof self &&
          "undefined" != typeof WorkerGlobalScope &&
          self instanceof WorkerGlobalScope &&
          self,
        Ie = "undefined" != typeof global && global,
        Ae = ke || Ie || xe || Te,
        Oe = {},
        Re = [],
        Pe = [],
        De = X({ "\u0275cmp": X }),
        Ne = X({ "\u0275dir": X }),
        Me = X({ "\u0275pipe": X }),
        Fe = X({ "\u0275mod": X }),
        je = X({ "\u0275loc": X }),
        Le = X({ "\u0275fac": X }),
        We = X({ __NG_ELEMENT_ID__: X });
      let ze = 0;
      function qe(e) {
        return Se(() => {
          const t = {},
            n = {
              type: e.type,
              providersResolver: null,
              decls: e.decls,
              vars: e.vars,
              factory: null,
              template: e.template || null,
              consts: e.consts || null,
              ngContentSelectors: e.ngContentSelectors,
              hostBindings: e.hostBindings || null,
              hostVars: e.hostVars || 0,
              hostAttrs: e.hostAttrs || null,
              contentQueries: e.contentQueries || null,
              declaredInputs: t,
              inputs: null,
              outputs: null,
              exportAs: e.exportAs || null,
              onPush: e.changeDetection === Ce.OnPush,
              directiveDefs: null,
              pipeDefs: null,
              selectors: e.selectors || Pe,
              viewQuery: e.viewQuery || null,
              features: e.features || null,
              data: e.data || {},
              encapsulation: e.encapsulation || Ee.Emulated,
              id: "c",
              styles: e.styles || Pe,
              _: null,
              setInput: null,
              schemas: e.schemas || null,
              tView: null,
            },
            r = e.directives,
            s = e.features,
            i = e.pipes;
          return (
            (n.id += ze++),
            (n.inputs = $e(e.inputs, t)),
            (n.outputs = $e(e.outputs)),
            s && s.forEach((e) => e(n)),
            (n.directiveDefs = r
              ? () => ("function" == typeof r ? r() : r).map(He)
              : null),
            (n.pipeDefs = i
              ? () => ("function" == typeof i ? i() : i).map(Ue)
              : null),
            n
          );
        });
      }
      function He(e) {
        return (
          Ge(e) ||
          (function (e) {
            return e[Ne] || null;
          })(e)
        );
      }
      function Ue(e) {
        return (function (e) {
          return e[Me] || null;
        })(e);
      }
      const Ve = {};
      function Be(e) {
        const t = {
          type: e.type,
          bootstrap: e.bootstrap || Pe,
          declarations: e.declarations || Pe,
          imports: e.imports || Pe,
          exports: e.exports || Pe,
          transitiveCompileScopes: null,
          schemas: e.schemas || null,
          id: e.id || null,
        };
        return (
          null != e.id &&
            Se(() => {
              Ve[e.id] = e.type;
            }),
          t
        );
      }
      function $e(e, t) {
        if (null == e) return Oe;
        const n = {};
        for (const r in e)
          if (e.hasOwnProperty(r)) {
            let s = e[r],
              i = s;
            Array.isArray(s) && ((i = s[1]), (s = s[0])),
              (n[s] = r),
              t && (t[s] = i);
          }
        return n;
      }
      const Qe = qe;
      function Ge(e) {
        return e[De] || null;
      }
      function Ke(e, t) {
        const n = e[Fe] || null;
        if (!n && !0 === t)
          throw new Error(`Type ${ee(e)} does not have '\u0275mod' property.`);
        return n;
      }
      function Ze(e) {
        return Array.isArray(e) && "object" == typeof e[1];
      }
      function Je(e) {
        return Array.isArray(e) && !0 === e[1];
      }
      function Ye(e) {
        return 0 != (8 & e.flags);
      }
      function Xe(e) {
        return 2 == (2 & e.flags);
      }
      function et(e) {
        return 1 == (1 & e.flags);
      }
      function tt(e) {
        return null !== e.template;
      }
      function nt(e, t) {
        return e.hasOwnProperty(Le) ? e[Le] : null;
      }
      class rt {
        constructor(e, t, n) {
          (this.previousValue = e),
            (this.currentValue = t),
            (this.firstChange = n);
        }
        isFirstChange() {
          return this.firstChange;
        }
      }
      function st() {
        return it;
      }
      function it(e) {
        return e.type.prototype.ngOnChanges && (e.setInput = at), ot;
      }
      function ot() {
        const e = lt(this),
          t = null == e ? void 0 : e.current;
        if (t) {
          const n = e.previous;
          if (n === Oe) e.previous = t;
          else for (let e in t) n[e] = t[e];
          (e.current = null), this.ngOnChanges(t);
        }
      }
      function at(e, t, n, r) {
        const s =
            lt(e) ||
            (function (e, t) {
              return (e.__ngSimpleChanges__ = t);
            })(e, { previous: Oe, current: null }),
          i = s.current || (s.current = {}),
          o = s.previous,
          a = this.declaredInputs[n],
          l = o[a];
        (i[a] = new rt(l && l.currentValue, t, o === Oe)), (e[r] = t);
      }
      function lt(e) {
        return e.__ngSimpleChanges__ || null;
      }
      let ct;
      function ut(e) {
        return !!e.listen;
      }
      st.ngInherit = !0;
      const ht = {
        createRenderer: (e, t) =>
          void 0 !== ct
            ? ct
            : "undefined" != typeof document
            ? document
            : void 0,
      };
      function dt(e) {
        for (; Array.isArray(e); ) e = e[0];
        return e;
      }
      function pt(e, t) {
        return dt(t[e]);
      }
      function ft(e, t) {
        return dt(t[e.index]);
      }
      function mt(e, t) {
        return e.data[t];
      }
      function gt(e, t) {
        const n = t[e];
        return Ze(n) ? n : n[0];
      }
      function yt(e) {
        const t = (function (e) {
          return e.__ngContext__ || null;
        })(e);
        return t ? (Array.isArray(t) ? t : t.lView) : null;
      }
      function vt(e) {
        return 4 == (4 & e[2]);
      }
      function bt(e) {
        return 128 == (128 & e[2]);
      }
      function _t(e, t) {
        return null == t ? null : e[t];
      }
      function wt(e) {
        e[18] = 0;
      }
      function St(e, t) {
        e[5] += t;
        let n = e,
          r = e[3];
        for (
          ;
          null !== r && ((1 === t && 1 === n[5]) || (-1 === t && 0 === n[5]));

        )
          (r[5] += t), (n = r), (r = r[3]);
      }
      const Ct = {
        lFrame: Bt(null),
        bindingsEnabled: !0,
        isInCheckNoChangesMode: !1,
      };
      function Et() {
        return Ct.bindingsEnabled;
      }
      function kt() {
        return Ct.lFrame.lView;
      }
      function xt() {
        return Ct.lFrame.tView;
      }
      function Tt(e) {
        Ct.lFrame.contextLView = e;
      }
      function It() {
        let e = At();
        for (; null !== e && 64 === e.type; ) e = e.parent;
        return e;
      }
      function At() {
        return Ct.lFrame.currentTNode;
      }
      function Ot(e, t) {
        const n = Ct.lFrame;
        (n.currentTNode = e), (n.isParent = t);
      }
      function Rt() {
        return Ct.lFrame.isParent;
      }
      function Pt() {
        Ct.lFrame.isParent = !1;
      }
      function Dt() {
        return Ct.isInCheckNoChangesMode;
      }
      function Nt(e) {
        Ct.isInCheckNoChangesMode = e;
      }
      function Mt() {
        const e = Ct.lFrame;
        let t = e.bindingRootIndex;
        return (
          -1 === t && (t = e.bindingRootIndex = e.tView.bindingStartIndex), t
        );
      }
      function Ft() {
        return Ct.lFrame.bindingIndex++;
      }
      function jt(e, t) {
        const n = Ct.lFrame;
        (n.bindingIndex = n.bindingRootIndex = e), Lt(t);
      }
      function Lt(e) {
        Ct.lFrame.currentDirectiveIndex = e;
      }
      function Wt() {
        return Ct.lFrame.currentQueryIndex;
      }
      function zt(e) {
        Ct.lFrame.currentQueryIndex = e;
      }
      function qt(e) {
        const t = e[1];
        return 2 === t.type ? t.declTNode : 1 === t.type ? e[6] : null;
      }
      function Ht(e, t, n) {
        if (n & ve.SkipSelf) {
          let r = t,
            s = e;
          for (
            ;
            (r = r.parent),
              !(
                null !== r ||
                n & ve.Host ||
                ((r = qt(s)), null === r) ||
                ((s = s[15]), 10 & r.type)
              );

          );
          if (null === r) return !1;
          (t = r), (e = s);
        }
        const r = (Ct.lFrame = Vt());
        return (r.currentTNode = t), (r.lView = e), !0;
      }
      function Ut(e) {
        const t = Vt(),
          n = e[1];
        (Ct.lFrame = t),
          (t.currentTNode = n.firstChild),
          (t.lView = e),
          (t.tView = n),
          (t.contextLView = e),
          (t.bindingIndex = n.bindingStartIndex),
          (t.inI18n = !1);
      }
      function Vt() {
        const e = Ct.lFrame,
          t = null === e ? null : e.child;
        return null === t ? Bt(e) : t;
      }
      function Bt(e) {
        const t = {
          currentTNode: null,
          isParent: !0,
          lView: null,
          tView: null,
          selectedIndex: -1,
          contextLView: null,
          elementDepthCount: 0,
          currentNamespace: null,
          currentDirectiveIndex: -1,
          bindingRootIndex: -1,
          bindingIndex: -1,
          currentQueryIndex: 0,
          parent: e,
          child: null,
          inI18n: !1,
        };
        return null !== e && (e.child = t), t;
      }
      function $t() {
        const e = Ct.lFrame;
        return (
          (Ct.lFrame = e.parent), (e.currentTNode = null), (e.lView = null), e
        );
      }
      const Qt = $t;
      function Gt() {
        const e = $t();
        (e.isParent = !0),
          (e.tView = null),
          (e.selectedIndex = -1),
          (e.contextLView = null),
          (e.elementDepthCount = 0),
          (e.currentDirectiveIndex = -1),
          (e.currentNamespace = null),
          (e.bindingRootIndex = -1),
          (e.bindingIndex = -1),
          (e.currentQueryIndex = 0);
      }
      function Kt() {
        return Ct.lFrame.selectedIndex;
      }
      function Zt(e) {
        Ct.lFrame.selectedIndex = e;
      }
      function Jt() {
        const e = Ct.lFrame;
        return mt(e.tView, e.selectedIndex);
      }
      function Yt(e, t) {
        for (let n = t.directiveStart, r = t.directiveEnd; n < r; n++) {
          const t = e.data[n].type.prototype,
            {
              ngAfterContentInit: r,
              ngAfterContentChecked: s,
              ngAfterViewInit: i,
              ngAfterViewChecked: o,
              ngOnDestroy: a,
            } = t;
          r && (e.contentHooks || (e.contentHooks = [])).push(-n, r),
            s &&
              ((e.contentHooks || (e.contentHooks = [])).push(n, s),
              (e.contentCheckHooks || (e.contentCheckHooks = [])).push(n, s)),
            i && (e.viewHooks || (e.viewHooks = [])).push(-n, i),
            o &&
              ((e.viewHooks || (e.viewHooks = [])).push(n, o),
              (e.viewCheckHooks || (e.viewCheckHooks = [])).push(n, o)),
            null != a && (e.destroyHooks || (e.destroyHooks = [])).push(n, a);
        }
      }
      function Xt(e, t, n) {
        nn(e, t, 3, n);
      }
      function en(e, t, n, r) {
        (3 & e[2]) === n && nn(e, t, n, r);
      }
      function tn(e, t) {
        let n = e[2];
        (3 & n) === t && ((n &= 2047), (n += 1), (e[2] = n));
      }
      function nn(e, t, n, r) {
        const s = null != r ? r : -1,
          i = t.length - 1;
        let o = 0;
        for (let a = void 0 !== r ? 65535 & e[18] : 0; a < i; a++)
          if ("number" == typeof t[a + 1]) {
            if (((o = t[a]), null != r && o >= r)) break;
          } else
            t[a] < 0 && (e[18] += 65536),
              (o < s || -1 == s) &&
                (rn(e, n, t, a), (e[18] = (4294901760 & e[18]) + a + 2)),
              a++;
      }
      function rn(e, t, n, r) {
        const s = n[r] < 0,
          i = n[r + 1],
          o = e[s ? -n[r] : n[r]];
        if (s) {
          if (e[2] >> 11 < e[18] >> 16 && (3 & e[2]) === t) {
            e[2] += 2048;
            try {
              i.call(o);
            } finally {
            }
          }
        } else
          try {
            i.call(o);
          } finally {
          }
      }
      class sn {
        constructor(e, t, n) {
          (this.factory = e),
            (this.resolving = !1),
            (this.canSeeViewProviders = t),
            (this.injectImpl = n);
        }
      }
      function on(e, t, n) {
        const r = ut(e);
        let s = 0;
        for (; s < n.length; ) {
          const i = n[s];
          if ("number" == typeof i) {
            if (0 !== i) break;
            s++;
            const o = n[s++],
              a = n[s++],
              l = n[s++];
            r ? e.setAttribute(t, a, l, o) : t.setAttributeNS(o, a, l);
          } else {
            const o = i,
              a = n[++s];
            ln(o)
              ? r && e.setProperty(t, o, a)
              : r
              ? e.setAttribute(t, o, a)
              : t.setAttribute(o, a),
              s++;
          }
        }
        return s;
      }
      function an(e) {
        return 3 === e || 4 === e || 6 === e;
      }
      function ln(e) {
        return 64 === e.charCodeAt(0);
      }
      function cn(e, t) {
        if (null === t || 0 === t.length);
        else if (null === e || 0 === e.length) e = t.slice();
        else {
          let n = -1;
          for (let r = 0; r < t.length; r++) {
            const s = t[r];
            "number" == typeof s
              ? (n = s)
              : 0 === n ||
                un(e, n, s, null, -1 === n || 2 === n ? t[++r] : null);
          }
        }
        return e;
      }
      function un(e, t, n, r, s) {
        let i = 0,
          o = e.length;
        if (-1 === t) o = -1;
        else
          for (; i < e.length; ) {
            const n = e[i++];
            if ("number" == typeof n) {
              if (n === t) {
                o = -1;
                break;
              }
              if (n > t) {
                o = i - 1;
                break;
              }
            }
          }
        for (; i < e.length; ) {
          const t = e[i];
          if ("number" == typeof t) break;
          if (t === n) {
            if (null === r) return void (null !== s && (e[i + 1] = s));
            if (r === e[i + 1]) return void (e[i + 2] = s);
          }
          i++, null !== r && i++, null !== s && i++;
        }
        -1 !== o && (e.splice(o, 0, t), (i = o + 1)),
          e.splice(i++, 0, n),
          null !== r && e.splice(i++, 0, r),
          null !== s && e.splice(i++, 0, s);
      }
      function hn(e) {
        return -1 !== e;
      }
      function dn(e) {
        return 32767 & e;
      }
      function pn(e, t) {
        let n = e >> 16,
          r = t;
        for (; n > 0; ) (r = r[15]), n--;
        return r;
      }
      let fn = !0;
      function mn(e) {
        const t = fn;
        return (fn = e), t;
      }
      let gn = 0;
      function yn(e, t) {
        const n = bn(e, t);
        if (-1 !== n) return n;
        const r = t[1];
        r.firstCreatePass &&
          ((e.injectorIndex = t.length),
          vn(r.data, e),
          vn(t, null),
          vn(r.blueprint, null));
        const s = _n(e, t),
          i = e.injectorIndex;
        if (hn(s)) {
          const e = dn(s),
            n = pn(s, t),
            r = n[1].data;
          for (let s = 0; s < 8; s++) t[i + s] = n[e + s] | r[e + s];
        }
        return (t[i + 8] = s), i;
      }
      function vn(e, t) {
        e.push(0, 0, 0, 0, 0, 0, 0, 0, t);
      }
      function bn(e, t) {
        return -1 === e.injectorIndex ||
          (e.parent && e.parent.injectorIndex === e.injectorIndex) ||
          null === t[e.injectorIndex + 8]
          ? -1
          : e.injectorIndex;
      }
      function _n(e, t) {
        if (e.parent && -1 !== e.parent.injectorIndex)
          return e.parent.injectorIndex;
        let n = 0,
          r = null,
          s = t;
        for (; null !== s; ) {
          const e = s[1],
            t = e.type;
          if (((r = 2 === t ? e.declTNode : 1 === t ? s[6] : null), null === r))
            return -1;
          if ((n++, (s = s[15]), -1 !== r.injectorIndex))
            return r.injectorIndex | (n << 16);
        }
        return -1;
      }
      function wn(e, t, n) {
        !(function (e, t, n) {
          let r;
          "string" == typeof n
            ? (r = n.charCodeAt(0) || 0)
            : n.hasOwnProperty(We) && (r = n[We]),
            null == r && (r = n[We] = gn++);
          const s = 255 & r;
          t.data[e + (s >> 5)] |= 1 << s;
        })(e, t, n);
      }
      function Sn(e, t, n) {
        if (n & ve.Optional) return e;
        le(t, "NodeInjector");
      }
      function Cn(e, t, n, r) {
        if (
          (n & ve.Optional && void 0 === r && (r = null),
          0 == (n & (ve.Self | ve.Host)))
        ) {
          const s = e[9],
            i = _e(void 0);
          try {
            return s ? s.get(t, r, n & ve.Optional) : we(t, r, n & ve.Optional);
          } finally {
            _e(i);
          }
        }
        return Sn(r, t, n);
      }
      function En(e, t, n, r = ve.Default, s) {
        if (null !== e) {
          const i = (function (e) {
            if ("string" == typeof e) return e.charCodeAt(0) || 0;
            const t = e.hasOwnProperty(We) ? e[We] : void 0;
            return "number" == typeof t ? (t >= 0 ? 255 & t : xn) : t;
          })(n);
          if ("function" == typeof i) {
            if (!Ht(t, e, r)) return r & ve.Host ? Sn(s, n, r) : Cn(t, n, r, s);
            try {
              const e = i();
              if (null != e || r & ve.Optional) return e;
              le(n);
            } finally {
              Qt();
            }
          } else if ("number" == typeof i) {
            let s = null,
              o = bn(e, t),
              a = -1,
              l = r & ve.Host ? t[16][6] : null;
            for (
              (-1 === o || r & ve.SkipSelf) &&
              ((a = -1 === o ? _n(e, t) : t[o + 8]),
              -1 !== a && Rn(r, !1)
                ? ((s = t[1]), (o = dn(a)), (t = pn(a, t)))
                : (o = -1));
              -1 !== o;

            ) {
              const e = t[1];
              if (On(i, o, e.data)) {
                const e = Tn(o, t, n, s, r, l);
                if (e !== kn) return e;
              }
              (a = t[o + 8]),
                -1 !== a && Rn(r, t[1].data[o + 8] === l) && On(i, o, t)
                  ? ((s = e), (o = dn(a)), (t = pn(a, t)))
                  : (o = -1);
            }
          }
        }
        return Cn(t, n, r, s);
      }
      const kn = {};
      function xn() {
        return new Pn(It(), kt());
      }
      function Tn(e, t, n, r, s, i) {
        const o = t[1],
          a = o.data[e + 8],
          l = In(
            a,
            o,
            n,
            null == r ? Xe(a) && fn : r != o && 0 != (3 & a.type),
            s & ve.Host && i === a
          );
        return null !== l ? An(t, o, l, a) : kn;
      }
      function In(e, t, n, r, s) {
        const i = e.providerIndexes,
          o = t.data,
          a = 1048575 & i,
          l = e.directiveStart,
          c = i >> 20,
          u = s ? a + c : e.directiveEnd;
        for (let h = r ? a : a + c; h < u; h++) {
          const e = o[h];
          if ((h < l && n === e) || (h >= l && e.type === n)) return h;
        }
        if (s) {
          const e = o[l];
          if (e && tt(e) && e.type === n) return l;
        }
        return null;
      }
      function An(e, t, n, r) {
        let s = e[n];
        const i = t.data;
        if (s instanceof sn) {
          const o = s;
          o.resolving &&
            (function (e, t) {
              throw new ie(
                "200",
                `Circular dependency in DI detected for ${e}`
              );
            })(ae(i[n]));
          const a = mn(o.canSeeViewProviders);
          o.resolving = !0;
          const l = o.injectImpl ? _e(o.injectImpl) : null;
          Ht(e, r, ve.Default);
          try {
            (s = e[n] = o.factory(void 0, i, e, r)),
              t.firstCreatePass &&
                n >= r.directiveStart &&
                (function (e, t, n) {
                  const {
                    ngOnChanges: r,
                    ngOnInit: s,
                    ngDoCheck: i,
                  } = t.type.prototype;
                  if (r) {
                    const r = it(t);
                    (n.preOrderHooks || (n.preOrderHooks = [])).push(e, r),
                      (
                        n.preOrderCheckHooks || (n.preOrderCheckHooks = [])
                      ).push(e, r);
                  }
                  s &&
                    (n.preOrderHooks || (n.preOrderHooks = [])).push(0 - e, s),
                    i &&
                      ((n.preOrderHooks || (n.preOrderHooks = [])).push(e, i),
                      (
                        n.preOrderCheckHooks || (n.preOrderCheckHooks = [])
                      ).push(e, i));
                })(n, i[n], t);
          } finally {
            null !== l && _e(l), mn(a), (o.resolving = !1), Qt();
          }
        }
        return s;
      }
      function On(e, t, n) {
        return !!(n[t + (e >> 5)] & (1 << e));
      }
      function Rn(e, t) {
        return !(e & ve.Self || (e & ve.Host && t));
      }
      class Pn {
        constructor(e, t) {
          (this._tNode = e), (this._lView = t);
        }
        get(e, t) {
          return En(this._tNode, this._lView, e, void 0, t);
        }
      }
      function Dn(e) {
        return (function (e, t) {
          if ("class" === t) return e.classes;
          if ("style" === t) return e.styles;
          const n = e.attrs;
          if (n) {
            const e = n.length;
            let r = 0;
            for (; r < e; ) {
              const s = n[r];
              if (an(s)) break;
              if (0 === s) r += 2;
              else if ("number" == typeof s)
                for (r++; r < e && "string" == typeof n[r]; ) r++;
              else {
                if (s === t) return n[r + 1];
                r += 2;
              }
            }
          }
          return null;
        })(It(), e);
      }
      function Nn(e, t, n) {
        return Se(() => {
          const r = (function (e) {
            return function (...t) {
              if (e) {
                const n = e(...t);
                for (const e in n) this[e] = n[e];
              }
            };
          })(t);
          function s(...e) {
            if (this instanceof s) return r.apply(this, e), this;
            const t = new s(...e);
            return (n.annotation = t), n;
            function n(e, n, r) {
              const s = e.hasOwnProperty("__parameters__")
                ? e.__parameters__
                : Object.defineProperty(e, "__parameters__", { value: [] })
                    .__parameters__;
              for (; s.length <= r; ) s.push(null);
              return (s[r] = s[r] || []).push(t), e;
            }
          }
          return (
            n && (s.prototype = Object.create(n.prototype)),
            (s.prototype.ngMetadataName = e),
            (s.annotationCls = s),
            s
          );
        });
      }
      class Mn {
        constructor(e, t) {
          (this._desc = e),
            (this.ngMetadataName = "InjectionToken"),
            (this.ɵprov = void 0),
            "number" == typeof t
              ? (this.__NG_ELEMENT_ID__ = t)
              : void 0 !== t &&
                (this.ɵprov = ce({
                  token: this,
                  providedIn: t.providedIn || "root",
                  factory: t.factory,
                }));
        }
        toString() {
          return `InjectionToken ${this._desc}`;
        }
      }
      const Fn = new Mn("AnalyzeForEntryComponents"),
        jn = Function;
      function Ln(e, t) {
        void 0 === t && (t = e);
        for (let n = 0; n < e.length; n++) {
          let r = e[n];
          Array.isArray(r)
            ? (t === e && (t = e.slice(0, n)), Ln(r, t))
            : t !== e && t.push(r);
        }
        return t;
      }
      function Wn(e, t) {
        e.forEach((e) => (Array.isArray(e) ? Wn(e, t) : t(e)));
      }
      function zn(e, t, n) {
        t >= e.length ? e.push(n) : e.splice(t, 0, n);
      }
      function qn(e, t) {
        return t >= e.length - 1 ? e.pop() : e.splice(t, 1)[0];
      }
      function Hn(e, t) {
        const n = [];
        for (let r = 0; r < e; r++) n.push(t);
        return n;
      }
      function Un(e, t, n) {
        let r = Bn(e, t);
        return (
          r >= 0
            ? (e[1 | r] = n)
            : ((r = ~r),
              (function (e, t, n, r) {
                let s = e.length;
                if (s == t) e.push(n, r);
                else if (1 === s) e.push(r, e[0]), (e[0] = n);
                else {
                  for (s--, e.push(e[s - 1], e[s]); s > t; )
                    (e[s] = e[s - 2]), s--;
                  (e[t] = n), (e[t + 1] = r);
                }
              })(e, r, t, n)),
          r
        );
      }
      function Vn(e, t) {
        const n = Bn(e, t);
        if (n >= 0) return e[1 | n];
      }
      function Bn(e, t) {
        return (function (e, t, n) {
          let r = 0,
            s = e.length >> 1;
          for (; s !== r; ) {
            const n = r + ((s - r) >> 1),
              i = e[n << 1];
            if (t === i) return n << 1;
            i > t ? (s = n) : (r = n + 1);
          }
          return ~(s << 1);
        })(e, t);
      }
      const $n = {},
        Qn = /\n/gm,
        Gn = X({ provide: String, useValue: X });
      let Kn;
      function Zn(e) {
        const t = Kn;
        return (Kn = e), t;
      }
      function Jn(e, t = ve.Default) {
        if (void 0 === Kn)
          throw new Error("inject() must be called from an injection context");
        return null === Kn
          ? we(e, void 0, t)
          : Kn.get(e, t & ve.Optional ? null : void 0, t);
      }
      function Yn(e, t = ve.Default) {
        return (be || Jn)(se(e), t);
      }
      function Xn(e) {
        const t = [];
        for (let n = 0; n < e.length; n++) {
          const r = se(e[n]);
          if (Array.isArray(r)) {
            if (0 === r.length)
              throw new Error("Arguments array must have arguments.");
            let e,
              n = ve.Default;
            for (let t = 0; t < r.length; t++) {
              const s = r[t],
                i = s.__NG_DI_FLAG__;
              "number" == typeof i
                ? -1 === i
                  ? (e = s.token)
                  : (n |= i)
                : (e = s);
            }
            t.push(Yn(e, n));
          } else t.push(Yn(r));
        }
        return t;
      }
      function er(e, t) {
        return (e.__NG_DI_FLAG__ = t), (e.prototype.__NG_DI_FLAG__ = t), e;
      }
      const tr = er(
          Nn("Inject", (e) => ({ token: e })),
          -1
        ),
        nr = er(Nn("Optional"), 8),
        rr = er(Nn("SkipSelf"), 4);
      class sr {
        constructor(e) {
          this.changingThisBreaksApplicationSecurity = e;
        }
        toString() {
          return `SafeValue must use [property]=binding: ${this.changingThisBreaksApplicationSecurity} (see https://g.co/ng/security#xss)`;
        }
      }
      function ir(e) {
        return e instanceof sr ? e.changingThisBreaksApplicationSecurity : e;
      }
      const or =
          /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^&:/?#]*(?:[/?#]|$))/gi,
        ar =
          /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+\/]+=*$/i;
      var lr = (function (e) {
        return (
          (e[(e.NONE = 0)] = "NONE"),
          (e[(e.HTML = 1)] = "HTML"),
          (e[(e.STYLE = 2)] = "STYLE"),
          (e[(e.SCRIPT = 3)] = "SCRIPT"),
          (e[(e.URL = 4)] = "URL"),
          (e[(e.RESOURCE_URL = 5)] = "RESOURCE_URL"),
          e
        );
      })({});
      function cr(e) {
        const t = (function () {
          const e = kt();
          return e && e[12];
        })();
        return t
          ? t.sanitize(lr.URL, e) || ""
          : (function (e, t) {
              const n = (function (e) {
                return (e instanceof sr && e.getTypeName()) || null;
              })(e);
              if (null != n && n !== t) {
                if ("ResourceURL" === n && "URL" === t) return !0;
                throw new Error(
                  `Required a safe ${t}, got a ${n} (see https://g.co/ng/security#xss)`
                );
              }
              return n === t;
            })(e, "URL")
          ? ir(e)
          : ((n = oe(e)),
            (n = String(n)).match(or) || n.match(ar) ? n : "unsafe:" + n);
        var n;
      }
      function ur(e) {
        return e.ngDebugContext;
      }
      function hr(e) {
        return e.ngOriginalError;
      }
      function dr(e, ...t) {
        e.error(...t);
      }
      class pr {
        constructor() {
          this._console = console;
        }
        handleError(e) {
          const t = this._findOriginalError(e),
            n = this._findContext(e),
            r = (function (e) {
              return e.ngErrorLogger || dr;
            })(e);
          r(this._console, "ERROR", e),
            t && r(this._console, "ORIGINAL ERROR", t),
            n && r(this._console, "ERROR CONTEXT", n);
        }
        _findContext(e) {
          return e ? (ur(e) ? ur(e) : this._findContext(hr(e))) : null;
        }
        _findOriginalError(e) {
          let t = hr(e);
          for (; t && hr(t); ) t = hr(t);
          return t;
        }
      }
      function fr(e, t) {
        e.__ngContext__ = t;
      }
      const mr = (() =>
        (
          ("undefined" != typeof requestAnimationFrame &&
            requestAnimationFrame) ||
          setTimeout
        ).bind(Ae))();
      function gr(e) {
        return { name: "window", target: e.ownerDocument.defaultView };
      }
      function yr(e) {
        return e instanceof Function ? e() : e;
      }
      var vr = (function (e) {
        return (
          (e[(e.Important = 1)] = "Important"),
          (e[(e.DashCase = 2)] = "DashCase"),
          e
        );
      })({});
      function br(e, t) {
        return (void 0)(e, t);
      }
      function _r(e) {
        const t = e[3];
        return Je(t) ? t[3] : t;
      }
      function wr(e) {
        return Cr(e[13]);
      }
      function Sr(e) {
        return Cr(e[4]);
      }
      function Cr(e) {
        for (; null !== e && !Je(e); ) e = e[4];
        return e;
      }
      function Er(e, t, n, r, s) {
        if (null != r) {
          let i,
            o = !1;
          Je(r) ? (i = r) : Ze(r) && ((o = !0), (r = r[0]));
          const a = dt(r);
          0 === e && null !== n
            ? null == s
              ? Pr(t, n, a)
              : Rr(t, n, a, s || null, !0)
            : 1 === e && null !== n
            ? Rr(t, n, a, s || null, !0)
            : 2 === e
            ? (function (e, t, n) {
                const r = Nr(e, t);
                r &&
                  (function (e, t, n, r) {
                    ut(e) ? e.removeChild(t, n, r) : t.removeChild(n);
                  })(e, r, t, n);
              })(t, a, o)
            : 3 === e && t.destroyNode(a),
            null != i &&
              (function (e, t, n, r, s) {
                const i = n[7];
                i !== dt(n) && Er(t, e, r, i, s);
                for (let o = 10; o < n.length; o++) {
                  const s = n[o];
                  Hr(s[1], s, e, t, r, i);
                }
              })(t, e, i, n, s);
        }
      }
      function kr(e, t, n) {
        return ut(e)
          ? e.createElement(t, n)
          : null === n
          ? e.createElement(t)
          : e.createElementNS(n, t);
      }
      function xr(e, t) {
        const n = e[9],
          r = n.indexOf(t),
          s = t[3];
        1024 & t[2] && ((t[2] &= -1025), St(s, -1)), n.splice(r, 1);
      }
      function Tr(e, t) {
        if (e.length <= 10) return;
        const n = 10 + t,
          r = e[n];
        if (r) {
          const i = r[17];
          null !== i && i !== e && xr(i, r), t > 0 && (e[n - 1][4] = r[4]);
          const o = qn(e, 10 + t);
          Hr(r[1], (s = r), s[11], 2, null, null), (s[0] = null), (s[6] = null);
          const a = o[19];
          null !== a && a.detachView(o[1]),
            (r[3] = null),
            (r[4] = null),
            (r[2] &= -129);
        }
        var s;
        return r;
      }
      function Ir(e, t) {
        if (!(256 & t[2])) {
          const n = t[11];
          ut(n) && n.destroyNode && Hr(e, t, n, 3, null, null),
            (function (e) {
              let t = e[13];
              if (!t) return Ar(e[1], e);
              for (; t; ) {
                let n = null;
                if (Ze(t)) n = t[13];
                else {
                  const e = t[10];
                  e && (n = e);
                }
                if (!n) {
                  for (; t && !t[4] && t !== e; )
                    Ze(t) && Ar(t[1], t), (t = t[3]);
                  null === t && (t = e), Ze(t) && Ar(t[1], t), (n = t && t[4]);
                }
                t = n;
              }
            })(t);
        }
      }
      function Ar(e, t) {
        if (!(256 & t[2])) {
          (t[2] &= -129),
            (t[2] |= 256),
            (function (e, t) {
              let n;
              if (null != e && null != (n = e.destroyHooks))
                for (let r = 0; r < n.length; r += 2) {
                  const e = t[n[r]];
                  if (!(e instanceof sn)) {
                    const t = n[r + 1];
                    if (Array.isArray(t))
                      for (let n = 0; n < t.length; n += 2) {
                        const r = e[t[n]],
                          s = t[n + 1];
                        try {
                          s.call(r);
                        } finally {
                        }
                      }
                    else
                      try {
                        t.call(e);
                      } finally {
                      }
                  }
                }
            })(e, t),
            (function (e, t) {
              const n = e.cleanup,
                r = t[7];
              let s = -1;
              if (null !== n)
                for (let i = 0; i < n.length - 1; i += 2)
                  if ("string" == typeof n[i]) {
                    const e = n[i + 1],
                      o = "function" == typeof e ? e(t) : dt(t[e]),
                      a = r[(s = n[i + 2])],
                      l = n[i + 3];
                    "boolean" == typeof l
                      ? o.removeEventListener(n[i], a, l)
                      : l >= 0
                      ? r[(s = l)]()
                      : r[(s = -l)].unsubscribe(),
                      (i += 2);
                  } else {
                    const e = r[(s = n[i + 1])];
                    n[i].call(e);
                  }
              if (null !== r) {
                for (let e = s + 1; e < r.length; e++) (0, r[e])();
                t[7] = null;
              }
            })(e, t),
            1 === t[1].type && ut(t[11]) && t[11].destroy();
          const n = t[17];
          if (null !== n && Je(t[3])) {
            n !== t[3] && xr(n, t);
            const r = t[19];
            null !== r && r.detachView(e);
          }
        }
      }
      function Or(e, t, n) {
        return (function (e, t, n) {
          let r = t;
          for (; null !== r && 40 & r.type; ) r = (t = r).parent;
          if (null === r) return n[0];
          if (2 & r.flags) {
            const t = e.data[r.directiveStart].encapsulation;
            if (t === Ee.None || t === Ee.Emulated) return null;
          }
          return ft(r, n);
        })(e, t.parent, n);
      }
      function Rr(e, t, n, r, s) {
        ut(e) ? e.insertBefore(t, n, r, s) : t.insertBefore(n, r, s);
      }
      function Pr(e, t, n) {
        ut(e) ? e.appendChild(t, n) : t.appendChild(n);
      }
      function Dr(e, t, n, r, s) {
        null !== r ? Rr(e, t, n, r, s) : Pr(e, t, n);
      }
      function Nr(e, t) {
        return ut(e) ? e.parentNode(t) : t.parentNode;
      }
      function Mr(e, t, n) {
        return Fr(e, t, n);
      }
      let Fr = function (e, t, n) {
        return 40 & e.type ? ft(e, n) : null;
      };
      function jr(e, t, n, r) {
        const s = Or(e, r, t),
          i = t[11],
          o = Mr(r.parent || t[6], r, t);
        if (null != s)
          if (Array.isArray(n))
            for (let a = 0; a < n.length; a++) Dr(i, s, n[a], o, !1);
          else Dr(i, s, n, o, !1);
      }
      function Lr(e, t) {
        if (null !== t) {
          const n = t.type;
          if (3 & n) return ft(t, e);
          if (4 & n) return zr(-1, e[t.index]);
          if (8 & n) {
            const n = t.child;
            if (null !== n) return Lr(e, n);
            {
              const n = e[t.index];
              return Je(n) ? zr(-1, n) : dt(n);
            }
          }
          if (32 & n) return br(t, e)() || dt(e[t.index]);
          {
            const n = Wr(e, t);
            return null !== n
              ? Array.isArray(n)
                ? n[0]
                : Lr(_r(e[16]), n)
              : Lr(e, t.next);
          }
        }
        return null;
      }
      function Wr(e, t) {
        return null !== t ? e[16][6].projection[t.projection] : null;
      }
      function zr(e, t) {
        const n = 10 + e + 1;
        if (n < t.length) {
          const e = t[n],
            r = e[1].firstChild;
          if (null !== r) return Lr(e, r);
        }
        return t[7];
      }
      function qr(e, t, n, r, s, i, o) {
        for (; null != n; ) {
          const a = r[n.index],
            l = n.type;
          if (
            (o && 0 === t && (a && fr(dt(a), r), (n.flags |= 4)),
            64 != (64 & n.flags))
          )
            if (8 & l) qr(e, t, n.child, r, s, i, !1), Er(t, e, s, a, i);
            else if (32 & l) {
              const o = br(n, r);
              let l;
              for (; (l = o()); ) Er(t, e, s, l, i);
              Er(t, e, s, a, i);
            } else 16 & l ? Ur(e, t, r, n, s, i) : Er(t, e, s, a, i);
          n = o ? n.projectionNext : n.next;
        }
      }
      function Hr(e, t, n, r, s, i) {
        qr(n, r, e.firstChild, t, s, i, !1);
      }
      function Ur(e, t, n, r, s, i) {
        const o = n[16],
          a = o[6].projection[r.projection];
        if (Array.isArray(a))
          for (let l = 0; l < a.length; l++) Er(t, e, s, a[l], i);
        else qr(e, t, a, o[3], s, i, !0);
      }
      function Vr(e, t, n) {
        ut(e) ? e.setAttribute(t, "style", n) : (t.style.cssText = n);
      }
      function Br(e, t, n) {
        ut(e)
          ? "" === n
            ? e.removeAttribute(t, "class")
            : e.setAttribute(t, "class", n)
          : (t.className = n);
      }
      function $r(e, t, n) {
        let r = e.length;
        for (;;) {
          const s = e.indexOf(t, n);
          if (-1 === s) return s;
          if (0 === s || e.charCodeAt(s - 1) <= 32) {
            const n = t.length;
            if (s + n === r || e.charCodeAt(s + n) <= 32) return s;
          }
          n = s + 1;
        }
      }
      function Qr(e, t, n) {
        let r = 0;
        for (; r < e.length; ) {
          let s = e[r++];
          if (n && "class" === s) {
            if (((s = e[r]), -1 !== $r(s.toLowerCase(), t, 0))) return !0;
          } else if (1 === s) {
            for (; r < e.length && "string" == typeof (s = e[r++]); )
              if (s.toLowerCase() === t) return !0;
            return !1;
          }
        }
        return !1;
      }
      function Gr(e) {
        return 4 === e.type && "ng-template" !== e.value;
      }
      function Kr(e, t, n) {
        return t === (4 !== e.type || n ? e.value : "ng-template");
      }
      function Zr(e, t, n) {
        let r = 4;
        const s = e.attrs || [],
          i = (function (e) {
            for (let t = 0; t < e.length; t++) if (an(e[t])) return t;
            return e.length;
          })(s);
        let o = !1;
        for (let a = 0; a < t.length; a++) {
          const l = t[a];
          if ("number" != typeof l) {
            if (!o)
              if (4 & r) {
                if (
                  ((r = 2 | (1 & r)),
                  ("" !== l && !Kr(e, l, n)) || ("" === l && 1 === t.length))
                ) {
                  if (Jr(r)) return !1;
                  o = !0;
                }
              } else {
                const c = 8 & r ? l : t[++a];
                if (8 & r && null !== e.attrs) {
                  if (!Qr(e.attrs, c, n)) {
                    if (Jr(r)) return !1;
                    o = !0;
                  }
                  continue;
                }
                const u = Yr(8 & r ? "class" : l, s, Gr(e), n);
                if (-1 === u) {
                  if (Jr(r)) return !1;
                  o = !0;
                  continue;
                }
                if ("" !== c) {
                  let e;
                  e = u > i ? "" : s[u + 1].toLowerCase();
                  const t = 8 & r ? e : null;
                  if ((t && -1 !== $r(t, c, 0)) || (2 & r && c !== e)) {
                    if (Jr(r)) return !1;
                    o = !0;
                  }
                }
              }
          } else {
            if (!o && !Jr(r) && !Jr(l)) return !1;
            if (o && Jr(l)) continue;
            (o = !1), (r = l | (1 & r));
          }
        }
        return Jr(r) || o;
      }
      function Jr(e) {
        return 0 == (1 & e);
      }
      function Yr(e, t, n, r) {
        if (null === t) return -1;
        let s = 0;
        if (r || !n) {
          let n = !1;
          for (; s < t.length; ) {
            const r = t[s];
            if (r === e) return s;
            if (3 === r || 6 === r) n = !0;
            else {
              if (1 === r || 2 === r) {
                let e = t[++s];
                for (; "string" == typeof e; ) e = t[++s];
                continue;
              }
              if (4 === r) break;
              if (0 === r) {
                s += 4;
                continue;
              }
            }
            s += n ? 1 : 2;
          }
          return -1;
        }
        return (function (e, t) {
          let n = e.indexOf(4);
          if (n > -1)
            for (n++; n < e.length; ) {
              const r = e[n];
              if ("number" == typeof r) return -1;
              if (r === t) return n;
              n++;
            }
          return -1;
        })(t, e);
      }
      function Xr(e, t, n = !1) {
        for (let r = 0; r < t.length; r++) if (Zr(e, t[r], n)) return !0;
        return !1;
      }
      function es(e, t) {
        e: for (let n = 0; n < t.length; n++) {
          const r = t[n];
          if (e.length === r.length) {
            for (let t = 0; t < e.length; t++) if (e[t] !== r[t]) continue e;
            return !0;
          }
        }
        return !1;
      }
      function ts(e, t) {
        return e ? ":not(" + t.trim() + ")" : t;
      }
      function ns(e) {
        let t = e[0],
          n = 1,
          r = 2,
          s = "",
          i = !1;
        for (; n < e.length; ) {
          let o = e[n];
          if ("string" == typeof o)
            if (2 & r) {
              const t = e[++n];
              s += "[" + o + (t.length > 0 ? '="' + t + '"' : "") + "]";
            } else 8 & r ? (s += "." + o) : 4 & r && (s += " " + o);
          else
            "" === s || Jr(o) || ((t += ts(i, s)), (s = "")),
              (r = o),
              (i = i || !Jr(r));
          n++;
        }
        return "" !== s && (t += ts(i, s)), t;
      }
      const rs = {};
      function ss(e) {
        is(xt(), kt(), Kt() + e, Dt());
      }
      function is(e, t, n, r) {
        if (!r)
          if (3 == (3 & t[2])) {
            const r = e.preOrderCheckHooks;
            null !== r && Xt(t, r, n);
          } else {
            const r = e.preOrderHooks;
            null !== r && en(t, r, 0, n);
          }
        Zt(n);
      }
      function os(e, t) {
        return (e << 17) | (t << 2);
      }
      function as(e) {
        return (e >> 17) & 32767;
      }
      function ls(e) {
        return 2 | e;
      }
      function cs(e) {
        return (131068 & e) >> 2;
      }
      function us(e, t) {
        return (-131069 & e) | (t << 2);
      }
      function hs(e) {
        return 1 | e;
      }
      function ds(e, t) {
        const n = e.contentQueries;
        if (null !== n)
          for (let r = 0; r < n.length; r += 2) {
            const s = n[r],
              i = n[r + 1];
            if (-1 !== i) {
              const n = e.data[i];
              zt(s), n.contentQueries(2, t[i], i);
            }
          }
      }
      function ps(e, t, n, r, s, i, o, a, l, c) {
        const u = t.blueprint.slice();
        return (
          (u[0] = s),
          (u[2] = 140 | r),
          wt(u),
          (u[3] = u[15] = e),
          (u[8] = n),
          (u[10] = o || (e && e[10])),
          (u[11] = a || (e && e[11])),
          (u[12] = l || (e && e[12]) || null),
          (u[9] = c || (e && e[9]) || null),
          (u[6] = i),
          (u[16] = 2 == t.type ? e[16] : u),
          u
        );
      }
      function fs(e, t, n, r, s) {
        let i = e.data[t];
        if (null === i)
          (i = (function (e, t, n, r, s) {
            const i = At(),
              o = Rt(),
              a = (e.data[t] = (function (e, t, n, r, s, i) {
                return {
                  type: n,
                  index: r,
                  insertBeforeIndex: null,
                  injectorIndex: t ? t.injectorIndex : -1,
                  directiveStart: -1,
                  directiveEnd: -1,
                  directiveStylingLast: -1,
                  propertyBindings: null,
                  flags: 0,
                  providerIndexes: 0,
                  value: s,
                  attrs: i,
                  mergedAttrs: null,
                  localNames: null,
                  initialInputs: void 0,
                  inputs: null,
                  outputs: null,
                  tViews: null,
                  next: null,
                  projectionNext: null,
                  child: null,
                  parent: t,
                  projection: null,
                  styles: null,
                  stylesWithoutHost: null,
                  residualStyles: void 0,
                  classes: null,
                  classesWithoutHost: null,
                  residualClasses: void 0,
                  classBindings: 0,
                  styleBindings: 0,
                };
              })(0, o ? i : i && i.parent, n, t, r, s));
            return (
              null === e.firstChild && (e.firstChild = a),
              null !== i &&
                (o
                  ? null == i.child && null !== a.parent && (i.child = a)
                  : null === i.next && (i.next = a)),
              a
            );
          })(e, t, n, r, s)),
            Ct.lFrame.inI18n && (i.flags |= 64);
        else if (64 & i.type) {
          (i.type = n), (i.value = r), (i.attrs = s);
          const e = (function () {
            const e = Ct.lFrame,
              t = e.currentTNode;
            return e.isParent ? t : t.parent;
          })();
          i.injectorIndex = null === e ? -1 : e.injectorIndex;
        }
        return Ot(i, !0), i;
      }
      function ms(e, t, n, r) {
        if (0 === n) return -1;
        const s = t.length;
        for (let i = 0; i < n; i++)
          t.push(r), e.blueprint.push(r), e.data.push(null);
        return s;
      }
      function gs(e, t, n) {
        Ut(t);
        try {
          const r = e.viewQuery;
          null !== r && Bs(1, r, n);
          const s = e.template;
          null !== s && bs(e, t, s, 1, n),
            e.firstCreatePass && (e.firstCreatePass = !1),
            e.staticContentQueries && ds(e, t),
            e.staticViewQueries && Bs(2, e.viewQuery, n);
          const i = e.components;
          null !== i &&
            (function (e, t) {
              for (let n = 0; n < t.length; n++) zs(e, t[n]);
            })(t, i);
        } catch (r) {
          throw (e.firstCreatePass && (e.incompleteFirstPass = !0), r);
        } finally {
          (t[2] &= -5), Gt();
        }
      }
      function ys(e, t, n, r) {
        const s = t[2];
        if (256 == (256 & s)) return;
        Ut(t);
        const i = Dt();
        try {
          wt(t),
            (Ct.lFrame.bindingIndex = e.bindingStartIndex),
            null !== n && bs(e, t, n, 2, r);
          const o = 3 == (3 & s);
          if (!i)
            if (o) {
              const n = e.preOrderCheckHooks;
              null !== n && Xt(t, n, null);
            } else {
              const n = e.preOrderHooks;
              null !== n && en(t, n, 0, null), tn(t, 0);
            }
          if (
            ((function (e) {
              for (let t = wr(e); null !== t; t = Sr(t)) {
                if (!t[2]) continue;
                const e = t[9];
                for (let t = 0; t < e.length; t++) {
                  const n = e[t],
                    r = n[3];
                  0 == (1024 & n[2]) && St(r, 1), (n[2] |= 1024);
                }
              }
            })(t),
            (function (e) {
              for (let t = wr(e); null !== t; t = Sr(t))
                for (let e = 10; e < t.length; e++) {
                  const n = t[e],
                    r = n[1];
                  bt(n) && ys(r, n, r.template, n[8]);
                }
            })(t),
            null !== e.contentQueries && ds(e, t),
            !i)
          )
            if (o) {
              const n = e.contentCheckHooks;
              null !== n && Xt(t, n);
            } else {
              const n = e.contentHooks;
              null !== n && en(t, n, 1), tn(t, 1);
            }
          !(function (e, t) {
            const n = e.hostBindingOpCodes;
            if (null !== n)
              try {
                for (let e = 0; e < n.length; e++) {
                  const r = n[e];
                  if (r < 0) Zt(~r);
                  else {
                    const s = r,
                      i = n[++e],
                      o = n[++e];
                    jt(i, s), o(2, t[s]);
                  }
                }
              } finally {
                Zt(-1);
              }
          })(e, t);
          const a = e.components;
          null !== a &&
            (function (e, t) {
              for (let n = 0; n < t.length; n++) Ls(e, t[n]);
            })(t, a);
          const l = e.viewQuery;
          if ((null !== l && Bs(2, l, r), !i))
            if (o) {
              const n = e.viewCheckHooks;
              null !== n && Xt(t, n);
            } else {
              const n = e.viewHooks;
              null !== n && en(t, n, 2), tn(t, 2);
            }
          !0 === e.firstUpdatePass && (e.firstUpdatePass = !1),
            i || (t[2] &= -73),
            1024 & t[2] && ((t[2] &= -1025), St(t[3], -1));
        } finally {
          Gt();
        }
      }
      function vs(e, t, n, r) {
        const s = t[10],
          i = !Dt(),
          o = vt(t);
        try {
          i && !o && s.begin && s.begin(), o && gs(e, t, r), ys(e, t, n, r);
        } finally {
          i && !o && s.end && s.end();
        }
      }
      function bs(e, t, n, r, s) {
        const i = Kt(),
          o = 2 & r;
        try {
          Zt(-1), o && t.length > 20 && is(e, t, 20, Dt()), n(r, s);
        } finally {
          Zt(i);
        }
      }
      function _s(e, t, n) {
        Et() &&
          ((function (e, t, n, r) {
            const s = n.directiveStart,
              i = n.directiveEnd;
            e.firstCreatePass || yn(n, t), fr(r, t);
            const o = n.initialInputs;
            for (let a = s; a < i; a++) {
              const r = e.data[a],
                i = tt(r);
              i && Ns(t, n, r);
              const l = An(t, e, a, n);
              fr(l, t),
                null !== o && Ms(0, a - s, l, r, 0, o),
                i && (gt(n.index, t)[8] = l);
            }
          })(e, t, n, ft(n, t)),
          128 == (128 & n.flags) &&
            (function (e, t, n) {
              const r = n.directiveStart,
                s = n.directiveEnd,
                i = n.index,
                o = Ct.lFrame.currentDirectiveIndex;
              try {
                Zt(i);
                for (let n = r; n < s; n++) {
                  const r = e.data[n],
                    s = t[n];
                  Lt(n),
                    (null === r.hostBindings &&
                      0 === r.hostVars &&
                      null === r.hostAttrs) ||
                      As(r, s);
                }
              } finally {
                Zt(-1), Lt(o);
              }
            })(e, t, n));
      }
      function ws(e, t, n = ft) {
        const r = t.localNames;
        if (null !== r) {
          let s = t.index + 1;
          for (let i = 0; i < r.length; i += 2) {
            const o = r[i + 1],
              a = -1 === o ? n(t, e) : e[o];
            e[s++] = a;
          }
        }
      }
      function Ss(e) {
        const t = e.tView;
        return null === t || t.incompleteFirstPass
          ? (e.tView = Cs(
              1,
              null,
              e.template,
              e.decls,
              e.vars,
              e.directiveDefs,
              e.pipeDefs,
              e.viewQuery,
              e.schemas,
              e.consts
            ))
          : t;
      }
      function Cs(e, t, n, r, s, i, o, a, l, c) {
        const u = 20 + r,
          h = u + s,
          d = (function (e, t) {
            const n = [];
            for (let r = 0; r < t; r++) n.push(r < e ? null : rs);
            return n;
          })(u, h),
          p = "function" == typeof c ? c() : c;
        return (d[1] = {
          type: e,
          blueprint: d,
          template: n,
          queries: null,
          viewQuery: a,
          declTNode: t,
          data: d.slice().fill(null, u),
          bindingStartIndex: u,
          expandoStartIndex: h,
          hostBindingOpCodes: null,
          firstCreatePass: !0,
          firstUpdatePass: !0,
          staticViewQueries: !1,
          staticContentQueries: !1,
          preOrderHooks: null,
          preOrderCheckHooks: null,
          contentHooks: null,
          contentCheckHooks: null,
          viewHooks: null,
          viewCheckHooks: null,
          destroyHooks: null,
          cleanup: null,
          contentQueries: null,
          components: null,
          directiveRegistry: "function" == typeof i ? i() : i,
          pipeRegistry: "function" == typeof o ? o() : o,
          firstChild: null,
          schemas: l,
          consts: p,
          incompleteFirstPass: !1,
        });
      }
      function Es(e, t, n, r) {
        const s = Qs(t);
        null === n
          ? s.push(r)
          : (s.push(n), e.firstCreatePass && Gs(e).push(r, s.length - 1));
      }
      function ks(e, t, n) {
        for (let r in e)
          if (e.hasOwnProperty(r)) {
            const s = e[r];
            (n = null === n ? {} : n).hasOwnProperty(r)
              ? n[r].push(t, s)
              : (n[r] = [t, s]);
          }
        return n;
      }
      function xs(e, t, n, r, s, i, o, a) {
        const l = ft(t, n);
        let c,
          u = t.inputs;
        var h;
        !a && null != u && (c = u[r])
          ? (Zs(e, n, c, r, s),
            Xe(t) &&
              (function (e, t) {
                const n = gt(t, e);
                16 & n[2] || (n[2] |= 64);
              })(n, t.index))
          : 3 & t.type &&
            ((r =
              "class" === (h = r)
                ? "className"
                : "for" === h
                ? "htmlFor"
                : "formaction" === h
                ? "formAction"
                : "innerHtml" === h
                ? "innerHTML"
                : "readonly" === h
                ? "readOnly"
                : "tabindex" === h
                ? "tabIndex"
                : h),
            (s = null != o ? o(s, t.value || "", r) : s),
            ut(i)
              ? i.setProperty(l, r, s)
              : ln(r) || (l.setProperty ? l.setProperty(r, s) : (l[r] = s)));
      }
      function Ts(e, t, n, r) {
        let s = !1;
        if (Et()) {
          const i = (function (e, t, n) {
              const r = e.directiveRegistry;
              let s = null;
              if (r)
                for (let i = 0; i < r.length; i++) {
                  const o = r[i];
                  Xr(n, o.selectors, !1) &&
                    (s || (s = []),
                    wn(yn(n, t), e, o.type),
                    tt(o) ? (Os(e, n), s.unshift(o)) : s.push(o));
                }
              return s;
            })(e, t, n),
            o = null === r ? null : { "": -1 };
          if (null !== i) {
            (s = !0), Ps(n, e.data.length, i.length);
            for (let e = 0; e < i.length; e++) {
              const t = i[e];
              t.providersResolver && t.providersResolver(t);
            }
            let r = !1,
              a = !1,
              l = ms(e, t, i.length, null);
            for (let s = 0; s < i.length; s++) {
              const c = i[s];
              (n.mergedAttrs = cn(n.mergedAttrs, c.hostAttrs)),
                Ds(e, n, t, l, c),
                Rs(l, c, o),
                null !== c.contentQueries && (n.flags |= 8),
                (null === c.hostBindings &&
                  null === c.hostAttrs &&
                  0 === c.hostVars) ||
                  (n.flags |= 128);
              const u = c.type.prototype;
              !r &&
                (u.ngOnChanges || u.ngOnInit || u.ngDoCheck) &&
                ((e.preOrderHooks || (e.preOrderHooks = [])).push(n.index),
                (r = !0)),
                a ||
                  (!u.ngOnChanges && !u.ngDoCheck) ||
                  ((e.preOrderCheckHooks || (e.preOrderCheckHooks = [])).push(
                    n.index
                  ),
                  (a = !0)),
                l++;
            }
            !(function (e, t) {
              const n = t.directiveEnd,
                r = e.data,
                s = t.attrs,
                i = [];
              let o = null,
                a = null;
              for (let l = t.directiveStart; l < n; l++) {
                const e = r[l],
                  n = e.inputs,
                  c = null === s || Gr(t) ? null : Fs(n, s);
                i.push(c), (o = ks(n, l, o)), (a = ks(e.outputs, l, a));
              }
              null !== o &&
                (o.hasOwnProperty("class") && (t.flags |= 16),
                o.hasOwnProperty("style") && (t.flags |= 32)),
                (t.initialInputs = i),
                (t.inputs = o),
                (t.outputs = a);
            })(e, n);
          }
          o &&
            (function (e, t, n) {
              if (t) {
                const r = (e.localNames = []);
                for (let e = 0; e < t.length; e += 2) {
                  const s = n[t[e + 1]];
                  if (null == s)
                    throw new ie(
                      "301",
                      `Export of name '${t[e + 1]}' not found!`
                    );
                  r.push(t[e], s);
                }
              }
            })(n, r, o);
        }
        return (n.mergedAttrs = cn(n.mergedAttrs, n.attrs)), s;
      }
      function Is(e, t, n, r, s, i) {
        const o = i.hostBindings;
        if (o) {
          let n = e.hostBindingOpCodes;
          null === n && (n = e.hostBindingOpCodes = []);
          const i = ~t.index;
          (function (e) {
            let t = e.length;
            for (; t > 0; ) {
              const n = e[--t];
              if ("number" == typeof n && n < 0) return n;
            }
            return 0;
          })(n) != i && n.push(i),
            n.push(r, s, o);
        }
      }
      function As(e, t) {
        null !== e.hostBindings && e.hostBindings(1, t);
      }
      function Os(e, t) {
        (t.flags |= 2), (e.components || (e.components = [])).push(t.index);
      }
      function Rs(e, t, n) {
        if (n) {
          if (t.exportAs)
            for (let r = 0; r < t.exportAs.length; r++) n[t.exportAs[r]] = e;
          tt(t) && (n[""] = e);
        }
      }
      function Ps(e, t, n) {
        (e.flags |= 1),
          (e.directiveStart = t),
          (e.directiveEnd = t + n),
          (e.providerIndexes = t);
      }
      function Ds(e, t, n, r, s) {
        e.data[r] = s;
        const i = s.factory || (s.factory = nt(s.type)),
          o = new sn(i, tt(s), null);
        (e.blueprint[r] = o),
          (n[r] = o),
          Is(e, t, 0, r, ms(e, n, s.hostVars, rs), s);
      }
      function Ns(e, t, n) {
        const r = ft(t, e),
          s = Ss(n),
          i = e[10],
          o = qs(
            e,
            ps(
              e,
              s,
              null,
              n.onPush ? 64 : 16,
              r,
              t,
              i,
              i.createRenderer(r, n),
              null,
              null
            )
          );
        e[t.index] = o;
      }
      function Ms(e, t, n, r, s, i) {
        const o = i[t];
        if (null !== o) {
          const e = r.setInput;
          for (let t = 0; t < o.length; ) {
            const s = o[t++],
              i = o[t++],
              a = o[t++];
            null !== e ? r.setInput(n, a, s, i) : (n[i] = a);
          }
        }
      }
      function Fs(e, t) {
        let n = null,
          r = 0;
        for (; r < t.length; ) {
          const s = t[r];
          if (0 !== s)
            if (5 !== s) {
              if ("number" == typeof s) break;
              e.hasOwnProperty(s) &&
                (null === n && (n = []), n.push(s, e[s], t[r + 1])),
                (r += 2);
            } else r += 2;
          else r += 4;
        }
        return n;
      }
      function js(e, t, n, r) {
        return new Array(e, !0, !1, t, null, 0, r, n, null, null);
      }
      function Ls(e, t) {
        const n = gt(t, e);
        if (bt(n)) {
          const e = n[1];
          80 & n[2] ? ys(e, n, e.template, n[8]) : n[5] > 0 && Ws(n);
        }
      }
      function Ws(e) {
        for (let n = wr(e); null !== n; n = Sr(n))
          for (let e = 10; e < n.length; e++) {
            const t = n[e];
            if (1024 & t[2]) {
              const e = t[1];
              ys(e, t, e.template, t[8]);
            } else t[5] > 0 && Ws(t);
          }
        const t = e[1].components;
        if (null !== t)
          for (let n = 0; n < t.length; n++) {
            const r = gt(t[n], e);
            bt(r) && r[5] > 0 && Ws(r);
          }
      }
      function zs(e, t) {
        const n = gt(t, e),
          r = n[1];
        !(function (e, t) {
          for (let n = t.length; n < e.blueprint.length; n++)
            t.push(e.blueprint[n]);
        })(r, n),
          gs(r, n, n[8]);
      }
      function qs(e, t) {
        return e[13] ? (e[14][4] = t) : (e[13] = t), (e[14] = t), t;
      }
      function Hs(e) {
        for (; e; ) {
          e[2] |= 64;
          const t = _r(e);
          if (0 != (512 & e[2]) && !t) return e;
          e = t;
        }
        return null;
      }
      function Us(e, t, n) {
        const r = t[10];
        r.begin && r.begin();
        try {
          ys(e, t, e.template, n);
        } catch (s) {
          throw (Ks(t, s), s);
        } finally {
          r.end && r.end();
        }
      }
      function Vs(e) {
        !(function (e) {
          for (let t = 0; t < e.components.length; t++) {
            const n = e.components[t],
              r = yt(n),
              s = r[1];
            vs(s, r, s.template, n);
          }
        })(e[8]);
      }
      function Bs(e, t, n) {
        zt(0), t(e, n);
      }
      const $s = (() => Promise.resolve(null))();
      function Qs(e) {
        return e[7] || (e[7] = []);
      }
      function Gs(e) {
        return e.cleanup || (e.cleanup = []);
      }
      function Ks(e, t) {
        const n = e[9],
          r = n ? n.get(pr, null) : null;
        r && r.handleError(t);
      }
      function Zs(e, t, n, r, s) {
        for (let i = 0; i < n.length; ) {
          const o = n[i++],
            a = n[i++],
            l = t[o],
            c = e.data[o];
          null !== c.setInput ? c.setInput(l, s, r, a) : (l[a] = s);
        }
      }
      function Js(e, t, n) {
        let r = n ? e.styles : null,
          s = n ? e.classes : null,
          i = 0;
        if (null !== t)
          for (let o = 0; o < t.length; o++) {
            const e = t[o];
            "number" == typeof e
              ? (i = e)
              : 1 == i
              ? (s = te(s, e))
              : 2 == i && (r = te(r, e + ": " + t[++o] + ";"));
          }
        n ? (e.styles = r) : (e.stylesWithoutHost = r),
          n ? (e.classes = s) : (e.classesWithoutHost = s);
      }
      const Ys = new Mn("INJECTOR", -1);
      class Xs {
        get(e, t = $n) {
          if (t === $n) {
            const t = new Error(`NullInjectorError: No provider for ${ee(e)}!`);
            throw ((t.name = "NullInjectorError"), t);
          }
          return t;
        }
      }
      const ei = new Mn("Set Injector scope."),
        ti = {},
        ni = {},
        ri = [];
      let si;
      function ii() {
        return void 0 === si && (si = new Xs()), si;
      }
      function oi(e, t = null, n = null, r) {
        return new ai(e, n, t || ii(), r);
      }
      class ai {
        constructor(e, t, n, r = null) {
          (this.parent = n),
            (this.records = new Map()),
            (this.injectorDefTypes = new Set()),
            (this.onDestroy = new Set()),
            (this._destroyed = !1);
          const s = [];
          t && Wn(t, (n) => this.processProvider(n, e, t)),
            Wn([e], (e) => this.processInjectorType(e, [], s)),
            this.records.set(Ys, ci(void 0, this));
          const i = this.records.get(ei);
          (this.scope = null != i ? i.value : null),
            (this.source = r || ("object" == typeof e ? null : ee(e)));
        }
        get destroyed() {
          return this._destroyed;
        }
        destroy() {
          this.assertNotDestroyed(), (this._destroyed = !0);
          try {
            this.onDestroy.forEach((e) => e.ngOnDestroy());
          } finally {
            this.records.clear(),
              this.onDestroy.clear(),
              this.injectorDefTypes.clear();
          }
        }
        get(e, t = $n, n = ve.Default) {
          this.assertNotDestroyed();
          const r = Zn(this);
          try {
            if (!(n & ve.SkipSelf)) {
              let t = this.records.get(e);
              if (void 0 === t) {
                const n =
                  ("function" == typeof (s = e) ||
                    ("object" == typeof s && s instanceof Mn)) &&
                  he(e);
                (t = n && this.injectableDefInScope(n) ? ci(li(e), ti) : null),
                  this.records.set(e, t);
              }
              if (null != t) return this.hydrate(e, t);
            }
            return (n & ve.Self ? ii() : this.parent).get(
              e,
              (t = n & ve.Optional && t === $n ? null : t)
            );
          } catch (i) {
            if ("NullInjectorError" === i.name) {
              if (
                ((i.ngTempTokenPath = i.ngTempTokenPath || []).unshift(ee(e)),
                r)
              )
                throw i;
              return (function (e, t, n, r) {
                const s = e.ngTempTokenPath;
                throw (
                  (t.__source && s.unshift(t.__source),
                  (e.message = (function (e, t, n, r = null) {
                    e =
                      e && "\n" === e.charAt(0) && "\u0275" == e.charAt(1)
                        ? e.substr(2)
                        : e;
                    let s = ee(t);
                    if (Array.isArray(t)) s = t.map(ee).join(" -> ");
                    else if ("object" == typeof t) {
                      let e = [];
                      for (let n in t)
                        if (t.hasOwnProperty(n)) {
                          let r = t[n];
                          e.push(
                            n +
                              ":" +
                              ("string" == typeof r ? JSON.stringify(r) : ee(r))
                          );
                        }
                      s = `{${e.join(", ")}}`;
                    }
                    return `${n}${r ? "(" + r + ")" : ""}[${s}]: ${e.replace(
                      Qn,
                      "\n  "
                    )}`;
                  })("\n" + e.message, s, n, r)),
                  (e.ngTokenPath = s),
                  (e.ngTempTokenPath = null),
                  e)
                );
              })(i, e, "R3InjectorError", this.source);
            }
            throw i;
          } finally {
            Zn(r);
          }
          var s;
        }
        _resolveInjectorDefTypes() {
          this.injectorDefTypes.forEach((e) => this.get(e));
        }
        toString() {
          const e = [];
          return (
            this.records.forEach((t, n) => e.push(ee(n))),
            `R3Injector[${e.join(", ")}]`
          );
        }
        assertNotDestroyed() {
          if (this._destroyed)
            throw new Error("Injector has already been destroyed.");
        }
        processInjectorType(e, t, n) {
          if (!(e = se(e))) return !1;
          let r = pe(e);
          const s = (null == r && e.ngModule) || void 0,
            i = void 0 === s ? e : s,
            o = -1 !== n.indexOf(i);
          if ((void 0 !== s && (r = pe(s)), null == r)) return !1;
          if (null != r.imports && !o) {
            let e;
            n.push(i);
            try {
              Wn(r.imports, (r) => {
                this.processInjectorType(r, t, n) &&
                  (void 0 === e && (e = []), e.push(r));
              });
            } finally {
            }
            if (void 0 !== e)
              for (let t = 0; t < e.length; t++) {
                const { ngModule: n, providers: r } = e[t];
                Wn(r, (e) => this.processProvider(e, n, r || ri));
              }
          }
          this.injectorDefTypes.add(i);
          const a = nt(i) || (() => new i());
          this.records.set(i, ci(a, ti));
          const l = r.providers;
          if (null != l && !o) {
            const t = e;
            Wn(l, (e) => this.processProvider(e, t, l));
          }
          return void 0 !== s && void 0 !== e.providers;
        }
        processProvider(e, t, n) {
          let r = hi((e = se(e))) ? e : se(e && e.provide);
          const s = (function (e, t, n) {
            return ui(e)
              ? ci(void 0, e.useValue)
              : ci(
                  (function (e, t, n) {
                    let r;
                    if (hi(e)) {
                      const t = se(e);
                      return nt(t) || li(t);
                    }
                    if (ui(e)) r = () => se(e.useValue);
                    else if ((s = e) && s.useFactory)
                      r = () => e.useFactory(...Xn(e.deps || []));
                    else if (
                      (function (e) {
                        return !(!e || !e.useExisting);
                      })(e)
                    )
                      r = () => Yn(se(e.useExisting));
                    else {
                      const t = se(e && (e.useClass || e.provide));
                      if (
                        !(function (e) {
                          return !!e.deps;
                        })(e)
                      )
                        return nt(t) || li(t);
                      r = () => new t(...Xn(e.deps));
                    }
                    var s;
                    return r;
                  })(e),
                  ti
                );
          })(e);
          if (hi(e) || !0 !== e.multi) this.records.get(r);
          else {
            let t = this.records.get(r);
            t ||
              ((t = ci(void 0, ti, !0)),
              (t.factory = () => Xn(t.multi)),
              this.records.set(r, t)),
              (r = e),
              t.multi.push(e);
          }
          this.records.set(r, s);
        }
        hydrate(e, t) {
          var n;
          return (
            t.value === ti && ((t.value = ni), (t.value = t.factory())),
            "object" == typeof t.value &&
              t.value &&
              null !== (n = t.value) &&
              "object" == typeof n &&
              "function" == typeof n.ngOnDestroy &&
              this.onDestroy.add(t.value),
            t.value
          );
        }
        injectableDefInScope(e) {
          return (
            !!e.providedIn &&
            ("string" == typeof e.providedIn
              ? "any" === e.providedIn || e.providedIn === this.scope
              : this.injectorDefTypes.has(e.providedIn))
          );
        }
      }
      function li(e) {
        const t = he(e),
          n = null !== t ? t.factory : nt(e);
        if (null !== n) return n;
        if (e instanceof Mn)
          throw new Error(`Token ${ee(e)} is missing a \u0275prov definition.`);
        if (e instanceof Function)
          return (function (e) {
            const t = e.length;
            if (t > 0) {
              const n = Hn(t, "?");
              throw new Error(
                `Can't resolve all parameters for ${ee(e)}: (${n.join(", ")}).`
              );
            }
            const n = (function (e) {
              const t = e && (e[fe] || e[ge]);
              if (t) {
                const n = (function (e) {
                  if (e.hasOwnProperty("name")) return e.name;
                  const t = ("" + e).match(/^function\s*([^\s(]+)/);
                  return null === t ? "" : t[1];
                })(e);
                return (
                  console.warn(
                    `DEPRECATED: DI is instantiating a token "${n}" that inherits its @Injectable decorator but does not provide one itself.\nThis will become an error in a future version of Angular. Please add @Injectable() to the "${n}" class.`
                  ),
                  t
                );
              }
              return null;
            })(e);
            return null !== n ? () => n.factory(e) : () => new e();
          })(e);
        throw new Error("unreachable");
      }
      function ci(e, t, n = !1) {
        return { factory: e, value: t, multi: n ? [] : void 0 };
      }
      function ui(e) {
        return null !== e && "object" == typeof e && Gn in e;
      }
      function hi(e) {
        return "function" == typeof e;
      }
      const di = function (e, t, n) {
        return (function (e, t = null, n = null, r) {
          const s = oi(e, t, n, r);
          return s._resolveInjectorDefTypes(), s;
        })({ name: n }, t, e, n);
      };
      let pi = (() => {
        class e {
          static create(e, t) {
            return Array.isArray(e)
              ? di(e, t, "")
              : di(e.providers, e.parent, e.name || "");
          }
        }
        return (
          (e.THROW_IF_NOT_FOUND = $n),
          (e.NULL = new Xs()),
          (e.ɵprov = ce({
            token: e,
            providedIn: "any",
            factory: () => Yn(Ys),
          })),
          (e.__NG_ELEMENT_ID__ = -1),
          e
        );
      })();
      function fi(e, t) {
        Yt(yt(e)[1], It());
      }
      let mi = null;
      function gi() {
        if (!mi) {
          const e = Ae.Symbol;
          if (e && e.iterator) mi = e.iterator;
          else {
            const e = Object.getOwnPropertyNames(Map.prototype);
            for (let t = 0; t < e.length; ++t) {
              const n = e[t];
              "entries" !== n &&
                "size" !== n &&
                Map.prototype[n] === Map.prototype.entries &&
                (mi = n);
            }
          }
        }
        return mi;
      }
      function yi(e) {
        return (
          !!vi(e) && (Array.isArray(e) || (!(e instanceof Map) && gi() in e))
        );
      }
      function vi(e) {
        return null !== e && ("function" == typeof e || "object" == typeof e);
      }
      function bi(e, t, n) {
        return (e[t] = n);
      }
      function _i(e, t, n) {
        return !Object.is(e[t], n) && ((e[t] = n), !0);
      }
      function wi(e, t, n, r) {
        const s = kt();
        return (
          _i(s, Ft(), t) &&
            (xt(),
            (function (e, t, n, r, s, i) {
              const o = ft(e, t);
              !(function (e, t, n, r, s, i, o) {
                if (null == i)
                  ut(e) ? e.removeAttribute(t, s, n) : t.removeAttribute(s);
                else {
                  const a = null == o ? oe(i) : o(i, r || "", s);
                  ut(e)
                    ? e.setAttribute(t, s, a, n)
                    : n
                    ? t.setAttributeNS(n, s, a)
                    : t.setAttribute(s, a);
                }
              })(t[11], o, i, e.value, n, r, s);
            })(Jt(), s, e, t, n, r)),
          wi
        );
      }
      function Si(e, t, n, r, s, i, o, a) {
        const l = kt(),
          c = xt(),
          u = e + 20,
          h = c.firstCreatePass
            ? (function (e, t, n, r, s, i, o, a, l) {
                const c = t.consts,
                  u = fs(t, e, 4, o || null, _t(c, a));
                Ts(t, n, u, _t(c, l)), Yt(t, u);
                const h = (u.tViews = Cs(
                  2,
                  u,
                  r,
                  s,
                  i,
                  t.directiveRegistry,
                  t.pipeRegistry,
                  null,
                  t.schemas,
                  c
                ));
                return (
                  null !== t.queries &&
                    (t.queries.template(t, u),
                    (h.queries = t.queries.embeddedTView(u))),
                  u
                );
              })(u, c, l, t, n, r, s, i, o)
            : c.data[u];
        Ot(h, !1);
        const d = l[11].createComment("");
        jr(c, l, d, h),
          fr(d, l),
          qs(l, (l[u] = js(d, l, d, h))),
          et(h) && _s(c, l, h),
          null != o && ws(l, h, a);
      }
      function Ci(e) {
        return (function (e, t) {
          return e[t];
        })(Ct.lFrame.contextLView, 20 + e);
      }
      function Ei(e, t = ve.Default) {
        const n = kt();
        return null === n ? Yn(e, t) : En(It(), n, se(e), t);
      }
      function ki(e, t, n) {
        const r = kt();
        return _i(r, Ft(), t) && xs(xt(), Jt(), r, e, t, r[11], n, !1), ki;
      }
      function xi(e, t, n, r, s) {
        const i = s ? "class" : "style";
        Zs(e, n, t.inputs[i], i, r);
      }
      function Ti(e, t, n, r) {
        const s = kt(),
          i = xt(),
          o = 20 + e,
          a = s[11],
          l = (s[o] = kr(a, t, Ct.lFrame.currentNamespace)),
          c = i.firstCreatePass
            ? (function (e, t, n, r, s, i, o) {
                const a = t.consts,
                  l = fs(t, e, 2, s, _t(a, i));
                return (
                  Ts(t, n, l, _t(a, o)),
                  null !== l.attrs && Js(l, l.attrs, !1),
                  null !== l.mergedAttrs && Js(l, l.mergedAttrs, !0),
                  null !== t.queries && t.queries.elementStart(t, l),
                  l
                );
              })(o, i, s, 0, t, n, r)
            : i.data[o];
        Ot(c, !0);
        const u = c.mergedAttrs;
        null !== u && on(a, l, u);
        const h = c.classes;
        null !== h && Br(a, l, h);
        const d = c.styles;
        null !== d && Vr(a, l, d),
          64 != (64 & c.flags) && jr(i, s, l, c),
          0 === Ct.lFrame.elementDepthCount && fr(l, s),
          Ct.lFrame.elementDepthCount++,
          et(c) &&
            (_s(i, s, c),
            (function (e, t, n) {
              if (Ye(t)) {
                const r = t.directiveEnd;
                for (let s = t.directiveStart; s < r; s++) {
                  const t = e.data[s];
                  t.contentQueries && t.contentQueries(1, n[s], s);
                }
              }
            })(i, c, s)),
          null !== r && ws(s, c);
      }
      function Ii() {
        let e = It();
        Rt() ? Pt() : ((e = e.parent), Ot(e, !1));
        const t = e;
        Ct.lFrame.elementDepthCount--;
        const n = xt();
        n.firstCreatePass && (Yt(n, e), Ye(e) && n.queries.elementEnd(e)),
          null != t.classesWithoutHost &&
            (function (e) {
              return 0 != (16 & e.flags);
            })(t) &&
            xi(n, t, kt(), t.classesWithoutHost, !0),
          null != t.stylesWithoutHost &&
            (function (e) {
              return 0 != (32 & e.flags);
            })(t) &&
            xi(n, t, kt(), t.stylesWithoutHost, !1);
      }
      function Ai(e, t, n, r) {
        Ti(e, t, n, r), Ii();
      }
      function Oi() {
        return kt();
      }
      function Ri(e) {
        return !!e && "function" == typeof e.then;
      }
      function Pi(e, t, n = !1, r) {
        const s = kt(),
          i = xt(),
          o = It();
        return (
          (function (e, t, n, r, s, i, o = !1, a) {
            const l = et(r),
              c = e.firstCreatePass && Gs(e),
              u = Qs(t);
            let h = !0;
            if (3 & r.type) {
              const d = ft(r, t),
                p = a ? a(d) : Oe,
                f = p.target || d,
                m = u.length,
                g = a ? (e) => a(dt(e[r.index])).target : r.index;
              if (ut(n)) {
                let o = null;
                if (
                  (!a &&
                    l &&
                    (o = (function (e, t, n, r) {
                      const s = e.cleanup;
                      if (null != s)
                        for (let i = 0; i < s.length - 1; i += 2) {
                          const e = s[i];
                          if (e === n && s[i + 1] === r) {
                            const e = t[7],
                              n = s[i + 2];
                            return e.length > n ? e[n] : null;
                          }
                          "string" == typeof e && (i += 2);
                        }
                      return null;
                    })(e, t, s, r.index)),
                  null !== o)
                )
                  ((o.__ngLastListenerFn__ || o).__ngNextListenerFn__ = i),
                    (o.__ngLastListenerFn__ = i),
                    (h = !1);
                else {
                  i = Ni(r, t, 0, i, !1);
                  const e = n.listen(p.name || f, s, i);
                  u.push(i, e), c && c.push(s, g, m, m + 1);
                }
              } else
                (i = Ni(r, t, 0, i, !0)),
                  f.addEventListener(s, i, o),
                  u.push(i),
                  c && c.push(s, g, m, o);
            } else i = Ni(r, t, 0, i, !1);
            const d = r.outputs;
            let p;
            if (h && null !== d && (p = d[s])) {
              const e = p.length;
              if (e)
                for (let n = 0; n < e; n += 2) {
                  const e = t[p[n]][p[n + 1]].subscribe(i),
                    o = u.length;
                  u.push(i, e), c && c.push(s, r.index, o, -(o + 1));
                }
            }
          })(i, s, s[11], o, e, t, n, r),
          Pi
        );
      }
      function Di(e, t, n, r) {
        try {
          return !1 !== n(r);
        } catch (s) {
          return Ks(e, s), !1;
        }
      }
      function Ni(e, t, n, r, s) {
        return function n(i) {
          if (i === Function) return r;
          const o = 2 & e.flags ? gt(e.index, t) : t;
          0 == (32 & t[2]) && Hs(o);
          let a = Di(t, 0, r, i),
            l = n.__ngNextListenerFn__;
          for (; l; ) (a = Di(t, 0, l, i) && a), (l = l.__ngNextListenerFn__);
          return s && !1 === a && (i.preventDefault(), (i.returnValue = !1)), a;
        };
      }
      function Mi(e = 1) {
        return (function (e) {
          return (Ct.lFrame.contextLView = (function (e, t) {
            for (; e > 0; ) (t = t[15]), e--;
            return t;
          })(e, Ct.lFrame.contextLView))[8];
        })(e);
      }
      function Fi(e, t) {
        let n = null;
        const r = (function (e) {
          const t = e.attrs;
          if (null != t) {
            const e = t.indexOf(5);
            if (0 == (1 & e)) return t[e + 1];
          }
          return null;
        })(e);
        for (let s = 0; s < t.length; s++) {
          const i = t[s];
          if ("*" !== i) {
            if (null === r ? Xr(e, i, !0) : es(r, i)) return s;
          } else n = s;
        }
        return n;
      }
      function ji(e) {
        const t = kt()[16][6];
        if (!t.projection) {
          const n = (t.projection = Hn(e ? e.length : 1, null)),
            r = n.slice();
          let s = t.child;
          for (; null !== s; ) {
            const t = e ? Fi(s, e) : 0;
            null !== t &&
              (r[t] ? (r[t].projectionNext = s) : (n[t] = s), (r[t] = s)),
              (s = s.next);
          }
        }
      }
      function Li(e, t = 0, n) {
        const r = kt(),
          s = xt(),
          i = fs(s, 20 + e, 16, null, n || null);
        null === i.projection && (i.projection = t),
          Pt(),
          64 != (64 & i.flags) &&
            (function (e, t, n) {
              Ur(t[11], 0, t, n, Or(e, n, t), Mr(n.parent || t[6], n, t));
            })(s, r, i);
      }
      function Wi(e, t, n, r, s) {
        const i = e[n + 1],
          o = null === t;
        let a = r ? as(i) : cs(i),
          l = !1;
        for (; 0 !== a && (!1 === l || o); ) {
          const n = e[a + 1];
          zi(e[a], t) && ((l = !0), (e[a + 1] = r ? hs(n) : ls(n))),
            (a = r ? as(n) : cs(n));
        }
        l && (e[n + 1] = r ? ls(i) : hs(i));
      }
      function zi(e, t) {
        return (
          null === e ||
          null == t ||
          (Array.isArray(e) ? e[1] : e) === t ||
          (!(!Array.isArray(e) || "string" != typeof t) && Bn(e, t) >= 0)
        );
      }
      function qi(e, t, n) {
        return Ui(e, t, n, !1), qi;
      }
      function Hi(e, t) {
        return Ui(e, t, null, !0), Hi;
      }
      function Ui(e, t, n, r) {
        const s = kt(),
          i = xt(),
          o = (function (e) {
            const t = Ct.lFrame,
              n = t.bindingIndex;
            return (t.bindingIndex = t.bindingIndex + 2), n;
          })();
        i.firstUpdatePass &&
          (function (e, t, n, r) {
            const s = e.data;
            if (null === s[n + 1]) {
              const i = s[Kt()],
                o = (function (e, t) {
                  return t >= e.expandoStartIndex;
                })(e, n);
              (function (e, t) {
                return 0 != (e.flags & (t ? 16 : 32));
              })(i, r) &&
                null === t &&
                !o &&
                (t = !1),
                (t = (function (e, t, n, r) {
                  const s = (function (e) {
                    const t = Ct.lFrame.currentDirectiveIndex;
                    return -1 === t ? null : e[t];
                  })(e);
                  let i = r ? t.residualClasses : t.residualStyles;
                  if (null === s)
                    0 === (r ? t.classBindings : t.styleBindings) &&
                      ((n = Bi((n = Vi(null, e, t, n, r)), t.attrs, r)),
                      (i = null));
                  else {
                    const o = t.directiveStylingLast;
                    if (-1 === o || e[o] !== s)
                      if (((n = Vi(s, e, t, n, r)), null === i)) {
                        let n = (function (e, t, n) {
                          const r = n ? t.classBindings : t.styleBindings;
                          if (0 !== cs(r)) return e[as(r)];
                        })(e, t, r);
                        void 0 !== n &&
                          Array.isArray(n) &&
                          ((n = Vi(null, e, t, n[1], r)),
                          (n = Bi(n, t.attrs, r)),
                          (function (e, t, n, r) {
                            e[as(n ? t.classBindings : t.styleBindings)] = r;
                          })(e, t, r, n));
                      } else
                        i = (function (e, t, n) {
                          let r;
                          const s = t.directiveEnd;
                          for (let i = 1 + t.directiveStylingLast; i < s; i++)
                            r = Bi(r, e[i].hostAttrs, n);
                          return Bi(r, t.attrs, n);
                        })(e, t, r);
                  }
                  return (
                    void 0 !== i &&
                      (r ? (t.residualClasses = i) : (t.residualStyles = i)),
                    n
                  );
                })(s, i, t, r)),
                (function (e, t, n, r, s, i) {
                  let o = i ? t.classBindings : t.styleBindings,
                    a = as(o),
                    l = cs(o);
                  e[r] = n;
                  let c,
                    u = !1;
                  if (Array.isArray(n)) {
                    const e = n;
                    (c = e[1]), (null === c || Bn(e, c) > 0) && (u = !0);
                  } else c = n;
                  if (s)
                    if (0 !== l) {
                      const t = as(e[a + 1]);
                      (e[r + 1] = os(t, a)),
                        0 !== t && (e[t + 1] = us(e[t + 1], r)),
                        (e[a + 1] = (131071 & e[a + 1]) | (r << 17));
                    } else
                      (e[r + 1] = os(a, 0)),
                        0 !== a && (e[a + 1] = us(e[a + 1], r)),
                        (a = r);
                  else
                    (e[r + 1] = os(l, 0)),
                      0 === a ? (a = r) : (e[l + 1] = us(e[l + 1], r)),
                      (l = r);
                  u && (e[r + 1] = ls(e[r + 1])),
                    Wi(e, c, r, !0),
                    Wi(e, c, r, !1),
                    (function (e, t, n, r, s) {
                      const i = s ? e.residualClasses : e.residualStyles;
                      null != i &&
                        "string" == typeof t &&
                        Bn(i, t) >= 0 &&
                        (n[r + 1] = hs(n[r + 1]));
                    })(t, c, e, r, i),
                    (o = os(a, l)),
                    i ? (t.classBindings = o) : (t.styleBindings = o);
                })(s, i, t, n, o, r);
            }
          })(i, e, o, r),
          t !== rs &&
            _i(s, o, t) &&
            (function (e, t, n, r, s, i, o, a) {
              if (!(3 & t.type)) return;
              const l = e.data,
                c = l[a + 1];
              Qi(1 == (1 & c) ? $i(l, t, n, s, cs(c), o) : void 0) ||
                (Qi(i) ||
                  ((function (e) {
                    return 2 == (2 & e);
                  })(c) &&
                    (i = $i(l, null, n, s, a, o))),
                (function (e, t, n, r, s) {
                  const i = ut(e);
                  if (t)
                    s
                      ? i
                        ? e.addClass(n, r)
                        : n.classList.add(r)
                      : i
                      ? e.removeClass(n, r)
                      : n.classList.remove(r);
                  else {
                    let t = -1 === r.indexOf("-") ? void 0 : vr.DashCase;
                    if (null == s)
                      i ? e.removeStyle(n, r, t) : n.style.removeProperty(r);
                    else {
                      const o =
                        "string" == typeof s && s.endsWith("!important");
                      o && ((s = s.slice(0, -10)), (t |= vr.Important)),
                        i
                          ? e.setStyle(n, r, s, t)
                          : n.style.setProperty(r, s, o ? "important" : "");
                    }
                  }
                })(r, o, pt(Kt(), n), s, i));
            })(
              i,
              i.data[Kt()],
              s,
              s[11],
              e,
              (s[o + 1] = (function (e, t) {
                return (
                  null == e ||
                    ("string" == typeof t
                      ? (e += t)
                      : "object" == typeof e && (e = ee(ir(e)))),
                  e
                );
              })(t, n)),
              r,
              o
            );
      }
      function Vi(e, t, n, r, s) {
        let i = null;
        const o = n.directiveEnd;
        let a = n.directiveStylingLast;
        for (
          -1 === a ? (a = n.directiveStart) : a++;
          a < o && ((i = t[a]), (r = Bi(r, i.hostAttrs, s)), i !== e);

        )
          a++;
        return null !== e && (n.directiveStylingLast = a), r;
      }
      function Bi(e, t, n) {
        const r = n ? 1 : 2;
        let s = -1;
        if (null !== t)
          for (let i = 0; i < t.length; i++) {
            const o = t[i];
            "number" == typeof o
              ? (s = o)
              : s === r &&
                (Array.isArray(e) || (e = void 0 === e ? [] : ["", e]),
                Un(e, o, !!n || t[++i]));
          }
        return void 0 === e ? null : e;
      }
      function $i(e, t, n, r, s, i) {
        const o = null === t;
        let a;
        for (; s > 0; ) {
          const t = e[s],
            i = Array.isArray(t),
            l = i ? t[1] : t,
            c = null === l;
          let u = n[s + 1];
          u === rs && (u = c ? Re : void 0);
          let h = c ? Vn(u, r) : l === r ? u : void 0;
          if ((i && !Qi(h) && (h = Vn(t, r)), Qi(h) && ((a = h), o))) return a;
          const d = e[s + 1];
          s = o ? as(d) : cs(d);
        }
        if (null !== t) {
          let e = i ? t.residualClasses : t.residualStyles;
          null != e && (a = Vn(e, r));
        }
        return a;
      }
      function Qi(e) {
        return void 0 !== e;
      }
      function Gi(e, t = "") {
        const n = kt(),
          r = xt(),
          s = e + 20,
          i = r.firstCreatePass ? fs(r, s, 1, t, null) : r.data[s],
          o = (n[s] = (function (e, t) {
            return ut(e) ? e.createText(t) : e.createTextNode(t);
          })(n[11], t));
        jr(r, n, o, i), Ot(i, !1);
      }
      function Ki(e) {
        return Zi("", e, ""), Ki;
      }
      function Zi(e, t, n) {
        const r = kt(),
          s = (function (e, t, n, r) {
            return _i(e, Ft(), n) ? t + oe(n) + r : rs;
          })(r, e, t, n);
        return (
          s !== rs &&
            (function (e, t, n) {
              const r = pt(t, e);
              !(function (e, t, n) {
                ut(e) ? e.setValue(t, n) : (t.textContent = n);
              })(e[11], r, n);
            })(r, Kt(), s),
          Zi
        );
      }
      function Ji(e, t, n) {
        const r = kt();
        return _i(r, Ft(), t) && xs(xt(), Jt(), r, e, t, r[11], n, !0), Ji;
      }
      const Yi = void 0;
      var Xi = [
        "en",
        [["a", "p"], ["AM", "PM"], Yi],
        [["AM", "PM"], Yi, Yi],
        [
          ["S", "M", "T", "W", "T", "F", "S"],
          ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
          [
            "Sunday",
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
          ],
          ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
        ],
        Yi,
        [
          ["J", "F", "M", "A", "M", "J", "J", "A", "S", "O", "N", "D"],
          [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ],
          [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
            "August",
            "September",
            "October",
            "November",
            "December",
          ],
        ],
        Yi,
        [
          ["B", "A"],
          ["BC", "AD"],
          ["Before Christ", "Anno Domini"],
        ],
        0,
        [6, 0],
        ["M/d/yy", "MMM d, y", "MMMM d, y", "EEEE, MMMM d, y"],
        ["h:mm a", "h:mm:ss a", "h:mm:ss a z", "h:mm:ss a zzzz"],
        ["{1}, {0}", Yi, "{1} 'at' {0}", Yi],
        [
          ".",
          ",",
          ";",
          "%",
          "+",
          "-",
          "E",
          "\xd7",
          "\u2030",
          "\u221e",
          "NaN",
          ":",
        ],
        ["#,##0.###", "#,##0%", "\xa4#,##0.00", "#E0"],
        "USD",
        "$",
        "US Dollar",
        {},
        "ltr",
        function (e) {
          let t = Math.floor(Math.abs(e)),
            n = e.toString().replace(/^[^.]*\.?/, "").length;
          return 1 === t && 0 === n ? 1 : 5;
        },
      ];
      let eo = {};
      function to(e) {
        return (
          e in eo ||
            (eo[e] =
              Ae.ng &&
              Ae.ng.common &&
              Ae.ng.common.locales &&
              Ae.ng.common.locales[e]),
          eo[e]
        );
      }
      var no = (function (e) {
        return (
          (e[(e.LocaleId = 0)] = "LocaleId"),
          (e[(e.DayPeriodsFormat = 1)] = "DayPeriodsFormat"),
          (e[(e.DayPeriodsStandalone = 2)] = "DayPeriodsStandalone"),
          (e[(e.DaysFormat = 3)] = "DaysFormat"),
          (e[(e.DaysStandalone = 4)] = "DaysStandalone"),
          (e[(e.MonthsFormat = 5)] = "MonthsFormat"),
          (e[(e.MonthsStandalone = 6)] = "MonthsStandalone"),
          (e[(e.Eras = 7)] = "Eras"),
          (e[(e.FirstDayOfWeek = 8)] = "FirstDayOfWeek"),
          (e[(e.WeekendRange = 9)] = "WeekendRange"),
          (e[(e.DateFormat = 10)] = "DateFormat"),
          (e[(e.TimeFormat = 11)] = "TimeFormat"),
          (e[(e.DateTimeFormat = 12)] = "DateTimeFormat"),
          (e[(e.NumberSymbols = 13)] = "NumberSymbols"),
          (e[(e.NumberFormats = 14)] = "NumberFormats"),
          (e[(e.CurrencyCode = 15)] = "CurrencyCode"),
          (e[(e.CurrencySymbol = 16)] = "CurrencySymbol"),
          (e[(e.CurrencyName = 17)] = "CurrencyName"),
          (e[(e.Currencies = 18)] = "Currencies"),
          (e[(e.Directionality = 19)] = "Directionality"),
          (e[(e.PluralCase = 20)] = "PluralCase"),
          (e[(e.ExtraData = 21)] = "ExtraData"),
          e
        );
      })({});
      let ro = "en-US";
      function so(e) {
        var t, n;
        (n = "Expected localeId to be defined"),
          null == (t = e) &&
            (function (e, t, n, r) {
              throw new Error(
                `ASSERTION ERROR: ${e} [Expected=> null != ${t} <=Actual]`
              );
            })(n, t),
          "string" == typeof e && (ro = e.toLowerCase().replace(/_/g, "-"));
      }
      class io {}
      class oo {
        resolveComponentFactory(e) {
          throw (function (e) {
            const t = Error(
              `No component factory found for ${ee(
                e
              )}. Did you add it to @NgModule.entryComponents?`
            );
            return (t.ngComponent = e), t;
          })(e);
        }
      }
      let ao = (() => {
        class e {}
        return (e.NULL = new oo()), e;
      })();
      function lo(...e) {}
      function co(e, t) {
        return new ho(ft(e, t));
      }
      const uo = function () {
        return co(It(), kt());
      };
      let ho = (() => {
        class e {
          constructor(e) {
            this.nativeElement = e;
          }
        }
        return (e.__NG_ELEMENT_ID__ = uo), e;
      })();
      function po(e) {
        return e instanceof ho ? e.nativeElement : e;
      }
      class fo {}
      let mo = (() => {
        class e {}
        return (e.__NG_ELEMENT_ID__ = () => go()), e;
      })();
      const go = function () {
        const e = kt(),
          t = gt(It().index, e);
        return (function (e) {
          return e[11];
        })(Ze(t) ? t : e);
      };
      let yo = (() => {
        class e {}
        return (
          (e.ɵprov = ce({ token: e, providedIn: "root", factory: () => null })),
          e
        );
      })();
      class vo {
        constructor(e) {
          (this.full = e),
            (this.major = e.split(".")[0]),
            (this.minor = e.split(".")[1]),
            (this.patch = e.split(".").slice(2).join("."));
        }
      }
      const bo = new vo("11.2.14");
      class _o {
        constructor() {}
        supports(e) {
          return yi(e);
        }
        create(e) {
          return new So(e);
        }
      }
      const wo = (e, t) => t;
      class So {
        constructor(e) {
          (this.length = 0),
            (this._linkedRecords = null),
            (this._unlinkedRecords = null),
            (this._previousItHead = null),
            (this._itHead = null),
            (this._itTail = null),
            (this._additionsHead = null),
            (this._additionsTail = null),
            (this._movesHead = null),
            (this._movesTail = null),
            (this._removalsHead = null),
            (this._removalsTail = null),
            (this._identityChangesHead = null),
            (this._identityChangesTail = null),
            (this._trackByFn = e || wo);
        }
        forEachItem(e) {
          let t;
          for (t = this._itHead; null !== t; t = t._next) e(t);
        }
        forEachOperation(e) {
          let t = this._itHead,
            n = this._removalsHead,
            r = 0,
            s = null;
          for (; t || n; ) {
            const i = !n || (t && t.currentIndex < xo(n, r, s)) ? t : n,
              o = xo(i, r, s),
              a = i.currentIndex;
            if (i === n) r--, (n = n._nextRemoved);
            else if (((t = t._next), null == i.previousIndex)) r++;
            else {
              s || (s = []);
              const e = o - r,
                t = a - r;
              if (e != t) {
                for (let n = 0; n < e; n++) {
                  const r = n < s.length ? s[n] : (s[n] = 0),
                    i = r + n;
                  t <= i && i < e && (s[n] = r + 1);
                }
                s[i.previousIndex] = t - e;
              }
            }
            o !== a && e(i, o, a);
          }
        }
        forEachPreviousItem(e) {
          let t;
          for (t = this._previousItHead; null !== t; t = t._nextPrevious) e(t);
        }
        forEachAddedItem(e) {
          let t;
          for (t = this._additionsHead; null !== t; t = t._nextAdded) e(t);
        }
        forEachMovedItem(e) {
          let t;
          for (t = this._movesHead; null !== t; t = t._nextMoved) e(t);
        }
        forEachRemovedItem(e) {
          let t;
          for (t = this._removalsHead; null !== t; t = t._nextRemoved) e(t);
        }
        forEachIdentityChange(e) {
          let t;
          for (
            t = this._identityChangesHead;
            null !== t;
            t = t._nextIdentityChange
          )
            e(t);
        }
        diff(e) {
          if ((null == e && (e = []), !yi(e)))
            throw new Error(
              `Error trying to diff '${ee(
                e
              )}'. Only arrays and iterables are allowed`
            );
          return this.check(e) ? this : null;
        }
        onDestroy() {}
        check(e) {
          this._reset();
          let t,
            n,
            r,
            s = this._itHead,
            i = !1;
          if (Array.isArray(e)) {
            this.length = e.length;
            for (let t = 0; t < this.length; t++)
              (n = e[t]),
                (r = this._trackByFn(t, n)),
                null !== s && Object.is(s.trackById, r)
                  ? (i && (s = this._verifyReinsertion(s, n, r, t)),
                    Object.is(s.item, n) || this._addIdentityChange(s, n))
                  : ((s = this._mismatch(s, n, r, t)), (i = !0)),
                (s = s._next);
          } else
            (t = 0),
              (function (e, t) {
                if (Array.isArray(e))
                  for (let n = 0; n < e.length; n++) t(e[n]);
                else {
                  const n = e[gi()]();
                  let r;
                  for (; !(r = n.next()).done; ) t(r.value);
                }
              })(e, (e) => {
                (r = this._trackByFn(t, e)),
                  null !== s && Object.is(s.trackById, r)
                    ? (i && (s = this._verifyReinsertion(s, e, r, t)),
                      Object.is(s.item, e) || this._addIdentityChange(s, e))
                    : ((s = this._mismatch(s, e, r, t)), (i = !0)),
                  (s = s._next),
                  t++;
              }),
              (this.length = t);
          return this._truncate(s), (this.collection = e), this.isDirty;
        }
        get isDirty() {
          return (
            null !== this._additionsHead ||
            null !== this._movesHead ||
            null !== this._removalsHead ||
            null !== this._identityChangesHead
          );
        }
        _reset() {
          if (this.isDirty) {
            let e;
            for (
              e = this._previousItHead = this._itHead;
              null !== e;
              e = e._next
            )
              e._nextPrevious = e._next;
            for (e = this._additionsHead; null !== e; e = e._nextAdded)
              e.previousIndex = e.currentIndex;
            for (
              this._additionsHead = this._additionsTail = null,
                e = this._movesHead;
              null !== e;
              e = e._nextMoved
            )
              e.previousIndex = e.currentIndex;
            (this._movesHead = this._movesTail = null),
              (this._removalsHead = this._removalsTail = null),
              (this._identityChangesHead = this._identityChangesTail = null);
          }
        }
        _mismatch(e, t, n, r) {
          let s;
          return (
            null === e ? (s = this._itTail) : ((s = e._prev), this._remove(e)),
            null !==
            (e =
              null === this._unlinkedRecords
                ? null
                : this._unlinkedRecords.get(n, null))
              ? (Object.is(e.item, t) || this._addIdentityChange(e, t),
                this._reinsertAfter(e, s, r))
              : null !==
                (e =
                  null === this._linkedRecords
                    ? null
                    : this._linkedRecords.get(n, r))
              ? (Object.is(e.item, t) || this._addIdentityChange(e, t),
                this._moveAfter(e, s, r))
              : (e = this._addAfter(new Co(t, n), s, r)),
            e
          );
        }
        _verifyReinsertion(e, t, n, r) {
          let s =
            null === this._unlinkedRecords
              ? null
              : this._unlinkedRecords.get(n, null);
          return (
            null !== s
              ? (e = this._reinsertAfter(s, e._prev, r))
              : e.currentIndex != r &&
                ((e.currentIndex = r), this._addToMoves(e, r)),
            e
          );
        }
        _truncate(e) {
          for (; null !== e; ) {
            const t = e._next;
            this._addToRemovals(this._unlink(e)), (e = t);
          }
          null !== this._unlinkedRecords && this._unlinkedRecords.clear(),
            null !== this._additionsTail &&
              (this._additionsTail._nextAdded = null),
            null !== this._movesTail && (this._movesTail._nextMoved = null),
            null !== this._itTail && (this._itTail._next = null),
            null !== this._removalsTail &&
              (this._removalsTail._nextRemoved = null),
            null !== this._identityChangesTail &&
              (this._identityChangesTail._nextIdentityChange = null);
        }
        _reinsertAfter(e, t, n) {
          null !== this._unlinkedRecords && this._unlinkedRecords.remove(e);
          const r = e._prevRemoved,
            s = e._nextRemoved;
          return (
            null === r ? (this._removalsHead = s) : (r._nextRemoved = s),
            null === s ? (this._removalsTail = r) : (s._prevRemoved = r),
            this._insertAfter(e, t, n),
            this._addToMoves(e, n),
            e
          );
        }
        _moveAfter(e, t, n) {
          return (
            this._unlink(e),
            this._insertAfter(e, t, n),
            this._addToMoves(e, n),
            e
          );
        }
        _addAfter(e, t, n) {
          return (
            this._insertAfter(e, t, n),
            (this._additionsTail =
              null === this._additionsTail
                ? (this._additionsHead = e)
                : (this._additionsTail._nextAdded = e)),
            e
          );
        }
        _insertAfter(e, t, n) {
          const r = null === t ? this._itHead : t._next;
          return (
            (e._next = r),
            (e._prev = t),
            null === r ? (this._itTail = e) : (r._prev = e),
            null === t ? (this._itHead = e) : (t._next = e),
            null === this._linkedRecords && (this._linkedRecords = new ko()),
            this._linkedRecords.put(e),
            (e.currentIndex = n),
            e
          );
        }
        _remove(e) {
          return this._addToRemovals(this._unlink(e));
        }
        _unlink(e) {
          null !== this._linkedRecords && this._linkedRecords.remove(e);
          const t = e._prev,
            n = e._next;
          return (
            null === t ? (this._itHead = n) : (t._next = n),
            null === n ? (this._itTail = t) : (n._prev = t),
            e
          );
        }
        _addToMoves(e, t) {
          return (
            e.previousIndex === t ||
              (this._movesTail =
                null === this._movesTail
                  ? (this._movesHead = e)
                  : (this._movesTail._nextMoved = e)),
            e
          );
        }
        _addToRemovals(e) {
          return (
            null === this._unlinkedRecords &&
              (this._unlinkedRecords = new ko()),
            this._unlinkedRecords.put(e),
            (e.currentIndex = null),
            (e._nextRemoved = null),
            null === this._removalsTail
              ? ((this._removalsTail = this._removalsHead = e),
                (e._prevRemoved = null))
              : ((e._prevRemoved = this._removalsTail),
                (this._removalsTail = this._removalsTail._nextRemoved = e)),
            e
          );
        }
        _addIdentityChange(e, t) {
          return (
            (e.item = t),
            (this._identityChangesTail =
              null === this._identityChangesTail
                ? (this._identityChangesHead = e)
                : (this._identityChangesTail._nextIdentityChange = e)),
            e
          );
        }
      }
      class Co {
        constructor(e, t) {
          (this.item = e),
            (this.trackById = t),
            (this.currentIndex = null),
            (this.previousIndex = null),
            (this._nextPrevious = null),
            (this._prev = null),
            (this._next = null),
            (this._prevDup = null),
            (this._nextDup = null),
            (this._prevRemoved = null),
            (this._nextRemoved = null),
            (this._nextAdded = null),
            (this._nextMoved = null),
            (this._nextIdentityChange = null);
        }
      }
      class Eo {
        constructor() {
          (this._head = null), (this._tail = null);
        }
        add(e) {
          null === this._head
            ? ((this._head = this._tail = e),
              (e._nextDup = null),
              (e._prevDup = null))
            : ((this._tail._nextDup = e),
              (e._prevDup = this._tail),
              (e._nextDup = null),
              (this._tail = e));
        }
        get(e, t) {
          let n;
          for (n = this._head; null !== n; n = n._nextDup)
            if (
              (null === t || t <= n.currentIndex) &&
              Object.is(n.trackById, e)
            )
              return n;
          return null;
        }
        remove(e) {
          const t = e._prevDup,
            n = e._nextDup;
          return (
            null === t ? (this._head = n) : (t._nextDup = n),
            null === n ? (this._tail = t) : (n._prevDup = t),
            null === this._head
          );
        }
      }
      class ko {
        constructor() {
          this.map = new Map();
        }
        put(e) {
          const t = e.trackById;
          let n = this.map.get(t);
          n || ((n = new Eo()), this.map.set(t, n)), n.add(e);
        }
        get(e, t) {
          const n = this.map.get(e);
          return n ? n.get(e, t) : null;
        }
        remove(e) {
          const t = e.trackById;
          return this.map.get(t).remove(e) && this.map.delete(t), e;
        }
        get isEmpty() {
          return 0 === this.map.size;
        }
        clear() {
          this.map.clear();
        }
      }
      function xo(e, t, n) {
        const r = e.previousIndex;
        if (null === r) return r;
        let s = 0;
        return n && r < n.length && (s = n[r]), r + t + s;
      }
      class To {
        constructor() {}
        supports(e) {
          return e instanceof Map || vi(e);
        }
        create() {
          return new Io();
        }
      }
      class Io {
        constructor() {
          (this._records = new Map()),
            (this._mapHead = null),
            (this._appendAfter = null),
            (this._previousMapHead = null),
            (this._changesHead = null),
            (this._changesTail = null),
            (this._additionsHead = null),
            (this._additionsTail = null),
            (this._removalsHead = null),
            (this._removalsTail = null);
        }
        get isDirty() {
          return (
            null !== this._additionsHead ||
            null !== this._changesHead ||
            null !== this._removalsHead
          );
        }
        forEachItem(e) {
          let t;
          for (t = this._mapHead; null !== t; t = t._next) e(t);
        }
        forEachPreviousItem(e) {
          let t;
          for (t = this._previousMapHead; null !== t; t = t._nextPrevious) e(t);
        }
        forEachChangedItem(e) {
          let t;
          for (t = this._changesHead; null !== t; t = t._nextChanged) e(t);
        }
        forEachAddedItem(e) {
          let t;
          for (t = this._additionsHead; null !== t; t = t._nextAdded) e(t);
        }
        forEachRemovedItem(e) {
          let t;
          for (t = this._removalsHead; null !== t; t = t._nextRemoved) e(t);
        }
        diff(e) {
          if (e) {
            if (!(e instanceof Map || vi(e)))
              throw new Error(
                `Error trying to diff '${ee(
                  e
                )}'. Only maps and objects are allowed`
              );
          } else e = new Map();
          return this.check(e) ? this : null;
        }
        onDestroy() {}
        check(e) {
          this._reset();
          let t = this._mapHead;
          if (
            ((this._appendAfter = null),
            this._forEach(e, (e, n) => {
              if (t && t.key === n)
                this._maybeAddToChanges(t, e),
                  (this._appendAfter = t),
                  (t = t._next);
              else {
                const r = this._getOrCreateRecordForKey(n, e);
                t = this._insertBeforeOrAppend(t, r);
              }
            }),
            t)
          ) {
            t._prev && (t._prev._next = null), (this._removalsHead = t);
            for (let e = t; null !== e; e = e._nextRemoved)
              e === this._mapHead && (this._mapHead = null),
                this._records.delete(e.key),
                (e._nextRemoved = e._next),
                (e.previousValue = e.currentValue),
                (e.currentValue = null),
                (e._prev = null),
                (e._next = null);
          }
          return (
            this._changesTail && (this._changesTail._nextChanged = null),
            this._additionsTail && (this._additionsTail._nextAdded = null),
            this.isDirty
          );
        }
        _insertBeforeOrAppend(e, t) {
          if (e) {
            const n = e._prev;
            return (
              (t._next = e),
              (t._prev = n),
              (e._prev = t),
              n && (n._next = t),
              e === this._mapHead && (this._mapHead = t),
              (this._appendAfter = e),
              e
            );
          }
          return (
            this._appendAfter
              ? ((this._appendAfter._next = t), (t._prev = this._appendAfter))
              : (this._mapHead = t),
            (this._appendAfter = t),
            null
          );
        }
        _getOrCreateRecordForKey(e, t) {
          if (this._records.has(e)) {
            const n = this._records.get(e);
            this._maybeAddToChanges(n, t);
            const r = n._prev,
              s = n._next;
            return (
              r && (r._next = s),
              s && (s._prev = r),
              (n._next = null),
              (n._prev = null),
              n
            );
          }
          const n = new Ao(e);
          return (
            this._records.set(e, n),
            (n.currentValue = t),
            this._addToAdditions(n),
            n
          );
        }
        _reset() {
          if (this.isDirty) {
            let e;
            for (
              this._previousMapHead = this._mapHead, e = this._previousMapHead;
              null !== e;
              e = e._next
            )
              e._nextPrevious = e._next;
            for (e = this._changesHead; null !== e; e = e._nextChanged)
              e.previousValue = e.currentValue;
            for (e = this._additionsHead; null != e; e = e._nextAdded)
              e.previousValue = e.currentValue;
            (this._changesHead = this._changesTail = null),
              (this._additionsHead = this._additionsTail = null),
              (this._removalsHead = null);
          }
        }
        _maybeAddToChanges(e, t) {
          Object.is(t, e.currentValue) ||
            ((e.previousValue = e.currentValue),
            (e.currentValue = t),
            this._addToChanges(e));
        }
        _addToAdditions(e) {
          null === this._additionsHead
            ? (this._additionsHead = this._additionsTail = e)
            : ((this._additionsTail._nextAdded = e), (this._additionsTail = e));
        }
        _addToChanges(e) {
          null === this._changesHead
            ? (this._changesHead = this._changesTail = e)
            : ((this._changesTail._nextChanged = e), (this._changesTail = e));
        }
        _forEach(e, t) {
          e instanceof Map
            ? e.forEach(t)
            : Object.keys(e).forEach((n) => t(e[n], n));
        }
      }
      class Ao {
        constructor(e) {
          (this.key = e),
            (this.previousValue = null),
            (this.currentValue = null),
            (this._nextPrevious = null),
            (this._next = null),
            (this._prev = null),
            (this._nextAdded = null),
            (this._nextRemoved = null),
            (this._nextChanged = null);
        }
      }
      function Oo() {
        return new Ro([new _o()]);
      }
      let Ro = (() => {
        class e {
          constructor(e) {
            this.factories = e;
          }
          static create(t, n) {
            if (null != n) {
              const e = n.factories.slice();
              t = t.concat(e);
            }
            return new e(t);
          }
          static extend(t) {
            return {
              provide: e,
              useFactory: (n) => e.create(t, n || Oo()),
              deps: [[e, new rr(), new nr()]],
            };
          }
          find(e) {
            const t = this.factories.find((t) => t.supports(e));
            if (null != t) return t;
            throw new Error(
              `Cannot find a differ supporting object '${e}' of type '${
                ((n = e), n.name || typeof n)
              }'`
            );
            var n;
          }
        }
        return (e.ɵprov = ce({ token: e, providedIn: "root", factory: Oo })), e;
      })();
      function Po() {
        return new Do([new To()]);
      }
      let Do = (() => {
        class e {
          constructor(e) {
            this.factories = e;
          }
          static create(t, n) {
            if (n) {
              const e = n.factories.slice();
              t = t.concat(e);
            }
            return new e(t);
          }
          static extend(t) {
            return {
              provide: e,
              useFactory: (n) => e.create(t, n || Po()),
              deps: [[e, new rr(), new nr()]],
            };
          }
          find(e) {
            const t = this.factories.find((t) => t.supports(e));
            if (t) return t;
            throw new Error(`Cannot find a differ supporting object '${e}'`);
          }
        }
        return (e.ɵprov = ce({ token: e, providedIn: "root", factory: Po })), e;
      })();
      function No(e, t, n, r, s = !1) {
        for (; null !== n; ) {
          const i = t[n.index];
          if ((null !== i && r.push(dt(i)), Je(i)))
            for (let e = 10; e < i.length; e++) {
              const t = i[e],
                n = t[1].firstChild;
              null !== n && No(t[1], t, n, r);
            }
          const o = n.type;
          if (8 & o) No(e, t, n.child, r);
          else if (32 & o) {
            const e = br(n, t);
            let s;
            for (; (s = e()); ) r.push(s);
          } else if (16 & o) {
            const e = Wr(t, n);
            if (Array.isArray(e)) r.push(...e);
            else {
              const n = _r(t[16]);
              No(n[1], n, e, r, !0);
            }
          }
          n = s ? n.projectionNext : n.next;
        }
        return r;
      }
      class Mo {
        constructor(e, t) {
          (this._lView = e),
            (this._cdRefInjectingView = t),
            (this._appRef = null),
            (this._attachedToViewContainer = !1);
        }
        get rootNodes() {
          const e = this._lView,
            t = e[1];
          return No(t, e, t.firstChild, []);
        }
        get context() {
          return this._lView[8];
        }
        get destroyed() {
          return 256 == (256 & this._lView[2]);
        }
        destroy() {
          if (this._appRef) this._appRef.detachView(this);
          else if (this._attachedToViewContainer) {
            const e = this._lView[3];
            if (Je(e)) {
              const t = e[8],
                n = t ? t.indexOf(this) : -1;
              n > -1 && (Tr(e, n), qn(t, n));
            }
            this._attachedToViewContainer = !1;
          }
          Ir(this._lView[1], this._lView);
        }
        onDestroy(e) {
          Es(this._lView[1], this._lView, null, e);
        }
        markForCheck() {
          Hs(this._cdRefInjectingView || this._lView);
        }
        detach() {
          this._lView[2] &= -129;
        }
        reattach() {
          this._lView[2] |= 128;
        }
        detectChanges() {
          Us(this._lView[1], this._lView, this.context);
        }
        checkNoChanges() {
          !(function (e, t, n) {
            Nt(!0);
            try {
              Us(e, t, n);
            } finally {
              Nt(!1);
            }
          })(this._lView[1], this._lView, this.context);
        }
        attachToViewContainerRef() {
          if (this._appRef)
            throw new Error(
              "This view is already attached directly to the ApplicationRef!"
            );
          this._attachedToViewContainer = !0;
        }
        detachFromAppRef() {
          var e;
          (this._appRef = null),
            Hr(this._lView[1], (e = this._lView), e[11], 2, null, null);
        }
        attachToAppRef(e) {
          if (this._attachedToViewContainer)
            throw new Error(
              "This view is already attached to a ViewContainer!"
            );
          this._appRef = e;
        }
      }
      class Fo extends Mo {
        constructor(e) {
          super(e), (this._view = e);
        }
        detectChanges() {
          Vs(this._view);
        }
        checkNoChanges() {
          !(function (e) {
            Nt(!0);
            try {
              Vs(e);
            } finally {
              Nt(!1);
            }
          })(this._view);
        }
        get context() {
          return null;
        }
      }
      const jo = function (e = !1) {
        return (function (e, t, n) {
          if (!n && Xe(e)) {
            const n = gt(e.index, t);
            return new Mo(n, n);
          }
          return 47 & e.type ? new Mo(t[16], t) : null;
        })(It(), kt(), e);
      };
      let Lo = (() => {
        class e {}
        return (e.__NG_ELEMENT_ID__ = jo), (e.__ChangeDetectorRef__ = !0), e;
      })();
      const Wo = [new To()],
        zo = new Ro([new _o()]),
        qo = new Do(Wo),
        Ho = function () {
          return $o(It(), kt());
        };
      let Uo = (() => {
        class e {}
        return (e.__NG_ELEMENT_ID__ = Ho), e;
      })();
      const Vo = Uo,
        Bo = class extends Vo {
          constructor(e, t, n) {
            super(),
              (this._declarationLView = e),
              (this._declarationTContainer = t),
              (this.elementRef = n);
          }
          createEmbeddedView(e) {
            const t = this._declarationTContainer.tViews,
              n = ps(
                this._declarationLView,
                t,
                e,
                16,
                null,
                t.declTNode,
                null,
                null,
                null,
                null
              );
            n[17] = this._declarationLView[this._declarationTContainer.index];
            const r = this._declarationLView[19];
            return (
              null !== r && (n[19] = r.createEmbeddedView(t)),
              gs(t, n, e),
              new Mo(n)
            );
          }
        };
      function $o(e, t) {
        return 4 & e.type ? new Bo(t, e, co(e, t)) : null;
      }
      class Qo {}
      class Go {}
      const Ko = function () {
        return ta(It(), kt());
      };
      let Zo = (() => {
        class e {}
        return (e.__NG_ELEMENT_ID__ = Ko), e;
      })();
      const Jo = Zo,
        Yo = class extends Jo {
          constructor(e, t, n) {
            super(),
              (this._lContainer = e),
              (this._hostTNode = t),
              (this._hostLView = n);
          }
          get element() {
            return co(this._hostTNode, this._hostLView);
          }
          get injector() {
            return new Pn(this._hostTNode, this._hostLView);
          }
          get parentInjector() {
            const e = _n(this._hostTNode, this._hostLView);
            if (hn(e)) {
              const t = pn(e, this._hostLView),
                n = dn(e);
              return new Pn(t[1].data[n + 8], t);
            }
            return new Pn(null, this._hostLView);
          }
          clear() {
            for (; this.length > 0; ) this.remove(this.length - 1);
          }
          get(e) {
            const t = Xo(this._lContainer);
            return (null !== t && t[e]) || null;
          }
          get length() {
            return this._lContainer.length - 10;
          }
          createEmbeddedView(e, t, n) {
            const r = e.createEmbeddedView(t || {});
            return this.insert(r, n), r;
          }
          createComponent(e, t, n, r, s) {
            const i = n || this.parentInjector;
            if (!s && null == e.ngModule && i) {
              const e = i.get(Qo, null);
              e && (s = e);
            }
            const o = e.create(i, r, void 0, s);
            return this.insert(o.hostView, t), o;
          }
          insert(e, t) {
            const n = e._lView,
              r = n[1];
            if (Je(n[3])) {
              const t = this.indexOf(e);
              if (-1 !== t) this.detach(t);
              else {
                const t = n[3],
                  r = new Yo(t, t[6], t[3]);
                r.detach(r.indexOf(e));
              }
            }
            const s = this._adjustIndex(t),
              i = this._lContainer;
            !(function (e, t, n, r) {
              const s = 10 + r,
                i = n.length;
              r > 0 && (n[s - 1][4] = t),
                r < i - 10
                  ? ((t[4] = n[s]), zn(n, 10 + r, t))
                  : (n.push(t), (t[4] = null)),
                (t[3] = n);
              const o = t[17];
              null !== o &&
                n !== o &&
                (function (e, t) {
                  const n = e[9];
                  t[16] !== t[3][3][16] && (e[2] = !0),
                    null === n ? (e[9] = [t]) : n.push(t);
                })(o, t);
              const a = t[19];
              null !== a && a.insertView(e), (t[2] |= 128);
            })(r, n, i, s);
            const o = zr(s, i),
              a = n[11],
              l = Nr(a, i[7]);
            return (
              null !== l &&
                (function (e, t, n, r, s, i) {
                  (r[0] = s), (r[6] = t), Hr(e, r, n, 1, s, i);
                })(r, i[6], a, n, l, o),
              e.attachToViewContainerRef(),
              zn(ea(i), s, e),
              e
            );
          }
          move(e, t) {
            return this.insert(e, t);
          }
          indexOf(e) {
            const t = Xo(this._lContainer);
            return null !== t ? t.indexOf(e) : -1;
          }
          remove(e) {
            const t = this._adjustIndex(e, -1),
              n = Tr(this._lContainer, t);
            n && (qn(ea(this._lContainer), t), Ir(n[1], n));
          }
          detach(e) {
            const t = this._adjustIndex(e, -1),
              n = Tr(this._lContainer, t);
            return n && null != qn(ea(this._lContainer), t) ? new Mo(n) : null;
          }
          _adjustIndex(e, t = 0) {
            return null == e ? this.length + t : e;
          }
        };
      function Xo(e) {
        return e[8];
      }
      function ea(e) {
        return e[8] || (e[8] = []);
      }
      function ta(e, t) {
        let n;
        const r = t[e.index];
        if (Je(r)) n = r;
        else {
          let s;
          if (8 & e.type) s = dt(r);
          else {
            const n = t[11];
            s = n.createComment("");
            const r = ft(e, t);
            Rr(
              n,
              Nr(n, r),
              s,
              (function (e, t) {
                return ut(e) ? e.nextSibling(t) : t.nextSibling;
              })(n, r),
              !1
            );
          }
          (t[e.index] = n = js(r, t, s, e)), qs(t, n);
        }
        return new Yo(n, e, t);
      }
      const na = {};
      class ra extends ao {
        constructor(e) {
          super(), (this.ngModule = e);
        }
        resolveComponentFactory(e) {
          const t = Ge(e);
          return new oa(t, this.ngModule);
        }
      }
      function sa(e) {
        const t = [];
        for (let n in e)
          e.hasOwnProperty(n) && t.push({ propName: e[n], templateName: n });
        return t;
      }
      const ia = new Mn("SCHEDULER_TOKEN", {
        providedIn: "root",
        factory: () => mr,
      });
      class oa extends io {
        constructor(e, t) {
          super(),
            (this.componentDef = e),
            (this.ngModule = t),
            (this.componentType = e.type),
            (this.selector = e.selectors.map(ns).join(",")),
            (this.ngContentSelectors = e.ngContentSelectors
              ? e.ngContentSelectors
              : []),
            (this.isBoundToModule = !!t);
        }
        get inputs() {
          return sa(this.componentDef.inputs);
        }
        get outputs() {
          return sa(this.componentDef.outputs);
        }
        create(e, t, n, r) {
          const s = (r = r || this.ngModule)
              ? (function (e, t) {
                  return {
                    get: (n, r, s) => {
                      const i = e.get(n, na, s);
                      return i !== na || r === na ? i : t.get(n, r, s);
                    },
                  };
                })(e, r.injector)
              : e,
            i = s.get(fo, ht),
            o = s.get(yo, null),
            a = i.createRenderer(null, this.componentDef),
            l = this.componentDef.selectors[0][0] || "div",
            c = n
              ? (function (e, t, n) {
                  if (ut(e)) return e.selectRootElement(t, n === Ee.ShadowDom);
                  let r = "string" == typeof t ? e.querySelector(t) : t;
                  return (r.textContent = ""), r;
                })(a, n, this.componentDef.encapsulation)
              : kr(
                  i.createRenderer(null, this.componentDef),
                  l,
                  (function (e) {
                    const t = e.toLowerCase();
                    return "svg" === t
                      ? "http://www.w3.org/2000/svg"
                      : "math" === t
                      ? "http://www.w3.org/1998/MathML/"
                      : null;
                  })(l)
                ),
            u = this.componentDef.onPush ? 576 : 528,
            h = {
              components: [],
              scheduler: mr,
              clean: $s,
              playerHandler: null,
              flags: 0,
            },
            d = Cs(0, null, null, 1, 0, null, null, null, null, null),
            p = ps(null, d, h, u, null, null, i, a, o, s);
          let f, m;
          Ut(p);
          try {
            const e = (function (e, t, n, r, s, i) {
              const o = n[1];
              n[20] = e;
              const a = fs(o, 20, 2, "#host", null),
                l = (a.mergedAttrs = t.hostAttrs);
              null !== l &&
                (Js(a, l, !0),
                null !== e &&
                  (on(s, e, l),
                  null !== a.classes && Br(s, e, a.classes),
                  null !== a.styles && Vr(s, e, a.styles)));
              const c = r.createRenderer(e, t),
                u = ps(
                  n,
                  Ss(t),
                  null,
                  t.onPush ? 64 : 16,
                  n[20],
                  a,
                  r,
                  c,
                  null,
                  null
                );
              return (
                o.firstCreatePass &&
                  (wn(yn(a, n), o, t.type), Os(o, a), Ps(a, n.length, 1)),
                qs(n, u),
                (n[20] = u)
              );
            })(c, this.componentDef, p, i, a);
            if (c)
              if (n) on(a, c, ["ng-version", bo.full]);
              else {
                const { attrs: e, classes: t } = (function (e) {
                  const t = [],
                    n = [];
                  let r = 1,
                    s = 2;
                  for (; r < e.length; ) {
                    let i = e[r];
                    if ("string" == typeof i)
                      2 === s
                        ? "" !== i && t.push(i, e[++r])
                        : 8 === s && n.push(i);
                    else {
                      if (!Jr(s)) break;
                      s = i;
                    }
                    r++;
                  }
                  return { attrs: t, classes: n };
                })(this.componentDef.selectors[0]);
                e && on(a, c, e), t && t.length > 0 && Br(a, c, t.join(" "));
              }
            if (((m = mt(d, 20)), void 0 !== t)) {
              const e = (m.projection = []);
              for (let n = 0; n < this.ngContentSelectors.length; n++) {
                const r = t[n];
                e.push(null != r ? Array.from(r) : null);
              }
            }
            (f = (function (e, t, n, r, s) {
              const i = n[1],
                o = (function (e, t, n) {
                  const r = It();
                  e.firstCreatePass &&
                    (n.providersResolver && n.providersResolver(n),
                    Ds(e, r, t, ms(e, t, 1, null), n));
                  const s = An(t, e, r.directiveStart, r);
                  fr(s, t);
                  const i = ft(r, t);
                  return i && fr(i, t), s;
                })(i, n, t);
              if (
                (r.components.push(o),
                (e[8] = o),
                s && s.forEach((e) => e(o, t)),
                t.contentQueries)
              ) {
                const e = It();
                t.contentQueries(1, o, e.directiveStart);
              }
              const a = It();
              return (
                !i.firstCreatePass ||
                  (null === t.hostBindings && null === t.hostAttrs) ||
                  (Zt(a.index),
                  Is(n[1], a, 0, a.directiveStart, a.directiveEnd, t),
                  As(t, o)),
                o
              );
            })(e, this.componentDef, p, h, [fi])),
              gs(d, p, null);
          } finally {
            Gt();
          }
          return new aa(this.componentType, f, co(m, p), p, m);
        }
      }
      class aa extends class {} {
        constructor(e, t, n, r, s) {
          super(),
            (this.location = n),
            (this._rootLView = r),
            (this._tNode = s),
            (this.instance = t),
            (this.hostView = this.changeDetectorRef = new Fo(r)),
            (this.componentType = e);
        }
        get injector() {
          return new Pn(this._tNode, this._rootLView);
        }
        destroy() {
          this.hostView.destroy();
        }
        onDestroy(e) {
          this.hostView.onDestroy(e);
        }
      }
      const la = new Map();
      class ca extends Qo {
        constructor(e, t) {
          super(),
            (this._parent = t),
            (this._bootstrapComponents = []),
            (this.injector = this),
            (this.destroyCbs = []),
            (this.componentFactoryResolver = new ra(this));
          const n = Ke(e),
            r = e[je] || null;
          r && so(r),
            (this._bootstrapComponents = yr(n.bootstrap)),
            (this._r3Injector = oi(
              e,
              t,
              [
                { provide: Qo, useValue: this },
                { provide: ao, useValue: this.componentFactoryResolver },
              ],
              ee(e)
            )),
            this._r3Injector._resolveInjectorDefTypes(),
            (this.instance = this.get(e));
        }
        get(e, t = pi.THROW_IF_NOT_FOUND, n = ve.Default) {
          return e === pi || e === Qo || e === Ys
            ? this
            : this._r3Injector.get(e, t, n);
        }
        destroy() {
          const e = this._r3Injector;
          !e.destroyed && e.destroy(),
            this.destroyCbs.forEach((e) => e()),
            (this.destroyCbs = null);
        }
        onDestroy(e) {
          this.destroyCbs.push(e);
        }
      }
      class ua extends Go {
        constructor(e) {
          super(),
            (this.moduleType = e),
            null !== Ke(e) &&
              (function (e) {
                const t = new Set();
                !(function e(n) {
                  const r = Ke(n, !0),
                    s = r.id;
                  null !== s &&
                    ((function (e, t, n) {
                      if (t && t !== n)
                        throw new Error(
                          `Duplicate module registered for ${e} - ${ee(
                            t
                          )} vs ${ee(t.name)}`
                        );
                    })(s, la.get(s), n),
                    la.set(s, n));
                  const i = yr(r.imports);
                  for (const o of i) t.has(o) || (t.add(o), e(o));
                })(e);
              })(e);
        }
        create(e) {
          return new ca(this.moduleType, e);
        }
      }
      function ha(e, t, n) {
        const r = Mt() + e,
          s = kt();
        return s[r] === rs
          ? bi(s, r, n ? t.call(n) : t())
          : (function (e, t) {
              return e[t];
            })(s, r);
      }
      function da(e, t, n, r) {
        return (function (e, t, n, r, s, i) {
          const o = t + n;
          return _i(e, o, s)
            ? bi(e, o + 1, i ? r.call(i, s) : r(s))
            : fa(e, o + 1);
        })(kt(), Mt(), e, t, n, r);
      }
      function pa(e, t, n, r, s) {
        return (function (e, t, n, r, s, i, o) {
          const a = t + n;
          return (function (e, t, n, r) {
            const s = _i(e, t, n);
            return _i(e, t + 1, r) || s;
          })(e, a, s, i)
            ? bi(e, a + 2, o ? r.call(o, s, i) : r(s, i))
            : fa(e, a + 2);
        })(kt(), Mt(), e, t, n, r, s);
      }
      function fa(e, t) {
        const n = e[t];
        return n === rs ? void 0 : n;
      }
      function ma(e) {
        return (t) => {
          setTimeout(e, void 0, t);
        };
      }
      const ga = class extends C {
        constructor(e = !1) {
          super(), (this.__isAsync = e);
        }
        emit(e) {
          super.next(e);
        }
        subscribe(e, t, n) {
          var r, s, i;
          let o = e,
            a = t || (() => null),
            l = n;
          if (e && "object" == typeof e) {
            const t = e;
            (o = null === (r = t.next) || void 0 === r ? void 0 : r.bind(t)),
              (a = null === (s = t.error) || void 0 === s ? void 0 : s.bind(t)),
              (l =
                null === (i = t.complete) || void 0 === i ? void 0 : i.bind(t));
          }
          this.__isAsync && ((a = ma(a)), o && (o = ma(o)), l && (l = ma(l)));
          const c = super.subscribe({ next: o, error: a, complete: l });
          return e instanceof h && e.add(c), c;
        }
      };
      function ya() {
        return this._results[gi()]();
      }
      class va {
        constructor(e = !1) {
          (this._emitDistinctChangesOnly = e),
            (this.dirty = !0),
            (this._results = []),
            (this._changesDetected = !1),
            (this._changes = null),
            (this.length = 0),
            (this.first = void 0),
            (this.last = void 0);
          const t = gi(),
            n = va.prototype;
          n[t] || (n[t] = ya);
        }
        get changes() {
          return this._changes || (this._changes = new ga());
        }
        get(e) {
          return this._results[e];
        }
        map(e) {
          return this._results.map(e);
        }
        filter(e) {
          return this._results.filter(e);
        }
        find(e) {
          return this._results.find(e);
        }
        reduce(e, t) {
          return this._results.reduce(e, t);
        }
        forEach(e) {
          this._results.forEach(e);
        }
        some(e) {
          return this._results.some(e);
        }
        toArray() {
          return this._results.slice();
        }
        toString() {
          return this._results.toString();
        }
        reset(e, t) {
          this.dirty = !1;
          const n = Ln(e);
          (this._changesDetected = !(function (e, t, n) {
            if (e.length !== t.length) return !1;
            for (let r = 0; r < e.length; r++) {
              let s = e[r],
                i = t[r];
              if ((n && ((s = n(s)), (i = n(i))), i !== s)) return !1;
            }
            return !0;
          })(this._results, n, t)) &&
            ((this._results = n),
            (this.length = n.length),
            (this.last = n[this.length - 1]),
            (this.first = n[0]));
        }
        notifyOnChanges() {
          !this._changes ||
            (!this._changesDetected && this._emitDistinctChangesOnly) ||
            this._changes.emit(this);
        }
        setDirty() {
          this.dirty = !0;
        }
        destroy() {
          this.changes.complete(), this.changes.unsubscribe();
        }
      }
      class ba {
        constructor(e) {
          (this.queryList = e), (this.matches = null);
        }
        clone() {
          return new ba(this.queryList);
        }
        setDirty() {
          this.queryList.setDirty();
        }
      }
      class _a {
        constructor(e = []) {
          this.queries = e;
        }
        createEmbeddedView(e) {
          const t = e.queries;
          if (null !== t) {
            const n =
                null !== e.contentQueries ? e.contentQueries[0] : t.length,
              r = [];
            for (let e = 0; e < n; e++) {
              const n = t.getByIndex(e);
              r.push(this.queries[n.indexInDeclarationView].clone());
            }
            return new _a(r);
          }
          return null;
        }
        insertView(e) {
          this.dirtyQueriesWithMatches(e);
        }
        detachView(e) {
          this.dirtyQueriesWithMatches(e);
        }
        dirtyQueriesWithMatches(e) {
          for (let t = 0; t < this.queries.length; t++)
            null !== Na(e, t).matches && this.queries[t].setDirty();
        }
      }
      class wa {
        constructor(e, t, n = null) {
          (this.predicate = e), (this.flags = t), (this.read = n);
        }
      }
      class Sa {
        constructor(e = []) {
          this.queries = e;
        }
        elementStart(e, t) {
          for (let n = 0; n < this.queries.length; n++)
            this.queries[n].elementStart(e, t);
        }
        elementEnd(e) {
          for (let t = 0; t < this.queries.length; t++)
            this.queries[t].elementEnd(e);
        }
        embeddedTView(e) {
          let t = null;
          for (let n = 0; n < this.length; n++) {
            const r = null !== t ? t.length : 0,
              s = this.getByIndex(n).embeddedTView(e, r);
            s &&
              ((s.indexInDeclarationView = n),
              null !== t ? t.push(s) : (t = [s]));
          }
          return null !== t ? new Sa(t) : null;
        }
        template(e, t) {
          for (let n = 0; n < this.queries.length; n++)
            this.queries[n].template(e, t);
        }
        getByIndex(e) {
          return this.queries[e];
        }
        get length() {
          return this.queries.length;
        }
        track(e) {
          this.queries.push(e);
        }
      }
      class Ca {
        constructor(e, t = -1) {
          (this.metadata = e),
            (this.matches = null),
            (this.indexInDeclarationView = -1),
            (this.crossesNgTemplate = !1),
            (this._appliesToNextNode = !0),
            (this._declarationNodeIndex = t);
        }
        elementStart(e, t) {
          this.isApplyingToNode(t) && this.matchTNode(e, t);
        }
        elementEnd(e) {
          this._declarationNodeIndex === e.index &&
            (this._appliesToNextNode = !1);
        }
        template(e, t) {
          this.elementStart(e, t);
        }
        embeddedTView(e, t) {
          return this.isApplyingToNode(e)
            ? ((this.crossesNgTemplate = !0),
              this.addMatch(-e.index, t),
              new Ca(this.metadata))
            : null;
        }
        isApplyingToNode(e) {
          if (this._appliesToNextNode && 1 != (1 & this.metadata.flags)) {
            const t = this._declarationNodeIndex;
            let n = e.parent;
            for (; null !== n && 8 & n.type && n.index !== t; ) n = n.parent;
            return t === (null !== n ? n.index : -1);
          }
          return this._appliesToNextNode;
        }
        matchTNode(e, t) {
          const n = this.metadata.predicate;
          if (Array.isArray(n))
            for (let r = 0; r < n.length; r++) {
              const s = n[r];
              this.matchTNodeWithReadOption(e, t, Ea(t, s)),
                this.matchTNodeWithReadOption(e, t, In(t, e, s, !1, !1));
            }
          else
            n === Uo
              ? 4 & t.type && this.matchTNodeWithReadOption(e, t, -1)
              : this.matchTNodeWithReadOption(e, t, In(t, e, n, !1, !1));
        }
        matchTNodeWithReadOption(e, t, n) {
          if (null !== n) {
            const r = this.metadata.read;
            if (null !== r)
              if (r === ho || r === Zo || (r === Uo && 4 & t.type))
                this.addMatch(t.index, -2);
              else {
                const n = In(t, e, r, !1, !1);
                null !== n && this.addMatch(t.index, n);
              }
            else this.addMatch(t.index, n);
          }
        }
        addMatch(e, t) {
          null === this.matches
            ? (this.matches = [e, t])
            : this.matches.push(e, t);
        }
      }
      function Ea(e, t) {
        const n = e.localNames;
        if (null !== n)
          for (let r = 0; r < n.length; r += 2) if (n[r] === t) return n[r + 1];
        return null;
      }
      function ka(e, t, n, r) {
        return -1 === n
          ? (function (e, t) {
              return 11 & e.type ? co(e, t) : 4 & e.type ? $o(e, t) : null;
            })(t, e)
          : -2 === n
          ? (function (e, t, n) {
              return n === ho
                ? co(t, e)
                : n === Uo
                ? $o(t, e)
                : n === Zo
                ? ta(t, e)
                : void 0;
            })(e, t, r)
          : An(e, e[1], n, t);
      }
      function xa(e, t, n, r) {
        const s = t[19].queries[r];
        if (null === s.matches) {
          const r = e.data,
            i = n.matches,
            o = [];
          for (let e = 0; e < i.length; e += 2) {
            const s = i[e];
            o.push(s < 0 ? null : ka(t, r[s], i[e + 1], n.metadata.read));
          }
          s.matches = o;
        }
        return s.matches;
      }
      function Ta(e, t, n, r) {
        const s = e.queries.getByIndex(n),
          i = s.matches;
        if (null !== i) {
          const o = xa(e, t, s, n);
          for (let e = 0; e < i.length; e += 2) {
            const n = i[e];
            if (n > 0) r.push(o[e / 2]);
            else {
              const s = i[e + 1],
                o = t[-n];
              for (let e = 10; e < o.length; e++) {
                const t = o[e];
                t[17] === t[3] && Ta(t[1], t, s, r);
              }
              if (null !== o[9]) {
                const e = o[9];
                for (let t = 0; t < e.length; t++) {
                  const n = e[t];
                  Ta(n[1], n, s, r);
                }
              }
            }
          }
        }
        return r;
      }
      function Ia(e) {
        const t = kt(),
          n = xt(),
          r = Wt();
        zt(r + 1);
        const s = Na(n, r);
        if (e.dirty && vt(t) === (2 == (2 & s.metadata.flags))) {
          if (null === s.matches) e.reset([]);
          else {
            const i = s.crossesNgTemplate ? Ta(n, t, r, []) : xa(n, t, s, r);
            e.reset(i, po), e.notifyOnChanges();
          }
          return !0;
        }
        return !1;
      }
      function Aa(e, t, n) {
        const r = xt();
        r.firstCreatePass &&
          (Da(r, new wa(e, t, n), -1),
          2 == (2 & t) && (r.staticViewQueries = !0)),
          Pa(r, kt(), t);
      }
      function Oa(e, t, n, r) {
        const s = xt();
        if (s.firstCreatePass) {
          const i = It();
          Da(s, new wa(t, n, r), i.index),
            (function (e, t) {
              const n = e.contentQueries || (e.contentQueries = []);
              t !== (n.length ? n[n.length - 1] : -1) &&
                n.push(e.queries.length - 1, t);
            })(s, e),
            2 == (2 & n) && (s.staticContentQueries = !0);
        }
        Pa(s, kt(), n);
      }
      function Ra() {
        return (e = kt()), (t = Wt()), e[19].queries[t].queryList;
        var e, t;
      }
      function Pa(e, t, n) {
        const r = new va(4 == (4 & n));
        Es(e, t, r, r.destroy),
          null === t[19] && (t[19] = new _a()),
          t[19].queries.push(new ba(r));
      }
      function Da(e, t, n) {
        null === e.queries && (e.queries = new Sa()),
          e.queries.track(new Ca(t, n));
      }
      function Na(e, t) {
        return e.queries.getByIndex(t);
      }
      function Ma(e, t) {
        return $o(e, t);
      }
      const Fa = new Mn("Application Initializer");
      let ja = (() => {
        class e {
          constructor(e) {
            (this.appInits = e),
              (this.resolve = lo),
              (this.reject = lo),
              (this.initialized = !1),
              (this.done = !1),
              (this.donePromise = new Promise((e, t) => {
                (this.resolve = e), (this.reject = t);
              }));
          }
          runInitializers() {
            if (this.initialized) return;
            const e = [],
              t = () => {
                (this.done = !0), this.resolve();
              };
            if (this.appInits)
              for (let n = 0; n < this.appInits.length; n++) {
                const t = this.appInits[n]();
                Ri(t) && e.push(t);
              }
            Promise.all(e)
              .then(() => {
                t();
              })
              .catch((e) => {
                this.reject(e);
              }),
              0 === e.length && t(),
              (this.initialized = !0);
          }
        }
        return (
          (e.ɵfac = function (t) {
            return new (t || e)(Yn(Fa, 8));
          }),
          (e.ɵprov = ce({ token: e, factory: e.ɵfac })),
          e
        );
      })();
      const La = new Mn("AppId"),
        Wa = {
          provide: La,
          useFactory: function () {
            return `${za()}${za()}${za()}`;
          },
          deps: [],
        };
      function za() {
        return String.fromCharCode(97 + Math.floor(25 * Math.random()));
      }
      const qa = new Mn("Platform Initializer"),
        Ha = new Mn("Platform ID"),
        Ua = new Mn("appBootstrapListener");
      let Va = (() => {
        class e {
          log(e) {
            console.log(e);
          }
          warn(e) {
            console.warn(e);
          }
        }
        return (
          (e.ɵfac = function (t) {
            return new (t || e)();
          }),
          (e.ɵprov = ce({ token: e, factory: e.ɵfac })),
          e
        );
      })();
      const Ba = new Mn("LocaleId"),
        $a = new Mn("DefaultCurrencyCode");
      class Qa {
        constructor(e, t) {
          (this.ngModuleFactory = e), (this.componentFactories = t);
        }
      }
      const Ga = function (e) {
          return new ua(e);
        },
        Ka = Ga,
        Za = function (e) {
          return Promise.resolve(Ga(e));
        },
        Ja = function (e) {
          const t = Ga(e),
            n = yr(Ke(e).declarations).reduce((e, t) => {
              const n = Ge(t);
              return n && e.push(new oa(n)), e;
            }, []);
          return new Qa(t, n);
        },
        Ya = Ja,
        Xa = function (e) {
          return Promise.resolve(Ja(e));
        };
      let el = (() => {
        class e {
          constructor() {
            (this.compileModuleSync = Ka),
              (this.compileModuleAsync = Za),
              (this.compileModuleAndAllComponentsSync = Ya),
              (this.compileModuleAndAllComponentsAsync = Xa);
          }
          clearCache() {}
          clearCacheFor(e) {}
          getModuleId(e) {}
        }
        return (
          (e.ɵfac = function (t) {
            return new (t || e)();
          }),
          (e.ɵprov = ce({ token: e, factory: e.ɵfac })),
          e
        );
      })();
      const tl = (() => Promise.resolve(0))();
      function nl(e) {
        "undefined" == typeof Zone
          ? tl.then(() => {
              e && e.apply(null, null);
            })
          : Zone.current.scheduleMicroTask("scheduleMicrotask", e);
      }
      class rl {
        constructor({
          enableLongStackTrace: e = !1,
          shouldCoalesceEventChangeDetection: t = !1,
          shouldCoalesceRunChangeDetection: n = !1,
        }) {
          if (
            ((this.hasPendingMacrotasks = !1),
            (this.hasPendingMicrotasks = !1),
            (this.isStable = !0),
            (this.onUnstable = new ga(!1)),
            (this.onMicrotaskEmpty = new ga(!1)),
            (this.onStable = new ga(!1)),
            (this.onError = new ga(!1)),
            "undefined" == typeof Zone)
          )
            throw new Error("In this configuration Angular requires Zone.js");
          Zone.assertZonePatched(),
            (this._nesting = 0),
            (this._outer = this._inner = Zone.current),
            Zone.TaskTrackingZoneSpec &&
              (this._inner = this._inner.fork(new Zone.TaskTrackingZoneSpec())),
            e &&
              Zone.longStackTraceZoneSpec &&
              (this._inner = this._inner.fork(Zone.longStackTraceZoneSpec)),
            (this.shouldCoalesceEventChangeDetection = !n && t),
            (this.shouldCoalesceRunChangeDetection = n),
            (this.lastRequestAnimationFrameId = -1),
            (this.nativeRequestAnimationFrame = (function () {
              let e = Ae.requestAnimationFrame,
                t = Ae.cancelAnimationFrame;
              if ("undefined" != typeof Zone && e && t) {
                const n = e[Zone.__symbol__("OriginalDelegate")];
                n && (e = n);
                const r = t[Zone.__symbol__("OriginalDelegate")];
                r && (t = r);
              }
              return {
                nativeRequestAnimationFrame: e,
                nativeCancelAnimationFrame: t,
              };
            })().nativeRequestAnimationFrame),
            (function (e) {
              const t = () => {
                !(function (e) {
                  -1 === e.lastRequestAnimationFrameId &&
                    ((e.lastRequestAnimationFrameId =
                      e.nativeRequestAnimationFrame.call(Ae, () => {
                        e.fakeTopEventTask ||
                          (e.fakeTopEventTask = Zone.root.scheduleEventTask(
                            "fakeTopEventTask",
                            () => {
                              (e.lastRequestAnimationFrameId = -1),
                                ol(e),
                                il(e);
                            },
                            void 0,
                            () => {},
                            () => {}
                          )),
                          e.fakeTopEventTask.invoke();
                      })),
                    ol(e));
                })(e);
              };
              e._inner = e._inner.fork({
                name: "angular",
                properties: { isAngularZone: !0 },
                onInvokeTask: (n, r, s, i, o, a) => {
                  try {
                    return al(e), n.invokeTask(s, i, o, a);
                  } finally {
                    ((e.shouldCoalesceEventChangeDetection &&
                      "eventTask" === i.type) ||
                      e.shouldCoalesceRunChangeDetection) &&
                      t(),
                      ll(e);
                  }
                },
                onInvoke: (n, r, s, i, o, a, l) => {
                  try {
                    return al(e), n.invoke(s, i, o, a, l);
                  } finally {
                    e.shouldCoalesceRunChangeDetection && t(), ll(e);
                  }
                },
                onHasTask: (t, n, r, s) => {
                  t.hasTask(r, s),
                    n === r &&
                      ("microTask" == s.change
                        ? ((e._hasPendingMicrotasks = s.microTask),
                          ol(e),
                          il(e))
                        : "macroTask" == s.change &&
                          (e.hasPendingMacrotasks = s.macroTask));
                },
                onHandleError: (t, n, r, s) => (
                  t.handleError(r, s),
                  e.runOutsideAngular(() => e.onError.emit(s)),
                  !1
                ),
              });
            })(this);
        }
        static isInAngularZone() {
          return !0 === Zone.current.get("isAngularZone");
        }
        static assertInAngularZone() {
          if (!rl.isInAngularZone())
            throw new Error("Expected to be in Angular Zone, but it is not!");
        }
        static assertNotInAngularZone() {
          if (rl.isInAngularZone())
            throw new Error("Expected to not be in Angular Zone, but it is!");
        }
        run(e, t, n) {
          return this._inner.run(e, t, n);
        }
        runTask(e, t, n, r) {
          const s = this._inner,
            i = s.scheduleEventTask("NgZoneEvent: " + r, e, sl, lo, lo);
          try {
            return s.runTask(i, t, n);
          } finally {
            s.cancelTask(i);
          }
        }
        runGuarded(e, t, n) {
          return this._inner.runGuarded(e, t, n);
        }
        runOutsideAngular(e) {
          return this._outer.run(e);
        }
      }
      const sl = {};
      function il(e) {
        if (0 == e._nesting && !e.hasPendingMicrotasks && !e.isStable)
          try {
            e._nesting++, e.onMicrotaskEmpty.emit(null);
          } finally {
            if ((e._nesting--, !e.hasPendingMicrotasks))
              try {
                e.runOutsideAngular(() => e.onStable.emit(null));
              } finally {
                e.isStable = !0;
              }
          }
      }
      function ol(e) {
        e.hasPendingMicrotasks = !!(
          e._hasPendingMicrotasks ||
          ((e.shouldCoalesceEventChangeDetection ||
            e.shouldCoalesceRunChangeDetection) &&
            -1 !== e.lastRequestAnimationFrameId)
        );
      }
      function al(e) {
        e._nesting++,
          e.isStable && ((e.isStable = !1), e.onUnstable.emit(null));
      }
      function ll(e) {
        e._nesting--, il(e);
      }
      class cl {
        constructor() {
          (this.hasPendingMicrotasks = !1),
            (this.hasPendingMacrotasks = !1),
            (this.isStable = !0),
            (this.onUnstable = new ga()),
            (this.onMicrotaskEmpty = new ga()),
            (this.onStable = new ga()),
            (this.onError = new ga());
        }
        run(e, t, n) {
          return e.apply(t, n);
        }
        runGuarded(e, t, n) {
          return e.apply(t, n);
        }
        runOutsideAngular(e) {
          return e();
        }
        runTask(e, t, n, r) {
          return e.apply(t, n);
        }
      }
      let ul = (() => {
          class e {
            constructor(e) {
              (this._ngZone = e),
                (this._pendingCount = 0),
                (this._isZoneStable = !0),
                (this._didWork = !1),
                (this._callbacks = []),
                (this.taskTrackingZone = null),
                this._watchAngularEvents(),
                e.run(() => {
                  this.taskTrackingZone =
                    "undefined" == typeof Zone
                      ? null
                      : Zone.current.get("TaskTrackingZone");
                });
            }
            _watchAngularEvents() {
              this._ngZone.onUnstable.subscribe({
                next: () => {
                  (this._didWork = !0), (this._isZoneStable = !1);
                },
              }),
                this._ngZone.runOutsideAngular(() => {
                  this._ngZone.onStable.subscribe({
                    next: () => {
                      rl.assertNotInAngularZone(),
                        nl(() => {
                          (this._isZoneStable = !0),
                            this._runCallbacksIfReady();
                        });
                    },
                  });
                });
            }
            increasePendingRequestCount() {
              return (
                (this._pendingCount += 1),
                (this._didWork = !0),
                this._pendingCount
              );
            }
            decreasePendingRequestCount() {
              if (((this._pendingCount -= 1), this._pendingCount < 0))
                throw new Error("pending async requests below zero");
              return this._runCallbacksIfReady(), this._pendingCount;
            }
            isStable() {
              return (
                this._isZoneStable &&
                0 === this._pendingCount &&
                !this._ngZone.hasPendingMacrotasks
              );
            }
            _runCallbacksIfReady() {
              if (this.isStable())
                nl(() => {
                  for (; 0 !== this._callbacks.length; ) {
                    let e = this._callbacks.pop();
                    clearTimeout(e.timeoutId), e.doneCb(this._didWork);
                  }
                  this._didWork = !1;
                });
              else {
                let e = this.getPendingTasks();
                (this._callbacks = this._callbacks.filter(
                  (t) =>
                    !t.updateCb ||
                    !t.updateCb(e) ||
                    (clearTimeout(t.timeoutId), !1)
                )),
                  (this._didWork = !0);
              }
            }
            getPendingTasks() {
              return this.taskTrackingZone
                ? this.taskTrackingZone.macroTasks.map((e) => ({
                    source: e.source,
                    creationLocation: e.creationLocation,
                    data: e.data,
                  }))
                : [];
            }
            addCallback(e, t, n) {
              let r = -1;
              t &&
                t > 0 &&
                (r = setTimeout(() => {
                  (this._callbacks = this._callbacks.filter(
                    (e) => e.timeoutId !== r
                  )),
                    e(this._didWork, this.getPendingTasks());
                }, t)),
                this._callbacks.push({ doneCb: e, timeoutId: r, updateCb: n });
            }
            whenStable(e, t, n) {
              if (n && !this.taskTrackingZone)
                throw new Error(
                  'Task tracking zone is required when passing an update callback to whenStable(). Is "zone.js/dist/task-tracking.js" loaded?'
                );
              this.addCallback(e, t, n), this._runCallbacksIfReady();
            }
            getPendingRequestCount() {
              return this._pendingCount;
            }
            findProviders(e, t, n) {
              return [];
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)(Yn(rl));
            }),
            (e.ɵprov = ce({ token: e, factory: e.ɵfac })),
            e
          );
        })(),
        hl = (() => {
          class e {
            constructor() {
              (this._applications = new Map()), fl.addToWindow(this);
            }
            registerApplication(e, t) {
              this._applications.set(e, t);
            }
            unregisterApplication(e) {
              this._applications.delete(e);
            }
            unregisterAllApplications() {
              this._applications.clear();
            }
            getTestability(e) {
              return this._applications.get(e) || null;
            }
            getAllTestabilities() {
              return Array.from(this._applications.values());
            }
            getAllRootElements() {
              return Array.from(this._applications.keys());
            }
            findTestabilityInTree(e, t = !0) {
              return fl.findTestabilityInTree(this, e, t);
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)();
            }),
            (e.ɵprov = ce({ token: e, factory: e.ɵfac })),
            e
          );
        })();
      class dl {
        addToWindow(e) {}
        findTestabilityInTree(e, t, n) {
          return null;
        }
      }
      let pl,
        fl = new dl(),
        ml = !0,
        gl = !1;
      const yl = new Mn("AllowMultipleToken");
      class vl {
        constructor(e, t) {
          (this.name = e), (this.token = t);
        }
      }
      function bl(e, t, n = []) {
        const r = `Platform: ${t}`,
          s = new Mn(r);
        return (t = []) => {
          let i = _l();
          if (!i || i.injector.get(yl, !1))
            if (e) e(n.concat(t).concat({ provide: s, useValue: !0 }));
            else {
              const e = n
                .concat(t)
                .concat(
                  { provide: s, useValue: !0 },
                  { provide: ei, useValue: "platform" }
                );
              !(function (e) {
                if (pl && !pl.destroyed && !pl.injector.get(yl, !1))
                  throw new Error(
                    "There can be only one platform. Destroy the previous one to create a new one."
                  );
                pl = e.get(wl);
                const t = e.get(qa, null);
                t && t.forEach((e) => e());
              })(pi.create({ providers: e, name: r }));
            }
          return (function (e) {
            const t = _l();
            if (!t) throw new Error("No platform exists!");
            if (!t.injector.get(e, null))
              throw new Error(
                "A platform with a different configuration has been created. Please destroy it first."
              );
            return t;
          })(s);
        };
      }
      function _l() {
        return pl && !pl.destroyed ? pl : null;
      }
      let wl = (() => {
        class e {
          constructor(e) {
            (this._injector = e),
              (this._modules = []),
              (this._destroyListeners = []),
              (this._destroyed = !1);
          }
          bootstrapModuleFactory(e, t) {
            const n = (function (e, t) {
                let n;
                return (
                  (n =
                    "noop" === e
                      ? new cl()
                      : ("zone.js" === e ? void 0 : e) ||
                        new rl({
                          enableLongStackTrace: ((gl = !0), ml),
                          shouldCoalesceEventChangeDetection: !!(null == t
                            ? void 0
                            : t.ngZoneEventCoalescing),
                          shouldCoalesceRunChangeDetection: !!(null == t
                            ? void 0
                            : t.ngZoneRunCoalescing),
                        })),
                  n
                );
              })(t ? t.ngZone : void 0, {
                ngZoneEventCoalescing: (t && t.ngZoneEventCoalescing) || !1,
                ngZoneRunCoalescing: (t && t.ngZoneRunCoalescing) || !1,
              }),
              r = [{ provide: rl, useValue: n }];
            return n.run(() => {
              const t = pi.create({
                  providers: r,
                  parent: this.injector,
                  name: e.moduleType.name,
                }),
                s = e.create(t),
                i = s.injector.get(pr, null);
              if (!i)
                throw new Error(
                  "No ErrorHandler. Is platform module (BrowserModule) included?"
                );
              return (
                n.runOutsideAngular(() => {
                  const e = n.onError.subscribe({
                    next: (e) => {
                      i.handleError(e);
                    },
                  });
                  s.onDestroy(() => {
                    El(this._modules, s), e.unsubscribe();
                  });
                }),
                (function (e, t, n) {
                  try {
                    const r = n();
                    return Ri(r)
                      ? r.catch((n) => {
                          throw (
                            (t.runOutsideAngular(() => e.handleError(n)), n)
                          );
                        })
                      : r;
                  } catch (r) {
                    throw (t.runOutsideAngular(() => e.handleError(r)), r);
                  }
                })(i, n, () => {
                  const e = s.injector.get(ja);
                  return (
                    e.runInitializers(),
                    e.donePromise.then(
                      () => (
                        so(s.injector.get(Ba, "en-US") || "en-US"),
                        this._moduleDoBootstrap(s),
                        s
                      )
                    )
                  );
                })
              );
            });
          }
          bootstrapModule(e, t = []) {
            const n = Sl({}, t);
            return (function (e, t, n) {
              const r = new ua(n);
              return Promise.resolve(r);
            })(0, 0, e).then((e) => this.bootstrapModuleFactory(e, n));
          }
          _moduleDoBootstrap(e) {
            const t = e.injector.get(Cl);
            if (e._bootstrapComponents.length > 0)
              e._bootstrapComponents.forEach((e) => t.bootstrap(e));
            else {
              if (!e.instance.ngDoBootstrap)
                throw new Error(
                  `The module ${ee(
                    e.instance.constructor
                  )} was bootstrapped, but it does not declare "@NgModule.bootstrap" components nor a "ngDoBootstrap" method. Please define one of these.`
                );
              e.instance.ngDoBootstrap(t);
            }
            this._modules.push(e);
          }
          onDestroy(e) {
            this._destroyListeners.push(e);
          }
          get injector() {
            return this._injector;
          }
          destroy() {
            if (this._destroyed)
              throw new Error("The platform has already been destroyed!");
            this._modules.slice().forEach((e) => e.destroy()),
              this._destroyListeners.forEach((e) => e()),
              (this._destroyed = !0);
          }
          get destroyed() {
            return this._destroyed;
          }
        }
        return (
          (e.ɵfac = function (t) {
            return new (t || e)(Yn(pi));
          }),
          (e.ɵprov = ce({ token: e, factory: e.ɵfac })),
          e
        );
      })();
      function Sl(e, t) {
        return Array.isArray(t)
          ? t.reduce(Sl, e)
          : Object.assign(Object.assign({}, e), t);
      }
      let Cl = (() => {
        class e {
          constructor(e, t, n, r, s) {
            (this._zone = e),
              (this._injector = t),
              (this._exceptionHandler = n),
              (this._componentFactoryResolver = r),
              (this._initStatus = s),
              (this._bootstrapListeners = []),
              (this._views = []),
              (this._runningTick = !1),
              (this._stable = !0),
              (this.componentTypes = []),
              (this.components = []),
              (this._onMicrotaskEmptySubscription =
                this._zone.onMicrotaskEmpty.subscribe({
                  next: () => {
                    this._zone.run(() => {
                      this.tick();
                    });
                  },
                }));
            const i = new v((e) => {
                (this._stable =
                  this._zone.isStable &&
                  !this._zone.hasPendingMacrotasks &&
                  !this._zone.hasPendingMicrotasks),
                  this._zone.runOutsideAngular(() => {
                    e.next(this._stable), e.complete();
                  });
              }),
              o = new v((e) => {
                let t;
                this._zone.runOutsideAngular(() => {
                  t = this._zone.onStable.subscribe(() => {
                    rl.assertNotInAngularZone(),
                      nl(() => {
                        this._stable ||
                          this._zone.hasPendingMacrotasks ||
                          this._zone.hasPendingMicrotasks ||
                          ((this._stable = !0), e.next(!0));
                      });
                  });
                });
                const n = this._zone.onUnstable.subscribe(() => {
                  rl.assertInAngularZone(),
                    this._stable &&
                      ((this._stable = !1),
                      this._zone.runOutsideAngular(() => {
                        e.next(!1);
                      }));
                });
                return () => {
                  t.unsubscribe(), n.unsubscribe();
                };
              });
            this.isStable = B(
              i,
              o.pipe((e) => {
                return $()(
                  ((t = Y),
                  function (e) {
                    let n;
                    n =
                      "function" == typeof t
                        ? t
                        : function () {
                            return t;
                          };
                    const r = Object.create(e, Z);
                    return (r.source = e), (r.subjectFactory = n), r;
                  })(e)
                );
                var t;
              })
            );
          }
          bootstrap(e, t) {
            if (!this._initStatus.done)
              throw new Error(
                "Cannot bootstrap as there are still asynchronous initializers running. Bootstrap components in the `ngDoBootstrap` method of the root module."
              );
            let n;
            (n =
              e instanceof io
                ? e
                : this._componentFactoryResolver.resolveComponentFactory(e)),
              this.componentTypes.push(n.componentType);
            const r = n.isBoundToModule ? void 0 : this._injector.get(Qo),
              s = n.create(pi.NULL, [], t || n.selector, r),
              i = s.location.nativeElement,
              o = s.injector.get(ul, null),
              a = o && s.injector.get(hl);
            return (
              o && a && a.registerApplication(i, o),
              s.onDestroy(() => {
                this.detachView(s.hostView),
                  El(this.components, s),
                  a && a.unregisterApplication(i);
              }),
              this._loadComponent(s),
              s
            );
          }
          tick() {
            if (this._runningTick)
              throw new Error("ApplicationRef.tick is called recursively");
            try {
              this._runningTick = !0;
              for (let e of this._views) e.detectChanges();
            } catch (e) {
              this._zone.runOutsideAngular(() =>
                this._exceptionHandler.handleError(e)
              );
            } finally {
              this._runningTick = !1;
            }
          }
          attachView(e) {
            const t = e;
            this._views.push(t), t.attachToAppRef(this);
          }
          detachView(e) {
            const t = e;
            El(this._views, t), t.detachFromAppRef();
          }
          _loadComponent(e) {
            this.attachView(e.hostView),
              this.tick(),
              this.components.push(e),
              this._injector
                .get(Ua, [])
                .concat(this._bootstrapListeners)
                .forEach((t) => t(e));
          }
          ngOnDestroy() {
            this._views.slice().forEach((e) => e.destroy()),
              this._onMicrotaskEmptySubscription.unsubscribe();
          }
          get viewCount() {
            return this._views.length;
          }
        }
        return (
          (e.ɵfac = function (t) {
            return new (t || e)(Yn(rl), Yn(pi), Yn(pr), Yn(ao), Yn(ja));
          }),
          (e.ɵprov = ce({ token: e, factory: e.ɵfac })),
          e
        );
      })();
      function El(e, t) {
        const n = e.indexOf(t);
        n > -1 && e.splice(n, 1);
      }
      class kl {}
      class xl {}
      const Tl = { factoryPathPrefix: "", factoryPathSuffix: ".ngfactory" };
      let Il = (() => {
        class e {
          constructor(e, t) {
            (this._compiler = e), (this._config = t || Tl);
          }
          load(e) {
            return this.loadAndCompile(e);
          }
          loadAndCompile(e) {
            let [t, r] = e.split("#");
            return (
              void 0 === r && (r = "default"),
              n("zn8P")(t)
                .then((e) => e[r])
                .then((e) => Al(e, t, r))
                .then((e) => this._compiler.compileModuleAsync(e))
            );
          }
          loadFactory(e) {
            let [t, r] = e.split("#"),
              s = "NgFactory";
            return (
              void 0 === r && ((r = "default"), (s = "")),
              n("zn8P")(
                this._config.factoryPathPrefix +
                  t +
                  this._config.factoryPathSuffix
              )
                .then((e) => e[r + s])
                .then((e) => Al(e, t, r))
            );
          }
        }
        return (
          (e.ɵfac = function (t) {
            return new (t || e)(Yn(el), Yn(xl, 8));
          }),
          (e.ɵprov = ce({ token: e, factory: e.ɵfac })),
          e
        );
      })();
      function Al(e, t, n) {
        if (!e) throw new Error(`Cannot find '${n}' in '${t}'`);
        return e;
      }
      const Ol = bl(null, "core", [
          { provide: Ha, useValue: "unknown" },
          { provide: wl, deps: [pi] },
          { provide: hl, deps: [] },
          { provide: Va, deps: [] },
        ]),
        Rl = [
          { provide: Cl, useClass: Cl, deps: [rl, pi, pr, ao, ja] },
          {
            provide: ia,
            deps: [rl],
            useFactory: function (e) {
              let t = [];
              return (
                e.onStable.subscribe(() => {
                  for (; t.length; ) t.pop()();
                }),
                function (e) {
                  t.push(e);
                }
              );
            },
          },
          { provide: ja, useClass: ja, deps: [[new nr(), Fa]] },
          { provide: el, useClass: el, deps: [] },
          Wa,
          {
            provide: Ro,
            useFactory: function () {
              return zo;
            },
            deps: [],
          },
          {
            provide: Do,
            useFactory: function () {
              return qo;
            },
            deps: [],
          },
          {
            provide: Ba,
            useFactory: function (e) {
              return (
                so(
                  (e =
                    e ||
                    ("undefined" != typeof $localize && $localize.locale) ||
                    "en-US")
                ),
                e
              );
            },
            deps: [[new tr(Ba), new nr(), new rr()]],
          },
          { provide: $a, useValue: "USD" },
        ];
      let Pl = (() => {
          class e {
            constructor(e) {}
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)(Yn(Cl));
            }),
            (e.ɵmod = Be({ type: e })),
            (e.ɵinj = ue({ providers: Rl })),
            e
          );
        })(),
        Dl = null;
      function Nl() {
        return Dl;
      }
      const Ml = new Mn("DocumentToken");
      let Fl = (() => {
        class e {}
        return (
          (e.ɵfac = function (t) {
            return new (t || e)();
          }),
          (e.ɵprov = ce({ factory: jl, token: e, providedIn: "platform" })),
          e
        );
      })();
      function jl() {
        return Yn(Wl);
      }
      const Ll = new Mn("Location Initialized");
      let Wl = (() => {
        class e extends Fl {
          constructor(e) {
            super(), (this._doc = e), this._init();
          }
          _init() {
            (this.location = Nl().getLocation()),
              (this._history = Nl().getHistory());
          }
          getBaseHrefFromDOM() {
            return Nl().getBaseHref(this._doc);
          }
          onPopState(e) {
            Nl()
              .getGlobalEventTarget(this._doc, "window")
              .addEventListener("popstate", e, !1);
          }
          onHashChange(e) {
            Nl()
              .getGlobalEventTarget(this._doc, "window")
              .addEventListener("hashchange", e, !1);
          }
          get href() {
            return this.location.href;
          }
          get protocol() {
            return this.location.protocol;
          }
          get hostname() {
            return this.location.hostname;
          }
          get port() {
            return this.location.port;
          }
          get pathname() {
            return this.location.pathname;
          }
          get search() {
            return this.location.search;
          }
          get hash() {
            return this.location.hash;
          }
          set pathname(e) {
            this.location.pathname = e;
          }
          pushState(e, t, n) {
            zl() ? this._history.pushState(e, t, n) : (this.location.hash = n);
          }
          replaceState(e, t, n) {
            zl()
              ? this._history.replaceState(e, t, n)
              : (this.location.hash = n);
          }
          forward() {
            this._history.forward();
          }
          back() {
            this._history.back();
          }
          getState() {
            return this._history.state;
          }
        }
        return (
          (e.ɵfac = function (t) {
            return new (t || e)(Yn(Ml));
          }),
          (e.ɵprov = ce({ factory: ql, token: e, providedIn: "platform" })),
          e
        );
      })();
      function zl() {
        return !!window.history.pushState;
      }
      function ql() {
        return new Wl(Yn(Ml));
      }
      function Hl(e, t) {
        if (0 == e.length) return t;
        if (0 == t.length) return e;
        let n = 0;
        return (
          e.endsWith("/") && n++,
          t.startsWith("/") && n++,
          2 == n ? e + t.substring(1) : 1 == n ? e + t : e + "/" + t
        );
      }
      function Ul(e) {
        const t = e.match(/#|\?|$/),
          n = (t && t.index) || e.length;
        return e.slice(0, n - ("/" === e[n - 1] ? 1 : 0)) + e.slice(n);
      }
      function Vl(e) {
        return e && "?" !== e[0] ? "?" + e : e;
      }
      let Bl = (() => {
        class e {}
        return (
          (e.ɵfac = function (t) {
            return new (t || e)();
          }),
          (e.ɵprov = ce({ factory: $l, token: e, providedIn: "root" })),
          e
        );
      })();
      function $l(e) {
        const t = Yn(Ml).location;
        return new Gl(Yn(Fl), (t && t.origin) || "");
      }
      const Ql = new Mn("appBaseHref");
      let Gl = (() => {
          class e extends Bl {
            constructor(e, t) {
              if (
                (super(),
                (this._platformLocation = e),
                null == t && (t = this._platformLocation.getBaseHrefFromDOM()),
                null == t)
              )
                throw new Error(
                  "No base href set. Please provide a value for the APP_BASE_HREF token or add a base element to the document."
                );
              this._baseHref = t;
            }
            onPopState(e) {
              this._platformLocation.onPopState(e),
                this._platformLocation.onHashChange(e);
            }
            getBaseHref() {
              return this._baseHref;
            }
            prepareExternalUrl(e) {
              return Hl(this._baseHref, e);
            }
            path(e = !1) {
              const t =
                  this._platformLocation.pathname +
                  Vl(this._platformLocation.search),
                n = this._platformLocation.hash;
              return n && e ? `${t}${n}` : t;
            }
            pushState(e, t, n, r) {
              const s = this.prepareExternalUrl(n + Vl(r));
              this._platformLocation.pushState(e, t, s);
            }
            replaceState(e, t, n, r) {
              const s = this.prepareExternalUrl(n + Vl(r));
              this._platformLocation.replaceState(e, t, s);
            }
            forward() {
              this._platformLocation.forward();
            }
            back() {
              this._platformLocation.back();
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)(Yn(Fl), Yn(Ql, 8));
            }),
            (e.ɵprov = ce({ token: e, factory: e.ɵfac })),
            e
          );
        })(),
        Kl = (() => {
          class e extends Bl {
            constructor(e, t) {
              super(),
                (this._platformLocation = e),
                (this._baseHref = ""),
                null != t && (this._baseHref = t);
            }
            onPopState(e) {
              this._platformLocation.onPopState(e),
                this._platformLocation.onHashChange(e);
            }
            getBaseHref() {
              return this._baseHref;
            }
            path(e = !1) {
              let t = this._platformLocation.hash;
              return null == t && (t = "#"), t.length > 0 ? t.substring(1) : t;
            }
            prepareExternalUrl(e) {
              const t = Hl(this._baseHref, e);
              return t.length > 0 ? "#" + t : t;
            }
            pushState(e, t, n, r) {
              let s = this.prepareExternalUrl(n + Vl(r));
              0 == s.length && (s = this._platformLocation.pathname),
                this._platformLocation.pushState(e, t, s);
            }
            replaceState(e, t, n, r) {
              let s = this.prepareExternalUrl(n + Vl(r));
              0 == s.length && (s = this._platformLocation.pathname),
                this._platformLocation.replaceState(e, t, s);
            }
            forward() {
              this._platformLocation.forward();
            }
            back() {
              this._platformLocation.back();
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)(Yn(Fl), Yn(Ql, 8));
            }),
            (e.ɵprov = ce({ token: e, factory: e.ɵfac })),
            e
          );
        })(),
        Zl = (() => {
          class e {
            constructor(e, t) {
              (this._subject = new ga()),
                (this._urlChangeListeners = []),
                (this._platformStrategy = e);
              const n = this._platformStrategy.getBaseHref();
              (this._platformLocation = t),
                (this._baseHref = Ul(Yl(n))),
                this._platformStrategy.onPopState((e) => {
                  this._subject.emit({
                    url: this.path(!0),
                    pop: !0,
                    state: e.state,
                    type: e.type,
                  });
                });
            }
            path(e = !1) {
              return this.normalize(this._platformStrategy.path(e));
            }
            getState() {
              return this._platformLocation.getState();
            }
            isCurrentPathEqualTo(e, t = "") {
              return this.path() == this.normalize(e + Vl(t));
            }
            normalize(t) {
              return e.stripTrailingSlash(
                (function (e, t) {
                  return e && t.startsWith(e) ? t.substring(e.length) : t;
                })(this._baseHref, Yl(t))
              );
            }
            prepareExternalUrl(e) {
              return (
                e && "/" !== e[0] && (e = "/" + e),
                this._platformStrategy.prepareExternalUrl(e)
              );
            }
            go(e, t = "", n = null) {
              this._platformStrategy.pushState(n, "", e, t),
                this._notifyUrlChangeListeners(
                  this.prepareExternalUrl(e + Vl(t)),
                  n
                );
            }
            replaceState(e, t = "", n = null) {
              this._platformStrategy.replaceState(n, "", e, t),
                this._notifyUrlChangeListeners(
                  this.prepareExternalUrl(e + Vl(t)),
                  n
                );
            }
            forward() {
              this._platformStrategy.forward();
            }
            back() {
              this._platformStrategy.back();
            }
            onUrlChange(e) {
              this._urlChangeListeners.push(e),
                this._urlChangeSubscription ||
                  (this._urlChangeSubscription = this.subscribe((e) => {
                    this._notifyUrlChangeListeners(e.url, e.state);
                  }));
            }
            _notifyUrlChangeListeners(e = "", t) {
              this._urlChangeListeners.forEach((n) => n(e, t));
            }
            subscribe(e, t, n) {
              return this._subject.subscribe({
                next: e,
                error: t,
                complete: n,
              });
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)(Yn(Bl), Yn(Fl));
            }),
            (e.normalizeQueryParams = Vl),
            (e.joinWithSlash = Hl),
            (e.stripTrailingSlash = Ul),
            (e.ɵprov = ce({ factory: Jl, token: e, providedIn: "root" })),
            e
          );
        })();
      function Jl() {
        return new Zl(Yn(Bl), Yn(Fl));
      }
      function Yl(e) {
        return e.replace(/\/index.html$/, "");
      }
      var Xl = (function (e) {
        return (
          (e[(e.Zero = 0)] = "Zero"),
          (e[(e.One = 1)] = "One"),
          (e[(e.Two = 2)] = "Two"),
          (e[(e.Few = 3)] = "Few"),
          (e[(e.Many = 4)] = "Many"),
          (e[(e.Other = 5)] = "Other"),
          e
        );
      })({});
      class ec {}
      let tc = (() => {
        class e extends ec {
          constructor(e) {
            super(), (this.locale = e);
          }
          getPluralCategory(e, t) {
            switch (
              (function (e) {
                return (function (e) {
                  const t = (function (e) {
                    return e.toLowerCase().replace(/_/g, "-");
                  })(e);
                  let n = to(t);
                  if (n) return n;
                  const r = t.split("-")[0];
                  if (((n = to(r)), n)) return n;
                  if ("en" === r) return Xi;
                  throw new Error(`Missing locale data for the locale "${e}".`);
                })(e)[no.PluralCase];
              })(t || this.locale)(e)
            ) {
              case Xl.Zero:
                return "zero";
              case Xl.One:
                return "one";
              case Xl.Two:
                return "two";
              case Xl.Few:
                return "few";
              case Xl.Many:
                return "many";
              default:
                return "other";
            }
          }
        }
        return (
          (e.ɵfac = function (t) {
            return new (t || e)(Yn(Ba));
          }),
          (e.ɵprov = ce({ token: e, factory: e.ɵfac })),
          e
        );
      })();
      function nc(e, t) {
        t = encodeURIComponent(t);
        for (const n of e.split(";")) {
          const e = n.indexOf("="),
            [r, s] = -1 == e ? [n, ""] : [n.slice(0, e), n.slice(e + 1)];
          if (r.trim() === t) return decodeURIComponent(s);
        }
        return null;
      }
      let rc = (() => {
        class e {
          constructor(e, t, n, r) {
            (this._iterableDiffers = e),
              (this._keyValueDiffers = t),
              (this._ngEl = n),
              (this._renderer = r),
              (this._iterableDiffer = null),
              (this._keyValueDiffer = null),
              (this._initialClasses = []),
              (this._rawClass = null);
          }
          set klass(e) {
            this._removeClasses(this._initialClasses),
              (this._initialClasses =
                "string" == typeof e ? e.split(/\s+/) : []),
              this._applyClasses(this._initialClasses),
              this._applyClasses(this._rawClass);
          }
          set ngClass(e) {
            this._removeClasses(this._rawClass),
              this._applyClasses(this._initialClasses),
              (this._iterableDiffer = null),
              (this._keyValueDiffer = null),
              (this._rawClass = "string" == typeof e ? e.split(/\s+/) : e),
              this._rawClass &&
                (yi(this._rawClass)
                  ? (this._iterableDiffer = this._iterableDiffers
                      .find(this._rawClass)
                      .create())
                  : (this._keyValueDiffer = this._keyValueDiffers
                      .find(this._rawClass)
                      .create()));
          }
          ngDoCheck() {
            if (this._iterableDiffer) {
              const e = this._iterableDiffer.diff(this._rawClass);
              e && this._applyIterableChanges(e);
            } else if (this._keyValueDiffer) {
              const e = this._keyValueDiffer.diff(this._rawClass);
              e && this._applyKeyValueChanges(e);
            }
          }
          _applyKeyValueChanges(e) {
            e.forEachAddedItem((e) => this._toggleClass(e.key, e.currentValue)),
              e.forEachChangedItem((e) =>
                this._toggleClass(e.key, e.currentValue)
              ),
              e.forEachRemovedItem((e) => {
                e.previousValue && this._toggleClass(e.key, !1);
              });
          }
          _applyIterableChanges(e) {
            e.forEachAddedItem((e) => {
              if ("string" != typeof e.item)
                throw new Error(
                  `NgClass can only toggle CSS classes expressed as strings, got ${ee(
                    e.item
                  )}`
                );
              this._toggleClass(e.item, !0);
            }),
              e.forEachRemovedItem((e) => this._toggleClass(e.item, !1));
          }
          _applyClasses(e) {
            e &&
              (Array.isArray(e) || e instanceof Set
                ? e.forEach((e) => this._toggleClass(e, !0))
                : Object.keys(e).forEach((t) => this._toggleClass(t, !!e[t])));
          }
          _removeClasses(e) {
            e &&
              (Array.isArray(e) || e instanceof Set
                ? e.forEach((e) => this._toggleClass(e, !1))
                : Object.keys(e).forEach((e) => this._toggleClass(e, !1)));
          }
          _toggleClass(e, t) {
            (e = e.trim()) &&
              e.split(/\s+/g).forEach((e) => {
                t
                  ? this._renderer.addClass(this._ngEl.nativeElement, e)
                  : this._renderer.removeClass(this._ngEl.nativeElement, e);
              });
          }
        }
        return (
          (e.ɵfac = function (t) {
            return new (t || e)(Ei(Ro), Ei(Do), Ei(ho), Ei(mo));
          }),
          (e.ɵdir = Qe({
            type: e,
            selectors: [["", "ngClass", ""]],
            inputs: { klass: ["class", "klass"], ngClass: "ngClass" },
          })),
          e
        );
      })();
      class sc {
        constructor(e, t, n, r) {
          (this.$implicit = e),
            (this.ngForOf = t),
            (this.index = n),
            (this.count = r);
        }
        get first() {
          return 0 === this.index;
        }
        get last() {
          return this.index === this.count - 1;
        }
        get even() {
          return this.index % 2 == 0;
        }
        get odd() {
          return !this.even;
        }
      }
      let ic = (() => {
        class e {
          constructor(e, t, n) {
            (this._viewContainer = e),
              (this._template = t),
              (this._differs = n),
              (this._ngForOf = null),
              (this._ngForOfDirty = !0),
              (this._differ = null);
          }
          set ngForOf(e) {
            (this._ngForOf = e), (this._ngForOfDirty = !0);
          }
          set ngForTrackBy(e) {
            this._trackByFn = e;
          }
          get ngForTrackBy() {
            return this._trackByFn;
          }
          set ngForTemplate(e) {
            e && (this._template = e);
          }
          ngDoCheck() {
            if (this._ngForOfDirty) {
              this._ngForOfDirty = !1;
              const n = this._ngForOf;
              if (!this._differ && n)
                try {
                  this._differ = this._differs
                    .find(n)
                    .create(this.ngForTrackBy);
                } catch (t) {
                  throw new Error(
                    `Cannot find a differ supporting object '${n}' of type '${
                      ((e = n), e.name || typeof e)
                    }'. NgFor only supports binding to Iterables such as Arrays.`
                  );
                }
            }
            var e;
            if (this._differ) {
              const e = this._differ.diff(this._ngForOf);
              e && this._applyChanges(e);
            }
          }
          _applyChanges(e) {
            const t = [];
            e.forEachOperation((e, n, r) => {
              if (null == e.previousIndex) {
                const n = this._viewContainer.createEmbeddedView(
                    this._template,
                    new sc(null, this._ngForOf, -1, -1),
                    null === r ? void 0 : r
                  ),
                  s = new oc(e, n);
                t.push(s);
              } else if (null == r)
                this._viewContainer.remove(null === n ? void 0 : n);
              else if (null !== n) {
                const s = this._viewContainer.get(n);
                this._viewContainer.move(s, r);
                const i = new oc(e, s);
                t.push(i);
              }
            });
            for (let n = 0; n < t.length; n++)
              this._perViewChange(t[n].view, t[n].record);
            for (let n = 0, r = this._viewContainer.length; n < r; n++) {
              const e = this._viewContainer.get(n);
              (e.context.index = n),
                (e.context.count = r),
                (e.context.ngForOf = this._ngForOf);
            }
            e.forEachIdentityChange((e) => {
              this._viewContainer.get(e.currentIndex).context.$implicit =
                e.item;
            });
          }
          _perViewChange(e, t) {
            e.context.$implicit = t.item;
          }
          static ngTemplateContextGuard(e, t) {
            return !0;
          }
        }
        return (
          (e.ɵfac = function (t) {
            return new (t || e)(Ei(Zo), Ei(Uo), Ei(Ro));
          }),
          (e.ɵdir = Qe({
            type: e,
            selectors: [["", "ngFor", "", "ngForOf", ""]],
            inputs: {
              ngForOf: "ngForOf",
              ngForTrackBy: "ngForTrackBy",
              ngForTemplate: "ngForTemplate",
            },
          })),
          e
        );
      })();
      class oc {
        constructor(e, t) {
          (this.record = e), (this.view = t);
        }
      }
      let ac = (() => {
        class e {
          constructor(e, t) {
            (this._viewContainer = e),
              (this._context = new lc()),
              (this._thenTemplateRef = null),
              (this._elseTemplateRef = null),
              (this._thenViewRef = null),
              (this._elseViewRef = null),
              (this._thenTemplateRef = t);
          }
          set ngIf(e) {
            (this._context.$implicit = this._context.ngIf = e),
              this._updateView();
          }
          set ngIfThen(e) {
            cc("ngIfThen", e),
              (this._thenTemplateRef = e),
              (this._thenViewRef = null),
              this._updateView();
          }
          set ngIfElse(e) {
            cc("ngIfElse", e),
              (this._elseTemplateRef = e),
              (this._elseViewRef = null),
              this._updateView();
          }
          _updateView() {
            this._context.$implicit
              ? this._thenViewRef ||
                (this._viewContainer.clear(),
                (this._elseViewRef = null),
                this._thenTemplateRef &&
                  (this._thenViewRef = this._viewContainer.createEmbeddedView(
                    this._thenTemplateRef,
                    this._context
                  )))
              : this._elseViewRef ||
                (this._viewContainer.clear(),
                (this._thenViewRef = null),
                this._elseTemplateRef &&
                  (this._elseViewRef = this._viewContainer.createEmbeddedView(
                    this._elseTemplateRef,
                    this._context
                  )));
          }
          static ngTemplateContextGuard(e, t) {
            return !0;
          }
        }
        return (
          (e.ɵfac = function (t) {
            return new (t || e)(Ei(Zo), Ei(Uo));
          }),
          (e.ɵdir = Qe({
            type: e,
            selectors: [["", "ngIf", ""]],
            inputs: {
              ngIf: "ngIf",
              ngIfThen: "ngIfThen",
              ngIfElse: "ngIfElse",
            },
          })),
          e
        );
      })();
      class lc {
        constructor() {
          (this.$implicit = null), (this.ngIf = null);
        }
      }
      function cc(e, t) {
        if (t && !t.createEmbeddedView)
          throw new Error(
            `${e} must be a TemplateRef, but received '${ee(t)}'.`
          );
      }
      let uc = (() => {
        class e {}
        return (
          (e.ɵfac = function (t) {
            return new (t || e)();
          }),
          (e.ɵmod = Be({ type: e })),
          (e.ɵinj = ue({ providers: [{ provide: ec, useClass: tc }] })),
          e
        );
      })();
      function hc(e) {
        return "browser" === e;
      }
      let dc = (() => {
        class e {}
        return (
          (e.ɵprov = ce({
            token: e,
            providedIn: "root",
            factory: () => new pc(Yn(Ml), window),
          })),
          e
        );
      })();
      class pc {
        constructor(e, t) {
          (this.document = e), (this.window = t), (this.offset = () => [0, 0]);
        }
        setOffset(e) {
          this.offset = Array.isArray(e) ? () => e : e;
        }
        getScrollPosition() {
          return this.supportsScrolling()
            ? [this.window.pageXOffset, this.window.pageYOffset]
            : [0, 0];
        }
        scrollToPosition(e) {
          this.supportsScrolling() && this.window.scrollTo(e[0], e[1]);
        }
        scrollToAnchor(e) {
          if (!this.supportsScrolling()) return;
          const t = (function (e, t) {
            const n = e.getElementById(t) || e.getElementsByName(t)[0];
            if (n) return n;
            if (
              "function" == typeof e.createTreeWalker &&
              e.body &&
              (e.body.createShadowRoot || e.body.attachShadow)
            ) {
              const n = e.createTreeWalker(e.body, NodeFilter.SHOW_ELEMENT);
              let r = n.currentNode;
              for (; r; ) {
                const e = r.shadowRoot;
                if (e) {
                  const n =
                    e.getElementById(t) || e.querySelector(`[name="${t}"]`);
                  if (n) return n;
                }
                r = n.nextNode();
              }
            }
            return null;
          })(this.document, e);
          t && (this.scrollToElement(t), this.attemptFocus(t));
        }
        setHistoryScrollRestoration(e) {
          if (this.supportScrollRestoration()) {
            const t = this.window.history;
            t && t.scrollRestoration && (t.scrollRestoration = e);
          }
        }
        scrollToElement(e) {
          const t = e.getBoundingClientRect(),
            n = t.left + this.window.pageXOffset,
            r = t.top + this.window.pageYOffset,
            s = this.offset();
          this.window.scrollTo(n - s[0], r - s[1]);
        }
        attemptFocus(e) {
          return e.focus(), this.document.activeElement === e;
        }
        supportScrollRestoration() {
          try {
            if (!this.supportsScrolling()) return !1;
            const e =
              fc(this.window.history) ||
              fc(Object.getPrototypeOf(this.window.history));
            return !(!e || (!e.writable && !e.set));
          } catch (e) {
            return !1;
          }
        }
        supportsScrolling() {
          try {
            return (
              !!this.window &&
              !!this.window.scrollTo &&
              "pageXOffset" in this.window
            );
          } catch (e) {
            return !1;
          }
        }
      }
      function fc(e) {
        return Object.getOwnPropertyDescriptor(e, "scrollRestoration");
      }
      class mc extends class extends class {} {
        constructor() {
          super();
        }
        supportsDOMEvents() {
          return !0;
        }
      } {
        static makeCurrent() {
          var e;
          (e = new mc()), Dl || (Dl = e);
        }
        getProperty(e, t) {
          return e[t];
        }
        log(e) {
          window.console && window.console.log && window.console.log(e);
        }
        logGroup(e) {
          window.console && window.console.group && window.console.group(e);
        }
        logGroupEnd() {
          window.console &&
            window.console.groupEnd &&
            window.console.groupEnd();
        }
        onAndCancel(e, t, n) {
          return (
            e.addEventListener(t, n, !1),
            () => {
              e.removeEventListener(t, n, !1);
            }
          );
        }
        dispatchEvent(e, t) {
          e.dispatchEvent(t);
        }
        remove(e) {
          return e.parentNode && e.parentNode.removeChild(e), e;
        }
        getValue(e) {
          return e.value;
        }
        createElement(e, t) {
          return (t = t || this.getDefaultDocument()).createElement(e);
        }
        createHtmlDocument() {
          return document.implementation.createHTMLDocument("fakeTitle");
        }
        getDefaultDocument() {
          return document;
        }
        isElementNode(e) {
          return e.nodeType === Node.ELEMENT_NODE;
        }
        isShadowRoot(e) {
          return e instanceof DocumentFragment;
        }
        getGlobalEventTarget(e, t) {
          return "window" === t
            ? window
            : "document" === t
            ? e
            : "body" === t
            ? e.body
            : null;
        }
        getHistory() {
          return window.history;
        }
        getLocation() {
          return window.location;
        }
        getBaseHref(e) {
          const t =
            yc || ((yc = document.querySelector("base")), yc)
              ? yc.getAttribute("href")
              : null;
          return null == t
            ? null
            : ((n = t),
              gc || (gc = document.createElement("a")),
              gc.setAttribute("href", n),
              "/" === gc.pathname.charAt(0) ? gc.pathname : "/" + gc.pathname);
          var n;
        }
        resetBaseElement() {
          yc = null;
        }
        getUserAgent() {
          return window.navigator.userAgent;
        }
        performanceNow() {
          return window.performance && window.performance.now
            ? window.performance.now()
            : new Date().getTime();
        }
        supportsCookies() {
          return !0;
        }
        getCookie(e) {
          return nc(document.cookie, e);
        }
      }
      let gc,
        yc = null;
      const vc = new Mn("TRANSITION_ID"),
        bc = [
          {
            provide: Fa,
            useFactory: function (e, t, n) {
              return () => {
                n.get(ja).donePromise.then(() => {
                  const n = Nl();
                  Array.prototype.slice
                    .apply(t.querySelectorAll("style[ng-transition]"))
                    .filter((t) => t.getAttribute("ng-transition") === e)
                    .forEach((e) => n.remove(e));
                });
              };
            },
            deps: [vc, Ml, pi],
            multi: !0,
          },
        ];
      class _c {
        static init() {
          var e;
          (e = new _c()), (fl = e);
        }
        addToWindow(e) {
          (Ae.getAngularTestability = (t, n = !0) => {
            const r = e.findTestabilityInTree(t, n);
            if (null == r)
              throw new Error("Could not find testability for element.");
            return r;
          }),
            (Ae.getAllAngularTestabilities = () => e.getAllTestabilities()),
            (Ae.getAllAngularRootElements = () => e.getAllRootElements()),
            Ae.frameworkStabilizers || (Ae.frameworkStabilizers = []),
            Ae.frameworkStabilizers.push((e) => {
              const t = Ae.getAllAngularTestabilities();
              let n = t.length,
                r = !1;
              const s = function (t) {
                (r = r || t), n--, 0 == n && e(r);
              };
              t.forEach(function (e) {
                e.whenStable(s);
              });
            });
        }
        findTestabilityInTree(e, t, n) {
          if (null == t) return null;
          const r = e.getTestability(t);
          return null != r
            ? r
            : n
            ? Nl().isShadowRoot(t)
              ? this.findTestabilityInTree(e, t.host, !0)
              : this.findTestabilityInTree(e, t.parentElement, !0)
            : null;
        }
      }
      const wc = new Mn("EventManagerPlugins");
      let Sc = (() => {
        class e {
          constructor(e, t) {
            (this._zone = t),
              (this._eventNameToPlugin = new Map()),
              e.forEach((e) => (e.manager = this)),
              (this._plugins = e.slice().reverse());
          }
          addEventListener(e, t, n) {
            return this._findPluginFor(t).addEventListener(e, t, n);
          }
          addGlobalEventListener(e, t, n) {
            return this._findPluginFor(t).addGlobalEventListener(e, t, n);
          }
          getZone() {
            return this._zone;
          }
          _findPluginFor(e) {
            const t = this._eventNameToPlugin.get(e);
            if (t) return t;
            const n = this._plugins;
            for (let r = 0; r < n.length; r++) {
              const t = n[r];
              if (t.supports(e)) return this._eventNameToPlugin.set(e, t), t;
            }
            throw new Error(`No event manager plugin found for event ${e}`);
          }
        }
        return (
          (e.ɵfac = function (t) {
            return new (t || e)(Yn(wc), Yn(rl));
          }),
          (e.ɵprov = ce({ token: e, factory: e.ɵfac })),
          e
        );
      })();
      class Cc {
        constructor(e) {
          this._doc = e;
        }
        addGlobalEventListener(e, t, n) {
          const r = Nl().getGlobalEventTarget(this._doc, e);
          if (!r)
            throw new Error(`Unsupported event target ${r} for event ${t}`);
          return this.addEventListener(r, t, n);
        }
      }
      let Ec = (() => {
          class e {
            constructor() {
              this._stylesSet = new Set();
            }
            addStyles(e) {
              const t = new Set();
              e.forEach((e) => {
                this._stylesSet.has(e) || (this._stylesSet.add(e), t.add(e));
              }),
                this.onStylesAdded(t);
            }
            onStylesAdded(e) {}
            getAllStyles() {
              return Array.from(this._stylesSet);
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)();
            }),
            (e.ɵprov = ce({ token: e, factory: e.ɵfac })),
            e
          );
        })(),
        kc = (() => {
          class e extends Ec {
            constructor(e) {
              super(),
                (this._doc = e),
                (this._hostNodes = new Map()),
                this._hostNodes.set(e.head, []);
            }
            _addStylesToHost(e, t, n) {
              e.forEach((e) => {
                const r = this._doc.createElement("style");
                (r.textContent = e), n.push(t.appendChild(r));
              });
            }
            addHost(e) {
              const t = [];
              this._addStylesToHost(this._stylesSet, e, t),
                this._hostNodes.set(e, t);
            }
            removeHost(e) {
              const t = this._hostNodes.get(e);
              t && t.forEach(xc), this._hostNodes.delete(e);
            }
            onStylesAdded(e) {
              this._hostNodes.forEach((t, n) => {
                this._addStylesToHost(e, n, t);
              });
            }
            ngOnDestroy() {
              this._hostNodes.forEach((e) => e.forEach(xc));
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)(Yn(Ml));
            }),
            (e.ɵprov = ce({ token: e, factory: e.ɵfac })),
            e
          );
        })();
      function xc(e) {
        Nl().remove(e);
      }
      const Tc = {
          svg: "http://www.w3.org/2000/svg",
          xhtml: "http://www.w3.org/1999/xhtml",
          xlink: "http://www.w3.org/1999/xlink",
          xml: "http://www.w3.org/XML/1998/namespace",
          xmlns: "http://www.w3.org/2000/xmlns/",
        },
        Ic = /%COMP%/g;
      function Ac(e, t, n) {
        for (let r = 0; r < t.length; r++) {
          let s = t[r];
          Array.isArray(s) ? Ac(e, s, n) : ((s = s.replace(Ic, e)), n.push(s));
        }
        return n;
      }
      function Oc(e) {
        return (t) => {
          if ("__ngUnwrap__" === t) return e;
          !1 === e(t) && (t.preventDefault(), (t.returnValue = !1));
        };
      }
      let Rc = (() => {
        class e {
          constructor(e, t, n) {
            (this.eventManager = e),
              (this.sharedStylesHost = t),
              (this.appId = n),
              (this.rendererByCompId = new Map()),
              (this.defaultRenderer = new Pc(e));
          }
          createRenderer(e, t) {
            if (!e || !t) return this.defaultRenderer;
            switch (t.encapsulation) {
              case Ee.Emulated: {
                let n = this.rendererByCompId.get(t.id);
                return (
                  n ||
                    ((n = new Dc(
                      this.eventManager,
                      this.sharedStylesHost,
                      t,
                      this.appId
                    )),
                    this.rendererByCompId.set(t.id, n)),
                  n.applyToHost(e),
                  n
                );
              }
              case 1:
              case Ee.ShadowDom:
                return new Nc(this.eventManager, this.sharedStylesHost, e, t);
              default:
                if (!this.rendererByCompId.has(t.id)) {
                  const e = Ac(t.id, t.styles, []);
                  this.sharedStylesHost.addStyles(e),
                    this.rendererByCompId.set(t.id, this.defaultRenderer);
                }
                return this.defaultRenderer;
            }
          }
          begin() {}
          end() {}
        }
        return (
          (e.ɵfac = function (t) {
            return new (t || e)(Yn(Sc), Yn(kc), Yn(La));
          }),
          (e.ɵprov = ce({ token: e, factory: e.ɵfac })),
          e
        );
      })();
      class Pc {
        constructor(e) {
          (this.eventManager = e), (this.data = Object.create(null));
        }
        destroy() {}
        createElement(e, t) {
          return t
            ? document.createElementNS(Tc[t] || t, e)
            : document.createElement(e);
        }
        createComment(e) {
          return document.createComment(e);
        }
        createText(e) {
          return document.createTextNode(e);
        }
        appendChild(e, t) {
          e.appendChild(t);
        }
        insertBefore(e, t, n) {
          e && e.insertBefore(t, n);
        }
        removeChild(e, t) {
          e && e.removeChild(t);
        }
        selectRootElement(e, t) {
          let n = "string" == typeof e ? document.querySelector(e) : e;
          if (!n)
            throw new Error(`The selector "${e}" did not match any elements`);
          return t || (n.textContent = ""), n;
        }
        parentNode(e) {
          return e.parentNode;
        }
        nextSibling(e) {
          return e.nextSibling;
        }
        setAttribute(e, t, n, r) {
          if (r) {
            t = r + ":" + t;
            const s = Tc[r];
            s ? e.setAttributeNS(s, t, n) : e.setAttribute(t, n);
          } else e.setAttribute(t, n);
        }
        removeAttribute(e, t, n) {
          if (n) {
            const r = Tc[n];
            r ? e.removeAttributeNS(r, t) : e.removeAttribute(`${n}:${t}`);
          } else e.removeAttribute(t);
        }
        addClass(e, t) {
          e.classList.add(t);
        }
        removeClass(e, t) {
          e.classList.remove(t);
        }
        setStyle(e, t, n, r) {
          r & (vr.DashCase | vr.Important)
            ? e.style.setProperty(t, n, r & vr.Important ? "important" : "")
            : (e.style[t] = n);
        }
        removeStyle(e, t, n) {
          n & vr.DashCase ? e.style.removeProperty(t) : (e.style[t] = "");
        }
        setProperty(e, t, n) {
          e[t] = n;
        }
        setValue(e, t) {
          e.nodeValue = t;
        }
        listen(e, t, n) {
          return "string" == typeof e
            ? this.eventManager.addGlobalEventListener(e, t, Oc(n))
            : this.eventManager.addEventListener(e, t, Oc(n));
        }
      }
      class Dc extends Pc {
        constructor(e, t, n, r) {
          super(e), (this.component = n);
          const s = Ac(r + "-" + n.id, n.styles, []);
          t.addStyles(s),
            (this.contentAttr = "_ngcontent-%COMP%".replace(
              Ic,
              r + "-" + n.id
            )),
            (this.hostAttr = "_nghost-%COMP%".replace(Ic, r + "-" + n.id));
        }
        applyToHost(e) {
          super.setAttribute(e, this.hostAttr, "");
        }
        createElement(e, t) {
          const n = super.createElement(e, t);
          return super.setAttribute(n, this.contentAttr, ""), n;
        }
      }
      class Nc extends Pc {
        constructor(e, t, n, r) {
          super(e),
            (this.sharedStylesHost = t),
            (this.hostEl = n),
            (this.shadowRoot = n.attachShadow({ mode: "open" })),
            this.sharedStylesHost.addHost(this.shadowRoot);
          const s = Ac(r.id, r.styles, []);
          for (let i = 0; i < s.length; i++) {
            const e = document.createElement("style");
            (e.textContent = s[i]), this.shadowRoot.appendChild(e);
          }
        }
        nodeOrShadowRoot(e) {
          return e === this.hostEl ? this.shadowRoot : e;
        }
        destroy() {
          this.sharedStylesHost.removeHost(this.shadowRoot);
        }
        appendChild(e, t) {
          return super.appendChild(this.nodeOrShadowRoot(e), t);
        }
        insertBefore(e, t, n) {
          return super.insertBefore(this.nodeOrShadowRoot(e), t, n);
        }
        removeChild(e, t) {
          return super.removeChild(this.nodeOrShadowRoot(e), t);
        }
        parentNode(e) {
          return this.nodeOrShadowRoot(
            super.parentNode(this.nodeOrShadowRoot(e))
          );
        }
      }
      let Mc = (() => {
        class e extends Cc {
          constructor(e) {
            super(e);
          }
          supports(e) {
            return !0;
          }
          addEventListener(e, t, n) {
            return (
              e.addEventListener(t, n, !1),
              () => this.removeEventListener(e, t, n)
            );
          }
          removeEventListener(e, t, n) {
            return e.removeEventListener(t, n);
          }
        }
        return (
          (e.ɵfac = function (t) {
            return new (t || e)(Yn(Ml));
          }),
          (e.ɵprov = ce({ token: e, factory: e.ɵfac })),
          e
        );
      })();
      const Fc = ["alt", "control", "meta", "shift"],
        jc = {
          "\b": "Backspace",
          "\t": "Tab",
          "\x7f": "Delete",
          "\x1b": "Escape",
          "Del": "Delete",
          "Esc": "Escape",
          "Left": "ArrowLeft",
          "Right": "ArrowRight",
          "Up": "ArrowUp",
          "Down": "ArrowDown",
          "Menu": "ContextMenu",
          "Scroll": "ScrollLock",
          "Win": "OS",
        },
        Lc = {
          "A": "1",
          "B": "2",
          "C": "3",
          "D": "4",
          "E": "5",
          "F": "6",
          "G": "7",
          "H": "8",
          "I": "9",
          "J": "*",
          "K": "+",
          "M": "-",
          "N": ".",
          "O": "/",
          "`": "0",
          "\x90": "NumLock",
        },
        Wc = {
          alt: (e) => e.altKey,
          control: (e) => e.ctrlKey,
          meta: (e) => e.metaKey,
          shift: (e) => e.shiftKey,
        };
      let zc = (() => {
        class e extends Cc {
          constructor(e) {
            super(e);
          }
          supports(t) {
            return null != e.parseEventName(t);
          }
          addEventListener(t, n, r) {
            const s = e.parseEventName(n),
              i = e.eventCallback(s.fullKey, r, this.manager.getZone());
            return this.manager
              .getZone()
              .runOutsideAngular(() => Nl().onAndCancel(t, s.domEventName, i));
          }
          static parseEventName(t) {
            const n = t.toLowerCase().split("."),
              r = n.shift();
            if (0 === n.length || ("keydown" !== r && "keyup" !== r))
              return null;
            const s = e._normalizeKey(n.pop());
            let i = "";
            if (
              (Fc.forEach((e) => {
                const t = n.indexOf(e);
                t > -1 && (n.splice(t, 1), (i += e + "."));
              }),
              (i += s),
              0 != n.length || 0 === s.length)
            )
              return null;
            const o = {};
            return (o.domEventName = r), (o.fullKey = i), o;
          }
          static getEventFullKey(e) {
            let t = "",
              n = (function (e) {
                let t = e.key;
                if (null == t) {
                  if (((t = e.keyIdentifier), null == t)) return "Unidentified";
                  t.startsWith("U+") &&
                    ((t = String.fromCharCode(parseInt(t.substring(2), 16))),
                    3 === e.location && Lc.hasOwnProperty(t) && (t = Lc[t]));
                }
                return jc[t] || t;
              })(e);
            return (
              (n = n.toLowerCase()),
              " " === n ? (n = "space") : "." === n && (n = "dot"),
              Fc.forEach((r) => {
                r != n && (0, Wc[r])(e) && (t += r + ".");
              }),
              (t += n),
              t
            );
          }
          static eventCallback(t, n, r) {
            return (s) => {
              e.getEventFullKey(s) === t && r.runGuarded(() => n(s));
            };
          }
          static _normalizeKey(e) {
            switch (e) {
              case "esc":
                return "escape";
              default:
                return e;
            }
          }
        }
        return (
          (e.ɵfac = function (t) {
            return new (t || e)(Yn(Ml));
          }),
          (e.ɵprov = ce({ token: e, factory: e.ɵfac })),
          e
        );
      })();
      const qc = bl(Ol, "browser", [
          { provide: Ha, useValue: "browser" },
          {
            provide: qa,
            useValue: function () {
              mc.makeCurrent(), _c.init();
            },
            multi: !0,
          },
          {
            provide: Ml,
            useFactory: function () {
              return (
                (function (e) {
                  ct = e;
                })(document),
                document
              );
            },
            deps: [],
          },
        ]),
        Hc = [
          [],
          { provide: ei, useValue: "root" },
          {
            provide: pr,
            useFactory: function () {
              return new pr();
            },
            deps: [],
          },
          { provide: wc, useClass: Mc, multi: !0, deps: [Ml, rl, Ha] },
          { provide: wc, useClass: zc, multi: !0, deps: [Ml] },
          [],
          { provide: Rc, useClass: Rc, deps: [Sc, kc, La] },
          { provide: fo, useExisting: Rc },
          { provide: Ec, useExisting: kc },
          { provide: kc, useClass: kc, deps: [Ml] },
          { provide: ul, useClass: ul, deps: [rl] },
          { provide: Sc, useClass: Sc, deps: [wc, rl] },
          [],
        ];
      let Uc = (() => {
        class e {
          constructor(e) {
            if (e)
              throw new Error(
                "BrowserModule has already been loaded. If you need access to common directives such as NgIf and NgFor from a lazy loaded module, import CommonModule instead."
              );
          }
          static withServerTransition(t) {
            return {
              ngModule: e,
              providers: [
                { provide: La, useValue: t.appId },
                { provide: vc, useExisting: La },
                bc,
              ],
            };
          }
        }
        return (
          (e.ɵfac = function (t) {
            return new (t || e)(Yn(e, 12));
          }),
          (e.ɵmod = Be({ type: e })),
          (e.ɵinj = ue({ providers: Hc, imports: [uc, Pl] })),
          e
        );
      })();
      "undefined" != typeof window && window;
      class Vc extends h {
        constructor(e, t) {
          super();
        }
        schedule(e, t = 0) {
          return this;
        }
      }
      class Bc extends Vc {
        constructor(e, t) {
          super(e, t),
            (this.scheduler = e),
            (this.work = t),
            (this.pending = !1);
        }
        schedule(e, t = 0) {
          if (this.closed) return this;
          this.state = e;
          const n = this.id,
            r = this.scheduler;
          return (
            null != n && (this.id = this.recycleAsyncId(r, n, t)),
            (this.pending = !0),
            (this.delay = t),
            (this.id = this.id || this.requestAsyncId(r, this.id, t)),
            this
          );
        }
        requestAsyncId(e, t, n = 0) {
          return setInterval(e.flush.bind(e, this), n);
        }
        recycleAsyncId(e, t, n = 0) {
          if (null !== n && this.delay === n && !1 === this.pending) return t;
          clearInterval(t);
        }
        execute(e, t) {
          if (this.closed) return new Error("executing a cancelled action");
          this.pending = !1;
          const n = this._execute(e, t);
          if (n) return n;
          !1 === this.pending &&
            null != this.id &&
            (this.id = this.recycleAsyncId(this.scheduler, this.id, null));
        }
        _execute(e, t) {
          let n,
            r = !1;
          try {
            this.work(e);
          } catch (s) {
            (r = !0), (n = (!!s && s) || new Error(s));
          }
          if (r) return this.unsubscribe(), n;
        }
        _unsubscribe() {
          const e = this.id,
            t = this.scheduler,
            n = t.actions,
            r = n.indexOf(this);
          (this.work = null),
            (this.state = null),
            (this.pending = !1),
            (this.scheduler = null),
            -1 !== r && n.splice(r, 1),
            null != e && (this.id = this.recycleAsyncId(t, e, null)),
            (this.delay = null);
        }
      }
      class $c extends Bc {
        constructor(e, t) {
          super(e, t), (this.scheduler = e), (this.work = t);
        }
        schedule(e, t = 0) {
          return t > 0
            ? super.schedule(e, t)
            : ((this.delay = t),
              (this.state = e),
              this.scheduler.flush(this),
              this);
        }
        execute(e, t) {
          return t > 0 || this.closed
            ? super.execute(e, t)
            : this._execute(e, t);
        }
        requestAsyncId(e, t, n = 0) {
          return (null !== n && n > 0) || (null === n && this.delay > 0)
            ? super.requestAsyncId(e, t, n)
            : e.flush(this);
        }
      }
      let Qc = (() => {
        class e {
          constructor(t, n = e.now) {
            (this.SchedulerAction = t), (this.now = n);
          }
          schedule(e, t = 0, n) {
            return new this.SchedulerAction(this, e).schedule(n, t);
          }
        }
        return (e.now = () => Date.now()), e;
      })();
      class Gc extends Qc {
        constructor(e, t = Qc.now) {
          super(e, () =>
            Gc.delegate && Gc.delegate !== this ? Gc.delegate.now() : t()
          ),
            (this.actions = []),
            (this.active = !1),
            (this.scheduled = void 0);
        }
        schedule(e, t = 0, n) {
          return Gc.delegate && Gc.delegate !== this
            ? Gc.delegate.schedule(e, t, n)
            : super.schedule(e, t, n);
        }
        flush(e) {
          const { actions: t } = this;
          if (this.active) return void t.push(e);
          let n;
          this.active = !0;
          do {
            if ((n = e.execute(e.state, e.delay))) break;
          } while ((e = t.shift()));
          if (((this.active = !1), n)) {
            for (; (e = t.shift()); ) e.unsubscribe();
            throw n;
          }
        }
      }
      class Kc extends Gc {}
      const Zc = new Kc($c),
        Jc = new v((e) => e.complete());
      function Yc(e) {
        return e
          ? (function (e) {
              return new v((t) => e.schedule(() => t.complete()));
            })(e)
          : Jc;
      }
      function Xc(...e) {
        let t = e[e.length - 1];
        return k(t) ? (e.pop(), M(e, t)) : V(e);
      }
      let eu = (() => {
        class e {
          constructor(e, t, n) {
            (this.kind = e),
              (this.value = t),
              (this.error = n),
              (this.hasValue = "N" === e);
          }
          observe(e) {
            switch (this.kind) {
              case "N":
                return e.next && e.next(this.value);
              case "E":
                return e.error && e.error(this.error);
              case "C":
                return e.complete && e.complete();
            }
          }
          do(e, t, n) {
            switch (this.kind) {
              case "N":
                return e && e(this.value);
              case "E":
                return t && t(this.error);
              case "C":
                return n && n();
            }
          }
          accept(e, t, n) {
            return e && "function" == typeof e.next
              ? this.observe(e)
              : this.do(e, t, n);
          }
          toObservable() {
            switch (this.kind) {
              case "N":
                return Xc(this.value);
              case "E":
                return (e = this.error), new v((t) => t.error(e));
              case "C":
                return Yc();
            }
            var e;
            throw new Error("unexpected notification kind value");
          }
          static createNext(t) {
            return void 0 !== t ? new e("N", t) : e.undefinedValueNotification;
          }
          static createError(t) {
            return new e("E", void 0, t);
          }
          static createComplete() {
            return e.completeNotification;
          }
        }
        return (
          (e.completeNotification = new e("C")),
          (e.undefinedValueNotification = new e("N", void 0)),
          e
        );
      })();
      class tu extends f {
        constructor(e, t, n = 0) {
          super(e), (this.scheduler = t), (this.delay = n);
        }
        static dispatch(e) {
          const { notification: t, destination: n } = e;
          t.observe(n), this.unsubscribe();
        }
        scheduleMessage(e) {
          this.destination.add(
            this.scheduler.schedule(
              tu.dispatch,
              this.delay,
              new nu(e, this.destination)
            )
          );
        }
        _next(e) {
          this.scheduleMessage(eu.createNext(e));
        }
        _error(e) {
          this.scheduleMessage(eu.createError(e)), this.unsubscribe();
        }
        _complete() {
          this.scheduleMessage(eu.createComplete()), this.unsubscribe();
        }
      }
      class nu {
        constructor(e, t) {
          (this.notification = e), (this.destination = t);
        }
      }
      class ru extends C {
        constructor(
          e = Number.POSITIVE_INFINITY,
          t = Number.POSITIVE_INFINITY,
          n
        ) {
          super(),
            (this.scheduler = n),
            (this._events = []),
            (this._infiniteTimeWindow = !1),
            (this._bufferSize = e < 1 ? 1 : e),
            (this._windowTime = t < 1 ? 1 : t),
            t === Number.POSITIVE_INFINITY
              ? ((this._infiniteTimeWindow = !0),
                (this.next = this.nextInfiniteTimeWindow))
              : (this.next = this.nextTimeWindow);
        }
        nextInfiniteTimeWindow(e) {
          if (!this.isStopped) {
            const t = this._events;
            t.push(e), t.length > this._bufferSize && t.shift();
          }
          super.next(e);
        }
        nextTimeWindow(e) {
          this.isStopped ||
            (this._events.push(new su(this._getNow(), e)),
            this._trimBufferThenGetEvents()),
            super.next(e);
        }
        _subscribe(e) {
          const t = this._infiniteTimeWindow,
            n = t ? this._events : this._trimBufferThenGetEvents(),
            r = this.scheduler,
            s = n.length;
          let i;
          if (this.closed) throw new _();
          if (
            (this.isStopped || this.hasError
              ? (i = h.EMPTY)
              : (this.observers.push(e), (i = new w(this, e))),
            r && e.add((e = new tu(e, r))),
            t)
          )
            for (let o = 0; o < s && !e.closed; o++) e.next(n[o]);
          else for (let o = 0; o < s && !e.closed; o++) e.next(n[o].value);
          return (
            this.hasError
              ? e.error(this.thrownError)
              : this.isStopped && e.complete(),
            i
          );
        }
        _getNow() {
          return (this.scheduler || Zc).now();
        }
        _trimBufferThenGetEvents() {
          const e = this._getNow(),
            t = this._bufferSize,
            n = this._windowTime,
            r = this._events,
            s = r.length;
          let i = 0;
          for (; i < s && !(e - r[i].time < n); ) i++;
          return s > t && (i = Math.max(i, s - t)), i > 0 && r.splice(0, i), r;
        }
      }
      class su {
        constructor(e, t) {
          (this.time = e), (this.value = t);
        }
      }
      function iu(e, t) {
        return "function" == typeof t
          ? (n) =>
              n.pipe(iu((n, r) => F(e(n, r)).pipe(x((e, s) => t(n, e, r, s)))))
          : (t) => t.lift(new ou(e));
      }
      class ou {
        constructor(e) {
          this.project = e;
        }
        call(e, t) {
          return t.subscribe(new au(e, this.project));
        }
      }
      class au extends L {
        constructor(e, t) {
          super(e), (this.project = t), (this.index = 0);
        }
        _next(e) {
          let t;
          const n = this.index++;
          try {
            t = this.project(e, n);
          } catch (r) {
            return void this.destination.error(r);
          }
          this._innerSub(t);
        }
        _innerSub(e) {
          const t = this.innerSubscription;
          t && t.unsubscribe();
          const n = new j(this),
            r = this.destination;
          r.add(n),
            (this.innerSubscription = W(e, n)),
            this.innerSubscription !== n && r.add(this.innerSubscription);
        }
        _complete() {
          const { innerSubscription: e } = this;
          (e && !e.closed) || super._complete(), this.unsubscribe();
        }
        _unsubscribe() {
          this.innerSubscription = void 0;
        }
        notifyComplete() {
          (this.innerSubscription = void 0),
            this.isStopped && super._complete();
        }
        notifyNext(e) {
          this.destination.next(e);
        }
      }
      const lu = {
        schedule(e, t) {
          const n = setTimeout(e, t);
          return () => clearTimeout(n);
        },
        scheduleBeforeRender(e) {
          if ("undefined" == typeof window) return lu.schedule(e, 0);
          if (void 0 === window.requestAnimationFrame)
            return lu.schedule(e, 16);
          const t = window.requestAnimationFrame(e);
          return () => window.cancelAnimationFrame(t);
        },
      };
      let cu;
      function uu(e, t, n) {
        let r = n;
        return (
          (function (e) {
            return !!e && e.nodeType === Node.ELEMENT_NODE;
          })(e) &&
            t.some(
              (t, n) =>
                !(
                  "*" === t ||
                  !(function (e, t) {
                    if (!cu) {
                      const e = Element.prototype;
                      cu =
                        e.matches ||
                        e.matchesSelector ||
                        e.mozMatchesSelector ||
                        e.msMatchesSelector ||
                        e.oMatchesSelector ||
                        e.webkitMatchesSelector;
                    }
                    return e.nodeType === Node.ELEMENT_NODE && cu.call(e, t);
                  })(e, t) ||
                  ((r = n), 0)
                )
            ),
          r
        );
      }
      class hu {
        constructor(e, t) {
          this.componentFactory = t.get(ao).resolveComponentFactory(e);
        }
        create(e) {
          return new du(this.componentFactory, e);
        }
      }
      class du {
        constructor(e, t) {
          (this.componentFactory = e),
            (this.injector = t),
            (this.eventEmitters = new ru(1)),
            (this.events = this.eventEmitters.pipe(iu((e) => B(...e)))),
            (this.componentRef = null),
            (this.viewChangeDetectorRef = null),
            (this.inputChanges = null),
            (this.hasInputChanges = !1),
            (this.implementsOnChanges = !1),
            (this.scheduledChangeDetectionFn = null),
            (this.scheduledDestroyFn = null),
            (this.initialInputValues = new Map()),
            (this.unchangedInputs = new Set(
              this.componentFactory.inputs.map(({ propName: e }) => e)
            )),
            (this.ngZone = this.injector.get(rl)),
            (this.elementZone =
              "undefined" == typeof Zone
                ? null
                : this.ngZone.run(() => Zone.current));
        }
        connect(e) {
          this.runInZone(() => {
            if (null !== this.scheduledDestroyFn)
              return (
                this.scheduledDestroyFn(), void (this.scheduledDestroyFn = null)
              );
            null === this.componentRef && this.initializeComponent(e);
          });
        }
        disconnect() {
          this.runInZone(() => {
            null !== this.componentRef &&
              null === this.scheduledDestroyFn &&
              (this.scheduledDestroyFn = lu.schedule(() => {
                null !== this.componentRef &&
                  (this.componentRef.destroy(),
                  (this.componentRef = null),
                  (this.viewChangeDetectorRef = null));
              }, 10));
          });
        }
        getInputValue(e) {
          return this.runInZone(() =>
            null === this.componentRef
              ? this.initialInputValues.get(e)
              : this.componentRef.instance[e]
          );
        }
        setInputValue(e, t) {
          this.runInZone(() => {
            var n, r;
            null !== this.componentRef
              ? (((n = t) !== (r = this.getInputValue(e)) &&
                  (n == n || r == r)) ||
                  (void 0 === t && this.unchangedInputs.has(e))) &&
                (this.recordInputChange(e, t),
                this.unchangedInputs.delete(e),
                (this.hasInputChanges = !0),
                (this.componentRef.instance[e] = t),
                this.scheduleDetectChanges())
              : this.initialInputValues.set(e, t);
          });
        }
        initializeComponent(e) {
          const t = pi.create({ providers: [], parent: this.injector }),
            n = (function (e, t) {
              const n = e.childNodes,
                r = t.map(() => []);
              let s = -1;
              t.some((e, t) => "*" === e && ((s = t), !0));
              for (let i = 0, o = n.length; i < o; ++i) {
                const e = n[i],
                  o = uu(e, t, s);
                -1 !== o && r[o].push(e);
              }
              return r;
            })(e, this.componentFactory.ngContentSelectors);
          (this.componentRef = this.componentFactory.create(t, n, e)),
            (this.viewChangeDetectorRef = this.componentRef.injector.get(Lo)),
            (this.implementsOnChanges =
              "function" == typeof this.componentRef.instance.ngOnChanges),
            this.initializeInputs(),
            this.initializeOutputs(this.componentRef),
            this.detectChanges(),
            this.injector.get(Cl).attachView(this.componentRef.hostView);
        }
        initializeInputs() {
          this.componentFactory.inputs.forEach(({ propName: e }) => {
            this.initialInputValues.has(e) &&
              this.setInputValue(e, this.initialInputValues.get(e));
          }),
            this.initialInputValues.clear();
        }
        initializeOutputs(e) {
          const t = this.componentFactory.outputs.map(
            ({ propName: t, templateName: n }) =>
              e.instance[t].pipe(x((e) => ({ name: n, value: e })))
          );
          this.eventEmitters.next(t);
        }
        callNgOnChanges(e) {
          if (!this.implementsOnChanges || null === this.inputChanges) return;
          const t = this.inputChanges;
          (this.inputChanges = null), e.instance.ngOnChanges(t);
        }
        markViewForCheck(e) {
          this.hasInputChanges &&
            ((this.hasInputChanges = !1), e.markForCheck());
        }
        scheduleDetectChanges() {
          this.scheduledChangeDetectionFn ||
            (this.scheduledChangeDetectionFn = lu.scheduleBeforeRender(() => {
              (this.scheduledChangeDetectionFn = null), this.detectChanges();
            }));
        }
        recordInputChange(e, t) {
          if (!this.implementsOnChanges) return;
          null === this.inputChanges && (this.inputChanges = {});
          const n = this.inputChanges[e];
          if (n) return void (n.currentValue = t);
          const r = this.unchangedInputs.has(e),
            s = r ? void 0 : this.getInputValue(e);
          this.inputChanges[e] = new rt(s, t, r);
        }
        detectChanges() {
          null !== this.componentRef &&
            (this.callNgOnChanges(this.componentRef),
            this.markViewForCheck(this.viewChangeDetectorRef),
            this.componentRef.changeDetectorRef.detectChanges());
        }
        runInZone(e) {
          return this.elementZone && Zone.current !== this.elementZone
            ? this.ngZone.run(e)
            : e();
        }
      }
      class pu extends HTMLElement {
        constructor() {
          super(...arguments), (this.ngElementEventsSubscription = null);
        }
      }
      new vo("11.2.14");
      class fu extends C {
        constructor(e) {
          super(), (this._value = e);
        }
        get value() {
          return this.getValue();
        }
        _subscribe(e) {
          const t = super._subscribe(e);
          return t && !t.closed && e.next(this._value), t;
        }
        getValue() {
          if (this.hasError) throw this.thrownError;
          if (this.closed) throw new _();
          return this._value;
        }
        next(e) {
          super.next((this._value = e));
        }
      }
      class mu extends f {
        notifyNext(e, t, n, r, s) {
          this.destination.next(t);
        }
        notifyError(e, t) {
          this.destination.error(e);
        }
        notifyComplete(e) {
          this.destination.complete();
        }
      }
      class gu extends f {
        constructor(e, t, n) {
          super(),
            (this.parent = e),
            (this.outerValue = t),
            (this.outerIndex = n),
            (this.index = 0);
        }
        _next(e) {
          this.parent.notifyNext(
            this.outerValue,
            e,
            this.outerIndex,
            this.index++,
            this
          );
        }
        _error(e) {
          this.parent.notifyError(e, this), this.unsubscribe();
        }
        _complete() {
          this.parent.notifyComplete(this), this.unsubscribe();
        }
      }
      function yu(e, t, n, r, s = new gu(e, n, r)) {
        if (!s.closed) return t instanceof v ? t.subscribe(s) : N(t)(s);
      }
      const vu = {};
      class bu {
        constructor(e) {
          this.resultSelector = e;
        }
        call(e, t) {
          return t.subscribe(new _u(e, this.resultSelector));
        }
      }
      class _u extends mu {
        constructor(e, t) {
          super(e),
            (this.resultSelector = t),
            (this.active = 0),
            (this.values = []),
            (this.observables = []);
        }
        _next(e) {
          this.values.push(vu), this.observables.push(e);
        }
        _complete() {
          const e = this.observables,
            t = e.length;
          if (0 === t) this.destination.complete();
          else {
            (this.active = t), (this.toRespond = t);
            for (let n = 0; n < t; n++) this.add(yu(this, e[n], void 0, n));
          }
        }
        notifyComplete(e) {
          0 == (this.active -= 1) && this.destination.complete();
        }
        notifyNext(e, t, n) {
          const r = this.values,
            s = this.toRespond
              ? r[n] === vu
                ? --this.toRespond
                : this.toRespond
              : 0;
          (r[n] = t),
            0 === s &&
              (this.resultSelector
                ? this._tryResultSelector(r)
                : this.destination.next(r.slice()));
        }
        _tryResultSelector(e) {
          let t;
          try {
            t = this.resultSelector.apply(this, e);
          } catch (n) {
            return void this.destination.error(n);
          }
          this.destination.next(t);
        }
      }
      const wu = (() => {
        function e() {
          return (
            Error.call(this),
            (this.message = "no elements in sequence"),
            (this.name = "EmptyError"),
            this
          );
        }
        return (e.prototype = Object.create(Error.prototype)), e;
      })();
      function Su(...e) {
        return U(1)(Xc(...e));
      }
      function Cu(e) {
        return new v((t) => {
          let n;
          try {
            n = e();
          } catch (r) {
            return void t.error(r);
          }
          return (n ? F(n) : Yc()).subscribe(t);
        });
      }
      const Eu = (() => {
        function e() {
          return (
            Error.call(this),
            (this.message = "argument out of range"),
            (this.name = "ArgumentOutOfRangeError"),
            this
          );
        }
        return (e.prototype = Object.create(Error.prototype)), e;
      })();
      function ku(e) {
        return (t) => (0 === e ? Yc() : t.lift(new xu(e)));
      }
      class xu {
        constructor(e) {
          if (((this.total = e), this.total < 0)) throw new Eu();
        }
        call(e, t) {
          return t.subscribe(new Tu(e, this.total));
        }
      }
      class Tu extends f {
        constructor(e, t) {
          super(e), (this.total = t), (this.count = 0);
        }
        _next(e) {
          const t = this.total,
            n = ++this.count;
          n <= t &&
            (this.destination.next(e),
            n === t && (this.destination.complete(), this.unsubscribe()));
        }
      }
      function Iu(e, t) {
        let n = !1;
        return (
          arguments.length >= 2 && (n = !0),
          function (r) {
            return r.lift(new Au(e, t, n));
          }
        );
      }
      class Au {
        constructor(e, t, n = !1) {
          (this.accumulator = e), (this.seed = t), (this.hasSeed = n);
        }
        call(e, t) {
          return t.subscribe(
            new Ou(e, this.accumulator, this.seed, this.hasSeed)
          );
        }
      }
      class Ou extends f {
        constructor(e, t, n, r) {
          super(e),
            (this.accumulator = t),
            (this._seed = n),
            (this.hasSeed = r),
            (this.index = 0);
        }
        get seed() {
          return this._seed;
        }
        set seed(e) {
          (this.hasSeed = !0), (this._seed = e);
        }
        _next(e) {
          if (this.hasSeed) return this._tryNext(e);
          (this.seed = e), this.destination.next(e);
        }
        _tryNext(e) {
          const t = this.index++;
          let n;
          try {
            n = this.accumulator(this.seed, e, t);
          } catch (r) {
            this.destination.error(r);
          }
          (this.seed = n), this.destination.next(n);
        }
      }
      function Ru(e, t) {
        return function (n) {
          return n.lift(new Pu(e, t));
        };
      }
      class Pu {
        constructor(e, t) {
          (this.predicate = e), (this.thisArg = t);
        }
        call(e, t) {
          return t.subscribe(new Du(e, this.predicate, this.thisArg));
        }
      }
      class Du extends f {
        constructor(e, t, n) {
          super(e), (this.predicate = t), (this.thisArg = n), (this.count = 0);
        }
        _next(e) {
          let t;
          try {
            t = this.predicate.call(this.thisArg, e, this.count++);
          } catch (n) {
            return void this.destination.error(n);
          }
          t && this.destination.next(e);
        }
      }
      function Nu(e) {
        return function (t) {
          const n = new Mu(e),
            r = t.lift(n);
          return (n.caught = r);
        };
      }
      class Mu {
        constructor(e) {
          this.selector = e;
        }
        call(e, t) {
          return t.subscribe(new Fu(e, this.selector, this.caught));
        }
      }
      class Fu extends L {
        constructor(e, t, n) {
          super(e), (this.selector = t), (this.caught = n);
        }
        error(e) {
          if (!this.isStopped) {
            let n;
            try {
              n = this.selector(e, this.caught);
            } catch (t) {
              return void super.error(t);
            }
            this._unsubscribeAndRecycle();
            const r = new j(this);
            this.add(r);
            const s = W(n, r);
            s !== r && this.add(s);
          }
        }
      }
      function ju(e, t) {
        return z(e, t, 1);
      }
      function Lu(e) {
        return function (t) {
          return 0 === e ? Yc() : t.lift(new Wu(e));
        };
      }
      class Wu {
        constructor(e) {
          if (((this.total = e), this.total < 0)) throw new Eu();
        }
        call(e, t) {
          return t.subscribe(new zu(e, this.total));
        }
      }
      class zu extends f {
        constructor(e, t) {
          super(e),
            (this.total = t),
            (this.ring = new Array()),
            (this.count = 0);
        }
        _next(e) {
          const t = this.ring,
            n = this.total,
            r = this.count++;
          t.length < n ? t.push(e) : (t[r % n] = e);
        }
        _complete() {
          const e = this.destination;
          let t = this.count;
          if (t > 0) {
            const n = this.count >= this.total ? this.total : this.count,
              r = this.ring;
            for (let s = 0; s < n; s++) {
              const s = t++ % n;
              e.next(r[s]);
            }
          }
          e.complete();
        }
      }
      function qu(e = Vu) {
        return (t) => t.lift(new Hu(e));
      }
      class Hu {
        constructor(e) {
          this.errorFactory = e;
        }
        call(e, t) {
          return t.subscribe(new Uu(e, this.errorFactory));
        }
      }
      class Uu extends f {
        constructor(e, t) {
          super(e), (this.errorFactory = t), (this.hasValue = !1);
        }
        _next(e) {
          (this.hasValue = !0), this.destination.next(e);
        }
        _complete() {
          if (this.hasValue) return this.destination.complete();
          {
            let t;
            try {
              t = this.errorFactory();
            } catch (e) {
              t = e;
            }
            this.destination.error(t);
          }
        }
      }
      function Vu() {
        return new wu();
      }
      function Bu(e = null) {
        return (t) => t.lift(new $u(e));
      }
      class $u {
        constructor(e) {
          this.defaultValue = e;
        }
        call(e, t) {
          return t.subscribe(new Qu(e, this.defaultValue));
        }
      }
      class Qu extends f {
        constructor(e, t) {
          super(e), (this.defaultValue = t), (this.isEmpty = !0);
        }
        _next(e) {
          (this.isEmpty = !1), this.destination.next(e);
        }
        _complete() {
          this.isEmpty && this.destination.next(this.defaultValue),
            this.destination.complete();
        }
      }
      function Gu(e, t) {
        const n = arguments.length >= 2;
        return (r) =>
          r.pipe(
            e ? Ru((t, n) => e(t, n, r)) : y,
            ku(1),
            n ? Bu(t) : qu(() => new wu())
          );
      }
      function Ku() {}
      function Zu(e, t, n) {
        return function (r) {
          return r.lift(new Ju(e, t, n));
        };
      }
      class Ju {
        constructor(e, t, n) {
          (this.nextOrObserver = e), (this.error = t), (this.complete = n);
        }
        call(e, t) {
          return t.subscribe(
            new Yu(e, this.nextOrObserver, this.error, this.complete)
          );
        }
      }
      class Yu extends f {
        constructor(e, t, n, s) {
          super(e),
            (this._tapNext = Ku),
            (this._tapError = Ku),
            (this._tapComplete = Ku),
            (this._tapError = n || Ku),
            (this._tapComplete = s || Ku),
            r(t)
              ? ((this._context = this), (this._tapNext = t))
              : t &&
                ((this._context = t),
                (this._tapNext = t.next || Ku),
                (this._tapError = t.error || Ku),
                (this._tapComplete = t.complete || Ku));
        }
        _next(e) {
          try {
            this._tapNext.call(this._context, e);
          } catch (t) {
            return void this.destination.error(t);
          }
          this.destination.next(e);
        }
        _error(e) {
          try {
            this._tapError.call(this._context, e);
          } catch (e) {
            return void this.destination.error(e);
          }
          this.destination.error(e);
        }
        _complete() {
          try {
            this._tapComplete.call(this._context);
          } catch (e) {
            return void this.destination.error(e);
          }
          return this.destination.complete();
        }
      }
      class Xu {
        constructor(e) {
          this.callback = e;
        }
        call(e, t) {
          return t.subscribe(new eh(e, this.callback));
        }
      }
      class eh extends f {
        constructor(e, t) {
          super(e), this.add(new h(t));
        }
      }
      class th {
        constructor(e, t) {
          (this.id = e), (this.url = t);
        }
      }
      class nh extends th {
        constructor(e, t, n = "imperative", r = null) {
          super(e, t), (this.navigationTrigger = n), (this.restoredState = r);
        }
        toString() {
          return `NavigationStart(id: ${this.id}, url: '${this.url}')`;
        }
      }
      class rh extends th {
        constructor(e, t, n) {
          super(e, t), (this.urlAfterRedirects = n);
        }
        toString() {
          return `NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`;
        }
      }
      class sh extends th {
        constructor(e, t, n) {
          super(e, t), (this.reason = n);
        }
        toString() {
          return `NavigationCancel(id: ${this.id}, url: '${this.url}')`;
        }
      }
      class ih extends th {
        constructor(e, t, n) {
          super(e, t), (this.error = n);
        }
        toString() {
          return `NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`;
        }
      }
      class oh extends th {
        constructor(e, t, n, r) {
          super(e, t), (this.urlAfterRedirects = n), (this.state = r);
        }
        toString() {
          return `RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
        }
      }
      class ah extends th {
        constructor(e, t, n, r) {
          super(e, t), (this.urlAfterRedirects = n), (this.state = r);
        }
        toString() {
          return `GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
        }
      }
      class lh extends th {
        constructor(e, t, n, r, s) {
          super(e, t),
            (this.urlAfterRedirects = n),
            (this.state = r),
            (this.shouldActivate = s);
        }
        toString() {
          return `GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`;
        }
      }
      class ch extends th {
        constructor(e, t, n, r) {
          super(e, t), (this.urlAfterRedirects = n), (this.state = r);
        }
        toString() {
          return `ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
        }
      }
      class uh extends th {
        constructor(e, t, n, r) {
          super(e, t), (this.urlAfterRedirects = n), (this.state = r);
        }
        toString() {
          return `ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`;
        }
      }
      class hh {
        constructor(e) {
          this.route = e;
        }
        toString() {
          return `RouteConfigLoadStart(path: ${this.route.path})`;
        }
      }
      class dh {
        constructor(e) {
          this.route = e;
        }
        toString() {
          return `RouteConfigLoadEnd(path: ${this.route.path})`;
        }
      }
      class ph {
        constructor(e) {
          this.snapshot = e;
        }
        toString() {
          return `ChildActivationStart(path: '${
            (this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ""
          }')`;
        }
      }
      class fh {
        constructor(e) {
          this.snapshot = e;
        }
        toString() {
          return `ChildActivationEnd(path: '${
            (this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ""
          }')`;
        }
      }
      class mh {
        constructor(e) {
          this.snapshot = e;
        }
        toString() {
          return `ActivationStart(path: '${
            (this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ""
          }')`;
        }
      }
      class gh {
        constructor(e) {
          this.snapshot = e;
        }
        toString() {
          return `ActivationEnd(path: '${
            (this.snapshot.routeConfig && this.snapshot.routeConfig.path) || ""
          }')`;
        }
      }
      class yh {
        constructor(e, t, n) {
          (this.routerEvent = e), (this.position = t), (this.anchor = n);
        }
        toString() {
          return `Scroll(anchor: '${this.anchor}', position: '${
            this.position ? `${this.position[0]}, ${this.position[1]}` : null
          }')`;
        }
      }
      class vh {
        constructor(e) {
          this.params = e || {};
        }
        has(e) {
          return Object.prototype.hasOwnProperty.call(this.params, e);
        }
        get(e) {
          if (this.has(e)) {
            const t = this.params[e];
            return Array.isArray(t) ? t[0] : t;
          }
          return null;
        }
        getAll(e) {
          if (this.has(e)) {
            const t = this.params[e];
            return Array.isArray(t) ? t : [t];
          }
          return [];
        }
        get keys() {
          return Object.keys(this.params);
        }
      }
      function bh(e) {
        return new vh(e);
      }
      function _h(e) {
        const t = Error("NavigationCancelingError: " + e);
        return (t.ngNavigationCancelingError = !0), t;
      }
      function wh(e, t, n) {
        const r = n.path.split("/");
        if (r.length > e.length) return null;
        if ("full" === n.pathMatch && (t.hasChildren() || r.length < e.length))
          return null;
        const s = {};
        for (let i = 0; i < r.length; i++) {
          const t = r[i],
            n = e[i];
          if (t.startsWith(":")) s[t.substring(1)] = n;
          else if (t !== n.path) return null;
        }
        return { consumed: e.slice(0, r.length), posParams: s };
      }
      function Sh(e, t) {
        const n = e ? Object.keys(e) : void 0,
          r = t ? Object.keys(t) : void 0;
        if (!n || !r || n.length != r.length) return !1;
        let s;
        for (let i = 0; i < n.length; i++)
          if (((s = n[i]), !Ch(e[s], t[s]))) return !1;
        return !0;
      }
      function Ch(e, t) {
        if (Array.isArray(e) && Array.isArray(t)) {
          if (e.length !== t.length) return !1;
          const n = [...e].sort(),
            r = [...t].sort();
          return n.every((e, t) => r[t] === e);
        }
        return e === t;
      }
      function Eh(e) {
        return Array.prototype.concat.apply([], e);
      }
      function kh(e) {
        return e.length > 0 ? e[e.length - 1] : null;
      }
      function xh(e, t) {
        for (const n in e) e.hasOwnProperty(n) && t(e[n], n);
      }
      function Th(e) {
        return (t = e) && "function" == typeof t.subscribe
          ? e
          : Ri(e)
          ? F(Promise.resolve(e))
          : Xc(e);
        var t;
      }
      function Ih(e, t, n) {
        return n
          ? (function (e, t) {
              return Sh(e, t);
            })(e.queryParams, t.queryParams) && Ah(e.root, t.root)
          : (function (e, t) {
              return (
                Object.keys(t).length <= Object.keys(e).length &&
                Object.keys(t).every((n) => Ch(e[n], t[n]))
              );
            })(e.queryParams, t.queryParams) && Oh(e.root, t.root);
      }
      function Ah(e, t) {
        if (!Mh(e.segments, t.segments)) return !1;
        if (e.numberOfChildren !== t.numberOfChildren) return !1;
        for (const n in t.children) {
          if (!e.children[n]) return !1;
          if (!Ah(e.children[n], t.children[n])) return !1;
        }
        return !0;
      }
      function Oh(e, t) {
        return Rh(e, t, t.segments);
      }
      function Rh(e, t, n) {
        if (e.segments.length > n.length)
          return !!Mh(e.segments.slice(0, n.length), n) && !t.hasChildren();
        if (e.segments.length === n.length) {
          if (!Mh(e.segments, n)) return !1;
          for (const n in t.children) {
            if (!e.children[n]) return !1;
            if (!Oh(e.children[n], t.children[n])) return !1;
          }
          return !0;
        }
        {
          const r = n.slice(0, e.segments.length),
            s = n.slice(e.segments.length);
          return (
            !!Mh(e.segments, r) &&
            !!e.children.primary &&
            Rh(e.children.primary, t, s)
          );
        }
      }
      class Ph {
        constructor(e, t, n) {
          (this.root = e), (this.queryParams = t), (this.fragment = n);
        }
        get queryParamMap() {
          return (
            this._queryParamMap || (this._queryParamMap = bh(this.queryParams)),
            this._queryParamMap
          );
        }
        toString() {
          return Lh.serialize(this);
        }
      }
      class Dh {
        constructor(e, t) {
          (this.segments = e),
            (this.children = t),
            (this.parent = null),
            xh(t, (e, t) => (e.parent = this));
        }
        hasChildren() {
          return this.numberOfChildren > 0;
        }
        get numberOfChildren() {
          return Object.keys(this.children).length;
        }
        toString() {
          return Wh(this);
        }
      }
      class Nh {
        constructor(e, t) {
          (this.path = e), (this.parameters = t);
        }
        get parameterMap() {
          return (
            this._parameterMap || (this._parameterMap = bh(this.parameters)),
            this._parameterMap
          );
        }
        toString() {
          return $h(this);
        }
      }
      function Mh(e, t) {
        return e.length === t.length && e.every((e, n) => e.path === t[n].path);
      }
      class Fh {}
      class jh {
        parse(e) {
          const t = new Jh(e);
          return new Ph(
            t.parseRootSegment(),
            t.parseQueryParams(),
            t.parseFragment()
          );
        }
        serialize(e) {
          var t;
          return `/${zh(e.root, !0)}${(function (e) {
            const t = Object.keys(e).map((t) => {
              const n = e[t];
              return Array.isArray(n)
                ? n.map((e) => `${Hh(t)}=${Hh(e)}`).join("&")
                : `${Hh(t)}=${Hh(n)}`;
            });
            return t.length ? `?${t.join("&")}` : "";
          })(e.queryParams)}${
            "string" == typeof e.fragment
              ? `#${((t = e.fragment), encodeURI(t))}`
              : ""
          }`;
        }
      }
      const Lh = new jh();
      function Wh(e) {
        return e.segments.map((e) => $h(e)).join("/");
      }
      function zh(e, t) {
        if (!e.hasChildren()) return Wh(e);
        if (t) {
          const t = e.children.primary ? zh(e.children.primary, !1) : "",
            n = [];
          return (
            xh(e.children, (e, t) => {
              "primary" !== t && n.push(`${t}:${zh(e, !1)}`);
            }),
            n.length > 0 ? `${t}(${n.join("//")})` : t
          );
        }
        {
          const t = (function (e, t) {
            let n = [];
            return (
              xh(e.children, (e, r) => {
                "primary" === r && (n = n.concat(t(e, r)));
              }),
              xh(e.children, (e, r) => {
                "primary" !== r && (n = n.concat(t(e, r)));
              }),
              n
            );
          })(e, (t, n) =>
            "primary" === n
              ? [zh(e.children.primary, !1)]
              : [`${n}:${zh(t, !1)}`]
          );
          return 1 === Object.keys(e.children).length &&
            null != e.children.primary
            ? `${Wh(e)}/${t[0]}`
            : `${Wh(e)}/(${t.join("//")})`;
        }
      }
      function qh(e) {
        return encodeURIComponent(e)
          .replace(/%40/g, "@")
          .replace(/%3A/gi, ":")
          .replace(/%24/g, "$")
          .replace(/%2C/gi, ",");
      }
      function Hh(e) {
        return qh(e).replace(/%3B/gi, ";");
      }
      function Uh(e) {
        return qh(e)
          .replace(/\(/g, "%28")
          .replace(/\)/g, "%29")
          .replace(/%26/gi, "&");
      }
      function Vh(e) {
        return decodeURIComponent(e);
      }
      function Bh(e) {
        return Vh(e.replace(/\+/g, "%20"));
      }
      function $h(e) {
        return `${Uh(e.path)}${
          ((t = e.parameters),
          Object.keys(t)
            .map((e) => `;${Uh(e)}=${Uh(t[e])}`)
            .join(""))
        }`;
        var t;
      }
      const Qh = /^[^\/()?;=#]+/;
      function Gh(e) {
        const t = e.match(Qh);
        return t ? t[0] : "";
      }
      const Kh = /^[^=?&#]+/,
        Zh = /^[^?&#]+/;
      class Jh {
        constructor(e) {
          (this.url = e), (this.remaining = e);
        }
        parseRootSegment() {
          return (
            this.consumeOptional("/"),
            "" === this.remaining ||
            this.peekStartsWith("?") ||
            this.peekStartsWith("#")
              ? new Dh([], {})
              : new Dh([], this.parseChildren())
          );
        }
        parseQueryParams() {
          const e = {};
          if (this.consumeOptional("?"))
            do {
              this.parseQueryParam(e);
            } while (this.consumeOptional("&"));
          return e;
        }
        parseFragment() {
          return this.consumeOptional("#")
            ? decodeURIComponent(this.remaining)
            : null;
        }
        parseChildren() {
          if ("" === this.remaining) return {};
          this.consumeOptional("/");
          const e = [];
          for (
            this.peekStartsWith("(") || e.push(this.parseSegment());
            this.peekStartsWith("/") &&
            !this.peekStartsWith("//") &&
            !this.peekStartsWith("/(");

          )
            this.capture("/"), e.push(this.parseSegment());
          let t = {};
          this.peekStartsWith("/(") &&
            (this.capture("/"), (t = this.parseParens(!0)));
          let n = {};
          return (
            this.peekStartsWith("(") && (n = this.parseParens(!1)),
            (e.length > 0 || Object.keys(t).length > 0) &&
              (n.primary = new Dh(e, t)),
            n
          );
        }
        parseSegment() {
          const e = Gh(this.remaining);
          if ("" === e && this.peekStartsWith(";"))
            throw new Error(
              `Empty path url segment cannot have parameters: '${this.remaining}'.`
            );
          return this.capture(e), new Nh(Vh(e), this.parseMatrixParams());
        }
        parseMatrixParams() {
          const e = {};
          for (; this.consumeOptional(";"); ) this.parseParam(e);
          return e;
        }
        parseParam(e) {
          const t = Gh(this.remaining);
          if (!t) return;
          this.capture(t);
          let n = "";
          if (this.consumeOptional("=")) {
            const e = Gh(this.remaining);
            e && ((n = e), this.capture(n));
          }
          e[Vh(t)] = Vh(n);
        }
        parseQueryParam(e) {
          const t = (function (e) {
            const t = e.match(Kh);
            return t ? t[0] : "";
          })(this.remaining);
          if (!t) return;
          this.capture(t);
          let n = "";
          if (this.consumeOptional("=")) {
            const e = (function (e) {
              const t = e.match(Zh);
              return t ? t[0] : "";
            })(this.remaining);
            e && ((n = e), this.capture(n));
          }
          const r = Bh(t),
            s = Bh(n);
          if (e.hasOwnProperty(r)) {
            let t = e[r];
            Array.isArray(t) || ((t = [t]), (e[r] = t)), t.push(s);
          } else e[r] = s;
        }
        parseParens(e) {
          const t = {};
          for (
            this.capture("(");
            !this.consumeOptional(")") && this.remaining.length > 0;

          ) {
            const n = Gh(this.remaining),
              r = this.remaining[n.length];
            if ("/" !== r && ")" !== r && ";" !== r)
              throw new Error(`Cannot parse url '${this.url}'`);
            let s;
            n.indexOf(":") > -1
              ? ((s = n.substr(0, n.indexOf(":"))),
                this.capture(s),
                this.capture(":"))
              : e && (s = "primary");
            const i = this.parseChildren();
            (t[s] = 1 === Object.keys(i).length ? i.primary : new Dh([], i)),
              this.consumeOptional("//");
          }
          return t;
        }
        peekStartsWith(e) {
          return this.remaining.startsWith(e);
        }
        consumeOptional(e) {
          return (
            !!this.peekStartsWith(e) &&
            ((this.remaining = this.remaining.substring(e.length)), !0)
          );
        }
        capture(e) {
          if (!this.consumeOptional(e)) throw new Error(`Expected "${e}".`);
        }
      }
      class Yh {
        constructor(e) {
          this._root = e;
        }
        get root() {
          return this._root.value;
        }
        parent(e) {
          const t = this.pathFromRoot(e);
          return t.length > 1 ? t[t.length - 2] : null;
        }
        children(e) {
          const t = Xh(e, this._root);
          return t ? t.children.map((e) => e.value) : [];
        }
        firstChild(e) {
          const t = Xh(e, this._root);
          return t && t.children.length > 0 ? t.children[0].value : null;
        }
        siblings(e) {
          const t = ed(e, this._root);
          return t.length < 2
            ? []
            : t[t.length - 2].children
                .map((e) => e.value)
                .filter((t) => t !== e);
        }
        pathFromRoot(e) {
          return ed(e, this._root).map((e) => e.value);
        }
      }
      function Xh(e, t) {
        if (e === t.value) return t;
        for (const n of t.children) {
          const t = Xh(e, n);
          if (t) return t;
        }
        return null;
      }
      function ed(e, t) {
        if (e === t.value) return [t];
        for (const n of t.children) {
          const r = ed(e, n);
          if (r.length) return r.unshift(t), r;
        }
        return [];
      }
      class td {
        constructor(e, t) {
          (this.value = e), (this.children = t);
        }
        toString() {
          return `TreeNode(${this.value})`;
        }
      }
      function nd(e) {
        const t = {};
        return e && e.children.forEach((e) => (t[e.value.outlet] = e)), t;
      }
      class rd extends Yh {
        constructor(e, t) {
          super(e), (this.snapshot = t), cd(this, e);
        }
        toString() {
          return this.snapshot.toString();
        }
      }
      function sd(e, t) {
        const n = (function (e, t) {
            const n = new ad(
              [],
              {},
              {},
              "",
              {},
              "primary",
              t,
              null,
              e.root,
              -1,
              {}
            );
            return new ld("", new td(n, []));
          })(e, t),
          r = new fu([new Nh("", {})]),
          s = new fu({}),
          i = new fu({}),
          o = new fu({}),
          a = new fu(""),
          l = new id(r, s, o, a, i, "primary", t, n.root);
        return (l.snapshot = n.root), new rd(new td(l, []), n);
      }
      class id {
        constructor(e, t, n, r, s, i, o, a) {
          (this.url = e),
            (this.params = t),
            (this.queryParams = n),
            (this.fragment = r),
            (this.data = s),
            (this.outlet = i),
            (this.component = o),
            (this._futureSnapshot = a);
        }
        get routeConfig() {
          return this._futureSnapshot.routeConfig;
        }
        get root() {
          return this._routerState.root;
        }
        get parent() {
          return this._routerState.parent(this);
        }
        get firstChild() {
          return this._routerState.firstChild(this);
        }
        get children() {
          return this._routerState.children(this);
        }
        get pathFromRoot() {
          return this._routerState.pathFromRoot(this);
        }
        get paramMap() {
          return (
            this._paramMap ||
              (this._paramMap = this.params.pipe(x((e) => bh(e)))),
            this._paramMap
          );
        }
        get queryParamMap() {
          return (
            this._queryParamMap ||
              (this._queryParamMap = this.queryParams.pipe(x((e) => bh(e)))),
            this._queryParamMap
          );
        }
        toString() {
          return this.snapshot
            ? this.snapshot.toString()
            : `Future(${this._futureSnapshot})`;
        }
      }
      function od(e, t = "emptyOnly") {
        const n = e.pathFromRoot;
        let r = 0;
        if ("always" !== t)
          for (r = n.length - 1; r >= 1; ) {
            const e = n[r],
              t = n[r - 1];
            if (e.routeConfig && "" === e.routeConfig.path) r--;
            else {
              if (t.component) break;
              r--;
            }
          }
        return (function (e) {
          return e.reduce(
            (e, t) => ({
              params: Object.assign(Object.assign({}, e.params), t.params),
              data: Object.assign(Object.assign({}, e.data), t.data),
              resolve: Object.assign(
                Object.assign({}, e.resolve),
                t._resolvedData
              ),
            }),
            { params: {}, data: {}, resolve: {} }
          );
        })(n.slice(r));
      }
      class ad {
        constructor(e, t, n, r, s, i, o, a, l, c, u) {
          (this.url = e),
            (this.params = t),
            (this.queryParams = n),
            (this.fragment = r),
            (this.data = s),
            (this.outlet = i),
            (this.component = o),
            (this.routeConfig = a),
            (this._urlSegment = l),
            (this._lastPathIndex = c),
            (this._resolve = u);
        }
        get root() {
          return this._routerState.root;
        }
        get parent() {
          return this._routerState.parent(this);
        }
        get firstChild() {
          return this._routerState.firstChild(this);
        }
        get children() {
          return this._routerState.children(this);
        }
        get pathFromRoot() {
          return this._routerState.pathFromRoot(this);
        }
        get paramMap() {
          return (
            this._paramMap || (this._paramMap = bh(this.params)), this._paramMap
          );
        }
        get queryParamMap() {
          return (
            this._queryParamMap || (this._queryParamMap = bh(this.queryParams)),
            this._queryParamMap
          );
        }
        toString() {
          return `Route(url:'${this.url
            .map((e) => e.toString())
            .join("/")}', path:'${
            this.routeConfig ? this.routeConfig.path : ""
          }')`;
        }
      }
      class ld extends Yh {
        constructor(e, t) {
          super(t), (this.url = e), cd(this, t);
        }
        toString() {
          return ud(this._root);
        }
      }
      function cd(e, t) {
        (t.value._routerState = e), t.children.forEach((t) => cd(e, t));
      }
      function ud(e) {
        const t =
          e.children.length > 0 ? ` { ${e.children.map(ud).join(", ")} } ` : "";
        return `${e.value}${t}`;
      }
      function hd(e) {
        if (e.snapshot) {
          const t = e.snapshot,
            n = e._futureSnapshot;
          (e.snapshot = n),
            Sh(t.queryParams, n.queryParams) ||
              e.queryParams.next(n.queryParams),
            t.fragment !== n.fragment && e.fragment.next(n.fragment),
            Sh(t.params, n.params) || e.params.next(n.params),
            (function (e, t) {
              if (e.length !== t.length) return !1;
              for (let n = 0; n < e.length; ++n) if (!Sh(e[n], t[n])) return !1;
              return !0;
            })(t.url, n.url) || e.url.next(n.url),
            Sh(t.data, n.data) || e.data.next(n.data);
        } else
          (e.snapshot = e._futureSnapshot), e.data.next(e._futureSnapshot.data);
      }
      function dd(e, t) {
        var n, r;
        return (
          Sh(e.params, t.params) &&
          Mh((n = e.url), (r = t.url)) &&
          n.every((e, t) => Sh(e.parameters, r[t].parameters)) &&
          !(!e.parent != !t.parent) &&
          (!e.parent || dd(e.parent, t.parent))
        );
      }
      function pd(e, t, n) {
        if (n && e.shouldReuseRoute(t.value, n.value.snapshot)) {
          const r = n.value;
          r._futureSnapshot = t.value;
          const s = (function (e, t, n) {
            return t.children.map((t) => {
              for (const r of n.children)
                if (e.shouldReuseRoute(t.value, r.value.snapshot))
                  return pd(e, t, r);
              return pd(e, t);
            });
          })(e, t, n);
          return new td(r, s);
        }
        {
          if (e.shouldAttach(t.value)) {
            const n = e.retrieve(t.value);
            if (null !== n) {
              const e = n.route;
              return fd(t, e), e;
            }
          }
          const n = new id(
              new fu((r = t.value).url),
              new fu(r.params),
              new fu(r.queryParams),
              new fu(r.fragment),
              new fu(r.data),
              r.outlet,
              r.component,
              r
            ),
            s = t.children.map((t) => pd(e, t));
          return new td(n, s);
        }
        var r;
      }
      function fd(e, t) {
        if (e.value.routeConfig !== t.value.routeConfig)
          throw new Error(
            "Cannot reattach ActivatedRouteSnapshot created from a different route"
          );
        if (e.children.length !== t.children.length)
          throw new Error(
            "Cannot reattach ActivatedRouteSnapshot with a different number of children"
          );
        t.value._futureSnapshot = e.value;
        for (let n = 0; n < e.children.length; ++n)
          fd(e.children[n], t.children[n]);
      }
      function md(e) {
        return (
          "object" == typeof e && null != e && !e.outlets && !e.segmentPath
        );
      }
      function gd(e) {
        return "object" == typeof e && null != e && e.outlets;
      }
      function yd(e, t, n, r, s) {
        let i = {};
        return (
          r &&
            xh(r, (e, t) => {
              i[t] = Array.isArray(e) ? e.map((e) => `${e}`) : `${e}`;
            }),
          new Ph(n.root === e ? t : vd(n.root, e, t), i, s)
        );
      }
      function vd(e, t, n) {
        const r = {};
        return (
          xh(e.children, (e, s) => {
            r[s] = e === t ? n : vd(e, t, n);
          }),
          new Dh(e.segments, r)
        );
      }
      class bd {
        constructor(e, t, n) {
          if (
            ((this.isAbsolute = e),
            (this.numberOfDoubleDots = t),
            (this.commands = n),
            e && n.length > 0 && md(n[0]))
          )
            throw new Error("Root segment cannot have matrix parameters");
          const r = n.find(gd);
          if (r && r !== kh(n))
            throw new Error("{outlets:{}} has to be the last command");
        }
        toRoot() {
          return (
            this.isAbsolute &&
            1 === this.commands.length &&
            "/" == this.commands[0]
          );
        }
      }
      class _d {
        constructor(e, t, n) {
          (this.segmentGroup = e), (this.processChildren = t), (this.index = n);
        }
      }
      function wd(e, t, n) {
        if (
          (e || (e = new Dh([], {})),
          0 === e.segments.length && e.hasChildren())
        )
          return Sd(e, t, n);
        const r = (function (e, t, n) {
            let r = 0,
              s = t;
            const i = { match: !1, pathIndex: 0, commandIndex: 0 };
            for (; s < e.segments.length; ) {
              if (r >= n.length) return i;
              const t = e.segments[s],
                o = n[r];
              if (gd(o)) break;
              const a = `${o}`,
                l = r < n.length - 1 ? n[r + 1] : null;
              if (s > 0 && void 0 === a) break;
              if (a && l && "object" == typeof l && void 0 === l.outlets) {
                if (!xd(a, l, t)) return i;
                r += 2;
              } else {
                if (!xd(a, {}, t)) return i;
                r++;
              }
              s++;
            }
            return { match: !0, pathIndex: s, commandIndex: r };
          })(e, t, n),
          s = n.slice(r.commandIndex);
        if (r.match && r.pathIndex < e.segments.length) {
          const t = new Dh(e.segments.slice(0, r.pathIndex), {});
          return (
            (t.children.primary = new Dh(
              e.segments.slice(r.pathIndex),
              e.children
            )),
            Sd(t, 0, s)
          );
        }
        return r.match && 0 === s.length
          ? new Dh(e.segments, {})
          : r.match && !e.hasChildren()
          ? Cd(e, t, n)
          : r.match
          ? Sd(e, 0, s)
          : Cd(e, t, n);
      }
      function Sd(e, t, n) {
        if (0 === n.length) return new Dh(e.segments, {});
        {
          const r = (function (e) {
              return gd(e[0]) ? e[0].outlets : { primary: e };
            })(n),
            s = {};
          return (
            xh(r, (n, r) => {
              "string" == typeof n && (n = [n]),
                null !== n && (s[r] = wd(e.children[r], t, n));
            }),
            xh(e.children, (e, t) => {
              void 0 === r[t] && (s[t] = e);
            }),
            new Dh(e.segments, s)
          );
        }
      }
      function Cd(e, t, n) {
        const r = e.segments.slice(0, t);
        let s = 0;
        for (; s < n.length; ) {
          const i = n[s];
          if (gd(i)) {
            const e = Ed(i.outlets);
            return new Dh(r, e);
          }
          if (0 === s && md(n[0])) {
            r.push(new Nh(e.segments[t].path, kd(n[0]))), s++;
            continue;
          }
          const o = gd(i) ? i.outlets.primary : `${i}`,
            a = s < n.length - 1 ? n[s + 1] : null;
          o && a && md(a)
            ? (r.push(new Nh(o, kd(a))), (s += 2))
            : (r.push(new Nh(o, {})), s++);
        }
        return new Dh(r, {});
      }
      function Ed(e) {
        const t = {};
        return (
          xh(e, (e, n) => {
            "string" == typeof e && (e = [e]),
              null !== e && (t[n] = Cd(new Dh([], {}), 0, e));
          }),
          t
        );
      }
      function kd(e) {
        const t = {};
        return xh(e, (e, n) => (t[n] = `${e}`)), t;
      }
      function xd(e, t, n) {
        return e == n.path && Sh(t, n.parameters);
      }
      class Td {
        constructor(e, t, n, r) {
          (this.routeReuseStrategy = e),
            (this.futureState = t),
            (this.currState = n),
            (this.forwardEvent = r);
        }
        activate(e) {
          const t = this.futureState._root,
            n = this.currState ? this.currState._root : null;
          this.deactivateChildRoutes(t, n, e),
            hd(this.futureState.root),
            this.activateChildRoutes(t, n, e);
        }
        deactivateChildRoutes(e, t, n) {
          const r = nd(t);
          e.children.forEach((e) => {
            const t = e.value.outlet;
            this.deactivateRoutes(e, r[t], n), delete r[t];
          }),
            xh(r, (e, t) => {
              this.deactivateRouteAndItsChildren(e, n);
            });
        }
        deactivateRoutes(e, t, n) {
          const r = e.value,
            s = t ? t.value : null;
          if (r === s)
            if (r.component) {
              const s = n.getContext(r.outlet);
              s && this.deactivateChildRoutes(e, t, s.children);
            } else this.deactivateChildRoutes(e, t, n);
          else s && this.deactivateRouteAndItsChildren(t, n);
        }
        deactivateRouteAndItsChildren(e, t) {
          this.routeReuseStrategy.shouldDetach(e.value.snapshot)
            ? this.detachAndStoreRouteSubtree(e, t)
            : this.deactivateRouteAndOutlet(e, t);
        }
        detachAndStoreRouteSubtree(e, t) {
          const n = t.getContext(e.value.outlet);
          if (n && n.outlet) {
            const t = n.outlet.detach(),
              r = n.children.onOutletDeactivated();
            this.routeReuseStrategy.store(e.value.snapshot, {
              componentRef: t,
              route: e,
              contexts: r,
            });
          }
        }
        deactivateRouteAndOutlet(e, t) {
          const n = t.getContext(e.value.outlet),
            r = n && e.value.component ? n.children : t,
            s = nd(e);
          for (const i of Object.keys(s))
            this.deactivateRouteAndItsChildren(s[i], r);
          n &&
            n.outlet &&
            (n.outlet.deactivate(),
            n.children.onOutletDeactivated(),
            (n.attachRef = null),
            (n.resolver = null),
            (n.route = null));
        }
        activateChildRoutes(e, t, n) {
          const r = nd(t);
          e.children.forEach((e) => {
            this.activateRoutes(e, r[e.value.outlet], n),
              this.forwardEvent(new gh(e.value.snapshot));
          }),
            e.children.length && this.forwardEvent(new fh(e.value.snapshot));
        }
        activateRoutes(e, t, n) {
          const r = e.value,
            s = t ? t.value : null;
          if ((hd(r), r === s))
            if (r.component) {
              const s = n.getOrCreateContext(r.outlet);
              this.activateChildRoutes(e, t, s.children);
            } else this.activateChildRoutes(e, t, n);
          else if (r.component) {
            const t = n.getOrCreateContext(r.outlet);
            if (this.routeReuseStrategy.shouldAttach(r.snapshot)) {
              const e = this.routeReuseStrategy.retrieve(r.snapshot);
              this.routeReuseStrategy.store(r.snapshot, null),
                t.children.onOutletReAttached(e.contexts),
                (t.attachRef = e.componentRef),
                (t.route = e.route.value),
                t.outlet && t.outlet.attach(e.componentRef, e.route.value),
                Id(e.route);
            } else {
              const n = (function (e) {
                  for (let t = e.parent; t; t = t.parent) {
                    const e = t.routeConfig;
                    if (e && e._loadedConfig) return e._loadedConfig;
                    if (e && e.component) return null;
                  }
                  return null;
                })(r.snapshot),
                s = n ? n.module.componentFactoryResolver : null;
              (t.attachRef = null),
                (t.route = r),
                (t.resolver = s),
                t.outlet && t.outlet.activateWith(r, s),
                this.activateChildRoutes(e, null, t.children);
            }
          } else this.activateChildRoutes(e, null, n);
        }
      }
      function Id(e) {
        hd(e.value), e.children.forEach(Id);
      }
      class Ad {
        constructor(e, t) {
          (this.routes = e), (this.module = t);
        }
      }
      function Od(e) {
        return "function" == typeof e;
      }
      function Rd(e) {
        return e instanceof Ph;
      }
      const Pd = Symbol("INITIAL_VALUE");
      function Dd() {
        return iu((e) =>
          (function (...e) {
            let t, n;
            return (
              k(e[e.length - 1]) && (n = e.pop()),
              "function" == typeof e[e.length - 1] && (t = e.pop()),
              1 === e.length && l(e[0]) && (e = e[0]),
              V(e, n).lift(new bu(t))
            );
          })(
            e.map((e) =>
              e.pipe(
                ku(1),
                (function (...e) {
                  const t = e[e.length - 1];
                  return k(t) ? (e.pop(), (n) => Su(e, n, t)) : (t) => Su(e, t);
                })(Pd)
              )
            )
          ).pipe(
            Iu((e, t) => {
              let n = !1;
              return t.reduce((e, r, s) => {
                if (e !== Pd) return e;
                if ((r === Pd && (n = !0), !n)) {
                  if (!1 === r) return r;
                  if (s === t.length - 1 || Rd(r)) return r;
                }
                return e;
              }, e);
            }, Pd),
            Ru((e) => e !== Pd),
            x((e) => (Rd(e) ? e : !0 === e)),
            ku(1)
          )
        );
      }
      let Nd = (() => {
        class e {}
        return (
          (e.ɵfac = function (t) {
            return new (t || e)();
          }),
          (e.ɵcmp = qe({
            type: e,
            selectors: [["ng-component"]],
            decls: 1,
            vars: 0,
            template: function (e, t) {
              1 & e && Ai(0, "router-outlet");
            },
            directives: function () {
              return [Op];
            },
            encapsulation: 2,
          })),
          e
        );
      })();
      function Md(e, t = "") {
        for (let n = 0; n < e.length; n++) {
          const r = e[n];
          Fd(r, jd(t, r));
        }
      }
      function Fd(e, t) {
        e.children && Md(e.children, t);
      }
      function jd(e, t) {
        return t
          ? e || t.path
            ? e && !t.path
              ? `${e}/`
              : !e && t.path
              ? t.path
              : `${e}/${t.path}`
            : ""
          : e;
      }
      function Ld(e) {
        const t = e.children && e.children.map(Ld),
          n = t
            ? Object.assign(Object.assign({}, e), { children: t })
            : Object.assign({}, e);
        return (
          !n.component &&
            (t || n.loadChildren) &&
            n.outlet &&
            "primary" !== n.outlet &&
            (n.component = Nd),
          n
        );
      }
      function Wd(e) {
        return e.outlet || "primary";
      }
      function zd(e, t) {
        const n = e.filter((e) => Wd(e) === t);
        return n.push(...e.filter((e) => Wd(e) !== t)), n;
      }
      const qd = {
        matched: !1,
        consumedSegments: [],
        lastChild: 0,
        parameters: {},
        positionalParamSegments: {},
      };
      function Hd(e, t, n) {
        var r;
        if ("" === t.path)
          return "full" === t.pathMatch && (e.hasChildren() || n.length > 0)
            ? Object.assign({}, qd)
            : {
                matched: !0,
                consumedSegments: [],
                lastChild: 0,
                parameters: {},
                positionalParamSegments: {},
              };
        const s = (t.matcher || wh)(n, e, t);
        if (!s) return Object.assign({}, qd);
        const i = {};
        xh(s.posParams, (e, t) => {
          i[t] = e.path;
        });
        const o =
          s.consumed.length > 0
            ? Object.assign(
                Object.assign({}, i),
                s.consumed[s.consumed.length - 1].parameters
              )
            : i;
        return {
          matched: !0,
          consumedSegments: s.consumed,
          lastChild: s.consumed.length,
          parameters: o,
          positionalParamSegments:
            null !== (r = s.posParams) && void 0 !== r ? r : {},
        };
      }
      function Ud(e, t, n, r, s = "corrected") {
        if (
          n.length > 0 &&
          (function (e, t, n) {
            return n.some((n) => Vd(e, t, n) && "primary" !== Wd(n));
          })(e, n, r)
        ) {
          const s = new Dh(
            t,
            (function (e, t, n, r) {
              const s = {};
              (s.primary = r),
                (r._sourceSegment = e),
                (r._segmentIndexShift = t.length);
              for (const i of n)
                if ("" === i.path && "primary" !== Wd(i)) {
                  const n = new Dh([], {});
                  (n._sourceSegment = e),
                    (n._segmentIndexShift = t.length),
                    (s[Wd(i)] = n);
                }
              return s;
            })(e, t, r, new Dh(n, e.children))
          );
          return (
            (s._sourceSegment = e),
            (s._segmentIndexShift = t.length),
            { segmentGroup: s, slicedSegments: [] }
          );
        }
        if (
          0 === n.length &&
          (function (e, t, n) {
            return n.some((n) => Vd(e, t, n));
          })(e, n, r)
        ) {
          const i = new Dh(
            e.segments,
            (function (e, t, n, r, s, i) {
              const o = {};
              for (const a of r)
                if (Vd(e, n, a) && !s[Wd(a)]) {
                  const n = new Dh([], {});
                  (n._sourceSegment = e),
                    (n._segmentIndexShift =
                      "legacy" === i ? e.segments.length : t.length),
                    (o[Wd(a)] = n);
                }
              return Object.assign(Object.assign({}, s), o);
            })(e, t, n, r, e.children, s)
          );
          return (
            (i._sourceSegment = e),
            (i._segmentIndexShift = t.length),
            { segmentGroup: i, slicedSegments: n }
          );
        }
        const i = new Dh(e.segments, e.children);
        return (
          (i._sourceSegment = e),
          (i._segmentIndexShift = t.length),
          { segmentGroup: i, slicedSegments: n }
        );
      }
      function Vd(e, t, n) {
        return (
          (!(e.hasChildren() || t.length > 0) || "full" !== n.pathMatch) &&
          "" === n.path
        );
      }
      function Bd(e, t, n, r) {
        return (
          !!(Wd(e) === r || ("primary" !== r && Vd(t, n, e))) &&
          ("**" === e.path || Hd(t, e, n).matched)
        );
      }
      function $d(e, t, n) {
        return 0 === t.length && !e.children[n];
      }
      class Qd {
        constructor(e) {
          this.segmentGroup = e || null;
        }
      }
      class Gd {
        constructor(e) {
          this.urlTree = e;
        }
      }
      function Kd(e) {
        return new v((t) => t.error(new Qd(e)));
      }
      function Zd(e) {
        return new v((t) => t.error(new Gd(e)));
      }
      function Jd(e) {
        return new v((t) =>
          t.error(
            new Error(
              `Only absolute redirects can have named outlets. redirectTo: '${e}'`
            )
          )
        );
      }
      class Yd {
        constructor(e, t, n, r, s) {
          (this.configLoader = t),
            (this.urlSerializer = n),
            (this.urlTree = r),
            (this.config = s),
            (this.allowRedirects = !0),
            (this.ngModule = e.get(Qo));
        }
        apply() {
          const e = Ud(this.urlTree.root, [], [], this.config).segmentGroup,
            t = new Dh(e.segments, e.children);
          return this.expandSegmentGroup(
            this.ngModule,
            this.config,
            t,
            "primary"
          )
            .pipe(
              x((e) =>
                this.createUrlTree(
                  Xd(e),
                  this.urlTree.queryParams,
                  this.urlTree.fragment
                )
              )
            )
            .pipe(
              Nu((e) => {
                if (e instanceof Gd)
                  return (this.allowRedirects = !1), this.match(e.urlTree);
                if (e instanceof Qd) throw this.noMatchError(e);
                throw e;
              })
            );
        }
        match(e) {
          return this.expandSegmentGroup(
            this.ngModule,
            this.config,
            e.root,
            "primary"
          )
            .pipe(
              x((t) => this.createUrlTree(Xd(t), e.queryParams, e.fragment))
            )
            .pipe(
              Nu((e) => {
                if (e instanceof Qd) throw this.noMatchError(e);
                throw e;
              })
            );
        }
        noMatchError(e) {
          return new Error(
            `Cannot match any routes. URL Segment: '${e.segmentGroup}'`
          );
        }
        createUrlTree(e, t, n) {
          const r = e.segments.length > 0 ? new Dh([], { primary: e }) : e;
          return new Ph(r, t, n);
        }
        expandSegmentGroup(e, t, n, r) {
          return 0 === n.segments.length && n.hasChildren()
            ? this.expandChildren(e, t, n).pipe(x((e) => new Dh([], e)))
            : this.expandSegment(e, n, t, n.segments, r, !0);
        }
        expandChildren(e, t, n) {
          const r = [];
          for (const s of Object.keys(n.children))
            "primary" === s ? r.unshift(s) : r.push(s);
          return F(r).pipe(
            ju((r) => {
              const s = n.children[r],
                i = zd(t, r);
              return this.expandSegmentGroup(e, i, s, r).pipe(
                x((e) => ({ segment: e, outlet: r }))
              );
            }),
            Iu((e, t) => ((e[t.outlet] = t.segment), e), {}),
            (function (e, t) {
              const n = arguments.length >= 2;
              return (r) =>
                r.pipe(
                  e ? Ru((t, n) => e(t, n, r)) : y,
                  Lu(1),
                  n ? Bu(t) : qu(() => new wu())
                );
            })()
          );
        }
        expandSegment(e, t, n, r, s, i) {
          return F(n).pipe(
            ju((o) =>
              this.expandSegmentAgainstRoute(e, t, n, o, r, s, i).pipe(
                Nu((e) => {
                  if (e instanceof Qd) return Xc(null);
                  throw e;
                })
              )
            ),
            Gu((e) => !!e),
            Nu((e, n) => {
              if (e instanceof wu || "EmptyError" === e.name) {
                if ($d(t, r, s)) return Xc(new Dh([], {}));
                throw new Qd(t);
              }
              throw e;
            })
          );
        }
        expandSegmentAgainstRoute(e, t, n, r, s, i, o) {
          return Bd(r, t, s, i)
            ? void 0 === r.redirectTo
              ? this.matchSegmentAgainstRoute(e, t, r, s, i)
              : o && this.allowRedirects
              ? this.expandSegmentAgainstRouteUsingRedirect(e, t, n, r, s, i)
              : Kd(t)
            : Kd(t);
        }
        expandSegmentAgainstRouteUsingRedirect(e, t, n, r, s, i) {
          return "**" === r.path
            ? this.expandWildCardWithParamsAgainstRouteUsingRedirect(e, n, r, i)
            : this.expandRegularSegmentAgainstRouteUsingRedirect(
                e,
                t,
                n,
                r,
                s,
                i
              );
        }
        expandWildCardWithParamsAgainstRouteUsingRedirect(e, t, n, r) {
          const s = this.applyRedirectCommands([], n.redirectTo, {});
          return n.redirectTo.startsWith("/")
            ? Zd(s)
            : this.lineralizeSegments(n, s).pipe(
                z((n) => {
                  const s = new Dh(n, {});
                  return this.expandSegment(e, s, t, n, r, !1);
                })
              );
        }
        expandRegularSegmentAgainstRouteUsingRedirect(e, t, n, r, s, i) {
          const {
            matched: o,
            consumedSegments: a,
            lastChild: l,
            positionalParamSegments: c,
          } = Hd(t, r, s);
          if (!o) return Kd(t);
          const u = this.applyRedirectCommands(a, r.redirectTo, c);
          return r.redirectTo.startsWith("/")
            ? Zd(u)
            : this.lineralizeSegments(r, u).pipe(
                z((r) =>
                  this.expandSegment(e, t, n, r.concat(s.slice(l)), i, !1)
                )
              );
        }
        matchSegmentAgainstRoute(e, t, n, r, s) {
          if ("**" === n.path)
            return n.loadChildren
              ? (n._loadedConfig
                  ? Xc(n._loadedConfig)
                  : this.configLoader.load(e.injector, n)
                ).pipe(x((e) => ((n._loadedConfig = e), new Dh(r, {}))))
              : Xc(new Dh(r, {}));
          const { matched: i, consumedSegments: o, lastChild: a } = Hd(t, n, r);
          if (!i) return Kd(t);
          const l = r.slice(a);
          return this.getChildConfig(e, n, r).pipe(
            z((e) => {
              const r = e.module,
                i = e.routes,
                { segmentGroup: a, slicedSegments: c } = Ud(t, o, l, i),
                u = new Dh(a.segments, a.children);
              if (0 === c.length && u.hasChildren())
                return this.expandChildren(r, i, u).pipe(
                  x((e) => new Dh(o, e))
                );
              if (0 === i.length && 0 === c.length) return Xc(new Dh(o, {}));
              const h = Wd(n) === s;
              return this.expandSegment(r, u, i, c, h ? "primary" : s, !0).pipe(
                x((e) => new Dh(o.concat(e.segments), e.children))
              );
            })
          );
        }
        getChildConfig(e, t, n) {
          return t.children
            ? Xc(new Ad(t.children, e))
            : t.loadChildren
            ? void 0 !== t._loadedConfig
              ? Xc(t._loadedConfig)
              : this.runCanLoadGuards(e.injector, t, n).pipe(
                  z((n) =>
                    n
                      ? this.configLoader
                          .load(e.injector, t)
                          .pipe(x((e) => ((t._loadedConfig = e), e)))
                      : (function (e) {
                          return new v((t) =>
                            t.error(
                              _h(
                                `Cannot load children because the guard of the route "path: '${e.path}'" returned false`
                              )
                            )
                          );
                        })(t)
                  )
                )
            : Xc(new Ad([], e));
        }
        runCanLoadGuards(e, t, n) {
          const r = t.canLoad;
          return r && 0 !== r.length
            ? Xc(
                r.map((r) => {
                  const s = e.get(r);
                  let i;
                  if (
                    (function (e) {
                      return e && Od(e.canLoad);
                    })(s)
                  )
                    i = s.canLoad(t, n);
                  else {
                    if (!Od(s)) throw new Error("Invalid CanLoad guard");
                    i = s(t, n);
                  }
                  return Th(i);
                })
              ).pipe(
                Dd(),
                Zu((e) => {
                  if (!Rd(e)) return;
                  const t = _h(
                    `Redirecting to "${this.urlSerializer.serialize(e)}"`
                  );
                  throw ((t.url = e), t);
                }),
                x((e) => !0 === e)
              )
            : Xc(!0);
        }
        lineralizeSegments(e, t) {
          let n = [],
            r = t.root;
          for (;;) {
            if (((n = n.concat(r.segments)), 0 === r.numberOfChildren))
              return Xc(n);
            if (r.numberOfChildren > 1 || !r.children.primary)
              return Jd(e.redirectTo);
            r = r.children.primary;
          }
        }
        applyRedirectCommands(e, t, n) {
          return this.applyRedirectCreatreUrlTree(
            t,
            this.urlSerializer.parse(t),
            e,
            n
          );
        }
        applyRedirectCreatreUrlTree(e, t, n, r) {
          const s = this.createSegmentGroup(e, t.root, n, r);
          return new Ph(
            s,
            this.createQueryParams(t.queryParams, this.urlTree.queryParams),
            t.fragment
          );
        }
        createQueryParams(e, t) {
          const n = {};
          return (
            xh(e, (e, r) => {
              if ("string" == typeof e && e.startsWith(":")) {
                const s = e.substring(1);
                n[r] = t[s];
              } else n[r] = e;
            }),
            n
          );
        }
        createSegmentGroup(e, t, n, r) {
          const s = this.createSegments(e, t.segments, n, r);
          let i = {};
          return (
            xh(t.children, (t, s) => {
              i[s] = this.createSegmentGroup(e, t, n, r);
            }),
            new Dh(s, i)
          );
        }
        createSegments(e, t, n, r) {
          return t.map((t) =>
            t.path.startsWith(":")
              ? this.findPosParam(e, t, r)
              : this.findOrReturn(t, n)
          );
        }
        findPosParam(e, t, n) {
          const r = n[t.path.substring(1)];
          if (!r)
            throw new Error(
              `Cannot redirect to '${e}'. Cannot find '${t.path}'.`
            );
          return r;
        }
        findOrReturn(e, t) {
          let n = 0;
          for (const r of t) {
            if (r.path === e.path) return t.splice(n), r;
            n++;
          }
          return e;
        }
      }
      function Xd(e) {
        const t = {};
        for (const n of Object.keys(e.children)) {
          const r = Xd(e.children[n]);
          (r.segments.length > 0 || r.hasChildren()) && (t[n] = r);
        }
        return (function (e) {
          if (1 === e.numberOfChildren && e.children.primary) {
            const t = e.children.primary;
            return new Dh(e.segments.concat(t.segments), t.children);
          }
          return e;
        })(new Dh(e.segments, t));
      }
      class ep {
        constructor(e) {
          (this.path = e), (this.route = this.path[this.path.length - 1]);
        }
      }
      class tp {
        constructor(e, t) {
          (this.component = e), (this.route = t);
        }
      }
      function np(e, t, n) {
        const r = e._root;
        return sp(r, t ? t._root : null, n, [r.value]);
      }
      function rp(e, t, n) {
        const r = (function (e) {
          if (!e) return null;
          for (let t = e.parent; t; t = t.parent) {
            const e = t.routeConfig;
            if (e && e._loadedConfig) return e._loadedConfig;
          }
          return null;
        })(t);
        return (r ? r.module.injector : n).get(e);
      }
      function sp(
        e,
        t,
        n,
        r,
        s = { canDeactivateChecks: [], canActivateChecks: [] }
      ) {
        const i = nd(t);
        return (
          e.children.forEach((e) => {
            !(function (
              e,
              t,
              n,
              r,
              s = { canDeactivateChecks: [], canActivateChecks: [] }
            ) {
              const i = e.value,
                o = t ? t.value : null,
                a = n ? n.getContext(e.value.outlet) : null;
              if (o && i.routeConfig === o.routeConfig) {
                const l = (function (e, t, n) {
                  if ("function" == typeof n) return n(e, t);
                  switch (n) {
                    case "pathParamsChange":
                      return !Mh(e.url, t.url);
                    case "pathParamsOrQueryParamsChange":
                      return (
                        !Mh(e.url, t.url) || !Sh(e.queryParams, t.queryParams)
                      );
                    case "always":
                      return !0;
                    case "paramsOrQueryParamsChange":
                      return !dd(e, t) || !Sh(e.queryParams, t.queryParams);
                    case "paramsChange":
                    default:
                      return !dd(e, t);
                  }
                })(o, i, i.routeConfig.runGuardsAndResolvers);
                l
                  ? s.canActivateChecks.push(new ep(r))
                  : ((i.data = o.data), (i._resolvedData = o._resolvedData)),
                  sp(e, t, i.component ? (a ? a.children : null) : n, r, s),
                  l &&
                    a &&
                    a.outlet &&
                    a.outlet.isActivated &&
                    s.canDeactivateChecks.push(new tp(a.outlet.component, o));
              } else
                o && ip(t, a, s),
                  s.canActivateChecks.push(new ep(r)),
                  sp(e, null, i.component ? (a ? a.children : null) : n, r, s);
            })(e, i[e.value.outlet], n, r.concat([e.value]), s),
              delete i[e.value.outlet];
          }),
          xh(i, (e, t) => ip(e, n.getContext(t), s)),
          s
        );
      }
      function ip(e, t, n) {
        const r = nd(e),
          s = e.value;
        xh(r, (e, r) => {
          ip(e, s.component ? (t ? t.children.getContext(r) : null) : t, n);
        }),
          n.canDeactivateChecks.push(
            new tp(
              s.component && t && t.outlet && t.outlet.isActivated
                ? t.outlet.component
                : null,
              s
            )
          );
      }
      class op {}
      function ap(e) {
        return new v((t) => t.error(e));
      }
      class lp {
        constructor(e, t, n, r, s, i) {
          (this.rootComponentType = e),
            (this.config = t),
            (this.urlTree = n),
            (this.url = r),
            (this.paramsInheritanceStrategy = s),
            (this.relativeLinkResolution = i);
        }
        recognize() {
          const e = Ud(
              this.urlTree.root,
              [],
              [],
              this.config.filter((e) => void 0 === e.redirectTo),
              this.relativeLinkResolution
            ).segmentGroup,
            t = this.processSegmentGroup(this.config, e, "primary");
          if (null === t) return null;
          const n = new ad(
              [],
              Object.freeze({}),
              Object.freeze(Object.assign({}, this.urlTree.queryParams)),
              this.urlTree.fragment,
              {},
              "primary",
              this.rootComponentType,
              null,
              this.urlTree.root,
              -1,
              {}
            ),
            r = new td(n, t),
            s = new ld(this.url, r);
          return this.inheritParamsAndData(s._root), s;
        }
        inheritParamsAndData(e) {
          const t = e.value,
            n = od(t, this.paramsInheritanceStrategy);
          (t.params = Object.freeze(n.params)),
            (t.data = Object.freeze(n.data)),
            e.children.forEach((e) => this.inheritParamsAndData(e));
        }
        processSegmentGroup(e, t, n) {
          return 0 === t.segments.length && t.hasChildren()
            ? this.processChildren(e, t)
            : this.processSegment(e, t, t.segments, n);
        }
        processChildren(e, t) {
          const n = [];
          for (const s of Object.keys(t.children)) {
            const r = t.children[s],
              i = zd(e, s),
              o = this.processSegmentGroup(i, r, s);
            if (null === o) return null;
            n.push(...o);
          }
          const r = up(n);
          return (
            r.sort((e, t) =>
              "primary" === e.value.outlet
                ? -1
                : "primary" === t.value.outlet
                ? 1
                : e.value.outlet.localeCompare(t.value.outlet)
            ),
            r
          );
        }
        processSegment(e, t, n, r) {
          for (const s of e) {
            const e = this.processSegmentAgainstRoute(s, t, n, r);
            if (null !== e) return e;
          }
          return $d(t, n, r) ? [] : null;
        }
        processSegmentAgainstRoute(e, t, n, r) {
          if (e.redirectTo || !Bd(e, t, n, r)) return null;
          let s,
            i = [],
            o = [];
          if ("**" === e.path) {
            const r = n.length > 0 ? kh(n).parameters : {};
            s = new ad(
              n,
              r,
              Object.freeze(Object.assign({}, this.urlTree.queryParams)),
              this.urlTree.fragment,
              pp(e),
              Wd(e),
              e.component,
              e,
              hp(t),
              dp(t) + n.length,
              fp(e)
            );
          } else {
            const r = Hd(t, e, n);
            if (!r.matched) return null;
            (i = r.consumedSegments),
              (o = n.slice(r.lastChild)),
              (s = new ad(
                i,
                r.parameters,
                Object.freeze(Object.assign({}, this.urlTree.queryParams)),
                this.urlTree.fragment,
                pp(e),
                Wd(e),
                e.component,
                e,
                hp(t),
                dp(t) + i.length,
                fp(e)
              ));
          }
          const a = (function (e) {
              return e.children
                ? e.children
                : e.loadChildren
                ? e._loadedConfig.routes
                : [];
            })(e),
            { segmentGroup: l, slicedSegments: c } = Ud(
              t,
              i,
              o,
              a.filter((e) => void 0 === e.redirectTo),
              this.relativeLinkResolution
            );
          if (0 === c.length && l.hasChildren()) {
            const e = this.processChildren(a, l);
            return null === e ? null : [new td(s, e)];
          }
          if (0 === a.length && 0 === c.length) return [new td(s, [])];
          const u = Wd(e) === r,
            h = this.processSegment(a, l, c, u ? "primary" : r);
          return null === h ? null : [new td(s, h)];
        }
      }
      function cp(e) {
        const t = e.value.routeConfig;
        return t && "" === t.path && void 0 === t.redirectTo;
      }
      function up(e) {
        const t = [],
          n = new Set();
        for (const r of e) {
          if (!cp(r)) {
            t.push(r);
            continue;
          }
          const e = t.find((e) => r.value.routeConfig === e.value.routeConfig);
          void 0 !== e ? (e.children.push(...r.children), n.add(e)) : t.push(r);
        }
        for (const r of n) {
          const e = up(r.children);
          t.push(new td(r.value, e));
        }
        return t.filter((e) => !n.has(e));
      }
      function hp(e) {
        let t = e;
        for (; t._sourceSegment; ) t = t._sourceSegment;
        return t;
      }
      function dp(e) {
        let t = e,
          n = t._segmentIndexShift ? t._segmentIndexShift : 0;
        for (; t._sourceSegment; )
          (t = t._sourceSegment),
            (n += t._segmentIndexShift ? t._segmentIndexShift : 0);
        return n - 1;
      }
      function pp(e) {
        return e.data || {};
      }
      function fp(e) {
        return e.resolve || {};
      }
      function mp(e) {
        return iu((t) => {
          const n = e(t);
          return n ? F(n).pipe(x(() => t)) : Xc(t);
        });
      }
      class gp extends class {
        shouldDetach(e) {
          return !1;
        }
        store(e, t) {}
        shouldAttach(e) {
          return !1;
        }
        retrieve(e) {
          return null;
        }
        shouldReuseRoute(e, t) {
          return e.routeConfig === t.routeConfig;
        }
      } {}
      const yp = new Mn("ROUTES");
      class vp {
        constructor(e, t, n, r) {
          (this.loader = e),
            (this.compiler = t),
            (this.onLoadStartListener = n),
            (this.onLoadEndListener = r);
        }
        load(e, t) {
          if (t._loader$) return t._loader$;
          this.onLoadStartListener && this.onLoadStartListener(t);
          const n = this.loadModuleFactory(t.loadChildren).pipe(
            x((n) => {
              this.onLoadEndListener && this.onLoadEndListener(t);
              const r = n.create(e);
              return new Ad(
                Eh(r.injector.get(yp, void 0, ve.Self | ve.Optional)).map(Ld),
                r
              );
            }),
            Nu((e) => {
              throw ((t._loader$ = void 0), e);
            })
          );
          return (t._loader$ = new K(n, () => new C()).pipe($())), t._loader$;
        }
        loadModuleFactory(e) {
          return "string" == typeof e
            ? F(this.loader.load(e))
            : Th(e()).pipe(
                z((e) =>
                  e instanceof Go
                    ? Xc(e)
                    : F(this.compiler.compileModuleAsync(e))
                )
              );
        }
      }
      class bp {
        constructor() {
          (this.outlet = null),
            (this.route = null),
            (this.resolver = null),
            (this.children = new _p()),
            (this.attachRef = null);
        }
      }
      class _p {
        constructor() {
          this.contexts = new Map();
        }
        onChildOutletCreated(e, t) {
          const n = this.getOrCreateContext(e);
          (n.outlet = t), this.contexts.set(e, n);
        }
        onChildOutletDestroyed(e) {
          const t = this.getContext(e);
          t && (t.outlet = null);
        }
        onOutletDeactivated() {
          const e = this.contexts;
          return (this.contexts = new Map()), e;
        }
        onOutletReAttached(e) {
          this.contexts = e;
        }
        getOrCreateContext(e) {
          let t = this.getContext(e);
          return t || ((t = new bp()), this.contexts.set(e, t)), t;
        }
        getContext(e) {
          return this.contexts.get(e) || null;
        }
      }
      class wp {
        shouldProcessUrl(e) {
          return !0;
        }
        extract(e) {
          return e;
        }
        merge(e, t) {
          return e;
        }
      }
      function Sp(e) {
        throw e;
      }
      function Cp(e, t, n) {
        return t.parse("/");
      }
      function Ep(e, t) {
        return Xc(null);
      }
      let kp = (() => {
          class e {
            constructor(e, t, n, r, s, i, o, a) {
              (this.rootComponentType = e),
                (this.urlSerializer = t),
                (this.rootContexts = n),
                (this.location = r),
                (this.config = a),
                (this.lastSuccessfulNavigation = null),
                (this.currentNavigation = null),
                (this.disposed = !1),
                (this.lastLocationChangeInfo = null),
                (this.navigationId = 0),
                (this.isNgZoneEnabled = !1),
                (this.events = new C()),
                (this.errorHandler = Sp),
                (this.malformedUriErrorHandler = Cp),
                (this.navigated = !1),
                (this.lastSuccessfulId = -1),
                (this.hooks = {
                  beforePreactivation: Ep,
                  afterPreactivation: Ep,
                }),
                (this.urlHandlingStrategy = new wp()),
                (this.routeReuseStrategy = new gp()),
                (this.onSameUrlNavigation = "ignore"),
                (this.paramsInheritanceStrategy = "emptyOnly"),
                (this.urlUpdateStrategy = "deferred"),
                (this.relativeLinkResolution = "corrected"),
                (this.ngModule = s.get(Qo)),
                (this.console = s.get(Va));
              const l = s.get(rl);
              (this.isNgZoneEnabled = l instanceof rl && rl.isInAngularZone()),
                this.resetConfig(a),
                (this.currentUrlTree = new Ph(new Dh([], {}), {}, null)),
                (this.rawUrlTree = this.currentUrlTree),
                (this.browserUrlTree = this.currentUrlTree),
                (this.configLoader = new vp(
                  i,
                  o,
                  (e) => this.triggerEvent(new hh(e)),
                  (e) => this.triggerEvent(new dh(e))
                )),
                (this.routerState = sd(
                  this.currentUrlTree,
                  this.rootComponentType
                )),
                (this.transitions = new fu({
                  id: 0,
                  currentUrlTree: this.currentUrlTree,
                  currentRawUrl: this.currentUrlTree,
                  extractedUrl: this.urlHandlingStrategy.extract(
                    this.currentUrlTree
                  ),
                  urlAfterRedirects: this.urlHandlingStrategy.extract(
                    this.currentUrlTree
                  ),
                  rawUrl: this.currentUrlTree,
                  extras: {},
                  resolve: null,
                  reject: null,
                  promise: Promise.resolve(!0),
                  source: "imperative",
                  restoredState: null,
                  currentSnapshot: this.routerState.snapshot,
                  targetSnapshot: null,
                  currentRouterState: this.routerState,
                  targetRouterState: null,
                  guards: { canActivateChecks: [], canDeactivateChecks: [] },
                  guardsResult: null,
                })),
                (this.navigations = this.setupNavigations(this.transitions)),
                this.processNavigations();
            }
            setupNavigations(e) {
              const t = this.events;
              return e.pipe(
                Ru((e) => 0 !== e.id),
                x((e) =>
                  Object.assign(Object.assign({}, e), {
                    extractedUrl: this.urlHandlingStrategy.extract(e.rawUrl),
                  })
                ),
                iu((e) => {
                  let n = !1,
                    r = !1;
                  return Xc(e).pipe(
                    Zu((e) => {
                      this.currentNavigation = {
                        id: e.id,
                        initialUrl: e.currentRawUrl,
                        extractedUrl: e.extractedUrl,
                        trigger: e.source,
                        extras: e.extras,
                        previousNavigation: this.lastSuccessfulNavigation
                          ? Object.assign(
                              Object.assign({}, this.lastSuccessfulNavigation),
                              { previousNavigation: null }
                            )
                          : null,
                      };
                    }),
                    iu((e) => {
                      const n =
                        !this.navigated ||
                        e.extractedUrl.toString() !==
                          this.browserUrlTree.toString();
                      if (
                        ("reload" === this.onSameUrlNavigation || n) &&
                        this.urlHandlingStrategy.shouldProcessUrl(e.rawUrl)
                      )
                        return Xc(e).pipe(
                          iu((e) => {
                            const n = this.transitions.getValue();
                            return (
                              t.next(
                                new nh(
                                  e.id,
                                  this.serializeUrl(e.extractedUrl),
                                  e.source,
                                  e.restoredState
                                )
                              ),
                              n !== this.transitions.getValue()
                                ? Jc
                                : Promise.resolve(e)
                            );
                          }),
                          ((r = this.ngModule.injector),
                          (s = this.configLoader),
                          (i = this.urlSerializer),
                          (o = this.config),
                          iu((e) =>
                            (function (e, t, n, r, s) {
                              return new Yd(e, t, n, r, s).apply();
                            })(r, s, i, e.extractedUrl, o).pipe(
                              x((t) =>
                                Object.assign(Object.assign({}, e), {
                                  urlAfterRedirects: t,
                                })
                              )
                            )
                          )),
                          Zu((e) => {
                            this.currentNavigation = Object.assign(
                              Object.assign({}, this.currentNavigation),
                              { finalUrl: e.urlAfterRedirects }
                            );
                          }),
                          (function (e, t, n, r, s) {
                            return z((i) =>
                              (function (
                                e,
                                t,
                                n,
                                r,
                                s = "emptyOnly",
                                i = "legacy"
                              ) {
                                try {
                                  const o = new lp(
                                    e,
                                    t,
                                    n,
                                    r,
                                    s,
                                    i
                                  ).recognize();
                                  return null === o ? ap(new op()) : Xc(o);
                                } catch (o) {
                                  return ap(o);
                                }
                              })(
                                e,
                                t,
                                i.urlAfterRedirects,
                                n(i.urlAfterRedirects),
                                r,
                                s
                              ).pipe(
                                x((e) =>
                                  Object.assign(Object.assign({}, i), {
                                    targetSnapshot: e,
                                  })
                                )
                              )
                            );
                          })(
                            this.rootComponentType,
                            this.config,
                            (e) => this.serializeUrl(e),
                            this.paramsInheritanceStrategy,
                            this.relativeLinkResolution
                          ),
                          Zu((e) => {
                            "eager" === this.urlUpdateStrategy &&
                              (e.extras.skipLocationChange ||
                                this.setBrowserUrl(
                                  e.urlAfterRedirects,
                                  !!e.extras.replaceUrl,
                                  e.id,
                                  e.extras.state
                                ),
                              (this.browserUrlTree = e.urlAfterRedirects));
                            const n = new oh(
                              e.id,
                              this.serializeUrl(e.extractedUrl),
                              this.serializeUrl(e.urlAfterRedirects),
                              e.targetSnapshot
                            );
                            t.next(n);
                          })
                        );
                      var r, s, i, o;
                      if (
                        n &&
                        this.rawUrlTree &&
                        this.urlHandlingStrategy.shouldProcessUrl(
                          this.rawUrlTree
                        )
                      ) {
                        const {
                            id: n,
                            extractedUrl: r,
                            source: s,
                            restoredState: i,
                            extras: o,
                          } = e,
                          a = new nh(n, this.serializeUrl(r), s, i);
                        t.next(a);
                        const l = sd(r, this.rootComponentType).snapshot;
                        return Xc(
                          Object.assign(Object.assign({}, e), {
                            targetSnapshot: l,
                            urlAfterRedirects: r,
                            extras: Object.assign(Object.assign({}, o), {
                              skipLocationChange: !1,
                              replaceUrl: !1,
                            }),
                          })
                        );
                      }
                      return (
                        (this.rawUrlTree = e.rawUrl),
                        (this.browserUrlTree = e.urlAfterRedirects),
                        e.resolve(null),
                        Jc
                      );
                    }),
                    mp((e) => {
                      const {
                        targetSnapshot: t,
                        id: n,
                        extractedUrl: r,
                        rawUrl: s,
                        extras: { skipLocationChange: i, replaceUrl: o },
                      } = e;
                      return this.hooks.beforePreactivation(t, {
                        navigationId: n,
                        appliedUrlTree: r,
                        rawUrlTree: s,
                        skipLocationChange: !!i,
                        replaceUrl: !!o,
                      });
                    }),
                    Zu((e) => {
                      const t = new ah(
                        e.id,
                        this.serializeUrl(e.extractedUrl),
                        this.serializeUrl(e.urlAfterRedirects),
                        e.targetSnapshot
                      );
                      this.triggerEvent(t);
                    }),
                    x((e) =>
                      Object.assign(Object.assign({}, e), {
                        guards: np(
                          e.targetSnapshot,
                          e.currentSnapshot,
                          this.rootContexts
                        ),
                      })
                    ),
                    (function (e, t) {
                      return z((n) => {
                        const {
                          targetSnapshot: r,
                          currentSnapshot: s,
                          guards: {
                            canActivateChecks: i,
                            canDeactivateChecks: o,
                          },
                        } = n;
                        return 0 === o.length && 0 === i.length
                          ? Xc(
                              Object.assign(Object.assign({}, n), {
                                guardsResult: !0,
                              })
                            )
                          : (function (e, t, n, r) {
                              return F(e).pipe(
                                z((e) =>
                                  (function (e, t, n, r, s) {
                                    const i =
                                      t && t.routeConfig
                                        ? t.routeConfig.canDeactivate
                                        : null;
                                    return i && 0 !== i.length
                                      ? Xc(
                                          i.map((i) => {
                                            const o = rp(i, t, s);
                                            let a;
                                            if (
                                              (function (e) {
                                                return e && Od(e.canDeactivate);
                                              })(o)
                                            )
                                              a = Th(
                                                o.canDeactivate(e, t, n, r)
                                              );
                                            else {
                                              if (!Od(o))
                                                throw new Error(
                                                  "Invalid CanDeactivate guard"
                                                );
                                              a = Th(o(e, t, n, r));
                                            }
                                            return a.pipe(Gu());
                                          })
                                        ).pipe(Dd())
                                      : Xc(!0);
                                  })(e.component, e.route, n, t, r)
                                ),
                                Gu((e) => !0 !== e, !0)
                              );
                            })(o, r, s, e).pipe(
                              z((n) =>
                                n && "boolean" == typeof n
                                  ? (function (e, t, n, r) {
                                      return F(t).pipe(
                                        ju((t) =>
                                          Su(
                                            (function (e, t) {
                                              return (
                                                null !== e && t && t(new ph(e)),
                                                Xc(!0)
                                              );
                                            })(t.route.parent, r),
                                            (function (e, t) {
                                              return (
                                                null !== e && t && t(new mh(e)),
                                                Xc(!0)
                                              );
                                            })(t.route, r),
                                            (function (e, t, n) {
                                              const r = t[t.length - 1],
                                                s = t
                                                  .slice(0, t.length - 1)
                                                  .reverse()
                                                  .map((e) =>
                                                    (function (e) {
                                                      const t = e.routeConfig
                                                        ? e.routeConfig
                                                            .canActivateChild
                                                        : null;
                                                      return t && 0 !== t.length
                                                        ? { node: e, guards: t }
                                                        : null;
                                                    })(e)
                                                  )
                                                  .filter((e) => null !== e)
                                                  .map((t) =>
                                                    Cu(() =>
                                                      Xc(
                                                        t.guards.map((s) => {
                                                          const i = rp(
                                                            s,
                                                            t.node,
                                                            n
                                                          );
                                                          let o;
                                                          if (
                                                            (function (e) {
                                                              return (
                                                                e &&
                                                                Od(
                                                                  e.canActivateChild
                                                                )
                                                              );
                                                            })(i)
                                                          )
                                                            o = Th(
                                                              i.canActivateChild(
                                                                r,
                                                                e
                                                              )
                                                            );
                                                          else {
                                                            if (!Od(i))
                                                              throw new Error(
                                                                "Invalid CanActivateChild guard"
                                                              );
                                                            o = Th(i(r, e));
                                                          }
                                                          return o.pipe(Gu());
                                                        })
                                                      ).pipe(Dd())
                                                    )
                                                  );
                                              return Xc(s).pipe(Dd());
                                            })(e, t.path, n),
                                            (function (e, t, n) {
                                              const r = t.routeConfig
                                                ? t.routeConfig.canActivate
                                                : null;
                                              return r && 0 !== r.length
                                                ? Xc(
                                                    r.map((r) =>
                                                      Cu(() => {
                                                        const s = rp(r, t, n);
                                                        let i;
                                                        if (
                                                          (function (e) {
                                                            return (
                                                              e &&
                                                              Od(e.canActivate)
                                                            );
                                                          })(s)
                                                        )
                                                          i = Th(
                                                            s.canActivate(t, e)
                                                          );
                                                        else {
                                                          if (!Od(s))
                                                            throw new Error(
                                                              "Invalid CanActivate guard"
                                                            );
                                                          i = Th(s(t, e));
                                                        }
                                                        return i.pipe(Gu());
                                                      })
                                                    )
                                                  ).pipe(Dd())
                                                : Xc(!0);
                                            })(e, t.route, n)
                                          )
                                        ),
                                        Gu((e) => !0 !== e, !0)
                                      );
                                    })(r, i, e, t)
                                  : Xc(n)
                              ),
                              x((e) =>
                                Object.assign(Object.assign({}, n), {
                                  guardsResult: e,
                                })
                              )
                            );
                      });
                    })(this.ngModule.injector, (e) => this.triggerEvent(e)),
                    Zu((e) => {
                      if (Rd(e.guardsResult)) {
                        const t = _h(
                          `Redirecting to "${this.serializeUrl(
                            e.guardsResult
                          )}"`
                        );
                        throw ((t.url = e.guardsResult), t);
                      }
                      const t = new lh(
                        e.id,
                        this.serializeUrl(e.extractedUrl),
                        this.serializeUrl(e.urlAfterRedirects),
                        e.targetSnapshot,
                        !!e.guardsResult
                      );
                      this.triggerEvent(t);
                    }),
                    Ru((e) => {
                      if (!e.guardsResult) {
                        this.resetUrlToCurrentUrlTree();
                        const n = new sh(
                          e.id,
                          this.serializeUrl(e.extractedUrl),
                          ""
                        );
                        return t.next(n), e.resolve(!1), !1;
                      }
                      return !0;
                    }),
                    mp((e) => {
                      if (e.guards.canActivateChecks.length)
                        return Xc(e).pipe(
                          Zu((e) => {
                            const t = new ch(
                              e.id,
                              this.serializeUrl(e.extractedUrl),
                              this.serializeUrl(e.urlAfterRedirects),
                              e.targetSnapshot
                            );
                            this.triggerEvent(t);
                          }),
                          iu((e) => {
                            let n = !1;
                            return Xc(e).pipe(
                              ((r = this.paramsInheritanceStrategy),
                              (s = this.ngModule.injector),
                              z((e) => {
                                const {
                                  targetSnapshot: t,
                                  guards: { canActivateChecks: n },
                                } = e;
                                if (!n.length) return Xc(e);
                                let i = 0;
                                return F(n).pipe(
                                  ju((e) =>
                                    (function (e, t, n, r) {
                                      return (function (e, t, n, r) {
                                        const s = Object.keys(e);
                                        if (0 === s.length) return Xc({});
                                        const i = {};
                                        return F(s).pipe(
                                          z((s) =>
                                            (function (e, t, n, r) {
                                              const s = rp(e, t, r);
                                              return Th(
                                                s.resolve
                                                  ? s.resolve(t, n)
                                                  : s(t, n)
                                              );
                                            })(e[s], t, n, r).pipe(
                                              Zu((e) => {
                                                i[s] = e;
                                              })
                                            )
                                          ),
                                          Lu(1),
                                          z(() =>
                                            Object.keys(i).length === s.length
                                              ? Xc(i)
                                              : Jc
                                          )
                                        );
                                      })(e._resolve, e, t, r).pipe(
                                        x(
                                          (t) => (
                                            (e._resolvedData = t),
                                            (e.data = Object.assign(
                                              Object.assign({}, e.data),
                                              od(e, n).resolve
                                            )),
                                            null
                                          )
                                        )
                                      );
                                    })(e.route, t, r, s)
                                  ),
                                  Zu(() => i++),
                                  Lu(1),
                                  z((t) => (i === n.length ? Xc(e) : Jc))
                                );
                              })),
                              Zu({
                                next: () => (n = !0),
                                complete: () => {
                                  if (!n) {
                                    const n = new sh(
                                      e.id,
                                      this.serializeUrl(e.extractedUrl),
                                      "At least one route resolver didn't emit any value."
                                    );
                                    t.next(n), e.resolve(!1);
                                  }
                                },
                              })
                            );
                            var r, s;
                          }),
                          Zu((e) => {
                            const t = new uh(
                              e.id,
                              this.serializeUrl(e.extractedUrl),
                              this.serializeUrl(e.urlAfterRedirects),
                              e.targetSnapshot
                            );
                            this.triggerEvent(t);
                          })
                        );
                    }),
                    mp((e) => {
                      const {
                        targetSnapshot: t,
                        id: n,
                        extractedUrl: r,
                        rawUrl: s,
                        extras: { skipLocationChange: i, replaceUrl: o },
                      } = e;
                      return this.hooks.afterPreactivation(t, {
                        navigationId: n,
                        appliedUrlTree: r,
                        rawUrlTree: s,
                        skipLocationChange: !!i,
                        replaceUrl: !!o,
                      });
                    }),
                    x((e) => {
                      const t = (function (e, t, n) {
                        const r = pd(e, t._root, n ? n._root : void 0);
                        return new rd(r, t);
                      })(
                        this.routeReuseStrategy,
                        e.targetSnapshot,
                        e.currentRouterState
                      );
                      return Object.assign(Object.assign({}, e), {
                        targetRouterState: t,
                      });
                    }),
                    Zu((e) => {
                      (this.currentUrlTree = e.urlAfterRedirects),
                        (this.rawUrlTree = this.urlHandlingStrategy.merge(
                          this.currentUrlTree,
                          e.rawUrl
                        )),
                        (this.routerState = e.targetRouterState),
                        "deferred" === this.urlUpdateStrategy &&
                          (e.extras.skipLocationChange ||
                            this.setBrowserUrl(
                              this.rawUrlTree,
                              !!e.extras.replaceUrl,
                              e.id,
                              e.extras.state
                            ),
                          (this.browserUrlTree = e.urlAfterRedirects));
                    }),
                    ((i = this.rootContexts),
                    (o = this.routeReuseStrategy),
                    (a = (e) => this.triggerEvent(e)),
                    x(
                      (e) => (
                        new Td(
                          o,
                          e.targetRouterState,
                          e.currentRouterState,
                          a
                        ).activate(i),
                        e
                      )
                    )),
                    Zu({
                      next() {
                        n = !0;
                      },
                      complete() {
                        n = !0;
                      },
                    }),
                    ((s = () => {
                      if (!n && !r) {
                        this.resetUrlToCurrentUrlTree();
                        const n = new sh(
                          e.id,
                          this.serializeUrl(e.extractedUrl),
                          `Navigation ID ${e.id} is not equal to the current navigation id ${this.navigationId}`
                        );
                        t.next(n), e.resolve(!1);
                      }
                      this.currentNavigation = null;
                    }),
                    (e) => e.lift(new Xu(s))),
                    Nu((n) => {
                      if (((r = !0), (s = n) && s.ngNavigationCancelingError)) {
                        const r = Rd(n.url);
                        r ||
                          ((this.navigated = !0),
                          this.resetStateAndUrl(
                            e.currentRouterState,
                            e.currentUrlTree,
                            e.rawUrl
                          ));
                        const s = new sh(
                          e.id,
                          this.serializeUrl(e.extractedUrl),
                          n.message
                        );
                        t.next(s),
                          r
                            ? setTimeout(() => {
                                const t = this.urlHandlingStrategy.merge(
                                  n.url,
                                  this.rawUrlTree
                                );
                                this.scheduleNavigation(
                                  t,
                                  "imperative",
                                  null,
                                  {
                                    skipLocationChange:
                                      e.extras.skipLocationChange,
                                    replaceUrl:
                                      "eager" === this.urlUpdateStrategy,
                                  },
                                  {
                                    resolve: e.resolve,
                                    reject: e.reject,
                                    promise: e.promise,
                                  }
                                );
                              }, 0)
                            : e.resolve(!1);
                      } else {
                        this.resetStateAndUrl(
                          e.currentRouterState,
                          e.currentUrlTree,
                          e.rawUrl
                        );
                        const r = new ih(
                          e.id,
                          this.serializeUrl(e.extractedUrl),
                          n
                        );
                        t.next(r);
                        try {
                          e.resolve(this.errorHandler(n));
                        } catch (i) {
                          e.reject(i);
                        }
                      }
                      var s;
                      return Jc;
                    })
                  );
                  var s, i, o, a;
                })
              );
            }
            resetRootComponentType(e) {
              (this.rootComponentType = e),
                (this.routerState.root.component = this.rootComponentType);
            }
            getTransition() {
              const e = this.transitions.value;
              return (e.urlAfterRedirects = this.browserUrlTree), e;
            }
            setTransition(e) {
              this.transitions.next(
                Object.assign(Object.assign({}, this.getTransition()), e)
              );
            }
            initialNavigation() {
              this.setUpLocationChangeListener(),
                0 === this.navigationId &&
                  this.navigateByUrl(this.location.path(!0), {
                    replaceUrl: !0,
                  });
            }
            setUpLocationChangeListener() {
              this.locationSubscription ||
                (this.locationSubscription = this.location.subscribe((e) => {
                  const t = this.extractLocationChangeInfoFromEvent(e);
                  this.shouldScheduleNavigation(
                    this.lastLocationChangeInfo,
                    t
                  ) &&
                    setTimeout(() => {
                      const { source: e, state: n, urlTree: r } = t,
                        s = { replaceUrl: !0 };
                      if (n) {
                        const e = Object.assign({}, n);
                        delete e.navigationId,
                          0 !== Object.keys(e).length && (s.state = e);
                      }
                      this.scheduleNavigation(r, e, n, s);
                    }, 0),
                    (this.lastLocationChangeInfo = t);
                }));
            }
            extractLocationChangeInfoFromEvent(e) {
              var t;
              return {
                source: "popstate" === e.type ? "popstate" : "hashchange",
                urlTree: this.parseUrl(e.url),
                state: (
                  null === (t = e.state) || void 0 === t
                    ? void 0
                    : t.navigationId
                )
                  ? e.state
                  : null,
                transitionId: this.getTransition().id,
              };
            }
            shouldScheduleNavigation(e, t) {
              if (!e) return !0;
              const n = t.urlTree.toString() === e.urlTree.toString();
              return !(
                t.transitionId === e.transitionId &&
                n &&
                (("hashchange" === t.source && "popstate" === e.source) ||
                  ("popstate" === t.source && "hashchange" === e.source))
              );
            }
            get url() {
              return this.serializeUrl(this.currentUrlTree);
            }
            getCurrentNavigation() {
              return this.currentNavigation;
            }
            triggerEvent(e) {
              this.events.next(e);
            }
            resetConfig(e) {
              Md(e),
                (this.config = e.map(Ld)),
                (this.navigated = !1),
                (this.lastSuccessfulId = -1);
            }
            ngOnDestroy() {
              this.dispose();
            }
            dispose() {
              this.transitions.complete(),
                this.locationSubscription &&
                  (this.locationSubscription.unsubscribe(),
                  (this.locationSubscription = void 0)),
                (this.disposed = !0);
            }
            createUrlTree(e, t = {}) {
              const {
                  relativeTo: n,
                  queryParams: r,
                  fragment: s,
                  queryParamsHandling: i,
                  preserveFragment: o,
                } = t,
                a = n || this.routerState.root,
                l = o ? this.currentUrlTree.fragment : s;
              let c = null;
              switch (i) {
                case "merge":
                  c = Object.assign(
                    Object.assign({}, this.currentUrlTree.queryParams),
                    r
                  );
                  break;
                case "preserve":
                  c = this.currentUrlTree.queryParams;
                  break;
                default:
                  c = r || null;
              }
              return (
                null !== c && (c = this.removeEmptyProps(c)),
                (function (e, t, n, r, s) {
                  if (0 === n.length) return yd(t.root, t.root, t, r, s);
                  const i = (function (e) {
                    if (
                      "string" == typeof e[0] &&
                      1 === e.length &&
                      "/" === e[0]
                    )
                      return new bd(!0, 0, e);
                    let t = 0,
                      n = !1;
                    const r = e.reduce((e, r, s) => {
                      if ("object" == typeof r && null != r) {
                        if (r.outlets) {
                          const t = {};
                          return (
                            xh(r.outlets, (e, n) => {
                              t[n] = "string" == typeof e ? e.split("/") : e;
                            }),
                            [...e, { outlets: t }]
                          );
                        }
                        if (r.segmentPath) return [...e, r.segmentPath];
                      }
                      return "string" != typeof r
                        ? [...e, r]
                        : 0 === s
                        ? (r.split("/").forEach((r, s) => {
                            (0 == s && "." === r) ||
                              (0 == s && "" === r
                                ? (n = !0)
                                : ".." === r
                                ? t++
                                : "" != r && e.push(r));
                          }),
                          e)
                        : [...e, r];
                    }, []);
                    return new bd(n, t, r);
                  })(n);
                  if (i.toRoot()) return yd(t.root, new Dh([], {}), t, r, s);
                  const o = (function (e, t, n) {
                      if (e.isAbsolute) return new _d(t.root, !0, 0);
                      if (-1 === n.snapshot._lastPathIndex) {
                        const e = n.snapshot._urlSegment;
                        return new _d(e, e === t.root, 0);
                      }
                      const r = md(e.commands[0]) ? 0 : 1;
                      return (function (e, t, n) {
                        let r = e,
                          s = t,
                          i = n;
                        for (; i > s; ) {
                          if (((i -= s), (r = r.parent), !r))
                            throw new Error("Invalid number of '../'");
                          s = r.segments.length;
                        }
                        return new _d(r, !1, s - i);
                      })(
                        n.snapshot._urlSegment,
                        n.snapshot._lastPathIndex + r,
                        e.numberOfDoubleDots
                      );
                    })(i, t, e),
                    a = o.processChildren
                      ? Sd(o.segmentGroup, o.index, i.commands)
                      : wd(o.segmentGroup, o.index, i.commands);
                  return yd(o.segmentGroup, a, t, r, s);
                })(a, this.currentUrlTree, e, c, l)
              );
            }
            navigateByUrl(e, t = { skipLocationChange: !1 }) {
              const n = Rd(e) ? e : this.parseUrl(e),
                r = this.urlHandlingStrategy.merge(n, this.rawUrlTree);
              return this.scheduleNavigation(r, "imperative", null, t);
            }
            navigate(e, t = { skipLocationChange: !1 }) {
              return (
                (function (e) {
                  for (let t = 0; t < e.length; t++) {
                    const n = e[t];
                    if (null == n)
                      throw new Error(
                        `The requested path contains ${n} segment at index ${t}`
                      );
                  }
                })(e),
                this.navigateByUrl(this.createUrlTree(e, t), t)
              );
            }
            serializeUrl(e) {
              return this.urlSerializer.serialize(e);
            }
            parseUrl(e) {
              let t;
              try {
                t = this.urlSerializer.parse(e);
              } catch (n) {
                t = this.malformedUriErrorHandler(n, this.urlSerializer, e);
              }
              return t;
            }
            isActive(e, t) {
              if (Rd(e)) return Ih(this.currentUrlTree, e, t);
              const n = this.parseUrl(e);
              return Ih(this.currentUrlTree, n, t);
            }
            removeEmptyProps(e) {
              return Object.keys(e).reduce((t, n) => {
                const r = e[n];
                return null != r && (t[n] = r), t;
              }, {});
            }
            processNavigations() {
              this.navigations.subscribe(
                (e) => {
                  (this.navigated = !0),
                    (this.lastSuccessfulId = e.id),
                    this.events.next(
                      new rh(
                        e.id,
                        this.serializeUrl(e.extractedUrl),
                        this.serializeUrl(this.currentUrlTree)
                      )
                    ),
                    (this.lastSuccessfulNavigation = this.currentNavigation),
                    e.resolve(!0);
                },
                (e) => {
                  this.console.warn("Unhandled Navigation Error: ");
                }
              );
            }
            scheduleNavigation(e, t, n, r, s) {
              if (this.disposed) return Promise.resolve(!1);
              const i = this.getTransition(),
                o =
                  "imperative" !== t &&
                  "imperative" === (null == i ? void 0 : i.source),
                a =
                  (this.lastSuccessfulId === i.id || this.currentNavigation
                    ? i.rawUrl
                    : i.urlAfterRedirects
                  ).toString() === e.toString();
              if (o && a) return Promise.resolve(!0);
              let l, c, u;
              s
                ? ((l = s.resolve), (c = s.reject), (u = s.promise))
                : (u = new Promise((e, t) => {
                    (l = e), (c = t);
                  }));
              const h = ++this.navigationId;
              return (
                this.setTransition({
                  id: h,
                  source: t,
                  restoredState: n,
                  currentUrlTree: this.currentUrlTree,
                  currentRawUrl: this.rawUrlTree,
                  rawUrl: e,
                  extras: r,
                  resolve: l,
                  reject: c,
                  promise: u,
                  currentSnapshot: this.routerState.snapshot,
                  currentRouterState: this.routerState,
                }),
                u.catch((e) => Promise.reject(e))
              );
            }
            setBrowserUrl(e, t, n, r) {
              const s = this.urlSerializer.serialize(e);
              (r = r || {}),
                this.location.isCurrentPathEqualTo(s) || t
                  ? this.location.replaceState(
                      s,
                      "",
                      Object.assign(Object.assign({}, r), { navigationId: n })
                    )
                  : this.location.go(
                      s,
                      "",
                      Object.assign(Object.assign({}, r), { navigationId: n })
                    );
            }
            resetStateAndUrl(e, t, n) {
              (this.routerState = e),
                (this.currentUrlTree = t),
                (this.rawUrlTree = this.urlHandlingStrategy.merge(
                  this.currentUrlTree,
                  n
                )),
                this.resetUrlToCurrentUrlTree();
            }
            resetUrlToCurrentUrlTree() {
              this.location.replaceState(
                this.urlSerializer.serialize(this.rawUrlTree),
                "",
                { navigationId: this.lastSuccessfulId }
              );
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)(
                Yn(jn),
                Yn(Fh),
                Yn(_p),
                Yn(Zl),
                Yn(pi),
                Yn(kl),
                Yn(el),
                Yn(void 0)
              );
            }),
            (e.ɵprov = ce({ token: e, factory: e.ɵfac })),
            e
          );
        })(),
        xp = (() => {
          class e {
            constructor(e, t, n, r, s) {
              (this.router = e),
                (this.route = t),
                (this.commands = []),
                (this.onChanges = new C()),
                null == n && r.setAttribute(s.nativeElement, "tabindex", "0");
            }
            ngOnChanges(e) {
              this.onChanges.next(this);
            }
            set routerLink(e) {
              this.commands = null != e ? (Array.isArray(e) ? e : [e]) : [];
            }
            onClick() {
              const e = {
                skipLocationChange: Ip(this.skipLocationChange),
                replaceUrl: Ip(this.replaceUrl),
                state: this.state,
              };
              return this.router.navigateByUrl(this.urlTree, e), !0;
            }
            get urlTree() {
              return this.router.createUrlTree(this.commands, {
                relativeTo:
                  void 0 !== this.relativeTo ? this.relativeTo : this.route,
                queryParams: this.queryParams,
                fragment: this.fragment,
                queryParamsHandling: this.queryParamsHandling,
                preserveFragment: Ip(this.preserveFragment),
              });
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)(
                Ei(kp),
                Ei(id),
                Dn("tabindex"),
                Ei(mo),
                Ei(ho)
              );
            }),
            (e.ɵdir = Qe({
              type: e,
              selectors: [["", "routerLink", "", 5, "a", 5, "area"]],
              hostBindings: function (e, t) {
                1 & e &&
                  Pi("click", function () {
                    return t.onClick();
                  });
              },
              inputs: {
                routerLink: "routerLink",
                queryParams: "queryParams",
                fragment: "fragment",
                queryParamsHandling: "queryParamsHandling",
                preserveFragment: "preserveFragment",
                skipLocationChange: "skipLocationChange",
                replaceUrl: "replaceUrl",
                state: "state",
                relativeTo: "relativeTo",
              },
              features: [st],
            })),
            e
          );
        })(),
        Tp = (() => {
          class e {
            constructor(e, t, n) {
              (this.router = e),
                (this.route = t),
                (this.locationStrategy = n),
                (this.commands = []),
                (this.onChanges = new C()),
                (this.subscription = e.events.subscribe((e) => {
                  e instanceof rh && this.updateTargetUrlAndHref();
                }));
            }
            set routerLink(e) {
              this.commands = null != e ? (Array.isArray(e) ? e : [e]) : [];
            }
            ngOnChanges(e) {
              this.updateTargetUrlAndHref(), this.onChanges.next(this);
            }
            ngOnDestroy() {
              this.subscription.unsubscribe();
            }
            onClick(e, t, n, r, s) {
              if (0 !== e || t || n || r || s) return !0;
              if ("string" == typeof this.target && "_self" != this.target)
                return !0;
              const i = {
                skipLocationChange: Ip(this.skipLocationChange),
                replaceUrl: Ip(this.replaceUrl),
                state: this.state,
              };
              return this.router.navigateByUrl(this.urlTree, i), !1;
            }
            updateTargetUrlAndHref() {
              this.href = this.locationStrategy.prepareExternalUrl(
                this.router.serializeUrl(this.urlTree)
              );
            }
            get urlTree() {
              return this.router.createUrlTree(this.commands, {
                relativeTo:
                  void 0 !== this.relativeTo ? this.relativeTo : this.route,
                queryParams: this.queryParams,
                fragment: this.fragment,
                queryParamsHandling: this.queryParamsHandling,
                preserveFragment: Ip(this.preserveFragment),
              });
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)(Ei(kp), Ei(id), Ei(Bl));
            }),
            (e.ɵdir = Qe({
              type: e,
              selectors: [
                ["a", "routerLink", ""],
                ["area", "routerLink", ""],
              ],
              hostVars: 2,
              hostBindings: function (e, t) {
                1 & e &&
                  Pi("click", function (e) {
                    return t.onClick(
                      e.button,
                      e.ctrlKey,
                      e.shiftKey,
                      e.altKey,
                      e.metaKey
                    );
                  }),
                  2 & e && (Ji("href", t.href, cr), wi("target", t.target));
              },
              inputs: {
                routerLink: "routerLink",
                target: "target",
                queryParams: "queryParams",
                fragment: "fragment",
                queryParamsHandling: "queryParamsHandling",
                preserveFragment: "preserveFragment",
                skipLocationChange: "skipLocationChange",
                replaceUrl: "replaceUrl",
                state: "state",
                relativeTo: "relativeTo",
              },
              features: [st],
            })),
            e
          );
        })();
      function Ip(e) {
        return "" === e || !!e;
      }
      let Ap = (() => {
          class e {
            constructor(e, t, n, r, s, i) {
              (this.router = e),
                (this.element = t),
                (this.renderer = n),
                (this.cdr = r),
                (this.link = s),
                (this.linkWithHref = i),
                (this.classes = []),
                (this.isActive = !1),
                (this.routerLinkActiveOptions = { exact: !1 }),
                (this.routerEventsSubscription = e.events.subscribe((e) => {
                  e instanceof rh && this.update();
                }));
            }
            ngAfterContentInit() {
              Xc(this.links.changes, this.linksWithHrefs.changes, Xc(null))
                .pipe(U())
                .subscribe((e) => {
                  this.update(), this.subscribeToEachLinkOnChanges();
                });
            }
            subscribeToEachLinkOnChanges() {
              var e;
              null === (e = this.linkInputChangesSubscription) ||
                void 0 === e ||
                e.unsubscribe();
              const t = [
                ...this.links.toArray(),
                ...this.linksWithHrefs.toArray(),
                this.link,
                this.linkWithHref,
              ]
                .filter((e) => !!e)
                .map((e) => e.onChanges);
              this.linkInputChangesSubscription = F(t)
                .pipe(U())
                .subscribe((e) => {
                  this.isActive !== this.isLinkActive(this.router)(e) &&
                    this.update();
                });
            }
            set routerLinkActive(e) {
              const t = Array.isArray(e) ? e : e.split(" ");
              this.classes = t.filter((e) => !!e);
            }
            ngOnChanges(e) {
              this.update();
            }
            ngOnDestroy() {
              var e;
              this.routerEventsSubscription.unsubscribe(),
                null === (e = this.linkInputChangesSubscription) ||
                  void 0 === e ||
                  e.unsubscribe();
            }
            update() {
              this.links &&
                this.linksWithHrefs &&
                this.router.navigated &&
                Promise.resolve().then(() => {
                  const e = this.hasActiveLinks();
                  this.isActive !== e &&
                    ((this.isActive = e),
                    this.cdr.markForCheck(),
                    this.classes.forEach((t) => {
                      e
                        ? this.renderer.addClass(this.element.nativeElement, t)
                        : this.renderer.removeClass(
                            this.element.nativeElement,
                            t
                          );
                    }));
                });
            }
            isLinkActive(e) {
              return (t) =>
                e.isActive(t.urlTree, this.routerLinkActiveOptions.exact);
            }
            hasActiveLinks() {
              const e = this.isLinkActive(this.router);
              return (
                (this.link && e(this.link)) ||
                (this.linkWithHref && e(this.linkWithHref)) ||
                this.links.some(e) ||
                this.linksWithHrefs.some(e)
              );
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)(
                Ei(kp),
                Ei(ho),
                Ei(mo),
                Ei(Lo),
                Ei(xp, 8),
                Ei(Tp, 8)
              );
            }),
            (e.ɵdir = Qe({
              type: e,
              selectors: [["", "routerLinkActive", ""]],
              contentQueries: function (e, t, n) {
                if ((1 & e && (Oa(n, xp, 1), Oa(n, Tp, 1)), 2 & e)) {
                  let e;
                  Ia((e = Ra())) && (t.links = e),
                    Ia((e = Ra())) && (t.linksWithHrefs = e);
                }
              },
              inputs: {
                routerLinkActiveOptions: "routerLinkActiveOptions",
                routerLinkActive: "routerLinkActive",
              },
              exportAs: ["routerLinkActive"],
              features: [st],
            })),
            e
          );
        })(),
        Op = (() => {
          class e {
            constructor(e, t, n, r, s) {
              (this.parentContexts = e),
                (this.location = t),
                (this.resolver = n),
                (this.changeDetector = s),
                (this.activated = null),
                (this._activatedRoute = null),
                (this.activateEvents = new ga()),
                (this.deactivateEvents = new ga()),
                (this.name = r || "primary"),
                e.onChildOutletCreated(this.name, this);
            }
            ngOnDestroy() {
              this.parentContexts.onChildOutletDestroyed(this.name);
            }
            ngOnInit() {
              if (!this.activated) {
                const e = this.parentContexts.getContext(this.name);
                e &&
                  e.route &&
                  (e.attachRef
                    ? this.attach(e.attachRef, e.route)
                    : this.activateWith(e.route, e.resolver || null));
              }
            }
            get isActivated() {
              return !!this.activated;
            }
            get component() {
              if (!this.activated) throw new Error("Outlet is not activated");
              return this.activated.instance;
            }
            get activatedRoute() {
              if (!this.activated) throw new Error("Outlet is not activated");
              return this._activatedRoute;
            }
            get activatedRouteData() {
              return this._activatedRoute
                ? this._activatedRoute.snapshot.data
                : {};
            }
            detach() {
              if (!this.activated) throw new Error("Outlet is not activated");
              this.location.detach();
              const e = this.activated;
              return (this.activated = null), (this._activatedRoute = null), e;
            }
            attach(e, t) {
              (this.activated = e),
                (this._activatedRoute = t),
                this.location.insert(e.hostView);
            }
            deactivate() {
              if (this.activated) {
                const e = this.component;
                this.activated.destroy(),
                  (this.activated = null),
                  (this._activatedRoute = null),
                  this.deactivateEvents.emit(e);
              }
            }
            activateWith(e, t) {
              if (this.isActivated)
                throw new Error("Cannot activate an already activated outlet");
              this._activatedRoute = e;
              const n = (t = t || this.resolver).resolveComponentFactory(
                  e._futureSnapshot.routeConfig.component
                ),
                r = this.parentContexts.getOrCreateContext(this.name).children,
                s = new Rp(e, r, this.location.injector);
              (this.activated = this.location.createComponent(
                n,
                this.location.length,
                s
              )),
                this.changeDetector.markForCheck(),
                this.activateEvents.emit(this.activated.instance);
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)(Ei(_p), Ei(Zo), Ei(ao), Dn("name"), Ei(Lo));
            }),
            (e.ɵdir = Qe({
              type: e,
              selectors: [["router-outlet"]],
              outputs: {
                activateEvents: "activate",
                deactivateEvents: "deactivate",
              },
              exportAs: ["outlet"],
            })),
            e
          );
        })();
      class Rp {
        constructor(e, t, n) {
          (this.route = e), (this.childContexts = t), (this.parent = n);
        }
        get(e, t) {
          return e === id
            ? this.route
            : e === _p
            ? this.childContexts
            : this.parent.get(e, t);
        }
      }
      class Pp {}
      class Dp {
        preload(e, t) {
          return Xc(null);
        }
      }
      let Np = (() => {
          class e {
            constructor(e, t, n, r, s) {
              (this.router = e),
                (this.injector = r),
                (this.preloadingStrategy = s),
                (this.loader = new vp(
                  t,
                  n,
                  (t) => e.triggerEvent(new hh(t)),
                  (t) => e.triggerEvent(new dh(t))
                ));
            }
            setUpPreloading() {
              this.subscription = this.router.events
                .pipe(
                  Ru((e) => e instanceof rh),
                  ju(() => this.preload())
                )
                .subscribe(() => {});
            }
            preload() {
              const e = this.injector.get(Qo);
              return this.processRoutes(e, this.router.config);
            }
            ngOnDestroy() {
              this.subscription && this.subscription.unsubscribe();
            }
            processRoutes(e, t) {
              const n = [];
              for (const r of t)
                if (r.loadChildren && !r.canLoad && r._loadedConfig) {
                  const e = r._loadedConfig;
                  n.push(this.processRoutes(e.module, e.routes));
                } else
                  r.loadChildren && !r.canLoad
                    ? n.push(this.preloadConfig(e, r))
                    : r.children && n.push(this.processRoutes(e, r.children));
              return F(n).pipe(
                U(),
                x((e) => {})
              );
            }
            preloadConfig(e, t) {
              return this.preloadingStrategy.preload(t, () =>
                (t._loadedConfig
                  ? Xc(t._loadedConfig)
                  : this.loader.load(e.injector, t)
                ).pipe(
                  z(
                    (e) => (
                      (t._loadedConfig = e),
                      this.processRoutes(e.module, e.routes)
                    )
                  )
                )
              );
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)(Yn(kp), Yn(kl), Yn(el), Yn(pi), Yn(Pp));
            }),
            (e.ɵprov = ce({ token: e, factory: e.ɵfac })),
            e
          );
        })(),
        Mp = (() => {
          class e {
            constructor(e, t, n = {}) {
              (this.router = e),
                (this.viewportScroller = t),
                (this.options = n),
                (this.lastId = 0),
                (this.lastSource = "imperative"),
                (this.restoredId = 0),
                (this.store = {}),
                (n.scrollPositionRestoration =
                  n.scrollPositionRestoration || "disabled"),
                (n.anchorScrolling = n.anchorScrolling || "disabled");
            }
            init() {
              "disabled" !== this.options.scrollPositionRestoration &&
                this.viewportScroller.setHistoryScrollRestoration("manual"),
                (this.routerEventsSubscription = this.createScrollEvents()),
                (this.scrollEventsSubscription = this.consumeScrollEvents());
            }
            createScrollEvents() {
              return this.router.events.subscribe((e) => {
                e instanceof nh
                  ? ((this.store[this.lastId] =
                      this.viewportScroller.getScrollPosition()),
                    (this.lastSource = e.navigationTrigger),
                    (this.restoredId = e.restoredState
                      ? e.restoredState.navigationId
                      : 0))
                  : e instanceof rh &&
                    ((this.lastId = e.id),
                    this.scheduleScrollEvent(
                      e,
                      this.router.parseUrl(e.urlAfterRedirects).fragment
                    ));
              });
            }
            consumeScrollEvents() {
              return this.router.events.subscribe((e) => {
                e instanceof yh &&
                  (e.position
                    ? "top" === this.options.scrollPositionRestoration
                      ? this.viewportScroller.scrollToPosition([0, 0])
                      : "enabled" === this.options.scrollPositionRestoration &&
                        this.viewportScroller.scrollToPosition(e.position)
                    : e.anchor && "enabled" === this.options.anchorScrolling
                    ? this.viewportScroller.scrollToAnchor(e.anchor)
                    : "disabled" !== this.options.scrollPositionRestoration &&
                      this.viewportScroller.scrollToPosition([0, 0]));
              });
            }
            scheduleScrollEvent(e, t) {
              this.router.triggerEvent(
                new yh(
                  e,
                  "popstate" === this.lastSource
                    ? this.store[this.restoredId]
                    : null,
                  t
                )
              );
            }
            ngOnDestroy() {
              this.routerEventsSubscription &&
                this.routerEventsSubscription.unsubscribe(),
                this.scrollEventsSubscription &&
                  this.scrollEventsSubscription.unsubscribe();
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)(Yn(kp), Yn(dc), Yn(void 0));
            }),
            (e.ɵprov = ce({ token: e, factory: e.ɵfac })),
            e
          );
        })();
      const Fp = new Mn("ROUTER_CONFIGURATION"),
        jp = new Mn("ROUTER_FORROOT_GUARD"),
        Lp = [
          Zl,
          { provide: Fh, useClass: jh },
          {
            provide: kp,
            useFactory: function (e, t, n, r, s, i, o, a = {}, l, c) {
              const u = new kp(null, e, t, n, r, s, i, Eh(o));
              if (
                (l && (u.urlHandlingStrategy = l),
                c && (u.routeReuseStrategy = c),
                (function (e, t) {
                  e.errorHandler && (t.errorHandler = e.errorHandler),
                    e.malformedUriErrorHandler &&
                      (t.malformedUriErrorHandler = e.malformedUriErrorHandler),
                    e.onSameUrlNavigation &&
                      (t.onSameUrlNavigation = e.onSameUrlNavigation),
                    e.paramsInheritanceStrategy &&
                      (t.paramsInheritanceStrategy =
                        e.paramsInheritanceStrategy),
                    e.relativeLinkResolution &&
                      (t.relativeLinkResolution = e.relativeLinkResolution),
                    e.urlUpdateStrategy &&
                      (t.urlUpdateStrategy = e.urlUpdateStrategy);
                })(a, u),
                a.enableTracing)
              ) {
                const e = Nl();
                u.events.subscribe((t) => {
                  e.logGroup(`Router Event: ${t.constructor.name}`),
                    e.log(t.toString()),
                    e.log(t),
                    e.logGroupEnd();
                });
              }
              return u;
            },
            deps: [
              Fh,
              _p,
              Zl,
              pi,
              kl,
              el,
              yp,
              Fp,
              [class {}, new nr()],
              [class {}, new nr()],
            ],
          },
          _p,
          {
            provide: id,
            useFactory: function (e) {
              return e.routerState.root;
            },
            deps: [kp],
          },
          { provide: kl, useClass: Il },
          Np,
          Dp,
          class {
            preload(e, t) {
              return t().pipe(Nu(() => Xc(null)));
            }
          },
          { provide: Fp, useValue: { enableTracing: !1 } },
        ];
      function Wp() {
        return new vl("Router", kp);
      }
      let zp = (() => {
        class e {
          constructor(e, t) {}
          static forRoot(t, n) {
            return {
              ngModule: e,
              providers: [
                Lp,
                Vp(t),
                {
                  provide: jp,
                  useFactory: Up,
                  deps: [[kp, new nr(), new rr()]],
                },
                { provide: Fp, useValue: n || {} },
                {
                  provide: Bl,
                  useFactory: Hp,
                  deps: [Fl, [new tr(Ql), new nr()], Fp],
                },
                { provide: Mp, useFactory: qp, deps: [kp, dc, Fp] },
                {
                  provide: Pp,
                  useExisting:
                    n && n.preloadingStrategy ? n.preloadingStrategy : Dp,
                },
                { provide: vl, multi: !0, useFactory: Wp },
                [
                  Bp,
                  { provide: Fa, multi: !0, useFactory: $p, deps: [Bp] },
                  { provide: Gp, useFactory: Qp, deps: [Bp] },
                  { provide: Ua, multi: !0, useExisting: Gp },
                ],
              ],
            };
          }
          static forChild(t) {
            return { ngModule: e, providers: [Vp(t)] };
          }
        }
        return (
          (e.ɵfac = function (t) {
            return new (t || e)(Yn(jp, 8), Yn(kp, 8));
          }),
          (e.ɵmod = Be({ type: e })),
          (e.ɵinj = ue({})),
          e
        );
      })();
      function qp(e, t, n) {
        return n.scrollOffset && t.setOffset(n.scrollOffset), new Mp(e, t, n);
      }
      function Hp(e, t, n = {}) {
        return n.useHash ? new Kl(e, t) : new Gl(e, t);
      }
      function Up(e) {
        return "guarded";
      }
      function Vp(e) {
        return [
          { provide: Fn, multi: !0, useValue: e },
          { provide: yp, multi: !0, useValue: e },
        ];
      }
      let Bp = (() => {
        class e {
          constructor(e) {
            (this.injector = e),
              (this.initNavigation = !1),
              (this.resultOfPreactivationDone = new C());
          }
          appInitializer() {
            return this.injector.get(Ll, Promise.resolve(null)).then(() => {
              let e = null;
              const t = new Promise((t) => (e = t)),
                n = this.injector.get(kp),
                r = this.injector.get(Fp);
              return (
                "disabled" === r.initialNavigation
                  ? (n.setUpLocationChangeListener(), e(!0))
                  : "enabled" === r.initialNavigation ||
                    "enabledBlocking" === r.initialNavigation
                  ? ((n.hooks.afterPreactivation = () =>
                      this.initNavigation
                        ? Xc(null)
                        : ((this.initNavigation = !0),
                          e(!0),
                          this.resultOfPreactivationDone)),
                    n.initialNavigation())
                  : e(!0),
                t
              );
            });
          }
          bootstrapListener(e) {
            const t = this.injector.get(Fp),
              n = this.injector.get(Np),
              r = this.injector.get(Mp),
              s = this.injector.get(kp),
              i = this.injector.get(Cl);
            e === i.components[0] &&
              (("enabledNonBlocking" !== t.initialNavigation &&
                void 0 !== t.initialNavigation) ||
                s.initialNavigation(),
              n.setUpPreloading(),
              r.init(),
              s.resetRootComponentType(i.componentTypes[0]),
              this.resultOfPreactivationDone.next(null),
              this.resultOfPreactivationDone.complete());
          }
        }
        return (
          (e.ɵfac = function (t) {
            return new (t || e)(Yn(pi));
          }),
          (e.ɵprov = ce({ token: e, factory: e.ɵfac })),
          e
        );
      })();
      function $p(e) {
        return e.appInitializer.bind(e);
      }
      function Qp(e) {
        return e.bootstrapListener.bind(e);
      }
      const Gp = new Mn("Router Initializer");
      class Kp {}
      function Zp(e, t) {
        return { type: 7, name: e, definitions: t, options: {} };
      }
      function Jp(e, t = null) {
        return { type: 4, styles: t, timings: e };
      }
      function Yp(e, t = null) {
        return { type: 2, steps: e, options: t };
      }
      function Xp(e) {
        return { type: 6, styles: e, offset: null };
      }
      function ef(e, t, n) {
        return { type: 0, name: e, styles: t, options: n };
      }
      function tf(e) {
        return { type: 5, steps: e };
      }
      function nf(e, t, n = null) {
        return { type: 1, expr: e, animation: t, options: n };
      }
      function rf(e) {
        Promise.resolve(null).then(e);
      }
      class sf {
        constructor(e = 0, t = 0) {
          (this._onDoneFns = []),
            (this._onStartFns = []),
            (this._onDestroyFns = []),
            (this._started = !1),
            (this._destroyed = !1),
            (this._finished = !1),
            (this._position = 0),
            (this.parentPlayer = null),
            (this.totalTime = e + t);
        }
        _onFinish() {
          this._finished ||
            ((this._finished = !0),
            this._onDoneFns.forEach((e) => e()),
            (this._onDoneFns = []));
        }
        onStart(e) {
          this._onStartFns.push(e);
        }
        onDone(e) {
          this._onDoneFns.push(e);
        }
        onDestroy(e) {
          this._onDestroyFns.push(e);
        }
        hasStarted() {
          return this._started;
        }
        init() {}
        play() {
          this.hasStarted() || (this._onStart(), this.triggerMicrotask()),
            (this._started = !0);
        }
        triggerMicrotask() {
          rf(() => this._onFinish());
        }
        _onStart() {
          this._onStartFns.forEach((e) => e()), (this._onStartFns = []);
        }
        pause() {}
        restart() {}
        finish() {
          this._onFinish();
        }
        destroy() {
          this._destroyed ||
            ((this._destroyed = !0),
            this.hasStarted() || this._onStart(),
            this.finish(),
            this._onDestroyFns.forEach((e) => e()),
            (this._onDestroyFns = []));
        }
        reset() {}
        setPosition(e) {
          this._position = this.totalTime ? e * this.totalTime : 1;
        }
        getPosition() {
          return this.totalTime ? this._position / this.totalTime : 1;
        }
        triggerCallback(e) {
          const t = "start" == e ? this._onStartFns : this._onDoneFns;
          t.forEach((e) => e()), (t.length = 0);
        }
      }
      class of {
        constructor(e) {
          (this._onDoneFns = []),
            (this._onStartFns = []),
            (this._finished = !1),
            (this._started = !1),
            (this._destroyed = !1),
            (this._onDestroyFns = []),
            (this.parentPlayer = null),
            (this.totalTime = 0),
            (this.players = e);
          let t = 0,
            n = 0,
            r = 0;
          const s = this.players.length;
          0 == s
            ? rf(() => this._onFinish())
            : this.players.forEach((e) => {
                e.onDone(() => {
                  ++t == s && this._onFinish();
                }),
                  e.onDestroy(() => {
                    ++n == s && this._onDestroy();
                  }),
                  e.onStart(() => {
                    ++r == s && this._onStart();
                  });
              }),
            (this.totalTime = this.players.reduce(
              (e, t) => Math.max(e, t.totalTime),
              0
            ));
        }
        _onFinish() {
          this._finished ||
            ((this._finished = !0),
            this._onDoneFns.forEach((e) => e()),
            (this._onDoneFns = []));
        }
        init() {
          this.players.forEach((e) => e.init());
        }
        onStart(e) {
          this._onStartFns.push(e);
        }
        _onStart() {
          this.hasStarted() ||
            ((this._started = !0),
            this._onStartFns.forEach((e) => e()),
            (this._onStartFns = []));
        }
        onDone(e) {
          this._onDoneFns.push(e);
        }
        onDestroy(e) {
          this._onDestroyFns.push(e);
        }
        hasStarted() {
          return this._started;
        }
        play() {
          this.parentPlayer || this.init(),
            this._onStart(),
            this.players.forEach((e) => e.play());
        }
        pause() {
          this.players.forEach((e) => e.pause());
        }
        restart() {
          this.players.forEach((e) => e.restart());
        }
        finish() {
          this._onFinish(), this.players.forEach((e) => e.finish());
        }
        destroy() {
          this._onDestroy();
        }
        _onDestroy() {
          this._destroyed ||
            ((this._destroyed = !0),
            this._onFinish(),
            this.players.forEach((e) => e.destroy()),
            this._onDestroyFns.forEach((e) => e()),
            (this._onDestroyFns = []));
        }
        reset() {
          this.players.forEach((e) => e.reset()),
            (this._destroyed = !1),
            (this._finished = !1),
            (this._started = !1);
        }
        setPosition(e) {
          const t = e * this.totalTime;
          this.players.forEach((e) => {
            const n = e.totalTime ? Math.min(1, t / e.totalTime) : 1;
            e.setPosition(n);
          });
        }
        getPosition() {
          const e = this.players.reduce(
            (e, t) => (null === e || t.totalTime > e.totalTime ? t : e),
            null
          );
          return null != e ? e.getPosition() : 0;
        }
        beforeDestroy() {
          this.players.forEach((e) => {
            e.beforeDestroy && e.beforeDestroy();
          });
        }
        triggerCallback(e) {
          const t = "start" == e ? this._onStartFns : this._onDoneFns;
          t.forEach((e) => e()), (t.length = 0);
        }
      }
      class af {
        constructor(e, t) {
          (this.defaultTranscoder = e), (this.subject = t);
        }
        has(e) {
          return this.subject.has(e);
        }
        get(e, t) {
          return this.subject.get(e, t || this.defaultTranscoder);
        }
        set(e, t, n) {
          this.subject.set(e, t, n || this.defaultTranscoder);
        }
        remove(e) {
          this.subject.remove(e);
        }
        clear() {
          this.subject.clear();
        }
        withDefaultTranscoder(e) {
          return new af(e, this.subject);
        }
      }
      class lf {
        constructor(e) {
          this.defaultTranscoder = e;
        }
        get(e, t) {
          const n = this.getItem(e);
          return void 0 !== n
            ? (t || this.defaultTranscoder).decode(n)
            : void 0;
        }
        set(e, t, n) {
          this.setItem(e, (n || this.defaultTranscoder).encode(t));
        }
        withDefaultTranscoder(e) {
          return new af(e, this);
        }
      }
      const cf = {
        JSON: new (class {
          encode(e) {
            return JSON.stringify(e);
          }
          decode(e) {
            try {
              return JSON.parse(e);
            } catch (t) {
              return;
            }
          }
        })(),
        STRING: new (class {
          encode(e) {
            return e;
          }
          decode(e) {
            return e;
          }
        })(),
        BOOLEAN: new (class {
          encode(e) {
            return e.toString();
          }
          decode(e) {
            return "true" === e || ("false" !== e && void 0);
          }
        })(),
        NUMBER: new (class {
          encode(e) {
            return e.toString();
          }
          decode(e) {
            const t = Number(e);
            return Number.isFinite(t) ? t : void 0;
          }
        })(),
        DATE_ISO_STRING: new (class {
          encode(e) {
            return e.toISOString();
          }
          decode(e) {
            const t = Date.parse(e);
            return isNaN(t) ? void 0 : new Date(t);
          }
        })(),
        DATE_EPOCH_TIME: new (class {
          encode(e) {
            return e.valueOf().toString();
          }
          decode(e) {
            const t = parseInt(e, 10);
            return isNaN(t) ? void 0 : new Date(t);
          }
        })(),
      };
      class uf extends lf {
        constructor() {
          super(cf.JSON), (this.storage = new Map());
        }
        has(e) {
          return this.storage.has(e);
        }
        remove(e) {
          this.storage.delete(e);
        }
        clear() {
          this.storage.clear();
        }
        getItem(e) {
          if (this.storage.has(e)) return this.storage.get(e);
        }
        setItem(e, t) {
          this.storage.set(e, t);
        }
      }
      class hf extends lf {
        constructor(e) {
          super(cf.JSON), (this.storage = e);
        }
        has(e) {
          return null !== this.storage.getItem(e);
        }
        remove(e) {
          this.storage.removeItem(e);
        }
        clear() {
          this.storage.clear();
        }
        getItem(e) {
          const t = this.storage.getItem(e);
          return null !== t ? t : void 0;
        }
        setItem(e, t) {
          return this.storage.setItem(e, t);
        }
      }
      function df(e) {
        if (!e) return !1;
        try {
          const t = Date.now(),
            n = `storage-test-entry-${t}`,
            r = `storage-test-value-${t}`;
          e.setItem(n, r);
          const s = e.getItem(n);
          return e.removeItem(n), s === r;
        } catch (t) {
          return !1;
        }
      }
      new Mn("SESSION_STORAGE", {
        providedIn: "root",
        factory: function () {
          try {
            if ("undefined" != typeof sessionStorage && df(sessionStorage))
              return new hf(sessionStorage);
          } catch (e) {}
          return new uf();
        },
      });
      const pf = new Mn("LOCAL_STORAGE", {
        providedIn: "root",
        factory: function () {
          try {
            if ("undefined" != typeof localStorage && df(localStorage))
              return new hf(localStorage);
          } catch (e) {}
          return new uf();
        },
      });
      let ff = (() => {
        class e {
          constructor(e) {
            (this.storage = e),
              (this.userEntries = new fu([])),
              (this.repeatQuestions = new fu(!1)),
              (this.selectedLanguage = new fu(gf.GERMAN));
          }
          getUserEntries() {
            const e = this.storage.get(mf.USER_ENTRIES);
            return e && this.userEntries.next(e), this.userEntries;
          }
          setUserEntries(e) {
            this.storage.set(mf.USER_ENTRIES, e), this.userEntries.next(e);
          }
          getRepeatQuestions() {
            const e = this.storage.get(mf.REPEAT_QUESTIONS);
            return e && this.repeatQuestions.next(e), this.repeatQuestions;
          }
          setRepeatQuestions(e) {
            this.storage.set(mf.REPEAT_QUESTIONS, e),
              this.repeatQuestions.next(e);
          }
          getSelectedLanguage() {
            const e = this.storage.get(mf.SELECTED_LANGUAGE);
            return e && this.selectedLanguage.next(e), this.selectedLanguage;
          }
          setSelectedLanguage(e) {
            this.storage.set(mf.SELECTED_LANGUAGE, e),
              this.selectedLanguage.next(e);
          }
        }
        return (
          (e.ɵfac = function (t) {
            return new (t || e)(Yn(pf));
          }),
          (e.ɵprov = ce({ token: e, factory: e.ɵfac, providedIn: "root" })),
          e
        );
      })();
      var mf = (function (e) {
          return (
            (e.SELECTED_LANGUAGE = "SELECTED_LANGUAGE"),
            (e.REPEAT_QUESTIONS = "REPEAT_QUESTIONS"),
            (e.USER_ENTRIES = "USER_ENTRIES"),
            e
          );
        })({}),
        gf = (function (e) {
          return (
            (e.GERMAN = "GERMAN"),
            (e.ENGLISH = "ENGLISH"),
            (e.SPANISH = "SPANISH"),
            e
          );
        })({});
      const yf = {
          titleRandomGenerator: "Zufallsgenerator",
          subtitleRandomGenerator: "F\xfcr eigene Fragen etc.",
          buttonTextRandomPick: "Neue Auswahl",
          buttonTextNewQuestion: "Neue Frage",
          toggleSwitchTextRepeatQuestions: "Fragen wiederholen",
          toggleSwitchTextRepeatUserEntries: "Eintr\xe4ge wiederholen",
          checkin: {
            name: "Checkin",
            questions: [
              "Was ist mir besonders Sch\xf6nes in dieser Woche passiert?",
              "Was macht mich an meinem Beruf glu\u0308cklich?",
              "Warum k\xf6nnen sich meine Kolleg:innen/Schu\u0308ler:innen/TN glu\u0308cklich sch\xe4tzen, mit mir zu arbeiten?",
              "Wann habe ich das letzte Mal richtig laut gelacht und woru\u0308ber?",
              "Was haben meine Lehrer:innen wohl damals u\u0308ber mich gedacht und was wu\u0308rden sie heute sagen?",
              "Wen hat mein letzter Schneeball getroffen?",
              "Wobei bin ich abergl\xe4ubisch?",
              "Wen mochte ich lieber? Ernie oder Bert?",
              "Wie hei\xdft es richtig: Die Nutella oder das Nutella?",
              "Dar\xfcber kann ich fast immer l\xe4cheln.",
              "Welches Tier mag ich besonders? Und worin \xe4hneln wir uns?",
              "Worin w\xfcrde ich mich gerne verbessern?",
              "Was steht auf meiner ewigen To-Do-Liste?",
              "Was habe ich mir f\xfcr das kommende Wochenende vorgenommen?",
              "Strand oder Berge?",
              "Welches ist meine Lieblingsstadt?",
              "Habe ich schon mal was geklaut?",
              "Mit 1.000 \u20ac, die ich nur heute ausgeben darf, w\xfcrde ich \u2026",
              "Das habe ich im letzten Jahr \xfcber mich gelernt:",
              "Mit diesen drei Lebensmitteln k\xf6nnte ich mich ewig ern\xe4hren:",
              "Zu was sage ich heute ja?",
              "F\xfcr was war ich heute schon dankbar?",
              "Was ich an meiner T\xe4tigkeit liebe:",
              "Heute werde ich ...",
              "Was m\xf6chte ich in meinem Leben gerne mal ausprobieren?",
              "Was m\xfcsste heute passieren, damit der Tag perfekt wird?",
              "Ein sehr sch\xf6nes Geschenk, welches ich mal bekommen habe \u2026",
              "Was habe ich dieses Jahr hinter mir gelassen?",
              "Ein Lebensmotto von mir \u2026",
              "Wer oder was bekommt heute meine Aufmerksamkeit?",
              "Wenn meine aktuelle Stimmung ein Lied oder ein Film w\xe4re ...",
              "Welche Eigenschaften mag ich am liebsten an meinen Freund:innen?",
              "Worauf freue ich mich momentan besonders?",
              "Was fasziniert mich?",
              "Was war heute mein erster Gedanke?",
              "Auf was bin ich stolz?",
              "Was war das bislang Beste an diesem Tag?",
              "Mein Lieblingshobby \u2026",
              "Wen habe ich mal zuf\xe4llig im Ausland getroffen?",
              "Wie k\xf6nnen wir heute den gemeinsamen Tag perfekt gestalten?",
              "Warum bin ich heute hier?",
              "Welche Superheldenkraft h\xe4tte ich gern?",
              "Welches war die erste CD, die ich mir gekauft habe?",
              "Hund oder Katze?",
              "Was ist mein derzeitiges Lieblingsessen?",
              "Was ist mein derzeitiges Lieblingskleidungsst\xfcck?",
              "Welches Gericht habe ich zuletzt gekocht?",
              "Wenn ich ein Tier w\xe4re, dann am liebsten ein(e) ...",
              "Mein Anti-Hobby ist \u2026",
              "Mach jemandem hier aus der Runde spontan ein Kompliment.",
              "Welches Buch habe ich zuletzt gelesen?",
              "Ein Film- oder Serientipp ...",
              "Was w\xfcrde ich gerade tun, wenn ich nicht hier w\xe4re?",
              "Wo w\xe4re ich gerade gerne im Urlaub?",
              "Welche gro\xdfe Reise steht noch aus?",
              "Habe ich ein Vorbild oder Idol?",
              "Was wei\xdf ganz sicher noch niemand in dieser Runde \xfcber mich?",
              "Eine Information, die nur auf mich in dieser Runde zutreffen d\xfcrfte \u2026",
              "Ich habe noch niemals ...",
              "Meine Lieblingsjahreszeit \u2026",
              "Was war der schlimmste Job, den ich jemals hatte?",
              "Was m\xf6chte ich heute lernen?",
              "Welche meiner heutigen Charaktereigenschaften war auch schon in meiner Kindheit stark ausgepr\xe4gt?",
              "Damit m\xf6chte ich endlich aufh\xf6ren:",
              "Damit m\xf6chte ich endlich anfangen:",
              "Welches Wort sollten wir \xf6fter und welches seltener verwenden?",
              "Was bringt mich zur Wei\xdfglut?",
              "Eine meiner Schw\xe4chen \u2026",
              "Eine meiner St\xe4rken \u2026",
              "Was war ein guter Tipp, den ich mal bekommen habe?",
              "Was war ein guter Tipp, den ich mal gegeben habe?",
              "Welchen Gegenstand w\xfcrde ich aus meinem brennenden Haus retten?",
              "Welche drei Gegenst\xe4nde w\xfcrde ich auf eine einsame Insel mitnehmen?",
              "Meine Lieblingsfarbe \u2026",
              "Welches ist der sch\xf6nste Ort nahe meines Wohnorts?",
              "Das war meine gro\xdfe Leidenschaft als Kind \u2026",
              "Welche Farbe bin ich heute und warum?",
              "Mein bisheriges Highlight in dieser Woche:",
              "Was ist meine geometrische Lieblingsform und warum?",
              "Wenn ich nicht gerade hier w\xe4re, wo w\xe4re ich dann?",
              "Was gibt mir Energie?",
              "Wenn ich eine Fremdsprache \xfcber Nacht lernen k\xf6nnte, welche w\xfcrde ich mir aussuchen?",
              "Wer sollte in der Verfilmung meines Lebens die Hauptrolle spielen?",
              "Wie k\xf6nnte der Titel meiner Autobiografie hei\xdfen?",
              "Wann habe ich zum letzten Mal etwas zum allerersten Mal getan?",
              "Was kann ich \xfcberdurchschnittlich gut?",
              "Mit welcher ber\xfchmten Pers\xf6nlichkeit w\xfcrde ich gerne mal einen Tag lang tauschen?",
              "Welchen Beruf w\xfcrde ich gerne mal eine Woche lang ausprobieren?",
              "Welche drei Werte sind f\xfcr mich besonders wichtig?",
              "Unter diesen Bedingungen kann ich am besten lernen:",
              "Ein Held meiner Kindheit \u2026",
              "Wenn ich ein Gesetz erlassen d\xfcrfte, an das sich alle Menschen weltweit halten m\xfcssten \u2026",
              "Wie bin ich heute hier - und inwiefern ist das typisch oder ungew\xf6hnlich?",
              "Was waren drei wichtige Meilensteine in meiner Biografie?",
              "Welches ist mein Lieblingsort in meiner Wohnung?",
              "Welche Sportart schaue ich lieber, als dass ich sie selbst betreibe?",
              "Welches Musikgenre mag ich besonders und welches gar nicht?",
              "Das bereitet mir manchmal Kopfzerbrechen:",
              "Dabei kann ich besonders gut entspannen und mich erholen:",
              "Optimist oder Pessimist: Wie w\xfcrde ich mich selbst beschreiben?",
            ],
          },
          kennenlernen: {
            name: "Kennenlernen",
            questions: [
              "In welchem Ort bist du aufgewachsen?",
              "W\xfcrdest du alleine auf ein Konzert gehen? Was w\xfcrdest du niemals alleine tun und warum nicht?",
              "Hast du ein Lieblingsbuch? Falls ja: Warum gef\xe4llt es dir so gut?",
              "Hast du Geschwister?",
              "Urlaub: In die Berge oder lieber ans Meer?\xa0",
              "Welche Hobbys hattest du fr\xfcher, die du heute nicht mehr aus\xfcbst?",
              "Woran hast du mal geglaubt, was sich sp\xe4ter als falsch herausgestellt hat?",
              "Wenn du eine Million Euro gewinnen w\xfcrdest, was w\xfcrdest du tun?",
              "Kennst du die Geschichte hinter deinem Namen?",
              "Wenn du ein Tier w\xe4rest, was w\xe4rest du dann? Und warum?",
              "Welche drei Dinge w\xfcrdest du auf eine einsame Insel mitnehmen?\xa0",
              "Was ist dir in letzter Zeit passiert, wor\xfcber du dich total gefreut hast?",
              "Wenn du nochmal w\xe4hlen k\xf6nntest, welchen Beruf w\xfcrdest du erlernen?",
              "Spielst du ein Instrument oder w\xfcrdest du gerne eines spielen?",
              "Was war als Kind dein Traumberuf?\xa0",
              "Auf welches Essen w\xfcrdest du niemals verzichten wollen?",
              "Welche Eissorte isst du am liebsten?",
              "Kochst du gerne?",
              "Welches ist dein Lieblingsplatz bei dir zuhause?",
              "Was ist dein Lieblingshobby?",
              "Welche ist deine Lieblingsfarbe? Und hast du schon mal etwas nur wegen dieser Farbe gekauft?",
              "Hast du ein Idol oder Vorbild?",
              "Welche Musikrichtung h\xf6rst du?",
              "Wenn dich ein guter Freund oder eine gute Freundin beschreiben soll, was w\xfcrde er/sie als erstes sagen?",
            ],
          },
          entwederOder: {
            name: "Entweder oder",
            questions: [
              "Sekt oder Saft",
              "Bier oder Wein",
              "Rotwein oder Wei\xdfwein",
              "Berge oder Meer",
              "Mac oder Microsoft",
              "Katze oder Hund",
              "Stadt oder Land",
              "Auto oder Zug",
              "Ferienhaus oder Hotel",
              "Handy oder Smartphone",
              "Gem\xfcse oder Obst",
              "Disco oder Club",
              "Kochen oder bestellen",
              "Pizza oder Pasta\xa0",
              "Ski oder Snowboard",
              "Theater oder Kino",
              "Thriller oder Kom\xf6die",
              "Metal oder Klassik",
              "Camping\xa0oder Hotel",
              "Nadelwald oder Laubwald",
              "Schnee oder Sonne",
              "Wandern oder spazieren",
              "Erdbeere oder Kirsche",
              "Wurst oder K\xe4se",
              "S\xfc\xdfes oder herzhaftes Fr\xfchst\xfcck",
              "Brot oder M\xfcsli",
              "Musik oder Stille",
              "Paris oder London",
              "Kaffee oder Tee",
              "Holmes oder Watson",
              "Westernfilm oder Mittelalter-Epos",
              "Beatles oder Stones",
              "Rammstein oder Kelly Family",
              "Rosen oder Lilien",
              "Lagerfeuer oder Kamin",
              "Schaukel oder Wippe",
              "Zug oder Bus",
              "Herr der Ringe oder Harry Potter",
              "M\xfccke oder Schnake",
              "Moin oder Servus",
              "Alt oder K\xf6lsch",
              "Wei\xdfbrot oder Schwarzbrot",
              "Semmel oder Br\xf6tchen",
              "Fasching oder Karneval",
              "BigBlueButton oder Zoom",
              "Ketchup oder Mayo",
              "Fahrrad oder E-Bike",
              "Popcorn oder Nachos",
              "Schokolade oder Chips",
              "Singen oder Tanzen",
              "Butter oder Margarine",
              "Fr\xfchaufsteher oder Nachteule",
              "E-Mail oder Brief",
              "Eis im Becher oder in der Waffel",
              "Handy oder Festnetz",
              "Joggen oder Fitnessstudio",
              "Helau oder Alaaf",
            ],
          },
          zielsetzung: {
            name: "Zielsetzung",
            questions: [
              "Was ist der n\xe4chste Schritt?",
              "Was ist das Reizvolle an diesem Ziel?",
              "Wie l\xe4sst sich das Ziel am wahrscheinlichsten erreichen?",
              "Was muss geschehen, damit das Ziel klarer wird?",
              "Wie l\xe4sst sich das Ziel in einem Satz beschreiben?",
              "Was kann ich tun, damit ich das Ziel nicht erreiche?\xa0",
              "Auf einer Skala von 0 (gar nicht) bis 10 (sehr stark): Wie sehr m\xf6chte ich dieses Ziel erreichen?",
              "Auf einer Skala von 0 (gar nicht) bis 10 (sehr stark): Wie sehr glaube ich, kann ich dieses Ziel mit meinen aktuellen Mitteln erreichen?",
              "Wer w\xfcrde sich dar\xfcber freuen, wenn ich das Ziel erreiche?",
              "Wer w\xfcrde sich dar\xfcber freuen, wenn ich das Ziel nicht erreiche?",
              "Gibt es Konkurrenzziele, die ich zeitgleich ebenfalls gerne verfolgen w\xfcrde?",
              "Wie lange glaube ich, wird es dauern, bis ich das Ziel erreiche?",
              "Gibt es Abstufungen f\xfcr mein Ziel (z. B. im Sinne von Schulnoten: Wie s\xe4he ein Ergebnis aus, das ich mit der Note 3 bewerten w\xfcrde, wie eines mit Note 2 usw.)?",
              "Wer w\xfcrde merken, wenn das Ziel erreicht wurde?",
              "Gibt es einen Zeitplan f\xfcr die Zielerreichung?",
              "Wie realistisch ist das Ziel?",
              "Was brauche ich von au\xdfen, um das Ziel zu erreichen?",
              "Wie l\xe4sst sich \xfcberpr\xfcfen, ob das Ziel erreicht wurde?",
              "Ist das Ziel eher ein Fernziel oder ein Teilziel?",
              "Ist das Ziel flexibel oder unver\xe4nderlich?",
              "Seit wann verfolge ich das Ziel? Wie kam es dazu?",
              "Habe ich schon einmal ein \xe4hnliches Ziel verfolgt? Mit welchem Ergebnis?",
              "Ist das Ziel eher ein berufliches, ein privates oder von beidem etwas?",
              "Wer oder was hat mich dazu angeregt, dieses Ziel zu verfolgen?",
              "Gibt es jemanden, der/die das Ziel noch viel st\xe4rker verfolgt als ich?",
              "Kommt das Ziel eher von innen oder von au\xdfen?",
              "Kenne ich jemanden, der/die ein solches Ziel schon mal erreicht hat? Wie hat er/sie das geschafft?",
              "Welche Kompetenzen oder Eigenschaften bringe ich mit, die der Zielerreichung dienlich sein k\xf6nnen?",
              "Wenn ich jemandem das Ziel in einem Bild oder einer Metapher beschreiben sollte: Was w\xfcrde mir dazu einfallen?",
              "Was ist mir dabei wichtiger: Das Ziel oder der Weg dorthin?",
              "Von wem ben\xf6tige ich Unterst\xfctzung, um das Ziel zu erreichen?",
              "Welche Ressourcen braucht es, um das Ziel zu erreichen?",
            ],
          },
          teamarbeit: {
            name: "Teamarbeit",
            questions: [
              "An unseren Arbeitspl\xe4tzen brauchen wir auf jeden Fall ...\xa0",
              "Im letzten Jahr hat sich Folgendes ge\xe4ndert:",
              "In Zukunft treffen wir Entscheidungen, indem wir ...\xa0",
              "Wir sollten als Team in diesem Jahr auf jeden Fall ...\xa0",
              "Ich komme montags mit einem L\xe4cheln zur Arbeit, wenn ...",
              "Ich brauche noch ..., um mich im Team wohler zu f\xfchlen.",
              "Ich w\xfcrde das Team verlassen, wenn ...",
              "In einem Jahr werde ich stolz auf unsere Teamarbeit zur\xfcckschauen, weil ...",
              "Ich m\xf6chte zuk\xfcnftig im Team die Rolle als ... wahrnehmen.",
              "Was wir definitiv lassen sollten, ist ...\xa0",
              "Ich werde zu einer guten Arbeitsatmosph\xe4re beitragen, indem ich ...",
              "Folgende Perspektive fehlt in unserem Team aktuell:\xa0",
              "Ich brauche ..., um meine Arbeit gut erledigen zu k\xf6nnen.",
              "Wir sollten aufh\xf6ren mit ...",
              "Wir brauchen mehr von ...",
              "An meinem Team sch\xe4tze ich besonders ...\xa0",
              "Erfolgreiche Teamarbeit wird im Wesentlichen beeinflusst von ...",
            ],
          },
          kontroversen: {
            name: "Kontroversen",
            questions: [
              "Soll die t\xe4gliche Nutzungsdauer von Netflix und Co. gesetzlich beschr\xe4nkt werden?",
              "Sollen E-Scooter in allen St\xe4dten verboten werden?",
              "Sollen s\xe4mtliche Univorlesungen per Video aufgezeichnet werden?",
              "Brauchen wir den 6-Stunden-Arbeitstag?",
              "Brauchen wir ein bedingungsloses Grundeinkommen?",
              "Soll das Rauchen in der \xd6ffentlichkeit verboten werden?",
              "Brauchen wir ein verpflichtendes soziales Jahr?",
              "Brauchen wir ein Recht auf Feierabend?",
              "Brauchen wir ein Tempolimit von 130 km/h auf der Autobahn?",
              "Brauchen wir eine Helmpflicht f\xfcr Fahrradfahrer?",
              "Soll das Betteln in Innenst\xe4dten verboten werden?",
              "Sollen Hausaufgaben abgeschafft werden?",
              "Sollte sich das Gehalt von Politiker:innen am Durchschnittseinkommen der B\xfcrger:innen ihres Landes orientieren?",
              "Soll das anonymisierte Bewerbungsverfahren gesetzlich verpflichtend sein?",
              "Brauchen wir die Schuluniform?",
              "Brauchen wir die Null-Promille-Grenze im Stra\xdfenverkehr?",
              "Sollen Sch\xf6nheitswettbewerbe (wie z. B. Miss-Wahlen) verboten werden?",
            ],
          },
          gruppenreflexion: {
            name: "Gruppenreflexion",
            questions: [
              "Wie habe ich unsere Gruppenarbeit erlebt?",
              "Hat sich jeder einbringen k\xf6nnen?",
              "Wie zufrieden bin ich mit unserem Ergebnis?",
              "Sind wir arbeitsteilig vorgegangen? Wie hat das funktioniert?",
              "Was hat gut geklappt?",
              "Was k\xf6nnten wir beim n\xe4chsten Mal besser machen?",
              "Was sollten wir als Gruppe beibehalten?",
              "Gab es etwas, das mich irritiert hat?",
              "Was hat mich \xfcberrascht?",
              "Was fiel uns leicht?",
              "Womit hatten wir Schwierigkeiten?",
              "Wo k\xf6nnten wir noch einen Tipp gebrauchen?",
              "Was h\xe4tte wohl ein Au\xdfenstehender gedacht, wenn er uns beobachtet h\xe4tte?",
              "Wie haben wir uns koordiniert und abgestimmt?",
              "Wie habe ich die Atmosph\xe4re w\xe4hrend der Gruppenarbeit erlebt?",
            ],
          },
          checkout: {
            name: "Checkout",
            questions: [
              "Was nehme ich mir konkret als n\xe4chstes vor?",
              "Was ist heute h\xe4ngen geblieben?",
              "Das hat mich heute gefreut:",
              "Das nehme ich f\xfcr mich mit:",
              "Das hat mich heute erstaunt:",
              "Das hat mich heute inspiriert:",
              "Das m\xf6chte ich gerne noch einmal machen:",
              "Mit welchen Gedanken beende ich den heutigen Tag?",
              "Das hat mich heute positiv \xfcberrascht:",
              "Was hat mir heute imponiert?",
              "Was sind meine n\xe4chsten drei Schritte?",
              "Was konnte ich heute an mir selbst beobachten?",
              "Welchen Satz m\xf6chte ich noch loswerden?",
              "Ein Lob f\xfcr eine Person f\xfcr einen klugen Satz oder eine gute Aktion.",
              "Wie ging es mir heute zum Einstieg und wie es geht es mir jetzt?",
              "Nach dem heutigen Tag denke ich ...",
              "Worauf lag heute mein Hauptaugenmerk?",
              "Wenn meine jetzige Verfassung ein Tier w\xe4re, welches w\xe4re es?",
              "Was war heute besonders gewinnbringend?",
              "Ein Highlight war heute f\xfcr mich \u2026",
              "Was lasse ich heute hier?",
              "Was m\xf6chte ich als n\xe4chstes ausprobieren oder umsetzen?",
              "Wovon br\xe4uchte ich mehr?",
              "Wovon br\xe4uchte ich weniger?",
              "Was werde ich das n\xe4chste Mal anders machen?",
              "Heute war ich ...",
              "Welches Problem konnte ich heute l\xf6sen oder angehen?",
              "Wie zufrieden bin ich heute mit mir?",
              "Womit werde ich mich f\xfcr meine heutige Teilnahme belohnen?",
              "Was war heute der wertvollste Fehler?",
              "Welches Wort sollten wir das n\xe4chste Mal seltener verwenden?",
              "Womit m\xf6chte ich heute noch die meiste Zeit verbringen?",
              "Ich habe mich heute sehr wohl gef\xfchlt, als ...",
              "Was ist immer noch frustrierend f\xfcr mich?",
              "Was habe ich heute vermisst?",
              "Wo sehe ich noch Entwicklungspotenzial?",
              "Wor\xfcber musste ich heute l\xe4cheln?",
              "Welcher Beitrag eines Teammitglieds war heute besonders wertvoll?",
              "Wann habe ich heute meine Komfortzone verlassen?",
              "Was m\xf6chte ich der Runde noch sagen?",
              "Was fiel mir heute leicht?",
              "F\xfcr ein n\xe4chstes Mal w\xfcrde ich mir w\xfcnschen ...",
              "Was h\xe4tten wir heute mit einer Extra-Stunde anfangen sollen?",
              "Was war heute meine gr\xf6\xdfte Herausforderung?",
              "Wor\xfcber werde ich weiter nachdenken?",
              "Nach dem heutigen Tag f\xfchle ich mich vorbereitet f\xfcr ...",
              "Was ist mir heute deutlicher geworden?",
              "Was werde ich ab sofort \xe4ndern?",
              "Was werde ich weiterhin beibehalten?",
              "Welchen Vorsatz nehme ich mir heute mit?",
              "Wem werde ich von heute berichten?",
              "Welche drei Adjektive fallen mir zu heute ein?",
              "Was sehe ich jetzt klarer?",
              "Womit darf/sollte/muss ich mich noch weitergehend befassen?",
              "Was ist mein zentrales Learning von heute?",
              "Woran werde ich mich nach dem heutigen Tag erinnern?",
            ],
          },
        },
        vf = {
          titleRandomGenerator: "Random generator",
          subtitleRandomGenerator: "For custom questions etc.",
          buttonTextRandomPick: "New selection",
          buttonTextNewQuestion: "New questions",
          toggleSwitchTextRepeatQuestions: "Repeat questions",
          toggleSwitchTextRepeatUserEntries: "Repeat entries",
          checkin: {
            name: "Checkin",
            questions: [
              "What beautiful happened to me this week?",
              "What makes me happy about my job?",
              "Why can my colleagues/classmates/pupils/participants be happy to work with me?",
              "When did I laugh out loud the last time and why?",
              "What did my teachers think of me and what would they think of me today?",
              "Who was hit by my last snowball?",
              "In which situations am I superstitious?",
              "Do/Did I prefer Ernie or Bert?",
              "What's the proper article: 'Die' Nutella or 'das' Nutella?",
              "Something that makes me smile nearly every time.",
              "Which animal do I really like? In how far are we similar to each other?",
              "What would I like to get better at?",
              "What is on my eternal to-do-list?",
              "What are my plans for the upcoming weekend?",
              "Beach or mountains?",
              "Which is my favourite city?",
              "Have I ever stolen something?",
              "If I had 1000,- Euros I could only spend today I would\u2026",
              "That did I learn about myself in the past year:",
              "I could nourish myself with these three different food for a lifetime:",
              "What will I say yes to today?",
              "What was I thankful for today?",
              "What I love about my occupation is:",
              "Today I will\u2026",
              "What would I like to try in my life?",
              "What has to happen to make this day perfect?",
              "A very nice present I once received\u2026",
              "What did I leave behind this year?",
              "A philosophy of life of me\u2026",
              "Who or what will get my attention today?",
              "If my current mood was a song or a movie\u2026",
              "Which character trait do I appreciate most about my friends?",
              "What do I really look forward to?",
              "What fascinates me?",
              "What was my first thought today?",
              "What am I proud of?",
              "What was the best about my day so far?",
              "My favourite hobby\u2026",
              "Whom did I accidentally meet abroad?",
              "How could we create our shared day perfectly?",
              "Why am I here today?",
              "Which superpower would I like to have?",
              "What was the first CD I ever bought?",
              "Dog or cat?",
              "What is my current favourite food?",
              "What is my current favourite piece of clothes?",
              "Which dish did I cook last?",
              "If I were an animal I'd prefer to be a\u2026",
              "My anti-hobby is...",
              "Compliment somebody in this round.",
              "Which book did I read last?",
              "A movie or a series recommendation\u2026",
              "What would I do if I wasn't here \u2026",
              "Where would I like to be on holiday at the moment?",
              "Which big journey is still ahead?",
              "Do I have a role model or an idol?",
              "What does nobody in this round know about me?",
              "A piece of information that would only apply to me in this round\u2026",
              "I never have\u2026",
              "My favourite season\u2026",
              "What is the worst job I ever had?",
              "What would I like to learn today?",
              "Which of my current character traits was already distinctive in my childhood?",
              "Something I would finally like to end:",
              "Something I would finally like to start:",
              "Which word should we use more and which one less?",
              "What drives me mad?",
              "One of my weaknesses \u2026",
              "One of my strengths \u2026",
              "What was a good advice I once received?",
              "What was a good advice I once gave?",
              "Which thing would I rescue from my burning house?",
              "Which three things would I take with me to a lonely island?",
              "My favourite colour \u2026",
              "Which is the most beautiful place near my place of residence?",
              "That used to be my great passion as a child \u2026",
              "Which colour am I today and why?",
              "My highlight this week up to now:",
              "What is my favourite geometrical shape and why?",
              "If I was not here right now, I would be in/at\u2026",
              "What offers me power?",
              "If I could learn a foreign language over night, which language would I choose?",
              "Who should star in the film adaption of my life? ",
              "What could be the title of my autobiography?",
              "When was the last time I did something for the first time?",
              "What can I do above-average?",
              "With which famous person would I like to switch for a day?",
              "Which job would I like to try for a week?",
              "Which three values matter a lot to me?",
              "These conditions support my ability to learn:",
              "One of my childhood heroes\u2026",
              "If I was to pass a law which all people had to abide worldwide \u2026",
              "How am I here today - in how far is typical of me or special?",
              "What had been the three most important milestones in my autobiography?",
              "Which is my favourite place in my home?",
              "Which sport would I rather watch than do?",
              "Which musical genre do I really like and which not?",
              "What is sometimes a real worry to me?",
              "Something that helps me relax and recover:",
              "Optimist or pessimist: How would I describe myself?",
            ],
          },
          kennenlernen: {
            name: "Get to know",
            questions: [
              "Where did you grow up?",
              "Would you go to a concert on your own? Is there anything you would never do on your own? Say why!",
              "Do you have a favourite book? If so, why do you like it that much?",
              "Do you have siblings?",
              "Holidays: Mountains or sea?",
              "Which hobbies did you use to have and do not have anymore today?",
              "What did you once believe in that turned out to be wrong?",
              "What would you do if you won a million euros?",
              "Do you know the story behind your name?",
              "If you were an animal, which would it be and why?",
              "Which three things would you take with you to a lonely island?",
              "What happened to you recently that made you really happy?",
              "If you had the chance to choose again: Which job would you like to learn?",
              "Do you play an instrument or would you like to play one?",
              "What was your dream job when you were a child?",
              "Which food couldn't you live without?",
              "Which is your favourite ice cream flavour?",
              "Do you enjoy cooking?",
              "Which is your favourite corner in your home?",
              "What is your favourite hobby?",
              "What is your favourite colour? Have you ever bought anything just because of the colour?",
              "Do you have an idol or a role model?",
              "Which kind of music do you prefer listening to?",
              "What is the first thing a good friend would say to describe you?",
            ],
          },
          entwederOder: {
            name: "Either or",
            questions: [
              "Sparkling wine or juice",
              "Beer or wine",
              "Red or white wine",
              "Mountains or the sea",
              "Apple or Windows",
              "Cat or dog",
              "City or countryside",
              "Car or train",
              "Holiday house or hotel",
              "Mobile phone or smartphone",
              "Vegetables or fruit",
              "Disco or club",
              "Cooking or takeaway",
              "Pizza or pasta",
              "Skiing or snowboarding",
              "Theatre play or cinema ",
              "Thriller or comedy",
              "Metal or classic",
              "Camping or hotel",
              "fir tree or oak",
              "Snow or sunshine",
              "Hiking or going for a walk",
              "Strawberry or cherry",
              "Sausages or cheese",
              "Sweet or hearty dishes",
              "Bread or muesli",
              "Music or silence",
              "Paris or London",
              "Coffee or tea",
              "Holmes or Watson",
              "Western movie or medieval movie",
              "Beatles or Stones",
              "Justin Bieber or Lady Gaga",
              "Roses or lillies",
              "Bonfire or chimney",
              "Swing or seesaw",
              "Train or bus",
              "Lord of the rings or Harry Potter",
              "Mosquito or crane fly",
              "Moin or servus",
              "Alt or K\xf6lsch",
              "White or brown bread",
              "Semmel or br\xf6tchen",
              "Fasching or Karneval",
              "Bigbluebutton or Zoom",
              "Ketchup or mayo",
              "Bike or e-bike",
              "Popcorn or nachos",
              "Chocolate or crisps",
              "Singing or dancing",
              "Butter or margarine",
              "Early riser or night owl",
              "Email or letter",
              "Sundae or cornet ice cream",
              "Mobile phone or landline",
              "Running or gym",
              "Helau or Alaaf",
            ],
          },
          zielsetzung: {
            name: "Objectives",
            questions: [
              "What is the next step?",
              "Why is our/my goal attractive?",
              "How is our/my goal most likely achievable?",
              "What has to be done to make our/my goal clear?",
              "How can our/my goal be described in one single sentence?",
              "What can I do NOT to reach our goal?",
              "On scale of 0 (not at all) to 10 (strongly): How much do I want to reach our/my goal?",
              "On scale of 0 (not at all) to 10 (strongly): How much do I believe to reach our/my goal on the basis of my current means?",
              "Who would be happy if I reached our/my goal?",
              "Who would be happy if I did not reach our/my goal?",
              "Are there competing goals I would like to reach as well?",
              "How long do I expect does it take me to reach our/my goal? ",
              "Are there graduations for my goal (as in school grades): What would an A-graded aim look like, what would a C-graded aim look like and so forth\u2026?",
              "Who would notice if I reached my goal?",
              "Is there a time schedule for my goal?",
              "How realistic is our/my goal?",
              "What kind of help (from others/elsewhere) do I need? ",
              "How can be checked if our/my aim has been achieved?",
              "Is my goal a part of a goal or a goal on its own?",
              "Is my goal flexible or static?",
              "Since when do I pursue my goal? What made me pursue this goal?",
              "Have I ever pursued a similar goal (as I do now)? What was its result?",
              "Is it a private or a professional goal or both?",
              "Who or what made me pursue this goal? ",
              "Is there anybody pursuing this goal more than me?",
              "Is this an intrinsic or extrinsic goal?",
              "Do I know anybody who has already reached this goal? How did he/she reach it?",
              "Which skills and character traits do I have that make me able to reach my goal?",
              "If I had to describe this goal as a picture or a metaphor: What would cross my mind?",
              "What is more important to me: My goal or the way to reach it?",
              "Who do I need to support me to reach my goal?",
              "Which resources does it take to reach my goal?",
            ],
          },
          teamarbeit: {
            name: "Teamwork",
            questions: [
              "At our workplaces we definitely need ... ",
              "In the last year the following has changed:",
              "In the future we will make decisions by ... ",
              "As a team this year we should definitely ... ",
              "I come to work on Mondays with a smile when ...",
              "I still need ... to feel more comfortable in my team.",
              "I would leave the team if ...",
              "A year from now I will look back proudly on our teamwork because ...",
              "In the future I would like to play the role of ... in my team.",
              "What we should definitely avoid is ... ",
              "I will contribute to a good working atmosphere by ...",
              "The following perspective is currently missing in our team: ",
              "I need ... to be able to do my job well.",
              "We should quit ...",
              "We need more of ...",
              "What I particularly appreciate about my team is ... ",
              "Successful teamwork is essentially influenced by ...",
            ],
          },
          kontroversen: {
            name: "Controversies",
            questions: [
              "Should the daily use of Netflix etc. be restricted by law?",
              "Should e-scooters be banned from all cities?",
              "Should all university lectures get filmed?",
              "Do we need a 6-hour workday?",
              "Do we need an unconditinional basic income?",
              "Should smoking in public be forbidden?",
              "Do we need an obligatory social year?",
              "Do we need a right to have a 'closing time'?",
              "Do we need a speed limit of 130 km/h on the highway?",
              "Should helmets be mandatory for cyclists?",
              "Should begging be forbidden in city centers?",
              "Should homework be abolished?",
              "Should the salary of politicians be based on the average income of the citizens of their country?",
              "Should job applications be anonymous by law?",
              "Should school uniforms be mandatory?",
              "Do we need a zero-alcohol-level on the roads?",
              "Should beauty contests (such as pageants) be forbidden?",
            ],
          },
          gruppenreflexion: {
            name: "Group reflection",
            questions: [
              "How did I experience our group work?",
              "Was everyone able to contribute?",
              "How satisfied am I with our results?",
              "Did we work in a division of labor? How did it work?",
              "What worked well?",
              "What could we do better next time?",
              "What should we keep doing/being as a group?",
              "Was there anything that irritated me?",
              "What surprised me?",
              "What was easy for us?",
              "What did we have difficulty with?",
              "Where could we use some advice?",
              "What would an outsider have thought if he/she had observed us?",
              "How did we coordinate and align ourselves?",
              "How did I experience the atmosphere during the group work?",
            ],
          },
          checkout: {
            name: "Checkout",
            questions: [
              "What is my precise next step?",
              "What did I get caught on today?",
              "That made me happy today:",
              "That is what I want to keep:",
              "That was astonishing for me happy today:",
              "That inspired me today:",
              "That is something I would like to do again:",
              "What will be my last thought today?",
              "That was a positive surprise today:",
              "That was impressive today:",
              "Which three steps will I take next?",
              "What was I able to observe about myself today?",
              "Which sentence would I like to get off my chest?",
              "A compliment to a person for a clever sentence or a good action.",
              "How did I feel at the beginning of today and how do I feel now?",
              "After today I think\u2026",
              "What was my primary focus today?",
              "If my current mood was be an animal, it would be a\u2026",
              "What was advantageous for me today?",
              "One of today's highlights today was\u2026",
              "What do I leave behind here today?",
              "What do I want to try or do next?",
              "What do I need more of?",
              "What do I need less of?",
              "What will I do differently next time?",
              "Today I was\u2026.",
              "Which problem could I solve today?",
              "How satisfied am I about myself today?",
              "How will I reward myself for participating today?",
              "What was today's most precious mistake?",
              "Which word should we use less next time?",
              "What do I want to spend most of today's time with?",
              "I felt quite well today when...",
              "What do I still regard as frustrating?",
              "What did I miss?",
              "Where do I see potential of development?",
              "What could I smile about today?",
              "Which contribution of another participant was extraordinary worthwhile for me today?",
              "When did I leave my comfort zone today?",
              "What do I want to tell this group?",
              "What was easy for me today?",
              "Next time I hope for\u2026",
              "What could we have done with an extra hour today?",
              "What was my greatest challenge today?",
              "What will I keep thinking about?",
              "After today I feel prepared for\u2026",
              "What became clearer for me today?",
              "What will I change from now on?",
              "What will I keep doing?",
              "Which resolution will I take on today?",
              "Whom will I tell about today?",
              "Which three adjectives do I connect with today?",
              "What do I see clearer now?",
              "What will I have to / want to / need to keep dealing with?",
              "What is my main learning of today? ",
              "What will I remember after today?",
            ],
          },
        },
        bf = {
          titleRandomGenerator: "Generador aleatorio",
          subtitleRandomGenerator: "Para preguntas personalizadas, etc.",
          buttonTextRandomPick: "Nueva selecci\xf3n",
          buttonTextNewQuestion: "Nueva pregunta",
          toggleSwitchTextRepeatQuestions: "Repetir preguntas",
          toggleSwitchTextRepeatUserEntries: "Repetir entradas",
          checkin: {
            name: "Checkin",
            questions: [
              "\xbfQu\xe9 me ha pasado esta semana realmente especial?",
              "\xbfQu\xe9 me satisface de mi trabajo?",
              "\xbfPor qu\xe9 mis colegas/ alumnado/ TN se pueden sentir bien/comodos trabajando conmigo?",
              "\xbfCu\xe1ndo y sobre qu\xe9 me re\xed con ganas por \xfaltima vez?",
              "\xbfQu\xe9 pensaban sobre m\xed mis profesores y que dir\xedan hoy?",
              "\xbfQui\xe9n fue topado/golpeado por mi \xfaltima bola de nieve?",
              "\xbfEn que ocasiones me muestro supersticioso?",
              "\xbfA qui\xe9n prefiero: A Epi o a Blas?",
              "\xbfC\xf3mo se dice correctamente: Die Nutella o Das Nutella?",
              "Algo que siempre me hace re\xedr.",
              "\xbfQu\xe9 animal me gusta m\xe1s? \xbfEn qu\xe9 nos parecemos?",
              "\xbfEn qu\xe9 me gustar\xeda mejorar?",
              "\xbfQu\xe9 aparece en mi eterna lista de cosas que hacer?",
              "\xbfCu\xe1les son mis planes para el pr\xf3ximo fin de semana?",
              "\xbfPlaya o monta\xf1a?",
              "\xbfCu\xe1l es mi ciudad favorita?",
              "\xbfAlguna vez he robado algo?",
              "Si tuviera 1000 Euros para gastar solo hoy, har\xeda ...",
              "Eso lo aprend\xed sobre m\xed mismo el pasado a\xf1o:",
              "Con esos tres alimentos me podr\xeda alimentar siempre.",
              "\xbfA qu\xe9 dir\xeda hoy s\xed?",
              "\xbfPor qu\xe9 me siento hoy agradecido?",
              "Lo que me encanta de mi profesi\xf3n es:",
              "Hoy har\xe9 ...",
              "\xbfQu\xe9 me gustar\xeda probar en la vida?",
              "\xbfQu\xe9 deber\xeda pasar hoy, para qu\xe9 el d\xeda fuera perfecto?",
              "Un regalo muy bonito, que alguna vez he recibido....",
              "\xbfQu\xe9 he dejado atr\xe1s este a\xf1o?",
              "Mi filosof\xeda de vida:",
              "\xbfQui\xe9n o qu\xe9 capta hoy mi atenci\xf3n?",
              "Si mi humor de hoy fuera una canci\xf3n o una pel\xedcula, ser\xeda ...",
              "\xbfQu\xe9 cualidades prefiero en mis amistades?",
              "\xbfSobre qu\xe9 me alegro especialmente en estos momentos?",
              "\xbfQu\xe9 me fascina?",
              "\xbfCu\xe1l fue hoy mi primer pensamiento?",
              "\xbfDe qu\xe9 me siento orgulloso?",
              "\xbfQu\xe9 ha sido, hasta el momento, lo mejor del d\xeda?",
              "Mi afici\xf3n preferida...",
              "\xbfA qui\xe9n encontr\xe9 por casualidad en el extranjero?",
              "\xbfC\xf3mo podr\xedamos hoy planear perfectamente nuestro d\xeda juntos?",
              "\xbfPor qu\xe9 estoy aqu\xed hoy?",
              "\xbfQu\xe9 superpoder me gustar\xeda tener?",
              "\xbfCu\xe1l fue el primer CD que me compr\xe9?",
              "\xbfPerro o gato?",
              "\xbfCu\xe1l es, ahora mismo, mi comida favorita?",
              "\xbfCu\xe1l es, ahora mismo, mi prenda de ropa favorita?",
              "\xbfQu\xe9 plato cocin\xe9 la \xfaltima vez?",
              "Si fuera un animal, preferir\xeda ser...",
              "Mi anti-hobby es...",
              "Haz un cumplido a alguien de la reuni\xf3n.",
              "\xbfCu\xe1l es el \xfaltimo libro que he le\xeddo?",
              "Una recomendaci\xf3n de una pel\xedcula o de una serie.",
              "\xbfQu\xe9 estar\xeda haciendo ahora, si no estuviera aqu\xed?",
              "\xbfD\xf3nde estar\xeda ahora de vacaciones?",
              "Un gran viaje a\xfan por planificar ...",
              "\xbfTengo un modelo o \xeddolo?",
              "\xbfQu\xe9 es lo que nadie de esta reuni\xf3n conoce de m\xed?",
              "Una informaci\xf3n que, en esta reuni\xf3n, solo es palicable a m\xed \u2026",
              "Nunca he ...",
              "Mi estaci\xf3n del a\xf1o favorita:",
              "\xbfCu\xe1l fue el peor trabajo que he tenido?",
              "\xbfQu\xe9 me gustar\xeda aprender hoy?",
              "\xbfCu\xe1l de mis rasgos de personalidad ya estaba presente en mi infancia?",
              "Algo con lo que me gustar\xeda, por f\xedn, terminar.",
              "Algo que me gustar\xeda, por fin, empezar.",
              "\xbfQu\xe9 palabra deber\xedamos usar con m\xe1s o menos frecuencia?",
              "\xbfQu\xe9 me saca de quicio?",
              "Una de mis debilidades ...",
              "Una de mis fortalezas ...",
              "\xbfQu\xe9 buen consejo he recibido alguna vez?",
              "\xbfQu\xe9 buen consejo he dado alguna vez?",
              "\xbfQu\xe9 objeto rescatar\xeda de mi casa en llamas?",
              "\xbfQu\xe9 tres objetos llevar\xeda conmigo a una isla desierta?",
              "Mi color favorito ...",
              "\xbfCu\xe1l es el lugar m\xe1s bonito en los alrededores de donde vivo?",
              "Esa era mi pasi\xf3n de ni\xf1o ...",
              "\xbfDe qu\xe9 color me siento hoy y por qu\xe9?",
              "Mi acontecimiento m\xe1s importante de la semana ...",
              "\xbfCu\xe1l es mi figura geom\xe9trica favorita y por qu\xe9?",
              "Si no estuviera ahora mismo aqu\xed, \xbfd\xf3nde estar\xeda entonces?",
              "\xbfQu\xe9 me proporciona energ\xeda?",
              "Si pudiera aprender un idioma durante la noche, \xbfcu\xe1l escoger\xeda?",
              "\xbfQui\xe9n har\xeda el papel protagonista en la pel\xedcula sobre mi vida?",
              "\xbfC\xf3mo se podr\xeda titular mi autobiograf\xeda?",
              "\xbfCu\xe1ndo fue la \xfaltima vez que hice algo por primera vez en mi vida?",
              "\xbfQu\xe9 s\xe9 hacer por encima de la media?",
              "\xbfCon qu\xe9 conocidas personalidades me cambiar\xeda por un d\xeda?",
              "\xbfQu\xe9 trabajo me gustar\xeda probar durante una semana?",
              "\xbfQu\xe9 tres valores son importantes para m\xed?",
              "\xbfBajo qu\xe9 condiciones aprendo mejor?",
              "Un h\xe9roe de mi infancia ...",
              "Si pudiera eximir de cumplir una ley que toda la humanidad debe cumplir ...",
              "\xbfC\xf3mo estoy hoy aqu\xed? \xbfHasta que punto es algo t\xedpico o at\xedpico en m\xed?",
              "\xbfCu\xe1les han sido los tres pilares m\xe1s importantes de mi vida?",
              "\xbfCu\xe1l es el rinc\xf3n preferido de mi vivienda?",
              "\xbfQu\xe9 deporte prefiero ver que practicar?",
              "\xbfQu\xe9 g\xe9nero musical me gusta especialmente y cu\xe1l no?",
              "Eso me genera quebraderos de cabeza:",
              "Algo que me ayuda a relajarme y a recuperarme.",
              "Optimista o pesimista: \xbfC\xf3mo me definir\xeda a m\xed mismo?",
            ],
          },
          kennenlernen: {
            name: "Conocerse",
            questions: [
              "\xbfEn qu\xe9 lugar creciste?",
              "\xbfIr\xedas solo a un concierto? \xbfQu\xe9 es lo que nunca har\xedas solo? y \xbfpor qu\xe9?",
              "\xbfTienes un libro favorito? En caso de que s\xed: \xbfPor qu\xe9 te gusta tanto?",
              "\xbfTienes hermanos?",
              "Vacaciones: \xbfEn el mar o en la monta\xf1a?",
              "\xbfQu\xe9 aficiones ten\xedas antes que ya no realizas ahora?",
              "\xbfQu\xe9 creencias tuviste, que luego las tuvieras por falsas?",
              "Si ganaras un mill\xf3n de euros, \xbfqu\xe9 har\xedas?",
              "\xbfConoces la historia que hay detr\xe1s de tu nombre?",
              "Si fueras un animal, \xbfcu\xe1l ser\xedas y por qu\xe9?",
              "\xbfQu\xe9 tres cosas llevar\xedas a una isla desierta y por qu\xe9?",
              "\xbfQu\xe9 te ha pasado recientemente, que te haya hecho inmensamente feliz?",
              "Si pudieras elegir otra vez, \xbfqu\xe9 profesi\xf3n te gustar\xeda aprender?",
              "\xbfTocas un instrumento o te gustar\xeda tocar alguno?",
              "\xbfCu\xe1l era en tu ni\xf1ez la profesi\xf3n de tus sue\xf1os?",
              "\xbfSin qu\xe9 comida no podr\xedas vivir?",
              "\xbfCu\xe1l es tu sabor de helado favorito?",
              "\xbfTe gusta cocinar?",
              "\xbfCu\xe1l es tu rinc\xf3n favorito de la casa?",
              "\xbfCu\xe1l es tu afici\xf3n favorita?",
              "\xbfCu\xe1l es tu color favorito? \xbfHas comprado algo alguna vez solo porque era de ese color?",
              "\xbfTienes alg\xfan modelo o \xeddolo?",
              "\xbfQu\xe9 tipo de m\xfasica prefieres escuchar?",
              "\xbfCu\xe1l es la primera caracter\xedstica que tus amigos usar\xedan para describirte?",
            ],
          },
          entwederOder: {
            name: "Una de dos",
            questions: [
              "Champ\xe1n o zumo",
              "Cerveza o vino",
              "Vino blanco o tinto",
              "Mar o monta\xf1a",
              "Apple o Windows/ Mac o Microsoft",
              "Gato o perro",
              "Ciudad o pueblo",
              "Coche o tren",
              "Hotel o residencia de vacaciones",
              "M\xf3vil o tel\xe9fono inteligente",
              "Verdura o fruta",
              "Discoteca o bar",
              "Cocinar o pedido a domicilio",
              "Pizza o pasta",
              "Esqu\xed o snowboard",
              "Cine o teatro",
              "Suspense o comedia",
              "Heavy o cl\xe1sica",
              "Camping o Hotel",
              "Bosque de con\xedferas o caducifolio",
              "Sol o nieve",
              "Senderismo o caminar",
              "Fresas o cerezas",
              "Salchichas o queso",
              "Desayuno dulce o salado",
              "Pan o cereales",
              "M\xfasica o silencio",
              "Par\xeds o Londres",
              "T\xe9 o caf\xe9",
              "Sherlock Holmes o Dr. Watson",
              "Pel\xedcula del oeste o de la Edad Media",
              "Beatles o Stones",
              "Rammstein o la Kelly Family",
              "Rosas o lilas",
              "Hoguera o chimenea",
              "Columpio o balanc\xedn",
              "Tren o bus",
              "El se\xf1or de los anillos o Harry Potter",
              "Mosquito o zancudo",
              "Hola o Adi\xf3s",
              "Alt o Kolsch",
              "Pan blanco o negro",
              "Semmel o Br\xf6tchen",
              "Fasching o Karneval",
              "BigBlueButton o Zoom",
              "Mayonesa o K\xe9tchup",
              "Bicicleta el\xe9ctrica o bicicleta",
              "Palomitas o nachos",
              "Chocolate o patatas",
              "Bailar o cantar",
              "Mantequilla o margarina",
              "B\xfaho o Alondra",
              "Carta o e-mail",
              "Helado en tarrina o en cucurucho",
              "Tel\xe9fono m\xf3vil o fijo",
              "Gimnasio o correr",
              "Helau o Alaaf",
            ],
          },
          zielsetzung: {
            name: "Objetivos",
            questions: [
              "\xbfCu\xe1l es el siguiente paso?",
              "\xbfQu\xe9 te atrae de la meta?",
              "\xbfC\xf3mo se hace la meta m\xe1s llevadera?",
              "\xbfQu\xe9 tiene que suceder para despejar el camino a la meta?",
              "\xbfC\xf3mo se podr\xeda describir esa meta en una sola frase?",
              "\xbfQu\xe9 puedo hacer para no alcanzar la meta?",
              "En una escala del 0 (para nada) al 10 (muy fuerte): \xbfcu\xe1nto valoro alcanzar esa meta?",
              "En una escala del 0 (para nada) al 10 (muy fuerte): \xbfc\xf3mo valoro que puedo alcanzar la meta con los medios de los que dispongo actualmente?",
              "\xbfQui\xe9n se alegrar\xeda si alcanzara la meta?",
              "\xbfQui\xe9n se alegrar\xeda si no alcanzara la meta?",
              "\xbfHay metas competitivas que me gustar\xedan alcanzar tambi\xe9n?",
              "\xbfCu\xe1nto tiempo creo que tardar\xe9 en lograr mi objetivo?",
              "\xbfHay escalas en la meta, como por ejemplo en las notas de clase? \xbfC\xf3mo ser\xeda obtener un sobresaliente o un muy deficiente?",
              "\xbfQui\xe9n se dar\xeda cuenta de que la meta ha sido alcanzada?",
              "\xbfHay una planificaci\xf3n temporal para alcanzar el objetivo?",
              "\xbfC\xf3mo de realista es el objetivo?",
              "\xbfQu\xe9 ayuda externa necesito para llegar al objetivo?",
              "\xbfC\xf3mo puedo examinar que el prop\xf3sito ha sido alcanzado?",
              "\xbfEs un objetivo a corto, medio o largo plazo?",
              "\xbfEs una meta inamovible o flexible?",
              "\xbfDesde cu\xe1ndo persigo ese objetivo? \xbfC\xf3mo llegu\xe9 a \xe9l?",
              "\xbfAlguna vez hab\xeda perseguido un prop\xf3sito parecido? \xbfCon qu\xe9 resultados?",
              "\xbfEs un objetivo privado, profesional o algo de los dos?",
              "\xbfQui\xe9n o qu\xe9 me ha animado a perseguir mi objetivo?",
              "\xbfHay alguien que persiga este objetivo con a\xfan mayor empe\xf1o que yo?",
              "\xbfSe trata de un objetivo intr\xednseco o extr\xednseco?",
              "\xbfConozco a alguien que haya alcanzado una meta parecida antes? \xbfC\xf3mo lo logr\xf3?",
              "\xbfQu\xe9 competencias o cualidades poseo que me permitir\xe1n conseguir mi prop\xf3sito?",
              "Si tuviera que describir mi objetivo a trav\xe9s de una met\xe1fora o un cuadro, \xbfqu\xe9 imagen me viene a la cabeza?",
              "\xbfQu\xe9 me resulta m\xe1s importante: la meta o el camino para conseguirla?",
              "\xbfDe qui\xe9n necesito apoyo para alcanzar la meta?",
              "\xbfQu\xe9 recursos se necesitan para alcanzar el objetivo?",
            ],
          },
          teamarbeit: {
            name: "Trabajo en equipo",
            questions: [
              "En nuestros puestos de trabajo necesitamos indispensablemente ...",
              "El \xfaltimo a\xf1o ha cambiado lo siguiente:",
              "En el futuro tomaremos decisiones, en las cuales ...",
              "Este a\xf1o como equipo definitivamente deber\xedamos ...",
              "Llego los lunes a trabajar con una sonrisa, si ...",
              "Para encontrarme perfectamente c\xf3modo en el equipo, a\xfan necesito ...",
              "Dejar\xeda el equipo, si ...",
              "En un a\xf1o, cuando vuelva la vista atr\xe1s, me sentir\xe9 orgulloso de nuestro trabajo en equipo, porque ...",
              "En el futuro me gustar\xeda adoptar en el equipo el papel de ...",
              "Lo que deber\xedamos dejar definitivamente es ...",
              "Colaborar\xe9 en la creaci\xf3n de una buena atm\xf3sfera laboral mediante ...",
              "Las siguientes perspectivas a\xfan faltan en nuestro equipo actual:",
              "Para poder resolver bien mi trabajo, necesito ...",
              "Deberiamos terminar con ...",
              "Necesitamos m\xe1s ...",
              "Lo que valoro especialmente de mi equipo es ...",
              "Un trabajo en equipo exitoso est\xe1 esencialmente influido por ...",
            ],
          },
          kontroversen: {
            name: "Pol\xe9micas",
            questions: [
              "\xbfDeber\xeda estar restringido legalmente el uso rutinario de Netflix y otras plataformas similares?",
              "\xbfDeber\xedan estar prohibidas las motos el\xe9ctricas en las ciudades?",
              "\xbfDeber\xedan ser grabadas todas las clases universitarias?",
              "\xbfEs necesaria la jornada laboral de 6 horas?",
              "\xbfEs necesario un salario base sin condiciones?",
              "\xbfDeber\xeda estar proh\xedbido fumar en espacios p\xfablicos?",
              "\xbfEs necesario un a\xf1o obligatorio destinado a servicios sociales?",
              "\xbfEs necesario que el tiempo libre sea un derecho?",
              "\xbfEs necesario que la velocidad m\xe1xima permitida en la autopista sea de 130 Km/h?",
              "\xbfEs necesario que sea obligatorio el uso de casco en la bici?",
              "\xbfDeber\xeda estar proh\xedbida en el centro de las ciudades la mendicidad?",
              "\xbfDeber\xedan ser suprimidos los deberes para casa?",
              "\xbfDeber\xeda el sueldo en la politica estar calculado seg\xfan los ingresos medios de la ciudadan\xeda?",
              "\xbfDeber\xedan ser an\xf3nimas por ley las solicitudes de trabajo?",
              "\xbfEs necesario el uniforme de escuela?",
              "\xbfEs necesario una tasa de alcoholemia del 0% en nuestras carreteras?",
              "\xbfDeber\xedan estar proh\xedbidos los concursos de belleza, as\xed como la elecci\xf3n de misses?",
            ],
          },
          gruppenreflexion: {
            name: "Reflexi\xf3n grupal",
            questions: [
              "\xbfC\xf3mo he vivido nuestra experiencia de trabajo en grupo?",
              "\xbfPudo contribuir cada miembro del grupo?",
              "\xbfC\xf3mo de satisfecho estoy con los resultados?",
              "\xbfHemos hecho un reparto de tareas? \xbfC\xf3mo ha funcionado?",
              "\xbfQu\xe9 ha salido bien?",
              "\xbfQu\xe9 podr\xedamos mejorar la pr\xf3xima vez?",
              "\xbfQu\xe9 deber\xedamos mantener como grupo?",
              "\xbfHubo algo que me molestara?",
              "\xbfQu\xe9 me sorprendi\xf3?",
              "\xbfQu\xe9 nos result\xf3 f\xe1cil?",
              "\xbfCon qu\xe9 tuvimos dificultades?",
              "\xbfEn qu\xe9 parte podr\xedamos a\xfan necesitar consejo?",
              "\xbfQu\xe9 hubiera pensado un observador externo de nuestro trabajo?",
              "\xbfC\xf3mo nos hemos coordinado y puesto de acuerdo?",
              "\xbfQu\xe9 clima de trabajo me he encontrado durante el trabajo en equipo?",
            ],
          },
          checkout: {
            name: "Checkout",
            questions: [
              "\xbfQu\xe9 es lo siguiente que me propongo?",
              "\xbfQu\xe9 conclusiones saco de todo esto hoy?",
              "Algo que hoy me ha hecho feliz:",
              "Algo que me llevo conmigo:",
              "Algo que me ha sorprendido:",
              "Algo que me ha inspirado:",
              "Algo que me gustar\xeda repetir:",
              "\xbfCon qu\xe9 pensamientos termino hoy el d\xeda?",
              "Algo que me ha sorprendido para bien:",
              "Algo que me ha impresionado/infundido respeto:",
              "\xbfCu\xe1les ser\xe1n mis pr\xf3ximos tres pasos?",
              "\xbfQu\xe9 pude hoy observar de m\xed mismo?",
              "\xbfQu\xe9 frase quiero a\xfan quitar de mi cabeza?",
              "Un cumplido para una persona, una frase inteligente o un acto memorable:",
              "\xbfC\xf3mo me encontraba hoy al inicio y c\xf3mo me siento ahora?",
              "Tras el d\xeda de hoy pienso que ...",
              "\xbfEn qu\xe9 he puesto hoy mi foco principalmente?",
              "Si mi estado de \xe1nimo ahora mismo fuera un animal, ser\xeda ...",
              "\xbfQu\xe9 fue especialmente ventajoso para m\xed hoy?",
              "Uno de los momentos destacables del d\xeda ha sido ...",
              "\xbfQu\xe9 dejo aqu\xed hoy?",
              "\xbfQu\xe9 me gustar\xeda probar o poner en pr\xe1ctica despu\xe9s?",
              "\xbfDe qu\xe9 necesito m\xe1s?",
              "\xbfDe qu\xe9 necesito menos?",
              "\xbfQu\xe9 har\xeda distinto la pr\xf3xima vez?",
              "Hoy he estado/sido ...",
              "\xbfQu\xe9 problema he podido solucionar hoy?",
              "\xbfC\xf3mo de satisfecho estoy hoy conmigo mismo?",
              "\xbfC\xf3mo me recompensar\xe9 por mi participaci\xf3n de hoy?",
              "\xbfCu\xe1l ha sido hoy el error m\xe1s valioso?",
              "\xbfQu\xe9 palabra tenemos que usar menos la pr\xf3xima vez?",
              "\xbfA qu\xe9 quisiera dedicar a\xfan la mayor parte de mi tiempo hoy?",
              "Hoy me he sentido especialmente bien, cuando ...",
              "\xbfQu\xe9 es lo que a\xfan me frustra?",
              "\xbfQu\xe9 he olvidado hoy?",
              "\xbfD\xf3nde veo todav\xeda un posible potencial de desarrollo?",
              "\xbfSobre qu\xe9 me podr\xeda haber re\xeddo hoy?",
              "\xbfQu\xe9 aportaci\xf3n de otro participante del grupo ha sido especialmente valiosa para m\xed?",
              "\xbfCu\xe1ndo he salido hoy de mi zona de confort?",
              "\xbfQu\xe9 me gustar\xeda decirle al grupo a\xfan?",
              "\xbfQu\xe9 me result\xf3 f\xe1cil hoy?",
              "Para la pr\xf3xima vez desear\xeda ...",
              "\xbfQu\xe9 podr\xedamos haber hecho hoy con una hora extra?",
              "\xbfCu\xe1l ha sido hoy mi reto m\xe1s importante?",
              "\xbfSobre qu\xe9 seguir\xe9 hoy reflexionando?",
              "Tras el d\xeda de hoy me siento preparado para ...",
              "\xbfQu\xe9 se ha aclarado para m\xed?",
              "\xbfQu\xe9 cambiar\xe9 inmediatamente?",
              "\xbfQu\xe9 voy a seguir manteniendo?",
              "\xbfQu\xe9 prop\xf3sito me llevo hoy conmigo?",
              "\xbfA qui\xe9n le contar\xe9 sobre el d\xeda de hoy?",
              "\xbfQu\xe9 tres adjetivos me vienen a la cabeza sobre hoy?",
              "\xbfQu\xe9 veo ahora con mayor claridad?",
              "\xbfDe qu\xe9 deber\xeda/ querr\xeda/ necesitar\xeda ocuparme a\xfan?",
              "\xbfCu\xe1l es mi principal aprendizaje de hoy?",
              "\xbfDe qu\xe9 me voy a acordar tras el d\xeda de hoy?",
            ],
          },
        };
      let _f = (() => {
          class e {}
          return (
            (e.ɵfac = function (t) {
              return new (t || e)();
            }),
            (e.ɵmod = Be({ type: e })),
            (e.ɵinj = ue({})),
            e
          );
        })(),
        wf = (() => {
          class e {}
          return (
            (e.ɵfac = function (t) {
              return new (t || e)();
            }),
            (e.ɵmod = Be({ type: e })),
            (e.ɵinj = ue({ imports: [[_f]] })),
            e
          );
        })(),
        Sf = (() => {
          class e {}
          return (
            (e.ɵfac = function (t) {
              return new (t || e)();
            }),
            (e.ɵmod = Be({ type: e })),
            (e.ɵinj = ue({ imports: [wf] })),
            e
          );
        })();
      const Cf = ["will-change", ""],
        Ef = [
          [
            ["", "pIcon", ""],
            ["", "p-icon", ""],
            ["", "pSvg", ""],
            ["", "p-svg", ""],
            ["", "pImage", ""],
            ["", "p-image", ""],
          ],
          "*",
        ],
        kf = ["[pIcon], [p-icon], [pSvg], [p-svg], [pImage], [p-image]", "*"],
        xf = ["inputElem"],
        Tf = ["stateElem"];
      function If(e, t) {
        1 & e &&
          (Ti(0, "div", 3, 4), Li(2, 1), Ti(3, "label"), Li(4, 2), Ii(), Ii());
      }
      const Af = [
          [
            ["ngx-p-indeterminate"],
            ["p-indeterminate"],
            ["ngx-p-hover"],
            ["p-hover"],
            ["ngx-p-toggle"],
            ["p-toggle"],
          ],
          [
            ["", "pIcon", ""],
            ["", "p-icon", ""],
            ["", "pSvg", ""],
            ["", "p-svg", ""],
            ["", "pImage", ""],
            ["", "p-image", ""],
          ],
          "*",
        ],
        Of = [
          "ngx-p-indeterminate, p-indeterminate, ngx-p-hover, p-hover, ngx-p-toggle, p-toggle",
          "[pIcon], [p-icon], [pSvg], [p-svg], [pImage], [p-image]",
          "*",
        ];
      let Rf = (() => {
          class e {
            constructor(e) {
              (this.elemRef = e),
                this.elemRef.nativeElement.classList.add("icon");
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)(Ei(ho));
            }),
            (e.ɵdir = Qe({
              type: e,
              selectors: [
                ["", "pIcon", ""],
                ["", "p-icon", ""],
              ],
            })),
            e
          );
        })(),
        Pf = (() => {
          class e {
            constructor(e) {
              (this.elemRef = e),
                this.elemRef.nativeElement.classList.add("image");
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)(Ei(ho));
            }),
            (e.ɵdir = Qe({
              type: e,
              selectors: [
                ["", "pImage", ""],
                ["", "p-image", ""],
              ],
            })),
            e
          );
        })(),
        Df = (() => {
          class e {
            constructor(e) {
              this.elemRef = e;
            }
            ngAfterViewInit() {
              this.elemRef.nativeElement.classList.add("svg");
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)(Ei(ho));
            }),
            (e.ɵdir = Qe({
              type: e,
              selectors: [
                ["", "pSvg", ""],
                ["", "p-svg", ""],
              ],
            })),
            e
          );
        })();
      var Nf = (function (e) {
        return (e.On = "on"), (e.Off = "off"), e;
      })({});
      function Mf(e, t) {
        return e ? "p-" + e + (t ? "-o" : "") : null;
      }
      function Ff(e) {
        return "boolean" == typeof e
          ? e
          : /^\s*(true|1|on|enable)\s*$/i.test(e);
      }
      let jf = (() => {
          class e {
            constructor(e, t) {
              (this.el = e), (this.renderer = t), (this.outline = !1);
            }
            ngOnChanges(e) {
              if (e.color || e.outline) {
                const t = Mf(
                    e.color ? e.color.previousValue : this.color,
                    e.outline ? e.outline.previousValue : null
                  ),
                  n = Mf(
                    e.color ? e.color.currentValue : this.color,
                    e.outline ? e.outline.currentValue : null
                  );
                this.renderer.removeClass(this.el.nativeElement, t),
                  this.renderer.addClass(this.el.nativeElement, n);
              }
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)(Ei(ho), Ei(mo));
            }),
            (e.ɵcmp = qe({
              type: e,
              selectors: [
                ["ngx-p-hover", "will-change", ""],
                ["p-hover", "will-change", ""],
              ],
              hostAttrs: [1, "state", "p-is-hover"],
              inputs: { outline: "outline", color: "color" },
              features: [st],
              attrs: Cf,
              ngContentSelectors: kf,
              decls: 3,
              vars: 0,
              template: function (e, t) {
                1 & e && (ji(Ef), Li(0), Ti(1, "label"), Li(2, 1), Ii());
              },
              encapsulation: 2,
              changeDetection: 0,
            })),
            e
          );
        })(),
        Lf = (() => {
          class e {
            constructor(e, t, n = !1, r) {
              (this.el = e),
                (this.renderer = t),
                (this._outline = n),
                (this._color = r);
            }
            ngAfterViewInit() {
              this._color &&
                this.renderer.addClass(
                  this.el.nativeElement,
                  `p-${this._color}${this._outline ? "-o" : ""}`
                );
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)(Ei(ho), Ei(mo), Dn("outline"), Dn("color"));
            }),
            (e.ɵcmp = qe({
              type: e,
              selectors: [
                ["ngx-p-hover", 3, "will-change", ""],
                ["p-hover", 3, "will-change", ""],
              ],
              hostAttrs: [1, "state", "p-is-hover"],
              ngContentSelectors: kf,
              decls: 3,
              vars: 0,
              template: function (e, t) {
                1 & e && (ji(Ef), Li(0), Ti(1, "label"), Li(2, 1), Ii());
              },
              encapsulation: 2,
              changeDetection: 0,
            })),
            e
          );
        })(),
        Wf = (() => {
          class e {
            constructor(e, t) {
              (this.el = e), (this.renderer = t), (this.outline = !1);
            }
            ngOnChanges(e) {
              if (e.color || e.outline) {
                const t = Mf(
                    e.color ? e.color.previousValue : this.color,
                    e.outline ? e.outline.previousValue : null
                  ),
                  n = Mf(
                    e.color ? e.color.currentValue : this.color,
                    e.outline ? e.outline.currentValue : null
                  );
                this.renderer.removeClass(this.el.nativeElement, t),
                  this.renderer.addClass(this.el.nativeElement, n);
              }
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)(Ei(ho), Ei(mo));
            }),
            (e.ɵcmp = qe({
              type: e,
              selectors: [
                ["ngx-p-indeterminate", "will-change", ""],
                ["p-indeterminate", "will-change", ""],
              ],
              hostAttrs: [1, "state", "p-is-indeterminate"],
              inputs: { outline: "outline", color: "color" },
              features: [st],
              attrs: Cf,
              ngContentSelectors: kf,
              decls: 3,
              vars: 0,
              template: function (e, t) {
                1 & e && (ji(Ef), Li(0), Ti(1, "label"), Li(2, 1), Ii());
              },
              encapsulation: 2,
              changeDetection: 0,
            })),
            e
          );
        })(),
        zf = (() => {
          class e {
            constructor(e, t, n = !1, r) {
              (this.el = e),
                (this.renderer = t),
                (this._outline = n),
                (this._color = r);
            }
            ngAfterViewInit() {
              this._color &&
                this.renderer.addClass(
                  this.el.nativeElement,
                  `p-${this._color}${this._outline ? "-o" : ""}`
                );
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)(Ei(ho), Ei(mo), Dn("outline"), Dn("color"));
            }),
            (e.ɵcmp = qe({
              type: e,
              selectors: [
                ["ngx-p-indeterminate", 3, "will-change", ""],
                ["p-indeterminate", 3, "will-change", ""],
              ],
              hostAttrs: [1, "state", "p-is-indeterminate"],
              ngContentSelectors: kf,
              decls: 3,
              vars: 0,
              template: function (e, t) {
                1 & e && (ji(Ef), Li(0), Ti(1, "label"), Li(2, 1), Ii());
              },
              encapsulation: 2,
              changeDetection: 0,
            })),
            e
          );
        })(),
        qf = (() => {
          class e {
            constructor(e, t) {
              (this.el = e), (this.renderer = t), (this.outline = !1);
            }
            get isToggleOn() {
              return this.type === Nf.On;
            }
            get isToggleOff() {
              return this.type === Nf.Off;
            }
            ngOnChanges(e) {
              if (e.color || e.outline) {
                const t = Mf(
                    e.color ? e.color.previousValue : this.color,
                    e.outline ? e.outline.previousValue : null
                  ),
                  n = Mf(
                    e.color ? e.color.currentValue : this.color,
                    e.outline ? e.outline.currentValue : null
                  );
                this.renderer.removeClass(this.el.nativeElement, t),
                  this.renderer.addClass(this.el.nativeElement, n);
              }
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)(Ei(ho), Ei(mo));
            }),
            (e.ɵcmp = qe({
              type: e,
              selectors: [
                ["ngx-p-toggle", "will-change", ""],
                ["p-toggle", "will-change", ""],
              ],
              hostAttrs: [1, "state"],
              hostVars: 4,
              hostBindings: function (e, t) {
                2 & e && Hi("p-on", t.isToggleOn)("p-off", t.isToggleOff);
              },
              inputs: { outline: "outline", type: "type", color: "color" },
              features: [st],
              attrs: Cf,
              ngContentSelectors: kf,
              decls: 3,
              vars: 0,
              template: function (e, t) {
                1 & e && (ji(Ef), Li(0), Ti(1, "label"), Li(2, 1), Ii());
              },
              encapsulation: 2,
              changeDetection: 0,
            })),
            e
          );
        })(),
        Hf = (() => {
          class e {
            constructor(e, t, n = !1, r, s) {
              (this.el = e),
                (this.renderer = t),
                (this._outline = n),
                (this._color = r),
                (this._type = s);
            }
            ngAfterViewInit() {
              this._color &&
                this.renderer.addClass(
                  this.el.nativeElement,
                  `p-${this._color}${this._outline ? "-o" : ""}`
                ),
                this.renderer.addClass(
                  this.el.nativeElement,
                  `p-${this._type}`
                );
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)(
                Ei(ho),
                Ei(mo),
                Dn("outline"),
                Dn("color"),
                Dn("type")
              );
            }),
            (e.ɵcmp = qe({
              type: e,
              selectors: [
                ["ngx-p-toggle", 3, "will-change", ""],
                ["p-toggle", 3, "will-change", ""],
              ],
              hostAttrs: [1, "state"],
              ngContentSelectors: kf,
              decls: 3,
              vars: 0,
              template: function (e, t) {
                1 & e && (ji(Ef), Li(0), Ti(1, "label"), Li(2, 1), Ii());
              },
              encapsulation: 2,
              changeDetection: 0,
            })),
            e
          );
        })(),
        Uf = (() => {
          class e {
            constructor(
              e,
              t,
              n,
              r,
              s,
              i,
              o = !1,
              a = !1,
              l = !1,
              c = !1,
              u = !1,
              h
            ) {
              (this.renderer = e),
                (this.el = t),
                (this.cd = n),
                (this._stroke = r),
                (this._shape = s),
                (this._animation = i),
                (this._isSwitch = o),
                (this._bigger = a),
                (this._enableFocus = l),
                (this._plain = c),
                (this._outline = u),
                (this._color = h),
                (this.checked = !1),
                (this.disabled = !1),
                (this.lock = !1),
                (this.change = new ga()),
                (this._isSwitch = Ff(this._isSwitch)),
                (this._bigger = Ff(this._bigger)),
                (this._enableFocus = Ff(this._enableFocus)),
                (this._plain = Ff(this._plain)),
                (this._outline = Ff(this._outline));
            }
            ngAfterViewInit() {
              const e = this.el.nativeElement;
              this._isSwitch && this.renderer.addClass(e, "p-switch"),
                this._bigger && this.renderer.addClass(e, "p-bigger"),
                this._enableFocus && this.renderer.addClass(e, "p-has-focus"),
                this._plain && this.renderer.addClass(e, "p-plain"),
                this._stroke && this.renderer.addClass(e, `p-${this._stroke}`),
                this._shape && this.renderer.addClass(e, `p-${this._shape}`),
                this._animation &&
                  this.renderer.addClass(e, `p-${this._animation}`),
                this._iconDir && this.renderer.addClass(e, "p-icon"),
                this._svgDir && this.renderer.addClass(e, "p-svg"),
                this._imgDir && this.renderer.addClass(e, "p-image"),
                (this._hoverDir || this._hoverWillChangeDir) &&
                  this.renderer.addClass(e, "p-has-hover"),
                (this._indeterminateDir || this._indeterminateWillChangeDir) &&
                  this.renderer.addClass(e, "p-has-indeterminate"),
                this._isToggle && this.renderer.addClass(e, "p-toggle"),
                this._isSwitch ||
                  this._iconDir ||
                  this._svgDir ||
                  this._imgDir ||
                  this.renderer.addClass(e, "p-default"),
                this._color &&
                  !this._isToggle &&
                  this.renderer.addClass(
                    this._stateElem.nativeElement,
                    `p-${this._color}${this._outline ? "-o" : ""}`
                  );
            }
            _onChange(e, t, n) {
              e.stopPropagation(),
                (this.checked = t),
                this.change.emit({ value: n, checked: t, event: e });
            }
            get _isToggle() {
              return (
                2 === this._toggleComps.length ||
                2 === this._toggleWillChangeComps.length
              );
            }
            setIndeterminate(e = !0) {
              this._inputElem.nativeElement.indeterminate = e;
            }
            forceCheck(e) {
              (this.checked = e), this.cd.markForCheck();
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)(
                Ei(mo),
                Ei(ho),
                Ei(Lo),
                Dn("stroke"),
                Dn("shape"),
                Dn("animation"),
                Dn("isSwitch"),
                Dn("bigger"),
                Dn("enableFocus"),
                Dn("plain"),
                Dn("outline"),
                Dn("color")
              );
            }),
            (e.ɵcmp = qe({
              type: e,
              selectors: [
                ["ngx-pretty-checkbox", 3, "will-change", ""],
                ["p-checkbox", 3, "will-change", ""],
              ],
              contentQueries: function (e, t, n) {
                if (
                  (1 & e &&
                    (Oa(n, Rf, 1),
                    Oa(n, Df, 1),
                    Oa(n, Pf, 1),
                    Oa(n, Lf, 1),
                    Oa(n, jf, 1),
                    Oa(n, zf, 1),
                    Oa(n, Wf, 1),
                    Oa(n, Hf, 0),
                    Oa(n, qf, 0)),
                  2 & e)
                ) {
                  let e;
                  Ia((e = Ra())) && (t._iconDir = e.first),
                    Ia((e = Ra())) && (t._svgDir = e.first),
                    Ia((e = Ra())) && (t._imgDir = e.first),
                    Ia((e = Ra())) && (t._hoverDir = e.first),
                    Ia((e = Ra())) && (t._hoverWillChangeDir = e.first),
                    Ia((e = Ra())) && (t._indeterminateDir = e.first),
                    Ia((e = Ra())) && (t._indeterminateWillChangeDir = e.first),
                    Ia((e = Ra())) && (t._toggleComps = e),
                    Ia((e = Ra())) && (t._toggleWillChangeComps = e);
                }
              },
              viewQuery: function (e, t) {
                if ((1 & e && (Aa(xf, 3), Aa(Tf, 1)), 2 & e)) {
                  let e;
                  Ia((e = Ra())) && (t._inputElem = e.first),
                    Ia((e = Ra())) && (t._stateElem = e.first);
                }
              },
              hostAttrs: [1, "pretty"],
              hostVars: 2,
              hostBindings: function (e, t) {
                2 & e && Hi("p-locked", t.lock);
              },
              inputs: {
                checked: "checked",
                disabled: "disabled",
                lock: "lock",
                value: "value",
              },
              outputs: { change: "change" },
              exportAs: ["ngxPrettyCheckbox"],
              ngContentSelectors: Of,
              decls: 4,
              vars: 4,
              consts: [
                [
                  "type",
                  "checkbox",
                  3,
                  "value",
                  "checked",
                  "disabled",
                  "change",
                ],
                ["inputElem", ""],
                ["class", "state", 4, "ngIf"],
                [1, "state"],
                ["stateElem", ""],
              ],
              template: function (e, t) {
                if (1 & e) {
                  const e = Oi();
                  ji(Af),
                    Ti(0, "input", 0, 1),
                    Pi("change", function (n) {
                      Tt(e);
                      const r = Ci(1);
                      return t._onChange(n, r.checked, r.value);
                    }),
                    Ii(),
                    Si(2, If, 5, 0, "div", 2),
                    Li(3);
                }
                2 & e &&
                  (ki("value", t.value)("checked", t.checked)(
                    "disabled",
                    t.disabled
                  ),
                  ss(2),
                  ki("ngIf", !t._isToggle));
              },
              directives: [ac],
              encapsulation: 2,
            })),
            e
          );
        })(),
        Vf = (() => {
          class e {}
          return (
            (e.ɵfac = function (t) {
              return new (t || e)();
            }),
            (e.ɵmod = Be({ type: e })),
            (e.ɵinj = ue({ imports: [[uc, Sf]] })),
            e
          );
        })();
      function Bf(e, t) {
        if (
          (1 & e && (Ti(0, "div", 6), Ti(1, "h3"), Gi(2), Ii(), Ii()), 2 & e)
        ) {
          const e = Mi();
          ki("@showHide", e.show ? "show" : "hide")(
            "@languageChange",
            e.selectedLanguage
          ),
            ss(2),
            Zi("> ", e.selectedQuestionSet.name, "");
        }
      }
      function $f(e, t) {
        if (
          (1 & e && (Ti(0, "div", 7), Ti(1, "h1", null, 8), Gi(3), Ii(), Ii()),
          2 & e)
        ) {
          const e = Mi();
          ki("@showHide", e.show ? "show" : "hide")(
            "@languageChange",
            e.selectedLanguage
          ),
            ss(3),
            Ki(e.selectedQuestionSet.questions[e.selectedIndex]);
        }
      }
      function Qf(e, t) {
        if (1 & e) {
          const e = Oi();
          Ti(0, "div"),
            Ti(1, "button", 9),
            Pi("click", function () {
              return Tt(e), Mi().nextQuestion();
            }),
            Gi(2),
            Ii(),
            Ii();
        }
        if (2 & e) {
          const e = Mi();
          ss(2), Zi(" ", e.questionnaire.buttonTextNewQuestion, " ");
        }
      }
      let Gf = (() => {
          class e {
            constructor(e, t, n) {
              (this.activatedRoute = e),
                (this.router = t),
                (this.persistenceService = n),
                (this.heading0 = ""),
                (this.heading0Shown = ""),
                (this.show = !0),
                (this.startUpFadeIn = !1),
                (this.repeatQuestions = !1),
                (this.usedIndices = new Set()),
                (this.selectedLanguage = gf.GERMAN);
            }
            ngOnInit() {
              (this.activatedRouteSubscription =
                this.activatedRoute.paramMap.subscribe((e) => {
                  const t = e.get("type");
                  this.usedIndices.clear(),
                    t
                      ? ((this.questionType = t.toLowerCase()),
                        this.nextQuestion())
                      : this.navigateToCheckin();
                })),
                (this.repeatQuestionsSubscription = this.persistenceService
                  .getRepeatQuestions()
                  .subscribe((e) => (this.repeatQuestions = e))),
                (this.languageSwitchSubscription = this.persistenceService
                  .getSelectedLanguage()
                  .subscribe((e) => {
                    switch (
                      ((this.selectedLanguage = e), this.selectedLanguage)
                    ) {
                      case gf.GERMAN:
                        this.questionnaire = yf;
                        break;
                      case gf.ENGLISH:
                        this.questionnaire = vf;
                        break;
                      case gf.SPANISH:
                        this.questionnaire = bf;
                        break;
                      default:
                        this.questionnaire = yf;
                    }
                    this.updateSelectedQuestionSetTranslation();
                  }));
            }
            ngAfterViewInit() {
              window.scrollTo(0, 0),
                setTimeout(() => {
                  this.startUpFadeIn = !0;
                }, 700);
            }
            updateRepeatQuestionIsAllowed(e) {
              (this.repeatQuestions = e),
                this.persistenceService.setRepeatQuestions(e);
            }
            nextQuestion() {
              (this.show = !1),
                setTimeout(() => {
                  this.updateSelectedQuestionSetTranslation();
                  let e = this.getRandomIndexForQuestions(
                    this.selectedQuestionSet
                  );
                  if (!this.repeatQuestions)
                    for (
                      this.usedIndices.size ===
                        this.selectedQuestionSet.questions.length &&
                      this.usedIndices.clear();
                      this.usedIndices.has(e);

                    )
                      (e = this.getRandomIndexForQuestions(
                        this.selectedQuestionSet
                      )),
                        (this.show = !1);
                  this.usedIndices.add(e),
                    (this.selectedIndex = e),
                    console.log(
                      "Questions left: ",
                      this.selectedQuestionSet.questions.length -
                        this.usedIndices.size
                    ),
                    (this.heading0Shown = this.heading0);
                }, 1500),
                setTimeout(() => {
                  this.show = !0;
                }, 1800);
            }
            updateSelectedQuestionSetTranslation() {
              switch (this.questionType) {
                case "checkin":
                  this.selectedQuestionSet = this.questionnaire.checkin;
                  break;
                case "kennenlernen":
                  this.selectedQuestionSet = this.questionnaire.kennenlernen;
                  break;
                case "entweder_oder":
                  this.selectedQuestionSet = this.questionnaire.entwederOder;
                  break;
                case "zielsetzung":
                  this.selectedQuestionSet = this.questionnaire.zielsetzung;
                  break;
                case "teamarbeit":
                  this.selectedQuestionSet = this.questionnaire.teamarbeit;
                  break;
                case "kontroversen":
                  this.selectedQuestionSet = this.questionnaire.kontroversen;
                  break;
                case "gruppenreflexion":
                  this.selectedQuestionSet =
                    this.questionnaire.gruppenreflexion;
                  break;
                case "checkout":
                  this.selectedQuestionSet = this.questionnaire.checkout;
                  break;
                default:
                  this.selectedQuestionSet = this.questionnaire.checkin;
              }
            }
            getRandomIndexForQuestions(e) {
              return Math.round(Math.random() * (e.questions.length - 1));
            }
            navigateToCheckin() {
              this.router.navigate(["checkin"]);
            }
            ngOnDestroy() {
              this.repeatQuestionsSubscription.unsubscribe(),
                this.activatedRouteSubscription.unsubscribe(),
                this.languageSwitchSubscription.unsubscribe();
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)(Ei(id), Ei(kp), Ei(ff));
            }),
            (e.ɵcmp = qe({
              type: e,
              selectors: [["app-home"]],
              decls: 7,
              vars: 6,
              consts: [
                ["id", "home-wrapper"],
                ["id", "questionTypePrettyFormatted", 4, "ngIf"],
                [
                  "style",
                  "flex-grow: 1;",
                  "class",
                  "animated-text-big",
                  4,
                  "ngIf",
                ],
                [
                  2,
                  "display",
                  "flex",
                  "justify-content",
                  "center",
                  "align-items",
                  "center",
                  "margin-top",
                  "-15px",
                  "margin-bottom",
                  "15px",
                ],
                [4, "ngIf"],
                [
                  "color",
                  "primary",
                  "isSwitch",
                  "true",
                  "stroke",
                  "fill",
                  2,
                  "display",
                  "flex",
                  "justify-content",
                  "center",
                  "margin-left",
                  "1rem",
                  "margin-top",
                  "0.5rem",
                  3,
                  "checked",
                  "change",
                ],
                ["id", "questionTypePrettyFormatted"],
                [1, "animated-text-big", 2, "flex-grow", "1"],
                ["heading0div", ""],
                [1, "button", "d-flex", 3, "click"],
              ],
              template: function (e, t) {
                1 & e &&
                  (Ti(0, "div", 0),
                  Si(1, Bf, 3, 3, "div", 1),
                  Si(2, $f, 4, 3, "div", 2),
                  Ti(3, "div", 3),
                  Si(4, Qf, 3, 1, "div", 4),
                  Ii(),
                  Ti(5, "p-checkbox", 5),
                  Pi("change", function () {
                    return t.updateRepeatQuestionIsAllowed(!t.repeatQuestions);
                  }),
                  Gi(6),
                  Ii(),
                  Ii()),
                  2 & e &&
                    (ki("@startUpFadeIn", t.startUpFadeIn ? "true" : "false"),
                    ss(1),
                    ki("ngIf", t.selectedQuestionSet),
                    ss(1),
                    ki("ngIf", t.selectedQuestionSet),
                    ss(2),
                    ki("ngIf", t.selectedQuestionSet),
                    ss(1),
                    ki("checked", t.repeatQuestions),
                    ss(1),
                    Zi(
                      " ",
                      t.questionnaire.toggleSwitchTextRepeatQuestions,
                      " "
                    ));
              },
              directives: [ac, Uf],
              styles: [
                "#home-wrapper[_ngcontent-%COMP%]{height:95%;display:flex;justify-content:center;flex-direction:column}.button[_ngcontent-%COMP%]{display:inline-block;transition:.35s;background-color:transparent;border:1px solid #fff;padding:7px 25px;color:#fff;cursor:pointer;outline:none}.button[_ngcontent-%COMP%], .button[_ngcontent-%COMP%]:hover{text-decoration:none;border-radius:0}.button[_ngcontent-%COMP%]:hover{background-color:#ffffff7c;color:#000;border-style:solid;border-width:1px}.button[_ngcontent-%COMP%]:active{border-style:outset;border-color:#fff}.span-primary[_ngcontent-%COMP%]{border:#fff;border-style:solid;border-width:1px;color:#f26a38;padding:3px 5px;font-size:small;border-radius:0}p[_ngcontent-%COMP%], span[_ngcontent-%COMP%]{color:#a7a7a7}h4[_ngcontent-%COMP%]{text-transform:uppercase;text-decoration:underline;-webkit-text-decoration-color:#a7a7a7;text-decoration-color:#a7a7a7}h2[_ngcontent-%COMP%], h4[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], li[_ngcontent-%COMP%]{letter-spacing:2px}li[_ngcontent-%COMP%]{color:#a7a7a7;font-size:small}.animated-text-big[_ngcontent-%COMP%]{display:flex;justify-content:center;margin-bottom:20px;height:100%;align-items:center}.animated-text-big[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{overflow:hidden;margin:0 auto;letter-spacing:2px;text-align:center}#questionTypePrettyFormatted[_ngcontent-%COMP%]{display:flex;justify-content:center;margin-bottom:-15px}",
              ],
              data: {
                animation: [
                  Zp("showHide", [
                    ef("show", Xp({ opacity: 100 })),
                    ef("hide", Xp({ opacity: 0 })),
                    nf("show <=> hide", [Jp("0.5s")]),
                  ]),
                  Zp("startUpFadeIn", [
                    ef("true", Xp({ opacity: 100 })),
                    ef("false", Xp({ opacity: 0 })),
                    nf("true <=> false", [Jp("0.5s")]),
                  ]),
                  Zp("languageChange", [
                    nf("void => *", []),
                    nf("* => void", []),
                    nf("* => *", [
                      Jp(
                        2e3,
                        tf([
                          Xp({ offset: 0, opacity: 0 }),
                          Xp({ offset: 1, opacity: 100 }),
                        ])
                      ),
                    ]),
                  ]),
                ],
              },
            })),
            e
          );
        })(),
        Kf = (() => {
          class e {
            constructor() {
              this.heading0Shown = "";
            }
            ngOnInit() {
              this.heading0TypingCallback(this);
            }
            heading0TypingCallback(e) {
              const t = e.heading0Shown.length;
              t < e.heading0.length && (e.heading0Shown += e.heading0[t]),
                setTimeout(e.heading0TypingCallback, 80, e);
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)();
            }),
            (e.ɵcmp = qe({
              type: e,
              selectors: [["app-heading"]],
              inputs: { heading0: "heading0" },
              decls: 3,
              vars: 1,
              consts: [[1, "heading", "animated-text"]],
              template: function (e, t) {
                1 & e && (Ti(0, "div", 0), Ti(1, "h1"), Gi(2), Ii(), Ii()),
                  2 & e && (ss(2), Ki(t.heading0Shown));
              },
              styles: [
                ".animated-text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{overflow:hidden;border-right:.15em solid #fff;white-space:nowrap;margin:0 auto;letter-spacing:2px;-webkit-animation:blink-caret .75s step-end infinite;animation:blink-caret .75s step-end infinite}@-webkit-keyframes blink-caret{0%,to{border-color:transparent}50%{border-color:#fff}}@keyframes blink-caret{0%,to{border-color:transparent}50%{border-color:#fff}}",
              ],
            })),
            e
          );
        })(),
        Zf = (() => {
          class e {
            constructor() {
              this.show = !1;
            }
            ngOnInit() {
              setTimeout(() => {
                this.show = !0;
              }, 700);
            }
            toggle() {
              this.show = !this.show;
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)();
            }),
            (e.ɵcmp = qe({
              type: e,
              selectors: [["app-impressum"]],
              decls: 58,
              vars: 2,
              consts: [
                [1, "page-container"],
                [3, "heading0"],
                [2, "width", "100%"],
                [1, "parent"],
                [1, "div1"],
                [1, "div2"],
                ["href", "https://ish-gruppe.de/", "target", "_blank"],
                [2, "text-align", "justify"],
                [1, "div3"],
                [1, "contributor-name"],
                [1, "contributor-contact"],
                [1, "div4"],
              ],
              template: function (e, t) {
                1 & e &&
                  (Ti(0, "div", 0),
                  Ai(1, "app-heading", 1),
                  Ti(2, "div", 2),
                  Ti(3, "div", 3),
                  Ti(4, "div", 4),
                  Ti(5, "h2"),
                  Gi(6, " Anbieter "),
                  Ii(),
                  Ti(7, "p"),
                  Gi(
                    8,
                    " Institut f\xfcr Schulentwicklung und Hochschuldidaktik GmbH "
                  ),
                  Ii(),
                  Ti(9, "p"),
                  Gi(10, " Dennis Sawatzki "),
                  Ii(),
                  Ti(11, "p"),
                  Gi(12, " Schadowstra\xdfe 34 "),
                  Ii(),
                  Ti(13, "p"),
                  Gi(14, " 44799 Bochum "),
                  Ii(),
                  Ii(),
                  Ti(15, "div", 5),
                  Ti(16, "h2"),
                  Gi(17, " Kontakt "),
                  Ii(),
                  Ti(18, "p"),
                  Gi(19, "Website: "),
                  Ti(20, "a", 6),
                  Gi(21, " https://ish-gruppe.de/"),
                  Ii(),
                  Ii(),
                  Ti(22, "p"),
                  Gi(23, " E-Mail: office@ish-gruppe.de "),
                  Ii(),
                  Ti(24, "p", 7),
                  Gi(25, " Telefon: 02 34 / 54 57 41 11 "),
                  Ii(),
                  Ii(),
                  Ti(26, "div", 8),
                  Ti(27, "h2"),
                  Gi(28, " Technische Umsetzung "),
                  Ii(),
                  Ti(29, "p", 9),
                  Gi(30, " S\xf6ren Stra\xdfmann "),
                  Ii(),
                  Ti(31, "p", 10),
                  Gi(32, " E-Mail: soeren.strassmann@coachingspace.net "),
                  Ii(),
                  Ti(33, "p", 9),
                  Gi(34, " Sergej Grilborzer "),
                  Ii(),
                  Ti(35, "p", 10),
                  Gi(36, " E-Mail: sergej@grilborzer.de "),
                  Ii(),
                  Ii(),
                  Ti(37, "div", 11),
                  Ti(38, "h2"),
                  Gi(39, " Fachliche Umsetzung "),
                  Ii(),
                  Ti(40, "p", 9),
                  Gi(41, " Dennis Sawatzki "),
                  Ii(),
                  Ti(42, "p", 10),
                  Gi(43, " E-Mail: sawatzki@ish-gruppe.de "),
                  Ii(),
                  Ti(44, "p", 9),
                  Gi(45, " Marcus Kuhn "),
                  Ii(),
                  Ti(46, "p", 10),
                  Gi(47, " E-Mail: kuhn@ish-gruppe.de "),
                  Ii(),
                  Ti(48, "h2"),
                  Gi(49, " Englische \xdcbersetzung "),
                  Ii(),
                  Ti(50, "p", 9),
                  Gi(51, " Annika Franzke "),
                  Ii(),
                  Ti(52, "p", 10),
                  Gi(53, " Gustav-Heinemann-Gesamtschule\xa0Alsdorf "),
                  Ii(),
                  Ti(54, "h2"),
                  Gi(55, " Spanische \xdcbersetzung "),
                  Ii(),
                  Ti(56, "p", 9),
                  Gi(57, " Carmen Gonzalez Guti\xe9rez "),
                  Ii(),
                  Ii(),
                  Ii(),
                  Ii(),
                  Ii()),
                  2 & e &&
                    (ss(1),
                    ki("heading0", "Impressum"),
                    ss(1),
                    ki("@showHide", t.show ? "show" : "hide"));
              },
              directives: [Kf],
              styles: [
                '@media screen and (max-width:576px){.about-section[_ngcontent-%COMP%]{flex-wrap:wrap}}.color-primary[_ngcontent-%COMP%]{color:#f26a38}.button[_ngcontent-%COMP%]{text-decoration:none;display:inline-block;transition:.35s;border:1px solid #f26a38;padding:7px 25px;color:#fff}.button[_ngcontent-%COMP%]:hover{text-decoration:none;background-color:#ee9575;color:#000;border-style:solid}.span-primary[_ngcontent-%COMP%]{border:#f26a38;border-style:solid;border-width:1px;color:#f26a38;padding:3px 5px;font-size:small}h3[_ngcontent-%COMP%]{font-weight:200;margin-bottom:10px}h2[_ngcontent-%COMP%], h5[_ngcontent-%COMP%], li[_ngcontent-%COMP%]{letter-spacing:2px}li[_ngcontent-%COMP%]{color:#a7a7a7;font-size:small}p[_ngcontent-%COMP%]{line-height:20px;margin-top:8px;margin-bottom:0}.contributor-name[_ngcontent-%COMP%]{font-weight:700;margin-bottom:0}.contributor-contact[_ngcontent-%COMP%]{margin-bottom:10px}.parent[_ngcontent-%COMP%]{display:grid;grid-template-areas:"Anbieter" "Kontakt" "TechnischeUmsetzung" "FachlicheUmsetzung";grid-template-columns:repeat(auto-fill,minmax(200px,1fr));grid-template-rows:auto;grid-column-gap:10rem;grid-row-gap:1.5rem}.div1[_ngcontent-%COMP%]{grid-area:Anbieter}.div2[_ngcontent-%COMP%]{grid-area:Kontakt}.div3[_ngcontent-%COMP%]{grid-area:TechnischeUmsetzung}.div4[_ngcontent-%COMP%]{grid-area:FachlicheUmsetzung}@media (min-width:1024px){.parent[_ngcontent-%COMP%]{grid-template-areas:"Anbieter TechnischeUmsetzung" "Kontakt FachlicheUmsetzung"}}',
              ],
              data: {
                animation: [
                  Zp("showHide", [
                    ef("show", Xp({ opacity: 100 })),
                    ef("hide", Xp({ opacity: 0 })),
                    nf("show <=> hide", [Jp("0.5s")]),
                  ]),
                ],
              },
            })),
            e
          );
        })();
      const Jf = ["userInput"],
        Yf = function (e) {
          return { active: e };
        };
      function Xf(e, t) {
        if (1 & e) {
          const e = Oi();
          Ti(0, "div", 11),
            Ti(1, "div", 12),
            Pi("click", function () {
              return Tt(e), Mi().deselectActiveElement();
            }),
            Ti(2, "p", 13),
            Gi(3),
            Ii(),
            Ti(4, "i", 14),
            Pi("click", function () {
              Tt(e);
              const n = t.index;
              return Mi().removeUserEntry(n);
            }),
            Ii(),
            Ii(),
            Ii();
        }
        if (2 & e) {
          const e = t.$implicit,
            n = t.index,
            r = Mi();
          ki("@startUpFadeIn", r.startUpFadeIn ? "true" : "false")(
            "@showHide",
            r.show ? "show" : "hide"
          ),
            ss(1),
            ki("ngClass", da(5, Yf, 0 === n && r.highlightSelectedElement)),
            ss(1),
            ki("ngClass", da(7, Yf, 0 === n && r.highlightSelectedElement)),
            ss(1),
            Ki(e);
        }
      }
      const em = [
        { path: "", component: Gf },
        {
          path: "random-generator",
          component: (() => {
            class e {
              constructor(e) {
                (this.persistenceService = e),
                  (this.show = !0),
                  (this.startUpFadeIn = !1),
                  (this.repeatQuestions = !1),
                  (this.numberOfPickedEntries = 0),
                  (this.userEntries = []),
                  (this.highlightSelectedElement = !1),
                  (this.selectedLanguage = gf.GERMAN);
              }
              ngOnInit() {
                (this.userEntrySubscription = this.persistenceService
                  .getUserEntries()
                  .subscribe((e) => (this.userEntries = e))),
                  (this.repeatQuestionsSubscription = this.persistenceService
                    .getRepeatQuestions()
                    .subscribe((e) => (this.repeatQuestions = e))),
                  (this.languageSwitchSubscription = this.persistenceService
                    .getSelectedLanguage()
                    .subscribe((e) => {
                      switch (
                        ((this.selectedLanguage = e), this.selectedLanguage)
                      ) {
                        case gf.GERMAN:
                          this.questionnaire = yf;
                          break;
                        case gf.ENGLISH:
                          this.questionnaire = vf;
                          break;
                        case gf.SPANISH:
                          this.questionnaire = bf;
                          break;
                        default:
                          this.questionnaire = yf;
                      }
                    }));
              }
              ngAfterViewInit() {
                window.scrollTo(0, 0),
                  setTimeout(() => {
                    this.startUpFadeIn = !0;
                  }, 700);
              }
              updateRepeatQuestionIsAllowed(e) {
                (this.repeatQuestions = e),
                  this.persistenceService.setRepeatQuestions(e);
              }
              addUserEntry(e) {
                e &&
                  (this.userEntries.push(e),
                  this.persistenceService.setUserEntries(this.userEntries),
                  (this.userInputRef.nativeElement.value = ""));
              }
              removeUserEntry(e) {
                console.log(
                  `removeUserEntry ${e} from ${this.userEntries.length}`
                ),
                  this.userEntries.splice(e, 1),
                  this.persistenceService.setUserEntries(this.userEntries);
              }
              deselectActiveElement() {
                this.highlightSelectedElement = !1;
              }
              makeNewSelection() {
                this.repeatQuestions
                  ? this.pickRandomEntry()
                  : this.pickRandomEntryWithoutRepeating();
              }
              pickRandomEntry() {
                (this.show = !1),
                  setTimeout(() => {
                    let e = this.getRandomIndexForQuestions(this.userEntries);
                    this.selectedIndex = e;
                    const t = this.userEntries[e];
                    this.userEntries.splice(e, 1),
                      this.userEntries.unshift(t),
                      (this.highlightSelectedElement = !0),
                      this.persistenceService.setUserEntries(this.userEntries);
                  }, 1500),
                  setTimeout(() => {
                    this.show = !0;
                  }, 1800);
              }
              pickRandomEntryWithoutRepeating() {
                (this.show = !1),
                  setTimeout(() => {
                    this.numberOfPickedEntries === this.userEntries.length &&
                      (this.numberOfPickedEntries = 0);
                    const e = this.userEntries.slice(
                      this.numberOfPickedEntries,
                      this.userEntries.length
                    );
                    this.selectedIndex =
                      this.getRandomIndexForQuestions(e) +
                      this.numberOfPickedEntries;
                    const t = this.userEntries[this.selectedIndex];
                    this.userEntries.splice(this.selectedIndex, 1),
                      this.userEntries.unshift(t),
                      (this.numberOfPickedEntries =
                        this.numberOfPickedEntries + 1),
                      (this.highlightSelectedElement = !0),
                      this.persistenceService.setUserEntries(this.userEntries);
                  }, 1500),
                  setTimeout(() => {
                    this.show = !0;
                  }, 1800);
              }
              getRandomIndexForQuestions(e) {
                return Math.round(Math.random() * (e.length - 1));
              }
              ngOnDestroy() {
                this.userEntrySubscription.unsubscribe(),
                  this.repeatQuestionsSubscription.unsubscribe(),
                  this.languageSwitchSubscription.unsubscribe();
              }
            }
            return (
              (e.ɵfac = function (t) {
                return new (t || e)(Ei(ff));
              }),
              (e.ɵcmp = qe({
                type: e,
                selectors: [["app-random-generator"]],
                viewQuery: function (e, t) {
                  if ((1 & e && Aa(Jf, 1), 2 & e)) {
                    let e;
                    Ia((e = Ra())) && (t.userInputRef = e.first);
                  }
                },
                decls: 15,
                vars: 8,
                consts: [
                  [
                    "id",
                    "randomGeneratorWrapper",
                    1,
                    "d-flex",
                    "flex-column",
                    2,
                    "justify-content",
                    "center",
                    "align-items",
                    "center",
                    "margin-top",
                    "0.5rem",
                    "margin-bottom",
                    "15px",
                  ],
                  [1, "random-generator-title", 2, "margin-bottom", "-1rem"],
                  [1, "random-generator-title"],
                  [1, "d-flex", "flex-row", 2, "width", "100%"],
                  [
                    "placeholder",
                    "",
                    2,
                    "border-radius",
                    "4px",
                    3,
                    "keydown.enter",
                  ],
                  ["userInput", ""],
                  [
                    1,
                    "button",
                    "d-flex",
                    2,
                    "margin-left",
                    "0.5rem",
                    3,
                    "click",
                  ],
                  [1, "fas", "fa-plus"],
                  ["style", "width: 100%;", 4, "ngFor", "ngForOf"],
                  [
                    1,
                    "button",
                    "d-flex",
                    2,
                    "width",
                    "100%",
                    "margin-top",
                    "1rem",
                    3,
                    "click",
                  ],
                  [
                    "color",
                    "primary",
                    "isSwitch",
                    "true",
                    "stroke",
                    "fill",
                    2,
                    "display",
                    "flex",
                    "justify-content",
                    "center",
                    "margin-left",
                    "1rem",
                    "margin-top",
                    "1rem",
                    3,
                    "checked",
                    "change",
                  ],
                  [2, "width", "100%"],
                  [
                    1,
                    "d-flex",
                    "flex-row",
                    "userEntry",
                    2,
                    "align-items",
                    "center",
                    "justify-content",
                    "space-between",
                    3,
                    "ngClass",
                    "click",
                  ],
                  [2, "width", "100%", 3, "ngClass"],
                  [
                    1,
                    "fas",
                    "fa-times",
                    2,
                    "cursor",
                    "pointer",
                    "margin-left",
                    "1rem",
                    3,
                    "click",
                  ],
                ],
                template: function (e, t) {
                  if (1 & e) {
                    const e = Oi();
                    Ti(0, "div", 0),
                      Ti(1, "h2", 1),
                      Gi(2),
                      Ii(),
                      Ti(3, "h4", 2),
                      Gi(4),
                      Ii(),
                      Ti(5, "div", 3),
                      Ti(6, "input", 4, 5),
                      Pi("keydown.enter", function () {
                        Tt(e);
                        const n = Ci(7);
                        return t.addUserEntry(n.value);
                      }),
                      Ii(),
                      Ti(8, "button", 6),
                      Pi("click", function () {
                        Tt(e);
                        const n = Ci(7);
                        return t.addUserEntry(n.value);
                      }),
                      Ai(9, "i", 7),
                      Ii(),
                      Ii(),
                      Si(10, Xf, 5, 9, "div", 8),
                      Ti(11, "button", 9),
                      Pi("click", function () {
                        return t.makeNewSelection();
                      }),
                      Gi(12),
                      Ii(),
                      Ti(13, "p-checkbox", 10),
                      Pi("change", function () {
                        return t.updateRepeatQuestionIsAllowed(
                          !t.repeatQuestions
                        );
                      }),
                      Gi(14),
                      Ii(),
                      Ii();
                  }
                  2 & e &&
                    (ki("@startUpFadeIn", t.startUpFadeIn ? "true" : "false")(
                      "@languageChange",
                      t.selectedLanguage
                    ),
                    ss(2),
                    Zi(" ", t.questionnaire.titleRandomGenerator, ""),
                    ss(2),
                    Zi(" ", t.questionnaire.subtitleRandomGenerator, ""),
                    ss(6),
                    ki("ngForOf", t.userEntries),
                    ss(2),
                    Zi(" ", t.questionnaire.buttonTextRandomPick, " "),
                    ss(1),
                    ki("checked", t.repeatQuestions),
                    ss(1),
                    Zi(
                      " ",
                      t.questionnaire.toggleSwitchTextRepeatUserEntries,
                      " "
                    ));
                },
                directives: [ic, Uf, rc],
                styles: [
                  ".userEntry[_ngcontent-%COMP%]{transition:.35s;background-color:transparent;border:1px solid #fff;padding:5px 15px;color:#fff;border-radius:4px;margin-top:.5rem;max-height:1.5rem}.userEntry[_ngcontent-%COMP%]:hover{background-color:#ffffff7c}.userEntry.active[_ngcontent-%COMP%], .userEntry[_ngcontent-%COMP%]:hover{text-decoration:none;color:#000;border-style:solid;border-width:1px;border-radius:0}.userEntry.active[_ngcontent-%COMP%]{background-color:#4edf99}p.active[_ngcontent-%COMP%], p[_ngcontent-%COMP%]:hover{color:#000}.userEntryText[_ngcontent-%COMP%]:hover{text-decoration:none;background-color:#ffffff7c;color:#000;border-style:solid;border-width:1px;border-radius:0}.userEntry[_ngcontent-%COMP%]:active{border-style:outset;border-color:#fff}.button[_ngcontent-%COMP%]{text-decoration:none;display:inline-block;transition:.35s;background-color:transparent;border:1px solid #fff;padding:5px 15px;color:#fff;cursor:pointer;border-radius:4px;outline:none}.button[_ngcontent-%COMP%]:hover{text-decoration:none;background-color:#ffffff7c;color:#000;border-style:solid;border-width:1px;border-radius:0}.button[_ngcontent-%COMP%]:active{border-style:outset;border-color:#fff}h2[_ngcontent-%COMP%], h5[_ngcontent-%COMP%]{letter-spacing:2px}input[_ngcontent-%COMP%]{width:100%;height:2.5rem}@media screen and (min-width:1200px){#randomGeneratorWrapper[_ngcontent-%COMP%]{margin-right:1rem}}",
                ],
                data: {
                  animation: [
                    Zp("showHide", [
                      ef("show", Xp({ opacity: 100 })),
                      ef("hide", Xp({ opacity: 0 })),
                      nf("show <=> hide", [Jp("0.5s")]),
                    ]),
                    Zp("startUpFadeIn", [
                      ef("true", Xp({ opacity: 100 })),
                      ef("false", Xp({ opacity: 0 })),
                      nf("true <=> false", [Jp("0.5s")]),
                    ]),
                    Zp("languageChange", [
                      nf("void => *", []),
                      nf("* => void", []),
                      nf("* => *", [
                        Jp(
                          2e3,
                          tf([
                            Xp({ offset: 0, opacity: 0 }),
                            Xp({ offset: 1, opacity: 100 }),
                          ])
                        ),
                      ]),
                    ]),
                  ],
                },
              })),
              e
            );
          })(),
        },
        { path: "impressum", component: Zf },
        {
          path: "security",
          component: (() => {
            class e {
              constructor() {
                this.show = !1;
              }
              ngOnInit() {
                window.scrollTo(0, 0),
                  setTimeout(() => {
                    this.show = !0;
                  }, 700);
              }
              toggle() {
                this.show = !this.show;
              }
            }
            return (
              (e.ɵfac = function (t) {
                return new (t || e)();
              }),
              (e.ɵcmp = qe({
                type: e,
                selectors: [["app-security"]],
                decls: 54,
                vars: 2,
                consts: [
                  [1, "page-container", 2, "padding-right", "15px"],
                  [3, "heading0"],
                  [1, "content-section"],
                  [2, "margin-top", "10px"],
                  [2, "margin-left", "30px"],
                  [2, "text-align", "justify"],
                  [2, "margin-top", "30px"],
                  [
                    "href",
                    "https://www.bfdi.bund.de/DE/Infothek/Anschriften_Links/anschriften_links-node.html",
                  ],
                ],
                template: function (e, t) {
                  1 & e &&
                    (Ti(0, "div", 0),
                    Ai(1, "app-heading", 1),
                    Ti(2, "div", 2),
                    Ti(3, "h2", 3),
                    Gi(4, " Benennung der verantwortlichen Stelle "),
                    Ii(),
                    Ti(5, "p"),
                    Gi(
                      6,
                      " Die verantwortliche Stelle f\xfcr die Datenverarbeitung auf dieser Website ist: "
                    ),
                    Ii(),
                    Ti(7, "div", 4),
                    Ti(8, "p"),
                    Gi(9, " Dennis Sawatzki "),
                    Ii(),
                    Ti(10, "p"),
                    Gi(11, " Schadowstra\xdfe 34 "),
                    Ii(),
                    Ti(12, "p"),
                    Gi(13, " 44799 Bochum "),
                    Ii(),
                    Ii(),
                    Ti(14, "p", 5),
                    Gi(
                      15,
                      " Die verantwortliche Stelle entscheidet allein oder gemeinsam mit anderen \xfcber die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z.B. Namen, Kontaktdaten o. \xc4.). "
                    ),
                    Ii(),
                    Ti(16, "h2", 6),
                    Gi(
                      17,
                      " Recht auf Beschwerde bei der zust\xe4ndigen Aufsichtsbeh\xf6rde "
                    ),
                    Ii(),
                    Ti(18, "p", 5),
                    Gi(
                      19,
                      " Als Betroffener steht Ihnen im Falle eines datenschutzrechtlichen Versto\xdfes ein Beschwerderecht bei der zust\xe4ndigen Aufsichtsbeh\xf6rde zu. Zust\xe4ndige Aufsichtsbeh\xf6rde bez\xfcglich datenschutzrechtlicher Fragen ist der Landesdatenschutzbeauftragte des Bundeslandes, in dem sich der Sitz unseres Unternehmens befindet. Der folgende Link stellt eine Liste der Datenschutzbeauftragten sowie deren Kontaktdaten bereit: "
                    ),
                    Ii(),
                    Ti(20, "div", 4),
                    Ti(21, "a", 7),
                    Gi(22, " BFDI "),
                    Ii(),
                    Ii(),
                    Ti(23, "h2", 6),
                    Gi(
                      24,
                      " Widerruf Ihrer Einwilligung zur Datenverarbeitung "
                    ),
                    Ii(),
                    Ti(25, "p", 5),
                    Gi(
                      26,
                      " Nur mit Ihrer ausdr\xfccklichen Einwilligung sind einige Vorg\xe4nge der Datenverarbeitung m\xf6glich. Ein Widerruf Ihrer bereits erteilten Einwilligung ist jederzeit m\xf6glich. F\xfcr den Widerruf gen\xfcgt eine formlose Mitteilung per E-Mail. Die Rechtm\xe4\xdfigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unber\xfchrt. "
                    ),
                    Ii(),
                    Ti(27, "h2", 6),
                    Gi(28, " Recht auf Daten\xfcbertragbarkeit "),
                    Ii(),
                    Ti(29, "p", 5),
                    Gi(
                      30,
                      " Ihnen steht das Recht zu, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erf\xfcllung eines Vertrags automatisiert verarbeiten, an sich oder an Dritte aush\xe4ndigen zu lassen. Die Bereitstellung erfolgt in einem maschinenlesbaren Format. Sofern Sie die direkte \xdcbertragung der Daten an einen anderen Verantwortlichen verlangen, erfolgt dies nur, soweit es technisch machbar ist. "
                    ),
                    Ii(),
                    Ti(31, "h2", 6),
                    Gi(
                      32,
                      " Recht auf Auskunft, Berichtigung, Sperrung, L\xf6schung "
                    ),
                    Ii(),
                    Ti(33, "p", 5),
                    Gi(
                      34,
                      " Sie haben jederzeit im Rahmen der geltenden gesetzlichen Bestimmungen das Recht auf unentgeltliche Auskunft \xfcber Ihre gespeicherten personenbezogenen Daten, Herkunft der Daten, deren Empf\xe4nger und den Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung, Sperrung oder L\xf6schung dieser Daten. Diesbez\xfcglich und auch zu weiteren Fragen zum Thema personenbezogene Daten k\xf6nnen Sie sich jederzeit \xfcber die im Impressum aufgef\xfchrten Kontaktm\xf6glichkeiten an uns wenden. "
                    ),
                    Ii(),
                    Ti(35, "h2", 6),
                    Gi(36, " SSL- bzw. TLS-Verschl\xfcsselung "),
                    Ii(),
                    Ti(37, "p", 5),
                    Gi(
                      38,
                      " Aus Sicherheitsgr\xfcnden und zum Schutz der \xdcbertragung vertraulicher Inhalte, die Sie an uns als Seitenbetreiber senden, nutzt unsere Website eine SSL-bzw. TLS-Verschl\xfcsselung. Damit sind Daten, die Sie \xfcber diese Website \xfcbermitteln, f\xfcr Dritte nicht mitlesbar. Sie erkennen eine verschl\xfcsselte Verbindung an der \u201ehttps://\u201c Adresszeile Ihres Browsers und am Schloss-Symbol in der Browserzeile. "
                    ),
                    Ii(),
                    Ti(39, "h2", 6),
                    Gi(40, " Datenspeicherung im lokalen Browserspeicher "),
                    Ii(),
                    Ti(41, "p", 5),
                    Gi(
                      42,
                      " Um Ihre Erfahrung mit unserer Seite bestm\xf6glich zu gestalten, haben Sie die M\xf6glichkeit "
                    ),
                    Ii(),
                    Ti(43, "ul"),
                    Ti(44, "li"),
                    Gi(45, " die gew\xfcnsche Sprache einzustellen "),
                    Ii(),
                    Ti(46, "li"),
                    Gi(
                      47,
                      " das Wiederholen/ nicht Wiederholen von Fragen einzustellen "
                    ),
                    Ii(),
                    Ti(48, "li"),
                    Gi(
                      49,
                      " und eigene Begriffe im Zufallsgenerator einzutragen "
                    ),
                    Ii(),
                    Ii(),
                    Ti(50, "p", 5),
                    Gi(
                      51,
                      ' Damit Ihre gew\xfcnschten Pr\xe4ferenzen und eingegeben Begriffe beim Verlassen oder Aktualisieren der Seite nicht verloren gehen, werden sie unverschl\xfcsselt in Ihrem lokalen Browserspeicher, dem "Local Storage", hinterlegt. Es werden keine Daten an den Anbieter oder an Dritte \xfcbertragen. Die Daten verbleiben auf Ihrem System bis sie von Ihnen gel\xf6scht werden. Sie k\xf6nnen die Daten l\xf6schen indem Sie mittels der Browsereinstellungen den Browserchache leeren. '
                    ),
                    Ii(),
                    Ti(52, "p", 5),
                    Gi(
                      53,
                      " Sie k\xf6nnen das Speichern von lokalen Daten in Ihren Browsereinstellungen allgemein verbieten. In diesem Fall weisen wir auf m\xf6gliche Funktionseinschr\xe4nkungen dieser Seite hin. "
                    ),
                    Ii(),
                    Ii(),
                    Ii()),
                    2 & e &&
                      (ss(1),
                      ki("heading0", "Datenschutz"),
                      ss(1),
                      ki("@showHide", t.show ? "show" : "hide"));
                },
                directives: [Kf],
                styles: [
                  ".contect-section[_ngcontent-%COMP%]{width:250px}.color-primary[_ngcontent-%COMP%]{color:#f26a38}.button[_ngcontent-%COMP%]{text-decoration:none;display:inline-block;transition:.35s;border:1px solid #f26a38;padding:7px 25px;color:#fff}.button[_ngcontent-%COMP%]:hover{text-decoration:none;background-color:#ee9575;color:#000;border-style:solid}.span-primary[_ngcontent-%COMP%]{border:#f26a38;border-style:solid;border-width:1px;color:#f26a38;padding:3px 5px;font-size:small}h3[_ngcontent-%COMP%]{font-weight:200;margin-bottom:10px}h1[_ngcontent-%COMP%], h2[_ngcontent-%COMP%], h5[_ngcontent-%COMP%]{letter-spacing:2px}h1[_ngcontent-%COMP%]{text-transform:uppercase;font-size:xx-large;font-weight:600}p[_ngcontent-%COMP%]{line-height:20px;margin-top:8px;margin-bottom:8px}",
                ],
                data: {
                  animation: [
                    Zp("showHide", [
                      ef("show", Xp({ opacity: 100 })),
                      ef("hide", Xp({ opacity: 0 })),
                      nf("show <=> hide", [Jp("0.5s")]),
                    ]),
                  ],
                },
              })),
              e
            );
          })(),
        },
        { path: ":type", component: Gf },
      ];
      let tm = (() => {
        class e {}
        return (
          (e.ɵfac = function (t) {
            return new (t || e)();
          }),
          (e.ɵmod = Be({ type: e })),
          (e.ɵinj = ue({
            imports: [
              [zp.forRoot(em, { relativeLinkResolution: "legacy" })],
              zp,
            ],
          })),
          e
        );
      })();
      const nm = function (e) {
        return { active: e };
      };
      let rm = (() => {
        class e {
          constructor(e) {
            (this.persistenceService = e),
              (this.LANG_GERMAN = gf.GERMAN),
              (this.LANG_ENGLISH = gf.ENGLISH),
              (this.LANG_SPANISH = gf.SPANISH),
              (this.selectedLanguage = gf.GERMAN);
          }
          ngOnInit() {
            this.persistenceService
              .getSelectedLanguage()
              .subscribe((e) => (this.selectedLanguage = e));
          }
          selectLanguage(e) {
            (this.selectedLanguage = e),
              this.persistenceService.setSelectedLanguage(e);
          }
        }
        return (
          (e.ɵfac = function (t) {
            return new (t || e)(Ei(ff));
          }),
          (e.ɵcmp = qe({
            type: e,
            selectors: [["language-switcher"]],
            decls: 3,
            vars: 9,
            consts: [
              [
                "src",
                "assets/Germany-32x32.png",
                1,
                "language-flag",
                3,
                "ngClass",
                "click",
              ],
              [
                "src",
                "assets/United-Kingdom-32x32.png",
                1,
                "language-flag",
                3,
                "ngClass",
                "click",
              ],
              [
                "src",
                "assets/Spain-32x32.png",
                1,
                "language-flag",
                3,
                "ngClass",
                "click",
              ],
            ],
            template: function (e, t) {
              1 & e &&
                (Ti(0, "img", 0),
                Pi("click", function () {
                  return t.selectLanguage(t.LANG_GERMAN);
                }),
                Ii(),
                Ti(1, "img", 1),
                Pi("click", function () {
                  return t.selectLanguage(t.LANG_ENGLISH);
                }),
                Ii(),
                Ti(2, "img", 2),
                Pi("click", function () {
                  return t.selectLanguage(t.LANG_SPANISH);
                }),
                Ii()),
                2 & e &&
                  (ki("ngClass", da(3, nm, "GERMAN" === t.selectedLanguage)),
                  ss(1),
                  ki("ngClass", da(5, nm, "ENGLISH" === t.selectedLanguage)),
                  ss(1),
                  ki("ngClass", da(7, nm, "SPANISH" === t.selectedLanguage)));
            },
            directives: [rc],
            styles: [
              ".language-flag[_ngcontent-%COMP%]{opacity:.5;cursor:pointer}.language-flag.active[_ngcontent-%COMP%]{opacity:1}",
            ],
          })),
          e
        );
      })();
      function sm(e, t) {
        1 & e && Ai(0, "language-switcher");
      }
      const im = function () {
          return ["/checkin"];
        },
        om = function () {
          return { exact: !0 };
        },
        am = function () {
          return ["/kennenlernen"];
        },
        lm = function () {
          return ["/entweder_oder"];
        },
        cm = function () {
          return ["/zielsetzung"];
        },
        um = function () {
          return ["/teamarbeit"];
        },
        hm = function () {
          return ["/kontroversen"];
        },
        dm = function () {
          return ["/gruppenreflexion"];
        },
        pm = function () {
          return ["/checkout"];
        };
      function fm(e, t) {
        1 & e &&
          (Ti(0, "div", 6),
          Ti(1, "a", 7),
          Ai(2, "i", 8),
          Ii(),
          Ti(3, "a", 7),
          Ai(4, "i", 9),
          Ii(),
          Ti(5, "a", 7),
          Ai(6, "i", 10),
          Ii(),
          Ti(7, "a", 7),
          Ai(8, "i", 11),
          Ii(),
          Ti(9, "a", 7),
          Ai(10, "i", 12),
          Ii(),
          Ti(11, "a", 7),
          Ai(12, "i", 13),
          Ii(),
          Ti(13, "a", 7),
          Ai(14, "i", 14),
          Ii(),
          Ti(15, "a", 7),
          Ai(16, "i", 15),
          Ii(),
          Ii()),
          2 & e &&
            (ki("@languageChange", Mi().selectedLanguage),
            ss(1),
            ki("routerLink", ha(17, im))("routerLinkActiveOptions", ha(18, om)),
            ss(2),
            ki("routerLink", ha(19, am))("routerLinkActiveOptions", ha(20, om)),
            ss(2),
            ki("routerLink", ha(21, lm))("routerLinkActiveOptions", ha(22, om)),
            ss(2),
            ki("routerLink", ha(23, cm))("routerLinkActiveOptions", ha(24, om)),
            ss(2),
            ki("routerLink", ha(25, um))("routerLinkActiveOptions", ha(26, om)),
            ss(2),
            ki("routerLink", ha(27, hm))("routerLinkActiveOptions", ha(28, om)),
            ss(2),
            ki("routerLink", ha(29, dm))("routerLinkActiveOptions", ha(30, om)),
            ss(2),
            ki("routerLink", ha(31, pm))(
              "routerLinkActiveOptions",
              ha(32, om)
            ));
      }
      let mm = (() => {
          class e {
            constructor(e, t) {
              (this.router = e),
                (this.persistenceService = t),
                (this.selectedLanguage = gf.GERMAN),
                (this.questionnaire = yf);
            }
            ngOnInit() {
              this.updateCategoryTranslation(),
                (this.languageSwitchSubscription = this.persistenceService
                  .getSelectedLanguage()
                  .subscribe((e) => {
                    (this.selectedLanguage = e),
                      this.updateCategoryTranslation();
                  }));
            }
            navigateToRoot() {
              this.router.navigate(["/checkin"]);
            }
            notViewingImpressumOrDatenschutz() {
              return (
                "/security" !== this.router.url &&
                "/impressum" !== this.router.url
              );
            }
            updateCategoryTranslation() {
              switch (this.selectedLanguage) {
                case gf.GERMAN:
                  this.questionnaire = yf;
                  break;
                case gf.ENGLISH:
                  this.questionnaire = vf;
                  break;
                case gf.SPANISH:
                  this.questionnaire = bf;
                  break;
                default:
                  this.questionnaire = yf;
              }
            }
            ngOnDestroy() {
              this.languageSwitchSubscription.unsubscribe();
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)(Ei(kp), Ei(ff));
            }),
            (e.ɵcmp = qe({
              type: e,
              selectors: [["app-navbar"]],
              decls: 7,
              vars: 2,
              consts: [
                ["id", "logoContainer"],
                [2, "margin-right", "10px", "cursor", "pointer", 3, "click"],
                [
                  "src",
                  "../../assets/logo-stuhlkreis.png",
                  2,
                  "height",
                  "35px",
                  "vertical-align",
                  "middle",
                ],
                [1, "nav-title"],
                [4, "ngIf"],
                ["class", "nav-item-container", 4, "ngIf"],
                [1, "nav-item-container"],
                [
                  "routerLinkActive",
                  "nav-item-active",
                  1,
                  "nav-item",
                  2,
                  "margin-right",
                  "15px",
                  3,
                  "routerLink",
                  "routerLinkActiveOptions",
                ],
                [1, "fa", "fa-sun"],
                [1, "fas", "fa-handshake"],
                [1, "fas", "fa-exchange-alt"],
                [1, "fas", "fa-bullseye"],
                [1, "fas", "fa-users"],
                [1, "fas", "fa-balance-scale-left"],
                [1, "fas", "fa-comments"],
                [1, "fa", "fa-moon"],
              ],
              template: function (e, t) {
                1 & e &&
                  (Ti(0, "div", 0),
                  Ti(1, "div", 1),
                  Pi("click", function () {
                    return t.navigateToRoot();
                  }),
                  Ai(2, "img", 2),
                  Ti(3, "span", 3),
                  Gi(4, " digitaler-stuhlkreis.de "),
                  Ii(),
                  Ii(),
                  Si(5, sm, 1, 0, "language-switcher", 4),
                  Ii(),
                  Si(6, fm, 17, 33, "div", 5)),
                  2 & e &&
                    (ss(5),
                    ki("ngIf", t.notViewingImpressumOrDatenschutz()),
                    ss(1),
                    ki("ngIf", t.notViewingImpressumOrDatenschutz()));
              },
              directives: [ac, rm, Tp, Ap],
              styles: [
                ".color-primary[_ngcontent-%COMP%], a[_ngcontent-%COMP%], h4[_ngcontent-%COMP%]{color:#fff}a[_ngcontent-%COMP%], h4[_ngcontent-%COMP%]{font-size:large}.nav-title[_ngcontent-%COMP%], a[_ngcontent-%COMP%]{text-decoration:none}.nav-title[_ngcontent-%COMP%]{display:inline-block;transition:.35s;background-color:transparent;border:0;padding:0 25px 0 7px;color:#f26a38;color:#fff}.nav-bar[_ngcontent-%COMP%], .nav-item-container[_ngcontent-%COMP%]{justify-content:space-between;align-items:center}.nav-item-container[_ngcontent-%COMP%]{display:flex;opacity:1;transition:all 1s}.nav-item[_ngcontent-%COMP%]{text-decoration:none;display:inline-block;background-color:transparent;transition:all 2s;color:#fff}.nav-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{display:inline}.social-link[_ngcontent-%COMP%]{display:inline-block;opacity:1;transition:all 2s}@media screen and (max-width:768px){.social-link[_ngcontent-%COMP%]{display:none;opacity:0;transition:all 2s}}@media screen and (max-width:936px){.sk-nav-item-compressed[_ngcontent-%COMP%]{display:none;opacity:0;transition:all 2s}}#logoContainer[_ngcontent-%COMP%]{display:flex;justify-content:space-between;margin-bottom:1.5rem}@media screen and (max-height:400px){#logoContainer[_ngcontent-%COMP%]{font-size:smaller;margin-bottom:1rem}}.nav-item[_ngcontent-%COMP%]:hover{border:1px solid #f26a38}.nav-item-active[_ngcontent-%COMP%]{border:0;border-bottom:1px;border-style:solid}@media screen and (min-width:769px){.nav-item-hamburger[_ngcontent-%COMP%]{display:none;opacity:1;transition:all 2s}}@media (max-width:768px){a[_ngcontent-%COMP%]{font-size:medium}}@media (min-width:936px){a[_ngcontent-%COMP%]{font-size:smaller}}@media (min-width:1025px){a[_ngcontent-%COMP%]{font-size:small}}@media (min-width:1252px){a[_ngcontent-%COMP%]{font-size:large}}",
              ],
              data: {
                animation: [
                  Zp("languageChange", [
                    nf("void => *", []),
                    nf("* => void", []),
                    nf("* => *", [
                      Jp(
                        2e3,
                        tf([
                          Xp({ offset: 0, opacity: 0 }),
                          Xp({ offset: 1, opacity: 100 }),
                        ])
                      ),
                    ]),
                  ]),
                ],
              },
            })),
            e
          );
        })(),
        gm = (() => {
          class e {
            constructor() {
              this.title = "digitaler-stuhlkreis.de";
            }
            ngOnInit() {
              this.innerHeight = window.innerHeight;
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)();
            }),
            (e.ɵcmp = qe({
              type: e,
              selectors: [["app-root"]],
              decls: 7,
              vars: 0,
              consts: [
                [
                  "id",
                  "outer-grey-div",
                  1,
                  "digitaler-stuhlkreis",
                  2,
                  "overflow",
                  "hidden",
                ],
                ["id", "inner-grey-div"],
                ["id", "app-outer-wrapper"],
                ["id", "app-inner-content-wrapper"],
                ["id", "app-inner-content-centered"],
              ],
              template: function (e, t) {
                1 & e &&
                  (Ti(0, "div", 0),
                  Ti(1, "div", 1),
                  Ti(2, "div", 2),
                  Ai(3, "app-navbar"),
                  Ti(4, "div", 3),
                  Ti(5, "div", 4),
                  Ai(6, "router-outlet"),
                  Ii(),
                  Ii(),
                  Ii(),
                  Ii(),
                  Ii());
              },
              directives: [mm, Op],
              styles: [
                "#app-outer-wrapper[_ngcontent-%COMP%]{margin:20px;display:flex;flex-direction:column;height:88%}#app-inner-content-wrapper[_ngcontent-%COMP%]{display:flex;justify-content:center;overflow-x:hidden;margin-top:20px;margin-bottom:20px;flex-grow:1}#app-inner-content-centered[_ngcontent-%COMP%]{max-width:1024px}#app-inner-content-wrapper[_ngcontent-%COMP%]::-webkit-scrollbar-track{box-shadow:inset 0 0 6px rgba(0,0,0,.3);-webkit-box-shadow:inset 0 0 6px rgba(0,0,0,.3);border-radius:10px;background-color:#a7a7a7}#app-inner-content-wrapper[_ngcontent-%COMP%]::-webkit-scrollbar{width:6px;background-color:#28282f}#app-inner-content-wrapper[_ngcontent-%COMP%]::-webkit-scrollbar-thumb{border-radius:10px;box-shadow:inset 0 0 6px rgba(0,0,0,.3);-webkit-box-shadow:inset 0 0 6px rgba(0,0,0,.3);background-color:#fff}",
              ],
            })),
            e
          );
        })();
      function ym() {
        return (
          "undefined" != typeof process &&
          "[object process]" === {}.toString.call(process)
        );
      }
      function vm(e) {
        switch (e.length) {
          case 0:
            return new sf();
          case 1:
            return e[0];
          default:
            return new of(e);
        }
      }
      function bm(e, t, n, r, s = {}, i = {}) {
        const o = [],
          a = [];
        let l = -1,
          c = null;
        if (
          (r.forEach((e) => {
            const n = e.offset,
              r = n == l,
              u = (r && c) || {};
            Object.keys(e).forEach((n) => {
              let r = n,
                a = e[n];
              if ("offset" !== n)
                switch (((r = t.normalizePropertyName(r, o)), a)) {
                  case "!":
                    a = s[n];
                    break;
                  case "*":
                    a = i[n];
                    break;
                  default:
                    a = t.normalizeStyleValue(n, r, a, o);
                }
              u[r] = a;
            }),
              r || a.push(u),
              (c = u),
              (l = n);
          }),
          o.length)
        ) {
          const e = "\n - ";
          throw new Error(
            `Unable to animate due to the following errors:${e}${o.join(e)}`
          );
        }
        return a;
      }
      function _m(e, t, n, r) {
        switch (t) {
          case "start":
            e.onStart(() => r(n && wm(n, "start", e)));
            break;
          case "done":
            e.onDone(() => r(n && wm(n, "done", e)));
            break;
          case "destroy":
            e.onDestroy(() => r(n && wm(n, "destroy", e)));
        }
      }
      function wm(e, t, n) {
        const r = n.totalTime,
          s = Sm(
            e.element,
            e.triggerName,
            e.fromState,
            e.toState,
            t || e.phaseName,
            null == r ? e.totalTime : r,
            !!n.disabled
          ),
          i = e._data;
        return null != i && (s._data = i), s;
      }
      function Sm(e, t, n, r, s = "", i = 0, o) {
        return {
          element: e,
          triggerName: t,
          fromState: n,
          toState: r,
          phaseName: s,
          totalTime: i,
          disabled: !!o,
        };
      }
      function Cm(e, t, n) {
        let r;
        return (
          e instanceof Map
            ? ((r = e.get(t)), r || e.set(t, (r = n)))
            : ((r = e[t]), r || (r = e[t] = n)),
          r
        );
      }
      function Em(e) {
        const t = e.indexOf(":");
        return [e.substring(1, t), e.substr(t + 1)];
      }
      let km = (e, t) => !1,
        xm = (e, t) => !1,
        Tm = (e, t, n) => [];
      const Im = ym();
      (Im || "undefined" != typeof Element) &&
        ((km = (e, t) => e.contains(t)),
        (xm = (() => {
          if (Im || Element.prototype.matches) return (e, t) => e.matches(t);
          {
            const e = Element.prototype,
              t =
                e.matchesSelector ||
                e.mozMatchesSelector ||
                e.msMatchesSelector ||
                e.oMatchesSelector ||
                e.webkitMatchesSelector;
            return t ? (e, n) => t.apply(e, [n]) : xm;
          }
        })()),
        (Tm = (e, t, n) => {
          let r = [];
          if (n) {
            const n = e.querySelectorAll(t);
            for (let e = 0; e < n.length; e++) r.push(n[e]);
          } else {
            const n = e.querySelector(t);
            n && r.push(n);
          }
          return r;
        }));
      let Am = null,
        Om = !1;
      function Rm(e) {
        Am ||
          ((Am = ("undefined" != typeof document ? document.body : null) || {}),
          (Om = !!Am.style && "WebkitAppearance" in Am.style));
        let t = !0;
        return (
          Am.style &&
            !(function (e) {
              return "ebkit" == e.substring(1, 6);
            })(e) &&
            ((t = e in Am.style), !t && Om) &&
            (t =
              "Webkit" + e.charAt(0).toUpperCase() + e.substr(1) in Am.style),
          t
        );
      }
      const Pm = xm,
        Dm = km,
        Nm = Tm;
      function Mm(e) {
        const t = {};
        return (
          Object.keys(e).forEach((n) => {
            const r = n.replace(/([a-z])([A-Z])/g, "$1-$2");
            t[r] = e[n];
          }),
          t
        );
      }
      let Fm = (() => {
          class e {
            validateStyleProperty(e) {
              return Rm(e);
            }
            matchesElement(e, t) {
              return Pm(e, t);
            }
            containsElement(e, t) {
              return Dm(e, t);
            }
            query(e, t, n) {
              return Nm(e, t, n);
            }
            computeStyle(e, t, n) {
              return n || "";
            }
            animate(e, t, n, r, s, i = [], o) {
              return new sf(n, r);
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)();
            }),
            (e.ɵprov = ce({ token: e, factory: e.ɵfac })),
            e
          );
        })(),
        jm = (() => {
          class e {}
          return (e.NOOP = new Fm()), e;
        })();
      function Lm(e) {
        if ("number" == typeof e) return e;
        const t = e.match(/^(-?[\.\d]+)(m?s)/);
        return !t || t.length < 2 ? 0 : Wm(parseFloat(t[1]), t[2]);
      }
      function Wm(e, t) {
        switch (t) {
          case "s":
            return 1e3 * e;
          default:
            return e;
        }
      }
      function zm(e, t, n) {
        return e.hasOwnProperty("duration")
          ? e
          : (function (e, t, n) {
              let r,
                s = 0,
                i = "";
              if ("string" == typeof e) {
                const n = e.match(
                  /^(-?[\.\d]+)(m?s)(?:\s+(-?[\.\d]+)(m?s))?(?:\s+([-a-z]+(?:\(.+?\))?))?$/i
                );
                if (null === n)
                  return (
                    t.push(`The provided timing value "${e}" is invalid.`),
                    { duration: 0, delay: 0, easing: "" }
                  );
                r = Wm(parseFloat(n[1]), n[2]);
                const o = n[3];
                null != o && (s = Wm(parseFloat(o), n[4]));
                const a = n[5];
                a && (i = a);
              } else r = e;
              if (!n) {
                let n = !1,
                  i = t.length;
                r < 0 &&
                  (t.push(
                    "Duration values below 0 are not allowed for this animation step."
                  ),
                  (n = !0)),
                  s < 0 &&
                    (t.push(
                      "Delay values below 0 are not allowed for this animation step."
                    ),
                    (n = !0)),
                  n &&
                    t.splice(
                      i,
                      0,
                      `The provided timing value "${e}" is invalid.`
                    );
              }
              return { duration: r, delay: s, easing: i };
            })(e, t, n);
      }
      function qm(e, t = {}) {
        return (
          Object.keys(e).forEach((n) => {
            t[n] = e[n];
          }),
          t
        );
      }
      function Hm(e, t, n = {}) {
        if (t) for (let r in e) n[r] = e[r];
        else qm(e, n);
        return n;
      }
      function Um(e, t, n) {
        return n ? t + ":" + n + ";" : "";
      }
      function Vm(e) {
        let t = "";
        for (let n = 0; n < e.style.length; n++) {
          const r = e.style.item(n);
          t += Um(0, r, e.style.getPropertyValue(r));
        }
        for (const n in e.style)
          e.style.hasOwnProperty(n) &&
            !n.startsWith("_") &&
            (t += Um(
              0,
              n.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase(),
              e.style[n]
            ));
        e.setAttribute("style", t);
      }
      function Bm(e, t, n) {
        e.style &&
          (Object.keys(t).forEach((r) => {
            const s = Xm(r);
            n && !n.hasOwnProperty(r) && (n[r] = e.style[s]),
              (e.style[s] = t[r]);
          }),
          ym() && Vm(e));
      }
      function $m(e, t) {
        e.style &&
          (Object.keys(t).forEach((t) => {
            const n = Xm(t);
            e.style[n] = "";
          }),
          ym() && Vm(e));
      }
      function Qm(e) {
        return Array.isArray(e) ? (1 == e.length ? e[0] : Yp(e)) : e;
      }
      const Gm = new RegExp("{{\\s*(.+?)\\s*}}", "g");
      function Km(e) {
        let t = [];
        if ("string" == typeof e) {
          let n;
          for (; (n = Gm.exec(e)); ) t.push(n[1]);
          Gm.lastIndex = 0;
        }
        return t;
      }
      function Zm(e, t, n) {
        const r = e.toString(),
          s = r.replace(Gm, (e, r) => {
            let s = t[r];
            return (
              t.hasOwnProperty(r) ||
                (n.push(`Please provide a value for the animation param ${r}`),
                (s = "")),
              s.toString()
            );
          });
        return s == r ? e : s;
      }
      function Jm(e) {
        const t = [];
        let n = e.next();
        for (; !n.done; ) t.push(n.value), (n = e.next());
        return t;
      }
      const Ym = /-+([a-z0-9])/g;
      function Xm(e) {
        return e.replace(Ym, (...e) => e[1].toUpperCase());
      }
      function eg(e, t) {
        return 0 === e || 0 === t;
      }
      function tg(e, t, n) {
        const r = Object.keys(n);
        if (r.length && t.length) {
          let i = t[0],
            o = [];
          if (
            (r.forEach((e) => {
              i.hasOwnProperty(e) || o.push(e), (i[e] = n[e]);
            }),
            o.length)
          )
            for (var s = 1; s < t.length; s++) {
              let n = t[s];
              o.forEach(function (t) {
                n[t] = rg(e, t);
              });
            }
        }
        return t;
      }
      function ng(e, t, n) {
        switch (t.type) {
          case 7:
            return e.visitTrigger(t, n);
          case 0:
            return e.visitState(t, n);
          case 1:
            return e.visitTransition(t, n);
          case 2:
            return e.visitSequence(t, n);
          case 3:
            return e.visitGroup(t, n);
          case 4:
            return e.visitAnimate(t, n);
          case 5:
            return e.visitKeyframes(t, n);
          case 6:
            return e.visitStyle(t, n);
          case 8:
            return e.visitReference(t, n);
          case 9:
            return e.visitAnimateChild(t, n);
          case 10:
            return e.visitAnimateRef(t, n);
          case 11:
            return e.visitQuery(t, n);
          case 12:
            return e.visitStagger(t, n);
          default:
            throw new Error(
              `Unable to resolve animation metadata node #${t.type}`
            );
        }
      }
      function rg(e, t) {
        return window.getComputedStyle(e)[t];
      }
      function sg(e, t) {
        const n = [];
        return (
          "string" == typeof e
            ? e.split(/\s*,\s*/).forEach((e) =>
                (function (e, t, n) {
                  if (":" == e[0]) {
                    const r = (function (e, t) {
                      switch (e) {
                        case ":enter":
                          return "void => *";
                        case ":leave":
                          return "* => void";
                        case ":increment":
                          return (e, t) => parseFloat(t) > parseFloat(e);
                        case ":decrement":
                          return (e, t) => parseFloat(t) < parseFloat(e);
                        default:
                          return (
                            t.push(
                              `The transition alias value "${e}" is not supported`
                            ),
                            "* => *"
                          );
                      }
                    })(e, n);
                    if ("function" == typeof r) return void t.push(r);
                    e = r;
                  }
                  const r = e.match(/^(\*|[-\w]+)\s*(<?[=-]>)\s*(\*|[-\w]+)$/);
                  if (null == r || r.length < 4)
                    return (
                      n.push(
                        `The provided transition expression "${e}" is not supported`
                      ),
                      t
                    );
                  const s = r[1],
                    i = r[2],
                    o = r[3];
                  t.push(ag(s, o)),
                    "<" != i[0] || ("*" == s && "*" == o) || t.push(ag(o, s));
                })(e, n, t)
              )
            : n.push(e),
          n
        );
      }
      const ig = new Set(["true", "1"]),
        og = new Set(["false", "0"]);
      function ag(e, t) {
        const n = ig.has(e) || og.has(e),
          r = ig.has(t) || og.has(t);
        return (s, i) => {
          let o = "*" == e || e == s,
            a = "*" == t || t == i;
          return (
            !o && n && "boolean" == typeof s && (o = s ? ig.has(e) : og.has(e)),
            !a && r && "boolean" == typeof i && (a = i ? ig.has(t) : og.has(t)),
            o && a
          );
        };
      }
      const lg = new RegExp("s*:selfs*,?", "g");
      function cg(e, t, n) {
        return new ug(e).build(t, n);
      }
      class ug {
        constructor(e) {
          this._driver = e;
        }
        build(e, t) {
          const n = new hg(t);
          return this._resetContextStyleTimingState(n), ng(this, Qm(e), n);
        }
        _resetContextStyleTimingState(e) {
          (e.currentQuerySelector = ""),
            (e.collectedStyles = {}),
            (e.collectedStyles[""] = {}),
            (e.currentTime = 0);
        }
        visitTrigger(e, t) {
          let n = (t.queryCount = 0),
            r = (t.depCount = 0);
          const s = [],
            i = [];
          return (
            "@" == e.name.charAt(0) &&
              t.errors.push(
                "animation triggers cannot be prefixed with an `@` sign (e.g. trigger('@foo', [...]))"
              ),
            e.definitions.forEach((e) => {
              if ((this._resetContextStyleTimingState(t), 0 == e.type)) {
                const n = e,
                  r = n.name;
                r
                  .toString()
                  .split(/\s*,\s*/)
                  .forEach((e) => {
                    (n.name = e), s.push(this.visitState(n, t));
                  }),
                  (n.name = r);
              } else if (1 == e.type) {
                const s = this.visitTransition(e, t);
                (n += s.queryCount), (r += s.depCount), i.push(s);
              } else
                t.errors.push(
                  "only state() and transition() definitions can sit inside of a trigger()"
                );
            }),
            {
              type: 7,
              name: e.name,
              states: s,
              transitions: i,
              queryCount: n,
              depCount: r,
              options: null,
            }
          );
        }
        visitState(e, t) {
          const n = this.visitStyle(e.styles, t),
            r = (e.options && e.options.params) || null;
          if (n.containsDynamicStyles) {
            const s = new Set(),
              i = r || {};
            if (
              (n.styles.forEach((e) => {
                if (dg(e)) {
                  const t = e;
                  Object.keys(t).forEach((e) => {
                    Km(t[e]).forEach((e) => {
                      i.hasOwnProperty(e) || s.add(e);
                    });
                  });
                }
              }),
              s.size)
            ) {
              const n = Jm(s.values());
              t.errors.push(
                `state("${
                  e.name
                }", ...) must define default values for all the following style substitutions: ${n.join(
                  ", "
                )}`
              );
            }
          }
          return {
            type: 0,
            name: e.name,
            style: n,
            options: r ? { params: r } : null,
          };
        }
        visitTransition(e, t) {
          (t.queryCount = 0), (t.depCount = 0);
          const n = ng(this, Qm(e.animation), t);
          return {
            type: 1,
            matchers: sg(e.expr, t.errors),
            animation: n,
            queryCount: t.queryCount,
            depCount: t.depCount,
            options: pg(e.options),
          };
        }
        visitSequence(e, t) {
          return {
            type: 2,
            steps: e.steps.map((e) => ng(this, e, t)),
            options: pg(e.options),
          };
        }
        visitGroup(e, t) {
          const n = t.currentTime;
          let r = 0;
          const s = e.steps.map((e) => {
            t.currentTime = n;
            const s = ng(this, e, t);
            return (r = Math.max(r, t.currentTime)), s;
          });
          return (
            (t.currentTime = r), { type: 3, steps: s, options: pg(e.options) }
          );
        }
        visitAnimate(e, t) {
          const n = (function (e, t) {
            let n = null;
            if (e.hasOwnProperty("duration")) n = e;
            else if ("number" == typeof e) return fg(zm(e, t).duration, 0, "");
            const r = e;
            if (
              r
                .split(/\s+/)
                .some((e) => "{" == e.charAt(0) && "{" == e.charAt(1))
            ) {
              const e = fg(0, 0, "");
              return (e.dynamic = !0), (e.strValue = r), e;
            }
            return (n = n || zm(r, t)), fg(n.duration, n.delay, n.easing);
          })(e.timings, t.errors);
          let r;
          t.currentAnimateTimings = n;
          let s = e.styles ? e.styles : Xp({});
          if (5 == s.type) r = this.visitKeyframes(s, t);
          else {
            let s = e.styles,
              i = !1;
            if (!s) {
              i = !0;
              const e = {};
              n.easing && (e.easing = n.easing), (s = Xp(e));
            }
            t.currentTime += n.duration + n.delay;
            const o = this.visitStyle(s, t);
            (o.isEmptyStep = i), (r = o);
          }
          return (
            (t.currentAnimateTimings = null),
            { type: 4, timings: n, style: r, options: null }
          );
        }
        visitStyle(e, t) {
          const n = this._makeStyleAst(e, t);
          return this._validateStyleAst(n, t), n;
        }
        _makeStyleAst(e, t) {
          const n = [];
          Array.isArray(e.styles)
            ? e.styles.forEach((e) => {
                "string" == typeof e
                  ? "*" == e
                    ? n.push(e)
                    : t.errors.push(
                        `The provided style string value ${e} is not allowed.`
                      )
                  : n.push(e);
              })
            : n.push(e.styles);
          let r = !1,
            s = null;
          return (
            n.forEach((e) => {
              if (dg(e)) {
                const t = e,
                  n = t.easing;
                if ((n && ((s = n), delete t.easing), !r))
                  for (let e in t)
                    if (t[e].toString().indexOf("{{") >= 0) {
                      r = !0;
                      break;
                    }
              }
            }),
            {
              type: 6,
              styles: n,
              easing: s,
              offset: e.offset,
              containsDynamicStyles: r,
              options: null,
            }
          );
        }
        _validateStyleAst(e, t) {
          const n = t.currentAnimateTimings;
          let r = t.currentTime,
            s = t.currentTime;
          n && s > 0 && (s -= n.duration + n.delay),
            e.styles.forEach((e) => {
              "string" != typeof e &&
                Object.keys(e).forEach((n) => {
                  if (!this._driver.validateStyleProperty(n))
                    return void t.errors.push(
                      `The provided animation property "${n}" is not a supported CSS property for animations`
                    );
                  const i = t.collectedStyles[t.currentQuerySelector],
                    o = i[n];
                  let a = !0;
                  o &&
                    (s != r &&
                      s >= o.startTime &&
                      r <= o.endTime &&
                      (t.errors.push(
                        `The CSS property "${n}" that exists between the times of "${o.startTime}ms" and "${o.endTime}ms" is also being animated in a parallel animation between the times of "${s}ms" and "${r}ms"`
                      ),
                      (a = !1)),
                    (s = o.startTime)),
                    a && (i[n] = { startTime: s, endTime: r }),
                    t.options &&
                      (function (e, t, n) {
                        const r = t.params || {},
                          s = Km(e);
                        s.length &&
                          s.forEach((e) => {
                            r.hasOwnProperty(e) ||
                              n.push(
                                `Unable to resolve the local animation param ${e} in the given list of values`
                              );
                          });
                      })(e[n], t.options, t.errors);
                });
            });
        }
        visitKeyframes(e, t) {
          const n = { type: 5, styles: [], options: null };
          if (!t.currentAnimateTimings)
            return (
              t.errors.push(
                "keyframes() must be placed inside of a call to animate()"
              ),
              n
            );
          let r = 0;
          const s = [];
          let i = !1,
            o = !1,
            a = 0;
          const l = e.steps.map((e) => {
            const n = this._makeStyleAst(e, t);
            let l =
                null != n.offset
                  ? n.offset
                  : (function (e) {
                      if ("string" == typeof e) return null;
                      let t = null;
                      if (Array.isArray(e))
                        e.forEach((e) => {
                          if (dg(e) && e.hasOwnProperty("offset")) {
                            const n = e;
                            (t = parseFloat(n.offset)), delete n.offset;
                          }
                        });
                      else if (dg(e) && e.hasOwnProperty("offset")) {
                        const n = e;
                        (t = parseFloat(n.offset)), delete n.offset;
                      }
                      return t;
                    })(n.styles),
              c = 0;
            return (
              null != l && (r++, (c = n.offset = l)),
              (o = o || c < 0 || c > 1),
              (i = i || c < a),
              (a = c),
              s.push(c),
              n
            );
          });
          o &&
            t.errors.push(
              "Please ensure that all keyframe offsets are between 0 and 1"
            ),
            i &&
              t.errors.push(
                "Please ensure that all keyframe offsets are in order"
              );
          const c = e.steps.length;
          let u = 0;
          r > 0 && r < c
            ? t.errors.push(
                "Not all style() steps within the declared keyframes() contain offsets"
              )
            : 0 == r && (u = 1 / (c - 1));
          const h = c - 1,
            d = t.currentTime,
            p = t.currentAnimateTimings,
            f = p.duration;
          return (
            l.forEach((e, r) => {
              const i = u > 0 ? (r == h ? 1 : u * r) : s[r],
                o = i * f;
              (t.currentTime = d + p.delay + o),
                (p.duration = o),
                this._validateStyleAst(e, t),
                (e.offset = i),
                n.styles.push(e);
            }),
            n
          );
        }
        visitReference(e, t) {
          return {
            type: 8,
            animation: ng(this, Qm(e.animation), t),
            options: pg(e.options),
          };
        }
        visitAnimateChild(e, t) {
          return t.depCount++, { type: 9, options: pg(e.options) };
        }
        visitAnimateRef(e, t) {
          return {
            type: 10,
            animation: this.visitReference(e.animation, t),
            options: pg(e.options),
          };
        }
        visitQuery(e, t) {
          const n = t.currentQuerySelector,
            r = e.options || {};
          t.queryCount++, (t.currentQuery = e);
          const [s, i] = (function (e) {
            const t = !!e.split(/\s*,\s*/).find((e) => ":self" == e);
            return (
              t && (e = e.replace(lg, "")),
              [
                (e = e
                  .replace(/@\*/g, ".ng-trigger")
                  .replace(/@\w+/g, (e) => ".ng-trigger-" + e.substr(1))
                  .replace(/:animating/g, ".ng-animating")),
                t,
              ]
            );
          })(e.selector);
          (t.currentQuerySelector = n.length ? n + " " + s : s),
            Cm(t.collectedStyles, t.currentQuerySelector, {});
          const o = ng(this, Qm(e.animation), t);
          return (
            (t.currentQuery = null),
            (t.currentQuerySelector = n),
            {
              type: 11,
              selector: s,
              limit: r.limit || 0,
              optional: !!r.optional,
              includeSelf: i,
              animation: o,
              originalSelector: e.selector,
              options: pg(e.options),
            }
          );
        }
        visitStagger(e, t) {
          t.currentQuery ||
            t.errors.push("stagger() can only be used inside of query()");
          const n =
            "full" === e.timings
              ? { duration: 0, delay: 0, easing: "full" }
              : zm(e.timings, t.errors, !0);
          return {
            type: 12,
            animation: ng(this, Qm(e.animation), t),
            timings: n,
            options: null,
          };
        }
      }
      class hg {
        constructor(e) {
          (this.errors = e),
            (this.queryCount = 0),
            (this.depCount = 0),
            (this.currentTransition = null),
            (this.currentQuery = null),
            (this.currentQuerySelector = null),
            (this.currentAnimateTimings = null),
            (this.currentTime = 0),
            (this.collectedStyles = {}),
            (this.options = null);
        }
      }
      function dg(e) {
        return !Array.isArray(e) && "object" == typeof e;
      }
      function pg(e) {
        var t;
        return (
          e
            ? (e = qm(e)).params && (e.params = (t = e.params) ? qm(t) : null)
            : (e = {}),
          e
        );
      }
      function fg(e, t, n) {
        return { duration: e, delay: t, easing: n };
      }
      function mg(e, t, n, r, s, i, o = null, a = !1) {
        return {
          type: 1,
          element: e,
          keyframes: t,
          preStyleProps: n,
          postStyleProps: r,
          duration: s,
          delay: i,
          totalTime: s + i,
          easing: o,
          subTimeline: a,
        };
      }
      class gg {
        constructor() {
          this._map = new Map();
        }
        consume(e) {
          let t = this._map.get(e);
          return t ? this._map.delete(e) : (t = []), t;
        }
        append(e, t) {
          let n = this._map.get(e);
          n || this._map.set(e, (n = [])), n.push(...t);
        }
        has(e) {
          return this._map.has(e);
        }
        clear() {
          this._map.clear();
        }
      }
      const yg = new RegExp(":enter", "g"),
        vg = new RegExp(":leave", "g");
      function bg(e, t, n, r, s, i = {}, o = {}, a, l, c = []) {
        return new _g().buildKeyframes(e, t, n, r, s, i, o, a, l, c);
      }
      class _g {
        buildKeyframes(e, t, n, r, s, i, o, a, l, c = []) {
          l = l || new gg();
          const u = new Sg(e, t, l, r, s, c, []);
          (u.options = a),
            u.currentTimeline.setStyles([i], null, u.errors, a),
            ng(this, n, u);
          const h = u.timelines.filter((e) => e.containsAnimation());
          if (h.length && Object.keys(o).length) {
            const e = h[h.length - 1];
            e.allowOnlyTimelineStyles() || e.setStyles([o], null, u.errors, a);
          }
          return h.length
            ? h.map((e) => e.buildKeyframes())
            : [mg(t, [], [], [], 0, 0, "", !1)];
        }
        visitTrigger(e, t) {}
        visitState(e, t) {}
        visitTransition(e, t) {}
        visitAnimateChild(e, t) {
          const n = t.subInstructions.consume(t.element);
          if (n) {
            const r = t.createSubContext(e.options),
              s = t.currentTimeline.currentTime,
              i = this._visitSubInstructions(n, r, r.options);
            s != i && t.transformIntoNewTimeline(i);
          }
          t.previousNode = e;
        }
        visitAnimateRef(e, t) {
          const n = t.createSubContext(e.options);
          n.transformIntoNewTimeline(),
            this.visitReference(e.animation, n),
            t.transformIntoNewTimeline(n.currentTimeline.currentTime),
            (t.previousNode = e);
        }
        _visitSubInstructions(e, t, n) {
          let r = t.currentTimeline.currentTime;
          const s = null != n.duration ? Lm(n.duration) : null,
            i = null != n.delay ? Lm(n.delay) : null;
          return (
            0 !== s &&
              e.forEach((e) => {
                const n = t.appendInstructionToTimeline(e, s, i);
                r = Math.max(r, n.duration + n.delay);
              }),
            r
          );
        }
        visitReference(e, t) {
          t.updateOptions(e.options, !0),
            ng(this, e.animation, t),
            (t.previousNode = e);
        }
        visitSequence(e, t) {
          const n = t.subContextCount;
          let r = t;
          const s = e.options;
          if (
            s &&
            (s.params || s.delay) &&
            ((r = t.createSubContext(s)),
            r.transformIntoNewTimeline(),
            null != s.delay)
          ) {
            6 == r.previousNode.type &&
              (r.currentTimeline.snapshotCurrentStyles(),
              (r.previousNode = wg));
            const e = Lm(s.delay);
            r.delayNextStep(e);
          }
          e.steps.length &&
            (e.steps.forEach((e) => ng(this, e, r)),
            r.currentTimeline.applyStylesToKeyframe(),
            r.subContextCount > n && r.transformIntoNewTimeline()),
            (t.previousNode = e);
        }
        visitGroup(e, t) {
          const n = [];
          let r = t.currentTimeline.currentTime;
          const s = e.options && e.options.delay ? Lm(e.options.delay) : 0;
          e.steps.forEach((i) => {
            const o = t.createSubContext(e.options);
            s && o.delayNextStep(s),
              ng(this, i, o),
              (r = Math.max(r, o.currentTimeline.currentTime)),
              n.push(o.currentTimeline);
          }),
            n.forEach((e) => t.currentTimeline.mergeTimelineCollectedStyles(e)),
            t.transformIntoNewTimeline(r),
            (t.previousNode = e);
        }
        _visitTiming(e, t) {
          if (e.dynamic) {
            const n = e.strValue;
            return zm(t.params ? Zm(n, t.params, t.errors) : n, t.errors);
          }
          return { duration: e.duration, delay: e.delay, easing: e.easing };
        }
        visitAnimate(e, t) {
          const n = (t.currentAnimateTimings = this._visitTiming(e.timings, t)),
            r = t.currentTimeline;
          n.delay && (t.incrementTime(n.delay), r.snapshotCurrentStyles());
          const s = e.style;
          5 == s.type
            ? this.visitKeyframes(s, t)
            : (t.incrementTime(n.duration),
              this.visitStyle(s, t),
              r.applyStylesToKeyframe()),
            (t.currentAnimateTimings = null),
            (t.previousNode = e);
        }
        visitStyle(e, t) {
          const n = t.currentTimeline,
            r = t.currentAnimateTimings;
          !r && n.getCurrentStyleProperties().length && n.forwardFrame();
          const s = (r && r.easing) || e.easing;
          e.isEmptyStep
            ? n.applyEmptyStep(s)
            : n.setStyles(e.styles, s, t.errors, t.options),
            (t.previousNode = e);
        }
        visitKeyframes(e, t) {
          const n = t.currentAnimateTimings,
            r = t.currentTimeline.duration,
            s = n.duration,
            i = t.createSubContext().currentTimeline;
          (i.easing = n.easing),
            e.styles.forEach((e) => {
              i.forwardTime((e.offset || 0) * s),
                i.setStyles(e.styles, e.easing, t.errors, t.options),
                i.applyStylesToKeyframe();
            }),
            t.currentTimeline.mergeTimelineCollectedStyles(i),
            t.transformIntoNewTimeline(r + s),
            (t.previousNode = e);
        }
        visitQuery(e, t) {
          const n = t.currentTimeline.currentTime,
            r = e.options || {},
            s = r.delay ? Lm(r.delay) : 0;
          s &&
            (6 === t.previousNode.type ||
              (0 == n &&
                t.currentTimeline.getCurrentStyleProperties().length)) &&
            (t.currentTimeline.snapshotCurrentStyles(), (t.previousNode = wg));
          let i = n;
          const o = t.invokeQuery(
            e.selector,
            e.originalSelector,
            e.limit,
            e.includeSelf,
            !!r.optional,
            t.errors
          );
          t.currentQueryTotal = o.length;
          let a = null;
          o.forEach((n, r) => {
            t.currentQueryIndex = r;
            const o = t.createSubContext(e.options, n);
            s && o.delayNextStep(s),
              n === t.element && (a = o.currentTimeline),
              ng(this, e.animation, o),
              o.currentTimeline.applyStylesToKeyframe(),
              (i = Math.max(i, o.currentTimeline.currentTime));
          }),
            (t.currentQueryIndex = 0),
            (t.currentQueryTotal = 0),
            t.transformIntoNewTimeline(i),
            a &&
              (t.currentTimeline.mergeTimelineCollectedStyles(a),
              t.currentTimeline.snapshotCurrentStyles()),
            (t.previousNode = e);
        }
        visitStagger(e, t) {
          const n = t.parentContext,
            r = t.currentTimeline,
            s = e.timings,
            i = Math.abs(s.duration),
            o = i * (t.currentQueryTotal - 1);
          let a = i * t.currentQueryIndex;
          switch (s.duration < 0 ? "reverse" : s.easing) {
            case "reverse":
              a = o - a;
              break;
            case "full":
              a = n.currentStaggerTime;
          }
          const l = t.currentTimeline;
          a && l.delayNextStep(a);
          const c = l.currentTime;
          ng(this, e.animation, t),
            (t.previousNode = e),
            (n.currentStaggerTime =
              r.currentTime - c + (r.startTime - n.currentTimeline.startTime));
        }
      }
      const wg = {};
      class Sg {
        constructor(e, t, n, r, s, i, o, a) {
          (this._driver = e),
            (this.element = t),
            (this.subInstructions = n),
            (this._enterClassName = r),
            (this._leaveClassName = s),
            (this.errors = i),
            (this.timelines = o),
            (this.parentContext = null),
            (this.currentAnimateTimings = null),
            (this.previousNode = wg),
            (this.subContextCount = 0),
            (this.options = {}),
            (this.currentQueryIndex = 0),
            (this.currentQueryTotal = 0),
            (this.currentStaggerTime = 0),
            (this.currentTimeline = a || new Cg(this._driver, t, 0)),
            o.push(this.currentTimeline);
        }
        get params() {
          return this.options.params;
        }
        updateOptions(e, t) {
          if (!e) return;
          const n = e;
          let r = this.options;
          null != n.duration && (r.duration = Lm(n.duration)),
            null != n.delay && (r.delay = Lm(n.delay));
          const s = n.params;
          if (s) {
            let e = r.params;
            e || (e = this.options.params = {}),
              Object.keys(s).forEach((n) => {
                (t && e.hasOwnProperty(n)) || (e[n] = Zm(s[n], e, this.errors));
              });
          }
        }
        _copyOptions() {
          const e = {};
          if (this.options) {
            const t = this.options.params;
            if (t) {
              const n = (e.params = {});
              Object.keys(t).forEach((e) => {
                n[e] = t[e];
              });
            }
          }
          return e;
        }
        createSubContext(e = null, t, n) {
          const r = t || this.element,
            s = new Sg(
              this._driver,
              r,
              this.subInstructions,
              this._enterClassName,
              this._leaveClassName,
              this.errors,
              this.timelines,
              this.currentTimeline.fork(r, n || 0)
            );
          return (
            (s.previousNode = this.previousNode),
            (s.currentAnimateTimings = this.currentAnimateTimings),
            (s.options = this._copyOptions()),
            s.updateOptions(e),
            (s.currentQueryIndex = this.currentQueryIndex),
            (s.currentQueryTotal = this.currentQueryTotal),
            (s.parentContext = this),
            this.subContextCount++,
            s
          );
        }
        transformIntoNewTimeline(e) {
          return (
            (this.previousNode = wg),
            (this.currentTimeline = this.currentTimeline.fork(this.element, e)),
            this.timelines.push(this.currentTimeline),
            this.currentTimeline
          );
        }
        appendInstructionToTimeline(e, t, n) {
          const r = {
              duration: null != t ? t : e.duration,
              delay:
                this.currentTimeline.currentTime +
                (null != n ? n : 0) +
                e.delay,
              easing: "",
            },
            s = new Eg(
              this._driver,
              e.element,
              e.keyframes,
              e.preStyleProps,
              e.postStyleProps,
              r,
              e.stretchStartingKeyframe
            );
          return this.timelines.push(s), r;
        }
        incrementTime(e) {
          this.currentTimeline.forwardTime(this.currentTimeline.duration + e);
        }
        delayNextStep(e) {
          e > 0 && this.currentTimeline.delayNextStep(e);
        }
        invokeQuery(e, t, n, r, s, i) {
          let o = [];
          if ((r && o.push(this.element), e.length > 0)) {
            e = (e = e.replace(yg, "." + this._enterClassName)).replace(
              vg,
              "." + this._leaveClassName
            );
            let t = this._driver.query(this.element, e, 1 != n);
            0 !== n &&
              (t = n < 0 ? t.slice(t.length + n, t.length) : t.slice(0, n)),
              o.push(...t);
          }
          return (
            s ||
              0 != o.length ||
              i.push(
                `\`query("${t}")\` returned zero elements. (Use \`query("${t}", { optional: true })\` if you wish to allow this.)`
              ),
            o
          );
        }
      }
      class Cg {
        constructor(e, t, n, r) {
          (this._driver = e),
            (this.element = t),
            (this.startTime = n),
            (this._elementTimelineStylesLookup = r),
            (this.duration = 0),
            (this._previousKeyframe = {}),
            (this._currentKeyframe = {}),
            (this._keyframes = new Map()),
            (this._styleSummary = {}),
            (this._pendingStyles = {}),
            (this._backFill = {}),
            (this._currentEmptyStepKeyframe = null),
            this._elementTimelineStylesLookup ||
              (this._elementTimelineStylesLookup = new Map()),
            (this._localTimelineStyles = Object.create(this._backFill, {})),
            (this._globalTimelineStyles =
              this._elementTimelineStylesLookup.get(t)),
            this._globalTimelineStyles ||
              ((this._globalTimelineStyles = this._localTimelineStyles),
              this._elementTimelineStylesLookup.set(
                t,
                this._localTimelineStyles
              )),
            this._loadKeyframe();
        }
        containsAnimation() {
          switch (this._keyframes.size) {
            case 0:
              return !1;
            case 1:
              return this.getCurrentStyleProperties().length > 0;
            default:
              return !0;
          }
        }
        getCurrentStyleProperties() {
          return Object.keys(this._currentKeyframe);
        }
        get currentTime() {
          return this.startTime + this.duration;
        }
        delayNextStep(e) {
          const t =
            1 == this._keyframes.size &&
            Object.keys(this._pendingStyles).length;
          this.duration || t
            ? (this.forwardTime(this.currentTime + e),
              t && this.snapshotCurrentStyles())
            : (this.startTime += e);
        }
        fork(e, t) {
          return (
            this.applyStylesToKeyframe(),
            new Cg(
              this._driver,
              e,
              t || this.currentTime,
              this._elementTimelineStylesLookup
            )
          );
        }
        _loadKeyframe() {
          this._currentKeyframe &&
            (this._previousKeyframe = this._currentKeyframe),
            (this._currentKeyframe = this._keyframes.get(this.duration)),
            this._currentKeyframe ||
              ((this._currentKeyframe = Object.create(this._backFill, {})),
              this._keyframes.set(this.duration, this._currentKeyframe));
        }
        forwardFrame() {
          (this.duration += 1), this._loadKeyframe();
        }
        forwardTime(e) {
          this.applyStylesToKeyframe(),
            (this.duration = e),
            this._loadKeyframe();
        }
        _updateStyle(e, t) {
          (this._localTimelineStyles[e] = t),
            (this._globalTimelineStyles[e] = t),
            (this._styleSummary[e] = { time: this.currentTime, value: t });
        }
        allowOnlyTimelineStyles() {
          return this._currentEmptyStepKeyframe !== this._currentKeyframe;
        }
        applyEmptyStep(e) {
          e && (this._previousKeyframe.easing = e),
            Object.keys(this._globalTimelineStyles).forEach((e) => {
              (this._backFill[e] = this._globalTimelineStyles[e] || "*"),
                (this._currentKeyframe[e] = "*");
            }),
            (this._currentEmptyStepKeyframe = this._currentKeyframe);
        }
        setStyles(e, t, n, r) {
          t && (this._previousKeyframe.easing = t);
          const s = (r && r.params) || {},
            i = (function (e, t) {
              const n = {};
              let r;
              return (
                e.forEach((e) => {
                  "*" === e
                    ? ((r = r || Object.keys(t)),
                      r.forEach((e) => {
                        n[e] = "*";
                      }))
                    : Hm(e, !1, n);
                }),
                n
              );
            })(e, this._globalTimelineStyles);
          Object.keys(i).forEach((e) => {
            const t = Zm(i[e], s, n);
            (this._pendingStyles[e] = t),
              this._localTimelineStyles.hasOwnProperty(e) ||
                (this._backFill[e] = this._globalTimelineStyles.hasOwnProperty(
                  e
                )
                  ? this._globalTimelineStyles[e]
                  : "*"),
              this._updateStyle(e, t);
          });
        }
        applyStylesToKeyframe() {
          const e = this._pendingStyles,
            t = Object.keys(e);
          0 != t.length &&
            ((this._pendingStyles = {}),
            t.forEach((t) => {
              this._currentKeyframe[t] = e[t];
            }),
            Object.keys(this._localTimelineStyles).forEach((e) => {
              this._currentKeyframe.hasOwnProperty(e) ||
                (this._currentKeyframe[e] = this._localTimelineStyles[e]);
            }));
        }
        snapshotCurrentStyles() {
          Object.keys(this._localTimelineStyles).forEach((e) => {
            const t = this._localTimelineStyles[e];
            (this._pendingStyles[e] = t), this._updateStyle(e, t);
          });
        }
        getFinalKeyframe() {
          return this._keyframes.get(this.duration);
        }
        get properties() {
          const e = [];
          for (let t in this._currentKeyframe) e.push(t);
          return e;
        }
        mergeTimelineCollectedStyles(e) {
          Object.keys(e._styleSummary).forEach((t) => {
            const n = this._styleSummary[t],
              r = e._styleSummary[t];
            (!n || r.time > n.time) && this._updateStyle(t, r.value);
          });
        }
        buildKeyframes() {
          this.applyStylesToKeyframe();
          const e = new Set(),
            t = new Set(),
            n = 1 === this._keyframes.size && 0 === this.duration;
          let r = [];
          this._keyframes.forEach((s, i) => {
            const o = Hm(s, !0);
            Object.keys(o).forEach((n) => {
              const r = o[n];
              "!" == r ? e.add(n) : "*" == r && t.add(n);
            }),
              n || (o.offset = i / this.duration),
              r.push(o);
          });
          const s = e.size ? Jm(e.values()) : [],
            i = t.size ? Jm(t.values()) : [];
          if (n) {
            const e = r[0],
              t = qm(e);
            (e.offset = 0), (t.offset = 1), (r = [e, t]);
          }
          return mg(
            this.element,
            r,
            s,
            i,
            this.duration,
            this.startTime,
            this.easing,
            !1
          );
        }
      }
      class Eg extends Cg {
        constructor(e, t, n, r, s, i, o = !1) {
          super(e, t, i.delay),
            (this.element = t),
            (this.keyframes = n),
            (this.preStyleProps = r),
            (this.postStyleProps = s),
            (this._stretchStartingKeyframe = o),
            (this.timings = {
              duration: i.duration,
              delay: i.delay,
              easing: i.easing,
            });
        }
        containsAnimation() {
          return this.keyframes.length > 1;
        }
        buildKeyframes() {
          let e = this.keyframes,
            { delay: t, duration: n, easing: r } = this.timings;
          if (this._stretchStartingKeyframe && t) {
            const s = [],
              i = n + t,
              o = t / i,
              a = Hm(e[0], !1);
            (a.offset = 0), s.push(a);
            const l = Hm(e[0], !1);
            (l.offset = kg(o)), s.push(l);
            const c = e.length - 1;
            for (let r = 1; r <= c; r++) {
              let o = Hm(e[r], !1);
              (o.offset = kg((t + o.offset * n) / i)), s.push(o);
            }
            (n = i), (t = 0), (r = ""), (e = s);
          }
          return mg(
            this.element,
            e,
            this.preStyleProps,
            this.postStyleProps,
            n,
            t,
            r,
            !0
          );
        }
      }
      function kg(e, t = 3) {
        const n = Math.pow(10, t - 1);
        return Math.round(e * n) / n;
      }
      class xg {}
      class Tg extends xg {
        normalizePropertyName(e, t) {
          return Xm(e);
        }
        normalizeStyleValue(e, t, n, r) {
          let s = "";
          const i = n.toString().trim();
          if (Ig[t] && 0 !== n && "0" !== n)
            if ("number" == typeof n) s = "px";
            else {
              const t = n.match(/^[+-]?[\d\.]+([a-z]*)$/);
              t &&
                0 == t[1].length &&
                r.push(`Please provide a CSS unit value for ${e}:${n}`);
            }
          return i + s;
        }
      }
      const Ig = (() =>
        (function (e) {
          const t = {};
          return e.forEach((e) => (t[e] = !0)), t;
        })(
          "width,height,minWidth,minHeight,maxWidth,maxHeight,left,top,bottom,right,fontSize,outlineWidth,outlineOffset,paddingTop,paddingLeft,paddingBottom,paddingRight,marginTop,marginLeft,marginBottom,marginRight,borderRadius,borderWidth,borderTopWidth,borderLeftWidth,borderRightWidth,borderBottomWidth,textIndent,perspective".split(
            ","
          )
        ))();
      function Ag(e, t, n, r, s, i, o, a, l, c, u, h, d) {
        return {
          type: 0,
          element: e,
          triggerName: t,
          isRemovalTransition: s,
          fromState: n,
          fromStyles: i,
          toState: r,
          toStyles: o,
          timelines: a,
          queriedElements: l,
          preStyleProps: c,
          postStyleProps: u,
          totalTime: h,
          errors: d,
        };
      }
      const Og = {};
      class Rg {
        constructor(e, t, n) {
          (this._triggerName = e), (this.ast = t), (this._stateStyles = n);
        }
        match(e, t, n, r) {
          return (function (e, t, n, r, s) {
            return e.some((e) => e(t, n, r, s));
          })(this.ast.matchers, e, t, n, r);
        }
        buildStyles(e, t, n) {
          const r = this._stateStyles["*"],
            s = this._stateStyles[e],
            i = r ? r.buildStyles(t, n) : {};
          return s ? s.buildStyles(t, n) : i;
        }
        build(e, t, n, r, s, i, o, a, l, c) {
          const u = [],
            h = (this.ast.options && this.ast.options.params) || Og,
            d = this.buildStyles(n, (o && o.params) || Og, u),
            p = (a && a.params) || Og,
            f = this.buildStyles(r, p, u),
            m = new Set(),
            g = new Map(),
            y = new Map(),
            v = "void" === r,
            b = { params: Object.assign(Object.assign({}, h), p) },
            _ = c ? [] : bg(e, t, this.ast.animation, s, i, d, f, b, l, u);
          let w = 0;
          if (
            (_.forEach((e) => {
              w = Math.max(e.duration + e.delay, w);
            }),
            u.length)
          )
            return Ag(t, this._triggerName, n, r, v, d, f, [], [], g, y, w, u);
          _.forEach((e) => {
            const n = e.element,
              r = Cm(g, n, {});
            e.preStyleProps.forEach((e) => (r[e] = !0));
            const s = Cm(y, n, {});
            e.postStyleProps.forEach((e) => (s[e] = !0)), n !== t && m.add(n);
          });
          const S = Jm(m.values());
          return Ag(t, this._triggerName, n, r, v, d, f, _, S, g, y, w);
        }
      }
      class Pg {
        constructor(e, t) {
          (this.styles = e), (this.defaultParams = t);
        }
        buildStyles(e, t) {
          const n = {},
            r = qm(this.defaultParams);
          return (
            Object.keys(e).forEach((t) => {
              const n = e[t];
              null != n && (r[t] = n);
            }),
            this.styles.styles.forEach((e) => {
              if ("string" != typeof e) {
                const s = e;
                Object.keys(s).forEach((e) => {
                  let i = s[e];
                  i.length > 1 && (i = Zm(i, r, t)), (n[e] = i);
                });
              }
            }),
            n
          );
        }
      }
      class Dg {
        constructor(e, t) {
          (this.name = e),
            (this.ast = t),
            (this.transitionFactories = []),
            (this.states = {}),
            t.states.forEach((e) => {
              this.states[e.name] = new Pg(
                e.style,
                (e.options && e.options.params) || {}
              );
            }),
            Ng(this.states, "true", "1"),
            Ng(this.states, "false", "0"),
            t.transitions.forEach((t) => {
              this.transitionFactories.push(new Rg(e, t, this.states));
            }),
            (this.fallbackTransition = new Rg(
              e,
              {
                type: 1,
                animation: { type: 2, steps: [], options: null },
                matchers: [(e, t) => !0],
                options: null,
                queryCount: 0,
                depCount: 0,
              },
              this.states
            ));
        }
        get containsQueries() {
          return this.ast.queryCount > 0;
        }
        matchTransition(e, t, n, r) {
          return (
            this.transitionFactories.find((s) => s.match(e, t, n, r)) || null
          );
        }
        matchStyles(e, t, n) {
          return this.fallbackTransition.buildStyles(e, t, n);
        }
      }
      function Ng(e, t, n) {
        e.hasOwnProperty(t)
          ? e.hasOwnProperty(n) || (e[n] = e[t])
          : e.hasOwnProperty(n) && (e[t] = e[n]);
      }
      const Mg = new gg();
      class Fg {
        constructor(e, t, n) {
          (this.bodyNode = e),
            (this._driver = t),
            (this._normalizer = n),
            (this._animations = {}),
            (this._playersById = {}),
            (this.players = []);
        }
        register(e, t) {
          const n = [],
            r = cg(this._driver, t, n);
          if (n.length)
            throw new Error(
              `Unable to build the animation due to the following errors: ${n.join(
                "\n"
              )}`
            );
          this._animations[e] = r;
        }
        _buildPlayer(e, t, n) {
          const r = e.element,
            s = bm(0, this._normalizer, 0, e.keyframes, t, n);
          return this._driver.animate(
            r,
            s,
            e.duration,
            e.delay,
            e.easing,
            [],
            !0
          );
        }
        create(e, t, n = {}) {
          const r = [],
            s = this._animations[e];
          let i;
          const o = new Map();
          if (
            (s
              ? ((i = bg(
                  this._driver,
                  t,
                  s,
                  "ng-enter",
                  "ng-leave",
                  {},
                  {},
                  n,
                  Mg,
                  r
                )),
                i.forEach((e) => {
                  const t = Cm(o, e.element, {});
                  e.postStyleProps.forEach((e) => (t[e] = null));
                }))
              : (r.push(
                  "The requested animation doesn't exist or has already been destroyed"
                ),
                (i = [])),
            r.length)
          )
            throw new Error(
              `Unable to create the animation due to the following errors: ${r.join(
                "\n"
              )}`
            );
          o.forEach((e, t) => {
            Object.keys(e).forEach((n) => {
              e[n] = this._driver.computeStyle(t, n, "*");
            });
          });
          const a = vm(
            i.map((e) => {
              const t = o.get(e.element);
              return this._buildPlayer(e, {}, t);
            })
          );
          return (
            (this._playersById[e] = a),
            a.onDestroy(() => this.destroy(e)),
            this.players.push(a),
            a
          );
        }
        destroy(e) {
          const t = this._getPlayer(e);
          t.destroy(), delete this._playersById[e];
          const n = this.players.indexOf(t);
          n >= 0 && this.players.splice(n, 1);
        }
        _getPlayer(e) {
          const t = this._playersById[e];
          if (!t)
            throw new Error(
              `Unable to find the timeline player referenced by ${e}`
            );
          return t;
        }
        listen(e, t, n, r) {
          const s = Sm(t, "", "", "");
          return _m(this._getPlayer(e), n, s, r), () => {};
        }
        command(e, t, n, r) {
          if ("register" == n) return void this.register(e, r[0]);
          if ("create" == n) return void this.create(e, t, r[0] || {});
          const s = this._getPlayer(e);
          switch (n) {
            case "play":
              s.play();
              break;
            case "pause":
              s.pause();
              break;
            case "reset":
              s.reset();
              break;
            case "restart":
              s.restart();
              break;
            case "finish":
              s.finish();
              break;
            case "init":
              s.init();
              break;
            case "setPosition":
              s.setPosition(parseFloat(r[0]));
              break;
            case "destroy":
              this.destroy(e);
          }
        }
      }
      const jg = [],
        Lg = {
          namespaceId: "",
          setForRemoval: !1,
          setForMove: !1,
          hasAnimation: !1,
          removedBeforeQueried: !1,
        },
        Wg = {
          namespaceId: "",
          setForMove: !1,
          setForRemoval: !1,
          hasAnimation: !1,
          removedBeforeQueried: !0,
        };
      class zg {
        constructor(e, t = "") {
          this.namespaceId = t;
          const n = e && e.hasOwnProperty("value");
          if (((this.value = null != (r = n ? e.value : e) ? r : null), n)) {
            const t = qm(e);
            delete t.value, (this.options = t);
          } else this.options = {};
          var r;
          this.options.params || (this.options.params = {});
        }
        get params() {
          return this.options.params;
        }
        absorbOptions(e) {
          const t = e.params;
          if (t) {
            const e = this.options.params;
            Object.keys(t).forEach((n) => {
              null == e[n] && (e[n] = t[n]);
            });
          }
        }
      }
      const qg = new zg("void");
      class Hg {
        constructor(e, t, n) {
          (this.id = e),
            (this.hostElement = t),
            (this._engine = n),
            (this.players = []),
            (this._triggers = {}),
            (this._queue = []),
            (this._elementListeners = new Map()),
            (this._hostClassName = "ng-tns-" + e),
            Kg(t, this._hostClassName);
        }
        listen(e, t, n, r) {
          if (!this._triggers.hasOwnProperty(t))
            throw new Error(
              `Unable to listen on the animation trigger event "${n}" because the animation trigger "${t}" doesn't exist!`
            );
          if (null == n || 0 == n.length)
            throw new Error(
              `Unable to listen on the animation trigger "${t}" because the provided event is undefined!`
            );
          if ("start" != (s = n) && "done" != s)
            throw new Error(
              `The provided animation trigger event "${n}" for the animation trigger "${t}" is not supported!`
            );
          var s;
          const i = Cm(this._elementListeners, e, []),
            o = { name: t, phase: n, callback: r };
          i.push(o);
          const a = Cm(this._engine.statesByElement, e, {});
          return (
            a.hasOwnProperty(t) ||
              (Kg(e, "ng-trigger"), Kg(e, "ng-trigger-" + t), (a[t] = qg)),
            () => {
              this._engine.afterFlush(() => {
                const e = i.indexOf(o);
                e >= 0 && i.splice(e, 1), this._triggers[t] || delete a[t];
              });
            }
          );
        }
        register(e, t) {
          return !this._triggers[e] && ((this._triggers[e] = t), !0);
        }
        _getTrigger(e) {
          const t = this._triggers[e];
          if (!t)
            throw new Error(
              `The provided animation trigger "${e}" has not been registered!`
            );
          return t;
        }
        trigger(e, t, n, r = !0) {
          const s = this._getTrigger(t),
            i = new Vg(this.id, t, e);
          let o = this._engine.statesByElement.get(e);
          o ||
            (Kg(e, "ng-trigger"),
            Kg(e, "ng-trigger-" + t),
            this._engine.statesByElement.set(e, (o = {})));
          let a = o[t];
          const l = new zg(n, this.id);
          if (
            (!(n && n.hasOwnProperty("value")) &&
              a &&
              l.absorbOptions(a.options),
            (o[t] = l),
            a || (a = qg),
            "void" !== l.value && a.value === l.value)
          ) {
            if (
              !(function (e, t) {
                const n = Object.keys(e),
                  r = Object.keys(t);
                if (n.length != r.length) return !1;
                for (let s = 0; s < n.length; s++) {
                  const r = n[s];
                  if (!t.hasOwnProperty(r) || e[r] !== t[r]) return !1;
                }
                return !0;
              })(a.params, l.params)
            ) {
              const t = [],
                n = s.matchStyles(a.value, a.params, t),
                r = s.matchStyles(l.value, l.params, t);
              t.length
                ? this._engine.reportError(t)
                : this._engine.afterFlush(() => {
                    $m(e, n), Bm(e, r);
                  });
            }
            return;
          }
          const c = Cm(this._engine.playersByElement, e, []);
          c.forEach((e) => {
            e.namespaceId == this.id &&
              e.triggerName == t &&
              e.queued &&
              e.destroy();
          });
          let u = s.matchTransition(a.value, l.value, e, l.params),
            h = !1;
          if (!u) {
            if (!r) return;
            (u = s.fallbackTransition), (h = !0);
          }
          return (
            this._engine.totalQueuedPlayers++,
            this._queue.push({
              element: e,
              triggerName: t,
              transition: u,
              fromState: a,
              toState: l,
              player: i,
              isFallbackTransition: h,
            }),
            h ||
              (Kg(e, "ng-animate-queued"),
              i.onStart(() => {
                Zg(e, "ng-animate-queued");
              })),
            i.onDone(() => {
              let t = this.players.indexOf(i);
              t >= 0 && this.players.splice(t, 1);
              const n = this._engine.playersByElement.get(e);
              if (n) {
                let e = n.indexOf(i);
                e >= 0 && n.splice(e, 1);
              }
            }),
            this.players.push(i),
            c.push(i),
            i
          );
        }
        deregister(e) {
          delete this._triggers[e],
            this._engine.statesByElement.forEach((t, n) => {
              delete t[e];
            }),
            this._elementListeners.forEach((t, n) => {
              this._elementListeners.set(
                n,
                t.filter((t) => t.name != e)
              );
            });
        }
        clearElementCache(e) {
          this._engine.statesByElement.delete(e),
            this._elementListeners.delete(e);
          const t = this._engine.playersByElement.get(e);
          t &&
            (t.forEach((e) => e.destroy()),
            this._engine.playersByElement.delete(e));
        }
        _signalRemovalForInnerTriggers(e, t) {
          const n = this._engine.driver.query(e, ".ng-trigger", !0);
          n.forEach((e) => {
            if (e.__ng_removed) return;
            const n = this._engine.fetchNamespacesByElement(e);
            n.size
              ? n.forEach((n) => n.triggerLeaveAnimation(e, t, !1, !0))
              : this.clearElementCache(e);
          }),
            this._engine.afterFlushAnimationsDone(() =>
              n.forEach((e) => this.clearElementCache(e))
            );
        }
        triggerLeaveAnimation(e, t, n, r) {
          const s = this._engine.statesByElement.get(e);
          if (s) {
            const i = [];
            if (
              (Object.keys(s).forEach((t) => {
                if (this._triggers[t]) {
                  const n = this.trigger(e, t, "void", r);
                  n && i.push(n);
                }
              }),
              i.length)
            )
              return (
                this._engine.markElementAsRemoved(this.id, e, !0, t),
                n && vm(i).onDone(() => this._engine.processLeaveNode(e)),
                !0
              );
          }
          return !1;
        }
        prepareLeaveAnimationListeners(e) {
          const t = this._elementListeners.get(e),
            n = this._engine.statesByElement.get(e);
          if (t && n) {
            const r = new Set();
            t.forEach((t) => {
              const s = t.name;
              if (r.has(s)) return;
              r.add(s);
              const i = this._triggers[s].fallbackTransition,
                o = n[s] || qg,
                a = new zg("void"),
                l = new Vg(this.id, s, e);
              this._engine.totalQueuedPlayers++,
                this._queue.push({
                  element: e,
                  triggerName: s,
                  transition: i,
                  fromState: o,
                  toState: a,
                  player: l,
                  isFallbackTransition: !0,
                });
            });
          }
        }
        removeNode(e, t) {
          const n = this._engine;
          if (
            (e.childElementCount && this._signalRemovalForInnerTriggers(e, t),
            this.triggerLeaveAnimation(e, t, !0))
          )
            return;
          let r = !1;
          if (n.totalAnimations) {
            const t = n.players.length ? n.playersByQueriedElement.get(e) : [];
            if (t && t.length) r = !0;
            else {
              let t = e;
              for (; (t = t.parentNode); )
                if (n.statesByElement.get(t)) {
                  r = !0;
                  break;
                }
            }
          }
          if ((this.prepareLeaveAnimationListeners(e), r))
            n.markElementAsRemoved(this.id, e, !1, t);
          else {
            const r = e.__ng_removed;
            (r && r !== Lg) ||
              (n.afterFlush(() => this.clearElementCache(e)),
              n.destroyInnerAnimations(e),
              n._onRemovalComplete(e, t));
          }
        }
        insertNode(e, t) {
          Kg(e, this._hostClassName);
        }
        drainQueuedTransitions(e) {
          const t = [];
          return (
            this._queue.forEach((n) => {
              const r = n.player;
              if (r.destroyed) return;
              const s = n.element,
                i = this._elementListeners.get(s);
              i &&
                i.forEach((t) => {
                  if (t.name == n.triggerName) {
                    const r = Sm(
                      s,
                      n.triggerName,
                      n.fromState.value,
                      n.toState.value
                    );
                    (r._data = e), _m(n.player, t.phase, r, t.callback);
                  }
                }),
                r.markedForDestroy
                  ? this._engine.afterFlush(() => {
                      r.destroy();
                    })
                  : t.push(n);
            }),
            (this._queue = []),
            t.sort((e, t) => {
              const n = e.transition.ast.depCount,
                r = t.transition.ast.depCount;
              return 0 == n || 0 == r
                ? n - r
                : this._engine.driver.containsElement(e.element, t.element)
                ? 1
                : -1;
            })
          );
        }
        destroy(e) {
          this.players.forEach((e) => e.destroy()),
            this._signalRemovalForInnerTriggers(this.hostElement, e);
        }
        elementContainsData(e) {
          let t = !1;
          return (
            this._elementListeners.has(e) && (t = !0),
            (t = !!this._queue.find((t) => t.element === e) || t),
            t
          );
        }
      }
      class Ug {
        constructor(e, t, n) {
          (this.bodyNode = e),
            (this.driver = t),
            (this._normalizer = n),
            (this.players = []),
            (this.newHostElements = new Map()),
            (this.playersByElement = new Map()),
            (this.playersByQueriedElement = new Map()),
            (this.statesByElement = new Map()),
            (this.disabledNodes = new Set()),
            (this.totalAnimations = 0),
            (this.totalQueuedPlayers = 0),
            (this._namespaceLookup = {}),
            (this._namespaceList = []),
            (this._flushFns = []),
            (this._whenQuietFns = []),
            (this.namespacesByHostElement = new Map()),
            (this.collectedEnterElements = []),
            (this.collectedLeaveElements = []),
            (this.onRemovalComplete = (e, t) => {});
        }
        _onRemovalComplete(e, t) {
          this.onRemovalComplete(e, t);
        }
        get queuedPlayers() {
          const e = [];
          return (
            this._namespaceList.forEach((t) => {
              t.players.forEach((t) => {
                t.queued && e.push(t);
              });
            }),
            e
          );
        }
        createNamespace(e, t) {
          const n = new Hg(e, t, this);
          return (
            this.bodyNode && this.driver.containsElement(this.bodyNode, t)
              ? this._balanceNamespaceList(n, t)
              : (this.newHostElements.set(t, n), this.collectEnterElement(t)),
            (this._namespaceLookup[e] = n)
          );
        }
        _balanceNamespaceList(e, t) {
          const n = this._namespaceList.length - 1;
          if (n >= 0) {
            let r = !1;
            for (let s = n; s >= 0; s--)
              if (
                this.driver.containsElement(
                  this._namespaceList[s].hostElement,
                  t
                )
              ) {
                this._namespaceList.splice(s + 1, 0, e), (r = !0);
                break;
              }
            r || this._namespaceList.splice(0, 0, e);
          } else this._namespaceList.push(e);
          return this.namespacesByHostElement.set(t, e), e;
        }
        register(e, t) {
          let n = this._namespaceLookup[e];
          return n || (n = this.createNamespace(e, t)), n;
        }
        registerTrigger(e, t, n) {
          let r = this._namespaceLookup[e];
          r && r.register(t, n) && this.totalAnimations++;
        }
        destroy(e, t) {
          if (!e) return;
          const n = this._fetchNamespace(e);
          this.afterFlush(() => {
            this.namespacesByHostElement.delete(n.hostElement),
              delete this._namespaceLookup[e];
            const t = this._namespaceList.indexOf(n);
            t >= 0 && this._namespaceList.splice(t, 1);
          }),
            this.afterFlushAnimationsDone(() => n.destroy(t));
        }
        _fetchNamespace(e) {
          return this._namespaceLookup[e];
        }
        fetchNamespacesByElement(e) {
          const t = new Set(),
            n = this.statesByElement.get(e);
          if (n) {
            const e = Object.keys(n);
            for (let r = 0; r < e.length; r++) {
              const s = n[e[r]].namespaceId;
              if (s) {
                const e = this._fetchNamespace(s);
                e && t.add(e);
              }
            }
          }
          return t;
        }
        trigger(e, t, n, r) {
          if (Bg(t)) {
            const s = this._fetchNamespace(e);
            if (s) return s.trigger(t, n, r), !0;
          }
          return !1;
        }
        insertNode(e, t, n, r) {
          if (!Bg(t)) return;
          const s = t.__ng_removed;
          if (s && s.setForRemoval) {
            (s.setForRemoval = !1), (s.setForMove = !0);
            const e = this.collectedLeaveElements.indexOf(t);
            e >= 0 && this.collectedLeaveElements.splice(e, 1);
          }
          if (e) {
            const r = this._fetchNamespace(e);
            r && r.insertNode(t, n);
          }
          r && this.collectEnterElement(t);
        }
        collectEnterElement(e) {
          this.collectedEnterElements.push(e);
        }
        markElementAsDisabled(e, t) {
          t
            ? this.disabledNodes.has(e) ||
              (this.disabledNodes.add(e), Kg(e, "ng-animate-disabled"))
            : this.disabledNodes.has(e) &&
              (this.disabledNodes.delete(e), Zg(e, "ng-animate-disabled"));
        }
        removeNode(e, t, n, r) {
          if (Bg(t)) {
            const s = e ? this._fetchNamespace(e) : null;
            if (
              (s ? s.removeNode(t, r) : this.markElementAsRemoved(e, t, !1, r),
              n)
            ) {
              const n = this.namespacesByHostElement.get(t);
              n && n.id !== e && n.removeNode(t, r);
            }
          } else this._onRemovalComplete(t, r);
        }
        markElementAsRemoved(e, t, n, r) {
          this.collectedLeaveElements.push(t),
            (t.__ng_removed = {
              namespaceId: e,
              setForRemoval: r,
              hasAnimation: n,
              removedBeforeQueried: !1,
            });
        }
        listen(e, t, n, r, s) {
          return Bg(t) ? this._fetchNamespace(e).listen(t, n, r, s) : () => {};
        }
        _buildInstruction(e, t, n, r, s) {
          return e.transition.build(
            this.driver,
            e.element,
            e.fromState.value,
            e.toState.value,
            n,
            r,
            e.fromState.options,
            e.toState.options,
            t,
            s
          );
        }
        destroyInnerAnimations(e) {
          let t = this.driver.query(e, ".ng-trigger", !0);
          t.forEach((e) => this.destroyActiveAnimationsForElement(e)),
            0 != this.playersByQueriedElement.size &&
              ((t = this.driver.query(e, ".ng-animating", !0)),
              t.forEach((e) => this.finishActiveQueriedAnimationOnElement(e)));
        }
        destroyActiveAnimationsForElement(e) {
          const t = this.playersByElement.get(e);
          t &&
            t.forEach((e) => {
              e.queued ? (e.markedForDestroy = !0) : e.destroy();
            });
        }
        finishActiveQueriedAnimationOnElement(e) {
          const t = this.playersByQueriedElement.get(e);
          t && t.forEach((e) => e.finish());
        }
        whenRenderingDone() {
          return new Promise((e) => {
            if (this.players.length) return vm(this.players).onDone(() => e());
            e();
          });
        }
        processLeaveNode(e) {
          const t = e.__ng_removed;
          if (t && t.setForRemoval) {
            if (((e.__ng_removed = Lg), t.namespaceId)) {
              this.destroyInnerAnimations(e);
              const n = this._fetchNamespace(t.namespaceId);
              n && n.clearElementCache(e);
            }
            this._onRemovalComplete(e, t.setForRemoval);
          }
          this.driver.matchesElement(e, ".ng-animate-disabled") &&
            this.markElementAsDisabled(e, !1),
            this.driver.query(e, ".ng-animate-disabled", !0).forEach((e) => {
              this.markElementAsDisabled(e, !1);
            });
        }
        flush(e = -1) {
          let t = [];
          if (
            (this.newHostElements.size &&
              (this.newHostElements.forEach((e, t) =>
                this._balanceNamespaceList(e, t)
              ),
              this.newHostElements.clear()),
            this.totalAnimations && this.collectedEnterElements.length)
          )
            for (let n = 0; n < this.collectedEnterElements.length; n++)
              Kg(this.collectedEnterElements[n], "ng-star-inserted");
          if (
            this._namespaceList.length &&
            (this.totalQueuedPlayers || this.collectedLeaveElements.length)
          ) {
            const n = [];
            try {
              t = this._flushAnimations(n, e);
            } finally {
              for (let e = 0; e < n.length; e++) n[e]();
            }
          } else
            for (let n = 0; n < this.collectedLeaveElements.length; n++)
              this.processLeaveNode(this.collectedLeaveElements[n]);
          if (
            ((this.totalQueuedPlayers = 0),
            (this.collectedEnterElements.length = 0),
            (this.collectedLeaveElements.length = 0),
            this._flushFns.forEach((e) => e()),
            (this._flushFns = []),
            this._whenQuietFns.length)
          ) {
            const e = this._whenQuietFns;
            (this._whenQuietFns = []),
              t.length
                ? vm(t).onDone(() => {
                    e.forEach((e) => e());
                  })
                : e.forEach((e) => e());
          }
        }
        reportError(e) {
          throw new Error(
            `Unable to process animations due to the following failed trigger transitions\n ${e.join(
              "\n"
            )}`
          );
        }
        _flushAnimations(e, t) {
          const n = new gg(),
            r = [],
            s = new Map(),
            i = [],
            o = new Map(),
            a = new Map(),
            l = new Map(),
            c = new Set();
          this.disabledNodes.forEach((e) => {
            c.add(e);
            const t = this.driver.query(e, ".ng-animate-queued", !0);
            for (let n = 0; n < t.length; n++) c.add(t[n]);
          });
          const u = this.bodyNode,
            h = Array.from(this.statesByElement.keys()),
            d = Gg(h, this.collectedEnterElements),
            p = new Map();
          let f = 0;
          d.forEach((e, t) => {
            const n = "ng-enter" + f++;
            p.set(t, n), e.forEach((e) => Kg(e, n));
          });
          const m = [],
            g = new Set(),
            y = new Set();
          for (let O = 0; O < this.collectedLeaveElements.length; O++) {
            const e = this.collectedLeaveElements[O],
              t = e.__ng_removed;
            t &&
              t.setForRemoval &&
              (m.push(e),
              g.add(e),
              t.hasAnimation
                ? this.driver
                    .query(e, ".ng-star-inserted", !0)
                    .forEach((e) => g.add(e))
                : y.add(e));
          }
          const v = new Map(),
            b = Gg(h, Array.from(g));
          b.forEach((e, t) => {
            const n = "ng-leave" + f++;
            v.set(t, n), e.forEach((e) => Kg(e, n));
          }),
            e.push(() => {
              d.forEach((e, t) => {
                const n = p.get(t);
                e.forEach((e) => Zg(e, n));
              }),
                b.forEach((e, t) => {
                  const n = v.get(t);
                  e.forEach((e) => Zg(e, n));
                }),
                m.forEach((e) => {
                  this.processLeaveNode(e);
                });
            });
          const _ = [],
            w = [];
          for (let O = this._namespaceList.length - 1; O >= 0; O--)
            this._namespaceList[O].drainQueuedTransitions(t).forEach((e) => {
              const t = e.player,
                s = e.element;
              if ((_.push(t), this.collectedEnterElements.length)) {
                const e = s.__ng_removed;
                if (e && e.setForMove) return void t.destroy();
              }
              const c = !u || !this.driver.containsElement(u, s),
                h = v.get(s),
                d = p.get(s),
                f = this._buildInstruction(e, n, d, h, c);
              if (f.errors && f.errors.length) w.push(f);
              else {
                if (c)
                  return (
                    t.onStart(() => $m(s, f.fromStyles)),
                    t.onDestroy(() => Bm(s, f.toStyles)),
                    void r.push(t)
                  );
                if (e.isFallbackTransition)
                  return (
                    t.onStart(() => $m(s, f.fromStyles)),
                    t.onDestroy(() => Bm(s, f.toStyles)),
                    void r.push(t)
                  );
                f.timelines.forEach((e) => (e.stretchStartingKeyframe = !0)),
                  n.append(s, f.timelines),
                  i.push({ instruction: f, player: t, element: s }),
                  f.queriedElements.forEach((e) => Cm(o, e, []).push(t)),
                  f.preStyleProps.forEach((e, t) => {
                    const n = Object.keys(e);
                    if (n.length) {
                      let e = a.get(t);
                      e || a.set(t, (e = new Set())),
                        n.forEach((t) => e.add(t));
                    }
                  }),
                  f.postStyleProps.forEach((e, t) => {
                    const n = Object.keys(e);
                    let r = l.get(t);
                    r || l.set(t, (r = new Set())), n.forEach((e) => r.add(e));
                  });
              }
            });
          if (w.length) {
            const e = [];
            w.forEach((t) => {
              e.push(`@${t.triggerName} has failed due to:\n`),
                t.errors.forEach((t) => e.push(`- ${t}\n`));
            }),
              _.forEach((e) => e.destroy()),
              this.reportError(e);
          }
          const S = new Map(),
            C = new Map();
          i.forEach((e) => {
            const t = e.element;
            n.has(t) &&
              (C.set(t, t),
              this._beforeAnimationBuild(
                e.player.namespaceId,
                e.instruction,
                S
              ));
          }),
            r.forEach((e) => {
              const t = e.element;
              this._getPreviousPlayers(
                t,
                !1,
                e.namespaceId,
                e.triggerName,
                null
              ).forEach((e) => {
                Cm(S, t, []).push(e), e.destroy();
              });
            });
          const E = m.filter((e) => Xg(e, a, l)),
            k = new Map();
          Qg(k, this.driver, y, l, "*").forEach((e) => {
            Xg(e, a, l) && E.push(e);
          });
          const x = new Map();
          d.forEach((e, t) => {
            Qg(x, this.driver, new Set(e), a, "!");
          }),
            E.forEach((e) => {
              const t = k.get(e),
                n = x.get(e);
              k.set(e, Object.assign(Object.assign({}, t), n));
            });
          const T = [],
            I = [],
            A = {};
          i.forEach((e) => {
            const { element: t, player: i, instruction: o } = e;
            if (n.has(t)) {
              if (c.has(t))
                return (
                  i.onDestroy(() => Bm(t, o.toStyles)),
                  (i.disabled = !0),
                  i.overrideTotalTime(o.totalTime),
                  void r.push(i)
                );
              let e = A;
              if (C.size > 1) {
                let n = t;
                const r = [];
                for (; (n = n.parentNode); ) {
                  const t = C.get(n);
                  if (t) {
                    e = t;
                    break;
                  }
                  r.push(n);
                }
                r.forEach((t) => C.set(t, e));
              }
              const n = this._buildAnimation(i.namespaceId, o, S, s, x, k);
              if ((i.setRealPlayer(n), e === A)) T.push(i);
              else {
                const t = this.playersByElement.get(e);
                t && t.length && (i.parentPlayer = vm(t)), r.push(i);
              }
            } else
              $m(t, o.fromStyles),
                i.onDestroy(() => Bm(t, o.toStyles)),
                I.push(i),
                c.has(t) && r.push(i);
          }),
            I.forEach((e) => {
              const t = s.get(e.element);
              if (t && t.length) {
                const n = vm(t);
                e.setRealPlayer(n);
              }
            }),
            r.forEach((e) => {
              e.parentPlayer ? e.syncPlayerEvents(e.parentPlayer) : e.destroy();
            });
          for (let O = 0; O < m.length; O++) {
            const e = m[O],
              t = e.__ng_removed;
            if ((Zg(e, "ng-leave"), t && t.hasAnimation)) continue;
            let n = [];
            if (o.size) {
              let t = o.get(e);
              t && t.length && n.push(...t);
              let r = this.driver.query(e, ".ng-animating", !0);
              for (let e = 0; e < r.length; e++) {
                let t = o.get(r[e]);
                t && t.length && n.push(...t);
              }
            }
            const r = n.filter((e) => !e.destroyed);
            r.length ? Jg(this, e, r) : this.processLeaveNode(e);
          }
          return (
            (m.length = 0),
            T.forEach((e) => {
              this.players.push(e),
                e.onDone(() => {
                  e.destroy();
                  const t = this.players.indexOf(e);
                  this.players.splice(t, 1);
                }),
                e.play();
            }),
            T
          );
        }
        elementContainsData(e, t) {
          let n = !1;
          const r = t.__ng_removed;
          return (
            r && r.setForRemoval && (n = !0),
            this.playersByElement.has(t) && (n = !0),
            this.playersByQueriedElement.has(t) && (n = !0),
            this.statesByElement.has(t) && (n = !0),
            this._fetchNamespace(e).elementContainsData(t) || n
          );
        }
        afterFlush(e) {
          this._flushFns.push(e);
        }
        afterFlushAnimationsDone(e) {
          this._whenQuietFns.push(e);
        }
        _getPreviousPlayers(e, t, n, r, s) {
          let i = [];
          if (t) {
            const t = this.playersByQueriedElement.get(e);
            t && (i = t);
          } else {
            const t = this.playersByElement.get(e);
            if (t) {
              const e = !s || "void" == s;
              t.forEach((t) => {
                t.queued || ((e || t.triggerName == r) && i.push(t));
              });
            }
          }
          return (
            (n || r) &&
              (i = i.filter(
                (e) => !((n && n != e.namespaceId) || (r && r != e.triggerName))
              )),
            i
          );
        }
        _beforeAnimationBuild(e, t, n) {
          const r = t.element,
            s = t.isRemovalTransition ? void 0 : e,
            i = t.isRemovalTransition ? void 0 : t.triggerName;
          for (const o of t.timelines) {
            const e = o.element,
              a = e !== r,
              l = Cm(n, e, []);
            this._getPreviousPlayers(e, a, s, i, t.toState).forEach((e) => {
              const t = e.getRealPlayer();
              t.beforeDestroy && t.beforeDestroy(), e.destroy(), l.push(e);
            });
          }
          $m(r, t.fromStyles);
        }
        _buildAnimation(e, t, n, r, s, i) {
          const o = t.triggerName,
            a = t.element,
            l = [],
            c = new Set(),
            u = new Set(),
            h = t.timelines.map((t) => {
              const h = t.element;
              c.add(h);
              const d = h.__ng_removed;
              if (d && d.removedBeforeQueried)
                return new sf(t.duration, t.delay);
              const p = h !== a,
                f = (function (e) {
                  const t = [];
                  return Yg(e, t), t;
                })((n.get(h) || jg).map((e) => e.getRealPlayer())).filter(
                  (e) => !!e.element && e.element === h
                ),
                m = s.get(h),
                g = i.get(h),
                y = bm(0, this._normalizer, 0, t.keyframes, m, g),
                v = this._buildPlayer(t, y, f);
              if ((t.subTimeline && r && u.add(h), p)) {
                const t = new Vg(e, o, h);
                t.setRealPlayer(v), l.push(t);
              }
              return v;
            });
          l.forEach((e) => {
            Cm(this.playersByQueriedElement, e.element, []).push(e),
              e.onDone(() =>
                (function (e, t, n) {
                  let r;
                  if (e instanceof Map) {
                    if (((r = e.get(t)), r)) {
                      if (r.length) {
                        const e = r.indexOf(n);
                        r.splice(e, 1);
                      }
                      0 == r.length && e.delete(t);
                    }
                  } else if (((r = e[t]), r)) {
                    if (r.length) {
                      const e = r.indexOf(n);
                      r.splice(e, 1);
                    }
                    0 == r.length && delete e[t];
                  }
                  return r;
                })(this.playersByQueriedElement, e.element, e)
              );
          }),
            c.forEach((e) => Kg(e, "ng-animating"));
          const d = vm(h);
          return (
            d.onDestroy(() => {
              c.forEach((e) => Zg(e, "ng-animating")), Bm(a, t.toStyles);
            }),
            u.forEach((e) => {
              Cm(r, e, []).push(d);
            }),
            d
          );
        }
        _buildPlayer(e, t, n) {
          return t.length > 0
            ? this.driver.animate(
                e.element,
                t,
                e.duration,
                e.delay,
                e.easing,
                n
              )
            : new sf(e.duration, e.delay);
        }
      }
      class Vg {
        constructor(e, t, n) {
          (this.namespaceId = e),
            (this.triggerName = t),
            (this.element = n),
            (this._player = new sf()),
            (this._containsRealPlayer = !1),
            (this._queuedCallbacks = {}),
            (this.destroyed = !1),
            (this.markedForDestroy = !1),
            (this.disabled = !1),
            (this.queued = !0),
            (this.totalTime = 0);
        }
        setRealPlayer(e) {
          this._containsRealPlayer ||
            ((this._player = e),
            Object.keys(this._queuedCallbacks).forEach((t) => {
              this._queuedCallbacks[t].forEach((n) => _m(e, t, void 0, n));
            }),
            (this._queuedCallbacks = {}),
            (this._containsRealPlayer = !0),
            this.overrideTotalTime(e.totalTime),
            (this.queued = !1));
        }
        getRealPlayer() {
          return this._player;
        }
        overrideTotalTime(e) {
          this.totalTime = e;
        }
        syncPlayerEvents(e) {
          const t = this._player;
          t.triggerCallback && e.onStart(() => t.triggerCallback("start")),
            e.onDone(() => this.finish()),
            e.onDestroy(() => this.destroy());
        }
        _queueEvent(e, t) {
          Cm(this._queuedCallbacks, e, []).push(t);
        }
        onDone(e) {
          this.queued && this._queueEvent("done", e), this._player.onDone(e);
        }
        onStart(e) {
          this.queued && this._queueEvent("start", e), this._player.onStart(e);
        }
        onDestroy(e) {
          this.queued && this._queueEvent("destroy", e),
            this._player.onDestroy(e);
        }
        init() {
          this._player.init();
        }
        hasStarted() {
          return !this.queued && this._player.hasStarted();
        }
        play() {
          !this.queued && this._player.play();
        }
        pause() {
          !this.queued && this._player.pause();
        }
        restart() {
          !this.queued && this._player.restart();
        }
        finish() {
          this._player.finish();
        }
        destroy() {
          (this.destroyed = !0), this._player.destroy();
        }
        reset() {
          !this.queued && this._player.reset();
        }
        setPosition(e) {
          this.queued || this._player.setPosition(e);
        }
        getPosition() {
          return this.queued ? 0 : this._player.getPosition();
        }
        triggerCallback(e) {
          const t = this._player;
          t.triggerCallback && t.triggerCallback(e);
        }
      }
      function Bg(e) {
        return e && 1 === e.nodeType;
      }
      function $g(e, t) {
        const n = e.style.display;
        return (e.style.display = null != t ? t : "none"), n;
      }
      function Qg(e, t, n, r, s) {
        const i = [];
        n.forEach((e) => i.push($g(e)));
        const o = [];
        r.forEach((n, r) => {
          const i = {};
          n.forEach((e) => {
            const n = (i[e] = t.computeStyle(r, e, s));
            (n && 0 != n.length) || ((r.__ng_removed = Wg), o.push(r));
          }),
            e.set(r, i);
        });
        let a = 0;
        return n.forEach((e) => $g(e, i[a++])), o;
      }
      function Gg(e, t) {
        const n = new Map();
        if ((e.forEach((e) => n.set(e, [])), 0 == t.length)) return n;
        const r = new Set(t),
          s = new Map();
        function i(e) {
          if (!e) return 1;
          let t = s.get(e);
          if (t) return t;
          const o = e.parentNode;
          return (t = n.has(o) ? o : r.has(o) ? 1 : i(o)), s.set(e, t), t;
        }
        return (
          t.forEach((e) => {
            const t = i(e);
            1 !== t && n.get(t).push(e);
          }),
          n
        );
      }
      function Kg(e, t) {
        if (e.classList) e.classList.add(t);
        else {
          let n = e.$$classes;
          n || (n = e.$$classes = {}), (n[t] = !0);
        }
      }
      function Zg(e, t) {
        if (e.classList) e.classList.remove(t);
        else {
          let n = e.$$classes;
          n && delete n[t];
        }
      }
      function Jg(e, t, n) {
        vm(n).onDone(() => e.processLeaveNode(t));
      }
      function Yg(e, t) {
        for (let n = 0; n < e.length; n++) {
          const r = e[n];
          r instanceof of ? Yg(r.players, t) : t.push(r);
        }
      }
      function Xg(e, t, n) {
        const r = n.get(e);
        if (!r) return !1;
        let s = t.get(e);
        return s ? r.forEach((e) => s.add(e)) : t.set(e, r), n.delete(e), !0;
      }
      class ey {
        constructor(e, t, n) {
          (this.bodyNode = e),
            (this._driver = t),
            (this._triggerCache = {}),
            (this.onRemovalComplete = (e, t) => {}),
            (this._transitionEngine = new Ug(e, t, n)),
            (this._timelineEngine = new Fg(e, t, n)),
            (this._transitionEngine.onRemovalComplete = (e, t) =>
              this.onRemovalComplete(e, t));
        }
        registerTrigger(e, t, n, r, s) {
          const i = e + "-" + r;
          let o = this._triggerCache[i];
          if (!o) {
            const e = [],
              t = cg(this._driver, s, e);
            if (e.length)
              throw new Error(
                `The animation trigger "${r}" has failed to build due to the following errors:\n - ${e.join(
                  "\n - "
                )}`
              );
            (o = (function (e, t) {
              return new Dg(e, t);
            })(r, t)),
              (this._triggerCache[i] = o);
          }
          this._transitionEngine.registerTrigger(t, r, o);
        }
        register(e, t) {
          this._transitionEngine.register(e, t);
        }
        destroy(e, t) {
          this._transitionEngine.destroy(e, t);
        }
        onInsert(e, t, n, r) {
          this._transitionEngine.insertNode(e, t, n, r);
        }
        onRemove(e, t, n, r) {
          this._transitionEngine.removeNode(e, t, r || !1, n);
        }
        disableAnimations(e, t) {
          this._transitionEngine.markElementAsDisabled(e, t);
        }
        process(e, t, n, r) {
          if ("@" == n.charAt(0)) {
            const [e, s] = Em(n);
            this._timelineEngine.command(e, t, s, r);
          } else this._transitionEngine.trigger(e, t, n, r);
        }
        listen(e, t, n, r, s) {
          if ("@" == n.charAt(0)) {
            const [e, r] = Em(n);
            return this._timelineEngine.listen(e, t, r, s);
          }
          return this._transitionEngine.listen(e, t, n, r, s);
        }
        flush(e = -1) {
          this._transitionEngine.flush(e);
        }
        get players() {
          return this._transitionEngine.players.concat(
            this._timelineEngine.players
          );
        }
        whenRenderingDone() {
          return this._transitionEngine.whenRenderingDone();
        }
      }
      function ty(e, t) {
        let n = null,
          r = null;
        return (
          Array.isArray(t) && t.length
            ? ((n = ry(t[0])), t.length > 1 && (r = ry(t[t.length - 1])))
            : t && (n = ry(t)),
          n || r ? new ny(e, n, r) : null
        );
      }
      let ny = (() => {
        class e {
          constructor(t, n, r) {
            (this._element = t),
              (this._startStyles = n),
              (this._endStyles = r),
              (this._state = 0);
            let s = e.initialStylesByElement.get(t);
            s || e.initialStylesByElement.set(t, (s = {})),
              (this._initialStyles = s);
          }
          start() {
            this._state < 1 &&
              (this._startStyles &&
                Bm(this._element, this._startStyles, this._initialStyles),
              (this._state = 1));
          }
          finish() {
            this.start(),
              this._state < 2 &&
                (Bm(this._element, this._initialStyles),
                this._endStyles &&
                  (Bm(this._element, this._endStyles),
                  (this._endStyles = null)),
                (this._state = 1));
          }
          destroy() {
            this.finish(),
              this._state < 3 &&
                (e.initialStylesByElement.delete(this._element),
                this._startStyles &&
                  ($m(this._element, this._startStyles),
                  (this._endStyles = null)),
                this._endStyles &&
                  ($m(this._element, this._endStyles),
                  (this._endStyles = null)),
                Bm(this._element, this._initialStyles),
                (this._state = 3));
          }
        }
        return (e.initialStylesByElement = new WeakMap()), e;
      })();
      function ry(e) {
        let t = null;
        const n = Object.keys(e);
        for (let r = 0; r < n.length; r++) {
          const s = n[r];
          sy(s) && ((t = t || {}), (t[s] = e[s]));
        }
        return t;
      }
      function sy(e) {
        return "display" === e || "position" === e;
      }
      class iy {
        constructor(e, t, n, r, s, i, o) {
          (this._element = e),
            (this._name = t),
            (this._duration = n),
            (this._delay = r),
            (this._easing = s),
            (this._fillMode = i),
            (this._onDoneFn = o),
            (this._finished = !1),
            (this._destroyed = !1),
            (this._startTime = 0),
            (this._position = 0),
            (this._eventFn = (e) => this._handleCallback(e));
        }
        apply() {
          !(function (e, t) {
            const n = hy(e, "").trim();
            n.length &&
              ((function (e, t) {
                let n = 0;
                for (let r = 0; r < e.length; r++) "," === e.charAt(r) && n++;
              })(n),
              (t = `${n}, ${t}`)),
              uy(e, "", t);
          })(
            this._element,
            `${this._duration}ms ${this._easing} ${this._delay}ms 1 normal ${this._fillMode} ${this._name}`
          ),
            cy(this._element, this._eventFn, !1),
            (this._startTime = Date.now());
        }
        pause() {
          oy(this._element, this._name, "paused");
        }
        resume() {
          oy(this._element, this._name, "running");
        }
        setPosition(e) {
          const t = ay(this._element, this._name);
          (this._position = e * this._duration),
            uy(this._element, "Delay", `-${this._position}ms`, t);
        }
        getPosition() {
          return this._position;
        }
        _handleCallback(e) {
          const t = e._ngTestManualTimestamp || Date.now(),
            n = 1e3 * parseFloat(e.elapsedTime.toFixed(3));
          e.animationName == this._name &&
            Math.max(t - this._startTime, 0) >= this._delay &&
            n >= this._duration &&
            this.finish();
        }
        finish() {
          this._finished ||
            ((this._finished = !0),
            this._onDoneFn(),
            cy(this._element, this._eventFn, !0));
        }
        destroy() {
          this._destroyed ||
            ((this._destroyed = !0),
            this.finish(),
            (function (e, t) {
              const n = hy(e, "").split(","),
                r = ly(n, t);
              r >= 0 && (n.splice(r, 1), uy(e, "", n.join(",")));
            })(this._element, this._name));
        }
      }
      function oy(e, t, n) {
        uy(e, "PlayState", n, ay(e, t));
      }
      function ay(e, t) {
        const n = hy(e, "");
        return n.indexOf(",") > 0 ? ly(n.split(","), t) : ly([n], t);
      }
      function ly(e, t) {
        for (let n = 0; n < e.length; n++) if (e[n].indexOf(t) >= 0) return n;
        return -1;
      }
      function cy(e, t, n) {
        n
          ? e.removeEventListener("animationend", t)
          : e.addEventListener("animationend", t);
      }
      function uy(e, t, n, r) {
        const s = "animation" + t;
        if (null != r) {
          const t = e.style[s];
          if (t.length) {
            const e = t.split(",");
            (e[r] = n), (n = e.join(","));
          }
        }
        e.style[s] = n;
      }
      function hy(e, t) {
        return e.style["animation" + t] || "";
      }
      class dy {
        constructor(e, t, n, r, s, i, o, a) {
          (this.element = e),
            (this.keyframes = t),
            (this.animationName = n),
            (this._duration = r),
            (this._delay = s),
            (this._finalStyles = o),
            (this._specialStyles = a),
            (this._onDoneFns = []),
            (this._onStartFns = []),
            (this._onDestroyFns = []),
            (this._started = !1),
            (this.currentSnapshot = {}),
            (this._state = 0),
            (this.easing = i || "linear"),
            (this.totalTime = r + s),
            this._buildStyler();
        }
        onStart(e) {
          this._onStartFns.push(e);
        }
        onDone(e) {
          this._onDoneFns.push(e);
        }
        onDestroy(e) {
          this._onDestroyFns.push(e);
        }
        destroy() {
          this.init(),
            this._state >= 4 ||
              ((this._state = 4),
              this._styler.destroy(),
              this._flushStartFns(),
              this._flushDoneFns(),
              this._specialStyles && this._specialStyles.destroy(),
              this._onDestroyFns.forEach((e) => e()),
              (this._onDestroyFns = []));
        }
        _flushDoneFns() {
          this._onDoneFns.forEach((e) => e()), (this._onDoneFns = []);
        }
        _flushStartFns() {
          this._onStartFns.forEach((e) => e()), (this._onStartFns = []);
        }
        finish() {
          this.init(),
            this._state >= 3 ||
              ((this._state = 3),
              this._styler.finish(),
              this._flushStartFns(),
              this._specialStyles && this._specialStyles.finish(),
              this._flushDoneFns());
        }
        setPosition(e) {
          this._styler.setPosition(e);
        }
        getPosition() {
          return this._styler.getPosition();
        }
        hasStarted() {
          return this._state >= 2;
        }
        init() {
          this._state >= 1 ||
            ((this._state = 1),
            this._styler.apply(),
            this._delay && this._styler.pause());
        }
        play() {
          this.init(),
            this.hasStarted() ||
              (this._flushStartFns(),
              (this._state = 2),
              this._specialStyles && this._specialStyles.start()),
            this._styler.resume();
        }
        pause() {
          this.init(), this._styler.pause();
        }
        restart() {
          this.reset(), this.play();
        }
        reset() {
          this._styler.destroy(), this._buildStyler(), this._styler.apply();
        }
        _buildStyler() {
          this._styler = new iy(
            this.element,
            this.animationName,
            this._duration,
            this._delay,
            this.easing,
            "forwards",
            () => this.finish()
          );
        }
        triggerCallback(e) {
          const t = "start" == e ? this._onStartFns : this._onDoneFns;
          t.forEach((e) => e()), (t.length = 0);
        }
        beforeDestroy() {
          this.init();
          const e = {};
          if (this.hasStarted()) {
            const t = this._state >= 3;
            Object.keys(this._finalStyles).forEach((n) => {
              "offset" != n &&
                (e[n] = t ? this._finalStyles[n] : rg(this.element, n));
            });
          }
          this.currentSnapshot = e;
        }
      }
      class py extends sf {
        constructor(e, t) {
          super(),
            (this.element = e),
            (this._startingStyles = {}),
            (this.__initialized = !1),
            (this._styles = Mm(t));
        }
        init() {
          !this.__initialized &&
            this._startingStyles &&
            ((this.__initialized = !0),
            Object.keys(this._styles).forEach((e) => {
              this._startingStyles[e] = this.element.style[e];
            }),
            super.init());
        }
        play() {
          this._startingStyles &&
            (this.init(),
            Object.keys(this._styles).forEach((e) =>
              this.element.style.setProperty(e, this._styles[e])
            ),
            super.play());
        }
        destroy() {
          this._startingStyles &&
            (Object.keys(this._startingStyles).forEach((e) => {
              const t = this._startingStyles[e];
              t
                ? this.element.style.setProperty(e, t)
                : this.element.style.removeProperty(e);
            }),
            (this._startingStyles = null),
            super.destroy());
        }
      }
      class fy {
        constructor() {
          (this._count = 0), (this._head = document.querySelector("head"));
        }
        validateStyleProperty(e) {
          return Rm(e);
        }
        matchesElement(e, t) {
          return Pm(e, t);
        }
        containsElement(e, t) {
          return Dm(e, t);
        }
        query(e, t, n) {
          return Nm(e, t, n);
        }
        computeStyle(e, t, n) {
          return window.getComputedStyle(e)[t];
        }
        buildKeyframeElement(e, t, n) {
          n = n.map((e) => Mm(e));
          let r = `@keyframes ${t} {\n`,
            s = "";
          n.forEach((e) => {
            s = " ";
            const t = parseFloat(e.offset);
            (r += `${s}${100 * t}% {\n`),
              (s += " "),
              Object.keys(e).forEach((t) => {
                const n = e[t];
                switch (t) {
                  case "offset":
                    return;
                  case "easing":
                    return void (
                      n && (r += `${s}animation-timing-function: ${n};\n`)
                    );
                  default:
                    return void (r += `${s}${t}: ${n};\n`);
                }
              }),
              (r += `${s}}\n`);
          }),
            (r += "}\n");
          const i = document.createElement("style");
          return (i.textContent = r), i;
        }
        animate(e, t, n, r, s, i = [], o) {
          const a = i.filter((e) => e instanceof dy),
            l = {};
          eg(n, r) &&
            a.forEach((e) => {
              let t = e.currentSnapshot;
              Object.keys(t).forEach((e) => (l[e] = t[e]));
            });
          const c = (function (e) {
            let t = {};
            return (
              e &&
                (Array.isArray(e) ? e : [e]).forEach((e) => {
                  Object.keys(e).forEach((n) => {
                    "offset" != n && "easing" != n && (t[n] = e[n]);
                  });
                }),
              t
            );
          })((t = tg(e, t, l)));
          if (0 == n) return new py(e, c);
          const u = "gen_css_kf_" + this._count++,
            h = this.buildKeyframeElement(e, u, t);
          document.querySelector("head").appendChild(h);
          const d = ty(e, t),
            p = new dy(e, t, u, n, r, s, c, d);
          return (
            p.onDestroy(() => {
              var e;
              (e = h).parentNode.removeChild(e);
            }),
            p
          );
        }
      }
      class my {
        constructor(e, t, n, r) {
          (this.element = e),
            (this.keyframes = t),
            (this.options = n),
            (this._specialStyles = r),
            (this._onDoneFns = []),
            (this._onStartFns = []),
            (this._onDestroyFns = []),
            (this._initialized = !1),
            (this._finished = !1),
            (this._started = !1),
            (this._destroyed = !1),
            (this.time = 0),
            (this.parentPlayer = null),
            (this.currentSnapshot = {}),
            (this._duration = n.duration),
            (this._delay = n.delay || 0),
            (this.time = this._duration + this._delay);
        }
        _onFinish() {
          this._finished ||
            ((this._finished = !0),
            this._onDoneFns.forEach((e) => e()),
            (this._onDoneFns = []));
        }
        init() {
          this._buildPlayer(), this._preparePlayerBeforeStart();
        }
        _buildPlayer() {
          if (this._initialized) return;
          this._initialized = !0;
          const e = this.keyframes;
          (this.domPlayer = this._triggerWebAnimation(
            this.element,
            e,
            this.options
          )),
            (this._finalKeyframe = e.length ? e[e.length - 1] : {}),
            this.domPlayer.addEventListener("finish", () => this._onFinish());
        }
        _preparePlayerBeforeStart() {
          this._delay ? this._resetDomPlayerState() : this.domPlayer.pause();
        }
        _triggerWebAnimation(e, t, n) {
          return e.animate(t, n);
        }
        onStart(e) {
          this._onStartFns.push(e);
        }
        onDone(e) {
          this._onDoneFns.push(e);
        }
        onDestroy(e) {
          this._onDestroyFns.push(e);
        }
        play() {
          this._buildPlayer(),
            this.hasStarted() ||
              (this._onStartFns.forEach((e) => e()),
              (this._onStartFns = []),
              (this._started = !0),
              this._specialStyles && this._specialStyles.start()),
            this.domPlayer.play();
        }
        pause() {
          this.init(), this.domPlayer.pause();
        }
        finish() {
          this.init(),
            this._specialStyles && this._specialStyles.finish(),
            this._onFinish(),
            this.domPlayer.finish();
        }
        reset() {
          this._resetDomPlayerState(),
            (this._destroyed = !1),
            (this._finished = !1),
            (this._started = !1);
        }
        _resetDomPlayerState() {
          this.domPlayer && this.domPlayer.cancel();
        }
        restart() {
          this.reset(), this.play();
        }
        hasStarted() {
          return this._started;
        }
        destroy() {
          this._destroyed ||
            ((this._destroyed = !0),
            this._resetDomPlayerState(),
            this._onFinish(),
            this._specialStyles && this._specialStyles.destroy(),
            this._onDestroyFns.forEach((e) => e()),
            (this._onDestroyFns = []));
        }
        setPosition(e) {
          void 0 === this.domPlayer && this.init(),
            (this.domPlayer.currentTime = e * this.time);
        }
        getPosition() {
          return this.domPlayer.currentTime / this.time;
        }
        get totalTime() {
          return this._delay + this._duration;
        }
        beforeDestroy() {
          const e = {};
          this.hasStarted() &&
            Object.keys(this._finalKeyframe).forEach((t) => {
              "offset" != t &&
                (e[t] = this._finished
                  ? this._finalKeyframe[t]
                  : rg(this.element, t));
            }),
            (this.currentSnapshot = e);
        }
        triggerCallback(e) {
          const t = "start" == e ? this._onStartFns : this._onDoneFns;
          t.forEach((e) => e()), (t.length = 0);
        }
      }
      class gy {
        constructor() {
          (this._isNativeImpl = /\{\s*\[native\s+code\]\s*\}/.test(
            yy().toString()
          )),
            (this._cssKeyframesDriver = new fy());
        }
        validateStyleProperty(e) {
          return Rm(e);
        }
        matchesElement(e, t) {
          return Pm(e, t);
        }
        containsElement(e, t) {
          return Dm(e, t);
        }
        query(e, t, n) {
          return Nm(e, t, n);
        }
        computeStyle(e, t, n) {
          return window.getComputedStyle(e)[t];
        }
        overrideWebAnimationsSupport(e) {
          this._isNativeImpl = e;
        }
        animate(e, t, n, r, s, i = [], o) {
          if (!o && !this._isNativeImpl)
            return this._cssKeyframesDriver.animate(e, t, n, r, s, i);
          const a = {
            duration: n,
            delay: r,
            fill: 0 == r ? "both" : "forwards",
          };
          s && (a.easing = s);
          const l = {},
            c = i.filter((e) => e instanceof my);
          eg(n, r) &&
            c.forEach((e) => {
              let t = e.currentSnapshot;
              Object.keys(t).forEach((e) => (l[e] = t[e]));
            });
          const u = ty(e, (t = tg(e, (t = t.map((e) => Hm(e, !1))), l)));
          return new my(e, t, a, u);
        }
      }
      function yy() {
        return (
          ("undefined" != typeof window &&
            void 0 !== window.document &&
            Element.prototype.animate) ||
          {}
        );
      }
      let vy = (() => {
        class e extends Kp {
          constructor(e, t) {
            super(),
              (this._nextAnimationId = 0),
              (this._renderer = e.createRenderer(t.body, {
                id: "0",
                encapsulation: Ee.None,
                styles: [],
                data: { animation: [] },
              }));
          }
          build(e) {
            const t = this._nextAnimationId.toString();
            this._nextAnimationId++;
            const n = Array.isArray(e) ? Yp(e) : e;
            return (
              wy(this._renderer, null, t, "register", [n]),
              new by(t, this._renderer)
            );
          }
        }
        return (
          (e.ɵfac = function (t) {
            return new (t || e)(Yn(fo), Yn(Ml));
          }),
          (e.ɵprov = ce({ token: e, factory: e.ɵfac })),
          e
        );
      })();
      class by extends class {} {
        constructor(e, t) {
          super(), (this._id = e), (this._renderer = t);
        }
        create(e, t) {
          return new _y(this._id, e, t || {}, this._renderer);
        }
      }
      class _y {
        constructor(e, t, n, r) {
          (this.id = e),
            (this.element = t),
            (this._renderer = r),
            (this.parentPlayer = null),
            (this._started = !1),
            (this.totalTime = 0),
            this._command("create", n);
        }
        _listen(e, t) {
          return this._renderer.listen(this.element, `@@${this.id}:${e}`, t);
        }
        _command(e, ...t) {
          return wy(this._renderer, this.element, this.id, e, t);
        }
        onDone(e) {
          this._listen("done", e);
        }
        onStart(e) {
          this._listen("start", e);
        }
        onDestroy(e) {
          this._listen("destroy", e);
        }
        init() {
          this._command("init");
        }
        hasStarted() {
          return this._started;
        }
        play() {
          this._command("play"), (this._started = !0);
        }
        pause() {
          this._command("pause");
        }
        restart() {
          this._command("restart");
        }
        finish() {
          this._command("finish");
        }
        destroy() {
          this._command("destroy");
        }
        reset() {
          this._command("reset");
        }
        setPosition(e) {
          this._command("setPosition", e);
        }
        getPosition() {
          var e, t;
          return null !==
            (t =
              null === (e = this._renderer.engine.players[+this.id]) ||
              void 0 === e
                ? void 0
                : e.getPosition()) && void 0 !== t
            ? t
            : 0;
        }
      }
      function wy(e, t, n, r, s) {
        return e.setProperty(t, `@@${n}:${r}`, s);
      }
      let Sy = (() => {
        class e {
          constructor(e, t, n) {
            (this.delegate = e),
              (this.engine = t),
              (this._zone = n),
              (this._currentId = 0),
              (this._microtaskId = 1),
              (this._animationCallbacksBuffer = []),
              (this._rendererCache = new Map()),
              (this._cdRecurDepth = 0),
              (this.promise = Promise.resolve(0)),
              (t.onRemovalComplete = (e, t) => {
                t && t.parentNode(e) && t.removeChild(e.parentNode, e);
              });
          }
          createRenderer(e, t) {
            const n = this.delegate.createRenderer(e, t);
            if (!(e && t && t.data && t.data.animation)) {
              let e = this._rendererCache.get(n);
              return (
                e ||
                  ((e = new Cy("", n, this.engine)),
                  this._rendererCache.set(n, e)),
                e
              );
            }
            const r = t.id,
              s = t.id + "-" + this._currentId;
            this._currentId++, this.engine.register(s, e);
            const i = (t) => {
              Array.isArray(t)
                ? t.forEach(i)
                : this.engine.registerTrigger(r, s, e, t.name, t);
            };
            return t.data.animation.forEach(i), new Ey(this, s, n, this.engine);
          }
          begin() {
            this._cdRecurDepth++, this.delegate.begin && this.delegate.begin();
          }
          _scheduleCountTask() {
            this.promise.then(() => {
              this._microtaskId++;
            });
          }
          scheduleListenerCallback(e, t, n) {
            e >= 0 && e < this._microtaskId
              ? this._zone.run(() => t(n))
              : (0 == this._animationCallbacksBuffer.length &&
                  Promise.resolve(null).then(() => {
                    this._zone.run(() => {
                      this._animationCallbacksBuffer.forEach((e) => {
                        const [t, n] = e;
                        t(n);
                      }),
                        (this._animationCallbacksBuffer = []);
                    });
                  }),
                this._animationCallbacksBuffer.push([t, n]));
          }
          end() {
            this._cdRecurDepth--,
              0 == this._cdRecurDepth &&
                this._zone.runOutsideAngular(() => {
                  this._scheduleCountTask(),
                    this.engine.flush(this._microtaskId);
                }),
              this.delegate.end && this.delegate.end();
          }
          whenRenderingDone() {
            return this.engine.whenRenderingDone();
          }
        }
        return (
          (e.ɵfac = function (t) {
            return new (t || e)(Yn(fo), Yn(ey), Yn(rl));
          }),
          (e.ɵprov = ce({ token: e, factory: e.ɵfac })),
          e
        );
      })();
      class Cy {
        constructor(e, t, n) {
          (this.namespaceId = e),
            (this.delegate = t),
            (this.engine = n),
            (this.destroyNode = this.delegate.destroyNode
              ? (e) => t.destroyNode(e)
              : null);
        }
        get data() {
          return this.delegate.data;
        }
        destroy() {
          this.engine.destroy(this.namespaceId, this.delegate),
            this.delegate.destroy();
        }
        createElement(e, t) {
          return this.delegate.createElement(e, t);
        }
        createComment(e) {
          return this.delegate.createComment(e);
        }
        createText(e) {
          return this.delegate.createText(e);
        }
        appendChild(e, t) {
          this.delegate.appendChild(e, t),
            this.engine.onInsert(this.namespaceId, t, e, !1);
        }
        insertBefore(e, t, n, r = !0) {
          this.delegate.insertBefore(e, t, n),
            this.engine.onInsert(this.namespaceId, t, e, r);
        }
        removeChild(e, t, n) {
          this.engine.onRemove(this.namespaceId, t, this.delegate, n);
        }
        selectRootElement(e, t) {
          return this.delegate.selectRootElement(e, t);
        }
        parentNode(e) {
          return this.delegate.parentNode(e);
        }
        nextSibling(e) {
          return this.delegate.nextSibling(e);
        }
        setAttribute(e, t, n, r) {
          this.delegate.setAttribute(e, t, n, r);
        }
        removeAttribute(e, t, n) {
          this.delegate.removeAttribute(e, t, n);
        }
        addClass(e, t) {
          this.delegate.addClass(e, t);
        }
        removeClass(e, t) {
          this.delegate.removeClass(e, t);
        }
        setStyle(e, t, n, r) {
          this.delegate.setStyle(e, t, n, r);
        }
        removeStyle(e, t, n) {
          this.delegate.removeStyle(e, t, n);
        }
        setProperty(e, t, n) {
          "@" == t.charAt(0) && "@.disabled" == t
            ? this.disableAnimations(e, !!n)
            : this.delegate.setProperty(e, t, n);
        }
        setValue(e, t) {
          this.delegate.setValue(e, t);
        }
        listen(e, t, n) {
          return this.delegate.listen(e, t, n);
        }
        disableAnimations(e, t) {
          this.engine.disableAnimations(e, t);
        }
      }
      class Ey extends Cy {
        constructor(e, t, n, r) {
          super(t, n, r), (this.factory = e), (this.namespaceId = t);
        }
        setProperty(e, t, n) {
          "@" == t.charAt(0)
            ? "." == t.charAt(1) && "@.disabled" == t
              ? this.disableAnimations(e, (n = void 0 === n || !!n))
              : this.engine.process(this.namespaceId, e, t.substr(1), n)
            : this.delegate.setProperty(e, t, n);
        }
        listen(e, t, n) {
          if ("@" == t.charAt(0)) {
            const r = (function (e) {
              switch (e) {
                case "body":
                  return document.body;
                case "document":
                  return document;
                case "window":
                  return window;
                default:
                  return e;
              }
            })(e);
            let s = t.substr(1),
              i = "";
            return (
              "@" != s.charAt(0) &&
                ([s, i] = (function (e) {
                  const t = e.indexOf(".");
                  return [e.substring(0, t), e.substr(t + 1)];
                })(s)),
              this.engine.listen(this.namespaceId, r, s, i, (e) => {
                this.factory.scheduleListenerCallback(e._data || -1, n, e);
              })
            );
          }
          return this.delegate.listen(e, t, n);
        }
      }
      let ky = (() => {
        class e extends ey {
          constructor(e, t, n) {
            super(e.body, t, n);
          }
        }
        return (
          (e.ɵfac = function (t) {
            return new (t || e)(Yn(Ml), Yn(jm), Yn(xg));
          }),
          (e.ɵprov = ce({ token: e, factory: e.ɵfac })),
          e
        );
      })();
      const xy = [
        {
          provide: jm,
          useFactory: function () {
            return "function" == typeof yy() ? new gy() : new fy();
          },
        },
        {
          provide: new Mn("AnimationModuleType"),
          useValue: "BrowserAnimations",
        },
        { provide: Kp, useClass: vy },
        {
          provide: xg,
          useFactory: function () {
            return new Tg();
          },
        },
        { provide: ey, useClass: ky },
        {
          provide: fo,
          useFactory: function (e, t, n) {
            return new Sy(e, t, n);
          },
          deps: [Rc, ey, rl],
        },
      ];
      let Ty = (() => {
        class e {}
        return (
          (e.ɵfac = function (t) {
            return new (t || e)();
          }),
          (e.ɵmod = Be({ type: e })),
          (e.ɵinj = ue({ providers: xy, imports: [Uc] })),
          e
        );
      })();
      class Iy {}
      class Ay {}
      class Oy {
        constructor(e) {
          (this.normalizedNames = new Map()),
            (this.lazyUpdate = null),
            e
              ? (this.lazyInit =
                  "string" == typeof e
                    ? () => {
                        (this.headers = new Map()),
                          e.split("\n").forEach((e) => {
                            const t = e.indexOf(":");
                            if (t > 0) {
                              const n = e.slice(0, t),
                                r = n.toLowerCase(),
                                s = e.slice(t + 1).trim();
                              this.maybeSetNormalizedName(n, r),
                                this.headers.has(r)
                                  ? this.headers.get(r).push(s)
                                  : this.headers.set(r, [s]);
                            }
                          });
                      }
                    : () => {
                        (this.headers = new Map()),
                          Object.keys(e).forEach((t) => {
                            let n = e[t];
                            const r = t.toLowerCase();
                            "string" == typeof n && (n = [n]),
                              n.length > 0 &&
                                (this.headers.set(r, n),
                                this.maybeSetNormalizedName(t, r));
                          });
                      })
              : (this.headers = new Map());
        }
        has(e) {
          return this.init(), this.headers.has(e.toLowerCase());
        }
        get(e) {
          this.init();
          const t = this.headers.get(e.toLowerCase());
          return t && t.length > 0 ? t[0] : null;
        }
        keys() {
          return this.init(), Array.from(this.normalizedNames.values());
        }
        getAll(e) {
          return this.init(), this.headers.get(e.toLowerCase()) || null;
        }
        append(e, t) {
          return this.clone({ name: e, value: t, op: "a" });
        }
        set(e, t) {
          return this.clone({ name: e, value: t, op: "s" });
        }
        delete(e, t) {
          return this.clone({ name: e, value: t, op: "d" });
        }
        maybeSetNormalizedName(e, t) {
          this.normalizedNames.has(t) || this.normalizedNames.set(t, e);
        }
        init() {
          this.lazyInit &&
            (this.lazyInit instanceof Oy
              ? this.copyFrom(this.lazyInit)
              : this.lazyInit(),
            (this.lazyInit = null),
            this.lazyUpdate &&
              (this.lazyUpdate.forEach((e) => this.applyUpdate(e)),
              (this.lazyUpdate = null)));
        }
        copyFrom(e) {
          e.init(),
            Array.from(e.headers.keys()).forEach((t) => {
              this.headers.set(t, e.headers.get(t)),
                this.normalizedNames.set(t, e.normalizedNames.get(t));
            });
        }
        clone(e) {
          const t = new Oy();
          return (
            (t.lazyInit =
              this.lazyInit && this.lazyInit instanceof Oy
                ? this.lazyInit
                : this),
            (t.lazyUpdate = (this.lazyUpdate || []).concat([e])),
            t
          );
        }
        applyUpdate(e) {
          const t = e.name.toLowerCase();
          switch (e.op) {
            case "a":
            case "s":
              let n = e.value;
              if (("string" == typeof n && (n = [n]), 0 === n.length)) return;
              this.maybeSetNormalizedName(e.name, t);
              const r = ("a" === e.op ? this.headers.get(t) : void 0) || [];
              r.push(...n), this.headers.set(t, r);
              break;
            case "d":
              const s = e.value;
              if (s) {
                let e = this.headers.get(t);
                if (!e) return;
                (e = e.filter((e) => -1 === s.indexOf(e))),
                  0 === e.length
                    ? (this.headers.delete(t), this.normalizedNames.delete(t))
                    : this.headers.set(t, e);
              } else this.headers.delete(t), this.normalizedNames.delete(t);
          }
        }
        forEach(e) {
          this.init(),
            Array.from(this.normalizedNames.keys()).forEach((t) =>
              e(this.normalizedNames.get(t), this.headers.get(t))
            );
        }
      }
      class Ry {
        encodeKey(e) {
          return Py(e);
        }
        encodeValue(e) {
          return Py(e);
        }
        decodeKey(e) {
          return decodeURIComponent(e);
        }
        decodeValue(e) {
          return decodeURIComponent(e);
        }
      }
      function Py(e) {
        return encodeURIComponent(e)
          .replace(/%40/gi, "@")
          .replace(/%3A/gi, ":")
          .replace(/%24/gi, "$")
          .replace(/%2C/gi, ",")
          .replace(/%3B/gi, ";")
          .replace(/%2B/gi, "+")
          .replace(/%3D/gi, "=")
          .replace(/%3F/gi, "?")
          .replace(/%2F/gi, "/");
      }
      class Dy {
        constructor(e = {}) {
          if (
            ((this.updates = null),
            (this.cloneFrom = null),
            (this.encoder = e.encoder || new Ry()),
            e.fromString)
          ) {
            if (e.fromObject)
              throw new Error("Cannot specify both fromString and fromObject.");
            this.map = (function (e, t) {
              const n = new Map();
              return (
                e.length > 0 &&
                  e
                    .replace(/^\?/, "")
                    .split("&")
                    .forEach((e) => {
                      const r = e.indexOf("="),
                        [s, i] =
                          -1 == r
                            ? [t.decodeKey(e), ""]
                            : [
                                t.decodeKey(e.slice(0, r)),
                                t.decodeValue(e.slice(r + 1)),
                              ],
                        o = n.get(s) || [];
                      o.push(i), n.set(s, o);
                    }),
                n
              );
            })(e.fromString, this.encoder);
          } else
            e.fromObject
              ? ((this.map = new Map()),
                Object.keys(e.fromObject).forEach((t) => {
                  const n = e.fromObject[t];
                  this.map.set(t, Array.isArray(n) ? n : [n]);
                }))
              : (this.map = null);
        }
        has(e) {
          return this.init(), this.map.has(e);
        }
        get(e) {
          this.init();
          const t = this.map.get(e);
          return t ? t[0] : null;
        }
        getAll(e) {
          return this.init(), this.map.get(e) || null;
        }
        keys() {
          return this.init(), Array.from(this.map.keys());
        }
        append(e, t) {
          return this.clone({ param: e, value: t, op: "a" });
        }
        appendAll(e) {
          const t = [];
          return (
            Object.keys(e).forEach((n) => {
              const r = e[n];
              Array.isArray(r)
                ? r.forEach((e) => {
                    t.push({ param: n, value: e, op: "a" });
                  })
                : t.push({ param: n, value: r, op: "a" });
            }),
            this.clone(t)
          );
        }
        set(e, t) {
          return this.clone({ param: e, value: t, op: "s" });
        }
        delete(e, t) {
          return this.clone({ param: e, value: t, op: "d" });
        }
        toString() {
          return (
            this.init(),
            this.keys()
              .map((e) => {
                const t = this.encoder.encodeKey(e);
                return this.map
                  .get(e)
                  .map((e) => t + "=" + this.encoder.encodeValue(e))
                  .join("&");
              })
              .filter((e) => "" !== e)
              .join("&")
          );
        }
        clone(e) {
          const t = new Dy({ encoder: this.encoder });
          return (
            (t.cloneFrom = this.cloneFrom || this),
            (t.updates = (this.updates || []).concat(e)),
            t
          );
        }
        init() {
          null === this.map && (this.map = new Map()),
            null !== this.cloneFrom &&
              (this.cloneFrom.init(),
              this.cloneFrom
                .keys()
                .forEach((e) => this.map.set(e, this.cloneFrom.map.get(e))),
              this.updates.forEach((e) => {
                switch (e.op) {
                  case "a":
                  case "s":
                    const t =
                      ("a" === e.op ? this.map.get(e.param) : void 0) || [];
                    t.push(e.value), this.map.set(e.param, t);
                    break;
                  case "d":
                    if (void 0 === e.value) {
                      this.map.delete(e.param);
                      break;
                    }
                    {
                      let t = this.map.get(e.param) || [];
                      const n = t.indexOf(e.value);
                      -1 !== n && t.splice(n, 1),
                        t.length > 0
                          ? this.map.set(e.param, t)
                          : this.map.delete(e.param);
                    }
                }
              }),
              (this.cloneFrom = this.updates = null));
        }
      }
      function Ny(e) {
        return "undefined" != typeof ArrayBuffer && e instanceof ArrayBuffer;
      }
      function My(e) {
        return "undefined" != typeof Blob && e instanceof Blob;
      }
      function Fy(e) {
        return "undefined" != typeof FormData && e instanceof FormData;
      }
      class jy {
        constructor(e, t, n, r) {
          let s;
          if (
            ((this.url = t),
            (this.body = null),
            (this.reportProgress = !1),
            (this.withCredentials = !1),
            (this.responseType = "json"),
            (this.method = e.toUpperCase()),
            (function (e) {
              switch (e) {
                case "DELETE":
                case "GET":
                case "HEAD":
                case "OPTIONS":
                case "JSONP":
                  return !1;
                default:
                  return !0;
              }
            })(this.method) || r
              ? ((this.body = void 0 !== n ? n : null), (s = r))
              : (s = n),
            s &&
              ((this.reportProgress = !!s.reportProgress),
              (this.withCredentials = !!s.withCredentials),
              s.responseType && (this.responseType = s.responseType),
              s.headers && (this.headers = s.headers),
              s.params && (this.params = s.params)),
            this.headers || (this.headers = new Oy()),
            this.params)
          ) {
            const e = this.params.toString();
            if (0 === e.length) this.urlWithParams = t;
            else {
              const n = t.indexOf("?");
              this.urlWithParams =
                t + (-1 === n ? "?" : n < t.length - 1 ? "&" : "") + e;
            }
          } else (this.params = new Dy()), (this.urlWithParams = t);
        }
        serializeBody() {
          return null === this.body
            ? null
            : Ny(this.body) ||
              My(this.body) ||
              Fy(this.body) ||
              "string" == typeof this.body
            ? this.body
            : this.body instanceof Dy
            ? this.body.toString()
            : "object" == typeof this.body ||
              "boolean" == typeof this.body ||
              Array.isArray(this.body)
            ? JSON.stringify(this.body)
            : this.body.toString();
        }
        detectContentTypeHeader() {
          return null === this.body || Fy(this.body)
            ? null
            : My(this.body)
            ? this.body.type || null
            : Ny(this.body)
            ? null
            : "string" == typeof this.body
            ? "text/plain"
            : this.body instanceof Dy
            ? "application/x-www-form-urlencoded;charset=UTF-8"
            : "object" == typeof this.body ||
              "number" == typeof this.body ||
              "boolean" == typeof this.body
            ? "application/json"
            : null;
        }
        clone(e = {}) {
          const t = e.method || this.method,
            n = e.url || this.url,
            r = e.responseType || this.responseType,
            s = void 0 !== e.body ? e.body : this.body,
            i =
              void 0 !== e.withCredentials
                ? e.withCredentials
                : this.withCredentials,
            o =
              void 0 !== e.reportProgress
                ? e.reportProgress
                : this.reportProgress;
          let a = e.headers || this.headers,
            l = e.params || this.params;
          return (
            void 0 !== e.setHeaders &&
              (a = Object.keys(e.setHeaders).reduce(
                (t, n) => t.set(n, e.setHeaders[n]),
                a
              )),
            e.setParams &&
              (l = Object.keys(e.setParams).reduce(
                (t, n) => t.set(n, e.setParams[n]),
                l
              )),
            new jy(t, n, s, {
              params: l,
              headers: a,
              reportProgress: o,
              responseType: r,
              withCredentials: i,
            })
          );
        }
      }
      var Ly = (function (e) {
        return (
          (e[(e.Sent = 0)] = "Sent"),
          (e[(e.UploadProgress = 1)] = "UploadProgress"),
          (e[(e.ResponseHeader = 2)] = "ResponseHeader"),
          (e[(e.DownloadProgress = 3)] = "DownloadProgress"),
          (e[(e.Response = 4)] = "Response"),
          (e[(e.User = 5)] = "User"),
          e
        );
      })({});
      class Wy {
        constructor(e, t = 200, n = "OK") {
          (this.headers = e.headers || new Oy()),
            (this.status = void 0 !== e.status ? e.status : t),
            (this.statusText = e.statusText || n),
            (this.url = e.url || null),
            (this.ok = this.status >= 200 && this.status < 300);
        }
      }
      class zy extends Wy {
        constructor(e = {}) {
          super(e), (this.type = Ly.ResponseHeader);
        }
        clone(e = {}) {
          return new zy({
            headers: e.headers || this.headers,
            status: void 0 !== e.status ? e.status : this.status,
            statusText: e.statusText || this.statusText,
            url: e.url || this.url || void 0,
          });
        }
      }
      class qy extends Wy {
        constructor(e = {}) {
          super(e),
            (this.type = Ly.Response),
            (this.body = void 0 !== e.body ? e.body : null);
        }
        clone(e = {}) {
          return new qy({
            body: void 0 !== e.body ? e.body : this.body,
            headers: e.headers || this.headers,
            status: void 0 !== e.status ? e.status : this.status,
            statusText: e.statusText || this.statusText,
            url: e.url || this.url || void 0,
          });
        }
      }
      class Hy extends Wy {
        constructor(e) {
          super(e, 0, "Unknown Error"),
            (this.name = "HttpErrorResponse"),
            (this.ok = !1),
            (this.message =
              this.status >= 200 && this.status < 300
                ? `Http failure during parsing for ${e.url || "(unknown url)"}`
                : `Http failure response for ${e.url || "(unknown url)"}: ${
                    e.status
                  } ${e.statusText}`),
            (this.error = e.error || null);
        }
      }
      function Uy(e, t) {
        return {
          body: t,
          headers: e.headers,
          observe: e.observe,
          params: e.params,
          reportProgress: e.reportProgress,
          responseType: e.responseType,
          withCredentials: e.withCredentials,
        };
      }
      let Vy = (() => {
        class e {
          constructor(e) {
            this.handler = e;
          }
          request(e, t, n = {}) {
            let r;
            if (e instanceof jy) r = e;
            else {
              let s, i;
              (s = n.headers instanceof Oy ? n.headers : new Oy(n.headers)),
                n.params &&
                  (i =
                    n.params instanceof Dy
                      ? n.params
                      : new Dy({ fromObject: n.params })),
                (r = new jy(e, t, void 0 !== n.body ? n.body : null, {
                  headers: s,
                  params: i,
                  reportProgress: n.reportProgress,
                  responseType: n.responseType || "json",
                  withCredentials: n.withCredentials,
                }));
            }
            const s = Xc(r).pipe(ju((e) => this.handler.handle(e)));
            if (e instanceof jy || "events" === n.observe) return s;
            const i = s.pipe(Ru((e) => e instanceof qy));
            switch (n.observe || "body") {
              case "body":
                switch (r.responseType) {
                  case "arraybuffer":
                    return i.pipe(
                      x((e) => {
                        if (null !== e.body && !(e.body instanceof ArrayBuffer))
                          throw new Error("Response is not an ArrayBuffer.");
                        return e.body;
                      })
                    );
                  case "blob":
                    return i.pipe(
                      x((e) => {
                        if (null !== e.body && !(e.body instanceof Blob))
                          throw new Error("Response is not a Blob.");
                        return e.body;
                      })
                    );
                  case "text":
                    return i.pipe(
                      x((e) => {
                        if (null !== e.body && "string" != typeof e.body)
                          throw new Error("Response is not a string.");
                        return e.body;
                      })
                    );
                  case "json":
                  default:
                    return i.pipe(x((e) => e.body));
                }
              case "response":
                return i;
              default:
                throw new Error(
                  `Unreachable: unhandled observe type ${n.observe}}`
                );
            }
          }
          delete(e, t = {}) {
            return this.request("DELETE", e, t);
          }
          get(e, t = {}) {
            return this.request("GET", e, t);
          }
          head(e, t = {}) {
            return this.request("HEAD", e, t);
          }
          jsonp(e, t) {
            return this.request("JSONP", e, {
              params: new Dy().append(t, "JSONP_CALLBACK"),
              observe: "body",
              responseType: "json",
            });
          }
          options(e, t = {}) {
            return this.request("OPTIONS", e, t);
          }
          patch(e, t, n = {}) {
            return this.request("PATCH", e, Uy(n, t));
          }
          post(e, t, n = {}) {
            return this.request("POST", e, Uy(n, t));
          }
          put(e, t, n = {}) {
            return this.request("PUT", e, Uy(n, t));
          }
        }
        return (
          (e.ɵfac = function (t) {
            return new (t || e)(Yn(Iy));
          }),
          (e.ɵprov = ce({ token: e, factory: e.ɵfac })),
          e
        );
      })();
      class By {
        constructor(e, t) {
          (this.next = e), (this.interceptor = t);
        }
        handle(e) {
          return this.interceptor.intercept(e, this.next);
        }
      }
      const $y = new Mn("HTTP_INTERCEPTORS");
      let Qy = (() => {
        class e {
          intercept(e, t) {
            return t.handle(e);
          }
        }
        return (
          (e.ɵfac = function (t) {
            return new (t || e)();
          }),
          (e.ɵprov = ce({ token: e, factory: e.ɵfac })),
          e
        );
      })();
      const Gy = /^\)\]\}',?\n/;
      class Ky {}
      let Zy = (() => {
          class e {
            constructor() {}
            build() {
              return new XMLHttpRequest();
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)();
            }),
            (e.ɵprov = ce({ token: e, factory: e.ɵfac })),
            e
          );
        })(),
        Jy = (() => {
          class e {
            constructor(e) {
              this.xhrFactory = e;
            }
            handle(e) {
              if ("JSONP" === e.method)
                throw new Error(
                  "Attempted to construct Jsonp request without HttpClientJsonpModule installed."
                );
              return new v((t) => {
                const n = this.xhrFactory.build();
                if (
                  (n.open(e.method, e.urlWithParams),
                  e.withCredentials && (n.withCredentials = !0),
                  e.headers.forEach((e, t) =>
                    n.setRequestHeader(e, t.join(","))
                  ),
                  e.headers.has("Accept") ||
                    n.setRequestHeader(
                      "Accept",
                      "application/json, text/plain, */*"
                    ),
                  !e.headers.has("Content-Type"))
                ) {
                  const t = e.detectContentTypeHeader();
                  null !== t && n.setRequestHeader("Content-Type", t);
                }
                if (e.responseType) {
                  const t = e.responseType.toLowerCase();
                  n.responseType = "json" !== t ? t : "text";
                }
                const r = e.serializeBody();
                let s = null;
                const i = () => {
                    if (null !== s) return s;
                    const t = 1223 === n.status ? 204 : n.status,
                      r = n.statusText || "OK",
                      i = new Oy(n.getAllResponseHeaders()),
                      o =
                        (function (e) {
                          return "responseURL" in e && e.responseURL
                            ? e.responseURL
                            : /^X-Request-URL:/m.test(e.getAllResponseHeaders())
                            ? e.getResponseHeader("X-Request-URL")
                            : null;
                        })(n) || e.url;
                    return (
                      (s = new zy({
                        headers: i,
                        status: t,
                        statusText: r,
                        url: o,
                      })),
                      s
                    );
                  },
                  o = () => {
                    let { headers: r, status: s, statusText: o, url: a } = i(),
                      l = null;
                    204 !== s &&
                      (l = void 0 === n.response ? n.responseText : n.response),
                      0 === s && (s = l ? 200 : 0);
                    let c = s >= 200 && s < 300;
                    if ("json" === e.responseType && "string" == typeof l) {
                      const e = l;
                      l = l.replace(Gy, "");
                      try {
                        l = "" !== l ? JSON.parse(l) : null;
                      } catch (u) {
                        (l = e), c && ((c = !1), (l = { error: u, text: l }));
                      }
                    }
                    c
                      ? (t.next(
                          new qy({
                            body: l,
                            headers: r,
                            status: s,
                            statusText: o,
                            url: a || void 0,
                          })
                        ),
                        t.complete())
                      : t.error(
                          new Hy({
                            error: l,
                            headers: r,
                            status: s,
                            statusText: o,
                            url: a || void 0,
                          })
                        );
                  },
                  a = (e) => {
                    const { url: r } = i(),
                      s = new Hy({
                        error: e,
                        status: n.status || 0,
                        statusText: n.statusText || "Unknown Error",
                        url: r || void 0,
                      });
                    t.error(s);
                  };
                let l = !1;
                const c = (r) => {
                    l || (t.next(i()), (l = !0));
                    let s = { type: Ly.DownloadProgress, loaded: r.loaded };
                    r.lengthComputable && (s.total = r.total),
                      "text" === e.responseType &&
                        n.responseText &&
                        (s.partialText = n.responseText),
                      t.next(s);
                  },
                  u = (e) => {
                    let n = { type: Ly.UploadProgress, loaded: e.loaded };
                    e.lengthComputable && (n.total = e.total), t.next(n);
                  };
                return (
                  n.addEventListener("load", o),
                  n.addEventListener("error", a),
                  n.addEventListener("timeout", a),
                  n.addEventListener("abort", a),
                  e.reportProgress &&
                    (n.addEventListener("progress", c),
                    null !== r &&
                      n.upload &&
                      n.upload.addEventListener("progress", u)),
                  n.send(r),
                  t.next({ type: Ly.Sent }),
                  () => {
                    n.removeEventListener("error", a),
                      n.removeEventListener("abort", a),
                      n.removeEventListener("load", o),
                      n.removeEventListener("timeout", a),
                      e.reportProgress &&
                        (n.removeEventListener("progress", c),
                        null !== r &&
                          n.upload &&
                          n.upload.removeEventListener("progress", u)),
                      n.readyState !== n.DONE && n.abort();
                  }
                );
              });
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)(Yn(Ky));
            }),
            (e.ɵprov = ce({ token: e, factory: e.ɵfac })),
            e
          );
        })();
      const Yy = new Mn("XSRF_COOKIE_NAME"),
        Xy = new Mn("XSRF_HEADER_NAME");
      class ev {}
      let tv = (() => {
          class e {
            constructor(e, t, n) {
              (this.doc = e),
                (this.platform = t),
                (this.cookieName = n),
                (this.lastCookieString = ""),
                (this.lastToken = null),
                (this.parseCount = 0);
            }
            getToken() {
              if ("server" === this.platform) return null;
              const e = this.doc.cookie || "";
              return (
                e !== this.lastCookieString &&
                  (this.parseCount++,
                  (this.lastToken = nc(e, this.cookieName)),
                  (this.lastCookieString = e)),
                this.lastToken
              );
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)(Yn(Ml), Yn(Ha), Yn(Yy));
            }),
            (e.ɵprov = ce({ token: e, factory: e.ɵfac })),
            e
          );
        })(),
        nv = (() => {
          class e {
            constructor(e, t) {
              (this.tokenService = e), (this.headerName = t);
            }
            intercept(e, t) {
              const n = e.url.toLowerCase();
              if (
                "GET" === e.method ||
                "HEAD" === e.method ||
                n.startsWith("http://") ||
                n.startsWith("https://")
              )
                return t.handle(e);
              const r = this.tokenService.getToken();
              return (
                null === r ||
                  e.headers.has(this.headerName) ||
                  (e = e.clone({ headers: e.headers.set(this.headerName, r) })),
                t.handle(e)
              );
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)(Yn(ev), Yn(Xy));
            }),
            (e.ɵprov = ce({ token: e, factory: e.ɵfac })),
            e
          );
        })(),
        rv = (() => {
          class e {
            constructor(e, t) {
              (this.backend = e), (this.injector = t), (this.chain = null);
            }
            handle(e) {
              if (null === this.chain) {
                const e = this.injector.get($y, []);
                this.chain = e.reduceRight(
                  (e, t) => new By(e, t),
                  this.backend
                );
              }
              return this.chain.handle(e);
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)(Yn(Ay), Yn(pi));
            }),
            (e.ɵprov = ce({ token: e, factory: e.ɵfac })),
            e
          );
        })(),
        sv = (() => {
          class e {
            static disable() {
              return {
                ngModule: e,
                providers: [{ provide: nv, useClass: Qy }],
              };
            }
            static withOptions(t = {}) {
              return {
                ngModule: e,
                providers: [
                  t.cookieName ? { provide: Yy, useValue: t.cookieName } : [],
                  t.headerName ? { provide: Xy, useValue: t.headerName } : [],
                ],
              };
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)();
            }),
            (e.ɵmod = Be({ type: e })),
            (e.ɵinj = ue({
              providers: [
                nv,
                { provide: $y, useExisting: nv, multi: !0 },
                { provide: ev, useClass: tv },
                { provide: Yy, useValue: "XSRF-TOKEN" },
                { provide: Xy, useValue: "X-XSRF-TOKEN" },
              ],
            })),
            e
          );
        })(),
        iv = (() => {
          class e {}
          return (
            (e.ɵfac = function (t) {
              return new (t || e)();
            }),
            (e.ɵmod = Be({ type: e })),
            (e.ɵinj = ue({
              providers: [
                Vy,
                { provide: Iy, useClass: rv },
                Jy,
                { provide: Ay, useExisting: Jy },
                Zy,
                { provide: Ky, useExisting: Zy },
              ],
              imports: [
                [
                  sv.withOptions({
                    cookieName: "XSRF-TOKEN",
                    headerName: "X-XSRF-TOKEN",
                  }),
                ],
              ],
            })),
            e
          );
        })();
      const ov = ["nsmContent"],
        av = ["nsmDialog"],
        lv = ["nsmOverlay"],
        cv = ["dynamicContent"];
      function uv(e, t) {}
      function hv(e, t) {
        if (1 & e) {
          const e = Oi();
          Ti(0, "button", 10),
            Pi("click", function () {
              return Tt(e), Mi(2).close();
            }),
            (Ct.lFrame.currentNamespace = "http://www.w3.org/2000/svg"),
            Ti(1, "svg", 11),
            Ti(2, "g"),
            Ai(3, "path", 12),
            Ii(),
            Ti(4, "g"),
            Ai(5, "path", 13),
            Ii(),
            Ii(),
            Ii();
        }
      }
      const dv = function (e, t) {
          return { "transparent": e, "overlay": !0, "nsm-overlay-open": t };
        },
        pv = function (e, t) {
          return ["nsm-dialog", e, t];
        };
      function fv(e, t) {
        if (1 & e) {
          const e = Oi();
          Ti(0, "div", 1, 2),
            Pi("mousedown", function (t) {
              return Tt(e), Mi().dismiss(t);
            }),
            Ti(2, "div", 3, 4),
            Ti(4, "div", 5, 6),
            Ti(6, "div", 7),
            Si(7, uv, 0, 0, "ng-template", null, 8, Ma),
            Li(9),
            Ii(),
            Si(10, hv, 6, 0, "button", 9),
            Ii(),
            Ii(),
            Ii();
        }
        if (2 & e) {
          const e = Mi();
          qi("z-index", e.visible ? e.layerPosition - 1 : -1),
            ki("ngClass", pa(11, dv, !e.backdrop, e.openedClass)),
            ss(2),
            qi("z-index", e.visible ? e.layerPosition : -1),
            ki(
              "ngClass",
              pa(
                14,
                pv,
                e.customClass,
                e.openedClass ? "nsm-dialog-open" : "nsm-dialog-close"
              )
            ),
            wi("aria-hidden", !e.openedClass)("aria-label", e.ariaLabel)(
              "aria-labelledby",
              e.ariaLabelledBy
            )("aria-describedby", e.ariaDescribedBy),
            ss(8),
            ki("ngIf", e.closable);
        }
      }
      const mv = ["*"];
      let gv = (() => {
          class e {
            constructor(e, t, n, r, s) {
              (this._renderer = e),
                (this._changeDetectorRef = t),
                (this.componentFactoryResolver = n),
                (this._document = r),
                (this._platformId = s),
                (this.closable = !0),
                (this.escapable = !0),
                (this.dismissable = !0),
                (this.identifier = ""),
                (this.customClass = "nsm-dialog-animation-fade"),
                (this.visible = !1),
                (this.backdrop = !0),
                (this.force = !0),
                (this.hideDelay = 500),
                (this.autostart = !1),
                (this.target = ""),
                (this.ariaLabel = null),
                (this.ariaLabelledBy = null),
                (this.ariaDescribedBy = null),
                (this.refocus = !0),
                (this.visibleChange = new ga()),
                (this.onClose = new ga()),
                (this.onCloseFinished = new ga()),
                (this.onDismiss = new ga()),
                (this.onDismissFinished = new ga()),
                (this.onAnyCloseEvent = new ga()),
                (this.onAnyCloseEventFinished = new ga()),
                (this.onOpen = new ga()),
                (this.onOpenFinished = new ga()),
                (this.onEscape = new ga()),
                (this.onDataAdded = new ga()),
                (this.onDataRemoved = new ga()),
                (this.layerPosition = 1041),
                (this.overlayVisible = !1),
                (this.openedClass = !1),
                (this.createFrom = "html");
            }
            ngOnInit() {
              if (!this.identifier || !this.identifier.length)
                throw new Error(
                  "identifier field isn\u2019t set. Please set one before calling <ngx-smart-modal> in a template."
                );
              this._sendEvent("create");
            }
            ngAfterViewInit() {
              if (this.contentComponent) {
                const e = this.componentFactoryResolver.resolveComponentFactory(
                  this.contentComponent
                );
                this.createDynamicContent(this.dynamicContentContainer, e),
                  this.dynamicContentContainer.changes.subscribe((t) => {
                    this.createDynamicContent(t, e);
                  });
              }
            }
            ngOnDestroy() {
              this._sendEvent("delete");
            }
            open(e) {
              return this._sendEvent("open", { top: e }), this;
            }
            close() {
              return this._sendEvent("close"), this;
            }
            dismiss(e) {
              return this.dismissable && e.target.classList.contains("overlay")
                ? (this._sendEvent("dismiss"), this)
                : this;
            }
            toggle(e) {
              return this._sendEvent("toggle", { top: e }), this;
            }
            addCustomClass(e) {
              return (
                this.customClass.length
                  ? (this.customClass += " " + e)
                  : (this.customClass = e),
                this
              );
            }
            removeCustomClass(e) {
              return (
                (this.customClass = e
                  ? this.customClass.replace(e, "").trim()
                  : ""),
                this
              );
            }
            isVisible() {
              return this.visible;
            }
            hasData() {
              return void 0 !== this._data;
            }
            setData(e, t) {
              return (
                (!this.hasData() || (this.hasData() && t)) &&
                  ((this._data = e),
                  this.onDataAdded.emit(this._data),
                  this.markForCheck()),
                this
              );
            }
            getData() {
              return this._data;
            }
            removeData() {
              return (
                (this._data = void 0),
                this.onDataRemoved.emit(!0),
                this.markForCheck(),
                this
              );
            }
            addBodyClass() {
              return (
                this._renderer.addClass(this._document.body, "dialog-open"),
                this
              );
            }
            removeBodyClass() {
              return (
                this._renderer.removeClass(this._document.body, "dialog-open"),
                this
              );
            }
            markForCheck() {
              try {
                this._changeDetectorRef.detectChanges();
              } catch (e) {}
              this._changeDetectorRef.markForCheck();
            }
            targetPlacement() {
              if (
                !(
                  this.isBrowser &&
                  this.nsmDialog.length &&
                  this.nsmContent.length &&
                  this.nsmOverlay.length &&
                  this.target
                )
              )
                return !1;
              const e = this._document.querySelector(this.target);
              if (!e) return !1;
              const t = e.getBoundingClientRect(),
                n = this.nsmOverlay.first.nativeElement.getBoundingClientRect(),
                r = this.nsmContent.first.nativeElement.getBoundingClientRect(),
                s = this.nsmDialog.first.nativeElement.getBoundingClientRect(),
                i = parseInt(
                  getComputedStyle(this.nsmContent.first.nativeElement)
                    .marginLeft,
                  10
                ),
                o = parseInt(
                  getComputedStyle(this.nsmContent.first.nativeElement)
                    .marginTop,
                  10
                );
              let a = t.top - s.top - (r.height - t.height) / 2,
                l = t.left - s.left - (r.width - t.width) / 2;
              l + s.left + r.width + 2 * i > n.width
                ? (l = n.width - (s.left + r.width) - 2 * i)
                : l + s.left < 0 && (l = -s.left),
                a + s.top + r.height + o > n.height &&
                  (a = n.height - (s.top + r.height) - o),
                this._renderer.setStyle(
                  this.nsmContent.first.nativeElement,
                  "top",
                  (a < 0 ? 0 : a) + "px"
                ),
                this._renderer.setStyle(
                  this.nsmContent.first.nativeElement,
                  "left",
                  l + "px"
                );
            }
            _sendEvent(e, t) {
              if (!this.isBrowser) return !1;
              const n = new CustomEvent("ngx-smart-modal." + e, {
                detail: {
                  extraData: t,
                  instance: { id: this.identifier, modal: this },
                },
              });
              return window.dispatchEvent(n);
            }
            get isBrowser() {
              return hc(this._platformId);
            }
            createDynamicContent(e, t) {
              e.forEach((e) => {
                e.clear(), e.createComponent(t), this.markForCheck();
              });
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)(Ei(mo), Ei(Lo), Ei(ao), Ei(Ml), Ei(Ha));
            }),
            (e.ɵcmp = qe({
              type: e,
              selectors: [["ngx-smart-modal"]],
              viewQuery: function (e, t) {
                if (
                  (1 & e && (Aa(ov, 1), Aa(av, 1), Aa(lv, 1), Aa(cv, 1, Zo)),
                  2 & e)
                ) {
                  let e;
                  Ia((e = Ra())) && (t.nsmContent = e),
                    Ia((e = Ra())) && (t.nsmDialog = e),
                    Ia((e = Ra())) && (t.nsmOverlay = e),
                    Ia((e = Ra())) && (t.dynamicContentContainer = e);
                }
              },
              hostBindings: function (e, t) {
                1 & e &&
                  Pi(
                    "resize",
                    function () {
                      return t.targetPlacement();
                    },
                    !1,
                    gr
                  );
              },
              inputs: {
                closable: "closable",
                escapable: "escapable",
                dismissable: "dismissable",
                identifier: "identifier",
                customClass: "customClass",
                visible: "visible",
                backdrop: "backdrop",
                force: "force",
                hideDelay: "hideDelay",
                autostart: "autostart",
                target: "target",
                ariaLabel: "ariaLabel",
                ariaLabelledBy: "ariaLabelledBy",
                ariaDescribedBy: "ariaDescribedBy",
                refocus: "refocus",
              },
              outputs: {
                visibleChange: "visibleChange",
                onClose: "onClose",
                onCloseFinished: "onCloseFinished",
                onDismiss: "onDismiss",
                onDismissFinished: "onDismissFinished",
                onAnyCloseEvent: "onAnyCloseEvent",
                onAnyCloseEventFinished: "onAnyCloseEventFinished",
                onOpen: "onOpen",
                onOpenFinished: "onOpenFinished",
                onEscape: "onEscape",
                onDataAdded: "onDataAdded",
                onDataRemoved: "onDataRemoved",
              },
              ngContentSelectors: mv,
              decls: 1,
              vars: 1,
              consts: [
                [3, "z-index", "ngClass", "mousedown", 4, "ngIf"],
                [3, "ngClass", "mousedown"],
                ["nsmOverlay", ""],
                [3, "ngClass"],
                ["nsmDialog", ""],
                [1, "nsm-content"],
                ["nsmContent", ""],
                [1, "nsm-body"],
                ["dynamicContent", ""],
                [
                  "type",
                  "button",
                  "aria-label",
                  "Close",
                  "class",
                  "nsm-dialog-btn-close",
                  3,
                  "click",
                  4,
                  "ngIf",
                ],
                [
                  "type",
                  "button",
                  "aria-label",
                  "Close",
                  1,
                  "nsm-dialog-btn-close",
                  3,
                  "click",
                ],
                [
                  "xmlns",
                  "http://www.w3.org/2000/svg",
                  "version",
                  "1.1",
                  "id",
                  "Layer_1",
                  "x",
                  "0px",
                  "y",
                  "0px",
                  "viewBox",
                  "0 0 512 512",
                  0,
                  "xml",
                  "space",
                  "preserve",
                  "width",
                  "16px",
                  "height",
                  "16px",
                ],
                [
                  "d",
                  "M505.943,6.058c-8.077-8.077-21.172-8.077-29.249,0L6.058,476.693c-8.077,8.077-8.077,21.172,0,29.249    C10.096,509.982,15.39,512,20.683,512c5.293,0,10.586-2.019,14.625-6.059L505.943,35.306    C514.019,27.23,514.019,14.135,505.943,6.058z",
                  "fill",
                  "currentColor",
                ],
                [
                  "d",
                  "M505.942,476.694L35.306,6.059c-8.076-8.077-21.172-8.077-29.248,0c-8.077,8.076-8.077,21.171,0,29.248l470.636,470.636    c4.038,4.039,9.332,6.058,14.625,6.058c5.293,0,10.587-2.019,14.624-6.057C514.018,497.866,514.018,484.771,505.942,476.694z",
                  "fill",
                  "currentColor",
                ],
              ],
              template: function (e, t) {
                1 & e && (ji(), Si(0, fv, 11, 17, "div", 0)),
                  2 & e && ki("ngIf", t.overlayVisible);
              },
              directives: [ac, rc],
              encapsulation: 2,
            })),
            e
          );
        })(),
        yv = (() => {
          class e {
            constructor() {
              this._modalStack = [];
            }
            addModal(e, t) {
              if (t) {
                const t = this._modalStack.findIndex((t) => t.id === e.id);
                t > -1
                  ? (this._modalStack[t].modal = e.modal)
                  : this._modalStack.push(e);
              } else this._modalStack.push(e);
            }
            getModal(e) {
              const t = this._modalStack.find((t) => t.id === e);
              if (void 0 !== t) return t.modal;
              throw new Error(`Cannot find modal with identifier ${e}`);
            }
            getModalStack() {
              return this._modalStack;
            }
            getOpenedModals() {
              return this._modalStack.filter((e) => e.modal.visible);
            }
            getTopOpenedModal() {
              if (!this.getOpenedModals().length)
                throw new Error("No modal is opened");
              return this.getOpenedModals()
                .map((e) => e.modal)
                .reduce(
                  (e, t) => (t.layerPosition > e.layerPosition ? t : e),
                  this.getOpenedModals()[0].modal
                );
            }
            getHigherIndex() {
              return (
                Math.max(
                  ...this._modalStack.map((e) => e.modal.layerPosition),
                  1041
                ) + 1
              );
            }
            getModalStackCount() {
              return this._modalStack.length;
            }
            removeModal(e) {
              const t = this._modalStack.findIndex((t) => t.id === e);
              t > -1 && this._modalStack.splice(t, 1);
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)();
            }),
            (e.ɵprov = ce({ token: e, factory: e.ɵfac })),
            e
          );
        })(),
        vv = (() => {
          class e {
            constructor(e, t, n, r, s, i, o) {
              (this._componentFactoryResolver = e),
                (this._appRef = t),
                (this._injector = n),
                (this._modalStack = r),
                (this.applicationRef = s),
                (this._document = i),
                (this._platformId = o),
                (this._escapeKeyboardEvent = (e) => {
                  if ("Escape" === e.key)
                    try {
                      const e = this.getTopOpenedModal();
                      return (
                        !!e.escapable &&
                        (e.onEscape.emit(e), this.closeLatestModal(), !0)
                      );
                    } catch (t) {
                      return !1;
                    }
                  return !1;
                }),
                (this._trapFocusModal = (e) => {
                  if ("Tab" === e.key)
                    try {
                      const t = this.getTopOpenedModal();
                      return (
                        t.nsmDialog.first.nativeElement.contains(
                          document.activeElement
                        ) ||
                          (e.preventDefault(),
                          e.stopPropagation(),
                          t.nsmDialog.first.nativeElement.focus()),
                        !0
                      );
                    } catch (t) {
                      return !1;
                    }
                  return !1;
                }),
                this._addEvents();
            }
            addModal(e, t) {
              this._modalStack.addModal(e, t);
            }
            getModal(e) {
              return this._modalStack.getModal(e);
            }
            get(e) {
              return this.getModal(e);
            }
            open(e, t = !1) {
              return this._openModal(this.get(e), t);
            }
            close(e) {
              return this._closeModal(this.get(e));
            }
            closeAll() {
              this.getOpenedModals().forEach((e) => {
                this._closeModal(e.modal);
              });
            }
            toggle(e, t = !1) {
              return this._toggleModal(this.get(e), t);
            }
            getModalStack() {
              return this._modalStack.getModalStack();
            }
            getOpenedModals() {
              return this._modalStack.getOpenedModals();
            }
            getTopOpenedModal() {
              return this._modalStack.getTopOpenedModal();
            }
            getHigherIndex() {
              return this._modalStack.getHigherIndex();
            }
            getModalStackCount() {
              return this._modalStack.getModalStackCount();
            }
            removeModal(e) {
              this._modalStack.removeModal(e);
            }
            setModalData(e, t, n) {
              let r;
              return !!(r = this.get(t)) && (r.setData(e, n), !0);
            }
            getModalData(e) {
              let t;
              return (t = this.get(e)) ? t.getData() : null;
            }
            resetModalData(e) {
              if (this._modalStack.getModalStack().find((t) => t.id === e)) {
                const t = this.getModal(e).getData();
                return this.getModal(e).removeData(), t;
              }
              return !1;
            }
            closeLatestModal() {
              this.getTopOpenedModal().close();
            }
            create(e, t, n = {}) {
              try {
                return this.getModal(e);
              } catch (r) {
                const s =
                    this._componentFactoryResolver.resolveComponentFactory(gv),
                  i = this._resolveNgContent(t),
                  o = s.create(this._injector, i);
                return (
                  t instanceof jn && (o.instance.contentComponent = t),
                  (o.instance.identifier = e),
                  (o.instance.createFrom = "service"),
                  "boolean" == typeof n.closable &&
                    (o.instance.closable = n.closable),
                  "boolean" == typeof n.escapable &&
                    (o.instance.escapable = n.escapable),
                  "boolean" == typeof n.dismissable &&
                    (o.instance.dismissable = n.dismissable),
                  "string" == typeof n.customClass &&
                    (o.instance.customClass = n.customClass),
                  "boolean" == typeof n.backdrop &&
                    (o.instance.backdrop = n.backdrop),
                  "boolean" == typeof n.force && (o.instance.force = n.force),
                  "number" == typeof n.hideDelay &&
                    (o.instance.hideDelay = n.hideDelay),
                  "boolean" == typeof n.autostart &&
                    (o.instance.autostart = n.autostart),
                  "string" == typeof n.target && (o.instance.target = n.target),
                  "string" == typeof n.ariaLabel &&
                    (o.instance.ariaLabel = n.ariaLabel),
                  "string" == typeof n.ariaLabelledBy &&
                    (o.instance.ariaLabelledBy = n.ariaLabelledBy),
                  "string" == typeof n.ariaDescribedBy &&
                    (o.instance.ariaDescribedBy = n.ariaDescribedBy),
                  "boolean" == typeof n.refocus &&
                    (o.instance.refocus = n.refocus),
                  this._appRef.attachView(o.hostView),
                  this._document.body.appendChild(o.hostView.rootNodes[0]),
                  o.instance
                );
              }
            }
            _addEvents() {
              return (
                !!this.isBrowser &&
                (window.addEventListener("ngx-smart-modal.create", (e) => {
                  this._initModal(e.detail.instance);
                }),
                window.addEventListener("ngx-smart-modal.delete", (e) => {
                  this._deleteModal(e.detail.instance);
                }),
                window.addEventListener("ngx-smart-modal.open", (e) => {
                  this._openModal(e.detail.instance.modal, e.detail.top);
                }),
                window.addEventListener("ngx-smart-modal.toggle", (e) => {
                  this._toggleModal(e.detail.instance.modal, e.detail.top);
                }),
                window.addEventListener("ngx-smart-modal.close", (e) => {
                  this._closeModal(e.detail.instance.modal);
                }),
                window.addEventListener("ngx-smart-modal.dismiss", (e) => {
                  this._dismissModal(e.detail.instance.modal);
                }),
                window.addEventListener("keyup", this._escapeKeyboardEvent),
                !0)
              );
            }
            _initModal(e) {
              (e.modal.layerPosition += this.getModalStackCount()),
                this.addModal(e, e.modal.force),
                e.modal.autostart && this.open(e.id);
            }
            _openModal(e, t) {
              return (
                !e.visible &&
                ((this.lastElementFocused = document.activeElement),
                e.escapable &&
                  window.addEventListener("keyup", this._escapeKeyboardEvent),
                e.backdrop &&
                  window.addEventListener("keydown", this._trapFocusModal),
                t && (e.layerPosition = this.getHigherIndex()),
                e.addBodyClass(),
                (e.overlayVisible = !0),
                (e.visible = !0),
                e.onOpen.emit(e),
                e.markForCheck(),
                setTimeout(() => {
                  (e.openedClass = !0),
                    e.target && e.targetPlacement(),
                    e.nsmDialog.first.nativeElement.setAttribute(
                      "role",
                      "dialog"
                    ),
                    e.nsmDialog.first.nativeElement.setAttribute(
                      "tabIndex",
                      "-1"
                    ),
                    e.nsmDialog.first.nativeElement.setAttribute(
                      "aria-modal",
                      "true"
                    ),
                    e.nsmDialog.first.nativeElement.focus(),
                    e.markForCheck(),
                    e.onOpenFinished.emit(e);
                }),
                !0)
              );
            }
            _toggleModal(e, t) {
              return e.visible ? this._closeModal(e) : this._openModal(e, t);
            }
            _closeModal(e) {
              return (
                !!e.openedClass &&
                ((e.openedClass = !1),
                e.onClose.emit(e),
                e.onAnyCloseEvent.emit(e),
                this.getOpenedModals().length < 2 &&
                  (e.removeBodyClass(),
                  window.removeEventListener(
                    "keyup",
                    this._escapeKeyboardEvent
                  ),
                  window.removeEventListener("keydown", this._trapFocusModal)),
                setTimeout(() => {
                  e.visibleChange.emit(e.visible),
                    (e.visible = !1),
                    (e.overlayVisible = !1),
                    e.nsmDialog.first.nativeElement.removeAttribute("tabIndex"),
                    e.markForCheck(),
                    e.onCloseFinished.emit(e),
                    e.onAnyCloseEventFinished.emit(e),
                    e.refocus && this.lastElementFocused.focus();
                }, e.hideDelay),
                !0)
              );
            }
            _dismissModal(e) {
              return (
                !!e.openedClass &&
                ((e.openedClass = !1),
                e.onDismiss.emit(e),
                e.onAnyCloseEvent.emit(e),
                this.getOpenedModals().length < 2 && e.removeBodyClass(),
                setTimeout(() => {
                  (e.visible = !1),
                    e.visibleChange.emit(e.visible),
                    (e.overlayVisible = !1),
                    e.markForCheck(),
                    e.onDismissFinished.emit(e),
                    e.onAnyCloseEventFinished.emit(e);
                }, e.hideDelay),
                !0)
              );
            }
            _deleteModal(e) {
              this.removeModal(e.id),
                this.getModalStack().length || e.modal.removeBodyClass();
            }
            _resolveNgContent(e) {
              if ("string" == typeof e)
                return [[this._document.createTextNode(e)]];
              if (e instanceof Uo) {
                const t = e.createEmbeddedView(null);
                return this.applicationRef.attachView(t), [t.rootNodes];
              }
              return [];
            }
            get isBrowser() {
              return hc(this._platformId);
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)(
                Yn(ao),
                Yn(Cl),
                Yn(pi),
                Yn(yv),
                Yn(Cl),
                Yn(Ml),
                Yn(Ha)
              );
            }),
            (e.ɵprov = ce({ token: e, factory: e.ɵfac })),
            e
          );
        })(),
        bv = (() => {
          class e {
            constructor(e) {
              this.serivce = e;
            }
            static forRoot() {
              return { ngModule: e, providers: [vv, yv] };
            }
            static forChild() {
              return { ngModule: e, providers: [vv, yv] };
            }
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)(Yn(vv));
            }),
            (e.ɵmod = Be({ type: e })),
            (e.ɵinj = ue({ imports: [[uc]] })),
            e
          );
        })(),
        _v = (() => {
          class e {
            constructor(e) {
              this.injector = e;
              const t = (function (e, t) {
                const n = (function (e, t) {
                    return t.get(ao).resolveComponentFactory(e).inputs;
                  })(e, t.injector),
                  r = t.strategyFactory || new hu(e, t.injector),
                  s = (function (e) {
                    const t = {};
                    return (
                      e.forEach(({ propName: e, templateName: n }) => {
                        var r;
                        t[
                          ((r = n),
                          r.replace(/[A-Z]/g, (e) => `-${e.toLowerCase()}`))
                        ] = e;
                      }),
                      t
                    );
                  })(n);
                class i extends pu {
                  constructor(e) {
                    super(), (this.injector = e);
                  }
                  get ngElementStrategy() {
                    if (!this._ngElementStrategy) {
                      const e = (this._ngElementStrategy = r.create(
                        this.injector || t.injector
                      ));
                      n.forEach(({ propName: t }) => {
                        if (!this.hasOwnProperty(t)) return;
                        const n = this[t];
                        delete this[t], e.setInputValue(t, n);
                      });
                    }
                    return this._ngElementStrategy;
                  }
                  attributeChangedCallback(e, t, n, r) {
                    this.ngElementStrategy.setInputValue(s[e], n);
                  }
                  connectedCallback() {
                    let e = !1;
                    this.ngElementStrategy.events &&
                      (this.subscribeToEvents(), (e = !0)),
                      this.ngElementStrategy.connect(this),
                      e || this.subscribeToEvents();
                  }
                  disconnectedCallback() {
                    this._ngElementStrategy &&
                      this._ngElementStrategy.disconnect(),
                      this.ngElementEventsSubscription &&
                        (this.ngElementEventsSubscription.unsubscribe(),
                        (this.ngElementEventsSubscription = null));
                  }
                  subscribeToEvents() {
                    this.ngElementEventsSubscription =
                      this.ngElementStrategy.events.subscribe((e) => {
                        const t = (function (e, t, n) {
                          if ("function" != typeof CustomEvent) {
                            const r = e.createEvent("CustomEvent");
                            return r.initCustomEvent(t, !1, !1, n), r;
                          }
                          return new CustomEvent(t, {
                            bubbles: !1,
                            cancelable: !1,
                            detail: n,
                          });
                        })(this.ownerDocument, e.name, e.value);
                        this.dispatchEvent(t);
                      });
                  }
                }
                return (
                  (i.observedAttributes = Object.keys(s)),
                  n.forEach(({ propName: e }) => {
                    Object.defineProperty(i.prototype, e, {
                      get() {
                        return this.ngElementStrategy.getInputValue(e);
                      },
                      set(t) {
                        this.ngElementStrategy.setInputValue(e, t);
                      },
                      configurable: !0,
                      enumerable: !0,
                    });
                  }),
                  i
                );
              })(gm, { injector: this.injector });
              customElements.define("digitaler-stuhlkreis", t);
            }
            ngDoBootstrap() {}
          }
          return (
            (e.ɵfac = function (t) {
              return new (t || e)(Yn(pi));
            }),
            (e.ɵmod = Be({ type: e, bootstrap: [gm] })),
            (e.ɵinj = ue({
              providers: [{ provide: Ql, useValue: "/" }],
              imports: [[Uc, tm, Ty, Sf, iv, Vf, bv.forRoot()]],
            })),
            e
          );
        })();
      (function () {
        if (gl)
          throw new Error("Cannot enable prod mode after platform setup.");
        ml = !1;
      })(),
        qc()
          .bootstrapModule(_v)
          .catch((e) => console.error(e));
    },
    zn8P: function (e, t) {
      function n(e) {
        return Promise.resolve().then(function () {
          var t = new Error("Cannot find module '" + e + "'");
          throw ((t.code = "MODULE_NOT_FOUND"), t);
        });
      }
      (n.keys = function () {
        return [];
      }),
        (n.resolve = n),
        (e.exports = n),
        (n.id = "zn8P");
    },
  },
  [[0, 0]],
]);
