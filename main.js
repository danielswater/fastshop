(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _movie_image_movie_image_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./movie-image/movie-image.component */ "./src/app/movie-image/movie-image.component.ts");
/* harmony import */ var _movie_movie_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./movie/movie.component */ "./src/app/movie/movie.component.ts");





var routes = [
    {
        path: '', redirectTo: '/main', pathMatch: 'full'
    },
    {
        path: 'main', component: _movie_movie_component__WEBPACK_IMPORTED_MODULE_4__["MovieComponent"]
    },
    {
        path: 'details/:idMovie', component: _movie_image_movie_image_component__WEBPACK_IMPORTED_MODULE_3__["MovieImageComponent"]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'fastshop';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/locales/pt */ "./node_modules/@angular/common/locales/pt.js");
/* harmony import */ var _angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _filters_filters_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./filters/filters.component */ "./src/app/filters/filters.component.ts");
/* harmony import */ var _services_filter_button_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./services/filter-button.service */ "./src/app/services/filter-button.service.ts");
/* harmony import */ var _services_filters_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./services/filters.service */ "./src/app/services/filters.service.ts");
/* harmony import */ var _services_movie_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./services/movie.service */ "./src/app/services/movie.service.ts");
/* harmony import */ var _container_container_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./container/container.component */ "./src/app/container/container.component.ts");
/* harmony import */ var _main_main_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./main/main.component */ "./src/app/main/main.component.ts");
/* harmony import */ var _movie_movie_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./movie/movie.component */ "./src/app/movie/movie.component.ts");
/* harmony import */ var _credits_credits_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./credits/credits.component */ "./src/app/credits/credits.component.ts");
/* harmony import */ var _click_directive__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./click.directive */ "./src/app/click.directive.ts");
/* harmony import */ var _movie_image_movie_image_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./movie-image/movie-image.component */ "./src/app/movie-image/movie-image.component.ts");
/* harmony import */ var _technical_movie_technical_movie_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./technical-movie/technical-movie.component */ "./src/app/technical-movie/technical-movie.component.ts");
/* harmony import */ var ngx_bootstrap__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ngx-bootstrap */ "./node_modules/ngx-bootstrap/esm5/ngx-bootstrap.js");
/* harmony import */ var ng_circle_progress__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ng-circle-progress */ "./node_modules/ng-circle-progress/index.js");
/* harmony import */ var angular_font_awesome__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! angular-font-awesome */ "./node_modules/angular-font-awesome/dist/angular-font-awesome.es5.js");




















/* NGX-BOOTSTRAP */

/* CIRCLE RATING */

/* FONT AWESOME */

Object(_angular_common__WEBPACK_IMPORTED_MODULE_4__["registerLocaleData"])(_angular_common_locales_pt__WEBPACK_IMPORTED_MODULE_5___default.a);
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                _filters_filters_component__WEBPACK_IMPORTED_MODULE_9__["FiltersComponent"],
                _container_container_component__WEBPACK_IMPORTED_MODULE_13__["ContainerComponent"],
                _main_main_component__WEBPACK_IMPORTED_MODULE_14__["MainComponent"],
                _movie_movie_component__WEBPACK_IMPORTED_MODULE_15__["MovieComponent"],
                _click_directive__WEBPACK_IMPORTED_MODULE_17__["ClickDirective"],
                _movie_image_movie_image_component__WEBPACK_IMPORTED_MODULE_18__["MovieImageComponent"],
                _technical_movie_technical_movie_component__WEBPACK_IMPORTED_MODULE_19__["TechnicalMovieComponent"],
                _credits_credits_component__WEBPACK_IMPORTED_MODULE_16__["CreditsComponent"]
            ],
            imports: [
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                angular_font_awesome__WEBPACK_IMPORTED_MODULE_22__["AngularFontAwesomeModule"],
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_20__["TooltipModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_20__["BsDropdownModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_20__["PaginationModule"].forRoot(),
                ngx_bootstrap__WEBPACK_IMPORTED_MODULE_20__["ModalModule"].forRoot(),
                ng_circle_progress__WEBPACK_IMPORTED_MODULE_21__["NgCircleProgressModule"].forRoot({
                    backgroundPadding: -50,
                    radius: 22,
                    space: 2,
                    unitsFontWeight: "900",
                    outerStrokeWidth: 5,
                    innerStrokeWidth: 5,
                    titleFontSize: "10",
                    titleFontWeight: "900",
                    subtitleFontWeight: "400",
                    imageHeight: 20,
                    imageWidth: 20,
                    showSubtitle: false,
                    startFromZero: false
                })
            ],
            providers: [_services_filter_button_service__WEBPACK_IMPORTED_MODULE_10__["FilterButtonService"], _services_movie_service__WEBPACK_IMPORTED_MODULE_12__["MovieService"], _services_filters_service__WEBPACK_IMPORTED_MODULE_11__["FiltersService"], { provide: _angular_core__WEBPACK_IMPORTED_MODULE_3__["LOCALE_ID"], useValue: 'pt' }],
            bootstrap: [_container_container_component__WEBPACK_IMPORTED_MODULE_13__["ContainerComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/click.directive.ts":
/*!************************************!*\
  !*** ./src/app/click.directive.ts ***!
  \************************************/
/*! exports provided: ClickDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClickDirective", function() { return ClickDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ClickDirective = /** @class */ (function () {
    function ClickDirective() {
    }
    ClickDirective.prototype.onClick = function (event) {
        event.stopPropagation();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])("click", ["$event"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], ClickDirective.prototype, "onClick", null);
    ClickDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: "[click-stop-propagation]"
        })
    ], ClickDirective);
    return ClickDirective;
}());



/***/ }),

/***/ "./src/app/const/const.ts":
/*!********************************!*\
  !*** ./src/app/const/const.ts ***!
  \********************************/
/*! exports provided: Constants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Constants", function() { return Constants; });
var Constants = /** @class */ (function () {
    function Constants() {
    }
    Constants.KEY = '?api_key=abe7c23d9b2c394fe2c3b52420018bd6';
    Constants.LANGUAGE = '&language=pt-BR';
    Constants.GENRES_ENDPOINT = "https://api.themoviedb.org/3/genre/movie/list" + Constants.KEY + Constants.LANGUAGE;
    Constants.GENRES_MOVIE = "https://api.themoviedb.org/3/discover/movie" + Constants.KEY + Constants.LANGUAGE + "&sort_by=with_genres=";
    Constants.POPULAR_MOVIES = "https://api.themoviedb.org/3/movie/popular" + Constants.KEY + Constants.LANGUAGE;
    Constants.MOVIE = "https://api.themoviedb.org/3/movie/";
    return Constants;
}());



/***/ }),

/***/ "./src/app/container/container.component.html":
/*!****************************************************!*\
  !*** ./src/app/container/container.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- Navbar -->\n<nav class=\"navbar navbar-expand-lg static-top\">\n    <div class=\"container\">\n        <figure class=\"mx-auto\">\n            <a class=\"navbar-brand\" href=\"#\">\n                <img src=\"fastshop/fast-logo.png\" alt=\"Logo Fastshop\" title=\"Logo Fastshop\">\n            </a>\n        </figure>\n    </div>\n</nav>\n\n<div class=\"container-fluid\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-md-12\">\n                <div class=\"inner-addon left-addon\">\n                    <i class=\"fa fa-search\"></i>\n                    <input class=\"form-control\" type=\"text\" placeholder=\"Buscar por um Filme, Série ou Pessoa\">\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/container/container.component.scss":
/*!****************************************************!*\
  !*** ./src/app/container/container.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "nav {\n  border-bottom: 1px solid #e4e3e3; }\n\ni {\n  color: #e4e3e3; }\n\n.form-control {\n  border: none;\n  padding-left: 0px; }\n\n::-webkit-input-placeholder {\n  color: #e4e3e3;\n  opacity: 1;\n  font-style: italic; }\n\n::-ms-input-placeholder {\n  color: #e4e3e3;\n  opacity: 1;\n  font-style: italic; }\n\n::placeholder {\n  color: #e4e3e3;\n  opacity: 1;\n  font-style: italic; }\n\n:-ms-input-placeholder {\n  color: #e4e3e3;\n  font-style: italic; }\n\n::-ms-input-placeholder {\n  color: #e4e3e3;\n  font-style: italic; }\n\n.container-fluid {\n  border-bottom: 1px solid #e4e3e3; }\n\n.inner-addon {\n  position: relative; }\n\n.inner-addon .fa {\n  position: absolute;\n  padding: 10px;\n  pointer-events: none; }\n\n.left-addon .fa {\n  left: 0px;\n  padding: 10px 0px 0px; }\n\n.right-addon .fa {\n  right: 0px; }\n\n/* add padding  */\n\n.left-addon input {\n  padding-left: 30px; }\n\n.right-addon input {\n  padding-right: 30px; }\n\n@media (min-width: 1200px) {\n  .container {\n    max-width: 1140px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW5pZWxzd2F0ZXIvRG9jdW1lbnRzL2Zhc3RzaG9wL3NyYy9hcHAvY29udGFpbmVyL2NvbnRhaW5lci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdDQUFnQyxFQUFBOztBQUdwQztFQUNJLGNBQWMsRUFBQTs7QUFHbEI7RUFDSSxZQUFZO0VBQ1osaUJBQWlCLEVBQUE7O0FBR3JCO0VBQ0ksY0FBYztFQUNkLFVBQVU7RUFDVixrQkFBa0IsRUFBQTs7QUFIdEI7RUFDSSxjQUFjO0VBQ2QsVUFBVTtFQUNWLGtCQUFrQixFQUFBOztBQUh0QjtFQUNJLGNBQWM7RUFDZCxVQUFVO0VBQ1Ysa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0ksY0FBYztFQUNkLGtCQUFrQixFQUFBOztBQUd0QjtFQUNJLGNBQWM7RUFDZCxrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSxnQ0FBZ0MsRUFBQTs7QUFHcEM7RUFDSSxrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLG9CQUFvQixFQUFBOztBQUd4QjtFQUNJLFNBQVM7RUFDVCxxQkFBcUIsRUFBQTs7QUFHekI7RUFDSSxVQUFVLEVBQUE7O0FBSWQsaUJBQUE7O0FBRUE7RUFDSSxrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSxtQkFBbUIsRUFBQTs7QUFHdkI7RUFDSTtJQUNJLGlCQUFpQixFQUFBLEVBQ3BCIiwiZmlsZSI6InNyYy9hcHAvY29udGFpbmVyL2NvbnRhaW5lci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIm5hdiB7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlNGUzZTM7XG59XG5cbmkge1xuICAgIGNvbG9yOiAjZTRlM2UzO1xufVxuXG4uZm9ybS1jb250cm9sIHtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgcGFkZGluZy1sZWZ0OiAwcHg7XG59XG5cbjo6cGxhY2Vob2xkZXIge1xuICAgIGNvbG9yOiAjZTRlM2UzO1xuICAgIG9wYWNpdHk6IDE7XG4gICAgZm9udC1zdHlsZTogaXRhbGljO1xufVxuXG46LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgICBjb2xvcjogI2U0ZTNlMztcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG5cbjo6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHtcbiAgICBjb2xvcjogI2U0ZTNlMztcbiAgICBmb250LXN0eWxlOiBpdGFsaWM7XG59XG5cbi5jb250YWluZXItZmx1aWQge1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTRlM2UzO1xufVxuXG4uaW5uZXItYWRkb24ge1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmlubmVyLWFkZG9uIC5mYSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG5cbi5sZWZ0LWFkZG9uIC5mYSB7XG4gICAgbGVmdDogMHB4O1xuICAgIHBhZGRpbmc6IDEwcHggMHB4IDBweDtcbn1cblxuLnJpZ2h0LWFkZG9uIC5mYSB7XG4gICAgcmlnaHQ6IDBweDtcbn1cblxuXG4vKiBhZGQgcGFkZGluZyAgKi9cblxuLmxlZnQtYWRkb24gaW5wdXQge1xuICAgIHBhZGRpbmctbGVmdDogMzBweDtcbn1cblxuLnJpZ2h0LWFkZG9uIGlucHV0IHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAzMHB4O1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XG4gICAgLmNvbnRhaW5lciB7XG4gICAgICAgIG1heC13aWR0aDogMTE0MHB4O1xuICAgIH1cbn0iXX0= */"

/***/ }),

/***/ "./src/app/container/container.component.ts":
/*!**************************************************!*\
  !*** ./src/app/container/container.component.ts ***!
  \**************************************************/
/*! exports provided: ContainerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContainerComponent", function() { return ContainerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ContainerComponent = /** @class */ (function () {
    function ContainerComponent() {
    }
    ContainerComponent.prototype.ngOnInit = function () {
    };
    ContainerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'container',
            template: __webpack_require__(/*! ./container.component.html */ "./src/app/container/container.component.html"),
            styles: [__webpack_require__(/*! ./container.component.scss */ "./src/app/container/container.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ContainerComponent);
    return ContainerComponent;
}());



/***/ }),

