function t(t,n){t.prototype=Object.create(n.prototype);t.prototype.constructor=t;t.__proto__=n}function n(t,n){for(var e=0;e<n.length;e++){var i=n[e];i.enumerable=i.enumerable||false;i.configurable=true;if("value"in i)i.writable=true;Object.defineProperty(t,i.key,i)}}function e(t,e,i){if(e)n(t.prototype,e);if(i)n(t,i);return t}(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"4R7V":function n(i,a,o){"use strict";o.r(a);var r=o("fXoL"),c=o("ofXK"),s=o("3Pt+"),l=o("MSSf"),f=o("IRfi"),u=o("TY1r"),d=o("A2Vd"),p=o("sCmA"),m=o("G/Ji"),h=o("XNiG"),b=o("R0Ic"),v=o("6KbF"),g=o("IzEk"),_=o("1G5W"),k=o("OCB9"),w=o("j14s"),y=o("Xlwt"),j=o("tkJt"),S=o("sjd8");var I=[1,"mat-simple-snackbar"],O=["class","mat-simple-snackbar-action",4,"ngIf"],C=[1,"mat-simple-snackbar-action"],R=["mat-button","",3,"click"];function x(t,n){if(1&t){var e=r.mc();r.lc(0,"div",C),r.lc(1,"button",R),r.rc("click",function(t){return r.Gc(e),r.vc().action()}),r.Sc(2),r.jc(),r.jc()}if(2&t){var i=r.vc();r.Ic(2),r.Tc(i.data.action)}}var B=[1,"mat-snack-bar-container"],A=["cdkPortalOutlet",""];function D(t,n){}var T=function(){function t(t,n){var e=this;this._overlayRef=n,this._afterDismissed=new h.a,this._afterOpened=new h.a,this._onAction=new h.a,this._dismissedByAction=!1,this.containerInstance=t,this.onAction().subscribe(function(){return e.dismiss()}),t._onExit.subscribe(function(){return e._finishDismiss()})}var n=t.prototype;n.dismiss=function t(){this._afterDismissed.closed||this.containerInstance.exit(),clearTimeout(this._durationTimeoutId)};n.dismissWithAction=function t(){this._onAction.closed||(this._dismissedByAction=!0,this._onAction.next(),this._onAction.complete())};n.closeWithAction=function t(){this.dismissWithAction()};n._dismissAfter=function t(n){var e=this;this._durationTimeoutId=setTimeout(function(){return e.dismiss()},n)};n._open=function t(){this._afterOpened.closed||(this._afterOpened.next(),this._afterOpened.complete())};n._finishDismiss=function t(){this._overlayRef.dispose(),this._onAction.closed||this._onAction.complete(),this._afterDismissed.next({dismissedByAction:this._dismissedByAction}),this._afterDismissed.complete(),this._dismissedByAction=!1};n.afterDismissed=function t(){return this._afterDismissed.asObservable()};n.afterOpened=function t(){return this.containerInstance._onEnter};n.onAction=function t(){return this._onAction.asObservable()};return t}();var M=new r.z("MatSnackBarData");var P=function t(){this.politeness="assertive",this.announcementMessage="",this.duration=0,this.data=null,this.horizontalPosition="center",this.verticalPosition="bottom"};var L=function(){var t=function(){function t(t,n){this.snackBarRef=t,this.data=n}var n=t.prototype;n.action=function t(){this.snackBarRef.dismissWithAction()};e(t,[{key:"hasAction",get:function t(){return!!this.data.action}}]);return t}();return t.ngComponentDef=r.Yb({type:t,selectors:[["simple-snack-bar"]],factory:function n(e){return new(e||t)(r.ec(T),r.ec(M))},hostBindings:function t(n,e,i){1&n&&r.kc(I)},consts:3,vars:2,template:function t(n,e){1&n&&(r.lc(0,"span"),r.Sc(1),r.jc(),r.Rc(2,x,3,1,"div",O)),2&n&&(r.Ic(1),r.Tc(e.data.message),r.Ic(2),r.Ac("ngIf",e.hasAction))},directives:[c.k,y.a],styles:[".mat-simple-snackbar{display:flex;justify-content:space-between;align-items:center;height:100%;line-height:20px;opacity:1}.mat-simple-snackbar-action{flex-shrink:0;margin:-8px -8px -8px 8px}.mat-simple-snackbar-action button{max-height:36px;min-width:0}[dir=rtl] .mat-simple-snackbar-action{margin-left:-8px;margin-right:8px}"],encapsulation:2,changeDetection:0}),t}();var E={snackBarState:Object(b.n)("state",[Object(b.k)("void, hidden",Object(b.l)({transform:"scale(0.8)",opacity:0})),Object(b.k)("visible",Object(b.l)({transform:"scale(1)",opacity:1})),Object(b.m)("* => visible",Object(b.e)("150ms cubic-bezier(0, 0, 0.2, 1)")),Object(b.m)("* => void, * => hidden",Object(b.e)("75ms cubic-bezier(0.4, 0.0, 1, 1)",Object(b.l)({opacity:0})))])};var F=function(){var n=function(n){t(e,n);function e(t,e,i,a){var o;o=n.call(this)||this,o._ngZone=t,o._elementRef=e,o._changeDetectorRef=i,o.snackBarConfig=a,o._destroyed=!1,o._onExit=new h.a,o._onEnter=new h.a,o._animationState="void",o._role="assertive"!==a.politeness||a.announcementMessage?"off"===a.politeness?null:"status":"alert";return o}var i=e.prototype;i.attachComponentPortal=function t(n){return this._assertNotAttached(),this._applySnackBarClasses(),this._portalOutlet.attachComponentPortal(n)};i.attachTemplatePortal=function t(n){return this._assertNotAttached(),this._applySnackBarClasses(),this._portalOutlet.attachTemplatePortal(n)};i.onAnimationEnd=function t(n){var e=n.fromState,i=n.toState;if(("void"===i&&"void"!==e||"hidden"===i)&&this._completeExit(),"visible"===i){var a=this._onEnter;this._ngZone.run(function(){a.next(),a.complete()})}};i.enter=function t(){this._destroyed||(this._animationState="visible",this._changeDetectorRef.detectChanges())};i.exit=function t(){return this._animationState="hidden",this._onExit};i.ngOnDestroy=function t(){this._destroyed=!0,this._completeExit()};i._completeExit=function t(){var n=this;this._ngZone.onMicrotaskEmpty.asObservable().pipe(Object(g.a)(1)).subscribe(function(){n._onExit.next(),n._onExit.complete()})};i._applySnackBarClasses=function t(){var n=this._elementRef.nativeElement,e=this.snackBarConfig.panelClass;e&&(Array.isArray(e)?e.forEach(function(t){return n.classList.add(t)}):n.classList.add(e)),"center"===this.snackBarConfig.horizontalPosition&&n.classList.add("mat-snack-bar-center"),"top"===this.snackBarConfig.verticalPosition&&n.classList.add("mat-snack-bar-top")};i._assertNotAttached=function t(){if(this._portalOutlet.hasAttached())throw Error("Attempting to attach snack bar content after content is already attached")};return e}(v.a);return n.ngComponentDef=r.Yb({type:n,selectors:[["snack-bar-container"]],factory:function t(e){return new(e||n)(r.ec(r.K),r.ec(r.q),r.ec(r.j),r.ec(P))},viewQuery:function t(n,e){var i;1&n&&r.Lc(v.b,!0),2&n&&r.Dc(i=r.sc())&&(e._portalOutlet=i.first)},hostBindings:function t(n,e,i){1&n&&(r.Pb(2),r.Ub("@state.done",function(t){return e.onAnimationEnd(t)}),r.kc(B)),2&n&&(r.Qb("role",e._role),r.Vc("@state",e._animationState))},features:[r.Mb],consts:1,vars:0,template:function t(n,e){1&n&&r.Rc(0,D,0,0,"ng-template",A)},directives:[v.b],styles:[".mat-snack-bar-container{border-radius:4px;box-sizing:border-box;display:block;margin:24px;max-width:33vw;min-width:344px;padding:14px 16px;min-height:48px;transform-origin:center}@media (-ms-high-contrast:active){.mat-snack-bar-container{border:solid 1px}}.mat-snack-bar-handset{width:100%}.mat-snack-bar-handset .mat-snack-bar-container{margin:8px;max-width:100%;min-width:0;width:100%}"],encapsulation:2,data:{animation:[E.snackBarState]}}),n}(),z=function(){var t=function t(){};return t.ngModuleDef=r.cc({type:t}),t.ngInjectorDef=r.bc({factory:function n(e){return new(e||t)},imports:[[k.e,v.f,c.c,y.b,w.g],w.g]}),t}();var U=new r.z("mat-snack-bar-default-options",{providedIn:"root",factory:function t(){return new P}});var N=function(){var t=function(){function t(t,n,e,i,a,o){this._overlay=t,this._live=n,this._injector=e,this._breakpointObserver=i,this._parentSnackBar=a,this._defaultConfig=o,this._snackBarRefAtThisLevel=null}var n=t.prototype;n.openFromComponent=function t(n,e){return this._attach(n,e)};n.openFromTemplate=function t(n,e){return this._attach(n,e)};n.open=function t(n,e,i){if(e===void 0){e=""}var a=Object.assign({},this._defaultConfig,i);return a.data={message:n,action:e},a.announcementMessage||(a.announcementMessage=n),this.openFromComponent(L,a)};n.dismiss=function t(){this._openedSnackBarRef&&this._openedSnackBarRef.dismiss()};n.ngOnDestroy=function t(){this._snackBarRefAtThisLevel&&this._snackBarRefAtThisLevel.dismiss()};n._attachSnackBarContainer=function t(n,e){var i=new v.e(e&&e.viewContainerRef&&e.viewContainerRef.injector||this._injector,new WeakMap([[P,e]])),a=new v.c(F,e.viewContainerRef,i),o=n.attach(a);return o.instance.snackBarConfig=e,o.instance};n._attach=function t(n,e){var i=Object.assign({},new P,this._defaultConfig,e),a=this._createOverlay(i),o=this._attachSnackBarContainer(a,i),c=new T(o,a);if(n instanceof r.Z){var s=new v.g(n,null,{$implicit:i.data,snackBarRef:c});c.instance=o.attachTemplatePortal(s)}else{var l=this._createInjector(i,c),f=new v.c(n,void 0,l),u=o.attachComponentPortal(f);c.instance=u.instance}return this._breakpointObserver.observe(S.b.Handset).pipe(Object(_.a)(a.detachments().pipe(Object(g.a)(1)))).subscribe(function(t){t.matches?a.overlayElement.classList.add("mat-snack-bar-handset"):a.overlayElement.classList.remove("mat-snack-bar-handset")}),this._animateSnackBar(c,i),this._openedSnackBarRef=c,this._openedSnackBarRef};n._animateSnackBar=function t(n,e){var i=this;n.afterDismissed().subscribe(function(){i._openedSnackBarRef==n&&(i._openedSnackBarRef=null),e.announcementMessage&&i._live.clear()}),this._openedSnackBarRef?(this._openedSnackBarRef.afterDismissed().subscribe(function(){n.containerInstance.enter()}),this._openedSnackBarRef.dismiss()):n.containerInstance.enter(),e.duration&&e.duration>0&&n.afterOpened().subscribe(function(){return n._dismissAfter(e.duration)}),e.announcementMessage&&this._live.announce(e.announcementMessage,e.politeness)};n._createOverlay=function t(n){var e=new k.d;e.direction=n.direction;var i=this._overlay.position().global();var a="rtl"===n.direction,o="left"===n.horizontalPosition||"start"===n.horizontalPosition&&!a||"end"===n.horizontalPosition&&a,r=!o&&"center"!==n.horizontalPosition;return o?i.left("0"):r?i.right("0"):i.centerHorizontally(),"top"===n.verticalPosition?i.top("0"):i.bottom("0"),e.positionStrategy=i,this._overlay.create(e)};n._createInjector=function t(n,e){return new v.e(n&&n.viewContainerRef&&n.viewContainerRef.injector||this._injector,new WeakMap([[T,e],[M,n.data]]))};e(t,[{key:"_openedSnackBarRef",get:function t(){var n=this._parentSnackBar;return n?n._openedSnackBarRef:this._snackBarRefAtThisLevel},set:function t(n){this._parentSnackBar?this._parentSnackBar._openedSnackBarRef=n:this._snackBarRefAtThisLevel=n}}]);return t}();return t.ngInjectableDef=r.ac({token:t,factory:function n(e){return new(e||t)(r.pc(k.c),r.pc(j.g),r.pc(r.A),r.pc(S.a),r.pc(t,12),r.pc(U))},providedIn:z}),t.ngInjectableDef=Object(r.ac)({factory:function n(){return new t(Object(r.pc)(k.c),Object(r.pc)(j.g),Object(r.pc)(r.w),Object(r.pc)(S.a),Object(r.pc)(t,12),Object(r.pc)(U))},token:t,providedIn:z}),t}();var H=o("tmTa"),G=o("gVAx"),V=o("tyNb"),W=o("MCLT"),J=o("vkgz"),$=o("Kj3r"),K=o("/uUt"),X=o("eIep"),Y=o("LRne"),Z=o("lJxs"),Q=o("JIr8");var q=function t(n,e){this.id=n.idlinha,this.nome=n.nome,this.codigo=n.codigo,this.coordenadas=e};var tt=function t(n){this.lat=n.lat,this.lng=n.lng};var nt=o("tk/3");var et=function(){var t=function(){function t(t){this.http=t,this.baseUrl="http://www.poatransporte.com.br/php/facades/process.php"}var n=t.prototype;n.getItinerario=function t(n){return this.http.get(this.baseUrl+"?a=il&p="+n)};return t}();return t.ngInjectableDef=r.ac({token:t,factory:function n(e){return new(e||t)(r.pc(nt.a))},providedIn:null}),t}(),it=function(){var t=function(){function t(t){this.restService=t}var n=t.prototype;n.getItinerario=function t(n){var e=this;return this.restService.getItinerario(n).pipe(Object(Z.a)(function(t){return e.buildItinerario(t)}),Object(J.a)(function(t){return console.log(t)},function(t){return console.error("Error on fetching Itinerario UT "+n)},function(){return console.log("Fetched Itinerario UT "+n)}),Object(Q.a)(this.handleError("getItinerario unidadeId="+n)))};n.filterByIndexedEntries=function t(n){return Object.keys(n).filter(function(t){return!isNaN(parseInt(t))}).map(function(t){return Number(t)})};n.buildItinerario=function t(n){var e=this.filterByIndexedEntries(n).map(function(t){return new tt(n[t])});return new q(n,e)};n.handleError=function t(n,e){if(n===void 0){n="operation"}return function(t){return console.error(t),Object(Y.a)(e)}};return t}();return t.ngInjectableDef=r.ac({token:t,factory:function n(e){return new(e||t)(r.pc(et))},providedIn:null}),t}();var at=[1,"top-container"],ot=[3,"formGroup"],rt=["appearance","standard",1,"full-width"],ct=["matInput","","type","search","placeholder","ID da Linha da UT","formControlName","utIdCtrl"],st=["matSuffix","","matTooltip","Buscando...",3,"diameter",4,"ngIf"],lt=["matSuffix","","matTooltip","Resultados encontrados!","style","color: green;",4,"ngIf"],ft=["matSuffix","","matTooltip","Sem resultados!","style","color: red;",4,"ngIf"],ut=["align","end"],dt=["align","begin"],pt=[1,"details-container"],mt=[1,"item"],ht=[1,"key"],bt=[1,"value"],vt=[1,"table-container"],gt=["mat-table","",3,"dataSource"],_t=["matColumnDef","map"],kt=["mat-header-cell","",4,"matHeaderCellDef"],wt=["mat-cell","",4,"matCellDef"],yt=["mat-footer-cell","",4,"matFooterCellDef"],jt=["matColumnDef","lat"],St=["matColumnDef","lng"],It=["mat-header-row","",4,"matHeaderRowDef","matHeaderRowDefSticky"],Ot=["mat-row","",4,"matRowDef","matRowDefColumns"],Ct=["mat-footer-row","",4,"matFooterRowDef","matFooterRowDefSticky"],Rt=["showFirstLastButtons","",3,"pageSizeOptions"],xt=["matSuffix","","matTooltip","Buscando...",3,"diameter"];function Bt(t,n){1&t&&r.fc(0,"mat-spinner",xt),2&t&&r.Ac("diameter",20)}var At=["matSuffix","","matTooltip","Resultados encontrados!",2,"color","green"];function Dt(t,n){1&t&&(r.lc(0,"mat-icon",At),r.Sc(1,"check_circle"),r.jc())}var Tt=["matSuffix","","matTooltip","Sem resultados!",2,"color","red"];function Mt(t,n){1&t&&(r.lc(0,"mat-icon",Tt),r.Sc(1,"error"),r.jc())}var Pt=["mat-header-cell",""];function Lt(t,n){1&t&&(r.lc(0,"th",Pt),r.Sc(1,"Mapa"),r.jc())}var Et=["mat-cell",""],Ft=["mat-flat-button","","target","_blank",3,"href"],zt=["matTooltip","Olhar localiza\xe7\xe3o no Google Maps"];function Ut(t,n){if(1&t&&(r.lc(0,"td",Et),r.lc(1,"a",Ft),r.lc(2,"mat-icon",zt),r.Sc(3,"explore"),r.jc(),r.jc(),r.jc()),2&t){var e=n.$implicit;r.Ic(1),r.Bc("href","https://www.google.com/maps/?q=",e.lat,",",e.lng,"",r.Hc)}}var Nt=["mat-footer-cell",""];function Ht(t,n){1&t&&r.fc(0,"td",Nt)}function Gt(t,n){1&t&&(r.lc(0,"th",Pt),r.Sc(1,"Latitude"),r.jc())}function Vt(t,n){if(1&t&&(r.lc(0,"td",Et),r.Sc(1),r.jc()),2&t){var e=n.$implicit;r.Ic(1),r.Tc(e.lat)}}function Wt(t,n){1&t&&r.fc(0,"td",Nt)}function Jt(t,n){1&t&&(r.lc(0,"th",Pt),r.Sc(1,"Longitude"),r.jc())}function $t(t,n){if(1&t&&(r.lc(0,"td",Et),r.Sc(1),r.jc()),2&t){var e=n.$implicit;r.Ic(1),r.Tc(e.lng)}}function Kt(t,n){1&t&&r.fc(0,"td",Nt)}var Xt=["mat-header-row",""];function Yt(t,n){1&t&&r.fc(0,"tr",Xt)}var Zt=["mat-row",""];function Qt(t,n){1&t&&r.fc(0,"tr",Zt)}var qt=["mat-footer-row",""];function tn(t,n){1&t&&r.fc(0,"tr",qt)}var nn=function(){var t=function(){function t(t,n,e,i){this.itinerarioUnidadeService=t,this.formBuilder=n,this.snackBar=e,this.route=i,this.isLoading=!1,this.wasFound=!0,this.tableSizeOptions=[5,10,20],this.displayedColumns=["map","lat","lng"]}var n=t.prototype;n.ngOnInit=function t(){var n=this;this.form=this.formBuilder.group({utIdCtrl:["",[s.l.pattern("^[0-9]*$"),s.l.minLength(1)]]}),this.reactToFormIdFieldValueChange().subscribe(),this.route.params.subscribe(function(t){t.id&&n.form.get("utIdCtrl").setValue(t.id)})};n.reactToFormIdFieldValueChange=function t(){var n=this;return this.form.get("utIdCtrl").valueChanges.pipe(Object(J.a)(function(){n.isLoading=!0}),Object($.a)(600),Object(K.a)(),Object(X.a)(function(t){return n.getItinerario(t)}),Object(J.a)(function(t){n.itinerario=t}),Object(J.a)(function(){n.isLoading=!1}),Object(J.a)(function(t){Object(W.isNullOrUndefined)(t)?(n.dataSource=void 0,n.wasFound=!1,n.openSnackBar("Sem resultados!","Fechar")):(n.dataSource=new H.o(n.itinerario.coordenadas),n.dataSource.paginator=n.paginator,n.wasFound=!0,n.openSnackBar("Itiner\xe1rio da UT "+n.itinerario.id+" encontrado!","Fechar"))}))};n.getItinerario=function t(n){return this.itinerarioUnidadeService.getItinerario(n)};n.openSnackBar=function t(n,e){this.snackBar.open(n,e,{duration:2e3})};return t}();return t.ngComponentDef=r.Yb({type:t,selectors:[["app-itinerario-unidade-details"]],factory:function n(e){return new(e||t)(r.ec(it),r.ec(s.b),r.ec(N),r.ec(V.a))},viewQuery:function t(n,e){var i;1&n&&r.Lc(p.a,!0),2&n&&r.Dc(i=r.sc())&&(e.paginator=i.first)},consts:44,vars:13,template:function t(n,e){1&n&&(r.lc(0,"mat-card"),r.lc(1,"mat-card-title"),r.Sc(2,"Itiner\xe1rio de Linha da UT"),r.jc(),r.lc(3,"mat-card-content"),r.lc(4,"div",at),r.lc(5,"form",ot),r.lc(6,"mat-form-field",rt),r.fc(7,"input",ct),r.Rc(8,Bt,1,1,"mat-spinner",st),r.Rc(9,Dt,2,0,"mat-icon",lt),r.Rc(10,Mt,2,0,"mat-icon",ft),r.lc(11,"mat-hint",ut),r.Sc(12,"Somente n\xfameros. Ex: 1, 12, 1234."),r.jc(),r.lc(13,"mat-error",dt),r.Sc(14,"ID inv\xe1lido."),r.jc(),r.jc(),r.jc(),r.lc(15,"div",pt),r.lc(16,"div",mt),r.lc(17,"a",ht),r.Sc(18,"Nome:"),r.jc(),r.lc(19,"a",bt),r.Sc(20),r.jc(),r.jc(),r.lc(21,"div",mt),r.lc(22,"a",ht),r.Sc(23,"C\xf3digo:"),r.jc(),r.lc(24,"a",bt),r.Sc(25),r.jc(),r.jc(),r.jc(),r.jc(),r.lc(26,"div",vt),r.lc(27,"table",gt),r.ic(28,_t),r.Rc(29,Lt,2,0,"th",kt),r.Rc(30,Ut,4,2,"td",wt),r.Rc(31,Ht,1,0,"td",yt),r.hc(),r.ic(32,jt),r.Rc(33,Gt,2,0,"th",kt),r.Rc(34,Vt,2,1,"td",wt),r.Rc(35,Wt,1,0,"td",yt),r.hc(),r.ic(36,St),r.Rc(37,Jt,2,0,"th",kt),r.Rc(38,$t,2,1,"td",wt),r.Rc(39,Kt,1,0,"td",yt),r.hc(),r.Rc(40,Yt,1,0,"tr",It),r.Rc(41,Qt,1,0,"tr",Ot),r.Rc(42,tn,1,0,"tr",Ct),r.jc(),r.fc(43,"mat-paginator",Rt),r.jc(),r.jc(),r.jc()),2&n&&(r.Ic(5),r.Ac("formGroup",e.form),r.Ic(8),r.Ac("ngIf",e.isLoading),r.Ic(9),r.Ac("ngIf",!e.isLoading&&e.wasFound&&e.itinerario),r.Ic(10),r.Ac("ngIf",!e.isLoading&&!e.wasFound),r.Ic(20),r.Tc(e.itinerario?e.itinerario.nome:""),r.Ic(25),r.Tc(e.itinerario?e.itinerario.codigo:""),r.Ic(27),r.Ac("dataSource",e.dataSource),r.Ic(40),r.Ac("matHeaderRowDef",e.displayedColumns)("matHeaderRowDefSticky",!1),r.Ic(41),r.Ac("matRowDefColumns",e.displayedColumns),r.Ic(42),r.Ac("matFooterRowDef",e.displayedColumns)("matFooterRowDefSticky",!0),r.Ic(43),r.Ac("pageSizeOptions",e.tableSizeOptions))},directives:[l.a,l.d,l.b,s.m,s.i,s.d,f.b,d.a,s.a,s.h,s.c,c.k,f.e,f.a,H.n,H.c,H.i,H.b,H.e,H.k,H.m,H.g,p.a,m.b,f.f,G.a,u.a,H.h,H.a,H.d,H.j,H.l,H.f],styles:[".mat-card[_ngcontent-%COMP%]{width:600px;margin:auto}.mat-card[_ngcontent-%COMP%]   .full-width[_ngcontent-%COMP%]{width:100%}.top-container[_ngcontent-%COMP%]{display:flex;justify-content:space-between;flex-direction:row;flex-wrap:wrap}table[_ngcontent-%COMP%]{width:100%}.table-container[_ngcontent-%COMP%]{height:100%;overflow:auto}.details-container[_ngcontent-%COMP%]{display:flex;flex-direction:column;flex-wrap:wrap;justify-content:space-evenly;margin:15px 0}.item[_ngcontent-%COMP%]{display:flex;justify-content:space-between}.item[_ngcontent-%COMP%] > a[_ngcontent-%COMP%]{margin:0 10px}.key[_ngcontent-%COMP%]{font-weight:700}.value[_ngcontent-%COMP%]{display:block;width:20em}"]}),t}();var en=[{path:"",component:nn},{path:":id",component:nn}];var an=function(){var t=function t(){};return t.ngModuleDef=r.cc({type:t}),t.ngInjectorDef=r.bc({factory:function n(e){return new(e||t)},imports:[[V.e.forChild(en)],V.e]}),t}();V.e.forChild(en),o.d(a,"ItinerarioUnidadeModule",function(){return on});var on=function(){var t=function t(){};return t.ngModuleDef=r.cc({type:t}),t.ngInjectorDef=r.bc({factory:function n(e){return new(e||t)},providers:[it,et],imports:[[c.c,s.e,s.k,d.b,f.d,m.a,l.c,H.p,u.b,p.b,z,G.b,an]]}),t}()}}]);