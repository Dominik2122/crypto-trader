"use strict";(self.webpackChunkcrypto_trader=self.webpackChunkcrypto_trader||[]).push([[138],{1138:(N,m,a)=>{a.r(m),a.d(m,{AuthModule:()=>E});var g=a(8583),A=a(4159),l=a(4402),c=(()=>{return(e=c||(c={}))[e.LOGIN=0]="LOGIN",e[e.SIGNUP=1]="SIGNUP",c;var e})(),t=a(7716);class w{constructor(s,n){this.email=s,this.password=n}getEmail(){return this.email}getPassword(){return this.password}}class C{constructor(s,n,o){this.login=s,this.email=n,this.password=o}getEmail(){return this.email}getPassword(){return this.password}}var h=a(1527),_=a(5207),y=a(8349),b=a(2809);let d=(()=>{class e extends b.i{login(n){return this.post("api/user/token/",n)}signUp(n){return this.post("api/user/create/",n)}}return e.\u0275fac=function(){let s;return function(o){return(s||(s=t.n5z(e)))(o||e)}}(),e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac}),e})(),f=(()=>{class e{constructor(n,o){this.permissionService=n,this.authResource=o}login(n,o){const i=new w(n,o);return this.authResource.login(i).pipe((0,_.U)(r=>{const p=new h.n(r.userLogin,n,r.token,r.isAdmin);this.permissionService.setUser(p)}))}signUp(n,o,i){const r=new C(n,o,i);return this.authResource.signUp(r).pipe((0,_.U)(p=>{const P=new h.n(n,o,p.token,p.isAdmin);this.permissionService.setUser(P)}))}logout(){return this.permissionService.setUser(null)}}return e.\u0275fac=function(n){return new(n||e)(t.LFG(y.$),t.LFG(d))},e.\u0275prov=t.Yz7({token:e,factory:e.\u0275fac}),e})();var u=a(1250),v=a(3611);const Z=["*"];let T=(()=>{class e{constructor(){this.email=new t.vpe,this.password=new t.vpe,this.config=[{type:u.y.EMAIL,label:"Email",name:"email",placeholder:"Enter your login"},{type:u.y.PASSWORD,label:"Password",name:"password",placeholder:"Enter your password"}]}ngOnInit(){}observeForm(n){this.form=n,this.form.valueChanges.subscribe(o=>{this.email.emit(o.email),this.password.emit(o.password)})}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-login"]],outputs:{email:"email",password:"password"},ngContentSelectors:Z,decls:2,vars:1,consts:[[3,"config","formOutput"]],template:function(n,o){1&n&&(t.F$t(),t.TgZ(0,"app-form",0),t.NdJ("formOutput",function(r){return o.observeForm(r)}),t.Hsn(1),t.qZA()),2&n&&t.Q6J("config",o.config)},directives:[v.U],styles:[""],encapsulation:2,changeDetection:0}),e})();const U=["*"];let x=(()=>{class e{constructor(){this.email=new t.vpe,this.password=new t.vpe,this.login=new t.vpe,this.config=[{type:u.y.TEXT,label:"Login",name:"login",placeholder:"Enter your login"},{type:u.y.EMAIL,label:"Email",name:"email",placeholder:"Enter your email"},{type:u.y.PASSWORD,label:"Password",name:"password",placeholder:"Enter your password"}]}ngOnInit(){}observeForm(n){this.form=n,this.form.valueChanges.subscribe(o=>{this.email.emit(o.email),this.login.emit(o.login),this.password.emit(o.password)})}}return e.\u0275fac=function(n){return new(n||e)},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-sign-up"]],outputs:{email:"email",password:"password",login:"login"},ngContentSelectors:U,decls:2,vars:1,consts:[[3,"config","formOutput"]],template:function(n,o){1&n&&(t.F$t(),t.TgZ(0,"app-form",0),t.NdJ("formOutput",function(r){return o.observeForm(r)}),t.Hsn(1),t.qZA()),2&n&&t.Q6J("config",o.config)},directives:[v.U],styles:[""],encapsulation:2,changeDetection:0}),e})();function S(e,s){if(1&e){const n=t.EpF();t.ynx(0),t.TgZ(1,"app-login",6),t.NdJ("email",function(i){return t.CHM(n),t.oxw().observeEmail(i)})("password",function(i){return t.CHM(n),t.oxw().observePassword(i)}),t.TgZ(2,"button",7),t.NdJ("click",function(){return t.CHM(n),t.oxw().submit()}),t._uU(3," Login "),t.qZA(),t.qZA(),t.TgZ(4,"div",8),t.TgZ(5,"div",9),t.TgZ(6,"p"),t._uU(7,"Don't have an account yet?"),t.qZA(),t.TgZ(8,"a",10),t.NdJ("click",function(){t.CHM(n);const i=t.oxw();return i.changeForm(i.FormType.SIGNUP)}),t._uU(9,"Sign up"),t.qZA(),t.qZA(),t.qZA(),t.BQk()}}function F(e,s){if(1&e){const n=t.EpF();t.TgZ(0,"app-sign-up",11),t.NdJ("email",function(i){return t.CHM(n),t.oxw().observeEmail(i)})("login",function(i){return t.CHM(n),t.oxw().observeLogin(i)})("password",function(i){return t.CHM(n),t.oxw().observePassword(i)}),t.TgZ(1,"button",7),t.NdJ("click",function(){return t.CHM(n),t.oxw().submit()}),t._uU(2," Sign up "),t.qZA(),t.qZA(),t.TgZ(3,"div",8),t.TgZ(4,"div",9),t.TgZ(5,"p"),t._uU(6,"Have an account?"),t.qZA(),t.TgZ(7,"a",10),t.NdJ("click",function(){t.CHM(n);const i=t.oxw();return i.changeForm(i.FormType.LOGIN)}),t._uU(8,"Login!"),t.qZA(),t.qZA(),t.qZA()}}const L=[{path:"",component:(()=>{class e{constructor(n,o){this.authService=n,this.router=o,this.isLoginPage=!0,this.FormType=c}changeForm(n){this.isLoginPage=n===c.LOGIN}observeEmail(n){this.email=n}observeLogin(n){this.login=n}observePassword(n){this.password=n}submit(){(this.isLoginPage?this.authService.login(this.email,this.password):this.authService.signUp(this.login,this.email,this.password)).subscribe(()=>this.router.navigate(["/"]))}}return e.\u0275fac=function(n){return new(n||e)(t.Y36(f),t.Y36(l.F0))},e.\u0275cmp=t.Xpm({type:e,selectors:[["app-authentication"]],decls:9,vars:2,consts:[[1,"container"],[1,"top-bubbles"],[1,"form"],[4,"ngIf","ngIfElse"],["signUpPage",""],[1,"bottom-bubbles"],[3,"email","password"],[1,"bg-blue-800","hover:bg-blue-700","text-white","font-bold","py-2","px-4","rounded",3,"click"],[1,"flex","justify-center"],[1,"flex"],[1,"ml-2",3,"click"],[3,"email","login","password"]],template:function(n,o){if(1&n&&(t.TgZ(0,"div",0),t._UZ(1,"div",1),t._UZ(2,"div",1),t.TgZ(3,"div",2),t.YNc(4,S,10,0,"ng-container",3),t.YNc(5,F,9,0,"ng-template",null,4,t.W1O),t.qZA(),t._UZ(7,"div",5),t._UZ(8,"div",5),t.qZA()),2&n){const i=t.MAs(6);t.xp6(4),t.Q6J("ngIf",o.isLoginPage)("ngIfElse",i)}},directives:[g.O5,T,x],styles:["app-authentication{background:black}.container{margin-left:auto;margin-right:auto}.form{margin-left:auto;margin-right:auto;margin-top:25vh}\n"],encapsulation:2,changeDetection:0}),e})()}];let M=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({imports:[[l.Bz.forChild(L)],l.Bz]}),e})(),E=(()=>{class e{}return e.\u0275fac=function(n){return new(n||e)},e.\u0275mod=t.oAB({type:e}),e.\u0275inj=t.cJS({providers:[f,d],imports:[[g.ez,M,A.e]]}),e})()}}]);