(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"7Lvj":function(e,t,i){"use strict";i.r(t),i.d(t,"RecipesModule",(function(){return S}));var n=i("tyNb"),r=i("3Pt+"),c=i("PCNd"),o=i("fXoL"),b=i("kt0X"),s=i("bD0c"),p=i("S3+y");const a=Object(b.j)(s.a,e=>e.recipes),d=Object(b.j)(a,e=>Object.keys(e).map(t=>e[t])),l=Object(b.j)(a,e=>e.recipes?Object.keys(e.recipes).length:0),u=Object(b.j)(a,p.b,(e,t)=>t.state&&e[t.state.params.recipeId]);var m=i("ofXK");const g=function(e){return[e]};let O=(()=>{class e{constructor(){}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=o.Db({type:e,selectors:[["app-recipe-item"]],inputs:{recipe:"recipe"},decls:13,vars:7,consts:[[1,"list-group"],["routerLinkActive","active",1,"list-group-item","clearfix",2,"cursor","pointer",3,"routerLink"],["colspan","2"],[1,"list-group-item-heading"],[1,"recipe-desc-cell"],[1,"list-group-item-text"],[1,"recipe-img","img-responsive",3,"src","alt"]],template:function(e,t){1&e&&(o.Ob(0,"div",0),o.Ob(1,"a",1),o.Ob(2,"table"),o.Ob(3,"tr"),o.Ob(4,"td",2),o.Ob(5,"h4",3),o.nc(6),o.Nb(),o.Nb(),o.Nb(),o.Ob(7,"tr"),o.Ob(8,"td",4),o.Ob(9,"p",5),o.nc(10),o.Nb(),o.Nb(),o.Ob(11,"td"),o.Kb(12,"img",6),o.Nb(),o.Nb(),o.Nb(),o.Nb(),o.Nb()),2&e&&(o.zb(1),o.bc("routerLink",o.dc(5,g,t.recipe.id)),o.zb(5),o.oc(t.recipe.name),o.zb(4),o.oc(t.recipe.description),o.zb(2),o.bc("src",t.recipe.imagePath,o.jc)("alt",t.recipe.name))},directives:[n.i,n.h],styles:[".recipe-img[_ngcontent-%COMP%]{max-height:50px;margin:0 auto}.recipe-desc-cell[_ngcontent-%COMP%]{width:80%}"]}),e})();function h(e,t){1&e&&o.Kb(0,"app-recipe-item",4),2&e&&o.bc("recipe",t.$implicit)}let f=(()=>{class e{constructor(e){this.store=e}ngOnInit(){this.recipes$=this.store.select(d)}}return e.\u0275fac=function(t){return new(t||e)(o.Jb(b.b))},e.\u0275cmp=o.Db({type:e,selectors:[["app-recipe-list"]],decls:9,vars:3,consts:[[1,"row"],[1,"col-xs-12"],["routerLink","new",1,"btn","btn-success"],[3,"recipe",4,"ngFor","ngForOf"],[3,"recipe"]],template:function(e,t){1&e&&(o.Ob(0,"div",0),o.Ob(1,"div",1),o.Ob(2,"button",2),o.nc(3," New Recipe "),o.Nb(),o.Nb(),o.Nb(),o.Kb(4,"hr"),o.Ob(5,"div",0),o.Ob(6,"div",1),o.lc(7,h,1,1,"app-recipe-item",3),o.Zb(8,"async"),o.Nb(),o.Nb()),2&e&&(o.zb(7),o.bc("ngForOf",o.ac(8,1,t.recipes$)))},directives:[n.g,m.i,O],pipes:[m.b],styles:[""]}),e})(),N=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=o.Db({type:e,selectors:[["app-recipes"]],decls:5,vars:0,consts:[[1,"row"],[1,"col-md-5"],[1,"col-md-7"]],template:function(e,t){1&e&&(o.Ob(0,"div",0),o.Ob(1,"div",1),o.Kb(2,"app-recipe-list"),o.Nb(),o.Ob(3,"div",2),o.Kb(4,"router-outlet"),o.Nb(),o.Nb())},directives:[f,n.k],styles:[""]}),e})();var v=i("OTVi"),w=i("LRne"),y=i("snw9"),j=i("IzEk"),x=i("eIep"),k=i("xiFB");let D=(()=>{class e{constructor(e,t){this.store=e,this.actions$=t}resolve(){return this.store.select(l).pipe(Object(j.a)(1),Object(x.a)(e=>0===e?(this.store.dispatch(k.e()),this.actions$.pipe(Object(y.d)(k.f),Object(j.a)(1))):Object(w.a)(void 0)))}}return e.\u0275fac=function(t){return new(t||e)(o.Sb(b.b),o.Sb(y.a))},e.\u0275prov=o.Fb({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var F=i("mrSG");function I(e,t){if(1&e){const e=o.Pb();o.Ob(0,"div",18),o.Ob(1,"div",19),o.Kb(2,"input",20),o.Nb(),o.Ob(3,"div",21),o.Kb(4,"input",22),o.Nb(),o.Ob(5,"div",21),o.Ob(6,"button",5),o.Wb("click",(function(){o.ic(e);const i=t.index;return o.Yb().onDeleteIngredient(i)})),o.nc(7," Delete "),o.Nb(),o.Nb(),o.Nb()}2&e&&o.bc("formGroupName",t.index)}let R=(()=>{class e{constructor(e,t){this.router=e,this.store=t,this.editMode=!1}get ingredientControls(){return this.recipeForm.get("ingredients").controls}ngOnInit(){this.store.select(u).subscribe(e=>{if(this.editMode=!!e,this.editMode){const{id:t}=e,i=Object(F.a)(e,["id"]);this.editedRecipeId=t,this.editedRecipeData=i}}),this.initForm()}initForm(){let e="",t="",i="";const n=new r.c([]);if(this.editMode&&(e=this.editedRecipeData.name,t=this.editedRecipeData.description,i=this.editedRecipeData.imagePath,this.editedRecipeData.ingredients))for(const c of this.editedRecipeData.ingredients)n.push(new r.g({name:new r.e(c.name,r.r.required),amount:new r.e(c.amount,[r.r.required])}));this.recipeForm=new r.g({ingredients:n,name:new r.e(e,r.r.required),description:new r.e(t,r.r.required),imagePath:new r.e(i,r.r.required)})}onAddIngredient(){this.recipeForm.get("ingredients").push(new r.g({name:new r.e(null,r.r.required),amount:new r.e(null,[r.r.required])}))}onDeleteIngredient(e){this.recipeForm.get("ingredients").removeAt(e)}onSubmit(){const e=Object.assign({},this.recipeForm.value);this.store.dispatch(this.editMode?k.g({recipe:Object.assign({id:this.editedRecipeId},e)}):k.a({recipe:e})),this.goBack()}onCancel(){this.goBack()}goBack(){this.router.navigate(["../"])}}return e.\u0275fac=function(t){return new(t||e)(o.Jb(n.f),o.Jb(b.b))},e.\u0275cmp=o.Db({type:e,selectors:[["app-recipe-edit"]],decls:43,vars:4,consts:[[1,"row"],[1,"col-xs-12"],[3,"formGroup","ngSubmit"],[1,"col-xs-12","btn-toolbar"],["type","submit",1,"btn","btn-success",3,"disabled"],["type","button",1,"btn","btn-danger",3,"click"],[1,"form-group"],["for","name"],["type","text","formControlName","name","id","name",1,"form-control"],["for","imagePath"],["type","text","formControlName","imagePath","id","imagePath",1,"form-control"],["imagePath",""],[1,"img-responsive",3,"src"],["for","description"],["rows","6","formControlName","description","id","description",1,"form-control"],["formArrayName","ingredients",1,"col-xs-12"],["class","row","style","margin-top: 10px;",3,"formGroupName",4,"ngFor","ngForOf"],["type","button",1,"btn","btn-success",3,"click"],[1,"row",2,"margin-top","10px",3,"formGroupName"],[1,"col-xs-8"],["type","text","formControlName","name",1,"form-control"],[1,"col-xs-2"],["type","text","formControlName","amount",1,"form-control"]],template:function(e,t){if(1&e&&(o.Ob(0,"div",0),o.Ob(1,"div",1),o.Ob(2,"form",2),o.Wb("ngSubmit",(function(){return t.onSubmit()})),o.Ob(3,"div",0),o.Ob(4,"div",3),o.Ob(5,"button",4),o.nc(6," Save "),o.Nb(),o.Ob(7,"button",5),o.Wb("click",(function(){return t.onCancel()})),o.nc(8," Cancel "),o.Nb(),o.Nb(),o.Nb(),o.Kb(9,"hr"),o.Ob(10,"div",0),o.Ob(11,"div",1),o.Ob(12,"div",6),o.Ob(13,"label",7),o.nc(14,"Name"),o.Nb(),o.Kb(15,"input",8),o.Nb(),o.Nb(),o.Nb(),o.Ob(16,"div",0),o.Ob(17,"div",1),o.Ob(18,"div",6),o.Ob(19,"label",9),o.nc(20,"Image Url"),o.Nb(),o.nc(21,"\xa0"),o.Ob(22,"small"),o.nc(23,"(Feel free to use any picture from the Internet)"),o.Nb(),o.Kb(24,"input",10,11),o.Nb(),o.Nb(),o.Nb(),o.Ob(26,"div",0),o.Ob(27,"div",1),o.Kb(28,"img",12),o.Nb(),o.Nb(),o.Ob(29,"div",0),o.Ob(30,"div",1),o.Ob(31,"div",6),o.Ob(32,"label",13),o.nc(33,"Description"),o.Nb(),o.Kb(34,"textarea",14),o.Nb(),o.Nb(),o.Nb(),o.Ob(35,"div",0),o.Ob(36,"div",15),o.lc(37,I,8,1,"div",16),o.Nb(),o.Nb(),o.Kb(38,"hr"),o.Ob(39,"div",0),o.Ob(40,"div",1),o.Ob(41,"button",17),o.Wb("click",(function(){return t.onAddIngredient()})),o.nc(42," Add Ingredient "),o.Nb(),o.Nb(),o.Nb(),o.Nb(),o.Nb(),o.Nb()),2&e){const e=o.fc(25);o.zb(2),o.bc("formGroup",t.recipeForm),o.zb(3),o.bc("disabled",!t.recipeForm.valid),o.zb(23),o.bc("src",e.value,o.jc),o.zb(9),o.bc("ngForOf",t.ingredientControls)}},directives:[r.s,r.m,r.h,r.a,r.l,r.f,r.d,m.i,r.i],styles:["input.ng-invalid.ng-touched[_ngcontent-%COMP%], textarea.ng-invalid.ng-touched[_ngcontent-%COMP%]{border:1px solid tomato}"]}),e})();var C=i("sPvp");let P=(()=>{class e{constructor(e){this.elRef=e,this.open=!1}toggleOpen(e){this.open=!!this.elRef.nativeElement.contains(e.target)&&!this.open}}return e.\u0275fac=function(t){return new(t||e)(o.Jb(o.l))},e.\u0275dir=o.Eb({type:e,selectors:[["","appDropdown",""]],hostVars:2,hostBindings:function(e,t){1&e&&o.Wb("click",(function(e){return t.toggleOpen(e)}),!1,o.gc),2&e&&o.Bb("open",t.open)}}),e})();function K(e,t){if(1&e&&(o.Ob(0,"li",12),o.nc(1),o.Nb()),2&e){const e=t.$implicit;o.zb(1),o.qc(" ",e.name," - ",e.amount," ")}}const z=[{path:"",canActivate:[v.a],component:N,resolve:[D],children:[{path:"new",component:R},{path:":recipeId",component:(()=>{class e{constructor(e,t){this.router=e,this.store=t}ngOnInit(){this.store.select(u).subscribe(e=>{this.recipe=e})}onAddToShoppingList(){this.store.dispatch(C.a({ingredients:this.recipe.ingredients}))}onDeleteRecipe(){this.store.dispatch(k.c({id:this.recipe.id})),this.router.navigate(["recipes"])}}return e.\u0275fac=function(t){return new(t||e)(o.Jb(n.f),o.Jb(b.b))},e.\u0275cmp=o.Db({type:e,selectors:[["app-recipe-detail"]],decls:31,vars:5,consts:[[1,"row"],[1,"col-xs-12"],[1,"img-responsive",2,"max-height","300px",3,"src","alt"],["appDropdown","",1,"btn-group"],["type","button",1,"btn","btn-primary","dropdown-toggle"],[1,"caret"],[1,"dropdown-menu"],[2,"cursor","pointer",3,"click"],["routerLink","edit",2,"cursor","pointer"],[1,"recipe-description"],[1,"list-group"],["class","list-group-item",4,"ngFor","ngForOf"],[1,"list-group-item"]],template:function(e,t){1&e&&(o.Ob(0,"div",0),o.Ob(1,"div",1),o.Kb(2,"img",2),o.Nb(),o.Nb(),o.Ob(3,"div",0),o.Ob(4,"div",1),o.Ob(5,"h1"),o.nc(6),o.Nb(),o.Nb(),o.Nb(),o.Ob(7,"div",0),o.Ob(8,"div",1),o.Ob(9,"div",3),o.Ob(10,"button",4),o.nc(11," Manage Recipe "),o.Kb(12,"span",5),o.Nb(),o.Ob(13,"ul",6),o.Ob(14,"li"),o.Ob(15,"a",7),o.Wb("click",(function(){return t.onAddToShoppingList()})),o.nc(16," To Shopping List "),o.Nb(),o.Nb(),o.Ob(17,"li"),o.Ob(18,"a",8),o.nc(19," Edit Recipe "),o.Nb(),o.Nb(),o.Ob(20,"li"),o.Ob(21,"a",7),o.Wb("click",(function(){return t.onDeleteRecipe()})),o.nc(22," Delete Recipe "),o.Nb(),o.Nb(),o.Nb(),o.Nb(),o.Nb(),o.Nb(),o.Ob(23,"div",0),o.Ob(24,"div",1),o.Ob(25,"p",9),o.nc(26),o.Nb(),o.Nb(),o.Nb(),o.Ob(27,"div",0),o.Ob(28,"div",1),o.Ob(29,"ul",10),o.lc(30,K,2,2,"li",11),o.Nb(),o.Nb(),o.Nb()),2&e&&(o.zb(2),o.bc("src",t.recipe.imagePath,o.jc)("alt",t.recipe.name),o.zb(4),o.oc(t.recipe.name),o.zb(20),o.pc(" ",t.recipe.description," "),o.zb(4),o.bc("ngForOf",t.recipe.ingredients))},directives:[P,n.i,m.i],styles:[".recipe-description[_ngcontent-%COMP%]{margin-top:20px}"]}),e})()},{path:":recipeId/edit",component:R}]}];let M=(()=>{class e{}return e.\u0275mod=o.Hb({type:e}),e.\u0275inj=o.Gb({factory:function(t){return new(t||e)},imports:[[n.j.forChild(z)],n.j]}),e})(),S=(()=>{class e{}return e.\u0275mod=o.Hb({type:e}),e.\u0275inj=o.Gb({factory:function(t){return new(t||e)},imports:[[n.j,r.p,c.a,M]]}),e})()}}]);