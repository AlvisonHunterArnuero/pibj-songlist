function e(e, t, n, r) {
  Object.defineProperty(e, t, {
    get: n,
    set: r,
    enumerable: !0,
    configurable: !0,
  })
}
function t(e) {
  return e && e.__esModule ? e.default : e
}
var n =
    'undefined' != typeof globalThis
      ? globalThis
      : 'undefined' != typeof self
        ? self
        : 'undefined' != typeof window
          ? window
          : 'undefined' != typeof global
            ? global
            : {},
  r = {},
  o = {},
  i = n.parcelRequireba46
null == i &&
  (((i = function (e) {
    if (e in r) return r[e].exports
    if (e in o) {
      var t = o[e]
      delete o[e]
      var n = { id: e, exports: {} }
      return (r[e] = n), t.call(n.exports, n, n.exports), n.exports
    }
    var i = new Error("Cannot find module '" + e + "'")
    throw ((i.code = 'MODULE_NOT_FOUND'), i)
  }).register = function (e, t) {
    o[e] = t
  }),
  (n.parcelRequireba46 = i)),
  i.register('eqJ66', function (t, n) {
    var r, o
    e(
      t.exports,
      'register',
      () => r,
      (e) => (r = e)
    ),
      e(
        t.exports,
        'resolve',
        () => o,
        (e) => (o = e)
      )
    var i = {}
    ;(r = function (e) {
      for (var t = Object.keys(e), n = 0; n < t.length; n++) i[t[n]] = e[t[n]]
    }),
      (o = function (e) {
        var t = i[e]
        if (null == t) throw new Error('Could not resolve bundle with id ' + e)
        return t
      })
  }),
  i.register('b8reE', function (t, n) {
    /**
     * @license React
     * react-jsx-runtime.production.min.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    var r, o, a
    e(
      t.exports,
      'Fragment',
      () => r,
      (e) => (r = e)
    ),
      e(
        t.exports,
        'jsx',
        () => o,
        (e) => (o = e)
      ),
      e(
        t.exports,
        'jsxs',
        () => a,
        (e) => (a = e)
      )
    var l = i('8tsvq'),
      u = Symbol.for('react.element'),
      s = Symbol.for('react.fragment'),
      c = Object.prototype.hasOwnProperty,
      f =
        l.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
      p = { key: !0, ref: !0, __self: !0, __source: !0 }
    function d(e, t, n) {
      var r,
        o = {},
        i = null,
        a = null
      for (r in (void 0 !== n && (i = '' + n),
      void 0 !== t.key && (i = '' + t.key),
      void 0 !== t.ref && (a = t.ref),
      t))
        c.call(t, r) && !p.hasOwnProperty(r) && (o[r] = t[r])
      if (e && e.defaultProps)
        for (r in (t = e.defaultProps)) void 0 === o[r] && (o[r] = t[r])
      return {
        $$typeof: u,
        type: e,
        key: i,
        ref: a,
        props: o,
        _owner: f.current,
      }
    }
    ;(r = s), (o = d), (a = d)
  }),
  i.register('8tsvq', function (e, t) {
    e.exports = i('4rIOO')
  }),
  i.register('4rIOO', function (t, n) {
    /**
     * @license React
     * react.production.min.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    var r,
      o,
      i,
      a,
      l,
      u,
      s,
      c,
      f,
      p,
      d,
      h,
      g,
      m,
      y,
      v,
      b,
      w,
      x,
      k,
      S,
      E,
      C,
      O,
      A,
      P,
      T,
      L,
      R,
      F,
      j,
      D,
      _,
      N,
      I
    e(
      t.exports,
      'Children',
      () => r,
      (e) => (r = e)
    ),
      e(
        t.exports,
        'Component',
        () => o,
        (e) => (o = e)
      ),
      e(
        t.exports,
        'Fragment',
        () => i,
        (e) => (i = e)
      ),
      e(
        t.exports,
        'Profiler',
        () => a,
        (e) => (a = e)
      ),
      e(
        t.exports,
        'PureComponent',
        () => l,
        (e) => (l = e)
      ),
      e(
        t.exports,
        'StrictMode',
        () => u,
        (e) => (u = e)
      ),
      e(
        t.exports,
        'Suspense',
        () => s,
        (e) => (s = e)
      ),
      e(
        t.exports,
        '__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED',
        () => c,
        (e) => (c = e)
      ),
      e(
        t.exports,
        'cloneElement',
        () => f,
        (e) => (f = e)
      ),
      e(
        t.exports,
        'createContext',
        () => p,
        (e) => (p = e)
      ),
      e(
        t.exports,
        'createElement',
        () => d,
        (e) => (d = e)
      ),
      e(
        t.exports,
        'createFactory',
        () => h,
        (e) => (h = e)
      ),
      e(
        t.exports,
        'createRef',
        () => g,
        (e) => (g = e)
      ),
      e(
        t.exports,
        'forwardRef',
        () => m,
        (e) => (m = e)
      ),
      e(
        t.exports,
        'isValidElement',
        () => y,
        (e) => (y = e)
      ),
      e(
        t.exports,
        'lazy',
        () => v,
        (e) => (v = e)
      ),
      e(
        t.exports,
        'memo',
        () => b,
        (e) => (b = e)
      ),
      e(
        t.exports,
        'startTransition',
        () => w,
        (e) => (w = e)
      ),
      e(
        t.exports,
        'unstable_act',
        () => x,
        (e) => (x = e)
      ),
      e(
        t.exports,
        'useCallback',
        () => k,
        (e) => (k = e)
      ),
      e(
        t.exports,
        'useContext',
        () => S,
        (e) => (S = e)
      ),
      e(
        t.exports,
        'useDebugValue',
        () => E,
        (e) => (E = e)
      ),
      e(
        t.exports,
        'useDeferredValue',
        () => C,
        (e) => (C = e)
      ),
      e(
        t.exports,
        'useEffect',
        () => O,
        (e) => (O = e)
      ),
      e(
        t.exports,
        'useId',
        () => A,
        (e) => (A = e)
      ),
      e(
        t.exports,
        'useImperativeHandle',
        () => P,
        (e) => (P = e)
      ),
      e(
        t.exports,
        'useInsertionEffect',
        () => T,
        (e) => (T = e)
      ),
      e(
        t.exports,
        'useLayoutEffect',
        () => L,
        (e) => (L = e)
      ),
      e(
        t.exports,
        'useMemo',
        () => R,
        (e) => (R = e)
      ),
      e(
        t.exports,
        'useReducer',
        () => F,
        (e) => (F = e)
      ),
      e(
        t.exports,
        'useRef',
        () => j,
        (e) => (j = e)
      ),
      e(
        t.exports,
        'useState',
        () => D,
        (e) => (D = e)
      ),
      e(
        t.exports,
        'useSyncExternalStore',
        () => _,
        (e) => (_ = e)
      ),
      e(
        t.exports,
        'useTransition',
        () => N,
        (e) => (N = e)
      ),
      e(
        t.exports,
        'version',
        () => I,
        (e) => (I = e)
      )
    var B = Symbol.for('react.element'),
      z = Symbol.for('react.portal'),
      M = Symbol.for('react.fragment'),
      U = Symbol.for('react.strict_mode'),
      q = Symbol.for('react.profiler'),
      V = Symbol.for('react.provider'),
      H = Symbol.for('react.context'),
      W = Symbol.for('react.forward_ref'),
      $ = Symbol.for('react.suspense'),
      Q = Symbol.for('react.memo'),
      G = Symbol.for('react.lazy'),
      J = Symbol.iterator
    var X = {
        isMounted: function () {
          return !1
        },
        enqueueForceUpdate: function () {},
        enqueueReplaceState: function () {},
        enqueueSetState: function () {},
      },
      Y = Object.assign,
      K = {}
    function Z(e, t, n) {
      ;(this.props = e),
        (this.context = t),
        (this.refs = K),
        (this.updater = n || X)
    }
    function ee() {}
    function te(e, t, n) {
      ;(this.props = e),
        (this.context = t),
        (this.refs = K),
        (this.updater = n || X)
    }
    ;(Z.prototype.isReactComponent = {}),
      (Z.prototype.setState = function (e, t) {
        if ('object' != typeof e && 'function' != typeof e && null != e)
          throw Error(
            'setState(...): takes an object of state variables to update or a function which returns an object of state variables.'
          )
        this.updater.enqueueSetState(this, e, t, 'setState')
      }),
      (Z.prototype.forceUpdate = function (e) {
        this.updater.enqueueForceUpdate(this, e, 'forceUpdate')
      }),
      (ee.prototype = Z.prototype)
    var ne = (te.prototype = new ee())
    ;(ne.constructor = te), Y(ne, Z.prototype), (ne.isPureReactComponent = !0)
    var re = Array.isArray,
      oe = Object.prototype.hasOwnProperty,
      ie = { current: null },
      ae = { key: !0, ref: !0, __self: !0, __source: !0 }
    function le(e, t, n) {
      var r,
        o = {},
        i = null,
        a = null
      if (null != t)
        for (r in (void 0 !== t.ref && (a = t.ref),
        void 0 !== t.key && (i = '' + t.key),
        t))
          oe.call(t, r) && !ae.hasOwnProperty(r) && (o[r] = t[r])
      var l = arguments.length - 2
      if (1 === l) o.children = n
      else if (1 < l) {
        for (var u = Array(l), s = 0; s < l; s++) u[s] = arguments[s + 2]
        o.children = u
      }
      if (e && e.defaultProps)
        for (r in (l = e.defaultProps)) void 0 === o[r] && (o[r] = l[r])
      return {
        $$typeof: B,
        type: e,
        key: i,
        ref: a,
        props: o,
        _owner: ie.current,
      }
    }
    function ue(e) {
      return 'object' == typeof e && null !== e && e.$$typeof === B
    }
    var se = /\/+/g
    function ce(e, t) {
      return 'object' == typeof e && null !== e && null != e.key
        ? (function (e) {
            var t = { '=': '=0', ':': '=2' }
            return (
              '$' +
              e.replace(/[=:]/g, function (e) {
                return t[e]
              })
            )
          })('' + e.key)
        : t.toString(36)
    }
    function fe(e, t, n, r, o) {
      var i = typeof e
      ;('undefined' !== i && 'boolean' !== i) || (e = null)
      var a = !1
      if (null === e) a = !0
      else
        switch (i) {
          case 'string':
          case 'number':
            a = !0
            break
          case 'object':
            switch (e.$$typeof) {
              case B:
              case z:
                a = !0
            }
        }
      if (a)
        return (
          (o = o((a = e))),
          (e = '' === r ? '.' + ce(a, 0) : r),
          re(o)
            ? ((n = ''),
              null != e && (n = e.replace(se, '$&/') + '/'),
              fe(o, t, n, '', function (e) {
                return e
              }))
            : null != o &&
              (ue(o) &&
                (o = (function (e, t) {
                  return {
                    $$typeof: B,
                    type: e.type,
                    key: t,
                    ref: e.ref,
                    props: e.props,
                    _owner: e._owner,
                  }
                })(
                  o,
                  n +
                    (!o.key || (a && a.key === o.key)
                      ? ''
                      : ('' + o.key).replace(se, '$&/') + '/') +
                    e
                )),
              t.push(o)),
          1
        )
      if (((a = 0), (r = '' === r ? '.' : r + ':'), re(e)))
        for (var l = 0; l < e.length; l++) {
          var u = r + ce((i = e[l]), l)
          a += fe(i, t, n, u, o)
        }
      else if (
        ((u = (function (e) {
          return null === e || 'object' != typeof e
            ? null
            : 'function' == typeof (e = (J && e[J]) || e['@@iterator'])
              ? e
              : null
        })(e)),
        'function' == typeof u)
      )
        for (e = u.call(e), l = 0; !(i = e.next()).done; )
          a += fe((i = i.value), t, n, (u = r + ce(i, l++)), o)
      else if ('object' === i)
        throw (
          ((t = String(e)),
          Error(
            'Objects are not valid as a React child (found: ' +
              ('[object Object]' === t
                ? 'object with keys {' + Object.keys(e).join(', ') + '}'
                : t) +
              '). If you meant to render a collection of children, use an array instead.'
          ))
        )
      return a
    }
    function pe(e, t, n) {
      if (null == e) return e
      var r = [],
        o = 0
      return (
        fe(e, r, '', '', function (e) {
          return t.call(n, e, o++)
        }),
        r
      )
    }
    function de(e) {
      if (-1 === e._status) {
        var t = e._result
        ;(t = t()).then(
          function (t) {
            ;(0 !== e._status && -1 !== e._status) ||
              ((e._status = 1), (e._result = t))
          },
          function (t) {
            ;(0 !== e._status && -1 !== e._status) ||
              ((e._status = 2), (e._result = t))
          }
        ),
          -1 === e._status && ((e._status = 0), (e._result = t))
      }
      if (1 === e._status) return e._result.default
      throw e._result
    }
    var he = { current: null },
      ge = { transition: null }
    ;(r = {
      map: pe,
      forEach: function (e, t, n) {
        pe(
          e,
          function () {
            t.apply(this, arguments)
          },
          n
        )
      },
      count: function (e) {
        var t = 0
        return (
          pe(e, function () {
            t++
          }),
          t
        )
      },
      toArray: function (e) {
        return (
          pe(e, function (e) {
            return e
          }) || []
        )
      },
      only: function (e) {
        if (!ue(e))
          throw Error(
            'React.Children.only expected to receive a single React element child.'
          )
        return e
      },
    }),
      (o = Z),
      (i = M),
      (a = q),
      (l = te),
      (u = U),
      (s = $),
      (c = {
        ReactCurrentDispatcher: he,
        ReactCurrentBatchConfig: ge,
        ReactCurrentOwner: ie,
      }),
      (f = function (e, t, n) {
        if (null == e)
          throw Error(
            'React.cloneElement(...): The argument must be a React element, but you passed ' +
              e +
              '.'
          )
        var r = Y({}, e.props),
          o = e.key,
          i = e.ref,
          a = e._owner
        if (null != t) {
          if (
            (void 0 !== t.ref && ((i = t.ref), (a = ie.current)),
            void 0 !== t.key && (o = '' + t.key),
            e.type && e.type.defaultProps)
          )
            var l = e.type.defaultProps
          for (u in t)
            oe.call(t, u) &&
              !ae.hasOwnProperty(u) &&
              (r[u] = void 0 === t[u] && void 0 !== l ? l[u] : t[u])
        }
        var u = arguments.length - 2
        if (1 === u) r.children = n
        else if (1 < u) {
          l = Array(u)
          for (var s = 0; s < u; s++) l[s] = arguments[s + 2]
          r.children = l
        }
        return {
          $$typeof: B,
          type: e.type,
          key: o,
          ref: i,
          props: r,
          _owner: a,
        }
      }),
      (p = function (e) {
        return (
          ((e = {
            $$typeof: H,
            _currentValue: e,
            _currentValue2: e,
            _threadCount: 0,
            Provider: null,
            Consumer: null,
            _defaultValue: null,
            _globalName: null,
          }).Provider = { $$typeof: V, _context: e }),
          (e.Consumer = e)
        )
      }),
      (d = le),
      (h = function (e) {
        var t = le.bind(null, e)
        return (t.type = e), t
      }),
      (g = function () {
        return { current: null }
      }),
      (m = function (e) {
        return { $$typeof: W, render: e }
      }),
      (y = ue),
      (v = function (e) {
        return { $$typeof: G, _payload: { _status: -1, _result: e }, _init: de }
      }),
      (b = function (e, t) {
        return { $$typeof: Q, type: e, compare: void 0 === t ? null : t }
      }),
      (w = function (e) {
        var t = ge.transition
        ge.transition = {}
        try {
          e()
        } finally {
          ge.transition = t
        }
      }),
      (x = function () {
        throw Error('act(...) is not supported in production builds of React.')
      }),
      (k = function (e, t) {
        return he.current.useCallback(e, t)
      }),
      (S = function (e) {
        return he.current.useContext(e)
      }),
      (E = function () {}),
      (C = function (e) {
        return he.current.useDeferredValue(e)
      }),
      (O = function (e, t) {
        return he.current.useEffect(e, t)
      }),
      (A = function () {
        return he.current.useId()
      }),
      (P = function (e, t, n) {
        return he.current.useImperativeHandle(e, t, n)
      }),
      (T = function (e, t) {
        return he.current.useInsertionEffect(e, t)
      }),
      (L = function (e, t) {
        return he.current.useLayoutEffect(e, t)
      }),
      (R = function (e, t) {
        return he.current.useMemo(e, t)
      }),
      (F = function (e, t, n) {
        return he.current.useReducer(e, t, n)
      }),
      (j = function (e) {
        return he.current.useRef(e)
      }),
      (D = function (e) {
        return he.current.useState(e)
      }),
      (_ = function (e, t, n) {
        return he.current.useSyncExternalStore(e, t, n)
      }),
      (N = function () {
        return he.current.useTransition()
      }),
      (I = '18.2.0')
  }),
  i.register('jhxbP', function (t, n) {
    /**
     * @license React
     * react-dom.production.min.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    var r, o, a, l, u, s, c, f, p, d, h, g
    e(
      t.exports,
      '__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED',
      () => r,
      (e) => (r = e)
    ),
      e(
        t.exports,
        'createPortal',
        () => o,
        (e) => (o = e)
      ),
      e(
        t.exports,
        'createRoot',
        () => a,
        (e) => (a = e)
      ),
      e(
        t.exports,
        'findDOMNode',
        () => l,
        (e) => (l = e)
      ),
      e(
        t.exports,
        'flushSync',
        () => u,
        (e) => (u = e)
      ),
      e(
        t.exports,
        'hydrate',
        () => s,
        (e) => (s = e)
      ),
      e(
        t.exports,
        'hydrateRoot',
        () => c,
        (e) => (c = e)
      ),
      e(
        t.exports,
        'render',
        () => f,
        (e) => (f = e)
      ),
      e(
        t.exports,
        'unmountComponentAtNode',
        () => p,
        (e) => (p = e)
      ),
      e(
        t.exports,
        'unstable_batchedUpdates',
        () => d,
        (e) => (d = e)
      ),
      e(
        t.exports,
        'unstable_renderSubtreeIntoContainer',
        () => h,
        (e) => (h = e)
      ),
      e(
        t.exports,
        'version',
        () => g,
        (e) => (g = e)
      )
    var m = i('8tsvq'),
      y = i('7DCtq')
    function v(e) {
      for (
        var t = 'https://reactjs.org/docs/error-decoder.html?invariant=' + e,
          n = 1;
        n < arguments.length;
        n++
      )
        t += '&args[]=' + encodeURIComponent(arguments[n])
      return (
        'Minified React error #' +
        e +
        '; visit ' +
        t +
        ' for the full message or use the non-minified dev environment for full errors and additional helpful warnings.'
      )
    }
    var b = new Set(),
      w = {}
    function x(e, t) {
      k(e, t), k(e + 'Capture', t)
    }
    function k(e, t) {
      for (w[e] = t, e = 0; e < t.length; e++) b.add(t[e])
    }
    var S = !(
        'undefined' == typeof window ||
        void 0 === window.document ||
        void 0 === window.document.createElement
      ),
      E = Object.prototype.hasOwnProperty,
      C =
        /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
      O = {},
      A = {}
    function P(e, t, n, r, o, i, a) {
      ;(this.acceptsBooleans = 2 === t || 3 === t || 4 === t),
        (this.attributeName = r),
        (this.attributeNamespace = o),
        (this.mustUseProperty = n),
        (this.propertyName = e),
        (this.type = t),
        (this.sanitizeURL = i),
        (this.removeEmptyString = a)
    }
    var T = {}
    'children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style'
      .split(' ')
      .forEach(function (e) {
        T[e] = new P(e, 0, !1, e, null, !1, !1)
      }),
      [
        ['acceptCharset', 'accept-charset'],
        ['className', 'class'],
        ['htmlFor', 'for'],
        ['httpEquiv', 'http-equiv'],
      ].forEach(function (e) {
        var t = e[0]
        T[t] = new P(t, 1, !1, e[1], null, !1, !1)
      }),
      ['contentEditable', 'draggable', 'spellCheck', 'value'].forEach(
        function (e) {
          T[e] = new P(e, 2, !1, e.toLowerCase(), null, !1, !1)
        }
      ),
      [
        'autoReverse',
        'externalResourcesRequired',
        'focusable',
        'preserveAlpha',
      ].forEach(function (e) {
        T[e] = new P(e, 2, !1, e, null, !1, !1)
      }),
      'allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope'
        .split(' ')
        .forEach(function (e) {
          T[e] = new P(e, 3, !1, e.toLowerCase(), null, !1, !1)
        }),
      ['checked', 'multiple', 'muted', 'selected'].forEach(function (e) {
        T[e] = new P(e, 3, !0, e, null, !1, !1)
      }),
      ['capture', 'download'].forEach(function (e) {
        T[e] = new P(e, 4, !1, e, null, !1, !1)
      }),
      ['cols', 'rows', 'size', 'span'].forEach(function (e) {
        T[e] = new P(e, 6, !1, e, null, !1, !1)
      }),
      ['rowSpan', 'start'].forEach(function (e) {
        T[e] = new P(e, 5, !1, e.toLowerCase(), null, !1, !1)
      })
    var L = /[\-:]([a-z])/g
    function R(e) {
      return e[1].toUpperCase()
    }
    function F(e, t, n, r) {
      var o = T.hasOwnProperty(t) ? T[t] : null
      ;(null !== o
        ? 0 !== o.type
        : r ||
          !(2 < t.length) ||
          ('o' !== t[0] && 'O' !== t[0]) ||
          ('n' !== t[1] && 'N' !== t[1])) &&
        ((function (e, t, n, r) {
          if (
            null == t ||
            (function (e, t, n, r) {
              if (null !== n && 0 === n.type) return !1
              switch (typeof t) {
                case 'function':
                case 'symbol':
                  return !0
                case 'boolean':
                  return (
                    !r &&
                    (null !== n
                      ? !n.acceptsBooleans
                      : 'data-' !== (e = e.toLowerCase().slice(0, 5)) &&
                        'aria-' !== e)
                  )
                default:
                  return !1
              }
            })(e, t, n, r)
          )
            return !0
          if (r) return !1
          if (null !== n)
            switch (n.type) {
              case 3:
                return !t
              case 4:
                return !1 === t
              case 5:
                return isNaN(t)
              case 6:
                return isNaN(t) || 1 > t
            }
          return !1
        })(t, n, o, r) && (n = null),
        r || null === o
          ? (function (e) {
              return (
                !!E.call(A, e) ||
                (!E.call(O, e) && (C.test(e) ? (A[e] = !0) : ((O[e] = !0), !1)))
              )
            })(t) &&
            (null === n ? e.removeAttribute(t) : e.setAttribute(t, '' + n))
          : o.mustUseProperty
            ? (e[o.propertyName] = null === n ? 3 !== o.type && '' : n)
            : ((t = o.attributeName),
              (r = o.attributeNamespace),
              null === n
                ? e.removeAttribute(t)
                : ((n =
                    3 === (o = o.type) || (4 === o && !0 === n) ? '' : '' + n),
                  r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))))
    }
    'accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height'
      .split(' ')
      .forEach(function (e) {
        var t = e.replace(L, R)
        T[t] = new P(t, 1, !1, e, null, !1, !1)
      }),
      'xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type'
        .split(' ')
        .forEach(function (e) {
          var t = e.replace(L, R)
          T[t] = new P(t, 1, !1, e, 'http://www.w3.org/1999/xlink', !1, !1)
        }),
      ['xml:base', 'xml:lang', 'xml:space'].forEach(function (e) {
        var t = e.replace(L, R)
        T[t] = new P(
          t,
          1,
          !1,
          e,
          'http://www.w3.org/XML/1998/namespace',
          !1,
          !1
        )
      }),
      ['tabIndex', 'crossOrigin'].forEach(function (e) {
        T[e] = new P(e, 1, !1, e.toLowerCase(), null, !1, !1)
      }),
      (T.xlinkHref = new P(
        'xlinkHref',
        1,
        !1,
        'xlink:href',
        'http://www.w3.org/1999/xlink',
        !0,
        !1
      )),
      ['src', 'href', 'action', 'formAction'].forEach(function (e) {
        T[e] = new P(e, 1, !1, e.toLowerCase(), null, !0, !0)
      })
    var j = m.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
      D = Symbol.for('react.element'),
      _ = Symbol.for('react.portal'),
      N = Symbol.for('react.fragment'),
      I = Symbol.for('react.strict_mode'),
      B = Symbol.for('react.profiler'),
      z = Symbol.for('react.provider'),
      M = Symbol.for('react.context'),
      U = Symbol.for('react.forward_ref'),
      q = Symbol.for('react.suspense'),
      V = Symbol.for('react.suspense_list'),
      H = Symbol.for('react.memo'),
      W = Symbol.for('react.lazy')
    Symbol.for('react.scope'), Symbol.for('react.debug_trace_mode')
    var $ = Symbol.for('react.offscreen')
    Symbol.for('react.legacy_hidden'),
      Symbol.for('react.cache'),
      Symbol.for('react.tracing_marker')
    var Q = Symbol.iterator
    function G(e) {
      return null === e || 'object' != typeof e
        ? null
        : 'function' == typeof (e = (Q && e[Q]) || e['@@iterator'])
          ? e
          : null
    }
    var J,
      X = Object.assign
    function Y(e) {
      if (void 0 === J)
        try {
          throw Error()
        } catch (e) {
          var t = e.stack.trim().match(/\n( *(at )?)/)
          J = (t && t[1]) || ''
        }
      return '\n' + J + e
    }
    var K = !1
    function Z(e, t) {
      if (!e || K) return ''
      K = !0
      var n = Error.prepareStackTrace
      Error.prepareStackTrace = void 0
      try {
        if (t)
          if (
            ((t = function () {
              throw Error()
            }),
            Object.defineProperty(t.prototype, 'props', {
              set: function () {
                throw Error()
              },
            }),
            'object' == typeof Reflect && Reflect.construct)
          ) {
            try {
              Reflect.construct(t, [])
            } catch (e) {
              var r = e
            }
            Reflect.construct(e, [], t)
          } else {
            try {
              t.call()
            } catch (e) {
              r = e
            }
            e.call(t.prototype)
          }
        else {
          try {
            throw Error()
          } catch (e) {
            r = e
          }
          e()
        }
      } catch (t) {
        if (t && r && 'string' == typeof t.stack) {
          for (
            var o = t.stack.split('\n'),
              i = r.stack.split('\n'),
              a = o.length - 1,
              l = i.length - 1;
            1 <= a && 0 <= l && o[a] !== i[l];

          )
            l--
          for (; 1 <= a && 0 <= l; a--, l--)
            if (o[a] !== i[l]) {
              if (1 !== a || 1 !== l)
                do {
                  if ((a--, 0 > --l || o[a] !== i[l])) {
                    var u = '\n' + o[a].replace(' at new ', ' at ')
                    return (
                      e.displayName &&
                        u.includes('<anonymous>') &&
                        (u = u.replace('<anonymous>', e.displayName)),
                      u
                    )
                  }
                } while (1 <= a && 0 <= l)
              break
            }
        }
      } finally {
        ;(K = !1), (Error.prepareStackTrace = n)
      }
      return (e = e ? e.displayName || e.name : '') ? Y(e) : ''
    }
    function ee(e) {
      switch (e.tag) {
        case 5:
          return Y(e.type)
        case 16:
          return Y('Lazy')
        case 13:
          return Y('Suspense')
        case 19:
          return Y('SuspenseList')
        case 0:
        case 2:
        case 15:
          return (e = Z(e.type, !1))
        case 11:
          return (e = Z(e.type.render, !1))
        case 1:
          return (e = Z(e.type, !0))
        default:
          return ''
      }
    }
    function te(e) {
      if (null == e) return null
      if ('function' == typeof e) return e.displayName || e.name || null
      if ('string' == typeof e) return e
      switch (e) {
        case N:
          return 'Fragment'
        case _:
          return 'Portal'
        case B:
          return 'Profiler'
        case I:
          return 'StrictMode'
        case q:
          return 'Suspense'
        case V:
          return 'SuspenseList'
      }
      if ('object' == typeof e)
        switch (e.$$typeof) {
          case M:
            return (e.displayName || 'Context') + '.Consumer'
          case z:
            return (e._context.displayName || 'Context') + '.Provider'
          case U:
            var t = e.render
            return (
              (e = e.displayName) ||
                (e =
                  '' !== (e = t.displayName || t.name || '')
                    ? 'ForwardRef(' + e + ')'
                    : 'ForwardRef'),
              e
            )
          case H:
            return null !== (t = e.displayName || null)
              ? t
              : te(e.type) || 'Memo'
          case W:
            ;(t = e._payload), (e = e._init)
            try {
              return te(e(t))
            } catch (e) {}
        }
      return null
    }
    function ne(e) {
      var t = e.type
      switch (e.tag) {
        case 24:
          return 'Cache'
        case 9:
          return (t.displayName || 'Context') + '.Consumer'
        case 10:
          return (t._context.displayName || 'Context') + '.Provider'
        case 18:
          return 'DehydratedFragment'
        case 11:
          return (
            (e = (e = t.render).displayName || e.name || ''),
            t.displayName || ('' !== e ? 'ForwardRef(' + e + ')' : 'ForwardRef')
          )
        case 7:
          return 'Fragment'
        case 5:
          return t
        case 4:
          return 'Portal'
        case 3:
          return 'Root'
        case 6:
          return 'Text'
        case 16:
          return te(t)
        case 8:
          return t === I ? 'StrictMode' : 'Mode'
        case 22:
          return 'Offscreen'
        case 12:
          return 'Profiler'
        case 21:
          return 'Scope'
        case 13:
          return 'Suspense'
        case 19:
          return 'SuspenseList'
        case 25:
          return 'TracingMarker'
        case 1:
        case 0:
        case 17:
        case 2:
        case 14:
        case 15:
          if ('function' == typeof t) return t.displayName || t.name || null
          if ('string' == typeof t) return t
      }
      return null
    }
    function re(e) {
      switch (typeof e) {
        case 'boolean':
        case 'number':
        case 'string':
        case 'undefined':
        case 'object':
          return e
        default:
          return ''
      }
    }
    function oe(e) {
      var t = e.type
      return (
        (e = e.nodeName) &&
        'input' === e.toLowerCase() &&
        ('checkbox' === t || 'radio' === t)
      )
    }
    function ie(e) {
      e._valueTracker ||
        (e._valueTracker = (function (e) {
          var t = oe(e) ? 'checked' : 'value',
            n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
            r = '' + e[t]
          if (
            !e.hasOwnProperty(t) &&
            void 0 !== n &&
            'function' == typeof n.get &&
            'function' == typeof n.set
          ) {
            var o = n.get,
              i = n.set
            return (
              Object.defineProperty(e, t, {
                configurable: !0,
                get: function () {
                  return o.call(this)
                },
                set: function (e) {
                  ;(r = '' + e), i.call(this, e)
                },
              }),
              Object.defineProperty(e, t, { enumerable: n.enumerable }),
              {
                getValue: function () {
                  return r
                },
                setValue: function (e) {
                  r = '' + e
                },
                stopTracking: function () {
                  ;(e._valueTracker = null), delete e[t]
                },
              }
            )
          }
        })(e))
    }
    function ae(e) {
      if (!e) return !1
      var t = e._valueTracker
      if (!t) return !0
      var n = t.getValue(),
        r = ''
      return (
        e && (r = oe(e) ? (e.checked ? 'true' : 'false') : e.value),
        (e = r) !== n && (t.setValue(e), !0)
      )
    }
    function le(e) {
      if (
        void 0 ===
        (e = e || ('undefined' != typeof document ? document : void 0))
      )
        return null
      try {
        return e.activeElement || e.body
      } catch (t) {
        return e.body
      }
    }
    function ue(e, t) {
      var n = t.checked
      return X({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: null != n ? n : e._wrapperState.initialChecked,
      })
    }
    function se(e, t) {
      var n = null == t.defaultValue ? '' : t.defaultValue,
        r = null != t.checked ? t.checked : t.defaultChecked
      ;(n = re(null != t.value ? t.value : n)),
        (e._wrapperState = {
          initialChecked: r,
          initialValue: n,
          controlled:
            'checkbox' === t.type || 'radio' === t.type
              ? null != t.checked
              : null != t.value,
        })
    }
    function ce(e, t) {
      null != (t = t.checked) && F(e, 'checked', t, !1)
    }
    function fe(e, t) {
      ce(e, t)
      var n = re(t.value),
        r = t.type
      if (null != n)
        'number' === r
          ? ((0 === n && '' === e.value) || e.value != n) && (e.value = '' + n)
          : e.value !== '' + n && (e.value = '' + n)
      else if ('submit' === r || 'reset' === r)
        return void e.removeAttribute('value')
      t.hasOwnProperty('value')
        ? de(e, t.type, n)
        : t.hasOwnProperty('defaultValue') && de(e, t.type, re(t.defaultValue)),
        null == t.checked &&
          null != t.defaultChecked &&
          (e.defaultChecked = !!t.defaultChecked)
    }
    function pe(e, t, n) {
      if (t.hasOwnProperty('value') || t.hasOwnProperty('defaultValue')) {
        var r = t.type
        if (
          !(
            ('submit' !== r && 'reset' !== r) ||
            (void 0 !== t.value && null !== t.value)
          )
        )
          return
        ;(t = '' + e._wrapperState.initialValue),
          n || t === e.value || (e.value = t),
          (e.defaultValue = t)
      }
      '' !== (n = e.name) && (e.name = ''),
        (e.defaultChecked = !!e._wrapperState.initialChecked),
        '' !== n && (e.name = n)
    }
    function de(e, t, n) {
      ;('number' === t && le(e.ownerDocument) === e) ||
        (null == n
          ? (e.defaultValue = '' + e._wrapperState.initialValue)
          : e.defaultValue !== '' + n && (e.defaultValue = '' + n))
    }
    var he = Array.isArray
    function ge(e, t, n, r) {
      if (((e = e.options), t)) {
        t = {}
        for (var o = 0; o < n.length; o++) t['$' + n[o]] = !0
        for (n = 0; n < e.length; n++)
          (o = t.hasOwnProperty('$' + e[n].value)),
            e[n].selected !== o && (e[n].selected = o),
            o && r && (e[n].defaultSelected = !0)
      } else {
        for (n = '' + re(n), t = null, o = 0; o < e.length; o++) {
          if (e[o].value === n)
            return (e[o].selected = !0), void (r && (e[o].defaultSelected = !0))
          null !== t || e[o].disabled || (t = e[o])
        }
        null !== t && (t.selected = !0)
      }
    }
    function me(e, t) {
      if (null != t.dangerouslySetInnerHTML) throw Error(v(91))
      return X({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: '' + e._wrapperState.initialValue,
      })
    }
    function ye(e, t) {
      var n = t.value
      if (null == n) {
        if (((n = t.children), (t = t.defaultValue), null != n)) {
          if (null != t) throw Error(v(92))
          if (he(n)) {
            if (1 < n.length) throw Error(v(93))
            n = n[0]
          }
          t = n
        }
        null == t && (t = ''), (n = t)
      }
      e._wrapperState = { initialValue: re(n) }
    }
    function ve(e, t) {
      var n = re(t.value),
        r = re(t.defaultValue)
      null != n &&
        ((n = '' + n) !== e.value && (e.value = n),
        null == t.defaultValue && e.defaultValue !== n && (e.defaultValue = n)),
        null != r && (e.defaultValue = '' + r)
    }
    function be(e) {
      var t = e.textContent
      t === e._wrapperState.initialValue &&
        '' !== t &&
        null !== t &&
        (e.value = t)
    }
    function we(e) {
      switch (e) {
        case 'svg':
          return 'http://www.w3.org/2000/svg'
        case 'math':
          return 'http://www.w3.org/1998/Math/MathML'
        default:
          return 'http://www.w3.org/1999/xhtml'
      }
    }
    function xe(e, t) {
      return null == e || 'http://www.w3.org/1999/xhtml' === e
        ? we(t)
        : 'http://www.w3.org/2000/svg' === e && 'foreignObject' === t
          ? 'http://www.w3.org/1999/xhtml'
          : e
    }
    var ke,
      Se,
      Ee =
        ((Se = function (e, t) {
          if (
            'http://www.w3.org/2000/svg' !== e.namespaceURI ||
            'innerHTML' in e
          )
            e.innerHTML = t
          else {
            for (
              (ke = ke || document.createElement('div')).innerHTML =
                '<svg>' + t.valueOf().toString() + '</svg>',
                t = ke.firstChild;
              e.firstChild;

            )
              e.removeChild(e.firstChild)
            for (; t.firstChild; ) e.appendChild(t.firstChild)
          }
        }),
        'undefined' != typeof MSApp && MSApp.execUnsafeLocalFunction
          ? function (e, t, n, r) {
              MSApp.execUnsafeLocalFunction(function () {
                return Se(e, t)
              })
            }
          : Se)
    function Ce(e, t) {
      if (t) {
        var n = e.firstChild
        if (n && n === e.lastChild && 3 === n.nodeType)
          return void (n.nodeValue = t)
      }
      e.textContent = t
    }
    var Oe = {
        animationIterationCount: !0,
        aspectRatio: !0,
        borderImageOutset: !0,
        borderImageSlice: !0,
        borderImageWidth: !0,
        boxFlex: !0,
        boxFlexGroup: !0,
        boxOrdinalGroup: !0,
        columnCount: !0,
        columns: !0,
        flex: !0,
        flexGrow: !0,
        flexPositive: !0,
        flexShrink: !0,
        flexNegative: !0,
        flexOrder: !0,
        gridArea: !0,
        gridRow: !0,
        gridRowEnd: !0,
        gridRowSpan: !0,
        gridRowStart: !0,
        gridColumn: !0,
        gridColumnEnd: !0,
        gridColumnSpan: !0,
        gridColumnStart: !0,
        fontWeight: !0,
        lineClamp: !0,
        lineHeight: !0,
        opacity: !0,
        order: !0,
        orphans: !0,
        tabSize: !0,
        widows: !0,
        zIndex: !0,
        zoom: !0,
        fillOpacity: !0,
        floodOpacity: !0,
        stopOpacity: !0,
        strokeDasharray: !0,
        strokeDashoffset: !0,
        strokeMiterlimit: !0,
        strokeOpacity: !0,
        strokeWidth: !0,
      },
      Ae = ['Webkit', 'ms', 'Moz', 'O']
    function Pe(e, t, n) {
      return null == t || 'boolean' == typeof t || '' === t
        ? ''
        : n ||
            'number' != typeof t ||
            0 === t ||
            (Oe.hasOwnProperty(e) && Oe[e])
          ? ('' + t).trim()
          : t + 'px'
    }
    function Te(e, t) {
      for (var n in ((e = e.style), t))
        if (t.hasOwnProperty(n)) {
          var r = 0 === n.indexOf('--'),
            o = Pe(n, t[n], r)
          'float' === n && (n = 'cssFloat'),
            r ? e.setProperty(n, o) : (e[n] = o)
        }
    }
    Object.keys(Oe).forEach(function (e) {
      Ae.forEach(function (t) {
        ;(t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Oe[t] = Oe[e])
      })
    })
    var Le = X(
      { menuitem: !0 },
      {
        area: !0,
        base: !0,
        br: !0,
        col: !0,
        embed: !0,
        hr: !0,
        img: !0,
        input: !0,
        keygen: !0,
        link: !0,
        meta: !0,
        param: !0,
        source: !0,
        track: !0,
        wbr: !0,
      }
    )
    function Re(e, t) {
      if (t) {
        if (Le[e] && (null != t.children || null != t.dangerouslySetInnerHTML))
          throw Error(v(137, e))
        if (null != t.dangerouslySetInnerHTML) {
          if (null != t.children) throw Error(v(60))
          if (
            'object' != typeof t.dangerouslySetInnerHTML ||
            !('__html' in t.dangerouslySetInnerHTML)
          )
            throw Error(v(61))
        }
        if (null != t.style && 'object' != typeof t.style) throw Error(v(62))
      }
    }
    function Fe(e, t) {
      if (-1 === e.indexOf('-')) return 'string' == typeof t.is
      switch (e) {
        case 'annotation-xml':
        case 'color-profile':
        case 'font-face':
        case 'font-face-src':
        case 'font-face-uri':
        case 'font-face-format':
        case 'font-face-name':
        case 'missing-glyph':
          return !1
        default:
          return !0
      }
    }
    var je = null
    function De(e) {
      return (
        (e = e.target || e.srcElement || window).correspondingUseElement &&
          (e = e.correspondingUseElement),
        3 === e.nodeType ? e.parentNode : e
      )
    }
    var _e = null,
      Ne = null,
      Ie = null
    function Be(e) {
      if ((e = jo(e))) {
        if ('function' != typeof _e) throw Error(v(280))
        var t = e.stateNode
        t && ((t = _o(t)), _e(e.stateNode, e.type, t))
      }
    }
    function ze(e) {
      Ne ? (Ie ? Ie.push(e) : (Ie = [e])) : (Ne = e)
    }
    function Me() {
      if (Ne) {
        var e = Ne,
          t = Ie
        if (((Ie = Ne = null), Be(e), t))
          for (e = 0; e < t.length; e++) Be(t[e])
      }
    }
    function Ue(e, t) {
      return e(t)
    }
    function qe() {}
    var Ve = !1
    function He(e, t, n) {
      if (Ve) return e(t, n)
      Ve = !0
      try {
        return Ue(e, t, n)
      } finally {
        ;(Ve = !1), (null !== Ne || null !== Ie) && (qe(), Me())
      }
    }
    function We(e, t) {
      var n = e.stateNode
      if (null === n) return null
      var r = _o(n)
      if (null === r) return null
      n = r[t]
      e: switch (t) {
        case 'onClick':
        case 'onClickCapture':
        case 'onDoubleClick':
        case 'onDoubleClickCapture':
        case 'onMouseDown':
        case 'onMouseDownCapture':
        case 'onMouseMove':
        case 'onMouseMoveCapture':
        case 'onMouseUp':
        case 'onMouseUpCapture':
        case 'onMouseEnter':
          ;(r = !r.disabled) ||
            (r = !(
              'button' === (e = e.type) ||
              'input' === e ||
              'select' === e ||
              'textarea' === e
            )),
            (e = !r)
          break e
        default:
          e = !1
      }
      if (e) return null
      if (n && 'function' != typeof n) throw Error(v(231, t, typeof n))
      return n
    }
    var $e = !1
    if (S)
      try {
        var Qe = {}
        Object.defineProperty(Qe, 'passive', {
          get: function () {
            $e = !0
          },
        }),
          window.addEventListener('test', Qe, Qe),
          window.removeEventListener('test', Qe, Qe)
      } catch (Se) {
        $e = !1
      }
    function Ge(e, t, n, r, o, i, a, l, u) {
      var s = Array.prototype.slice.call(arguments, 3)
      try {
        t.apply(n, s)
      } catch (e) {
        this.onError(e)
      }
    }
    var Je = !1,
      Xe = null,
      Ye = !1,
      Ke = null,
      Ze = {
        onError: function (e) {
          ;(Je = !0), (Xe = e)
        },
      }
    function et(e, t, n, r, o, i, a, l, u) {
      ;(Je = !1), (Xe = null), Ge.apply(Ze, arguments)
    }
    function tt(e) {
      var t = e,
        n = e
      if (e.alternate) for (; t.return; ) t = t.return
      else {
        e = t
        do {
          0 != (4098 & (t = e).flags) && (n = t.return), (e = t.return)
        } while (e)
      }
      return 3 === t.tag ? n : null
    }
    function nt(e) {
      if (13 === e.tag) {
        var t = e.memoizedState
        if (
          (null === t && null !== (e = e.alternate) && (t = e.memoizedState),
          null !== t)
        )
          return t.dehydrated
      }
      return null
    }
    function rt(e) {
      if (tt(e) !== e) throw Error(v(188))
    }
    function ot(e) {
      return null !==
        (e = (function (e) {
          var t = e.alternate
          if (!t) {
            if (null === (t = tt(e))) throw Error(v(188))
            return t !== e ? null : e
          }
          for (var n = e, r = t; ; ) {
            var o = n.return
            if (null === o) break
            var i = o.alternate
            if (null === i) {
              if (null !== (r = o.return)) {
                n = r
                continue
              }
              break
            }
            if (o.child === i.child) {
              for (i = o.child; i; ) {
                if (i === n) return rt(o), e
                if (i === r) return rt(o), t
                i = i.sibling
              }
              throw Error(v(188))
            }
            if (n.return !== r.return) (n = o), (r = i)
            else {
              for (var a = !1, l = o.child; l; ) {
                if (l === n) {
                  ;(a = !0), (n = o), (r = i)
                  break
                }
                if (l === r) {
                  ;(a = !0), (r = o), (n = i)
                  break
                }
                l = l.sibling
              }
              if (!a) {
                for (l = i.child; l; ) {
                  if (l === n) {
                    ;(a = !0), (n = i), (r = o)
                    break
                  }
                  if (l === r) {
                    ;(a = !0), (r = i), (n = o)
                    break
                  }
                  l = l.sibling
                }
                if (!a) throw Error(v(189))
              }
            }
            if (n.alternate !== r) throw Error(v(190))
          }
          if (3 !== n.tag) throw Error(v(188))
          return n.stateNode.current === n ? e : t
        })(e))
        ? it(e)
        : null
    }
    function it(e) {
      if (5 === e.tag || 6 === e.tag) return e
      for (e = e.child; null !== e; ) {
        var t = it(e)
        if (null !== t) return t
        e = e.sibling
      }
      return null
    }
    var at = y.unstable_scheduleCallback,
      lt = y.unstable_cancelCallback,
      ut = y.unstable_shouldYield,
      st = y.unstable_requestPaint,
      ct = y.unstable_now,
      ft = y.unstable_getCurrentPriorityLevel,
      pt = y.unstable_ImmediatePriority,
      dt = y.unstable_UserBlockingPriority,
      ht = y.unstable_NormalPriority,
      gt = y.unstable_LowPriority,
      mt = y.unstable_IdlePriority,
      yt = null,
      vt = null
    var bt = Math.clz32
        ? Math.clz32
        : function (e) {
            return (e >>>= 0), 0 === e ? 32 : (31 - ((wt(e) / xt) | 0)) | 0
          },
      wt = Math.log,
      xt = Math.LN2
    var kt = 64,
      St = 4194304
    function Et(e) {
      switch (e & -e) {
        case 1:
          return 1
        case 2:
          return 2
        case 4:
          return 4
        case 8:
          return 8
        case 16:
          return 16
        case 32:
          return 32
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return 4194240 & e
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          return 130023424 & e
        case 134217728:
          return 134217728
        case 268435456:
          return 268435456
        case 536870912:
          return 536870912
        case 1073741824:
          return 1073741824
        default:
          return e
      }
    }
    function Ct(e, t) {
      var n = e.pendingLanes
      if (0 === n) return 0
      var r = 0,
        o = e.suspendedLanes,
        i = e.pingedLanes,
        a = 268435455 & n
      if (0 !== a) {
        var l = a & ~o
        0 !== l ? (r = Et(l)) : 0 !== (i &= a) && (r = Et(i))
      } else 0 !== (a = n & ~o) ? (r = Et(a)) : 0 !== i && (r = Et(i))
      if (0 === r) return 0
      if (
        0 !== t &&
        t !== r &&
        0 == (t & o) &&
        ((o = r & -r) >= (i = t & -t) || (16 === o && 0 != (4194240 & i)))
      )
        return t
      if ((0 != (4 & r) && (r |= 16 & n), 0 !== (t = e.entangledLanes)))
        for (e = e.entanglements, t &= r; 0 < t; )
          (o = 1 << (n = 31 - bt(t))), (r |= e[n]), (t &= ~o)
      return r
    }
    function Ot(e, t) {
      switch (e) {
        case 1:
        case 2:
        case 4:
          return t + 250
        case 8:
        case 16:
        case 32:
        case 64:
        case 128:
        case 256:
        case 512:
        case 1024:
        case 2048:
        case 4096:
        case 8192:
        case 16384:
        case 32768:
        case 65536:
        case 131072:
        case 262144:
        case 524288:
        case 1048576:
        case 2097152:
          return t + 5e3
        default:
          return -1
      }
    }
    function At(e) {
      return 0 !== (e = -1073741825 & e.pendingLanes)
        ? e
        : 1073741824 & e
          ? 1073741824
          : 0
    }
    function Pt() {
      var e = kt
      return 0 == (4194240 & (kt <<= 1)) && (kt = 64), e
    }
    function Tt(e) {
      for (var t = [], n = 0; 31 > n; n++) t.push(e)
      return t
    }
    function Lt(e, t, n) {
      ;(e.pendingLanes |= t),
        536870912 !== t && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
        ((e = e.eventTimes)[(t = 31 - bt(t))] = n)
    }
    function Rt(e, t) {
      var n = (e.entangledLanes |= t)
      for (e = e.entanglements; n; ) {
        var r = 31 - bt(n),
          o = 1 << r
        ;(o & t) | (e[r] & t) && (e[r] |= t), (n &= ~o)
      }
    }
    var Ft = 0
    function jt(e) {
      return 1 < (e &= -e)
        ? 4 < e
          ? 0 != (268435455 & e)
            ? 16
            : 536870912
          : 4
        : 1
    }
    var Dt,
      _t,
      Nt,
      It,
      Bt,
      zt = !1,
      Mt = [],
      Ut = null,
      qt = null,
      Vt = null,
      Ht = new Map(),
      Wt = new Map(),
      $t = [],
      Qt =
        'mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit'.split(
          ' '
        )
    function Gt(e, t) {
      switch (e) {
        case 'focusin':
        case 'focusout':
          Ut = null
          break
        case 'dragenter':
        case 'dragleave':
          qt = null
          break
        case 'mouseover':
        case 'mouseout':
          Vt = null
          break
        case 'pointerover':
        case 'pointerout':
          Ht.delete(t.pointerId)
          break
        case 'gotpointercapture':
        case 'lostpointercapture':
          Wt.delete(t.pointerId)
      }
    }
    function Jt(e, t, n, r, o, i) {
      return null === e || e.nativeEvent !== i
        ? ((e = {
            blockedOn: t,
            domEventName: n,
            eventSystemFlags: r,
            nativeEvent: i,
            targetContainers: [o],
          }),
          null !== t && null !== (t = jo(t)) && _t(t),
          e)
        : ((e.eventSystemFlags |= r),
          (t = e.targetContainers),
          null !== o && -1 === t.indexOf(o) && t.push(o),
          e)
    }
    function Xt(e) {
      var t = Fo(e.target)
      if (null !== t) {
        var n = tt(t)
        if (null !== n)
          if (13 === (t = n.tag)) {
            if (null !== (t = nt(n)))
              return (
                (e.blockedOn = t),
                void Bt(e.priority, function () {
                  Nt(n)
                })
              )
          } else if (3 === t && n.stateNode.current.memoizedState.isDehydrated)
            return void (e.blockedOn =
              3 === n.tag ? n.stateNode.containerInfo : null)
      }
      e.blockedOn = null
    }
    function Yt(e) {
      if (null !== e.blockedOn) return !1
      for (var t = e.targetContainers; 0 < t.length; ) {
        var n = sn(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent)
        if (null !== n)
          return null !== (t = jo(n)) && _t(t), (e.blockedOn = n), !1
        var r = new (n = e.nativeEvent).constructor(n.type, n)
        ;(je = r), n.target.dispatchEvent(r), (je = null), t.shift()
      }
      return !0
    }
    function Kt(e, t, n) {
      Yt(e) && n.delete(t)
    }
    function Zt() {
      ;(zt = !1),
        null !== Ut && Yt(Ut) && (Ut = null),
        null !== qt && Yt(qt) && (qt = null),
        null !== Vt && Yt(Vt) && (Vt = null),
        Ht.forEach(Kt),
        Wt.forEach(Kt)
    }
    function en(e, t) {
      e.blockedOn === t &&
        ((e.blockedOn = null),
        zt ||
          ((zt = !0),
          y.unstable_scheduleCallback(y.unstable_NormalPriority, Zt)))
    }
    function tn(e) {
      function t(t) {
        return en(t, e)
      }
      if (0 < Mt.length) {
        en(Mt[0], e)
        for (var n = 1; n < Mt.length; n++) {
          var r = Mt[n]
          r.blockedOn === e && (r.blockedOn = null)
        }
      }
      for (
        null !== Ut && en(Ut, e),
          null !== qt && en(qt, e),
          null !== Vt && en(Vt, e),
          Ht.forEach(t),
          Wt.forEach(t),
          n = 0;
        n < $t.length;
        n++
      )
        (r = $t[n]).blockedOn === e && (r.blockedOn = null)
      for (; 0 < $t.length && null === (n = $t[0]).blockedOn; )
        Xt(n), null === n.blockedOn && $t.shift()
    }
    var nn = j.ReactCurrentBatchConfig,
      rn = !0
    function on(e, t, n, r) {
      var o = Ft,
        i = nn.transition
      nn.transition = null
      try {
        ;(Ft = 1), ln(e, t, n, r)
      } finally {
        ;(Ft = o), (nn.transition = i)
      }
    }
    function an(e, t, n, r) {
      var o = Ft,
        i = nn.transition
      nn.transition = null
      try {
        ;(Ft = 4), ln(e, t, n, r)
      } finally {
        ;(Ft = o), (nn.transition = i)
      }
    }
    function ln(e, t, n, r) {
      if (rn) {
        var o = sn(e, t, n, r)
        if (null === o) ro(e, t, r, un, n), Gt(e, r)
        else if (
          (function (e, t, n, r, o) {
            switch (t) {
              case 'focusin':
                return (Ut = Jt(Ut, e, t, n, r, o)), !0
              case 'dragenter':
                return (qt = Jt(qt, e, t, n, r, o)), !0
              case 'mouseover':
                return (Vt = Jt(Vt, e, t, n, r, o)), !0
              case 'pointerover':
                var i = o.pointerId
                return Ht.set(i, Jt(Ht.get(i) || null, e, t, n, r, o)), !0
              case 'gotpointercapture':
                return (
                  (i = o.pointerId),
                  Wt.set(i, Jt(Wt.get(i) || null, e, t, n, r, o)),
                  !0
                )
            }
            return !1
          })(o, e, t, n, r)
        )
          r.stopPropagation()
        else if ((Gt(e, r), 4 & t && -1 < Qt.indexOf(e))) {
          for (; null !== o; ) {
            var i = jo(o)
            if (
              (null !== i && Dt(i),
              null === (i = sn(e, t, n, r)) && ro(e, t, r, un, n),
              i === o)
            )
              break
            o = i
          }
          null !== o && r.stopPropagation()
        } else ro(e, t, r, null, n)
      }
    }
    var un = null
    function sn(e, t, n, r) {
      if (((un = null), null !== (e = Fo((e = De(r))))))
        if (null === (t = tt(e))) e = null
        else if (13 === (n = t.tag)) {
          if (null !== (e = nt(t))) return e
          e = null
        } else if (3 === n) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return 3 === t.tag ? t.stateNode.containerInfo : null
          e = null
        } else t !== e && (e = null)
      return (un = e), null
    }
    function cn(e) {
      switch (e) {
        case 'cancel':
        case 'click':
        case 'close':
        case 'contextmenu':
        case 'copy':
        case 'cut':
        case 'auxclick':
        case 'dblclick':
        case 'dragend':
        case 'dragstart':
        case 'drop':
        case 'focusin':
        case 'focusout':
        case 'input':
        case 'invalid':
        case 'keydown':
        case 'keypress':
        case 'keyup':
        case 'mousedown':
        case 'mouseup':
        case 'paste':
        case 'pause':
        case 'play':
        case 'pointercancel':
        case 'pointerdown':
        case 'pointerup':
        case 'ratechange':
        case 'reset':
        case 'resize':
        case 'seeked':
        case 'submit':
        case 'touchcancel':
        case 'touchend':
        case 'touchstart':
        case 'volumechange':
        case 'change':
        case 'selectionchange':
        case 'textInput':
        case 'compositionstart':
        case 'compositionend':
        case 'compositionupdate':
        case 'beforeblur':
        case 'afterblur':
        case 'beforeinput':
        case 'blur':
        case 'fullscreenchange':
        case 'focus':
        case 'hashchange':
        case 'popstate':
        case 'select':
        case 'selectstart':
          return 1
        case 'drag':
        case 'dragenter':
        case 'dragexit':
        case 'dragleave':
        case 'dragover':
        case 'mousemove':
        case 'mouseout':
        case 'mouseover':
        case 'pointermove':
        case 'pointerout':
        case 'pointerover':
        case 'scroll':
        case 'toggle':
        case 'touchmove':
        case 'wheel':
        case 'mouseenter':
        case 'mouseleave':
        case 'pointerenter':
        case 'pointerleave':
          return 4
        case 'message':
          switch (ft()) {
            case pt:
              return 1
            case dt:
              return 4
            case ht:
            case gt:
              return 16
            case mt:
              return 536870912
            default:
              return 16
          }
        default:
          return 16
      }
    }
    var fn = null,
      pn = null,
      dn = null
    function hn() {
      if (dn) return dn
      var e,
        t,
        n = pn,
        r = n.length,
        o = 'value' in fn ? fn.value : fn.textContent,
        i = o.length
      for (e = 0; e < r && n[e] === o[e]; e++);
      var a = r - e
      for (t = 1; t <= a && n[r - t] === o[i - t]; t++);
      return (dn = o.slice(e, 1 < t ? 1 - t : void 0))
    }
    function gn(e) {
      var t = e.keyCode
      return (
        'charCode' in e
          ? 0 === (e = e.charCode) && 13 === t && (e = 13)
          : (e = t),
        10 === e && (e = 13),
        32 <= e || 13 === e ? e : 0
      )
    }
    function mn() {
      return !0
    }
    function yn() {
      return !1
    }
    function vn(e) {
      function t(t, n, r, o, i) {
        for (var a in ((this._reactName = t),
        (this._targetInst = r),
        (this.type = n),
        (this.nativeEvent = o),
        (this.target = i),
        (this.currentTarget = null),
        e))
          e.hasOwnProperty(a) && ((t = e[a]), (this[a] = t ? t(o) : o[a]))
        return (
          (this.isDefaultPrevented = (
            null != o.defaultPrevented
              ? o.defaultPrevented
              : !1 === o.returnValue
          )
            ? mn
            : yn),
          (this.isPropagationStopped = yn),
          this
        )
      }
      return (
        X(t.prototype, {
          preventDefault: function () {
            this.defaultPrevented = !0
            var e = this.nativeEvent
            e &&
              (e.preventDefault
                ? e.preventDefault()
                : 'unknown' != typeof e.returnValue && (e.returnValue = !1),
              (this.isDefaultPrevented = mn))
          },
          stopPropagation: function () {
            var e = this.nativeEvent
            e &&
              (e.stopPropagation
                ? e.stopPropagation()
                : 'unknown' != typeof e.cancelBubble && (e.cancelBubble = !0),
              (this.isPropagationStopped = mn))
          },
          persist: function () {},
          isPersistent: mn,
        }),
        t
      )
    }
    var bn,
      wn,
      xn,
      kn = {
        eventPhase: 0,
        bubbles: 0,
        cancelable: 0,
        timeStamp: function (e) {
          return e.timeStamp || Date.now()
        },
        defaultPrevented: 0,
        isTrusted: 0,
      },
      Sn = vn(kn),
      En = X({}, kn, { view: 0, detail: 0 }),
      Cn = vn(En),
      On = X({}, En, {
        screenX: 0,
        screenY: 0,
        clientX: 0,
        clientY: 0,
        pageX: 0,
        pageY: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        getModifierState: Bn,
        button: 0,
        buttons: 0,
        relatedTarget: function (e) {
          return void 0 === e.relatedTarget
            ? e.fromElement === e.srcElement
              ? e.toElement
              : e.fromElement
            : e.relatedTarget
        },
        movementX: function (e) {
          return 'movementX' in e
            ? e.movementX
            : (e !== xn &&
                (xn && 'mousemove' === e.type
                  ? ((bn = e.screenX - xn.screenX),
                    (wn = e.screenY - xn.screenY))
                  : (wn = bn = 0),
                (xn = e)),
              bn)
        },
        movementY: function (e) {
          return 'movementY' in e ? e.movementY : wn
        },
      }),
      An = vn(On),
      Pn = vn(X({}, On, { dataTransfer: 0 })),
      Tn = vn(X({}, En, { relatedTarget: 0 })),
      Ln = vn(
        X({}, kn, { animationName: 0, elapsedTime: 0, pseudoElement: 0 })
      ),
      Rn = X({}, kn, {
        clipboardData: function (e) {
          return 'clipboardData' in e ? e.clipboardData : window.clipboardData
        },
      }),
      Fn = vn(Rn),
      jn = vn(X({}, kn, { data: 0 })),
      Dn = {
        Esc: 'Escape',
        Spacebar: ' ',
        Left: 'ArrowLeft',
        Up: 'ArrowUp',
        Right: 'ArrowRight',
        Down: 'ArrowDown',
        Del: 'Delete',
        Win: 'OS',
        Menu: 'ContextMenu',
        Apps: 'ContextMenu',
        Scroll: 'ScrollLock',
        MozPrintableKey: 'Unidentified',
      },
      _n = {
        8: 'Backspace',
        9: 'Tab',
        12: 'Clear',
        13: 'Enter',
        16: 'Shift',
        17: 'Control',
        18: 'Alt',
        19: 'Pause',
        20: 'CapsLock',
        27: 'Escape',
        32: ' ',
        33: 'PageUp',
        34: 'PageDown',
        35: 'End',
        36: 'Home',
        37: 'ArrowLeft',
        38: 'ArrowUp',
        39: 'ArrowRight',
        40: 'ArrowDown',
        45: 'Insert',
        46: 'Delete',
        112: 'F1',
        113: 'F2',
        114: 'F3',
        115: 'F4',
        116: 'F5',
        117: 'F6',
        118: 'F7',
        119: 'F8',
        120: 'F9',
        121: 'F10',
        122: 'F11',
        123: 'F12',
        144: 'NumLock',
        145: 'ScrollLock',
        224: 'Meta',
      },
      Nn = {
        Alt: 'altKey',
        Control: 'ctrlKey',
        Meta: 'metaKey',
        Shift: 'shiftKey',
      }
    function In(e) {
      var t = this.nativeEvent
      return t.getModifierState
        ? t.getModifierState(e)
        : !!(e = Nn[e]) && !!t[e]
    }
    function Bn() {
      return In
    }
    var zn = X({}, En, {
        key: function (e) {
          if (e.key) {
            var t = Dn[e.key] || e.key
            if ('Unidentified' !== t) return t
          }
          return 'keypress' === e.type
            ? 13 === (e = gn(e))
              ? 'Enter'
              : String.fromCharCode(e)
            : 'keydown' === e.type || 'keyup' === e.type
              ? _n[e.keyCode] || 'Unidentified'
              : ''
        },
        code: 0,
        location: 0,
        ctrlKey: 0,
        shiftKey: 0,
        altKey: 0,
        metaKey: 0,
        repeat: 0,
        locale: 0,
        getModifierState: Bn,
        charCode: function (e) {
          return 'keypress' === e.type ? gn(e) : 0
        },
        keyCode: function (e) {
          return 'keydown' === e.type || 'keyup' === e.type ? e.keyCode : 0
        },
        which: function (e) {
          return 'keypress' === e.type
            ? gn(e)
            : 'keydown' === e.type || 'keyup' === e.type
              ? e.keyCode
              : 0
        },
      }),
      Mn = vn(zn),
      Un = vn(
        X({}, On, {
          pointerId: 0,
          width: 0,
          height: 0,
          pressure: 0,
          tangentialPressure: 0,
          tiltX: 0,
          tiltY: 0,
          twist: 0,
          pointerType: 0,
          isPrimary: 0,
        })
      ),
      qn = vn(
        X({}, En, {
          touches: 0,
          targetTouches: 0,
          changedTouches: 0,
          altKey: 0,
          metaKey: 0,
          ctrlKey: 0,
          shiftKey: 0,
          getModifierState: Bn,
        })
      ),
      Vn = vn(X({}, kn, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 })),
      Hn = X({}, On, {
        deltaX: function (e) {
          return 'deltaX' in e
            ? e.deltaX
            : 'wheelDeltaX' in e
              ? -e.wheelDeltaX
              : 0
        },
        deltaY: function (e) {
          return 'deltaY' in e
            ? e.deltaY
            : 'wheelDeltaY' in e
              ? -e.wheelDeltaY
              : 'wheelDelta' in e
                ? -e.wheelDelta
                : 0
        },
        deltaZ: 0,
        deltaMode: 0,
      }),
      Wn = vn(Hn),
      $n = [9, 13, 27, 32],
      Qn = S && 'CompositionEvent' in window,
      Gn = null
    S && 'documentMode' in document && (Gn = document.documentMode)
    var Jn = S && 'TextEvent' in window && !Gn,
      Xn = S && (!Qn || (Gn && 8 < Gn && 11 >= Gn)),
      Yn = String.fromCharCode(32),
      Kn = !1
    function Zn(e, t) {
      switch (e) {
        case 'keyup':
          return -1 !== $n.indexOf(t.keyCode)
        case 'keydown':
          return 229 !== t.keyCode
        case 'keypress':
        case 'mousedown':
        case 'focusout':
          return !0
        default:
          return !1
      }
    }
    function er(e) {
      return 'object' == typeof (e = e.detail) && 'data' in e ? e.data : null
    }
    var tr = !1
    var nr = {
      color: !0,
      date: !0,
      datetime: !0,
      'datetime-local': !0,
      email: !0,
      month: !0,
      number: !0,
      password: !0,
      range: !0,
      search: !0,
      tel: !0,
      text: !0,
      time: !0,
      url: !0,
      week: !0,
    }
    function rr(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase()
      return 'input' === t ? !!nr[e.type] : 'textarea' === t
    }
    function or(e, t, n, r) {
      ze(r),
        0 < (t = io(t, 'onChange')).length &&
          ((n = new Sn('onChange', 'change', null, n, r)),
          e.push({ event: n, listeners: t }))
    }
    var ir = null,
      ar = null
    function lr(e) {
      Yr(e, 0)
    }
    function ur(e) {
      if (ae(Do(e))) return e
    }
    function sr(e, t) {
      if ('change' === e) return t
    }
    var cr = !1
    if (S) {
      var fr
      if (S) {
        var pr = 'oninput' in document
        if (!pr) {
          var dr = document.createElement('div')
          dr.setAttribute('oninput', 'return;'),
            (pr = 'function' == typeof dr.oninput)
        }
        fr = pr
      } else fr = !1
      cr = fr && (!document.documentMode || 9 < document.documentMode)
    }
    function hr() {
      ir && (ir.detachEvent('onpropertychange', gr), (ar = ir = null))
    }
    function gr(e) {
      if ('value' === e.propertyName && ur(ar)) {
        var t = []
        or(t, ar, e, De(e)), He(lr, t)
      }
    }
    function mr(e, t, n) {
      'focusin' === e
        ? (hr(), (ar = n), (ir = t).attachEvent('onpropertychange', gr))
        : 'focusout' === e && hr()
    }
    function yr(e) {
      if ('selectionchange' === e || 'keyup' === e || 'keydown' === e)
        return ur(ar)
    }
    function vr(e, t) {
      if ('click' === e) return ur(t)
    }
    function br(e, t) {
      if ('input' === e || 'change' === e) return ur(t)
    }
    var wr =
      'function' == typeof Object.is
        ? Object.is
        : function (e, t) {
            return (
              (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t)
            )
          }
    function xr(e, t) {
      if (wr(e, t)) return !0
      if (
        'object' != typeof e ||
        null === e ||
        'object' != typeof t ||
        null === t
      )
        return !1
      var n = Object.keys(e),
        r = Object.keys(t)
      if (n.length !== r.length) return !1
      for (r = 0; r < n.length; r++) {
        var o = n[r]
        if (!E.call(t, o) || !wr(e[o], t[o])) return !1
      }
      return !0
    }
    function kr(e) {
      for (; e && e.firstChild; ) e = e.firstChild
      return e
    }
    function Sr(e, t) {
      var n,
        r = kr(e)
      for (e = 0; r; ) {
        if (3 === r.nodeType) {
          if (((n = e + r.textContent.length), e <= t && n >= t))
            return { node: r, offset: t - e }
          e = n
        }
        e: {
          for (; r; ) {
            if (r.nextSibling) {
              r = r.nextSibling
              break e
            }
            r = r.parentNode
          }
          r = void 0
        }
        r = kr(r)
      }
    }
    function Er(e, t) {
      return (
        !(!e || !t) &&
        (e === t ||
          ((!e || 3 !== e.nodeType) &&
            (t && 3 === t.nodeType
              ? Er(e, t.parentNode)
              : 'contains' in e
                ? e.contains(t)
                : !!e.compareDocumentPosition &&
                  !!(16 & e.compareDocumentPosition(t)))))
      )
    }
    function Cr() {
      for (var e = window, t = le(); t instanceof e.HTMLIFrameElement; ) {
        try {
          var n = 'string' == typeof t.contentWindow.location.href
        } catch (e) {
          n = !1
        }
        if (!n) break
        t = le((e = t.contentWindow).document)
      }
      return t
    }
    function Or(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase()
      return (
        t &&
        (('input' === t &&
          ('text' === e.type ||
            'search' === e.type ||
            'tel' === e.type ||
            'url' === e.type ||
            'password' === e.type)) ||
          'textarea' === t ||
          'true' === e.contentEditable)
      )
    }
    function Ar(e) {
      var t = Cr(),
        n = e.focusedElem,
        r = e.selectionRange
      if (
        t !== n &&
        n &&
        n.ownerDocument &&
        Er(n.ownerDocument.documentElement, n)
      ) {
        if (null !== r && Or(n))
          if (
            ((t = r.start),
            void 0 === (e = r.end) && (e = t),
            'selectionStart' in n)
          )
            (n.selectionStart = t),
              (n.selectionEnd = Math.min(e, n.value.length))
          else if (
            (e = ((t = n.ownerDocument || document) && t.defaultView) || window)
              .getSelection
          ) {
            e = e.getSelection()
            var o = n.textContent.length,
              i = Math.min(r.start, o)
            ;(r = void 0 === r.end ? i : Math.min(r.end, o)),
              !e.extend && i > r && ((o = r), (r = i), (i = o)),
              (o = Sr(n, i))
            var a = Sr(n, r)
            o &&
              a &&
              (1 !== e.rangeCount ||
                e.anchorNode !== o.node ||
                e.anchorOffset !== o.offset ||
                e.focusNode !== a.node ||
                e.focusOffset !== a.offset) &&
              ((t = t.createRange()).setStart(o.node, o.offset),
              e.removeAllRanges(),
              i > r
                ? (e.addRange(t), e.extend(a.node, a.offset))
                : (t.setEnd(a.node, a.offset), e.addRange(t)))
          }
        for (t = [], e = n; (e = e.parentNode); )
          1 === e.nodeType &&
            t.push({ element: e, left: e.scrollLeft, top: e.scrollTop })
        for (
          'function' == typeof n.focus && n.focus(), n = 0;
          n < t.length;
          n++
        )
          ((e = t[n]).element.scrollLeft = e.left),
            (e.element.scrollTop = e.top)
      }
    }
    var Pr = S && 'documentMode' in document && 11 >= document.documentMode,
      Tr = null,
      Lr = null,
      Rr = null,
      Fr = !1
    function jr(e, t, n) {
      var r =
        n.window === n ? n.document : 9 === n.nodeType ? n : n.ownerDocument
      Fr ||
        null == Tr ||
        Tr !== le(r) ||
        ('selectionStart' in (r = Tr) && Or(r)
          ? (r = { start: r.selectionStart, end: r.selectionEnd })
          : (r = {
              anchorNode: (r = (
                (r.ownerDocument && r.ownerDocument.defaultView) ||
                window
              ).getSelection()).anchorNode,
              anchorOffset: r.anchorOffset,
              focusNode: r.focusNode,
              focusOffset: r.focusOffset,
            }),
        (Rr && xr(Rr, r)) ||
          ((Rr = r),
          0 < (r = io(Lr, 'onSelect')).length &&
            ((t = new Sn('onSelect', 'select', null, t, n)),
            e.push({ event: t, listeners: r }),
            (t.target = Tr))))
    }
    function Dr(e, t) {
      var n = {}
      return (
        (n[e.toLowerCase()] = t.toLowerCase()),
        (n['Webkit' + e] = 'webkit' + t),
        (n['Moz' + e] = 'moz' + t),
        n
      )
    }
    var _r = {
        animationend: Dr('Animation', 'AnimationEnd'),
        animationiteration: Dr('Animation', 'AnimationIteration'),
        animationstart: Dr('Animation', 'AnimationStart'),
        transitionend: Dr('Transition', 'TransitionEnd'),
      },
      Nr = {},
      Ir = {}
    function Br(e) {
      if (Nr[e]) return Nr[e]
      if (!_r[e]) return e
      var t,
        n = _r[e]
      for (t in n) if (n.hasOwnProperty(t) && t in Ir) return (Nr[e] = n[t])
      return e
    }
    S &&
      ((Ir = document.createElement('div').style),
      'AnimationEvent' in window ||
        (delete _r.animationend.animation,
        delete _r.animationiteration.animation,
        delete _r.animationstart.animation),
      'TransitionEvent' in window || delete _r.transitionend.transition)
    var zr = Br('animationend'),
      Mr = Br('animationiteration'),
      Ur = Br('animationstart'),
      qr = Br('transitionend'),
      Vr = new Map(),
      Hr =
        'abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel'.split(
          ' '
        )
    function Wr(e, t) {
      Vr.set(e, t), x(t, [e])
    }
    for (var $r = 0; $r < Hr.length; $r++) {
      var Qr = Hr[$r]
      Wr(Qr.toLowerCase(), 'on' + (Qr[0].toUpperCase() + Qr.slice(1)))
    }
    Wr(zr, 'onAnimationEnd'),
      Wr(Mr, 'onAnimationIteration'),
      Wr(Ur, 'onAnimationStart'),
      Wr('dblclick', 'onDoubleClick'),
      Wr('focusin', 'onFocus'),
      Wr('focusout', 'onBlur'),
      Wr(qr, 'onTransitionEnd'),
      k('onMouseEnter', ['mouseout', 'mouseover']),
      k('onMouseLeave', ['mouseout', 'mouseover']),
      k('onPointerEnter', ['pointerout', 'pointerover']),
      k('onPointerLeave', ['pointerout', 'pointerover']),
      x(
        'onChange',
        'change click focusin focusout input keydown keyup selectionchange'.split(
          ' '
        )
      ),
      x(
        'onSelect',
        'focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange'.split(
          ' '
        )
      ),
      x('onBeforeInput', ['compositionend', 'keypress', 'textInput', 'paste']),
      x(
        'onCompositionEnd',
        'compositionend focusout keydown keypress keyup mousedown'.split(' ')
      ),
      x(
        'onCompositionStart',
        'compositionstart focusout keydown keypress keyup mousedown'.split(' ')
      ),
      x(
        'onCompositionUpdate',
        'compositionupdate focusout keydown keypress keyup mousedown'.split(' ')
      )
    var Gr =
        'abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting'.split(
          ' '
        ),
      Jr = new Set(
        'cancel close invalid load scroll toggle'.split(' ').concat(Gr)
      )
    function Xr(e, t, n) {
      var r = e.type || 'unknown-event'
      ;(e.currentTarget = n),
        (function (e, t, n, r, o, i, a, l, u) {
          if ((et.apply(this, arguments), Je)) {
            if (!Je) throw Error(v(198))
            var s = Xe
            ;(Je = !1), (Xe = null), Ye || ((Ye = !0), (Ke = s))
          }
        })(r, t, void 0, e),
        (e.currentTarget = null)
    }
    function Yr(e, t) {
      t = 0 != (4 & t)
      for (var n = 0; n < e.length; n++) {
        var r = e[n],
          o = r.event
        r = r.listeners
        e: {
          var i = void 0
          if (t)
            for (var a = r.length - 1; 0 <= a; a--) {
              var l = r[a],
                u = l.instance,
                s = l.currentTarget
              if (((l = l.listener), u !== i && o.isPropagationStopped()))
                break e
              Xr(o, l, s), (i = u)
            }
          else
            for (a = 0; a < r.length; a++) {
              if (
                ((u = (l = r[a]).instance),
                (s = l.currentTarget),
                (l = l.listener),
                u !== i && o.isPropagationStopped())
              )
                break e
              Xr(o, l, s), (i = u)
            }
        }
      }
      if (Ye) throw ((e = Ke), (Ye = !1), (Ke = null), e)
    }
    function Kr(e, t) {
      var n = t[To]
      void 0 === n && (n = t[To] = new Set())
      var r = e + '__bubble'
      n.has(r) || (no(t, e, 2, !1), n.add(r))
    }
    function Zr(e, t, n) {
      var r = 0
      t && (r |= 4), no(n, e, r, t)
    }
    var eo = '_reactListening' + Math.random().toString(36).slice(2)
    function to(e) {
      if (!e[eo]) {
        ;(e[eo] = !0),
          b.forEach(function (t) {
            'selectionchange' !== t && (Jr.has(t) || Zr(t, !1, e), Zr(t, !0, e))
          })
        var t = 9 === e.nodeType ? e : e.ownerDocument
        null === t || t[eo] || ((t[eo] = !0), Zr('selectionchange', !1, t))
      }
    }
    function no(e, t, n, r) {
      switch (cn(t)) {
        case 1:
          var o = on
          break
        case 4:
          o = an
          break
        default:
          o = ln
      }
      ;(n = o.bind(null, t, n, e)),
        (o = void 0),
        !$e ||
          ('touchstart' !== t && 'touchmove' !== t && 'wheel' !== t) ||
          (o = !0),
        r
          ? void 0 !== o
            ? e.addEventListener(t, n, { capture: !0, passive: o })
            : e.addEventListener(t, n, !0)
          : void 0 !== o
            ? e.addEventListener(t, n, { passive: o })
            : e.addEventListener(t, n, !1)
    }
    function ro(e, t, n, r, o) {
      var i = r
      if (0 == (1 & t) && 0 == (2 & t) && null !== r)
        e: for (;;) {
          if (null === r) return
          var a = r.tag
          if (3 === a || 4 === a) {
            var l = r.stateNode.containerInfo
            if (l === o || (8 === l.nodeType && l.parentNode === o)) break
            if (4 === a)
              for (a = r.return; null !== a; ) {
                var u = a.tag
                if (
                  (3 === u || 4 === u) &&
                  ((u = a.stateNode.containerInfo) === o ||
                    (8 === u.nodeType && u.parentNode === o))
                )
                  return
                a = a.return
              }
            for (; null !== l; ) {
              if (null === (a = Fo(l))) return
              if (5 === (u = a.tag) || 6 === u) {
                r = i = a
                continue e
              }
              l = l.parentNode
            }
          }
          r = r.return
        }
      He(function () {
        var r = i,
          o = De(n),
          a = []
        e: {
          var l = Vr.get(e)
          if (void 0 !== l) {
            var u = Sn,
              s = e
            switch (e) {
              case 'keypress':
                if (0 === gn(n)) break e
              case 'keydown':
              case 'keyup':
                u = Mn
                break
              case 'focusin':
                ;(s = 'focus'), (u = Tn)
                break
              case 'focusout':
                ;(s = 'blur'), (u = Tn)
                break
              case 'beforeblur':
              case 'afterblur':
                u = Tn
                break
              case 'click':
                if (2 === n.button) break e
              case 'auxclick':
              case 'dblclick':
              case 'mousedown':
              case 'mousemove':
              case 'mouseup':
              case 'mouseout':
              case 'mouseover':
              case 'contextmenu':
                u = An
                break
              case 'drag':
              case 'dragend':
              case 'dragenter':
              case 'dragexit':
              case 'dragleave':
              case 'dragover':
              case 'dragstart':
              case 'drop':
                u = Pn
                break
              case 'touchcancel':
              case 'touchend':
              case 'touchmove':
              case 'touchstart':
                u = qn
                break
              case zr:
              case Mr:
              case Ur:
                u = Ln
                break
              case qr:
                u = Vn
                break
              case 'scroll':
                u = Cn
                break
              case 'wheel':
                u = Wn
                break
              case 'copy':
              case 'cut':
              case 'paste':
                u = Fn
                break
              case 'gotpointercapture':
              case 'lostpointercapture':
              case 'pointercancel':
              case 'pointerdown':
              case 'pointermove':
              case 'pointerout':
              case 'pointerover':
              case 'pointerup':
                u = Un
            }
            var c = 0 != (4 & t),
              f = !c && 'scroll' === e,
              p = c ? (null !== l ? l + 'Capture' : null) : l
            c = []
            for (var d, h = r; null !== h; ) {
              var g = (d = h).stateNode
              if (
                (5 === d.tag &&
                  null !== g &&
                  ((d = g),
                  null !== p && null != (g = We(h, p)) && c.push(oo(h, g, d))),
                f)
              )
                break
              h = h.return
            }
            0 < c.length &&
              ((l = new u(l, s, null, n, o)),
              a.push({ event: l, listeners: c }))
          }
        }
        if (0 == (7 & t)) {
          if (
            ((u = 'mouseout' === e || 'pointerout' === e),
            (!(l = 'mouseover' === e || 'pointerover' === e) ||
              n === je ||
              !(s = n.relatedTarget || n.fromElement) ||
              (!Fo(s) && !s[Po])) &&
              (u || l) &&
              ((l =
                o.window === o
                  ? o
                  : (l = o.ownerDocument)
                    ? l.defaultView || l.parentWindow
                    : window),
              u
                ? ((u = r),
                  null !==
                    (s = (s = n.relatedTarget || n.toElement) ? Fo(s) : null) &&
                    (s !== (f = tt(s)) || (5 !== s.tag && 6 !== s.tag)) &&
                    (s = null))
                : ((u = null), (s = r)),
              u !== s))
          ) {
            if (
              ((c = An),
              (g = 'onMouseLeave'),
              (p = 'onMouseEnter'),
              (h = 'mouse'),
              ('pointerout' !== e && 'pointerover' !== e) ||
                ((c = Un),
                (g = 'onPointerLeave'),
                (p = 'onPointerEnter'),
                (h = 'pointer')),
              (f = null == u ? l : Do(u)),
              (d = null == s ? l : Do(s)),
              ((l = new c(g, h + 'leave', u, n, o)).target = f),
              (l.relatedTarget = d),
              (g = null),
              Fo(o) === r &&
                (((c = new c(p, h + 'enter', s, n, o)).target = d),
                (c.relatedTarget = f),
                (g = c)),
              (f = g),
              u && s)
            )
              e: {
                for (p = s, h = 0, d = c = u; d; d = ao(d)) h++
                for (d = 0, g = p; g; g = ao(g)) d++
                for (; 0 < h - d; ) (c = ao(c)), h--
                for (; 0 < d - h; ) (p = ao(p)), d--
                for (; h--; ) {
                  if (c === p || (null !== p && c === p.alternate)) break e
                  ;(c = ao(c)), (p = ao(p))
                }
                c = null
              }
            else c = null
            null !== u && lo(a, l, u, c, !1),
              null !== s && null !== f && lo(a, f, s, c, !0)
          }
          if (
            'select' ===
              (u =
                (l = r ? Do(r) : window).nodeName &&
                l.nodeName.toLowerCase()) ||
            ('input' === u && 'file' === l.type)
          )
            var m = sr
          else if (rr(l))
            if (cr) m = br
            else {
              m = yr
              var y = mr
            }
          else
            (u = l.nodeName) &&
              'input' === u.toLowerCase() &&
              ('checkbox' === l.type || 'radio' === l.type) &&
              (m = vr)
          switch (
            (m && (m = m(e, r))
              ? or(a, m, n, o)
              : (y && y(e, l, r),
                'focusout' === e &&
                  (y = l._wrapperState) &&
                  y.controlled &&
                  'number' === l.type &&
                  de(l, 'number', l.value)),
            (y = r ? Do(r) : window),
            e)
          ) {
            case 'focusin':
              ;(rr(y) || 'true' === y.contentEditable) &&
                ((Tr = y), (Lr = r), (Rr = null))
              break
            case 'focusout':
              Rr = Lr = Tr = null
              break
            case 'mousedown':
              Fr = !0
              break
            case 'contextmenu':
            case 'mouseup':
            case 'dragend':
              ;(Fr = !1), jr(a, n, o)
              break
            case 'selectionchange':
              if (Pr) break
            case 'keydown':
            case 'keyup':
              jr(a, n, o)
          }
          var v
          if (Qn)
            e: {
              switch (e) {
                case 'compositionstart':
                  var b = 'onCompositionStart'
                  break e
                case 'compositionend':
                  b = 'onCompositionEnd'
                  break e
                case 'compositionupdate':
                  b = 'onCompositionUpdate'
                  break e
              }
              b = void 0
            }
          else
            tr
              ? Zn(e, n) && (b = 'onCompositionEnd')
              : 'keydown' === e &&
                229 === n.keyCode &&
                (b = 'onCompositionStart')
          b &&
            (Xn &&
              'ko' !== n.locale &&
              (tr || 'onCompositionStart' !== b
                ? 'onCompositionEnd' === b && tr && (v = hn())
                : ((pn = 'value' in (fn = o) ? fn.value : fn.textContent),
                  (tr = !0))),
            0 < (y = io(r, b)).length &&
              ((b = new jn(b, e, null, n, o)),
              a.push({ event: b, listeners: y }),
              v ? (b.data = v) : null !== (v = er(n)) && (b.data = v))),
            (v = Jn
              ? (function (e, t) {
                  switch (e) {
                    case 'compositionend':
                      return er(t)
                    case 'keypress':
                      return 32 !== t.which ? null : ((Kn = !0), Yn)
                    case 'textInput':
                      return (e = t.data) === Yn && Kn ? null : e
                    default:
                      return null
                  }
                })(e, n)
              : (function (e, t) {
                  if (tr)
                    return 'compositionend' === e || (!Qn && Zn(e, t))
                      ? ((e = hn()), (dn = pn = fn = null), (tr = !1), e)
                      : null
                  switch (e) {
                    case 'paste':
                    default:
                      return null
                    case 'keypress':
                      if (
                        !(t.ctrlKey || t.altKey || t.metaKey) ||
                        (t.ctrlKey && t.altKey)
                      ) {
                        if (t.char && 1 < t.char.length) return t.char
                        if (t.which) return String.fromCharCode(t.which)
                      }
                      return null
                    case 'compositionend':
                      return Xn && 'ko' !== t.locale ? null : t.data
                  }
                })(e, n)) &&
              0 < (r = io(r, 'onBeforeInput')).length &&
              ((o = new jn('onBeforeInput', 'beforeinput', null, n, o)),
              a.push({ event: o, listeners: r }),
              (o.data = v))
        }
        Yr(a, t)
      })
    }
    function oo(e, t, n) {
      return { instance: e, listener: t, currentTarget: n }
    }
    function io(e, t) {
      for (var n = t + 'Capture', r = []; null !== e; ) {
        var o = e,
          i = o.stateNode
        5 === o.tag &&
          null !== i &&
          ((o = i),
          null != (i = We(e, n)) && r.unshift(oo(e, i, o)),
          null != (i = We(e, t)) && r.push(oo(e, i, o))),
          (e = e.return)
      }
      return r
    }
    function ao(e) {
      if (null === e) return null
      do {
        e = e.return
      } while (e && 5 !== e.tag)
      return e || null
    }
    function lo(e, t, n, r, o) {
      for (var i = t._reactName, a = []; null !== n && n !== r; ) {
        var l = n,
          u = l.alternate,
          s = l.stateNode
        if (null !== u && u === r) break
        5 === l.tag &&
          null !== s &&
          ((l = s),
          o
            ? null != (u = We(n, i)) && a.unshift(oo(n, u, l))
            : o || (null != (u = We(n, i)) && a.push(oo(n, u, l)))),
          (n = n.return)
      }
      0 !== a.length && e.push({ event: t, listeners: a })
    }
    var uo = /\r\n?/g,
      so = /\u0000|\uFFFD/g
    function co(e) {
      return ('string' == typeof e ? e : '' + e)
        .replace(uo, '\n')
        .replace(so, '')
    }
    function fo(e, t, n) {
      if (((t = co(t)), co(e) !== t && n)) throw Error(v(425))
    }
    function po() {}
    var ho = null,
      go = null
    function mo(e, t) {
      return (
        'textarea' === e ||
        'noscript' === e ||
        'string' == typeof t.children ||
        'number' == typeof t.children ||
        ('object' == typeof t.dangerouslySetInnerHTML &&
          null !== t.dangerouslySetInnerHTML &&
          null != t.dangerouslySetInnerHTML.__html)
      )
    }
    var yo = 'function' == typeof setTimeout ? setTimeout : void 0,
      vo = 'function' == typeof clearTimeout ? clearTimeout : void 0,
      bo = 'function' == typeof Promise ? Promise : void 0,
      wo =
        'function' == typeof queueMicrotask
          ? queueMicrotask
          : void 0 !== bo
            ? function (e) {
                return bo.resolve(null).then(e).catch(xo)
              }
            : yo
    function xo(e) {
      setTimeout(function () {
        throw e
      })
    }
    function ko(e, t) {
      var n = t,
        r = 0
      do {
        var o = n.nextSibling
        if ((e.removeChild(n), o && 8 === o.nodeType))
          if ('/$' === (n = o.data)) {
            if (0 === r) return e.removeChild(o), void tn(t)
            r--
          } else ('$' !== n && '$?' !== n && '$!' !== n) || r++
        n = o
      } while (n)
      tn(t)
    }
    function So(e) {
      for (; null != e; e = e.nextSibling) {
        var t = e.nodeType
        if (1 === t || 3 === t) break
        if (8 === t) {
          if ('$' === (t = e.data) || '$!' === t || '$?' === t) break
          if ('/$' === t) return null
        }
      }
      return e
    }
    function Eo(e) {
      e = e.previousSibling
      for (var t = 0; e; ) {
        if (8 === e.nodeType) {
          var n = e.data
          if ('$' === n || '$!' === n || '$?' === n) {
            if (0 === t) return e
            t--
          } else '/$' === n && t++
        }
        e = e.previousSibling
      }
      return null
    }
    var Co = Math.random().toString(36).slice(2),
      Oo = '__reactFiber$' + Co,
      Ao = '__reactProps$' + Co,
      Po = '__reactContainer$' + Co,
      To = '__reactEvents$' + Co,
      Lo = '__reactListeners$' + Co,
      Ro = '__reactHandles$' + Co
    function Fo(e) {
      var t = e[Oo]
      if (t) return t
      for (var n = e.parentNode; n; ) {
        if ((t = n[Po] || n[Oo])) {
          if (
            ((n = t.alternate),
            null !== t.child || (null !== n && null !== n.child))
          )
            for (e = Eo(e); null !== e; ) {
              if ((n = e[Oo])) return n
              e = Eo(e)
            }
          return t
        }
        n = (e = n).parentNode
      }
      return null
    }
    function jo(e) {
      return !(e = e[Oo] || e[Po]) ||
        (5 !== e.tag && 6 !== e.tag && 13 !== e.tag && 3 !== e.tag)
        ? null
        : e
    }
    function Do(e) {
      if (5 === e.tag || 6 === e.tag) return e.stateNode
      throw Error(v(33))
    }
    function _o(e) {
      return e[Ao] || null
    }
    var No = [],
      Io = -1
    function Bo(e) {
      return { current: e }
    }
    function zo(e) {
      0 > Io || ((e.current = No[Io]), (No[Io] = null), Io--)
    }
    function Mo(e, t) {
      Io++, (No[Io] = e.current), (e.current = t)
    }
    var Uo = {},
      qo = Bo(Uo),
      Vo = Bo(!1),
      Ho = Uo
    function Wo(e, t) {
      var n = e.type.contextTypes
      if (!n) return Uo
      var r = e.stateNode
      if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
        return r.__reactInternalMemoizedMaskedChildContext
      var o,
        i = {}
      for (o in n) i[o] = t[o]
      return (
        r &&
          (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = t),
          (e.__reactInternalMemoizedMaskedChildContext = i)),
        i
      )
    }
    function $o(e) {
      return null != (e = e.childContextTypes)
    }
    function Qo() {
      zo(Vo), zo(qo)
    }
    function Go(e, t, n) {
      if (qo.current !== Uo) throw Error(v(168))
      Mo(qo, t), Mo(Vo, n)
    }
    function Jo(e, t, n) {
      var r = e.stateNode
      if (((t = t.childContextTypes), 'function' != typeof r.getChildContext))
        return n
      for (var o in (r = r.getChildContext()))
        if (!(o in t)) throw Error(v(108, ne(e) || 'Unknown', o))
      return X({}, n, r)
    }
    function Xo(e) {
      return (
        (e =
          ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) ||
          Uo),
        (Ho = qo.current),
        Mo(qo, e),
        Mo(Vo, Vo.current),
        !0
      )
    }
    function Yo(e, t, n) {
      var r = e.stateNode
      if (!r) throw Error(v(169))
      n
        ? ((e = Jo(e, t, Ho)),
          (r.__reactInternalMemoizedMergedChildContext = e),
          zo(Vo),
          zo(qo),
          Mo(qo, e))
        : zo(Vo),
        Mo(Vo, n)
    }
    var Ko = null,
      Zo = !1,
      ei = !1
    function ti(e) {
      null === Ko ? (Ko = [e]) : Ko.push(e)
    }
    function ni() {
      if (!ei && null !== Ko) {
        ei = !0
        var e = 0,
          t = Ft
        try {
          var n = Ko
          for (Ft = 1; e < n.length; e++) {
            var r = n[e]
            do {
              r = r(!0)
            } while (null !== r)
          }
          ;(Ko = null), (Zo = !1)
        } catch (t) {
          throw (null !== Ko && (Ko = Ko.slice(e + 1)), at(pt, ni), t)
        } finally {
          ;(Ft = t), (ei = !1)
        }
      }
      return null
    }
    var ri = [],
      oi = 0,
      ii = null,
      ai = 0,
      li = [],
      ui = 0,
      si = null,
      ci = 1,
      fi = ''
    function pi(e, t) {
      ;(ri[oi++] = ai), (ri[oi++] = ii), (ii = e), (ai = t)
    }
    function di(e, t, n) {
      ;(li[ui++] = ci), (li[ui++] = fi), (li[ui++] = si), (si = e)
      var r = ci
      e = fi
      var o = 32 - bt(r) - 1
      ;(r &= ~(1 << o)), (n += 1)
      var i = 32 - bt(t) + o
      if (30 < i) {
        var a = o - (o % 5)
        ;(i = (r & ((1 << a) - 1)).toString(32)),
          (r >>= a),
          (o -= a),
          (ci = (1 << (32 - bt(t) + o)) | (n << o) | r),
          (fi = i + e)
      } else (ci = (1 << i) | (n << o) | r), (fi = e)
    }
    function hi(e) {
      null !== e.return && (pi(e, 1), di(e, 1, 0))
    }
    function gi(e) {
      for (; e === ii; )
        (ii = ri[--oi]), (ri[oi] = null), (ai = ri[--oi]), (ri[oi] = null)
      for (; e === si; )
        (si = li[--ui]),
          (li[ui] = null),
          (fi = li[--ui]),
          (li[ui] = null),
          (ci = li[--ui]),
          (li[ui] = null)
    }
    var mi = null,
      yi = null,
      vi = !1,
      bi = null
    function wi(e, t) {
      var n = Hs(5, null, null, 0)
      ;(n.elementType = 'DELETED'),
        (n.stateNode = t),
        (n.return = e),
        null === (t = e.deletions)
          ? ((e.deletions = [n]), (e.flags |= 16))
          : t.push(n)
    }
    function xi(e, t) {
      switch (e.tag) {
        case 5:
          var n = e.type
          return (
            null !==
              (t =
                1 !== t.nodeType || n.toLowerCase() !== t.nodeName.toLowerCase()
                  ? null
                  : t) &&
            ((e.stateNode = t), (mi = e), (yi = So(t.firstChild)), !0)
          )
        case 6:
          return (
            null !==
              (t = '' === e.pendingProps || 3 !== t.nodeType ? null : t) &&
            ((e.stateNode = t), (mi = e), (yi = null), !0)
          )
        case 13:
          return (
            null !== (t = 8 !== t.nodeType ? null : t) &&
            ((n = null !== si ? { id: ci, overflow: fi } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            ((n = Hs(18, null, null, 0)).stateNode = t),
            (n.return = e),
            (e.child = n),
            (mi = e),
            (yi = null),
            !0)
          )
        default:
          return !1
      }
    }
    function ki(e) {
      return 0 != (1 & e.mode) && 0 == (128 & e.flags)
    }
    function Si(e) {
      if (vi) {
        var t = yi
        if (t) {
          var n = t
          if (!xi(e, t)) {
            if (ki(e)) throw Error(v(418))
            t = So(n.nextSibling)
            var r = mi
            t && xi(e, t)
              ? wi(r, n)
              : ((e.flags = (-4097 & e.flags) | 2), (vi = !1), (mi = e))
          }
        } else {
          if (ki(e)) throw Error(v(418))
          ;(e.flags = (-4097 & e.flags) | 2), (vi = !1), (mi = e)
        }
      }
    }
    function Ei(e) {
      for (
        e = e.return;
        null !== e && 5 !== e.tag && 3 !== e.tag && 13 !== e.tag;

      )
        e = e.return
      mi = e
    }
    function Ci(e) {
      if (e !== mi) return !1
      if (!vi) return Ei(e), (vi = !0), !1
      var t
      if (
        ((t = 3 !== e.tag) &&
          !(t = 5 !== e.tag) &&
          (t =
            'head' !== (t = e.type) &&
            'body' !== t &&
            !mo(e.type, e.memoizedProps)),
        t && (t = yi))
      ) {
        if (ki(e)) throw (Oi(), Error(v(418)))
        for (; t; ) wi(e, t), (t = So(t.nextSibling))
      }
      if ((Ei(e), 13 === e.tag)) {
        if (!(e = null !== (e = e.memoizedState) ? e.dehydrated : null))
          throw Error(v(317))
        e: {
          for (e = e.nextSibling, t = 0; e; ) {
            if (8 === e.nodeType) {
              var n = e.data
              if ('/$' === n) {
                if (0 === t) {
                  yi = So(e.nextSibling)
                  break e
                }
                t--
              } else ('$' !== n && '$!' !== n && '$?' !== n) || t++
            }
            e = e.nextSibling
          }
          yi = null
        }
      } else yi = mi ? So(e.stateNode.nextSibling) : null
      return !0
    }
    function Oi() {
      for (var e = yi; e; ) e = So(e.nextSibling)
    }
    function Ai() {
      ;(yi = mi = null), (vi = !1)
    }
    function Pi(e) {
      null === bi ? (bi = [e]) : bi.push(e)
    }
    var Ti = j.ReactCurrentBatchConfig
    function Li(e, t) {
      if (e && e.defaultProps) {
        for (var n in ((t = X({}, t)), (e = e.defaultProps)))
          void 0 === t[n] && (t[n] = e[n])
        return t
      }
      return t
    }
    var Ri = Bo(null),
      Fi = null,
      ji = null,
      Di = null
    function _i() {
      Di = ji = Fi = null
    }
    function Ni(e) {
      var t = Ri.current
      zo(Ri), (e._currentValue = t)
    }
    function Ii(e, t, n) {
      for (; null !== e; ) {
        var r = e.alternate
        if (
          ((e.childLanes & t) !== t
            ? ((e.childLanes |= t), null !== r && (r.childLanes |= t))
            : null !== r && (r.childLanes & t) !== t && (r.childLanes |= t),
          e === n)
        )
          break
        e = e.return
      }
    }
    function Bi(e, t) {
      ;(Fi = e),
        (Di = ji = null),
        null !== (e = e.dependencies) &&
          null !== e.firstContext &&
          (0 != (e.lanes & t) && (jl = !0), (e.firstContext = null))
    }
    function zi(e) {
      var t = e._currentValue
      if (Di !== e)
        if (((e = { context: e, memoizedValue: t, next: null }), null === ji)) {
          if (null === Fi) throw Error(v(308))
          ;(ji = e), (Fi.dependencies = { lanes: 0, firstContext: e })
        } else ji = ji.next = e
      return t
    }
    var Mi = null
    function Ui(e) {
      null === Mi ? (Mi = [e]) : Mi.push(e)
    }
    function qi(e, t, n, r) {
      var o = t.interleaved
      return (
        null === o ? ((n.next = n), Ui(t)) : ((n.next = o.next), (o.next = n)),
        (t.interleaved = n),
        Vi(e, r)
      )
    }
    function Vi(e, t) {
      e.lanes |= t
      var n = e.alternate
      for (null !== n && (n.lanes |= t), n = e, e = e.return; null !== e; )
        (e.childLanes |= t),
          null !== (n = e.alternate) && (n.childLanes |= t),
          (n = e),
          (e = e.return)
      return 3 === n.tag ? n.stateNode : null
    }
    var Hi = !1
    function Wi(e) {
      e.updateQueue = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: { pending: null, interleaved: null, lanes: 0 },
        effects: null,
      }
    }
    function $i(e, t) {
      ;(e = e.updateQueue),
        t.updateQueue === e &&
          (t.updateQueue = {
            baseState: e.baseState,
            firstBaseUpdate: e.firstBaseUpdate,
            lastBaseUpdate: e.lastBaseUpdate,
            shared: e.shared,
            effects: e.effects,
          })
    }
    function Qi(e, t) {
      return {
        eventTime: e,
        lane: t,
        tag: 0,
        payload: null,
        callback: null,
        next: null,
      }
    }
    function Gi(e, t, n) {
      var r = e.updateQueue
      if (null === r) return null
      if (((r = r.shared), 0 != (2 & Uu))) {
        var o = r.pending
        return (
          null === o ? (t.next = t) : ((t.next = o.next), (o.next = t)),
          (r.pending = t),
          Vi(e, n)
        )
      }
      return (
        null === (o = r.interleaved)
          ? ((t.next = t), Ui(r))
          : ((t.next = o.next), (o.next = t)),
        (r.interleaved = t),
        Vi(e, n)
      )
    }
    function Ji(e, t, n) {
      if (
        null !== (t = t.updateQueue) &&
        ((t = t.shared), 0 != (4194240 & n))
      ) {
        var r = t.lanes
        ;(n |= r &= e.pendingLanes), (t.lanes = n), Rt(e, n)
      }
    }
    function Xi(e, t) {
      var n = e.updateQueue,
        r = e.alternate
      if (null !== r && n === (r = r.updateQueue)) {
        var o = null,
          i = null
        if (null !== (n = n.firstBaseUpdate)) {
          do {
            var a = {
              eventTime: n.eventTime,
              lane: n.lane,
              tag: n.tag,
              payload: n.payload,
              callback: n.callback,
              next: null,
            }
            null === i ? (o = i = a) : (i = i.next = a), (n = n.next)
          } while (null !== n)
          null === i ? (o = i = t) : (i = i.next = t)
        } else o = i = t
        return (
          (n = {
            baseState: r.baseState,
            firstBaseUpdate: o,
            lastBaseUpdate: i,
            shared: r.shared,
            effects: r.effects,
          }),
          void (e.updateQueue = n)
        )
      }
      null === (e = n.lastBaseUpdate) ? (n.firstBaseUpdate = t) : (e.next = t),
        (n.lastBaseUpdate = t)
    }
    function Yi(e, t, n, r) {
      var o = e.updateQueue
      Hi = !1
      var i = o.firstBaseUpdate,
        a = o.lastBaseUpdate,
        l = o.shared.pending
      if (null !== l) {
        o.shared.pending = null
        var u = l,
          s = u.next
        ;(u.next = null), null === a ? (i = s) : (a.next = s), (a = u)
        var c = e.alternate
        null !== c &&
          (l = (c = c.updateQueue).lastBaseUpdate) !== a &&
          (null === l ? (c.firstBaseUpdate = s) : (l.next = s),
          (c.lastBaseUpdate = u))
      }
      if (null !== i) {
        var f = o.baseState
        for (a = 0, c = s = u = null, l = i; ; ) {
          var p = l.lane,
            d = l.eventTime
          if ((r & p) === p) {
            null !== c &&
              (c = c.next =
                {
                  eventTime: d,
                  lane: 0,
                  tag: l.tag,
                  payload: l.payload,
                  callback: l.callback,
                  next: null,
                })
            e: {
              var h = e,
                g = l
              switch (((p = t), (d = n), g.tag)) {
                case 1:
                  if ('function' == typeof (h = g.payload)) {
                    f = h.call(d, f, p)
                    break e
                  }
                  f = h
                  break e
                case 3:
                  h.flags = (-65537 & h.flags) | 128
                case 0:
                  if (
                    null ==
                    (p =
                      'function' == typeof (h = g.payload)
                        ? h.call(d, f, p)
                        : h)
                  )
                    break e
                  f = X({}, f, p)
                  break e
                case 2:
                  Hi = !0
              }
            }
            null !== l.callback &&
              0 !== l.lane &&
              ((e.flags |= 64),
              null === (p = o.effects) ? (o.effects = [l]) : p.push(l))
          } else
            (d = {
              eventTime: d,
              lane: p,
              tag: l.tag,
              payload: l.payload,
              callback: l.callback,
              next: null,
            }),
              null === c ? ((s = c = d), (u = f)) : (c = c.next = d),
              (a |= p)
          if (null === (l = l.next)) {
            if (null === (l = o.shared.pending)) break
            ;(l = (p = l).next),
              (p.next = null),
              (o.lastBaseUpdate = p),
              (o.shared.pending = null)
          }
        }
        if (
          (null === c && (u = f),
          (o.baseState = u),
          (o.firstBaseUpdate = s),
          (o.lastBaseUpdate = c),
          null !== (t = o.shared.interleaved))
        ) {
          o = t
          do {
            ;(a |= o.lane), (o = o.next)
          } while (o !== t)
        } else null === i && (o.shared.lanes = 0)
        ;(Ju |= a), (e.lanes = a), (e.memoizedState = f)
      }
    }
    function Ki(e, t, n) {
      if (((e = t.effects), (t.effects = null), null !== e))
        for (t = 0; t < e.length; t++) {
          var r = e[t],
            o = r.callback
          if (null !== o) {
            if (((r.callback = null), (r = n), 'function' != typeof o))
              throw Error(v(191, o))
            o.call(r)
          }
        }
    }
    var Zi = new m.Component().refs
    function ea(e, t, n, r) {
      ;(n = null == (n = n(r, (t = e.memoizedState))) ? t : X({}, t, n)),
        (e.memoizedState = n),
        0 === e.lanes && (e.updateQueue.baseState = n)
    }
    var ta = {
      isMounted: function (e) {
        return !!(e = e._reactInternals) && tt(e) === e
      },
      enqueueSetState: function (e, t, n) {
        e = e._reactInternals
        var r = ds(),
          o = hs(e),
          i = Qi(r, o)
        ;(i.payload = t),
          null != n && (i.callback = n),
          null !== (t = Gi(e, i, o)) && (gs(t, e, o, r), Ji(t, e, o))
      },
      enqueueReplaceState: function (e, t, n) {
        e = e._reactInternals
        var r = ds(),
          o = hs(e),
          i = Qi(r, o)
        ;(i.tag = 1),
          (i.payload = t),
          null != n && (i.callback = n),
          null !== (t = Gi(e, i, o)) && (gs(t, e, o, r), Ji(t, e, o))
      },
      enqueueForceUpdate: function (e, t) {
        e = e._reactInternals
        var n = ds(),
          r = hs(e),
          o = Qi(n, r)
        ;(o.tag = 2),
          null != t && (o.callback = t),
          null !== (t = Gi(e, o, r)) && (gs(t, e, r, n), Ji(t, e, r))
      },
    }
    function na(e, t, n, r, o, i, a) {
      return 'function' == typeof (e = e.stateNode).shouldComponentUpdate
        ? e.shouldComponentUpdate(r, i, a)
        : !t.prototype ||
            !t.prototype.isPureReactComponent ||
            !xr(n, r) ||
            !xr(o, i)
    }
    function ra(e, t, n) {
      var r = !1,
        o = Uo,
        i = t.contextType
      return (
        'object' == typeof i && null !== i
          ? (i = zi(i))
          : ((o = $o(t) ? Ho : qo.current),
            (i = (r = null != (r = t.contextTypes)) ? Wo(e, o) : Uo)),
        (t = new t(n, i)),
        (e.memoizedState =
          null !== t.state && void 0 !== t.state ? t.state : null),
        (t.updater = ta),
        (e.stateNode = t),
        (t._reactInternals = e),
        r &&
          (((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = o),
          (e.__reactInternalMemoizedMaskedChildContext = i)),
        t
      )
    }
    function oa(e, t, n, r) {
      ;(e = t.state),
        'function' == typeof t.componentWillReceiveProps &&
          t.componentWillReceiveProps(n, r),
        'function' == typeof t.UNSAFE_componentWillReceiveProps &&
          t.UNSAFE_componentWillReceiveProps(n, r),
        t.state !== e && ta.enqueueReplaceState(t, t.state, null)
    }
    function ia(e, t, n, r) {
      var o = e.stateNode
      ;(o.props = n), (o.state = e.memoizedState), (o.refs = Zi), Wi(e)
      var i = t.contextType
      'object' == typeof i && null !== i
        ? (o.context = zi(i))
        : ((i = $o(t) ? Ho : qo.current), (o.context = Wo(e, i))),
        (o.state = e.memoizedState),
        'function' == typeof (i = t.getDerivedStateFromProps) &&
          (ea(e, t, i, n), (o.state = e.memoizedState)),
        'function' == typeof t.getDerivedStateFromProps ||
          'function' == typeof o.getSnapshotBeforeUpdate ||
          ('function' != typeof o.UNSAFE_componentWillMount &&
            'function' != typeof o.componentWillMount) ||
          ((t = o.state),
          'function' == typeof o.componentWillMount && o.componentWillMount(),
          'function' == typeof o.UNSAFE_componentWillMount &&
            o.UNSAFE_componentWillMount(),
          t !== o.state && ta.enqueueReplaceState(o, o.state, null),
          Yi(e, n, o, r),
          (o.state = e.memoizedState)),
        'function' == typeof o.componentDidMount && (e.flags |= 4194308)
    }
    function aa(e, t, n) {
      if (
        null !== (e = n.ref) &&
        'function' != typeof e &&
        'object' != typeof e
      ) {
        if (n._owner) {
          if ((n = n._owner)) {
            if (1 !== n.tag) throw Error(v(309))
            var r = n.stateNode
          }
          if (!r) throw Error(v(147, e))
          var o = r,
            i = '' + e
          return null !== t &&
            null !== t.ref &&
            'function' == typeof t.ref &&
            t.ref._stringRef === i
            ? t.ref
            : ((t = function (e) {
                var t = o.refs
                t === Zi && (t = o.refs = {}),
                  null === e ? delete t[i] : (t[i] = e)
              }),
              (t._stringRef = i),
              t)
        }
        if ('string' != typeof e) throw Error(v(284))
        if (!n._owner) throw Error(v(290, e))
      }
      return e
    }
    function la(e, t) {
      throw (
        ((e = Object.prototype.toString.call(t)),
        Error(
          v(
            31,
            '[object Object]' === e
              ? 'object with keys {' + Object.keys(t).join(', ') + '}'
              : e
          )
        ))
      )
    }
    function ua(e) {
      return (0, e._init)(e._payload)
    }
    function sa(e) {
      function t(t, n) {
        if (e) {
          var r = t.deletions
          null === r ? ((t.deletions = [n]), (t.flags |= 16)) : r.push(n)
        }
      }
      function n(n, r) {
        if (!e) return null
        for (; null !== r; ) t(n, r), (r = r.sibling)
        return null
      }
      function r(e, t) {
        for (e = new Map(); null !== t; )
          null !== t.key ? e.set(t.key, t) : e.set(t.index, t), (t = t.sibling)
        return e
      }
      function o(e, t) {
        return ((e = $s(e, t)).index = 0), (e.sibling = null), e
      }
      function i(t, n, r) {
        return (
          (t.index = r),
          e
            ? null !== (r = t.alternate)
              ? (r = r.index) < n
                ? ((t.flags |= 2), n)
                : r
              : ((t.flags |= 2), n)
            : ((t.flags |= 1048576), n)
        )
      }
      function a(t) {
        return e && null === t.alternate && (t.flags |= 2), t
      }
      function l(e, t, n, r) {
        return null === t || 6 !== t.tag
          ? (((t = Xs(n, e.mode, r)).return = e), t)
          : (((t = o(t, n)).return = e), t)
      }
      function u(e, t, n, r) {
        var i = n.type
        return i === N
          ? c(e, t, n.props.children, r, n.key)
          : null !== t &&
              (t.elementType === i ||
                ('object' == typeof i &&
                  null !== i &&
                  i.$$typeof === W &&
                  ua(i) === t.type))
            ? (((r = o(t, n.props)).ref = aa(e, t, n)), (r.return = e), r)
            : (((r = Qs(n.type, n.key, n.props, null, e.mode, r)).ref = aa(
                e,
                t,
                n
              )),
              (r.return = e),
              r)
      }
      function s(e, t, n, r) {
        return null === t ||
          4 !== t.tag ||
          t.stateNode.containerInfo !== n.containerInfo ||
          t.stateNode.implementation !== n.implementation
          ? (((t = Ys(n, e.mode, r)).return = e), t)
          : (((t = o(t, n.children || [])).return = e), t)
      }
      function c(e, t, n, r, i) {
        return null === t || 7 !== t.tag
          ? (((t = Gs(n, e.mode, r, i)).return = e), t)
          : (((t = o(t, n)).return = e), t)
      }
      function f(e, t, n) {
        if (('string' == typeof t && '' !== t) || 'number' == typeof t)
          return ((t = Xs('' + t, e.mode, n)).return = e), t
        if ('object' == typeof t && null !== t) {
          switch (t.$$typeof) {
            case D:
              return (
                ((n = Qs(t.type, t.key, t.props, null, e.mode, n)).ref = aa(
                  e,
                  null,
                  t
                )),
                (n.return = e),
                n
              )
            case _:
              return ((t = Ys(t, e.mode, n)).return = e), t
            case W:
              return f(e, (0, t._init)(t._payload), n)
          }
          if (he(t) || G(t)) return ((t = Gs(t, e.mode, n, null)).return = e), t
          la(e, t)
        }
        return null
      }
      function p(e, t, n, r) {
        var o = null !== t ? t.key : null
        if (('string' == typeof n && '' !== n) || 'number' == typeof n)
          return null !== o ? null : l(e, t, '' + n, r)
        if ('object' == typeof n && null !== n) {
          switch (n.$$typeof) {
            case D:
              return n.key === o ? u(e, t, n, r) : null
            case _:
              return n.key === o ? s(e, t, n, r) : null
            case W:
              return p(e, t, (o = n._init)(n._payload), r)
          }
          if (he(n) || G(n)) return null !== o ? null : c(e, t, n, r, null)
          la(e, n)
        }
        return null
      }
      function d(e, t, n, r, o) {
        if (('string' == typeof r && '' !== r) || 'number' == typeof r)
          return l(t, (e = e.get(n) || null), '' + r, o)
        if ('object' == typeof r && null !== r) {
          switch (r.$$typeof) {
            case D:
              return u(t, (e = e.get(null === r.key ? n : r.key) || null), r, o)
            case _:
              return s(t, (e = e.get(null === r.key ? n : r.key) || null), r, o)
            case W:
              return d(e, t, n, (0, r._init)(r._payload), o)
          }
          if (he(r) || G(r)) return c(t, (e = e.get(n) || null), r, o, null)
          la(t, r)
        }
        return null
      }
      function h(o, a, l, u) {
        for (
          var s = null, c = null, h = a, g = (a = 0), m = null;
          null !== h && g < l.length;
          g++
        ) {
          h.index > g ? ((m = h), (h = null)) : (m = h.sibling)
          var y = p(o, h, l[g], u)
          if (null === y) {
            null === h && (h = m)
            break
          }
          e && h && null === y.alternate && t(o, h),
            (a = i(y, a, g)),
            null === c ? (s = y) : (c.sibling = y),
            (c = y),
            (h = m)
        }
        if (g === l.length) return n(o, h), vi && pi(o, g), s
        if (null === h) {
          for (; g < l.length; g++)
            null !== (h = f(o, l[g], u)) &&
              ((a = i(h, a, g)),
              null === c ? (s = h) : (c.sibling = h),
              (c = h))
          return vi && pi(o, g), s
        }
        for (h = r(o, h); g < l.length; g++)
          null !== (m = d(h, o, g, l[g], u)) &&
            (e && null !== m.alternate && h.delete(null === m.key ? g : m.key),
            (a = i(m, a, g)),
            null === c ? (s = m) : (c.sibling = m),
            (c = m))
        return (
          e &&
            h.forEach(function (e) {
              return t(o, e)
            }),
          vi && pi(o, g),
          s
        )
      }
      function g(o, a, l, u) {
        var s = G(l)
        if ('function' != typeof s) throw Error(v(150))
        if (null == (l = s.call(l))) throw Error(v(151))
        for (
          var c = (s = null), h = a, g = (a = 0), m = null, y = l.next();
          null !== h && !y.done;
          g++, y = l.next()
        ) {
          h.index > g ? ((m = h), (h = null)) : (m = h.sibling)
          var b = p(o, h, y.value, u)
          if (null === b) {
            null === h && (h = m)
            break
          }
          e && h && null === b.alternate && t(o, h),
            (a = i(b, a, g)),
            null === c ? (s = b) : (c.sibling = b),
            (c = b),
            (h = m)
        }
        if (y.done) return n(o, h), vi && pi(o, g), s
        if (null === h) {
          for (; !y.done; g++, y = l.next())
            null !== (y = f(o, y.value, u)) &&
              ((a = i(y, a, g)),
              null === c ? (s = y) : (c.sibling = y),
              (c = y))
          return vi && pi(o, g), s
        }
        for (h = r(o, h); !y.done; g++, y = l.next())
          null !== (y = d(h, o, g, y.value, u)) &&
            (e && null !== y.alternate && h.delete(null === y.key ? g : y.key),
            (a = i(y, a, g)),
            null === c ? (s = y) : (c.sibling = y),
            (c = y))
        return (
          e &&
            h.forEach(function (e) {
              return t(o, e)
            }),
          vi && pi(o, g),
          s
        )
      }
      return function e(r, i, l, u) {
        if (
          ('object' == typeof l &&
            null !== l &&
            l.type === N &&
            null === l.key &&
            (l = l.props.children),
          'object' == typeof l && null !== l)
        ) {
          switch (l.$$typeof) {
            case D:
              e: {
                for (var s = l.key, c = i; null !== c; ) {
                  if (c.key === s) {
                    if ((s = l.type) === N) {
                      if (7 === c.tag) {
                        n(r, c.sibling),
                          ((i = o(c, l.props.children)).return = r),
                          (r = i)
                        break e
                      }
                    } else if (
                      c.elementType === s ||
                      ('object' == typeof s &&
                        null !== s &&
                        s.$$typeof === W &&
                        ua(s) === c.type)
                    ) {
                      n(r, c.sibling),
                        ((i = o(c, l.props)).ref = aa(r, c, l)),
                        (i.return = r),
                        (r = i)
                      break e
                    }
                    n(r, c)
                    break
                  }
                  t(r, c), (c = c.sibling)
                }
                l.type === N
                  ? (((i = Gs(l.props.children, r.mode, u, l.key)).return = r),
                    (r = i))
                  : (((u = Qs(l.type, l.key, l.props, null, r.mode, u)).ref =
                      aa(r, i, l)),
                    (u.return = r),
                    (r = u))
              }
              return a(r)
            case _:
              e: {
                for (c = l.key; null !== i; ) {
                  if (i.key === c) {
                    if (
                      4 === i.tag &&
                      i.stateNode.containerInfo === l.containerInfo &&
                      i.stateNode.implementation === l.implementation
                    ) {
                      n(r, i.sibling),
                        ((i = o(i, l.children || [])).return = r),
                        (r = i)
                      break e
                    }
                    n(r, i)
                    break
                  }
                  t(r, i), (i = i.sibling)
                }
                ;((i = Ys(l, r.mode, u)).return = r), (r = i)
              }
              return a(r)
            case W:
              return e(r, i, (c = l._init)(l._payload), u)
          }
          if (he(l)) return h(r, i, l, u)
          if (G(l)) return g(r, i, l, u)
          la(r, l)
        }
        return ('string' == typeof l && '' !== l) || 'number' == typeof l
          ? ((l = '' + l),
            null !== i && 6 === i.tag
              ? (n(r, i.sibling), ((i = o(i, l)).return = r), (r = i))
              : (n(r, i), ((i = Xs(l, r.mode, u)).return = r), (r = i)),
            a(r))
          : n(r, i)
      }
    }
    var ca = sa(!0),
      fa = sa(!1),
      pa = {},
      da = Bo(pa),
      ha = Bo(pa),
      ga = Bo(pa)
    function ma(e) {
      if (e === pa) throw Error(v(174))
      return e
    }
    function ya(e, t) {
      switch ((Mo(ga, t), Mo(ha, e), Mo(da, pa), (e = t.nodeType))) {
        case 9:
        case 11:
          t = (t = t.documentElement) ? t.namespaceURI : xe(null, '')
          break
        default:
          t = xe(
            (t = (e = 8 === e ? t.parentNode : t).namespaceURI || null),
            (e = e.tagName)
          )
      }
      zo(da), Mo(da, t)
    }
    function va() {
      zo(da), zo(ha), zo(ga)
    }
    function ba(e) {
      ma(ga.current)
      var t = ma(da.current),
        n = xe(t, e.type)
      t !== n && (Mo(ha, e), Mo(da, n))
    }
    function wa(e) {
      ha.current === e && (zo(da), zo(ha))
    }
    var xa = Bo(0)
    function ka(e) {
      for (var t = e; null !== t; ) {
        if (13 === t.tag) {
          var n = t.memoizedState
          if (
            null !== n &&
            (null === (n = n.dehydrated) || '$?' === n.data || '$!' === n.data)
          )
            return t
        } else if (19 === t.tag && void 0 !== t.memoizedProps.revealOrder) {
          if (0 != (128 & t.flags)) return t
        } else if (null !== t.child) {
          ;(t.child.return = t), (t = t.child)
          continue
        }
        if (t === e) break
        for (; null === t.sibling; ) {
          if (null === t.return || t.return === e) return null
          t = t.return
        }
        ;(t.sibling.return = t.return), (t = t.sibling)
      }
      return null
    }
    var Sa = []
    function Ea() {
      for (var e = 0; e < Sa.length; e++)
        Sa[e]._workInProgressVersionPrimary = null
      Sa.length = 0
    }
    var Ca = j.ReactCurrentDispatcher,
      Oa = j.ReactCurrentBatchConfig,
      Aa = 0,
      Pa = null,
      Ta = null,
      La = null,
      Ra = !1,
      Fa = !1,
      ja = 0,
      Da = 0
    function _a() {
      throw Error(v(321))
    }
    function Na(e, t) {
      if (null === t) return !1
      for (var n = 0; n < t.length && n < e.length; n++)
        if (!wr(e[n], t[n])) return !1
      return !0
    }
    function Ia(e, t, n, r, o, i) {
      if (
        ((Aa = i),
        (Pa = t),
        (t.memoizedState = null),
        (t.updateQueue = null),
        (t.lanes = 0),
        (Ca.current = null === e || null === e.memoizedState ? wl : xl),
        (e = n(r, o)),
        Fa)
      ) {
        i = 0
        do {
          if (((Fa = !1), (ja = 0), 25 <= i)) throw Error(v(301))
          ;(i += 1),
            (La = Ta = null),
            (t.updateQueue = null),
            (Ca.current = kl),
            (e = n(r, o))
        } while (Fa)
      }
      if (
        ((Ca.current = bl),
        (t = null !== Ta && null !== Ta.next),
        (Aa = 0),
        (La = Ta = Pa = null),
        (Ra = !1),
        t)
      )
        throw Error(v(300))
      return e
    }
    function Ba() {
      var e = 0 !== ja
      return (ja = 0), e
    }
    function za() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null,
      }
      return null === La ? (Pa.memoizedState = La = e) : (La = La.next = e), La
    }
    function Ma() {
      if (null === Ta) {
        var e = Pa.alternate
        e = null !== e ? e.memoizedState : null
      } else e = Ta.next
      var t = null === La ? Pa.memoizedState : La.next
      if (null !== t) (La = t), (Ta = e)
      else {
        if (null === e) throw Error(v(310))
        ;(e = {
          memoizedState: (Ta = e).memoizedState,
          baseState: Ta.baseState,
          baseQueue: Ta.baseQueue,
          queue: Ta.queue,
          next: null,
        }),
          null === La ? (Pa.memoizedState = La = e) : (La = La.next = e)
      }
      return La
    }
    function Ua(e, t) {
      return 'function' == typeof t ? t(e) : t
    }
    function qa(e) {
      var t = Ma(),
        n = t.queue
      if (null === n) throw Error(v(311))
      n.lastRenderedReducer = e
      var r = Ta,
        o = r.baseQueue,
        i = n.pending
      if (null !== i) {
        if (null !== o) {
          var a = o.next
          ;(o.next = i.next), (i.next = a)
        }
        ;(r.baseQueue = o = i), (n.pending = null)
      }
      if (null !== o) {
        ;(i = o.next), (r = r.baseState)
        var l = (a = null),
          u = null,
          s = i
        do {
          var c = s.lane
          if ((Aa & c) === c)
            null !== u &&
              (u = u.next =
                {
                  lane: 0,
                  action: s.action,
                  hasEagerState: s.hasEagerState,
                  eagerState: s.eagerState,
                  next: null,
                }),
              (r = s.hasEagerState ? s.eagerState : e(r, s.action))
          else {
            var f = {
              lane: c,
              action: s.action,
              hasEagerState: s.hasEagerState,
              eagerState: s.eagerState,
              next: null,
            }
            null === u ? ((l = u = f), (a = r)) : (u = u.next = f),
              (Pa.lanes |= c),
              (Ju |= c)
          }
          s = s.next
        } while (null !== s && s !== i)
        null === u ? (a = r) : (u.next = l),
          wr(r, t.memoizedState) || (jl = !0),
          (t.memoizedState = r),
          (t.baseState = a),
          (t.baseQueue = u),
          (n.lastRenderedState = r)
      }
      if (null !== (e = n.interleaved)) {
        o = e
        do {
          ;(i = o.lane), (Pa.lanes |= i), (Ju |= i), (o = o.next)
        } while (o !== e)
      } else null === o && (n.lanes = 0)
      return [t.memoizedState, n.dispatch]
    }
    function Va(e) {
      var t = Ma(),
        n = t.queue
      if (null === n) throw Error(v(311))
      n.lastRenderedReducer = e
      var r = n.dispatch,
        o = n.pending,
        i = t.memoizedState
      if (null !== o) {
        n.pending = null
        var a = (o = o.next)
        do {
          ;(i = e(i, a.action)), (a = a.next)
        } while (a !== o)
        wr(i, t.memoizedState) || (jl = !0),
          (t.memoizedState = i),
          null === t.baseQueue && (t.baseState = i),
          (n.lastRenderedState = i)
      }
      return [i, r]
    }
    function Ha() {}
    function Wa(e, t) {
      var n = Pa,
        r = Ma(),
        o = t(),
        i = !wr(r.memoizedState, o)
      if (
        (i && ((r.memoizedState = o), (jl = !0)),
        (r = r.queue),
        rl(Ga.bind(null, n, r, e), [e]),
        r.getSnapshot !== t || i || (null !== La && 1 & La.memoizedState.tag))
      ) {
        if (
          ((n.flags |= 2048),
          Ka(9, Qa.bind(null, n, r, o, t), void 0, null),
          null === qu)
        )
          throw Error(v(349))
        0 != (30 & Aa) || $a(n, t, o)
      }
      return o
    }
    function $a(e, t, n) {
      ;(e.flags |= 16384),
        (e = { getSnapshot: t, value: n }),
        null === (t = Pa.updateQueue)
          ? ((t = { lastEffect: null, stores: null }),
            (Pa.updateQueue = t),
            (t.stores = [e]))
          : null === (n = t.stores)
            ? (t.stores = [e])
            : n.push(e)
    }
    function Qa(e, t, n, r) {
      ;(t.value = n), (t.getSnapshot = r), Ja(t) && Xa(e)
    }
    function Ga(e, t, n) {
      return n(function () {
        Ja(t) && Xa(e)
      })
    }
    function Ja(e) {
      var t = e.getSnapshot
      e = e.value
      try {
        var n = t()
        return !wr(e, n)
      } catch (e) {
        return !0
      }
    }
    function Xa(e) {
      var t = Vi(e, 1)
      null !== t && gs(t, e, 1, -1)
    }
    function Ya(e) {
      var t = za()
      return (
        'function' == typeof e && (e = e()),
        (t.memoizedState = t.baseState = e),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: Ua,
          lastRenderedState: e,
        }),
        (t.queue = e),
        (e = e.dispatch = gl.bind(null, Pa, e)),
        [t.memoizedState, e]
      )
    }
    function Ka(e, t, n, r) {
      return (
        (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
        null === (t = Pa.updateQueue)
          ? ((t = { lastEffect: null, stores: null }),
            (Pa.updateQueue = t),
            (t.lastEffect = e.next = e))
          : null === (n = t.lastEffect)
            ? (t.lastEffect = e.next = e)
            : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e)),
        e
      )
    }
    function Za() {
      return Ma().memoizedState
    }
    function el(e, t, n, r) {
      var o = za()
      ;(Pa.flags |= e),
        (o.memoizedState = Ka(1 | t, n, void 0, void 0 === r ? null : r))
    }
    function tl(e, t, n, r) {
      var o = Ma()
      r = void 0 === r ? null : r
      var i = void 0
      if (null !== Ta) {
        var a = Ta.memoizedState
        if (((i = a.destroy), null !== r && Na(r, a.deps)))
          return void (o.memoizedState = Ka(t, n, i, r))
      }
      ;(Pa.flags |= e), (o.memoizedState = Ka(1 | t, n, i, r))
    }
    function nl(e, t) {
      return el(8390656, 8, e, t)
    }
    function rl(e, t) {
      return tl(2048, 8, e, t)
    }
    function ol(e, t) {
      return tl(4, 2, e, t)
    }
    function il(e, t) {
      return tl(4, 4, e, t)
    }
    function al(e, t) {
      return 'function' == typeof t
        ? ((e = e()),
          t(e),
          function () {
            t(null)
          })
        : null != t
          ? ((e = e()),
            (t.current = e),
            function () {
              t.current = null
            })
          : void 0
    }
    function ll(e, t, n) {
      return (
        (n = null != n ? n.concat([e]) : null), tl(4, 4, al.bind(null, t, e), n)
      )
    }
    function ul() {}
    function sl(e, t) {
      var n = Ma()
      t = void 0 === t ? null : t
      var r = n.memoizedState
      return null !== r && null !== t && Na(t, r[1])
        ? r[0]
        : ((n.memoizedState = [e, t]), e)
    }
    function cl(e, t) {
      var n = Ma()
      t = void 0 === t ? null : t
      var r = n.memoizedState
      return null !== r && null !== t && Na(t, r[1])
        ? r[0]
        : ((e = e()), (n.memoizedState = [e, t]), e)
    }
    function fl(e, t, n) {
      return 0 == (21 & Aa)
        ? (e.baseState && ((e.baseState = !1), (jl = !0)),
          (e.memoizedState = n))
        : (wr(n, t) ||
            ((n = Pt()), (Pa.lanes |= n), (Ju |= n), (e.baseState = !0)),
          t)
    }
    function pl(e, t) {
      var n = Ft
      ;(Ft = 0 !== n && 4 > n ? n : 4), e(!0)
      var r = Oa.transition
      Oa.transition = {}
      try {
        e(!1), t()
      } finally {
        ;(Ft = n), (Oa.transition = r)
      }
    }
    function dl() {
      return Ma().memoizedState
    }
    function hl(e, t, n) {
      var r = hs(e)
      if (
        ((n = {
          lane: r,
          action: n,
          hasEagerState: !1,
          eagerState: null,
          next: null,
        }),
        ml(e))
      )
        yl(t, n)
      else if (null !== (n = qi(e, t, n, r))) {
        gs(n, e, r, ds()), vl(n, t, r)
      }
    }
    function gl(e, t, n) {
      var r = hs(e),
        o = {
          lane: r,
          action: n,
          hasEagerState: !1,
          eagerState: null,
          next: null,
        }
      if (ml(e)) yl(t, o)
      else {
        var i = e.alternate
        if (
          0 === e.lanes &&
          (null === i || 0 === i.lanes) &&
          null !== (i = t.lastRenderedReducer)
        )
          try {
            var a = t.lastRenderedState,
              l = i(a, n)
            if (((o.hasEagerState = !0), (o.eagerState = l), wr(l, a))) {
              var u = t.interleaved
              return (
                null === u
                  ? ((o.next = o), Ui(t))
                  : ((o.next = u.next), (u.next = o)),
                void (t.interleaved = o)
              )
            }
          } catch (e) {}
        null !== (n = qi(e, t, o, r)) && (gs(n, e, r, (o = ds())), vl(n, t, r))
      }
    }
    function ml(e) {
      var t = e.alternate
      return e === Pa || (null !== t && t === Pa)
    }
    function yl(e, t) {
      Fa = Ra = !0
      var n = e.pending
      null === n ? (t.next = t) : ((t.next = n.next), (n.next = t)),
        (e.pending = t)
    }
    function vl(e, t, n) {
      if (0 != (4194240 & n)) {
        var r = t.lanes
        ;(n |= r &= e.pendingLanes), (t.lanes = n), Rt(e, n)
      }
    }
    var bl = {
        readContext: zi,
        useCallback: _a,
        useContext: _a,
        useEffect: _a,
        useImperativeHandle: _a,
        useInsertionEffect: _a,
        useLayoutEffect: _a,
        useMemo: _a,
        useReducer: _a,
        useRef: _a,
        useState: _a,
        useDebugValue: _a,
        useDeferredValue: _a,
        useTransition: _a,
        useMutableSource: _a,
        useSyncExternalStore: _a,
        useId: _a,
        unstable_isNewReconciler: !1,
      },
      wl = {
        readContext: zi,
        useCallback: function (e, t) {
          return (za().memoizedState = [e, void 0 === t ? null : t]), e
        },
        useContext: zi,
        useEffect: nl,
        useImperativeHandle: function (e, t, n) {
          return (
            (n = null != n ? n.concat([e]) : null),
            el(4194308, 4, al.bind(null, t, e), n)
          )
        },
        useLayoutEffect: function (e, t) {
          return el(4194308, 4, e, t)
        },
        useInsertionEffect: function (e, t) {
          return el(4, 2, e, t)
        },
        useMemo: function (e, t) {
          var n = za()
          return (
            (t = void 0 === t ? null : t),
            (e = e()),
            (n.memoizedState = [e, t]),
            e
          )
        },
        useReducer: function (e, t, n) {
          var r = za()
          return (
            (t = void 0 !== n ? n(t) : t),
            (r.memoizedState = r.baseState = t),
            (e = {
              pending: null,
              interleaved: null,
              lanes: 0,
              dispatch: null,
              lastRenderedReducer: e,
              lastRenderedState: t,
            }),
            (r.queue = e),
            (e = e.dispatch = hl.bind(null, Pa, e)),
            [r.memoizedState, e]
          )
        },
        useRef: function (e) {
          return (e = { current: e }), (za().memoizedState = e)
        },
        useState: Ya,
        useDebugValue: ul,
        useDeferredValue: function (e) {
          return (za().memoizedState = e)
        },
        useTransition: function () {
          var e = Ya(!1),
            t = e[0]
          return (e = pl.bind(null, e[1])), (za().memoizedState = e), [t, e]
        },
        useMutableSource: function () {},
        useSyncExternalStore: function (e, t, n) {
          var r = Pa,
            o = za()
          if (vi) {
            if (void 0 === n) throw Error(v(407))
            n = n()
          } else {
            if (((n = t()), null === qu)) throw Error(v(349))
            0 != (30 & Aa) || $a(r, t, n)
          }
          o.memoizedState = n
          var i = { value: n, getSnapshot: t }
          return (
            (o.queue = i),
            nl(Ga.bind(null, r, i, e), [e]),
            (r.flags |= 2048),
            Ka(9, Qa.bind(null, r, i, n, t), void 0, null),
            n
          )
        },
        useId: function () {
          var e = za(),
            t = qu.identifierPrefix
          if (vi) {
            var n = fi
            ;(t =
              ':' +
              t +
              'R' +
              (n = (ci & ~(1 << (32 - bt(ci) - 1))).toString(32) + n)),
              0 < (n = ja++) && (t += 'H' + n.toString(32)),
              (t += ':')
          } else t = ':' + t + 'r' + (n = Da++).toString(32) + ':'
          return (e.memoizedState = t)
        },
        unstable_isNewReconciler: !1,
      },
      xl = {
        readContext: zi,
        useCallback: sl,
        useContext: zi,
        useEffect: rl,
        useImperativeHandle: ll,
        useInsertionEffect: ol,
        useLayoutEffect: il,
        useMemo: cl,
        useReducer: qa,
        useRef: Za,
        useState: function () {
          return qa(Ua)
        },
        useDebugValue: ul,
        useDeferredValue: function (e) {
          return fl(Ma(), Ta.memoizedState, e)
        },
        useTransition: function () {
          return [qa(Ua)[0], Ma().memoizedState]
        },
        useMutableSource: Ha,
        useSyncExternalStore: Wa,
        useId: dl,
        unstable_isNewReconciler: !1,
      },
      kl = {
        readContext: zi,
        useCallback: sl,
        useContext: zi,
        useEffect: rl,
        useImperativeHandle: ll,
        useInsertionEffect: ol,
        useLayoutEffect: il,
        useMemo: cl,
        useReducer: Va,
        useRef: Za,
        useState: function () {
          return Va(Ua)
        },
        useDebugValue: ul,
        useDeferredValue: function (e) {
          var t = Ma()
          return null === Ta
            ? (t.memoizedState = e)
            : fl(t, Ta.memoizedState, e)
        },
        useTransition: function () {
          return [Va(Ua)[0], Ma().memoizedState]
        },
        useMutableSource: Ha,
        useSyncExternalStore: Wa,
        useId: dl,
        unstable_isNewReconciler: !1,
      }
    function Sl(e, t) {
      try {
        var n = '',
          r = t
        do {
          ;(n += ee(r)), (r = r.return)
        } while (r)
        var o = n
      } catch (e) {
        o = '\nError generating stack: ' + e.message + '\n' + e.stack
      }
      return { value: e, source: t, stack: o, digest: null }
    }
    function El(e, t, n) {
      return {
        value: e,
        source: null,
        stack: null != n ? n : null,
        digest: null != t ? t : null,
      }
    }
    function Cl(e, t) {
      try {
        console.error(t.value)
      } catch (e) {
        setTimeout(function () {
          throw e
        })
      }
    }
    var Ol = 'function' == typeof WeakMap ? WeakMap : Map
    function Al(e, t, n) {
      ;((n = Qi(-1, n)).tag = 3), (n.payload = { element: null })
      var r = t.value
      return (
        (n.callback = function () {
          rs || ((rs = !0), (os = r)), Cl(0, t)
        }),
        n
      )
    }
    function Pl(e, t, n) {
      ;(n = Qi(-1, n)).tag = 3
      var r = e.type.getDerivedStateFromError
      if ('function' == typeof r) {
        var o = t.value
        ;(n.payload = function () {
          return r(o)
        }),
          (n.callback = function () {
            Cl(0, t)
          })
      }
      var i = e.stateNode
      return (
        null !== i &&
          'function' == typeof i.componentDidCatch &&
          (n.callback = function () {
            Cl(0, t),
              'function' != typeof r &&
                (null === is ? (is = new Set([this])) : is.add(this))
            var e = t.stack
            this.componentDidCatch(t.value, {
              componentStack: null !== e ? e : '',
            })
          }),
        n
      )
    }
    function Tl(e, t, n) {
      var r = e.pingCache
      if (null === r) {
        r = e.pingCache = new Ol()
        var o = new Set()
        r.set(t, o)
      } else void 0 === (o = r.get(t)) && ((o = new Set()), r.set(t, o))
      o.has(n) || (o.add(n), (e = Bs.bind(null, e, t, n)), t.then(e, e))
    }
    function Ll(e) {
      do {
        var t
        if (
          ((t = 13 === e.tag) &&
            (t = null === (t = e.memoizedState) || null !== t.dehydrated),
          t)
        )
          return e
        e = e.return
      } while (null !== e)
      return null
    }
    function Rl(e, t, n, r, o) {
      return 0 == (1 & e.mode)
        ? (e === t
            ? (e.flags |= 65536)
            : ((e.flags |= 128),
              (n.flags |= 131072),
              (n.flags &= -52805),
              1 === n.tag &&
                (null === n.alternate
                  ? (n.tag = 17)
                  : (((t = Qi(-1, 1)).tag = 2), Gi(n, t, 1))),
              (n.lanes |= 1)),
          e)
        : ((e.flags |= 65536), (e.lanes = o), e)
    }
    var Fl = j.ReactCurrentOwner,
      jl = !1
    function Dl(e, t, n, r) {
      t.child = null === e ? fa(t, null, n, r) : ca(t, e.child, n, r)
    }
    function _l(e, t, n, r, o) {
      n = n.render
      var i = t.ref
      return (
        Bi(t, o),
        (r = Ia(e, t, n, r, i, o)),
        (n = Ba()),
        null === e || jl
          ? (vi && n && hi(t), (t.flags |= 1), Dl(e, t, r, o), t.child)
          : ((t.updateQueue = e.updateQueue),
            (t.flags &= -2053),
            (e.lanes &= ~o),
            ru(e, t, o))
      )
    }
    function Nl(e, t, n, r, o) {
      if (null === e) {
        var i = n.type
        return 'function' != typeof i ||
          Ws(i) ||
          void 0 !== i.defaultProps ||
          null !== n.compare ||
          void 0 !== n.defaultProps
          ? (((e = Qs(n.type, null, r, t, t.mode, o)).ref = t.ref),
            (e.return = t),
            (t.child = e))
          : ((t.tag = 15), (t.type = i), Il(e, t, i, r, o))
      }
      if (((i = e.child), 0 == (e.lanes & o))) {
        var a = i.memoizedProps
        if ((n = null !== (n = n.compare) ? n : xr)(a, r) && e.ref === t.ref)
          return ru(e, t, o)
      }
      return (
        (t.flags |= 1),
        ((e = $s(i, r)).ref = t.ref),
        (e.return = t),
        (t.child = e)
      )
    }
    function Il(e, t, n, r, o) {
      if (null !== e) {
        var i = e.memoizedProps
        if (xr(i, r) && e.ref === t.ref) {
          if (((jl = !1), (t.pendingProps = r = i), 0 == (e.lanes & o)))
            return (t.lanes = e.lanes), ru(e, t, o)
          0 != (131072 & e.flags) && (jl = !0)
        }
      }
      return Ml(e, t, n, r, o)
    }
    function Bl(e, t, n) {
      var r = t.pendingProps,
        o = r.children,
        i = null !== e ? e.memoizedState : null
      if ('hidden' === r.mode)
        if (0 == (1 & t.mode))
          (t.memoizedState = {
            baseLanes: 0,
            cachePool: null,
            transitions: null,
          }),
            Mo($u, Wu),
            (Wu |= n)
        else {
          if (0 == (1073741824 & n))
            return (
              (e = null !== i ? i.baseLanes | n : n),
              (t.lanes = t.childLanes = 1073741824),
              (t.memoizedState = {
                baseLanes: e,
                cachePool: null,
                transitions: null,
              }),
              (t.updateQueue = null),
              Mo($u, Wu),
              (Wu |= e),
              null
            )
          ;(t.memoizedState = {
            baseLanes: 0,
            cachePool: null,
            transitions: null,
          }),
            (r = null !== i ? i.baseLanes : n),
            Mo($u, Wu),
            (Wu |= r)
        }
      else
        null !== i
          ? ((r = i.baseLanes | n), (t.memoizedState = null))
          : (r = n),
          Mo($u, Wu),
          (Wu |= r)
      return Dl(e, t, o, n), t.child
    }
    function zl(e, t) {
      var n = t.ref
      ;((null === e && null !== n) || (null !== e && e.ref !== n)) &&
        ((t.flags |= 512), (t.flags |= 2097152))
    }
    function Ml(e, t, n, r, o) {
      var i = $o(n) ? Ho : qo.current
      return (
        (i = Wo(t, i)),
        Bi(t, o),
        (n = Ia(e, t, n, r, i, o)),
        (r = Ba()),
        null === e || jl
          ? (vi && r && hi(t), (t.flags |= 1), Dl(e, t, n, o), t.child)
          : ((t.updateQueue = e.updateQueue),
            (t.flags &= -2053),
            (e.lanes &= ~o),
            ru(e, t, o))
      )
    }
    function Ul(e, t, n, r, o) {
      if ($o(n)) {
        var i = !0
        Xo(t)
      } else i = !1
      if ((Bi(t, o), null === t.stateNode))
        nu(e, t), ra(t, n, r), ia(t, n, r, o), (r = !0)
      else if (null === e) {
        var a = t.stateNode,
          l = t.memoizedProps
        a.props = l
        var u = a.context,
          s = n.contextType
        'object' == typeof s && null !== s
          ? (s = zi(s))
          : (s = Wo(t, (s = $o(n) ? Ho : qo.current)))
        var c = n.getDerivedStateFromProps,
          f =
            'function' == typeof c ||
            'function' == typeof a.getSnapshotBeforeUpdate
        f ||
          ('function' != typeof a.UNSAFE_componentWillReceiveProps &&
            'function' != typeof a.componentWillReceiveProps) ||
          ((l !== r || u !== s) && oa(t, a, r, s)),
          (Hi = !1)
        var p = t.memoizedState
        ;(a.state = p),
          Yi(t, r, a, o),
          (u = t.memoizedState),
          l !== r || p !== u || Vo.current || Hi
            ? ('function' == typeof c &&
                (ea(t, n, c, r), (u = t.memoizedState)),
              (l = Hi || na(t, n, l, r, p, u, s))
                ? (f ||
                    ('function' != typeof a.UNSAFE_componentWillMount &&
                      'function' != typeof a.componentWillMount) ||
                    ('function' == typeof a.componentWillMount &&
                      a.componentWillMount(),
                    'function' == typeof a.UNSAFE_componentWillMount &&
                      a.UNSAFE_componentWillMount()),
                  'function' == typeof a.componentDidMount &&
                    (t.flags |= 4194308))
                : ('function' == typeof a.componentDidMount &&
                    (t.flags |= 4194308),
                  (t.memoizedProps = r),
                  (t.memoizedState = u)),
              (a.props = r),
              (a.state = u),
              (a.context = s),
              (r = l))
            : ('function' == typeof a.componentDidMount && (t.flags |= 4194308),
              (r = !1))
      } else {
        ;(a = t.stateNode),
          $i(e, t),
          (l = t.memoizedProps),
          (s = t.type === t.elementType ? l : Li(t.type, l)),
          (a.props = s),
          (f = t.pendingProps),
          (p = a.context),
          'object' == typeof (u = n.contextType) && null !== u
            ? (u = zi(u))
            : (u = Wo(t, (u = $o(n) ? Ho : qo.current)))
        var d = n.getDerivedStateFromProps
        ;(c =
          'function' == typeof d ||
          'function' == typeof a.getSnapshotBeforeUpdate) ||
          ('function' != typeof a.UNSAFE_componentWillReceiveProps &&
            'function' != typeof a.componentWillReceiveProps) ||
          ((l !== f || p !== u) && oa(t, a, r, u)),
          (Hi = !1),
          (p = t.memoizedState),
          (a.state = p),
          Yi(t, r, a, o)
        var h = t.memoizedState
        l !== f || p !== h || Vo.current || Hi
          ? ('function' == typeof d && (ea(t, n, d, r), (h = t.memoizedState)),
            (s = Hi || na(t, n, s, r, p, h, u) || !1)
              ? (c ||
                  ('function' != typeof a.UNSAFE_componentWillUpdate &&
                    'function' != typeof a.componentWillUpdate) ||
                  ('function' == typeof a.componentWillUpdate &&
                    a.componentWillUpdate(r, h, u),
                  'function' == typeof a.UNSAFE_componentWillUpdate &&
                    a.UNSAFE_componentWillUpdate(r, h, u)),
                'function' == typeof a.componentDidUpdate && (t.flags |= 4),
                'function' == typeof a.getSnapshotBeforeUpdate &&
                  (t.flags |= 1024))
              : ('function' != typeof a.componentDidUpdate ||
                  (l === e.memoizedProps && p === e.memoizedState) ||
                  (t.flags |= 4),
                'function' != typeof a.getSnapshotBeforeUpdate ||
                  (l === e.memoizedProps && p === e.memoizedState) ||
                  (t.flags |= 1024),
                (t.memoizedProps = r),
                (t.memoizedState = h)),
            (a.props = r),
            (a.state = h),
            (a.context = u),
            (r = s))
          : ('function' != typeof a.componentDidUpdate ||
              (l === e.memoizedProps && p === e.memoizedState) ||
              (t.flags |= 4),
            'function' != typeof a.getSnapshotBeforeUpdate ||
              (l === e.memoizedProps && p === e.memoizedState) ||
              (t.flags |= 1024),
            (r = !1))
      }
      return ql(e, t, n, r, i, o)
    }
    function ql(e, t, n, r, o, i) {
      zl(e, t)
      var a = 0 != (128 & t.flags)
      if (!r && !a) return o && Yo(t, n, !1), ru(e, t, i)
      ;(r = t.stateNode), (Fl.current = t)
      var l =
        a && 'function' != typeof n.getDerivedStateFromError ? null : r.render()
      return (
        (t.flags |= 1),
        null !== e && a
          ? ((t.child = ca(t, e.child, null, i)), (t.child = ca(t, null, l, i)))
          : Dl(e, t, l, i),
        (t.memoizedState = r.state),
        o && Yo(t, n, !0),
        t.child
      )
    }
    function Vl(e) {
      var t = e.stateNode
      t.pendingContext
        ? Go(0, t.pendingContext, t.pendingContext !== t.context)
        : t.context && Go(0, t.context, !1),
        ya(e, t.containerInfo)
    }
    function Hl(e, t, n, r, o) {
      return Ai(), Pi(o), (t.flags |= 256), Dl(e, t, n, r), t.child
    }
    var Wl,
      $l,
      Ql,
      Gl = { dehydrated: null, treeContext: null, retryLane: 0 }
    function Jl(e) {
      return { baseLanes: e, cachePool: null, transitions: null }
    }
    function Xl(e, t, n) {
      var r,
        o = t.pendingProps,
        i = xa.current,
        a = !1,
        l = 0 != (128 & t.flags)
      if (
        ((r = l) ||
          (r = (null === e || null !== e.memoizedState) && 0 != (2 & i)),
        r
          ? ((a = !0), (t.flags &= -129))
          : (null !== e && null === e.memoizedState) || (i |= 1),
        Mo(xa, 1 & i),
        null === e)
      )
        return (
          Si(t),
          null !== (e = t.memoizedState) && null !== (e = e.dehydrated)
            ? (0 == (1 & t.mode)
                ? (t.lanes = 1)
                : '$!' === e.data
                  ? (t.lanes = 8)
                  : (t.lanes = 1073741824),
              null)
            : ((l = o.children),
              (e = o.fallback),
              a
                ? ((o = t.mode),
                  (a = t.child),
                  (l = { mode: 'hidden', children: l }),
                  0 == (1 & o) && null !== a
                    ? ((a.childLanes = 0), (a.pendingProps = l))
                    : (a = Js(l, o, 0, null)),
                  (e = Gs(e, o, n, null)),
                  (a.return = t),
                  (e.return = t),
                  (a.sibling = e),
                  (t.child = a),
                  (t.child.memoizedState = Jl(n)),
                  (t.memoizedState = Gl),
                  e)
                : Yl(t, l))
        )
      if (null !== (i = e.memoizedState) && null !== (r = i.dehydrated))
        return (function (e, t, n, r, o, i, a) {
          if (n)
            return 256 & t.flags
              ? ((t.flags &= -257), Kl(e, t, a, (r = El(Error(v(422))))))
              : null !== t.memoizedState
                ? ((t.child = e.child), (t.flags |= 128), null)
                : ((i = r.fallback),
                  (o = t.mode),
                  (r = Js(
                    { mode: 'visible', children: r.children },
                    o,
                    0,
                    null
                  )),
                  ((i = Gs(i, o, a, null)).flags |= 2),
                  (r.return = t),
                  (i.return = t),
                  (r.sibling = i),
                  (t.child = r),
                  0 != (1 & t.mode) && ca(t, e.child, null, a),
                  (t.child.memoizedState = Jl(a)),
                  (t.memoizedState = Gl),
                  i)
          if (0 == (1 & t.mode)) return Kl(e, t, a, null)
          if ('$!' === o.data) {
            if ((r = o.nextSibling && o.nextSibling.dataset)) var l = r.dgst
            return (
              (r = l), Kl(e, t, a, (r = El((i = Error(v(419))), r, void 0)))
            )
          }
          if (((l = 0 != (a & e.childLanes)), jl || l)) {
            if (null !== (r = qu)) {
              switch (a & -a) {
                case 4:
                  o = 2
                  break
                case 16:
                  o = 8
                  break
                case 64:
                case 128:
                case 256:
                case 512:
                case 1024:
                case 2048:
                case 4096:
                case 8192:
                case 16384:
                case 32768:
                case 65536:
                case 131072:
                case 262144:
                case 524288:
                case 1048576:
                case 2097152:
                case 4194304:
                case 8388608:
                case 16777216:
                case 33554432:
                case 67108864:
                  o = 32
                  break
                case 536870912:
                  o = 268435456
                  break
                default:
                  o = 0
              }
              0 !== (o = 0 != (o & (r.suspendedLanes | a)) ? 0 : o) &&
                o !== i.retryLane &&
                ((i.retryLane = o), Vi(e, o), gs(r, e, o, -1))
            }
            return Ps(), Kl(e, t, a, (r = El(Error(v(421)))))
          }
          return '$?' === o.data
            ? ((t.flags |= 128),
              (t.child = e.child),
              (t = Ms.bind(null, e)),
              (o._reactRetry = t),
              null)
            : ((e = i.treeContext),
              (yi = So(o.nextSibling)),
              (mi = t),
              (vi = !0),
              (bi = null),
              null !== e &&
                ((li[ui++] = ci),
                (li[ui++] = fi),
                (li[ui++] = si),
                (ci = e.id),
                (fi = e.overflow),
                (si = t)),
              (t = Yl(t, r.children)),
              (t.flags |= 4096),
              t)
        })(e, t, l, o, r, i, n)
      if (a) {
        ;(a = o.fallback), (l = t.mode), (r = (i = e.child).sibling)
        var u = { mode: 'hidden', children: o.children }
        return (
          0 == (1 & l) && t.child !== i
            ? (((o = t.child).childLanes = 0),
              (o.pendingProps = u),
              (t.deletions = null))
            : ((o = $s(i, u)).subtreeFlags = 14680064 & i.subtreeFlags),
          null !== r ? (a = $s(r, a)) : ((a = Gs(a, l, n, null)).flags |= 2),
          (a.return = t),
          (o.return = t),
          (o.sibling = a),
          (t.child = o),
          (o = a),
          (a = t.child),
          (l =
            null === (l = e.child.memoizedState)
              ? Jl(n)
              : {
                  baseLanes: l.baseLanes | n,
                  cachePool: null,
                  transitions: l.transitions,
                }),
          (a.memoizedState = l),
          (a.childLanes = e.childLanes & ~n),
          (t.memoizedState = Gl),
          o
        )
      }
      return (
        (e = (a = e.child).sibling),
        (o = $s(a, { mode: 'visible', children: o.children })),
        0 == (1 & t.mode) && (o.lanes = n),
        (o.return = t),
        (o.sibling = null),
        null !== e &&
          (null === (n = t.deletions)
            ? ((t.deletions = [e]), (t.flags |= 16))
            : n.push(e)),
        (t.child = o),
        (t.memoizedState = null),
        o
      )
    }
    function Yl(e, t) {
      return (
        ((t = Js({ mode: 'visible', children: t }, e.mode, 0, null)).return =
          e),
        (e.child = t)
      )
    }
    function Kl(e, t, n, r) {
      return (
        null !== r && Pi(r),
        ca(t, e.child, null, n),
        ((e = Yl(t, t.pendingProps.children)).flags |= 2),
        (t.memoizedState = null),
        e
      )
    }
    function Zl(e, t, n) {
      e.lanes |= t
      var r = e.alternate
      null !== r && (r.lanes |= t), Ii(e.return, t, n)
    }
    function eu(e, t, n, r, o) {
      var i = e.memoizedState
      null === i
        ? (e.memoizedState = {
            isBackwards: t,
            rendering: null,
            renderingStartTime: 0,
            last: r,
            tail: n,
            tailMode: o,
          })
        : ((i.isBackwards = t),
          (i.rendering = null),
          (i.renderingStartTime = 0),
          (i.last = r),
          (i.tail = n),
          (i.tailMode = o))
    }
    function tu(e, t, n) {
      var r = t.pendingProps,
        o = r.revealOrder,
        i = r.tail
      if ((Dl(e, t, r.children, n), 0 != (2 & (r = xa.current))))
        (r = (1 & r) | 2), (t.flags |= 128)
      else {
        if (null !== e && 0 != (128 & e.flags))
          e: for (e = t.child; null !== e; ) {
            if (13 === e.tag) null !== e.memoizedState && Zl(e, n, t)
            else if (19 === e.tag) Zl(e, n, t)
            else if (null !== e.child) {
              ;(e.child.return = e), (e = e.child)
              continue
            }
            if (e === t) break e
            for (; null === e.sibling; ) {
              if (null === e.return || e.return === t) break e
              e = e.return
            }
            ;(e.sibling.return = e.return), (e = e.sibling)
          }
        r &= 1
      }
      if ((Mo(xa, r), 0 == (1 & t.mode))) t.memoizedState = null
      else
        switch (o) {
          case 'forwards':
            for (n = t.child, o = null; null !== n; )
              null !== (e = n.alternate) && null === ka(e) && (o = n),
                (n = n.sibling)
            null === (n = o)
              ? ((o = t.child), (t.child = null))
              : ((o = n.sibling), (n.sibling = null)),
              eu(t, !1, o, n, i)
            break
          case 'backwards':
            for (n = null, o = t.child, t.child = null; null !== o; ) {
              if (null !== (e = o.alternate) && null === ka(e)) {
                t.child = o
                break
              }
              ;(e = o.sibling), (o.sibling = n), (n = o), (o = e)
            }
            eu(t, !0, n, null, i)
            break
          case 'together':
            eu(t, !1, null, null, void 0)
            break
          default:
            t.memoizedState = null
        }
      return t.child
    }
    function nu(e, t) {
      0 == (1 & t.mode) &&
        null !== e &&
        ((e.alternate = null), (t.alternate = null), (t.flags |= 2))
    }
    function ru(e, t, n) {
      if (
        (null !== e && (t.dependencies = e.dependencies),
        (Ju |= t.lanes),
        0 == (n & t.childLanes))
      )
        return null
      if (null !== e && t.child !== e.child) throw Error(v(153))
      if (null !== t.child) {
        for (
          n = $s((e = t.child), e.pendingProps), t.child = n, n.return = t;
          null !== e.sibling;

        )
          (e = e.sibling), ((n = n.sibling = $s(e, e.pendingProps)).return = t)
        n.sibling = null
      }
      return t.child
    }
    function ou(e, t) {
      if (!vi)
        switch (e.tailMode) {
          case 'hidden':
            t = e.tail
            for (var n = null; null !== t; )
              null !== t.alternate && (n = t), (t = t.sibling)
            null === n ? (e.tail = null) : (n.sibling = null)
            break
          case 'collapsed':
            n = e.tail
            for (var r = null; null !== n; )
              null !== n.alternate && (r = n), (n = n.sibling)
            null === r
              ? t || null === e.tail
                ? (e.tail = null)
                : (e.tail.sibling = null)
              : (r.sibling = null)
        }
    }
    function iu(e) {
      var t = null !== e.alternate && e.alternate.child === e.child,
        n = 0,
        r = 0
      if (t)
        for (var o = e.child; null !== o; )
          (n |= o.lanes | o.childLanes),
            (r |= 14680064 & o.subtreeFlags),
            (r |= 14680064 & o.flags),
            (o.return = e),
            (o = o.sibling)
      else
        for (o = e.child; null !== o; )
          (n |= o.lanes | o.childLanes),
            (r |= o.subtreeFlags),
            (r |= o.flags),
            (o.return = e),
            (o = o.sibling)
      return (e.subtreeFlags |= r), (e.childLanes = n), t
    }
    function au(e, t, n) {
      var r = t.pendingProps
      switch ((gi(t), t.tag)) {
        case 2:
        case 16:
        case 15:
        case 0:
        case 11:
        case 7:
        case 8:
        case 12:
        case 9:
        case 14:
          return iu(t), null
        case 1:
        case 17:
          return $o(t.type) && Qo(), iu(t), null
        case 3:
          return (
            (r = t.stateNode),
            va(),
            zo(Vo),
            zo(qo),
            Ea(),
            r.pendingContext &&
              ((r.context = r.pendingContext), (r.pendingContext = null)),
            (null !== e && null !== e.child) ||
              (Ci(t)
                ? (t.flags |= 4)
                : null === e ||
                  (e.memoizedState.isDehydrated && 0 == (256 & t.flags)) ||
                  ((t.flags |= 1024), null !== bi && (bs(bi), (bi = null)))),
            iu(t),
            null
          )
        case 5:
          wa(t)
          var o = ma(ga.current)
          if (((n = t.type), null !== e && null != t.stateNode))
            $l(e, t, n, r),
              e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152))
          else {
            if (!r) {
              if (null === t.stateNode) throw Error(v(166))
              return iu(t), null
            }
            if (((e = ma(da.current)), Ci(t))) {
              ;(r = t.stateNode), (n = t.type)
              var i = t.memoizedProps
              switch (((r[Oo] = t), (r[Ao] = i), (e = 0 != (1 & t.mode)), n)) {
                case 'dialog':
                  Kr('cancel', r), Kr('close', r)
                  break
                case 'iframe':
                case 'object':
                case 'embed':
                  Kr('load', r)
                  break
                case 'video':
                case 'audio':
                  for (o = 0; o < Gr.length; o++) Kr(Gr[o], r)
                  break
                case 'source':
                  Kr('error', r)
                  break
                case 'img':
                case 'image':
                case 'link':
                  Kr('error', r), Kr('load', r)
                  break
                case 'details':
                  Kr('toggle', r)
                  break
                case 'input':
                  se(r, i), Kr('invalid', r)
                  break
                case 'select':
                  ;(r._wrapperState = { wasMultiple: !!i.multiple }),
                    Kr('invalid', r)
                  break
                case 'textarea':
                  ye(r, i), Kr('invalid', r)
              }
              for (var a in (Re(n, i), (o = null), i))
                if (i.hasOwnProperty(a)) {
                  var l = i[a]
                  'children' === a
                    ? 'string' == typeof l
                      ? r.textContent !== l &&
                        (!0 !== i.suppressHydrationWarning &&
                          fo(r.textContent, l, e),
                        (o = ['children', l]))
                      : 'number' == typeof l &&
                        r.textContent !== '' + l &&
                        (!0 !== i.suppressHydrationWarning &&
                          fo(r.textContent, l, e),
                        (o = ['children', '' + l]))
                    : w.hasOwnProperty(a) &&
                      null != l &&
                      'onScroll' === a &&
                      Kr('scroll', r)
                }
              switch (n) {
                case 'input':
                  ie(r), pe(r, i, !0)
                  break
                case 'textarea':
                  ie(r), be(r)
                  break
                case 'select':
                case 'option':
                  break
                default:
                  'function' == typeof i.onClick && (r.onclick = po)
              }
              ;(r = o), (t.updateQueue = r), null !== r && (t.flags |= 4)
            } else {
              ;(a = 9 === o.nodeType ? o : o.ownerDocument),
                'http://www.w3.org/1999/xhtml' === e && (e = we(n)),
                'http://www.w3.org/1999/xhtml' === e
                  ? 'script' === n
                    ? (((e = a.createElement('div')).innerHTML =
                        '<script></script>'),
                      (e = e.removeChild(e.firstChild)))
                    : 'string' == typeof r.is
                      ? (e = a.createElement(n, { is: r.is }))
                      : ((e = a.createElement(n)),
                        'select' === n &&
                          ((a = e),
                          r.multiple
                            ? (a.multiple = !0)
                            : r.size && (a.size = r.size)))
                  : (e = a.createElementNS(e, n)),
                (e[Oo] = t),
                (e[Ao] = r),
                Wl(e, t),
                (t.stateNode = e)
              e: {
                switch (((a = Fe(n, r)), n)) {
                  case 'dialog':
                    Kr('cancel', e), Kr('close', e), (o = r)
                    break
                  case 'iframe':
                  case 'object':
                  case 'embed':
                    Kr('load', e), (o = r)
                    break
                  case 'video':
                  case 'audio':
                    for (o = 0; o < Gr.length; o++) Kr(Gr[o], e)
                    o = r
                    break
                  case 'source':
                    Kr('error', e), (o = r)
                    break
                  case 'img':
                  case 'image':
                  case 'link':
                    Kr('error', e), Kr('load', e), (o = r)
                    break
                  case 'details':
                    Kr('toggle', e), (o = r)
                    break
                  case 'input':
                    se(e, r), (o = ue(e, r)), Kr('invalid', e)
                    break
                  case 'option':
                  default:
                    o = r
                    break
                  case 'select':
                    ;(e._wrapperState = { wasMultiple: !!r.multiple }),
                      (o = X({}, r, { value: void 0 })),
                      Kr('invalid', e)
                    break
                  case 'textarea':
                    ye(e, r), (o = me(e, r)), Kr('invalid', e)
                }
                for (i in (Re(n, o), (l = o)))
                  if (l.hasOwnProperty(i)) {
                    var u = l[i]
                    'style' === i
                      ? Te(e, u)
                      : 'dangerouslySetInnerHTML' === i
                        ? null != (u = u ? u.__html : void 0) && Ee(e, u)
                        : 'children' === i
                          ? 'string' == typeof u
                            ? ('textarea' !== n || '' !== u) && Ce(e, u)
                            : 'number' == typeof u && Ce(e, '' + u)
                          : 'suppressContentEditableWarning' !== i &&
                            'suppressHydrationWarning' !== i &&
                            'autoFocus' !== i &&
                            (w.hasOwnProperty(i)
                              ? null != u && 'onScroll' === i && Kr('scroll', e)
                              : null != u && F(e, i, u, a))
                  }
                switch (n) {
                  case 'input':
                    ie(e), pe(e, r, !1)
                    break
                  case 'textarea':
                    ie(e), be(e)
                    break
                  case 'option':
                    null != r.value && e.setAttribute('value', '' + re(r.value))
                    break
                  case 'select':
                    ;(e.multiple = !!r.multiple),
                      null != (i = r.value)
                        ? ge(e, !!r.multiple, i, !1)
                        : null != r.defaultValue &&
                          ge(e, !!r.multiple, r.defaultValue, !0)
                    break
                  default:
                    'function' == typeof o.onClick && (e.onclick = po)
                }
                switch (n) {
                  case 'button':
                  case 'input':
                  case 'select':
                  case 'textarea':
                    r = !!r.autoFocus
                    break e
                  case 'img':
                    r = !0
                    break e
                  default:
                    r = !1
                }
              }
              r && (t.flags |= 4)
            }
            null !== t.ref && ((t.flags |= 512), (t.flags |= 2097152))
          }
          return iu(t), null
        case 6:
          if (e && null != t.stateNode) Ql(0, t, e.memoizedProps, r)
          else {
            if ('string' != typeof r && null === t.stateNode)
              throw Error(v(166))
            if (((n = ma(ga.current)), ma(da.current), Ci(t))) {
              if (
                ((r = t.stateNode),
                (n = t.memoizedProps),
                (r[Oo] = t),
                (i = r.nodeValue !== n) && null !== (e = mi))
              )
                switch (e.tag) {
                  case 3:
                    fo(r.nodeValue, n, 0 != (1 & e.mode))
                    break
                  case 5:
                    !0 !== e.memoizedProps.suppressHydrationWarning &&
                      fo(r.nodeValue, n, 0 != (1 & e.mode))
                }
              i && (t.flags |= 4)
            } else
              ((r = (9 === n.nodeType ? n : n.ownerDocument).createTextNode(r))[
                Oo
              ] = t),
                (t.stateNode = r)
          }
          return iu(t), null
        case 13:
          if (
            (zo(xa),
            (r = t.memoizedState),
            null === e ||
              (null !== e.memoizedState && null !== e.memoizedState.dehydrated))
          ) {
            if (vi && null !== yi && 0 != (1 & t.mode) && 0 == (128 & t.flags))
              Oi(), Ai(), (t.flags |= 98560), (i = !1)
            else if (((i = Ci(t)), null !== r && null !== r.dehydrated)) {
              if (null === e) {
                if (!i) throw Error(v(318))
                if (!(i = null !== (i = t.memoizedState) ? i.dehydrated : null))
                  throw Error(v(317))
                i[Oo] = t
              } else
                Ai(),
                  0 == (128 & t.flags) && (t.memoizedState = null),
                  (t.flags |= 4)
              iu(t), (i = !1)
            } else null !== bi && (bs(bi), (bi = null)), (i = !0)
            if (!i) return 65536 & t.flags ? t : null
          }
          return 0 != (128 & t.flags)
            ? ((t.lanes = n), t)
            : ((r = null !== r) !== (null !== e && null !== e.memoizedState) &&
                r &&
                ((t.child.flags |= 8192),
                0 != (1 & t.mode) &&
                  (null === e || 0 != (1 & xa.current)
                    ? 0 === Qu && (Qu = 3)
                    : Ps())),
              null !== t.updateQueue && (t.flags |= 4),
              iu(t),
              null)
        case 4:
          return va(), null === e && to(t.stateNode.containerInfo), iu(t), null
        case 10:
          return Ni(t.type._context), iu(t), null
        case 19:
          if ((zo(xa), null === (i = t.memoizedState))) return iu(t), null
          if (((r = 0 != (128 & t.flags)), null === (a = i.rendering)))
            if (r) ou(i, !1)
            else {
              if (0 !== Qu || (null !== e && 0 != (128 & e.flags)))
                for (e = t.child; null !== e; ) {
                  if (null !== (a = ka(e))) {
                    for (
                      t.flags |= 128,
                        ou(i, !1),
                        null !== (r = a.updateQueue) &&
                          ((t.updateQueue = r), (t.flags |= 4)),
                        t.subtreeFlags = 0,
                        r = n,
                        n = t.child;
                      null !== n;

                    )
                      (e = r),
                        ((i = n).flags &= 14680066),
                        null === (a = i.alternate)
                          ? ((i.childLanes = 0),
                            (i.lanes = e),
                            (i.child = null),
                            (i.subtreeFlags = 0),
                            (i.memoizedProps = null),
                            (i.memoizedState = null),
                            (i.updateQueue = null),
                            (i.dependencies = null),
                            (i.stateNode = null))
                          : ((i.childLanes = a.childLanes),
                            (i.lanes = a.lanes),
                            (i.child = a.child),
                            (i.subtreeFlags = 0),
                            (i.deletions = null),
                            (i.memoizedProps = a.memoizedProps),
                            (i.memoizedState = a.memoizedState),
                            (i.updateQueue = a.updateQueue),
                            (i.type = a.type),
                            (e = a.dependencies),
                            (i.dependencies =
                              null === e
                                ? null
                                : {
                                    lanes: e.lanes,
                                    firstContext: e.firstContext,
                                  })),
                        (n = n.sibling)
                    return Mo(xa, (1 & xa.current) | 2), t.child
                  }
                  e = e.sibling
                }
              null !== i.tail &&
                ct() > ts &&
                ((t.flags |= 128), (r = !0), ou(i, !1), (t.lanes = 4194304))
            }
          else {
            if (!r)
              if (null !== (e = ka(a))) {
                if (
                  ((t.flags |= 128),
                  (r = !0),
                  null !== (n = e.updateQueue) &&
                    ((t.updateQueue = n), (t.flags |= 4)),
                  ou(i, !0),
                  null === i.tail &&
                    'hidden' === i.tailMode &&
                    !a.alternate &&
                    !vi)
                )
                  return iu(t), null
              } else
                2 * ct() - i.renderingStartTime > ts &&
                  1073741824 !== n &&
                  ((t.flags |= 128), (r = !0), ou(i, !1), (t.lanes = 4194304))
            i.isBackwards
              ? ((a.sibling = t.child), (t.child = a))
              : (null !== (n = i.last) ? (n.sibling = a) : (t.child = a),
                (i.last = a))
          }
          return null !== i.tail
            ? ((t = i.tail),
              (i.rendering = t),
              (i.tail = t.sibling),
              (i.renderingStartTime = ct()),
              (t.sibling = null),
              (n = xa.current),
              Mo(xa, r ? (1 & n) | 2 : 1 & n),
              t)
            : (iu(t), null)
        case 22:
        case 23:
          return (
            Es(),
            (r = null !== t.memoizedState),
            null !== e && (null !== e.memoizedState) !== r && (t.flags |= 8192),
            r && 0 != (1 & t.mode)
              ? 0 != (1073741824 & Wu) &&
                (iu(t), 6 & t.subtreeFlags && (t.flags |= 8192))
              : iu(t),
            null
          )
        case 24:
        case 25:
          return null
      }
      throw Error(v(156, t.tag))
    }
    function lu(e, t) {
      switch ((gi(t), t.tag)) {
        case 1:
          return (
            $o(t.type) && Qo(),
            65536 & (e = t.flags) ? ((t.flags = (-65537 & e) | 128), t) : null
          )
        case 3:
          return (
            va(),
            zo(Vo),
            zo(qo),
            Ea(),
            0 != (65536 & (e = t.flags)) && 0 == (128 & e)
              ? ((t.flags = (-65537 & e) | 128), t)
              : null
          )
        case 5:
          return wa(t), null
        case 13:
          if (
            (zo(xa), null !== (e = t.memoizedState) && null !== e.dehydrated)
          ) {
            if (null === t.alternate) throw Error(v(340))
            Ai()
          }
          return 65536 & (e = t.flags)
            ? ((t.flags = (-65537 & e) | 128), t)
            : null
        case 19:
          return zo(xa), null
        case 4:
          return va(), null
        case 10:
          return Ni(t.type._context), null
        case 22:
        case 23:
          return Es(), null
        default:
          return null
      }
    }
    ;(Wl = function (e, t) {
      for (var n = t.child; null !== n; ) {
        if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode)
        else if (4 !== n.tag && null !== n.child) {
          ;(n.child.return = n), (n = n.child)
          continue
        }
        if (n === t) break
        for (; null === n.sibling; ) {
          if (null === n.return || n.return === t) return
          n = n.return
        }
        ;(n.sibling.return = n.return), (n = n.sibling)
      }
    }),
      ($l = function (e, t, n, r) {
        var o = e.memoizedProps
        if (o !== r) {
          ;(e = t.stateNode), ma(da.current)
          var i,
            a = null
          switch (n) {
            case 'input':
              ;(o = ue(e, o)), (r = ue(e, r)), (a = [])
              break
            case 'select':
              ;(o = X({}, o, { value: void 0 })),
                (r = X({}, r, { value: void 0 })),
                (a = [])
              break
            case 'textarea':
              ;(o = me(e, o)), (r = me(e, r)), (a = [])
              break
            default:
              'function' != typeof o.onClick &&
                'function' == typeof r.onClick &&
                (e.onclick = po)
          }
          for (s in (Re(n, r), (n = null), o))
            if (!r.hasOwnProperty(s) && o.hasOwnProperty(s) && null != o[s])
              if ('style' === s) {
                var l = o[s]
                for (i in l) l.hasOwnProperty(i) && (n || (n = {}), (n[i] = ''))
              } else
                'dangerouslySetInnerHTML' !== s &&
                  'children' !== s &&
                  'suppressContentEditableWarning' !== s &&
                  'suppressHydrationWarning' !== s &&
                  'autoFocus' !== s &&
                  (w.hasOwnProperty(s)
                    ? a || (a = [])
                    : (a = a || []).push(s, null))
          for (s in r) {
            var u = r[s]
            if (
              ((l = null != o ? o[s] : void 0),
              r.hasOwnProperty(s) && u !== l && (null != u || null != l))
            )
              if ('style' === s)
                if (l) {
                  for (i in l)
                    !l.hasOwnProperty(i) ||
                      (u && u.hasOwnProperty(i)) ||
                      (n || (n = {}), (n[i] = ''))
                  for (i in u)
                    u.hasOwnProperty(i) &&
                      l[i] !== u[i] &&
                      (n || (n = {}), (n[i] = u[i]))
                } else n || (a || (a = []), a.push(s, n)), (n = u)
              else
                'dangerouslySetInnerHTML' === s
                  ? ((u = u ? u.__html : void 0),
                    (l = l ? l.__html : void 0),
                    null != u && l !== u && (a = a || []).push(s, u))
                  : 'children' === s
                    ? ('string' != typeof u && 'number' != typeof u) ||
                      (a = a || []).push(s, '' + u)
                    : 'suppressContentEditableWarning' !== s &&
                      'suppressHydrationWarning' !== s &&
                      (w.hasOwnProperty(s)
                        ? (null != u && 'onScroll' === s && Kr('scroll', e),
                          a || l === u || (a = []))
                        : (a = a || []).push(s, u))
          }
          n && (a = a || []).push('style', n)
          var s = a
          ;(t.updateQueue = s) && (t.flags |= 4)
        }
      }),
      (Ql = function (e, t, n, r) {
        n !== r && (t.flags |= 4)
      })
    var uu = !1,
      su = !1,
      cu = 'function' == typeof WeakSet ? WeakSet : Set,
      fu = null
    function pu(e, t) {
      var n = e.ref
      if (null !== n)
        if ('function' == typeof n)
          try {
            n(null)
          } catch (n) {
            Is(e, t, n)
          }
        else n.current = null
    }
    function du(e, t, n) {
      try {
        n()
      } catch (n) {
        Is(e, t, n)
      }
    }
    var hu = !1
    function gu(e, t, n) {
      var r = t.updateQueue
      if (null !== (r = null !== r ? r.lastEffect : null)) {
        var o = (r = r.next)
        do {
          if ((o.tag & e) === e) {
            var i = o.destroy
            ;(o.destroy = void 0), void 0 !== i && du(t, n, i)
          }
          o = o.next
        } while (o !== r)
      }
    }
    function mu(e, t) {
      if (null !== (t = null !== (t = t.updateQueue) ? t.lastEffect : null)) {
        var n = (t = t.next)
        do {
          if ((n.tag & e) === e) {
            var r = n.create
            n.destroy = r()
          }
          n = n.next
        } while (n !== t)
      }
    }
    function yu(e) {
      var t = e.ref
      if (null !== t) {
        var n = e.stateNode
        e.tag, (e = n), 'function' == typeof t ? t(e) : (t.current = e)
      }
    }
    function vu(e) {
      var t = e.alternate
      null !== t && ((e.alternate = null), vu(t)),
        (e.child = null),
        (e.deletions = null),
        (e.sibling = null),
        5 === e.tag &&
          null !== (t = e.stateNode) &&
          (delete t[Oo],
          delete t[Ao],
          delete t[To],
          delete t[Lo],
          delete t[Ro]),
        (e.stateNode = null),
        (e.return = null),
        (e.dependencies = null),
        (e.memoizedProps = null),
        (e.memoizedState = null),
        (e.pendingProps = null),
        (e.stateNode = null),
        (e.updateQueue = null)
    }
    function bu(e) {
      return 5 === e.tag || 3 === e.tag || 4 === e.tag
    }
    function wu(e) {
      e: for (;;) {
        for (; null === e.sibling; ) {
          if (null === e.return || bu(e.return)) return null
          e = e.return
        }
        for (
          e.sibling.return = e.return, e = e.sibling;
          5 !== e.tag && 6 !== e.tag && 18 !== e.tag;

        ) {
          if (2 & e.flags) continue e
          if (null === e.child || 4 === e.tag) continue e
          ;(e.child.return = e), (e = e.child)
        }
        if (!(2 & e.flags)) return e.stateNode
      }
    }
    function xu(e, t, n) {
      var r = e.tag
      if (5 === r || 6 === r)
        (e = e.stateNode),
          t
            ? 8 === n.nodeType
              ? n.parentNode.insertBefore(e, t)
              : n.insertBefore(e, t)
            : (8 === n.nodeType
                ? (t = n.parentNode).insertBefore(e, n)
                : (t = n).appendChild(e),
              null != (n = n._reactRootContainer) ||
                null !== t.onclick ||
                (t.onclick = po))
      else if (4 !== r && null !== (e = e.child))
        for (xu(e, t, n), e = e.sibling; null !== e; )
          xu(e, t, n), (e = e.sibling)
    }
    function ku(e, t, n) {
      var r = e.tag
      if (5 === r || 6 === r)
        (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e)
      else if (4 !== r && null !== (e = e.child))
        for (ku(e, t, n), e = e.sibling; null !== e; )
          ku(e, t, n), (e = e.sibling)
    }
    var Su = null,
      Eu = !1
    function Cu(e, t, n) {
      for (n = n.child; null !== n; ) Ou(e, t, n), (n = n.sibling)
    }
    function Ou(e, t, n) {
      if (vt && 'function' == typeof vt.onCommitFiberUnmount)
        try {
          vt.onCommitFiberUnmount(yt, n)
        } catch (e) {}
      switch (n.tag) {
        case 5:
          su || pu(n, t)
        case 6:
          var r = Su,
            o = Eu
          ;(Su = null),
            Cu(e, t, n),
            (Eu = o),
            null !== (Su = r) &&
              (Eu
                ? ((e = Su),
                  (n = n.stateNode),
                  8 === e.nodeType
                    ? e.parentNode.removeChild(n)
                    : e.removeChild(n))
                : Su.removeChild(n.stateNode))
          break
        case 18:
          null !== Su &&
            (Eu
              ? ((e = Su),
                (n = n.stateNode),
                8 === e.nodeType
                  ? ko(e.parentNode, n)
                  : 1 === e.nodeType && ko(e, n),
                tn(e))
              : ko(Su, n.stateNode))
          break
        case 4:
          ;(r = Su),
            (o = Eu),
            (Su = n.stateNode.containerInfo),
            (Eu = !0),
            Cu(e, t, n),
            (Su = r),
            (Eu = o)
          break
        case 0:
        case 11:
        case 14:
        case 15:
          if (
            !su &&
            null !== (r = n.updateQueue) &&
            null !== (r = r.lastEffect)
          ) {
            o = r = r.next
            do {
              var i = o,
                a = i.destroy
              ;(i = i.tag),
                void 0 !== a && (0 != (2 & i) || 0 != (4 & i)) && du(n, t, a),
                (o = o.next)
            } while (o !== r)
          }
          Cu(e, t, n)
          break
        case 1:
          if (
            !su &&
            (pu(n, t),
            'function' == typeof (r = n.stateNode).componentWillUnmount)
          )
            try {
              ;(r.props = n.memoizedProps),
                (r.state = n.memoizedState),
                r.componentWillUnmount()
            } catch (e) {
              Is(n, t, e)
            }
          Cu(e, t, n)
          break
        case 21:
          Cu(e, t, n)
          break
        case 22:
          1 & n.mode
            ? ((su = (r = su) || null !== n.memoizedState),
              Cu(e, t, n),
              (su = r))
            : Cu(e, t, n)
          break
        default:
          Cu(e, t, n)
      }
    }
    function Au(e) {
      var t = e.updateQueue
      if (null !== t) {
        e.updateQueue = null
        var n = e.stateNode
        null === n && (n = e.stateNode = new cu()),
          t.forEach(function (t) {
            var r = Us.bind(null, e, t)
            n.has(t) || (n.add(t), t.then(r, r))
          })
      }
    }
    function Pu(e, t) {
      var n = t.deletions
      if (null !== n)
        for (var r = 0; r < n.length; r++) {
          var o = n[r]
          try {
            var i = e,
              a = t,
              l = a
            e: for (; null !== l; ) {
              switch (l.tag) {
                case 5:
                  ;(Su = l.stateNode), (Eu = !1)
                  break e
                case 3:
                case 4:
                  ;(Su = l.stateNode.containerInfo), (Eu = !0)
                  break e
              }
              l = l.return
            }
            if (null === Su) throw Error(v(160))
            Ou(i, a, o), (Su = null), (Eu = !1)
            var u = o.alternate
            null !== u && (u.return = null), (o.return = null)
          } catch (e) {
            Is(o, t, e)
          }
        }
      if (12854 & t.subtreeFlags)
        for (t = t.child; null !== t; ) Tu(t, e), (t = t.sibling)
    }
    function Tu(e, t) {
      var n = e.alternate,
        r = e.flags
      switch (e.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          if ((Pu(t, e), Lu(e), 4 & r)) {
            try {
              gu(3, e, e.return), mu(3, e)
            } catch (t) {
              Is(e, e.return, t)
            }
            try {
              gu(5, e, e.return)
            } catch (t) {
              Is(e, e.return, t)
            }
          }
          break
        case 1:
          Pu(t, e), Lu(e), 512 & r && null !== n && pu(n, n.return)
          break
        case 5:
          if (
            (Pu(t, e),
            Lu(e),
            512 & r && null !== n && pu(n, n.return),
            32 & e.flags)
          ) {
            var o = e.stateNode
            try {
              Ce(o, '')
            } catch (t) {
              Is(e, e.return, t)
            }
          }
          if (4 & r && null != (o = e.stateNode)) {
            var i = e.memoizedProps,
              a = null !== n ? n.memoizedProps : i,
              l = e.type,
              u = e.updateQueue
            if (((e.updateQueue = null), null !== u))
              try {
                'input' === l &&
                  'radio' === i.type &&
                  null != i.name &&
                  ce(o, i),
                  Fe(l, a)
                var s = Fe(l, i)
                for (a = 0; a < u.length; a += 2) {
                  var c = u[a],
                    f = u[a + 1]
                  'style' === c
                    ? Te(o, f)
                    : 'dangerouslySetInnerHTML' === c
                      ? Ee(o, f)
                      : 'children' === c
                        ? Ce(o, f)
                        : F(o, c, f, s)
                }
                switch (l) {
                  case 'input':
                    fe(o, i)
                    break
                  case 'textarea':
                    ve(o, i)
                    break
                  case 'select':
                    var p = o._wrapperState.wasMultiple
                    o._wrapperState.wasMultiple = !!i.multiple
                    var d = i.value
                    null != d
                      ? ge(o, !!i.multiple, d, !1)
                      : p !== !!i.multiple &&
                        (null != i.defaultValue
                          ? ge(o, !!i.multiple, i.defaultValue, !0)
                          : ge(o, !!i.multiple, i.multiple ? [] : '', !1))
                }
                o[Ao] = i
              } catch (t) {
                Is(e, e.return, t)
              }
          }
          break
        case 6:
          if ((Pu(t, e), Lu(e), 4 & r)) {
            if (null === e.stateNode) throw Error(v(162))
            ;(o = e.stateNode), (i = e.memoizedProps)
            try {
              o.nodeValue = i
            } catch (t) {
              Is(e, e.return, t)
            }
          }
          break
        case 3:
          if (
            (Pu(t, e),
            Lu(e),
            4 & r && null !== n && n.memoizedState.isDehydrated)
          )
            try {
              tn(t.containerInfo)
            } catch (t) {
              Is(e, e.return, t)
            }
          break
        case 4:
        default:
          Pu(t, e), Lu(e)
          break
        case 13:
          Pu(t, e),
            Lu(e),
            8192 & (o = e.child).flags &&
              ((i = null !== o.memoizedState),
              (o.stateNode.isHidden = i),
              !i ||
                (null !== o.alternate && null !== o.alternate.memoizedState) ||
                (es = ct())),
            4 & r && Au(e)
          break
        case 22:
          if (
            ((c = null !== n && null !== n.memoizedState),
            1 & e.mode ? ((su = (s = su) || c), Pu(t, e), (su = s)) : Pu(t, e),
            Lu(e),
            8192 & r)
          ) {
            if (
              ((s = null !== e.memoizedState),
              (e.stateNode.isHidden = s) && !c && 0 != (1 & e.mode))
            )
              for (fu = e, c = e.child; null !== c; ) {
                for (f = fu = c; null !== fu; ) {
                  switch (((d = (p = fu).child), p.tag)) {
                    case 0:
                    case 11:
                    case 14:
                    case 15:
                      gu(4, p, p.return)
                      break
                    case 1:
                      pu(p, p.return)
                      var h = p.stateNode
                      if ('function' == typeof h.componentWillUnmount) {
                        ;(r = p), (n = p.return)
                        try {
                          ;(t = r),
                            (h.props = t.memoizedProps),
                            (h.state = t.memoizedState),
                            h.componentWillUnmount()
                        } catch (e) {
                          Is(r, n, e)
                        }
                      }
                      break
                    case 5:
                      pu(p, p.return)
                      break
                    case 22:
                      if (null !== p.memoizedState) {
                        Du(f)
                        continue
                      }
                  }
                  null !== d ? ((d.return = p), (fu = d)) : Du(f)
                }
                c = c.sibling
              }
            e: for (c = null, f = e; ; ) {
              if (5 === f.tag) {
                if (null === c) {
                  c = f
                  try {
                    ;(o = f.stateNode),
                      s
                        ? 'function' == typeof (i = o.style).setProperty
                          ? i.setProperty('display', 'none', 'important')
                          : (i.display = 'none')
                        : ((l = f.stateNode),
                          (a =
                            null != (u = f.memoizedProps.style) &&
                            u.hasOwnProperty('display')
                              ? u.display
                              : null),
                          (l.style.display = Pe('display', a)))
                  } catch (t) {
                    Is(e, e.return, t)
                  }
                }
              } else if (6 === f.tag) {
                if (null === c)
                  try {
                    f.stateNode.nodeValue = s ? '' : f.memoizedProps
                  } catch (t) {
                    Is(e, e.return, t)
                  }
              } else if (
                ((22 !== f.tag && 23 !== f.tag) ||
                  null === f.memoizedState ||
                  f === e) &&
                null !== f.child
              ) {
                ;(f.child.return = f), (f = f.child)
                continue
              }
              if (f === e) break e
              for (; null === f.sibling; ) {
                if (null === f.return || f.return === e) break e
                c === f && (c = null), (f = f.return)
              }
              c === f && (c = null),
                (f.sibling.return = f.return),
                (f = f.sibling)
            }
          }
          break
        case 19:
          Pu(t, e), Lu(e), 4 & r && Au(e)
        case 21:
      }
    }
    function Lu(e) {
      var t = e.flags
      if (2 & t) {
        try {
          e: {
            for (var n = e.return; null !== n; ) {
              if (bu(n)) {
                var r = n
                break e
              }
              n = n.return
            }
            throw Error(v(160))
          }
          switch (r.tag) {
            case 5:
              var o = r.stateNode
              32 & r.flags && (Ce(o, ''), (r.flags &= -33)), ku(e, wu(e), o)
              break
            case 3:
            case 4:
              var i = r.stateNode.containerInfo
              xu(e, wu(e), i)
              break
            default:
              throw Error(v(161))
          }
        } catch (t) {
          Is(e, e.return, t)
        }
        e.flags &= -3
      }
      4096 & t && (e.flags &= -4097)
    }
    function Ru(e, t, n) {
      ;(fu = e), Fu(e, t, n)
    }
    function Fu(e, t, n) {
      for (var r = 0 != (1 & e.mode); null !== fu; ) {
        var o = fu,
          i = o.child
        if (22 === o.tag && r) {
          var a = null !== o.memoizedState || uu
          if (!a) {
            var l = o.alternate,
              u = (null !== l && null !== l.memoizedState) || su
            l = uu
            var s = su
            if (((uu = a), (su = u) && !s))
              for (fu = o; null !== fu; )
                (u = (a = fu).child),
                  22 === a.tag && null !== a.memoizedState
                    ? _u(o)
                    : null !== u
                      ? ((u.return = a), (fu = u))
                      : _u(o)
            for (; null !== i; ) (fu = i), Fu(i, t, n), (i = i.sibling)
            ;(fu = o), (uu = l), (su = s)
          }
          ju(e)
        } else
          0 != (8772 & o.subtreeFlags) && null !== i
            ? ((i.return = o), (fu = i))
            : ju(e)
      }
    }
    function ju(e) {
      for (; null !== fu; ) {
        var t = fu
        if (0 != (8772 & t.flags)) {
          var n = t.alternate
          try {
            if (0 != (8772 & t.flags))
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  su || mu(5, t)
                  break
                case 1:
                  var r = t.stateNode
                  if (4 & t.flags && !su)
                    if (null === n) r.componentDidMount()
                    else {
                      var o =
                        t.elementType === t.type
                          ? n.memoizedProps
                          : Li(t.type, n.memoizedProps)
                      r.componentDidUpdate(
                        o,
                        n.memoizedState,
                        r.__reactInternalSnapshotBeforeUpdate
                      )
                    }
                  var i = t.updateQueue
                  null !== i && Ki(t, i, r)
                  break
                case 3:
                  var a = t.updateQueue
                  if (null !== a) {
                    if (((n = null), null !== t.child))
                      switch (t.child.tag) {
                        case 5:
                        case 1:
                          n = t.child.stateNode
                      }
                    Ki(t, a, n)
                  }
                  break
                case 5:
                  var l = t.stateNode
                  if (null === n && 4 & t.flags) {
                    n = l
                    var u = t.memoizedProps
                    switch (t.type) {
                      case 'button':
                      case 'input':
                      case 'select':
                      case 'textarea':
                        u.autoFocus && n.focus()
                        break
                      case 'img':
                        u.src && (n.src = u.src)
                    }
                  }
                  break
                case 6:
                case 4:
                case 12:
                case 19:
                case 17:
                case 21:
                case 22:
                case 23:
                case 25:
                  break
                case 13:
                  if (null === t.memoizedState) {
                    var s = t.alternate
                    if (null !== s) {
                      var c = s.memoizedState
                      if (null !== c) {
                        var f = c.dehydrated
                        null !== f && tn(f)
                      }
                    }
                  }
                  break
                default:
                  throw Error(v(163))
              }
            su || (512 & t.flags && yu(t))
          } catch (e) {
            Is(t, t.return, e)
          }
        }
        if (t === e) {
          fu = null
          break
        }
        if (null !== (n = t.sibling)) {
          ;(n.return = t.return), (fu = n)
          break
        }
        fu = t.return
      }
    }
    function Du(e) {
      for (; null !== fu; ) {
        var t = fu
        if (t === e) {
          fu = null
          break
        }
        var n = t.sibling
        if (null !== n) {
          ;(n.return = t.return), (fu = n)
          break
        }
        fu = t.return
      }
    }
    function _u(e) {
      for (; null !== fu; ) {
        var t = fu
        try {
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              var n = t.return
              try {
                mu(4, t)
              } catch (e) {
                Is(t, n, e)
              }
              break
            case 1:
              var r = t.stateNode
              if ('function' == typeof r.componentDidMount) {
                var o = t.return
                try {
                  r.componentDidMount()
                } catch (e) {
                  Is(t, o, e)
                }
              }
              var i = t.return
              try {
                yu(t)
              } catch (e) {
                Is(t, i, e)
              }
              break
            case 5:
              var a = t.return
              try {
                yu(t)
              } catch (e) {
                Is(t, a, e)
              }
          }
        } catch (e) {
          Is(t, t.return, e)
        }
        if (t === e) {
          fu = null
          break
        }
        var l = t.sibling
        if (null !== l) {
          ;(l.return = t.return), (fu = l)
          break
        }
        fu = t.return
      }
    }
    var Nu,
      Iu = Math.ceil,
      Bu = j.ReactCurrentDispatcher,
      zu = j.ReactCurrentOwner,
      Mu = j.ReactCurrentBatchConfig,
      Uu = 0,
      qu = null,
      Vu = null,
      Hu = 0,
      Wu = 0,
      $u = Bo(0),
      Qu = 0,
      Gu = null,
      Ju = 0,
      Xu = 0,
      Yu = 0,
      Ku = null,
      Zu = null,
      es = 0,
      ts = 1 / 0,
      ns = null,
      rs = !1,
      os = null,
      is = null,
      as = !1,
      ls = null,
      us = 0,
      ss = 0,
      cs = null,
      fs = -1,
      ps = 0
    function ds() {
      return 0 != (6 & Uu) ? ct() : -1 !== fs ? fs : (fs = ct())
    }
    function hs(e) {
      return 0 == (1 & e.mode)
        ? 1
        : 0 != (2 & Uu) && 0 !== Hu
          ? Hu & -Hu
          : null !== Ti.transition
            ? (0 === ps && (ps = Pt()), ps)
            : 0 !== (e = Ft)
              ? e
              : (e = void 0 === (e = window.event) ? 16 : cn(e.type))
    }
    function gs(e, t, n, r) {
      if (50 < ss) throw ((ss = 0), (cs = null), Error(v(185)))
      Lt(e, n, r),
        (0 != (2 & Uu) && e === qu) ||
          (e === qu && (0 == (2 & Uu) && (Xu |= n), 4 === Qu && ws(e, Hu)),
          ms(e, r),
          1 === n &&
            0 === Uu &&
            0 == (1 & t.mode) &&
            ((ts = ct() + 500), Zo && ni()))
    }
    function ms(e, t) {
      var n = e.callbackNode
      !(function (e, t) {
        for (
          var n = e.suspendedLanes,
            r = e.pingedLanes,
            o = e.expirationTimes,
            i = e.pendingLanes;
          0 < i;

        ) {
          var a = 31 - bt(i),
            l = 1 << a,
            u = o[a]
          ;-1 === u
            ? (0 != (l & n) && 0 == (l & r)) || (o[a] = Ot(l, t))
            : u <= t && (e.expiredLanes |= l),
            (i &= ~l)
        }
      })(e, t)
      var r = Ct(e, e === qu ? Hu : 0)
      if (0 === r)
        null !== n && lt(n), (e.callbackNode = null), (e.callbackPriority = 0)
      else if (((t = r & -r), e.callbackPriority !== t)) {
        if ((null != n && lt(n), 1 === t))
          0 === e.tag
            ? (function (e) {
                ;(Zo = !0), ti(e)
              })(xs.bind(null, e))
            : ti(xs.bind(null, e)),
            wo(function () {
              0 == (6 & Uu) && ni()
            }),
            (n = null)
        else {
          switch (jt(r)) {
            case 1:
              n = pt
              break
            case 4:
              n = dt
              break
            case 16:
            default:
              n = ht
              break
            case 536870912:
              n = mt
          }
          n = qs(n, ys.bind(null, e))
        }
        ;(e.callbackPriority = t), (e.callbackNode = n)
      }
    }
    function ys(e, t) {
      if (((fs = -1), (ps = 0), 0 != (6 & Uu))) throw Error(v(327))
      var n = e.callbackNode
      if (_s() && e.callbackNode !== n) return null
      var r = Ct(e, e === qu ? Hu : 0)
      if (0 === r) return null
      if (0 != (30 & r) || 0 != (r & e.expiredLanes) || t) t = Ts(e, r)
      else {
        t = r
        var o = Uu
        Uu |= 2
        var i = As()
        for (
          (qu === e && Hu === t) || ((ns = null), (ts = ct() + 500), Cs(e, t));
          ;

        )
          try {
            Rs()
            break
          } catch (t) {
            Os(e, t)
          }
        _i(),
          (Bu.current = i),
          (Uu = o),
          null !== Vu ? (t = 0) : ((qu = null), (Hu = 0), (t = Qu))
      }
      if (0 !== t) {
        if (
          (2 === t && 0 !== (o = At(e)) && ((r = o), (t = vs(e, o))), 1 === t)
        )
          throw ((n = Gu), Cs(e, 0), ws(e, r), ms(e, ct()), n)
        if (6 === t) ws(e, r)
        else {
          if (
            ((o = e.current.alternate),
            0 == (30 & r) &&
              !(function (e) {
                for (var t = e; ; ) {
                  if (16384 & t.flags) {
                    var n = t.updateQueue
                    if (null !== n && null !== (n = n.stores))
                      for (var r = 0; r < n.length; r++) {
                        var o = n[r],
                          i = o.getSnapshot
                        o = o.value
                        try {
                          if (!wr(i(), o)) return !1
                        } catch (e) {
                          return !1
                        }
                      }
                  }
                  if (((n = t.child), 16384 & t.subtreeFlags && null !== n))
                    (n.return = t), (t = n)
                  else {
                    if (t === e) break
                    for (; null === t.sibling; ) {
                      if (null === t.return || t.return === e) return !0
                      t = t.return
                    }
                    ;(t.sibling.return = t.return), (t = t.sibling)
                  }
                }
                return !0
              })(o) &&
              (2 === (t = Ts(e, r)) &&
                0 !== (i = At(e)) &&
                ((r = i), (t = vs(e, i))),
              1 === t))
          )
            throw ((n = Gu), Cs(e, 0), ws(e, r), ms(e, ct()), n)
          switch (((e.finishedWork = o), (e.finishedLanes = r), t)) {
            case 0:
            case 1:
              throw Error(v(345))
            case 2:
            case 5:
              Ds(e, Zu, ns)
              break
            case 3:
              if (
                (ws(e, r), (130023424 & r) === r && 10 < (t = es + 500 - ct()))
              ) {
                if (0 !== Ct(e, 0)) break
                if (((o = e.suspendedLanes) & r) !== r) {
                  ds(), (e.pingedLanes |= e.suspendedLanes & o)
                  break
                }
                e.timeoutHandle = yo(Ds.bind(null, e, Zu, ns), t)
                break
              }
              Ds(e, Zu, ns)
              break
            case 4:
              if ((ws(e, r), (4194240 & r) === r)) break
              for (t = e.eventTimes, o = -1; 0 < r; ) {
                var a = 31 - bt(r)
                ;(i = 1 << a), (a = t[a]) > o && (o = a), (r &= ~i)
              }
              if (
                ((r = o),
                10 <
                  (r =
                    (120 > (r = ct() - r)
                      ? 120
                      : 480 > r
                        ? 480
                        : 1080 > r
                          ? 1080
                          : 1920 > r
                            ? 1920
                            : 3e3 > r
                              ? 3e3
                              : 4320 > r
                                ? 4320
                                : 1960 * Iu(r / 1960)) - r))
              ) {
                e.timeoutHandle = yo(Ds.bind(null, e, Zu, ns), r)
                break
              }
              Ds(e, Zu, ns)
              break
            default:
              throw Error(v(329))
          }
        }
      }
      return ms(e, ct()), e.callbackNode === n ? ys.bind(null, e) : null
    }
    function vs(e, t) {
      var n = Ku
      return (
        e.current.memoizedState.isDehydrated && (Cs(e, t).flags |= 256),
        2 !== (e = Ts(e, t)) && ((t = Zu), (Zu = n), null !== t && bs(t)),
        e
      )
    }
    function bs(e) {
      null === Zu ? (Zu = e) : Zu.push.apply(Zu, e)
    }
    function ws(e, t) {
      for (
        t &= ~Yu,
          t &= ~Xu,
          e.suspendedLanes |= t,
          e.pingedLanes &= ~t,
          e = e.expirationTimes;
        0 < t;

      ) {
        var n = 31 - bt(t),
          r = 1 << n
        ;(e[n] = -1), (t &= ~r)
      }
    }
    function xs(e) {
      if (0 != (6 & Uu)) throw Error(v(327))
      _s()
      var t = Ct(e, 0)
      if (0 == (1 & t)) return ms(e, ct()), null
      var n = Ts(e, t)
      if (0 !== e.tag && 2 === n) {
        var r = At(e)
        0 !== r && ((t = r), (n = vs(e, r)))
      }
      if (1 === n) throw ((n = Gu), Cs(e, 0), ws(e, t), ms(e, ct()), n)
      if (6 === n) throw Error(v(345))
      return (
        (e.finishedWork = e.current.alternate),
        (e.finishedLanes = t),
        Ds(e, Zu, ns),
        ms(e, ct()),
        null
      )
    }
    function ks(e, t) {
      var n = Uu
      Uu |= 1
      try {
        return e(t)
      } finally {
        0 === (Uu = n) && ((ts = ct() + 500), Zo && ni())
      }
    }
    function Ss(e) {
      null !== ls && 0 === ls.tag && 0 == (6 & Uu) && _s()
      var t = Uu
      Uu |= 1
      var n = Mu.transition,
        r = Ft
      try {
        if (((Mu.transition = null), (Ft = 1), e)) return e()
      } finally {
        ;(Ft = r), (Mu.transition = n), 0 == (6 & (Uu = t)) && ni()
      }
    }
    function Es() {
      ;(Wu = $u.current), zo($u)
    }
    function Cs(e, t) {
      ;(e.finishedWork = null), (e.finishedLanes = 0)
      var n = e.timeoutHandle
      if ((-1 !== n && ((e.timeoutHandle = -1), vo(n)), null !== Vu))
        for (n = Vu.return; null !== n; ) {
          var r = n
          switch ((gi(r), r.tag)) {
            case 1:
              null != (r = r.type.childContextTypes) && Qo()
              break
            case 3:
              va(), zo(Vo), zo(qo), Ea()
              break
            case 5:
              wa(r)
              break
            case 4:
              va()
              break
            case 13:
            case 19:
              zo(xa)
              break
            case 10:
              Ni(r.type._context)
              break
            case 22:
            case 23:
              Es()
          }
          n = n.return
        }
      if (
        ((qu = e),
        (Vu = e = $s(e.current, null)),
        (Hu = Wu = t),
        (Qu = 0),
        (Gu = null),
        (Yu = Xu = Ju = 0),
        (Zu = Ku = null),
        null !== Mi)
      ) {
        for (t = 0; t < Mi.length; t++)
          if (null !== (r = (n = Mi[t]).interleaved)) {
            n.interleaved = null
            var o = r.next,
              i = n.pending
            if (null !== i) {
              var a = i.next
              ;(i.next = o), (r.next = a)
            }
            n.pending = r
          }
        Mi = null
      }
      return e
    }
    function Os(e, t) {
      for (;;) {
        var n = Vu
        try {
          if ((_i(), (Ca.current = bl), Ra)) {
            for (var r = Pa.memoizedState; null !== r; ) {
              var o = r.queue
              null !== o && (o.pending = null), (r = r.next)
            }
            Ra = !1
          }
          if (
            ((Aa = 0),
            (La = Ta = Pa = null),
            (Fa = !1),
            (ja = 0),
            (zu.current = null),
            null === n || null === n.return)
          ) {
            ;(Qu = 1), (Gu = t), (Vu = null)
            break
          }
          e: {
            var i = e,
              a = n.return,
              l = n,
              u = t
            if (
              ((t = Hu),
              (l.flags |= 32768),
              null !== u && 'object' == typeof u && 'function' == typeof u.then)
            ) {
              var s = u,
                c = l,
                f = c.tag
              if (0 == (1 & c.mode) && (0 === f || 11 === f || 15 === f)) {
                var p = c.alternate
                p
                  ? ((c.updateQueue = p.updateQueue),
                    (c.memoizedState = p.memoizedState),
                    (c.lanes = p.lanes))
                  : ((c.updateQueue = null), (c.memoizedState = null))
              }
              var d = Ll(a)
              if (null !== d) {
                ;(d.flags &= -257),
                  Rl(d, a, l, 0, t),
                  1 & d.mode && Tl(i, s, t),
                  (u = s)
                var h = (t = d).updateQueue
                if (null === h) {
                  var g = new Set()
                  g.add(u), (t.updateQueue = g)
                } else h.add(u)
                break e
              }
              if (0 == (1 & t)) {
                Tl(i, s, t), Ps()
                break e
              }
              u = Error(v(426))
            } else if (vi && 1 & l.mode) {
              var m = Ll(a)
              if (null !== m) {
                0 == (65536 & m.flags) && (m.flags |= 256),
                  Rl(m, a, l, 0, t),
                  Pi(Sl(u, l))
                break e
              }
            }
            ;(i = u = Sl(u, l)),
              4 !== Qu && (Qu = 2),
              null === Ku ? (Ku = [i]) : Ku.push(i),
              (i = a)
            do {
              switch (i.tag) {
                case 3:
                  ;(i.flags |= 65536),
                    (t &= -t),
                    (i.lanes |= t),
                    Xi(i, Al(0, u, t))
                  break e
                case 1:
                  l = u
                  var y = i.type,
                    b = i.stateNode
                  if (
                    0 == (128 & i.flags) &&
                    ('function' == typeof y.getDerivedStateFromError ||
                      (null !== b &&
                        'function' == typeof b.componentDidCatch &&
                        (null === is || !is.has(b))))
                  ) {
                    ;(i.flags |= 65536),
                      (t &= -t),
                      (i.lanes |= t),
                      Xi(i, Pl(i, l, t))
                    break e
                  }
              }
              i = i.return
            } while (null !== i)
          }
          js(n)
        } catch (e) {
          ;(t = e), Vu === n && null !== n && (Vu = n = n.return)
          continue
        }
        break
      }
    }
    function As() {
      var e = Bu.current
      return (Bu.current = bl), null === e ? bl : e
    }
    function Ps() {
      ;(0 !== Qu && 3 !== Qu && 2 !== Qu) || (Qu = 4),
        null === qu ||
          (0 == (268435455 & Ju) && 0 == (268435455 & Xu)) ||
          ws(qu, Hu)
    }
    function Ts(e, t) {
      var n = Uu
      Uu |= 2
      var r = As()
      for ((qu === e && Hu === t) || ((ns = null), Cs(e, t)); ; )
        try {
          Ls()
          break
        } catch (t) {
          Os(e, t)
        }
      if ((_i(), (Uu = n), (Bu.current = r), null !== Vu)) throw Error(v(261))
      return (qu = null), (Hu = 0), Qu
    }
    function Ls() {
      for (; null !== Vu; ) Fs(Vu)
    }
    function Rs() {
      for (; null !== Vu && !ut(); ) Fs(Vu)
    }
    function Fs(e) {
      var t = Nu(e.alternate, e, Wu)
      ;(e.memoizedProps = e.pendingProps),
        null === t ? js(e) : (Vu = t),
        (zu.current = null)
    }
    function js(e) {
      var t = e
      do {
        var n = t.alternate
        if (((e = t.return), 0 == (32768 & t.flags))) {
          if (null !== (n = au(n, t, Wu))) return void (Vu = n)
        } else {
          if (null !== (n = lu(n, t))) return (n.flags &= 32767), void (Vu = n)
          if (null === e) return (Qu = 6), void (Vu = null)
          ;(e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null)
        }
        if (null !== (t = t.sibling)) return void (Vu = t)
        Vu = t = e
      } while (null !== t)
      0 === Qu && (Qu = 5)
    }
    function Ds(e, t, n) {
      var r = Ft,
        o = Mu.transition
      try {
        ;(Mu.transition = null),
          (Ft = 1),
          (function (e, t, n, r) {
            do {
              _s()
            } while (null !== ls)
            if (0 != (6 & Uu)) throw Error(v(327))
            n = e.finishedWork
            var o = e.finishedLanes
            if (null === n) return null
            if (
              ((e.finishedWork = null), (e.finishedLanes = 0), n === e.current)
            )
              throw Error(v(177))
            ;(e.callbackNode = null), (e.callbackPriority = 0)
            var i = n.lanes | n.childLanes
            if (
              ((function (e, t) {
                var n = e.pendingLanes & ~t
                ;(e.pendingLanes = t),
                  (e.suspendedLanes = 0),
                  (e.pingedLanes = 0),
                  (e.expiredLanes &= t),
                  (e.mutableReadLanes &= t),
                  (e.entangledLanes &= t),
                  (t = e.entanglements)
                var r = e.eventTimes
                for (e = e.expirationTimes; 0 < n; ) {
                  var o = 31 - bt(n),
                    i = 1 << o
                  ;(t[o] = 0), (r[o] = -1), (e[o] = -1), (n &= ~i)
                }
              })(e, i),
              e === qu && ((Vu = qu = null), (Hu = 0)),
              (0 == (2064 & n.subtreeFlags) && 0 == (2064 & n.flags)) ||
                as ||
                ((as = !0),
                qs(ht, function () {
                  return _s(), null
                })),
              (i = 0 != (15990 & n.flags)),
              0 != (15990 & n.subtreeFlags) || i)
            ) {
              ;(i = Mu.transition), (Mu.transition = null)
              var a = Ft
              Ft = 1
              var l = Uu
              ;(Uu |= 4),
                (zu.current = null),
                (function (e, t) {
                  if (((ho = rn), Or((e = Cr())))) {
                    if ('selectionStart' in e)
                      var n = { start: e.selectionStart, end: e.selectionEnd }
                    else
                      e: {
                        var r =
                          (n =
                            ((n = e.ownerDocument) && n.defaultView) || window)
                            .getSelection && n.getSelection()
                        if (r && 0 !== r.rangeCount) {
                          n = r.anchorNode
                          var o = r.anchorOffset,
                            i = r.focusNode
                          r = r.focusOffset
                          try {
                            n.nodeType, i.nodeType
                          } catch (e) {
                            n = null
                            break e
                          }
                          var a = 0,
                            l = -1,
                            u = -1,
                            s = 0,
                            c = 0,
                            f = e,
                            p = null
                          t: for (;;) {
                            for (
                              var d;
                              f !== n ||
                                (0 !== o && 3 !== f.nodeType) ||
                                (l = a + o),
                                f !== i ||
                                  (0 !== r && 3 !== f.nodeType) ||
                                  (u = a + r),
                                3 === f.nodeType && (a += f.nodeValue.length),
                                null !== (d = f.firstChild);

                            )
                              (p = f), (f = d)
                            for (;;) {
                              if (f === e) break t
                              if (
                                (p === n && ++s === o && (l = a),
                                p === i && ++c === r && (u = a),
                                null !== (d = f.nextSibling))
                              )
                                break
                              p = (f = p).parentNode
                            }
                            f = d
                          }
                          n = -1 === l || -1 === u ? null : { start: l, end: u }
                        } else n = null
                      }
                    n = n || { start: 0, end: 0 }
                  } else n = null
                  for (
                    go = { focusedElem: e, selectionRange: n }, rn = !1, fu = t;
                    null !== fu;

                  )
                    if (
                      ((e = (t = fu).child),
                      0 != (1028 & t.subtreeFlags) && null !== e)
                    )
                      (e.return = t), (fu = e)
                    else
                      for (; null !== fu; ) {
                        t = fu
                        try {
                          var h = t.alternate
                          if (0 != (1024 & t.flags))
                            switch (t.tag) {
                              case 0:
                              case 11:
                              case 15:
                              case 5:
                              case 6:
                              case 4:
                              case 17:
                                break
                              case 1:
                                if (null !== h) {
                                  var g = h.memoizedProps,
                                    m = h.memoizedState,
                                    y = t.stateNode,
                                    b = y.getSnapshotBeforeUpdate(
                                      t.elementType === t.type
                                        ? g
                                        : Li(t.type, g),
                                      m
                                    )
                                  y.__reactInternalSnapshotBeforeUpdate = b
                                }
                                break
                              case 3:
                                var w = t.stateNode.containerInfo
                                1 === w.nodeType
                                  ? (w.textContent = '')
                                  : 9 === w.nodeType &&
                                    w.documentElement &&
                                    w.removeChild(w.documentElement)
                                break
                              default:
                                throw Error(v(163))
                            }
                        } catch (e) {
                          Is(t, t.return, e)
                        }
                        if (null !== (e = t.sibling)) {
                          ;(e.return = t.return), (fu = e)
                          break
                        }
                        fu = t.return
                      }
                  ;(h = hu), (hu = !1)
                })(e, n),
                Tu(n, e),
                Ar(go),
                (rn = !!ho),
                (go = ho = null),
                (e.current = n),
                Ru(n, e, o),
                st(),
                (Uu = l),
                (Ft = a),
                (Mu.transition = i)
            } else e.current = n
            if (
              (as && ((as = !1), (ls = e), (us = o)),
              (i = e.pendingLanes),
              0 === i && (is = null),
              (function (e) {
                if (vt && 'function' == typeof vt.onCommitFiberRoot)
                  try {
                    vt.onCommitFiberRoot(
                      yt,
                      e,
                      void 0,
                      128 == (128 & e.current.flags)
                    )
                  } catch (e) {}
              })(n.stateNode),
              ms(e, ct()),
              null !== t)
            )
              for (r = e.onRecoverableError, n = 0; n < t.length; n++)
                (o = t[n]),
                  r(o.value, { componentStack: o.stack, digest: o.digest })
            if (rs) throw ((rs = !1), (e = os), (os = null), e)
            0 != (1 & us) && 0 !== e.tag && _s(),
              (i = e.pendingLanes),
              0 != (1 & i)
                ? e === cs
                  ? ss++
                  : ((ss = 0), (cs = e))
                : (ss = 0),
              ni()
          })(e, t, n, r)
      } finally {
        ;(Mu.transition = o), (Ft = r)
      }
      return null
    }
    function _s() {
      if (null !== ls) {
        var e = jt(us),
          t = Mu.transition,
          n = Ft
        try {
          if (((Mu.transition = null), (Ft = 16 > e ? 16 : e), null === ls))
            var r = !1
          else {
            if (((e = ls), (ls = null), (us = 0), 0 != (6 & Uu)))
              throw Error(v(331))
            var o = Uu
            for (Uu |= 4, fu = e.current; null !== fu; ) {
              var i = fu,
                a = i.child
              if (0 != (16 & fu.flags)) {
                var l = i.deletions
                if (null !== l) {
                  for (var u = 0; u < l.length; u++) {
                    var s = l[u]
                    for (fu = s; null !== fu; ) {
                      var c = fu
                      switch (c.tag) {
                        case 0:
                        case 11:
                        case 15:
                          gu(8, c, i)
                      }
                      var f = c.child
                      if (null !== f) (f.return = c), (fu = f)
                      else
                        for (; null !== fu; ) {
                          var p = (c = fu).sibling,
                            d = c.return
                          if ((vu(c), c === s)) {
                            fu = null
                            break
                          }
                          if (null !== p) {
                            ;(p.return = d), (fu = p)
                            break
                          }
                          fu = d
                        }
                    }
                  }
                  var h = i.alternate
                  if (null !== h) {
                    var g = h.child
                    if (null !== g) {
                      h.child = null
                      do {
                        var m = g.sibling
                        ;(g.sibling = null), (g = m)
                      } while (null !== g)
                    }
                  }
                  fu = i
                }
              }
              if (0 != (2064 & i.subtreeFlags) && null !== a)
                (a.return = i), (fu = a)
              else
                e: for (; null !== fu; ) {
                  if (0 != (2048 & (i = fu).flags))
                    switch (i.tag) {
                      case 0:
                      case 11:
                      case 15:
                        gu(9, i, i.return)
                    }
                  var y = i.sibling
                  if (null !== y) {
                    ;(y.return = i.return), (fu = y)
                    break e
                  }
                  fu = i.return
                }
            }
            var b = e.current
            for (fu = b; null !== fu; ) {
              var w = (a = fu).child
              if (0 != (2064 & a.subtreeFlags) && null !== w)
                (w.return = a), (fu = w)
              else
                e: for (a = b; null !== fu; ) {
                  if (0 != (2048 & (l = fu).flags))
                    try {
                      switch (l.tag) {
                        case 0:
                        case 11:
                        case 15:
                          mu(9, l)
                      }
                    } catch (e) {
                      Is(l, l.return, e)
                    }
                  if (l === a) {
                    fu = null
                    break e
                  }
                  var x = l.sibling
                  if (null !== x) {
                    ;(x.return = l.return), (fu = x)
                    break e
                  }
                  fu = l.return
                }
            }
            if (
              ((Uu = o),
              ni(),
              vt && 'function' == typeof vt.onPostCommitFiberRoot)
            )
              try {
                vt.onPostCommitFiberRoot(yt, e)
              } catch (e) {}
            r = !0
          }
          return r
        } finally {
          ;(Ft = n), (Mu.transition = t)
        }
      }
      return !1
    }
    function Ns(e, t, n) {
      ;(e = Gi(e, (t = Al(0, (t = Sl(n, t)), 1)), 1)),
        (t = ds()),
        null !== e && (Lt(e, 1, t), ms(e, t))
    }
    function Is(e, t, n) {
      if (3 === e.tag) Ns(e, e, n)
      else
        for (; null !== t; ) {
          if (3 === t.tag) {
            Ns(t, e, n)
            break
          }
          if (1 === t.tag) {
            var r = t.stateNode
            if (
              'function' == typeof t.type.getDerivedStateFromError ||
              ('function' == typeof r.componentDidCatch &&
                (null === is || !is.has(r)))
            ) {
              ;(t = Gi(t, (e = Pl(t, (e = Sl(n, e)), 1)), 1)),
                (e = ds()),
                null !== t && (Lt(t, 1, e), ms(t, e))
              break
            }
          }
          t = t.return
        }
    }
    function Bs(e, t, n) {
      var r = e.pingCache
      null !== r && r.delete(t),
        (t = ds()),
        (e.pingedLanes |= e.suspendedLanes & n),
        qu === e &&
          (Hu & n) === n &&
          (4 === Qu || (3 === Qu && (130023424 & Hu) === Hu && 500 > ct() - es)
            ? Cs(e, 0)
            : (Yu |= n)),
        ms(e, t)
    }
    function zs(e, t) {
      0 === t &&
        (0 == (1 & e.mode)
          ? (t = 1)
          : ((t = St), 0 == (130023424 & (St <<= 1)) && (St = 4194304)))
      var n = ds()
      null !== (e = Vi(e, t)) && (Lt(e, t, n), ms(e, n))
    }
    function Ms(e) {
      var t = e.memoizedState,
        n = 0
      null !== t && (n = t.retryLane), zs(e, n)
    }
    function Us(e, t) {
      var n = 0
      switch (e.tag) {
        case 13:
          var r = e.stateNode,
            o = e.memoizedState
          null !== o && (n = o.retryLane)
          break
        case 19:
          r = e.stateNode
          break
        default:
          throw Error(v(314))
      }
      null !== r && r.delete(t), zs(e, n)
    }
    function qs(e, t) {
      return at(e, t)
    }
    function Vs(e, t, n, r) {
      ;(this.tag = e),
        (this.key = n),
        (this.sibling =
          this.child =
          this.return =
          this.stateNode =
          this.type =
          this.elementType =
            null),
        (this.index = 0),
        (this.ref = null),
        (this.pendingProps = t),
        (this.dependencies =
          this.memoizedState =
          this.updateQueue =
          this.memoizedProps =
            null),
        (this.mode = r),
        (this.subtreeFlags = this.flags = 0),
        (this.deletions = null),
        (this.childLanes = this.lanes = 0),
        (this.alternate = null)
    }
    function Hs(e, t, n, r) {
      return new Vs(e, t, n, r)
    }
    function Ws(e) {
      return !(!(e = e.prototype) || !e.isReactComponent)
    }
    function $s(e, t) {
      var n = e.alternate
      return (
        null === n
          ? (((n = Hs(e.tag, t, e.key, e.mode)).elementType = e.elementType),
            (n.type = e.type),
            (n.stateNode = e.stateNode),
            (n.alternate = e),
            (e.alternate = n))
          : ((n.pendingProps = t),
            (n.type = e.type),
            (n.flags = 0),
            (n.subtreeFlags = 0),
            (n.deletions = null)),
        (n.flags = 14680064 & e.flags),
        (n.childLanes = e.childLanes),
        (n.lanes = e.lanes),
        (n.child = e.child),
        (n.memoizedProps = e.memoizedProps),
        (n.memoizedState = e.memoizedState),
        (n.updateQueue = e.updateQueue),
        (t = e.dependencies),
        (n.dependencies =
          null === t ? null : { lanes: t.lanes, firstContext: t.firstContext }),
        (n.sibling = e.sibling),
        (n.index = e.index),
        (n.ref = e.ref),
        n
      )
    }
    function Qs(e, t, n, r, o, i) {
      var a = 2
      if (((r = e), 'function' == typeof e)) Ws(e) && (a = 1)
      else if ('string' == typeof e) a = 5
      else
        e: switch (e) {
          case N:
            return Gs(n.children, o, i, t)
          case I:
            ;(a = 8), (o |= 8)
            break
          case B:
            return ((e = Hs(12, n, t, 2 | o)).elementType = B), (e.lanes = i), e
          case q:
            return ((e = Hs(13, n, t, o)).elementType = q), (e.lanes = i), e
          case V:
            return ((e = Hs(19, n, t, o)).elementType = V), (e.lanes = i), e
          case $:
            return Js(n, o, i, t)
          default:
            if ('object' == typeof e && null !== e)
              switch (e.$$typeof) {
                case z:
                  a = 10
                  break e
                case M:
                  a = 9
                  break e
                case U:
                  a = 11
                  break e
                case H:
                  a = 14
                  break e
                case W:
                  ;(a = 16), (r = null)
                  break e
              }
            throw Error(v(130, null == e ? e : typeof e, ''))
        }
      return (
        ((t = Hs(a, n, t, o)).elementType = e), (t.type = r), (t.lanes = i), t
      )
    }
    function Gs(e, t, n, r) {
      return ((e = Hs(7, e, r, t)).lanes = n), e
    }
    function Js(e, t, n, r) {
      return (
        ((e = Hs(22, e, r, t)).elementType = $),
        (e.lanes = n),
        (e.stateNode = { isHidden: !1 }),
        e
      )
    }
    function Xs(e, t, n) {
      return ((e = Hs(6, e, null, t)).lanes = n), e
    }
    function Ys(e, t, n) {
      return (
        ((t = Hs(4, null !== e.children ? e.children : [], e.key, t)).lanes =
          n),
        (t.stateNode = {
          containerInfo: e.containerInfo,
          pendingChildren: null,
          implementation: e.implementation,
        }),
        t
      )
    }
    function Ks(e, t, n, r, o) {
      ;(this.tag = t),
        (this.containerInfo = e),
        (this.finishedWork =
          this.pingCache =
          this.current =
          this.pendingChildren =
            null),
        (this.timeoutHandle = -1),
        (this.callbackNode = this.pendingContext = this.context = null),
        (this.callbackPriority = 0),
        (this.eventTimes = Tt(0)),
        (this.expirationTimes = Tt(-1)),
        (this.entangledLanes =
          this.finishedLanes =
          this.mutableReadLanes =
          this.expiredLanes =
          this.pingedLanes =
          this.suspendedLanes =
          this.pendingLanes =
            0),
        (this.entanglements = Tt(0)),
        (this.identifierPrefix = r),
        (this.onRecoverableError = o),
        (this.mutableSourceEagerHydrationData = null)
    }
    function Zs(e, t, n, r, o, i, a, l, u) {
      return (
        (e = new Ks(e, t, n, l, u)),
        1 === t ? ((t = 1), !0 === i && (t |= 8)) : (t = 0),
        (i = Hs(3, null, null, t)),
        (e.current = i),
        (i.stateNode = e),
        (i.memoizedState = {
          element: r,
          isDehydrated: n,
          cache: null,
          transitions: null,
          pendingSuspenseBoundaries: null,
        }),
        Wi(i),
        e
      )
    }
    function ec(e, t, n) {
      var r =
        3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null
      return {
        $$typeof: _,
        key: null == r ? null : '' + r,
        children: e,
        containerInfo: t,
        implementation: n,
      }
    }
    function tc(e) {
      if (!e) return Uo
      e: {
        if (tt((e = e._reactInternals)) !== e || 1 !== e.tag)
          throw Error(v(170))
        var t = e
        do {
          switch (t.tag) {
            case 3:
              t = t.stateNode.context
              break e
            case 1:
              if ($o(t.type)) {
                t = t.stateNode.__reactInternalMemoizedMergedChildContext
                break e
              }
          }
          t = t.return
        } while (null !== t)
        throw Error(v(171))
      }
      if (1 === e.tag) {
        var n = e.type
        if ($o(n)) return Jo(e, n, t)
      }
      return t
    }
    function nc(e, t, n, r, o, i, a, l, u) {
      return (
        ((e = Zs(n, r, !0, e, 0, i, 0, l, u)).context = tc(null)),
        (n = e.current),
        ((i = Qi((r = ds()), (o = hs(n)))).callback = null != t ? t : null),
        Gi(n, i, o),
        (e.current.lanes = o),
        Lt(e, o, r),
        ms(e, r),
        e
      )
    }
    function rc(e, t, n, r) {
      var o = t.current,
        i = ds(),
        a = hs(o)
      return (
        (n = tc(n)),
        null === t.context ? (t.context = n) : (t.pendingContext = n),
        ((t = Qi(i, a)).payload = { element: e }),
        null !== (r = void 0 === r ? null : r) && (t.callback = r),
        null !== (e = Gi(o, t, a)) && (gs(e, o, a, i), Ji(e, o, a)),
        a
      )
    }
    function oc(e) {
      return (e = e.current).child ? (e.child.tag, e.child.stateNode) : null
    }
    function ic(e, t) {
      if (null !== (e = e.memoizedState) && null !== e.dehydrated) {
        var n = e.retryLane
        e.retryLane = 0 !== n && n < t ? n : t
      }
    }
    function ac(e, t) {
      ic(e, t), (e = e.alternate) && ic(e, t)
    }
    Nu = function (e, t, n) {
      if (null !== e)
        if (e.memoizedProps !== t.pendingProps || Vo.current) jl = !0
        else {
          if (0 == (e.lanes & n) && 0 == (128 & t.flags))
            return (
              (jl = !1),
              (function (e, t, n) {
                switch (t.tag) {
                  case 3:
                    Vl(t), Ai()
                    break
                  case 5:
                    ba(t)
                    break
                  case 1:
                    $o(t.type) && Xo(t)
                    break
                  case 4:
                    ya(t, t.stateNode.containerInfo)
                    break
                  case 10:
                    var r = t.type._context,
                      o = t.memoizedProps.value
                    Mo(Ri, r._currentValue), (r._currentValue = o)
                    break
                  case 13:
                    if (null !== (r = t.memoizedState))
                      return null !== r.dehydrated
                        ? (Mo(xa, 1 & xa.current), (t.flags |= 128), null)
                        : 0 != (n & t.child.childLanes)
                          ? Xl(e, t, n)
                          : (Mo(xa, 1 & xa.current),
                            null !== (e = ru(e, t, n)) ? e.sibling : null)
                    Mo(xa, 1 & xa.current)
                    break
                  case 19:
                    if (((r = 0 != (n & t.childLanes)), 0 != (128 & e.flags))) {
                      if (r) return tu(e, t, n)
                      t.flags |= 128
                    }
                    if (
                      (null !== (o = t.memoizedState) &&
                        ((o.rendering = null),
                        (o.tail = null),
                        (o.lastEffect = null)),
                      Mo(xa, xa.current),
                      r)
                    )
                      break
                    return null
                  case 22:
                  case 23:
                    return (t.lanes = 0), Bl(e, t, n)
                }
                return ru(e, t, n)
              })(e, t, n)
            )
          jl = 0 != (131072 & e.flags)
        }
      else (jl = !1), vi && 0 != (1048576 & t.flags) && di(t, ai, t.index)
      switch (((t.lanes = 0), t.tag)) {
        case 2:
          var r = t.type
          nu(e, t), (e = t.pendingProps)
          var o = Wo(t, qo.current)
          Bi(t, n), (o = Ia(null, t, r, e, o, n))
          var i = Ba()
          return (
            (t.flags |= 1),
            'object' == typeof o &&
            null !== o &&
            'function' == typeof o.render &&
            void 0 === o.$$typeof
              ? ((t.tag = 1),
                (t.memoizedState = null),
                (t.updateQueue = null),
                $o(r) ? ((i = !0), Xo(t)) : (i = !1),
                (t.memoizedState =
                  null !== o.state && void 0 !== o.state ? o.state : null),
                Wi(t),
                (o.updater = ta),
                (t.stateNode = o),
                (o._reactInternals = t),
                ia(t, r, e, n),
                (t = ql(null, t, r, !0, i, n)))
              : ((t.tag = 0),
                vi && i && hi(t),
                Dl(null, t, o, n),
                (t = t.child)),
            t
          )
        case 16:
          r = t.elementType
          e: {
            switch (
              (nu(e, t),
              (e = t.pendingProps),
              (r = (o = r._init)(r._payload)),
              (t.type = r),
              (o = t.tag =
                (function (e) {
                  if ('function' == typeof e) return Ws(e) ? 1 : 0
                  if (null != e) {
                    if ((e = e.$$typeof) === U) return 11
                    if (e === H) return 14
                  }
                  return 2
                })(r)),
              (e = Li(r, e)),
              o)
            ) {
              case 0:
                t = Ml(null, t, r, e, n)
                break e
              case 1:
                t = Ul(null, t, r, e, n)
                break e
              case 11:
                t = _l(null, t, r, e, n)
                break e
              case 14:
                t = Nl(null, t, r, Li(r.type, e), n)
                break e
            }
            throw Error(v(306, r, ''))
          }
          return t
        case 0:
          return (
            (r = t.type),
            (o = t.pendingProps),
            Ml(e, t, r, (o = t.elementType === r ? o : Li(r, o)), n)
          )
        case 1:
          return (
            (r = t.type),
            (o = t.pendingProps),
            Ul(e, t, r, (o = t.elementType === r ? o : Li(r, o)), n)
          )
        case 3:
          e: {
            if ((Vl(t), null === e)) throw Error(v(387))
            ;(r = t.pendingProps),
              (o = (i = t.memoizedState).element),
              $i(e, t),
              Yi(t, r, null, n)
            var a = t.memoizedState
            if (((r = a.element), i.isDehydrated)) {
              if (
                ((i = {
                  element: r,
                  isDehydrated: !1,
                  cache: a.cache,
                  pendingSuspenseBoundaries: a.pendingSuspenseBoundaries,
                  transitions: a.transitions,
                }),
                (t.updateQueue.baseState = i),
                (t.memoizedState = i),
                256 & t.flags)
              ) {
                t = Hl(e, t, r, n, (o = Sl(Error(v(423)), t)))
                break e
              }
              if (r !== o) {
                t = Hl(e, t, r, n, (o = Sl(Error(v(424)), t)))
                break e
              }
              for (
                yi = So(t.stateNode.containerInfo.firstChild),
                  mi = t,
                  vi = !0,
                  bi = null,
                  n = fa(t, null, r, n),
                  t.child = n;
                n;

              )
                (n.flags = (-3 & n.flags) | 4096), (n = n.sibling)
            } else {
              if ((Ai(), r === o)) {
                t = ru(e, t, n)
                break e
              }
              Dl(e, t, r, n)
            }
            t = t.child
          }
          return t
        case 5:
          return (
            ba(t),
            null === e && Si(t),
            (r = t.type),
            (o = t.pendingProps),
            (i = null !== e ? e.memoizedProps : null),
            (a = o.children),
            mo(r, o) ? (a = null) : null !== i && mo(r, i) && (t.flags |= 32),
            zl(e, t),
            Dl(e, t, a, n),
            t.child
          )
        case 6:
          return null === e && Si(t), null
        case 13:
          return Xl(e, t, n)
        case 4:
          return (
            ya(t, t.stateNode.containerInfo),
            (r = t.pendingProps),
            null === e ? (t.child = ca(t, null, r, n)) : Dl(e, t, r, n),
            t.child
          )
        case 11:
          return (
            (r = t.type),
            (o = t.pendingProps),
            _l(e, t, r, (o = t.elementType === r ? o : Li(r, o)), n)
          )
        case 7:
          return Dl(e, t, t.pendingProps, n), t.child
        case 8:
        case 12:
          return Dl(e, t, t.pendingProps.children, n), t.child
        case 10:
          e: {
            if (
              ((r = t.type._context),
              (o = t.pendingProps),
              (i = t.memoizedProps),
              (a = o.value),
              Mo(Ri, r._currentValue),
              (r._currentValue = a),
              null !== i)
            )
              if (wr(i.value, a)) {
                if (i.children === o.children && !Vo.current) {
                  t = ru(e, t, n)
                  break e
                }
              } else
                for (null !== (i = t.child) && (i.return = t); null !== i; ) {
                  var l = i.dependencies
                  if (null !== l) {
                    a = i.child
                    for (var u = l.firstContext; null !== u; ) {
                      if (u.context === r) {
                        if (1 === i.tag) {
                          ;(u = Qi(-1, n & -n)).tag = 2
                          var s = i.updateQueue
                          if (null !== s) {
                            var c = (s = s.shared).pending
                            null === c
                              ? (u.next = u)
                              : ((u.next = c.next), (c.next = u)),
                              (s.pending = u)
                          }
                        }
                        ;(i.lanes |= n),
                          null !== (u = i.alternate) && (u.lanes |= n),
                          Ii(i.return, n, t),
                          (l.lanes |= n)
                        break
                      }
                      u = u.next
                    }
                  } else if (10 === i.tag)
                    a = i.type === t.type ? null : i.child
                  else if (18 === i.tag) {
                    if (null === (a = i.return)) throw Error(v(341))
                    ;(a.lanes |= n),
                      null !== (l = a.alternate) && (l.lanes |= n),
                      Ii(a, n, t),
                      (a = i.sibling)
                  } else a = i.child
                  if (null !== a) a.return = i
                  else
                    for (a = i; null !== a; ) {
                      if (a === t) {
                        a = null
                        break
                      }
                      if (null !== (i = a.sibling)) {
                        ;(i.return = a.return), (a = i)
                        break
                      }
                      a = a.return
                    }
                  i = a
                }
            Dl(e, t, o.children, n), (t = t.child)
          }
          return t
        case 9:
          return (
            (o = t.type),
            (r = t.pendingProps.children),
            Bi(t, n),
            (r = r((o = zi(o)))),
            (t.flags |= 1),
            Dl(e, t, r, n),
            t.child
          )
        case 14:
          return (
            (o = Li((r = t.type), t.pendingProps)),
            Nl(e, t, r, (o = Li(r.type, o)), n)
          )
        case 15:
          return Il(e, t, t.type, t.pendingProps, n)
        case 17:
          return (
            (r = t.type),
            (o = t.pendingProps),
            (o = t.elementType === r ? o : Li(r, o)),
            nu(e, t),
            (t.tag = 1),
            $o(r) ? ((e = !0), Xo(t)) : (e = !1),
            Bi(t, n),
            ra(t, r, o),
            ia(t, r, o, n),
            ql(null, t, r, !0, e, n)
          )
        case 19:
          return tu(e, t, n)
        case 22:
          return Bl(e, t, n)
      }
      throw Error(v(156, t.tag))
    }
    var lc =
      'function' == typeof reportError
        ? reportError
        : function (e) {
            console.error(e)
          }
    function uc(e) {
      this._internalRoot = e
    }
    function sc(e) {
      this._internalRoot = e
    }
    function cc(e) {
      return !(
        !e ||
        (1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType)
      )
    }
    function fc(e) {
      return !(
        !e ||
        (1 !== e.nodeType &&
          9 !== e.nodeType &&
          11 !== e.nodeType &&
          (8 !== e.nodeType || ' react-mount-point-unstable ' !== e.nodeValue))
      )
    }
    function pc() {}
    function dc(e, t, n, r, o) {
      var i = n._reactRootContainer
      if (i) {
        var a = i
        if ('function' == typeof o) {
          var l = o
          o = function () {
            var e = oc(a)
            l.call(e)
          }
        }
        rc(t, a, e, o)
      } else
        a = (function (e, t, n, r, o) {
          if (o) {
            if ('function' == typeof r) {
              var i = r
              r = function () {
                var e = oc(a)
                i.call(e)
              }
            }
            var a = nc(t, r, e, 0, null, !1, 0, '', pc)
            return (
              (e._reactRootContainer = a),
              (e[Po] = a.current),
              to(8 === e.nodeType ? e.parentNode : e),
              Ss(),
              a
            )
          }
          for (; (o = e.lastChild); ) e.removeChild(o)
          if ('function' == typeof r) {
            var l = r
            r = function () {
              var e = oc(u)
              l.call(e)
            }
          }
          var u = Zs(e, 0, !1, null, 0, !1, 0, '', pc)
          return (
            (e._reactRootContainer = u),
            (e[Po] = u.current),
            to(8 === e.nodeType ? e.parentNode : e),
            Ss(function () {
              rc(t, u, n, r)
            }),
            u
          )
        })(n, t, e, o, r)
      return oc(a)
    }
    ;(sc.prototype.render = uc.prototype.render =
      function (e) {
        var t = this._internalRoot
        if (null === t) throw Error(v(409))
        rc(e, t, null, null)
      }),
      (sc.prototype.unmount = uc.prototype.unmount =
        function () {
          var e = this._internalRoot
          if (null !== e) {
            this._internalRoot = null
            var t = e.containerInfo
            Ss(function () {
              rc(null, e, null, null)
            }),
              (t[Po] = null)
          }
        }),
      (sc.prototype.unstable_scheduleHydration = function (e) {
        if (e) {
          var t = It()
          e = { blockedOn: null, target: e, priority: t }
          for (var n = 0; n < $t.length && 0 !== t && t < $t[n].priority; n++);
          $t.splice(n, 0, e), 0 === n && Xt(e)
        }
      }),
      (Dt = function (e) {
        switch (e.tag) {
          case 3:
            var t = e.stateNode
            if (t.current.memoizedState.isDehydrated) {
              var n = Et(t.pendingLanes)
              0 !== n &&
                (Rt(t, 1 | n),
                ms(t, ct()),
                0 == (6 & Uu) && ((ts = ct() + 500), ni()))
            }
            break
          case 13:
            Ss(function () {
              var t = Vi(e, 1)
              if (null !== t) {
                var n = ds()
                gs(t, e, 1, n)
              }
            }),
              ac(e, 1)
        }
      }),
      (_t = function (e) {
        if (13 === e.tag) {
          var t = Vi(e, 134217728)
          if (null !== t) gs(t, e, 134217728, ds())
          ac(e, 134217728)
        }
      }),
      (Nt = function (e) {
        if (13 === e.tag) {
          var t = hs(e),
            n = Vi(e, t)
          if (null !== n) gs(n, e, t, ds())
          ac(e, t)
        }
      }),
      (It = function () {
        return Ft
      }),
      (Bt = function (e, t) {
        var n = Ft
        try {
          return (Ft = e), t()
        } finally {
          Ft = n
        }
      }),
      (_e = function (e, t, n) {
        switch (t) {
          case 'input':
            if ((fe(e, n), (t = n.name), 'radio' === n.type && null != t)) {
              for (n = e; n.parentNode; ) n = n.parentNode
              for (
                n = n.querySelectorAll(
                  'input[name=' + JSON.stringify('' + t) + '][type="radio"]'
                ),
                  t = 0;
                t < n.length;
                t++
              ) {
                var r = n[t]
                if (r !== e && r.form === e.form) {
                  var o = _o(r)
                  if (!o) throw Error(v(90))
                  ae(r), fe(r, o)
                }
              }
            }
            break
          case 'textarea':
            ve(e, n)
            break
          case 'select':
            null != (t = n.value) && ge(e, !!n.multiple, t, !1)
        }
      }),
      (Ue = ks),
      (qe = Ss)
    var hc = { usingClientEntryPoint: !1, Events: [jo, Do, _o, ze, Me, ks] },
      gc = {
        findFiberByHostInstance: Fo,
        bundleType: 0,
        version: '18.2.0',
        rendererPackageName: 'react-dom',
      },
      mc = {
        bundleType: gc.bundleType,
        version: gc.version,
        rendererPackageName: gc.rendererPackageName,
        rendererConfig: gc.rendererConfig,
        overrideHookState: null,
        overrideHookStateDeletePath: null,
        overrideHookStateRenamePath: null,
        overrideProps: null,
        overridePropsDeletePath: null,
        overridePropsRenamePath: null,
        setErrorHandler: null,
        setSuspenseHandler: null,
        scheduleUpdate: null,
        currentDispatcherRef: j.ReactCurrentDispatcher,
        findHostInstanceByFiber: function (e) {
          return null === (e = ot(e)) ? null : e.stateNode
        },
        findFiberByHostInstance:
          gc.findFiberByHostInstance ||
          function () {
            return null
          },
        findHostInstancesForRefresh: null,
        scheduleRefresh: null,
        scheduleRoot: null,
        setRefreshHandler: null,
        getCurrentFiber: null,
        reconcilerVersion: '18.2.0-next-9e3b772b8-20220608',
      }
    if ('undefined' != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
      var yc = __REACT_DEVTOOLS_GLOBAL_HOOK__
      if (!yc.isDisabled && yc.supportsFiber)
        try {
          ;(yt = yc.inject(mc)), (vt = yc)
        } catch (Se) {}
    }
    ;(r = hc),
      (o = function (e, t) {
        var n =
          2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null
        if (!cc(t)) throw Error(v(200))
        return ec(e, t, null, n)
      }),
      (a = function (e, t) {
        if (!cc(e)) throw Error(v(299))
        var n = !1,
          r = '',
          o = lc
        return (
          null != t &&
            (!0 === t.unstable_strictMode && (n = !0),
            void 0 !== t.identifierPrefix && (r = t.identifierPrefix),
            void 0 !== t.onRecoverableError && (o = t.onRecoverableError)),
          (t = Zs(e, 1, !1, null, 0, n, 0, r, o)),
          (e[Po] = t.current),
          to(8 === e.nodeType ? e.parentNode : e),
          new uc(t)
        )
      }),
      (l = function (e) {
        if (null == e) return null
        if (1 === e.nodeType) return e
        var t = e._reactInternals
        if (void 0 === t) {
          if ('function' == typeof e.render) throw Error(v(188))
          throw ((e = Object.keys(e).join(',')), Error(v(268, e)))
        }
        return (e = null === (e = ot(t)) ? null : e.stateNode)
      }),
      (u = function (e) {
        return Ss(e)
      }),
      (s = function (e, t, n) {
        if (!fc(t)) throw Error(v(200))
        return dc(null, e, t, !0, n)
      }),
      (c = function (e, t, n) {
        if (!cc(e)) throw Error(v(405))
        var r = (null != n && n.hydratedSources) || null,
          o = !1,
          i = '',
          a = lc
        if (
          (null != n &&
            (!0 === n.unstable_strictMode && (o = !0),
            void 0 !== n.identifierPrefix && (i = n.identifierPrefix),
            void 0 !== n.onRecoverableError && (a = n.onRecoverableError)),
          (t = nc(t, null, e, 1, null != n ? n : null, o, 0, i, a)),
          (e[Po] = t.current),
          to(e),
          r)
        )
          for (e = 0; e < r.length; e++)
            (o = (o = (n = r[e])._getVersion)(n._source)),
              null == t.mutableSourceEagerHydrationData
                ? (t.mutableSourceEagerHydrationData = [n, o])
                : t.mutableSourceEagerHydrationData.push(n, o)
        return new sc(t)
      }),
      (f = function (e, t, n) {
        if (!fc(t)) throw Error(v(200))
        return dc(null, e, t, !1, n)
      }),
      (p = function (e) {
        if (!fc(e)) throw Error(v(40))
        return (
          !!e._reactRootContainer &&
          (Ss(function () {
            dc(null, null, e, !1, function () {
              ;(e._reactRootContainer = null), (e[Po] = null)
            })
          }),
          !0)
        )
      }),
      (d = ks),
      (h = function (e, t, n, r) {
        if (!fc(n)) throw Error(v(200))
        if (null == e || void 0 === e._reactInternals) throw Error(v(38))
        return dc(e, t, n, !1, r)
      }),
      (g = '18.2.0-next-9e3b772b8-20220608')
  }),
  i.register('7DCtq', function (e, t) {
    e.exports = i('fcjP7')
  }),
  i.register('fcjP7', function (t, n) {
    /**
     * @license React
     * scheduler.production.min.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    var r, o, i, a, l, u, s, c, f, p, d, h, g, m, y, v, b, w, x
    function k(e, t) {
      var n = e.length
      e.push(t)
      e: for (; 0 < n; ) {
        var r = (n - 1) >>> 1,
          o = e[r]
        if (!(0 < C(o, t))) break e
        ;(e[r] = t), (e[n] = o), (n = r)
      }
    }
    function S(e) {
      return 0 === e.length ? null : e[0]
    }
    function E(e) {
      if (0 === e.length) return null
      var t = e[0],
        n = e.pop()
      if (n !== t) {
        e[0] = n
        e: for (var r = 0, o = e.length, i = o >>> 1; r < i; ) {
          var a = 2 * (r + 1) - 1,
            l = e[a],
            u = a + 1,
            s = e[u]
          if (0 > C(l, n))
            u < o && 0 > C(s, l)
              ? ((e[r] = s), (e[u] = n), (r = u))
              : ((e[r] = l), (e[a] = n), (r = a))
          else {
            if (!(u < o && 0 > C(s, n))) break e
            ;(e[r] = s), (e[u] = n), (r = u)
          }
        }
      }
      return t
    }
    function C(e, t) {
      var n = e.sortIndex - t.sortIndex
      return 0 !== n ? n : e.id - t.id
    }
    if (
      (e(
        t.exports,
        'unstable_now',
        () => r,
        (e) => (r = e)
      ),
      e(
        t.exports,
        'unstable_IdlePriority',
        () => o,
        (e) => (o = e)
      ),
      e(
        t.exports,
        'unstable_ImmediatePriority',
        () => i,
        (e) => (i = e)
      ),
      e(
        t.exports,
        'unstable_LowPriority',
        () => a,
        (e) => (a = e)
      ),
      e(
        t.exports,
        'unstable_NormalPriority',
        () => l,
        (e) => (l = e)
      ),
      e(
        t.exports,
        'unstable_Profiling',
        () => u,
        (e) => (u = e)
      ),
      e(
        t.exports,
        'unstable_UserBlockingPriority',
        () => s,
        (e) => (s = e)
      ),
      e(
        t.exports,
        'unstable_cancelCallback',
        () => c,
        (e) => (c = e)
      ),
      e(
        t.exports,
        'unstable_continueExecution',
        () => f,
        (e) => (f = e)
      ),
      e(
        t.exports,
        'unstable_forceFrameRate',
        () => p,
        (e) => (p = e)
      ),
      e(
        t.exports,
        'unstable_getCurrentPriorityLevel',
        () => d,
        (e) => (d = e)
      ),
      e(
        t.exports,
        'unstable_getFirstCallbackNode',
        () => h,
        (e) => (h = e)
      ),
      e(
        t.exports,
        'unstable_next',
        () => g,
        (e) => (g = e)
      ),
      e(
        t.exports,
        'unstable_pauseExecution',
        () => m,
        (e) => (m = e)
      ),
      e(
        t.exports,
        'unstable_requestPaint',
        () => y,
        (e) => (y = e)
      ),
      e(
        t.exports,
        'unstable_runWithPriority',
        () => v,
        (e) => (v = e)
      ),
      e(
        t.exports,
        'unstable_scheduleCallback',
        () => b,
        (e) => (b = e)
      ),
      e(
        t.exports,
        'unstable_shouldYield',
        () => w,
        (e) => (w = e)
      ),
      e(
        t.exports,
        'unstable_wrapCallback',
        () => x,
        (e) => (x = e)
      ),
      'object' == typeof performance && 'function' == typeof performance.now)
    ) {
      var O = performance
      r = function () {
        return O.now()
      }
    } else {
      var A = Date,
        P = A.now()
      r = function () {
        return A.now() - P
      }
    }
    var T = [],
      L = [],
      R = 1,
      F = null,
      j = 3,
      D = !1,
      _ = !1,
      N = !1,
      I = 'function' == typeof setTimeout ? setTimeout : null,
      B = 'function' == typeof clearTimeout ? clearTimeout : null,
      z = 'undefined' != typeof setImmediate ? setImmediate : null
    function M(e) {
      for (var t = S(L); null !== t; ) {
        if (null === t.callback) E(L)
        else {
          if (!(t.startTime <= e)) break
          E(L), (t.sortIndex = t.expirationTime), k(T, t)
        }
        t = S(L)
      }
    }
    function U(e) {
      if (((N = !1), M(e), !_))
        if (null !== S(T)) (_ = !0), Z(q)
        else {
          var t = S(L)
          null !== t && ee(U, t.startTime - e)
        }
    }
    function q(e, t) {
      ;(_ = !1), N && ((N = !1), B($), ($ = -1)), (D = !0)
      var n = j
      try {
        for (
          M(t), F = S(T);
          null !== F && (!(F.expirationTime > t) || (e && !J()));

        ) {
          var o = F.callback
          if ('function' == typeof o) {
            ;(F.callback = null), (j = F.priorityLevel)
            var i = o(F.expirationTime <= t)
            ;(t = r()),
              'function' == typeof i ? (F.callback = i) : F === S(T) && E(T),
              M(t)
          } else E(T)
          F = S(T)
        }
        if (null !== F) var a = !0
        else {
          var l = S(L)
          null !== l && ee(U, l.startTime - t), (a = !1)
        }
        return a
      } finally {
        ;(F = null), (j = n), (D = !1)
      }
    }
    'undefined' != typeof navigator &&
      void 0 !== navigator.scheduling &&
      void 0 !== navigator.scheduling.isInputPending &&
      navigator.scheduling.isInputPending.bind(navigator.scheduling)
    var V,
      H = !1,
      W = null,
      $ = -1,
      Q = 5,
      G = -1
    function J() {
      return !(r() - G < Q)
    }
    function X() {
      if (null !== W) {
        var e = r()
        G = e
        var t = !0
        try {
          t = W(!0, e)
        } finally {
          t ? V() : ((H = !1), (W = null))
        }
      } else H = !1
    }
    if ('function' == typeof z)
      V = function () {
        z(X)
      }
    else if ('undefined' != typeof MessageChannel) {
      var Y = new MessageChannel(),
        K = Y.port2
      ;(Y.port1.onmessage = X),
        (V = function () {
          K.postMessage(null)
        })
    } else
      V = function () {
        I(X, 0)
      }
    function Z(e) {
      ;(W = e), H || ((H = !0), V())
    }
    function ee(e, t) {
      $ = I(function () {
        e(r())
      }, t)
    }
    ;(o = 5),
      (i = 1),
      (a = 4),
      (l = 3),
      (u = null),
      (s = 2),
      (c = function (e) {
        e.callback = null
      }),
      (f = function () {
        _ || D || ((_ = !0), Z(q))
      }),
      (p = function (e) {
        0 > e || 125 < e
          ? console.error(
              'forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported'
            )
          : (Q = 0 < e ? Math.floor(1e3 / e) : 5)
      }),
      (d = function () {
        return j
      }),
      (h = function () {
        return S(T)
      }),
      (g = function (e) {
        switch (j) {
          case 1:
          case 2:
          case 3:
            var t = 3
            break
          default:
            t = j
        }
        var n = j
        j = t
        try {
          return e()
        } finally {
          j = n
        }
      }),
      (m = function () {}),
      (y = function () {}),
      (v = function (e, t) {
        switch (e) {
          case 1:
          case 2:
          case 3:
          case 4:
          case 5:
            break
          default:
            e = 3
        }
        var n = j
        j = e
        try {
          return t()
        } finally {
          j = n
        }
      }),
      (b = function (e, t, n) {
        var o = r()
        switch (
          ('object' == typeof n && null !== n
            ? (n = 'number' == typeof (n = n.delay) && 0 < n ? o + n : o)
            : (n = o),
          e)
        ) {
          case 1:
            var i = -1
            break
          case 2:
            i = 250
            break
          case 5:
            i = 1073741823
            break
          case 4:
            i = 1e4
            break
          default:
            i = 5e3
        }
        return (
          (e = {
            id: R++,
            callback: t,
            priorityLevel: e,
            startTime: n,
            expirationTime: (i = n + i),
            sortIndex: -1,
          }),
          n > o
            ? ((e.sortIndex = n),
              k(L, e),
              null === S(T) &&
                e === S(L) &&
                (N ? (B($), ($ = -1)) : (N = !0), ee(U, n - o)))
            : ((e.sortIndex = i), k(T, e), _ || D || ((_ = !0), Z(q))),
          e
        )
      }),
      (w = J),
      (x = function (e) {
        var t = j
        return function () {
          var n = j
          j = t
          try {
            return e.apply(this, arguments)
          } finally {
            j = n
          }
        }
      })
  }),
  i.register('hSrj7', function (t, n) {
    /**
     * @license React
     * use-sync-external-store-shim.production.min.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    var r
    e(
      t.exports,
      'useSyncExternalStore',
      () => r,
      (e) => (r = e)
    )
    var o = i('8tsvq')
    var a =
        'function' == typeof Object.is
          ? Object.is
          : function (e, t) {
              return (
                (e === t && (0 !== e || 1 / e == 1 / t)) || (e != e && t != t)
              )
            },
      l = o.useState,
      u = o.useEffect,
      s = o.useLayoutEffect,
      c = o.useDebugValue
    function f(e) {
      var t = e.getSnapshot
      e = e.value
      try {
        var n = t()
        return !a(e, n)
      } catch (e) {
        return !0
      }
    }
    var p =
      'undefined' == typeof window ||
      void 0 === window.document ||
      void 0 === window.document.createElement
        ? function (e, t) {
            return t()
          }
        : function (e, t) {
            var n = t(),
              r = l({ inst: { value: n, getSnapshot: t } }),
              o = r[0].inst,
              i = r[1]
            return (
              s(
                function () {
                  ;(o.value = n), (o.getSnapshot = t), f(o) && i({ inst: o })
                },
                [e, n, t]
              ),
              u(
                function () {
                  return (
                    f(o) && i({ inst: o }),
                    e(function () {
                      f(o) && i({ inst: o })
                    })
                  )
                },
                [e]
              ),
              c(n),
              n
            )
          }
    r = void 0 !== o.useSyncExternalStore ? o.useSyncExternalStore : p
  }),
  i.register('6AbxL', function (e, t) {
    var n = i('54m5J'),
      r = i('7ZJCU'),
      o = i('OqWYJ'),
      a = i('4Jccp')
    var l = (function e(t) {
      var i = new o(t),
        l = r(o.prototype.request, i)
      return (
        n.extend(l, o.prototype, i),
        n.extend(l, i),
        (l.create = function (n) {
          return e(a(t, n))
        }),
        l
      )
    })(i('81Otx'))
    ;(l.Axios = o),
      (l.CanceledError = i('cXIsv')),
      (l.CancelToken = i('kpoVz')),
      (l.isCancel = i('aIrZr')),
      (l.VERSION = i('9Wwqw').version),
      (l.toFormData = i('d5s9E')),
      (l.AxiosError = i('23OpW')),
      (l.Cancel = l.CanceledError),
      (l.all = function (e) {
        return Promise.all(e)
      }),
      (l.spread = i('fXhex')),
      (l.isAxiosError = i('ha9xL')),
      (e.exports = l),
      (e.exports.default = l)
  }),
  i.register('54m5J', function (e, t) {
    var n,
      r = i('7ZJCU'),
      o = Object.prototype.toString,
      a =
        ((n = Object.create(null)),
        function (e) {
          var t = o.call(e)
          return n[t] || (n[t] = t.slice(8, -1).toLowerCase())
        })
    function l(e) {
      return (
        (e = e.toLowerCase()),
        function (t) {
          return a(t) === e
        }
      )
    }
    function u(e) {
      return Array.isArray(e)
    }
    function s(e) {
      return void 0 === e
    }
    var c = l('ArrayBuffer')
    function f(e) {
      return null !== e && 'object' == typeof e
    }
    function p(e) {
      if ('object' !== a(e)) return !1
      var t = Object.getPrototypeOf(e)
      return null === t || t === Object.prototype
    }
    var d = l('Date'),
      h = l('File'),
      g = l('Blob'),
      m = l('FileList')
    function y(e) {
      return '[object Function]' === o.call(e)
    }
    var v = l('URLSearchParams')
    function b(e, t) {
      if (null != e)
        if (('object' != typeof e && (e = [e]), u(e)))
          for (var n = 0, r = e.length; n < r; n++) t.call(null, e[n], n, e)
        else
          for (var o in e)
            Object.prototype.hasOwnProperty.call(e, o) &&
              t.call(null, e[o], o, e)
    }
    var w,
      x =
        ((w =
          'undefined' != typeof Uint8Array &&
          Object.getPrototypeOf(Uint8Array)),
        function (e) {
          return w && e instanceof w
        })
    e.exports = {
      isArray: u,
      isArrayBuffer: c,
      isBuffer: function (e) {
        return (
          null !== e &&
          !s(e) &&
          null !== e.constructor &&
          !s(e.constructor) &&
          'function' == typeof e.constructor.isBuffer &&
          e.constructor.isBuffer(e)
        )
      },
      isFormData: function (e) {
        var t = '[object FormData]'
        return (
          e &&
          (('function' == typeof FormData && e instanceof FormData) ||
            o.call(e) === t ||
            (y(e.toString) && e.toString() === t))
        )
      },
      isArrayBufferView: function (e) {
        return 'undefined' != typeof ArrayBuffer && ArrayBuffer.isView
          ? ArrayBuffer.isView(e)
          : e && e.buffer && c(e.buffer)
      },
      isString: function (e) {
        return 'string' == typeof e
      },
      isNumber: function (e) {
        return 'number' == typeof e
      },
      isObject: f,
      isPlainObject: p,
      isUndefined: s,
      isDate: d,
      isFile: h,
      isBlob: g,
      isFunction: y,
      isStream: function (e) {
        return f(e) && y(e.pipe)
      },
      isURLSearchParams: v,
      isStandardBrowserEnv: function () {
        return (
          ('undefined' == typeof navigator ||
            ('ReactNative' !== navigator.product &&
              'NativeScript' !== navigator.product &&
              'NS' !== navigator.product)) &&
          'undefined' != typeof window &&
          'undefined' != typeof document
        )
      },
      forEach: b,
      merge: function e() {
        var t = {}
        function n(n, r) {
          p(t[r]) && p(n)
            ? (t[r] = e(t[r], n))
            : p(n)
              ? (t[r] = e({}, n))
              : u(n)
                ? (t[r] = n.slice())
                : (t[r] = n)
        }
        for (var r = 0, o = arguments.length; r < o; r++) b(arguments[r], n)
        return t
      },
      extend: function (e, t, n) {
        return (
          b(t, function (t, o) {
            e[o] = n && 'function' == typeof t ? r(t, n) : t
          }),
          e
        )
      },
      trim: function (e) {
        return e.trim ? e.trim() : e.replace(/^\s+|\s+$/g, '')
      },
      stripBOM: function (e) {
        return 65279 === e.charCodeAt(0) && (e = e.slice(1)), e
      },
      inherits: function (e, t, n, r) {
        ;(e.prototype = Object.create(t.prototype, r)),
          (e.prototype.constructor = e),
          n && Object.assign(e.prototype, n)
      },
      toFlatObject: function (e, t, n) {
        var r,
          o,
          i,
          a = {}
        t = t || {}
        do {
          for (o = (r = Object.getOwnPropertyNames(e)).length; o-- > 0; )
            a[(i = r[o])] || ((t[i] = e[i]), (a[i] = !0))
          e = Object.getPrototypeOf(e)
        } while (e && (!n || n(e, t)) && e !== Object.prototype)
        return t
      },
      kindOf: a,
      kindOfTest: l,
      endsWith: function (e, t, n) {
        ;(e = String(e)),
          (void 0 === n || n > e.length) && (n = e.length),
          (n -= t.length)
        var r = e.indexOf(t, n)
        return -1 !== r && r === n
      },
      toArray: function (e) {
        if (!e) return null
        var t = e.length
        if (s(t)) return null
        for (var n = new Array(t); t-- > 0; ) n[t] = e[t]
        return n
      },
      isTypedArray: x,
      isFileList: m,
    }
  }),
  i.register('7ZJCU', function (e, t) {
    e.exports = function (e, t) {
      return function () {
        for (var n = new Array(arguments.length), r = 0; r < n.length; r++)
          n[r] = arguments[r]
        return e.apply(t, n)
      }
    }
  }),
  i.register('OqWYJ', function (e, t) {
    var n = i('54m5J'),
      r = i('hwhGT'),
      o = i('e5Ezb'),
      a = i('kDPHn'),
      l = i('4Jccp'),
      u = i('2NxoO'),
      s = i('d2qsA'),
      c = s.validators
    function f(e) {
      ;(this.defaults = e),
        (this.interceptors = { request: new o(), response: new o() })
    }
    ;(f.prototype.request = function (e, t) {
      'string' == typeof e ? ((t = t || {}).url = e) : (t = e || {}),
        (t = l(this.defaults, t)).method
          ? (t.method = t.method.toLowerCase())
          : this.defaults.method
            ? (t.method = this.defaults.method.toLowerCase())
            : (t.method = 'get')
      var n = t.transitional
      void 0 !== n &&
        s.assertOptions(
          n,
          {
            silentJSONParsing: c.transitional(c.boolean),
            forcedJSONParsing: c.transitional(c.boolean),
            clarifyTimeoutError: c.transitional(c.boolean),
          },
          !1
        )
      var r = [],
        o = !0
      this.interceptors.request.forEach(function (e) {
        ;('function' == typeof e.runWhen && !1 === e.runWhen(t)) ||
          ((o = o && e.synchronous), r.unshift(e.fulfilled, e.rejected))
      })
      var i,
        u = []
      if (
        (this.interceptors.response.forEach(function (e) {
          u.push(e.fulfilled, e.rejected)
        }),
        !o)
      ) {
        var f = [a, void 0]
        for (
          Array.prototype.unshift.apply(f, r),
            f = f.concat(u),
            i = Promise.resolve(t);
          f.length;

        )
          i = i.then(f.shift(), f.shift())
        return i
      }
      for (var p = t; r.length; ) {
        var d = r.shift(),
          h = r.shift()
        try {
          p = d(p)
        } catch (e) {
          h(e)
          break
        }
      }
      try {
        i = a(p)
      } catch (e) {
        return Promise.reject(e)
      }
      for (; u.length; ) i = i.then(u.shift(), u.shift())
      return i
    }),
      (f.prototype.getUri = function (e) {
        e = l(this.defaults, e)
        var t = u(e.baseURL, e.url)
        return r(t, e.params, e.paramsSerializer)
      }),
      n.forEach(['delete', 'get', 'head', 'options'], function (e) {
        f.prototype[e] = function (t, n) {
          return this.request(
            l(n || {}, { method: e, url: t, data: (n || {}).data })
          )
        }
      }),
      n.forEach(['post', 'put', 'patch'], function (e) {
        function t(t) {
          return function (n, r, o) {
            return this.request(
              l(o || {}, {
                method: e,
                headers: t ? { 'Content-Type': 'multipart/form-data' } : {},
                url: n,
                data: r,
              })
            )
          }
        }
        ;(f.prototype[e] = t()), (f.prototype[e + 'Form'] = t(!0))
      }),
      (e.exports = f)
  }),
  i.register('hwhGT', function (e, t) {
    var n = i('54m5J')
    function r(e) {
      return encodeURIComponent(e)
        .replace(/%3A/gi, ':')
        .replace(/%24/g, '$')
        .replace(/%2C/gi, ',')
        .replace(/%20/g, '+')
        .replace(/%5B/gi, '[')
        .replace(/%5D/gi, ']')
    }
    e.exports = function (e, t, o) {
      if (!t) return e
      var i
      if (o) i = o(t)
      else if (n.isURLSearchParams(t)) i = t.toString()
      else {
        var a = []
        n.forEach(t, function (e, t) {
          null != e &&
            (n.isArray(e) ? (t += '[]') : (e = [e]),
            n.forEach(e, function (e) {
              n.isDate(e)
                ? (e = e.toISOString())
                : n.isObject(e) && (e = JSON.stringify(e)),
                a.push(r(t) + '=' + r(e))
            }))
        }),
          (i = a.join('&'))
      }
      if (i) {
        var l = e.indexOf('#')
        ;-1 !== l && (e = e.slice(0, l)),
          (e += (-1 === e.indexOf('?') ? '?' : '&') + i)
      }
      return e
    }
  }),
  i.register('e5Ezb', function (e, t) {
    var n = i('54m5J')
    function r() {
      this.handlers = []
    }
    ;(r.prototype.use = function (e, t, n) {
      return (
        this.handlers.push({
          fulfilled: e,
          rejected: t,
          synchronous: !!n && n.synchronous,
          runWhen: n ? n.runWhen : null,
        }),
        this.handlers.length - 1
      )
    }),
      (r.prototype.eject = function (e) {
        this.handlers[e] && (this.handlers[e] = null)
      }),
      (r.prototype.forEach = function (e) {
        n.forEach(this.handlers, function (t) {
          null !== t && e(t)
        })
      }),
      (e.exports = r)
  }),
  i.register('kDPHn', function (e, t) {
    var n = i('54m5J'),
      r = i('hOEfi'),
      o = i('aIrZr'),
      a = i('81Otx'),
      l = i('cXIsv')
    function u(e) {
      if (
        (e.cancelToken && e.cancelToken.throwIfRequested(),
        e.signal && e.signal.aborted)
      )
        throw new l()
    }
    e.exports = function (e) {
      return (
        u(e),
        (e.headers = e.headers || {}),
        (e.data = r.call(e, e.data, e.headers, e.transformRequest)),
        (e.headers = n.merge(
          e.headers.common || {},
          e.headers[e.method] || {},
          e.headers
        )),
        n.forEach(
          ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
          function (t) {
            delete e.headers[t]
          }
        ),
        (e.adapter || a.adapter)(e).then(
          function (t) {
            return (
              u(e),
              (t.data = r.call(e, t.data, t.headers, e.transformResponse)),
              t
            )
          },
          function (t) {
            return (
              o(t) ||
                (u(e),
                t &&
                  t.response &&
                  (t.response.data = r.call(
                    e,
                    t.response.data,
                    t.response.headers,
                    e.transformResponse
                  ))),
              Promise.reject(t)
            )
          }
        )
      )
    }
  }),
  i.register('hOEfi', function (e, t) {
    var n = i('54m5J'),
      r = i('81Otx')
    e.exports = function (e, t, o) {
      var i = this || r
      return (
        n.forEach(o, function (n) {
          e = n.call(i, e, t)
        }),
        e
      )
    }
  }),
  i.register('81Otx', function (e, t) {
    var n = i('4kiXg'),
      r = i('54m5J'),
      o = i('Tn4yy'),
      a = i('23OpW'),
      l = i('dxtav'),
      u = i('d5s9E'),
      s = { 'Content-Type': 'application/x-www-form-urlencoded' }
    function c(e, t) {
      !r.isUndefined(e) &&
        r.isUndefined(e['Content-Type']) &&
        (e['Content-Type'] = t)
    }
    var f,
      p = {
        transitional: l,
        adapter:
          (('undefined' != typeof XMLHttpRequest ||
            (void 0 !== n &&
              '[object process]' === Object.prototype.toString.call(n))) &&
            (f = i('8MWe7')),
          f),
        transformRequest: [
          function (e, t) {
            if (
              (o(t, 'Accept'),
              o(t, 'Content-Type'),
              r.isFormData(e) ||
                r.isArrayBuffer(e) ||
                r.isBuffer(e) ||
                r.isStream(e) ||
                r.isFile(e) ||
                r.isBlob(e))
            )
              return e
            if (r.isArrayBufferView(e)) return e.buffer
            if (r.isURLSearchParams(e))
              return (
                c(t, 'application/x-www-form-urlencoded;charset=utf-8'),
                e.toString()
              )
            var n,
              i = r.isObject(e),
              a = t && t['Content-Type']
            if ((n = r.isFileList(e)) || (i && 'multipart/form-data' === a)) {
              var l = this.env && this.env.FormData
              return u(n ? { 'files[]': e } : e, l && new l())
            }
            return i || 'application/json' === a
              ? (c(t, 'application/json'),
                (function (e, t, n) {
                  if (r.isString(e))
                    try {
                      return (t || JSON.parse)(e), r.trim(e)
                    } catch (e) {
                      if ('SyntaxError' !== e.name) throw e
                    }
                  return (n || JSON.stringify)(e)
                })(e))
              : e
          },
        ],
        transformResponse: [
          function (e) {
            var t = this.transitional || p.transitional,
              n = t && t.silentJSONParsing,
              o = t && t.forcedJSONParsing,
              i = !n && 'json' === this.responseType
            if (i || (o && r.isString(e) && e.length))
              try {
                return JSON.parse(e)
              } catch (e) {
                if (i) {
                  if ('SyntaxError' === e.name)
                    throw a.from(
                      e,
                      a.ERR_BAD_RESPONSE,
                      this,
                      null,
                      this.response
                    )
                  throw e
                }
              }
            return e
          },
        ],
        timeout: 0,
        xsrfCookieName: 'XSRF-TOKEN',
        xsrfHeaderName: 'X-XSRF-TOKEN',
        maxContentLength: -1,
        maxBodyLength: -1,
        env: { FormData: i('dR1mz') },
        validateStatus: function (e) {
          return e >= 200 && e < 300
        },
        headers: { common: { Accept: 'application/json, text/plain, */*' } },
      }
    r.forEach(['delete', 'get', 'head'], function (e) {
      p.headers[e] = {}
    }),
      r.forEach(['post', 'put', 'patch'], function (e) {
        p.headers[e] = r.merge(s)
      }),
      (e.exports = p)
  }),
  i.register('4kiXg', function (e, t) {
    var n,
      r,
      o = (e.exports = {})
    function i() {
      throw new Error('setTimeout has not been defined')
    }
    function a() {
      throw new Error('clearTimeout has not been defined')
    }
    function l(e) {
      if (n === setTimeout) return setTimeout(e, 0)
      if ((n === i || !n) && setTimeout)
        return (n = setTimeout), setTimeout(e, 0)
      try {
        return n(e, 0)
      } catch (t) {
        try {
          return n.call(null, e, 0)
        } catch (t) {
          return n.call(this, e, 0)
        }
      }
    }
    !(function () {
      try {
        n = 'function' == typeof setTimeout ? setTimeout : i
      } catch (e) {
        n = i
      }
      try {
        r = 'function' == typeof clearTimeout ? clearTimeout : a
      } catch (e) {
        r = a
      }
    })()
    var u,
      s = [],
      c = !1,
      f = -1
    function p() {
      c &&
        u &&
        ((c = !1), u.length ? (s = u.concat(s)) : (f = -1), s.length && d())
    }
    function d() {
      if (!c) {
        var e = l(p)
        c = !0
        for (var t = s.length; t; ) {
          for (u = s, s = []; ++f < t; ) u && u[f].run()
          ;(f = -1), (t = s.length)
        }
        ;(u = null),
          (c = !1),
          (function (e) {
            if (r === clearTimeout) return clearTimeout(e)
            if ((r === a || !r) && clearTimeout)
              return (r = clearTimeout), clearTimeout(e)
            try {
              r(e)
            } catch (t) {
              try {
                return r.call(null, e)
              } catch (t) {
                return r.call(this, e)
              }
            }
          })(e)
      }
    }
    function h(e, t) {
      ;(this.fun = e), (this.array = t)
    }
    function g() {}
    ;(o.nextTick = function (e) {
      var t = new Array(arguments.length - 1)
      if (arguments.length > 1)
        for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n]
      s.push(new h(e, t)), 1 !== s.length || c || l(d)
    }),
      (h.prototype.run = function () {
        this.fun.apply(null, this.array)
      }),
      (o.title = 'browser'),
      (o.browser = !0),
      (o.env = {}),
      (o.argv = []),
      (o.version = ''),
      (o.versions = {}),
      (o.on = g),
      (o.addListener = g),
      (o.once = g),
      (o.off = g),
      (o.removeListener = g),
      (o.removeAllListeners = g),
      (o.emit = g),
      (o.prependListener = g),
      (o.prependOnceListener = g),
      (o.listeners = function (e) {
        return []
      }),
      (o.binding = function (e) {
        throw new Error('process.binding is not supported')
      }),
      (o.cwd = function () {
        return '/'
      }),
      (o.chdir = function (e) {
        throw new Error('process.chdir is not supported')
      }),
      (o.umask = function () {
        return 0
      })
  }),
  i.register('Tn4yy', function (e, t) {
    var n = i('54m5J')
    e.exports = function (e, t) {
      n.forEach(e, function (n, r) {
        r !== t &&
          r.toUpperCase() === t.toUpperCase() &&
          ((e[t] = n), delete e[r])
      })
    }
  }),
  i.register('23OpW', function (e, t) {
    var n = i('54m5J')
    function r(e, t, n, r, o) {
      Error.call(this),
        (this.message = e),
        (this.name = 'AxiosError'),
        t && (this.code = t),
        n && (this.config = n),
        r && (this.request = r),
        o && (this.response = o)
    }
    n.inherits(r, Error, {
      toJSON: function () {
        return {
          message: this.message,
          name: this.name,
          description: this.description,
          number: this.number,
          fileName: this.fileName,
          lineNumber: this.lineNumber,
          columnNumber: this.columnNumber,
          stack: this.stack,
          config: this.config,
          code: this.code,
          status:
            this.response && this.response.status ? this.response.status : null,
        }
      },
    })
    var o = r.prototype,
      a = {}
    ;[
      'ERR_BAD_OPTION_VALUE',
      'ERR_BAD_OPTION',
      'ECONNABORTED',
      'ETIMEDOUT',
      'ERR_NETWORK',
      'ERR_FR_TOO_MANY_REDIRECTS',
      'ERR_DEPRECATED',
      'ERR_BAD_RESPONSE',
      'ERR_BAD_REQUEST',
      'ERR_CANCELED',
    ].forEach(function (e) {
      a[e] = { value: e }
    }),
      Object.defineProperties(r, a),
      Object.defineProperty(o, 'isAxiosError', { value: !0 }),
      (r.from = function (e, t, i, a, l, u) {
        var s = Object.create(o)
        return (
          n.toFlatObject(e, s, function (e) {
            return e !== Error.prototype
          }),
          r.call(s, e.message, t, i, a, l),
          (s.name = e.name),
          u && Object.assign(s, u),
          s
        )
      }),
      (e.exports = r)
  }),
  i.register('dxtav', function (e, t) {
    e.exports = {
      silentJSONParsing: !0,
      forcedJSONParsing: !0,
      clarifyTimeoutError: !1,
    }
  }),
  i.register('d5s9E', function (e, t) {
    var n = i('j4zpO').Buffer,
      r = i('54m5J')
    e.exports = function (e, t) {
      t = t || new FormData()
      var o = []
      function i(e) {
        return null === e
          ? ''
          : r.isDate(e)
            ? e.toISOString()
            : r.isArrayBuffer(e) || r.isTypedArray(e)
              ? 'function' == typeof Blob
                ? new Blob([e])
                : n.from(e)
              : e
      }
      return (
        (function e(n, a) {
          if (r.isPlainObject(n) || r.isArray(n)) {
            if (-1 !== o.indexOf(n))
              throw Error('Circular reference detected in ' + a)
            o.push(n),
              r.forEach(n, function (n, o) {
                if (!r.isUndefined(n)) {
                  var l,
                    u = a ? a + '.' + o : o
                  if (n && !a && 'object' == typeof n)
                    if (r.endsWith(o, '{}')) n = JSON.stringify(n)
                    else if (r.endsWith(o, '[]') && (l = r.toArray(n)))
                      return void l.forEach(function (e) {
                        !r.isUndefined(e) && t.append(u, i(e))
                      })
                  e(n, u)
                }
              }),
              o.pop()
          } else t.append(a, i(n))
        })(e),
        t
      )
    }
  }),
  i.register('j4zpO', function (t, n) {
    /*!
     * The buffer module from node.js, for the browser.
     *
     * @author   Feross Aboukhadijeh <https://feross.org>
     * @license  MIT
     */ var r, o
    e(
      t.exports,
      'Buffer',
      () => r,
      (e) => (r = e)
    ),
      e(
        t.exports,
        'INSPECT_MAX_BYTES',
        () => o,
        (e) => (o = e)
      )
    var a = i('c6flE'),
      l = i('5UWbo'),
      u =
        'function' == typeof Symbol && 'function' == typeof Symbol.for
          ? Symbol.for('nodejs.util.inspect.custom')
          : null
    ;(r = f), (o = 50)
    var s = 2147483647
    function c(e) {
      if (e > s)
        throw new RangeError(
          'The value "' + e + '" is invalid for option "size"'
        )
      var t = new Uint8Array(e)
      return Object.setPrototypeOf(t, f.prototype), t
    }
    function f(e, t, n) {
      if ('number' == typeof e) {
        if ('string' == typeof t)
          throw new TypeError(
            'The "string" argument must be of type string. Received type number'
          )
        return h(e)
      }
      return p(e, t, n)
    }
    function p(e, t, n) {
      if ('string' == typeof e)
        return (function (e, t) {
          ;('string' == typeof t && '' !== t) || (t = 'utf8')
          if (!f.isEncoding(t)) throw new TypeError('Unknown encoding: ' + t)
          var n = 0 | v(e, t),
            r = c(n),
            o = r.write(e, t)
          o !== n && (r = r.slice(0, o))
          return r
        })(e, t)
      if (ArrayBuffer.isView(e))
        return (function (e) {
          if (H(e, Uint8Array)) {
            var t = new Uint8Array(e)
            return m(t.buffer, t.byteOffset, t.byteLength)
          }
          return g(e)
        })(e)
      if (null == e)
        throw new TypeError(
          'The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type ' +
            typeof e
        )
      if (H(e, ArrayBuffer) || (e && H(e.buffer, ArrayBuffer)))
        return m(e, t, n)
      if (
        'undefined' != typeof SharedArrayBuffer &&
        (H(e, SharedArrayBuffer) || (e && H(e.buffer, SharedArrayBuffer)))
      )
        return m(e, t, n)
      if ('number' == typeof e)
        throw new TypeError(
          'The "value" argument must not be of type number. Received type number'
        )
      var r = e.valueOf && e.valueOf()
      if (null != r && r !== e) return f.from(r, t, n)
      var o = (function (e) {
        if (f.isBuffer(e)) {
          var t = 0 | y(e.length),
            n = c(t)
          return 0 === n.length || e.copy(n, 0, 0, t), n
        }
        if (void 0 !== e.length)
          return 'number' != typeof e.length || W(e.length) ? c(0) : g(e)
        if ('Buffer' === e.type && Array.isArray(e.data)) return g(e.data)
      })(e)
      if (o) return o
      if (
        'undefined' != typeof Symbol &&
        null != Symbol.toPrimitive &&
        'function' == typeof e[Symbol.toPrimitive]
      )
        return f.from(e[Symbol.toPrimitive]('string'), t, n)
      throw new TypeError(
        'The first argument must be one of type string, Buffer, ArrayBuffer, Array, or Array-like Object. Received type ' +
          typeof e
      )
    }
    function d(e) {
      if ('number' != typeof e)
        throw new TypeError('"size" argument must be of type number')
      if (e < 0)
        throw new RangeError(
          'The value "' + e + '" is invalid for option "size"'
        )
    }
    function h(e) {
      return d(e), c(e < 0 ? 0 : 0 | y(e))
    }
    function g(e) {
      for (
        var t = e.length < 0 ? 0 : 0 | y(e.length), n = c(t), r = 0;
        r < t;
        r += 1
      )
        n[r] = 255 & e[r]
      return n
    }
    function m(e, t, n) {
      if (t < 0 || e.byteLength < t)
        throw new RangeError('"offset" is outside of buffer bounds')
      if (e.byteLength < t + (n || 0))
        throw new RangeError('"length" is outside of buffer bounds')
      var r
      return (
        (r =
          void 0 === t && void 0 === n
            ? new Uint8Array(e)
            : void 0 === n
              ? new Uint8Array(e, t)
              : new Uint8Array(e, t, n)),
        Object.setPrototypeOf(r, f.prototype),
        r
      )
    }
    function y(e) {
      if (e >= s)
        throw new RangeError(
          'Attempt to allocate Buffer larger than maximum size: 0x' +
            s.toString(16) +
            ' bytes'
        )
      return 0 | e
    }
    function v(e, t) {
      if (f.isBuffer(e)) return e.length
      if (ArrayBuffer.isView(e) || H(e, ArrayBuffer)) return e.byteLength
      if ('string' != typeof e)
        throw new TypeError(
          'The "string" argument must be one of type string, Buffer, or ArrayBuffer. Received type ' +
            typeof e
        )
      var n = e.length,
        r = arguments.length > 2 && !0 === arguments[2]
      if (!r && 0 === n) return 0
      for (var o = !1; ; )
        switch (t) {
          case 'ascii':
          case 'latin1':
          case 'binary':
            return n
          case 'utf8':
          case 'utf-8':
            return U(e).length
          case 'ucs2':
          case 'ucs-2':
          case 'utf16le':
          case 'utf-16le':
            return 2 * n
          case 'hex':
            return n >>> 1
          case 'base64':
            return q(e).length
          default:
            if (o) return r ? -1 : U(e).length
            ;(t = ('' + t).toLowerCase()), (o = !0)
        }
    }
    function b(e, t, n) {
      var r = !1
      if (((void 0 === t || t < 0) && (t = 0), t > this.length)) return ''
      if (((void 0 === n || n > this.length) && (n = this.length), n <= 0))
        return ''
      if ((n >>>= 0) <= (t >>>= 0)) return ''
      for (e || (e = 'utf8'); ; )
        switch (e) {
          case 'hex':
            return j(this, t, n)
          case 'utf8':
          case 'utf-8':
            return T(this, t, n)
          case 'ascii':
            return R(this, t, n)
          case 'latin1':
          case 'binary':
            return F(this, t, n)
          case 'base64':
            return P(this, t, n)
          case 'ucs2':
          case 'ucs-2':
          case 'utf16le':
          case 'utf-16le':
            return D(this, t, n)
          default:
            if (r) throw new TypeError('Unknown encoding: ' + e)
            ;(e = (e + '').toLowerCase()), (r = !0)
        }
    }
    function w(e, t, n) {
      var r = e[t]
      ;(e[t] = e[n]), (e[n] = r)
    }
    function x(e, t, n, r, o) {
      if (0 === e.length) return -1
      if (
        ('string' == typeof n
          ? ((r = n), (n = 0))
          : n > 2147483647
            ? (n = 2147483647)
            : n < -2147483648 && (n = -2147483648),
        W((n = +n)) && (n = o ? 0 : e.length - 1),
        n < 0 && (n = e.length + n),
        n >= e.length)
      ) {
        if (o) return -1
        n = e.length - 1
      } else if (n < 0) {
        if (!o) return -1
        n = 0
      }
      if (('string' == typeof t && (t = f.from(t, r)), f.isBuffer(t)))
        return 0 === t.length ? -1 : k(e, t, n, r, o)
      if ('number' == typeof t)
        return (
          (t &= 255),
          'function' == typeof Uint8Array.prototype.indexOf
            ? o
              ? Uint8Array.prototype.indexOf.call(e, t, n)
              : Uint8Array.prototype.lastIndexOf.call(e, t, n)
            : k(e, [t], n, r, o)
        )
      throw new TypeError('val must be string, number or Buffer')
    }
    function k(e, t, n, r, o) {
      var i,
        a = 1,
        l = e.length,
        u = t.length
      if (
        void 0 !== r &&
        ('ucs2' === (r = String(r).toLowerCase()) ||
          'ucs-2' === r ||
          'utf16le' === r ||
          'utf-16le' === r)
      ) {
        if (e.length < 2 || t.length < 2) return -1
        ;(a = 2), (l /= 2), (u /= 2), (n /= 2)
      }
      function s(e, t) {
        return 1 === a ? e[t] : e.readUInt16BE(t * a)
      }
      if (o) {
        var c = -1
        for (i = n; i < l; i++)
          if (s(e, i) === s(t, -1 === c ? 0 : i - c)) {
            if ((-1 === c && (c = i), i - c + 1 === u)) return c * a
          } else -1 !== c && (i -= i - c), (c = -1)
      } else
        for (n + u > l && (n = l - u), i = n; i >= 0; i--) {
          for (var f = !0, p = 0; p < u; p++)
            if (s(e, i + p) !== s(t, p)) {
              f = !1
              break
            }
          if (f) return i
        }
      return -1
    }
    function S(e, t, n, r) {
      n = Number(n) || 0
      var o = e.length - n
      r ? (r = Number(r)) > o && (r = o) : (r = o)
      var i = t.length
      r > i / 2 && (r = i / 2)
      for (var a = 0; a < r; ++a) {
        var l = parseInt(t.substr(2 * a, 2), 16)
        if (W(l)) return a
        e[n + a] = l
      }
      return a
    }
    function E(e, t, n, r) {
      return V(U(t, e.length - n), e, n, r)
    }
    function C(e, t, n, r) {
      return V(
        (function (e) {
          for (var t = [], n = 0; n < e.length; ++n)
            t.push(255 & e.charCodeAt(n))
          return t
        })(t),
        e,
        n,
        r
      )
    }
    function O(e, t, n, r) {
      return V(q(t), e, n, r)
    }
    function A(e, t, n, r) {
      return V(
        (function (e, t) {
          for (var n, r, o, i = [], a = 0; a < e.length && !((t -= 2) < 0); ++a)
            (r = (n = e.charCodeAt(a)) >> 8),
              (o = n % 256),
              i.push(o),
              i.push(r)
          return i
        })(t, e.length - n),
        e,
        n,
        r
      )
    }
    function P(e, t, n) {
      return 0 === t && n === e.length
        ? a.fromByteArray(e)
        : a.fromByteArray(e.slice(t, n))
    }
    function T(e, t, n) {
      n = Math.min(e.length, n)
      for (var r = [], o = t; o < n; ) {
        var i,
          a,
          l,
          u,
          s = e[o],
          c = null,
          f = s > 239 ? 4 : s > 223 ? 3 : s > 191 ? 2 : 1
        if (o + f <= n)
          switch (f) {
            case 1:
              s < 128 && (c = s)
              break
            case 2:
              128 == (192 & (i = e[o + 1])) &&
                (u = ((31 & s) << 6) | (63 & i)) > 127 &&
                (c = u)
              break
            case 3:
              ;(i = e[o + 1]),
                (a = e[o + 2]),
                128 == (192 & i) &&
                  128 == (192 & a) &&
                  (u = ((15 & s) << 12) | ((63 & i) << 6) | (63 & a)) > 2047 &&
                  (u < 55296 || u > 57343) &&
                  (c = u)
              break
            case 4:
              ;(i = e[o + 1]),
                (a = e[o + 2]),
                (l = e[o + 3]),
                128 == (192 & i) &&
                  128 == (192 & a) &&
                  128 == (192 & l) &&
                  (u =
                    ((15 & s) << 18) |
                    ((63 & i) << 12) |
                    ((63 & a) << 6) |
                    (63 & l)) > 65535 &&
                  u < 1114112 &&
                  (c = u)
          }
        null === c
          ? ((c = 65533), (f = 1))
          : c > 65535 &&
            ((c -= 65536),
            r.push(((c >>> 10) & 1023) | 55296),
            (c = 56320 | (1023 & c))),
          r.push(c),
          (o += f)
      }
      return (function (e) {
        var t = e.length
        if (t <= L) return String.fromCharCode.apply(String, e)
        var n = '',
          r = 0
        for (; r < t; )
          n += String.fromCharCode.apply(String, e.slice(r, (r += L)))
        return n
      })(r)
    }
    ;(f.TYPED_ARRAY_SUPPORT = (function () {
      try {
        var e = new Uint8Array(1),
          t = {
            foo: function () {
              return 42
            },
          }
        return (
          Object.setPrototypeOf(t, Uint8Array.prototype),
          Object.setPrototypeOf(e, t),
          42 === e.foo()
        )
      } catch (e) {
        return !1
      }
    })()),
      f.TYPED_ARRAY_SUPPORT ||
        'undefined' == typeof console ||
        'function' != typeof console.error ||
        console.error(
          'This browser lacks typed array (Uint8Array) support which is required by `buffer` v5.x. Use `buffer` v4.x if you require old browser support.'
        ),
      Object.defineProperty(f.prototype, 'parent', {
        enumerable: !0,
        get: function () {
          if (f.isBuffer(this)) return this.buffer
        },
      }),
      Object.defineProperty(f.prototype, 'offset', {
        enumerable: !0,
        get: function () {
          if (f.isBuffer(this)) return this.byteOffset
        },
      }),
      (f.poolSize = 8192),
      (f.from = function (e, t, n) {
        return p(e, t, n)
      }),
      Object.setPrototypeOf(f.prototype, Uint8Array.prototype),
      Object.setPrototypeOf(f, Uint8Array),
      (f.alloc = function (e, t, n) {
        return (function (e, t, n) {
          return (
            d(e),
            e <= 0
              ? c(e)
              : void 0 !== t
                ? 'string' == typeof n
                  ? c(e).fill(t, n)
                  : c(e).fill(t)
                : c(e)
          )
        })(e, t, n)
      }),
      (f.allocUnsafe = function (e) {
        return h(e)
      }),
      (f.allocUnsafeSlow = function (e) {
        return h(e)
      }),
      (f.isBuffer = function (e) {
        return null != e && !0 === e._isBuffer && e !== f.prototype
      }),
      (f.compare = function (e, t) {
        if (
          (H(e, Uint8Array) && (e = f.from(e, e.offset, e.byteLength)),
          H(t, Uint8Array) && (t = f.from(t, t.offset, t.byteLength)),
          !f.isBuffer(e) || !f.isBuffer(t))
        )
          throw new TypeError(
            'The "buf1", "buf2" arguments must be one of type Buffer or Uint8Array'
          )
        if (e === t) return 0
        for (
          var n = e.length, r = t.length, o = 0, i = Math.min(n, r);
          o < i;
          ++o
        )
          if (e[o] !== t[o]) {
            ;(n = e[o]), (r = t[o])
            break
          }
        return n < r ? -1 : r < n ? 1 : 0
      }),
      (f.isEncoding = function (e) {
        switch (String(e).toLowerCase()) {
          case 'hex':
          case 'utf8':
          case 'utf-8':
          case 'ascii':
          case 'latin1':
          case 'binary':
          case 'base64':
          case 'ucs2':
          case 'ucs-2':
          case 'utf16le':
          case 'utf-16le':
            return !0
          default:
            return !1
        }
      }),
      (f.concat = function (e, t) {
        if (!Array.isArray(e))
          throw new TypeError('"list" argument must be an Array of Buffers')
        if (0 === e.length) return f.alloc(0)
        var n
        if (void 0 === t) for (t = 0, n = 0; n < e.length; ++n) t += e[n].length
        var r = f.allocUnsafe(t),
          o = 0
        for (n = 0; n < e.length; ++n) {
          var i = e[n]
          if (H(i, Uint8Array))
            o + i.length > r.length
              ? f.from(i).copy(r, o)
              : Uint8Array.prototype.set.call(r, i, o)
          else {
            if (!f.isBuffer(i))
              throw new TypeError('"list" argument must be an Array of Buffers')
            i.copy(r, o)
          }
          o += i.length
        }
        return r
      }),
      (f.byteLength = v),
      (f.prototype._isBuffer = !0),
      (f.prototype.swap16 = function () {
        var e = this.length
        if (e % 2 != 0)
          throw new RangeError('Buffer size must be a multiple of 16-bits')
        for (var t = 0; t < e; t += 2) w(this, t, t + 1)
        return this
      }),
      (f.prototype.swap32 = function () {
        var e = this.length
        if (e % 4 != 0)
          throw new RangeError('Buffer size must be a multiple of 32-bits')
        for (var t = 0; t < e; t += 4) w(this, t, t + 3), w(this, t + 1, t + 2)
        return this
      }),
      (f.prototype.swap64 = function () {
        var e = this.length
        if (e % 8 != 0)
          throw new RangeError('Buffer size must be a multiple of 64-bits')
        for (var t = 0; t < e; t += 8)
          w(this, t, t + 7),
            w(this, t + 1, t + 6),
            w(this, t + 2, t + 5),
            w(this, t + 3, t + 4)
        return this
      }),
      (f.prototype.toString = function () {
        var e = this.length
        return 0 === e
          ? ''
          : 0 === arguments.length
            ? T(this, 0, e)
            : b.apply(this, arguments)
      }),
      (f.prototype.toLocaleString = f.prototype.toString),
      (f.prototype.equals = function (e) {
        if (!f.isBuffer(e)) throw new TypeError('Argument must be a Buffer')
        return this === e || 0 === f.compare(this, e)
      }),
      (f.prototype.inspect = function () {
        var e = '',
          t = o
        return (
          (e = this.toString('hex', 0, t)
            .replace(/(.{2})/g, '$1 ')
            .trim()),
          this.length > t && (e += ' ... '),
          '<Buffer ' + e + '>'
        )
      }),
      u && (f.prototype[u] = f.prototype.inspect),
      (f.prototype.compare = function (e, t, n, r, o) {
        if (
          (H(e, Uint8Array) && (e = f.from(e, e.offset, e.byteLength)),
          !f.isBuffer(e))
        )
          throw new TypeError(
            'The "target" argument must be one of type Buffer or Uint8Array. Received type ' +
              typeof e
          )
        if (
          (void 0 === t && (t = 0),
          void 0 === n && (n = e ? e.length : 0),
          void 0 === r && (r = 0),
          void 0 === o && (o = this.length),
          t < 0 || n > e.length || r < 0 || o > this.length)
        )
          throw new RangeError('out of range index')
        if (r >= o && t >= n) return 0
        if (r >= o) return -1
        if (t >= n) return 1
        if (this === e) return 0
        for (
          var i = (o >>>= 0) - (r >>>= 0),
            a = (n >>>= 0) - (t >>>= 0),
            l = Math.min(i, a),
            u = this.slice(r, o),
            s = e.slice(t, n),
            c = 0;
          c < l;
          ++c
        )
          if (u[c] !== s[c]) {
            ;(i = u[c]), (a = s[c])
            break
          }
        return i < a ? -1 : a < i ? 1 : 0
      }),
      (f.prototype.includes = function (e, t, n) {
        return -1 !== this.indexOf(e, t, n)
      }),
      (f.prototype.indexOf = function (e, t, n) {
        return x(this, e, t, n, !0)
      }),
      (f.prototype.lastIndexOf = function (e, t, n) {
        return x(this, e, t, n, !1)
      }),
      (f.prototype.write = function (e, t, n, r) {
        if (void 0 === t) (r = 'utf8'), (n = this.length), (t = 0)
        else if (void 0 === n && 'string' == typeof t)
          (r = t), (n = this.length), (t = 0)
        else {
          if (!isFinite(t))
            throw new Error(
              'Buffer.write(string, encoding, offset[, length]) is no longer supported'
            )
          ;(t >>>= 0),
            isFinite(n)
              ? ((n >>>= 0), void 0 === r && (r = 'utf8'))
              : ((r = n), (n = void 0))
        }
        var o = this.length - t
        if (
          ((void 0 === n || n > o) && (n = o),
          (e.length > 0 && (n < 0 || t < 0)) || t > this.length)
        )
          throw new RangeError('Attempt to write outside buffer bounds')
        r || (r = 'utf8')
        for (var i = !1; ; )
          switch (r) {
            case 'hex':
              return S(this, e, t, n)
            case 'utf8':
            case 'utf-8':
              return E(this, e, t, n)
            case 'ascii':
            case 'latin1':
            case 'binary':
              return C(this, e, t, n)
            case 'base64':
              return O(this, e, t, n)
            case 'ucs2':
            case 'ucs-2':
            case 'utf16le':
            case 'utf-16le':
              return A(this, e, t, n)
            default:
              if (i) throw new TypeError('Unknown encoding: ' + r)
              ;(r = ('' + r).toLowerCase()), (i = !0)
          }
      }),
      (f.prototype.toJSON = function () {
        return {
          type: 'Buffer',
          data: Array.prototype.slice.call(this._arr || this, 0),
        }
      })
    var L = 4096
    function R(e, t, n) {
      var r = ''
      n = Math.min(e.length, n)
      for (var o = t; o < n; ++o) r += String.fromCharCode(127 & e[o])
      return r
    }
    function F(e, t, n) {
      var r = ''
      n = Math.min(e.length, n)
      for (var o = t; o < n; ++o) r += String.fromCharCode(e[o])
      return r
    }
    function j(e, t, n) {
      var r = e.length
      ;(!t || t < 0) && (t = 0), (!n || n < 0 || n > r) && (n = r)
      for (var o = '', i = t; i < n; ++i) o += $[e[i]]
      return o
    }
    function D(e, t, n) {
      for (var r = e.slice(t, n), o = '', i = 0; i < r.length - 1; i += 2)
        o += String.fromCharCode(r[i] + 256 * r[i + 1])
      return o
    }
    function _(e, t, n) {
      if (e % 1 != 0 || e < 0) throw new RangeError('offset is not uint')
      if (e + t > n)
        throw new RangeError('Trying to access beyond buffer length')
    }
    function N(e, t, n, r, o, i) {
      if (!f.isBuffer(e))
        throw new TypeError('"buffer" argument must be a Buffer instance')
      if (t > o || t < i)
        throw new RangeError('"value" argument is out of bounds')
      if (n + r > e.length) throw new RangeError('Index out of range')
    }
    function I(e, t, n, r, o, i) {
      if (n + r > e.length) throw new RangeError('Index out of range')
      if (n < 0) throw new RangeError('Index out of range')
    }
    function B(e, t, n, r, o) {
      return (
        (t = +t),
        (n >>>= 0),
        o || I(e, 0, n, 4),
        l.write(e, t, n, r, 23, 4),
        n + 4
      )
    }
    function z(e, t, n, r, o) {
      return (
        (t = +t),
        (n >>>= 0),
        o || I(e, 0, n, 8),
        l.write(e, t, n, r, 52, 8),
        n + 8
      )
    }
    ;(f.prototype.slice = function (e, t) {
      var n = this.length
      ;(e = ~~e) < 0 ? (e += n) < 0 && (e = 0) : e > n && (e = n),
        (t = void 0 === t ? n : ~~t) < 0
          ? (t += n) < 0 && (t = 0)
          : t > n && (t = n),
        t < e && (t = e)
      var r = this.subarray(e, t)
      return Object.setPrototypeOf(r, f.prototype), r
    }),
      (f.prototype.readUintLE = f.prototype.readUIntLE =
        function (e, t, n) {
          ;(e >>>= 0), (t >>>= 0), n || _(e, t, this.length)
          for (var r = this[e], o = 1, i = 0; ++i < t && (o *= 256); )
            r += this[e + i] * o
          return r
        }),
      (f.prototype.readUintBE = f.prototype.readUIntBE =
        function (e, t, n) {
          ;(e >>>= 0), (t >>>= 0), n || _(e, t, this.length)
          for (var r = this[e + --t], o = 1; t > 0 && (o *= 256); )
            r += this[e + --t] * o
          return r
        }),
      (f.prototype.readUint8 = f.prototype.readUInt8 =
        function (e, t) {
          return (e >>>= 0), t || _(e, 1, this.length), this[e]
        }),
      (f.prototype.readUint16LE = f.prototype.readUInt16LE =
        function (e, t) {
          return (
            (e >>>= 0), t || _(e, 2, this.length), this[e] | (this[e + 1] << 8)
          )
        }),
      (f.prototype.readUint16BE = f.prototype.readUInt16BE =
        function (e, t) {
          return (
            (e >>>= 0), t || _(e, 2, this.length), (this[e] << 8) | this[e + 1]
          )
        }),
      (f.prototype.readUint32LE = f.prototype.readUInt32LE =
        function (e, t) {
          return (
            (e >>>= 0),
            t || _(e, 4, this.length),
            (this[e] | (this[e + 1] << 8) | (this[e + 2] << 16)) +
              16777216 * this[e + 3]
          )
        }),
      (f.prototype.readUint32BE = f.prototype.readUInt32BE =
        function (e, t) {
          return (
            (e >>>= 0),
            t || _(e, 4, this.length),
            16777216 * this[e] +
              ((this[e + 1] << 16) | (this[e + 2] << 8) | this[e + 3])
          )
        }),
      (f.prototype.readIntLE = function (e, t, n) {
        ;(e >>>= 0), (t >>>= 0), n || _(e, t, this.length)
        for (var r = this[e], o = 1, i = 0; ++i < t && (o *= 256); )
          r += this[e + i] * o
        return r >= (o *= 128) && (r -= Math.pow(2, 8 * t)), r
      }),
      (f.prototype.readIntBE = function (e, t, n) {
        ;(e >>>= 0), (t >>>= 0), n || _(e, t, this.length)
        for (var r = t, o = 1, i = this[e + --r]; r > 0 && (o *= 256); )
          i += this[e + --r] * o
        return i >= (o *= 128) && (i -= Math.pow(2, 8 * t)), i
      }),
      (f.prototype.readInt8 = function (e, t) {
        return (
          (e >>>= 0),
          t || _(e, 1, this.length),
          128 & this[e] ? -1 * (255 - this[e] + 1) : this[e]
        )
      }),
      (f.prototype.readInt16LE = function (e, t) {
        ;(e >>>= 0), t || _(e, 2, this.length)
        var n = this[e] | (this[e + 1] << 8)
        return 32768 & n ? 4294901760 | n : n
      }),
      (f.prototype.readInt16BE = function (e, t) {
        ;(e >>>= 0), t || _(e, 2, this.length)
        var n = this[e + 1] | (this[e] << 8)
        return 32768 & n ? 4294901760 | n : n
      }),
      (f.prototype.readInt32LE = function (e, t) {
        return (
          (e >>>= 0),
          t || _(e, 4, this.length),
          this[e] |
            (this[e + 1] << 8) |
            (this[e + 2] << 16) |
            (this[e + 3] << 24)
        )
      }),
      (f.prototype.readInt32BE = function (e, t) {
        return (
          (e >>>= 0),
          t || _(e, 4, this.length),
          (this[e] << 24) |
            (this[e + 1] << 16) |
            (this[e + 2] << 8) |
            this[e + 3]
        )
      }),
      (f.prototype.readFloatLE = function (e, t) {
        return (e >>>= 0), t || _(e, 4, this.length), l.read(this, e, !0, 23, 4)
      }),
      (f.prototype.readFloatBE = function (e, t) {
        return (e >>>= 0), t || _(e, 4, this.length), l.read(this, e, !1, 23, 4)
      }),
      (f.prototype.readDoubleLE = function (e, t) {
        return (e >>>= 0), t || _(e, 8, this.length), l.read(this, e, !0, 52, 8)
      }),
      (f.prototype.readDoubleBE = function (e, t) {
        return (e >>>= 0), t || _(e, 8, this.length), l.read(this, e, !1, 52, 8)
      }),
      (f.prototype.writeUintLE = f.prototype.writeUIntLE =
        function (e, t, n, r) {
          ;((e = +e), (t >>>= 0), (n >>>= 0), r) ||
            N(this, e, t, n, Math.pow(2, 8 * n) - 1, 0)
          var o = 1,
            i = 0
          for (this[t] = 255 & e; ++i < n && (o *= 256); )
            this[t + i] = (e / o) & 255
          return t + n
        }),
      (f.prototype.writeUintBE = f.prototype.writeUIntBE =
        function (e, t, n, r) {
          ;((e = +e), (t >>>= 0), (n >>>= 0), r) ||
            N(this, e, t, n, Math.pow(2, 8 * n) - 1, 0)
          var o = n - 1,
            i = 1
          for (this[t + o] = 255 & e; --o >= 0 && (i *= 256); )
            this[t + o] = (e / i) & 255
          return t + n
        }),
      (f.prototype.writeUint8 = f.prototype.writeUInt8 =
        function (e, t, n) {
          return (
            (e = +e),
            (t >>>= 0),
            n || N(this, e, t, 1, 255, 0),
            (this[t] = 255 & e),
            t + 1
          )
        }),
      (f.prototype.writeUint16LE = f.prototype.writeUInt16LE =
        function (e, t, n) {
          return (
            (e = +e),
            (t >>>= 0),
            n || N(this, e, t, 2, 65535, 0),
            (this[t] = 255 & e),
            (this[t + 1] = e >>> 8),
            t + 2
          )
        }),
      (f.prototype.writeUint16BE = f.prototype.writeUInt16BE =
        function (e, t, n) {
          return (
            (e = +e),
            (t >>>= 0),
            n || N(this, e, t, 2, 65535, 0),
            (this[t] = e >>> 8),
            (this[t + 1] = 255 & e),
            t + 2
          )
        }),
      (f.prototype.writeUint32LE = f.prototype.writeUInt32LE =
        function (e, t, n) {
          return (
            (e = +e),
            (t >>>= 0),
            n || N(this, e, t, 4, 4294967295, 0),
            (this[t + 3] = e >>> 24),
            (this[t + 2] = e >>> 16),
            (this[t + 1] = e >>> 8),
            (this[t] = 255 & e),
            t + 4
          )
        }),
      (f.prototype.writeUint32BE = f.prototype.writeUInt32BE =
        function (e, t, n) {
          return (
            (e = +e),
            (t >>>= 0),
            n || N(this, e, t, 4, 4294967295, 0),
            (this[t] = e >>> 24),
            (this[t + 1] = e >>> 16),
            (this[t + 2] = e >>> 8),
            (this[t + 3] = 255 & e),
            t + 4
          )
        }),
      (f.prototype.writeIntLE = function (e, t, n, r) {
        if (((e = +e), (t >>>= 0), !r)) {
          var o = Math.pow(2, 8 * n - 1)
          N(this, e, t, n, o - 1, -o)
        }
        var i = 0,
          a = 1,
          l = 0
        for (this[t] = 255 & e; ++i < n && (a *= 256); )
          e < 0 && 0 === l && 0 !== this[t + i - 1] && (l = 1),
            (this[t + i] = (((e / a) >> 0) - l) & 255)
        return t + n
      }),
      (f.prototype.writeIntBE = function (e, t, n, r) {
        if (((e = +e), (t >>>= 0), !r)) {
          var o = Math.pow(2, 8 * n - 1)
          N(this, e, t, n, o - 1, -o)
        }
        var i = n - 1,
          a = 1,
          l = 0
        for (this[t + i] = 255 & e; --i >= 0 && (a *= 256); )
          e < 0 && 0 === l && 0 !== this[t + i + 1] && (l = 1),
            (this[t + i] = (((e / a) >> 0) - l) & 255)
        return t + n
      }),
      (f.prototype.writeInt8 = function (e, t, n) {
        return (
          (e = +e),
          (t >>>= 0),
          n || N(this, e, t, 1, 127, -128),
          e < 0 && (e = 255 + e + 1),
          (this[t] = 255 & e),
          t + 1
        )
      }),
      (f.prototype.writeInt16LE = function (e, t, n) {
        return (
          (e = +e),
          (t >>>= 0),
          n || N(this, e, t, 2, 32767, -32768),
          (this[t] = 255 & e),
          (this[t + 1] = e >>> 8),
          t + 2
        )
      }),
      (f.prototype.writeInt16BE = function (e, t, n) {
        return (
          (e = +e),
          (t >>>= 0),
          n || N(this, e, t, 2, 32767, -32768),
          (this[t] = e >>> 8),
          (this[t + 1] = 255 & e),
          t + 2
        )
      }),
      (f.prototype.writeInt32LE = function (e, t, n) {
        return (
          (e = +e),
          (t >>>= 0),
          n || N(this, e, t, 4, 2147483647, -2147483648),
          (this[t] = 255 & e),
          (this[t + 1] = e >>> 8),
          (this[t + 2] = e >>> 16),
          (this[t + 3] = e >>> 24),
          t + 4
        )
      }),
      (f.prototype.writeInt32BE = function (e, t, n) {
        return (
          (e = +e),
          (t >>>= 0),
          n || N(this, e, t, 4, 2147483647, -2147483648),
          e < 0 && (e = 4294967295 + e + 1),
          (this[t] = e >>> 24),
          (this[t + 1] = e >>> 16),
          (this[t + 2] = e >>> 8),
          (this[t + 3] = 255 & e),
          t + 4
        )
      }),
      (f.prototype.writeFloatLE = function (e, t, n) {
        return B(this, e, t, !0, n)
      }),
      (f.prototype.writeFloatBE = function (e, t, n) {
        return B(this, e, t, !1, n)
      }),
      (f.prototype.writeDoubleLE = function (e, t, n) {
        return z(this, e, t, !0, n)
      }),
      (f.prototype.writeDoubleBE = function (e, t, n) {
        return z(this, e, t, !1, n)
      }),
      (f.prototype.copy = function (e, t, n, r) {
        if (!f.isBuffer(e)) throw new TypeError('argument should be a Buffer')
        if (
          (n || (n = 0),
          r || 0 === r || (r = this.length),
          t >= e.length && (t = e.length),
          t || (t = 0),
          r > 0 && r < n && (r = n),
          r === n)
        )
          return 0
        if (0 === e.length || 0 === this.length) return 0
        if (t < 0) throw new RangeError('targetStart out of bounds')
        if (n < 0 || n >= this.length)
          throw new RangeError('Index out of range')
        if (r < 0) throw new RangeError('sourceEnd out of bounds')
        r > this.length && (r = this.length),
          e.length - t < r - n && (r = e.length - t + n)
        var o = r - n
        return (
          this === e && 'function' == typeof Uint8Array.prototype.copyWithin
            ? this.copyWithin(t, n, r)
            : Uint8Array.prototype.set.call(e, this.subarray(n, r), t),
          o
        )
      }),
      (f.prototype.fill = function (e, t, n, r) {
        if ('string' == typeof e) {
          if (
            ('string' == typeof t
              ? ((r = t), (t = 0), (n = this.length))
              : 'string' == typeof n && ((r = n), (n = this.length)),
            void 0 !== r && 'string' != typeof r)
          )
            throw new TypeError('encoding must be a string')
          if ('string' == typeof r && !f.isEncoding(r))
            throw new TypeError('Unknown encoding: ' + r)
          if (1 === e.length) {
            var o = e.charCodeAt(0)
            ;(('utf8' === r && o < 128) || 'latin1' === r) && (e = o)
          }
        } else
          'number' == typeof e
            ? (e &= 255)
            : 'boolean' == typeof e && (e = Number(e))
        if (t < 0 || this.length < t || this.length < n)
          throw new RangeError('Out of range index')
        if (n <= t) return this
        var i
        if (
          ((t >>>= 0),
          (n = void 0 === n ? this.length : n >>> 0),
          e || (e = 0),
          'number' == typeof e)
        )
          for (i = t; i < n; ++i) this[i] = e
        else {
          var a = f.isBuffer(e) ? e : f.from(e, r),
            l = a.length
          if (0 === l)
            throw new TypeError(
              'The value "' + e + '" is invalid for argument "value"'
            )
          for (i = 0; i < n - t; ++i) this[i + t] = a[i % l]
        }
        return this
      })
    var M = /[^+/0-9A-Za-z-_]/g
    function U(e, t) {
      var n
      t = t || 1 / 0
      for (var r = e.length, o = null, i = [], a = 0; a < r; ++a) {
        if ((n = e.charCodeAt(a)) > 55295 && n < 57344) {
          if (!o) {
            if (n > 56319) {
              ;(t -= 3) > -1 && i.push(239, 191, 189)
              continue
            }
            if (a + 1 === r) {
              ;(t -= 3) > -1 && i.push(239, 191, 189)
              continue
            }
            o = n
            continue
          }
          if (n < 56320) {
            ;(t -= 3) > -1 && i.push(239, 191, 189), (o = n)
            continue
          }
          n = 65536 + (((o - 55296) << 10) | (n - 56320))
        } else o && (t -= 3) > -1 && i.push(239, 191, 189)
        if (((o = null), n < 128)) {
          if ((t -= 1) < 0) break
          i.push(n)
        } else if (n < 2048) {
          if ((t -= 2) < 0) break
          i.push((n >> 6) | 192, (63 & n) | 128)
        } else if (n < 65536) {
          if ((t -= 3) < 0) break
          i.push((n >> 12) | 224, ((n >> 6) & 63) | 128, (63 & n) | 128)
        } else {
          if (!(n < 1114112)) throw new Error('Invalid code point')
          if ((t -= 4) < 0) break
          i.push(
            (n >> 18) | 240,
            ((n >> 12) & 63) | 128,
            ((n >> 6) & 63) | 128,
            (63 & n) | 128
          )
        }
      }
      return i
    }
    function q(e) {
      return a.toByteArray(
        (function (e) {
          if ((e = (e = e.split('=')[0]).trim().replace(M, '')).length < 2)
            return ''
          for (; e.length % 4 != 0; ) e += '='
          return e
        })(e)
      )
    }
    function V(e, t, n, r) {
      for (var o = 0; o < r && !(o + n >= t.length || o >= e.length); ++o)
        t[o + n] = e[o]
      return o
    }
    function H(e, t) {
      return (
        e instanceof t ||
        (null != e &&
          null != e.constructor &&
          null != e.constructor.name &&
          e.constructor.name === t.name)
      )
    }
    function W(e) {
      return e != e
    }
    var $ = (function () {
      for (var e = '0123456789abcdef', t = new Array(256), n = 0; n < 16; ++n)
        for (var r = 16 * n, o = 0; o < 16; ++o) t[r + o] = e[n] + e[o]
      return t
    })()
  }),
  i.register('c6flE', function (t, n) {
    var r, o
    e(
      t.exports,
      'toByteArray',
      () => r,
      (e) => (r = e)
    ),
      e(
        t.exports,
        'fromByteArray',
        () => o,
        (e) => (o = e)
      ),
      (r = function (e) {
        var t,
          n,
          r = f(e),
          o = r[0],
          i = r[1],
          u = new l(
            (function (e, t, n) {
              return (3 * (t + n)) / 4 - n
            })(0, o, i)
          ),
          s = 0,
          c = i > 0 ? o - 4 : o
        for (n = 0; n < c; n += 4)
          (t =
            (a[e.charCodeAt(n)] << 18) |
            (a[e.charCodeAt(n + 1)] << 12) |
            (a[e.charCodeAt(n + 2)] << 6) |
            a[e.charCodeAt(n + 3)]),
            (u[s++] = (t >> 16) & 255),
            (u[s++] = (t >> 8) & 255),
            (u[s++] = 255 & t)
        2 === i &&
          ((t = (a[e.charCodeAt(n)] << 2) | (a[e.charCodeAt(n + 1)] >> 4)),
          (u[s++] = 255 & t))
        1 === i &&
          ((t =
            (a[e.charCodeAt(n)] << 10) |
            (a[e.charCodeAt(n + 1)] << 4) |
            (a[e.charCodeAt(n + 2)] >> 2)),
          (u[s++] = (t >> 8) & 255),
          (u[s++] = 255 & t))
        return u
      }),
      (o = function (e) {
        for (
          var t, n = e.length, r = n % 3, o = [], a = 16383, l = 0, u = n - r;
          l < u;
          l += a
        )
          o.push(p(e, l, l + a > u ? u : l + a))
        1 === r
          ? ((t = e[n - 1]), o.push(i[t >> 2] + i[(t << 4) & 63] + '=='))
          : 2 === r &&
            ((t = (e[n - 2] << 8) + e[n - 1]),
            o.push(i[t >> 10] + i[(t >> 4) & 63] + i[(t << 2) & 63] + '='))
        return o.join('')
      })
    for (
      var i = [],
        a = [],
        l = 'undefined' != typeof Uint8Array ? Uint8Array : Array,
        u = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/',
        s = 0,
        c = u.length;
      s < c;
      ++s
    )
      (i[s] = u[s]), (a[u.charCodeAt(s)] = s)
    function f(e) {
      var t = e.length
      if (t % 4 > 0)
        throw new Error('Invalid string. Length must be a multiple of 4')
      var n = e.indexOf('=')
      return -1 === n && (n = t), [n, n === t ? 0 : 4 - (n % 4)]
    }
    function p(e, t, n) {
      for (var r, o, a = [], l = t; l < n; l += 3)
        (r =
          ((e[l] << 16) & 16711680) +
          ((e[l + 1] << 8) & 65280) +
          (255 & e[l + 2])),
          a.push(
            i[((o = r) >> 18) & 63] +
              i[(o >> 12) & 63] +
              i[(o >> 6) & 63] +
              i[63 & o]
          )
      return a.join('')
    }
    ;(a['-'.charCodeAt(0)] = 62), (a['_'.charCodeAt(0)] = 63)
  }),
  i.register('5UWbo', function (t, n) {
    /*! ieee754. BSD-3-Clause License. Feross Aboukhadijeh <https://feross.org/opensource> */ var r,
      o
    e(
      t.exports,
      'read',
      () => r,
      (e) => (r = e)
    ),
      e(
        t.exports,
        'write',
        () => o,
        (e) => (o = e)
      ),
      (r = function (e, t, n, r, o) {
        var i,
          a,
          l = 8 * o - r - 1,
          u = (1 << l) - 1,
          s = u >> 1,
          c = -7,
          f = n ? o - 1 : 0,
          p = n ? -1 : 1,
          d = e[t + f]
        for (
          f += p, i = d & ((1 << -c) - 1), d >>= -c, c += l;
          c > 0;
          i = 256 * i + e[t + f], f += p, c -= 8
        );
        for (
          a = i & ((1 << -c) - 1), i >>= -c, c += r;
          c > 0;
          a = 256 * a + e[t + f], f += p, c -= 8
        );
        if (0 === i) i = 1 - s
        else {
          if (i === u) return a ? NaN : (1 / 0) * (d ? -1 : 1)
          ;(a += Math.pow(2, r)), (i -= s)
        }
        return (d ? -1 : 1) * a * Math.pow(2, i - r)
      }),
      (o = function (e, t, n, r, o, i) {
        var a,
          l,
          u,
          s = 8 * i - o - 1,
          c = (1 << s) - 1,
          f = c >> 1,
          p = 23 === o ? Math.pow(2, -24) - Math.pow(2, -77) : 0,
          d = r ? 0 : i - 1,
          h = r ? 1 : -1,
          g = t < 0 || (0 === t && 1 / t < 0) ? 1 : 0
        for (
          t = Math.abs(t),
            isNaN(t) || t === 1 / 0
              ? ((l = isNaN(t) ? 1 : 0), (a = c))
              : ((a = Math.floor(Math.log(t) / Math.LN2)),
                t * (u = Math.pow(2, -a)) < 1 && (a--, (u *= 2)),
                (t += a + f >= 1 ? p / u : p * Math.pow(2, 1 - f)) * u >= 2 &&
                  (a++, (u /= 2)),
                a + f >= c
                  ? ((l = 0), (a = c))
                  : a + f >= 1
                    ? ((l = (t * u - 1) * Math.pow(2, o)), (a += f))
                    : ((l = t * Math.pow(2, f - 1) * Math.pow(2, o)), (a = 0)));
          o >= 8;
          e[n + d] = 255 & l, d += h, l /= 256, o -= 8
        );
        for (
          a = (a << o) | l, s += o;
          s > 0;
          e[n + d] = 255 & a, d += h, a /= 256, s -= 8
        );
        e[n + d - h] |= 128 * g
      })
  }),
  i.register('8MWe7', function (e, t) {
    var n = i('54m5J'),
      r = i('fxLzb'),
      o = i('aQ8Jl'),
      a = i('hwhGT'),
      l = i('2NxoO'),
      u = i('05j2w'),
      s = i('8HaYf'),
      c = i('dxtav'),
      f = i('23OpW'),
      p = i('cXIsv'),
      d = i('gw3AD')
    e.exports = function (e) {
      return new Promise(function (t, i) {
        var h,
          g = e.data,
          m = e.headers,
          y = e.responseType
        function v() {
          e.cancelToken && e.cancelToken.unsubscribe(h),
            e.signal && e.signal.removeEventListener('abort', h)
        }
        n.isFormData(g) && n.isStandardBrowserEnv() && delete m['Content-Type']
        var b = new XMLHttpRequest()
        if (e.auth) {
          var w = e.auth.username || '',
            x = e.auth.password
              ? unescape(encodeURIComponent(e.auth.password))
              : ''
          m.Authorization = 'Basic ' + btoa(w + ':' + x)
        }
        var k = l(e.baseURL, e.url)
        function S() {
          if (b) {
            var n =
                'getAllResponseHeaders' in b
                  ? u(b.getAllResponseHeaders())
                  : null,
              o = {
                data:
                  y && 'text' !== y && 'json' !== y
                    ? b.response
                    : b.responseText,
                status: b.status,
                statusText: b.statusText,
                headers: n,
                config: e,
                request: b,
              }
            r(
              function (e) {
                t(e), v()
              },
              function (e) {
                i(e), v()
              },
              o
            ),
              (b = null)
          }
        }
        if (
          (b.open(
            e.method.toUpperCase(),
            a(k, e.params, e.paramsSerializer),
            !0
          ),
          (b.timeout = e.timeout),
          'onloadend' in b
            ? (b.onloadend = S)
            : (b.onreadystatechange = function () {
                b &&
                  4 === b.readyState &&
                  (0 !== b.status ||
                    (b.responseURL && 0 === b.responseURL.indexOf('file:'))) &&
                  setTimeout(S)
              }),
          (b.onabort = function () {
            b && (i(new f('Request aborted', f.ECONNABORTED, e, b)), (b = null))
          }),
          (b.onerror = function () {
            i(new f('Network Error', f.ERR_NETWORK, e, b, b)), (b = null)
          }),
          (b.ontimeout = function () {
            var t = e.timeout
                ? 'timeout of ' + e.timeout + 'ms exceeded'
                : 'timeout exceeded',
              n = e.transitional || c
            e.timeoutErrorMessage && (t = e.timeoutErrorMessage),
              i(
                new f(
                  t,
                  n.clarifyTimeoutError ? f.ETIMEDOUT : f.ECONNABORTED,
                  e,
                  b
                )
              ),
              (b = null)
          }),
          n.isStandardBrowserEnv())
        ) {
          var E =
            (e.withCredentials || s(k)) && e.xsrfCookieName
              ? o.read(e.xsrfCookieName)
              : void 0
          E && (m[e.xsrfHeaderName] = E)
        }
        'setRequestHeader' in b &&
          n.forEach(m, function (e, t) {
            void 0 === g && 'content-type' === t.toLowerCase()
              ? delete m[t]
              : b.setRequestHeader(t, e)
          }),
          n.isUndefined(e.withCredentials) ||
            (b.withCredentials = !!e.withCredentials),
          y && 'json' !== y && (b.responseType = e.responseType),
          'function' == typeof e.onDownloadProgress &&
            b.addEventListener('progress', e.onDownloadProgress),
          'function' == typeof e.onUploadProgress &&
            b.upload &&
            b.upload.addEventListener('progress', e.onUploadProgress),
          (e.cancelToken || e.signal) &&
            ((h = function (e) {
              b && (i(!e || (e && e.type) ? new p() : e), b.abort(), (b = null))
            }),
            e.cancelToken && e.cancelToken.subscribe(h),
            e.signal &&
              (e.signal.aborted ? h() : e.signal.addEventListener('abort', h))),
          g || (g = null)
        var C = d(k)
        C && -1 === ['http', 'https', 'file'].indexOf(C)
          ? i(new f('Unsupported protocol ' + C + ':', f.ERR_BAD_REQUEST, e))
          : b.send(g)
      })
    }
  }),
  i.register('fxLzb', function (e, t) {
    var n = i('23OpW')
    e.exports = function (e, t, r) {
      var o = r.config.validateStatus
      r.status && o && !o(r.status)
        ? t(
            new n(
              'Request failed with status code ' + r.status,
              [n.ERR_BAD_REQUEST, n.ERR_BAD_RESPONSE][
                Math.floor(r.status / 100) - 4
              ],
              r.config,
              r.request,
              r
            )
          )
        : e(r)
    }
  }),
  i.register('aQ8Jl', function (e, t) {
    var n = i('54m5J')
    e.exports = n.isStandardBrowserEnv()
      ? {
          write: function (e, t, r, o, i, a) {
            var l = []
            l.push(e + '=' + encodeURIComponent(t)),
              n.isNumber(r) && l.push('expires=' + new Date(r).toGMTString()),
              n.isString(o) && l.push('path=' + o),
              n.isString(i) && l.push('domain=' + i),
              !0 === a && l.push('secure'),
              (document.cookie = l.join('; '))
          },
          read: function (e) {
            var t = document.cookie.match(
              new RegExp('(^|;\\s*)(' + e + ')=([^;]*)')
            )
            return t ? decodeURIComponent(t[3]) : null
          },
          remove: function (e) {
            this.write(e, '', Date.now() - 864e5)
          },
        }
      : {
          write: function () {},
          read: function () {
            return null
          },
          remove: function () {},
        }
  }),
  i.register('2NxoO', function (e, t) {
    var n = i('fqUNy'),
      r = i('3jINS')
    e.exports = function (e, t) {
      return e && !n(t) ? r(e, t) : t
    }
  }),
  i.register('fqUNy', function (e, t) {
    e.exports = function (e) {
      return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)
    }
  }),
  i.register('3jINS', function (e, t) {
    e.exports = function (e, t) {
      return t ? e.replace(/\/+$/, '') + '/' + t.replace(/^\/+/, '') : e
    }
  }),
  i.register('05j2w', function (e, t) {
    var n = i('54m5J'),
      r = [
        'age',
        'authorization',
        'content-length',
        'content-type',
        'etag',
        'expires',
        'from',
        'host',
        'if-modified-since',
        'if-unmodified-since',
        'last-modified',
        'location',
        'max-forwards',
        'proxy-authorization',
        'referer',
        'retry-after',
        'user-agent',
      ]
    e.exports = function (e) {
      var t,
        o,
        i,
        a = {}
      return e
        ? (n.forEach(e.split('\n'), function (e) {
            if (
              ((i = e.indexOf(':')),
              (t = n.trim(e.substr(0, i)).toLowerCase()),
              (o = n.trim(e.substr(i + 1))),
              t)
            ) {
              if (a[t] && r.indexOf(t) >= 0) return
              a[t] =
                'set-cookie' === t
                  ? (a[t] ? a[t] : []).concat([o])
                  : a[t]
                    ? a[t] + ', ' + o
                    : o
            }
          }),
          a)
        : a
    }
  }),
  i.register('8HaYf', function (e, t) {
    var n = i('54m5J')
    e.exports = n.isStandardBrowserEnv()
      ? (function () {
          var e,
            t = /(msie|trident)/i.test(navigator.userAgent),
            r = document.createElement('a')
          function o(e) {
            var n = e
            return (
              t && (r.setAttribute('href', n), (n = r.href)),
              r.setAttribute('href', n),
              {
                href: r.href,
                protocol: r.protocol ? r.protocol.replace(/:$/, '') : '',
                host: r.host,
                search: r.search ? r.search.replace(/^\?/, '') : '',
                hash: r.hash ? r.hash.replace(/^#/, '') : '',
                hostname: r.hostname,
                port: r.port,
                pathname:
                  '/' === r.pathname.charAt(0) ? r.pathname : '/' + r.pathname,
              }
            )
          }
          return (
            (e = o(window.location.href)),
            function (t) {
              var r = n.isString(t) ? o(t) : t
              return r.protocol === e.protocol && r.host === e.host
            }
          )
        })()
      : function () {
          return !0
        }
  }),
  i.register('cXIsv', function (e, t) {
    var n = i('23OpW')
    function r(e) {
      n.call(this, null == e ? 'canceled' : e, n.ERR_CANCELED),
        (this.name = 'CanceledError')
    }
    i('54m5J').inherits(r, n, { __CANCEL__: !0 }), (e.exports = r)
  }),
  i.register('gw3AD', function (e, t) {
    e.exports = function (e) {
      var t = /^([-+\w]{1,25})(:?\/\/|:)/.exec(e)
      return (t && t[1]) || ''
    }
  }),
  i.register('dR1mz', function (e, t) {
    e.exports = null
  }),
  i.register('aIrZr', function (e, t) {
    e.exports = function (e) {
      return !(!e || !e.__CANCEL__)
    }
  }),
  i.register('4Jccp', function (e, t) {
    var n = i('54m5J')
    e.exports = function (e, t) {
      t = t || {}
      var r = {}
      function o(e, t) {
        return n.isPlainObject(e) && n.isPlainObject(t)
          ? n.merge(e, t)
          : n.isPlainObject(t)
            ? n.merge({}, t)
            : n.isArray(t)
              ? t.slice()
              : t
      }
      function i(r) {
        return n.isUndefined(t[r])
          ? n.isUndefined(e[r])
            ? void 0
            : o(void 0, e[r])
          : o(e[r], t[r])
      }
      function a(e) {
        if (!n.isUndefined(t[e])) return o(void 0, t[e])
      }
      function l(r) {
        return n.isUndefined(t[r])
          ? n.isUndefined(e[r])
            ? void 0
            : o(void 0, e[r])
          : o(void 0, t[r])
      }
      function u(n) {
        return n in t ? o(e[n], t[n]) : n in e ? o(void 0, e[n]) : void 0
      }
      var s = {
        url: a,
        method: a,
        data: a,
        baseURL: l,
        transformRequest: l,
        transformResponse: l,
        paramsSerializer: l,
        timeout: l,
        timeoutMessage: l,
        withCredentials: l,
        adapter: l,
        responseType: l,
        xsrfCookieName: l,
        xsrfHeaderName: l,
        onUploadProgress: l,
        onDownloadProgress: l,
        decompress: l,
        maxContentLength: l,
        maxBodyLength: l,
        beforeRedirect: l,
        transport: l,
        httpAgent: l,
        httpsAgent: l,
        cancelToken: l,
        socketPath: l,
        responseEncoding: l,
        validateStatus: u,
      }
      return (
        n.forEach(Object.keys(e).concat(Object.keys(t)), function (e) {
          var t = s[e] || i,
            o = t(e)
          ;(n.isUndefined(o) && t !== u) || (r[e] = o)
        }),
        r
      )
    }
  }),
  i.register('d2qsA', function (e, t) {
    var n = i('9Wwqw').version,
      r = i('23OpW'),
      o = {}
    ;['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach(
      function (e, t) {
        o[e] = function (n) {
          return typeof n === e || 'a' + (t < 1 ? 'n ' : ' ') + e
        }
      }
    )
    var a = {}
    ;(o.transitional = function (e, t, o) {
      function i(e, t) {
        return (
          '[Axios v' +
          n +
          "] Transitional option '" +
          e +
          "'" +
          t +
          (o ? '. ' + o : '')
        )
      }
      return function (n, o, l) {
        if (!1 === e)
          throw new r(
            i(o, ' has been removed' + (t ? ' in ' + t : '')),
            r.ERR_DEPRECATED
          )
        return (
          t &&
            !a[o] &&
            ((a[o] = !0),
            console.warn(
              i(
                o,
                ' has been deprecated since v' +
                  t +
                  ' and will be removed in the near future'
              )
            )),
          !e || e(n, o, l)
        )
      }
    }),
      (e.exports = {
        assertOptions: function (e, t, n) {
          if ('object' != typeof e)
            throw new r('options must be an object', r.ERR_BAD_OPTION_VALUE)
          for (var o = Object.keys(e), i = o.length; i-- > 0; ) {
            var a = o[i],
              l = t[a]
            if (l) {
              var u = e[a],
                s = void 0 === u || l(u, a, e)
              if (!0 !== s)
                throw new r(
                  'option ' + a + ' must be ' + s,
                  r.ERR_BAD_OPTION_VALUE
                )
            } else if (!0 !== n)
              throw new r('Unknown option ' + a, r.ERR_BAD_OPTION)
          }
        },
        validators: o,
      })
  }),
  i.register('9Wwqw', function (e, t) {
    e.exports = { version: '0.27.2' }
  }),
  i.register('kpoVz', function (e, t) {
    var n = i('cXIsv')
    function r(e) {
      if ('function' != typeof e)
        throw new TypeError('executor must be a function.')
      var t
      this.promise = new Promise(function (e) {
        t = e
      })
      var r = this
      this.promise.then(function (e) {
        if (r._listeners) {
          var t,
            n = r._listeners.length
          for (t = 0; t < n; t++) r._listeners[t](e)
          r._listeners = null
        }
      }),
        (this.promise.then = function (e) {
          var t,
            n = new Promise(function (e) {
              r.subscribe(e), (t = e)
            }).then(e)
          return (
            (n.cancel = function () {
              r.unsubscribe(t)
            }),
            n
          )
        }),
        e(function (e) {
          r.reason || ((r.reason = new n(e)), t(r.reason))
        })
    }
    ;(r.prototype.throwIfRequested = function () {
      if (this.reason) throw this.reason
    }),
      (r.prototype.subscribe = function (e) {
        this.reason
          ? e(this.reason)
          : this._listeners
            ? this._listeners.push(e)
            : (this._listeners = [e])
      }),
      (r.prototype.unsubscribe = function (e) {
        if (this._listeners) {
          var t = this._listeners.indexOf(e)
          ;-1 !== t && this._listeners.splice(t, 1)
        }
      }),
      (r.source = function () {
        var e
        return {
          token: new r(function (t) {
            e = t
          }),
          cancel: e,
        }
      }),
      (e.exports = r)
  }),
  i.register('fXhex', function (e, t) {
    e.exports = function (e) {
      return function (t) {
        return e.apply(null, t)
      }
    }
  }),
  i.register('ha9xL', function (e, t) {
    var n = i('54m5J')
    e.exports = function (e) {
      return n.isObject(e) && !0 === e.isAxiosError
    }
  }),
  i.register('734S0', function (e, t) {
    var n = 'undefined' != typeof Symbol && Symbol,
      r = i('eA2K9')
    e.exports = function () {
      return (
        'function' == typeof n &&
        'function' == typeof Symbol &&
        'symbol' == typeof n('foo') &&
        'symbol' == typeof Symbol('bar') &&
        r()
      )
    }
  }),
  i.register('eA2K9', function (e, t) {
    e.exports = function () {
      if (
        'function' != typeof Symbol ||
        'function' != typeof Object.getOwnPropertySymbols
      )
        return !1
      if ('symbol' == typeof Symbol.iterator) return !0
      var e = {},
        t = Symbol('test'),
        n = Object(t)
      if ('string' == typeof t) return !1
      if ('[object Symbol]' !== Object.prototype.toString.call(t)) return !1
      if ('[object Symbol]' !== Object.prototype.toString.call(n)) return !1
      for (t in ((e[t] = 42), e)) return !1
      if ('function' == typeof Object.keys && 0 !== Object.keys(e).length)
        return !1
      if (
        'function' == typeof Object.getOwnPropertyNames &&
        0 !== Object.getOwnPropertyNames(e).length
      )
        return !1
      var r = Object.getOwnPropertySymbols(e)
      if (1 !== r.length || r[0] !== t) return !1
      if (!Object.prototype.propertyIsEnumerable.call(e, t)) return !1
      if ('function' == typeof Object.getOwnPropertyDescriptor) {
        var o = Object.getOwnPropertyDescriptor(e, t)
        if (42 !== o.value || !0 !== o.enumerable) return !1
      }
      return !0
    }
  }),
  i.register('kR54n', function (e, t) {
    function n(e, t) {
      var n = [],
        r = []
      return (
        null == t &&
          (t = function (e, t) {
            return n[0] === t
              ? '[Circular ~]'
              : '[Circular ~.' + r.slice(0, n.indexOf(t)).join('.') + ']'
          }),
        function (o, i) {
          if (n.length > 0) {
            var a = n.indexOf(this)
            ~a ? n.splice(a + 1) : n.push(this),
              ~a ? r.splice(a, 1 / 0, o) : r.push(o),
              ~n.indexOf(i) && (i = t.call(this, o, i))
          } else n.push(i)
          return null == e ? i : e.call(this, o, i)
        }
      )
    }
    ;(e.exports = function (e, t, r, o) {
      return JSON.stringify(e, n(t, o), r)
    }).getSerialize = n
  }),
  i.register('gBCU4', function (e, t) {
    var n = i('3WCEE')
    function r() {}
    function o() {}
    ;(o.resetWarningCache = r),
      (e.exports = function () {
        function e(e, t, r, o, i, a) {
          if (a !== n) {
            var l = new Error(
              'Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types'
            )
            throw ((l.name = 'Invariant Violation'), l)
          }
        }
        function t() {
          return e
        }
        e.isRequired = e
        var i = {
          array: e,
          bigint: e,
          bool: e,
          func: e,
          number: e,
          object: e,
          string: e,
          symbol: e,
          any: e,
          arrayOf: t,
          element: e,
          elementType: e,
          instanceOf: t,
          node: e,
          objectOf: t,
          oneOf: t,
          oneOfType: t,
          shape: t,
          exact: t,
          checkPropTypes: o,
          resetWarningCache: r,
        }
        return (i.PropTypes = i), i
      })
  }),
  i.register('3WCEE', function (e, t) {
    e.exports = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED'
  }),
  i.register('dzkBI', function (t, n) {
    /**
     * @license React
     * react-is.production.min.js
     *
     * Copyright (c) Facebook, Inc. and its affiliates.
     *
     * This source code is licensed under the MIT license found in the
     * LICENSE file in the root directory of this source tree.
     */
    var r,
      o,
      i,
      a,
      l,
      u,
      s,
      c,
      f,
      p,
      d,
      h,
      g,
      m,
      y,
      v,
      b,
      w,
      x,
      k,
      S,
      E,
      C,
      O,
      A,
      P,
      T,
      L
    e(
      t.exports,
      'ContextConsumer',
      () => r,
      (e) => (r = e)
    ),
      e(
        t.exports,
        'ContextProvider',
        () => o,
        (e) => (o = e)
      ),
      e(
        t.exports,
        'Element',
        () => i,
        (e) => (i = e)
      ),
      e(
        t.exports,
        'ForwardRef',
        () => a,
        (e) => (a = e)
      ),
      e(
        t.exports,
        'Fragment',
        () => l,
        (e) => (l = e)
      ),
      e(
        t.exports,
        'Lazy',
        () => u,
        (e) => (u = e)
      ),
      e(
        t.exports,
        'Memo',
        () => s,
        (e) => (s = e)
      ),
      e(
        t.exports,
        'Portal',
        () => c,
        (e) => (c = e)
      ),
      e(
        t.exports,
        'Profiler',
        () => f,
        (e) => (f = e)
      ),
      e(
        t.exports,
        'StrictMode',
        () => p,
        (e) => (p = e)
      ),
      e(
        t.exports,
        'Suspense',
        () => d,
        (e) => (d = e)
      ),
      e(
        t.exports,
        'SuspenseList',
        () => h,
        (e) => (h = e)
      ),
      e(
        t.exports,
        'isAsyncMode',
        () => g,
        (e) => (g = e)
      ),
      e(
        t.exports,
        'isConcurrentMode',
        () => m,
        (e) => (m = e)
      ),
      e(
        t.exports,
        'isContextConsumer',
        () => y,
        (e) => (y = e)
      ),
      e(
        t.exports,
        'isContextProvider',
        () => v,
        (e) => (v = e)
      ),
      e(
        t.exports,
        'isElement',
        () => b,
        (e) => (b = e)
      ),
      e(
        t.exports,
        'isForwardRef',
        () => w,
        (e) => (w = e)
      ),
      e(
        t.exports,
        'isFragment',
        () => x,
        (e) => (x = e)
      ),
      e(
        t.exports,
        'isLazy',
        () => k,
        (e) => (k = e)
      ),
      e(
        t.exports,
        'isMemo',
        () => S,
        (e) => (S = e)
      ),
      e(
        t.exports,
        'isPortal',
        () => E,
        (e) => (E = e)
      ),
      e(
        t.exports,
        'isProfiler',
        () => C,
        (e) => (C = e)
      ),
      e(
        t.exports,
        'isStrictMode',
        () => O,
        (e) => (O = e)
      ),
      e(
        t.exports,
        'isSuspense',
        () => A,
        (e) => (A = e)
      ),
      e(
        t.exports,
        'isSuspenseList',
        () => P,
        (e) => (P = e)
      ),
      e(
        t.exports,
        'isValidElementType',
        () => T,
        (e) => (T = e)
      ),
      e(
        t.exports,
        'typeOf',
        () => L,
        (e) => (L = e)
      )
    var R,
      F = Symbol.for('react.element'),
      j = Symbol.for('react.portal'),
      D = Symbol.for('react.fragment'),
      _ = Symbol.for('react.strict_mode'),
      N = Symbol.for('react.profiler'),
      I = Symbol.for('react.provider'),
      B = Symbol.for('react.context'),
      z = Symbol.for('react.server_context'),
      M = Symbol.for('react.forward_ref'),
      U = Symbol.for('react.suspense'),
      q = Symbol.for('react.suspense_list'),
      V = Symbol.for('react.memo'),
      H = Symbol.for('react.lazy'),
      W = Symbol.for('react.offscreen')
    function $(e) {
      if ('object' == typeof e && null !== e) {
        var t = e.$$typeof
        switch (t) {
          case F:
            switch ((e = e.type)) {
              case D:
              case N:
              case _:
              case U:
              case q:
                return e
              default:
                switch ((e = e && e.$$typeof)) {
                  case z:
                  case B:
                  case M:
                  case H:
                  case V:
                  case I:
                    return e
                  default:
                    return t
                }
            }
          case j:
            return t
        }
      }
    }
    ;(R = Symbol.for('react.module.reference')),
      (r = B),
      (o = I),
      (i = F),
      (a = M),
      (l = D),
      (u = H),
      (s = V),
      (c = j),
      (f = N),
      (p = _),
      (d = U),
      (h = q),
      (g = function () {
        return !1
      }),
      (m = function () {
        return !1
      }),
      (y = function (e) {
        return $(e) === B
      }),
      (v = function (e) {
        return $(e) === I
      }),
      (b = function (e) {
        return 'object' == typeof e && null !== e && e.$$typeof === F
      }),
      (w = function (e) {
        return $(e) === M
      }),
      (x = function (e) {
        return $(e) === D
      }),
      (k = function (e) {
        return $(e) === H
      }),
      (S = function (e) {
        return $(e) === V
      }),
      (E = function (e) {
        return $(e) === j
      }),
      (C = function (e) {
        return $(e) === N
      }),
      (O = function (e) {
        return $(e) === _
      }),
      (A = function (e) {
        return $(e) === U
      }),
      (P = function (e) {
        return $(e) === q
      }),
      (T = function (e) {
        return (
          'string' == typeof e ||
          'function' == typeof e ||
          e === D ||
          e === N ||
          e === _ ||
          e === U ||
          e === q ||
          e === W ||
          ('object' == typeof e &&
            null !== e &&
            (e.$$typeof === H ||
              e.$$typeof === V ||
              e.$$typeof === I ||
              e.$$typeof === B ||
              e.$$typeof === M ||
              e.$$typeof === R ||
              void 0 !== e.getModuleId))
        )
      }),
      (L = $)
  }),
  i('eqJ66').register(
    JSON.parse(
      '{"hqqam":"index.ac9d7524.js","i49gT":"logo.d07e88b7.png","93Rrn":"index.1860068a.css"}'
    )
  )
var a
a = i('b8reE')
var l,
  u,
  s = i('8tsvq'),
  c = {}
e(
  c,
  'createRoot',
  () => l,
  (e) => (l = e)
),
  e(
    c,
    'hydrateRoot',
    () => u,
    (e) => (u = e)
  )
var f
!(function e() {
  if (
    'undefined' != typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ &&
    'function' == typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)
    } catch (e) {
      console.error(e)
    }
})(),
  (f = i('jhxbP')),
  (l = f.createRoot),
  (u = f.hydrateRoot)
var p
s = i('8tsvq')
p = i('hSrj7')
s = i('8tsvq')
const d = new WeakMap(),
  h = {},
  g = () => {},
  m = g(),
  y = Object,
  v = (e) => e === m,
  b = (e) => 'function' == typeof e,
  w = (e, t) => ({ ...e, ...t }),
  x = 'undefined',
  k = typeof window != x,
  S = typeof document != x,
  E = (e, t) => {
    const n = d.get(e)
    return [
      () => e.get(t) || h,
      (r) => {
        const o = e.get(t)
        n[5](t, w(o, r), o || h)
      },
      n[6],
    ]
  },
  C = new WeakMap()
let O = 0
const A = (e) => {
  const t = typeof e,
    n = e && e.constructor,
    r = n == Date
  let o, i
  if (y(e) !== e || r || n == RegExp)
    o = r
      ? e.toJSON()
      : 'symbol' == t
        ? e.toString()
        : 'string' == t
          ? JSON.stringify(e)
          : '' + e
  else {
    if (((o = C.get(e)), o)) return o
    if (((o = ++O + '~'), C.set(e, o), n == Array)) {
      for (o = '@', i = 0; i < e.length; i++) o += A(e[i]) + ','
      C.set(e, o)
    }
    if (n == y) {
      o = '#'
      const t = y.keys(e).sort()
      for (; !v((i = t.pop())); ) v(e[i]) || (o += i + ':' + A(e[i]) + ',')
      C.set(e, o)
    }
  }
  return o
}
let P = !0
const [T, L] =
    k && window.addEventListener
      ? [
          window.addEventListener.bind(window),
          window.removeEventListener.bind(window),
        ]
      : [g, g],
  R = {
    isOnline: () => P,
    isVisible: () => {
      const e = S && document.visibilityState
      return v(e) || 'hidden' !== e
    },
  },
  F = {
    initFocus: (e) => (
      S && document.addEventListener('visibilitychange', e),
      T('focus', e),
      () => {
        S && document.removeEventListener('visibilitychange', e), L('focus', e)
      }
    ),
    initReconnect: (e) => {
      const t = () => {
          ;(P = !0), e()
        },
        n = () => {
          P = !1
        }
      return (
        T('online', t),
        T('offline', n),
        () => {
          L('online', t), L('offline', n)
        }
      )
    },
  },
  j = !t(s).useId,
  D = !k || 'Deno' in window,
  _ = (e) =>
    k && typeof window.requestAnimationFrame != x
      ? window.requestAnimationFrame(e)
      : setTimeout(e, 1),
  N = D ? s.useEffect : s.useLayoutEffect,
  I = 'undefined' != typeof navigator && navigator.connection,
  B = !D && I && (['slow-2g', '2g'].includes(I.effectiveType) || I.saveData),
  z = (e) => {
    if (b(e))
      try {
        e = e()
      } catch (t) {
        e = ''
      }
    const t = e
    return [
      (e =
        'string' == typeof e
          ? e
          : (Array.isArray(e) ? e.length : e)
            ? A(e)
            : ''),
      t,
    ]
  }
let M = 0
const U = () => ++M
var q = { __proto__: null, FOCUS_EVENT: 0, RECONNECT_EVENT: 1, MUTATE_EVENT: 2 }
async function V(...e) {
  const [t, n, r, o] = e,
    i = w(
      { populateCache: !0, throwOnError: !0 },
      'boolean' == typeof o ? { revalidate: o } : o || {}
    )
  let a = i.populateCache
  const l = i.rollbackOnError
  let u = i.optimisticData
  const s = !1 !== i.revalidate,
    c = i.throwOnError
  if (b(n)) {
    const e = n,
      r = [],
      o = t.keys()
    for (let n = o.next(); !n.done; n = o.next()) {
      const o = n.value
      !o.startsWith('$inf$') && e(t.get(o)._k) && r.push(o)
    }
    return Promise.all(r.map(f))
  }
  return f(n)
  async function f(n) {
    const [o] = z(n)
    if (!o) return
    const [i, f] = E(t, o),
      [p, h, g] = d.get(t),
      y = p[o],
      w = () =>
        s && (delete g[o], y && y[0]) ? y[0](2).then(() => i().data) : i().data
    if (e.length < 3) return w()
    let x,
      k = r
    const S = U()
    h[o] = [S, 0]
    const C = !v(u),
      O = i(),
      A = O.data,
      P = O._c,
      T = v(P) ? A : P
    if ((C && ((u = b(u) ? u(T) : u), f({ data: u, _c: T })), b(k)))
      try {
        k = k(T)
      } catch (e) {
        x = e
      }
    if (k && b(k.then)) {
      if (
        ((k = await k.catch((e) => {
          x = e
        })),
        S !== h[o][0])
      ) {
        if (x) throw x
        return k
      }
      x &&
        C &&
        ((e) => ('function' == typeof l ? l(e) : !1 !== l))(x) &&
        ((a = !0), (k = T), f({ data: k, _c: m }))
    }
    a && (x || (b(a) && (k = a(k, T)), f({ data: k, _c: m }))), (h[o][1] = U())
    const L = await w()
    if ((f({ _c: m }), !x)) return a ? L : k
    if (c) throw x
  }
}
const H = (e, t) => {
    for (const n in e) e[n][0] && e[n][0](t)
  },
  W = (e, t) => {
    if (!d.has(e)) {
      const n = w(F, t),
        r = {},
        o = V.bind(m, e)
      let i = g
      const a = {},
        l = (e, t) => {
          const n = a[e] || []
          return (a[e] = n), n.push(t), () => n.splice(n.indexOf(t), 1)
        },
        u = (t, n, r) => {
          e.set(t, n)
          const o = a[t]
          if (o) for (let e = o.length; e--; ) o[e](r, n)
        },
        s = () => {
          if (!d.has(e) && (d.set(e, [r, {}, {}, {}, o, u, l]), !D)) {
            const t = n.initFocus(setTimeout.bind(m, H.bind(m, r, 0))),
              o = n.initReconnect(setTimeout.bind(m, H.bind(m, r, 1)))
            i = () => {
              t && t(), o && o(), d.delete(e)
            }
          }
        }
      return s(), [e, o, s, i]
    }
    return [e, d.get(e)[4]]
  },
  [$, Q] = W(new Map()),
  G = w(
    {
      onLoadingSlow: g,
      onSuccess: g,
      onError: g,
      onErrorRetry: (e, t, n, r, o) => {
        const i = n.errorRetryCount,
          a = o.retryCount,
          l =
            ~~((Math.random() + 0.5) * (1 << (a < 8 ? a : 8))) *
            n.errorRetryInterval
        ;(!v(i) && a > i) || setTimeout(r, l, o)
      },
      onDiscarded: g,
      revalidateOnFocus: !0,
      revalidateOnReconnect: !0,
      revalidateIfStale: !0,
      shouldRetryOnError: !0,
      errorRetryInterval: B ? 1e4 : 5e3,
      focusThrottleInterval: 5e3,
      dedupingInterval: 2e3,
      loadingTimeout: B ? 5e3 : 3e3,
      compare: (e, t) => A(e) == A(t),
      isPaused: () => !1,
      cache: $,
      mutate: Q,
      fallback: {},
    },
    R
  ),
  J = (e, t) => {
    const n = w(e, t)
    if (t) {
      const { use: r, fallback: o } = e,
        { use: i, fallback: a } = t
      r && i && (n.use = r.concat(i)), o && a && (n.fallback = w(o, a))
    }
    return n
  },
  X = (0, s.createContext)({}),
  Y = k && window.__SWR_DEVTOOLS_USE__,
  K = Y ? window.__SWR_DEVTOOLS_USE__ : [],
  Z = (e) =>
    b(e[1])
      ? [e[0], e[1], e[2] || {}]
      : [e[0], null, (null === e[1] ? e[2] : e[1]) || {}],
  ee = K.concat(
    (e) => (t, n, r) =>
      e(
        t,
        n &&
          ((...e) => {
            const r = z(t)[0],
              [, , , o] = d.get($),
              i = o[r]
            return i ? (delete o[r], i) : n(...e)
          }),
        r
      )
  )
Y && (window.__SWR_DEVTOOLS_REACT__ = t(s))
const te = { dedupe: !0 }
y.defineProperty(
  (e) => {
    const { value: t } = e,
      n = (0, s.useContext)(X),
      r = b(t),
      o = (0, s.useMemo)(() => (r ? t(n) : t), [r, n, t]),
      i = (0, s.useMemo)(() => (r ? o : J(n, o)), [r, n, o]),
      a = o && o.provider,
      [l] = (0, s.useState)(() => (a ? W(a(i.cache || $), o) : m))
    return (
      l && ((i.cache = l[0]), (i.mutate = l[1])),
      N(() => {
        if (l) return l[2] && l[2](), l[3]
      }, []),
      (0, s.createElement)(X.Provider, w(e, { value: i }))
    )
  },
  'defaultValue',
  { value: G }
)
var ne,
  re =
    ((ne = (e, t, n) => {
      const {
          cache: r,
          compare: o,
          suspense: i,
          fallbackData: a,
          revalidateOnMount: l,
          refreshInterval: u,
          refreshWhenHidden: c,
          refreshWhenOffline: f,
          keepPreviousData: h,
        } = n,
        [g, y, x] = d.get(r),
        [k, S] = z(e),
        C = (0, s.useRef)(!1),
        O = (0, s.useRef)(!1),
        A = (0, s.useRef)(k),
        P = (0, s.useRef)(t),
        T = (0, s.useRef)(n),
        L = () => T.current,
        R = () => L().isVisible() && L().isOnline(),
        [F, I, B] = E(r, k),
        M = (0, s.useRef)({}).current,
        H = v(a) ? n.fallback[k] : a,
        W = (e, t) => {
          let n = !0
          for (const r in M) {
            const i = r
            o(t[i], e[i]) || ('data' === i && v(e[i]) && o(t[i], Z)) || (n = !1)
          }
          return n
        },
        $ = (0, s.useMemo)(() => {
          const e = !!k && !!t && (v(l) ? !L().isPaused() && !i : l),
            n = () => {
              const t = F(),
                n = w(t)
              return (
                delete n._k, e ? { isValidating: !0, isLoading: !0, ...n } : n
              )
            }
          let r = n()
          return () => {
            const e = n()
            return W(e, r) ? r : (r = e)
          }
        }, [r, k]),
        Q = (0, p.useSyncExternalStore)(
          (0, s.useCallback)(
            (e) =>
              B(k, (t, n) => {
                W(t, n) || e()
              }),
            [r, k]
          ),
          $,
          $
        ),
        G = !C.current,
        J = Q.data,
        X = v(J) ? H : J,
        Y = Q.error,
        K = (0, s.useRef)(X),
        Z = h ? (v(J) ? K.current : J) : X,
        ee =
          G && !v(l)
            ? l
            : !L().isPaused() &&
              (i ? !v(X) && n.revalidateIfStale : v(X) || n.revalidateIfStale),
        ne = !!(k && t && G && ee),
        re = v(Q.isValidating) ? ne : Q.isValidating,
        oe = v(Q.isLoading) ? ne : Q.isLoading,
        ie = (0, s.useCallback)(
          async (e) => {
            const t = P.current
            if (!k || !t || O.current || L().isPaused()) return !1
            let r,
              i,
              a = !0
            const l = e || {},
              u = !x[k] || !l.dedupe,
              s = () =>
                j
                  ? !O.current && k === A.current && C.current
                  : k === A.current,
              c = { isValidating: !1, isLoading: !1 },
              f = () => {
                I(c)
              },
              p = () => {
                const e = x[k]
                e && e[1] === i && delete x[k]
              },
              d = { isValidating: !0 }
            v(F().data) && (d.isLoading = !0)
            try {
              if (
                (u &&
                  (I(d),
                  n.loadingTimeout &&
                    v(F().data) &&
                    setTimeout(() => {
                      a && s() && L().onLoadingSlow(k, n)
                    }, n.loadingTimeout),
                  (x[k] = [t(S), U()])),
                ([r, i] = x[k]),
                (r = await r),
                u && setTimeout(p, n.dedupingInterval),
                !x[k] || x[k][1] !== i)
              )
                return u && s() && L().onDiscarded(k), !1
              c.error = m
              const e = y[k]
              if (!v(e) && (i <= e[0] || i <= e[1] || 0 === e[1]))
                return f(), u && s() && L().onDiscarded(k), !1
              const l = F().data
              ;(c.data = o(l, r) ? l : r), u && s() && L().onSuccess(r, k, n)
            } catch (e) {
              p()
              const t = L(),
                { shouldRetryOnError: n } = t
              t.isPaused() ||
                ((c.error = e),
                u &&
                  s() &&
                  (t.onError(e, k, t),
                  (!0 === n || (b(n) && n(e))) &&
                    R() &&
                    t.onErrorRetry(e, k, t, ie, {
                      retryCount: (l.retryCount || 0) + 1,
                      dedupe: !0,
                    })))
            }
            return (a = !1), f(), !0
          },
          [k, r]
        ),
        ae = (0, s.useCallback)((...e) => V(r, A.current, ...e), [])
      if (
        (N(() => {
          ;(P.current = t), (T.current = n), v(J) || (K.current = J)
        }),
        N(() => {
          if (!k) return
          const e = ie.bind(m, te)
          let t = 0
          const n = ((e, t, n) => {
            const r = t[e] || (t[e] = [])
            return (
              r.push(n),
              () => {
                const e = r.indexOf(n)
                e >= 0 && ((r[e] = r[r.length - 1]), r.pop())
              }
            )
          })(k, g, (n) => {
            if (n == q.FOCUS_EVENT) {
              const n = Date.now()
              L().revalidateOnFocus &&
                n > t &&
                R() &&
                ((t = n + L().focusThrottleInterval), e())
            } else if (n == q.RECONNECT_EVENT)
              L().revalidateOnReconnect && R() && e()
            else if (n == q.MUTATE_EVENT) return ie()
          })
          return (
            (O.current = !1),
            (A.current = k),
            (C.current = !0),
            I({ _k: S }),
            ee && (v(X) || D ? e() : _(e)),
            () => {
              ;(O.current = !0), n()
            }
          )
        }, [k]),
        N(() => {
          let e
          function t() {
            const t = b(u) ? u(X) : u
            t && -1 !== e && (e = setTimeout(n, t))
          }
          function n() {
            F().error || (!c && !L().isVisible()) || (!f && !L().isOnline())
              ? t()
              : ie(te).then(t)
          }
          return (
            t(),
            () => {
              e && (clearTimeout(e), (e = -1))
            }
          )
        }, [u, c, f, k]),
        (0, s.useDebugValue)(Z),
        i && v(X) && k)
      ) {
        if (!j && D)
          throw new Error(
            'Fallback data is required when using suspense in SSR.'
          )
        throw (
          ((P.current = t),
          (T.current = n),
          (O.current = !1),
          v(Y) ? ie(te) : Y)
        )
      }
      return {
        mutate: ae,
        get data() {
          return (M.data = !0), Z
        },
        get error() {
          return (M.error = !0), Y
        },
        get isValidating() {
          return (M.isValidating = !0), re
        },
        get isLoading() {
          return (M.isLoading = !0), oe
        },
      }
    }),
    function (...e) {
      const t = w(G, (0, s.useContext)(X)),
        [n, r, o] = Z(e),
        i = J(t, o)
      let a = ne
      const { use: l } = i,
        u = (l || []).concat(ee)
      for (let e = u.length; e--; ) a = u[e](a)
      return a(n, r || i.fetcher || null, i)
    })
s = i('8tsvq')
var oe = (function () {
  function e(e) {
    ;(this.isSpeedy = void 0 === e.speedy || e.speedy),
      (this.tags = []),
      (this.ctr = 0),
      (this.nonce = e.nonce),
      (this.key = e.key),
      (this.container = e.container),
      (this.before = null)
  }
  var t = e.prototype
  return (
    (t.insert = function (e) {
      if (this.ctr % (this.isSpeedy ? 65e3 : 1) == 0) {
        var t,
          n = (function (e) {
            var t = document.createElement('style')
            return (
              t.setAttribute('data-emotion', e.key),
              void 0 !== e.nonce && t.setAttribute('nonce', e.nonce),
              t.appendChild(document.createTextNode('')),
              t
            )
          })(this)
        ;(t =
          0 === this.tags.length
            ? this.before
            : this.tags[this.tags.length - 1].nextSibling),
          this.container.insertBefore(n, t),
          this.tags.push(n)
      }
      var r = this.tags[this.tags.length - 1]
      if (this.isSpeedy) {
        var o = (function (e) {
          if (e.sheet) return e.sheet
          for (var t = 0; t < document.styleSheets.length; t++)
            if (document.styleSheets[t].ownerNode === e)
              return document.styleSheets[t]
        })(r)
        try {
          var i = 105 === e.charCodeAt(1) && 64 === e.charCodeAt(0)
          o.insertRule(e, i ? 0 : o.cssRules.length)
        } catch (e) {}
      } else r.appendChild(document.createTextNode(e))
      this.ctr++
    }),
    (t.flush = function () {
      this.tags.forEach(function (e) {
        return e.parentNode.removeChild(e)
      }),
        (this.tags = []),
        (this.ctr = 0)
    }),
    e
  )
})()
var ie = function (e) {
    function t(e, r, u, s, p) {
      for (
        var d,
          h,
          g,
          m,
          w,
          k = 0,
          S = 0,
          E = 0,
          C = 0,
          O = 0,
          F = 0,
          D = (g = d = 0),
          N = 0,
          I = 0,
          B = 0,
          z = 0,
          M = u.length,
          U = M - 1,
          q = '',
          V = '',
          H = '',
          W = '';
        N < M;

      ) {
        if (
          ((h = u.charCodeAt(N)),
          N === U &&
            0 !== S + C + E + k &&
            (0 !== S && (h = 47 === S ? 10 : 47), (C = E = k = 0), M++, U++),
          0 === S + C + E + k)
        ) {
          if (
            N === U &&
            (0 < I && (q = q.replace(f, '')), 0 < q.trim().length)
          ) {
            switch (h) {
              case 32:
              case 9:
              case 59:
              case 13:
              case 10:
                break
              default:
                q += u.charAt(N)
            }
            h = 59
          }
          switch (h) {
            case 123:
              for (d = (q = q.trim()).charCodeAt(0), g = 1, z = ++N; N < M; ) {
                switch ((h = u.charCodeAt(N))) {
                  case 123:
                    g++
                    break
                  case 125:
                    g--
                    break
                  case 47:
                    switch ((h = u.charCodeAt(N + 1))) {
                      case 42:
                      case 47:
                        e: {
                          for (D = N + 1; D < U; ++D)
                            switch (u.charCodeAt(D)) {
                              case 47:
                                if (
                                  42 === h &&
                                  42 === u.charCodeAt(D - 1) &&
                                  N + 2 !== D
                                ) {
                                  N = D + 1
                                  break e
                                }
                                break
                              case 10:
                                if (47 === h) {
                                  N = D + 1
                                  break e
                                }
                            }
                          N = D
                        }
                    }
                    break
                  case 91:
                    h++
                  case 40:
                    h++
                  case 34:
                  case 39:
                    for (; N++ < U && u.charCodeAt(N) !== h; );
                }
                if (0 === g) break
                N++
              }
              if (
                ((g = u.substring(z, N)),
                0 === d && (d = (q = q.replace(c, '').trim()).charCodeAt(0)),
                64 === d)
              ) {
                switch (
                  (0 < I && (q = q.replace(f, '')), (h = q.charCodeAt(1)))
                ) {
                  case 100:
                  case 109:
                  case 115:
                  case 45:
                    I = r
                    break
                  default:
                    I = R
                }
                if (
                  ((z = (g = t(r, I, g, h, p + 1)).length),
                  0 < j &&
                    ((w = l(3, g, (I = n(R, q, B)), r, P, A, z, h, p, s)),
                    (q = I.join('')),
                    void 0 !== w &&
                      0 === (z = (g = w.trim()).length) &&
                      ((h = 0), (g = ''))),
                  0 < z)
                )
                  switch (h) {
                    case 115:
                      q = q.replace(x, a)
                    case 100:
                    case 109:
                    case 45:
                      g = q + '{' + g + '}'
                      break
                    case 107:
                      ;(g = (q = q.replace(y, '$1 $2')) + '{' + g + '}'),
                        (g =
                          1 === L || (2 === L && i('@' + g, 3))
                            ? '@-webkit-' + g + '@' + g
                            : '@' + g)
                      break
                    default:
                      ;(g = q + g), 112 === s && ((V += g), (g = ''))
                  }
                else g = ''
              } else g = t(r, n(r, q, B), g, s, p + 1)
              ;(H += g),
                (g = B = I = D = d = 0),
                (q = ''),
                (h = u.charCodeAt(++N))
              break
            case 125:
            case 59:
              if (1 < (z = (q = (0 < I ? q.replace(f, '') : q).trim()).length))
                switch (
                  (0 === D &&
                    ((d = q.charCodeAt(0)), 45 === d || (96 < d && 123 > d)) &&
                    (z = (q = q.replace(' ', ':')).length),
                  0 < j &&
                    void 0 !== (w = l(1, q, r, e, P, A, V.length, s, p, s)) &&
                    0 === (z = (q = w.trim()).length) &&
                    (q = '\0\0'),
                  (d = q.charCodeAt(0)),
                  (h = q.charCodeAt(1)),
                  d)
                ) {
                  case 0:
                    break
                  case 64:
                    if (105 === h || 99 === h) {
                      W += q + u.charAt(N)
                      break
                    }
                  default:
                    58 !== q.charCodeAt(z - 1) &&
                      (V += o(q, d, h, q.charCodeAt(2)))
                }
              ;(B = I = D = d = 0), (q = ''), (h = u.charCodeAt(++N))
          }
        }
        switch (h) {
          case 13:
          case 10:
            47 === S
              ? (S = 0)
              : 0 === 1 + d &&
                107 !== s &&
                0 < q.length &&
                ((I = 1), (q += '\0')),
              0 < j * _ && l(0, q, r, e, P, A, V.length, s, p, s),
              (A = 1),
              P++
            break
          case 59:
          case 125:
            if (0 === S + C + E + k) {
              A++
              break
            }
          default:
            switch ((A++, (m = u.charAt(N)), h)) {
              case 9:
              case 32:
                if (0 === C + k + S)
                  switch (O) {
                    case 44:
                    case 58:
                    case 9:
                    case 32:
                      m = ''
                      break
                    default:
                      32 !== h && (m = ' ')
                  }
                break
              case 0:
                m = '\\0'
                break
              case 12:
                m = '\\f'
                break
              case 11:
                m = '\\v'
                break
              case 38:
                0 === C + S + k && ((I = B = 1), (m = '\f' + m))
                break
              case 108:
                if (0 === C + S + k + T && 0 < D)
                  switch (N - D) {
                    case 2:
                      112 === O && 58 === u.charCodeAt(N - 3) && (T = O)
                    case 8:
                      111 === F && (T = F)
                  }
                break
              case 58:
                0 === C + S + k && (D = N)
                break
              case 44:
                0 === S + E + C + k && ((I = 1), (m += '\r'))
                break
              case 34:
              case 39:
                0 === S && (C = C === h ? 0 : 0 === C ? h : C)
                break
              case 91:
                0 === C + S + E && k++
                break
              case 93:
                0 === C + S + E && k--
                break
              case 41:
                0 === C + S + k && E--
                break
              case 40:
                if (0 === C + S + k) {
                  if (0 === d)
                    if (2 * O + 3 * F == 533);
                    else d = 1
                  E++
                }
                break
              case 64:
                0 === S + E + C + k + D + g && (g = 1)
                break
              case 42:
              case 47:
                if (!(0 < C + k + E))
                  switch (S) {
                    case 0:
                      switch (2 * h + 3 * u.charCodeAt(N + 1)) {
                        case 235:
                          S = 47
                          break
                        case 220:
                          ;(z = N), (S = 42)
                      }
                      break
                    case 42:
                      47 === h &&
                        42 === O &&
                        z + 2 !== N &&
                        (33 === u.charCodeAt(z + 2) &&
                          (V += u.substring(z, N + 1)),
                        (m = ''),
                        (S = 0))
                  }
            }
            0 === S && (q += m)
        }
        ;(F = O), (O = h), N++
      }
      if (0 < (z = V.length)) {
        if (
          ((I = r),
          0 < j &&
            void 0 !== (w = l(2, V, I, e, P, A, z, s, p, s)) &&
            0 === (V = w).length)
        )
          return W + V + H
        if (((V = I.join(',') + '{' + V + '}'), 0 != L * T)) {
          switch ((2 !== L || i(V, 2) || (T = 0), T)) {
            case 111:
              V = V.replace(b, ':-moz-$1') + V
              break
            case 112:
              V =
                V.replace(v, '::-webkit-input-$1') +
                V.replace(v, '::-moz-$1') +
                V.replace(v, ':-ms-input-$1') +
                V
          }
          T = 0
        }
      }
      return W + V + H
    }
    function n(e, t, n) {
      var o = t.trim().split(g)
      t = o
      var i = o.length,
        a = e.length
      switch (a) {
        case 0:
        case 1:
          var l = 0
          for (e = 0 === a ? '' : e[0] + ' '; l < i; ++l)
            t[l] = r(e, t[l], n).trim()
          break
        default:
          var u = (l = 0)
          for (t = []; l < i; ++l)
            for (var s = 0; s < a; ++s) t[u++] = r(e[s] + ' ', o[l], n).trim()
      }
      return t
    }
    function r(e, t, n) {
      var r = t.charCodeAt(0)
      switch ((33 > r && (r = (t = t.trim()).charCodeAt(0)), r)) {
        case 38:
          return t.replace(m, '$1' + e.trim())
        case 58:
          return e.trim() + t.replace(m, '$1' + e.trim())
        default:
          if (0 < 1 * n && 0 < t.indexOf('\f'))
            return t.replace(m, (58 === e.charCodeAt(0) ? '' : '$1') + e.trim())
      }
      return e + t
    }
    function o(e, t, n, r) {
      var a = e + ';',
        l = 2 * t + 3 * n + 4 * r
      if (944 === l) {
        e = a.indexOf(':', 9) + 1
        var u = a.substring(e, a.length - 1).trim()
        return (
          (u = a.substring(0, e).trim() + u + ';'),
          1 === L || (2 === L && i(u, 1)) ? '-webkit-' + u + u : u
        )
      }
      if (0 === L || (2 === L && !i(a, 1))) return a
      switch (l) {
        case 1015:
          return 97 === a.charCodeAt(10) ? '-webkit-' + a + a : a
        case 951:
          return 116 === a.charCodeAt(3) ? '-webkit-' + a + a : a
        case 963:
          return 110 === a.charCodeAt(5) ? '-webkit-' + a + a : a
        case 1009:
          if (100 !== a.charCodeAt(4)) break
        case 969:
        case 942:
          return '-webkit-' + a + a
        case 978:
          return '-webkit-' + a + '-moz-' + a + a
        case 1019:
        case 983:
          return '-webkit-' + a + '-moz-' + a + '-ms-' + a + a
        case 883:
          if (45 === a.charCodeAt(8)) return '-webkit-' + a + a
          if (0 < a.indexOf('image-set(', 11))
            return a.replace(O, '$1-webkit-$2') + a
          break
        case 932:
          if (45 === a.charCodeAt(4))
            switch (a.charCodeAt(5)) {
              case 103:
                return (
                  '-webkit-box-' +
                  a.replace('-grow', '') +
                  '-webkit-' +
                  a +
                  '-ms-' +
                  a.replace('grow', 'positive') +
                  a
                )
              case 115:
                return (
                  '-webkit-' + a + '-ms-' + a.replace('shrink', 'negative') + a
                )
              case 98:
                return (
                  '-webkit-' +
                  a +
                  '-ms-' +
                  a.replace('basis', 'preferred-size') +
                  a
                )
            }
          return '-webkit-' + a + '-ms-' + a + a
        case 964:
          return '-webkit-' + a + '-ms-flex-' + a + a
        case 1023:
          if (99 !== a.charCodeAt(8)) break
          return (
            '-webkit-box-pack' +
            (u = a
              .substring(a.indexOf(':', 15))
              .replace('flex-', '')
              .replace('space-between', 'justify')) +
            '-webkit-' +
            a +
            '-ms-flex-pack' +
            u +
            a
          )
        case 1005:
          return d.test(a)
            ? a.replace(p, ':-webkit-') + a.replace(p, ':-moz-') + a
            : a
        case 1e3:
          switch (
            ((t = (u = a.substring(13).trim()).indexOf('-') + 1),
            u.charCodeAt(0) + u.charCodeAt(t))
          ) {
            case 226:
              u = a.replace(w, 'tb')
              break
            case 232:
              u = a.replace(w, 'tb-rl')
              break
            case 220:
              u = a.replace(w, 'lr')
              break
            default:
              return a
          }
          return '-webkit-' + a + '-ms-' + u + a
        case 1017:
          if (-1 === a.indexOf('sticky', 9)) break
        case 975:
          switch (
            ((t = (a = e).length - 10),
            (l =
              (u = (33 === a.charCodeAt(t) ? a.substring(0, t) : a)
                .substring(e.indexOf(':', 7) + 1)
                .trim()).charCodeAt(0) +
              (0 | u.charCodeAt(7))))
          ) {
            case 203:
              if (111 > u.charCodeAt(8)) break
            case 115:
              a = a.replace(u, '-webkit-' + u) + ';' + a
              break
            case 207:
            case 102:
              a =
                a.replace(u, '-webkit-' + (102 < l ? 'inline-' : '') + 'box') +
                ';' +
                a.replace(u, '-webkit-' + u) +
                ';' +
                a.replace(u, '-ms-' + u + 'box') +
                ';' +
                a
          }
          return a + ';'
        case 938:
          if (45 === a.charCodeAt(5))
            switch (a.charCodeAt(6)) {
              case 105:
                return (
                  (u = a.replace('-items', '')),
                  '-webkit-' + a + '-webkit-box-' + u + '-ms-flex-' + u + a
                )
              case 115:
                return '-webkit-' + a + '-ms-flex-item-' + a.replace(S, '') + a
              default:
                return (
                  '-webkit-' +
                  a +
                  '-ms-flex-line-pack' +
                  a.replace('align-content', '').replace(S, '') +
                  a
                )
            }
          break
        case 973:
        case 989:
          if (45 !== a.charCodeAt(3) || 122 === a.charCodeAt(4)) break
        case 931:
        case 953:
          if (!0 === C.test(e))
            return 115 === (u = e.substring(e.indexOf(':') + 1)).charCodeAt(0)
              ? o(e.replace('stretch', 'fill-available'), t, n, r).replace(
                  ':fill-available',
                  ':stretch'
                )
              : a.replace(u, '-webkit-' + u) +
                  a.replace(u, '-moz-' + u.replace('fill-', '')) +
                  a
          break
        case 962:
          if (
            ((a =
              '-webkit-' + a + (102 === a.charCodeAt(5) ? '-ms-' + a : '') + a),
            211 === n + r &&
              105 === a.charCodeAt(13) &&
              0 < a.indexOf('transform', 10))
          )
            return (
              a
                .substring(0, a.indexOf(';', 27) + 1)
                .replace(h, '$1-webkit-$2') + a
            )
      }
      return a
    }
    function i(e, t) {
      var n = e.indexOf(1 === t ? ':' : '{'),
        r = e.substring(0, 3 !== t ? n : 10)
      return (
        (n = e.substring(n + 1, e.length - 1)),
        D(2 !== t ? r : r.replace(E, '$1'), n, t)
      )
    }
    function a(e, t) {
      var n = o(t, t.charCodeAt(0), t.charCodeAt(1), t.charCodeAt(2))
      return n !== t + ';'
        ? n.replace(k, ' or ($1)').substring(4)
        : '(' + t + ')'
    }
    function l(e, t, n, r, o, i, a, l, u, c) {
      for (var f, p = 0, d = t; p < j; ++p)
        switch ((f = F[p].call(s, e, d, n, r, o, i, a, l, u, c))) {
          case void 0:
          case !1:
          case !0:
          case null:
            break
          default:
            d = f
        }
      if (d !== t) return d
    }
    function u(e) {
      return (
        void 0 !== (e = e.prefix) &&
          ((D = null),
          e
            ? 'function' != typeof e
              ? (L = 1)
              : ((L = 2), (D = e))
            : (L = 0)),
        u
      )
    }
    function s(e, n) {
      var r = e
      if ((33 > r.charCodeAt(0) && (r = r.trim()), (r = [r]), 0 < j)) {
        var o = l(-1, n, r, r, P, A, 0, 0, 0, 0)
        void 0 !== o && 'string' == typeof o && (n = o)
      }
      var i = t(R, r, n, 0, 0)
      return (
        0 < j &&
          void 0 !== (o = l(-2, i, r, r, P, A, i.length, 0, 0, 0)) &&
          (i = o),
        '',
        (T = 0),
        (A = P = 1),
        i
      )
    }
    var c = /^\0+/g,
      f = /[\0\r\f]/g,
      p = /: */g,
      d = /zoo|gra/,
      h = /([,: ])(transform)/g,
      g = /,\r+?/g,
      m = /([\t\r\n ])*\f?&/g,
      y = /@(k\w+)\s*(\S*)\s*/,
      v = /::(place)/g,
      b = /:(read-only)/g,
      w = /[svh]\w+-[tblr]{2}/,
      x = /\(\s*(.*)\s*\)/g,
      k = /([\s\S]*?);/g,
      S = /-self|flex-/g,
      E = /[^]*?(:[rp][el]a[\w-]+)[^]*/,
      C = /stretch|:\s*\w+\-(?:conte|avail)/,
      O = /([^-])(image-set\()/,
      A = 1,
      P = 1,
      T = 0,
      L = 1,
      R = [],
      F = [],
      j = 0,
      D = null,
      _ = 0
    return (
      (s.use = function e(t) {
        switch (t) {
          case void 0:
          case null:
            j = F.length = 0
            break
          default:
            if ('function' == typeof t) F[j++] = t
            else if ('object' == typeof t)
              for (var n = 0, r = t.length; n < r; ++n) e(t[n])
            else _ = 0 | !!t
        }
        return e
      }),
      (s.set = u),
      void 0 !== e && u(e),
      s
    )
  },
  ae = '/*|*/',
  le = ae + '}'
function ue(e) {
  e && se.current.insert(e + '}')
}
var se = { current: null },
  ce = function (e, t, n, r, o, i, a, l, u, s) {
    switch (e) {
      case 1:
        switch (t.charCodeAt(0)) {
          case 64:
            return se.current.insert(t + ';'), ''
          case 108:
            if (98 === t.charCodeAt(2)) return ''
        }
        break
      case 2:
        if (0 === l) return t + ae
        break
      case 3:
        switch (l) {
          case 102:
          case 112:
            return se.current.insert(n[0] + t), ''
          default:
            return t + (0 === s ? ae : '')
        }
      case -2:
        t.split(le).forEach(ue)
    }
  },
  fe = function (e) {
    void 0 === e && (e = {})
    var t,
      n = e.key || 'css'
    void 0 !== e.prefix && (t = { prefix: e.prefix })
    var r,
      o = new ie(t),
      i = {}
    r = e.container || document.head
    var a,
      l = document.querySelectorAll('style[data-emotion-' + n + ']')
    Array.prototype.forEach.call(l, function (e) {
      e
        .getAttribute('data-emotion-' + n)
        .split(' ')
        .forEach(function (e) {
          i[e] = !0
        }),
        e.parentNode !== r && r.appendChild(e)
    }),
      o.use(e.stylisPlugins)(ce),
      (a = function (e, t, n, r) {
        var i = t.name
        ;(se.current = n), o(e, t.styles), r && (u.inserted[i] = !0)
      })
    var u = {
      key: n,
      sheet: new oe({ key: n, container: r, nonce: e.nonce, speedy: e.speedy }),
      nonce: e.nonce,
      inserted: i,
      registered: {},
      insert: a,
    }
    return u
  }
var pe = function (e) {
    for (var t, n = 0, r = 0, o = e.length; o >= 4; ++r, o -= 4)
      (t =
        1540483477 *
          (65535 &
            (t =
              (255 & e.charCodeAt(r)) |
              ((255 & e.charCodeAt(++r)) << 8) |
              ((255 & e.charCodeAt(++r)) << 16) |
              ((255 & e.charCodeAt(++r)) << 24))) +
        ((59797 * (t >>> 16)) << 16)),
        (n =
          (1540483477 * (65535 & (t ^= t >>> 24)) +
            ((59797 * (t >>> 16)) << 16)) ^
          (1540483477 * (65535 & n) + ((59797 * (n >>> 16)) << 16)))
    switch (o) {
      case 3:
        n ^= (255 & e.charCodeAt(r + 2)) << 16
      case 2:
        n ^= (255 & e.charCodeAt(r + 1)) << 8
      case 1:
        n =
          1540483477 * (65535 & (n ^= 255 & e.charCodeAt(r))) +
          ((59797 * (n >>> 16)) << 16)
    }
    return (
      ((n =
        1540483477 * (65535 & (n ^= n >>> 13)) + ((59797 * (n >>> 16)) << 16)) ^
        (n >>> 15)) >>>
      0
    ).toString(36)
  },
  de = {
    animationIterationCount: 1,
    borderImageOutset: 1,
    borderImageSlice: 1,
    borderImageWidth: 1,
    boxFlex: 1,
    boxFlexGroup: 1,
    boxOrdinalGroup: 1,
    columnCount: 1,
    columns: 1,
    flex: 1,
    flexGrow: 1,
    flexPositive: 1,
    flexShrink: 1,
    flexNegative: 1,
    flexOrder: 1,
    gridRow: 1,
    gridRowEnd: 1,
    gridRowSpan: 1,
    gridRowStart: 1,
    gridColumn: 1,
    gridColumnEnd: 1,
    gridColumnSpan: 1,
    gridColumnStart: 1,
    msGridRow: 1,
    msGridRowSpan: 1,
    msGridColumn: 1,
    msGridColumnSpan: 1,
    fontWeight: 1,
    lineHeight: 1,
    opacity: 1,
    order: 1,
    orphans: 1,
    tabSize: 1,
    widows: 1,
    zIndex: 1,
    zoom: 1,
    WebkitLineClamp: 1,
    fillOpacity: 1,
    floodOpacity: 1,
    stopOpacity: 1,
    strokeDasharray: 1,
    strokeDashoffset: 1,
    strokeMiterlimit: 1,
    strokeOpacity: 1,
    strokeWidth: 1,
  }
var he,
  ge,
  me = /[A-Z]|^ms/g,
  ye = /_EMO_([^_]+?)_([^]*?)_EMO_/g,
  ve = function (e) {
    return 45 === e.charCodeAt(1)
  },
  be = function (e) {
    return null != e && 'boolean' != typeof e
  },
  we =
    ((he = function (e) {
      return ve(e) ? e : e.replace(me, '-$&').toLowerCase()
    }),
    (ge = {}),
    function (e) {
      return void 0 === ge[e] && (ge[e] = he(e)), ge[e]
    }),
  xe = function (e, t) {
    switch (e) {
      case 'animation':
      case 'animationName':
        if ('string' == typeof t)
          return t.replace(ye, function (e, t, n) {
            return (Se = { name: t, styles: n, next: Se }), t
          })
    }
    return 1 === de[e] || ve(e) || 'number' != typeof t || 0 === t
      ? t
      : t + 'px'
  }
function ke(e, t, n, r) {
  if (null == n) return ''
  if (void 0 !== n.__emotion_styles) return n
  switch (typeof n) {
    case 'boolean':
      return ''
    case 'object':
      if (1 === n.anim)
        return (Se = { name: n.name, styles: n.styles, next: Se }), n.name
      if (void 0 !== n.styles) {
        var o = n.next
        if (void 0 !== o)
          for (; void 0 !== o; )
            (Se = { name: o.name, styles: o.styles, next: Se }), (o = o.next)
        return n.styles + ';'
      }
      return (function (e, t, n) {
        var r = ''
        if (Array.isArray(n))
          for (var o = 0; o < n.length; o++) r += ke(e, t, n[o], !1)
        else
          for (var i in n) {
            var a = n[i]
            if ('object' != typeof a)
              null != t && void 0 !== t[a]
                ? (r += i + '{' + t[a] + '}')
                : be(a) && (r += we(i) + ':' + xe(i, a) + ';')
            else if (
              !Array.isArray(a) ||
              'string' != typeof a[0] ||
              (null != t && void 0 !== t[a[0]])
            ) {
              var l = ke(e, t, a, !1)
              switch (i) {
                case 'animation':
                case 'animationName':
                  r += we(i) + ':' + l + ';'
                  break
                default:
                  r += i + '{' + l + '}'
              }
            } else
              for (var u = 0; u < a.length; u++)
                be(a[u]) && (r += we(i) + ':' + xe(i, a[u]) + ';')
          }
        return r
      })(e, t, n)
    case 'function':
      if (void 0 !== e) {
        var i = Se,
          a = n(e)
        return (Se = i), ke(e, t, a, r)
      }
  }
  if (null == t) return n
  var l = t[n]
  return void 0 === l || r ? n : l
}
var Se,
  Ee = /label:\s*([^\s;\n{]+)\s*;/g,
  Ce = function (e, t, n) {
    if (
      1 === e.length &&
      'object' == typeof e[0] &&
      null !== e[0] &&
      void 0 !== e[0].styles
    )
      return e[0]
    var r = !0,
      o = ''
    Se = void 0
    var i = e[0]
    null == i || void 0 === i.raw
      ? ((r = !1), (o += ke(n, t, i, !1)))
      : (o += i[0])
    for (var a = 1; a < e.length; a++)
      (o += ke(n, t, e[a], 46 === o.charCodeAt(o.length - 1))), r && (o += i[a])
    Ee.lastIndex = 0
    for (var l, u = ''; null !== (l = Ee.exec(o)); ) u += '-' + l[1]
    return { name: pe(o) + u, styles: o, next: Se }
  }
function Oe(e, t, n) {
  var r = ''
  return (
    n.split(' ').forEach(function (n) {
      void 0 !== e[n] ? t.push(e[n]) : (r += n + ' ')
    }),
    r
  )
}
var Ae = function (e, t, n) {
  var r = e.key + '-' + t.name
  if (
    (!1 === n && void 0 === e.registered[r] && (e.registered[r] = t.styles),
    void 0 === e.inserted[t.name])
  ) {
    var o = t
    do {
      e.insert('.' + r, o, e.sheet, !0)
      o = o.next
    } while (void 0 !== o)
  }
}
function Pe(e, t) {
  if (void 0 === e.inserted[t.name]) return e.insert('', t, e.sheet, !0)
}
function Te(e, t, n) {
  var r = [],
    o = Oe(e, r, n)
  return r.length < 2 ? n : o + t(r)
}
var Le = function e(t) {
    for (var n = '', r = 0; r < t.length; r++) {
      var o = t[r]
      if (null != o) {
        var i = void 0
        switch (typeof o) {
          case 'boolean':
            break
          case 'object':
            if (Array.isArray(o)) i = e(o)
            else
              for (var a in ((i = ''), o))
                o[a] && a && (i && (i += ' '), (i += a))
            break
          default:
            i = o
        }
        i && (n && (n += ' '), (n += i))
      }
    }
    return n
  },
  Re = function (e) {
    var t = fe(e)
    ;(t.sheet.speedy = function (e) {
      this.isSpeedy = e
    }),
      (t.compat = !0)
    var n = function () {
      for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
        n[r] = arguments[r]
      var o = Ce(n, t.registered, void 0)
      return Ae(t, o, !1), t.key + '-' + o.name
    }
    return {
      css: n,
      cx: function () {
        for (var e = arguments.length, r = new Array(e), o = 0; o < e; o++)
          r[o] = arguments[o]
        return Te(t.registered, n, Le(r))
      },
      injectGlobal: function () {
        for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
          n[r] = arguments[r]
        var o = Ce(n, t.registered)
        Pe(t, o)
      },
      keyframes: function () {
        for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
          n[r] = arguments[r]
        var o = Ce(n, t.registered),
          i = 'animation-' + o.name
        return (
          Pe(t, {
            name: o.name,
            styles: '@keyframes ' + i + '{' + o.styles + '}',
          }),
          i
        )
      },
      hydrate: function (e) {
        e.forEach(function (e) {
          t.inserted[e] = !0
        })
      },
      flush: function () {
        ;(t.registered = {}), (t.inserted = {}), t.sheet.flush()
      },
      sheet: t.sheet,
      cache: t,
      getRegisteredStyles: Oe.bind(null, t.registered),
      merge: Te.bind(null, t.registered, n),
    }
  },
  Fe = Re(),
  je = (Fe.flush, Fe.hydrate, Fe.cx),
  De = (Fe.merge, Fe.getRegisteredStyles, Fe.injectGlobal, Fe.keyframes),
  _e = Fe.css,
  Ne = (Fe.sheet, Fe.cache, (s = i('8tsvq')), {})
Object.defineProperty(Ne, '__esModule', { value: !0 }),
  (Ne = {
    contentWidthDefault: '1280px',
    contentWidthText: '768px',
    contentWidthFull: '100%',
    spacing2Xs: '0.25rem',
    spacingXs: '0.5rem',
    spacingS: '0.75rem',
    spacingM: '1rem',
    spacingL: '1.5rem',
    spacingXl: '2rem',
    spacing2Xl: '3rem',
    spacing3Xl: '4rem',
    spacing4Xl: '5rem',
    zIndexNegative: -1,
    zIndexWorkbench: 0,
    zIndexDefault: 1,
    zIndexWorkbenchHeader: 10,
    zIndexModal: 100,
    zIndexModalContent: 101,
    zIndexDropdown: 1e3,
    zIndexTooltip: 1e4,
    zIndexNotification: 1e5,
    borderRadiusSmall: '4px',
    borderRadiusMedium: '6px',
    boxShadowPositive: '0px 1px 0px rgb(25, 37, 50, 0.1)',
    boxShadowDefault:
      '0px 0px 0px 1px rgba(25, 37, 50, 0.1), 0px 3px 7px -3px rgba(25, 37, 50, 0.1), 0px 6px 12px -2px rgba(25, 37, 50, 0.1);',
    boxShadowHeavy:
      '0px 0px 0px 1px rgba(25, 37, 50, 0.1), 0px -6px 16px -6px rgba(25, 37, 50, 0.03), 0px 8px 16px -8px rgba(25, 37, 50, 0.2), 0px 13px 27px -5px rgba(25, 37, 50, 0.15);',
    insetBoxShadowDefault: 'inset 0px 2px 0px rgba(225, 228, 232, 0.2);',
    glowPrimary: '0px 0px 0px 3px #98CBFF',
    glowNegative: '0px 0px 0px 3px #FFB1B2',
    glowPositive: '0px 0px 0px 3px #9ED696',
    glowWarning: '0px 0px 0px 3px #FDE5C0',
    glowMuted: '0px 0px 0px 3px #E7EBEE',
    colorBlack: '#0C141C',
    colorBlueLightest: '#E8F5FF',
    colorBlueLight: '#98CBFF',
    colorBlueMid: '#036FE3',
    colorBlueBase: '#0059C8',
    colorBlueDark: '#0041AB',
    blue100: '#E8F5FF',
    blue200: '#CEECFF',
    blue300: '#98CBFF',
    blue400: '#40A0FF',
    blue500: '#036FE3',
    blue600: '#0059C8',
    blue700: '#0041AB',
    blue800: '#003298',
    blue900: '#002A8E',
    colorContrastDark: '#0C141C',
    colorContrastMid: '#111B2B',
    colorContrastLight: '#1B273A',
    colorCoralDark: '#FFE0E0',
    colorCoralMid: '#FFF2F2',
    colorElementDarkest: '#67728A',
    colorElementDark: '#AEC1CC',
    colorElementMid: '#CFD9E0',
    colorElementLight: '#E7EBEE',
    colorElementLightest: '#F7F9FA',
    gray100: '#F7F9FA',
    gray200: '#E7EBEE',
    gray300: '#CFD9E0',
    gray400: '#AEC1CC',
    gray500: '#67728A',
    gray600: '#5A657C',
    gray700: '#414D63',
    gray800: '#1B273A',
    gray900: '#111B2B',
    colorGreenDark: '#00550C',
    colorGreenBase: '#006D23',
    colorGreenMid: '#008539',
    colorGreenLight: '#9ED696',
    colorGreenLightest: '#EAF9E8',
    green100: '#EAF9E8',
    green200: '#CDF3C6',
    green300: '#9ED696',
    green400: '#5DB057',
    green500: '#008539',
    green600: '#006D23',
    green700: '#00550C',
    green800: '#004700',
    green900: '#003F00',
    colorIceDark: '#CEECFF',
    colorIceMid: '#E8F5FF',
    colorMintDark: '#CDF3C6',
    colorMintMid: '#EAF9E8',
    colorOrangeDark: '#B12D00',
    colorOrangeBase: '#CC4500',
    colorOrangeMid: '#F07F23',
    colorOrangeLight: '#FDE5C0',
    colorOrangeLightest: '#FFF2E4',
    orange100: '#FFF2E4',
    orange200: '#FDE5C0',
    orange300: '#FDB882',
    orange400: '#F07F23',
    orange500: '#CC4500',
    orange600: '#B12D00',
    orange700: '#892300',
    orange800: '#731A00',
    orange900: '#631C00',
    colorPeachDark: '#FDE5C0',
    colorPeachMid: '#FFF2E4',
    colorPurpleDark: '#5127B5',
    colorPurpleBase: '#6C3ECF',
    colorPurpleMid: '#8553E7',
    colorPurpleLight: '#D1BBFF',
    colorPurpleLightest: '#F7F2FF',
    purple100: '#F7F2FF',
    purple200: '#EDE3FF',
    purple300: '#D1BBFF',
    purple400: '#AE89FF',
    purple500: '#8553E7',
    purple600: '#6C3ECF',
    purple700: '#5127B5',
    purple800: '#3E16A4',
    purple900: '#340E9C',
    colorRedDark: '#990017',
    colorRedBase: '#BD002A',
    colorRedMid: '#DA294A',
    colorRedLight: '#FFB1B2',
    colorRedLightest: '#FFF2F2',
    red100: '#FFF2F2',
    red200: '#FFE0E0',
    red300: '#FFB1B2',
    red400: '#FF707D',
    red500: '#DA294A',
    red600: '#BD002A',
    red700: '#990017',
    red800: '#7F0010',
    red900: '#72000E',
    colorPrimary: '#036FE3',
    colorPositive: '#008539',
    colorNegative: '#DA294A',
    colorWarning: '#F07F23',
    colorTextDark: '#111B2B',
    colorTextBase: '#1B273A',
    colorTextMid: '#414D63',
    colorTextLight: '#5A657C',
    colorTextLightest: '#67728A',
    colorWhite: '#ffffff',
    colorYellowDark: '#956300',
    colorYellowBase: '#EAAF09',
    colorYellowMid: '#FFC835',
    colorYellowLight: '#FFD960',
    colorYellowLightest: '#FFF6CC',
    yellow100: '#FEF9DF',
    yellow200: '#FFF6CC',
    yellow300: '#FFE993',
    yellow400: '#FFD960',
    yellow500: '#FFC835',
    yellow600: '#EAAF09',
    yellow700: '#B78300',
    yellow800: '#956300',
    yellow900: '#7F5200',
    transitionDurationShort: '0.1s',
    transitionDurationDefault: '0.2s',
    transitionDurationLong: '0.3s',
    transitionEasingDefault: 'ease-in-out',
    transitionEasingCubicBezier: 'cubic-bezier(0.13, 0.62, 0.11, 0.99)',
    fontBaseDefault: '16',
    fontSize4Xl: '3rem',
    fontSize3Xl: '2.25rem',
    fontSize2Xl: '1.75rem',
    fontSizeXl: '1.25rem',
    fontSizeL: '1rem',
    fontSizeM: '0.875rem',
    fontSizeS: '0.75rem',
    fontStackPrimary:
      '-apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol',
    fontStackMonospace:
      'SFMono-Regular, Consolas, Liberation Mono, Menlo,monospace',
    fontWeightNormal: 400,
    fontWeightMedium: 500,
    fontWeightDemiBold: 600,
    letterSpacingWide: '0.1rem',
    lineHeightDefault: '1.5',
    lineHeightCondensed: '1.25',
    lineHeight4Xl: '3.5rem',
    lineHeight3Xl: '3rem',
    lineHeight2Xl: '2.25rem',
    lineHeightXl: '2rem',
    lineHeightL: '1.5rem',
    lineHeightM: '1.25rem',
    lineHeightS: '1rem',
  })
;(s = i('8tsvq')), (s = i('8tsvq'))
function Ie(e, t) {
  return (
    (Ie = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (e, t) {
          return (e.__proto__ = t), e
        }),
    Ie(e, t)
  )
}
s = i('8tsvq')
var Be = {},
  ze = {}
function Me(e, t) {
  return (
    (ze = Me =
      Object.setPrototypeOf
        ? Object.setPrototypeOf.bind()
        : function (e, t) {
            return (e.__proto__ = t), e
          }),
    (ze.__esModule = !0),
    (ze.default = ze),
    Me(e, t)
  )
}
;((ze = Me).__esModule = !0),
  (ze.default = ze),
  ((Be = function (e, t) {
    ;(e.prototype = Object.create(t.prototype)),
      (e.prototype.constructor = e),
      ze(e, t)
  }).__esModule = !0),
  (Be.default = Be)
;(s = i('8tsvq')), Object.prototype.hasOwnProperty
var Ue = (0, s.createContext)('undefined' != typeof HTMLElement ? fe() : null),
  qe = (0, s.createContext)({}),
  Ve =
    (Ue.Provider,
    function (e) {
      var t = function (t, n) {
        return (0, s.createElement)(Ue.Consumer, null, function (r) {
          return e(t, r, n)
        })
      }
      return (0, s.forwardRef)(t)
    })
var He = function () {
    for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
      t[n] = arguments[n]
    return Ce(t)
  },
  We =
    (s.Component,
    function e(t) {
      for (var n = t.length, r = 0, o = ''; r < n; r++) {
        var i = t[r]
        if (null != i) {
          var a = void 0
          switch (typeof i) {
            case 'boolean':
              break
            case 'object':
              if (Array.isArray(i)) a = e(i)
              else
                for (var l in ((a = ''), i))
                  i[l] && l && (a && (a += ' '), (a += l))
              break
            default:
              a = i
          }
          a && (o && (o += ' '), (o += a))
        }
      }
      return o
    })
function $e(e, t, n) {
  var r = [],
    o = Oe(e, r, n)
  return r.length < 2 ? n : o + t(r)
}
var Qe = function () {
    return null
  },
  Ge =
    (Ve(function (e, t) {
      return (0, s.createElement)(qe.Consumer, null, function (n) {
        var r = function () {
            for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
              n[r] = arguments[r]
            var o = Ce(n, t.registered)
            return Ae(t, o, !1), t.key + '-' + o.name
          },
          o = {
            css: r,
            cx: function () {
              for (
                var e = arguments.length, n = new Array(e), o = 0;
                o < e;
                o++
              )
                n[o] = arguments[o]
              return $e(t.registered, r, We(n))
            },
            theme: n,
          },
          i = e.children(o)
        var a = (0, s.createElement)(Qe, null)
        return (0, s.createElement)(s.Fragment, null, a, i)
      })
    }),
    Object.defineProperty),
  Je = Object.defineProperties,
  Xe = Object.getOwnPropertyDescriptors,
  Ye = Object.getOwnPropertySymbols,
  Ke = Object.prototype.hasOwnProperty,
  Ze = Object.prototype.propertyIsEnumerable,
  et = (e, t, n) =>
    t in e
      ? Ge(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  tt = (e, t) => {
    for (var n in t || (t = {})) Ke.call(t, n) && et(e, n, t[n])
    if (Ye) for (var n of Ye(t)) Ze.call(t, n) && et(e, n, t[n])
    return e
  },
  nt = (e, t) => Je(e, Xe(t)),
  rt = (e, t) => {
    var n = {}
    for (var r in e) Ke.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r])
    if (null != e && Ye)
      for (var r of Ye(e)) t.indexOf(r) < 0 && Ze.call(e, r) && (n[r] = e[r])
    return n
  },
  ot =
    (He`
  /* Remove default margin */
  /* Button has default margin in some browsers, like safari */
  body,
  h1,
  h2,
  h3,
  h4,
  p,
  figure,
  blockquote,
  dl,
  dd,
  button {
    margin: 0;
  }

  /* Remove list styles on ul, ol elements with a list role, which suggests default styling will be removed */
  ul[role='list'],
  ol[role='list'] {
    list-style: none;
  }

  /* Set core root defaults */
  html:focus-within {
    scroll-behavior: smooth;
  }

  /* Set core body defaults */
  body {
    text-rendering: optimizeSpeed;
    line-height: 1.5;
  }

  /* A elements that don't have a class get default styles */
  a:not([class]) {
    text-decoration-skip-ink: auto;
  }

  /* Make images easier to work with */
  img,
  picture {
    max-width: 100%;
    display: block;
  }

  /* Inherit fonts for inputs and buttons */
  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  /* Remove all animations and transitions for people that prefer not to see them */
  @media (prefers-reduced-motion: reduce) {
    html:focus-within {
      scroll-behavior: auto;
    }
    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }
`,
    {
      none: 0,
      spacing2Xs: t(Ne).spacing2Xs,
      spacingXs: t(Ne).spacingXs,
      spacingS: t(Ne).spacingS,
      spacingM: t(Ne).spacingM,
      spacingL: t(Ne).spacingL,
      spacingXl: t(Ne).spacingXl,
      spacing2Xl: t(Ne).spacing2Xl,
      spacing3Xl: t(Ne).spacing3Xl,
      spacing4Xl: t(Ne).spacing4Xl,
    })
function it(e) {
  return ot[e]
}
function at(e) {
  return Object.assign(
    {},
    e.margin ? { margin: it(e.margin) } : null,
    e.marginLeft ? { marginLeft: it(e.marginLeft) } : null,
    e.marginRight ? { marginRight: it(e.marginRight) } : null,
    e.marginTop ? { marginTop: it(e.marginTop) } : null,
    e.marginBottom ? { marginBottom: it(e.marginBottom) } : null,
    e.padding ? { padding: it(e.padding) } : null,
    e.paddingLeft ? { paddingLeft: it(e.paddingLeft) } : null,
    e.paddingRight ? { paddingRight: it(e.paddingRight) } : null,
    e.paddingTop ? { paddingTop: it(e.paddingTop) } : null,
    e.paddingBottom ? { paddingBottom: it(e.paddingBottom) } : null
  )
}
var lt = 'div'
function ut(e) {
  let t = e,
    {
      display: n,
      className: r,
      margin: o,
      marginBottom: i,
      marginLeft: a,
      marginRight: l,
      marginTop: u,
      padding: s,
      paddingBottom: c,
      paddingLeft: f,
      paddingRight: p,
      paddingTop: d,
      testId: h,
      as: g = lt,
    } = t,
    m = rt(t, [
      'display',
      'className',
      'margin',
      'marginBottom',
      'marginLeft',
      'marginRight',
      'marginTop',
      'padding',
      'paddingBottom',
      'paddingLeft',
      'paddingRight',
      'paddingTop',
      'testId',
      'as',
    ])
  return {
    boxProps: tt(
      {
        className: je(
          _e({ display: n }),
          _e(
            tt(
              {},
              at({
                margin: o,
                marginBottom: i,
                marginLeft: a,
                marginRight: l,
                marginTop: u,
                padding: s,
                paddingBottom: c,
                paddingLeft: f,
                paddingRight: p,
                paddingTop: d,
              })
            )
          ),
          r
        ),
        'data-test-id': h,
      },
      m
    ),
    Element: g,
  }
}
function st(e, t) {
  let { boxProps: n, Element: r } = ut(e)
  return s.createElement(r, nt(tt({}, n), { ref: t }), e.children)
}
st.displayName = 'Box'
var ct = s.forwardRef(st)
function ft(e, n) {
  var r,
    o = e,
    {
      isInline: i,
      alignItems: a,
      alignSelf: l,
      alignContent: u,
      flex: c,
      flexBasis: f,
      flexShrink: p,
      flexDirection: d,
      flexGrow: h,
      flexWrap: g,
      fullHeight: m,
      fullWidth: y,
      gap: v,
      justifyContent: b,
      justifyItems: w,
      justifySelf: x,
      order: k,
      children: S,
      as: E,
    } = o,
    C = rt(o, [
      'isInline',
      'alignItems',
      'alignSelf',
      'alignContent',
      'flex',
      'flexBasis',
      'flexShrink',
      'flexDirection',
      'flexGrow',
      'flexWrap',
      'fullHeight',
      'fullWidth',
      'gap',
      'justifyContent',
      'justifyItems',
      'justifySelf',
      'order',
      'children',
      'as',
    ])
  let { boxProps: O, Element: A } = ut(nt(tt({}, C), { as: E || 'div' }))
  return s.createElement(
    A,
    nt(tt({}, O), {
      className: je(
        _e({
          display: i ? 'inline-flex' : 'flex',
          width: y ? '100%' : void 0,
          height: m ? '100%' : void 0,
          flex: c,
          flexBasis: f,
          flexShrink: p,
          flexDirection: d,
          gap: null != (r = t(Ne)[v]) ? r : v,
          justifyContent: b,
          justifyItems: w,
          justifySelf: x,
          alignItems: a,
          alignSelf: l,
          alignContent: u,
          order: k,
          flexWrap: g,
          flexGrow: h,
        }),
        O.className
      ),
      ref: n,
    }),
    S
  )
}
ft.displayName = 'Flex'
var pt = s.forwardRef(ft)
function dt(e, t) {
  var n,
    r,
    o = e,
    {
      alignContent: i,
      children: a,
      columnGap: l = 'spacingM',
      columns: u = 'auto',
      flow: c,
      isInline: f,
      justifyContent: p,
      rowGap: d = 'none',
      rows: h = 'auto',
      as: g,
    } = o,
    m = rt(o, [
      'alignContent',
      'children',
      'columnGap',
      'columns',
      'flow',
      'isInline',
      'justifyContent',
      'rowGap',
      'rows',
      'as',
    ])
  let y = (e) => ('number' == typeof e ? `repeat(${e}, minmax(0, 1fr))` : e),
    { boxProps: v, Element: b } = ut(nt(tt({}, m), { as: g || 'div' }))
  return s.createElement(
    b,
    nt(tt({}, v), {
      className: je(
        _e({
          display: f ? 'inline-grid' : 'grid',
          gridTemplateColumns: y(u),
          gridTemplateRows: y(h),
          flow: c,
          justifyContent: p,
          alignContent: i,
          columnGap: null != (n = it(l)) ? n : 0,
          rowGap: null != (r = it(d)) ? r : 0,
        }),
        v.className
      ),
      ref: t,
    }),
    a
  )
}
dt.displayName = 'Grid'
var ht = s.forwardRef(dt)
function gt(e, t) {
  var n = e,
    {
      children: r,
      columnStart: o,
      columnEnd: i,
      rowStart: a,
      rowEnd: l,
      area: u,
      order: c,
    } = n,
    f = rt(n, [
      'children',
      'columnStart',
      'columnEnd',
      'rowStart',
      'rowEnd',
      'area',
      'order',
    ])
  let p = u || [a || 'auto', o || 'auto', l || 'auto', i || 'auto'].join(' / '),
    { boxProps: d, Element: h } = ut(f)
  return s.createElement(
    h,
    nt(tt({}, d), {
      className: je(_e({ gridArea: p, order: c }), d.className),
      ref: t,
    }),
    r
  )
}
gt.displayName = 'GridItem'
var mt = s.forwardRef(gt)
ht.Item = mt
function yt(e, t) {
  var n = e,
    {
      flexDirection: r = 'row',
      alignItems: o = 'center',
      isInline: i = !1,
      spacing: a = 'spacingM',
      children: l,
      as: u,
    } = n,
    c = rt(n, [
      'flexDirection',
      'alignItems',
      'isInline',
      'spacing',
      'children',
      'as',
    ])
  let { boxProps: f, Element: p } = ut(nt(tt({}, c), { as: u || 'div' }))
  return s.createElement(
    pt,
    nt(tt({}, f), {
      as: p,
      flexDirection: r,
      alignItems: o,
      isInline: i,
      className: f.className,
      gap: a,
      ref: t,
    }),
    l
  )
}
yt.displayName = 'Stack'
s.forwardRef(yt)
var vt = Object.defineProperty,
  bt = Object.defineProperties,
  wt = Object.getOwnPropertyDescriptors,
  xt = Object.getOwnPropertySymbols,
  kt = Object.prototype.hasOwnProperty,
  St = Object.prototype.propertyIsEnumerable,
  Et = (e, t, n) =>
    t in e
      ? vt(e, t, { enumerable: !0, configurable: !0, writable: !0, value: n })
      : (e[t] = n),
  Ct = { large: '36px', medium: '20px', small: '14px' },
  Ot = {
    default: t(Ne).gray700,
    primary: t(Ne).colorPrimary,
    white: t(Ne).colorWhite,
  },
  At = (0, s.forwardRef)((e, n) => {
    var r = e,
      {
        className: o,
        customSize: i,
        size: a = 'medium',
        variant: l = 'default',
        testId: u = 'cf-ui-spinner',
      } = r,
      c = ((e, t) => {
        var n = {}
        for (var r in e) kt.call(e, r) && t.indexOf(r) < 0 && (n[r] = e[r])
        if (null != e && xt)
          for (var r of xt(e))
            t.indexOf(r) < 0 && St.call(e, r) && (n[r] = e[r])
        return n
      })(r, ['className', 'customSize', 'size', 'variant', 'testId'])
    let f = (() => {
      let e = De`
    0% {
      transform: scale(1, 1);
    }
    6.666667% {
      transform: scale(1.5, 0.5);
    }
    13.333333% {
      transform: scale(1, 1);
    }
    26.666667% {
      transform: scale(1, 1);
    }
    33.333333% {
      transform: scale(1, 1);
    }
    40% {
      transform: scale(1, 1);
    }
    53.333333% {
      transform: scale(1, 1);
    }
    60% {
      transform: scale(1.5, 0.5);
    }
    66.666667% {
      transform: scale(1, 1);
    }
    100% {
      transform: scale(1, 1);
    }
  `,
        t = De`
    0% {
      transform: scale(1, 1);
    }
    13.333333% {
      transform: scale(1, 1);
    }
    20% {
      transform: scale(1.5, 0.5);
    }
    26.666667% {
      transform: scale(1, 1);
    }
    40% {
      transform: scale(1, 1);
    }
    46.666667% {
      transform: scale(1, 1);
    }
    53.333333% {
      transform: scale(1, 1);
    }
    66.666667% {
      transform: scale(1, 1);
    }
    73.333333% {
      transform: scale(1.5, 0.5);
    }
    80% {
      transform: scale(1, 1);
    }
    100% {
      transform: scale(1, 1);
    }
  `,
        n = De`
    0% {
      transform: scale(1, 1);
    }
    26.666667% {
      transform: scale(1, 1);
    }
    33.333333% {
      transform: scale(1.5, 0.5);
    }
    40% {
      transform: scale(1, 1);
    }
    53.333333% {
      transform: scale(1, 1);
    }
    60% {
      transform: scale(1, 1);
    }
    66.666667% {
      transform: scale(1, 1);
    }
    80% {
      transform: scale(1, 1);
    }
    86.666667% {
      transform: scale(1.5, 0.5);
    }
    93.333333% {
      transform: scale(1, 1);
    }
    100% {
      transform: scale(1, 1);
    }
  `,
        r = De`
    0% {
      transform: translate(10px, 33.528168px);
    }
    6.666667% {
      transform: translate(10px, 41.764084px);
    }
    13.333333% {
      transform: translate(10px, 33.528168px);
    }
    26.666667% {
      transform: translate(10px, -2.651608px);
    }
    33.333333% {
      transform: translate(10px, -4.471832px);
    }
    40% {
      transform: translate(10px, -2.651608px);
    }
    53.333333% {
      transform: translate(10px, 33.528168px);
    }
    60% {
      transform: translate(10px, 41.764084px);
    }
    66.666667% {
      transform: translate(10px, 33.528168px);
    }
    100% {
      transform: translate(10px, 33.528168px);
    }
  `,
        o = De`
    0% {
      transform: translate(30px, 33.528168px);
    }
    13.333333% {
      transform: translate(30px, 33.528168px);
    }
    20% {
      transform: translate(30px, 41.764084px);
    }
    26.666667% {
      transform: translate(30px, 33.528168px);
    }
    40% {
      transform: translate(30px, -2.651608px);
    }
    46.666667% {
      transform: translate(30px, -4.471832px);
    }
    53.333333% {
      transform: translate(30px, -2.651608px);
    }
    66.666667% {
      transform: translate(30px, 33.528168px);
    }
    73.333333% {
      transform: translate(30px, 41.764084px);
    }
    80% {
      transform: translate(30px, 33.528168px);
    }
    100% {
      transform: translate(30px, 33.528168px);
    }
  `,
        i = De`
    0% {
      transform: translate(50px, 33.528168px);
    }
    26.666667% {
      transform: translate(50px, 33.528168px);
    }
    33.333333% {
      transform: translate(50px, 41.764084px);
    }
    40% {
      transform: translate(50px, 33.528168px);
    }
    53.333333% {
      transform: translate(50px, -2.651608px);
    }
    60% {
      transform: translate(50px, -4.471832px);
    }
    66.666667% {
      transform: translate(50px, -2.651608px);
    }
    80% {
      transform: translate(50px, 33.528168px);
    }
    86.666667% {
      transform: translate(50px, 41.764084px);
    }
    93.333333% {
      transform: translate(50px, 33.528168px);
    }
    100% {
      transform: translate(50px, 33.528168px);
    }
  `
      return {
        root: (e) =>
          _e({
            height: e.customSize ? `${e.customSize}px` : void 0,
            verticalAlign: 'middle',
            width: e.customSize ? `${e.customSize}px` : Ct[e.size],
          }),
        circle1Scale: _e({
          animation: `${e} 1s linear infinite normal forwards;`,
        }),
        circle2Scale: _e({
          animation: `${t} 1s linear infinite normal forwards;`,
        }),
        circle3Scale: _e({
          animation: `${n} 1s linear infinite normal forwards;`,
        }),
        circle1Translate: _e({
          animation: `${r} 1s linear infinite normal forwards;`,
        }),
        circle2Translate: _e({
          animation: `${o} 1s linear infinite normal forwards;`,
        }),
        circle3Translate: _e({
          animation: `${i} 1s linear infinite normal forwards;`,
        }),
      }
    })()
    return t(s).createElement(
      ct,
      ((e, t) => bt(e, wt(t)))(
        ((e, t) => {
          for (var n in t || (t = {})) kt.call(t, n) && Et(e, n, t[n])
          if (xt) for (var n of xt(t)) St.call(t, n) && Et(e, n, t[n])
          return e
        })({ as: 'div', display: 'inline-block' }, c),
        {
          className: je(f.root({ size: a, customSize: i }), o),
          ref: n,
          testId: u,
        }
      ),
      t(s).createElement(
        'svg',
        {
          className: _e({ display: 'block', fill: Ot[l] }),
          viewBox: '0 0 60 51',
          xmlns: 'http://www.w3.org/2000/svg',
        },
        t(s).createElement('title', null, 'Loading…'),
        t(s).createElement(
          'g',
          {
            className: f.circle1Translate,
            transform: 'translate(10,33.528168)',
          },
          t(s).createElement(
            'g',
            { className: f.circle1Scale },
            t(s).createElement('circle', {
              r: '6',
              transform: 'translate(0,10.471832)',
            })
          )
        ),
        t(s).createElement(
          'g',
          {
            className: f.circle2Translate,
            transform: 'translate(30,33.528168)',
          },
          t(s).createElement(
            'g',
            { className: f.circle2Scale },
            t(s).createElement('circle', {
              r: '6',
              transform: 'translate(0,10.471832)',
            })
          )
        ),
        t(s).createElement(
          'g',
          {
            className: f.circle3Translate,
            transform: 'translate(50,33.528168)',
          },
          t(s).createElement(
            'g',
            { className: f.circle3Scale },
            t(s).createElement('circle', {
              r: '6',
              transform: 'translate(0,10.471832)',
            })
          )
        )
      )
    )
  })
At.displayName = 'Spinner'
var Pt
Pt = i('6AbxL')
var Tt = {}
Tt = (function () {
  var e = Function.prototype.toString,
    t = Object.create,
    r = Object.defineProperty,
    o = Object.getOwnPropertyDescriptor,
    i = Object.getOwnPropertyNames,
    a = Object.getOwnPropertySymbols,
    l = Object.getPrototypeOf,
    u = Object.prototype,
    s = u.hasOwnProperty,
    c = u.propertyIsEnumerable,
    f = 'function' == typeof a,
    p = 'function' == typeof WeakMap,
    d = (function () {
      if (p)
        return function () {
          return new WeakMap()
        }
      var e = (function () {
        function e() {
          ;(this._keys = []), (this._values = [])
        }
        return (
          (e.prototype.has = function (e) {
            return !!~this._keys.indexOf(e)
          }),
          (e.prototype.get = function (e) {
            return this._values[this._keys.indexOf(e)]
          }),
          (e.prototype.set = function (e, t) {
            this._keys.push(e), this._values.push(t)
          }),
          e
        )
      })()
      return function () {
        return new e()
      }
    })(),
    h = function (n, r) {
      var o = n.__proto__ || l(n)
      if (!o) return t(null)
      var i = o.constructor
      if (i === r.Object) return o === r.Object.prototype ? {} : t(o)
      if (~e.call(i).indexOf('[native code]'))
        try {
          return new i()
        } catch (e) {}
      return t(o)
    },
    g = function (e, t, n, r) {
      var o = h(e, t)
      for (var i in (r.set(e, o), e)) s.call(e, i) && (o[i] = n(e[i], r))
      if (f)
        for (var l = a(e), u = 0, p = l.length, d = void 0; u < p; ++u)
          (d = l[u]), c.call(e, d) && (o[d] = n(e[d], r))
      return o
    },
    m = function (e, t, n, l) {
      var u = h(e, t)
      l.set(e, u)
      for (
        var s = f ? i(e).concat(a(e)) : i(e),
          c = 0,
          p = s.length,
          d = void 0,
          g = void 0;
        c < p;
        ++c
      )
        if ('callee' !== (d = s[c]) && 'caller' !== d)
          if ((g = o(e, d))) {
            g.get || g.set || (g.value = n(e[d], l))
            try {
              r(u, d, g)
            } catch (e) {
              u[d] = g.value
            }
          } else u[d] = n(e[d], l)
      return u
    },
    y = function (e) {
      var t = ''
      return (
        e.global && (t += 'g'),
        e.ignoreCase && (t += 'i'),
        e.multiline && (t += 'm'),
        e.unicode && (t += 'u'),
        e.sticky && (t += 'y'),
        t
      )
    },
    v = Array.isArray,
    b = Object.getPrototypeOf,
    w = (function () {
      return 'undefined' != typeof globalThis
        ? globalThis
        : 'undefined' != typeof self
          ? self
          : 'undefined' != typeof window
            ? window
            : void 0 !== n
              ? n
              : (console &&
                  console.error &&
                  console.error(
                    'Unable to locate global object, returning "this".'
                  ),
                this)
    })()
  function x(e, t) {
    var n = !(!t || !t.isStrict),
      r = (t && t.realm) || w,
      o = n ? m : g,
      i = function (e, t) {
        if (!e || 'object' != typeof e) return e
        if (t.has(e)) return t.get(e)
        var a,
          l = e.__proto__ || b(e),
          u = l && l.constructor
        if (!u || u === r.Object) return o(e, r, i, t)
        if (v(e)) {
          if (n) return m(e, r, i, t)
          ;(a = new u()), t.set(e, a)
          for (var s = 0, c = e.length; s < c; ++s) a[s] = i(e[s], t)
          return a
        }
        if (e instanceof r.Date) return new u(e.getTime())
        if (e instanceof r.RegExp)
          return (
            ((a = new u(e.source, e.flags || y(e))).lastIndex = e.lastIndex), a
          )
        if (r.Map && e instanceof r.Map)
          return (
            (a = new u()),
            t.set(e, a),
            e.forEach(function (e, n) {
              a.set(n, i(e, t))
            }),
            a
          )
        if (r.Set && e instanceof r.Set)
          return (
            (a = new u()),
            t.set(e, a),
            e.forEach(function (e) {
              a.add(i(e, t))
            }),
            a
          )
        if (r.Blob && e instanceof r.Blob) return e.slice(0, e.size, e.type)
        if (r.Buffer && r.Buffer.isBuffer(e))
          return (
            (a = r.Buffer.allocUnsafe
              ? r.Buffer.allocUnsafe(e.length)
              : new u(e.length)),
            t.set(e, a),
            e.copy(a),
            a
          )
        if (r.ArrayBuffer) {
          if (r.ArrayBuffer.isView(e))
            return (a = new u(e.buffer.slice(0))), t.set(e, a), a
          if (e instanceof r.ArrayBuffer)
            return (a = e.slice(0)), t.set(e, a), a
        }
        return 'function' == typeof e.then ||
          e instanceof Error ||
          (r.WeakMap && e instanceof r.WeakMap) ||
          (r.WeakSet && e instanceof r.WeakSet)
          ? e
          : o(e, r, i, t)
      }
    return i(e, d())
  }
  return (
    (x.default = x),
    (x.strict = function (e, t) {
      return x(e, { isStrict: !0, realm: t ? t.realm : void 0 })
    }),
    x
  )
})()
var Lt,
  Rt,
  Ft,
  jt,
  Dt,
  _t = SyntaxError,
  Nt = Function,
  It = TypeError,
  Bt = function (e) {
    try {
      return Nt('"use strict"; return (' + e + ').constructor;')()
    } catch (e) {}
  },
  zt = Object.getOwnPropertyDescriptor
if (zt)
  try {
    zt({}, '')
  } catch (e) {
    zt = null
  }
var Mt = function () {
    throw new It()
  },
  Ut = zt
    ? (function () {
        try {
          return Mt
        } catch (e) {
          try {
            return zt(arguments, 'callee').get
          } catch (e) {
            return Mt
          }
        }
      })()
    : Mt,
  qt = i('734S0')(),
  Vt =
    Object.getPrototypeOf ||
    function (e) {
      return e.__proto__
    },
  Ht = {},
  Wt = 'undefined' == typeof Uint8Array ? Dt : Vt(Uint8Array),
  $t = {
    '%AggregateError%':
      'undefined' == typeof AggregateError ? Dt : AggregateError,
    '%Array%': Array,
    '%ArrayBuffer%': 'undefined' == typeof ArrayBuffer ? Dt : ArrayBuffer,
    '%ArrayIteratorPrototype%': qt ? Vt([][Symbol.iterator]()) : Dt,
    '%AsyncFromSyncIteratorPrototype%': Dt,
    '%AsyncFunction%': Ht,
    '%AsyncGenerator%': Ht,
    '%AsyncGeneratorFunction%': Ht,
    '%AsyncIteratorPrototype%': Ht,
    '%Atomics%': 'undefined' == typeof Atomics ? Dt : Atomics,
    '%BigInt%': 'undefined' == typeof BigInt ? Dt : BigInt,
    '%BigInt64Array%': 'undefined' == typeof BigInt64Array ? Dt : BigInt64Array,
    '%BigUint64Array%':
      'undefined' == typeof BigUint64Array ? Dt : BigUint64Array,
    '%Boolean%': Boolean,
    '%DataView%': 'undefined' == typeof DataView ? Dt : DataView,
    '%Date%': Date,
    '%decodeURI%': decodeURI,
    '%decodeURIComponent%': decodeURIComponent,
    '%encodeURI%': encodeURI,
    '%encodeURIComponent%': encodeURIComponent,
    '%Error%': Error,
    '%eval%': eval,
    '%EvalError%': EvalError,
    '%Float32Array%': 'undefined' == typeof Float32Array ? Dt : Float32Array,
    '%Float64Array%': 'undefined' == typeof Float64Array ? Dt : Float64Array,
    '%FinalizationRegistry%':
      'undefined' == typeof FinalizationRegistry ? Dt : FinalizationRegistry,
    '%Function%': Nt,
    '%GeneratorFunction%': Ht,
    '%Int8Array%': 'undefined' == typeof Int8Array ? Dt : Int8Array,
    '%Int16Array%': 'undefined' == typeof Int16Array ? Dt : Int16Array,
    '%Int32Array%': 'undefined' == typeof Int32Array ? Dt : Int32Array,
    '%isFinite%': isFinite,
    '%isNaN%': isNaN,
    '%IteratorPrototype%': qt ? Vt(Vt([][Symbol.iterator]())) : Dt,
    '%JSON%': 'object' == typeof JSON ? JSON : Dt,
    '%Map%': 'undefined' == typeof Map ? Dt : Map,
    '%MapIteratorPrototype%':
      'undefined' != typeof Map && qt ? Vt(new Map()[Symbol.iterator]()) : Dt,
    '%Math%': Math,
    '%Number%': Number,
    '%Object%': Object,
    '%parseFloat%': parseFloat,
    '%parseInt%': parseInt,
    '%Promise%': 'undefined' == typeof Promise ? Dt : Promise,
    '%Proxy%': 'undefined' == typeof Proxy ? Dt : Proxy,
    '%RangeError%': RangeError,
    '%ReferenceError%': ReferenceError,
    '%Reflect%': 'undefined' == typeof Reflect ? Dt : Reflect,
    '%RegExp%': RegExp,
    '%Set%': 'undefined' == typeof Set ? Dt : Set,
    '%SetIteratorPrototype%':
      'undefined' != typeof Set && qt ? Vt(new Set()[Symbol.iterator]()) : Dt,
    '%SharedArrayBuffer%':
      'undefined' == typeof SharedArrayBuffer ? Dt : SharedArrayBuffer,
    '%String%': String,
    '%StringIteratorPrototype%': qt ? Vt(''[Symbol.iterator]()) : Dt,
    '%Symbol%': qt ? Symbol : Dt,
    '%SyntaxError%': _t,
    '%ThrowTypeError%': Ut,
    '%TypedArray%': Wt,
    '%TypeError%': It,
    '%Uint8Array%': 'undefined' == typeof Uint8Array ? Dt : Uint8Array,
    '%Uint8ClampedArray%':
      'undefined' == typeof Uint8ClampedArray ? Dt : Uint8ClampedArray,
    '%Uint16Array%': 'undefined' == typeof Uint16Array ? Dt : Uint16Array,
    '%Uint32Array%': 'undefined' == typeof Uint32Array ? Dt : Uint32Array,
    '%URIError%': URIError,
    '%WeakMap%': 'undefined' == typeof WeakMap ? Dt : WeakMap,
    '%WeakRef%': 'undefined' == typeof WeakRef ? Dt : WeakRef,
    '%WeakSet%': 'undefined' == typeof WeakSet ? Dt : WeakSet,
  }
try {
  null.error
} catch (e) {
  var Qt = Vt(Vt(e))
  $t['%Error.prototype%'] = Qt
}
var Gt,
  Jt = function e(t) {
    var n
    if ('%AsyncFunction%' === t) n = Bt('async function () {}')
    else if ('%GeneratorFunction%' === t) n = Bt('function* () {}')
    else if ('%AsyncGeneratorFunction%' === t) n = Bt('async function* () {}')
    else if ('%AsyncGenerator%' === t) {
      var r = e('%AsyncGeneratorFunction%')
      r && (n = r.prototype)
    } else if ('%AsyncIteratorPrototype%' === t) {
      var o = e('%AsyncGenerator%')
      o && (n = Vt(o.prototype))
    }
    return ($t[t] = n), n
  },
  Xt = {
    '%ArrayBufferPrototype%': ['ArrayBuffer', 'prototype'],
    '%ArrayPrototype%': ['Array', 'prototype'],
    '%ArrayProto_entries%': ['Array', 'prototype', 'entries'],
    '%ArrayProto_forEach%': ['Array', 'prototype', 'forEach'],
    '%ArrayProto_keys%': ['Array', 'prototype', 'keys'],
    '%ArrayProto_values%': ['Array', 'prototype', 'values'],
    '%AsyncFunctionPrototype%': ['AsyncFunction', 'prototype'],
    '%AsyncGenerator%': ['AsyncGeneratorFunction', 'prototype'],
    '%AsyncGeneratorPrototype%': [
      'AsyncGeneratorFunction',
      'prototype',
      'prototype',
    ],
    '%BooleanPrototype%': ['Boolean', 'prototype'],
    '%DataViewPrototype%': ['DataView', 'prototype'],
    '%DatePrototype%': ['Date', 'prototype'],
    '%ErrorPrototype%': ['Error', 'prototype'],
    '%EvalErrorPrototype%': ['EvalError', 'prototype'],
    '%Float32ArrayPrototype%': ['Float32Array', 'prototype'],
    '%Float64ArrayPrototype%': ['Float64Array', 'prototype'],
    '%FunctionPrototype%': ['Function', 'prototype'],
    '%Generator%': ['GeneratorFunction', 'prototype'],
    '%GeneratorPrototype%': ['GeneratorFunction', 'prototype', 'prototype'],
    '%Int8ArrayPrototype%': ['Int8Array', 'prototype'],
    '%Int16ArrayPrototype%': ['Int16Array', 'prototype'],
    '%Int32ArrayPrototype%': ['Int32Array', 'prototype'],
    '%JSONParse%': ['JSON', 'parse'],
    '%JSONStringify%': ['JSON', 'stringify'],
    '%MapPrototype%': ['Map', 'prototype'],
    '%NumberPrototype%': ['Number', 'prototype'],
    '%ObjectPrototype%': ['Object', 'prototype'],
    '%ObjProto_toString%': ['Object', 'prototype', 'toString'],
    '%ObjProto_valueOf%': ['Object', 'prototype', 'valueOf'],
    '%PromisePrototype%': ['Promise', 'prototype'],
    '%PromiseProto_then%': ['Promise', 'prototype', 'then'],
    '%Promise_all%': ['Promise', 'all'],
    '%Promise_reject%': ['Promise', 'reject'],
    '%Promise_resolve%': ['Promise', 'resolve'],
    '%RangeErrorPrototype%': ['RangeError', 'prototype'],
    '%ReferenceErrorPrototype%': ['ReferenceError', 'prototype'],
    '%RegExpPrototype%': ['RegExp', 'prototype'],
    '%SetPrototype%': ['Set', 'prototype'],
    '%SharedArrayBufferPrototype%': ['SharedArrayBuffer', 'prototype'],
    '%StringPrototype%': ['String', 'prototype'],
    '%SymbolPrototype%': ['Symbol', 'prototype'],
    '%SyntaxErrorPrototype%': ['SyntaxError', 'prototype'],
    '%TypedArrayPrototype%': ['TypedArray', 'prototype'],
    '%TypeErrorPrototype%': ['TypeError', 'prototype'],
    '%Uint8ArrayPrototype%': ['Uint8Array', 'prototype'],
    '%Uint8ClampedArrayPrototype%': ['Uint8ClampedArray', 'prototype'],
    '%Uint16ArrayPrototype%': ['Uint16Array', 'prototype'],
    '%Uint32ArrayPrototype%': ['Uint32Array', 'prototype'],
    '%URIErrorPrototype%': ['URIError', 'prototype'],
    '%WeakMapPrototype%': ['WeakMap', 'prototype'],
    '%WeakSetPrototype%': ['WeakSet', 'prototype'],
  },
  Yt = {},
  Kt = 'Function.prototype.bind called on incompatible ',
  Zt = Array.prototype.slice,
  en = Object.prototype.toString,
  tn = '[object Function]'
;(Gt = function (e) {
  var t = this
  if ('function' != typeof t || en.call(t) !== tn) throw new TypeError(Kt + t)
  for (
    var n,
      r = Zt.call(arguments, 1),
      o = function () {
        if (this instanceof n) {
          var o = t.apply(this, r.concat(Zt.call(arguments)))
          return Object(o) === o ? o : this
        }
        return t.apply(e, r.concat(Zt.call(arguments)))
      },
      i = Math.max(0, t.length - r.length),
      a = [],
      l = 0;
    l < i;
    l++
  )
    a.push('$' + l)
  if (
    ((n = Function(
      'binder',
      'return function (' +
        a.join(',') +
        '){ return binder.apply(this,arguments); }'
    )(o)),
    t.prototype)
  ) {
    var u = function () {}
    ;(u.prototype = t.prototype), (n.prototype = new u()), (u.prototype = null)
  }
  return n
}),
  (Yt = Function.prototype.bind || Gt)
var nn = {}
nn = Yt.call(Function.call, Object.prototype.hasOwnProperty)
var rn,
  on,
  an = Yt.call(Function.call, Array.prototype.concat),
  ln = Yt.call(Function.apply, Array.prototype.splice),
  un = Yt.call(Function.call, String.prototype.replace),
  sn = Yt.call(Function.call, String.prototype.slice),
  cn = Yt.call(Function.call, RegExp.prototype.exec),
  fn =
    /[^%.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|%$))/g,
  pn = /\\(\\)?/g,
  dn = function (e) {
    var t = sn(e, 0, 1),
      n = sn(e, -1)
    if ('%' === t && '%' !== n)
      throw new _t('invalid intrinsic syntax, expected closing `%`')
    if ('%' === n && '%' !== t)
      throw new _t('invalid intrinsic syntax, expected opening `%`')
    var r = []
    return (
      un(e, fn, function (e, t, n, o) {
        r[r.length] = n ? un(o, pn, '$1') : t || e
      }),
      r
    )
  },
  hn = function (e, t) {
    var n,
      r = e
    if ((nn(Xt, r) && (r = '%' + (n = Xt[r])[0] + '%'), nn($t, r))) {
      var o = $t[r]
      if ((o === Ht && (o = Jt(r)), void 0 === o && !t))
        throw new It(
          'intrinsic ' +
            e +
            ' exists, but is not available. Please file an issue!'
        )
      return { alias: n, name: r, value: o }
    }
    throw new _t('intrinsic ' + e + ' does not exist!')
  },
  gn = (jt = function (e, t) {
    if ('string' != typeof e || 0 === e.length)
      throw new It('intrinsic name must be a non-empty string')
    if (arguments.length > 1 && 'boolean' != typeof t)
      throw new It('"allowMissing" argument must be a boolean')
    if (null === cn(/^%?[^%]*%?$/, e))
      throw new _t(
        '`%` may not be present anywhere but at the beginning and end of the intrinsic name'
      )
    var n = dn(e),
      r = n.length > 0 ? n[0] : '',
      o = hn('%' + r + '%', t),
      i = o.name,
      a = o.value,
      l = !1,
      u = o.alias
    u && ((r = u[0]), ln(n, an([0, 1], u)))
    for (var s = 1, c = !0; s < n.length; s += 1) {
      var f = n[s],
        p = sn(f, 0, 1),
        d = sn(f, -1)
      if (
        ('"' === p ||
          "'" === p ||
          '`' === p ||
          '"' === d ||
          "'" === d ||
          '`' === d) &&
        p !== d
      )
        throw new _t('property names with quotes must have matching quotes')
      if (
        (('constructor' !== f && c) || (l = !0),
        nn($t, (i = '%' + (r += '.' + f) + '%')))
      )
        a = $t[i]
      else if (null != a) {
        if (!(f in a)) {
          if (!t)
            throw new It(
              'base intrinsic for ' +
                e +
                ' exists, but the property is not available.'
            )
          return
        }
        if (zt && s + 1 >= n.length) {
          var h = zt(a, f)
          a =
            (c = !!h) && 'get' in h && !('originalValue' in h.get)
              ? h.get
              : a[f]
        } else (c = nn(a, f)), (a = a[f])
        c && !l && ($t[i] = a)
      }
    }
    return a
  })('%Function.prototype.apply%'),
  mn = jt('%Function.prototype.call%'),
  yn = jt('%Reflect.apply%', !0) || Yt.call(mn, gn),
  vn = jt('%Object.getOwnPropertyDescriptor%', !0),
  bn = jt('%Object.defineProperty%', !0),
  wn = jt('%Math.max%')
if (bn)
  try {
    bn({}, 'a', { value: 1 })
  } catch (e) {
    bn = null
  }
on = function (e) {
  var t = yn(Yt, mn, arguments)
  if (vn && bn) {
    var n = vn(t, 'length')
    n.configurable &&
      bn(t, 'length', { value: 1 + wn(0, e.length - (arguments.length - 1)) })
  }
  return t
}
var xn = function () {
  return yn(Yt, gn, arguments)
}
bn ? bn(on, 'apply', { value: xn }) : (on.apply = xn)
var kn = on(jt('String.prototype.indexOf'))
rn = function (e, t) {
  var n = jt(e, !!t)
  return 'function' == typeof n && kn(e, '.prototype.') > -1 ? on(n) : n
}
var Sn,
  En = 'function' == typeof Map && Map.prototype,
  Cn =
    Object.getOwnPropertyDescriptor && En
      ? Object.getOwnPropertyDescriptor(Map.prototype, 'size')
      : null,
  On = En && Cn && 'function' == typeof Cn.get ? Cn.get : null,
  An = En && Map.prototype.forEach,
  Pn = 'function' == typeof Set && Set.prototype,
  Tn =
    Object.getOwnPropertyDescriptor && Pn
      ? Object.getOwnPropertyDescriptor(Set.prototype, 'size')
      : null,
  Ln = Pn && Tn && 'function' == typeof Tn.get ? Tn.get : null,
  Rn = Pn && Set.prototype.forEach,
  Fn =
    'function' == typeof WeakMap && WeakMap.prototype
      ? WeakMap.prototype.has
      : null,
  jn =
    'function' == typeof WeakSet && WeakSet.prototype
      ? WeakSet.prototype.has
      : null,
  Dn =
    'function' == typeof WeakRef && WeakRef.prototype
      ? WeakRef.prototype.deref
      : null,
  _n = Boolean.prototype.valueOf,
  Nn = Object.prototype.toString,
  In = Function.prototype.toString,
  Bn = String.prototype.match,
  zn = String.prototype.slice,
  Mn = String.prototype.replace,
  Un = String.prototype.toUpperCase,
  qn = String.prototype.toLowerCase,
  Vn = RegExp.prototype.test,
  Hn = Array.prototype.concat,
  Wn = Array.prototype.join,
  $n = Array.prototype.slice,
  Qn = Math.floor,
  Gn = 'function' == typeof BigInt ? BigInt.prototype.valueOf : null,
  Jn = Object.getOwnPropertySymbols,
  Xn =
    'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
      ? Symbol.prototype.toString
      : null,
  Yn = 'function' == typeof Symbol && 'object' == typeof Symbol.iterator,
  Kn =
    'function' == typeof Symbol &&
    Symbol.toStringTag &&
    (typeof Symbol.toStringTag === Yn || 'symbol')
      ? Symbol.toStringTag
      : null,
  Zn = Object.prototype.propertyIsEnumerable,
  er =
    ('function' == typeof Reflect
      ? Reflect.getPrototypeOf
      : Object.getPrototypeOf) ||
    ([].__proto__ === Array.prototype
      ? function (e) {
          return e.__proto__
        }
      : null)
function tr(e, t) {
  if (
    e === 1 / 0 ||
    e === -1 / 0 ||
    e != e ||
    (e && e > -1e3 && e < 1e3) ||
    Vn.call(/e/, t)
  )
    return t
  var n = /[0-9](?=(?:[0-9]{3})+(?![0-9]))/g
  if ('number' == typeof e) {
    var r = e < 0 ? -Qn(-e) : Qn(e)
    if (r !== e) {
      var o = String(r),
        i = zn.call(t, o.length + 1)
      return (
        Mn.call(o, n, '$&_') +
        '.' +
        Mn.call(Mn.call(i, /([0-9]{3})/g, '$&_'), /_$/, '')
      )
    }
  }
  return Mn.call(t, n, '$&_')
}
var nr = {},
  rr = nr.custom,
  or = sr(rr) ? rr : null
function ir(e, t, n) {
  var r = 'double' === (n.quoteStyle || t) ? '"' : "'"
  return r + e + r
}
function ar(e) {
  return Mn.call(String(e), /"/g, '&quot;')
}
function lr(e) {
  return !(
    '[object Array]' !== pr(e) ||
    (Kn && 'object' == typeof e && Kn in e)
  )
}
function ur(e) {
  return !(
    '[object RegExp]' !== pr(e) ||
    (Kn && 'object' == typeof e && Kn in e)
  )
}
function sr(e) {
  if (Yn) return e && 'object' == typeof e && e instanceof Symbol
  if ('symbol' == typeof e) return !0
  if (!e || 'object' != typeof e || !Xn) return !1
  try {
    return Xn.call(e), !0
  } catch (e) {}
  return !1
}
Sn = function e(t, n, r, o) {
  var i = n || {}
  if (
    fr(i, 'quoteStyle') &&
    'single' !== i.quoteStyle &&
    'double' !== i.quoteStyle
  )
    throw new TypeError('option "quoteStyle" must be "single" or "double"')
  if (
    fr(i, 'maxStringLength') &&
    ('number' == typeof i.maxStringLength
      ? i.maxStringLength < 0 && i.maxStringLength !== 1 / 0
      : null !== i.maxStringLength)
  )
    throw new TypeError(
      'option "maxStringLength", if provided, must be a positive integer, Infinity, or `null`'
    )
  var a = !fr(i, 'customInspect') || i.customInspect
  if ('boolean' != typeof a && 'symbol' !== a)
    throw new TypeError(
      'option "customInspect", if provided, must be `true`, `false`, or `\'symbol\'`'
    )
  if (
    fr(i, 'indent') &&
    null !== i.indent &&
    '\t' !== i.indent &&
    !(parseInt(i.indent, 10) === i.indent && i.indent > 0)
  )
    throw new TypeError(
      'option "indent" must be "\\t", an integer > 0, or `null`'
    )
  if (fr(i, 'numericSeparator') && 'boolean' != typeof i.numericSeparator)
    throw new TypeError(
      'option "numericSeparator", if provided, must be `true` or `false`'
    )
  var l = i.numericSeparator
  if (void 0 === t) return 'undefined'
  if (null === t) return 'null'
  if ('boolean' == typeof t) return t ? 'true' : 'false'
  if ('string' == typeof t) return hr(t, i)
  if ('number' == typeof t) {
    if (0 === t) return 1 / 0 / t > 0 ? '0' : '-0'
    var u = String(t)
    return l ? tr(t, u) : u
  }
  if ('bigint' == typeof t) {
    var s = String(t) + 'n'
    return l ? tr(t, s) : s
  }
  var c = void 0 === i.depth ? 5 : i.depth
  if ((void 0 === r && (r = 0), r >= c && c > 0 && 'object' == typeof t))
    return lr(t) ? '[Array]' : '[Object]'
  var f,
    p = (function (e, t) {
      var n
      if ('\t' === e.indent) n = '\t'
      else {
        if (!('number' == typeof e.indent && e.indent > 0)) return null
        n = Wn.call(Array(e.indent + 1), ' ')
      }
      return { base: n, prev: Wn.call(Array(t + 1), n) }
    })(i, r)
  if (void 0 === o) o = []
  else if (dr(o, t) >= 0) return '[Circular]'
  function d(t, n, a) {
    if ((n && (o = $n.call(o)).push(n), a)) {
      var l = { depth: i.depth }
      return (
        fr(i, 'quoteStyle') && (l.quoteStyle = i.quoteStyle), e(t, l, r + 1, o)
      )
    }
    return e(t, i, r + 1, o)
  }
  if ('function' == typeof t && !ur(t)) {
    var h = (function (e) {
        if (e.name) return e.name
        var t = Bn.call(In.call(e), /^function\s*([\w$]+)/)
        return t ? t[1] : null
      })(t),
      g = wr(t, d)
    return (
      '[Function' +
      (h ? ': ' + h : ' (anonymous)') +
      ']' +
      (g.length > 0 ? ' { ' + Wn.call(g, ', ') + ' }' : '')
    )
  }
  if (sr(t)) {
    var m = Yn ? Mn.call(String(t), /^(Symbol\(.*\))_[^)]*$/, '$1') : Xn.call(t)
    return 'object' != typeof t || Yn ? m : mr(m)
  }
  if (
    (f = t) &&
    'object' == typeof f &&
    (('undefined' != typeof HTMLElement && f instanceof HTMLElement) ||
      ('string' == typeof f.nodeName && 'function' == typeof f.getAttribute))
  ) {
    for (
      var y = '<' + qn.call(String(t.nodeName)), v = t.attributes || [], b = 0;
      b < v.length;
      b++
    )
      y += ' ' + v[b].name + '=' + ir(ar(v[b].value), 'double', i)
    return (
      (y += '>'),
      t.childNodes && t.childNodes.length && (y += '...'),
      (y += '</' + qn.call(String(t.nodeName)) + '>')
    )
  }
  if (lr(t)) {
    if (0 === t.length) return '[]'
    var w = wr(t, d)
    return p &&
      !(function (e) {
        for (var t = 0; t < e.length; t++) if (dr(e[t], '\n') >= 0) return !1
        return !0
      })(w)
      ? '[' + br(w, p) + ']'
      : '[ ' + Wn.call(w, ', ') + ' ]'
  }
  if (
    (function (e) {
      return !(
        '[object Error]' !== pr(e) ||
        (Kn && 'object' == typeof e && Kn in e)
      )
    })(t)
  ) {
    var x = wr(t, d)
    return 'cause' in Error.prototype || !('cause' in t) || Zn.call(t, 'cause')
      ? 0 === x.length
        ? '[' + String(t) + ']'
        : '{ [' + String(t) + '] ' + Wn.call(x, ', ') + ' }'
      : '{ [' +
          String(t) +
          '] ' +
          Wn.call(Hn.call('[cause]: ' + d(t.cause), x), ', ') +
          ' }'
  }
  if ('object' == typeof t && a) {
    if (or && 'function' == typeof t[or] && nr) return nr(t, { depth: c - r })
    if ('symbol' !== a && 'function' == typeof t.inspect) return t.inspect()
  }
  if (
    (function (e) {
      if (!On || !e || 'object' != typeof e) return !1
      try {
        On.call(e)
        try {
          Ln.call(e)
        } catch (e) {
          return !0
        }
        return e instanceof Map
      } catch (e) {}
      return !1
    })(t)
  ) {
    var k = []
    return (
      An &&
        An.call(t, function (e, n) {
          k.push(d(n, t, !0) + ' => ' + d(e, t))
        }),
      vr('Map', On.call(t), k, p)
    )
  }
  if (
    (function (e) {
      if (!Ln || !e || 'object' != typeof e) return !1
      try {
        Ln.call(e)
        try {
          On.call(e)
        } catch (e) {
          return !0
        }
        return e instanceof Set
      } catch (e) {}
      return !1
    })(t)
  ) {
    var S = []
    return (
      Rn &&
        Rn.call(t, function (e) {
          S.push(d(e, t))
        }),
      vr('Set', Ln.call(t), S, p)
    )
  }
  if (
    (function (e) {
      if (!Fn || !e || 'object' != typeof e) return !1
      try {
        Fn.call(e, Fn)
        try {
          jn.call(e, jn)
        } catch (e) {
          return !0
        }
        return e instanceof WeakMap
      } catch (e) {}
      return !1
    })(t)
  )
    return yr('WeakMap')
  if (
    (function (e) {
      if (!jn || !e || 'object' != typeof e) return !1
      try {
        jn.call(e, jn)
        try {
          Fn.call(e, Fn)
        } catch (e) {
          return !0
        }
        return e instanceof WeakSet
      } catch (e) {}
      return !1
    })(t)
  )
    return yr('WeakSet')
  if (
    (function (e) {
      if (!Dn || !e || 'object' != typeof e) return !1
      try {
        return Dn.call(e), !0
      } catch (e) {}
      return !1
    })(t)
  )
    return yr('WeakRef')
  if (
    (function (e) {
      return !(
        '[object Number]' !== pr(e) ||
        (Kn && 'object' == typeof e && Kn in e)
      )
    })(t)
  )
    return mr(d(Number(t)))
  if (
    (function (e) {
      if (!e || 'object' != typeof e || !Gn) return !1
      try {
        return Gn.call(e), !0
      } catch (e) {}
      return !1
    })(t)
  )
    return mr(d(Gn.call(t)))
  if (
    (function (e) {
      return !(
        '[object Boolean]' !== pr(e) ||
        (Kn && 'object' == typeof e && Kn in e)
      )
    })(t)
  )
    return mr(_n.call(t))
  if (
    (function (e) {
      return !(
        '[object String]' !== pr(e) ||
        (Kn && 'object' == typeof e && Kn in e)
      )
    })(t)
  )
    return mr(d(String(t)))
  if (
    !(function (e) {
      return !(
        '[object Date]' !== pr(e) ||
        (Kn && 'object' == typeof e && Kn in e)
      )
    })(t) &&
    !ur(t)
  ) {
    var E = wr(t, d),
      C = er
        ? er(t) === Object.prototype
        : t instanceof Object || t.constructor === Object,
      O = t instanceof Object ? '' : 'null prototype',
      A =
        !C && Kn && Object(t) === t && Kn in t
          ? zn.call(pr(t), 8, -1)
          : O
            ? 'Object'
            : '',
      P =
        (C || 'function' != typeof t.constructor
          ? ''
          : t.constructor.name
            ? t.constructor.name + ' '
            : '') +
        (A || O
          ? '[' + Wn.call(Hn.call([], A || [], O || []), ': ') + '] '
          : '')
    return 0 === E.length
      ? P + '{}'
      : p
        ? P + '{' + br(E, p) + '}'
        : P + '{ ' + Wn.call(E, ', ') + ' }'
  }
  return String(t)
}
var cr =
  Object.prototype.hasOwnProperty ||
  function (e) {
    return e in this
  }
function fr(e, t) {
  return cr.call(e, t)
}
function pr(e) {
  return Nn.call(e)
}
function dr(e, t) {
  if (e.indexOf) return e.indexOf(t)
  for (var n = 0, r = e.length; n < r; n++) if (e[n] === t) return n
  return -1
}
function hr(e, t) {
  if (e.length > t.maxStringLength) {
    var n = e.length - t.maxStringLength,
      r = '... ' + n + ' more character' + (n > 1 ? 's' : '')
    return hr(zn.call(e, 0, t.maxStringLength), t) + r
  }
  return ir(
    Mn.call(Mn.call(e, /(['\\])/g, '\\$1'), /[\x00-\x1f]/g, gr),
    'single',
    t
  )
}
function gr(e) {
  var t = e.charCodeAt(0),
    n = { 8: 'b', 9: 't', 10: 'n', 12: 'f', 13: 'r' }[t]
  return n ? '\\' + n : '\\x' + (t < 16 ? '0' : '') + Un.call(t.toString(16))
}
function mr(e) {
  return 'Object(' + e + ')'
}
function yr(e) {
  return e + ' { ? }'
}
function vr(e, t, n, r) {
  return e + ' (' + t + ') {' + (r ? br(n, r) : Wn.call(n, ', ')) + '}'
}
function br(e, t) {
  if (0 === e.length) return ''
  var n = '\n' + t.prev + t.base
  return n + Wn.call(e, ',' + n) + '\n' + t.prev
}
function wr(e, t) {
  var n = lr(e),
    r = []
  if (n) {
    r.length = e.length
    for (var o = 0; o < e.length; o++) r[o] = fr(e, o) ? t(e[o], e) : ''
  }
  var i,
    a = 'function' == typeof Jn ? Jn(e) : []
  if (Yn) {
    i = {}
    for (var l = 0; l < a.length; l++) i['$' + a[l]] = a[l]
  }
  for (var u in e)
    fr(e, u) &&
      ((n && String(Number(u)) === u && u < e.length) ||
        (Yn && i['$' + u] instanceof Symbol) ||
        (Vn.call(/[^\w$]/, u)
          ? r.push(t(u, e) + ': ' + t(e[u], e))
          : r.push(u + ': ' + t(e[u], e))))
  if ('function' == typeof Jn)
    for (var s = 0; s < a.length; s++)
      Zn.call(e, a[s]) && r.push('[' + t(a[s]) + ']: ' + t(e[a[s]], e))
  return r
}
var xr = jt('%TypeError%'),
  kr = jt('%WeakMap%', !0),
  Sr = jt('%Map%', !0),
  Er = rn('WeakMap.prototype.get', !0),
  Cr = rn('WeakMap.prototype.set', !0),
  Or = rn('WeakMap.prototype.has', !0),
  Ar = rn('Map.prototype.get', !0),
  Pr = rn('Map.prototype.set', !0),
  Tr = rn('Map.prototype.has', !0),
  Lr = function (e, t) {
    for (var n, r = e; null !== (n = r.next); r = n)
      if (n.key === t)
        return (r.next = n.next), (n.next = e.next), (e.next = n), n
  }
Ft = function () {
  var e,
    t,
    n,
    r = {
      assert: function (e) {
        if (!r.has(e)) throw new xr('Side channel does not contain ' + Sn(e))
      },
      get: function (r) {
        if (kr && r && ('object' == typeof r || 'function' == typeof r)) {
          if (e) return Er(e, r)
        } else if (Sr) {
          if (t) return Ar(t, r)
        } else if (n)
          return (function (e, t) {
            var n = Lr(e, t)
            return n && n.value
          })(n, r)
      },
      has: function (r) {
        if (kr && r && ('object' == typeof r || 'function' == typeof r)) {
          if (e) return Or(e, r)
        } else if (Sr) {
          if (t) return Tr(t, r)
        } else if (n)
          return (function (e, t) {
            return !!Lr(e, t)
          })(n, r)
        return !1
      },
      set: function (r, o) {
        kr && r && ('object' == typeof r || 'function' == typeof r)
          ? (e || (e = new kr()), Cr(e, r, o))
          : Sr
            ? (t || (t = new Sr()), Pr(t, r, o))
            : (n || (n = { key: {}, next: null }),
              (function (e, t, n) {
                var r = Lr(e, t)
                r
                  ? (r.value = n)
                  : (e.next = { key: t, next: e.next, value: n })
              })(n, r, o))
      },
    }
  return r
}
var Rr,
  Fr,
  jr = String.prototype.replace,
  Dr = /%20/g,
  _r = 'RFC3986'
Fr = {
  default: _r,
  formatters: {
    RFC1738: function (e) {
      return jr.call(e, Dr, '+')
    },
    RFC3986: function (e) {
      return String(e)
    },
  },
  RFC1738: 'RFC1738',
  RFC3986: _r,
}
var Nr = Object.prototype.hasOwnProperty,
  Ir = Array.isArray,
  Br = (function () {
    for (var e = [], t = 0; t < 256; ++t)
      e.push('%' + ((t < 16 ? '0' : '') + t.toString(16)).toUpperCase())
    return e
  })(),
  zr = function (e, t) {
    for (
      var n = t && t.plainObjects ? Object.create(null) : {}, r = 0;
      r < e.length;
      ++r
    )
      void 0 !== e[r] && (n[r] = e[r])
    return n
  }
Rr = {
  arrayToObject: zr,
  assign: function (e, t) {
    return Object.keys(t).reduce(function (e, n) {
      return (e[n] = t[n]), e
    }, e)
  },
  combine: function (e, t) {
    return [].concat(e, t)
  },
  compact: function (e) {
    for (
      var t = [{ obj: { o: e }, prop: 'o' }], n = [], r = 0;
      r < t.length;
      ++r
    )
      for (
        var o = t[r], i = o.obj[o.prop], a = Object.keys(i), l = 0;
        l < a.length;
        ++l
      ) {
        var u = a[l],
          s = i[u]
        'object' == typeof s &&
          null !== s &&
          -1 === n.indexOf(s) &&
          (t.push({ obj: i, prop: u }), n.push(s))
      }
    return (
      (function (e) {
        for (; e.length > 1; ) {
          var t = e.pop(),
            n = t.obj[t.prop]
          if (Ir(n)) {
            for (var r = [], o = 0; o < n.length; ++o)
              void 0 !== n[o] && r.push(n[o])
            t.obj[t.prop] = r
          }
        }
      })(t),
      e
    )
  },
  decode: function (e, t, n) {
    var r = e.replace(/\+/g, ' ')
    if ('iso-8859-1' === n) return r.replace(/%[0-9a-f]{2}/gi, unescape)
    try {
      return decodeURIComponent(r)
    } catch (e) {
      return r
    }
  },
  encode: function (e, t, n, r, o) {
    if (0 === e.length) return e
    var i = e
    if (
      ('symbol' == typeof e
        ? (i = Symbol.prototype.toString.call(e))
        : 'string' != typeof e && (i = String(e)),
      'iso-8859-1' === n)
    )
      return escape(i).replace(/%u[0-9a-f]{4}/gi, function (e) {
        return '%26%23' + parseInt(e.slice(2), 16) + '%3B'
      })
    for (var a = '', l = 0; l < i.length; ++l) {
      var u = i.charCodeAt(l)
      45 === u ||
      46 === u ||
      95 === u ||
      126 === u ||
      (u >= 48 && u <= 57) ||
      (u >= 65 && u <= 90) ||
      (u >= 97 && u <= 122) ||
      (o === Fr.RFC1738 && (40 === u || 41 === u))
        ? (a += i.charAt(l))
        : u < 128
          ? (a += Br[u])
          : u < 2048
            ? (a += Br[192 | (u >> 6)] + Br[128 | (63 & u)])
            : u < 55296 || u >= 57344
              ? (a +=
                  Br[224 | (u >> 12)] +
                  Br[128 | ((u >> 6) & 63)] +
                  Br[128 | (63 & u)])
              : ((l += 1),
                (u = 65536 + (((1023 & u) << 10) | (1023 & i.charCodeAt(l)))),
                (a +=
                  Br[240 | (u >> 18)] +
                  Br[128 | ((u >> 12) & 63)] +
                  Br[128 | ((u >> 6) & 63)] +
                  Br[128 | (63 & u)]))
    }
    return a
  },
  isBuffer: function (e) {
    return (
      !(!e || 'object' != typeof e) &&
      !!(e.constructor && e.constructor.isBuffer && e.constructor.isBuffer(e))
    )
  },
  isRegExp: function (e) {
    return '[object RegExp]' === Object.prototype.toString.call(e)
  },
  maybeMap: function (e, t) {
    if (Ir(e)) {
      for (var n = [], r = 0; r < e.length; r += 1) n.push(t(e[r]))
      return n
    }
    return t(e)
  },
  merge: function e(t, n, r) {
    if (!n) return t
    if ('object' != typeof n) {
      if (Ir(t)) t.push(n)
      else {
        if (!t || 'object' != typeof t) return [t, n]
        ;((r && (r.plainObjects || r.allowPrototypes)) ||
          !Nr.call(Object.prototype, n)) &&
          (t[n] = !0)
      }
      return t
    }
    if (!t || 'object' != typeof t) return [t].concat(n)
    var o = t
    return (
      Ir(t) && !Ir(n) && (o = zr(t, r)),
      Ir(t) && Ir(n)
        ? (n.forEach(function (n, o) {
            if (Nr.call(t, o)) {
              var i = t[o]
              i && 'object' == typeof i && n && 'object' == typeof n
                ? (t[o] = e(i, n, r))
                : t.push(n)
            } else t[o] = n
          }),
          t)
        : Object.keys(n).reduce(function (t, o) {
            var i = n[o]
            return Nr.call(t, o) ? (t[o] = e(t[o], i, r)) : (t[o] = i), t
          }, o)
    )
  },
}
var Mr = Object.prototype.hasOwnProperty,
  Ur = {
    brackets: function (e) {
      return e + '[]'
    },
    comma: 'comma',
    indices: function (e, t) {
      return e + '[' + t + ']'
    },
    repeat: function (e) {
      return e
    },
  },
  qr = Array.isArray,
  Vr = String.prototype.split,
  Hr = Array.prototype.push,
  Wr = function (e, t) {
    Hr.apply(e, qr(t) ? t : [t])
  },
  $r = Date.prototype.toISOString,
  Qr = Fr.default,
  Gr = {
    addQueryPrefix: !1,
    allowDots: !1,
    charset: 'utf-8',
    charsetSentinel: !1,
    delimiter: '&',
    encode: !0,
    encoder: Rr.encode,
    encodeValuesOnly: !1,
    format: Qr,
    formatter: Fr.formatters[Qr],
    indices: !1,
    serializeDate: function (e) {
      return $r.call(e)
    },
    skipNulls: !1,
    strictNullHandling: !1,
  },
  Jr = {},
  Xr = function e(t, n, r, o, i, a, l, u, s, c, f, p, d, h, g, m) {
    for (
      var y, v = t, b = m, w = 0, x = !1;
      void 0 !== (b = b.get(Jr)) && !x;

    ) {
      var k = b.get(t)
      if (((w += 1), void 0 !== k)) {
        if (k === w) throw new RangeError('Cyclic object value')
        x = !0
      }
      void 0 === b.get(Jr) && (w = 0)
    }
    if (
      ('function' == typeof u
        ? (v = u(n, v))
        : v instanceof Date
          ? (v = f(v))
          : 'comma' === r &&
            qr(v) &&
            (v = Rr.maybeMap(v, function (e) {
              return e instanceof Date ? f(e) : e
            })),
      null === v)
    ) {
      if (i) return l && !h ? l(n, Gr.encoder, g, 'key', p) : n
      v = ''
    }
    if (
      'string' == typeof (y = v) ||
      'number' == typeof y ||
      'boolean' == typeof y ||
      'symbol' == typeof y ||
      'bigint' == typeof y ||
      Rr.isBuffer(v)
    ) {
      if (l) {
        var S = h ? n : l(n, Gr.encoder, g, 'key', p)
        if ('comma' === r && h) {
          for (
            var E = Vr.call(String(v), ','), C = '', O = 0;
            O < E.length;
            ++O
          )
            C += (0 === O ? '' : ',') + d(l(E[O], Gr.encoder, g, 'value', p))
          return [d(S) + (o && qr(v) && 1 === E.length ? '[]' : '') + '=' + C]
        }
        return [d(S) + '=' + d(l(v, Gr.encoder, g, 'value', p))]
      }
      return [d(n) + '=' + d(String(v))]
    }
    var A,
      P = []
    if (void 0 === v) return P
    if ('comma' === r && qr(v))
      A = [{ value: v.length > 0 ? v.join(',') || null : void 0 }]
    else if (qr(u)) A = u
    else {
      var T = Object.keys(v)
      A = s ? T.sort(s) : T
    }
    for (
      var L = o && qr(v) && 1 === v.length ? n + '[]' : n, R = 0;
      R < A.length;
      ++R
    ) {
      var F = A[R],
        j = 'object' == typeof F && void 0 !== F.value ? F.value : v[F]
      if (!a || null !== j) {
        var D = qr(v)
          ? 'function' == typeof r
            ? r(L, F)
            : L
          : L + (c ? '.' + F : '[' + F + ']')
        m.set(t, w)
        var _ = Ft()
        _.set(Jr, m), Wr(P, e(j, D, r, o, i, a, l, u, s, c, f, p, d, h, g, _))
      }
    }
    return P
  }
Rt = function (e, t) {
  var n,
    r = e,
    o = (function (e) {
      if (!e) return Gr
      if (
        null !== e.encoder &&
        void 0 !== e.encoder &&
        'function' != typeof e.encoder
      )
        throw new TypeError('Encoder has to be a function.')
      var t = e.charset || Gr.charset
      if (
        void 0 !== e.charset &&
        'utf-8' !== e.charset &&
        'iso-8859-1' !== e.charset
      )
        throw new TypeError(
          'The charset option must be either utf-8, iso-8859-1, or undefined'
        )
      var n = Fr.default
      if (void 0 !== e.format) {
        if (!Mr.call(Fr.formatters, e.format))
          throw new TypeError('Unknown format option provided.')
        n = e.format
      }
      var r = Fr.formatters[n],
        o = Gr.filter
      return (
        ('function' == typeof e.filter || qr(e.filter)) && (o = e.filter),
        {
          addQueryPrefix:
            'boolean' == typeof e.addQueryPrefix
              ? e.addQueryPrefix
              : Gr.addQueryPrefix,
          allowDots: void 0 === e.allowDots ? Gr.allowDots : !!e.allowDots,
          charset: t,
          charsetSentinel:
            'boolean' == typeof e.charsetSentinel
              ? e.charsetSentinel
              : Gr.charsetSentinel,
          delimiter: void 0 === e.delimiter ? Gr.delimiter : e.delimiter,
          encode: 'boolean' == typeof e.encode ? e.encode : Gr.encode,
          encoder: 'function' == typeof e.encoder ? e.encoder : Gr.encoder,
          encodeValuesOnly:
            'boolean' == typeof e.encodeValuesOnly
              ? e.encodeValuesOnly
              : Gr.encodeValuesOnly,
          filter: o,
          format: n,
          formatter: r,
          serializeDate:
            'function' == typeof e.serializeDate
              ? e.serializeDate
              : Gr.serializeDate,
          skipNulls:
            'boolean' == typeof e.skipNulls ? e.skipNulls : Gr.skipNulls,
          sort: 'function' == typeof e.sort ? e.sort : null,
          strictNullHandling:
            'boolean' == typeof e.strictNullHandling
              ? e.strictNullHandling
              : Gr.strictNullHandling,
        }
      )
    })(t)
  'function' == typeof o.filter
    ? (r = (0, o.filter)('', r))
    : qr(o.filter) && (n = o.filter)
  var i,
    a = []
  if ('object' != typeof r || null === r) return ''
  i =
    t && t.arrayFormat in Ur
      ? t.arrayFormat
      : t && 'indices' in t
        ? t.indices
          ? 'indices'
          : 'repeat'
        : 'indices'
  var l = Ur[i]
  if (t && 'commaRoundTrip' in t && 'boolean' != typeof t.commaRoundTrip)
    throw new TypeError('`commaRoundTrip` must be a boolean, or absent')
  var u = 'comma' === l && t && t.commaRoundTrip
  n || (n = Object.keys(r)), o.sort && n.sort(o.sort)
  for (var s = Ft(), c = 0; c < n.length; ++c) {
    var f = n[c]
    ;(o.skipNulls && null === r[f]) ||
      Wr(
        a,
        Xr(
          r[f],
          f,
          l,
          u,
          o.strictNullHandling,
          o.skipNulls,
          o.encode ? o.encoder : null,
          o.filter,
          o.sort,
          o.allowDots,
          o.serializeDate,
          o.format,
          o.formatter,
          o.encodeValuesOnly,
          o.charset,
          s
        )
      )
  }
  var p = a.join(o.delimiter),
    d = !0 === o.addQueryPrefix ? '?' : ''
  return (
    o.charsetSentinel &&
      ('iso-8859-1' === o.charset
        ? (d += 'utf8=%26%2310003%3B&')
        : (d += 'utf8=%E2%9C%93&')),
    p.length > 0 ? d + p : ''
  )
}
var Yr = Object.prototype.hasOwnProperty,
  Kr = Array.isArray,
  Zr = {
    allowDots: !1,
    allowPrototypes: !1,
    allowSparse: !1,
    arrayLimit: 20,
    charset: 'utf-8',
    charsetSentinel: !1,
    comma: !1,
    decoder: Rr.decode,
    delimiter: '&',
    depth: 5,
    ignoreQueryPrefix: !1,
    interpretNumericEntities: !1,
    parameterLimit: 1e3,
    parseArrays: !0,
    plainObjects: !1,
    strictNullHandling: !1,
  },
  eo = function (e) {
    return e.replace(/&#(\d+);/g, function (e, t) {
      return String.fromCharCode(parseInt(t, 10))
    })
  },
  to = function (e, t) {
    return e && 'string' == typeof e && t.comma && e.indexOf(',') > -1
      ? e.split(',')
      : e
  },
  no = function (e, t, n, r) {
    if (e) {
      var o = n.allowDots ? e.replace(/\.([^.[]+)/g, '[$1]') : e,
        i = /(\[[^[\]]*])/g,
        a = n.depth > 0 && /(\[[^[\]]*])/.exec(o),
        l = a ? o.slice(0, a.index) : o,
        u = []
      if (l) {
        if (
          !n.plainObjects &&
          Yr.call(Object.prototype, l) &&
          !n.allowPrototypes
        )
          return
        u.push(l)
      }
      for (
        var s = 0;
        n.depth > 0 && null !== (a = i.exec(o)) && s < n.depth;

      ) {
        if (
          ((s += 1),
          !n.plainObjects &&
            Yr.call(Object.prototype, a[1].slice(1, -1)) &&
            !n.allowPrototypes)
        )
          return
        u.push(a[1])
      }
      return (
        a && u.push('[' + o.slice(a.index) + ']'),
        (function (e, t, n, r) {
          for (var o = r ? t : to(t, n), i = e.length - 1; i >= 0; --i) {
            var a,
              l = e[i]
            if ('[]' === l && n.parseArrays) a = [].concat(o)
            else {
              a = n.plainObjects ? Object.create(null) : {}
              var u =
                  '[' === l.charAt(0) && ']' === l.charAt(l.length - 1)
                    ? l.slice(1, -1)
                    : l,
                s = parseInt(u, 10)
              n.parseArrays || '' !== u
                ? !isNaN(s) &&
                  l !== u &&
                  String(s) === u &&
                  s >= 0 &&
                  n.parseArrays &&
                  s <= n.arrayLimit
                  ? ((a = [])[s] = o)
                  : '__proto__' !== u && (a[u] = o)
                : (a = { 0: o })
            }
            o = a
          }
          return o
        })(u, t, n, r)
      )
    }
  }
Lt = {
  formats: Fr,
  parse: function (e, t) {
    var n = (function (e) {
      if (!e) return Zr
      if (
        null !== e.decoder &&
        void 0 !== e.decoder &&
        'function' != typeof e.decoder
      )
        throw new TypeError('Decoder has to be a function.')
      if (
        void 0 !== e.charset &&
        'utf-8' !== e.charset &&
        'iso-8859-1' !== e.charset
      )
        throw new TypeError(
          'The charset option must be either utf-8, iso-8859-1, or undefined'
        )
      var t = void 0 === e.charset ? Zr.charset : e.charset
      return {
        allowDots: void 0 === e.allowDots ? Zr.allowDots : !!e.allowDots,
        allowPrototypes:
          'boolean' == typeof e.allowPrototypes
            ? e.allowPrototypes
            : Zr.allowPrototypes,
        allowSparse:
          'boolean' == typeof e.allowSparse ? e.allowSparse : Zr.allowSparse,
        arrayLimit:
          'number' == typeof e.arrayLimit ? e.arrayLimit : Zr.arrayLimit,
        charset: t,
        charsetSentinel:
          'boolean' == typeof e.charsetSentinel
            ? e.charsetSentinel
            : Zr.charsetSentinel,
        comma: 'boolean' == typeof e.comma ? e.comma : Zr.comma,
        decoder: 'function' == typeof e.decoder ? e.decoder : Zr.decoder,
        delimiter:
          'string' == typeof e.delimiter || Rr.isRegExp(e.delimiter)
            ? e.delimiter
            : Zr.delimiter,
        depth:
          'number' == typeof e.depth || !1 === e.depth ? +e.depth : Zr.depth,
        ignoreQueryPrefix: !0 === e.ignoreQueryPrefix,
        interpretNumericEntities:
          'boolean' == typeof e.interpretNumericEntities
            ? e.interpretNumericEntities
            : Zr.interpretNumericEntities,
        parameterLimit:
          'number' == typeof e.parameterLimit
            ? e.parameterLimit
            : Zr.parameterLimit,
        parseArrays: !1 !== e.parseArrays,
        plainObjects:
          'boolean' == typeof e.plainObjects ? e.plainObjects : Zr.plainObjects,
        strictNullHandling:
          'boolean' == typeof e.strictNullHandling
            ? e.strictNullHandling
            : Zr.strictNullHandling,
      }
    })(t)
    if ('' === e || null == e) return n.plainObjects ? Object.create(null) : {}
    for (
      var r =
          'string' == typeof e
            ? (function (e, t) {
                var n,
                  r = {},
                  o = t.ignoreQueryPrefix ? e.replace(/^\?/, '') : e,
                  i = t.parameterLimit === 1 / 0 ? void 0 : t.parameterLimit,
                  a = o.split(t.delimiter, i),
                  l = -1,
                  u = t.charset
                if (t.charsetSentinel)
                  for (n = 0; n < a.length; ++n)
                    0 === a[n].indexOf('utf8=') &&
                      ('utf8=%E2%9C%93' === a[n]
                        ? (u = 'utf-8')
                        : 'utf8=%26%2310003%3B' === a[n] && (u = 'iso-8859-1'),
                      (l = n),
                      (n = a.length))
                for (n = 0; n < a.length; ++n)
                  if (n !== l) {
                    var s,
                      c,
                      f = a[n],
                      p = f.indexOf(']='),
                      d = -1 === p ? f.indexOf('=') : p + 1
                    ;-1 === d
                      ? ((s = t.decoder(f, Zr.decoder, u, 'key')),
                        (c = t.strictNullHandling ? null : ''))
                      : ((s = t.decoder(f.slice(0, d), Zr.decoder, u, 'key')),
                        (c = Rr.maybeMap(to(f.slice(d + 1), t), function (e) {
                          return t.decoder(e, Zr.decoder, u, 'value')
                        }))),
                      c &&
                        t.interpretNumericEntities &&
                        'iso-8859-1' === u &&
                        (c = eo(c)),
                      f.indexOf('[]=') > -1 && (c = Kr(c) ? [c] : c),
                      Yr.call(r, s) ? (r[s] = Rr.combine(r[s], c)) : (r[s] = c)
                  }
                return r
              })(e, n)
            : e,
        o = n.plainObjects ? Object.create(null) : {},
        i = Object.keys(r),
        a = 0;
      a < i.length;
      ++a
    ) {
      var l = i[a],
        u = no(l, r[l], n, 'string' == typeof e)
      o = Rr.merge(o, u, n)
    }
    return !0 === n.allowSparse ? o : Rr.compact(o)
  },
  stringify: Rt,
}
var ro,
  oo = Object.prototype.toString,
  io = Array.isArray
ro = function (e) {
  return (
    'string' == typeof e ||
    (!io(e) &&
      (function (e) {
        return !!e && 'object' == typeof e
      })(e) &&
      '[object String]' == oo.call(e))
  )
}
var ao = {}
class lo extends Error {
  constructor() {
    super('Throttled function aborted'), (this.name = 'AbortError')
  }
}
;(ao = ({ limit: e, interval: t, strict: n }) => {
  if (!Number.isFinite(e))
    throw new TypeError('Expected `limit` to be a finite number')
  if (!Number.isFinite(t))
    throw new TypeError('Expected `interval` to be a finite number')
  const r = new Map()
  let o = 0,
    i = 0
  const a = []
  const l = n
    ? function () {
        const n = Date.now()
        if (a.length < e) return a.push(n), 0
        const r = a.shift() + t
        return n >= r ? (a.push(n), 0) : (a.push(r), r - n)
      }
    : function () {
        const n = Date.now()
        return n - o > t
          ? ((i = 1), (o = n), 0)
          : (i < e ? i++ : ((o += t), (i = 1)), o - n)
      }
  return (e) => {
    const t = function (...n) {
      if (!t.isEnabled) return (async () => e.apply(this, n))()
      let o
      return new Promise((t, i) => {
        ;(o = setTimeout(() => {
          t(e.apply(this, n)), r.delete(o)
        }, l())),
          r.set(o, i)
      })
    }
    return (
      (t.abort = () => {
        for (const e of r.keys()) clearTimeout(e), r.get(e)(new lo())
        r.clear(), a.splice(0, a.length)
      }),
      (t.isEnabled = !0),
      t
    )
  }
}).AbortError = lo
var uo
var so,
  co,
  fo = Function.prototype,
  po = Object.prototype,
  ho = fo.toString,
  go = po.hasOwnProperty,
  mo = ho.call(Object),
  yo = po.toString,
  vo =
    ((so = Object.getPrototypeOf),
    (co = Object),
    function (e) {
      return so(co(e))
    })
uo = function (e) {
  if (
    !(function (e) {
      return !!e && 'object' == typeof e
    })(e) ||
    '[object Object]' != yo.call(e) ||
    (function (e) {
      var t = !1
      if (null != e && 'function' != typeof e.toString)
        try {
          t = !!(e + '')
        } catch (e) {}
      return t
    })(e)
  )
    return !1
  var t = vo(e)
  if (null === t) return !0
  var n = go.call(t, 'constructor') && t.constructor
  return 'function' == typeof n && n instanceof n && ho.call(n) == mo
}
var bo = i('4kiXg')
function wo(e, t) {
  var n = Object.keys(e)
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e)
    t &&
      (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable
      })),
      n.push.apply(n, r)
  }
  return n
}
function xo(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {}
    t % 2
      ? wo(Object(n), !0).forEach(function (t) {
          Eo(e, t, n[t])
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : wo(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          })
  }
  return e
}
function ko(e) {
  return (
    (ko =
      'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
        ? function (e) {
            return typeof e
          }
        : function (e) {
            return e &&
              'function' == typeof Symbol &&
              e.constructor === Symbol &&
              e !== Symbol.prototype
              ? 'symbol'
              : typeof e
          }),
    ko(e)
  )
}
function So() {
  So = function (e, t) {
    return new n(e, void 0, t)
  }
  var e = RegExp.prototype,
    t = new WeakMap()
  function n(e, r, o) {
    var i = new RegExp(e, r)
    return t.set(i, o || t.get(e)), Oo(i, n.prototype)
  }
  function r(e, n) {
    var r = t.get(n)
    return Object.keys(r).reduce(function (t, n) {
      var o = r[n]
      if ('number' == typeof o) t[n] = e[o]
      else {
        for (var i = 0; void 0 === e[o[i]] && i + 1 < o.length; ) i++
        t[n] = e[o[i]]
      }
      return t
    }, Object.create(null))
  }
  return (
    Co(n, RegExp),
    (n.prototype.exec = function (t) {
      var n = e.exec.call(this, t)
      if (n) {
        n.groups = r(n, this)
        var o = n.indices
        o && (o.groups = r(o, this))
      }
      return n
    }),
    (n.prototype[Symbol.replace] = function (n, o) {
      if ('string' == typeof o) {
        var i = t.get(this)
        return e[Symbol.replace].call(
          this,
          n,
          o.replace(/\$<([^>]+)>/g, function (e, t) {
            var n = i[t]
            return '$' + (Array.isArray(n) ? n.join('$') : n)
          })
        )
      }
      if ('function' == typeof o) {
        var a = this
        return e[Symbol.replace].call(this, n, function () {
          var e = arguments
          return (
            'object' != typeof e[e.length - 1] &&
              (e = [].slice.call(e)).push(r(e, a)),
            o.apply(this, e)
          )
        })
      }
      return e[Symbol.replace].call(this, n, o)
    }),
    So.apply(this, arguments)
  )
}
function Eo(e, t, n) {
  return (
    (t = (function (e) {
      var t = (function (e, t) {
        if ('object' != typeof e || null === e) return e
        var n = e[Symbol.toPrimitive]
        if (void 0 !== n) {
          var r = n.call(e, t || 'default')
          if ('object' != typeof r) return r
          throw new TypeError('@@toPrimitive must return a primitive value.')
        }
        return ('string' === t ? String : Number)(e)
      })(e, 'string')
      return 'symbol' == typeof t ? t : String(t)
    })(t)) in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  )
}
function Co(e, t) {
  if ('function' != typeof t && null !== t)
    throw new TypeError('Super expression must either be null or a function')
  ;(e.prototype = Object.create(t && t.prototype, {
    constructor: { value: e, writable: !0, configurable: !0 },
  })),
    Object.defineProperty(e, 'prototype', { writable: !1 }),
    t && Oo(e, t)
}
function Oo(e, t) {
  return (
    (Oo = Object.setPrototypeOf
      ? Object.setPrototypeOf.bind()
      : function (e, t) {
          return (e.__proto__ = t), e
        }),
    Oo(e, t)
  )
}
function Ao(e, t) {
  return (
    (function (e) {
      if (Array.isArray(e)) return e
    })(e) ||
    (function (e, t) {
      var n =
        null == e
          ? null
          : ('undefined' != typeof Symbol && e[Symbol.iterator]) ||
            e['@@iterator']
      if (null != n) {
        var r,
          o,
          i,
          a,
          l = [],
          u = !0,
          s = !1
        try {
          if (((i = (n = n.call(e)).next), 0 === t)) {
            if (Object(n) !== n) return
            u = !1
          } else
            for (
              ;
              !(u = (r = i.call(n)).done) && (l.push(r.value), l.length !== t);
              u = !0
            );
        } catch (e) {
          ;(s = !0), (o = e)
        } finally {
          try {
            if (!u && null != n.return && ((a = n.return()), Object(a) !== a))
              return
          } finally {
            if (s) throw o
          }
        }
        return l
      }
    })(e, t) ||
    Po(e, t) ||
    (function () {
      throw new TypeError(
        'Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
      )
    })()
  )
}
function Po(e, t) {
  if (e) {
    if ('string' == typeof e) return To(e, t)
    var n = Object.prototype.toString.call(e).slice(8, -1)
    return (
      'Object' === n && e.constructor && (n = e.constructor.name),
      'Map' === n || 'Set' === n
        ? Array.from(e)
        : 'Arguments' === n ||
            /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)
          ? To(e, t)
          : void 0
    )
  }
}
function To(e, t) {
  ;(null == t || t > e.length) && (t = e.length)
  for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n]
  return r
}
function Lo() {}
var Ro = So(/(\d+)(%)/, { value: 1 })
function Fo(e) {
  var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 7,
    n = t
  if (Ro.test(e)) {
    var r,
      o = null === (r = e.match(Ro)) || void 0 === r ? void 0 : r.groups
    if (o && o.value) {
      var i = parseInt(o.value) / 100
      n = Math.round(t * i)
    }
  }
  return Math.min(30, Math.max(1, n))
}
function jo(e, n) {
  return (
    n('info', 'Throttle request to '.concat(e, '/s')),
    t(ao)({ limit: e, interval: 1e3, strict: !1 })
  )
}
var Do = function (e) {
    return new Promise(function (t) {
      setTimeout(t, e)
    })
  },
  _o = function (e) {
    return Math.pow(Math.SQRT2, e)
  }
var No = /^(?!\w+:\/\/)([^\s:]+\.?[^\s:]+)(?::(\d+))?(?!:)$/
function Io(e, n) {
  var r = xo(
    xo(
      {},
      {
        insecure: !1,
        retryOnError: !0,
        logHandler: function (e, t) {
          if ('error' === e && t) {
            var n = [t.name, t.message]
              .filter(function (e) {
                return e
              })
              .join(' - ')
            return console.error('[error] '.concat(n)), void console.error(t)
          }
          console.log('['.concat(e, '] ').concat(t))
        },
        headers: {},
        httpAgent: !1,
        httpsAgent: !1,
        timeout: 3e4,
        throttle: 0,
        proxy: !1,
        basePath: '',
        adapter: void 0,
        maxContentLength: 1073741824,
        maxBodyLength: 1073741824,
      }
    ),
    n
  )
  if (!r.accessToken) {
    var o = new TypeError('Expected parameter accessToken')
    throw (r.logHandler('error', o), o)
  }
  var i = r.insecure ? 'http' : 'https',
    a = r.space ? ''.concat(r.space, '/') : '',
    l = r.defaultHostname,
    u = r.insecure ? 80 : 443
  if (r.host && No.test(r.host)) {
    var s = r.host.split(':')
    if (2 === s.length) {
      var c = Ao(s, 2)
      ;(l = c[0]), (u = c[1])
    } else l = s[0]
  }
  r.basePath &&
    (r.basePath = '/'.concat(r.basePath.split('/').filter(Boolean).join('/')))
  var f =
    n.baseURL ||
    ''
      .concat(i, '://')
      .concat(l, ':')
      .concat(u)
      .concat(r.basePath, '/spaces/')
      .concat(a)
  r.headers.Authorization ||
    'function' == typeof r.accessToken ||
    (r.headers.Authorization = 'Bearer ' + r.accessToken)
  var p = {
      baseURL: f,
      headers: r.headers,
      httpAgent: r.httpAgent,
      httpsAgent: r.httpsAgent,
      paramsSerializer: t(Lt).stringify,
      proxy: r.proxy,
      timeout: r.timeout,
      adapter: r.adapter,
      maxContentLength: r.maxContentLength,
      maxBodyLength: r.maxBodyLength,
      logHandler: r.logHandler,
      responseLogger: r.responseLogger,
      requestLogger: r.requestLogger,
      retryOnError: r.retryOnError,
    },
    d = e.create(p)
  return (
    (d.httpClientParams = n),
    (d.cloneWithNewParams = function (r) {
      return Io(e, xo(xo({}, t(Tt)(n)), r))
    }),
    r.onBeforeRequest && d.interceptors.request.use(r.onBeforeRequest),
    'function' == typeof r.accessToken &&
      (function (e, t) {
        e.interceptors.request.use(function (e) {
          return t().then(function (t) {
            return (
              (e.headers = xo(
                xo({}, e.headers),
                {},
                { Authorization: 'Bearer '.concat(t) }
              )),
              e
            )
          })
        })
      })(d, r.accessToken),
    r.throttle &&
      (function (e) {
        var n =
            arguments.length > 1 && void 0 !== arguments[1]
              ? arguments[1]
              : 'auto',
          r = e.defaults.logHandler,
          o = void 0 === r ? Lo : r,
          i = t(ro)(n) ? Fo(n) : Fo('auto', n),
          a = jo(i, o),
          l = !1,
          u = e.interceptors.request.use(
            function (e) {
              return a(function () {
                return e
              })()
            },
            function (e) {
              return Promise.reject(e)
            }
          ),
          s = e.interceptors.response.use(
            function (r) {
              if (
                !l &&
                t(ro)(n) &&
                ('auto' === n || Ro.test(n)) &&
                r.headers &&
                r.headers['x-contentful-ratelimit-second-limit']
              ) {
                var s = parseInt(
                    r.headers['x-contentful-ratelimit-second-limit']
                  ),
                  c = Fo(n, s)
                c !== i &&
                  (u && e.interceptors.request.eject(u),
                  (i = c),
                  (a = jo(c, o)),
                  (u = e.interceptors.request.use(
                    function (e) {
                      return a(function () {
                        return e
                      })()
                    },
                    function (e) {
                      return Promise.reject(e)
                    }
                  ))),
                  (l = !0)
              }
              return r
            },
            function (e) {
              return Promise.reject(e)
            }
          )
      })(d, r.throttle),
    (function (e) {
      var t =
          arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 5,
        n = e.defaults,
        r = n.responseLogger,
        o = void 0 === r ? Lo : r,
        i = n.requestLogger,
        a = void 0 === i ? Lo : i
      e.interceptors.request.use(
        function (e) {
          return a(e), e
        },
        function (e) {
          return a(e), Promise.reject(e)
        }
      ),
        e.interceptors.response.use(
          function (e) {
            return o(e), e
          },
          function (n) {
            var r = n.response,
              i = n.config
            if ((o(n), !i || !e.defaults.retryOnError)) return Promise.reject(n)
            var a = i.attempts || 1
            if (a > t) return (n.attempts = i.attempts), Promise.reject(n)
            var l = null,
              u = _o(a)
            return (
              r
                ? r.status >= 500 && r.status < 600
                  ? (l = 'Server '.concat(r.status))
                  : 429 === r.status &&
                    ((l = 'Rate limit'),
                    r.headers &&
                      n.response.headers['x-contentful-ratelimit-reset'] &&
                      (u = r.headers['x-contentful-ratelimit-reset']))
                : (l = 'Connection'),
              l
                ? ((u = Math.floor(1e3 * u + 200 * Math.random() + 500)),
                  e.defaults.logHandler(
                    'warning',
                    ''
                      .concat(l, ' error occurred. Waiting for ')
                      .concat(u, ' ms before retrying...')
                  ),
                  (i.attempts = a + 1),
                  delete i.httpAgent,
                  delete i.httpsAgent,
                  Do(u).then(function () {
                    return e(i)
                  }))
                : Promise.reject(n)
            )
          }
        )
    })(d, r.retryLimit),
    r.onError &&
      d.interceptors.response.use(function (e) {
        return e
      }, r.onError),
    d
  )
}
function Bo(e) {
  var n = e.query,
    r = {}
  return delete n.resolveLinks, (r.params = t(Tt)(n)), r
}
function zo(e) {
  var t,
    n = (function (e, t) {
      var n =
        ('undefined' != typeof Symbol && e[Symbol.iterator]) || e['@@iterator']
      if (!n) {
        if (
          Array.isArray(e) ||
          (n = Po(e)) ||
          (t && e && 'number' == typeof e.length)
        ) {
          n && (e = n)
          var r = 0,
            o = function () {}
          return {
            s: o,
            n: function () {
              return r >= e.length ? { done: !0 } : { done: !1, value: e[r++] }
            },
            e: function (e) {
              throw e
            },
            f: o,
          }
        }
        throw new TypeError(
          'Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.'
        )
      }
      var i,
        a = !0,
        l = !1
      return {
        s: function () {
          n = n.call(e)
        },
        n: function () {
          var e = n.next()
          return (a = e.done), e
        },
        e: function (e) {
          ;(l = !0), (i = e)
        },
        f: function () {
          try {
            a || null == n.return || n.return()
          } finally {
            if (l) throw i
          }
        },
      }
    })(Object.getOwnPropertyNames(e))
  try {
    for (n.s(); !(t = n.n()).done; ) {
      var r = e[t.value]
      r && 'object' === ko(r) && zo(r)
    }
  } catch (e) {
    n.e(e)
  } finally {
    n.f()
  }
  return Object.freeze(e)
}
function Mo(e) {
  return zo(e.sys || {}), e
}
function Uo() {
  var e = window
  if (!e) return null
  var t = e.navigator.userAgent,
    n = e.navigator.platform
  return -1 !== ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'].indexOf(n)
    ? 'macOS'
    : -1 !== ['iPhone', 'iPad', 'iPod'].indexOf(n)
      ? 'iOS'
      : -1 !== ['Win32', 'Win64', 'Windows', 'WinCE'].indexOf(n)
        ? 'Windows'
        : /Android/.test(t)
          ? 'Android'
          : /Linux/.test(n)
            ? 'Linux'
            : null
}
function qo(e, t, n, r) {
  var o = []
  t && o.push('app '.concat(t)),
    n && o.push('integration '.concat(n)),
    r && o.push('feature ' + r),
    o.push('sdk '.concat(e))
  var i = null
  try {
    'undefined' != typeof window &&
    'navigator' in window &&
    'product' in window.navigator &&
    'ReactNative' === window.navigator.product
      ? ((i = Uo()), o.push('platform ReactNative'))
      : new Function('try {return this===global;}catch(e){return false;}')()
        ? ((i = (function () {
            var e = bo.platform || 'linux',
              t = bo.version || '0.0.0',
              n = {
                android: 'Android',
                aix: 'Linux',
                darwin: 'macOS',
                freebsd: 'Linux',
                linux: 'Linux',
                openbsd: 'Linux',
                sunos: 'Linux',
                win32: 'Windows',
              }
            return e in n ? ''.concat(n[e] || 'Linux', '/').concat(t) : null
          })()),
          o.push(
            'platform node.js/'.concat(
              bo.versions && bo.versions.node
                ? 'v'.concat(bo.versions.node)
                : bo.version
            )
          ))
        : ((i = Uo()), o.push('platform browser'))
  } catch (e) {
    i = null
  }
  return (
    i && o.push('os '.concat(i)),
    ''.concat(
      o
        .filter(function (e) {
          return '' !== e
        })
        .join('; '),
      ';'
    )
  )
}
function Vo(e) {
  return Object.defineProperty(e, 'toPlainObject', {
    enumerable: !1,
    configurable: !1,
    writable: !1,
    value: function () {
      return t(Tt)(this)
    },
  })
}
function Ho(e) {
  var n,
    r = e.config,
    o = e.response
  if (r && r.headers && r.headers.Authorization) {
    var i = '...'.concat(r.headers.Authorization.toString().substr(-5))
    r.headers.Authorization = 'Bearer '.concat(i)
  }
  if (!t(uo)(o) || !t(uo)(r)) throw e
  var a = null == o ? void 0 : o.data,
    l = {
      status: null == o ? void 0 : o.status,
      statusText: null == o ? void 0 : o.statusText,
      message: '',
      details: {},
    }
  t(uo)(r) &&
    (l.request = {
      url: r.url,
      headers: r.headers,
      method: r.method,
      payloadData: r.data,
    }),
    a &&
      t(uo)(a) &&
      ('requestId' in a && (l.requestId = a.requestId || 'UNKNOWN'),
      'message' in a && (l.message = a.message || ''),
      'details' in a && (l.details = a.details || {}),
      'sys' in a && 'id' in a.sys && (n = a.sys.id))
  var u = new Error()
  u.name =
    n && 'Unknown' !== n
      ? n
      : ''
          .concat(null == o ? void 0 : o.status, ' ')
          .concat(null == o ? void 0 : o.statusText)
  try {
    u.message = JSON.stringify(l, null, '  ')
  } catch (e) {
    var s
    u.message =
      null !== (s = null == l ? void 0 : l.message) && void 0 !== s ? s : ''
  }
  throw u
}
var Wo = {}
function $o(e) {
  return Mo(Vo(e))
}
e(Wo, 'wrapSpace', () => $o)
var Qo = {}
e(Qo, 'wrapEntry', () => ri), e(Qo, 'wrapEntryCollection', () => oi)
var Go = i('kR54n')
function Jo(e) {
  return Object.defineProperty(e, 'stringifySafe', {
    enumerable: !1,
    configurable: !1,
    writable: !1,
    value: function () {
      let e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
        n = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : ''
      return t(Go)(this, e, n, (e, t) => ({
        sys: { type: 'Link', linkType: 'Entry', id: t.sys.id, circular: !0 },
      }))
    },
  })
}
var Xo =
  'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
    ? function (e) {
        return typeof e
      }
    : function (e) {
        return e &&
          'function' == typeof Symbol &&
          e.constructor === Symbol &&
          e !== Symbol.prototype
          ? 'symbol'
          : typeof e
      }
function Yo(e) {
  if (Array.isArray(e)) {
    for (var t = 0, n = Array(e.length); t < e.length; t++) n[t] = e[t]
    return n
  }
  return Array.from(e)
}
var Ko = {},
  Zo = function (e, t) {
    var n = t.entryId,
      r = t.linkType,
      o = t.spaceId
    return o ? e.get(o + '!' + r + '!' + n) : e.get(r + '!' + n)
  },
  ei = function e(t, n, r, o) {
    if (n(t)) return r(t)
    if (t && 'object' === (void 0 === t ? 'undefined' : Xo(t))) {
      for (var i in t) t.hasOwnProperty(i) && (t[i] = e(t[i], n, r, o))
      o &&
        (t = (function (e) {
          if (Array.isArray(e))
            return e.filter(function (e) {
              return e !== Ko
            })
          for (var t in e) e[t] === Ko && delete e[t]
          return e
        })(t))
    }
    return t
  },
  ti = function (e, t, n) {
    var r = (function (e, t) {
      var n = t.sys,
        r = n.type,
        o = n.linkType
      if ('ResourceLink' === r) {
        var i = t.sys.urn,
          a =
            /.*:spaces\/(?<spaceId>[A-Za-z0-9]*)\/entries\/(?<entryId>[A-Za-z0-9]*)/
        if (!a.test(i)) return Ko
        var l = i.match(a).groups,
          u = l.spaceId,
          s = l.entryId,
          c = o.split(':')[1]
        return Zo(e, { linkType: c, entryId: s, spaceId: u }) || Ko
      }
      var f = t.sys.id
      return Zo(e, { linkType: o, entryId: f }) || Ko
    })(e, t)
    return r === Ko ? (n ? r : t) : r
  },
  ni = function (e, n) {
    if (((n = n || {}), !e.items)) return []
    var r = t(Tt)(e),
      o = Object.keys(r.includes || {}).reduce(function (t, n) {
        return [].concat(Yo(t), Yo(e.includes[n]))
      }, []),
      i = [].concat(Yo(r.items), Yo(o)),
      a = new Map(
        i.reduce(function (e, t) {
          var n,
            r = ((n = t.sys),
            n.space
              ? [
                  n.type + '!' + n.id,
                  n.space.sys.id + '!' + n.type + '!' + n.id,
                ]
              : [n.type + '!' + n.id]).map(function (e) {
              return [e, t]
            })
          return e.push.apply(e, Yo(r)), e
        }, [])
      )
    return (
      i.forEach(function (e) {
        var t = (function (e, t) {
          return Array.isArray(t)
            ? Object.keys(e)
                .filter(function (e) {
                  return -1 !== t.indexOf(e)
                })
                .reduce(function (t, n) {
                  return (t[n] = e[n]), t
                }, {})
            : e
        })(e, n.itemEntryPoints)
        Object.assign(
          e,
          ei(
            t,
            function (e) {
              return (
                ((t = e) && t.sys && 'Link' === t.sys.type) ||
                (function (e) {
                  return e && e.sys && 'ResourceLink' === e.sys.type
                })(e)
              )
              var t
            },
            function (e) {
              return ti(a, e, n.removeUnresolved)
            },
            n.removeUnresolved
          )
        )
      }),
      r.items
    )
  }
function ri(e) {
  return Mo(Vo(t(Tt)(e)))
}
function oi(e, n) {
  let { resolveLinks: r, removeUnresolved: o } = n
  const i = Jo(Vo(t(Tt)(e)))
  return (
    r &&
      (i.items = ni(i, { removeUnresolved: o, itemEntryPoints: ['fields'] })),
    Mo(i)
  )
}
var ii = {}
function ai(e) {
  return Mo(Vo(t(Tt)(e)))
}
function li(e) {
  return Mo(Vo(t(Tt)(e)))
}
e(ii, 'wrapAsset', () => ai), e(ii, 'wrapAssetCollection', () => li)
var ui = {}
function si(e) {
  return Mo(Vo(t(Tt)(e)))
}
e(ui, 'wrapAssetKey', () => si)
var ci = {}
function fi(e) {
  return Mo(Vo(t(Tt)(e)))
}
function pi(e) {
  return Mo(Vo(t(Tt)(e)))
}
e(ci, 'wrapContentType', () => fi), e(ci, 'wrapContentTypeCollection', () => pi)
var di = {}
function hi(e) {
  return Mo(Vo(t(Tt)(e)))
}
function gi(e) {
  return Mo(Vo(t(Tt)(e)))
}
e(di, 'wrapLocale', () => hi), e(di, 'wrapLocaleCollection', () => gi)
var mi = {}
function yi(e) {
  return Mo(Vo(t(Tt)(e)))
}
function vi(e) {
  return Mo(Vo(t(Tt)(e)))
}
e(mi, 'wrapTag', () => yi), e(mi, 'wrapTagCollection', () => vi)
var bi = {
  space: Wo,
  entry: Qo,
  asset: ii,
  assetKey: ui,
  contentType: ci,
  locale: di,
  tag: mi,
}
function wi(e, t) {
  var n = Object.keys(e)
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e)
    t &&
      (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable
      })),
      n.push.apply(n, r)
  }
  return n
}
function xi(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {}
    t % 2
      ? wi(Object(n), !0).forEach(function (t) {
          ki(e, t, n[t])
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : wi(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          })
  }
  return e
}
function ki(e, t, n) {
  return (
    (t = (function (e) {
      var t = (function (e, t) {
        if ('object' != typeof e || null === e) return e
        var n = e[Symbol.toPrimitive]
        if (void 0 !== n) {
          var r = n.call(e, t || 'default')
          if ('object' != typeof r) return r
          throw new TypeError('@@toPrimitive must return a primitive value.')
        }
        return ('string' === t ? String : Number)(e)
      })(e, 'string')
      return 'symbol' == typeof t ? t : String(t)
    })(t)) in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  )
}
async function Si(e, t) {
  let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {}
  if (!t || (!t.initial && !t.nextSyncToken && !t.nextPageToken))
    throw new Error(
      'Please provide one of `initial`, `nextSyncToken` or `nextPageToken` parameters for syncing'
    )
  if (t && t.content_type && !t.type) t.type = 'Entry'
  else if (t && t.content_type && t.type && 'Entry' !== t.type)
    throw new Error(
      'When using the `content_type` filter your `type` parameter cannot be different from `Entry`.'
    )
  const r = { resolveLinks: !0, removeUnresolved: !1, paginate: !0 },
    { resolveLinks: o, removeUnresolved: i, paginate: a } = xi(xi({}, r), n),
    l = { paginate: a },
    u = await Ci(e, [], t, l)
  o && (u.items = ni(u, { removeUnresolved: i, itemEntryPoints: ['fields'] }))
  const s = Ei(u.items)
  return (
    u.nextSyncToken && (s.nextSyncToken = u.nextSyncToken),
    u.nextPageToken && (s.nextPageToken = u.nextPageToken),
    Mo(Jo(Vo(s)))
  )
}
function Ei(e) {
  const t = (e) => (t, n) => (n.sys.type === e && t.push(Vo(n)), t)
  return {
    entries: e.reduce(t('Entry'), []),
    assets: e.reduce(t('Asset'), []),
    deletedEntries: e.reduce(t('DeletedEntry'), []),
    deletedAssets: e.reduce(t('DeletedAsset'), []),
  }
}
async function Ci(e, t, n, r) {
  let { paginate: o } = r
  n.nextSyncToken && ((n.sync_token = n.nextSyncToken), delete n.nextSyncToken),
    n.nextPageToken &&
      ((n.sync_token = n.nextPageToken), delete n.nextPageToken),
    n.sync_token &&
      (delete n.initial, delete n.type, delete n.content_type, delete n.limit)
  const i = (await e.get('sync', Bo({ query: n }))).data || {}
  return (
    (t = t.concat(i.items || [])),
    i.nextPageUrl
      ? o
        ? (delete n.initial,
          (n.sync_token = Oi(i.nextPageUrl)),
          Ci(e, t, n, { paginate: o }))
        : { items: t, nextPageToken: Oi(i.nextPageUrl) }
      : i.nextSyncUrl
        ? { items: t, nextSyncToken: Oi(i.nextSyncUrl) }
        : { items: [] }
  )
}
function Oi(e) {
  const t = e.split('?')
  return t.length > 0 ? t[1].replace('sync_token=', '') : ''
}
function Ai(e, t) {
  var n = Object.keys(e)
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e)
    t &&
      (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable
      })),
      n.push.apply(n, r)
  }
  return n
}
function Pi(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {}
    t % 2
      ? Ai(Object(n), !0).forEach(function (t) {
          Ti(e, t, n[t])
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Ai(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          })
  }
  return e
}
function Ti(e, t, n) {
  return (
    (t = (function (e) {
      var t = (function (e, t) {
        if ('object' != typeof e || null === e) return e
        var n = e[Symbol.toPrimitive]
        if (void 0 !== n) {
          var r = n.call(e, t || 'default')
          if ('object' != typeof r) return r
          throw new TypeError('@@toPrimitive must return a primitive value.')
        }
        return ('string' === t ? String : Number)(e)
      })(e, 'string')
      return 'symbol' == typeof t ? t : String(t)
    })(t)) in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  )
}
function Li(e) {
  if (!e.select) return e
  const t = Array.isArray(e.select)
      ? e.select
      : e.select.split(',').map((e) => e.trim()),
    n = new Set(t)
  return n.has('sys')
    ? e
    : (n.add('sys.id'),
      n.add('sys.type'),
      Pi(Pi({}, e), {}, { select: [...n].join(',') }))
}
class Ri extends Error {
  constructor(e, t) {
    super(`Invalid "${e}" provided, ` + t), (this.name = 'ValidationError')
  }
}
function Fi(e, t, n) {
  if (((n = n || {}), 'number' != typeof t))
    throw new Ri(
      e,
      `only numeric values are allowed for timestamps, provided type was "${typeof t}"`
    )
  if (n.maximum && t > n.maximum)
    throw new Ri(
      e,
      `value (${t}) cannot be further in the future than expected maximum (${n.maximum})`
    )
  if (n.now && t < n.now)
    throw new Ri(
      e,
      `value (${t}) cannot be in the past, current time was ${n.now}`
    )
}
function ji(e, t) {
  var n = Object.keys(e)
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e)
    t &&
      (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable
      })),
      n.push.apply(n, r)
  }
  return n
}
function Di(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {}
    t % 2
      ? ji(Object(n), !0).forEach(function (t) {
          _i(e, t, n[t])
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : ji(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          })
  }
  return e
}
function _i(e, t, n) {
  return (
    (t = (function (e) {
      var t = (function (e, t) {
        if ('object' != typeof e || null === e) return e
        var n = e[Symbol.toPrimitive]
        if (void 0 !== n) {
          var r = n.call(e, t || 'default')
          if ('object' != typeof r) return r
          throw new TypeError('@@toPrimitive must return a primitive value.')
        }
        return ('string' === t ? String : Number)(e)
      })(e, 'string')
      return 'symbol' == typeof t ? t : String(t)
    })(t)) in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  )
}
function Ni(e) {
  let { http: t, getGlobalOptions: n } = e
  const { wrapSpace: r } = bi.space,
    { wrapContentType: o, wrapContentTypeCollection: i } = bi.contentType,
    { wrapEntry: a, wrapEntryCollection: l } = bi.entry,
    { wrapAsset: u, wrapAssetCollection: s } = bi.asset,
    { wrapTag: c, wrapTagCollection: f } = bi.tag,
    { wrapAssetKey: p } = bi.assetKey,
    { wrapLocaleCollection: d } = bi.locale,
    h = (e) => {
      const t = new Error('The resource could not be found.')
      return (
        (t.sys = { type: 'Error', id: 'NotFound' }),
        (t.details = {
          type: 'Entry',
          id: e,
          environment: n().environment,
          space: n().space,
        }),
        t
      )
    }
  function g(e) {
    e.defaults.baseURL = n().environmentBaseUrl
  }
  return {
    getSpace: async function () {
      !(function (e) {
        e.defaults.baseURL = n().spaceBaseUrl
      })(t)
      try {
        const e = await t.get('/')
        return r(e.data)
      } catch (e) {
        Ho(e)
      }
    },
    getContentType: async function (e) {
      g(t)
      try {
        const n = await t.get(`content_types/${e}`)
        return o(n.data)
      } catch (e) {
        Ho(e)
      }
    },
    getContentTypes: async function () {
      let e =
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
      g(t)
      try {
        const n = await t.get('content_types', Bo({ query: e }))
        return i(n.data)
      } catch (e) {
        Ho(e)
      }
    },
    getEntry: async function (e) {
      let t =
        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
      if (!e) throw h(e)
      try {
        const n = await this.getEntries(Di({ 'sys.id': e }, t))
        if (n.items.length > 0) return a(n.items[0])
        throw h(e)
      } catch (e) {
        Ho(e)
      }
    },
    getEntries: async function () {
      let e =
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
      g(t)
      const { resolveLinks: r, removeUnresolved: o } = n(e)
      e = Li(e)
      try {
        const n = await t.get('entries', Bo({ query: e }))
        return l(n.data, { resolveLinks: r, removeUnresolved: o })
      } catch (e) {
        Ho(e)
      }
    },
    getAsset: async function (e) {
      let n =
        arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}
      g(t), (n = Li(n))
      try {
        const r = await t.get(`assets/${e}`, Bo({ query: n }))
        return u(r.data)
      } catch (e) {
        Ho(e)
      }
    },
    getAssets: async function () {
      let e =
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
      g(t), (e = Li(e))
      try {
        const n = await t.get('assets', Bo({ query: e }))
        return s(n.data)
      } catch (e) {
        Ho(e)
      }
    },
    getTag: async function (e) {
      g(t)
      try {
        const n = await t.get(`tags/${e}`)
        return c(n.data)
      } catch (e) {
        Ho(e)
      }
    },
    getTags: async function () {
      let e =
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
      g(t), (e = Li(e))
      try {
        const n = await t.get('tags', Bo({ query: e }))
        return f(n.data)
      } catch (e) {
        Ho(e)
      }
    },
    createAssetKey: async function (e) {
      g(t)
      try {
        const n = Math.floor(Date.now() / 1e3)
        Fi('expiresAt', e, { maximum: n + 172800, now: n })
        const r = { expiresAt: e },
          o = await t.post('asset_keys', r)
        return p(o.data)
      } catch (e) {
        Ho(e)
      }
    },
    getLocales: async function () {
      let e =
        arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}
      g(t)
      try {
        const n = await t.get('locales', Bo({ query: e }))
        return d(n.data)
      } catch (e) {
        Ho(e)
      }
    },
    parseEntries: function (e) {
      const { resolveLinks: t, removeUnresolved: r } = n({})
      return l(e, { resolveLinks: t, removeUnresolved: r })
    },
    sync: async function () {
      let e =
          arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
        r =
          arguments.length > 1 && void 0 !== arguments[1]
            ? arguments[1]
            : { paginate: !0 }
      const { resolveLinks: o, removeUnresolved: i } = n(e)
      return g(t), Si(t, e, Di({ resolveLinks: o, removeUnresolved: i }, r))
    },
  }
}
function Ii(e, t) {
  var n = Object.keys(e)
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e)
    t &&
      (r = r.filter(function (t) {
        return Object.getOwnPropertyDescriptor(e, t).enumerable
      })),
      n.push.apply(n, r)
  }
  return n
}
function Bi(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = null != arguments[t] ? arguments[t] : {}
    t % 2
      ? Ii(Object(n), !0).forEach(function (t) {
          zi(e, t, n[t])
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : Ii(Object(n)).forEach(function (t) {
            Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
          })
  }
  return e
}
function zi(e, t, n) {
  return (
    (t = (function (e) {
      var t = (function (e, t) {
        if ('object' != typeof e || null === e) return e
        var n = e[Symbol.toPrimitive]
        if (void 0 !== n) {
          var r = n.call(e, t || 'default')
          if ('object' != typeof r) return r
          throw new TypeError('@@toPrimitive must return a primitive value.')
        }
        return ('string' === t ? String : Number)(e)
      })(e, 'string')
      return 'symbol' == typeof t ? t : String(t)
    })(t)) in e
      ? Object.defineProperty(e, t, {
          value: n,
          enumerable: !0,
          configurable: !0,
          writable: !0,
        })
      : (e[t] = n),
    e
  )
}
var Mi
;(s = i('8tsvq')), (s = i('8tsvq'))
function Ui(e) {
  return e && 'object' == typeof e
    ? 'position' in e || 'type' in e
      ? Vi(e.position)
      : 'start' in e || 'end' in e
        ? Vi(e)
        : 'line' in e || 'column' in e
          ? qi(e)
          : ''
    : ''
}
function qi(e) {
  return Hi(e && e.line) + ':' + Hi(e && e.column)
}
function Vi(e) {
  return qi(e && e.start) + '-' + qi(e && e.end)
}
function Hi(e) {
  return e && 'number' == typeof e ? e : 1
}
/*!
 * Determine if an object is a Buffer
 *
 * @author   Feross Aboukhadijeh <https://feross.org>
 * @license  MIT
 */
Mi = function (e) {
  return (
    null != e &&
    null != e.constructor &&
    'function' == typeof e.constructor.isBuffer &&
    e.constructor.isBuffer(e)
  )
}
class Wi extends Error {
  constructor(e, t, n) {
    const r = [null, null]
    let o = {
      start: { line: null, column: null },
      end: { line: null, column: null },
    }
    if (
      (super(),
      'string' == typeof t && ((n = t), (t = void 0)),
      'string' == typeof n)
    ) {
      const e = n.indexOf(':')
      ;-1 === e ? (r[1] = n) : ((r[0] = n.slice(0, e)), (r[1] = n.slice(e + 1)))
    }
    t &&
      ('type' in t || 'position' in t
        ? t.position && (o = t.position)
        : 'start' in t || 'end' in t
          ? (o = t)
          : ('line' in t || 'column' in t) && (o.start = t)),
      (this.name = Ui(t) || '1:1'),
      (this.message = 'object' == typeof e ? e.message : e),
      (this.stack = ''),
      'object' == typeof e && e.stack && (this.stack = e.stack),
      (this.reason = this.message),
      this.fatal,
      (this.line = o.start.line),
      (this.column = o.start.column),
      (this.position = o),
      (this.source = r[0]),
      (this.ruleId = r[1]),
      this.file,
      this.actual,
      this.expected,
      this.url,
      this.note
  }
}
;(Wi.prototype.file = ''),
  (Wi.prototype.name = ''),
  (Wi.prototype.reason = ''),
  (Wi.prototype.message = ''),
  (Wi.prototype.stack = ''),
  (Wi.prototype.fatal = null),
  (Wi.prototype.column = null),
  (Wi.prototype.line = null),
  (Wi.prototype.source = null),
  (Wi.prototype.ruleId = null),
  (Wi.prototype.position = null)
const $i = {
  basename: function (e, t) {
    if (void 0 !== t && 'string' != typeof t)
      throw new TypeError('"ext" argument must be a string')
    Qi(e)
    let n,
      r = 0,
      o = -1,
      i = e.length
    if (void 0 === t || 0 === t.length || t.length > e.length) {
      for (; i--; )
        if (47 === e.charCodeAt(i)) {
          if (n) {
            r = i + 1
            break
          }
        } else o < 0 && ((n = !0), (o = i + 1))
      return o < 0 ? '' : e.slice(r, o)
    }
    if (t === e) return ''
    let a = -1,
      l = t.length - 1
    for (; i--; )
      if (47 === e.charCodeAt(i)) {
        if (n) {
          r = i + 1
          break
        }
      } else
        a < 0 && ((n = !0), (a = i + 1)),
          l > -1 &&
            (e.charCodeAt(i) === t.charCodeAt(l--)
              ? l < 0 && (o = i)
              : ((l = -1), (o = a)))
    r === o ? (o = a) : o < 0 && (o = e.length)
    return e.slice(r, o)
  },
  dirname: function (e) {
    if ((Qi(e), 0 === e.length)) return '.'
    let t,
      n = -1,
      r = e.length
    for (; --r; )
      if (47 === e.charCodeAt(r)) {
        if (t) {
          n = r
          break
        }
      } else t || (t = !0)
    return n < 0
      ? 47 === e.charCodeAt(0)
        ? '/'
        : '.'
      : 1 === n && 47 === e.charCodeAt(0)
        ? '//'
        : e.slice(0, n)
  },
  extname: function (e) {
    Qi(e)
    let t,
      n = e.length,
      r = -1,
      o = 0,
      i = -1,
      a = 0
    for (; n--; ) {
      const l = e.charCodeAt(n)
      if (47 !== l)
        r < 0 && ((t = !0), (r = n + 1)),
          46 === l ? (i < 0 ? (i = n) : 1 !== a && (a = 1)) : i > -1 && (a = -1)
      else if (t) {
        o = n + 1
        break
      }
    }
    return i < 0 || r < 0 || 0 === a || (1 === a && i === r - 1 && i === o + 1)
      ? ''
      : e.slice(i, r)
  },
  join: function (...e) {
    let t,
      n = -1
    for (; ++n < e.length; )
      Qi(e[n]), e[n] && (t = void 0 === t ? e[n] : t + '/' + e[n])
    return void 0 === t
      ? '.'
      : (function (e) {
          Qi(e)
          const t = 47 === e.charCodeAt(0)
          let n = (function (e, t) {
            let n,
              r,
              o = '',
              i = 0,
              a = -1,
              l = 0,
              u = -1
            for (; ++u <= e.length; ) {
              if (u < e.length) n = e.charCodeAt(u)
              else {
                if (47 === n) break
                n = 47
              }
              if (47 === n) {
                if (a === u - 1 || 1 === l);
                else if (a !== u - 1 && 2 === l) {
                  if (
                    o.length < 2 ||
                    2 !== i ||
                    46 !== o.charCodeAt(o.length - 1) ||
                    46 !== o.charCodeAt(o.length - 2)
                  )
                    if (o.length > 2) {
                      if (((r = o.lastIndexOf('/')), r !== o.length - 1)) {
                        r < 0
                          ? ((o = ''), (i = 0))
                          : ((o = o.slice(0, r)),
                            (i = o.length - 1 - o.lastIndexOf('/'))),
                          (a = u),
                          (l = 0)
                        continue
                      }
                    } else if (o.length > 0) {
                      ;(o = ''), (i = 0), (a = u), (l = 0)
                      continue
                    }
                  t && ((o = o.length > 0 ? o + '/..' : '..'), (i = 2))
                } else
                  o.length > 0
                    ? (o += '/' + e.slice(a + 1, u))
                    : (o = e.slice(a + 1, u)),
                    (i = u - a - 1)
                ;(a = u), (l = 0)
              } else 46 === n && l > -1 ? l++ : (l = -1)
            }
            return o
          })(e, !t)
          0 !== n.length || t || (n = '.')
          n.length > 0 && 47 === e.charCodeAt(e.length - 1) && (n += '/')
          return t ? '/' + n : n
        })(t)
  },
  sep: '/',
}
function Qi(e) {
  if ('string' != typeof e)
    throw new TypeError('Path must be a string. Received ' + JSON.stringify(e))
}
const Gi = {
  cwd: function () {
    return '/'
  },
}
function Ji(e) {
  return null !== e && 'object' == typeof e && e.href && e.origin
}
function Xi(e) {
  if ('string' == typeof e) e = new URL(e)
  else if (!Ji(e)) {
    const t = new TypeError(
      'The "path" argument must be of type string or an instance of URL. Received `' +
        e +
        '`'
    )
    throw ((t.code = 'ERR_INVALID_ARG_TYPE'), t)
  }
  if ('file:' !== e.protocol) {
    const e = new TypeError('The URL must be of scheme file')
    throw ((e.code = 'ERR_INVALID_URL_SCHEME'), e)
  }
  return (function (e) {
    if ('' !== e.hostname) {
      const e = new TypeError(
        'File URL host must be "localhost" or empty on darwin'
      )
      throw ((e.code = 'ERR_INVALID_FILE_URL_HOST'), e)
    }
    const t = e.pathname
    let n = -1
    for (; ++n < t.length; )
      if (37 === t.charCodeAt(n) && 50 === t.charCodeAt(n + 1)) {
        const e = t.charCodeAt(n + 2)
        if (70 === e || 102 === e) {
          const e = new TypeError(
            'File URL path must not include encoded / characters'
          )
          throw ((e.code = 'ERR_INVALID_FILE_URL_PATH'), e)
        }
      }
    return decodeURIComponent(t)
  })(e)
}
const Yi = ['history', 'path', 'basename', 'stem', 'extname', 'dirname']
class Ki {
  constructor(e) {
    let n
    ;(n = e
      ? 'string' == typeof e || t(Mi)(e)
        ? { value: e }
        : Ji(e)
          ? { path: e }
          : e
      : {}),
      (this.data = {}),
      (this.messages = []),
      (this.history = []),
      (this.cwd = Gi.cwd()),
      this.value,
      this.stored,
      this.result,
      this.map
    let r,
      o = -1
    for (; ++o < Yi.length; ) {
      const e = Yi[o]
      e in n &&
        void 0 !== n[e] &&
        (this[e] = 'history' === e ? [...n[e]] : n[e])
    }
    for (r in n) Yi.includes(r) || (this[r] = n[r])
  }
  get path() {
    return this.history[this.history.length - 1]
  }
  set path(e) {
    Ji(e) && (e = Xi(e)), ea(e, 'path'), this.path !== e && this.history.push(e)
  }
  get dirname() {
    return 'string' == typeof this.path ? $i.dirname(this.path) : void 0
  }
  set dirname(e) {
    ta(this.basename, 'dirname'), (this.path = $i.join(e || '', this.basename))
  }
  get basename() {
    return 'string' == typeof this.path ? $i.basename(this.path) : void 0
  }
  set basename(e) {
    ea(e, 'basename'),
      Zi(e, 'basename'),
      (this.path = $i.join(this.dirname || '', e))
  }
  get extname() {
    return 'string' == typeof this.path ? $i.extname(this.path) : void 0
  }
  set extname(e) {
    if ((Zi(e, 'extname'), ta(this.dirname, 'extname'), e)) {
      if (46 !== e.charCodeAt(0))
        throw new Error('`extname` must start with `.`')
      if (e.includes('.', 1))
        throw new Error('`extname` cannot contain multiple dots')
    }
    this.path = $i.join(this.dirname, this.stem + (e || ''))
  }
  get stem() {
    return 'string' == typeof this.path
      ? $i.basename(this.path, this.extname)
      : void 0
  }
  set stem(e) {
    ea(e, 'stem'),
      Zi(e, 'stem'),
      (this.path = $i.join(this.dirname || '', e + (this.extname || '')))
  }
  toString(e) {
    return (this.value || '').toString(e)
  }
  message(e, t, n) {
    const r = new Wi(e, t, n)
    return (
      this.path && ((r.name = this.path + ':' + r.name), (r.file = this.path)),
      (r.fatal = !1),
      this.messages.push(r),
      r
    )
  }
  info(e, t, n) {
    const r = this.message(e, t, n)
    return (r.fatal = null), r
  }
  fail(e, t, n) {
    const r = this.message(e, t, n)
    throw ((r.fatal = !0), r)
  }
}
function Zi(e, t) {
  if (e && e.includes($i.sep))
    throw new Error(
      '`' + t + '` cannot be a path: did not expect `' + $i.sep + '`'
    )
}
function ea(e, t) {
  if (!e) throw new Error('`' + t + '` cannot be empty')
}
function ta(e, t) {
  if (!e) throw new Error('Setting `' + t + '` requires `path` to be set too')
}
function na(e) {
  if (e) throw e
}
var ra,
  oa = Object.prototype.hasOwnProperty,
  ia = Object.prototype.toString,
  aa = Object.defineProperty,
  la = Object.getOwnPropertyDescriptor,
  ua = function (e) {
    return 'function' == typeof Array.isArray
      ? Array.isArray(e)
      : '[object Array]' === ia.call(e)
  },
  sa = function (e) {
    if (!e || '[object Object]' !== ia.call(e)) return !1
    var t,
      n = oa.call(e, 'constructor'),
      r =
        e.constructor &&
        e.constructor.prototype &&
        oa.call(e.constructor.prototype, 'isPrototypeOf')
    if (e.constructor && !n && !r) return !1
    for (t in e);
    return void 0 === t || oa.call(e, t)
  },
  ca = function (e, t) {
    aa && '__proto__' === t.name
      ? aa(e, t.name, {
          enumerable: !0,
          configurable: !0,
          value: t.newValue,
          writable: !0,
        })
      : (e[t.name] = t.newValue)
  },
  fa = function (e, t) {
    if ('__proto__' === t) {
      if (!oa.call(e, t)) return
      if (la) return la(e, t).value
    }
    return e[t]
  }
function pa(e) {
  if ('object' != typeof e || null === e) return !1
  const t = Object.getPrototypeOf(e)
  return !(
    (null !== t &&
      t !== Object.prototype &&
      null !== Object.getPrototypeOf(t)) ||
    Symbol.toStringTag in e ||
    Symbol.iterator in e
  )
}
function da() {
  const e = [],
    t = {
      run: function (...t) {
        let n = -1
        const r = t.pop()
        if ('function' != typeof r)
          throw new TypeError('Expected function as last argument, not ' + r)
        !(function o(i, ...a) {
          const l = e[++n]
          let u = -1
          if (i) r(i)
          else {
            for (; ++u < t.length; )
              (null !== a[u] && void 0 !== a[u]) || (a[u] = t[u])
            ;(t = a),
              l
                ? (function (e, t) {
                    let n
                    return r
                    function r(...t) {
                      const r = e.length > t.length
                      let a
                      r && t.push(o)
                      try {
                        a = e.apply(this, t)
                      } catch (e) {
                        if (r && n) throw e
                        return o(e)
                      }
                      r ||
                        (a instanceof Promise
                          ? a.then(i, o)
                          : a instanceof Error
                            ? o(a)
                            : i(a))
                    }
                    function o(e, ...r) {
                      n || ((n = !0), t(e, ...r))
                    }
                    function i(e) {
                      o(null, e)
                    }
                  })(
                    l,
                    o
                  )(...a)
                : r(null, ...a)
          }
        })(null, ...t)
      },
      use: function (n) {
        if ('function' != typeof n)
          throw new TypeError(
            'Expected `middelware` to be a function, not ' + n
          )
        return e.push(n), t
      },
    }
  return t
}
ra = function e() {
  var t,
    n,
    r,
    o,
    i,
    a,
    l = arguments[0],
    u = 1,
    s = arguments.length,
    c = !1
  for (
    'boolean' == typeof l && ((c = l), (l = arguments[1] || {}), (u = 2)),
      (null == l || ('object' != typeof l && 'function' != typeof l)) &&
        (l = {});
    u < s;
    ++u
  )
    if (null != (t = arguments[u]))
      for (n in t)
        (r = fa(l, n)),
          l !== (o = fa(t, n)) &&
            (c && o && (sa(o) || (i = ua(o)))
              ? (i
                  ? ((i = !1), (a = r && ua(r) ? r : []))
                  : (a = r && sa(r) ? r : {}),
                ca(l, { name: n, newValue: e(c, a, o) }))
              : void 0 !== o && ca(l, { name: n, newValue: o }))
  return l
}
const ha = (function e() {
    const n = da(),
      r = []
    let o,
      i = {},
      a = -1
    return (
      (l.data = function (e, t) {
        if ('string' == typeof e)
          return 2 === arguments.length
            ? (ba('data', o), (i[e] = t), l)
            : (ga.call(i, e) && i[e]) || null
        if (e) return ba('data', o), (i = e), l
        return i
      }),
      (l.Parser = void 0),
      (l.Compiler = void 0),
      (l.freeze = function () {
        if (o) return l
        for (; ++a < r.length; ) {
          const [e, ...t] = r[a]
          if (!1 === t[0]) continue
          !0 === t[0] && (t[0] = void 0)
          const o = e.call(l, ...t)
          'function' == typeof o && n.use(o)
        }
        return (o = !0), (a = Number.POSITIVE_INFINITY), l
      }),
      (l.attachers = r),
      (l.use = function (e, ...n) {
        let a
        if ((ba('use', o), null == e));
        else if ('function' == typeof e) f(e, ...n)
        else {
          if ('object' != typeof e)
            throw new TypeError('Expected usable value, not `' + e + '`')
          Array.isArray(e) ? c(e) : s(e)
        }
        a && (i.settings = Object.assign(i.settings || {}, a))
        return l
        function u(e) {
          if ('function' == typeof e) f(e)
          else {
            if ('object' != typeof e)
              throw new TypeError('Expected usable value, not `' + e + '`')
            if (Array.isArray(e)) {
              const [t, ...n] = e
              f(t, ...n)
            } else s(e)
          }
        }
        function s(e) {
          c(e.plugins), e.settings && (a = Object.assign(a || {}, e.settings))
        }
        function c(e) {
          let t = -1
          if (null == e);
          else {
            if (!Array.isArray(e))
              throw new TypeError('Expected a list of plugins, not `' + e + '`')
            for (; ++t < e.length; ) {
              u(e[t])
            }
          }
        }
        function f(e, n) {
          let o,
            i = -1
          for (; ++i < r.length; )
            if (r[i][0] === e) {
              o = r[i]
              break
            }
          o
            ? (pa(o[1]) && pa(n) && (n = t(ra)(!0, o[1], n)), (o[1] = n))
            : r.push([...arguments])
        }
      }),
      (l.parse = function (e) {
        l.freeze()
        const t = ka(e),
          n = l.Parser
        return (
          ya('parse', n),
          ma(n, 'parse') ? new n(String(t), t).parse() : n(String(t), t)
        )
      }),
      (l.stringify = function (e, t) {
        l.freeze()
        const n = ka(t),
          r = l.Compiler
        return (
          va('stringify', r),
          wa(e),
          ma(r, 'compile') ? new r(e, n).compile() : r(e, n)
        )
      }),
      (l.run = function (e, t, r) {
        wa(e),
          l.freeze(),
          r || 'function' != typeof t || ((r = t), (t = void 0))
        if (!r) return new Promise(o)
        function o(o, i) {
          function a(t, n, a) {
            ;(n = n || e), t ? i(t) : o ? o(n) : r(null, n, a)
          }
          n.run(e, ka(t), a)
        }
        o(null, r)
      }),
      (l.runSync = function (e, t) {
        let n, r
        return l.run(e, t, o), xa('runSync', 'run', r), n
        function o(e, t) {
          na(e), (n = t), (r = !0)
        }
      }),
      (l.process = function (e, n) {
        if (
          (l.freeze(), ya('process', l.Parser), va('process', l.Compiler), !n)
        )
          return new Promise(r)
        function r(r, o) {
          const i = ka(e)
          function a(e, t) {
            e || !t ? o(e) : r ? r(t) : n(null, t)
          }
          l.run(l.parse(i), i, (e, n, r) => {
            if (!e && n && r) {
              const i = l.stringify(n, r)
              null == i ||
                ('string' == typeof (o = i) || t(Mi)(o)
                  ? (r.value = i)
                  : (r.result = i)),
                a(e, r)
            } else a(e)
            var o
          })
        }
        r(null, n)
      }),
      (l.processSync = function (e) {
        let t
        l.freeze(), ya('processSync', l.Parser), va('processSync', l.Compiler)
        const n = ka(e)
        return l.process(n, r), xa('processSync', 'process', t), n
        function r(e) {
          ;(t = !0), na(e)
        }
      }),
      l
    )
    function l() {
      const n = e()
      let o = -1
      for (; ++o < r.length; ) n.use(...r[o])
      return n.data(t(ra)(!0, {}, i)), n
    }
  })().freeze(),
  ga = {}.hasOwnProperty
function ma(e, t) {
  return (
    'function' == typeof e &&
    e.prototype &&
    ((function (e) {
      let t
      for (t in e) if (ga.call(e, t)) return !0
      return !1
    })(e.prototype) ||
      t in e.prototype)
  )
}
function ya(e, t) {
  if ('function' != typeof t)
    throw new TypeError('Cannot `' + e + '` without `Parser`')
}
function va(e, t) {
  if ('function' != typeof t)
    throw new TypeError('Cannot `' + e + '` without `Compiler`')
}
function ba(e, t) {
  if (t)
    throw new Error(
      'Cannot call `' +
        e +
        '` on a frozen processor.\nCreate a new processor first, by calling it: use `processor()` instead of `processor`.'
    )
}
function wa(e) {
  if (!pa(e) || 'string' != typeof e.type)
    throw new TypeError('Expected node, got `' + e + '`')
}
function xa(e, t, n) {
  if (!n) throw new Error('`' + e + '` finished async. Use `' + t + '` instead')
}
function ka(e) {
  return (function (e) {
    return Boolean(
      e && 'object' == typeof e && 'message' in e && 'messages' in e
    )
  })(e)
    ? e
    : new Ki(e)
}
function Sa(e, t) {
  const n = (t || {}).includeImageAlt
  return Ea(e, 'boolean' != typeof n || n)
}
function Ea(e, t) {
  return (
    ((function (e) {
      return Boolean(e && 'object' == typeof e)
    })(e) &&
      (('value' in e && e.value) ||
        (t && 'alt' in e && e.alt) ||
        ('children' in e && Ca(e.children, t)))) ||
    (Array.isArray(e) && Ca(e, t)) ||
    ''
  )
}
function Ca(e, t) {
  const n = []
  let r = -1
  for (; ++r < e.length; ) n[r] = Ea(e[r], t)
  return n.join('')
}
function Oa(e, t, n, r) {
  const o = e.length
  let i,
    a = 0
  if (
    ((t = t < 0 ? (-t > o ? 0 : o + t) : t > o ? o : t),
    (n = n > 0 ? n : 0),
    r.length < 1e4)
  )
    (i = Array.from(r)), i.unshift(t, n), [].splice.apply(e, i)
  else
    for (n && [].splice.apply(e, [t, n]); a < r.length; )
      (i = r.slice(a, a + 1e4)),
        i.unshift(t, 0),
        [].splice.apply(e, i),
        (a += 1e4),
        (t += 1e4)
}
function Aa(e, t) {
  return e.length > 0 ? (Oa(e, e.length, 0, t), e) : t
}
const Pa = {}.hasOwnProperty
function Ta(e) {
  const t = {}
  let n = -1
  for (; ++n < e.length; ) La(t, e[n])
  return t
}
function La(e, t) {
  let n
  for (n in t) {
    const r = (Pa.call(e, n) ? e[n] : void 0) || (e[n] = {}),
      o = t[n]
    let i
    for (i in o) {
      Pa.call(r, i) || (r[i] = [])
      const e = o[i]
      Ra(r[i], Array.isArray(e) ? e : e ? [e] : [])
    }
  }
}
function Ra(e, t) {
  let n = -1
  const r = []
  for (; ++n < t.length; ) ('after' === t[n].add ? e : r).push(t[n])
  Oa(e, 0, 0, r)
}
const Fa = Ha(/[A-Za-z]/),
  ja = Ha(/\d/),
  Da = Ha(/[\dA-Fa-f]/),
  _a = Ha(/[\dA-Za-z]/),
  Na = Ha(/[!-/:-@[-`{-~]/),
  Ia = Ha(/[#-'*+\--9=?A-Z^-~]/)
function Ba(e) {
  return null !== e && (e < 32 || 127 === e)
}
function za(e) {
  return null !== e && (e < 0 || 32 === e)
}
function Ma(e) {
  return null !== e && e < -2
}
function Ua(e) {
  return -2 === e || -1 === e || 32 === e
}
const qa = Ha(/\s/),
  Va = Ha(
    /[!-/:-@[-`{-~\u00A1\u00A7\u00AB\u00B6\u00B7\u00BB\u00BF\u037E\u0387\u055A-\u055F\u0589\u058A\u05BE\u05C0\u05C3\u05C6\u05F3\u05F4\u0609\u060A\u060C\u060D\u061B\u061E\u061F\u066A-\u066D\u06D4\u0700-\u070D\u07F7-\u07F9\u0830-\u083E\u085E\u0964\u0965\u0970\u09FD\u0A76\u0AF0\u0C77\u0C84\u0DF4\u0E4F\u0E5A\u0E5B\u0F04-\u0F12\u0F14\u0F3A-\u0F3D\u0F85\u0FD0-\u0FD4\u0FD9\u0FDA\u104A-\u104F\u10FB\u1360-\u1368\u1400\u166E\u169B\u169C\u16EB-\u16ED\u1735\u1736\u17D4-\u17D6\u17D8-\u17DA\u1800-\u180A\u1944\u1945\u1A1E\u1A1F\u1AA0-\u1AA6\u1AA8-\u1AAD\u1B5A-\u1B60\u1BFC-\u1BFF\u1C3B-\u1C3F\u1C7E\u1C7F\u1CC0-\u1CC7\u1CD3\u2010-\u2027\u2030-\u2043\u2045-\u2051\u2053-\u205E\u207D\u207E\u208D\u208E\u2308-\u230B\u2329\u232A\u2768-\u2775\u27C5\u27C6\u27E6-\u27EF\u2983-\u2998\u29D8-\u29DB\u29FC\u29FD\u2CF9-\u2CFC\u2CFE\u2CFF\u2D70\u2E00-\u2E2E\u2E30-\u2E4F\u2E52\u3001-\u3003\u3008-\u3011\u3014-\u301F\u3030\u303D\u30A0\u30FB\uA4FE\uA4FF\uA60D-\uA60F\uA673\uA67E\uA6F2-\uA6F7\uA874-\uA877\uA8CE\uA8CF\uA8F8-\uA8FA\uA8FC\uA92E\uA92F\uA95F\uA9C1-\uA9CD\uA9DE\uA9DF\uAA5C-\uAA5F\uAADE\uAADF\uAAF0\uAAF1\uABEB\uFD3E\uFD3F\uFE10-\uFE19\uFE30-\uFE52\uFE54-\uFE61\uFE63\uFE68\uFE6A\uFE6B\uFF01-\uFF03\uFF05-\uFF0A\uFF0C-\uFF0F\uFF1A\uFF1B\uFF1F\uFF20\uFF3B-\uFF3D\uFF3F\uFF5B\uFF5D\uFF5F-\uFF65]/
  )
function Ha(e) {
  return function (t) {
    return null !== t && e.test(String.fromCharCode(t))
  }
}
function Wa(e, t, n, r) {
  const o = r ? r - 1 : Number.POSITIVE_INFINITY
  let i = 0
  return function (r) {
    if (Ua(r)) return e.enter(n), a(r)
    return t(r)
  }
  function a(r) {
    return Ua(r) && i++ < o ? (e.consume(r), a) : (e.exit(n), t(r))
  }
}
const $a = {
  tokenize: function (e) {
    const t = e.attempt(
      this.parser.constructs.contentInitial,
      function (n) {
        if (null === n) return void e.consume(n)
        return (
          e.enter('lineEnding'),
          e.consume(n),
          e.exit('lineEnding'),
          Wa(e, t, 'linePrefix')
        )
      },
      function (t) {
        return e.enter('paragraph'), r(t)
      }
    )
    let n
    return t
    function r(t) {
      const r = e.enter('chunkText', { contentType: 'text', previous: n })
      return n && (n.next = r), (n = r), o(t)
    }
    function o(t) {
      return null === t
        ? (e.exit('chunkText'), e.exit('paragraph'), void e.consume(t))
        : Ma(t)
          ? (e.consume(t), e.exit('chunkText'), r)
          : (e.consume(t), o)
    }
  },
}
const Qa = {
    tokenize: function (e) {
      const t = this,
        n = []
      let r,
        o,
        i,
        a = 0
      return l
      function l(r) {
        if (a < n.length) {
          const o = n[a]
          return (
            (t.containerState = o[1]), e.attempt(o[0].continuation, u, s)(r)
          )
        }
        return s(r)
      }
      function u(e) {
        if ((a++, t.containerState._closeFlow)) {
          ;(t.containerState._closeFlow = void 0), r && v()
          const n = t.events.length
          let o,
            i = n
          for (; i--; )
            if (
              'exit' === t.events[i][0] &&
              'chunkFlow' === t.events[i][1].type
            ) {
              o = t.events[i][1].end
              break
            }
          y(a)
          let l = n
          for (; l < t.events.length; )
            (t.events[l][1].end = Object.assign({}, o)), l++
          return (
            Oa(t.events, i + 1, 0, t.events.slice(n)),
            (t.events.length = l),
            s(e)
          )
        }
        return l(e)
      }
      function s(o) {
        if (a === n.length) {
          if (!r) return p(o)
          if (r.currentConstruct && r.currentConstruct.concrete) return h(o)
          t.interrupt = Boolean(
            r.currentConstruct && !r._gfmTableDynamicInterruptHack
          )
        }
        return (t.containerState = {}), e.check(Ga, c, f)(o)
      }
      function c(e) {
        return r && v(), y(a), p(e)
      }
      function f(e) {
        return (
          (t.parser.lazy[t.now().line] = a !== n.length),
          (i = t.now().offset),
          h(e)
        )
      }
      function p(n) {
        return (t.containerState = {}), e.attempt(Ga, d, h)(n)
      }
      function d(e) {
        return a++, n.push([t.currentConstruct, t.containerState]), p(e)
      }
      function h(n) {
        return null === n
          ? (r && v(), y(0), void e.consume(n))
          : ((r = r || t.parser.flow(t.now())),
            e.enter('chunkFlow', {
              contentType: 'flow',
              previous: o,
              _tokenizer: r,
            }),
            g(n))
      }
      function g(n) {
        return null === n
          ? (m(e.exit('chunkFlow'), !0), y(0), void e.consume(n))
          : Ma(n)
            ? (e.consume(n),
              m(e.exit('chunkFlow')),
              (a = 0),
              (t.interrupt = void 0),
              l)
            : (e.consume(n), g)
      }
      function m(e, n) {
        const l = t.sliceStream(e)
        if (
          (n && l.push(null),
          (e.previous = o),
          o && (o.next = e),
          (o = e),
          r.defineSkip(e.start),
          r.write(l),
          t.parser.lazy[e.start.line])
        ) {
          let e = r.events.length
          for (; e--; )
            if (
              r.events[e][1].start.offset < i &&
              (!r.events[e][1].end || r.events[e][1].end.offset > i)
            )
              return
          const n = t.events.length
          let o,
            l,
            u = n
          for (; u--; )
            if (
              'exit' === t.events[u][0] &&
              'chunkFlow' === t.events[u][1].type
            ) {
              if (o) {
                l = t.events[u][1].end
                break
              }
              o = !0
            }
          for (y(a), e = n; e < t.events.length; )
            (t.events[e][1].end = Object.assign({}, l)), e++
          Oa(t.events, u + 1, 0, t.events.slice(n)), (t.events.length = e)
        }
      }
      function y(r) {
        let o = n.length
        for (; o-- > r; ) {
          const r = n[o]
          ;(t.containerState = r[1]), r[0].exit.call(t, e)
        }
        n.length = r
      }
      function v() {
        r.write([null]),
          (o = void 0),
          (r = void 0),
          (t.containerState._closeFlow = void 0)
      }
    },
  },
  Ga = {
    tokenize: function (e, t, n) {
      return Wa(
        e,
        e.attempt(this.parser.constructs.document, t, n),
        'linePrefix',
        this.parser.constructs.disable.null.includes('codeIndented')
          ? void 0
          : 4
      )
    },
  }
const Ja = {
  tokenize: function (e, t, n) {
    return Wa(
      e,
      function (e) {
        return null === e || Ma(e) ? t(e) : n(e)
      },
      'linePrefix'
    )
  },
  partial: !0,
}
function Xa(e) {
  const t = {}
  let n,
    r,
    o,
    i,
    a,
    l,
    u,
    s = -1
  for (; ++s < e.length; ) {
    for (; s in t; ) s = t[s]
    if (
      ((n = e[s]),
      s &&
        'chunkFlow' === n[1].type &&
        'listItemPrefix' === e[s - 1][1].type &&
        ((l = n[1]._tokenizer.events),
        (o = 0),
        o < l.length && 'lineEndingBlank' === l[o][1].type && (o += 2),
        o < l.length && 'content' === l[o][1].type))
    )
      for (; ++o < l.length && 'content' !== l[o][1].type; )
        'chunkText' === l[o][1].type &&
          ((l[o][1]._isInFirstContentOfListItem = !0), o++)
    if ('enter' === n[0])
      n[1].contentType && (Object.assign(t, Ya(e, s)), (s = t[s]), (u = !0))
    else if (n[1]._container) {
      for (
        o = s, r = void 0;
        o-- &&
        ((i = e[o]),
        'lineEnding' === i[1].type || 'lineEndingBlank' === i[1].type);

      )
        'enter' === i[0] &&
          (r && (e[r][1].type = 'lineEndingBlank'),
          (i[1].type = 'lineEnding'),
          (r = o))
      r &&
        ((n[1].end = Object.assign({}, e[r][1].start)),
        (a = e.slice(r, s)),
        a.unshift(n),
        Oa(e, r, s - r + 1, a))
    }
  }
  return !u
}
function Ya(e, t) {
  const n = e[t][1],
    r = e[t][2]
  let o = t - 1
  const i = [],
    a = n._tokenizer || r.parser[n.contentType](n.start),
    l = a.events,
    u = [],
    s = {}
  let c,
    f,
    p = -1,
    d = n,
    h = 0,
    g = 0
  const m = [g]
  for (; d; ) {
    for (; e[++o][1] !== d; );
    i.push(o),
      d._tokenizer ||
        ((c = r.sliceStream(d)),
        d.next || c.push(null),
        f && a.defineSkip(d.start),
        d._isInFirstContentOfListItem &&
          (a._gfmTasklistFirstContentOfListItem = !0),
        a.write(c),
        d._isInFirstContentOfListItem &&
          (a._gfmTasklistFirstContentOfListItem = void 0)),
      (f = d),
      (d = d.next)
  }
  for (d = n; ++p < l.length; )
    'exit' === l[p][0] &&
      'enter' === l[p - 1][0] &&
      l[p][1].type === l[p - 1][1].type &&
      l[p][1].start.line !== l[p][1].end.line &&
      ((g = p + 1),
      m.push(g),
      (d._tokenizer = void 0),
      (d.previous = void 0),
      (d = d.next))
  for (
    a.events = [],
      d ? ((d._tokenizer = void 0), (d.previous = void 0)) : m.pop(),
      p = m.length;
    p--;

  ) {
    const t = l.slice(m[p], m[p + 1]),
      n = i.pop()
    u.unshift([n, n + t.length - 1]), Oa(e, n, 2, t)
  }
  for (p = -1; ++p < u.length; )
    (s[h + u[p][0]] = h + u[p][1]), (h += u[p][1] - u[p][0] - 1)
  return s
}
const Ka = {
    tokenize: function (e, t) {
      let n
      return function (t) {
        return (
          e.enter('content'),
          (n = e.enter('chunkContent', { contentType: 'content' })),
          r(t)
        )
      }
      function r(t) {
        return null === t
          ? o(t)
          : Ma(t)
            ? e.check(Za, i, o)(t)
            : (e.consume(t), r)
      }
      function o(n) {
        return e.exit('chunkContent'), e.exit('content'), t(n)
      }
      function i(t) {
        return (
          e.consume(t),
          e.exit('chunkContent'),
          (n.next = e.enter('chunkContent', {
            contentType: 'content',
            previous: n,
          })),
          (n = n.next),
          r
        )
      }
    },
    resolve: function (e) {
      return Xa(e), e
    },
  },
  Za = {
    tokenize: function (e, t, n) {
      const r = this
      return function (t) {
        return (
          e.exit('chunkContent'),
          e.enter('lineEnding'),
          e.consume(t),
          e.exit('lineEnding'),
          Wa(e, o, 'linePrefix')
        )
      }
      function o(o) {
        if (null === o || Ma(o)) return n(o)
        const i = r.events[r.events.length - 1]
        return !r.parser.constructs.disable.null.includes('codeIndented') &&
          i &&
          'linePrefix' === i[1].type &&
          i[2].sliceSerialize(i[1], !0).length >= 4
          ? t(o)
          : e.interrupt(r.parser.constructs.flow, n, t)(o)
      }
    },
    partial: !0,
  }
const el = {
  tokenize: function (e) {
    const t = this,
      n = e.attempt(
        Ja,
        function (r) {
          if (null === r) return void e.consume(r)
          return (
            e.enter('lineEndingBlank'),
            e.consume(r),
            e.exit('lineEndingBlank'),
            (t.currentConstruct = void 0),
            n
          )
        },
        e.attempt(
          this.parser.constructs.flowInitial,
          r,
          Wa(
            e,
            e.attempt(this.parser.constructs.flow, r, e.attempt(Ka, r)),
            'linePrefix'
          )
        )
      )
    return n
    function r(r) {
      if (null !== r)
        return (
          e.enter('lineEnding'),
          e.consume(r),
          e.exit('lineEnding'),
          (t.currentConstruct = void 0),
          n
        )
      e.consume(r)
    }
  },
}
const tl = { resolveAll: il() },
  nl = ol('string'),
  rl = ol('text')
function ol(e) {
  return {
    tokenize: function (t) {
      const n = this,
        r = this.parser.constructs[e],
        o = t.attempt(r, i, a)
      return i
      function i(e) {
        return u(e) ? o(e) : a(e)
      }
      function a(e) {
        if (null !== e) return t.enter('data'), t.consume(e), l
        t.consume(e)
      }
      function l(e) {
        return u(e) ? (t.exit('data'), o(e)) : (t.consume(e), l)
      }
      function u(e) {
        if (null === e) return !0
        const t = r[e]
        let o = -1
        if (t)
          for (; ++o < t.length; ) {
            const e = t[o]
            if (!e.previous || e.previous.call(n, n.previous)) return !0
          }
        return !1
      }
    },
    resolveAll: il('text' === e ? al : void 0),
  }
}
function il(e) {
  return function (t, n) {
    let r,
      o = -1
    for (; ++o <= t.length; )
      void 0 === r
        ? t[o] && 'data' === t[o][1].type && ((r = o), o++)
        : (t[o] && 'data' === t[o][1].type) ||
          (o !== r + 2 &&
            ((t[r][1].end = t[o - 1][1].end),
            t.splice(r + 2, o - r - 2),
            (o = r + 2)),
          (r = void 0))
    return e ? e(t, n) : t
  }
}
function al(e, t) {
  let n = 0
  for (; ++n <= e.length; )
    if (
      (n === e.length || 'lineEnding' === e[n][1].type) &&
      'data' === e[n - 1][1].type
    ) {
      const r = e[n - 1][1],
        o = t.sliceStream(r)
      let i,
        a = o.length,
        l = -1,
        u = 0
      for (; a--; ) {
        const e = o[a]
        if ('string' == typeof e) {
          for (l = e.length; 32 === e.charCodeAt(l - 1); ) u++, l--
          if (l) break
          l = -1
        } else if (-2 === e) (i = !0), u++
        else if (-1 !== e) {
          a++
          break
        }
      }
      if (u) {
        const o = {
          type:
            n === e.length || i || u < 2 ? 'lineSuffix' : 'hardBreakTrailing',
          start: {
            line: r.end.line,
            column: r.end.column - u,
            offset: r.end.offset - u,
            _index: r.start._index + a,
            _bufferIndex: a ? l : r.start._bufferIndex + l,
          },
          end: Object.assign({}, r.end),
        }
        ;(r.end = Object.assign({}, o.start)),
          r.start.offset === r.end.offset
            ? Object.assign(r, o)
            : (e.splice(n, 0, ['enter', o, t], ['exit', o, t]), (n += 2))
      }
      n++
    }
  return e
}
function ll(e, t, n) {
  const r = []
  let o = -1
  for (; ++o < e.length; ) {
    const i = e[o].resolveAll
    i && !r.includes(i) && ((t = i(t, n)), r.push(i))
  }
  return t
}
function ul(e, t, n) {
  let r = Object.assign(
    n ? Object.assign({}, n) : { line: 1, column: 1, offset: 0 },
    { _index: 0, _bufferIndex: -1 }
  )
  const o = {},
    i = []
  let a = [],
    l = [],
    u = !0
  const s = {
      consume: function (e) {
        Ma(e)
          ? (r.line++, (r.column = 1), (r.offset += -3 === e ? 2 : 1), w())
          : -1 !== e && (r.column++, r.offset++)
        r._bufferIndex < 0
          ? r._index++
          : (r._bufferIndex++,
            r._bufferIndex === a[r._index].length &&
              ((r._bufferIndex = -1), r._index++))
        ;(c.previous = e), (u = !0)
      },
      enter: function (e, t) {
        const n = t || {}
        return (
          (n.type = e),
          (n.start = h()),
          c.events.push(['enter', n, c]),
          l.push(n),
          n
        )
      },
      exit: function (e) {
        const t = l.pop()
        return (t.end = h()), c.events.push(['exit', t, c]), t
      },
      attempt: v(function (e, t) {
        b(e, t.from)
      }),
      check: v(y),
      interrupt: v(y, { interrupt: !0 }),
    },
    c = {
      previous: null,
      code: null,
      containerState: {},
      events: [],
      parser: e,
      sliceStream: d,
      sliceSerialize: function (e, t) {
        return (function (e, t) {
          let n = -1
          const r = []
          let o
          for (; ++n < e.length; ) {
            const i = e[n]
            let a
            if ('string' == typeof i) a = i
            else
              switch (i) {
                case -5:
                  a = '\r'
                  break
                case -4:
                  a = '\n'
                  break
                case -3:
                  a = '\r\n'
                  break
                case -2:
                  a = t ? ' ' : '\t'
                  break
                case -1:
                  if (!t && o) continue
                  a = ' '
                  break
                default:
                  a = String.fromCharCode(i)
              }
            ;(o = -2 === i), r.push(a)
          }
          return r.join('')
        })(d(e), t)
      },
      now: h,
      defineSkip: function (e) {
        ;(o[e.line] = e.column), w()
      },
      write: function (e) {
        return (
          (a = Aa(a, e)),
          g(),
          null !== a[a.length - 1]
            ? []
            : (b(t, 0), (c.events = ll(i, c.events, c)), c.events)
        )
      },
    }
  let f,
    p = t.tokenize.call(c, s)
  return t.resolveAll && i.push(t), c
  function d(e) {
    return (function (e, t) {
      const n = t.start._index,
        r = t.start._bufferIndex,
        o = t.end._index,
        i = t.end._bufferIndex
      let a
      n === o
        ? (a = [e[n].slice(r, i)])
        : ((a = e.slice(n, o)),
          r > -1 && (a[0] = a[0].slice(r)),
          i > 0 && a.push(e[o].slice(0, i)))
      return a
    })(a, e)
  }
  function h() {
    return Object.assign({}, r)
  }
  function g() {
    let e
    for (; r._index < a.length; ) {
      const t = a[r._index]
      if ('string' == typeof t)
        for (
          e = r._index, r._bufferIndex < 0 && (r._bufferIndex = 0);
          r._index === e && r._bufferIndex < t.length;

        )
          m(t.charCodeAt(r._bufferIndex))
      else m(t)
    }
  }
  function m(e) {
    ;(u = void 0), (f = e), (p = p(e))
  }
  function y(e, t) {
    t.restore()
  }
  function v(e, t) {
    return function (n, o, i) {
      let a, f, p, d
      return Array.isArray(n)
        ? g(n)
        : 'tokenize' in n
          ? g([n])
          : (function (e) {
              return t
              function t(t) {
                const n = null !== t && e[t],
                  r = null !== t && e.null
                return g([
                  ...(Array.isArray(n) ? n : n ? [n] : []),
                  ...(Array.isArray(r) ? r : r ? [r] : []),
                ])(t)
              }
            })(n)
      function g(e) {
        return (a = e), (f = 0), 0 === e.length ? i : m(e[f])
      }
      function m(e) {
        return function (n) {
          ;(d = (function () {
            const e = h(),
              t = c.previous,
              n = c.currentConstruct,
              o = c.events.length,
              i = Array.from(l)
            return { restore: a, from: o }
            function a() {
              ;(r = e),
                (c.previous = t),
                (c.currentConstruct = n),
                (c.events.length = o),
                (l = i),
                w()
            }
          })()),
            (p = e),
            e.partial || (c.currentConstruct = e)
          return e.name && c.parser.constructs.disable.null.includes(e.name)
            ? v(n)
            : e.tokenize.call(
                t ? Object.assign(Object.create(c), t) : c,
                s,
                y,
                v
              )(n)
        }
      }
      function y(t) {
        return (u = !0), e(p, d), o
      }
      function v(e) {
        return (u = !0), d.restore(), ++f < a.length ? m(a[f]) : i
      }
    }
  }
  function b(e, t) {
    e.resolveAll && !i.includes(e) && i.push(e),
      e.resolve &&
        Oa(c.events, t, c.events.length - t, e.resolve(c.events.slice(t), c)),
      e.resolveTo && (c.events = e.resolveTo(c.events, c))
  }
  function w() {
    r.line in o &&
      r.column < 2 &&
      ((r.column = o[r.line]), (r.offset += o[r.line] - 1))
  }
}
var sl = {}
function cl(e) {
  return null === e || za(e) || qa(e) ? 1 : Va(e) ? 2 : void 0
}
e(sl, 'document', () => Vl),
  e(sl, 'contentInitial', () => Hl),
  e(sl, 'flowInitial', () => Wl),
  e(sl, 'flow', () => $l),
  e(sl, 'string', () => Ql),
  e(sl, 'text', () => Gl),
  e(sl, 'insideSpan', () => Jl),
  e(sl, 'attentionMarkers', () => Xl),
  e(sl, 'disable', () => Yl)
const fl = {
  name: 'attention',
  tokenize: function (e, t) {
    const n = this.parser.constructs.attentionMarkers.null,
      r = this.previous,
      o = cl(r)
    let i
    return function (t) {
      return e.enter('attentionSequence'), (i = t), a(t)
    }
    function a(l) {
      if (l === i) return e.consume(l), a
      const u = e.exit('attentionSequence'),
        s = cl(l),
        c = !s || (2 === s && o) || n.includes(l),
        f = !o || (2 === o && s) || n.includes(r)
      return (
        (u._open = Boolean(42 === i ? c : c && (o || !f))),
        (u._close = Boolean(42 === i ? f : f && (s || !c))),
        t(l)
      )
    }
  },
  resolveAll: function (e, t) {
    let n,
      r,
      o,
      i,
      a,
      l,
      u,
      s,
      c = -1
    for (; ++c < e.length; )
      if (
        'enter' === e[c][0] &&
        'attentionSequence' === e[c][1].type &&
        e[c][1]._close
      )
        for (n = c; n--; )
          if (
            'exit' === e[n][0] &&
            'attentionSequence' === e[n][1].type &&
            e[n][1]._open &&
            t.sliceSerialize(e[n][1]).charCodeAt(0) ===
              t.sliceSerialize(e[c][1]).charCodeAt(0)
          ) {
            if (
              (e[n][1]._close || e[c][1]._open) &&
              (e[c][1].end.offset - e[c][1].start.offset) % 3 &&
              !(
                (e[n][1].end.offset -
                  e[n][1].start.offset +
                  e[c][1].end.offset -
                  e[c][1].start.offset) %
                3
              )
            )
              continue
            l =
              e[n][1].end.offset - e[n][1].start.offset > 1 &&
              e[c][1].end.offset - e[c][1].start.offset > 1
                ? 2
                : 1
            const f = Object.assign({}, e[n][1].end),
              p = Object.assign({}, e[c][1].start)
            pl(f, -l),
              pl(p, l),
              (i = {
                type: l > 1 ? 'strongSequence' : 'emphasisSequence',
                start: f,
                end: Object.assign({}, e[n][1].end),
              }),
              (a = {
                type: l > 1 ? 'strongSequence' : 'emphasisSequence',
                start: Object.assign({}, e[c][1].start),
                end: p,
              }),
              (o = {
                type: l > 1 ? 'strongText' : 'emphasisText',
                start: Object.assign({}, e[n][1].end),
                end: Object.assign({}, e[c][1].start),
              }),
              (r = {
                type: l > 1 ? 'strong' : 'emphasis',
                start: Object.assign({}, i.start),
                end: Object.assign({}, a.end),
              }),
              (e[n][1].end = Object.assign({}, i.start)),
              (e[c][1].start = Object.assign({}, a.end)),
              (u = []),
              e[n][1].end.offset - e[n][1].start.offset &&
                (u = Aa(u, [
                  ['enter', e[n][1], t],
                  ['exit', e[n][1], t],
                ])),
              (u = Aa(u, [
                ['enter', r, t],
                ['enter', i, t],
                ['exit', i, t],
                ['enter', o, t],
              ])),
              (u = Aa(
                u,
                ll(t.parser.constructs.insideSpan.null, e.slice(n + 1, c), t)
              )),
              (u = Aa(u, [
                ['exit', o, t],
                ['enter', a, t],
                ['exit', a, t],
                ['exit', r, t],
              ])),
              e[c][1].end.offset - e[c][1].start.offset
                ? ((s = 2),
                  (u = Aa(u, [
                    ['enter', e[c][1], t],
                    ['exit', e[c][1], t],
                  ])))
                : (s = 0),
              Oa(e, n - 1, c - n + 3, u),
              (c = n + u.length - s - 2)
            break
          }
    c = -1
    for (; ++c < e.length; )
      'attentionSequence' === e[c][1].type && (e[c][1].type = 'data')
    return e
  },
}
function pl(e, t) {
  ;(e.column += t), (e.offset += t), (e._bufferIndex += t)
}
const dl = {
  name: 'blockQuote',
  tokenize: function (e, t, n) {
    const r = this
    return function (t) {
      if (62 === t) {
        const n = r.containerState
        return (
          n.open || (e.enter('blockQuote', { _container: !0 }), (n.open = !0)),
          e.enter('blockQuotePrefix'),
          e.enter('blockQuoteMarker'),
          e.consume(t),
          e.exit('blockQuoteMarker'),
          o
        )
      }
      return n(t)
    }
    function o(n) {
      return Ua(n)
        ? (e.enter('blockQuotePrefixWhitespace'),
          e.consume(n),
          e.exit('blockQuotePrefixWhitespace'),
          e.exit('blockQuotePrefix'),
          t)
        : (e.exit('blockQuotePrefix'), t(n))
    }
  },
  continuation: {
    tokenize: function (e, t, n) {
      return Wa(
        e,
        e.attempt(dl, t, n),
        'linePrefix',
        this.parser.constructs.disable.null.includes('codeIndented')
          ? void 0
          : 4
      )
    },
  },
  exit: function (e) {
    e.exit('blockQuote')
  },
}
const hl = {
  name: 'characterEscape',
  tokenize: function (e, t, n) {
    return function (t) {
      return (
        e.enter('characterEscape'),
        e.enter('escapeMarker'),
        e.consume(t),
        e.exit('escapeMarker'),
        r
      )
    }
    function r(r) {
      return Na(r)
        ? (e.enter('characterEscapeValue'),
          e.consume(r),
          e.exit('characterEscapeValue'),
          e.exit('characterEscape'),
          t)
        : n(r)
    }
  },
}
const gl = {
    AElig: 'Æ',
    AMP: '&',
    Aacute: 'Á',
    Abreve: 'Ă',
    Acirc: 'Â',
    Acy: 'А',
    Afr: '𝔄',
    Agrave: 'À',
    Alpha: 'Α',
    Amacr: 'Ā',
    And: '⩓',
    Aogon: 'Ą',
    Aopf: '𝔸',
    ApplyFunction: '⁡',
    Aring: 'Å',
    Ascr: '𝒜',
    Assign: '≔',
    Atilde: 'Ã',
    Auml: 'Ä',
    Backslash: '∖',
    Barv: '⫧',
    Barwed: '⌆',
    Bcy: 'Б',
    Because: '∵',
    Bernoullis: 'ℬ',
    Beta: 'Β',
    Bfr: '𝔅',
    Bopf: '𝔹',
    Breve: '˘',
    Bscr: 'ℬ',
    Bumpeq: '≎',
    CHcy: 'Ч',
    COPY: '©',
    Cacute: 'Ć',
    Cap: '⋒',
    CapitalDifferentialD: 'ⅅ',
    Cayleys: 'ℭ',
    Ccaron: 'Č',
    Ccedil: 'Ç',
    Ccirc: 'Ĉ',
    Cconint: '∰',
    Cdot: 'Ċ',
    Cedilla: '¸',
    CenterDot: '·',
    Cfr: 'ℭ',
    Chi: 'Χ',
    CircleDot: '⊙',
    CircleMinus: '⊖',
    CirclePlus: '⊕',
    CircleTimes: '⊗',
    ClockwiseContourIntegral: '∲',
    CloseCurlyDoubleQuote: '”',
    CloseCurlyQuote: '’',
    Colon: '∷',
    Colone: '⩴',
    Congruent: '≡',
    Conint: '∯',
    ContourIntegral: '∮',
    Copf: 'ℂ',
    Coproduct: '∐',
    CounterClockwiseContourIntegral: '∳',
    Cross: '⨯',
    Cscr: '𝒞',
    Cup: '⋓',
    CupCap: '≍',
    DD: 'ⅅ',
    DDotrahd: '⤑',
    DJcy: 'Ђ',
    DScy: 'Ѕ',
    DZcy: 'Џ',
    Dagger: '‡',
    Darr: '↡',
    Dashv: '⫤',
    Dcaron: 'Ď',
    Dcy: 'Д',
    Del: '∇',
    Delta: 'Δ',
    Dfr: '𝔇',
    DiacriticalAcute: '´',
    DiacriticalDot: '˙',
    DiacriticalDoubleAcute: '˝',
    DiacriticalGrave: '`',
    DiacriticalTilde: '˜',
    Diamond: '⋄',
    DifferentialD: 'ⅆ',
    Dopf: '𝔻',
    Dot: '¨',
    DotDot: '⃜',
    DotEqual: '≐',
    DoubleContourIntegral: '∯',
    DoubleDot: '¨',
    DoubleDownArrow: '⇓',
    DoubleLeftArrow: '⇐',
    DoubleLeftRightArrow: '⇔',
    DoubleLeftTee: '⫤',
    DoubleLongLeftArrow: '⟸',
    DoubleLongLeftRightArrow: '⟺',
    DoubleLongRightArrow: '⟹',
    DoubleRightArrow: '⇒',
    DoubleRightTee: '⊨',
    DoubleUpArrow: '⇑',
    DoubleUpDownArrow: '⇕',
    DoubleVerticalBar: '∥',
    DownArrow: '↓',
    DownArrowBar: '⤓',
    DownArrowUpArrow: '⇵',
    DownBreve: '̑',
    DownLeftRightVector: '⥐',
    DownLeftTeeVector: '⥞',
    DownLeftVector: '↽',
    DownLeftVectorBar: '⥖',
    DownRightTeeVector: '⥟',
    DownRightVector: '⇁',
    DownRightVectorBar: '⥗',
    DownTee: '⊤',
    DownTeeArrow: '↧',
    Downarrow: '⇓',
    Dscr: '𝒟',
    Dstrok: 'Đ',
    ENG: 'Ŋ',
    ETH: 'Ð',
    Eacute: 'É',
    Ecaron: 'Ě',
    Ecirc: 'Ê',
    Ecy: 'Э',
    Edot: 'Ė',
    Efr: '𝔈',
    Egrave: 'È',
    Element: '∈',
    Emacr: 'Ē',
    EmptySmallSquare: '◻',
    EmptyVerySmallSquare: '▫',
    Eogon: 'Ę',
    Eopf: '𝔼',
    Epsilon: 'Ε',
    Equal: '⩵',
    EqualTilde: '≂',
    Equilibrium: '⇌',
    Escr: 'ℰ',
    Esim: '⩳',
    Eta: 'Η',
    Euml: 'Ë',
    Exists: '∃',
    ExponentialE: 'ⅇ',
    Fcy: 'Ф',
    Ffr: '𝔉',
    FilledSmallSquare: '◼',
    FilledVerySmallSquare: '▪',
    Fopf: '𝔽',
    ForAll: '∀',
    Fouriertrf: 'ℱ',
    Fscr: 'ℱ',
    GJcy: 'Ѓ',
    GT: '>',
    Gamma: 'Γ',
    Gammad: 'Ϝ',
    Gbreve: 'Ğ',
    Gcedil: 'Ģ',
    Gcirc: 'Ĝ',
    Gcy: 'Г',
    Gdot: 'Ġ',
    Gfr: '𝔊',
    Gg: '⋙',
    Gopf: '𝔾',
    GreaterEqual: '≥',
    GreaterEqualLess: '⋛',
    GreaterFullEqual: '≧',
    GreaterGreater: '⪢',
    GreaterLess: '≷',
    GreaterSlantEqual: '⩾',
    GreaterTilde: '≳',
    Gscr: '𝒢',
    Gt: '≫',
    HARDcy: 'Ъ',
    Hacek: 'ˇ',
    Hat: '^',
    Hcirc: 'Ĥ',
    Hfr: 'ℌ',
    HilbertSpace: 'ℋ',
    Hopf: 'ℍ',
    HorizontalLine: '─',
    Hscr: 'ℋ',
    Hstrok: 'Ħ',
    HumpDownHump: '≎',
    HumpEqual: '≏',
    IEcy: 'Е',
    IJlig: 'Ĳ',
    IOcy: 'Ё',
    Iacute: 'Í',
    Icirc: 'Î',
    Icy: 'И',
    Idot: 'İ',
    Ifr: 'ℑ',
    Igrave: 'Ì',
    Im: 'ℑ',
    Imacr: 'Ī',
    ImaginaryI: 'ⅈ',
    Implies: '⇒',
    Int: '∬',
    Integral: '∫',
    Intersection: '⋂',
    InvisibleComma: '⁣',
    InvisibleTimes: '⁢',
    Iogon: 'Į',
    Iopf: '𝕀',
    Iota: 'Ι',
    Iscr: 'ℐ',
    Itilde: 'Ĩ',
    Iukcy: 'І',
    Iuml: 'Ï',
    Jcirc: 'Ĵ',
    Jcy: 'Й',
    Jfr: '𝔍',
    Jopf: '𝕁',
    Jscr: '𝒥',
    Jsercy: 'Ј',
    Jukcy: 'Є',
    KHcy: 'Х',
    KJcy: 'Ќ',
    Kappa: 'Κ',
    Kcedil: 'Ķ',
    Kcy: 'К',
    Kfr: '𝔎',
    Kopf: '𝕂',
    Kscr: '𝒦',
    LJcy: 'Љ',
    LT: '<',
    Lacute: 'Ĺ',
    Lambda: 'Λ',
    Lang: '⟪',
    Laplacetrf: 'ℒ',
    Larr: '↞',
    Lcaron: 'Ľ',
    Lcedil: 'Ļ',
    Lcy: 'Л',
    LeftAngleBracket: '⟨',
    LeftArrow: '←',
    LeftArrowBar: '⇤',
    LeftArrowRightArrow: '⇆',
    LeftCeiling: '⌈',
    LeftDoubleBracket: '⟦',
    LeftDownTeeVector: '⥡',
    LeftDownVector: '⇃',
    LeftDownVectorBar: '⥙',
    LeftFloor: '⌊',
    LeftRightArrow: '↔',
    LeftRightVector: '⥎',
    LeftTee: '⊣',
    LeftTeeArrow: '↤',
    LeftTeeVector: '⥚',
    LeftTriangle: '⊲',
    LeftTriangleBar: '⧏',
    LeftTriangleEqual: '⊴',
    LeftUpDownVector: '⥑',
    LeftUpTeeVector: '⥠',
    LeftUpVector: '↿',
    LeftUpVectorBar: '⥘',
    LeftVector: '↼',
    LeftVectorBar: '⥒',
    Leftarrow: '⇐',
    Leftrightarrow: '⇔',
    LessEqualGreater: '⋚',
    LessFullEqual: '≦',
    LessGreater: '≶',
    LessLess: '⪡',
    LessSlantEqual: '⩽',
    LessTilde: '≲',
    Lfr: '𝔏',
    Ll: '⋘',
    Lleftarrow: '⇚',
    Lmidot: 'Ŀ',
    LongLeftArrow: '⟵',
    LongLeftRightArrow: '⟷',
    LongRightArrow: '⟶',
    Longleftarrow: '⟸',
    Longleftrightarrow: '⟺',
    Longrightarrow: '⟹',
    Lopf: '𝕃',
    LowerLeftArrow: '↙',
    LowerRightArrow: '↘',
    Lscr: 'ℒ',
    Lsh: '↰',
    Lstrok: 'Ł',
    Lt: '≪',
    Map: '⤅',
    Mcy: 'М',
    MediumSpace: ' ',
    Mellintrf: 'ℳ',
    Mfr: '𝔐',
    MinusPlus: '∓',
    Mopf: '𝕄',
    Mscr: 'ℳ',
    Mu: 'Μ',
    NJcy: 'Њ',
    Nacute: 'Ń',
    Ncaron: 'Ň',
    Ncedil: 'Ņ',
    Ncy: 'Н',
    NegativeMediumSpace: '​',
    NegativeThickSpace: '​',
    NegativeThinSpace: '​',
    NegativeVeryThinSpace: '​',
    NestedGreaterGreater: '≫',
    NestedLessLess: '≪',
    NewLine: '\n',
    Nfr: '𝔑',
    NoBreak: '⁠',
    NonBreakingSpace: ' ',
    Nopf: 'ℕ',
    Not: '⫬',
    NotCongruent: '≢',
    NotCupCap: '≭',
    NotDoubleVerticalBar: '∦',
    NotElement: '∉',
    NotEqual: '≠',
    NotEqualTilde: '≂̸',
    NotExists: '∄',
    NotGreater: '≯',
    NotGreaterEqual: '≱',
    NotGreaterFullEqual: '≧̸',
    NotGreaterGreater: '≫̸',
    NotGreaterLess: '≹',
    NotGreaterSlantEqual: '⩾̸',
    NotGreaterTilde: '≵',
    NotHumpDownHump: '≎̸',
    NotHumpEqual: '≏̸',
    NotLeftTriangle: '⋪',
    NotLeftTriangleBar: '⧏̸',
    NotLeftTriangleEqual: '⋬',
    NotLess: '≮',
    NotLessEqual: '≰',
    NotLessGreater: '≸',
    NotLessLess: '≪̸',
    NotLessSlantEqual: '⩽̸',
    NotLessTilde: '≴',
    NotNestedGreaterGreater: '⪢̸',
    NotNestedLessLess: '⪡̸',
    NotPrecedes: '⊀',
    NotPrecedesEqual: '⪯̸',
    NotPrecedesSlantEqual: '⋠',
    NotReverseElement: '∌',
    NotRightTriangle: '⋫',
    NotRightTriangleBar: '⧐̸',
    NotRightTriangleEqual: '⋭',
    NotSquareSubset: '⊏̸',
    NotSquareSubsetEqual: '⋢',
    NotSquareSuperset: '⊐̸',
    NotSquareSupersetEqual: '⋣',
    NotSubset: '⊂⃒',
    NotSubsetEqual: '⊈',
    NotSucceeds: '⊁',
    NotSucceedsEqual: '⪰̸',
    NotSucceedsSlantEqual: '⋡',
    NotSucceedsTilde: '≿̸',
    NotSuperset: '⊃⃒',
    NotSupersetEqual: '⊉',
    NotTilde: '≁',
    NotTildeEqual: '≄',
    NotTildeFullEqual: '≇',
    NotTildeTilde: '≉',
    NotVerticalBar: '∤',
    Nscr: '𝒩',
    Ntilde: 'Ñ',
    Nu: 'Ν',
    OElig: 'Œ',
    Oacute: 'Ó',
    Ocirc: 'Ô',
    Ocy: 'О',
    Odblac: 'Ő',
    Ofr: '𝔒',
    Ograve: 'Ò',
    Omacr: 'Ō',
    Omega: 'Ω',
    Omicron: 'Ο',
    Oopf: '𝕆',
    OpenCurlyDoubleQuote: '“',
    OpenCurlyQuote: '‘',
    Or: '⩔',
    Oscr: '𝒪',
    Oslash: 'Ø',
    Otilde: 'Õ',
    Otimes: '⨷',
    Ouml: 'Ö',
    OverBar: '‾',
    OverBrace: '⏞',
    OverBracket: '⎴',
    OverParenthesis: '⏜',
    PartialD: '∂',
    Pcy: 'П',
    Pfr: '𝔓',
    Phi: 'Φ',
    Pi: 'Π',
    PlusMinus: '±',
    Poincareplane: 'ℌ',
    Popf: 'ℙ',
    Pr: '⪻',
    Precedes: '≺',
    PrecedesEqual: '⪯',
    PrecedesSlantEqual: '≼',
    PrecedesTilde: '≾',
    Prime: '″',
    Product: '∏',
    Proportion: '∷',
    Proportional: '∝',
    Pscr: '𝒫',
    Psi: 'Ψ',
    QUOT: '"',
    Qfr: '𝔔',
    Qopf: 'ℚ',
    Qscr: '𝒬',
    RBarr: '⤐',
    REG: '®',
    Racute: 'Ŕ',
    Rang: '⟫',
    Rarr: '↠',
    Rarrtl: '⤖',
    Rcaron: 'Ř',
    Rcedil: 'Ŗ',
    Rcy: 'Р',
    Re: 'ℜ',
    ReverseElement: '∋',
    ReverseEquilibrium: '⇋',
    ReverseUpEquilibrium: '⥯',
    Rfr: 'ℜ',
    Rho: 'Ρ',
    RightAngleBracket: '⟩',
    RightArrow: '→',
    RightArrowBar: '⇥',
    RightArrowLeftArrow: '⇄',
    RightCeiling: '⌉',
    RightDoubleBracket: '⟧',
    RightDownTeeVector: '⥝',
    RightDownVector: '⇂',
    RightDownVectorBar: '⥕',
    RightFloor: '⌋',
    RightTee: '⊢',
    RightTeeArrow: '↦',
    RightTeeVector: '⥛',
    RightTriangle: '⊳',
    RightTriangleBar: '⧐',
    RightTriangleEqual: '⊵',
    RightUpDownVector: '⥏',
    RightUpTeeVector: '⥜',
    RightUpVector: '↾',
    RightUpVectorBar: '⥔',
    RightVector: '⇀',
    RightVectorBar: '⥓',
    Rightarrow: '⇒',
    Ropf: 'ℝ',
    RoundImplies: '⥰',
    Rrightarrow: '⇛',
    Rscr: 'ℛ',
    Rsh: '↱',
    RuleDelayed: '⧴',
    SHCHcy: 'Щ',
    SHcy: 'Ш',
    SOFTcy: 'Ь',
    Sacute: 'Ś',
    Sc: '⪼',
    Scaron: 'Š',
    Scedil: 'Ş',
    Scirc: 'Ŝ',
    Scy: 'С',
    Sfr: '𝔖',
    ShortDownArrow: '↓',
    ShortLeftArrow: '←',
    ShortRightArrow: '→',
    ShortUpArrow: '↑',
    Sigma: 'Σ',
    SmallCircle: '∘',
    Sopf: '𝕊',
    Sqrt: '√',
    Square: '□',
    SquareIntersection: '⊓',
    SquareSubset: '⊏',
    SquareSubsetEqual: '⊑',
    SquareSuperset: '⊐',
    SquareSupersetEqual: '⊒',
    SquareUnion: '⊔',
    Sscr: '𝒮',
    Star: '⋆',
    Sub: '⋐',
    Subset: '⋐',
    SubsetEqual: '⊆',
    Succeeds: '≻',
    SucceedsEqual: '⪰',
    SucceedsSlantEqual: '≽',
    SucceedsTilde: '≿',
    SuchThat: '∋',
    Sum: '∑',
    Sup: '⋑',
    Superset: '⊃',
    SupersetEqual: '⊇',
    Supset: '⋑',
    THORN: 'Þ',
    TRADE: '™',
    TSHcy: 'Ћ',
    TScy: 'Ц',
    Tab: '\t',
    Tau: 'Τ',
    Tcaron: 'Ť',
    Tcedil: 'Ţ',
    Tcy: 'Т',
    Tfr: '𝔗',
    Therefore: '∴',
    Theta: 'Θ',
    ThickSpace: '  ',
    ThinSpace: ' ',
    Tilde: '∼',
    TildeEqual: '≃',
    TildeFullEqual: '≅',
    TildeTilde: '≈',
    Topf: '𝕋',
    TripleDot: '⃛',
    Tscr: '𝒯',
    Tstrok: 'Ŧ',
    Uacute: 'Ú',
    Uarr: '↟',
    Uarrocir: '⥉',
    Ubrcy: 'Ў',
    Ubreve: 'Ŭ',
    Ucirc: 'Û',
    Ucy: 'У',
    Udblac: 'Ű',
    Ufr: '𝔘',
    Ugrave: 'Ù',
    Umacr: 'Ū',
    UnderBar: '_',
    UnderBrace: '⏟',
    UnderBracket: '⎵',
    UnderParenthesis: '⏝',
    Union: '⋃',
    UnionPlus: '⊎',
    Uogon: 'Ų',
    Uopf: '𝕌',
    UpArrow: '↑',
    UpArrowBar: '⤒',
    UpArrowDownArrow: '⇅',
    UpDownArrow: '↕',
    UpEquilibrium: '⥮',
    UpTee: '⊥',
    UpTeeArrow: '↥',
    Uparrow: '⇑',
    Updownarrow: '⇕',
    UpperLeftArrow: '↖',
    UpperRightArrow: '↗',
    Upsi: 'ϒ',
    Upsilon: 'Υ',
    Uring: 'Ů',
    Uscr: '𝒰',
    Utilde: 'Ũ',
    Uuml: 'Ü',
    VDash: '⊫',
    Vbar: '⫫',
    Vcy: 'В',
    Vdash: '⊩',
    Vdashl: '⫦',
    Vee: '⋁',
    Verbar: '‖',
    Vert: '‖',
    VerticalBar: '∣',
    VerticalLine: '|',
    VerticalSeparator: '❘',
    VerticalTilde: '≀',
    VeryThinSpace: ' ',
    Vfr: '𝔙',
    Vopf: '𝕍',
    Vscr: '𝒱',
    Vvdash: '⊪',
    Wcirc: 'Ŵ',
    Wedge: '⋀',
    Wfr: '𝔚',
    Wopf: '𝕎',
    Wscr: '𝒲',
    Xfr: '𝔛',
    Xi: 'Ξ',
    Xopf: '𝕏',
    Xscr: '𝒳',
    YAcy: 'Я',
    YIcy: 'Ї',
    YUcy: 'Ю',
    Yacute: 'Ý',
    Ycirc: 'Ŷ',
    Ycy: 'Ы',
    Yfr: '𝔜',
    Yopf: '𝕐',
    Yscr: '𝒴',
    Yuml: 'Ÿ',
    ZHcy: 'Ж',
    Zacute: 'Ź',
    Zcaron: 'Ž',
    Zcy: 'З',
    Zdot: 'Ż',
    ZeroWidthSpace: '​',
    Zeta: 'Ζ',
    Zfr: 'ℨ',
    Zopf: 'ℤ',
    Zscr: '𝒵',
    aacute: 'á',
    abreve: 'ă',
    ac: '∾',
    acE: '∾̳',
    acd: '∿',
    acirc: 'â',
    acute: '´',
    acy: 'а',
    aelig: 'æ',
    af: '⁡',
    afr: '𝔞',
    agrave: 'à',
    alefsym: 'ℵ',
    aleph: 'ℵ',
    alpha: 'α',
    amacr: 'ā',
    amalg: '⨿',
    amp: '&',
    and: '∧',
    andand: '⩕',
    andd: '⩜',
    andslope: '⩘',
    andv: '⩚',
    ang: '∠',
    ange: '⦤',
    angle: '∠',
    angmsd: '∡',
    angmsdaa: '⦨',
    angmsdab: '⦩',
    angmsdac: '⦪',
    angmsdad: '⦫',
    angmsdae: '⦬',
    angmsdaf: '⦭',
    angmsdag: '⦮',
    angmsdah: '⦯',
    angrt: '∟',
    angrtvb: '⊾',
    angrtvbd: '⦝',
    angsph: '∢',
    angst: 'Å',
    angzarr: '⍼',
    aogon: 'ą',
    aopf: '𝕒',
    ap: '≈',
    apE: '⩰',
    apacir: '⩯',
    ape: '≊',
    apid: '≋',
    apos: "'",
    approx: '≈',
    approxeq: '≊',
    aring: 'å',
    ascr: '𝒶',
    ast: '*',
    asymp: '≈',
    asympeq: '≍',
    atilde: 'ã',
    auml: 'ä',
    awconint: '∳',
    awint: '⨑',
    bNot: '⫭',
    backcong: '≌',
    backepsilon: '϶',
    backprime: '‵',
    backsim: '∽',
    backsimeq: '⋍',
    barvee: '⊽',
    barwed: '⌅',
    barwedge: '⌅',
    bbrk: '⎵',
    bbrktbrk: '⎶',
    bcong: '≌',
    bcy: 'б',
    bdquo: '„',
    becaus: '∵',
    because: '∵',
    bemptyv: '⦰',
    bepsi: '϶',
    bernou: 'ℬ',
    beta: 'β',
    beth: 'ℶ',
    between: '≬',
    bfr: '𝔟',
    bigcap: '⋂',
    bigcirc: '◯',
    bigcup: '⋃',
    bigodot: '⨀',
    bigoplus: '⨁',
    bigotimes: '⨂',
    bigsqcup: '⨆',
    bigstar: '★',
    bigtriangledown: '▽',
    bigtriangleup: '△',
    biguplus: '⨄',
    bigvee: '⋁',
    bigwedge: '⋀',
    bkarow: '⤍',
    blacklozenge: '⧫',
    blacksquare: '▪',
    blacktriangle: '▴',
    blacktriangledown: '▾',
    blacktriangleleft: '◂',
    blacktriangleright: '▸',
    blank: '␣',
    blk12: '▒',
    blk14: '░',
    blk34: '▓',
    block: '█',
    bne: '=⃥',
    bnequiv: '≡⃥',
    bnot: '⌐',
    bopf: '𝕓',
    bot: '⊥',
    bottom: '⊥',
    bowtie: '⋈',
    boxDL: '╗',
    boxDR: '╔',
    boxDl: '╖',
    boxDr: '╓',
    boxH: '═',
    boxHD: '╦',
    boxHU: '╩',
    boxHd: '╤',
    boxHu: '╧',
    boxUL: '╝',
    boxUR: '╚',
    boxUl: '╜',
    boxUr: '╙',
    boxV: '║',
    boxVH: '╬',
    boxVL: '╣',
    boxVR: '╠',
    boxVh: '╫',
    boxVl: '╢',
    boxVr: '╟',
    boxbox: '⧉',
    boxdL: '╕',
    boxdR: '╒',
    boxdl: '┐',
    boxdr: '┌',
    boxh: '─',
    boxhD: '╥',
    boxhU: '╨',
    boxhd: '┬',
    boxhu: '┴',
    boxminus: '⊟',
    boxplus: '⊞',
    boxtimes: '⊠',
    boxuL: '╛',
    boxuR: '╘',
    boxul: '┘',
    boxur: '└',
    boxv: '│',
    boxvH: '╪',
    boxvL: '╡',
    boxvR: '╞',
    boxvh: '┼',
    boxvl: '┤',
    boxvr: '├',
    bprime: '‵',
    breve: '˘',
    brvbar: '¦',
    bscr: '𝒷',
    bsemi: '⁏',
    bsim: '∽',
    bsime: '⋍',
    bsol: '\\',
    bsolb: '⧅',
    bsolhsub: '⟈',
    bull: '•',
    bullet: '•',
    bump: '≎',
    bumpE: '⪮',
    bumpe: '≏',
    bumpeq: '≏',
    cacute: 'ć',
    cap: '∩',
    capand: '⩄',
    capbrcup: '⩉',
    capcap: '⩋',
    capcup: '⩇',
    capdot: '⩀',
    caps: '∩︀',
    caret: '⁁',
    caron: 'ˇ',
    ccaps: '⩍',
    ccaron: 'č',
    ccedil: 'ç',
    ccirc: 'ĉ',
    ccups: '⩌',
    ccupssm: '⩐',
    cdot: 'ċ',
    cedil: '¸',
    cemptyv: '⦲',
    cent: '¢',
    centerdot: '·',
    cfr: '𝔠',
    chcy: 'ч',
    check: '✓',
    checkmark: '✓',
    chi: 'χ',
    cir: '○',
    cirE: '⧃',
    circ: 'ˆ',
    circeq: '≗',
    circlearrowleft: '↺',
    circlearrowright: '↻',
    circledR: '®',
    circledS: 'Ⓢ',
    circledast: '⊛',
    circledcirc: '⊚',
    circleddash: '⊝',
    cire: '≗',
    cirfnint: '⨐',
    cirmid: '⫯',
    cirscir: '⧂',
    clubs: '♣',
    clubsuit: '♣',
    colon: ':',
    colone: '≔',
    coloneq: '≔',
    comma: ',',
    commat: '@',
    comp: '∁',
    compfn: '∘',
    complement: '∁',
    complexes: 'ℂ',
    cong: '≅',
    congdot: '⩭',
    conint: '∮',
    copf: '𝕔',
    coprod: '∐',
    copy: '©',
    copysr: '℗',
    crarr: '↵',
    cross: '✗',
    cscr: '𝒸',
    csub: '⫏',
    csube: '⫑',
    csup: '⫐',
    csupe: '⫒',
    ctdot: '⋯',
    cudarrl: '⤸',
    cudarrr: '⤵',
    cuepr: '⋞',
    cuesc: '⋟',
    cularr: '↶',
    cularrp: '⤽',
    cup: '∪',
    cupbrcap: '⩈',
    cupcap: '⩆',
    cupcup: '⩊',
    cupdot: '⊍',
    cupor: '⩅',
    cups: '∪︀',
    curarr: '↷',
    curarrm: '⤼',
    curlyeqprec: '⋞',
    curlyeqsucc: '⋟',
    curlyvee: '⋎',
    curlywedge: '⋏',
    curren: '¤',
    curvearrowleft: '↶',
    curvearrowright: '↷',
    cuvee: '⋎',
    cuwed: '⋏',
    cwconint: '∲',
    cwint: '∱',
    cylcty: '⌭',
    dArr: '⇓',
    dHar: '⥥',
    dagger: '†',
    daleth: 'ℸ',
    darr: '↓',
    dash: '‐',
    dashv: '⊣',
    dbkarow: '⤏',
    dblac: '˝',
    dcaron: 'ď',
    dcy: 'д',
    dd: 'ⅆ',
    ddagger: '‡',
    ddarr: '⇊',
    ddotseq: '⩷',
    deg: '°',
    delta: 'δ',
    demptyv: '⦱',
    dfisht: '⥿',
    dfr: '𝔡',
    dharl: '⇃',
    dharr: '⇂',
    diam: '⋄',
    diamond: '⋄',
    diamondsuit: '♦',
    diams: '♦',
    die: '¨',
    digamma: 'ϝ',
    disin: '⋲',
    div: '÷',
    divide: '÷',
    divideontimes: '⋇',
    divonx: '⋇',
    djcy: 'ђ',
    dlcorn: '⌞',
    dlcrop: '⌍',
    dollar: '$',
    dopf: '𝕕',
    dot: '˙',
    doteq: '≐',
    doteqdot: '≑',
    dotminus: '∸',
    dotplus: '∔',
    dotsquare: '⊡',
    doublebarwedge: '⌆',
    downarrow: '↓',
    downdownarrows: '⇊',
    downharpoonleft: '⇃',
    downharpoonright: '⇂',
    drbkarow: '⤐',
    drcorn: '⌟',
    drcrop: '⌌',
    dscr: '𝒹',
    dscy: 'ѕ',
    dsol: '⧶',
    dstrok: 'đ',
    dtdot: '⋱',
    dtri: '▿',
    dtrif: '▾',
    duarr: '⇵',
    duhar: '⥯',
    dwangle: '⦦',
    dzcy: 'џ',
    dzigrarr: '⟿',
    eDDot: '⩷',
    eDot: '≑',
    eacute: 'é',
    easter: '⩮',
    ecaron: 'ě',
    ecir: '≖',
    ecirc: 'ê',
    ecolon: '≕',
    ecy: 'э',
    edot: 'ė',
    ee: 'ⅇ',
    efDot: '≒',
    efr: '𝔢',
    eg: '⪚',
    egrave: 'è',
    egs: '⪖',
    egsdot: '⪘',
    el: '⪙',
    elinters: '⏧',
    ell: 'ℓ',
    els: '⪕',
    elsdot: '⪗',
    emacr: 'ē',
    empty: '∅',
    emptyset: '∅',
    emptyv: '∅',
    emsp13: ' ',
    emsp14: ' ',
    emsp: ' ',
    eng: 'ŋ',
    ensp: ' ',
    eogon: 'ę',
    eopf: '𝕖',
    epar: '⋕',
    eparsl: '⧣',
    eplus: '⩱',
    epsi: 'ε',
    epsilon: 'ε',
    epsiv: 'ϵ',
    eqcirc: '≖',
    eqcolon: '≕',
    eqsim: '≂',
    eqslantgtr: '⪖',
    eqslantless: '⪕',
    equals: '=',
    equest: '≟',
    equiv: '≡',
    equivDD: '⩸',
    eqvparsl: '⧥',
    erDot: '≓',
    erarr: '⥱',
    escr: 'ℯ',
    esdot: '≐',
    esim: '≂',
    eta: 'η',
    eth: 'ð',
    euml: 'ë',
    euro: '€',
    excl: '!',
    exist: '∃',
    expectation: 'ℰ',
    exponentiale: 'ⅇ',
    fallingdotseq: '≒',
    fcy: 'ф',
    female: '♀',
    ffilig: 'ﬃ',
    fflig: 'ﬀ',
    ffllig: 'ﬄ',
    ffr: '𝔣',
    filig: 'ﬁ',
    fjlig: 'fj',
    flat: '♭',
    fllig: 'ﬂ',
    fltns: '▱',
    fnof: 'ƒ',
    fopf: '𝕗',
    forall: '∀',
    fork: '⋔',
    forkv: '⫙',
    fpartint: '⨍',
    frac12: '½',
    frac13: '⅓',
    frac14: '¼',
    frac15: '⅕',
    frac16: '⅙',
    frac18: '⅛',
    frac23: '⅔',
    frac25: '⅖',
    frac34: '¾',
    frac35: '⅗',
    frac38: '⅜',
    frac45: '⅘',
    frac56: '⅚',
    frac58: '⅝',
    frac78: '⅞',
    frasl: '⁄',
    frown: '⌢',
    fscr: '𝒻',
    gE: '≧',
    gEl: '⪌',
    gacute: 'ǵ',
    gamma: 'γ',
    gammad: 'ϝ',
    gap: '⪆',
    gbreve: 'ğ',
    gcirc: 'ĝ',
    gcy: 'г',
    gdot: 'ġ',
    ge: '≥',
    gel: '⋛',
    geq: '≥',
    geqq: '≧',
    geqslant: '⩾',
    ges: '⩾',
    gescc: '⪩',
    gesdot: '⪀',
    gesdoto: '⪂',
    gesdotol: '⪄',
    gesl: '⋛︀',
    gesles: '⪔',
    gfr: '𝔤',
    gg: '≫',
    ggg: '⋙',
    gimel: 'ℷ',
    gjcy: 'ѓ',
    gl: '≷',
    glE: '⪒',
    gla: '⪥',
    glj: '⪤',
    gnE: '≩',
    gnap: '⪊',
    gnapprox: '⪊',
    gne: '⪈',
    gneq: '⪈',
    gneqq: '≩',
    gnsim: '⋧',
    gopf: '𝕘',
    grave: '`',
    gscr: 'ℊ',
    gsim: '≳',
    gsime: '⪎',
    gsiml: '⪐',
    gt: '>',
    gtcc: '⪧',
    gtcir: '⩺',
    gtdot: '⋗',
    gtlPar: '⦕',
    gtquest: '⩼',
    gtrapprox: '⪆',
    gtrarr: '⥸',
    gtrdot: '⋗',
    gtreqless: '⋛',
    gtreqqless: '⪌',
    gtrless: '≷',
    gtrsim: '≳',
    gvertneqq: '≩︀',
    gvnE: '≩︀',
    hArr: '⇔',
    hairsp: ' ',
    half: '½',
    hamilt: 'ℋ',
    hardcy: 'ъ',
    harr: '↔',
    harrcir: '⥈',
    harrw: '↭',
    hbar: 'ℏ',
    hcirc: 'ĥ',
    hearts: '♥',
    heartsuit: '♥',
    hellip: '…',
    hercon: '⊹',
    hfr: '𝔥',
    hksearow: '⤥',
    hkswarow: '⤦',
    hoarr: '⇿',
    homtht: '∻',
    hookleftarrow: '↩',
    hookrightarrow: '↪',
    hopf: '𝕙',
    horbar: '―',
    hscr: '𝒽',
    hslash: 'ℏ',
    hstrok: 'ħ',
    hybull: '⁃',
    hyphen: '‐',
    iacute: 'í',
    ic: '⁣',
    icirc: 'î',
    icy: 'и',
    iecy: 'е',
    iexcl: '¡',
    iff: '⇔',
    ifr: '𝔦',
    igrave: 'ì',
    ii: 'ⅈ',
    iiiint: '⨌',
    iiint: '∭',
    iinfin: '⧜',
    iiota: '℩',
    ijlig: 'ĳ',
    imacr: 'ī',
    image: 'ℑ',
    imagline: 'ℐ',
    imagpart: 'ℑ',
    imath: 'ı',
    imof: '⊷',
    imped: 'Ƶ',
    in: '∈',
    incare: '℅',
    infin: '∞',
    infintie: '⧝',
    inodot: 'ı',
    int: '∫',
    intcal: '⊺',
    integers: 'ℤ',
    intercal: '⊺',
    intlarhk: '⨗',
    intprod: '⨼',
    iocy: 'ё',
    iogon: 'į',
    iopf: '𝕚',
    iota: 'ι',
    iprod: '⨼',
    iquest: '¿',
    iscr: '𝒾',
    isin: '∈',
    isinE: '⋹',
    isindot: '⋵',
    isins: '⋴',
    isinsv: '⋳',
    isinv: '∈',
    it: '⁢',
    itilde: 'ĩ',
    iukcy: 'і',
    iuml: 'ï',
    jcirc: 'ĵ',
    jcy: 'й',
    jfr: '𝔧',
    jmath: 'ȷ',
    jopf: '𝕛',
    jscr: '𝒿',
    jsercy: 'ј',
    jukcy: 'є',
    kappa: 'κ',
    kappav: 'ϰ',
    kcedil: 'ķ',
    kcy: 'к',
    kfr: '𝔨',
    kgreen: 'ĸ',
    khcy: 'х',
    kjcy: 'ќ',
    kopf: '𝕜',
    kscr: '𝓀',
    lAarr: '⇚',
    lArr: '⇐',
    lAtail: '⤛',
    lBarr: '⤎',
    lE: '≦',
    lEg: '⪋',
    lHar: '⥢',
    lacute: 'ĺ',
    laemptyv: '⦴',
    lagran: 'ℒ',
    lambda: 'λ',
    lang: '⟨',
    langd: '⦑',
    langle: '⟨',
    lap: '⪅',
    laquo: '«',
    larr: '←',
    larrb: '⇤',
    larrbfs: '⤟',
    larrfs: '⤝',
    larrhk: '↩',
    larrlp: '↫',
    larrpl: '⤹',
    larrsim: '⥳',
    larrtl: '↢',
    lat: '⪫',
    latail: '⤙',
    late: '⪭',
    lates: '⪭︀',
    lbarr: '⤌',
    lbbrk: '❲',
    lbrace: '{',
    lbrack: '[',
    lbrke: '⦋',
    lbrksld: '⦏',
    lbrkslu: '⦍',
    lcaron: 'ľ',
    lcedil: 'ļ',
    lceil: '⌈',
    lcub: '{',
    lcy: 'л',
    ldca: '⤶',
    ldquo: '“',
    ldquor: '„',
    ldrdhar: '⥧',
    ldrushar: '⥋',
    ldsh: '↲',
    le: '≤',
    leftarrow: '←',
    leftarrowtail: '↢',
    leftharpoondown: '↽',
    leftharpoonup: '↼',
    leftleftarrows: '⇇',
    leftrightarrow: '↔',
    leftrightarrows: '⇆',
    leftrightharpoons: '⇋',
    leftrightsquigarrow: '↭',
    leftthreetimes: '⋋',
    leg: '⋚',
    leq: '≤',
    leqq: '≦',
    leqslant: '⩽',
    les: '⩽',
    lescc: '⪨',
    lesdot: '⩿',
    lesdoto: '⪁',
    lesdotor: '⪃',
    lesg: '⋚︀',
    lesges: '⪓',
    lessapprox: '⪅',
    lessdot: '⋖',
    lesseqgtr: '⋚',
    lesseqqgtr: '⪋',
    lessgtr: '≶',
    lesssim: '≲',
    lfisht: '⥼',
    lfloor: '⌊',
    lfr: '𝔩',
    lg: '≶',
    lgE: '⪑',
    lhard: '↽',
    lharu: '↼',
    lharul: '⥪',
    lhblk: '▄',
    ljcy: 'љ',
    ll: '≪',
    llarr: '⇇',
    llcorner: '⌞',
    llhard: '⥫',
    lltri: '◺',
    lmidot: 'ŀ',
    lmoust: '⎰',
    lmoustache: '⎰',
    lnE: '≨',
    lnap: '⪉',
    lnapprox: '⪉',
    lne: '⪇',
    lneq: '⪇',
    lneqq: '≨',
    lnsim: '⋦',
    loang: '⟬',
    loarr: '⇽',
    lobrk: '⟦',
    longleftarrow: '⟵',
    longleftrightarrow: '⟷',
    longmapsto: '⟼',
    longrightarrow: '⟶',
    looparrowleft: '↫',
    looparrowright: '↬',
    lopar: '⦅',
    lopf: '𝕝',
    loplus: '⨭',
    lotimes: '⨴',
    lowast: '∗',
    lowbar: '_',
    loz: '◊',
    lozenge: '◊',
    lozf: '⧫',
    lpar: '(',
    lparlt: '⦓',
    lrarr: '⇆',
    lrcorner: '⌟',
    lrhar: '⇋',
    lrhard: '⥭',
    lrm: '‎',
    lrtri: '⊿',
    lsaquo: '‹',
    lscr: '𝓁',
    lsh: '↰',
    lsim: '≲',
    lsime: '⪍',
    lsimg: '⪏',
    lsqb: '[',
    lsquo: '‘',
    lsquor: '‚',
    lstrok: 'ł',
    lt: '<',
    ltcc: '⪦',
    ltcir: '⩹',
    ltdot: '⋖',
    lthree: '⋋',
    ltimes: '⋉',
    ltlarr: '⥶',
    ltquest: '⩻',
    ltrPar: '⦖',
    ltri: '◃',
    ltrie: '⊴',
    ltrif: '◂',
    lurdshar: '⥊',
    luruhar: '⥦',
    lvertneqq: '≨︀',
    lvnE: '≨︀',
    mDDot: '∺',
    macr: '¯',
    male: '♂',
    malt: '✠',
    maltese: '✠',
    map: '↦',
    mapsto: '↦',
    mapstodown: '↧',
    mapstoleft: '↤',
    mapstoup: '↥',
    marker: '▮',
    mcomma: '⨩',
    mcy: 'м',
    mdash: '—',
    measuredangle: '∡',
    mfr: '𝔪',
    mho: '℧',
    micro: 'µ',
    mid: '∣',
    midast: '*',
    midcir: '⫰',
    middot: '·',
    minus: '−',
    minusb: '⊟',
    minusd: '∸',
    minusdu: '⨪',
    mlcp: '⫛',
    mldr: '…',
    mnplus: '∓',
    models: '⊧',
    mopf: '𝕞',
    mp: '∓',
    mscr: '𝓂',
    mstpos: '∾',
    mu: 'μ',
    multimap: '⊸',
    mumap: '⊸',
    nGg: '⋙̸',
    nGt: '≫⃒',
    nGtv: '≫̸',
    nLeftarrow: '⇍',
    nLeftrightarrow: '⇎',
    nLl: '⋘̸',
    nLt: '≪⃒',
    nLtv: '≪̸',
    nRightarrow: '⇏',
    nVDash: '⊯',
    nVdash: '⊮',
    nabla: '∇',
    nacute: 'ń',
    nang: '∠⃒',
    nap: '≉',
    napE: '⩰̸',
    napid: '≋̸',
    napos: 'ŉ',
    napprox: '≉',
    natur: '♮',
    natural: '♮',
    naturals: 'ℕ',
    nbsp: ' ',
    nbump: '≎̸',
    nbumpe: '≏̸',
    ncap: '⩃',
    ncaron: 'ň',
    ncedil: 'ņ',
    ncong: '≇',
    ncongdot: '⩭̸',
    ncup: '⩂',
    ncy: 'н',
    ndash: '–',
    ne: '≠',
    neArr: '⇗',
    nearhk: '⤤',
    nearr: '↗',
    nearrow: '↗',
    nedot: '≐̸',
    nequiv: '≢',
    nesear: '⤨',
    nesim: '≂̸',
    nexist: '∄',
    nexists: '∄',
    nfr: '𝔫',
    ngE: '≧̸',
    nge: '≱',
    ngeq: '≱',
    ngeqq: '≧̸',
    ngeqslant: '⩾̸',
    nges: '⩾̸',
    ngsim: '≵',
    ngt: '≯',
    ngtr: '≯',
    nhArr: '⇎',
    nharr: '↮',
    nhpar: '⫲',
    ni: '∋',
    nis: '⋼',
    nisd: '⋺',
    niv: '∋',
    njcy: 'њ',
    nlArr: '⇍',
    nlE: '≦̸',
    nlarr: '↚',
    nldr: '‥',
    nle: '≰',
    nleftarrow: '↚',
    nleftrightarrow: '↮',
    nleq: '≰',
    nleqq: '≦̸',
    nleqslant: '⩽̸',
    nles: '⩽̸',
    nless: '≮',
    nlsim: '≴',
    nlt: '≮',
    nltri: '⋪',
    nltrie: '⋬',
    nmid: '∤',
    nopf: '𝕟',
    not: '¬',
    notin: '∉',
    notinE: '⋹̸',
    notindot: '⋵̸',
    notinva: '∉',
    notinvb: '⋷',
    notinvc: '⋶',
    notni: '∌',
    notniva: '∌',
    notnivb: '⋾',
    notnivc: '⋽',
    npar: '∦',
    nparallel: '∦',
    nparsl: '⫽⃥',
    npart: '∂̸',
    npolint: '⨔',
    npr: '⊀',
    nprcue: '⋠',
    npre: '⪯̸',
    nprec: '⊀',
    npreceq: '⪯̸',
    nrArr: '⇏',
    nrarr: '↛',
    nrarrc: '⤳̸',
    nrarrw: '↝̸',
    nrightarrow: '↛',
    nrtri: '⋫',
    nrtrie: '⋭',
    nsc: '⊁',
    nsccue: '⋡',
    nsce: '⪰̸',
    nscr: '𝓃',
    nshortmid: '∤',
    nshortparallel: '∦',
    nsim: '≁',
    nsime: '≄',
    nsimeq: '≄',
    nsmid: '∤',
    nspar: '∦',
    nsqsube: '⋢',
    nsqsupe: '⋣',
    nsub: '⊄',
    nsubE: '⫅̸',
    nsube: '⊈',
    nsubset: '⊂⃒',
    nsubseteq: '⊈',
    nsubseteqq: '⫅̸',
    nsucc: '⊁',
    nsucceq: '⪰̸',
    nsup: '⊅',
    nsupE: '⫆̸',
    nsupe: '⊉',
    nsupset: '⊃⃒',
    nsupseteq: '⊉',
    nsupseteqq: '⫆̸',
    ntgl: '≹',
    ntilde: 'ñ',
    ntlg: '≸',
    ntriangleleft: '⋪',
    ntrianglelefteq: '⋬',
    ntriangleright: '⋫',
    ntrianglerighteq: '⋭',
    nu: 'ν',
    num: '#',
    numero: '№',
    numsp: ' ',
    nvDash: '⊭',
    nvHarr: '⤄',
    nvap: '≍⃒',
    nvdash: '⊬',
    nvge: '≥⃒',
    nvgt: '>⃒',
    nvinfin: '⧞',
    nvlArr: '⤂',
    nvle: '≤⃒',
    nvlt: '<⃒',
    nvltrie: '⊴⃒',
    nvrArr: '⤃',
    nvrtrie: '⊵⃒',
    nvsim: '∼⃒',
    nwArr: '⇖',
    nwarhk: '⤣',
    nwarr: '↖',
    nwarrow: '↖',
    nwnear: '⤧',
    oS: 'Ⓢ',
    oacute: 'ó',
    oast: '⊛',
    ocir: '⊚',
    ocirc: 'ô',
    ocy: 'о',
    odash: '⊝',
    odblac: 'ő',
    odiv: '⨸',
    odot: '⊙',
    odsold: '⦼',
    oelig: 'œ',
    ofcir: '⦿',
    ofr: '𝔬',
    ogon: '˛',
    ograve: 'ò',
    ogt: '⧁',
    ohbar: '⦵',
    ohm: 'Ω',
    oint: '∮',
    olarr: '↺',
    olcir: '⦾',
    olcross: '⦻',
    oline: '‾',
    olt: '⧀',
    omacr: 'ō',
    omega: 'ω',
    omicron: 'ο',
    omid: '⦶',
    ominus: '⊖',
    oopf: '𝕠',
    opar: '⦷',
    operp: '⦹',
    oplus: '⊕',
    or: '∨',
    orarr: '↻',
    ord: '⩝',
    order: 'ℴ',
    orderof: 'ℴ',
    ordf: 'ª',
    ordm: 'º',
    origof: '⊶',
    oror: '⩖',
    orslope: '⩗',
    orv: '⩛',
    oscr: 'ℴ',
    oslash: 'ø',
    osol: '⊘',
    otilde: 'õ',
    otimes: '⊗',
    otimesas: '⨶',
    ouml: 'ö',
    ovbar: '⌽',
    par: '∥',
    para: '¶',
    parallel: '∥',
    parsim: '⫳',
    parsl: '⫽',
    part: '∂',
    pcy: 'п',
    percnt: '%',
    period: '.',
    permil: '‰',
    perp: '⊥',
    pertenk: '‱',
    pfr: '𝔭',
    phi: 'φ',
    phiv: 'ϕ',
    phmmat: 'ℳ',
    phone: '☎',
    pi: 'π',
    pitchfork: '⋔',
    piv: 'ϖ',
    planck: 'ℏ',
    planckh: 'ℎ',
    plankv: 'ℏ',
    plus: '+',
    plusacir: '⨣',
    plusb: '⊞',
    pluscir: '⨢',
    plusdo: '∔',
    plusdu: '⨥',
    pluse: '⩲',
    plusmn: '±',
    plussim: '⨦',
    plustwo: '⨧',
    pm: '±',
    pointint: '⨕',
    popf: '𝕡',
    pound: '£',
    pr: '≺',
    prE: '⪳',
    prap: '⪷',
    prcue: '≼',
    pre: '⪯',
    prec: '≺',
    precapprox: '⪷',
    preccurlyeq: '≼',
    preceq: '⪯',
    precnapprox: '⪹',
    precneqq: '⪵',
    precnsim: '⋨',
    precsim: '≾',
    prime: '′',
    primes: 'ℙ',
    prnE: '⪵',
    prnap: '⪹',
    prnsim: '⋨',
    prod: '∏',
    profalar: '⌮',
    profline: '⌒',
    profsurf: '⌓',
    prop: '∝',
    propto: '∝',
    prsim: '≾',
    prurel: '⊰',
    pscr: '𝓅',
    psi: 'ψ',
    puncsp: ' ',
    qfr: '𝔮',
    qint: '⨌',
    qopf: '𝕢',
    qprime: '⁗',
    qscr: '𝓆',
    quaternions: 'ℍ',
    quatint: '⨖',
    quest: '?',
    questeq: '≟',
    quot: '"',
    rAarr: '⇛',
    rArr: '⇒',
    rAtail: '⤜',
    rBarr: '⤏',
    rHar: '⥤',
    race: '∽̱',
    racute: 'ŕ',
    radic: '√',
    raemptyv: '⦳',
    rang: '⟩',
    rangd: '⦒',
    range: '⦥',
    rangle: '⟩',
    raquo: '»',
    rarr: '→',
    rarrap: '⥵',
    rarrb: '⇥',
    rarrbfs: '⤠',
    rarrc: '⤳',
    rarrfs: '⤞',
    rarrhk: '↪',
    rarrlp: '↬',
    rarrpl: '⥅',
    rarrsim: '⥴',
    rarrtl: '↣',
    rarrw: '↝',
    ratail: '⤚',
    ratio: '∶',
    rationals: 'ℚ',
    rbarr: '⤍',
    rbbrk: '❳',
    rbrace: '}',
    rbrack: ']',
    rbrke: '⦌',
    rbrksld: '⦎',
    rbrkslu: '⦐',
    rcaron: 'ř',
    rcedil: 'ŗ',
    rceil: '⌉',
    rcub: '}',
    rcy: 'р',
    rdca: '⤷',
    rdldhar: '⥩',
    rdquo: '”',
    rdquor: '”',
    rdsh: '↳',
    real: 'ℜ',
    realine: 'ℛ',
    realpart: 'ℜ',
    reals: 'ℝ',
    rect: '▭',
    reg: '®',
    rfisht: '⥽',
    rfloor: '⌋',
    rfr: '𝔯',
    rhard: '⇁',
    rharu: '⇀',
    rharul: '⥬',
    rho: 'ρ',
    rhov: 'ϱ',
    rightarrow: '→',
    rightarrowtail: '↣',
    rightharpoondown: '⇁',
    rightharpoonup: '⇀',
    rightleftarrows: '⇄',
    rightleftharpoons: '⇌',
    rightrightarrows: '⇉',
    rightsquigarrow: '↝',
    rightthreetimes: '⋌',
    ring: '˚',
    risingdotseq: '≓',
    rlarr: '⇄',
    rlhar: '⇌',
    rlm: '‏',
    rmoust: '⎱',
    rmoustache: '⎱',
    rnmid: '⫮',
    roang: '⟭',
    roarr: '⇾',
    robrk: '⟧',
    ropar: '⦆',
    ropf: '𝕣',
    roplus: '⨮',
    rotimes: '⨵',
    rpar: ')',
    rpargt: '⦔',
    rppolint: '⨒',
    rrarr: '⇉',
    rsaquo: '›',
    rscr: '𝓇',
    rsh: '↱',
    rsqb: ']',
    rsquo: '’',
    rsquor: '’',
    rthree: '⋌',
    rtimes: '⋊',
    rtri: '▹',
    rtrie: '⊵',
    rtrif: '▸',
    rtriltri: '⧎',
    ruluhar: '⥨',
    rx: '℞',
    sacute: 'ś',
    sbquo: '‚',
    sc: '≻',
    scE: '⪴',
    scap: '⪸',
    scaron: 'š',
    sccue: '≽',
    sce: '⪰',
    scedil: 'ş',
    scirc: 'ŝ',
    scnE: '⪶',
    scnap: '⪺',
    scnsim: '⋩',
    scpolint: '⨓',
    scsim: '≿',
    scy: 'с',
    sdot: '⋅',
    sdotb: '⊡',
    sdote: '⩦',
    seArr: '⇘',
    searhk: '⤥',
    searr: '↘',
    searrow: '↘',
    sect: '§',
    semi: ';',
    seswar: '⤩',
    setminus: '∖',
    setmn: '∖',
    sext: '✶',
    sfr: '𝔰',
    sfrown: '⌢',
    sharp: '♯',
    shchcy: 'щ',
    shcy: 'ш',
    shortmid: '∣',
    shortparallel: '∥',
    shy: '­',
    sigma: 'σ',
    sigmaf: 'ς',
    sigmav: 'ς',
    sim: '∼',
    simdot: '⩪',
    sime: '≃',
    simeq: '≃',
    simg: '⪞',
    simgE: '⪠',
    siml: '⪝',
    simlE: '⪟',
    simne: '≆',
    simplus: '⨤',
    simrarr: '⥲',
    slarr: '←',
    smallsetminus: '∖',
    smashp: '⨳',
    smeparsl: '⧤',
    smid: '∣',
    smile: '⌣',
    smt: '⪪',
    smte: '⪬',
    smtes: '⪬︀',
    softcy: 'ь',
    sol: '/',
    solb: '⧄',
    solbar: '⌿',
    sopf: '𝕤',
    spades: '♠',
    spadesuit: '♠',
    spar: '∥',
    sqcap: '⊓',
    sqcaps: '⊓︀',
    sqcup: '⊔',
    sqcups: '⊔︀',
    sqsub: '⊏',
    sqsube: '⊑',
    sqsubset: '⊏',
    sqsubseteq: '⊑',
    sqsup: '⊐',
    sqsupe: '⊒',
    sqsupset: '⊐',
    sqsupseteq: '⊒',
    squ: '□',
    square: '□',
    squarf: '▪',
    squf: '▪',
    srarr: '→',
    sscr: '𝓈',
    ssetmn: '∖',
    ssmile: '⌣',
    sstarf: '⋆',
    star: '☆',
    starf: '★',
    straightepsilon: 'ϵ',
    straightphi: 'ϕ',
    strns: '¯',
    sub: '⊂',
    subE: '⫅',
    subdot: '⪽',
    sube: '⊆',
    subedot: '⫃',
    submult: '⫁',
    subnE: '⫋',
    subne: '⊊',
    subplus: '⪿',
    subrarr: '⥹',
    subset: '⊂',
    subseteq: '⊆',
    subseteqq: '⫅',
    subsetneq: '⊊',
    subsetneqq: '⫋',
    subsim: '⫇',
    subsub: '⫕',
    subsup: '⫓',
    succ: '≻',
    succapprox: '⪸',
    succcurlyeq: '≽',
    succeq: '⪰',
    succnapprox: '⪺',
    succneqq: '⪶',
    succnsim: '⋩',
    succsim: '≿',
    sum: '∑',
    sung: '♪',
    sup1: '¹',
    sup2: '²',
    sup3: '³',
    sup: '⊃',
    supE: '⫆',
    supdot: '⪾',
    supdsub: '⫘',
    supe: '⊇',
    supedot: '⫄',
    suphsol: '⟉',
    suphsub: '⫗',
    suplarr: '⥻',
    supmult: '⫂',
    supnE: '⫌',
    supne: '⊋',
    supplus: '⫀',
    supset: '⊃',
    supseteq: '⊇',
    supseteqq: '⫆',
    supsetneq: '⊋',
    supsetneqq: '⫌',
    supsim: '⫈',
    supsub: '⫔',
    supsup: '⫖',
    swArr: '⇙',
    swarhk: '⤦',
    swarr: '↙',
    swarrow: '↙',
    swnwar: '⤪',
    szlig: 'ß',
    target: '⌖',
    tau: 'τ',
    tbrk: '⎴',
    tcaron: 'ť',
    tcedil: 'ţ',
    tcy: 'т',
    tdot: '⃛',
    telrec: '⌕',
    tfr: '𝔱',
    there4: '∴',
    therefore: '∴',
    theta: 'θ',
    thetasym: 'ϑ',
    thetav: 'ϑ',
    thickapprox: '≈',
    thicksim: '∼',
    thinsp: ' ',
    thkap: '≈',
    thksim: '∼',
    thorn: 'þ',
    tilde: '˜',
    times: '×',
    timesb: '⊠',
    timesbar: '⨱',
    timesd: '⨰',
    tint: '∭',
    toea: '⤨',
    top: '⊤',
    topbot: '⌶',
    topcir: '⫱',
    topf: '𝕥',
    topfork: '⫚',
    tosa: '⤩',
    tprime: '‴',
    trade: '™',
    triangle: '▵',
    triangledown: '▿',
    triangleleft: '◃',
    trianglelefteq: '⊴',
    triangleq: '≜',
    triangleright: '▹',
    trianglerighteq: '⊵',
    tridot: '◬',
    trie: '≜',
    triminus: '⨺',
    triplus: '⨹',
    trisb: '⧍',
    tritime: '⨻',
    trpezium: '⏢',
    tscr: '𝓉',
    tscy: 'ц',
    tshcy: 'ћ',
    tstrok: 'ŧ',
    twixt: '≬',
    twoheadleftarrow: '↞',
    twoheadrightarrow: '↠',
    uArr: '⇑',
    uHar: '⥣',
    uacute: 'ú',
    uarr: '↑',
    ubrcy: 'ў',
    ubreve: 'ŭ',
    ucirc: 'û',
    ucy: 'у',
    udarr: '⇅',
    udblac: 'ű',
    udhar: '⥮',
    ufisht: '⥾',
    ufr: '𝔲',
    ugrave: 'ù',
    uharl: '↿',
    uharr: '↾',
    uhblk: '▀',
    ulcorn: '⌜',
    ulcorner: '⌜',
    ulcrop: '⌏',
    ultri: '◸',
    umacr: 'ū',
    uml: '¨',
    uogon: 'ų',
    uopf: '𝕦',
    uparrow: '↑',
    updownarrow: '↕',
    upharpoonleft: '↿',
    upharpoonright: '↾',
    uplus: '⊎',
    upsi: 'υ',
    upsih: 'ϒ',
    upsilon: 'υ',
    upuparrows: '⇈',
    urcorn: '⌝',
    urcorner: '⌝',
    urcrop: '⌎',
    uring: 'ů',
    urtri: '◹',
    uscr: '𝓊',
    utdot: '⋰',
    utilde: 'ũ',
    utri: '▵',
    utrif: '▴',
    uuarr: '⇈',
    uuml: 'ü',
    uwangle: '⦧',
    vArr: '⇕',
    vBar: '⫨',
    vBarv: '⫩',
    vDash: '⊨',
    vangrt: '⦜',
    varepsilon: 'ϵ',
    varkappa: 'ϰ',
    varnothing: '∅',
    varphi: 'ϕ',
    varpi: 'ϖ',
    varpropto: '∝',
    varr: '↕',
    varrho: 'ϱ',
    varsigma: 'ς',
    varsubsetneq: '⊊︀',
    varsubsetneqq: '⫋︀',
    varsupsetneq: '⊋︀',
    varsupsetneqq: '⫌︀',
    vartheta: 'ϑ',
    vartriangleleft: '⊲',
    vartriangleright: '⊳',
    vcy: 'в',
    vdash: '⊢',
    vee: '∨',
    veebar: '⊻',
    veeeq: '≚',
    vellip: '⋮',
    verbar: '|',
    vert: '|',
    vfr: '𝔳',
    vltri: '⊲',
    vnsub: '⊂⃒',
    vnsup: '⊃⃒',
    vopf: '𝕧',
    vprop: '∝',
    vrtri: '⊳',
    vscr: '𝓋',
    vsubnE: '⫋︀',
    vsubne: '⊊︀',
    vsupnE: '⫌︀',
    vsupne: '⊋︀',
    vzigzag: '⦚',
    wcirc: 'ŵ',
    wedbar: '⩟',
    wedge: '∧',
    wedgeq: '≙',
    weierp: '℘',
    wfr: '𝔴',
    wopf: '𝕨',
    wp: '℘',
    wr: '≀',
    wreath: '≀',
    wscr: '𝓌',
    xcap: '⋂',
    xcirc: '◯',
    xcup: '⋃',
    xdtri: '▽',
    xfr: '𝔵',
    xhArr: '⟺',
    xharr: '⟷',
    xi: 'ξ',
    xlArr: '⟸',
    xlarr: '⟵',
    xmap: '⟼',
    xnis: '⋻',
    xodot: '⨀',
    xopf: '𝕩',
    xoplus: '⨁',
    xotime: '⨂',
    xrArr: '⟹',
    xrarr: '⟶',
    xscr: '𝓍',
    xsqcup: '⨆',
    xuplus: '⨄',
    xutri: '△',
    xvee: '⋁',
    xwedge: '⋀',
    yacute: 'ý',
    yacy: 'я',
    ycirc: 'ŷ',
    ycy: 'ы',
    yen: '¥',
    yfr: '𝔶',
    yicy: 'ї',
    yopf: '𝕪',
    yscr: '𝓎',
    yucy: 'ю',
    yuml: 'ÿ',
    zacute: 'ź',
    zcaron: 'ž',
    zcy: 'з',
    zdot: 'ż',
    zeetrf: 'ℨ',
    zeta: 'ζ',
    zfr: '𝔷',
    zhcy: 'ж',
    zigrarr: '⇝',
    zopf: '𝕫',
    zscr: '𝓏',
    zwj: '‍',
    zwnj: '‌',
  },
  ml = {}.hasOwnProperty
function yl(e) {
  return !!ml.call(gl, e) && gl[e]
}
const vl = {
  name: 'characterReference',
  tokenize: function (e, t, n) {
    const r = this
    let o,
      i,
      a = 0
    return function (t) {
      return (
        e.enter('characterReference'),
        e.enter('characterReferenceMarker'),
        e.consume(t),
        e.exit('characterReferenceMarker'),
        l
      )
    }
    function l(t) {
      return 35 === t
        ? (e.enter('characterReferenceMarkerNumeric'),
          e.consume(t),
          e.exit('characterReferenceMarkerNumeric'),
          u)
        : (e.enter('characterReferenceValue'), (o = 31), (i = _a), s(t))
    }
    function u(t) {
      return 88 === t || 120 === t
        ? (e.enter('characterReferenceMarkerHexadecimal'),
          e.consume(t),
          e.exit('characterReferenceMarkerHexadecimal'),
          e.enter('characterReferenceValue'),
          (o = 6),
          (i = Da),
          s)
        : (e.enter('characterReferenceValue'), (o = 7), (i = ja), s(t))
    }
    function s(l) {
      let u
      return 59 === l && a
        ? ((u = e.exit('characterReferenceValue')),
          i !== _a || yl(r.sliceSerialize(u))
            ? (e.enter('characterReferenceMarker'),
              e.consume(l),
              e.exit('characterReferenceMarker'),
              e.exit('characterReference'),
              t)
            : n(l))
        : i(l) && a++ < o
          ? (e.consume(l), s)
          : n(l)
    }
  },
}
const bl = {
  name: 'codeFenced',
  tokenize: function (e, t, n) {
    const r = this,
      o = {
        tokenize: function (e, t, n) {
          let r = 0
          return Wa(
            e,
            o,
            'linePrefix',
            this.parser.constructs.disable.null.includes('codeIndented')
              ? void 0
              : 4
          )
          function o(t) {
            return (
              e.enter('codeFencedFence'),
              e.enter('codeFencedFenceSequence'),
              i(t)
            )
          }
          function i(t) {
            return t === u
              ? (e.consume(t), r++, i)
              : r < s
                ? n(t)
                : (e.exit('codeFencedFenceSequence'), Wa(e, a, 'whitespace')(t))
          }
          function a(r) {
            return null === r || Ma(r)
              ? (e.exit('codeFencedFence'), t(r))
              : n(r)
          }
        },
        partial: !0,
      },
      i = {
        tokenize: function (e, t, n) {
          const r = this
          return o
          function o(t) {
            return e.enter('lineEnding'), e.consume(t), e.exit('lineEnding'), i
          }
          function i(e) {
            return r.parser.lazy[r.now().line] ? n(e) : t(e)
          }
        },
        partial: !0,
      },
      a = this.events[this.events.length - 1],
      l =
        a && 'linePrefix' === a[1].type
          ? a[2].sliceSerialize(a[1], !0).length
          : 0
    let u,
      s = 0
    return function (t) {
      return (
        e.enter('codeFenced'),
        e.enter('codeFencedFence'),
        e.enter('codeFencedFenceSequence'),
        (u = t),
        c(t)
      )
    }
    function c(t) {
      return t === u
        ? (e.consume(t), s++, c)
        : (e.exit('codeFencedFenceSequence'),
          s < 3 ? n(t) : Wa(e, f, 'whitespace')(t))
    }
    function f(t) {
      return null === t || Ma(t)
        ? g(t)
        : (e.enter('codeFencedFenceInfo'),
          e.enter('chunkString', { contentType: 'string' }),
          p(t))
    }
    function p(t) {
      return null === t || za(t)
        ? (e.exit('chunkString'),
          e.exit('codeFencedFenceInfo'),
          Wa(e, d, 'whitespace')(t))
        : 96 === t && t === u
          ? n(t)
          : (e.consume(t), p)
    }
    function d(t) {
      return null === t || Ma(t)
        ? g(t)
        : (e.enter('codeFencedFenceMeta'),
          e.enter('chunkString', { contentType: 'string' }),
          h(t))
    }
    function h(t) {
      return null === t || Ma(t)
        ? (e.exit('chunkString'), e.exit('codeFencedFenceMeta'), g(t))
        : 96 === t && t === u
          ? n(t)
          : (e.consume(t), h)
    }
    function g(n) {
      return e.exit('codeFencedFence'), r.interrupt ? t(n) : m(n)
    }
    function m(t) {
      return null === t
        ? v(t)
        : Ma(t)
          ? e.attempt(
              i,
              e.attempt(o, v, l ? Wa(e, m, 'linePrefix', l + 1) : m),
              v
            )(t)
          : (e.enter('codeFlowValue'), y(t))
    }
    function y(t) {
      return null === t || Ma(t)
        ? (e.exit('codeFlowValue'), m(t))
        : (e.consume(t), y)
    }
    function v(n) {
      return e.exit('codeFenced'), t(n)
    }
  },
  concrete: !0,
}
const wl = {
    name: 'codeIndented',
    tokenize: function (e, t, n) {
      const r = this
      return function (t) {
        return e.enter('codeIndented'), Wa(e, o, 'linePrefix', 5)(t)
      }
      function o(e) {
        const t = r.events[r.events.length - 1]
        return t &&
          'linePrefix' === t[1].type &&
          t[2].sliceSerialize(t[1], !0).length >= 4
          ? i(e)
          : n(e)
      }
      function i(t) {
        return null === t
          ? l(t)
          : Ma(t)
            ? e.attempt(xl, i, l)(t)
            : (e.enter('codeFlowValue'), a(t))
      }
      function a(t) {
        return null === t || Ma(t)
          ? (e.exit('codeFlowValue'), i(t))
          : (e.consume(t), a)
      }
      function l(n) {
        return e.exit('codeIndented'), t(n)
      }
    },
  },
  xl = {
    tokenize: function (e, t, n) {
      const r = this
      return o
      function o(t) {
        return r.parser.lazy[r.now().line]
          ? n(t)
          : Ma(t)
            ? (e.enter('lineEnding'), e.consume(t), e.exit('lineEnding'), o)
            : Wa(e, i, 'linePrefix', 5)(t)
      }
      function i(e) {
        const i = r.events[r.events.length - 1]
        return i &&
          'linePrefix' === i[1].type &&
          i[2].sliceSerialize(i[1], !0).length >= 4
          ? t(e)
          : Ma(e)
            ? o(e)
            : n(e)
      }
    },
    partial: !0,
  }
function kl(e, t, n, r, o, i, a, l, u) {
  const s = u || Number.POSITIVE_INFINITY
  let c = 0
  return function (t) {
    if (60 === t)
      return e.enter(r), e.enter(o), e.enter(i), e.consume(t), e.exit(i), f
    return null === t || 41 === t || Ba(t)
      ? n(t)
      : (e.enter(r),
        e.enter(a),
        e.enter(l),
        e.enter('chunkString', { contentType: 'string' }),
        h(t))
  }
  function f(n) {
    return 62 === n
      ? (e.enter(i), e.consume(n), e.exit(i), e.exit(o), e.exit(r), t)
      : (e.enter(l), e.enter('chunkString', { contentType: 'string' }), p(n))
  }
  function p(t) {
    return 62 === t
      ? (e.exit('chunkString'), e.exit(l), f(t))
      : null === t || 60 === t || Ma(t)
        ? n(t)
        : (e.consume(t), 92 === t ? d : p)
  }
  function d(t) {
    return 60 === t || 62 === t || 92 === t ? (e.consume(t), p) : p(t)
  }
  function h(o) {
    return 40 === o
      ? ++c > s
        ? n(o)
        : (e.consume(o), h)
      : 41 === o
        ? c--
          ? (e.consume(o), h)
          : (e.exit('chunkString'), e.exit(l), e.exit(a), e.exit(r), t(o))
        : null === o || za(o)
          ? c
            ? n(o)
            : (e.exit('chunkString'), e.exit(l), e.exit(a), e.exit(r), t(o))
          : Ba(o)
            ? n(o)
            : (e.consume(o), 92 === o ? g : h)
  }
  function g(t) {
    return 40 === t || 41 === t || 92 === t ? (e.consume(t), h) : h(t)
  }
}
function Sl(e, t, n, r, o, i) {
  const a = this
  let l,
    u = 0
  return function (t) {
    return e.enter(r), e.enter(o), e.consume(t), e.exit(o), e.enter(i), s
  }
  function s(f) {
    return null === f ||
      91 === f ||
      (93 === f && !l) ||
      (94 === f && !u && '_hiddenFootnoteSupport' in a.parser.constructs) ||
      u > 999
      ? n(f)
      : 93 === f
        ? (e.exit(i), e.enter(o), e.consume(f), e.exit(o), e.exit(r), t)
        : Ma(f)
          ? (e.enter('lineEnding'), e.consume(f), e.exit('lineEnding'), s)
          : (e.enter('chunkString', { contentType: 'string' }), c(f))
  }
  function c(t) {
    return null === t || 91 === t || 93 === t || Ma(t) || u++ > 999
      ? (e.exit('chunkString'), s(t))
      : (e.consume(t), (l = l || !Ua(t)), 92 === t ? f : c)
  }
  function f(t) {
    return 91 === t || 92 === t || 93 === t ? (e.consume(t), u++, c) : c(t)
  }
}
function El(e, t, n, r, o, i) {
  let a
  return function (t) {
    return (
      e.enter(r),
      e.enter(o),
      e.consume(t),
      e.exit(o),
      (a = 40 === t ? 41 : t),
      l
    )
  }
  function l(n) {
    return n === a
      ? (e.enter(o), e.consume(n), e.exit(o), e.exit(r), t)
      : (e.enter(i), u(n))
  }
  function u(t) {
    return t === a
      ? (e.exit(i), l(a))
      : null === t
        ? n(t)
        : Ma(t)
          ? (e.enter('lineEnding'),
            e.consume(t),
            e.exit('lineEnding'),
            Wa(e, u, 'linePrefix'))
          : (e.enter('chunkString', { contentType: 'string' }), s(t))
  }
  function s(t) {
    return t === a || null === t || Ma(t)
      ? (e.exit('chunkString'), u(t))
      : (e.consume(t), 92 === t ? c : s)
  }
  function c(t) {
    return t === a || 92 === t ? (e.consume(t), s) : s(t)
  }
}
function Cl(e, t) {
  let n
  return function r(o) {
    if (Ma(o))
      return (
        e.enter('lineEnding'), e.consume(o), e.exit('lineEnding'), (n = !0), r
      )
    return Ua(o) ? Wa(e, r, n ? 'linePrefix' : 'lineSuffix')(o) : t(o)
  }
}
function Ol(e) {
  return e
    .replace(/[\t\n\r ]+/g, ' ')
    .replace(/^ | $/g, '')
    .toLowerCase()
    .toUpperCase()
}
const Al = {
    name: 'definition',
    tokenize: function (e, t, n) {
      const r = this
      let o
      return function (t) {
        return (
          e.enter('definition'),
          Sl.call(
            r,
            e,
            i,
            n,
            'definitionLabel',
            'definitionLabelMarker',
            'definitionLabelString'
          )(t)
        )
      }
      function i(t) {
        return (
          (o = Ol(
            r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1)
          )),
          58 === t
            ? (e.enter('definitionMarker'),
              e.consume(t),
              e.exit('definitionMarker'),
              Cl(
                e,
                kl(
                  e,
                  e.attempt(Pl, Wa(e, a, 'whitespace'), Wa(e, a, 'whitespace')),
                  n,
                  'definitionDestination',
                  'definitionDestinationLiteral',
                  'definitionDestinationLiteralMarker',
                  'definitionDestinationRaw',
                  'definitionDestinationString'
                )
              ))
            : n(t)
        )
      }
      function a(i) {
        return null === i || Ma(i)
          ? (e.exit('definition'),
            r.parser.defined.includes(o) || r.parser.defined.push(o),
            t(i))
          : n(i)
      }
    },
  },
  Pl = {
    tokenize: function (e, t, n) {
      return function (t) {
        return za(t) ? Cl(e, r)(t) : n(t)
      }
      function r(t) {
        return 34 === t || 39 === t || 40 === t
          ? El(
              e,
              Wa(e, o, 'whitespace'),
              n,
              'definitionTitle',
              'definitionTitleMarker',
              'definitionTitleString'
            )(t)
          : n(t)
      }
      function o(e) {
        return null === e || Ma(e) ? t(e) : n(e)
      }
    },
    partial: !0,
  }
const Tl = [
    'address',
    'article',
    'aside',
    'base',
    'basefont',
    'blockquote',
    'body',
    'caption',
    'center',
    'col',
    'colgroup',
    'dd',
    'details',
    'dialog',
    'dir',
    'div',
    'dl',
    'dt',
    'fieldset',
    'figcaption',
    'figure',
    'footer',
    'form',
    'frame',
    'frameset',
    'h1',
    'h2',
    'h3',
    'h4',
    'h5',
    'h6',
    'head',
    'header',
    'hr',
    'html',
    'iframe',
    'legend',
    'li',
    'link',
    'main',
    'menu',
    'menuitem',
    'nav',
    'noframes',
    'ol',
    'optgroup',
    'option',
    'p',
    'param',
    'section',
    'summary',
    'table',
    'tbody',
    'td',
    'tfoot',
    'th',
    'thead',
    'title',
    'tr',
    'track',
    'ul',
  ],
  Ll = ['pre', 'script', 'style', 'textarea'],
  Rl = {
    name: 'htmlFlow',
    tokenize: function (e, t, n) {
      const r = this
      let o, i, a, l, u
      return function (t) {
        return e.enter('htmlFlow'), e.enter('htmlFlowData'), e.consume(t), s
      }
      function s(l) {
        return 33 === l
          ? (e.consume(l), c)
          : 47 === l
            ? (e.consume(l), d)
            : 63 === l
              ? (e.consume(l), (o = 3), r.interrupt ? t : D)
              : Fa(l)
                ? (e.consume(l), (a = String.fromCharCode(l)), (i = !0), h)
                : n(l)
      }
      function c(i) {
        return 45 === i
          ? (e.consume(i), (o = 2), f)
          : 91 === i
            ? (e.consume(i), (o = 5), (a = 'CDATA['), (l = 0), p)
            : Fa(i)
              ? (e.consume(i), (o = 4), r.interrupt ? t : D)
              : n(i)
      }
      function f(o) {
        return 45 === o ? (e.consume(o), r.interrupt ? t : D) : n(o)
      }
      function p(o) {
        return o === a.charCodeAt(l++)
          ? (e.consume(o), l === a.length ? (r.interrupt ? t : O) : p)
          : n(o)
      }
      function d(t) {
        return Fa(t) ? (e.consume(t), (a = String.fromCharCode(t)), h) : n(t)
      }
      function h(l) {
        return null === l || 47 === l || 62 === l || za(l)
          ? 47 !== l && i && Ll.includes(a.toLowerCase())
            ? ((o = 1), r.interrupt ? t(l) : O(l))
            : Tl.includes(a.toLowerCase())
              ? ((o = 6),
                47 === l ? (e.consume(l), g) : r.interrupt ? t(l) : O(l))
              : ((o = 7),
                r.interrupt && !r.parser.lazy[r.now().line]
                  ? n(l)
                  : i
                    ? y(l)
                    : m(l))
          : 45 === l || _a(l)
            ? (e.consume(l), (a += String.fromCharCode(l)), h)
            : n(l)
      }
      function g(o) {
        return 62 === o ? (e.consume(o), r.interrupt ? t : O) : n(o)
      }
      function m(t) {
        return Ua(t) ? (e.consume(t), m) : E(t)
      }
      function y(t) {
        return 47 === t
          ? (e.consume(t), E)
          : 58 === t || 95 === t || Fa(t)
            ? (e.consume(t), v)
            : Ua(t)
              ? (e.consume(t), y)
              : E(t)
      }
      function v(t) {
        return 45 === t || 46 === t || 58 === t || 95 === t || _a(t)
          ? (e.consume(t), v)
          : b(t)
      }
      function b(t) {
        return 61 === t ? (e.consume(t), w) : Ua(t) ? (e.consume(t), b) : y(t)
      }
      function w(t) {
        return null === t || 60 === t || 61 === t || 62 === t || 96 === t
          ? n(t)
          : 34 === t || 39 === t
            ? (e.consume(t), (u = t), x)
            : Ua(t)
              ? (e.consume(t), w)
              : ((u = null), k(t))
      }
      function x(t) {
        return null === t || Ma(t)
          ? n(t)
          : t === u
            ? (e.consume(t), S)
            : (e.consume(t), x)
      }
      function k(t) {
        return null === t ||
          34 === t ||
          39 === t ||
          60 === t ||
          61 === t ||
          62 === t ||
          96 === t ||
          za(t)
          ? b(t)
          : (e.consume(t), k)
      }
      function S(e) {
        return 47 === e || 62 === e || Ua(e) ? y(e) : n(e)
      }
      function E(t) {
        return 62 === t ? (e.consume(t), C) : n(t)
      }
      function C(t) {
        return Ua(t) ? (e.consume(t), C) : null === t || Ma(t) ? O(t) : n(t)
      }
      function O(t) {
        return 45 === t && 2 === o
          ? (e.consume(t), L)
          : 60 === t && 1 === o
            ? (e.consume(t), R)
            : 62 === t && 4 === o
              ? (e.consume(t), _)
              : 63 === t && 3 === o
                ? (e.consume(t), D)
                : 93 === t && 5 === o
                  ? (e.consume(t), j)
                  : !Ma(t) || (6 !== o && 7 !== o)
                    ? null === t || Ma(t)
                      ? A(t)
                      : (e.consume(t), O)
                    : e.check(Fl, _, A)(t)
      }
      function A(t) {
        return e.exit('htmlFlowData'), P(t)
      }
      function P(t) {
        return null === t
          ? N(t)
          : Ma(t)
            ? e.attempt({ tokenize: T, partial: !0 }, P, N)(t)
            : (e.enter('htmlFlowData'), O(t))
      }
      function T(e, t, n) {
        return function (t) {
          return e.enter('lineEnding'), e.consume(t), e.exit('lineEnding'), o
        }
        function o(e) {
          return r.parser.lazy[r.now().line] ? n(e) : t(e)
        }
      }
      function L(t) {
        return 45 === t ? (e.consume(t), D) : O(t)
      }
      function R(t) {
        return 47 === t ? (e.consume(t), (a = ''), F) : O(t)
      }
      function F(t) {
        return 62 === t && Ll.includes(a.toLowerCase())
          ? (e.consume(t), _)
          : Fa(t) && a.length < 8
            ? (e.consume(t), (a += String.fromCharCode(t)), F)
            : O(t)
      }
      function j(t) {
        return 93 === t ? (e.consume(t), D) : O(t)
      }
      function D(t) {
        return 62 === t
          ? (e.consume(t), _)
          : 45 === t && 2 === o
            ? (e.consume(t), D)
            : O(t)
      }
      function _(t) {
        return null === t || Ma(t)
          ? (e.exit('htmlFlowData'), N(t))
          : (e.consume(t), _)
      }
      function N(n) {
        return e.exit('htmlFlow'), t(n)
      }
    },
    resolveTo: function (e) {
      let t = e.length
      for (; t-- && ('enter' !== e[t][0] || 'htmlFlow' !== e[t][1].type); );
      t > 1 &&
        'linePrefix' === e[t - 2][1].type &&
        ((e[t][1].start = e[t - 2][1].start),
        (e[t + 1][1].start = e[t - 2][1].start),
        e.splice(t - 2, 2))
      return e
    },
    concrete: !0,
  },
  Fl = {
    tokenize: function (e, t, n) {
      return function (r) {
        return (
          e.exit('htmlFlowData'),
          e.enter('lineEndingBlank'),
          e.consume(r),
          e.exit('lineEndingBlank'),
          e.attempt(Ja, t, n)
        )
      }
    },
    partial: !0,
  }
const jl = {
    name: 'labelEnd',
    tokenize: function (e, t, n) {
      const r = this
      let o,
        i,
        a = r.events.length
      for (; a--; )
        if (
          ('labelImage' === r.events[a][1].type ||
            'labelLink' === r.events[a][1].type) &&
          !r.events[a][1]._balanced
        ) {
          o = r.events[a][1]
          break
        }
      return function (t) {
        return o
          ? o._inactive
            ? u(t)
            : ((i = r.parser.defined.includes(
                Ol(r.sliceSerialize({ start: o.end, end: r.now() }))
              )),
              e.enter('labelEnd'),
              e.enter('labelMarker'),
              e.consume(t),
              e.exit('labelMarker'),
              e.exit('labelEnd'),
              l)
          : n(t)
      }
      function l(n) {
        return 40 === n
          ? e.attempt(Dl, t, i ? t : u)(n)
          : 91 === n
            ? e.attempt(_l, t, i ? e.attempt(Nl, t, u) : u)(n)
            : i
              ? t(n)
              : u(n)
      }
      function u(e) {
        return (o._balanced = !0), n(e)
      }
    },
    resolveTo: function (e, t) {
      let n,
        r,
        o,
        i,
        a = e.length,
        l = 0
      for (; a--; )
        if (((n = e[a][1]), r)) {
          if ('link' === n.type || ('labelLink' === n.type && n._inactive))
            break
          'enter' === e[a][0] && 'labelLink' === n.type && (n._inactive = !0)
        } else if (o) {
          if (
            'enter' === e[a][0] &&
            ('labelImage' === n.type || 'labelLink' === n.type) &&
            !n._balanced &&
            ((r = a), 'labelLink' !== n.type)
          ) {
            l = 2
            break
          }
        } else 'labelEnd' === n.type && (o = a)
      const u = {
          type: 'labelLink' === e[r][1].type ? 'link' : 'image',
          start: Object.assign({}, e[r][1].start),
          end: Object.assign({}, e[e.length - 1][1].end),
        },
        s = {
          type: 'label',
          start: Object.assign({}, e[r][1].start),
          end: Object.assign({}, e[o][1].end),
        },
        c = {
          type: 'labelText',
          start: Object.assign({}, e[r + l + 2][1].end),
          end: Object.assign({}, e[o - 2][1].start),
        }
      return (
        (i = [
          ['enter', u, t],
          ['enter', s, t],
        ]),
        (i = Aa(i, e.slice(r + 1, r + l + 3))),
        (i = Aa(i, [['enter', c, t]])),
        (i = Aa(
          i,
          ll(t.parser.constructs.insideSpan.null, e.slice(r + l + 4, o - 3), t)
        )),
        (i = Aa(i, [['exit', c, t], e[o - 2], e[o - 1], ['exit', s, t]])),
        (i = Aa(i, e.slice(o + 1))),
        (i = Aa(i, [['exit', u, t]])),
        Oa(e, r, e.length, i),
        e
      )
    },
    resolveAll: function (e) {
      let t,
        n = -1
      for (; ++n < e.length; )
        (t = e[n][1]),
          ('labelImage' !== t.type &&
            'labelLink' !== t.type &&
            'labelEnd' !== t.type) ||
            (e.splice(n + 1, 'labelImage' === t.type ? 4 : 2),
            (t.type = 'data'),
            n++)
      return e
    },
  },
  Dl = {
    tokenize: function (e, t, n) {
      return function (t) {
        return (
          e.enter('resource'),
          e.enter('resourceMarker'),
          e.consume(t),
          e.exit('resourceMarker'),
          Cl(e, r)
        )
      }
      function r(t) {
        return 41 === t
          ? a(t)
          : kl(
              e,
              o,
              n,
              'resourceDestination',
              'resourceDestinationLiteral',
              'resourceDestinationLiteralMarker',
              'resourceDestinationRaw',
              'resourceDestinationString',
              32
            )(t)
      }
      function o(t) {
        return za(t) ? Cl(e, i)(t) : a(t)
      }
      function i(t) {
        return 34 === t || 39 === t || 40 === t
          ? El(
              e,
              Cl(e, a),
              n,
              'resourceTitle',
              'resourceTitleMarker',
              'resourceTitleString'
            )(t)
          : a(t)
      }
      function a(r) {
        return 41 === r
          ? (e.enter('resourceMarker'),
            e.consume(r),
            e.exit('resourceMarker'),
            e.exit('resource'),
            t)
          : n(r)
      }
    },
  },
  _l = {
    tokenize: function (e, t, n) {
      const r = this
      return function (t) {
        return Sl.call(
          r,
          e,
          o,
          n,
          'reference',
          'referenceMarker',
          'referenceString'
        )(t)
      }
      function o(e) {
        return r.parser.defined.includes(
          Ol(r.sliceSerialize(r.events[r.events.length - 1][1]).slice(1, -1))
        )
          ? t(e)
          : n(e)
      }
    },
  },
  Nl = {
    tokenize: function (e, t, n) {
      return function (t) {
        return (
          e.enter('reference'),
          e.enter('referenceMarker'),
          e.consume(t),
          e.exit('referenceMarker'),
          r
        )
      }
      function r(r) {
        return 93 === r
          ? (e.enter('referenceMarker'),
            e.consume(r),
            e.exit('referenceMarker'),
            e.exit('reference'),
            t)
          : n(r)
      }
    },
  }
const Il = {
  name: 'lineEnding',
  tokenize: function (e, t) {
    return function (n) {
      return (
        e.enter('lineEnding'),
        e.consume(n),
        e.exit('lineEnding'),
        Wa(e, t, 'linePrefix')
      )
    }
  },
}
const Bl = {
  name: 'thematicBreak',
  tokenize: function (e, t, n) {
    let r,
      o = 0
    return function (t) {
      return e.enter('thematicBreak'), (r = t), i(t)
    }
    function i(l) {
      return l === r
        ? (e.enter('thematicBreakSequence'), a(l))
        : Ua(l)
          ? Wa(e, i, 'whitespace')(l)
          : o < 3 || (null !== l && !Ma(l))
            ? n(l)
            : (e.exit('thematicBreak'), t(l))
    }
    function a(t) {
      return t === r
        ? (e.consume(t), o++, a)
        : (e.exit('thematicBreakSequence'), i(t))
    }
  },
}
const zl = {
    name: 'list',
    tokenize: function (e, t, n) {
      const r = this,
        o = r.events[r.events.length - 1]
      let i =
          o && 'linePrefix' === o[1].type
            ? o[2].sliceSerialize(o[1], !0).length
            : 0,
        a = 0
      return function (t) {
        const o =
          r.containerState.type ||
          (42 === t || 43 === t || 45 === t ? 'listUnordered' : 'listOrdered')
        if (
          'listUnordered' === o
            ? !r.containerState.marker || t === r.containerState.marker
            : ja(t)
        ) {
          if (
            (r.containerState.type ||
              ((r.containerState.type = o), e.enter(o, { _container: !0 })),
            'listUnordered' === o)
          )
            return (
              e.enter('listItemPrefix'),
              42 === t || 45 === t ? e.check(Bl, n, u)(t) : u(t)
            )
          if (!r.interrupt || 49 === t)
            return e.enter('listItemPrefix'), e.enter('listItemValue'), l(t)
        }
        return n(t)
      }
      function l(t) {
        return ja(t) && ++a < 10
          ? (e.consume(t), l)
          : (!r.interrupt || a < 2) &&
              (r.containerState.marker
                ? t === r.containerState.marker
                : 41 === t || 46 === t)
            ? (e.exit('listItemValue'), u(t))
            : n(t)
      }
      function u(t) {
        return (
          e.enter('listItemMarker'),
          e.consume(t),
          e.exit('listItemMarker'),
          (r.containerState.marker = r.containerState.marker || t),
          e.check(Ja, r.interrupt ? n : s, e.attempt(Ml, f, c))
        )
      }
      function s(e) {
        return (r.containerState.initialBlankLine = !0), i++, f(e)
      }
      function c(t) {
        return Ua(t)
          ? (e.enter('listItemPrefixWhitespace'),
            e.consume(t),
            e.exit('listItemPrefixWhitespace'),
            f)
          : n(t)
      }
      function f(n) {
        return (
          (r.containerState.size =
            i + r.sliceSerialize(e.exit('listItemPrefix'), !0).length),
          t(n)
        )
      }
    },
    continuation: {
      tokenize: function (e, t, n) {
        const r = this
        return (
          (r.containerState._closeFlow = void 0),
          e.check(
            Ja,
            function (n) {
              return (
                (r.containerState.furtherBlankLines =
                  r.containerState.furtherBlankLines ||
                  r.containerState.initialBlankLine),
                Wa(e, t, 'listItemIndent', r.containerState.size + 1)(n)
              )
            },
            function (n) {
              if (r.containerState.furtherBlankLines || !Ua(n))
                return (
                  (r.containerState.furtherBlankLines = void 0),
                  (r.containerState.initialBlankLine = void 0),
                  o(n)
                )
              return (
                (r.containerState.furtherBlankLines = void 0),
                (r.containerState.initialBlankLine = void 0),
                e.attempt(Ul, t, o)(n)
              )
            }
          )
        )
        function o(o) {
          return (
            (r.containerState._closeFlow = !0),
            (r.interrupt = void 0),
            Wa(
              e,
              e.attempt(zl, t, n),
              'linePrefix',
              r.parser.constructs.disable.null.includes('codeIndented')
                ? void 0
                : 4
            )(o)
          )
        }
      },
    },
    exit: function (e) {
      e.exit(this.containerState.type)
    },
  },
  Ml = {
    tokenize: function (e, t, n) {
      const r = this
      return Wa(
        e,
        function (e) {
          const o = r.events[r.events.length - 1]
          return !Ua(e) && o && 'listItemPrefixWhitespace' === o[1].type
            ? t(e)
            : n(e)
        },
        'listItemPrefixWhitespace',
        r.parser.constructs.disable.null.includes('codeIndented') ? void 0 : 5
      )
    },
    partial: !0,
  },
  Ul = {
    tokenize: function (e, t, n) {
      const r = this
      return Wa(
        e,
        function (e) {
          const o = r.events[r.events.length - 1]
          return o &&
            'listItemIndent' === o[1].type &&
            o[2].sliceSerialize(o[1], !0).length === r.containerState.size
            ? t(e)
            : n(e)
        },
        'listItemIndent',
        r.containerState.size + 1
      )
    },
    partial: !0,
  }
const ql = {
  name: 'setextUnderline',
  tokenize: function (e, t, n) {
    const r = this
    let o,
      i,
      a = r.events.length
    for (; a--; )
      if (
        'lineEnding' !== r.events[a][1].type &&
        'linePrefix' !== r.events[a][1].type &&
        'content' !== r.events[a][1].type
      ) {
        i = 'paragraph' === r.events[a][1].type
        break
      }
    return function (t) {
      if (!r.parser.lazy[r.now().line] && (r.interrupt || i))
        return (
          e.enter('setextHeadingLine'),
          e.enter('setextHeadingLineSequence'),
          (o = t),
          l(t)
        )
      return n(t)
    }
    function l(t) {
      return t === o
        ? (e.consume(t), l)
        : (e.exit('setextHeadingLineSequence'), Wa(e, u, 'lineSuffix')(t))
    }
    function u(r) {
      return null === r || Ma(r) ? (e.exit('setextHeadingLine'), t(r)) : n(r)
    }
  },
  resolveTo: function (e, t) {
    let n,
      r,
      o,
      i = e.length
    for (; i--; )
      if ('enter' === e[i][0]) {
        if ('content' === e[i][1].type) {
          n = i
          break
        }
        'paragraph' === e[i][1].type && (r = i)
      } else
        'content' === e[i][1].type && e.splice(i, 1),
          o || 'definition' !== e[i][1].type || (o = i)
    const a = {
      type: 'setextHeading',
      start: Object.assign({}, e[r][1].start),
      end: Object.assign({}, e[e.length - 1][1].end),
    }
    ;(e[r][1].type = 'setextHeadingText'),
      o
        ? (e.splice(r, 0, ['enter', a, t]),
          e.splice(o + 1, 0, ['exit', e[n][1], t]),
          (e[n][1].end = Object.assign({}, e[o][1].end)))
        : (e[n][1] = a)
    return e.push(['exit', a, t]), e
  },
}
const Vl = {
    42: zl,
    43: zl,
    45: zl,
    48: zl,
    49: zl,
    50: zl,
    51: zl,
    52: zl,
    53: zl,
    54: zl,
    55: zl,
    56: zl,
    57: zl,
    62: dl,
  },
  Hl = { 91: Al },
  Wl = { [-2]: wl, [-1]: wl, 32: wl },
  $l = {
    35: {
      name: 'headingAtx',
      tokenize: function (e, t, n) {
        const r = this
        let o = 0
        return function (t) {
          return e.enter('atxHeading'), e.enter('atxHeadingSequence'), i(t)
        }
        function i(l) {
          return 35 === l && o++ < 6
            ? (e.consume(l), i)
            : null === l || za(l)
              ? (e.exit('atxHeadingSequence'), r.interrupt ? t(l) : a(l))
              : n(l)
        }
        function a(n) {
          return 35 === n
            ? (e.enter('atxHeadingSequence'), l(n))
            : null === n || Ma(n)
              ? (e.exit('atxHeading'), t(n))
              : Ua(n)
                ? Wa(e, a, 'whitespace')(n)
                : (e.enter('atxHeadingText'), u(n))
        }
        function l(t) {
          return 35 === t
            ? (e.consume(t), l)
            : (e.exit('atxHeadingSequence'), a(t))
        }
        function u(t) {
          return null === t || 35 === t || za(t)
            ? (e.exit('atxHeadingText'), a(t))
            : (e.consume(t), u)
        }
      },
      resolve: function (e, t) {
        let n,
          r,
          o = e.length - 2,
          i = 3
        'whitespace' === e[i][1].type && (i += 2)
        o - 2 > i && 'whitespace' === e[o][1].type && (o -= 2)
        'atxHeadingSequence' === e[o][1].type &&
          (i === o - 1 || (o - 4 > i && 'whitespace' === e[o - 2][1].type)) &&
          (o -= i + 1 === o ? 2 : 4)
        o > i &&
          ((n = {
            type: 'atxHeadingText',
            start: e[i][1].start,
            end: e[o][1].end,
          }),
          (r = {
            type: 'chunkText',
            start: e[i][1].start,
            end: e[o][1].end,
            contentType: 'text',
          }),
          Oa(e, i, o - i + 1, [
            ['enter', n, t],
            ['enter', r, t],
            ['exit', r, t],
            ['exit', n, t],
          ]))
        return e
      },
    },
    42: Bl,
    45: [ql, Bl],
    60: Rl,
    61: ql,
    95: Bl,
    96: bl,
    126: bl,
  },
  Ql = { 38: vl, 92: hl },
  Gl = {
    [-5]: Il,
    [-4]: Il,
    [-3]: Il,
    33: {
      name: 'labelStartImage',
      tokenize: function (e, t, n) {
        const r = this
        return function (t) {
          return (
            e.enter('labelImage'),
            e.enter('labelImageMarker'),
            e.consume(t),
            e.exit('labelImageMarker'),
            o
          )
        }
        function o(t) {
          return 91 === t
            ? (e.enter('labelMarker'),
              e.consume(t),
              e.exit('labelMarker'),
              e.exit('labelImage'),
              i)
            : n(t)
        }
        function i(e) {
          return 94 === e && '_hiddenFootnoteSupport' in r.parser.constructs
            ? n(e)
            : t(e)
        }
      },
      resolveAll: jl.resolveAll,
    },
    38: vl,
    42: fl,
    60: [
      {
        name: 'autolink',
        tokenize: function (e, t, n) {
          let r = 1
          return function (t) {
            return (
              e.enter('autolink'),
              e.enter('autolinkMarker'),
              e.consume(t),
              e.exit('autolinkMarker'),
              e.enter('autolinkProtocol'),
              o
            )
          }
          function o(t) {
            return Fa(t) ? (e.consume(t), i) : Ia(t) ? u(t) : n(t)
          }
          function i(e) {
            return 43 === e || 45 === e || 46 === e || _a(e) ? a(e) : u(e)
          }
          function a(t) {
            return 58 === t
              ? (e.consume(t), l)
              : (43 === t || 45 === t || 46 === t || _a(t)) && r++ < 32
                ? (e.consume(t), a)
                : u(t)
          }
          function l(t) {
            return 62 === t
              ? (e.exit('autolinkProtocol'), p(t))
              : null === t || 32 === t || 60 === t || Ba(t)
                ? n(t)
                : (e.consume(t), l)
          }
          function u(t) {
            return 64 === t
              ? (e.consume(t), (r = 0), s)
              : Ia(t)
                ? (e.consume(t), u)
                : n(t)
          }
          function s(e) {
            return _a(e) ? c(e) : n(e)
          }
          function c(t) {
            return 46 === t
              ? (e.consume(t), (r = 0), s)
              : 62 === t
                ? ((e.exit('autolinkProtocol').type = 'autolinkEmail'), p(t))
                : f(t)
          }
          function f(t) {
            return (45 === t || _a(t)) && r++ < 63
              ? (e.consume(t), 45 === t ? f : c)
              : n(t)
          }
          function p(n) {
            return (
              e.enter('autolinkMarker'),
              e.consume(n),
              e.exit('autolinkMarker'),
              e.exit('autolink'),
              t
            )
          }
        },
      },
      {
        name: 'htmlText',
        tokenize: function (e, t, n) {
          const r = this
          let o, i, a, l
          return function (t) {
            return e.enter('htmlText'), e.enter('htmlTextData'), e.consume(t), u
          }
          function u(t) {
            return 33 === t
              ? (e.consume(t), s)
              : 47 === t
                ? (e.consume(t), k)
                : 63 === t
                  ? (e.consume(t), w)
                  : Fa(t)
                    ? (e.consume(t), C)
                    : n(t)
          }
          function s(t) {
            return 45 === t
              ? (e.consume(t), c)
              : 91 === t
                ? (e.consume(t), (i = 'CDATA['), (a = 0), g)
                : Fa(t)
                  ? (e.consume(t), b)
                  : n(t)
          }
          function c(t) {
            return 45 === t ? (e.consume(t), f) : n(t)
          }
          function f(t) {
            return null === t || 62 === t
              ? n(t)
              : 45 === t
                ? (e.consume(t), p)
                : d(t)
          }
          function p(e) {
            return null === e || 62 === e ? n(e) : d(e)
          }
          function d(t) {
            return null === t
              ? n(t)
              : 45 === t
                ? (e.consume(t), h)
                : Ma(t)
                  ? ((l = d), j(t))
                  : (e.consume(t), d)
          }
          function h(t) {
            return 45 === t ? (e.consume(t), _) : d(t)
          }
          function g(t) {
            return t === i.charCodeAt(a++)
              ? (e.consume(t), a === i.length ? m : g)
              : n(t)
          }
          function m(t) {
            return null === t
              ? n(t)
              : 93 === t
                ? (e.consume(t), y)
                : Ma(t)
                  ? ((l = m), j(t))
                  : (e.consume(t), m)
          }
          function y(t) {
            return 93 === t ? (e.consume(t), v) : m(t)
          }
          function v(t) {
            return 62 === t ? _(t) : 93 === t ? (e.consume(t), v) : m(t)
          }
          function b(t) {
            return null === t || 62 === t
              ? _(t)
              : Ma(t)
                ? ((l = b), j(t))
                : (e.consume(t), b)
          }
          function w(t) {
            return null === t
              ? n(t)
              : 63 === t
                ? (e.consume(t), x)
                : Ma(t)
                  ? ((l = w), j(t))
                  : (e.consume(t), w)
          }
          function x(e) {
            return 62 === e ? _(e) : w(e)
          }
          function k(t) {
            return Fa(t) ? (e.consume(t), S) : n(t)
          }
          function S(t) {
            return 45 === t || _a(t) ? (e.consume(t), S) : E(t)
          }
          function E(t) {
            return Ma(t) ? ((l = E), j(t)) : Ua(t) ? (e.consume(t), E) : _(t)
          }
          function C(t) {
            return 45 === t || _a(t)
              ? (e.consume(t), C)
              : 47 === t || 62 === t || za(t)
                ? O(t)
                : n(t)
          }
          function O(t) {
            return 47 === t
              ? (e.consume(t), _)
              : 58 === t || 95 === t || Fa(t)
                ? (e.consume(t), A)
                : Ma(t)
                  ? ((l = O), j(t))
                  : Ua(t)
                    ? (e.consume(t), O)
                    : _(t)
          }
          function A(t) {
            return 45 === t || 46 === t || 58 === t || 95 === t || _a(t)
              ? (e.consume(t), A)
              : P(t)
          }
          function P(t) {
            return 61 === t
              ? (e.consume(t), T)
              : Ma(t)
                ? ((l = P), j(t))
                : Ua(t)
                  ? (e.consume(t), P)
                  : O(t)
          }
          function T(t) {
            return null === t || 60 === t || 61 === t || 62 === t || 96 === t
              ? n(t)
              : 34 === t || 39 === t
                ? (e.consume(t), (o = t), L)
                : Ma(t)
                  ? ((l = T), j(t))
                  : Ua(t)
                    ? (e.consume(t), T)
                    : (e.consume(t), (o = void 0), F)
          }
          function L(t) {
            return t === o
              ? (e.consume(t), R)
              : null === t
                ? n(t)
                : Ma(t)
                  ? ((l = L), j(t))
                  : (e.consume(t), L)
          }
          function R(e) {
            return 62 === e || 47 === e || za(e) ? O(e) : n(e)
          }
          function F(t) {
            return null === t ||
              34 === t ||
              39 === t ||
              60 === t ||
              61 === t ||
              96 === t
              ? n(t)
              : 62 === t || za(t)
                ? O(t)
                : (e.consume(t), F)
          }
          function j(t) {
            return (
              e.exit('htmlTextData'),
              e.enter('lineEnding'),
              e.consume(t),
              e.exit('lineEnding'),
              Wa(
                e,
                D,
                'linePrefix',
                r.parser.constructs.disable.null.includes('codeIndented')
                  ? void 0
                  : 4
              )
            )
          }
          function D(t) {
            return e.enter('htmlTextData'), l(t)
          }
          function _(r) {
            return 62 === r
              ? (e.consume(r), e.exit('htmlTextData'), e.exit('htmlText'), t)
              : n(r)
          }
        },
      },
    ],
    91: {
      name: 'labelStartLink',
      tokenize: function (e, t, n) {
        const r = this
        return function (t) {
          return (
            e.enter('labelLink'),
            e.enter('labelMarker'),
            e.consume(t),
            e.exit('labelMarker'),
            e.exit('labelLink'),
            o
          )
        }
        function o(e) {
          return 94 === e && '_hiddenFootnoteSupport' in r.parser.constructs
            ? n(e)
            : t(e)
        }
      },
      resolveAll: jl.resolveAll,
    },
    92: [
      {
        name: 'hardBreakEscape',
        tokenize: function (e, t, n) {
          return function (t) {
            return (
              e.enter('hardBreakEscape'),
              e.enter('escapeMarker'),
              e.consume(t),
              r
            )
          }
          function r(r) {
            return Ma(r)
              ? (e.exit('escapeMarker'), e.exit('hardBreakEscape'), t(r))
              : n(r)
          }
        },
      },
      hl,
    ],
    93: jl,
    95: fl,
    96: {
      name: 'codeText',
      tokenize: function (e, t, n) {
        let r,
          o,
          i = 0
        return function (t) {
          return e.enter('codeText'), e.enter('codeTextSequence'), a(t)
        }
        function a(t) {
          return 96 === t
            ? (e.consume(t), i++, a)
            : (e.exit('codeTextSequence'), l(t))
        }
        function l(t) {
          return null === t
            ? n(t)
            : 96 === t
              ? ((o = e.enter('codeTextSequence')), (r = 0), s(t))
              : 32 === t
                ? (e.enter('space'), e.consume(t), e.exit('space'), l)
                : Ma(t)
                  ? (e.enter('lineEnding'),
                    e.consume(t),
                    e.exit('lineEnding'),
                    l)
                  : (e.enter('codeTextData'), u(t))
        }
        function u(t) {
          return null === t || 32 === t || 96 === t || Ma(t)
            ? (e.exit('codeTextData'), l(t))
            : (e.consume(t), u)
        }
        function s(n) {
          return 96 === n
            ? (e.consume(n), r++, s)
            : r === i
              ? (e.exit('codeTextSequence'), e.exit('codeText'), t(n))
              : ((o.type = 'codeTextData'), u(n))
        }
      },
      resolve: function (e) {
        let t,
          n,
          r = e.length - 4,
          o = 3
        if (
          !(
            ('lineEnding' !== e[o][1].type && 'space' !== e[o][1].type) ||
            ('lineEnding' !== e[r][1].type && 'space' !== e[r][1].type)
          )
        )
          for (t = o; ++t < r; )
            if ('codeTextData' === e[t][1].type) {
              ;(e[o][1].type = 'codeTextPadding'),
                (e[r][1].type = 'codeTextPadding'),
                (o += 2),
                (r -= 2)
              break
            }
        ;(t = o - 1), r++
        for (; ++t <= r; )
          void 0 === n
            ? t !== r && 'lineEnding' !== e[t][1].type && (n = t)
            : (t !== r && 'lineEnding' !== e[t][1].type) ||
              ((e[n][1].type = 'codeTextData'),
              t !== n + 2 &&
                ((e[n][1].end = e[t - 1][1].end),
                e.splice(n + 2, t - n - 2),
                (r -= t - n - 2),
                (t = n + 2)),
              (n = void 0))
        return e
      },
      previous: function (e) {
        return (
          96 !== e ||
          'characterEscape' === this.events[this.events.length - 1][1].type
        )
      },
    },
  },
  Jl = { null: [fl, tl] },
  Xl = { null: [42, 95] },
  Yl = { null: [] }
function Kl(e = {}) {
  const t = {
    defined: [],
    lazy: {},
    constructs: Ta([sl].concat(e.extensions || [])),
    content: n($a),
    document: n(Qa),
    flow: n(el),
    string: n(nl),
    text: n(rl),
  }
  return t
  function n(e) {
    return function (n) {
      return ul(t, e, n)
    }
  }
}
const Zl = /[\0\t\n\r]/g
function eu() {
  let e,
    t = 1,
    n = '',
    r = !0
  return function (o, i, a) {
    const l = []
    let u, s, c, f, p
    ;(o = n + o.toString(i)),
      (c = 0),
      (n = ''),
      r && (65279 === o.charCodeAt(0) && c++, (r = void 0))
    for (; c < o.length; ) {
      if (
        ((Zl.lastIndex = c),
        (u = Zl.exec(o)),
        (f = u && void 0 !== u.index ? u.index : o.length),
        (p = o.charCodeAt(f)),
        !u)
      ) {
        n = o.slice(c)
        break
      }
      if (10 === p && c === f && e) l.push(-3), (e = void 0)
      else
        switch (
          (e && (l.push(-5), (e = void 0)),
          c < f && (l.push(o.slice(c, f)), (t += f - c)),
          p)
        ) {
          case 0:
            l.push(65533), t++
            break
          case 9:
            for (s = 4 * Math.ceil(t / 4), l.push(-2); t++ < s; ) l.push(-1)
            break
          case 10:
            l.push(-4), (t = 1)
            break
          default:
            ;(e = !0), (t = 1)
        }
      c = f + 1
    }
    a && (e && l.push(-5), n && l.push(n), l.push(null))
    return l
  }
}
function tu(e) {
  for (; !Xa(e); );
  return e
}
function nu(e, t) {
  const n = Number.parseInt(e, t)
  return n < 9 ||
    11 === n ||
    (n > 13 && n < 32) ||
    (n > 126 && n < 160) ||
    (n > 55295 && n < 57344) ||
    (n > 64975 && n < 65008) ||
    65535 == (65535 & n) ||
    65534 == (65535 & n) ||
    n > 1114111
    ? '�'
    : String.fromCharCode(n)
}
const ru = /\\([!-/:-@[-`{-~])|&(#(?:\d{1,7}|x[\da-f]{1,6})|[\da-z]{1,31});/gi
function ou(e) {
  return e.replace(ru, iu)
}
function iu(e, t, n) {
  if (t) return t
  if (35 === n.charCodeAt(0)) {
    const e = n.charCodeAt(1),
      t = 120 === e || 88 === e
    return nu(n.slice(t ? 2 : 1), t ? 16 : 10)
  }
  return yl(n) || e
}
const au = {}.hasOwnProperty,
  lu = function (e, t, n) {
    return (
      'string' != typeof t && ((n = t), (t = void 0)),
      (function (e = {}) {
        const t = uu(
            {
              transforms: [],
              canContainEols: [
                'emphasis',
                'fragment',
                'heading',
                'paragraph',
                'strong',
              ],
              enter: {
                autolink: u(re),
                autolinkProtocol: P,
                autolinkEmail: P,
                atxHeading: u(Z),
                blockQuote: u(G),
                characterEscape: P,
                characterReference: P,
                codeFenced: u(J),
                codeFencedFenceInfo: s,
                codeFencedFenceMeta: s,
                codeIndented: u(J, s),
                codeText: u(X, s),
                codeTextData: P,
                data: P,
                codeFlowValue: P,
                definition: u(Y),
                definitionDestinationString: s,
                definitionLabelString: s,
                definitionTitleString: s,
                emphasis: u(K),
                hardBreakEscape: u(ee),
                hardBreakTrailing: u(ee),
                htmlFlow: u(te, s),
                htmlFlowData: P,
                htmlText: u(te, s),
                htmlTextData: P,
                image: u(ne),
                label: s,
                link: u(re),
                listItem: u(ie),
                listItemValue: g,
                listOrdered: u(oe, h),
                listUnordered: u(oe),
                paragraph: u(ae),
                reference: q,
                referenceString: s,
                resourceDestinationString: s,
                resourceTitleString: s,
                setextHeading: u(Z),
                strong: u(le),
                thematicBreak: u(se),
              },
              exit: {
                atxHeading: f(),
                atxHeadingSequence: E,
                autolink: f(),
                autolinkEmail: Q,
                autolinkProtocol: $,
                blockQuote: f(),
                characterEscapeValue: T,
                characterReferenceMarkerHexadecimal: H,
                characterReferenceMarkerNumeric: H,
                characterReferenceValue: W,
                codeFenced: f(b),
                codeFencedFence: v,
                codeFencedFenceInfo: m,
                codeFencedFenceMeta: y,
                codeFlowValue: T,
                codeIndented: f(w),
                codeText: f(D),
                codeTextData: T,
                data: T,
                definition: f(),
                definitionDestinationString: S,
                definitionLabelString: x,
                definitionTitleString: k,
                emphasis: f(),
                hardBreakEscape: f(R),
                hardBreakTrailing: f(R),
                htmlFlow: f(F),
                htmlFlowData: T,
                htmlText: f(j),
                htmlTextData: T,
                image: f(N),
                label: B,
                labelText: I,
                lineEnding: L,
                link: f(_),
                listItem: f(),
                listOrdered: f(),
                listUnordered: f(),
                paragraph: f(),
                referenceString: V,
                resourceDestinationString: z,
                resourceTitleString: M,
                resource: U,
                setextHeading: f(A),
                setextHeadingLineSequence: O,
                setextHeadingText: C,
                strong: f(),
                thematicBreak: f(),
              },
            },
            e.mdastExtensions || []
          ),
          n = {}
        return r
        function r(e) {
          let n = { type: 'root', children: [] }
          const r = [],
            u = [],
            f = {
              stack: [n],
              tokenStack: r,
              config: t,
              enter: c,
              exit: p,
              buffer: s,
              resume: d,
              setData: i,
              getData: a,
            }
          let h = -1
          for (; ++h < e.length; )
            if (
              'listOrdered' === e[h][1].type ||
              'listUnordered' === e[h][1].type
            )
              if ('enter' === e[h][0]) u.push(h)
              else {
                h = o(e, u.pop(), h)
              }
          for (h = -1; ++h < e.length; ) {
            const n = t[e[h][0]]
            au.call(n, e[h][1].type) &&
              n[e[h][1].type].call(
                Object.assign({ sliceSerialize: e[h][2].sliceSerialize }, f),
                e[h][1]
              )
          }
          if (r.length > 0) {
            const e = r[r.length - 1]
            ;(e[1] || cu).call(f, void 0, e[0])
          }
          for (
            n.position = {
              start: l(
                e.length > 0 ? e[0][1].start : { line: 1, column: 1, offset: 0 }
              ),
              end: l(
                e.length > 0
                  ? e[e.length - 2][1].end
                  : { line: 1, column: 1, offset: 0 }
              ),
            },
              h = -1;
            ++h < t.transforms.length;

          )
            n = t.transforms[h](n) || n
          return n
        }
        function o(e, t, n) {
          let r,
            o,
            i,
            a,
            l = t - 1,
            u = -1,
            s = !1
          for (; ++l <= n; ) {
            const t = e[l]
            if (
              ('listUnordered' === t[1].type ||
              'listOrdered' === t[1].type ||
              'blockQuote' === t[1].type
                ? ('enter' === t[0] ? u++ : u--, (a = void 0))
                : 'lineEndingBlank' === t[1].type
                  ? 'enter' === t[0] &&
                    (!r || a || u || i || (i = l), (a = void 0))
                  : 'linePrefix' === t[1].type ||
                    'listItemValue' === t[1].type ||
                    'listItemMarker' === t[1].type ||
                    'listItemPrefix' === t[1].type ||
                    'listItemPrefixWhitespace' === t[1].type ||
                    (a = void 0),
              (!u && 'enter' === t[0] && 'listItemPrefix' === t[1].type) ||
                (-1 === u &&
                  'exit' === t[0] &&
                  ('listUnordered' === t[1].type ||
                    'listOrdered' === t[1].type)))
            ) {
              if (r) {
                let a = l
                for (o = void 0; a--; ) {
                  const t = e[a]
                  if (
                    'lineEnding' === t[1].type ||
                    'lineEndingBlank' === t[1].type
                  ) {
                    if ('exit' === t[0]) continue
                    o && ((e[o][1].type = 'lineEndingBlank'), (s = !0)),
                      (t[1].type = 'lineEnding'),
                      (o = a)
                  } else if (
                    'linePrefix' !== t[1].type &&
                    'blockQuotePrefix' !== t[1].type &&
                    'blockQuotePrefixWhitespace' !== t[1].type &&
                    'blockQuoteMarker' !== t[1].type &&
                    'listItemIndent' !== t[1].type
                  )
                    break
                }
                i && (!o || i < o) && (r._spread = !0),
                  (r.end = Object.assign({}, o ? e[o][1].start : t[1].end)),
                  e.splice(o || l, 0, ['exit', r, t[2]]),
                  l++,
                  n++
              }
              'listItemPrefix' === t[1].type &&
                ((r = {
                  type: 'listItem',
                  _spread: !1,
                  start: Object.assign({}, t[1].start),
                }),
                e.splice(l, 0, ['enter', r, t[2]]),
                l++,
                n++,
                (i = void 0),
                (a = !0))
            }
          }
          return (e[t][1]._spread = s), n
        }
        function i(e, t) {
          n[e] = t
        }
        function a(e) {
          return n[e]
        }
        function l(e) {
          return { line: e.line, column: e.column, offset: e.offset }
        }
        function u(e, t) {
          return n
          function n(n) {
            c.call(this, e(n), n), t && t.call(this, n)
          }
        }
        function s() {
          this.stack.push({ type: 'fragment', children: [] })
        }
        function c(e, t, n) {
          return (
            this.stack[this.stack.length - 1].children.push(e),
            this.stack.push(e),
            this.tokenStack.push([t, n]),
            (e.position = { start: l(t.start) }),
            e
          )
        }
        function f(e) {
          return t
          function t(t) {
            e && e.call(this, t), p.call(this, t)
          }
        }
        function p(e, t) {
          const n = this.stack.pop(),
            r = this.tokenStack.pop()
          if (!r)
            throw new Error(
              'Cannot close `' +
                e.type +
                '` (' +
                Ui({ start: e.start, end: e.end }) +
                '): it’s not open'
            )
          if (r[0].type !== e.type)
            if (t) t.call(this, e, r[0])
            else {
              ;(r[1] || cu).call(this, e, r[0])
            }
          return (n.position.end = l(e.end)), n
        }
        function d() {
          return Sa(this.stack.pop())
        }
        function h() {
          i('expectingFirstListItemValue', !0)
        }
        function g(e) {
          if (a('expectingFirstListItemValue')) {
            ;(this.stack[this.stack.length - 2].start = Number.parseInt(
              this.sliceSerialize(e),
              10
            )),
              i('expectingFirstListItemValue')
          }
        }
        function m() {
          const e = this.resume()
          this.stack[this.stack.length - 1].lang = e
        }
        function y() {
          const e = this.resume()
          this.stack[this.stack.length - 1].meta = e
        }
        function v() {
          a('flowCodeInside') || (this.buffer(), i('flowCodeInside', !0))
        }
        function b() {
          const e = this.resume()
          ;(this.stack[this.stack.length - 1].value = e.replace(
            /^(\r?\n|\r)|(\r?\n|\r)$/g,
            ''
          )),
            i('flowCodeInside')
        }
        function w() {
          const e = this.resume()
          this.stack[this.stack.length - 1].value = e.replace(
            /(\r?\n|\r)$/g,
            ''
          )
        }
        function x(e) {
          const t = this.resume(),
            n = this.stack[this.stack.length - 1]
          ;(n.label = t),
            (n.identifier = Ol(this.sliceSerialize(e)).toLowerCase())
        }
        function k() {
          const e = this.resume()
          this.stack[this.stack.length - 1].title = e
        }
        function S() {
          const e = this.resume()
          this.stack[this.stack.length - 1].url = e
        }
        function E(e) {
          const t = this.stack[this.stack.length - 1]
          if (!t.depth) {
            const n = this.sliceSerialize(e).length
            t.depth = n
          }
        }
        function C() {
          i('setextHeadingSlurpLineEnding', !0)
        }
        function O(e) {
          this.stack[this.stack.length - 1].depth =
            61 === this.sliceSerialize(e).charCodeAt(0) ? 1 : 2
        }
        function A() {
          i('setextHeadingSlurpLineEnding')
        }
        function P(e) {
          const t = this.stack[this.stack.length - 1]
          let n = t.children[t.children.length - 1]
          ;(n && 'text' === n.type) ||
            ((n = ue()),
            (n.position = { start: l(e.start) }),
            t.children.push(n)),
            this.stack.push(n)
        }
        function T(e) {
          const t = this.stack.pop()
          ;(t.value += this.sliceSerialize(e)), (t.position.end = l(e.end))
        }
        function L(e) {
          const n = this.stack[this.stack.length - 1]
          if (a('atHardBreak')) {
            return (
              (n.children[n.children.length - 1].position.end = l(e.end)),
              void i('atHardBreak')
            )
          }
          !a('setextHeadingSlurpLineEnding') &&
            t.canContainEols.includes(n.type) &&
            (P.call(this, e), T.call(this, e))
        }
        function R() {
          i('atHardBreak', !0)
        }
        function F() {
          const e = this.resume()
          this.stack[this.stack.length - 1].value = e
        }
        function j() {
          const e = this.resume()
          this.stack[this.stack.length - 1].value = e
        }
        function D() {
          const e = this.resume()
          this.stack[this.stack.length - 1].value = e
        }
        function _() {
          const e = this.stack[this.stack.length - 1]
          a('inReference')
            ? ((e.type += 'Reference'),
              (e.referenceType = a('referenceType') || 'shortcut'),
              delete e.url,
              delete e.title)
            : (delete e.identifier, delete e.label),
            i('referenceType')
        }
        function N() {
          const e = this.stack[this.stack.length - 1]
          a('inReference')
            ? ((e.type += 'Reference'),
              (e.referenceType = a('referenceType') || 'shortcut'),
              delete e.url,
              delete e.title)
            : (delete e.identifier, delete e.label),
            i('referenceType')
        }
        function I(e) {
          const t = this.stack[this.stack.length - 2],
            n = this.sliceSerialize(e)
          ;(t.label = ou(n)), (t.identifier = Ol(n).toLowerCase())
        }
        function B() {
          const e = this.stack[this.stack.length - 1],
            t = this.resume(),
            n = this.stack[this.stack.length - 1]
          i('inReference', !0),
            'link' === n.type ? (n.children = e.children) : (n.alt = t)
        }
        function z() {
          const e = this.resume()
          this.stack[this.stack.length - 1].url = e
        }
        function M() {
          const e = this.resume()
          this.stack[this.stack.length - 1].title = e
        }
        function U() {
          i('inReference')
        }
        function q() {
          i('referenceType', 'collapsed')
        }
        function V(e) {
          const t = this.resume(),
            n = this.stack[this.stack.length - 1]
          ;(n.label = t),
            (n.identifier = Ol(this.sliceSerialize(e)).toLowerCase()),
            i('referenceType', 'full')
        }
        function H(e) {
          i('characterReferenceType', e.type)
        }
        function W(e) {
          const t = this.sliceSerialize(e),
            n = a('characterReferenceType')
          let r
          n
            ? ((r = nu(t, 'characterReferenceMarkerNumeric' === n ? 10 : 16)),
              i('characterReferenceType'))
            : (r = yl(t))
          const o = this.stack.pop()
          ;(o.value += r), (o.position.end = l(e.end))
        }
        function $(e) {
          T.call(this, e)
          this.stack[this.stack.length - 1].url = this.sliceSerialize(e)
        }
        function Q(e) {
          T.call(this, e)
          this.stack[this.stack.length - 1].url =
            'mailto:' + this.sliceSerialize(e)
        }
        function G() {
          return { type: 'blockquote', children: [] }
        }
        function J() {
          return { type: 'code', lang: null, meta: null, value: '' }
        }
        function X() {
          return { type: 'inlineCode', value: '' }
        }
        function Y() {
          return {
            type: 'definition',
            identifier: '',
            label: null,
            title: null,
            url: '',
          }
        }
        function K() {
          return { type: 'emphasis', children: [] }
        }
        function Z() {
          return { type: 'heading', depth: void 0, children: [] }
        }
        function ee() {
          return { type: 'break' }
        }
        function te() {
          return { type: 'html', value: '' }
        }
        function ne() {
          return { type: 'image', title: null, url: '', alt: null }
        }
        function re() {
          return { type: 'link', title: null, url: '', children: [] }
        }
        function oe(e) {
          return {
            type: 'list',
            ordered: 'listOrdered' === e.type,
            start: null,
            spread: e._spread,
            children: [],
          }
        }
        function ie(e) {
          return {
            type: 'listItem',
            spread: e._spread,
            checked: null,
            children: [],
          }
        }
        function ae() {
          return { type: 'paragraph', children: [] }
        }
        function le() {
          return { type: 'strong', children: [] }
        }
        function ue() {
          return { type: 'text', value: '' }
        }
        function se() {
          return { type: 'thematicBreak' }
        }
      })(n)(
        tu(
          Kl(n)
            .document()
            .write(eu()(e, t, !0))
        )
      )
    )
  }
function uu(e, t) {
  let n = -1
  for (; ++n < t.length; ) {
    const r = t[n]
    Array.isArray(r) ? uu(e, r) : su(e, r)
  }
  return e
}
function su(e, t) {
  let n
  for (n in t)
    if (au.call(t, n)) {
      const r = 'canContainEols' === n || 'transforms' === n,
        o = (au.call(e, n) ? e[n] : void 0) || (e[n] = r ? [] : {}),
        i = t[n]
      i && (r ? (e[n] = [...o, ...i]) : Object.assign(o, i))
    }
}
function cu(e, t) {
  throw e
    ? new Error(
        'Cannot close `' +
          e.type +
          '` (' +
          Ui({ start: e.start, end: e.end }) +
          '): a different token (`' +
          t.type +
          '`, ' +
          Ui({ start: t.start, end: t.end }) +
          ') is open'
      )
    : new Error(
        'Cannot close document, a token (`' +
          t.type +
          '`, ' +
          Ui({ start: t.start, end: t.end }) +
          ') is still open'
      )
}
var fu = function (e) {
  Object.assign(this, {
    Parser: (t) => {
      const n = this.data('settings')
      return lu(
        t,
        Object.assign({}, n, e, {
          extensions: this.data('micromarkExtensions') || [],
          mdastExtensions: this.data('fromMarkdownExtensions') || [],
        })
      )
    },
  })
}
const pu = function (e, t, n) {
    const r = { type: String(e) }
    return (
      null != n || ('string' != typeof t && !Array.isArray(t))
        ? Object.assign(r, t)
        : (n = t),
      Array.isArray(n) ? (r.children = n) : null != n && (r.value = String(n)),
      r
    )
  },
  du = function (e) {
    if (null == e) return gu
    if ('string' == typeof e)
      return (function (e) {
        return hu(t)
        function t(t) {
          return t && t.type === e
        }
      })(e)
    if ('object' == typeof e)
      return Array.isArray(e)
        ? (function (e) {
            const t = []
            let n = -1
            for (; ++n < e.length; ) t[n] = du(e[n])
            return hu(r)
            function r(...e) {
              let n = -1
              for (; ++n < t.length; ) if (t[n].call(this, ...e)) return !0
              return !1
            }
          })(e)
        : (function (e) {
            return hu(t)
            function t(t) {
              let n
              for (n in e) if (t[n] !== e[n]) return !1
              return !0
            }
          })(e)
    if ('function' == typeof e) return hu(e)
    throw new Error('Expected function, string, or object as test')
  }
function hu(e) {
  return function (t, ...n) {
    return Boolean(
      t && 'object' == typeof t && 'type' in t && Boolean(e.call(this, t, ...n))
    )
  }
}
function gu() {
  return !0
}
const mu = function (e, t, n, r) {
  'function' == typeof t &&
    'function' != typeof n &&
    ((r = n), (n = t), (t = null))
  const o = du(t),
    i = r ? -1 : 1
  !(function e(a, l, u) {
    const s = a && 'object' == typeof a ? a : {}
    if ('string' == typeof s.type) {
      const e =
        'string' == typeof s.tagName
          ? s.tagName
          : 'string' == typeof s.name
            ? s.name
            : void 0
      Object.defineProperty(c, 'name', {
        value: 'node (' + a.type + (e ? '<' + e + '>' : '') + ')',
      })
    }
    return c
    function c() {
      let s,
        c,
        f,
        p = []
      if (
        (!t || o(a, l, u[u.length - 1] || null)) &&
        ((p = (function (e) {
          return Array.isArray(e) ? e : 'number' == typeof e ? [true, e] : [e]
        })(n(a, u))),
        false === p[0])
      )
        return p
      if (a.children && 'skip' !== p[0])
        for (
          c = (r ? a.children.length : -1) + i, f = u.concat(a);
          c > -1 && c < a.children.length;

        ) {
          if (((s = e(a.children[c], c, f)()), false === s[0])) return s
          c = 'number' == typeof s[1] ? s[1] : c + i
        }
      return p
    }
  })(e, void 0, [])()
}
const yu = function (e, t, n, r) {
    'function' == typeof t &&
      'function' != typeof n &&
      ((r = n), (n = t), (t = null)),
      mu(
        e,
        t,
        function (e, t) {
          const r = t[t.length - 1]
          return n(e, r ? r.children.indexOf(e) : null, r)
        },
        r
      )
  },
  vu = wu('start'),
  bu = wu('end')
function wu(e) {
  return function (t) {
    const n = (t && t.position && t.position[e]) || {}
    return {
      line: n.line || null,
      column: n.column || null,
      offset: n.offset > -1 ? n.offset : null,
    }
  }
}
const xu = {}.hasOwnProperty
function ku(e) {
  const t = Object.create(null)
  if (!e || !e.type) throw new Error('mdast-util-definitions expected node')
  return (
    yu(e, 'definition', (e) => {
      const n = Su(e.identifier)
      n && !xu.call(t, n) && (t[n] = e)
    }),
    function (e) {
      const n = Su(e)
      return n && xu.call(t, n) ? t[n] : null
    }
  )
}
function Su(e) {
  return String(e || '').toUpperCase()
}
const Eu = {}.hasOwnProperty
function Cu(e, t) {
  const n = t.data || {}
  return 'value' in t &&
    !(
      Eu.call(n, 'hName') ||
      Eu.call(n, 'hProperties') ||
      Eu.call(n, 'hChildren')
    )
    ? e.augment(t, pu('text', t.value))
    : e(t, 'div', Pu(e, t))
}
function Ou(e, t, n) {
  const r = t && t.type
  let o
  if (!r) throw new Error('Expected node, got `' + t + '`')
  return (
    (o = Eu.call(e.handlers, r)
      ? e.handlers[r]
      : e.passThrough && e.passThrough.includes(r)
        ? Au
        : e.unknownHandler),
    ('function' == typeof o ? o : Cu)(e, t, n)
  )
}
function Au(e, t) {
  return 'children' in t ? { ...t, children: Pu(e, t) } : t
}
function Pu(e, t) {
  const n = []
  if ('children' in t) {
    const r = t.children
    let o = -1
    for (; ++o < r.length; ) {
      const i = Ou(e, r[o], t)
      if (i) {
        if (
          o &&
          'break' === r[o - 1].type &&
          (Array.isArray(i) ||
            'text' !== i.type ||
            (i.value = i.value.replace(/^\s+/, '')),
          !Array.isArray(i) && 'element' === i.type)
        ) {
          const e = i.children[0]
          e && 'text' === e.type && (e.value = e.value.replace(/^\s+/, ''))
        }
        Array.isArray(i) ? n.push(...i) : n.push(i)
      }
    }
  }
  return n
}
function Tu(e) {
  const t = []
  let n = -1,
    r = 0,
    o = 0
  for (; ++n < e.length; ) {
    const i = e.charCodeAt(n)
    let a = ''
    if (37 === i && _a(e.charCodeAt(n + 1)) && _a(e.charCodeAt(n + 2))) o = 2
    else if (i < 128)
      /[!#$&-;=?-Z_a-z~]/.test(String.fromCharCode(i)) ||
        (a = String.fromCharCode(i))
    else if (i > 55295 && i < 57344) {
      const t = e.charCodeAt(n + 1)
      i < 56320 && t > 56319 && t < 57344
        ? ((a = String.fromCharCode(i, t)), (o = 1))
        : (a = '�')
    } else a = String.fromCharCode(i)
    a &&
      (t.push(e.slice(r, n), encodeURIComponent(a)), (r = n + o + 1), (a = '')),
      o && ((n += o), (o = 0))
  }
  return t.join('') + e.slice(r)
}
function Lu(e, t) {
  const n = []
  let r = -1
  for (t && n.push(pu('text', '\n')); ++r < e.length; )
    r && n.push(pu('text', '\n')), n.push(e[r])
  return t && e.length > 0 && n.push(pu('text', '\n')), n
}
function Ru(e) {
  let t = -1
  const n = []
  for (; ++t < e.footnoteOrder.length; ) {
    const r = e.footnoteById[e.footnoteOrder[t].toUpperCase()]
    if (!r) continue
    const o = Pu(e, r),
      i = String(r.identifier),
      a = Tu(i.toLowerCase())
    let l = 0
    const u = []
    for (; ++l <= e.footnoteCounts[i]; ) {
      const t = {
        type: 'element',
        tagName: 'a',
        properties: {
          href: '#' + e.clobberPrefix + 'fnref-' + a + (l > 1 ? '-' + l : ''),
          dataFootnoteBackref: !0,
          className: ['data-footnote-backref'],
          ariaLabel: e.footnoteBackLabel,
        },
        children: [{ type: 'text', value: '↩' }],
      }
      l > 1 &&
        t.children.push({
          type: 'element',
          tagName: 'sup',
          children: [{ type: 'text', value: String(l) }],
        }),
        u.length > 0 && u.push({ type: 'text', value: ' ' }),
        u.push(t)
    }
    const s = o[o.length - 1]
    if (s && 'element' === s.type && 'p' === s.tagName) {
      const e = s.children[s.children.length - 1]
      e && 'text' === e.type
        ? (e.value += ' ')
        : s.children.push({ type: 'text', value: ' ' }),
        s.children.push(...u)
    } else o.push(...u)
    const c = {
      type: 'element',
      tagName: 'li',
      properties: { id: e.clobberPrefix + 'fn-' + a },
      children: Lu(o, !0),
    }
    r.position && (c.position = r.position), n.push(c)
  }
  return 0 === n.length
    ? null
    : {
        type: 'element',
        tagName: 'section',
        properties: { dataFootnotes: !0, className: ['footnotes'] },
        children: [
          {
            type: 'element',
            tagName: e.footnoteLabelTagName,
            properties: {
              ...JSON.parse(JSON.stringify(e.footnoteLabelProperties)),
              id: 'footnote-label',
            },
            children: [pu('text', e.footnoteLabel)],
          },
          { type: 'text', value: '\n' },
          {
            type: 'element',
            tagName: 'ol',
            properties: {},
            children: Lu(n, !0),
          },
          { type: 'text', value: '\n' },
        ],
      }
}
function Fu(e, t) {
  const n = String(t.identifier),
    r = Tu(n.toLowerCase()),
    o = e.footnoteOrder.indexOf(n)
  let i
  ;-1 === o
    ? (e.footnoteOrder.push(n),
      (e.footnoteCounts[n] = 1),
      (i = e.footnoteOrder.length))
    : (e.footnoteCounts[n]++, (i = o + 1))
  const a = e.footnoteCounts[n]
  return e(t, 'sup', [
    e(
      t.position,
      'a',
      {
        href: '#' + e.clobberPrefix + 'fn-' + r,
        id: e.clobberPrefix + 'fnref-' + r + (a > 1 ? '-' + a : ''),
        dataFootnoteRef: !0,
        ariaDescribedBy: 'footnote-label',
      },
      [pu('text', String(i))]
    ),
  ])
}
function ju(e, t) {
  const n = t.referenceType
  let r = ']'
  if (
    ('collapsed' === n
      ? (r += '[]')
      : 'full' === n && (r += '[' + (t.label || t.identifier) + ']'),
    'imageReference' === t.type)
  )
    return pu('text', '![' + t.alt + r)
  const o = Pu(e, t),
    i = o[0]
  i && 'text' === i.type
    ? (i.value = '[' + i.value)
    : o.unshift(pu('text', '['))
  const a = o[o.length - 1]
  return a && 'text' === a.type ? (a.value += r) : o.push(pu('text', r)), o
}
function Du(e) {
  const t = e.spread
  return null == t ? e.children.length > 1 : t
}
function _u(e) {
  const t = String(e),
    n = /\r?\n|\r/g
  let r = n.exec(t),
    o = 0
  const i = []
  for (; r; )
    i.push(Nu(t.slice(o, r.index), o > 0, !0), r[0]),
      (o = r.index + r[0].length),
      (r = n.exec(t))
  return i.push(Nu(t.slice(o), o > 0, !1)), i.join('')
}
function Nu(e, t, n) {
  let r = 0,
    o = e.length
  if (t) {
    let t = e.codePointAt(r)
    for (; 9 === t || 32 === t; ) r++, (t = e.codePointAt(r))
  }
  if (n) {
    let t = e.codePointAt(o - 1)
    for (; 9 === t || 32 === t; ) o--, (t = e.codePointAt(o - 1))
  }
  return o > r ? e.slice(r, o) : ''
}
const Iu = {
  blockquote: function (e, t) {
    return e(t, 'blockquote', Lu(Pu(e, t), !0))
  },
  break: function (e, t) {
    return [e(t, 'br'), pu('text', '\n')]
  },
  code: function (e, t) {
    const n = t.value ? t.value + '\n' : '',
      r = t.lang && t.lang.match(/^[^ \t]+(?=[ \t]|$)/),
      o = {}
    r && (o.className = ['language-' + r])
    const i = e(t, 'code', o, [pu('text', n)])
    return t.meta && (i.data = { meta: t.meta }), e(t.position, 'pre', [i])
  },
  delete: function (e, t) {
    return e(t, 'del', Pu(e, t))
  },
  emphasis: function (e, t) {
    return e(t, 'em', Pu(e, t))
  },
  footnoteReference: Fu,
  footnote: function (e, t) {
    const n = e.footnoteById
    let r = 1
    for (; r in n; ) r++
    const o = String(r)
    return (
      (n[o] = {
        type: 'footnoteDefinition',
        identifier: o,
        children: [{ type: 'paragraph', children: t.children }],
        position: t.position,
      }),
      Fu(e, { type: 'footnoteReference', identifier: o, position: t.position })
    )
  },
  heading: function (e, t) {
    return e(t, 'h' + t.depth, Pu(e, t))
  },
  html: function (e, t) {
    return e.dangerous ? e.augment(t, pu('raw', t.value)) : null
  },
  imageReference: function (e, t) {
    const n = e.definition(t.identifier)
    if (!n) return ju(e, t)
    const r = { src: Tu(n.url || ''), alt: t.alt }
    return (
      null !== n.title && void 0 !== n.title && (r.title = n.title),
      e(t, 'img', r)
    )
  },
  image: function (e, t) {
    const n = { src: Tu(t.url), alt: t.alt }
    return (
      null !== t.title && void 0 !== t.title && (n.title = t.title),
      e(t, 'img', n)
    )
  },
  inlineCode: function (e, t) {
    return e(t, 'code', [pu('text', t.value.replace(/\r?\n|\r/g, ' '))])
  },
  linkReference: function (e, t) {
    const n = e.definition(t.identifier)
    if (!n) return ju(e, t)
    const r = { href: Tu(n.url || '') }
    return (
      null !== n.title && void 0 !== n.title && (r.title = n.title),
      e(t, 'a', r, Pu(e, t))
    )
  },
  link: function (e, t) {
    const n = { href: Tu(t.url) }
    return (
      null !== t.title && void 0 !== t.title && (n.title = t.title),
      e(t, 'a', n, Pu(e, t))
    )
  },
  listItem: function (e, t, n) {
    const r = Pu(e, t),
      o = n
        ? (function (e) {
            let t = e.spread
            const n = e.children
            let r = -1
            for (; !t && ++r < n.length; ) t = Du(n[r])
            return Boolean(t)
          })(n)
        : Du(t),
      i = {},
      a = []
    if ('boolean' == typeof t.checked) {
      let n
      r[0] && 'element' === r[0].type && 'p' === r[0].tagName
        ? (n = r[0])
        : ((n = e(null, 'p', [])), r.unshift(n)),
        n.children.length > 0 && n.children.unshift(pu('text', ' ')),
        n.children.unshift(
          e(null, 'input', {
            type: 'checkbox',
            checked: t.checked,
            disabled: !0,
          })
        ),
        (i.className = ['task-list-item'])
    }
    let l = -1
    for (; ++l < r.length; ) {
      const e = r[l]
      ;(o || 0 !== l || 'element' !== e.type || 'p' !== e.tagName) &&
        a.push(pu('text', '\n')),
        'element' !== e.type || 'p' !== e.tagName || o
          ? a.push(e)
          : a.push(...e.children)
    }
    const u = r[r.length - 1]
    return (
      !u ||
        (!o && 'tagName' in u && 'p' === u.tagName) ||
        a.push(pu('text', '\n')),
      e(t, 'li', i, a)
    )
  },
  list: function (e, t) {
    const n = {},
      r = t.ordered ? 'ol' : 'ul',
      o = Pu(e, t)
    let i = -1
    for (
      'number' == typeof t.start && 1 !== t.start && (n.start = t.start);
      ++i < o.length;

    ) {
      const e = o[i]
      if (
        'element' === e.type &&
        'li' === e.tagName &&
        e.properties &&
        Array.isArray(e.properties.className) &&
        e.properties.className.includes('task-list-item')
      ) {
        n.className = ['contains-task-list']
        break
      }
    }
    return e(t, r, n, Lu(o, !0))
  },
  paragraph: function (e, t) {
    return e(t, 'p', Pu(e, t))
  },
  root: function (e, t) {
    return e.augment(t, pu('root', Lu(Pu(e, t))))
  },
  strong: function (e, t) {
    return e(t, 'strong', Pu(e, t))
  },
  table: function (e, t) {
    const n = t.children
    let r = -1
    const o = t.align || [],
      i = []
    for (; ++r < n.length; ) {
      const a = n[r].children,
        l = 0 === r ? 'th' : 'td',
        u = []
      let s = -1
      const c = t.align ? o.length : a.length
      for (; ++s < c; ) {
        const t = a[s]
        u.push(e(t, l, { align: o[s] }, t ? Pu(e, t) : []))
      }
      i[r] = e(n[r], 'tr', Lu(u, !0))
    }
    return e(
      t,
      'table',
      Lu(
        [e(i[0].position, 'thead', Lu([i[0]], !0))].concat(
          i[1]
            ? e(
                { start: vu(i[1]), end: bu(i[i.length - 1]) },
                'tbody',
                Lu(i.slice(1), !0)
              )
            : []
        ),
        !0
      )
    )
  },
  text: function (e, t) {
    return e.augment(t, pu('text', _u(String(t.value))))
  },
  thematicBreak: function (e, t) {
    return e(t, 'hr')
  },
  toml: Bu,
  yaml: Bu,
  definition: Bu,
  footnoteDefinition: Bu,
}
function Bu() {
  return null
}
const zu = {}.hasOwnProperty
function Mu(e, t) {
  const n = t || {},
    r = n.allowDangerousHtml || !1,
    o = {}
  return (
    (a.dangerous = r),
    (a.clobberPrefix =
      void 0 === n.clobberPrefix || null === n.clobberPrefix
        ? 'user-content-'
        : n.clobberPrefix),
    (a.footnoteLabel = n.footnoteLabel || 'Footnotes'),
    (a.footnoteLabelTagName = n.footnoteLabelTagName || 'h2'),
    (a.footnoteLabelProperties = n.footnoteLabelProperties || {
      className: ['sr-only'],
    }),
    (a.footnoteBackLabel = n.footnoteBackLabel || 'Back to content'),
    (a.definition = ku(e)),
    (a.footnoteById = o),
    (a.footnoteOrder = []),
    (a.footnoteCounts = {}),
    (a.augment = i),
    (a.handlers = { ...Iu, ...n.handlers }),
    (a.unknownHandler = n.unknownHandler),
    (a.passThrough = n.passThrough),
    yu(e, 'footnoteDefinition', (e) => {
      const t = String(e.identifier).toUpperCase()
      zu.call(o, t) || (o[t] = e)
    }),
    a
  )
  function i(e, t) {
    if (e && 'data' in e && e.data) {
      const n = e.data
      n.hName &&
        ('element' !== t.type &&
          (t = { type: 'element', tagName: '', properties: {}, children: [] }),
        (t.tagName = n.hName)),
        'element' === t.type &&
          n.hProperties &&
          (t.properties = { ...t.properties, ...n.hProperties }),
        'children' in t &&
          t.children &&
          n.hChildren &&
          (t.children = n.hChildren)
    }
    if (e) {
      const r = 'type' in e ? e : { position: e }
      ;(n = r) &&
        n.position &&
        n.position.start &&
        n.position.start.line &&
        n.position.start.column &&
        n.position.end &&
        n.position.end.line &&
        n.position.end.column &&
        (t.position = { start: vu(r), end: bu(r) })
    }
    var n
    return t
  }
  function a(e, t, n, r) {
    return (
      Array.isArray(n) && ((r = n), (n = {})),
      i(e, {
        type: 'element',
        tagName: t,
        properties: n || {},
        children: r || [],
      })
    )
  }
}
function Uu(e, t) {
  const n = Mu(e, t),
    r = Ou(n, e, null),
    o = Ru(n)
  return (
    o && r.children.push(pu('text', '\n'), o),
    Array.isArray(r) ? { type: 'root', children: r } : r
  )
}
var qu = function (e, t) {
  return e && 'run' in e
    ? (function (e, t) {
        return (n, r, o) => {
          e.run(Uu(n, t), r, (e) => {
            o(e)
          })
        }
      })(e, t)
    : (function (e) {
        return (t) => Uu(t, e)
      })(e || t)
}
var Vu
Vu = i('gBCU4')()
class Hu {
  constructor(e, t, n) {
    ;(this.property = e), (this.normal = t), n && (this.space = n)
  }
}
function Wu(e, t) {
  const n = {},
    r = {}
  let o = -1
  for (; ++o < e.length; )
    Object.assign(n, e[o].property), Object.assign(r, e[o].normal)
  return new Hu(n, r, t)
}
function $u(e) {
  return e.toLowerCase()
}
;(Hu.prototype.property = {}),
  (Hu.prototype.normal = {}),
  (Hu.prototype.space = null)
class Qu {
  constructor(e, t) {
    ;(this.property = e), (this.attribute = t)
  }
}
;(Qu.prototype.space = null),
  (Qu.prototype.boolean = !1),
  (Qu.prototype.booleanish = !1),
  (Qu.prototype.overloadedBoolean = !1),
  (Qu.prototype.number = !1),
  (Qu.prototype.commaSeparated = !1),
  (Qu.prototype.spaceSeparated = !1),
  (Qu.prototype.commaOrSpaceSeparated = !1),
  (Qu.prototype.mustUseProperty = !1),
  (Qu.prototype.defined = !1)
var Gu = {}
e(Gu, 'boolean', () => Xu),
  e(Gu, 'booleanish', () => Yu),
  e(Gu, 'overloadedBoolean', () => Ku),
  e(Gu, 'number', () => Zu),
  e(Gu, 'spaceSeparated', () => es),
  e(Gu, 'commaSeparated', () => ts),
  e(Gu, 'commaOrSpaceSeparated', () => ns)
let Ju = 0
const Xu = rs(),
  Yu = rs(),
  Ku = rs(),
  Zu = rs(),
  es = rs(),
  ts = rs(),
  ns = rs()
function rs() {
  return 2 ** ++Ju
}
const os = Object.keys(Gu)
class is extends Qu {
  constructor(e, t, n, r) {
    let o = -1
    if ((super(e, t), as(this, 'space', r), 'number' == typeof n))
      for (; ++o < os.length; ) {
        const e = os[o]
        as(this, os[o], (n & Gu[e]) === Gu[e])
      }
  }
}
function as(e, t, n) {
  n && (e[t] = n)
}
is.prototype.defined = !0
const ls = {}.hasOwnProperty
function us(e) {
  const t = {},
    n = {}
  let r
  for (r in e.properties)
    if (ls.call(e.properties, r)) {
      const o = e.properties[r],
        i = new is(r, e.transform(e.attributes || {}, r), o, e.space)
      e.mustUseProperty &&
        e.mustUseProperty.includes(r) &&
        (i.mustUseProperty = !0),
        (t[r] = i),
        (n[$u(r)] = r),
        (n[$u(i.attribute)] = r)
    }
  return new Hu(t, n, e.space)
}
const ss = us({
    space: 'xlink',
    transform: (e, t) => 'xlink:' + t.slice(5).toLowerCase(),
    properties: {
      xLinkActuate: null,
      xLinkArcRole: null,
      xLinkHref: null,
      xLinkRole: null,
      xLinkShow: null,
      xLinkTitle: null,
      xLinkType: null,
    },
  }),
  cs = us({
    space: 'xml',
    transform: (e, t) => 'xml:' + t.slice(3).toLowerCase(),
    properties: { xmlLang: null, xmlBase: null, xmlSpace: null },
  })
function fs(e, t) {
  return t in e ? e[t] : t
}
function ps(e, t) {
  return fs(e, t.toLowerCase())
}
const ds = us({
    space: 'xmlns',
    attributes: { xmlnsxlink: 'xmlns:xlink' },
    transform: ps,
    properties: { xmlns: null, xmlnsXLink: null },
  }),
  hs = us({
    transform: (e, t) =>
      'role' === t ? t : 'aria-' + t.slice(4).toLowerCase(),
    properties: {
      ariaActiveDescendant: null,
      ariaAtomic: Yu,
      ariaAutoComplete: null,
      ariaBusy: Yu,
      ariaChecked: Yu,
      ariaColCount: Zu,
      ariaColIndex: Zu,
      ariaColSpan: Zu,
      ariaControls: es,
      ariaCurrent: null,
      ariaDescribedBy: es,
      ariaDetails: null,
      ariaDisabled: Yu,
      ariaDropEffect: es,
      ariaErrorMessage: null,
      ariaExpanded: Yu,
      ariaFlowTo: es,
      ariaGrabbed: Yu,
      ariaHasPopup: null,
      ariaHidden: Yu,
      ariaInvalid: null,
      ariaKeyShortcuts: null,
      ariaLabel: null,
      ariaLabelledBy: es,
      ariaLevel: Zu,
      ariaLive: null,
      ariaModal: Yu,
      ariaMultiLine: Yu,
      ariaMultiSelectable: Yu,
      ariaOrientation: null,
      ariaOwns: es,
      ariaPlaceholder: null,
      ariaPosInSet: Zu,
      ariaPressed: Yu,
      ariaReadOnly: Yu,
      ariaRelevant: null,
      ariaRequired: Yu,
      ariaRoleDescription: es,
      ariaRowCount: Zu,
      ariaRowIndex: Zu,
      ariaRowSpan: Zu,
      ariaSelected: Yu,
      ariaSetSize: Zu,
      ariaSort: null,
      ariaValueMax: Zu,
      ariaValueMin: Zu,
      ariaValueNow: Zu,
      ariaValueText: null,
      role: null,
    },
  }),
  gs = us({
    space: 'html',
    attributes: {
      acceptcharset: 'accept-charset',
      classname: 'class',
      htmlfor: 'for',
      httpequiv: 'http-equiv',
    },
    transform: ps,
    mustUseProperty: ['checked', 'multiple', 'muted', 'selected'],
    properties: {
      abbr: null,
      accept: ts,
      acceptCharset: es,
      accessKey: es,
      action: null,
      allow: null,
      allowFullScreen: Xu,
      allowPaymentRequest: Xu,
      allowUserMedia: Xu,
      alt: null,
      as: null,
      async: Xu,
      autoCapitalize: null,
      autoComplete: es,
      autoFocus: Xu,
      autoPlay: Xu,
      capture: Xu,
      charSet: null,
      checked: Xu,
      cite: null,
      className: es,
      cols: Zu,
      colSpan: null,
      content: null,
      contentEditable: Yu,
      controls: Xu,
      controlsList: es,
      coords: Zu | ts,
      crossOrigin: null,
      data: null,
      dateTime: null,
      decoding: null,
      default: Xu,
      defer: Xu,
      dir: null,
      dirName: null,
      disabled: Xu,
      download: Ku,
      draggable: Yu,
      encType: null,
      enterKeyHint: null,
      form: null,
      formAction: null,
      formEncType: null,
      formMethod: null,
      formNoValidate: Xu,
      formTarget: null,
      headers: es,
      height: Zu,
      hidden: Xu,
      high: Zu,
      href: null,
      hrefLang: null,
      htmlFor: es,
      httpEquiv: es,
      id: null,
      imageSizes: null,
      imageSrcSet: null,
      inputMode: null,
      integrity: null,
      is: null,
      isMap: Xu,
      itemId: null,
      itemProp: es,
      itemRef: es,
      itemScope: Xu,
      itemType: es,
      kind: null,
      label: null,
      lang: null,
      language: null,
      list: null,
      loading: null,
      loop: Xu,
      low: Zu,
      manifest: null,
      max: null,
      maxLength: Zu,
      media: null,
      method: null,
      min: null,
      minLength: Zu,
      multiple: Xu,
      muted: Xu,
      name: null,
      nonce: null,
      noModule: Xu,
      noValidate: Xu,
      onAbort: null,
      onAfterPrint: null,
      onAuxClick: null,
      onBeforeMatch: null,
      onBeforePrint: null,
      onBeforeUnload: null,
      onBlur: null,
      onCancel: null,
      onCanPlay: null,
      onCanPlayThrough: null,
      onChange: null,
      onClick: null,
      onClose: null,
      onContextLost: null,
      onContextMenu: null,
      onContextRestored: null,
      onCopy: null,
      onCueChange: null,
      onCut: null,
      onDblClick: null,
      onDrag: null,
      onDragEnd: null,
      onDragEnter: null,
      onDragExit: null,
      onDragLeave: null,
      onDragOver: null,
      onDragStart: null,
      onDrop: null,
      onDurationChange: null,
      onEmptied: null,
      onEnded: null,
      onError: null,
      onFocus: null,
      onFormData: null,
      onHashChange: null,
      onInput: null,
      onInvalid: null,
      onKeyDown: null,
      onKeyPress: null,
      onKeyUp: null,
      onLanguageChange: null,
      onLoad: null,
      onLoadedData: null,
      onLoadedMetadata: null,
      onLoadEnd: null,
      onLoadStart: null,
      onMessage: null,
      onMessageError: null,
      onMouseDown: null,
      onMouseEnter: null,
      onMouseLeave: null,
      onMouseMove: null,
      onMouseOut: null,
      onMouseOver: null,
      onMouseUp: null,
      onOffline: null,
      onOnline: null,
      onPageHide: null,
      onPageShow: null,
      onPaste: null,
      onPause: null,
      onPlay: null,
      onPlaying: null,
      onPopState: null,
      onProgress: null,
      onRateChange: null,
      onRejectionHandled: null,
      onReset: null,
      onResize: null,
      onScroll: null,
      onScrollEnd: null,
      onSecurityPolicyViolation: null,
      onSeeked: null,
      onSeeking: null,
      onSelect: null,
      onSlotChange: null,
      onStalled: null,
      onStorage: null,
      onSubmit: null,
      onSuspend: null,
      onTimeUpdate: null,
      onToggle: null,
      onUnhandledRejection: null,
      onUnload: null,
      onVolumeChange: null,
      onWaiting: null,
      onWheel: null,
      open: Xu,
      optimum: Zu,
      pattern: null,
      ping: es,
      placeholder: null,
      playsInline: Xu,
      poster: null,
      preload: null,
      readOnly: Xu,
      referrerPolicy: null,
      rel: es,
      required: Xu,
      reversed: Xu,
      rows: Zu,
      rowSpan: Zu,
      sandbox: es,
      scope: null,
      scoped: Xu,
      seamless: Xu,
      selected: Xu,
      shape: null,
      size: Zu,
      sizes: null,
      slot: null,
      span: Zu,
      spellCheck: Yu,
      src: null,
      srcDoc: null,
      srcLang: null,
      srcSet: null,
      start: Zu,
      step: null,
      style: null,
      tabIndex: Zu,
      target: null,
      title: null,
      translate: null,
      type: null,
      typeMustMatch: Xu,
      useMap: null,
      value: Yu,
      width: Zu,
      wrap: null,
      align: null,
      aLink: null,
      archive: es,
      axis: null,
      background: null,
      bgColor: null,
      border: Zu,
      borderColor: null,
      bottomMargin: Zu,
      cellPadding: null,
      cellSpacing: null,
      char: null,
      charOff: null,
      classId: null,
      clear: null,
      code: null,
      codeBase: null,
      codeType: null,
      color: null,
      compact: Xu,
      declare: Xu,
      event: null,
      face: null,
      frame: null,
      frameBorder: null,
      hSpace: Zu,
      leftMargin: Zu,
      link: null,
      longDesc: null,
      lowSrc: null,
      marginHeight: Zu,
      marginWidth: Zu,
      noResize: Xu,
      noHref: Xu,
      noShade: Xu,
      noWrap: Xu,
      object: null,
      profile: null,
      prompt: null,
      rev: null,
      rightMargin: Zu,
      rules: null,
      scheme: null,
      scrolling: Yu,
      standby: null,
      summary: null,
      text: null,
      topMargin: Zu,
      valueType: null,
      version: null,
      vAlign: null,
      vLink: null,
      vSpace: Zu,
      allowTransparency: null,
      autoCorrect: null,
      autoSave: null,
      disablePictureInPicture: Xu,
      disableRemotePlayback: Xu,
      prefix: null,
      property: null,
      results: Zu,
      security: null,
      unselectable: null,
    },
  }),
  ms = us({
    space: 'svg',
    attributes: {
      accentHeight: 'accent-height',
      alignmentBaseline: 'alignment-baseline',
      arabicForm: 'arabic-form',
      baselineShift: 'baseline-shift',
      capHeight: 'cap-height',
      className: 'class',
      clipPath: 'clip-path',
      clipRule: 'clip-rule',
      colorInterpolation: 'color-interpolation',
      colorInterpolationFilters: 'color-interpolation-filters',
      colorProfile: 'color-profile',
      colorRendering: 'color-rendering',
      crossOrigin: 'crossorigin',
      dataType: 'datatype',
      dominantBaseline: 'dominant-baseline',
      enableBackground: 'enable-background',
      fillOpacity: 'fill-opacity',
      fillRule: 'fill-rule',
      floodColor: 'flood-color',
      floodOpacity: 'flood-opacity',
      fontFamily: 'font-family',
      fontSize: 'font-size',
      fontSizeAdjust: 'font-size-adjust',
      fontStretch: 'font-stretch',
      fontStyle: 'font-style',
      fontVariant: 'font-variant',
      fontWeight: 'font-weight',
      glyphName: 'glyph-name',
      glyphOrientationHorizontal: 'glyph-orientation-horizontal',
      glyphOrientationVertical: 'glyph-orientation-vertical',
      hrefLang: 'hreflang',
      horizAdvX: 'horiz-adv-x',
      horizOriginX: 'horiz-origin-x',
      horizOriginY: 'horiz-origin-y',
      imageRendering: 'image-rendering',
      letterSpacing: 'letter-spacing',
      lightingColor: 'lighting-color',
      markerEnd: 'marker-end',
      markerMid: 'marker-mid',
      markerStart: 'marker-start',
      navDown: 'nav-down',
      navDownLeft: 'nav-down-left',
      navDownRight: 'nav-down-right',
      navLeft: 'nav-left',
      navNext: 'nav-next',
      navPrev: 'nav-prev',
      navRight: 'nav-right',
      navUp: 'nav-up',
      navUpLeft: 'nav-up-left',
      navUpRight: 'nav-up-right',
      onAbort: 'onabort',
      onActivate: 'onactivate',
      onAfterPrint: 'onafterprint',
      onBeforePrint: 'onbeforeprint',
      onBegin: 'onbegin',
      onCancel: 'oncancel',
      onCanPlay: 'oncanplay',
      onCanPlayThrough: 'oncanplaythrough',
      onChange: 'onchange',
      onClick: 'onclick',
      onClose: 'onclose',
      onCopy: 'oncopy',
      onCueChange: 'oncuechange',
      onCut: 'oncut',
      onDblClick: 'ondblclick',
      onDrag: 'ondrag',
      onDragEnd: 'ondragend',
      onDragEnter: 'ondragenter',
      onDragExit: 'ondragexit',
      onDragLeave: 'ondragleave',
      onDragOver: 'ondragover',
      onDragStart: 'ondragstart',
      onDrop: 'ondrop',
      onDurationChange: 'ondurationchange',
      onEmptied: 'onemptied',
      onEnd: 'onend',
      onEnded: 'onended',
      onError: 'onerror',
      onFocus: 'onfocus',
      onFocusIn: 'onfocusin',
      onFocusOut: 'onfocusout',
      onHashChange: 'onhashchange',
      onInput: 'oninput',
      onInvalid: 'oninvalid',
      onKeyDown: 'onkeydown',
      onKeyPress: 'onkeypress',
      onKeyUp: 'onkeyup',
      onLoad: 'onload',
      onLoadedData: 'onloadeddata',
      onLoadedMetadata: 'onloadedmetadata',
      onLoadStart: 'onloadstart',
      onMessage: 'onmessage',
      onMouseDown: 'onmousedown',
      onMouseEnter: 'onmouseenter',
      onMouseLeave: 'onmouseleave',
      onMouseMove: 'onmousemove',
      onMouseOut: 'onmouseout',
      onMouseOver: 'onmouseover',
      onMouseUp: 'onmouseup',
      onMouseWheel: 'onmousewheel',
      onOffline: 'onoffline',
      onOnline: 'ononline',
      onPageHide: 'onpagehide',
      onPageShow: 'onpageshow',
      onPaste: 'onpaste',
      onPause: 'onpause',
      onPlay: 'onplay',
      onPlaying: 'onplaying',
      onPopState: 'onpopstate',
      onProgress: 'onprogress',
      onRateChange: 'onratechange',
      onRepeat: 'onrepeat',
      onReset: 'onreset',
      onResize: 'onresize',
      onScroll: 'onscroll',
      onSeeked: 'onseeked',
      onSeeking: 'onseeking',
      onSelect: 'onselect',
      onShow: 'onshow',
      onStalled: 'onstalled',
      onStorage: 'onstorage',
      onSubmit: 'onsubmit',
      onSuspend: 'onsuspend',
      onTimeUpdate: 'ontimeupdate',
      onToggle: 'ontoggle',
      onUnload: 'onunload',
      onVolumeChange: 'onvolumechange',
      onWaiting: 'onwaiting',
      onZoom: 'onzoom',
      overlinePosition: 'overline-position',
      overlineThickness: 'overline-thickness',
      paintOrder: 'paint-order',
      panose1: 'panose-1',
      pointerEvents: 'pointer-events',
      referrerPolicy: 'referrerpolicy',
      renderingIntent: 'rendering-intent',
      shapeRendering: 'shape-rendering',
      stopColor: 'stop-color',
      stopOpacity: 'stop-opacity',
      strikethroughPosition: 'strikethrough-position',
      strikethroughThickness: 'strikethrough-thickness',
      strokeDashArray: 'stroke-dasharray',
      strokeDashOffset: 'stroke-dashoffset',
      strokeLineCap: 'stroke-linecap',
      strokeLineJoin: 'stroke-linejoin',
      strokeMiterLimit: 'stroke-miterlimit',
      strokeOpacity: 'stroke-opacity',
      strokeWidth: 'stroke-width',
      tabIndex: 'tabindex',
      textAnchor: 'text-anchor',
      textDecoration: 'text-decoration',
      textRendering: 'text-rendering',
      typeOf: 'typeof',
      underlinePosition: 'underline-position',
      underlineThickness: 'underline-thickness',
      unicodeBidi: 'unicode-bidi',
      unicodeRange: 'unicode-range',
      unitsPerEm: 'units-per-em',
      vAlphabetic: 'v-alphabetic',
      vHanging: 'v-hanging',
      vIdeographic: 'v-ideographic',
      vMathematical: 'v-mathematical',
      vectorEffect: 'vector-effect',
      vertAdvY: 'vert-adv-y',
      vertOriginX: 'vert-origin-x',
      vertOriginY: 'vert-origin-y',
      wordSpacing: 'word-spacing',
      writingMode: 'writing-mode',
      xHeight: 'x-height',
      playbackOrder: 'playbackorder',
      timelineBegin: 'timelinebegin',
    },
    transform: fs,
    properties: {
      about: ns,
      accentHeight: Zu,
      accumulate: null,
      additive: null,
      alignmentBaseline: null,
      alphabetic: Zu,
      amplitude: Zu,
      arabicForm: null,
      ascent: Zu,
      attributeName: null,
      attributeType: null,
      azimuth: Zu,
      bandwidth: null,
      baselineShift: null,
      baseFrequency: null,
      baseProfile: null,
      bbox: null,
      begin: null,
      bias: Zu,
      by: null,
      calcMode: null,
      capHeight: Zu,
      className: es,
      clip: null,
      clipPath: null,
      clipPathUnits: null,
      clipRule: null,
      color: null,
      colorInterpolation: null,
      colorInterpolationFilters: null,
      colorProfile: null,
      colorRendering: null,
      content: null,
      contentScriptType: null,
      contentStyleType: null,
      crossOrigin: null,
      cursor: null,
      cx: null,
      cy: null,
      d: null,
      dataType: null,
      defaultAction: null,
      descent: Zu,
      diffuseConstant: Zu,
      direction: null,
      display: null,
      dur: null,
      divisor: Zu,
      dominantBaseline: null,
      download: Xu,
      dx: null,
      dy: null,
      edgeMode: null,
      editable: null,
      elevation: Zu,
      enableBackground: null,
      end: null,
      event: null,
      exponent: Zu,
      externalResourcesRequired: null,
      fill: null,
      fillOpacity: Zu,
      fillRule: null,
      filter: null,
      filterRes: null,
      filterUnits: null,
      floodColor: null,
      floodOpacity: null,
      focusable: null,
      focusHighlight: null,
      fontFamily: null,
      fontSize: null,
      fontSizeAdjust: null,
      fontStretch: null,
      fontStyle: null,
      fontVariant: null,
      fontWeight: null,
      format: null,
      fr: null,
      from: null,
      fx: null,
      fy: null,
      g1: ts,
      g2: ts,
      glyphName: ts,
      glyphOrientationHorizontal: null,
      glyphOrientationVertical: null,
      glyphRef: null,
      gradientTransform: null,
      gradientUnits: null,
      handler: null,
      hanging: Zu,
      hatchContentUnits: null,
      hatchUnits: null,
      height: null,
      href: null,
      hrefLang: null,
      horizAdvX: Zu,
      horizOriginX: Zu,
      horizOriginY: Zu,
      id: null,
      ideographic: Zu,
      imageRendering: null,
      initialVisibility: null,
      in: null,
      in2: null,
      intercept: Zu,
      k: Zu,
      k1: Zu,
      k2: Zu,
      k3: Zu,
      k4: Zu,
      kernelMatrix: ns,
      kernelUnitLength: null,
      keyPoints: null,
      keySplines: null,
      keyTimes: null,
      kerning: null,
      lang: null,
      lengthAdjust: null,
      letterSpacing: null,
      lightingColor: null,
      limitingConeAngle: Zu,
      local: null,
      markerEnd: null,
      markerMid: null,
      markerStart: null,
      markerHeight: null,
      markerUnits: null,
      markerWidth: null,
      mask: null,
      maskContentUnits: null,
      maskUnits: null,
      mathematical: null,
      max: null,
      media: null,
      mediaCharacterEncoding: null,
      mediaContentEncodings: null,
      mediaSize: Zu,
      mediaTime: null,
      method: null,
      min: null,
      mode: null,
      name: null,
      navDown: null,
      navDownLeft: null,
      navDownRight: null,
      navLeft: null,
      navNext: null,
      navPrev: null,
      navRight: null,
      navUp: null,
      navUpLeft: null,
      navUpRight: null,
      numOctaves: null,
      observer: null,
      offset: null,
      onAbort: null,
      onActivate: null,
      onAfterPrint: null,
      onBeforePrint: null,
      onBegin: null,
      onCancel: null,
      onCanPlay: null,
      onCanPlayThrough: null,
      onChange: null,
      onClick: null,
      onClose: null,
      onCopy: null,
      onCueChange: null,
      onCut: null,
      onDblClick: null,
      onDrag: null,
      onDragEnd: null,
      onDragEnter: null,
      onDragExit: null,
      onDragLeave: null,
      onDragOver: null,
      onDragStart: null,
      onDrop: null,
      onDurationChange: null,
      onEmptied: null,
      onEnd: null,
      onEnded: null,
      onError: null,
      onFocus: null,
      onFocusIn: null,
      onFocusOut: null,
      onHashChange: null,
      onInput: null,
      onInvalid: null,
      onKeyDown: null,
      onKeyPress: null,
      onKeyUp: null,
      onLoad: null,
      onLoadedData: null,
      onLoadedMetadata: null,
      onLoadStart: null,
      onMessage: null,
      onMouseDown: null,
      onMouseEnter: null,
      onMouseLeave: null,
      onMouseMove: null,
      onMouseOut: null,
      onMouseOver: null,
      onMouseUp: null,
      onMouseWheel: null,
      onOffline: null,
      onOnline: null,
      onPageHide: null,
      onPageShow: null,
      onPaste: null,
      onPause: null,
      onPlay: null,
      onPlaying: null,
      onPopState: null,
      onProgress: null,
      onRateChange: null,
      onRepeat: null,
      onReset: null,
      onResize: null,
      onScroll: null,
      onSeeked: null,
      onSeeking: null,
      onSelect: null,
      onShow: null,
      onStalled: null,
      onStorage: null,
      onSubmit: null,
      onSuspend: null,
      onTimeUpdate: null,
      onToggle: null,
      onUnload: null,
      onVolumeChange: null,
      onWaiting: null,
      onZoom: null,
      opacity: null,
      operator: null,
      order: null,
      orient: null,
      orientation: null,
      origin: null,
      overflow: null,
      overlay: null,
      overlinePosition: Zu,
      overlineThickness: Zu,
      paintOrder: null,
      panose1: null,
      path: null,
      pathLength: Zu,
      patternContentUnits: null,
      patternTransform: null,
      patternUnits: null,
      phase: null,
      ping: es,
      pitch: null,
      playbackOrder: null,
      pointerEvents: null,
      points: null,
      pointsAtX: Zu,
      pointsAtY: Zu,
      pointsAtZ: Zu,
      preserveAlpha: null,
      preserveAspectRatio: null,
      primitiveUnits: null,
      propagate: null,
      property: ns,
      r: null,
      radius: null,
      referrerPolicy: null,
      refX: null,
      refY: null,
      rel: ns,
      rev: ns,
      renderingIntent: null,
      repeatCount: null,
      repeatDur: null,
      requiredExtensions: ns,
      requiredFeatures: ns,
      requiredFonts: ns,
      requiredFormats: ns,
      resource: null,
      restart: null,
      result: null,
      rotate: null,
      rx: null,
      ry: null,
      scale: null,
      seed: null,
      shapeRendering: null,
      side: null,
      slope: null,
      snapshotTime: null,
      specularConstant: Zu,
      specularExponent: Zu,
      spreadMethod: null,
      spacing: null,
      startOffset: null,
      stdDeviation: null,
      stemh: null,
      stemv: null,
      stitchTiles: null,
      stopColor: null,
      stopOpacity: null,
      strikethroughPosition: Zu,
      strikethroughThickness: Zu,
      string: null,
      stroke: null,
      strokeDashArray: ns,
      strokeDashOffset: null,
      strokeLineCap: null,
      strokeLineJoin: null,
      strokeMiterLimit: Zu,
      strokeOpacity: Zu,
      strokeWidth: null,
      style: null,
      surfaceScale: Zu,
      syncBehavior: null,
      syncBehaviorDefault: null,
      syncMaster: null,
      syncTolerance: null,
      syncToleranceDefault: null,
      systemLanguage: ns,
      tabIndex: Zu,
      tableValues: null,
      target: null,
      targetX: Zu,
      targetY: Zu,
      textAnchor: null,
      textDecoration: null,
      textRendering: null,
      textLength: null,
      timelineBegin: null,
      title: null,
      transformBehavior: null,
      type: null,
      typeOf: ns,
      to: null,
      transform: null,
      u1: null,
      u2: null,
      underlinePosition: Zu,
      underlineThickness: Zu,
      unicode: null,
      unicodeBidi: null,
      unicodeRange: null,
      unitsPerEm: Zu,
      values: null,
      vAlphabetic: Zu,
      vMathematical: Zu,
      vectorEffect: null,
      vHanging: Zu,
      vIdeographic: Zu,
      version: null,
      vertAdvY: Zu,
      vertOriginX: Zu,
      vertOriginY: Zu,
      viewBox: null,
      viewTarget: null,
      visibility: null,
      width: null,
      widths: null,
      wordSpacing: null,
      writingMode: null,
      x: null,
      x1: null,
      x2: null,
      xChannelSelector: null,
      xHeight: Zu,
      y: null,
      y1: null,
      y2: null,
      yChannelSelector: null,
      z: null,
      zoomAndPan: null,
    },
  }),
  ys = /^data[-\w.:]+$/i,
  vs = /-[a-z]/g,
  bs = /[A-Z]/g
function ws(e, t) {
  const n = $u(t)
  let r = t,
    o = Qu
  if (n in e.normal) return e.property[e.normal[n]]
  if (n.length > 4 && 'data' === n.slice(0, 4) && ys.test(t)) {
    if ('-' === t.charAt(4)) {
      const e = t.slice(5).replace(vs, ks)
      r = 'data' + e.charAt(0).toUpperCase() + e.slice(1)
    } else {
      const e = t.slice(4)
      if (!vs.test(e)) {
        let n = e.replace(bs, xs)
        '-' !== n.charAt(0) && (n = '-' + n), (t = 'data' + n)
      }
    }
    o = is
  }
  return new o(r, t)
}
function xs(e) {
  return '-' + e.toLowerCase()
}
function ks(e) {
  return e.charAt(1).toUpperCase()
}
const Ss = {
    classId: 'classID',
    dataType: 'datatype',
    itemId: 'itemID',
    strokeDashArray: 'strokeDasharray',
    strokeDashOffset: 'strokeDashoffset',
    strokeLineCap: 'strokeLinecap',
    strokeLineJoin: 'strokeLinejoin',
    strokeMiterLimit: 'strokeMiterlimit',
    typeOf: 'typeof',
    xLinkActuate: 'xlinkActuate',
    xLinkArcRole: 'xlinkArcrole',
    xLinkHref: 'xlinkHref',
    xLinkRole: 'xlinkRole',
    xLinkShow: 'xlinkShow',
    xLinkTitle: 'xlinkTitle',
    xLinkType: 'xlinkType',
    xmlnsXLink: 'xmlnsXlink',
  },
  Es = Wu([cs, ss, ds, hs, gs], 'html'),
  Cs = Wu([cs, ss, ds, hs, ms], 'svg')
function Os(e) {
  if (e.allowedElements && e.disallowedElements)
    throw new TypeError(
      'Only one of `allowedElements` and `disallowedElements` should be defined'
    )
  if (e.allowedElements || e.disallowedElements || e.allowElement)
    return (t) => {
      yu(t, 'element', (t, n, r) => {
        const o = r
        let i
        if (
          (e.allowedElements
            ? (i = !e.allowedElements.includes(t.tagName))
            : e.disallowedElements &&
              (i = e.disallowedElements.includes(t.tagName)),
          !i &&
            e.allowElement &&
            'number' == typeof n &&
            (i = !e.allowElement(t, n, o)),
          i && 'number' == typeof n)
        )
          return (
            e.unwrapDisallowed && t.children
              ? o.children.splice(n, 1, ...t.children)
              : o.children.splice(n, 1),
            n
          )
      })
    }
}
var As
s = i('8tsvq')
function Ps(e) {
  const t = e && 'object' == typeof e && 'text' === e.type ? e.value || '' : e
  return 'string' == typeof t && '' === t.replace(/[ \t\n\f\r]/g, '')
}
function Ts(e, t) {
  const n = t || {}
  return ('' === e[e.length - 1] ? [...e, ''] : e)
    .join((n.padRight ? ' ' : '') + ',' + (!1 === n.padLeft ? '' : ' '))
    .trim()
}
As = i('dzkBI')
var Ls,
  Rs = {},
  Fs = /\/\*[^*]*\*+([^/*][^*]*\*+)*\//g,
  js = /\n/g,
  Ds = /^\s*/,
  _s = /^(\*?[-#/*\\\w]+(\[[0-9a-z_-]+\])?)\s*/,
  Ns = /^:\s*/,
  Is = /^((?:'(?:\\'|.)*?'|"(?:\\"|.)*?"|\([^)]*?\)|[^};])+)/,
  Bs = /^[;\s]*/,
  zs = /^\s+|\s+$/g,
  Ms = ''
function Us(e) {
  return e ? e.replace(zs, Ms) : Ms
}
function qs(e, t) {
  var n,
    r = null
  if (!e || 'string' != typeof e) return r
  for (
    var o, i, a = Ls(e), l = 'function' == typeof t, u = 0, s = a.length;
    u < s;
    u++
  )
    (o = (n = a[u]).property),
      (i = n.value),
      l ? t(o, i, n) : i && (r || (r = {}), (r[o] = i))
  return r
}
;(Ls = function (e, t) {
  if ('string' != typeof e)
    throw new TypeError('First argument must be a string')
  if (!e) return []
  t = t || {}
  var n = 1,
    r = 1
  function o(e) {
    var t = e.match(js)
    t && (n += t.length)
    var o = e.lastIndexOf('\n')
    r = ~o ? e.length - o : r + e.length
  }
  function i() {
    var e = { line: n, column: r }
    return function (t) {
      return (t.position = new a(e)), c(), t
    }
  }
  function a(e) {
    ;(this.start = e),
      (this.end = { line: n, column: r }),
      (this.source = t.source)
  }
  a.prototype.content = e
  var l = []
  function u(o) {
    var i = new Error(t.source + ':' + n + ':' + r + ': ' + o)
    if (
      ((i.reason = o),
      (i.filename = t.source),
      (i.line = n),
      (i.column = r),
      (i.source = e),
      !t.silent)
    )
      throw i
    l.push(i)
  }
  function s(t) {
    var n = t.exec(e)
    if (n) {
      var r = n[0]
      return o(r), (e = e.slice(r.length)), n
    }
  }
  function c() {
    s(Ds)
  }
  function f(e) {
    var t
    for (e = e || []; (t = p()); ) !1 !== t && e.push(t)
    return e
  }
  function p() {
    var t = i()
    if ('/' == e.charAt(0) && '*' == e.charAt(1)) {
      for (
        var n = 2;
        Ms != e.charAt(n) && ('*' != e.charAt(n) || '/' != e.charAt(n + 1));

      )
        ++n
      if (((n += 2), Ms === e.charAt(n - 1))) return u('End of comment missing')
      var a = e.slice(2, n - 2)
      return (
        (r += 2),
        o(a),
        (e = e.slice(n)),
        (r += 2),
        t({ type: 'comment', comment: a })
      )
    }
  }
  function d() {
    var e = i(),
      t = s(_s)
    if (t) {
      if ((p(), !s(Ns))) return u("property missing ':'")
      var n = s(Is),
        r = e({
          type: 'declaration',
          property: Us(t[0].replace(Fs, Ms)),
          value: n ? Us(n[0].replace(Fs, Ms)) : Ms,
        })
      return s(Bs), r
    }
  }
  return (
    c(),
    (function () {
      var e,
        t = []
      for (f(t); (e = d()); ) !1 !== e && (t.push(e), f(t))
      return t
    })()
  )
}),
  ((Rs = qs).default = qs)
var Vs = t(Rs)
const Hs = ['http', 'https', 'mailto', 'tel']
function Ws(e) {
  const t = (e || '').trim(),
    n = t.charAt(0)
  if ('#' === n || '/' === n) return t
  const r = t.indexOf(':')
  if (-1 === r) return t
  let o = -1
  for (; ++o < Hs.length; ) {
    const e = Hs[o]
    if (r === e.length && t.slice(0, e.length).toLowerCase() === e) return t
  }
  return (
    (o = t.indexOf('?')),
    -1 !== o && r > o
      ? t
      : ((o = t.indexOf('#')), -1 !== o && r > o ? t : 'javascript:void(0)')
  )
}
const $s = {}.hasOwnProperty,
  Qs = new Set(['table', 'thead', 'tbody', 'tfoot', 'tr'])
function Gs(e, t) {
  const n = []
  let r,
    o = -1
  for (; ++o < t.children.length; )
    (r = t.children[o]),
      'element' === r.type
        ? n.push(Js(e, r, o, t))
        : 'text' === r.type
          ? ('element' === t.type && Qs.has(t.tagName) && Ps(r)) ||
            n.push(r.value)
          : 'raw' !== r.type || e.options.skipHtml || n.push(r.value)
  return n
}
function Js(e, n, r, o) {
  const i = e.options,
    a = void 0 === i.transformLinkUri ? Ws : i.transformLinkUri,
    l = e.schema,
    u = n.tagName,
    c = {}
  let f,
    p = l
  if (
    ('html' === l.space && 'svg' === u && ((p = Cs), (e.schema = p)),
    n.properties)
  )
    for (f in n.properties)
      $s.call(n.properties, f) && Ys(c, f, n.properties[f], e)
  ;('ol' !== u && 'ul' !== u) || e.listDepth++
  const d = Gs(e, n)
  ;('ol' !== u && 'ul' !== u) || e.listDepth--, (e.schema = l)
  const h = n.position || {
      start: { line: null, column: null, offset: null },
      end: { line: null, column: null, offset: null },
    },
    g = i.components && $s.call(i.components, u) ? i.components[u] : u,
    m = 'string' == typeof g || g === t(s).Fragment
  if (!t(As).isValidElementType(g))
    throw new TypeError(
      `Component for name \`${u}\` not defined or is not renderable`
    )
  if (
    ((c.key = [u, h.start.line, h.start.column, r].join('-')),
    'a' === u &&
      i.linkTarget &&
      (c.target =
        'function' == typeof i.linkTarget
          ? i.linkTarget(
              String(c.href || ''),
              n.children,
              'string' == typeof c.title ? c.title : null
            )
          : i.linkTarget),
    'a' === u &&
      a &&
      (c.href = a(
        String(c.href || ''),
        n.children,
        'string' == typeof c.title ? c.title : null
      )),
    m ||
      'code' !== u ||
      'element' !== o.type ||
      'pre' === o.tagName ||
      (c.inline = !0),
    m ||
      ('h1' !== u &&
        'h2' !== u &&
        'h3' !== u &&
        'h4' !== u &&
        'h5' !== u &&
        'h6' !== u) ||
      (c.level = Number.parseInt(u.charAt(1), 10)),
    'img' === u &&
      i.transformImageUri &&
      (c.src = i.transformImageUri(
        String(c.src || ''),
        String(c.alt || ''),
        'string' == typeof c.title ? c.title : null
      )),
    !m && 'li' === u && 'element' === o.type)
  ) {
    const e = (function (e) {
      let t = -1
      for (; ++t < e.children.length; ) {
        const n = e.children[t]
        if ('element' === n.type && 'input' === n.tagName) return n
      }
      return null
    })(n)
    ;(c.checked = e && e.properties ? Boolean(e.properties.checked) : null),
      (c.index = Xs(o, n)),
      (c.ordered = 'ol' === o.tagName)
  }
  var y
  return (
    m ||
      ('ol' !== u && 'ul' !== u) ||
      ((c.ordered = 'ol' === u), (c.depth = e.listDepth)),
    ('td' !== u && 'th' !== u) ||
      (c.align &&
        (c.style || (c.style = {}),
        (c.style.textAlign = c.align),
        delete c.align),
      m || (c.isHeader = 'th' === u)),
    m ||
      'tr' !== u ||
      'element' !== o.type ||
      (c.isHeader = Boolean('thead' === o.tagName)),
    i.sourcePos &&
      (c['data-sourcepos'] = [
        (y = h).start.line,
        ':',
        y.start.column,
        '-',
        y.end.line,
        ':',
        y.end.column,
      ]
        .map(String)
        .join('')),
    !m && i.rawSourcePos && (c.sourcePosition = n.position),
    !m &&
      i.includeElementIndex &&
      ((c.index = Xs(o, n)), (c.siblingCount = Xs(o))),
    m || (c.node = n),
    d.length > 0 ? t(s).createElement(g, c, d) : t(s).createElement(g, c)
  )
}
function Xs(e, t) {
  let n = -1,
    r = 0
  for (; ++n < e.children.length && e.children[n] !== t; )
    'element' === e.children[n].type && r++
  return r
}
function Ys(e, t, n, r) {
  const o = ws(r.schema, t)
  let i = n
  null != i &&
    i == i &&
    (Array.isArray(i) && (i = o.commaSeparated ? Ts(i) : i.join(' ').trim()),
    'style' === o.property &&
      'string' == typeof i &&
      (i = (function (e) {
        const t = {}
        try {
          Vs(e, n)
        } catch {}
        return t
        function n(e, n) {
          const r = '-ms-' === e.slice(0, 4) ? `ms-${e.slice(4)}` : e
          t[r.replace(/-([a-z])/g, Ks)] = n
        }
      })(i)),
    o.space && o.property
      ? (e[$s.call(Ss, o.property) ? Ss[o.property] : o.property] = i)
      : o.attribute && (e[o.attribute] = i))
}
function Ks(e, t) {
  return t.toUpperCase()
}
const Zs = {}.hasOwnProperty,
  ec = {
    plugins: { to: 'remarkPlugins', id: 'change-plugins-to-remarkplugins' },
    renderers: { to: 'components', id: 'change-renderers-to-components' },
    astPlugins: { id: 'remove-buggy-html-in-markdown-parser' },
    allowDangerousHtml: { id: 'remove-buggy-html-in-markdown-parser' },
    escapeHtml: { id: 'remove-buggy-html-in-markdown-parser' },
    source: { to: 'children', id: 'change-source-to-children' },
    allowNode: {
      to: 'allowElement',
      id: 'replace-allownode-allowedtypes-and-disallowedtypes',
    },
    allowedTypes: {
      to: 'allowedElements',
      id: 'replace-allownode-allowedtypes-and-disallowedtypes',
    },
    disallowedTypes: {
      to: 'disallowedElements',
      id: 'replace-allownode-allowedtypes-and-disallowedtypes',
    },
    includeNodeIndex: {
      to: 'includeElementIndex',
      id: 'change-includenodeindex-to-includeelementindex',
    },
  }
function tc(e) {
  for (const t in ec)
    if (Zs.call(ec, t) && Zs.call(e, t)) {
      const e = ec[t]
      console.warn(
        `[react-markdown] Warning: please ${e.to ? `use \`${e.to}\` instead of` : 'remove'} \`${t}\` (see <https://github.com/remarkjs/react-markdown/blob/main/changelog.md#${e.id}> for more info)`
      ),
        delete ec[t]
    }
  const n = ha()
      .use(fu)
      .use(e.remarkPlugins || [])
      .use(qu, { ...e.remarkRehypeOptions, allowDangerousHtml: !0 })
      .use(e.rehypePlugins || [])
      .use(Os, e),
    r = new Ki()
  'string' == typeof e.children
    ? (r.value = e.children)
    : void 0 !== e.children &&
      null !== e.children &&
      console.warn(
        `[react-markdown] Warning: please pass a string as \`children\` (not: \`${e.children}\`)`
      )
  const o = n.runSync(n.parse(r), r)
  if ('root' !== o.type) throw new TypeError('Expected a `root` node')
  let i = t(s).createElement(
    t(s).Fragment,
    {},
    Gs({ options: e, schema: Es, listDepth: 0 }, o)
  )
  return (
    e.className &&
      (i = t(s).createElement('div', { className: e.className }, i)),
    i
  )
}
tc.propTypes = {
  children: t(Vu).string,
  className: t(Vu).string,
  allowElement: t(Vu).func,
  allowedElements: t(Vu).arrayOf(t(Vu).string),
  disallowedElements: t(Vu).arrayOf(t(Vu).string),
  unwrapDisallowed: t(Vu).bool,
  remarkPlugins: t(Vu).arrayOf(
    t(Vu).oneOfType([
      t(Vu).object,
      t(Vu).func,
      t(Vu).arrayOf(
        t(Vu).oneOfType([
          t(Vu).bool,
          t(Vu).string,
          t(Vu).object,
          t(Vu).func,
          t(Vu).arrayOf(t(Vu).any),
        ])
      ),
    ])
  ),
  rehypePlugins: t(Vu).arrayOf(
    t(Vu).oneOfType([
      t(Vu).object,
      t(Vu).func,
      t(Vu).arrayOf(
        t(Vu).oneOfType([
          t(Vu).bool,
          t(Vu).string,
          t(Vu).object,
          t(Vu).func,
          t(Vu).arrayOf(t(Vu).any),
        ])
      ),
    ])
  ),
  sourcePos: t(Vu).bool,
  rawSourcePos: t(Vu).bool,
  skipHtml: t(Vu).bool,
  includeElementIndex: t(Vu).bool,
  transformLinkUri: t(Vu).oneOfType([t(Vu).func, t(Vu).bool]),
  linkTarget: t(Vu).oneOfType([t(Vu).func, t(Vu).string]),
  transformImageUri: t(Vu).func,
  components: t(Vu).object,
}
var nc = ({ youTubeLink: e }) =>
  (0, a.jsx)(a.Fragment, {
    children: (0, a.jsx)('iframe', {
      width: '560',
      height: '315',
      src: e,
      title: 'YouTube video player',
      frameborder: '0',
      allow:
        'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share',
      allowfullscreen: !0,
    }),
  })
var rc,
  oc = ({
    name: e,
    image: t,
    alt: n,
    artist: r,
    songList: o,
    spotifyList: i,
  }) => {
    const [l, u] = (0, s.useState)(!0)
    return (0, a.jsxs)(a.Fragment, {
      children: [
        (0, a.jsxs)('figure', {
          className: 'painting',
          children: [
            l
              ? (0, a.jsx)('img', {
                  className: 'image-thumb',
                  src: t,
                  alt: n,
                  onClick: (e) => u(!l),
                })
              : (0, a.jsx)(nc, { youTubeLink: i }),
            (0, a.jsx)('h4', { children: e }),
            (0, a.jsx)('p', { children: (0, a.jsx)('i', { children: r }) }),
          ],
        }),
        (0, a.jsxs)('div', {
          children: [
            (0, a.jsx)(tc, { children: o }),
            (0, a.jsxs)('a', {
              className: 'spotify',
              href: i,
              target: '_blank',
              children: [' ', '💻 Abrir esta lista en YouTube'],
            }),
          ],
        }),
      ],
    })
  }
rc = new URL(i('eqJ66').resolve('i49gT'), import.meta.url).toString()
const ic = new URL(rc)
var ac = () =>
  (0, a.jsx)(a.Fragment, {
    children: (0, a.jsxs)('section', {
      className: 'river',
      children: [
        (0, a.jsx)('img', {
          src: ic,
          alt: 'Laptop with a play button',
          'aria-hidden': 'true',
        }),
        (0, a.jsxs)('article', {
          children: [
            (0, a.jsxs)('h1', {
              children: [
                (0, a.jsx)('small', {
                  className: 'church',
                  children: 'Primera Iglesia Bautista de Jinotepe',
                }),
                'Lista de Alabanzas',
              ],
            }),
            (0, a.jsx)('p', {
              children:
                'El proposito de esta app es presentar la lista establecida de cantos que se usaran en los servicios de culto evangelico de nuestra iglesia.',
            }),
          ],
        }),
      ],
    }),
  })
const lc = (function (e) {
    if (!e.accessToken) throw new TypeError('Expected parameter accessToken')
    if (!e.space) throw new TypeError('Expected parameter space')
    const n = Bi(
        Bi(
          {},
          {
            resolveLinks: !0,
            removeUnresolved: !1,
            defaultHostname: 'cdn.contentful.com',
            environment: 'master',
          }
        ),
        e
      ),
      r = qo('contentful.js/9.2.19', n.application, n.integration)
    n.headers = Bi(
      Bi({}, n.headers),
      {},
      {
        'Content-Type': 'application/vnd.contentful.delivery.v1+json',
        'X-Contentful-User-Agent': r,
      }
    )
    const o = Io(t(Pt), n),
      i =
        ((a = {
          resolveLinks: n.resolveLinks,
          environment: n.environment,
          removeUnresolved: n.removeUnresolved,
          spaceBaseUrl: o.defaults.baseURL,
          environmentBaseUrl: `${o.defaults.baseURL}environments/${n.environment}`,
        }),
        function (e) {
          return Object.assign({}, a, e)
        })
    var a
    return (
      (o.defaults.baseURL = i().environmentBaseUrl),
      Ni({ http: o, getGlobalOptions: i })
    )
  })({
    space: 'ihgxaeeojjky',
    accessToken: '62rvyJibPL0AvuEDzueBvdW1kYJyE0Vsav8ckYw6YW0',
  }),
  uc = async () => {
    const e = await lc.getEntries({ content_type: 'painting' }),
      t = await lc.getTags(),
      n = t.items.map((e) => e.name)
    return {
      entries: e.items.map((e) => {
        const { fields: n } = e
        return (
          console.log('==>', n, e),
          {
            name: n.name,
            songList: n.lista,
            spotifyList: n.spotifyList,
            image: n.image.fields.file.url,
            alt: n.image.fields.title,
            artist: n.artist.fields.name,
            tags: e.metadata.tags
              .map((e) => t.items.find((t) => t.sys.id === e.sys.id))
              .map((e) => e.name),
          }
        )
      }),
      tags: n,
    }
  }
var sc = function () {
  const [e, t] = (0, s.useState)([]),
    { data: n, error: r } = re('contentful', uc)
  if (r)
    return console.log(r), (0, a.jsx)('div', { children: 'failed to load ' })
  if (!n) return (0, a.jsx)(At, { size: 'large' })
  const { tags: o, entries: i } = n,
    l = (n) => {
      const { name: r, checked: o } = n.target,
        i = e.indexOf(r)
      o && -1 === i ? e.push(r) : -1 !== i && e.splice(i, 1), t(e.slice())
    },
    u = o.map((e) =>
      (0, a.jsxs)(
        'label',
        {
          htmlFor: e,
          children: [
            (0, a.jsx)('input', {
              type: 'checkbox',
              onChange: l,
              name: e,
              id: e,
            }),
            e,
          ],
        },
        e
      )
    ),
    c = i
      .filter((t) => {
        if (0 === e.length) return !0
        return t.tags.some((t) => e.includes(t))
      })
      .map(
        (
          { name: e, image: t, alt: n, artist: r, songList: o, spotifyList: i },
          l
        ) =>
          (0, a.jsx)(
            oc,
            {
              name: e,
              image: t,
              alt: n,
              artist: r,
              songList: o,
              spotifyList: i,
            },
            l
          )
      )
  return (0, a.jsxs)('main', {
    children: [
      (0, a.jsx)(ac, {}),
      (0, a.jsxs)('p', {
        className: 'tags',
        children: [
          '👉',
          (0, a.jsx)('b', { children: 'Worship Song Type:' }),
          ':',
          u,
        ],
      }),
      (0, a.jsx)('div', { className: 'grid', children: c }),
    ],
  })
}
t(c)
  .createRoot(document.getElementById('root'))
  .render((0, a.jsx)(t(s).StrictMode, { children: (0, a.jsx)(sc, {}) }))
//# sourceMappingURL=index.ac9d7524.js.map
