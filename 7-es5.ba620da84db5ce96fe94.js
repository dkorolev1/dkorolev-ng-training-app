function _classCallCheck(n,t){if(!(n instanceof t))throw new TypeError("Cannot call a class as a function")}function _defineProperties(n,t){for(var e=0;e<t.length;e++){var i=t[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}function _createClass(n,t,e){return t&&_defineProperties(n.prototype,t),e&&_defineProperties(n,e),n}(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{Yj9t:function(n,t,e){"use strict";e.r(t),e.d(t,"AuthModule",(function(){return y}));var i,s,o=e("3Pt+"),l=e("PCNd"),a=e("tyNb"),r=e("/WaZ"),c=e("fXoL"),b=e("kt0X"),d=e("ofXK"),u=((s=function(){function n(){_classCallCheck(this,n)}return _createClass(n,[{key:"ngOnInit",value:function(){}}]),n}()).\u0275fac=function(n){return new(n||s)},s.\u0275cmp=c.Db({type:s,selectors:[["app-loading-spinner"]],decls:4,vars:0,consts:[[1,"lds-ellipsis"]],template:function(n,t){1&n&&(c.Mb(0,"div",0),c.Kb(1,"div"),c.Kb(2,"div"),c.Kb(3,"div"),c.Lb())},styles:[".lds-ellipsis[_ngcontent-%COMP%]{display:inline-block;position:relative;width:80px;height:80px}.lds-ellipsis[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{position:absolute;top:33px;width:13px;height:13px;border-radius:50%;background:#007bff;-webkit-animation-timing-function:cubic-bezier(0,1,1,0);animation-timing-function:cubic-bezier(0,1,1,0)}.lds-ellipsis[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:first-child{left:8px;-webkit-animation:lds-ellipsis1 .6s infinite;animation:lds-ellipsis1 .6s infinite}.lds-ellipsis[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(2){left:8px}.lds-ellipsis[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(2), .lds-ellipsis[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(3){-webkit-animation:lds-ellipsis2 .6s infinite;animation:lds-ellipsis2 .6s infinite}.lds-ellipsis[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(3){left:32px}.lds-ellipsis[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(4){left:56px;-webkit-animation:lds-ellipsis3 .6s infinite;animation:lds-ellipsis3 .6s infinite}@-webkit-keyframes lds-ellipsis1{0%{transform:scale(0)}to{transform:scale(1)}}@keyframes lds-ellipsis1{0%{transform:scale(0)}to{transform:scale(1)}}@-webkit-keyframes lds-ellipsis3{0%{transform:scale(1)}to{transform:scale(0)}}@keyframes lds-ellipsis3{0%{transform:scale(1)}to{transform:scale(0)}}@-webkit-keyframes lds-ellipsis2{0%{transform:translate(0)}to{transform:translate(24px)}}@keyframes lds-ellipsis2{0%{transform:translate(0)}to{transform:translate(24px)}}"]}),s),f=((i=function(){function n(){_classCallCheck(this,n),this.close=new c.n}return _createClass(n,[{key:"onClose",value:function(){this.close.emit()}}]),n}()).\u0275fac=function(n){return new(n||i)},i.\u0275cmp=c.Db({type:i,selectors:[["app-alert"]],inputs:{message:"message"},outputs:{close:"close"},decls:8,vars:1,consts:[[1,"backdrop",3,"click"],[1,"alert-box"],[1,"alert","alert-danger"],[1,"alert-box-actions"],[1,"btn","btn-primary",3,"click"]],template:function(n,t){1&n&&(c.Mb(0,"div",0),c.Ub("click",(function(){return t.onClose()})),c.Mb(1,"div",1),c.Mb(2,"div",2),c.Mb(3,"p"),c.lc(4),c.Lb(),c.Lb(),c.Mb(5,"div",3),c.Mb(6,"button",4),c.Ub("click",(function(){return t.onClose()})),c.lc(7,"Close"),c.Lb(),c.Lb(),c.Lb(),c.Lb()),2&n&&(c.zb(4),c.mc(t.message))},styles:[".backdrop[_ngcontent-%COMP%]{position:fixed;top:0;left:0;width:100vw;height:100vh;background:rgba(0,0,0,.75);z-index:90}.alert-box[_ngcontent-%COMP%]{position:fixed;top:30vh;left:20vw;width:60vw;padding:16px;z-index:100;background:#fff;box-shadow:0 2px 8px rgba(0,0,0,.26)}.alert-box-actions[_ngcontent-%COMP%]{text-align:right}"]}),i),p=["authForm"];function m(n,t){1&n&&(c.Mb(0,"div",5),c.Kb(1,"app-loading-spinner"),c.Lb())}function g(n,t){if(1&n){var e=c.Nb();c.Mb(0,"app-alert",6),c.Ub("close",(function(){return c.gc(e),c.Wb().onHandleError()})),c.Lb()}if(2&n){var i=c.Wb();c.Zb("message",i.errorMessage)}}function h(n,t){if(1&n){var e=c.Nb();c.Mb(0,"form",7,8),c.Ub("ngSubmit",(function(){return c.gc(e),c.Wb().onSubmit()})),c.Mb(2,"div",9),c.Mb(3,"label",10),c.lc(4,"Email"),c.Lb(),c.Kb(5,"input",11),c.Lb(),c.Mb(6,"div",9),c.Mb(7,"label",12),c.lc(8,"Password"),c.Lb(),c.Kb(9,"input",13),c.Lb(),c.Mb(10,"div",0),c.Mb(11,"div",14),c.Mb(12,"button",15),c.lc(13),c.Lb(),c.Mb(14,"button",16),c.Ub("click",(function(){return c.gc(e),c.Wb().onSwitchMode()})),c.lc(15),c.Lb(),c.Lb(),c.Lb(),c.Lb()}if(2&n){var i=c.dc(1),s=c.Wb();c.zb(12),c.Zb("disabled",!i.valid),c.zb(1),c.nc(" ",s.logInMode?"Log In":"Sign Up"," "),c.zb(2),c.nc(" ",s.logInMode?"Switch to Sign Up":"Switch to Log in"," ")}}var v,M,w,k=[{path:"",component:(v=function(){function n(t){_classCallCheck(this,n),this.store=t,this.loading=!1,this.logInMode=!1,this.errorMessage=null}return _createClass(n,[{key:"ngOnInit",value:function(){var n=this;this.storeSub=this.store.select("auth").subscribe((function(t){n.loading=t.loading,n.errorMessage=t.authError}))}},{key:"onSwitchMode",value:function(){this.logInMode=!this.logInMode}},{key:"onSubmit",value:function(){if(this.authForm.valid){this.loading=!0;var n=this.authForm.value.email,t=this.authForm.value.password,e=this.logInMode?new r.k({email:n,password:t}):new r.n({email:n,password:t});this.store.dispatch(e),this.authForm.reset()}}},{key:"onHandleError",value:function(){this.store.dispatch(new r.h)}},{key:"ngOnDestroy",value:function(){this.storeSub.unsubscribe()}}]),n}(),v.\u0275fac=function(n){return new(n||v)(c.Jb(b.b))},v.\u0275cmp=c.Db({type:v,selectors:[["app-auth"]],viewQuery:function(n,t){var e;1&n&&c.pc(p,!0),2&n&&c.cc(e=c.Vb())&&(t.authForm=e.first)},decls:6,vars:3,consts:[[1,"row"],[1,"col-xs-12","col-md-6","col-md-offset-3"],["spinner",""],[3,"message","close",4,"ngIf"],[3,"ngSubmit",4,"ngIf","ngIfElse"],[1,"spinner"],[3,"message","close"],[3,"ngSubmit"],["authForm","ngForm"],[1,"form-group"],["for","email"],["type","email","id","email","name","email","ngModel","","required","","email","",1,"form-control"],["for","password"],["type","password","id","password","name","password","minlength","6","ngModel","","required","",1,"form-control"],[1,"col-sm-6","btn-toolbar"],["type","submit",1,"btn","btn-primary",3,"disabled"],["type","button",1,"btn","btn-success",3,"click"]],template:function(n,t){if(1&n&&(c.Mb(0,"div",0),c.Mb(1,"div",1),c.jc(2,m,2,0,"ng-template",null,2,c.kc),c.jc(4,g,1,1,"app-alert",3),c.jc(5,h,16,3,"form",4),c.Lb(),c.Lb()),2&n){var e=c.dc(3);c.zb(4),c.Zb("ngIf",t.errorMessage),c.zb(1),c.Zb("ngIf",!t.loading)("ngIfElse",e)}},directives:[d.j,u,f,o.u,o.m,o.n,o.a,o.l,o.o,o.s,o.b,o.k],styles:[".spinner[_ngcontent-%COMP%]{text-align:center}"]}),v)}],C=((w=function n(){_classCallCheck(this,n)}).\u0275mod=c.Hb({type:w}),w.\u0275inj=c.Gb({factory:function(n){return new(n||w)},imports:[[a.j.forChild(k)],a.j]}),w),y=((M=function n(){_classCallCheck(this,n)}).\u0275mod=c.Hb({type:M}),M.\u0275inj=c.Gb({factory:function(n){return new(n||M)},imports:[[o.j,l.a,C]]}),M)}}]);