/***/ "./src/app/credits/credits.component.html":
/*!************************************************!*\
  !*** ./src/app/credits/credits.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark\">\n    <div class=\"container\">\n        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbar10\">\n            <i class=\"fa fa-bars\" aria-hidden=\"true\"></i>\n      </button>\n        <div class=\"navbar-collapse collapse\" id=\"navbar10\">\n            <ul class=\"navbar-nav nav-fill w-100\">\n                <li class=\"nav-item dropdown\">\n                    <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                  Discussões\n                </a>\n                    <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n                        <a class=\"dropdown-item\" href=\"#\">Action</a>\n                        <a class=\"dropdown-item\" href=\"#\">Another action</a>\n                        <div class=\"dropdown-divider\"></div>\n                        <a class=\"dropdown-item\" href=\"#\">Something else here</a>\n                    </div>\n                </li>\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" href=\"//codeply.com\">Resenhas</a>\n                </li>\n                <li class=\"nav-item dropdown\">\n                    <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                    Vídeos\n                  </a>\n                    <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n                        <a class=\"dropdown-item\" href=\"#\">Action</a>\n                        <a class=\"dropdown-item\" href=\"#\">Another action</a>\n                        <div class=\"dropdown-divider\"></div>\n                        <a class=\"dropdown-item\" href=\"#\">Something else here</a>\n                    </div>\n                </li>\n                <li class=\"nav-item dropdown\">\n                    <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n                    Imagens\n                  </a>\n                    <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n                        <a class=\"dropdown-item\" href=\"#\">Action</a>\n                        <a class=\"dropdown-item\" href=\"#\">Another action</a>\n                        <div class=\"dropdown-divider\"></div>\n                        <a class=\"dropdown-item\" href=\"#\">Something else here</a>\n                    </div>\n                </li>\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" href=\"#\">Alterações</a>\n                </li>\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" href=\"#\">Reportar</a>\n                </li>\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" href=\"#\">Compartilhar</a>\n                </li>\n                <li class=\"nav-item\">\n                    <a class=\"nav-link\" href=\"#\">Editar</a>\n                </li>\n            </ul>\n        </div>\n    </div>\n</nav>\n<div class=\"container-fluid gradient\">\n    <div class=\"container wraper\">\n        <section class=\"details-card\">\n            <div class=\"row\">\n                <h3>Elenco principal</h3>\n                <div class=\"row\" id=\"cards\">\n                    <div class=\"col-md-4\" *ngFor=\"let cast of casts\">\n                        <div class=\"card-content\">\n                            <div class=\"card-img\">\n                                <img src=\"https://image.tmdb.org/t/p/w138_and_h175_face/{{cast.profile_path}}\" title=\"{{cast.name}}\" alt=\"{{cast.name}}\">\n                            </div>\n                            <div class=\"card-desc\">\n                                <h4>{{cast.name}}</h4>\n                                <p>{{cast.character}}</p>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"row\">\n                    <div class=\"col-md-12 full-cast\">\n                        <h3>Elenco e equipe técnica completos</h3>\n                        <p>...</p>\n                    </div>\n                </div>\n            </div>\n        </section>\n        <div class=\"gray-column\">\n            <div class=\"row\">\n                <div class=\"col-md-12 social_links\">\n                    <div>\n                        <a tooltip=\"Visitar Facebook\" class=\"social_link\" href=\"#\"><i class=\"fa fa-facebook-square fa-2x\" aria-hidden=\"true\"></i></a>\n                    </div>\n                    <div>\n                        <a tooltip=\"Visitar Twitter\" class=\"social_link\" href=\"#\"><i class=\"fa fa-twitter-square fa-2x\" aria-hidden=\"true\"></i></a>\n                    </div>\n                    <div>\n                        <a tooltip=\"Visitar Instagram\" class=\"social_link\" href=\"#\"><i class=\"fa fa-instagram fa-2x\" aria-hidden=\"true\"></i></a>\n                    </div>\n                    <div>\n                        <a tooltip=\"Visitar página inicial\" class=\"social_link\" href=\"{{credits.homepage}}\" target=\"_blank\"><i class=\"fa fa-link fa-2x\" aria-hidden=\"true\"></i></a>\n                    </div>\n                </div>\n                <div class=\"col-md-12 info-container\">\n                    <h3>Informações</h3>\n                    <hr>\n                    <h4>Situação</h4>\n                    <p>{{credits.status}}</p>\n                    <h3>Informações de lançamento</h3>\n                    <p><span class=\"flag-icon flag-icon-{{credits.country}}\"></span> {{credits.release_date | date: 'longDate'}}</p>\n                    <h3>Idioma original</h3>\n                    <p>{{language}}</p>\n                    <h3>Gêneros</h3>\n                    <button *ngFor=\"let item of credits.genres\" type=\"button\" class=\"btn btn-light btn-sm\">{{item.name}}</button>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/credits/credits.component.scss":
/*!************************************************!*\
  !*** ./src/app/credits/credits.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h3 {\n  font-size: 1.2em;\n  margin-bottom: 20px; }\n\nh4 {\n  font-size: 1.0rem; }\n\n.container-card {\n  background-color: gray;\n  max-width: 900px; }\n\n.nav {\n  text-align: center; }\n\n.navbar {\n  border-bottom: 1px solid #e4e3e3; }\n\n.navbar-nav li a {\n  color: #000000;\n  float: left; }\n\n.navbar-nav .nav-item {\n  float: inherit;\n  display: inline-block; }\n\n.navbar-dark .navbar-toggler {\n  color: gray;\n  border: 1px solid gray; }\n\n.col-md-4 {\n  padding-left: 16px;\n  padding-right: 6px; }\n\n.full-cast {\n  margin-top: 30px;\n  display: block; }\n\n/* CARDS */\n\nsection {\n  padding: 30px 0;\n  padding-bottom: calc(10vw + 10px); }\n\n.card-content {\n  background: #ffffff;\n  border: 4px;\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12); }\n\n.card-img {\n  position: relative;\n  overflow: hidden;\n  border-radius: 0;\n  z-index: 1; }\n\n.card-img img {\n  width: 100%;\n  height: auto;\n  display: block; }\n\n.card-img span {\n  position: absolute;\n  top: 15%;\n  left: 12%;\n  background: #1ABC9C;\n  padding: 6px;\n  color: #fff;\n  font-size: 12px;\n  border-radius: 4px;\n  -webkit-border-radius: 4px;\n  -moz-border-radius: 4px;\n  -ms-border-radius: 4px;\n  -o-border-radius: 4px;\n  -webkit-transform: translate(-50%, -50%);\n          transform: translate(-50%, -50%); }\n\n.card-img span h4 {\n  font-size: 12px;\n  margin: 0;\n  padding: 10px 5px;\n  line-height: 0; }\n\n.card-desc {\n  padding: 0.8rem; }\n\n.card-desc h3 {\n  color: #000000;\n  font-weight: 600;\n  font-size: 1.5em;\n  line-height: 1.3em;\n  margin-top: 0;\n  margin-bottom: 5px;\n  padding: 0; }\n\n.card-desc p {\n  color: #000000;\n  font-size: 14px;\n  font-weight: 400;\n  font-size: 0.8em;\n  line-height: 1.5;\n  margin: 0px;\n  margin-bottom: 20px;\n  padding: 0;\n  font-family: 'Raleway', sans-serif; }\n\n.btn-card {\n  background-color: #1ABC9C;\n  color: #fff;\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);\n  padding: .84rem 2.14rem;\n  font-size: .81rem;\n  transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;\n  margin: 0;\n  border: 0;\n  border-radius: .125rem;\n  cursor: pointer;\n  text-transform: uppercase;\n  white-space: normal;\n  word-wrap: break-word;\n  color: #fff; }\n\n.gray-column {\n  background-color: #f1f1f1;\n  min-height: calc(100vh - 795px);\n  box-sizing: border-box;\n  /*     display: flex;\n    padding-top: 35px; */\n  padding-left: 35px; }\n\n.gray-column-info {\n  display: block; }\n\n.wraper {\n  max-width: 1100px;\n  display: flex;\n  align-content: flex-start;\n  margin: 0 auto;\n  min-height: 100%; }\n\n.gradient {\n  background: #6db3f2;\n  background: linear-gradient(to right, #ffffff 65%, #f1f1f1 90%, #ffffff 200%, #f1f1f1 100%); }\n\n.social_links i {\n  color: #000000;\n  margin-right: 10px; }\n\n.social_links {\n  display: flex;\n  position: relative;\n  margin-top: 2em;\n  margin-bottom: 2em; }\n\n.details-card {\n  margin: 0 auto;\n  min-height: 100%; }\n\ndiv.social_links a.social_link {\n  margin-top: -10px;\n  font-size: 1.0em; }\n\n.info-container {\n  top: -35%;\n  height: 30px;\n  position: relative; }\n\n.info-container h3 {\n  font-size: 1.1em;\n  margin-bottom: 5px; }\n\n.info-container h4 {\n  font-size: 1.0em; }\n\n.info-container p {\n  font-size: 0.9em; }\n\n.info-container button {\n  margin-right: 5px;\n  margin-bottom: 5px; }\n\n.btn-light {\n  border-color: #dadada; }\n\n@media (min-width: 768px) {\n  .col-md-4 {\n    flex: 0 0 20.333333%;\n    max-width: 18.333333%; } }\n\n@media (max-width: 768px) {\n  i {\n    color: #000000; }\n  .gray-column {\n    display: none; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW5pZWxzd2F0ZXIvRG9jdW1lbnRzL2Zhc3RzaG9wL3NyYy9hcHAvY3JlZGl0cy9jcmVkaXRzLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jcmVkaXRzL2NyZWRpdHMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBZ0I7RUFDaEIsbUJBQW1CLEVBQUE7O0FBR3ZCO0VBQ0ksaUJBQWlCLEVBQUE7O0FBR3JCO0VBQ0ksc0JBQXNCO0VBQ3RCLGdCQUFnQixFQUFBOztBQUdwQjtFQUNJLGtCQUFrQixFQUFBOztBQUd0QjtFQUNJLGdDQUFnQyxFQUFBOztBQUdwQztFQUNJLGNBQWM7RUFDZCxXQUFXLEVBQUE7O0FBR2Y7RUFDSSxjQUFjO0VBQ2QscUJBQXFCLEVBQUE7O0FBR3pCO0VBQ0ksV0FBVztFQUNYLHNCQUFzQixFQUFBOztBQUcxQjtFQUNJLGtCQUFrQjtFQUNsQixrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSxnQkFBZ0I7RUFDaEIsY0FBYyxFQUFBOztBQUlsQixVQUFBOztBQUVBO0VBQ0ksZUFBZTtFQUNmLGlDQUFpQyxFQUFBOztBQUdyQztFQUNJLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsNkVBQTJFLEVBQUE7O0FBRy9FO0VBQ0ksa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsVUFBVSxFQUFBOztBQUdkO0VBQ0ksV0FBVztFQUNYLFlBQVk7RUFDWixjQUFjLEVBQUE7O0FBR2xCO0VBQ0ksa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixTQUFTO0VBQ1QsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixXQUFXO0VBQ1gsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQiwwQkFBMEI7RUFDMUIsdUJBQXVCO0VBQ3ZCLHNCQUFzQjtFQUN0QixxQkFBcUI7RUFDckIsd0NBQWdDO1VBQWhDLGdDQUFnQyxFQUFBOztBQUdwQztFQUNJLGVBQWU7RUFDZixTQUFTO0VBQ1QsaUJBQWlCO0VBQ2pCLGNBQWMsRUFBQTs7QUFHbEI7RUFDSSxlQUFlLEVBQUE7O0FBR25CO0VBQ0ksY0FBYztFQUNkLGdCQUFnQjtFQUNoQixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsVUFBVSxFQUFBOztBQUdkO0VBQ0ksY0FBYztFQUNkLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixXQUFXO0VBQ1gsbUJBQW1CO0VBQ25CLFVBQVU7RUFDVixrQ0FBa0MsRUFBQTs7QUFHdEM7RUFDSSx5QkFBeUI7RUFDekIsV0FBVztFQUNYLDZFQUEyRTtFQUMzRSx1QkFBdUI7RUFDdkIsaUJBQWlCO0VBSWpCLGlJQUFpSTtFQUVqSSxTQUFTO0VBQ1QsU0FBUztFQUVULHNCQUFzQjtFQUN0QixlQUFlO0VBQ2YseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQixxQkFBcUI7RUFDckIsV0FBVyxFQUFBOztBQUdmO0VBQ0kseUJBQXlCO0VBQ3pCLCtCQUErQjtFQUMvQixzQkFBc0I7RUFDdEI7d0JDckJvQjtFRHVCcEIsa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0ksY0FBYyxFQUFBOztBQUdsQjtFQUNJLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLGNBQWM7RUFDZCxnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSxtQkFBbUI7RUFHbkIsMkZBQTJGLEVBQUE7O0FBRy9GO0VBQ0ksY0FBYztFQUNkLGtCQUFrQixFQUFBOztBQUd0QjtFQUNJLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGtCQUFrQixFQUFBOztBQUd0QjtFQUNJLGNBQWM7RUFDZCxnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSxpQkFBaUI7RUFDakIsZ0JBQWdCLEVBQUE7O0FBR3BCO0VBQ0ksU0FBUztFQUNULFlBQVk7RUFDWixrQkFBa0IsRUFBQTs7QUFHdEI7RUFDSSxnQkFBZ0I7RUFDaEIsa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0ksZ0JBQWdCLEVBQUE7O0FBR3BCO0VBQ0ksZ0JBQWdCLEVBQUE7O0FBR3BCO0VBQ0ksaUJBQWlCO0VBQ2pCLGtCQUFrQixFQUFBOztBQUd0QjtFQUNJLHFCQUFxQixFQUFBOztBQUd6QjtFQUNJO0lBQ0ksb0JBQW9CO0lBQ3BCLHFCQUFxQixFQUFBLEVBQ3hCOztBQUdMO0VBQ0k7SUFDSSxjQUFjLEVBQUE7RUFFbEI7SUFDSSxhQUFhLEVBQUEsRUFDaEIiLCJmaWxlIjoic3JjL2FwcC9jcmVkaXRzL2NyZWRpdHMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJoMyB7XG4gICAgZm9udC1zaXplOiAxLjJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG5oNCB7XG4gICAgZm9udC1zaXplOiAxLjByZW07XG59XG5cbi5jb250YWluZXItY2FyZCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcbiAgICBtYXgtd2lkdGg6IDkwMHB4O1xufVxuXG4ubmF2IHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5uYXZiYXIge1xuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTRlM2UzO1xufVxuXG4ubmF2YmFyLW5hdiBsaSBhIHtcbiAgICBjb2xvcjogIzAwMDAwMDtcbiAgICBmbG9hdDogbGVmdDtcbn1cblxuLm5hdmJhci1uYXYgLm5hdi1pdGVtIHtcbiAgICBmbG9hdDogaW5oZXJpdDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG59XG5cbi5uYXZiYXItZGFyayAubmF2YmFyLXRvZ2dsZXIge1xuICAgIGNvbG9yOiBncmF5O1xuICAgIGJvcmRlcjogMXB4IHNvbGlkIGdyYXk7XG59XG5cbi5jb2wtbWQtNCB7XG4gICAgcGFkZGluZy1sZWZ0OiAxNnB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDZweDtcbn1cblxuLmZ1bGwtY2FzdCB7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cblxuXG4vKiBDQVJEUyAqL1xuXG5zZWN0aW9uIHtcbiAgICBwYWRkaW5nOiAzMHB4IDA7XG4gICAgcGFkZGluZy1ib3R0b206IGNhbGMoMTB2dyArIDEwcHgpO1xufVxuXG4uY2FyZC1jb250ZW50IHtcbiAgICBiYWNrZ3JvdW5kOiAjZmZmZmZmO1xuICAgIGJvcmRlcjogNHB4O1xuICAgIGJveC1zaGFkb3c6IDAgMnB4IDVweCAwIHJnYmEoMCwgMCwgMCwgLjE2KSwgMCAycHggMTBweCAwIHJnYmEoMCwgMCwgMCwgLjEyKTtcbn1cblxuLmNhcmQtaW1nIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgIHotaW5kZXg6IDE7XG59XG5cbi5jYXJkLWltZyBpbWcge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogYXV0bztcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmNhcmQtaW1nIHNwYW4ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB0b3A6IDE1JTtcbiAgICBsZWZ0OiAxMiU7XG4gICAgYmFja2dyb3VuZDogIzFBQkM5QztcbiAgICBwYWRkaW5nOiA2cHg7XG4gICAgY29sb3I6ICNmZmY7XG4gICAgZm9udC1zaXplOiAxMnB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAtbW96LWJvcmRlci1yYWRpdXM6IDRweDtcbiAgICAtbXMtYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIC1vLWJvcmRlci1yYWRpdXM6IDRweDtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1cblxuLmNhcmQtaW1nIHNwYW4gaDQge1xuICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICBtYXJnaW46IDA7XG4gICAgcGFkZGluZzogMTBweCA1cHg7XG4gICAgbGluZS1oZWlnaHQ6IDA7XG59XG5cbi5jYXJkLWRlc2Mge1xuICAgIHBhZGRpbmc6IDAuOHJlbTtcbn1cblxuLmNhcmQtZGVzYyBoMyB7XG4gICAgY29sb3I6ICMwMDAwMDA7XG4gICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICBmb250LXNpemU6IDEuNWVtO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjNlbTtcbiAgICBtYXJnaW4tdG9wOiAwO1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbiAgICBwYWRkaW5nOiAwO1xufVxuXG4uY2FyZC1kZXNjIHAge1xuICAgIGNvbG9yOiAjMDAwMDAwO1xuICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICBmb250LXdlaWdodDogNDAwO1xuICAgIGZvbnQtc2l6ZTogMC44ZW07XG4gICAgbGluZS1oZWlnaHQ6IDEuNTtcbiAgICBtYXJnaW46IDBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgIHBhZGRpbmc6IDA7XG4gICAgZm9udC1mYW1pbHk6ICdSYWxld2F5Jywgc2Fucy1zZXJpZjtcbn1cblxuLmJ0bi1jYXJkIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUFCQzlDO1xuICAgIGNvbG9yOiAjZmZmO1xuICAgIGJveC1zaGFkb3c6IDAgMnB4IDVweCAwIHJnYmEoMCwgMCwgMCwgLjE2KSwgMCAycHggMTBweCAwIHJnYmEoMCwgMCwgMCwgLjEyKTtcbiAgICBwYWRkaW5nOiAuODRyZW0gMi4xNHJlbTtcbiAgICBmb250LXNpemU6IC44MXJlbTtcbiAgICAtd2Via2l0LXRyYW5zaXRpb246IGNvbG9yIC4xNXMgZWFzZS1pbi1vdXQsIGJhY2tncm91bmQtY29sb3IgLjE1cyBlYXNlLWluLW91dCwgYm9yZGVyLWNvbG9yIC4xNXMgZWFzZS1pbi1vdXQsIC13ZWJraXQtYm94LXNoYWRvdyAuMTVzIGVhc2UtaW4tb3V0O1xuICAgIHRyYW5zaXRpb246IGNvbG9yIC4xNXMgZWFzZS1pbi1vdXQsIGJhY2tncm91bmQtY29sb3IgLjE1cyBlYXNlLWluLW91dCwgYm9yZGVyLWNvbG9yIC4xNXMgZWFzZS1pbi1vdXQsIC13ZWJraXQtYm94LXNoYWRvdyAuMTVzIGVhc2UtaW4tb3V0O1xuICAgIC1vLXRyYW5zaXRpb246IGNvbG9yIC4xNXMgZWFzZS1pbi1vdXQsIGJhY2tncm91bmQtY29sb3IgLjE1cyBlYXNlLWluLW91dCwgYm9yZGVyLWNvbG9yIC4xNXMgZWFzZS1pbi1vdXQsIGJveC1zaGFkb3cgLjE1cyBlYXNlLWluLW91dDtcbiAgICB0cmFuc2l0aW9uOiBjb2xvciAuMTVzIGVhc2UtaW4tb3V0LCBiYWNrZ3JvdW5kLWNvbG9yIC4xNXMgZWFzZS1pbi1vdXQsIGJvcmRlci1jb2xvciAuMTVzIGVhc2UtaW4tb3V0LCBib3gtc2hhZG93IC4xNXMgZWFzZS1pbi1vdXQ7XG4gICAgdHJhbnNpdGlvbjogY29sb3IgLjE1cyBlYXNlLWluLW91dCwgYmFja2dyb3VuZC1jb2xvciAuMTVzIGVhc2UtaW4tb3V0LCBib3JkZXItY29sb3IgLjE1cyBlYXNlLWluLW91dCwgYm94LXNoYWRvdyAuMTVzIGVhc2UtaW4tb3V0LCAtd2Via2l0LWJveC1zaGFkb3cgLjE1cyBlYXNlLWluLW91dDtcbiAgICBtYXJnaW46IDA7XG4gICAgYm9yZGVyOiAwO1xuICAgIC13ZWJraXQtYm9yZGVyLXJhZGl1czogLjEyNXJlbTtcbiAgICBib3JkZXItcmFkaXVzOiAuMTI1cmVtO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICAgIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gICAgd29yZC13cmFwOiBicmVhay13b3JkO1xuICAgIGNvbG9yOiAjZmZmO1xufVxuXG4uZ3JheS1jb2x1bW4ge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmMWYxZjE7XG4gICAgbWluLWhlaWdodDogY2FsYygxMDB2aCAtIDc5NXB4KTtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIC8qICAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHBhZGRpbmctdG9wOiAzNXB4OyAqL1xuICAgIHBhZGRpbmctbGVmdDogMzVweDtcbn1cblxuLmdyYXktY29sdW1uLWluZm8ge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4ud3JhcGVyIHtcbiAgICBtYXgtd2lkdGg6IDExMDBweDtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGFsaWduLWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XG4gICAgbWFyZ2luOiAwIGF1dG87XG4gICAgbWluLWhlaWdodDogMTAwJTtcbn1cblxuLmdyYWRpZW50IHtcbiAgICBiYWNrZ3JvdW5kOiAjNmRiM2YyO1xuICAgIGJhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZmZmZmZmIDY1JSwgI2YxZjFmMSA5MCUsICNmZmZmZmYgMjAwJSwgI2YxZjFmMSAxMDAlKTtcbiAgICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2ZmZmZmZiA2NSUsICNmMWYxZjEgOTAlLCAjZmZmZmZmIDIwMCUsICNmMWYxZjEgMTAwJSk7XG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjZmZmZmZmIDY1JSwgI2YxZjFmMSA5MCUsICNmZmZmZmYgMjAwJSwgI2YxZjFmMSAxMDAlKTtcbn1cblxuLnNvY2lhbF9saW5rcyBpIHtcbiAgICBjb2xvcjogIzAwMDAwMDtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XG59XG5cbi5zb2NpYWxfbGlua3Mge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1hcmdpbi10b3A6IDJlbTtcbiAgICBtYXJnaW4tYm90dG9tOiAyZW07XG59XG5cbi5kZXRhaWxzLWNhcmQge1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIG1pbi1oZWlnaHQ6IDEwMCU7XG59XG5cbmRpdi5zb2NpYWxfbGlua3MgYS5zb2NpYWxfbGluayB7XG4gICAgbWFyZ2luLXRvcDogLTEwcHg7XG4gICAgZm9udC1zaXplOiAxLjBlbTtcbn1cblxuLmluZm8tY29udGFpbmVyIHtcbiAgICB0b3A6IC0zNSU7XG4gICAgaGVpZ2h0OiAzMHB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuLmluZm8tY29udGFpbmVyIGgzIHtcbiAgICBmb250LXNpemU6IDEuMWVtO1xuICAgIG1hcmdpbi1ib3R0b206IDVweDtcbn1cblxuLmluZm8tY29udGFpbmVyIGg0IHtcbiAgICBmb250LXNpemU6IDEuMGVtO1xufVxuXG4uaW5mby1jb250YWluZXIgcCB7XG4gICAgZm9udC1zaXplOiAwLjllbTtcbn1cblxuLmluZm8tY29udGFpbmVyIGJ1dHRvbiB7XG4gICAgbWFyZ2luLXJpZ2h0OiA1cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogNXB4O1xufVxuXG4uYnRuLWxpZ2h0IHtcbiAgICBib3JkZXItY29sb3I6ICNkYWRhZGE7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAgIC5jb2wtbWQtNCB7XG4gICAgICAgIGZsZXg6IDAgMCAyMC4zMzMzMzMlO1xuICAgICAgICBtYXgtd2lkdGg6IDE4LjMzMzMzMyU7XG4gICAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICBpIHtcbiAgICAgICAgY29sb3I6ICMwMDAwMDA7XG4gICAgfVxuICAgIC5ncmF5LWNvbHVtbiB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgfVxufSIsImgzIHtcbiAgZm9udC1zaXplOiAxLjJlbTtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDsgfVxuXG5oNCB7XG4gIGZvbnQtc2l6ZTogMS4wcmVtOyB9XG5cbi5jb250YWluZXItY2FyZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XG4gIG1heC13aWR0aDogOTAwcHg7IH1cblxuLm5hdiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjsgfVxuXG4ubmF2YmFyIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlNGUzZTM7IH1cblxuLm5hdmJhci1uYXYgbGkgYSB7XG4gIGNvbG9yOiAjMDAwMDAwO1xuICBmbG9hdDogbGVmdDsgfVxuXG4ubmF2YmFyLW5hdiAubmF2LWl0ZW0ge1xuICBmbG9hdDogaW5oZXJpdDtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrOyB9XG5cbi5uYXZiYXItZGFyayAubmF2YmFyLXRvZ2dsZXIge1xuICBjb2xvcjogZ3JheTtcbiAgYm9yZGVyOiAxcHggc29saWQgZ3JheTsgfVxuXG4uY29sLW1kLTQge1xuICBwYWRkaW5nLWxlZnQ6IDE2cHg7XG4gIHBhZGRpbmctcmlnaHQ6IDZweDsgfVxuXG4uZnVsbC1jYXN0IHtcbiAgbWFyZ2luLXRvcDogMzBweDtcbiAgZGlzcGxheTogYmxvY2s7IH1cblxuLyogQ0FSRFMgKi9cbnNlY3Rpb24ge1xuICBwYWRkaW5nOiAzMHB4IDA7XG4gIHBhZGRpbmctYm90dG9tOiBjYWxjKDEwdncgKyAxMHB4KTsgfVxuXG4uY2FyZC1jb250ZW50IHtcbiAgYmFja2dyb3VuZDogI2ZmZmZmZjtcbiAgYm9yZGVyOiA0cHg7XG4gIGJveC1zaGFkb3c6IDAgMnB4IDVweCAwIHJnYmEoMCwgMCwgMCwgMC4xNiksIDAgMnB4IDEwcHggMCByZ2JhKDAsIDAsIDAsIDAuMTIpOyB9XG5cbi5jYXJkLWltZyB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgei1pbmRleDogMTsgfVxuXG4uY2FyZC1pbWcgaW1nIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgZGlzcGxheTogYmxvY2s7IH1cblxuLmNhcmQtaW1nIHNwYW4ge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHRvcDogMTUlO1xuICBsZWZ0OiAxMiU7XG4gIGJhY2tncm91bmQ6ICMxQUJDOUM7XG4gIHBhZGRpbmc6IDZweDtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAtd2Via2l0LWJvcmRlci1yYWRpdXM6IDRweDtcbiAgLW1vei1ib3JkZXItcmFkaXVzOiA0cHg7XG4gIC1tcy1ib3JkZXItcmFkaXVzOiA0cHg7XG4gIC1vLWJvcmRlci1yYWRpdXM6IDRweDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7IH1cblxuLmNhcmQtaW1nIHNwYW4gaDQge1xuICBmb250LXNpemU6IDEycHg7XG4gIG1hcmdpbjogMDtcbiAgcGFkZGluZzogMTBweCA1cHg7XG4gIGxpbmUtaGVpZ2h0OiAwOyB9XG5cbi5jYXJkLWRlc2Mge1xuICBwYWRkaW5nOiAwLjhyZW07IH1cblxuLmNhcmQtZGVzYyBoMyB7XG4gIGNvbG9yOiAjMDAwMDAwO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDEuNWVtO1xuICBsaW5lLWhlaWdodDogMS4zZW07XG4gIG1hcmdpbi10b3A6IDA7XG4gIG1hcmdpbi1ib3R0b206IDVweDtcbiAgcGFkZGluZzogMDsgfVxuXG4uY2FyZC1kZXNjIHAge1xuICBjb2xvcjogIzAwMDAwMDtcbiAgZm9udC1zaXplOiAxNHB4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDAuOGVtO1xuICBsaW5lLWhlaWdodDogMS41O1xuICBtYXJnaW46IDBweDtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgcGFkZGluZzogMDtcbiAgZm9udC1mYW1pbHk6ICdSYWxld2F5Jywgc2Fucy1zZXJpZjsgfVxuXG4uYnRuLWNhcmQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMUFCQzlDO1xuICBjb2xvcjogI2ZmZjtcbiAgYm94LXNoYWRvdzogMCAycHggNXB4IDAgcmdiYSgwLCAwLCAwLCAwLjE2KSwgMCAycHggMTBweCAwIHJnYmEoMCwgMCwgMCwgMC4xMik7XG4gIHBhZGRpbmc6IC44NHJlbSAyLjE0cmVtO1xuICBmb250LXNpemU6IC44MXJlbTtcbiAgLXdlYmtpdC10cmFuc2l0aW9uOiBjb2xvciAuMTVzIGVhc2UtaW4tb3V0LCBiYWNrZ3JvdW5kLWNvbG9yIC4xNXMgZWFzZS1pbi1vdXQsIGJvcmRlci1jb2xvciAuMTVzIGVhc2UtaW4tb3V0LCAtd2Via2l0LWJveC1zaGFkb3cgLjE1cyBlYXNlLWluLW91dDtcbiAgdHJhbnNpdGlvbjogY29sb3IgLjE1cyBlYXNlLWluLW91dCwgYmFja2dyb3VuZC1jb2xvciAuMTVzIGVhc2UtaW4tb3V0LCBib3JkZXItY29sb3IgLjE1cyBlYXNlLWluLW91dCwgLXdlYmtpdC1ib3gtc2hhZG93IC4xNXMgZWFzZS1pbi1vdXQ7XG4gIC1vLXRyYW5zaXRpb246IGNvbG9yIC4xNXMgZWFzZS1pbi1vdXQsIGJhY2tncm91bmQtY29sb3IgLjE1cyBlYXNlLWluLW91dCwgYm9yZGVyLWNvbG9yIC4xNXMgZWFzZS1pbi1vdXQsIGJveC1zaGFkb3cgLjE1cyBlYXNlLWluLW91dDtcbiAgdHJhbnNpdGlvbjogY29sb3IgLjE1cyBlYXNlLWluLW91dCwgYmFja2dyb3VuZC1jb2xvciAuMTVzIGVhc2UtaW4tb3V0LCBib3JkZXItY29sb3IgLjE1cyBlYXNlLWluLW91dCwgYm94LXNoYWRvdyAuMTVzIGVhc2UtaW4tb3V0O1xuICB0cmFuc2l0aW9uOiBjb2xvciAuMTVzIGVhc2UtaW4tb3V0LCBiYWNrZ3JvdW5kLWNvbG9yIC4xNXMgZWFzZS1pbi1vdXQsIGJvcmRlci1jb2xvciAuMTVzIGVhc2UtaW4tb3V0LCBib3gtc2hhZG93IC4xNXMgZWFzZS1pbi1vdXQsIC13ZWJraXQtYm94LXNoYWRvdyAuMTVzIGVhc2UtaW4tb3V0O1xuICBtYXJnaW46IDA7XG4gIGJvcmRlcjogMDtcbiAgLXdlYmtpdC1ib3JkZXItcmFkaXVzOiAuMTI1cmVtO1xuICBib3JkZXItcmFkaXVzOiAuMTI1cmVtO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gIHdoaXRlLXNwYWNlOiBub3JtYWw7XG4gIHdvcmQtd3JhcDogYnJlYWstd29yZDtcbiAgY29sb3I6ICNmZmY7IH1cblxuLmdyYXktY29sdW1uIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2YxZjFmMTtcbiAgbWluLWhlaWdodDogY2FsYygxMDB2aCAtIDc5NXB4KTtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgLyogICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgcGFkZGluZy10b3A6IDM1cHg7ICovXG4gIHBhZGRpbmctbGVmdDogMzVweDsgfVxuXG4uZ3JheS1jb2x1bW4taW5mbyB7XG4gIGRpc3BsYXk6IGJsb2NrOyB9XG5cbi53cmFwZXIge1xuICBtYXgtd2lkdGg6IDExMDBweDtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24tY29udGVudDogZmxleC1zdGFydDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIG1pbi1oZWlnaHQ6IDEwMCU7IH1cblxuLmdyYWRpZW50IHtcbiAgYmFja2dyb3VuZDogIzZkYjNmMjtcbiAgYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICNmZmZmZmYgNjUlLCAjZjFmMWYxIDkwJSwgI2ZmZmZmZiAyMDAlLCAjZjFmMWYxIDEwMCUpO1xuICBiYWNrZ3JvdW5kOiAtd2Via2l0LWxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2ZmZmZmZiA2NSUsICNmMWYxZjEgOTAlLCAjZmZmZmZmIDIwMCUsICNmMWYxZjEgMTAwJSk7XG4gIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgI2ZmZmZmZiA2NSUsICNmMWYxZjEgOTAlLCAjZmZmZmZmIDIwMCUsICNmMWYxZjEgMTAwJSk7IH1cblxuLnNvY2lhbF9saW5rcyBpIHtcbiAgY29sb3I6ICMwMDAwMDA7XG4gIG1hcmdpbi1yaWdodDogMTBweDsgfVxuXG4uc29jaWFsX2xpbmtzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBtYXJnaW4tdG9wOiAyZW07XG4gIG1hcmdpbi1ib3R0b206IDJlbTsgfVxuXG4uZGV0YWlscy1jYXJkIHtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIG1pbi1oZWlnaHQ6IDEwMCU7IH1cblxuZGl2LnNvY2lhbF9saW5rcyBhLnNvY2lhbF9saW5rIHtcbiAgbWFyZ2luLXRvcDogLTEwcHg7XG4gIGZvbnQtc2l6ZTogMS4wZW07IH1cblxuLmluZm8tY29udGFpbmVyIHtcbiAgdG9wOiAtMzUlO1xuICBoZWlnaHQ6IDMwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTsgfVxuXG4uaW5mby1jb250YWluZXIgaDMge1xuICBmb250LXNpemU6IDEuMWVtO1xuICBtYXJnaW4tYm90dG9tOiA1cHg7IH1cblxuLmluZm8tY29udGFpbmVyIGg0IHtcbiAgZm9udC1zaXplOiAxLjBlbTsgfVxuXG4uaW5mby1jb250YWluZXIgcCB7XG4gIGZvbnQtc2l6ZTogMC45ZW07IH1cblxuLmluZm8tY29udGFpbmVyIGJ1dHRvbiB7XG4gIG1hcmdpbi1yaWdodDogNXB4O1xuICBtYXJnaW4tYm90dG9tOiA1cHg7IH1cblxuLmJ0bi1saWdodCB7XG4gIGJvcmRlci1jb2xvcjogI2RhZGFkYTsgfVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLmNvbC1tZC00IHtcbiAgICBmbGV4OiAwIDAgMjAuMzMzMzMzJTtcbiAgICBtYXgtd2lkdGg6IDE4LjMzMzMzMyU7IH0gfVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgaSB7XG4gICAgY29sb3I6ICMwMDAwMDA7IH1cbiAgLmdyYXktY29sdW1uIHtcbiAgICBkaXNwbGF5OiBub25lOyB9IH1cbiJdfQ== */"

/***/ }),

