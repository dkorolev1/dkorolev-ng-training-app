(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"7Lvj":function(e,t,i){"use strict";i.r(t),i.d(t,"RecipesModule",(function(){return L}));var n=i("tyNb"),r=i("3Pt+"),c=i("PCNd"),o=i("KFp4"),s=i("fXoL"),b=i("kt0X"),p=i("bD0c"),a=i("S3+y");const d=Object(b.i)(p.a,e=>e.recipes),l=Object(b.i)(d,e=>Object.keys(e).map(t=>e[t])),u=Object(b.i)(d,e=>e.recipes?Object.keys(e.recipes).length:0),m=Object(b.i)(d,a.b,(e,t)=>t.state&&e[t.state.params.recipeId]);var g=i("ofXK");const O=function(e){return[e]};let h=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=s.Db({type:e,selectors:[["app-recipe-item"]],inputs:{recipe:"recipe"},decls:8,vars:7,consts:[["routerLinkActive","active",1,"list-group-item","clearfix",2,"cursor","pointer",3,"routerLink"],[1,"pull-left"],[1,"list-group-item-heading"],[1,"list-group-item-text"],[1,"pull-right"],[1,"recipe-img","img-responsive",3,"src","alt"]],template:function(e,t){1&e&&(s.Ob(0,"a",0),s.Ob(1,"div",1),s.Ob(2,"h4",2),s.nc(3),s.Nb(),s.Ob(4,"p",3),s.nc(5),s.Nb(),s.Nb(),s.Ob(6,"span",4),s.Kb(7,"img",5),s.Nb(),s.Nb()),2&e&&(s.bc("routerLink",s.dc(5,O,t.recipe.id)),s.zb(3),s.oc(t.recipe.name),s.zb(2),s.oc(t.recipe.description),s.zb(2),s.bc("src",t.recipe.imagePath,s.jc)("alt",t.recipe.name))},directives:[n.i,n.h],styles:[".recipe-img[_ngcontent-%COMP%]{max-height:50px}"]}),e})();function f(e,t){1&e&&s.Kb(0,"app-recipe-item",4),2&e&&s.bc("recipe",t.$implicit)}let v=(()=>{class e{constructor(e){this.store=e}ngOnInit(){this.recipes$=this.store.select(l)}}return e.\u0275fac=function(t){return new(t||e)(s.Jb(b.b))},e.\u0275cmp=s.Db({type:e,selectors:[["app-recipe-list"]],decls:9,vars:3,consts:[[1,"row"],[1,"col-xs-12"],["routerLink","new",1,"btn","btn-success"],[3,"recipe",4,"ngFor","ngForOf"],[3,"recipe"]],template:function(e,t){1&e&&(s.Ob(0,"div",0),s.Ob(1,"div",1),s.Ob(2,"button",2),s.nc(3," New Recipe "),s.Nb(),s.Nb(),s.Nb(),s.Kb(4,"hr"),s.Ob(5,"div",0),s.Ob(6,"div",1),s.lc(7,f,1,1,"app-recipe-item",3),s.Zb(8,"async"),s.Nb(),s.Nb()),2&e&&(s.zb(7),s.bc("ngForOf",s.ac(8,1,t.recipes$)))},directives:[n.g,g.i,h],pipes:[g.b],styles:[""]}),e})(),N=(()=>{class e{constructor(e){this.store=e}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)(s.Jb(b.b))},e.\u0275cmp=s.Db({type:e,selectors:[["app-recipes"]],decls:5,vars:0,consts:[[1,"row"],[1,"col-md-5"],[1,"col-md-7"]],template:function(e,t){1&e&&(s.Ob(0,"div",0),s.Ob(1,"div",1),s.Kb(2,"app-recipe-list"),s.Nb(),s.Ob(3,"div",2),s.Kb(4,"router-outlet"),s.Nb(),s.Nb())},directives:[v,n.k],styles:[""]}),e})();var w=i("LRne"),y=i("snw9"),k=i("IzEk"),x=i("eIep"),j=i("xiFB");let D=(()=>{class e{constructor(e,t){this.store=e,this.actions$=t}resolve(e,t){return this.store.select(u).pipe(Object(k.a)(1),Object(x.a)(e=>0===e?(this.store.dispatch(new j.k),this.actions$.pipe(Object(y.d)(j.j),Object(k.a)(1))):Object(w.a)(void 0)))}}return e.\u0275fac=function(t){return new(t||e)(s.Sb(b.b),s.Sb(y.a))},e.\u0275prov=s.Fb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var F=i("mrSG");function I(e,t){if(1&e){const e=s.Pb();s.Ob(0,"div",18),s.Ob(1,"div",19),s.Kb(2,"input",20),s.Nb(),s.Ob(3,"div",21),s.Kb(4,"input",22),s.Nb(),s.Ob(5,"div",21),s.Ob(6,"button",5),s.Wb("click",(function(){s.ic(e);const i=t.index;return s.Yb().onDeleteIngredient(i)})),s.nc(7," Delete "),s.Nb(),s.Nb(),s.Nb()}2&e&&s.bc("formGroupName",t.index)}let R=(()=>{class e{constructor(e,t){this.router=e,this.store=t,this.editMode=!1}get ingredientControls(){return this.recipeForm.get("ingredients").controls}ngOnInit(){this.store.select(m).subscribe(e=>{if(this.editMode=!!e,this.editMode){const{id:t}=e,i=Object(F.b)(e,["id"]);this.editedRecipeId=t,this.editedRecipeData=i}}),this.initForm()}initForm(){let e="",t="",i="",n=new r.c([]);if(this.editMode&&(e=this.editedRecipeData.name,t=this.editedRecipeData.description,i=this.editedRecipeData.imagePath,this.editedRecipeData.ingredients))for(let c of this.editedRecipeData.ingredients)n.push(new r.g({name:new r.e(c.name,r.r.required),amount:new r.e(c.amount,[r.r.required])}));this.recipeForm=new r.g({ingredients:n,name:new r.e(e,r.r.required),description:new r.e(t,r.r.required),imagePath:new r.e(i,r.r.required)})}onAddIngredient(){this.recipeForm.get("ingredients").push(new r.g({name:new r.e(null,r.r.required),amount:new r.e(null,[r.r.required])}))}onDeleteIngredient(e){this.recipeForm.get("ingredients").removeAt(e)}onSubmit(){const e=Object.assign({},this.recipeForm.value);this.store.dispatch(this.editMode?new j.o(Object.assign({id:this.editedRecipeId},e)):new j.c(e)),this.goBack()}onCancel(){this.goBack()}goBack(){this.router.navigate(["../"])}}return e.\u0275fac=function(t){return new(t||e)(s.Jb(n.f),s.Jb(b.b))},e.\u0275cmp=s.Db({type:e,selectors:[["app-recipe-edit"]],decls:39,vars:4,consts:[[1,"row"],[1,"col-xs-12"],[3,"formGroup","ngSubmit"],[1,"col-xs-12","btn-toolbar"],["type","submit",1,"btn","btn-success",3,"disabled"],["type","button",1,"btn","btn-danger",3,"click"],[1,"form-group"],["for","name"],["type","text","formControlName","name","id","name",1,"form-control"],["for","imagePath"],["type","text","formControlName","imagePath","id","imagePath",1,"form-control"],["imagePath",""],["alt","",1,"img-responsive",3,"src"],["for","description"],["rows","6","formControlName","description","id","description",1,"form-control"],["formArrayName","ingredients",1,"col-xs-12"],["class","row","style","margin-top: 10px;",3,"formGroupName",4,"ngFor","ngForOf"],["type","button",1,"btn","btn-success",3,"click"],[1,"row",2,"margin-top","10px",3,"formGroupName"],[1,"col-xs-8"],["type","text","formControlName","name",1,"form-control"],[1,"col-xs-2"],["type","text","formControlName","amount",1,"form-control"]],template:function(e,t){if(1&e&&(s.Ob(0,"div",0),s.Ob(1,"div",1),s.Ob(2,"form",2),s.Wb("ngSubmit",(function(){return t.onSubmit()})),s.Ob(3,"div",0),s.Ob(4,"div",3),s.Ob(5,"button",4),s.nc(6," Save "),s.Nb(),s.Ob(7,"button",5),s.Wb("click",(function(){return t.onCancel()})),s.nc(8," Cancel "),s.Nb(),s.Nb(),s.Nb(),s.Ob(9,"div",0),s.Ob(10,"div",1),s.Ob(11,"div",6),s.Ob(12,"label",7),s.nc(13,"Name"),s.Nb(),s.Kb(14,"input",8),s.Nb(),s.Nb(),s.Nb(),s.Ob(15,"div",0),s.Ob(16,"div",1),s.Ob(17,"div",6),s.Ob(18,"label",9),s.nc(19,"Image Url"),s.Nb(),s.Kb(20,"input",10,11),s.Nb(),s.Nb(),s.Nb(),s.Ob(22,"div",0),s.Ob(23,"div",1),s.Kb(24,"img",12),s.Nb(),s.Nb(),s.Ob(25,"div",0),s.Ob(26,"div",1),s.Ob(27,"div",6),s.Ob(28,"label",13),s.nc(29,"Description"),s.Nb(),s.Kb(30,"textarea",14),s.Nb(),s.Nb(),s.Nb(),s.Ob(31,"div",0),s.Ob(32,"div",15),s.lc(33,I,8,1,"div",16),s.Nb(),s.Nb(),s.Kb(34,"hr"),s.Ob(35,"div",0),s.Ob(36,"div",1),s.Ob(37,"button",17),s.Wb("click",(function(){return t.onAddIngredient()})),s.nc(38," Add Ingredient "),s.Nb(),s.Nb(),s.Nb(),s.Nb(),s.Nb(),s.Nb()),2&e){const e=s.fc(21);s.zb(2),s.bc("formGroup",t.recipeForm),s.zb(3),s.bc("disabled",!t.recipeForm.valid),s.zb(19),s.bc("src",e.value,s.jc),s.zb(9),s.bc("ngForOf",t.ingredientControls)}},directives:[r.s,r.m,r.h,r.a,r.l,r.f,r.d,g.i,r.i],styles:["input.ng-invalid.ng-touched[_ngcontent-%COMP%], textarea.ng-invalid.ng-touched[_ngcontent-%COMP%]{border:1px solid tomato}"]}),e})();var K=i("sPvp");let C=(()=>{class e{constructor(e){this.elRef=e,this.open=!1}toggleOpen(e){this.open=!!this.elRef.nativeElement.contains(e.target)&&!this.open}}return e.\u0275fac=function(t){return new(t||e)(s.Jb(s.l))},e.\u0275dir=s.Eb({type:e,selectors:[["","appDropdown",""]],hostVars:2,hostBindings:function(e,t){1&e&&s.Wb("click",(function(e){return t.toggleOpen(e)}),!1,s.gc),2&e&&s.Bb("open",t.open)}}),e})();function P(e,t){if(1&e&&(s.Ob(0,"li",11),s.nc(1),s.Nb()),2&e){const e=t.$implicit;s.zb(1),s.qc(" ",e.name," - ",e.amount," ")}}const z=[{path:"",canActivate:[o.a],component:N,resolve:[D],children:[{path:"new",component:R},{path:":recipeId",component:(()=>{class e{constructor(e,t){this.router=e,this.store=t}ngOnInit(){this.store.select(m).subscribe(e=>{this.recipe=e})}onAddToShoppingList(){this.store.dispatch(new K.c(this.recipe.ingredients))}onDeleteRecipe(){this.store.dispatch(new j.g(this.recipe.id)),this.router.navigate(["recipes"])}}return e.\u0275fac=function(t){return new(t||e)(s.Jb(n.f),s.Jb(b.b))},e.\u0275cmp=s.Db({type:e,selectors:[["app-recipe-detail"]],decls:30,vars:5,consts:[[1,"row"],[1,"col-xs-12"],[1,"img-responsive",2,"max-height","300px",3,"src","alt"],["appDropdown","",1,"btn-group"],["type","button",1,"btn","btn-primary","dropdown-toggle"],[1,"caret"],[1,"dropdown-menu"],[2,"cursor","pointer",3,"click"],["routerLink","edit",2,"cursor","pointer"],[1,"list-group"],["class","list-group-item",4,"ngFor","ngForOf"],[1,"list-group-item"]],template:function(e,t){1&e&&(s.Ob(0,"div",0),s.Ob(1,"div",1),s.Kb(2,"img",2),s.Nb(),s.Nb(),s.Ob(3,"div",0),s.Ob(4,"div",1),s.Ob(5,"h1"),s.nc(6),s.Nb(),s.Nb(),s.Nb(),s.Ob(7,"div",0),s.Ob(8,"div",1),s.Ob(9,"div",3),s.Ob(10,"button",4),s.nc(11," Manage Recipe "),s.Kb(12,"span",5),s.Nb(),s.Ob(13,"ul",6),s.Ob(14,"li"),s.Ob(15,"a",7),s.Wb("click",(function(){return t.onAddToShoppingList()})),s.nc(16," To Shopping List "),s.Nb(),s.Nb(),s.Ob(17,"li"),s.Ob(18,"a",8),s.nc(19," Edit Recipe "),s.Nb(),s.Nb(),s.Ob(20,"li"),s.Ob(21,"a",7),s.Wb("click",(function(){return t.onDeleteRecipe()})),s.nc(22," Delete Recipe "),s.Nb(),s.Nb(),s.Nb(),s.Nb(),s.Nb(),s.Nb(),s.Ob(23,"div",0),s.Ob(24,"div",1),s.nc(25),s.Nb(),s.Nb(),s.Ob(26,"div",0),s.Ob(27,"div",1),s.Ob(28,"ul",9),s.lc(29,P,2,2,"li",10),s.Nb(),s.Nb(),s.Nb()),2&e&&(s.zb(2),s.bc("src",t.recipe.imagePath,s.jc)("alt",t.recipe.name),s.zb(4),s.oc(t.recipe.name),s.zb(19),s.pc(" ",t.recipe.description," "),s.zb(4),s.bc("ngForOf",t.recipe.ingredients))},directives:[C,n.i,g.i],styles:[""]}),e})()},{path:":recipeId/edit",component:R}]}];let S=(()=>{class e{}return e.\u0275mod=s.Hb({type:e}),e.\u0275inj=s.Gb({factory:function(t){return new(t||e)},imports:[[n.j.forChild(z)],n.j]}),e})(),L=(()=>{class e{}return e.\u0275mod=s.Hb({type:e}),e.\u0275inj=s.Gb({factory:function(t){return new(t||e)},imports:[[n.j,r.p,c.a,S]]}),e})()}}]);