function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function _createClass(e,t,n){return t&&_defineProperties(e.prototype,t),n&&_defineProperties(e,n),e}(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{KFp4:function(e,t,n){"use strict";n.d(t,"a",(function(){return u}));var r=n("IzEk"),o=n("lJxs"),a=n("Xd88"),c=n("fXoL"),i=n("tyNb"),s=n("kt0X"),u=function(){var e=function(){function e(t,n){_classCallCheck(this,e),this.router=t,this.store=n}return _createClass(e,[{key:"canActivate",value:function(e,t){var n=this;return this.store.select(a.c).pipe(Object(r.a)(1),Object(o.a)((function(e){return!!e||n.router.createUrlTree(["/auth"])})))}}]),e}();return e.\u0275fac=function(t){return new(t||e)(c.Sb(i.f),c.Sb(s.b))},e.\u0275prov=c.Fb({token:e,factory:e.\u0275fac,providedIn:"root"}),e}()}}]);