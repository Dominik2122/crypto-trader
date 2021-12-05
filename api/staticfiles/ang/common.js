"use strict";(self.webpackChunkcrypto_trader=self.webpackChunkcrypto_trader||[]).push([[592],{9842:(x,d,i)=>{i.d(d,{P:()=>e});class e{constructor(l,m,h,y){this.name=l,this.price=m,this.value=h,this.amount=y}static fromDTO(l){return new e(l.name,l.current_price,l.value,parseFloat(l.amount))}}},4478:(x,d,i)=>{i.d(d,{A:()=>y});var e=i(2809),n=i(5207),l=i(9842);class m{constructor(c,s){this.balance=c,this.cryptos=s}static fromDTO(c){return new m(c.balance,c.owned.map(s=>l.P.fromDTO(s)))}}var h=i(7716);let y=(()=>{class f extends e.i{fetchOwnedCrypto(){return this.get("api/crypto-account/my/").pipe((0,n.U)(s=>m.fromDTO(s)))}}return f.\u0275fac=function(){let c;return function(g){return(c||(c=h.n5z(f)))(g||f)}}(),f.\u0275prov=h.Yz7({token:f,factory:f.\u0275fac}),f})()},5146:(x,d,i)=>{i.d(d,{I:()=>e});class e{constructor(l,m){this.crypto=l,this.amount=m}}},1250:(x,d,i)=>{i.d(d,{y:()=>C,G:()=>v});var e=i(7716),n=i(3092),l=i(8583);function m(o,a){if(1&o&&(e.TgZ(0,"option"),e._uU(1),e.qZA()),2&o){const r=a.$implicit;e.xp6(1),e.hij(" ",r," ")}}let h=(()=>{class o{}return o.\u0275fac=function(r){return new(r||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-select-field"]],decls:7,vars:6,consts:[[1,"flex","flex-col","w-full","max-w-xs",3,"formGroup"],[1,"text-gray-700","font-bold","py-2"],[1,"text-gray-700","shadow","border","rounded","border-gray-300","focus:outline-none","focus:shadow-outline","py-1","px-3","mb-3",3,"formControlName"],[3,"value"],[4,"ngFor","ngForOf"]],template:function(r,t){1&r&&(e.TgZ(0,"div",0),e.TgZ(1,"label",1),e._uU(2),e.qZA(),e.TgZ(3,"select",2),e.TgZ(4,"option",3),e._uU(5),e.qZA(),e.YNc(6,m,2,1,"option",4),e.qZA(),e.qZA()),2&r&&(e.Q6J("formGroup",t.group),e.xp6(2),e.Oqu(t.config.label),e.xp6(1),e.Q6J("formControlName",t.config.name),e.xp6(1),e.Q6J("value",t.config.placeholder),e.xp6(1),e.Oqu(t.config.placeholder),e.xp6(1),e.Q6J("ngForOf",t.config.options))},directives:[n.JL,n.sg,n.EJ,n.JJ,n.u,n.YN,n.Kr,l.sg],styles:[""],encapsulation:2,changeDetection:0}),o})(),y=(()=>{class o{}return o.\u0275fac=function(r){return new(r||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-text-input"]],decls:4,vars:6,consts:[[3,"formGroup"],[1,"text-gray-700","font-bold","py-2",3,"for"],["type","text",1,"text-gray-700","shadow","border","rounded","border-gray-300","focus:outline-none","focus:shadow-outline","py-1","px-3","mb-3","w-full",3,"formControlName","id"]],template:function(r,t){1&r&&(e.TgZ(0,"div",0),e.TgZ(1,"label",1),e._uU(2),e.qZA(),e._UZ(3,"input",2),e.qZA()),2&r&&(e.Q6J("formGroup",t.group),e.xp6(1),e.Q6J("for",t.config.name),e.xp6(1),e.Oqu(t.config.label),e.xp6(1),e.Q6J("formControlName",t.config.name)("id",t.config.name),e.uIk("placeholder",t.config.placeholder))},directives:[n.JL,n.sg,n.Fj,n.JJ,n.u],styles:[""],encapsulation:2,changeDetection:0}),o})(),f=(()=>{class o{}return o.\u0275fac=function(r){return new(r||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-email-input"]],decls:4,vars:4,consts:[[1,"text-gray-700","font-bold","py-2",3,"formGroup"],["type","email",1,"text-gray-700","shadow","border","rounded","w-full","border-gray-300","focus:outline-none","focus:shadow-outline","py-1","px-3","mb-3",3,"formControlName"]],template:function(r,t){1&r&&(e.TgZ(0,"div",0),e.TgZ(1,"label"),e._uU(2),e.qZA(),e._UZ(3,"input",1),e.qZA()),2&r&&(e.Q6J("formGroup",t.group),e.xp6(2),e.Oqu(t.config.label),e.xp6(1),e.Q6J("formControlName",t.config.name),e.uIk("placeholder",t.config.placeholder))},directives:[n.JL,n.sg,n.Fj,n.JJ,n.u],styles:[""],encapsulation:2,changeDetection:0}),o})(),c=(()=>{class o{constructor(){}ngOnInit(){}}return o.\u0275fac=function(r){return new(r||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-text-area"]],decls:2,vars:0,template:function(r,t){1&r&&(e.TgZ(0,"p"),e._uU(1,"text-area works!"),e.qZA())},styles:[""],encapsulation:2,changeDetection:0}),o})(),s=(()=>{class o{}return o.\u0275fac=function(r){return new(r||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-number-input"]],decls:4,vars:5,consts:[[1,"text-gray-700","font-bold","py-2",3,"formGroup"],["type","number",1,"text-gray-700","shadow","border","rounded","border-gray-300","focus:outline-none","focus:shadow-outline","py-1","px-3","mb-3",3,"formControlName","readonly"]],template:function(r,t){1&r&&(e.TgZ(0,"div",0),e.TgZ(1,"label"),e._uU(2),e.qZA(),e._UZ(3,"input",1),e.qZA()),2&r&&(e.Q6J("formGroup",t.group),e.xp6(2),e.Oqu(t.config.label),e.xp6(1),e.Q6J("formControlName",t.config.name)("readonly",t.config.disabled),e.uIk("placeholder",t.config.placeholder))},directives:[n.JL,n.sg,n.wV,n.Fj,n.JJ,n.u],styles:[""]}),o})(),g=(()=>{class o{}return o.\u0275fac=function(r){return new(r||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-password-input"]],decls:4,vars:6,consts:[[3,"formGroup"],[1,"text-gray-700","font-bold","py-2",3,"for"],["type","password",1,"text-gray-700","w-full","shadow","border","rounded","border-gray-300","focus:outline-none","focus:shadow-outline","py-1","px-3","mb-3",3,"formControlName","id"]],template:function(r,t){1&r&&(e.TgZ(0,"div",0),e.TgZ(1,"label",1),e._uU(2),e.qZA(),e._UZ(3,"input",2),e.qZA()),2&r&&(e.Q6J("formGroup",t.group),e.xp6(1),e.Q6J("for",t.config.name),e.xp6(1),e.Oqu(t.config.label),e.xp6(1),e.Q6J("formControlName",t.config.name)("id",t.config.name),e.uIk("placeholder",t.config.placeholder))},directives:[n.JL,n.sg,n.Fj,n.JJ,n.u],styles:[""],encapsulation:2,changeDetection:0}),o})();var p=i(5342);let u=(()=>{class o{ngOnInit(){this.options={floor:this.config.floor,ceil:this.config.ceil},this.config.stepsArray&&(this.options.stepsArray=this.config.stepsArray),this.config.showTicks&&(this.options.showTicksValues=!0)}onChange(r){this.group.controls[this.config.name].setValue(r)}}return o.\u0275fac=function(r){return new(r||o)},o.\u0275cmp=e.Xpm({type:o,selectors:[["app-select-field"]],decls:5,vars:4,consts:[[1,"flex","flex-col","w-full","max-w-xs",3,"formGroup"],[1,"text-gray-700","font-bold","py-2"],[1,"custom-slider"],[3,"value","options","valueChange"]],template:function(r,t){1&r&&(e.TgZ(0,"div",0),e.TgZ(1,"label",1),e._uU(2),e.qZA(),e.TgZ(3,"div",2),e.TgZ(4,"ngx-slider",3),e.NdJ("valueChange",function(b){return t.value=b})("valueChange",function(b){return t.onChange(b)}),e.qZA(),e.qZA(),e.qZA()),2&r&&(e.Q6J("formGroup",t.group),e.xp6(2),e.Oqu(t.config.label),e.xp6(2),e.Q6J("value",t.value)("options",t.options))},directives:[n.JL,n.sg,p.w5],styles:[".custom-slider .ngx-slider .ngx-slider-bar{--tw-bg-opacity: 1;background-color:rgba(30,64,175,var(--tw-bg-opacity));height:2px}  .custom-slider .ngx-slider .ngx-slider-selection{--tw-bg-opacity: 1;background-color:rgba(30,64,175,var(--tw-bg-opacity))}  .custom-slider .ngx-slider .ngx-slider-pointer{width:8px;height:16px;top:auto;bottom:0;--tw-bg-opacity: 1;background-color:rgba(30,64,175,var(--tw-bg-opacity));border-top-left-radius:3px;border-top-right-radius:3px}  .custom-slider .ngx-slider .ngx-slider-pointer:after{display:none}  .custom-slider .ngx-slider .ngx-slider-bubble{bottom:14px}  .custom-slider .ngx-slider .ngx-slider-limit{font-weight:bold;color:orange}  .custom-slider .ngx-slider .ngx-slider-tick{width:1px;height:10px;margin-left:4px;border-radius:0;background:#ffe4d1;top:-1px}  .custom-slider .ngx-slider .ngx-slider-tick.ngx-slider-selected{background:orange}  .custom-slider .ngx-slider .ngx-slider-tick-legend{white-space:nowrap}"],changeDetection:0}),o})();var C=(()=>{return(o=C||(C={})).SELECT="selectField",o.TEXT="textInput",o.PASSWORD="password",o.EMAIL="email",o.NUMBER="number",o.TEXTAREA="textArea",o.RANGE="range",C;var o})();const v={selectField:h,textInput:y,password:g,email:f,number:s,textArea:c,range:u}},3611:(x,d,i)=>{i.d(d,{U:()=>c});var e=i(7716),n=i(3092),l=i(8583),m=i(1250);let h=(()=>{class s{constructor(p,u){this.componentFactoryResolver=p,this.viewContainerRef=u}ngOnInit(){const u=this.componentFactoryResolver.resolveComponentFactory(m.G[this.config.type]);this.component=this.viewContainerRef.createComponent(u),this.component.instance.config=this.config,this.component.instance.group=this.group}}return s.\u0275fac=function(p){return new(p||s)(e.Y36(e._Vd),e.Y36(e.s_b))},s.\u0275dir=e.lG2({type:s,selectors:[["","appForm",""]],inputs:{config:"config",group:"group"}}),s})();function y(s,g){if(1&s&&e.GkF(0,2),2&s){const p=g.$implicit,u=e.oxw();e.Q6J("config",p)("group",u.form)}}const f=["*"];let c=(()=>{class s{constructor(p){this.fb=p,this.config=[],this.formOutput=new e.vpe}ngOnInit(){this.form=this.createGroup()}createGroup(){const p=this.fb.group({});return this.config.forEach(u=>p.addControl(u.name,this.fb.control(""))),this.formOutput.emit(p),p}}return s.\u0275fac=function(p){return new(p||s)(e.Y36(n.qu))},s.\u0275cmp=e.Xpm({type:s,selectors:[["app-form"]],inputs:{config:"config"},outputs:{formOutput:"formOutput"},ngContentSelectors:f,decls:3,vars:2,consts:[[1,"w-full","max-w-xs","mx-auto","flex","flex-col","py-5","px-8",3,"formGroup"],["appForm","",3,"config","group",4,"ngFor","ngForOf"],["appForm","",3,"config","group"]],template:function(p,u){1&p&&(e.F$t(),e.TgZ(0,"form",0),e.YNc(1,y,1,2,"ng-container",1),e.Hsn(2),e.qZA()),2&p&&(e.Q6J("formGroup",u.form),e.xp6(1),e.Q6J("ngForOf",u.config))},directives:[n._Y,n.JL,n.sg,l.sg,h],styles:[""],encapsulation:2,changeDetection:0}),s})()}}]);