/***/ "./src/app/credits/credits.component.ts":
/*!**********************************************!*\
  !*** ./src/app/credits/credits.component.ts ***!
  \**********************************************/
/*! exports provided: CreditsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreditsComponent", function() { return CreditsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_movie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../services/movie.service */ "./src/app/services/movie.service.ts");




var CreditsComponent = /** @class */ (function () {
    function CreditsComponent(route, ms) {
        this.route = route;
        this.ms = ms;
        this.casts = [];
        this.credits = [];
    }
    CreditsComponent.prototype.ngOnInit = function () {
        this.movieId = this.route.snapshot.paramMap.get("idMovie");
        this.getCreditsByMovie(this.movieId);
        this.getMovieInfo(parseInt(this.movieId));
        this.getTranslation(parseInt(this.movieId));
    };
    CreditsComponent.prototype.ngAfterViewInit = function () {
        setTimeout(function () {
            var maxHeight = Math.max.apply(null, $(".card-content").map(function () {
                return $(this).height();
            }).get());
            $(".card-content").css('min-height', maxHeight);
        }, 1200);
    };
    CreditsComponent.prototype.getCreditsByMovie = function (movieId) {
        var _this = this;
        this.ms.getCreditsByMovie(movieId).subscribe(function (res) {
            for (var i = 0; i < 5; i++) {
                _this.casts[i] = res['cast'][i];
            }
        });
    };
    CreditsComponent.prototype.getMovieInfo = function (movieId) {
        var _this = this;
        this.ms.getMovieInfo(movieId).subscribe(function (res) {
            _this.credits = res;
            if (res['status'] === "Released") {
                _this.credits['status'] = "Lançado";
                _this.credits['country'] = _this.credits['production_countries'][0].iso_3166_1.toLowerCase();
            }
            console.log(_this.credits);
            return _this.credits;
        });
    };
    CreditsComponent.prototype.getTranslation = function (movieId) {
        var _this = this;
        this.ms.getTranslation(movieId).subscribe(function (res) {
            for (var i = 0; i < res['spoken_languages'].length; i++) {
                if (res['original_language'] == res['spoken_languages'][i].iso_639_1) {
                    _this.language = res['spoken_languages'][i].name;
                }
            }
        });
    };
    CreditsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'credits',
            template: __webpack_require__(/*! ./credits.component.html */ "./src/app/credits/credits.component.html"),
            styles: [__webpack_require__(/*! ./credits.component.scss */ "./src/app/credits/credits.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_movie_service__WEBPACK_IMPORTED_MODULE_3__["MovieService"]])
    ], CreditsComponent);
    return CreditsComponent;
}());



/***/ }),

/***/ "./src/app/filters/filters.component.html":
/*!************************************************!*\
  !*** ./src/app/filters/filters.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>Descobrir novos filmes e séries:</h2>\n<div class=\"row\">\n    <div class=\"col-md-12 filters\">\n        <form>\n            <div class=\"form-row\">\n                <!-- BUTTON FILTER BY GENRES-->\n                <div class=\"form-group col-md-2 col-sm-2 col-xl-2\">\n                    <label>Gêneros</label>\n                    <div class=\"btn-group\" dropdown>\n                        <button id=\"button-basic\" dropdownToggle type=\"button\" class=\"btn btn-primary dropdown-toggle\" aria-controls=\"dropdown-basic\">\n                  Selecione <span class=\"caret\"></span>\n                </button>\n                        <ul id=\"dropdown-basic\" *dropdownMenu class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"button-basic\">\n                            <li *ngFor=\"let genre of genres.genres\" role=\"menuitem\"><a click-stop-propagation (click)=\"filterClickByGenres(genre.id)\" class=\"dropdown-item\">{{genre.name}}</a></li>\n                        </ul>\n                    </div>\n                </div>\n            </div>\n        </form>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/filters/filters.component.scss":
/*!************************************************!*\
  !*** ./src/app/filters/filters.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "h2 {\n  font-size: 1.5rem;\n  margin-top: 20px; }\n\nlabel {\n  display: block; }\n\n.filters {\n  margin-top: 30px; }\n\n.btn-primary {\n  background-color: #eaeaea;\n  border: none;\n  color: #000; }\n\n.btn-primary:not(:disabled):not(.disabled).active,\n.btn-primary:not(:disabled):not(.disabled):active,\n.show > .btn-primary.dropdown-toggle {\n  background-color: #d8d8d8;\n  border: none;\n  color: #000; }\n\n.dropdown-menu {\n  margin: 0 0 0; }\n\n.dropdown-item.active,\n.dropdown-item:active {\n  background-color: #d0d0d0;\n  color: #000; }\n\n.dropdown-item:focus,\n.dropdown-item:hover {\n  cursor: pointer;\n  background-color: #efefef; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW5pZWxzd2F0ZXIvRG9jdW1lbnRzL2Zhc3RzaG9wL3NyYy9hcHAvZmlsdGVycy9maWx0ZXJzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQWlCO0VBQ2pCLGdCQUFnQixFQUFBOztBQUdwQjtFQUNJLGNBQWMsRUFBQTs7QUFHbEI7RUFDSSxnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSx5QkFBeUI7RUFDekIsWUFBWTtFQUNaLFdBQVcsRUFBQTs7QUFHZjs7O0VBR0kseUJBQXlCO0VBQ3pCLFlBQVk7RUFDWixXQUFXLEVBQUE7O0FBR2Y7RUFDSSxhQUFhLEVBQUE7O0FBR2pCOztFQUVJLHlCQUF5QjtFQUN6QixXQUFXLEVBQUE7O0FBR2Y7O0VBRUksZUFBZTtFQUNmLHlCQUF5QixFQUFBIiwiZmlsZSI6InNyYy9hcHAvZmlsdGVycy9maWx0ZXJzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiaDIge1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbmxhYmVsIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cblxuLmZpbHRlcnMge1xuICAgIG1hcmdpbi10b3A6IDMwcHg7XG59XG5cbi5idG4tcHJpbWFyeSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VhZWFlYTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgY29sb3I6ICMwMDA7XG59XG5cbi5idG4tcHJpbWFyeTpub3QoOmRpc2FibGVkKTpub3QoLmRpc2FibGVkKS5hY3RpdmUsXG4uYnRuLXByaW1hcnk6bm90KDpkaXNhYmxlZCk6bm90KC5kaXNhYmxlZCk6YWN0aXZlLFxuLnNob3c+LmJ0bi1wcmltYXJ5LmRyb3Bkb3duLXRvZ2dsZSB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Q4ZDhkODtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgY29sb3I6ICMwMDA7XG59XG5cbi5kcm9wZG93bi1tZW51IHtcbiAgICBtYXJnaW46IDAgMCAwO1xufVxuXG4uZHJvcGRvd24taXRlbS5hY3RpdmUsXG4uZHJvcGRvd24taXRlbTphY3RpdmUge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkMGQwZDA7XG4gICAgY29sb3I6ICMwMDA7XG59XG5cbi5kcm9wZG93bi1pdGVtOmZvY3VzLFxuLmRyb3Bkb3duLWl0ZW06aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZlZmVmO1xufSJdfQ== */"

/***/ }),

/***/ "./src/app/filters/filters.component.ts":
/*!**********************************************!*\
  !*** ./src/app/filters/filters.component.ts ***!
  \**********************************************/
/*! exports provided: FiltersComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiltersComponent", function() { return FiltersComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_filters_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../services/filters.service */ "./src/app/services/filters.service.ts");



var FiltersComponent = /** @class */ (function () {
    function FiltersComponent(fs) {
        this.fs = fs;
        this.sendDataToGenreId = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.genres = [];
    }
    FiltersComponent.prototype.ngOnInit = function () {
        this.getGenres();
    };
    FiltersComponent.prototype.filterClickByGenres = function (data) {
        this.sendDataToGenreId.emit(data);
    };
    FiltersComponent.prototype.getGenres = function () {
        var _this = this;
        this.fs.getGenres().subscribe(function (data) {
            _this.genres = data;
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FiltersComponent.prototype, "sendDataToGenreId", void 0);
    FiltersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'filters',
            template: __webpack_require__(/*! ./filters.component.html */ "./src/app/filters/filters.component.html"),
            styles: [__webpack_require__(/*! ./filters.component.scss */ "./src/app/filters/filters.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_filters_service__WEBPACK_IMPORTED_MODULE_2__["FiltersService"]])
    ], FiltersComponent);
    return FiltersComponent;
}());



/***/ }),

/***/ "./src/app/main/main.component.html":
/*!******************************************!*\
  !*** ./src/app/main/main.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- FILTER COMPONENT-->\n<div class=\"container\">\n    <filters (sendDataToGenreId)=\"sendDataToGenreId($event)\">></filters>\n</div>\n<!-- / FILTER COMPONENT-->\n<div class=\"container\">\n    <div class=\"row row-margin-bottom row-margin\" id=\"header\">\n        <div class=\"col-md-5 no-padding lib-item\" [ngClass]=\"{'offset-md-1' : i%2 != 0}\" data-category=\"view\" *ngFor=\"let movie of popularMovies?.results; let i = index\">\n            <div class=\"lib-panel\">\n                <div class=\"row box-shadow\">\n                    <div class=\"col-md-5\">\n                        <a routerLink=\"/details/{{movie.id}}\"><img class=\"lib-img-show\" src=\"https://image.tmdb.org/t/p/w185_and_h278_bestv2/{{movie.poster_path}}\" alt=\"{{movie.title}}\" title=\"{{movie.title}}\"></a>\n                    </div>\n                    <div class=\"col-md-6\">\n                        <circle-progress style=\"float: left; margin-right: 8px; margin-left: 8px;\" [percent]=\"voteAverage[i]\" [radius]=\"23\" [outerStrokeWidth]=\"5\" [innerStrokeWidth]=\"5\" [outerStrokeColor]=\"outerStrokeColor[i]\" [innerStrokeColor]=\"innerStrokeColor[i]\" [animation]=\"true\"\n                            [animationDuration]=\"300\"></circle-progress>\n                        <div class=\"lib-row lib-header\">\n                            <a routerLink=\"/details/{{movie.id}}\" title=\"{{movie.title}}\">{{movie.title}}</a>\n                        </div>\n                        <div class=\"lib-row lib-date\">\n                            {{movie.release_date | date: 'longDate'}}\n                        </div>\n                        <div class=\"lib-row lib-desc\">\n                            <p>{{(movie.overview.length>140)? (movie.overview | slice:0:140)+'....':(movie.overview)}}</p>\n                            <div class=\"bottom-align-text wrap\" id=\"header-content\">\n                                <div class=\"d-flex justify-content-start more-information\">\n                                    <a routerLink=\"/details/{{movie.id}}\">Mais informações</a>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>\n<!-- PAGINATION-->\n<div class=\"d-flex justify-content-center\">\n    <pagination [maxSize]=\"5\" [totalItems]=\"total_results\" previousText=\"Anterior\" nextText=\"Próximo\" [(ngModel)]=\"currentPage \" (pageChanged)=\"pageChanged($event) \"></pagination>\n</div>\n\n<!-- <div class=\"d-flex align-items-start\">align-items-start</div>\n<div class=\"d-flex align-items-end\">align-items-end</div>\n<div class=\"d-flex align-items-center\">align-items-center</div>\n<div class=\"d-flex align-items-baseline\">align-items-baseline</div>\n<div class=\"d-flex align-items-stretch\">align-items-stretch</div> -->"

/***/ }),

/***/ "./src/app/main/main.component.scss":
/*!******************************************!*\
  !*** ./src/app/main/main.component.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* CARDS MOVIES */\n.lib-panel {\n  margin-bottom: 25px;\n  width: 110%; }\n#header {\n  position: relative;\n  min-height: 150px; }\n#header-content {\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  padding-left: 6%;\n  padding-top: 6%;\n  border-top: 1px solid #e4e3e3; }\n.lib-panel .row {\n  margin-right: 0px;\n  margin-right: 0px; }\n.lib-panel img {\n  width: 100%;\n  background-color: transparent; }\n.lib-date {\n  color: rgba(0, 0, 0, 0.6);\n  line-height: 1em; }\n.lib-panel .row,\n.lib-panel .col-md-6 {\n  padding: 0;\n  background-color: #FFFFFF; }\n.lib-panel .lib-row {\n  padding: 0 20px 0 20px; }\n.lib-panel .lib-row.lib-header {\n  background-color: #FFFFFF;\n  font-size: 1.1em;\n  font-weight: bold;\n  padding: 10px 20px 0 20px; }\n.lib-header a {\n  color: #000000;\n  text-decoration: none; }\n.lib-panel .lib-row.lib-header .lib-header-seperator {\n  height: 2px;\n  width: 26px;\n  background-color: #d9d9d9;\n  margin: 7px 0 7px 0; }\n.lib-panel .lib-row.lib-desc {\n  position: relative;\n  min-height: 240px;\n  display: block;\n  font-size: 13px;\n  margin-top: 30px; }\n.lib-panel .lib-row.lib-desc a {\n  position: absolute;\n  width: 100%;\n  bottom: -10px;\n  left: 20px; }\n.row-margin-bottom {\n  margin-bottom: 20px; }\n.row-margin {\n  margin-left: 15px;\n  margin-right: 15px; }\n.col-md-5 {\n  padding-left: 0;\n  padding-right: 0; }\n.box-shadow {\n  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1); }\n.no-padding {\n  padding: 0; }\n.wrap span {\n  font-weight: 500; }\n.more-information a {\n  color: #000000;\n  cursor: pointer;\n  text-decoration: none; }\n@media (min-width: 768px) {\n  .col-md-5 {\n    flex: 0 0 42.9999999%;\n    max-width: 42.9999999%;\n    padding-left: 0; }\n  .col-md-6 {\n    flex: 0 0 56.222%;\n    max-width: 56.222%; }\n  .offset-md-1 {\n    margin-left: 9.999999%; } }\n@media (max-width: 768px) {\n  .lib-panel {\n    width: 105%; }\n  .lib-panel .lib-row.lib-desc {\n    position: relative;\n    min-height: 150px;\n    display: block;\n    font-size: 13px;\n    margin-top: 30px; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW5pZWxzd2F0ZXIvRG9jdW1lbnRzL2Zhc3RzaG9wL3NyYy9hcHAvbWFpbi9tYWluLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGlCQUFBO0FBRVE7RUFDSixtQkFBbUI7RUFDbkIsV0FBVyxFQUFBO0FBR2Y7RUFDSSxrQkFBa0I7RUFDbEIsaUJBQWlCLEVBQUE7QUFHckI7RUFDSSxrQkFBa0I7RUFDbEIsU0FBUztFQUNULE9BQU87RUFDUCxXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZiw2QkFBNkIsRUFBQTtBQUdqQztFQUNJLGlCQUFpQjtFQUNqQixpQkFBaUIsRUFBQTtBQUdyQjtFQUNJLFdBQVc7RUFDWCw2QkFBNkIsRUFBQTtBQUdqQztFQUNJLHlCQUF5QjtFQUN6QixnQkFBZ0IsRUFBQTtBQUdwQjs7RUFFSSxVQUFVO0VBQ1YseUJBQXlCLEVBQUE7QUFHN0I7RUFDSSxzQkFBc0IsRUFBQTtBQUcxQjtFQUNJLHlCQUF5QjtFQUN6QixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLHlCQUF5QixFQUFBO0FBRzdCO0VBQ0ksY0FBYztFQUNkLHFCQUFxQixFQUFBO0FBR3pCO0VBQ0ksV0FBVztFQUNYLFdBQVc7RUFDWCx5QkFBeUI7RUFDekIsbUJBQW1CLEVBQUE7QUFHdkI7RUFDSSxrQkFBa0I7RUFDbEIsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxlQUFlO0VBQ2YsZ0JBQWdCLEVBQUE7QUFHcEI7RUFDSSxrQkFBa0I7RUFDbEIsV0FBVztFQUNYLGFBQWE7RUFDYixVQUFVLEVBQUE7QUFHZDtFQUNJLG1CQUFtQixFQUFBO0FBR3ZCO0VBQ0ksaUJBQWlCO0VBQ2pCLGtCQUFrQixFQUFBO0FBR3RCO0VBQ0ksZUFBZTtFQUNmLGdCQUFnQixFQUFBO0FBR3BCO0VBRUkseUNBQXlDLEVBQUE7QUFHN0M7RUFDSSxVQUFVLEVBQUE7QUFHZDtFQUNJLGdCQUFnQixFQUFBO0FBR3BCO0VBQ0ksY0FBYztFQUNkLGVBQWU7RUFDZixxQkFBcUIsRUFBQTtBQUd6QjtFQUNJO0lBQ0kscUJBQXFCO0lBQ3JCLHNCQUFzQjtJQUN0QixlQUFlLEVBQUE7RUFFbkI7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCLEVBQUE7RUFFdEI7SUFDSSxzQkFBc0IsRUFBQSxFQUN6QjtBQUdMO0VBQ0k7SUFDSSxXQUFXLEVBQUE7RUFFZjtJQUNJLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsY0FBYztJQUNkLGVBQWU7SUFDZixnQkFBZ0IsRUFBQSxFQUNuQiIsImZpbGUiOiJzcmMvYXBwL21haW4vbWFpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIENBUkRTIE1PVklFUyAqL1xuXG5AYXQtcm9vdCAubGliLXBhbmVsIHtcbiAgICBtYXJnaW4tYm90dG9tOiAyNXB4O1xuICAgIHdpZHRoOiAxMTAlO1xufVxuXG4jaGVhZGVyIHtcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgbWluLWhlaWdodDogMTUwcHg7XG59XG5cbiNoZWFkZXItY29udGVudCB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHBhZGRpbmctbGVmdDogNiU7XG4gICAgcGFkZGluZy10b3A6IDYlO1xuICAgIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZTRlM2UzO1xufVxuXG4ubGliLXBhbmVsIC5yb3cge1xuICAgIG1hcmdpbi1yaWdodDogMHB4O1xuICAgIG1hcmdpbi1yaWdodDogMHB4O1xufVxuXG4ubGliLXBhbmVsIGltZyB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbi5saWItZGF0ZSB7XG4gICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC42KTtcbiAgICBsaW5lLWhlaWdodDogMWVtO1xufVxuXG4ubGliLXBhbmVsIC5yb3csXG4ubGliLXBhbmVsIC5jb2wtbWQtNiB7XG4gICAgcGFkZGluZzogMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGRkZGO1xufVxuXG4ubGliLXBhbmVsIC5saWItcm93IHtcbiAgICBwYWRkaW5nOiAwIDIwcHggMCAyMHB4O1xufVxuXG4ubGliLXBhbmVsIC5saWItcm93LmxpYi1oZWFkZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkZGRkY7XG4gICAgZm9udC1zaXplOiAxLjFlbTtcbiAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICBwYWRkaW5nOiAxMHB4IDIwcHggMCAyMHB4O1xufVxuXG4ubGliLWhlYWRlciBhIHtcbiAgICBjb2xvcjogIzAwMDAwMDtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5saWItcGFuZWwgLmxpYi1yb3cubGliLWhlYWRlciAubGliLWhlYWRlci1zZXBlcmF0b3Ige1xuICAgIGhlaWdodDogMnB4O1xuICAgIHdpZHRoOiAyNnB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNkOWQ5ZDk7XG4gICAgbWFyZ2luOiA3cHggMCA3cHggMDtcbn1cblxuLmxpYi1wYW5lbCAubGliLXJvdy5saWItZGVzYyB7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIG1pbi1oZWlnaHQ6IDI0MHB4O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xufVxuXG4ubGliLXBhbmVsIC5saWItcm93LmxpYi1kZXNjIGEge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3R0b206IC0xMHB4O1xuICAgIGxlZnQ6IDIwcHg7XG59XG5cbi5yb3ctbWFyZ2luLWJvdHRvbSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbn1cblxuLnJvdy1tYXJnaW4ge1xuICAgIG1hcmdpbi1sZWZ0OiAxNXB4O1xuICAgIG1hcmdpbi1yaWdodDogMTVweDtcbn1cblxuLmNvbC1tZC01IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDA7XG4gICAgcGFkZGluZy1yaWdodDogMDtcbn1cblxuLmJveC1zaGFkb3cge1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogMCAwIDEwcHggMCByZ2JhKDAsIDAsIDAsIC4xMCk7XG4gICAgYm94LXNoYWRvdzogMCAwIDEwcHggMCByZ2JhKDAsIDAsIDAsIC4xMCk7XG59XG5cbi5uby1wYWRkaW5nIHtcbiAgICBwYWRkaW5nOiAwO1xufVxuXG4ud3JhcCBzcGFuIHtcbiAgICBmb250LXdlaWdodDogNTAwO1xufVxuXG4ubW9yZS1pbmZvcm1hdGlvbiBhIHtcbiAgICBjb2xvcjogIzAwMDAwMDtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgICAuY29sLW1kLTUge1xuICAgICAgICBmbGV4OiAwIDAgNDIuOTk5OTk5OSU7XG4gICAgICAgIG1heC13aWR0aDogNDIuOTk5OTk5OSU7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMDtcbiAgICB9XG4gICAgLmNvbC1tZC02IHtcbiAgICAgICAgZmxleDogMCAwIDU2LjIyMiU7XG4gICAgICAgIG1heC13aWR0aDogNTYuMjIyJTtcbiAgICB9XG4gICAgLm9mZnNldC1tZC0xIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDkuOTk5OTk5JTtcbiAgICB9XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgIC5saWItcGFuZWwge1xuICAgICAgICB3aWR0aDogMTA1JTtcbiAgICB9XG4gICAgLmxpYi1wYW5lbCAubGliLXJvdy5saWItZGVzYyB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgbWluLWhlaWdodDogMTUwcHg7XG4gICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICBmb250LXNpemU6IDEzcHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/main/main.component.ts":
/*!****************************************!*\
  !*** ./src/app/main/main.component.ts ***!
  \****************************************/
/*! exports provided: MainComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainComponent", function() { return MainComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_filters_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../services/filters.service */ "./src/app/services/filters.service.ts");



var MainComponent = /** @class */ (function () {
    function MainComponent(fs) {
        this.fs = fs;
        this.currentPage = 1;
        this.popularMovies = [];
        this.voteAverage = [];
        this.outerStrokeColor = [];
        this.innerStrokeColor = [];
    }
    MainComponent.prototype.ngOnInit = function () {
        /*     this.filterButton.getDataByGenres().subscribe(data => {
              this.data = data;
            }) */
        this.getPopularMovies();
    };
    MainComponent.prototype.sendDataToGenreId = function (data) {
        this.genresById = data;
        this.getPopularMovies(null, this.genresById);
    };
    MainComponent.prototype.getPopularMovies = function (page, filter) {
        var _this = this;
        this.fs.getAllPopularMovies(page, filter).subscribe(function (data) {
            _this.popularMovies = data;
            _this.count = _this.popularMovies['results'].length;
            _this.total_results = _this.popularMovies['total_results'];
            for (var i = 0; i < _this.count; i++) {
                // Show percent popularity
                _this.voteAverage[i] = _this.popularMovies['results'][i].vote_average * 10;
                // Colors of percent
                if (_this.voteAverage[i] < 25) {
                    _this.outerStrokeColor[i] = "#ff9393";
                    _this.innerStrokeColor[i] = "#ff7f7f";
                }
                if (_this.voteAverage[i] > 25 && _this.voteAverage[i] < 50) {
                    _this.outerStrokeColor[i] = "#ffee93";
                    _this.innerStrokeColor[i] = "#dbc93d";
                }
                if (_this.voteAverage[i] > 50 && _this.voteAverage[i] < 75) {
                    _this.outerStrokeColor[i] = "#d9ff93";
                    _this.innerStrokeColor[i] = "#abdb3d";
                }
            }
        });
        return this.total_results;
    };
    // PAGINATION
    MainComponent.prototype.pageChanged = function (event) {
        this.page = event.page;
        this.getPopularMovies(this.page);
    };
    MainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'main',
            template: __webpack_require__(/*! ./main.component.html */ "./src/app/main/main.component.html"),
            styles: [__webpack_require__(/*! ./main.component.scss */ "./src/app/main/main.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_filters_service__WEBPACK_IMPORTED_MODULE_2__["FiltersService"]])
    ], MainComponent);
    return MainComponent;
}());



/***/ }),

/***/ "./src/app/movie-image/movie-image.component.html":
/*!********************************************************!*\
  !*** ./src/app/movie-image/movie-image.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid custom-bg\" [style.backgroundPosition]=\"center\" [style.backgroundSize]=\"cover\" [style.backgroundImage]=\"'url(https://image.tmdb.org/t/p/w500/' + imgBg + ')'\">\n    <div class=layer>\n        <div class=\"container single-column\">\n            <section class=\"inner-img\">\n                <div class=\"row\">\n                    <div class=\"col-md-4\">\n                        <img class=\"img-fluid\" *ngFor=\"let img of image; let i = index\" src=\"https://image.tmdb.org/t/p/w500/{{img.file_path}}\">\n                    </div>\n                    <div class=\"col-md-8\">\n                        <technical-movie></technical-movie>\n                    </div>\n                </div>\n            </section>\n        </div>\n    </div>\n</div>\n<credits></credits>"

/***/ }),

/***/ "./src/app/movie-image/movie-image.component.scss":
/*!********************************************************!*\
  !*** ./src/app/movie-image/movie-image.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container-fluid {\n  padding-left: 0px;\n  padding-right: 0px; }\n\n.single-column {\n  padding-top: 30px;\n  padding-bottom: 30px; }\n\n.custom-bg {\n  height: auto;\n  background-size: cover;\n  width: auto;\n  background-position: 80% 80%;\n  background-size: cover; }\n\n.layer {\n  background-color: rgba(43, 17, 8, 0.96);\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%; }\n\n.inner-img img {\n  border-radius: 5px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW5pZWxzd2F0ZXIvRG9jdW1lbnRzL2Zhc3RzaG9wL3NyYy9hcHAvbW92aWUtaW1hZ2UvbW92aWUtaW1hZ2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxpQkFBaUI7RUFDakIsa0JBQWtCLEVBQUE7O0FBR3RCO0VBQ0ksaUJBQWlCO0VBQ2pCLG9CQUFvQixFQUFBOztBQUd4QjtFQUNJLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIsV0FBVztFQUNYLDRCQUE0QjtFQUM1QixzQkFBc0IsRUFBQTs7QUFHMUI7RUFDSSx1Q0FBdUM7RUFDdkMsTUFBTTtFQUNOLE9BQU87RUFDUCxXQUFXO0VBQ1gsWUFBWSxFQUFBOztBQUdoQjtFQUNJLGtCQUFrQixFQUFBIiwiZmlsZSI6InNyYy9hcHAvbW92aWUtaW1hZ2UvbW92aWUtaW1hZ2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyLWZsdWlkIHtcbiAgICBwYWRkaW5nLWxlZnQ6IDBweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwcHg7XG59XG5cbi5zaW5nbGUtY29sdW1uIHtcbiAgICBwYWRkaW5nLXRvcDogMzBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogMzBweDtcbn1cblxuLmN1c3RvbS1iZyB7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogODAlIDgwJTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG4ubGF5ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNDMsIDE3LCA4LCAwLjk2KTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5pbm5lci1pbWcgaW1nIHtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG59Il19 */"

/***/ }),

/***/ "./src/app/movie-image/movie-image.component.ts":
/*!******************************************************!*\
  !*** ./src/app/movie-image/movie-image.component.ts ***!
  \******************************************************/
/*! exports provided: MovieImageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieImageComponent", function() { return MovieImageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_movie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../services/movie.service */ "./src/app/services/movie.service.ts");




var MovieImageComponent = /** @class */ (function () {
    function MovieImageComponent(route, ms) {
        this.route = route;
        this.ms = ms;
        this.image = [];
    }
    MovieImageComponent.prototype.ngOnInit = function () {
        this.movieId = this.route.snapshot.paramMap.get("idMovie");
        this.getImageByMovieId(this.movieId);
    };
    MovieImageComponent.prototype.getImageByMovieId = function (movieId) {
        var _this = this;
        this.ms.getImageByMovieId(movieId).subscribe(function (res) {
            _this.image = res['posters'].slice(0, 1);
            _this.imgBg = _this.image[0].file_path;
        });
    };
    MovieImageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'movie-image',
            template: __webpack_require__(/*! ./movie-image.component.html */ "./src/app/movie-image/movie-image.component.html"),
            styles: [__webpack_require__(/*! ./movie-image.component.scss */ "./src/app/movie-image/movie-image.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _services_movie_service__WEBPACK_IMPORTED_MODULE_3__["MovieService"]])
    ], MovieImageComponent);
    return MovieImageComponent;
}());



/***/ }),

/***/ "./src/app/movie/movie.component.html":
/*!********************************************!*\
  !*** ./src/app/movie/movie.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main></main>"

/***/ }),

/***/ "./src/app/movie/movie.component.scss":
/*!********************************************!*\
  !*** ./src/app/movie/movie.component.scss ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container-fluid {\n  padding-left: 0px;\n  padding-right: 0px; }\n\n.custom-bg {\n  height: auto;\n  background-size: cover;\n  width: auto;\n  background-position: 80% 80%;\n  background-size: cover; }\n\n.layer {\n  background-color: rgba(43, 17, 8, 0.96);\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%; }\n\n/*\nh2 {\n    margin-top: 30px;\n    margin-bottom: 30px;\n    padding: 0;\n    font-size: 2.4em;\n    line-height: 1.1em;\n    font-weight: 700;\n    display: inline-block;\n    color: #ffffff;\n}\n\nspan {\n    font-size: 1.8em;\n    color: gray;\n    font-weight: 300;\n}\n\n.layer {\n    background-color: rgba(43, 17, 8, 0.96);\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n}\n\n.single-column {\n    margin: 0 auto;\n    padding-top: 40px;\n    padding-bottom: 40px;\n    z-index: 0;\n}\n\n.rating-voter {\n    margin-top: 30px;\n    margin-bottom: 30px;\n}\n\n.sinopse h3 {\n    color: #ffffff;\n    font-size: 1.2rem;\n    font-weight: 300;\n}\n\n.sinopse p {\n    color: #ffffff;\n    font-weight: lighter;\n    font-size: 0.9em;\n}\n\n.equipe h3 {\n    color: #ffffff;\n    font-size: 1.2rem;\n    font-weight: 300;\n} */\n\n@media (min-width: 768px) {\n  .col-md-5 {\n    flex: 0 0 27.666667%;\n    max-width: 27.666667%; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW5pZWxzd2F0ZXIvRG9jdW1lbnRzL2Zhc3RzaG9wL3NyYy9hcHAvbW92aWUvbW92aWUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL21vdmllL21vdmllLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksaUJBQWlCO0VBQ2pCLGtCQUFrQixFQUFBOztBQUd0QjtFQUNJLFlBQVk7RUFDWixzQkFBc0I7RUFDdEIsV0FBVztFQUNYLDRCQUE0QjtFQUM1QixzQkFBc0IsRUFBQTs7QUFHMUI7RUFDSSx1Q0FBdUM7RUFDdkMsTUFBTTtFQUNOLE9BQU87RUFDUCxXQUFXO0VBQ1gsWUFBWSxFQUFBOztBQUloQjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0dDa0RHOztBRE1IO0VBQ0k7SUFDSSxvQkFBb0I7SUFDcEIscUJBQXFCLEVBQUEsRUFDeEIiLCJmaWxlIjoic3JjL2FwcC9tb3ZpZS9tb3ZpZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb250YWluZXItZmx1aWQge1xuICAgIHBhZGRpbmctbGVmdDogMHB4O1xuICAgIHBhZGRpbmctcmlnaHQ6IDBweDtcbn1cblxuLmN1c3RvbS1iZyB7XG4gICAgaGVpZ2h0OiBhdXRvO1xuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgd2lkdGg6IGF1dG87XG4gICAgYmFja2dyb3VuZC1wb3NpdGlvbjogODAlIDgwJTtcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG4ubGF5ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNDMsIDE3LCA4LCAwLjk2KTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5cblxuLypcbmgyIHtcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gICAgcGFkZGluZzogMDtcbiAgICBmb250LXNpemU6IDIuNGVtO1xuICAgIGxpbmUtaGVpZ2h0OiAxLjFlbTtcbiAgICBmb250LXdlaWdodDogNzAwO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICBjb2xvcjogI2ZmZmZmZjtcbn1cblxuc3BhbiB7XG4gICAgZm9udC1zaXplOiAxLjhlbTtcbiAgICBjb2xvcjogZ3JheTtcbiAgICBmb250LXdlaWdodDogMzAwO1xufVxuXG4ubGF5ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNDMsIDE3LCA4LCAwLjk2KTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5zaW5nbGUtY29sdW1uIHtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBwYWRkaW5nLXRvcDogNDBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogNDBweDtcbiAgICB6LWluZGV4OiAwO1xufVxuXG4ucmF0aW5nLXZvdGVyIHtcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG59XG5cbi5zaW5vcHNlIGgzIHtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICBmb250LXdlaWdodDogMzAwO1xufVxuXG4uc2lub3BzZSBwIHtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICBmb250LXdlaWdodDogbGlnaHRlcjtcbiAgICBmb250LXNpemU6IDAuOWVtO1xufVxuXG4uZXF1aXBlIGgzIHtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICBmb250LXNpemU6IDEuMnJlbTtcbiAgICBmb250LXdlaWdodDogMzAwO1xufSAqL1xuXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgICAuY29sLW1kLTUge1xuICAgICAgICBmbGV4OiAwIDAgMjcuNjY2NjY3JTtcbiAgICAgICAgbWF4LXdpZHRoOiAyNy42NjY2NjclO1xuICAgIH1cbn0iLCIuY29udGFpbmVyLWZsdWlkIHtcbiAgcGFkZGluZy1sZWZ0OiAwcHg7XG4gIHBhZGRpbmctcmlnaHQ6IDBweDsgfVxuXG4uY3VzdG9tLWJnIHtcbiAgaGVpZ2h0OiBhdXRvO1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICB3aWR0aDogYXV0bztcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogODAlIDgwJTtcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjsgfVxuXG4ubGF5ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDQzLCAxNywgOCwgMC45Nik7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTsgfVxuXG4vKlxuaDIge1xuICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGZvbnQtc2l6ZTogMi40ZW07XG4gICAgbGluZS1oZWlnaHQ6IDEuMWVtO1xuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGNvbG9yOiAjZmZmZmZmO1xufVxuXG5zcGFuIHtcbiAgICBmb250LXNpemU6IDEuOGVtO1xuICAgIGNvbG9yOiBncmF5O1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG5cbi5sYXllciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSg0MywgMTcsIDgsIDAuOTYpO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbn1cblxuLnNpbmdsZS1jb2x1bW4ge1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIHBhZGRpbmctdG9wOiA0MHB4O1xuICAgIHBhZGRpbmctYm90dG9tOiA0MHB4O1xuICAgIHotaW5kZXg6IDA7XG59XG5cbi5yYXRpbmctdm90ZXIge1xuICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbn1cblxuLnNpbm9wc2UgaDMge1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG5cbi5zaW5vcHNlIHAge1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xuICAgIGZvbnQtc2l6ZTogMC45ZW07XG59XG5cbi5lcXVpcGUgaDMge1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIGZvbnQtc2l6ZTogMS4ycmVtO1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG59ICovXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcbiAgLmNvbC1tZC01IHtcbiAgICBmbGV4OiAwIDAgMjcuNjY2NjY3JTtcbiAgICBtYXgtd2lkdGg6IDI3LjY2NjY2NyU7IH0gfVxuIl19 */"

/***/ }),

/***/ "./src/app/movie/movie.component.ts":
/*!******************************************!*\
  !*** ./src/app/movie/movie.component.ts ***!
  \******************************************/
/*! exports provided: MovieComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieComponent", function() { return MovieComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_movie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../services/movie.service */ "./src/app/services/movie.service.ts");




var MovieComponent = /** @class */ (function () {
    function MovieComponent(ms, route) {
        this.ms = ms;
        this.route = route;
        this.movie = [];
        this.technical = [];
    }
    MovieComponent.prototype.ngOnInit = function () {
        this.movieId = this.route.snapshot.paramMap.get("id");
        this.getMovieById(this.movieId);
        this.getCredits(this.movieId);
    };
    MovieComponent.prototype.getMovieById = function (movieId) {
        var _this = this;
        this.movieId = this.route.snapshot.paramMap.get("id");
        this.ms.getMovie(movieId).subscribe(function (res) {
            _this.movie = res;
            var technical = [];
            _this.ms.getCredits(movieId).subscribe(function (res) {
                res['credits']['crew'].forEach(function (entry) {
                    if (entry['job'] == "Director") {
                        technical.push(entry);
                    }
                    if (entry['job'] == 'Screenplay') {
                        technical.push(entry);
                    }
                });
                _this.movie['technical'] = technical;
            });
        });
        return this.movie;
    };
    MovieComponent.prototype.getImageByMovieId = function (movieId) {
        var _this = this;
        //this.getCredits(movieId);
        this.ms.getImageByMovieId(movieId).subscribe(function (res) {
            _this.image = res['posters'].slice(0, 1);
            _this.imgBg = _this.image[0].file_path;
            return _this.imgBg;
        });
    };
    MovieComponent.prototype.getCredits = function (movieId) {
        var technical = [];
        this.ms.getCredits(movieId).subscribe(function (res) {
            res['credits']['crew'].forEach(function (entry) {
                if (entry['job'] == "Director") {
                    technical.push(entry);
                }
                if (entry['job'] == 'Screenplay') {
                    technical.push(entry);
                }
            });
        });
    };
    MovieComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'movie',
            template: __webpack_require__(/*! ./movie.component.html */ "./src/app/movie/movie.component.html"),
            styles: [__webpack_require__(/*! ./movie.component.scss */ "./src/app/movie/movie.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_movie_service__WEBPACK_IMPORTED_MODULE_3__["MovieService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], MovieComponent);
    return MovieComponent;
}());



/***/ }),

/***/ "./src/app/services/filter-button.service.ts":
/*!***************************************************!*\
  !*** ./src/app/services/filter-button.service.ts ***!
  \***************************************************/
/*! exports provided: FilterButtonService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilterButtonService", function() { return FilterButtonService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");



var FilterButtonService = /** @class */ (function () {
    function FilterButtonService() {
        this._dataByGenres = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
    }
    FilterButtonService.prototype.setDataByGenres = function (data) {
        this._dataByGenres.next(data);
    };
    FilterButtonService.prototype.getDataByGenres = function () {
        return this._dataByGenres.asObservable();
    };
    FilterButtonService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FilterButtonService);
    return FilterButtonService;
}());



/***/ }),

/***/ "./src/app/services/filters.service.ts":
/*!*********************************************!*\
  !*** ./src/app/services/filters.service.ts ***!
  \*********************************************/
/*! exports provided: FiltersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FiltersService", function() { return FiltersService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _const_const__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../const/const */ "./src/app/const/const.ts");





var FiltersService = /** @class */ (function () {
    function FiltersService(http) {
        this.http = http;
    }
    FiltersService.prototype.getGenres = function () {
        return this.http.get(_const_const__WEBPACK_IMPORTED_MODULE_4__["Constants"].GENRES_ENDPOINT)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res; }));
    };
    FiltersService.prototype.getAllPopularMovies = function (page, genres) {
        var URL = '';
        if (!genres) {
            URL = _const_const__WEBPACK_IMPORTED_MODULE_4__["Constants"].POPULAR_MOVIES + '&page=' + page;
        }
        else {
            URL = _const_const__WEBPACK_IMPORTED_MODULE_4__["Constants"].GENRES_MOVIE + genres + '&page=' + page;
        }
        return this.http.get(URL)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res; }));
    };
    FiltersService.prototype.getMovie = function (id) {
    };
    FiltersService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], FiltersService);
    return FiltersService;
}());



/***/ }),

/***/ "./src/app/services/movie.service.ts":
/*!*******************************************!*\
  !*** ./src/app/services/movie.service.ts ***!
  \*******************************************/
/*! exports provided: MovieService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MovieService", function() { return MovieService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _const_const__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../const/const */ "./src/app/const/const.ts");





var MovieService = /** @class */ (function () {
    function MovieService(http) {
        this.http = http;
    }
    MovieService.prototype.getMovie = function (movieId) {
        return this.http.get(_const_const__WEBPACK_IMPORTED_MODULE_4__["Constants"].MOVIE + movieId + _const_const__WEBPACK_IMPORTED_MODULE_4__["Constants"].KEY + _const_const__WEBPACK_IMPORTED_MODULE_4__["Constants"].LANGUAGE)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res; }));
    };
    MovieService.prototype.getImageByMovieId = function (movieId) {
        return this.http.get(_const_const__WEBPACK_IMPORTED_MODULE_4__["Constants"].MOVIE + movieId + '/images' + _const_const__WEBPACK_IMPORTED_MODULE_4__["Constants"].KEY + _const_const__WEBPACK_IMPORTED_MODULE_4__["Constants"].LANGUAGE + '&include_image_language=en,null')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res; }));
    };
    MovieService.prototype.getCredits = function (movieId) {
        return this.http.get(_const_const__WEBPACK_IMPORTED_MODULE_4__["Constants"].MOVIE + movieId + _const_const__WEBPACK_IMPORTED_MODULE_4__["Constants"].KEY + '&append_to_response=credits')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res; }));
    };
    MovieService.prototype.getMovieInfo = function (movieId) {
        return this.http.get(_const_const__WEBPACK_IMPORTED_MODULE_4__["Constants"].MOVIE + movieId + _const_const__WEBPACK_IMPORTED_MODULE_4__["Constants"].KEY + '&append_to_response=videos')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res; }));
    };
    MovieService.prototype.getCreditsByMovie = function (movieId) {
        return this.http.get(_const_const__WEBPACK_IMPORTED_MODULE_4__["Constants"].MOVIE + movieId + '/credits' + _const_const__WEBPACK_IMPORTED_MODULE_4__["Constants"].KEY)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res; }));
    };
    MovieService.prototype.getTranslation = function (movieId) {
        return this.http.get(_const_const__WEBPACK_IMPORTED_MODULE_4__["Constants"].MOVIE + movieId + _const_const__WEBPACK_IMPORTED_MODULE_4__["Constants"].KEY + _const_const__WEBPACK_IMPORTED_MODULE_4__["Constants"].LANGUAGE + '&append_to_response=keywords')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) { return res; }));
    };
    MovieService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], MovieService);
    return MovieService;
}());



/***/ }),

/***/ "./src/app/technical-movie/technical-movie.component.html":
/*!****************************************************************!*\
  !*** ./src/app/technical-movie/technical-movie.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>{{movie.title}}</h2><span> ({{movie.release_date | date: 'yyyy'}})</span>\n<div class=\"row\">\n    <div class=\"rating-votes\">\n        <div class=\"col-md-6 col-sm-12 col-xs-12\">\n            <circle-progress style=\"float: left; margin-right: 8px; margin-left: -10px;\" [titleFontSize]=\"'12'\" [titleFontWeight]=\"100\" [percent]=\"voteAverage\" [radius]=\"30\" [outerStrokeWidth]=\"5\" [innerStrokeWidth]=\"5\" [titleColor]=\"'#ffffff'\" [backgroundColor]=\"'#FDB900'\"\n                [unitsColor]=\"'#ffffff'\" [outerStrokeColor]=\"outerStrokeColor\" [innerStrokeColor]=\"innerStrokeColor\" [animation]=\"true\" [animationDuration]=\"300\"></circle-progress>\n            <p>Avaliação dos usuários</p>\n        </div>\n        <div class=\"col-md-8 col-xs-12\">\n            <button placement=\"bottom\" tooltip=\"Adicionar a uma lista\" type=\"button\" class=\"btn btn-danger btn-circle\"><i class=\"fa fa-list\"></i>\n            </button>\n            <button placement=\"bottom\" tooltip=\"Adicionar aos favoritos\" type=\"button\" class=\"btn btn-danger btn-circle\"><i class=\"fa fa-heart\"></i>\n            </button>\n            <button placement=\"bottom\" tooltip=\"Adicionar à sua lista de interesses\" type=\"button\" class=\"btn btn-danger btn-circle\"><i class=\"fa fa-bookmark\"></i>\n            </button>\n            <button placement=\"bottom\" tooltip=\"Avalie!\" type=\"button\" class=\"btn btn-danger btn-circle\"><i class=\"fa fa-star\"></i>\n            </button>\n        </div>\n        <div class=\"col-md-6 col-xs-12 reproduct-trailer\">\n            <a click-stop-propagation (click)=\"openModal(template)\"><i class=\"fa fa-caret-right fa-2x\"></i> Reproduzir trailer</a>\n        </div>\n    </div>\n</div>\n\n<div class=\"row\">\n    <div class=\"col-md-12 sinopse\">\n        <h3>Sinopse</h3>\n        <p>{{movie.overview}}</p>\n    </div>\n</div>\n<div class=\"row\">\n    <div class=\"col-md-12 technical\">\n        <h3>Equipe técnica principal</h3>\n        <div class=\"row\">\n            <div class=\"col-md-4\" *ngFor=\"let tech of movie['technical'] let idx = index;\">\n                <p>{{tech.name}}</p>\n                <p class=\"job\">{{tech.job}}</p>\n            </div>\n        </div>\n    </div>\n</div>\n\n<ng-template #template>\n    <div class=\"modal-header\">\n        <h4 class=\"modal-title pull-left\">Reproduzir trailer</h4>\n        <button type=\"button\" class=\"close pull-right\" aria-label=\"Close\" (click)=\"modalRef.hide()\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n    </div>\n    <div class=\"modal-body\" style=\"height: 390px\">\n        <iframe [src]=\"safeSrc\" width=\"100%\" height=\"390\" frameborder=\"0\" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>\n    </div>\n</ng-template>"

/***/ }),

/***/ "./src/app/technical-movie/technical-movie.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/technical-movie/technical-movie.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "p {\n  font-size: 0.9em; }\n\na {\n  font-size: 0.9em; }\n\nh2 {\n  margin-top: 30px;\n  margin-bottom: 30px;\n  padding: 0;\n  font-size: 2.4em;\n  line-height: 1.1em;\n  font-weight: 700;\n  display: inline-block;\n  color: #ffffff; }\n\ni > a {\n  cursor: pointer; }\n\na:hover {\n  opacity: 0.6; }\n\nspan {\n  font-size: 1.8em;\n  color: gray;\n  font-weight: 300; }\n\n.reproduct-trailer {\n  margin-top: 10px; }\n\n.layer {\n  background-color: rgba(43, 17, 8, 0.96);\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%; }\n\n.single-column {\n  margin: 0 auto;\n  padding-top: 40px;\n  padding-bottom: 40px;\n  z-index: 0; }\n\n.btn {\n  margin-right: 10.999999%;\n  transition: 0.5s; }\n\n.btn:hover {\n  background-color: #ffffff; }\n\n.btn:hover i {\n  color: #000000; }\n\n.btn:last-child {\n  margin-right: 0; }\n\n.btn-circle {\n  border: 2px solid #ffffff;\n  box-sizing: border-box;\n  background: rgba(0, 0, 0, 0.2);\n  color: #000;\n  border-radius: 50%;\n  width: 46px;\n  height: 46px;\n  padding-right: 12px;\n  padding-top: 0px; }\n\n.rating-votes {\n  display: flex;\n  margin-bottom: 30px;\n  padding-left: 0px; }\n\n.rating-votes a {\n  color: #ffffff;\n  cursor: pointer; }\n\n.fa {\n  color: #ffffff;\n  vertical-align: sub; }\n\n.rating-votes p {\n  color: #ffffff;\n  width: 0%; }\n\n.sinopse h3 {\n  color: #ffffff;\n  font-size: 1.2em;\n  font-weight: 300; }\n\n.sinopse p {\n  color: #ffffff;\n  font-weight: lighter;\n  font-size: 0.9em; }\n\n.technical h3 {\n  color: #ffffff;\n  font-size: 1.2em;\n  font-weight: 300; }\n\n.technical {\n  margin-top: 30px; }\n\n.technical p {\n  color: #ffffff;\n  line-height: 1.4em;\n  margin: 0;\n  padding: 0;\n  overflow: hidden;\n  text-overflow: ellipsis; }\n\n.job {\n  font-size: 0.8em; }\n\n.modal-content {\n  background: none; }\n\n.modal-body {\n  padding: 0; }\n\n.modal-header {\n  background-color: #000000;\n  border: none;\n  border-top-left-radius: 0px;\n  border-top-right-radius: 0px;\n  border-bottom-left-radius: 0px;\n  border-bottom-right-radius: 0px; }\n\n.modal-header h4 {\n  font-size: 1.1rem;\n  color: #ffffff;\n  font-weight: 100; }\n\n.modal-header span {\n  font-size: 0.8em;\n  color: #ffffff; }\n\n.tooltip-inner {\n  background-color: #ffffff;\n  color: #000000; }\n\n@media (min-width: 768px) {\n  .col-md-5 {\n    flex: 0 0 27.666667%;\n    max-width: 27.666667%; }\n  .col-md-6 {\n    flex: 0 0 35%;\n    max-width: 35%; } }\n\n@media (max-width: 768px) {\n  .rating-votes {\n    display: block; }\n  .col-md-8 {\n    display: flex; } }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9kYW5pZWxzd2F0ZXIvRG9jdW1lbnRzL2Zhc3RzaG9wL3NyYy9hcHAvdGVjaG5pY2FsLW1vdmllL3RlY2huaWNhbC1tb3ZpZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUNKLEVBQUE7O0FBRUE7RUFDSSxnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSxnQkFBZ0I7RUFDaEIsbUJBQW1CO0VBQ25CLFVBQVU7RUFDVixnQkFBZ0I7RUFDaEIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixxQkFBcUI7RUFDckIsY0FBYyxFQUFBOztBQUdsQjtFQUNJLGVBQWUsRUFBQTs7QUFHbkI7RUFDSSxZQUFZLEVBQUE7O0FBR2hCO0VBQ0ksZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSxnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSx1Q0FBdUM7RUFDdkMsTUFBTTtFQUNOLE9BQU87RUFDUCxXQUFXO0VBQ1gsWUFBWSxFQUFBOztBQUdoQjtFQUNJLGNBQWM7RUFDZCxpQkFBaUI7RUFDakIsb0JBQW9CO0VBQ3BCLFVBQVUsRUFBQTs7QUFHZDtFQUNJLHdCQUF3QjtFQUN4QixnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSx5QkFBeUIsRUFBQTs7QUFHN0I7RUFDSSxjQUNKLEVBQUE7O0FBRUE7RUFDSSxlQUFlLEVBQUE7O0FBR25CO0VBQ0kseUJBQXlCO0VBQ3pCLHNCQUFzQjtFQUN0Qiw4QkFBOEI7RUFDOUIsV0FBVztFQUNYLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLG1CQUFtQjtFQUNuQixnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGlCQUFpQixFQUFBOztBQUdyQjtFQUNJLGNBQWM7RUFDZCxlQUFlLEVBQUE7O0FBR25CO0VBQ0ksY0FBYztFQUNkLG1CQUFtQixFQUFBOztBQUd2QjtFQUNJLGNBQWM7RUFDZCxTQUFTLEVBQUE7O0FBR2I7RUFDSSxjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGdCQUFnQixFQUFBOztBQUdwQjtFQUNJLGNBQWM7RUFDZCxvQkFBb0I7RUFDcEIsZ0JBQWdCLEVBQUE7O0FBR3BCO0VBQ0ksY0FBYztFQUNkLGdCQUFnQjtFQUNoQixnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSxnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSxjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLFNBQVM7RUFDVCxVQUFVO0VBQ1YsZ0JBQWdCO0VBQ2hCLHVCQUF1QixFQUFBOztBQUczQjtFQUNJLGdCQUFnQixFQUFBOztBQUdwQjtFQUNJLGdCQUFnQixFQUFBOztBQUdwQjtFQUNJLFVBQVUsRUFBQTs7QUFHZDtFQUNJLHlCQUF5QjtFQUN6QixZQUFZO0VBQ1osMkJBQTJCO0VBQzNCLDRCQUE0QjtFQUM1Qiw4QkFBOEI7RUFDOUIsK0JBQStCLEVBQUE7O0FBR25DO0VBQ0ksaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxnQkFBZ0IsRUFBQTs7QUFHcEI7RUFDSSxnQkFBZ0I7RUFDaEIsY0FBYyxFQUFBOztBQUdsQjtFQUNJLHlCQUF5QjtFQUN6QixjQUFjLEVBQUE7O0FBR2xCO0VBQ0k7SUFDSSxvQkFBb0I7SUFDcEIscUJBQXFCLEVBQUE7RUFFekI7SUFDSSxhQUFhO0lBQ2IsY0FBYyxFQUFBLEVBQ2pCOztBQUdMO0VBQ0k7SUFDSSxjQUFjLEVBQUE7RUFFbEI7SUFDSSxhQUFhLEVBQUEsRUFDaEIiLCJmaWxlIjoic3JjL2FwcC90ZWNobmljYWwtbW92aWUvdGVjaG5pY2FsLW1vdmllLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsicCB7XG4gICAgZm9udC1zaXplOiAwLjllbVxufVxuXG5hIHtcbiAgICBmb250LXNpemU6IDAuOWVtO1xufVxuXG5oMiB7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgIHBhZGRpbmc6IDA7XG4gICAgZm9udC1zaXplOiAyLjRlbTtcbiAgICBsaW5lLWhlaWdodDogMS4xZW07XG4gICAgZm9udC13ZWlnaHQ6IDcwMDtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgY29sb3I6ICNmZmZmZmY7XG59XG5cbmk+YSB7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5hOmhvdmVyIHtcbiAgICBvcGFjaXR5OiAwLjY7XG59XG5cbnNwYW4ge1xuICAgIGZvbnQtc2l6ZTogMS44ZW07XG4gICAgY29sb3I6IGdyYXk7XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cblxuLnJlcHJvZHVjdC10cmFpbGVyIHtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4ubGF5ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoNDMsIDE3LCA4LCAwLjk2KTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5zaW5nbGUtY29sdW1uIHtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBwYWRkaW5nLXRvcDogNDBweDtcbiAgICBwYWRkaW5nLWJvdHRvbTogNDBweDtcbiAgICB6LWluZGV4OiAwO1xufVxuXG4uYnRuIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDEwLjk5OTk5OSU7XG4gICAgdHJhbnNpdGlvbjogMC41cztcbn1cblxuLmJ0bjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbn1cblxuLmJ0bjpob3ZlciBpIHtcbiAgICBjb2xvcjogIzAwMDAwMFxufVxuXG4uYnRuOmxhc3QtY2hpbGQge1xuICAgIG1hcmdpbi1yaWdodDogMDtcbn1cblxuLmJ0bi1jaXJjbGUge1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICNmZmZmZmY7XG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuMik7XG4gICAgY29sb3I6ICMwMDA7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHdpZHRoOiA0NnB4O1xuICAgIGhlaWdodDogNDZweDtcbiAgICBwYWRkaW5nLXJpZ2h0OiAxMnB4O1xuICAgIHBhZGRpbmctdG9wOiAwcHg7XG59XG5cbi5yYXRpbmctdm90ZXMge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICBwYWRkaW5nLWxlZnQ6IDBweDtcbn1cblxuLnJhdGluZy12b3RlcyBhIHtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5mYSB7XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgdmVydGljYWwtYWxpZ246IHN1Yjtcbn1cblxuLnJhdGluZy12b3RlcyBwIHtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICB3aWR0aDogMCU7XG59XG5cbi5zaW5vcHNlIGgzIHtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICBmb250LXNpemU6IDEuMmVtO1xuICAgIGZvbnQtd2VpZ2h0OiAzMDA7XG59XG5cbi5zaW5vcHNlIHAge1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIGZvbnQtd2VpZ2h0OiBsaWdodGVyO1xuICAgIGZvbnQtc2l6ZTogMC45ZW07XG59XG5cbi50ZWNobmljYWwgaDMge1xuICAgIGNvbG9yOiAjZmZmZmZmO1xuICAgIGZvbnQtc2l6ZTogMS4yZW07XG4gICAgZm9udC13ZWlnaHQ6IDMwMDtcbn1cblxuLnRlY2huaWNhbCB7XG4gICAgbWFyZ2luLXRvcDogMzBweDtcbn1cblxuLnRlY2huaWNhbCBwIHtcbiAgICBjb2xvcjogI2ZmZmZmZjtcbiAgICBsaW5lLWhlaWdodDogMS40ZW07XG4gICAgbWFyZ2luOiAwO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcbn1cblxuLmpvYiB7XG4gICAgZm9udC1zaXplOiAwLjhlbTtcbn1cblxuLm1vZGFsLWNvbnRlbnQge1xuICAgIGJhY2tncm91bmQ6IG5vbmU7XG59XG5cbi5tb2RhbC1ib2R5IHtcbiAgICBwYWRkaW5nOiAwO1xufVxuXG4ubW9kYWwtaGVhZGVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwMDAwO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiAwcHg7XG4gICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDBweDtcbiAgICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwcHg7XG4gICAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDBweDtcbn1cblxuLm1vZGFsLWhlYWRlciBoNCB7XG4gICAgZm9udC1zaXplOiAxLjFyZW07XG4gICAgY29sb3I6ICNmZmZmZmY7XG4gICAgZm9udC13ZWlnaHQ6IDEwMDtcbn1cblxuLm1vZGFsLWhlYWRlciBzcGFuIHtcbiAgICBmb250LXNpemU6IDAuOGVtO1xuICAgIGNvbG9yOiAjZmZmZmZmO1xufVxuXG4udG9vbHRpcC1pbm5lciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjtcbiAgICBjb2xvcjogIzAwMDAwMDtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XG4gICAgLmNvbC1tZC01IHtcbiAgICAgICAgZmxleDogMCAwIDI3LjY2NjY2NyU7XG4gICAgICAgIG1heC13aWR0aDogMjcuNjY2NjY3JTtcbiAgICB9XG4gICAgLmNvbC1tZC02IHtcbiAgICAgICAgZmxleDogMCAwIDM1JTtcbiAgICAgICAgbWF4LXdpZHRoOiAzNSU7XG4gICAgfVxufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAucmF0aW5nLXZvdGVzIHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgfVxuICAgIC5jb2wtbWQtOCB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgfVxufSJdfQ== */"

/***/ }),

/***/ "./src/app/technical-movie/technical-movie.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/technical-movie/technical-movie.component.ts ***!
  \**************************************************************/
/*! exports provided: TechnicalMovieComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TechnicalMovieComponent", function() { return TechnicalMovieComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _services_movie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../services/movie.service */ "./src/app/services/movie.service.ts");
/* harmony import */ var ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-bootstrap/modal */ "./node_modules/ngx-bootstrap/modal/fesm5/ngx-bootstrap-modal.js");






var TechnicalMovieComponent = /** @class */ (function () {
    function TechnicalMovieComponent(sanitizer, route, modalService, ms) {
        this.sanitizer = sanitizer;
        this.route = route;
        this.modalService = modalService;
        this.ms = ms;
        this.movie = [];
    }
    TechnicalMovieComponent.prototype.ngOnInit = function () {
        this.movieId = this.route.snapshot.paramMap.get("idMovie");
        this.getMovieById(this.movieId);
    };
    TechnicalMovieComponent.prototype.getMovieById = function (movieId) {
        var _this = this;
        this.ms.getMovie(movieId).subscribe(function (res) {
            _this.movie = res;
            var technical = [];
            _this.ms.getCredits(movieId).subscribe(function (res) {
                res['credits']['crew'].forEach(function (entry) {
                    if (entry['job'] == "Director") {
                        technical.push(entry);
                    }
                    if (entry['job'] == 'Screenplay') {
                        technical.push(entry);
                    }
                });
                //Total votes
                _this.voteAverage = _this.movie['vote_average'] * 10;
                if (_this.voteAverage < 25) {
                    _this.outerStrokeColor = "#ff9393";
                    _this.innerStrokeColor = "#ff7f7f";
                }
                if (_this.voteAverage > 25 && _this.voteAverage < 50) {
                    _this.outerStrokeColor = "#ffee93";
                    _this.innerStrokeColor = "#dbc93d";
                }
                if (_this.voteAverage > 50 && _this.voteAverage < 75) {
                    _this.outerStrokeColor = "#d9ff93";
                    _this.innerStrokeColor = "#abdb3d";
                }
                _this.movie['technical'] = technical;
            });
            _this.ms.getMovieInfo(movieId).subscribe(function (res) {
                _this.movie['trailerUrl'] = "https://www.youtube.com/embed/" + res['videos']['results'][0].key;
            });
        });
        return this.movie;
    };
    TechnicalMovieComponent.prototype.openModal = function (template) {
        this.safeSrc = this.sanitizer.bypassSecurityTrustResourceUrl(this.movie['trailerUrl']);
        this.modalRef = this.modalService.show(template, { class: 'modal-lg' });
    };
    TechnicalMovieComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'technical-movie',
            template: __webpack_require__(/*! ./technical-movie.component.html */ "./src/app/technical-movie/technical-movie.component.html"),
            styles: [__webpack_require__(/*! ./technical-movie.component.scss */ "./src/app/technical-movie/technical-movie.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            ngx_bootstrap_modal__WEBPACK_IMPORTED_MODULE_5__["BsModalService"],
            _services_movie_service__WEBPACK_IMPORTED_MODULE_4__["MovieService"]])
    ], TechnicalMovieComponent);
    return TechnicalMovieComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/danielswater/Documents/fastshop/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map