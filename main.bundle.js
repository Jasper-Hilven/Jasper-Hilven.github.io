webpackJsonp([1],{

/***/ "../../../../../src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../src async recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#body {\n  height: 100%;\n  max-width: 100%;\n  margin: 0;\n  padding: 0;\n  background: url(http://www.neatprogramme.org.uk/wp-content/uploads/2015/09/featured45@wdd2x.jpg) no-repeat center center fixed;\n  background-size: cover;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"body\">\n  <app-header *ngIf=\"pageInfo['showHeader']\"></app-header>\n  <app-body></app-body>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__page_service__ = __webpack_require__("../../../../../src/app/page.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(userService, pageService) {
        this.userService = userService;
        this.pageService = pageService;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.userInfo = this.userService.getUserInfo();
        this.pageInfo = this.pageService.getPageInfo();
        document.getElementById("body").style.backgroundImage = "url('" + this.pageInfo['backgroundImage'] + "')";
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../src/app/app.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__page_service__["a" /* PageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__page_service__["a" /* PageService */]) === "function" && _b || Object])
], AppComponent);

var _a, _b;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__header_header_component__ = __webpack_require__("../../../../../src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__body_sidebar_sidebar_component__ = __webpack_require__("../../../../../src/app/body/sidebar/sidebar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__body_body_component__ = __webpack_require__("../../../../../src/app/body/body.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__body_profile_profile_component__ = __webpack_require__("../../../../../src/app/body/profile/profile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__body_experiences_experiences_component__ = __webpack_require__("../../../../../src/app/body/experiences/experiences.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__body_abilities_abilities_component__ = __webpack_require__("../../../../../src/app/body/abilities/abilities.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__body_projects_projects_component__ = __webpack_require__("../../../../../src/app/body/projects/projects.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__body_contact_contact_component__ = __webpack_require__("../../../../../src/app/body/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__body_awards_awards_component__ = __webpack_require__("../../../../../src/app/body/awards/awards.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__body_profile_about_me_about_me_component__ = __webpack_require__("../../../../../src/app/body/profile/about-me/about-me.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__body_profile_profile_picture_profile_picture_component__ = __webpack_require__("../../../../../src/app/body/profile/profile-picture/profile-picture.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__body_profile_details_details_component__ = __webpack_require__("../../../../../src/app/body/profile/details/details.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__body_experiences_educations_educations_component__ = __webpack_require__("../../../../../src/app/body/experiences/educations/educations.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__body_experiences_careers_careers_component__ = __webpack_require__("../../../../../src/app/body/experiences/careers/careers.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__body_abilities_skills_skills_component__ = __webpack_require__("../../../../../src/app/body/abilities/skills/skills.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__body_abilities_languages_languages_component__ = __webpack_require__("../../../../../src/app/body/abilities/languages/languages.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__body_abilities_tools_tools_component__ = __webpack_require__("../../../../../src/app/body/abilities/tools/tools.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__body_projects_projest_item_project_item_component__ = __webpack_require__("../../../../../src/app/body/projects/projest-item/project-item.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__body_contact_social_accounts_social_accounts_component__ = __webpack_require__("../../../../../src/app/body/contact/social-accounts/social-accounts.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__page_service__ = __webpack_require__("../../../../../src/app/page.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__body_experiences_certificates_certificates_component__ = __webpack_require__("../../../../../src/app/body/experiences/certificates/certificates.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__body_projects_jasperhilvenbe_jasperhilvenbe__ = __webpack_require__("../../../../../src/app/body/projects/jasperhilvenbe/jasperhilvenbe.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


























var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_3__header_header_component__["a" /* HeaderComponent */],
            __WEBPACK_IMPORTED_MODULE_4__body_sidebar_sidebar_component__["a" /* SidebarComponent */],
            __WEBPACK_IMPORTED_MODULE_5__body_body_component__["a" /* BodyComponent */],
            __WEBPACK_IMPORTED_MODULE_6__body_profile_profile_component__["a" /* ProfileComponent */],
            __WEBPACK_IMPORTED_MODULE_7__body_experiences_experiences_component__["a" /* ExperiencesComponent */],
            __WEBPACK_IMPORTED_MODULE_8__body_abilities_abilities_component__["a" /* AbilitiesComponent */],
            __WEBPACK_IMPORTED_MODULE_9__body_projects_projects_component__["a" /* ProjectsComponent */],
            __WEBPACK_IMPORTED_MODULE_10__body_contact_contact_component__["a" /* ContactComponent */],
            __WEBPACK_IMPORTED_MODULE_11__body_awards_awards_component__["a" /* AwardsComponent */],
            __WEBPACK_IMPORTED_MODULE_12__body_profile_about_me_about_me_component__["a" /* AboutMeComponent */],
            __WEBPACK_IMPORTED_MODULE_13__body_profile_profile_picture_profile_picture_component__["a" /* ProfilePictureComponent */],
            __WEBPACK_IMPORTED_MODULE_14__body_profile_details_details_component__["a" /* DetailsComponent */],
            __WEBPACK_IMPORTED_MODULE_15__body_experiences_educations_educations_component__["a" /* EducationsComponent */],
            __WEBPACK_IMPORTED_MODULE_16__body_experiences_careers_careers_component__["a" /* CareersComponent */],
            __WEBPACK_IMPORTED_MODULE_17__body_abilities_skills_skills_component__["a" /* SkillsComponent */],
            __WEBPACK_IMPORTED_MODULE_18__body_abilities_languages_languages_component__["a" /* LanguagesComponent */],
            __WEBPACK_IMPORTED_MODULE_19__body_abilities_tools_tools_component__["a" /* ToolsComponent */],
            __WEBPACK_IMPORTED_MODULE_20__body_projects_projest_item_project_item_component__["a" /* ProjectItemComponent */],
            __WEBPACK_IMPORTED_MODULE_25__body_projects_jasperhilvenbe_jasperhilvenbe__["a" /* Jasperhilvenbe */],
            __WEBPACK_IMPORTED_MODULE_21__body_contact_social_accounts_social_accounts_component__["a" /* SocialAccountsComponent */],
            __WEBPACK_IMPORTED_MODULE_24__body_experiences_certificates_certificates_component__["a" /* CertificatesComponent */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_22__user_service__["a" /* UserService */], __WEBPACK_IMPORTED_MODULE_23__page_service__["a" /* PageService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "../../../../../src/app/body/abilities/abilities.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#abilities {\n  width: 100%;\n  min-height: 100vh;\n  background-color: white;\n  margin: 0;\n  padding: 0;\n}\n\n.subtitle {\n  text-align: center;\n  color: #727878;\n}\n\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/body/abilities/abilities.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"abilities\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col col-xs-12 col-sm-8 col-sm-push-2\">\n        <h2 class=\"title\">Abilities</h2>\n        <p class=\"subtitle\">{{ userAbilitiesInfo['myAbilities'] }}</p>\n        <hr>\n        <app-skills></app-skills>\n        <hr>\n        <app-languages></app-languages>\n        <hr>\n        <app-tools></app-tools>\n      </div>\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/body/abilities/abilities.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_abilities_service__ = __webpack_require__("../../../../../src/app/body/abilities/user-abilities.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__page_service__ = __webpack_require__("../../../../../src/app/page.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AbilitiesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AbilitiesComponent = (function () {
    function AbilitiesComponent(userAbilitiesService, pageService) {
        this.userAbilitiesService = userAbilitiesService;
        this.pageService = pageService;
    }
    AbilitiesComponent.prototype.ngOnInit = function () {
        this.userAbilitiesInfo = this.userAbilitiesService.getAbilitiesInfo();
        this.pageInfo = this.pageService.getPageInfo();
        document.getElementById("abilities").style.backgroundColor = this.pageInfo['abilitiesBackgroundColor'];
    };
    return AbilitiesComponent;
}());
AbilitiesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-abilities',
        template: __webpack_require__("../../../../../src/app/body/abilities/abilities.component.html"),
        styles: [__webpack_require__("../../../../../src/app/body/abilities/abilities.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__user_abilities_service__["a" /* UserAbilitiesService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__user_abilities_service__["a" /* UserAbilitiesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__user_abilities_service__["a" /* UserAbilitiesService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__page_service__["a" /* PageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__page_service__["a" /* PageService */]) === "function" && _b || Object])
], AbilitiesComponent);

var _a, _b;
//# sourceMappingURL=abilities.component.js.map

/***/ }),

/***/ "../../../../../src/app/body/abilities/languages/languages.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "ul > li {\n  min-height: 30px;\n  padding: 3px 0px;\n}\n\nul > li .ability-title {\n  display: inline-block;\n  width: 60%;\n}\n\nul > li .ability-score {\n  float: right;\n}\n\nul > li .ability-score .glyphicon.filled {\n  color: #22A39F;\n}\n\nul > li .ability-score .glyphicon {\n  color: #DFE0E0;\n  font-size: 14px;\n  transition: all 0.3s;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/body/abilities/languages/languages.component.html":
/***/ (function(module, exports) {

module.exports = "<h3>Languages</h3>\n<div class=\"row\">\n  <div class=\"col-md-6\">\n    <ul class=\"no-bullets\">\n      <li *ngFor=\"let language of languagesList1\">\n        <span class=\"ability-title\">{{ language['languageName'] }} </span>\n        <span class=\"ability-score\">\n\t\t\t\t\t<span [ngClass]=\"language['proficiency'] >= 1 ? 'glyphicon glyphicon-star filled': 'glyphicon glyphicon-star'\"></span>\n\t\t\t\t\t<span [ngClass]=\"language['proficiency'] >= 2 ? 'glyphicon glyphicon-star filled': 'glyphicon glyphicon-star'\"></span>\n\t\t\t\t\t<span [ngClass]=\"language['proficiency'] >= 3 ? 'glyphicon glyphicon-star filled': 'glyphicon glyphicon-star'\"></span>\n\t\t\t\t\t<span [ngClass]=\"language['proficiency'] >= 4 ? 'glyphicon glyphicon-star filled': 'glyphicon glyphicon-star'\"></span>\n\t\t\t\t\t<span [ngClass]=\"language['proficiency'] >= 5 ? 'glyphicon glyphicon-star filled': 'glyphicon glyphicon-star'\"></span>\n\t\t\t\t</span>\n      </li>\n    </ul>\n  </div>\n  <div class=\"col-md-6\">\n    <ul class=\"no-bullets\">\n      <li *ngFor=\"let language of languagesList2\">\n        <span class=\"ability-title\">{{ language['languageName'] }}</span>\n        <span class=\"ability-score\">\n\t\t\t\t\t<span [ngClass]=\"language['proficiency'] >= 1 ? 'glyphicon glyphicon-star filled': 'glyphicon glyphicon-star'\"></span>\n\t\t\t\t\t<span [ngClass]=\"language['proficiency'] >= 2 ? 'glyphicon glyphicon-star filled': 'glyphicon glyphicon-star'\"></span>\n\t\t\t\t\t<span [ngClass]=\"language['proficiency'] >= 3 ? 'glyphicon glyphicon-star filled': 'glyphicon glyphicon-star'\"></span>\n\t\t\t\t\t<span [ngClass]=\"language['proficiency'] >= 4 ? 'glyphicon glyphicon-star filled': 'glyphicon glyphicon-star'\"></span>\n\t\t\t\t\t<span [ngClass]=\"language['proficiency'] >= 5 ? 'glyphicon glyphicon-star filled': 'glyphicon glyphicon-star'\"></span>\n\t\t\t\t</span>\n      </li>\n    </ul>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/body/abilities/languages/languages.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_abilities_service__ = __webpack_require__("../../../../../src/app/body/abilities/user-abilities.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LanguagesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LanguagesComponent = (function () {
    function LanguagesComponent(userAbilitiesService) {
        this.userAbilitiesService = userAbilitiesService;
        this.languagesList1 = [];
        this.languagesList2 = [];
    }
    LanguagesComponent.prototype.ngOnInit = function () {
        this.userAbilitiesInfo = this.userAbilitiesService.getAbilitiesInfo();
        this.arraylength = this.userAbilitiesInfo['languages'].length;
        this.languagesList1 = this.userAbilitiesInfo['languages'].slice(0, this.arraylength / 2);
        if (this.arraylength > 0)
            this.languagesList2 = this.userAbilitiesInfo['languages'].slice(this.arraylength / 2, this.arraylength);
    };
    return LanguagesComponent;
}());
LanguagesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-languages',
        template: __webpack_require__("../../../../../src/app/body/abilities/languages/languages.component.html"),
        styles: [__webpack_require__("../../../../../src/app/body/abilities/languages/languages.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__user_abilities_service__["a" /* UserAbilitiesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__user_abilities_service__["a" /* UserAbilitiesService */]) === "function" && _a || Object])
], LanguagesComponent);

var _a;
//# sourceMappingURL=languages.component.js.map

/***/ }),

/***/ "../../../../../src/app/body/abilities/skills/skills.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "ul > li {\n  min-height: 30px;\n  padding: 3px 0px;\n}\n\nul > li .ability-title {\n  display: inline-block;\n  width: 60%;\n}\n\nul > li .ability-score {\n  float: right;\n}\n\nul > li .ability-score .glyphicon.filled {\n  color: #22A39F;\n}\n\nul > li .ability-score .glyphicon {\n  color: #DFE0E0;\n  font-size: 14px;\n  transition: all 0.3s;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/body/abilities/skills/skills.component.html":
/***/ (function(module, exports) {

module.exports = "<h3>Skills</h3>\n<div class=\"row\">\n\n\n  <div class=\"col-md-6\">\n    <ul class=\"no-bullets\">\n      <li *ngFor=\"let skill of skillsList1\">\n        <span class=\"ability-title\">{{ skill['skillName'] }}</span>\n        <span class=\"ability-score\">\n\t\t\t\t\t<span [ngClass]=\"skill['proficiency'] >= 1 ? 'glyphicon glyphicon-star filled': 'glyphicon glyphicon-star'\"></span>\n\t\t\t\t\t<span [ngClass]=\"skill['proficiency'] >= 2 ? 'glyphicon glyphicon-star filled': 'glyphicon glyphicon-star'\"></span>\n\t\t\t\t\t<span [ngClass]=\"skill['proficiency'] >= 3 ? 'glyphicon glyphicon-star filled': 'glyphicon glyphicon-star'\"></span>\n\t\t\t\t\t<span [ngClass]=\"skill['proficiency'] >= 4 ? 'glyphicon glyphicon-star filled': 'glyphicon glyphicon-star'\"></span>\n\t\t\t\t\t<span [ngClass]=\"skill['proficiency'] >= 5 ? 'glyphicon glyphicon-star filled': 'glyphicon glyphicon-star'\"></span>\n\t\t\t\t</span>\n      </li>\n    </ul>\n  </div>\n  <div class=\"col-md-6\">\n    <ul class=\"no-bullets\">\n      <li *ngFor=\"let skill of skillsList2\">\n        <span class=\"ability-title\">{{ skill['skillName'] }}</span>\n        <span class=\"ability-score\">\n\t\t\t\t\t<span [ngClass]=\"skill['proficiency'] >= 1 ? 'glyphicon glyphicon-star filled': 'glyphicon glyphicon-star'\"></span>\n\t\t\t\t\t<span [ngClass]=\"skill['proficiency'] >= 2 ? 'glyphicon glyphicon-star filled': 'glyphicon glyphicon-star'\"></span>\n\t\t\t\t\t<span [ngClass]=\"skill['proficiency'] >= 3 ? 'glyphicon glyphicon-star filled': 'glyphicon glyphicon-star'\"></span>\n\t\t\t\t\t<span [ngClass]=\"skill['proficiency'] >= 4 ? 'glyphicon glyphicon-star filled': 'glyphicon glyphicon-star'\"></span>\n\t\t\t\t\t<span [ngClass]=\"skill['proficiency'] >= 5 ? 'glyphicon glyphicon-star filled': 'glyphicon glyphicon-star'\"></span>\n\t\t\t\t</span>\n      </li>\n    </ul>\n  </div>\n\n</div>\n\n"

/***/ }),

/***/ "../../../../../src/app/body/abilities/skills/skills.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_abilities_service__ = __webpack_require__("../../../../../src/app/body/abilities/user-abilities.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SkillsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SkillsComponent = (function () {
    function SkillsComponent(userService, userAbilitiesService) {
        this.userService = userService;
        this.userAbilitiesService = userAbilitiesService;
        this.skillsList1 = [];
        this.skillsList2 = [];
    }
    SkillsComponent.prototype.ngOnInit = function () {
        this.userInfo = this.userService.getUserInfo();
        this.userAbilitiesInfo = this.userAbilitiesService.getAbilitiesInfo();
        this.arraylength = this.userAbilitiesInfo['skills'].length;
        this.skillsList1 = this.userAbilitiesInfo['skills'].slice(0, this.arraylength / 2);
        if (this.arraylength > 0)
            this.skillsList2 = this.userAbilitiesInfo['skills'].slice(this.arraylength / 2, this.arraylength);
    };
    return SkillsComponent;
}());
SkillsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-skills',
        template: __webpack_require__("../../../../../src/app/body/abilities/skills/skills.component.html"),
        styles: [__webpack_require__("../../../../../src/app/body/abilities/skills/skills.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__user_abilities_service__["a" /* UserAbilitiesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__user_abilities_service__["a" /* UserAbilitiesService */]) === "function" && _b || Object])
], SkillsComponent);

var _a, _b;
//# sourceMappingURL=skills.component.js.map

/***/ }),

/***/ "../../../../../src/app/body/abilities/tools/tools.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "ul > li {\n  min-height: 30px;\n  padding: 3px 0px;\n}\n\nul > li .ability-title {\n  display: inline-block;\n  width: 60%;\n}\n\nul > li .ability-score {\n  float: right;\n}\n\nul > li .ability-score .glyphicon.filled {\n  color: #22A39F;\n}\n\nul > li .ability-score .glyphicon {\n  color: #DFE0E0;\n  font-size: 14px;\n  transition: all 0.3s;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/body/abilities/tools/tools.component.html":
/***/ (function(module, exports) {

module.exports = "<h3>Tools</h3>\n<div class=\"row\">\n\n  <div class=\"col-md-6\">\n    <ul class=\"no-bullets\">\n\n      <li *ngFor=\"let tool of toolsList1\">\n        <span class=\"ability-title\">{{ tool['toolName'] }} </span>\n        <span class=\"ability-score\">\n\t\t\t\t\t<span [ngClass]=\"tool['proficiency'] >= 1 ? 'glyphicon glyphicon-star filled': 'glyphicon glyphicon-star'\"></span>\n\t\t\t\t\t<span [ngClass]=\"tool['proficiency'] >= 2 ? 'glyphicon glyphicon-star filled': 'glyphicon glyphicon-star'\"></span>\n\t\t\t\t\t<span [ngClass]=\"tool['proficiency'] >= 3 ? 'glyphicon glyphicon-star filled': 'glyphicon glyphicon-star'\"></span>\n\t\t\t\t\t<span [ngClass]=\"tool['proficiency'] >= 4 ? 'glyphicon glyphicon-star filled': 'glyphicon glyphicon-star'\"></span>\n\t\t\t\t\t<span [ngClass]=\"tool['proficiency'] >= 5 ? 'glyphicon glyphicon-star filled': 'glyphicon glyphicon-star'\"></span>\n\t\t\t\t</span>\n      </li>\n\n    </ul>\n  </div>\n  <div class=\"col-md-6\">\n    <ul class=\"no-bullets\">\n\n      <li *ngFor=\"let tool of toolsList2\">\n        <span class=\"ability-title\">{{ tool['toolName'] }} </span>\n        <span class=\"ability-score\">\n\t\t\t\t\t<span [ngClass]=\"tool['proficiency'] >= 1 ? 'glyphicon glyphicon-star filled': 'glyphicon glyphicon-star'\"></span>\n\t\t\t\t\t<span [ngClass]=\"tool['proficiency'] >= 2 ? 'glyphicon glyphicon-star filled': 'glyphicon glyphicon-star'\"></span>\n\t\t\t\t\t<span [ngClass]=\"tool['proficiency'] >= 3 ? 'glyphicon glyphicon-star filled': 'glyphicon glyphicon-star'\"></span>\n\t\t\t\t\t<span [ngClass]=\"tool['proficiency'] >= 4 ? 'glyphicon glyphicon-star filled': 'glyphicon glyphicon-star'\"></span>\n\t\t\t\t\t<span [ngClass]=\"tool['proficiency'] >= 5 ? 'glyphicon glyphicon-star filled': 'glyphicon glyphicon-star'\"></span>\n\t\t\t\t</span>\n      </li>\n\n    </ul>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/body/abilities/tools/tools.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_abilities_service__ = __webpack_require__("../../../../../src/app/body/abilities/user-abilities.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToolsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ToolsComponent = (function () {
    function ToolsComponent(userAbilitiesService) {
        this.userAbilitiesService = userAbilitiesService;
        this.toolsList1 = [];
        this.toolsList2 = [];
    }
    ToolsComponent.prototype.ngOnInit = function () {
        this.userAbilitiesInfo = this.userAbilitiesService.getAbilitiesInfo();
        this.arraylength = this.userAbilitiesInfo['tools'].length;
        this.toolsList1 = this.userAbilitiesInfo['tools'].slice(0, this.arraylength / 2);
        if (this.arraylength > 0)
            this.toolsList2 = this.userAbilitiesInfo['tools'].slice(this.arraylength / 2, this.arraylength);
    };
    return ToolsComponent;
}());
ToolsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-tools',
        template: __webpack_require__("../../../../../src/app/body/abilities/tools/tools.component.html"),
        styles: [__webpack_require__("../../../../../src/app/body/abilities/tools/tools.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__user_abilities_service__["a" /* UserAbilitiesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__user_abilities_service__["a" /* UserAbilitiesService */]) === "function" && _a || Object])
], ToolsComponent);

var _a;
//# sourceMappingURL=tools.component.js.map

/***/ }),

/***/ "../../../../../src/app/body/abilities/user-abilities.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserAbilitiesService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var UserAbilitiesService = (function () {
    function UserAbilitiesService() {
        this.abilitiesInfo = {
            myAbilities: "",
            skills: [
                {
                    skillName: "Team player",
                    proficiency: 5 //"[5 to 0]"
                },
                {
                    skillName: "Positivity",
                    proficiency: 4 //"[5 to 0]"
                },
                {
                    skillName: "Creativity",
                    proficiency: 5 //"[5 to 0]"
                },
                {
                    skillName: "Adaptability",
                    proficiency: 4 //"[5 to 0]"
                },
                {
                    skillName: "Communication",
                    proficiency: 5 //"[5 to 0]"
                },
                {
                    skillName: "Avoiding over engineering",
                    proficiency: 5 //"[5 to 0]"
                },
                {
                    skillName: "Googling",
                    proficiency: 5 //"[5 to 0]"
                },
                {
                    skillName: "Reusing",
                    proficiency: 5 //"[5 to 0]"
                },
            ],
            languages: [
                {
                    languageName: "C",
                    proficiency: 3 //"[5 to 0]"
                }, {
                    languageName: "C++",
                    proficiency: 4 //"[5 to 0]"
                }, {
                    languageName: "C#",
                    proficiency: 5 //"[5 to 0]"
                },
                {
                    languageName: "Clojure",
                    proficiency: 4 //"[5 to 0]"
                },
                {
                    languageName: "Dutch",
                    proficiency: 5 //"[5 to 0]"
                },
                {
                    languageName: "English",
                    proficiency: 4 //"[5 to 0]"
                },
                {
                    languageName: "Erlang",
                    proficiency: 2 //"[5 to 0]"
                },
                {
                    languageName: "F#",
                    proficiency: 4 //"[5 to 0]"
                },
                {
                    languageName: "French",
                    proficiency: 3 //"[5 to 0]"
                },
                {
                    languageName: "German",
                    proficiency: 1 //"[5 to 0]"
                },
                {
                    languageName: "Haskell",
                    proficiency: 3 //"[5 to 0]"
                },
                {
                    languageName: "Java",
                    proficiency: 5 //"[5 to 0]"
                },
                {
                    languageName: "Javascript",
                    proficiency: 4 //"[5 to 0]"
                },
                {
                    languageName: "Kotlin",
                    proficiency: 4 //"[5 to 0]"
                },
                {
                    languageName: "Python",
                    proficiency: 4 //"[5 to 0]"
                },
                {
                    languageName: "Ruby",
                    proficiency: 2 //"[5 to 0]"
                },
                {
                    languageName: "Typescript",
                    proficiency: 5 //"[5 to 0]"
                },
                {
                    languageName: "Visual basic",
                    proficiency: 4 //"[5 to 0]"
                },
            ],
            tools: [
                {
                    toolName: "Angular",
                    proficiency: 4,
                },
                {
                    toolName: "Git",
                    proficiency: 5,
                },
                {
                    toolName: "Gradle",
                    proficiency: 4,
                },
                {
                    toolName: "Maven",
                    proficiency: 3,
                },
                {
                    toolName: "OSGI",
                    proficiency: 3,
                },
                {
                    toolName: "Pixi.js",
                    proficiency: 5,
                },
                {
                    toolName: "React",
                    proficiency: 5,
                },
                {
                    toolName: "Resharper",
                    proficiency: 5,
                },
                {
                    toolName: "Spring",
                    proficiency: 4,
                },
                {
                    toolName: "Tomcat",
                    proficiency: 3,
                },
                {
                    toolName: "Unity (Unity3d)",
                    proficiency: 4,
                },
                {
                    toolName: "Visual studio",
                    proficiency: 5,
                },
                {
                    toolName: "Visual studio code",
                    proficiency: 5,
                },
            ]
        };
    }
    UserAbilitiesService.prototype.getAbilitiesInfo = function () {
        return this.abilitiesInfo;
    };
    return UserAbilitiesService;
}());
UserAbilitiesService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])()
], UserAbilitiesService);

//# sourceMappingURL=user-abilities.service.js.map

/***/ }),

/***/ "../../../../../src/app/body/awards/awards.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#awards {\n  width: 100%;\n  min-height: 100vh;\n  background-color: white;\n  margin: 0;\n  padding: 0;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/body/awards/awards.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"awards\">\n  <div class=\"Awards\">\n    <div class=\"row\">\n      <div class=\"ccol col-xs-12 col-sm-8 col-sm-push-2\">\n        <h2 id=\"title\">Awards</h2>\n        <h4 id=\"subtitle\">[Your awars here]</h4>\n      </div>\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/body/awards/awards.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AwardsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var AwardsComponent = (function () {
    function AwardsComponent() {
    }
    AwardsComponent.prototype.ngOnInit = function () {
    };
    return AwardsComponent;
}());
AwardsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-awards',
        template: __webpack_require__("../../../../../src/app/body/awards/awards.component.html"),
        styles: [__webpack_require__("../../../../../src/app/body/awards/awards.component.css")]
    }),
    __metadata("design:paramtypes", [])
], AwardsComponent);

//# sourceMappingURL=awards.component.js.map

/***/ }),

/***/ "../../../../../src/app/body/body.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#body {\n  width: 100%;\n  min-height: 100%;\n  height: 100%;\n  margin: 0;\n  padding: 0;\n  position: relative;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/body/body.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"body\">\n  <app-sidebar></app-sidebar>\n  <!-- List of user's informations -->\n  <app-profile *ngIf=\"pageInfo['showProfile']\"></app-profile>\n  <app-projects *ngIf=\"pageInfo['showPortfolio']\"></app-projects>\n  <app-experiences *ngIf=\"pageInfo['showExperiences']\"></app-experiences>\n  <app-abilities *ngIf=\"pageInfo['showAbilities']\"></app-abilities>\n  <app-awards *ngIf=\"pageInfo['showAwards']\"></app-awards>\n  <app-contact *ngIf=\"pageInfo['showContact']\"></app-contact>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/body/body.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__page_service__ = __webpack_require__("../../../../../src/app/page.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BodyComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BodyComponent = (function () {
    function BodyComponent(pageService) {
        this.pageService = pageService;
    }
    BodyComponent.prototype.ngOnInit = function () {
        this.pageInfo = this.pageService.getPageInfo();
    };
    return BodyComponent;
}());
BodyComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-body',
        template: __webpack_require__("../../../../../src/app/body/body.component.html"),
        styles: [__webpack_require__("../../../../../src/app/body/body.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__page_service__["a" /* PageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__page_service__["a" /* PageService */]) === "function" && _a || Object])
], BodyComponent);

var _a;
//# sourceMappingURL=body.component.js.map

/***/ }),

/***/ "../../../../../src/app/body/contact/contact.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#contact {\n  width: 100%;\n  min-height: 100vh;\n  background-color: rgb(66, 73, 73);\n  margin: 0;\n  padding: 0;\n}\n\n.title {\n  color: #FFFFFF;\n}\n\n.subtitle {\n  text-align: center;\n  color: #727878;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/body/contact/contact.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"contact\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col col-xs-12 col-sm-8 col-sm-push-2\">\n        <h2 class=\"title\">Contact</h2>\n        <!--<p class=\"subtitle\">[Your experience here]</p>-->\n        <hr>\n        <app-social-accounts></app-social-accounts>\n      </div>\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/body/contact/contact.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactComponent = (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    return ContactComponent;
}());
ContactComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-contact',
        template: __webpack_require__("../../../../../src/app/body/contact/contact.component.html"),
        styles: [__webpack_require__("../../../../../src/app/body/contact/contact.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ContactComponent);

//# sourceMappingURL=contact.component.js.map

/***/ }),

/***/ "../../../../../src/app/body/contact/social-accounts/social-accounts.component.css":
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__("../../../../css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".link {\n  margin: 1%;\n}\n\na {\n  text-decoration: none;\n  color: #FFFFFF;\n}\n\na .icon {\n  float: left;\n  margin-right: 20px;\n}\n\n.icon.icon-twitter {\n  background-position: 0px 0px;\n}\n\n.icon.icon-linkedin {\n  background-position: 0px -32px;\n}\n\n.icon.icon-email {\n  background-position: 0px -96px;\n}\n\n.icon {\n  display: inline-block;\n  background: url(" + escape(__webpack_require__("../../../../../src/assets/sm_icon_sprite.png")) + ") no-repeat;\n  height: 32px;\n  width: 32px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/body/contact/social-accounts/social-accounts.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col col-md-6\">\n  <div class=\"link col col-xs-12\">\n    <a href=\"mailto:jasperhilven@gmail.com\">\n      <span class=\"icon icon-email\"></span>\n      <span style=\"unicode-bidi:bidi-override; direction: rtl;\">\n        moc.liamg@nevlihrepsaj</span>\n    </a>\n  </div>\n  <div class=\"link col col-xs-12\">\n    <a href=\"https://www.linkedin.com/in/jasper-hilven-770b9691/\" target=\"_blank\">\n      <span class=\"icon icon-linkedin\"></span>\n      https://www.linkedin.com/in/jasper-hilven-770b9691/</a>\n  </div>\n \n</div>\n<div class=\"col col-md-6\">\n  <div class=\"link col col-xs-12\">\n    <a href=\"https://twitter.com/jasperhilven\" target=\"_blank\">\n      <span class=\"icon icon-twitter\"></span>\n      https://twitter.com/jasperhilven</a>\n  </div>\n \n</div>\n"

/***/ }),

/***/ "../../../../../src/app/body/contact/social-accounts/social-accounts.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SocialAccountsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SocialAccountsComponent = (function () {
    function SocialAccountsComponent() {
    }
    SocialAccountsComponent.prototype.ngOnInit = function () {
    };
    return SocialAccountsComponent;
}());
SocialAccountsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-social-accounts',
        template: __webpack_require__("../../../../../src/app/body/contact/social-accounts/social-accounts.component.html"),
        styles: [__webpack_require__("../../../../../src/app/body/contact/social-accounts/social-accounts.component.css")]
    }),
    __metadata("design:paramtypes", [])
], SocialAccountsComponent);

//# sourceMappingURL=social-accounts.component.js.map

/***/ }),

/***/ "../../../../../src/app/body/experiences/careers/careers.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/body/experiences/careers/careers.component.html":
/***/ (function(module, exports) {

module.exports = "<h3>Jobs</h3>\n<div class=\"experiences\">\n\n  <div class=\"experience row\" *ngFor=\"let career of userCareersInfo\">\n    <div class=\"col-md-4\">\n      <h4>{{ career['companyName'] }}</h4>\n      <p class=\"experience-period\">\n        {{ career['startDate'] }}\t\t\t\t-\n        {{ career['endDate'] }}\t\t\t</p>\n    </div>\n    <div class=\"col-md-8\">\n      <p>\n        <strong>{{ career['jobType'] }} - {{ career['jobTitle'] }}]</strong>\n        <span class=\"hidden-phone\">\n\t\t\t\t\t {{ career['jobDuty'] }}</span>\n        <br>\n        <span class=\"experience-details\">\n\t\t\t\t\t<span class=\"location\">\n\t\t\t\t\t\t<span class=\"glyphicon glyphicon-map-marker\"></span>\n\t\t\t\t\t\t{{ career['location'] }}</span>\n\t\t\t\t\t<span class=\"seperator\">|</span>\n\t\t\t\t\t<span class=\"link\">\n\t\t\t\t\t\t<span class=\"glyphicon glyphicon-link\"></span>\n\t\t\t\t\t\t<a [href]=\"career['companyLink']\" target=\"_blank\">Company's website</a>\n\t\t\t\t\t</span>\n\t\t\t\t</span>\n      </p>\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/body/experiences/careers/careers.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_experiences_service__ = __webpack_require__("../../../../../src/app/body/experiences/user-experiences.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CareersComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CareersComponent = (function () {
    function CareersComponent(userExperiencesService) {
        this.userExperiencesService = userExperiencesService;
    }
    CareersComponent.prototype.ngOnInit = function () {
        this.userCareersInfo = this.userExperiencesService.getExperiencesInfo().careers;
    };
    return CareersComponent;
}());
CareersComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-careers',
        template: __webpack_require__("../../../../../src/app/body/experiences/careers/careers.component.html"),
        styles: [__webpack_require__("../../../../../src/app/body/experiences/careers/careers.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__user_experiences_service__["a" /* UserExperiencesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__user_experiences_service__["a" /* UserExperiencesService */]) === "function" && _a || Object])
], CareersComponent);

var _a;
//# sourceMappingURL=careers.component.js.map

/***/ }),

/***/ "../../../../../src/app/body/experiences/certificates/certificates.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".certificate {\n  display:inline-block;\n  overflow:hidden;\n}\n.certificate img {\n  width: 250px;\n  height: 200px;\n}\n\n.certifica_title {\n  color: black;\n  text-align: center;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/body/experiences/certificates/certificates.component.html":
/***/ (function(module, exports) {

module.exports = "<h3>National math and science competitions</h3>\n<div class=\"certificates\">\n\n  <div class=\"certificate col col-sm-6 col-md-4\" *ngFor=\"let certificate of userCertificatesInfo\">\n    <img [src]=\"certificate.imageUrl\">\n    <p class=\"certifica_title\">{{ certificate.certificateTitle }}</p>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/body/experiences/certificates/certificates.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_experiences_service__ = __webpack_require__("../../../../../src/app/body/experiences/user-experiences.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CertificatesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var CertificatesComponent = (function () {
    function CertificatesComponent(userExperiencesService) {
        this.userExperiencesService = userExperiencesService;
    }
    CertificatesComponent.prototype.ngOnInit = function () {
        this.userCertificatesInfo = this.userExperiencesService.getExperiencesInfo().certificates;
    };
    return CertificatesComponent;
}());
CertificatesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-certificates',
        template: __webpack_require__("../../../../../src/app/body/experiences/certificates/certificates.component.html"),
        styles: [__webpack_require__("../../../../../src/app/body/experiences/certificates/certificates.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__user_experiences_service__["a" /* UserExperiencesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__user_experiences_service__["a" /* UserExperiencesService */]) === "function" && _a || Object])
], CertificatesComponent);

var _a;
//# sourceMappingURL=certificates.component.js.map

/***/ }),

/***/ "../../../../../src/app/body/experiences/educations/educations.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/body/experiences/educations/educations.component.html":
/***/ (function(module, exports) {

module.exports = "<h3>Education</h3>\n<div class=\"experiences\">\n\n  <div class=\"experience row\" *ngFor=\"let education of userEducationsInfo\">\n    <div class=\"col-md-4\">\n      <h4>{{ education['schoolName'] }}</h4>\n      <p class=\"experience-period\">\n        {{ education['startDate'] }}\t\t\t\t-\n        {{ education['endDate'] }}\t\t\t</p>\n    </div>\n    <div class=\"col-md-8\">\n      <p>\n        <strong>{{ education['degreeTitle'] }}</strong>\n        <span class=\"hidden-phone\">\n\t\t\t\t\t{{ education['certificationDescription'] }}</span>\n        <br>\n        <span class=\"experience-details\">\n\t\t\t\t\t<span class=\"location\">\n\t\t\t\t\t\t<span class=\"glyphicon glyphicon-map-marker\"></span>\n\t\t\t\t\t\t{{ education['location'] }}</span>\n\t\t\t\t</span>\n      </p>\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/body/experiences/educations/educations.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_experiences_service__ = __webpack_require__("../../../../../src/app/body/experiences/user-experiences.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EducationsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var EducationsComponent = (function () {
    function EducationsComponent(userExperiencesService) {
        this.userExperiencesService = userExperiencesService;
    }
    EducationsComponent.prototype.ngOnInit = function () {
        this.userEducationsInfo = this.userExperiencesService.getExperiencesInfo().educations;
    };
    return EducationsComponent;
}());
EducationsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-educations',
        template: __webpack_require__("../../../../../src/app/body/experiences/educations/educations.component.html"),
        styles: [__webpack_require__("../../../../../src/app/body/experiences/educations/educations.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__user_experiences_service__["a" /* UserExperiencesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__user_experiences_service__["a" /* UserExperiencesService */]) === "function" && _a || Object])
], EducationsComponent);

var _a;
//# sourceMappingURL=educations.component.js.map

/***/ }),

/***/ "../../../../../src/app/body/experiences/experiences.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#experiences {\n  width: 100%;\n  min-height: 100vh;\n  margin: 0;\n  padding: 0;\n}\n\n.subtitle {\n  text-align: center;\n  color: #727878;\n}\n\n#experiences .experience {\n  margin-bottom: 20px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/body/experiences/experiences.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"experiences\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col col-xs-12 col-sm-8 col-sm-push-2\">\n        <h2 class=\"title\">Career</h2>\n        <p class=\"subtitle\">{{ userExperiencesInfo['myExperiences'] }}</p>\n        <hr>\n        <app-educations></app-educations>\n        <hr>\n        <app-careers></app-careers>\n        <hr>\n        <app-certificates></app-certificates>\n      </div>\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/body/experiences/experiences.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_experiences_service__ = __webpack_require__("../../../../../src/app/body/experiences/user-experiences.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__page_service__ = __webpack_require__("../../../../../src/app/page.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExperiencesComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ExperiencesComponent = (function () {
    function ExperiencesComponent(userExperiencesService, pageService) {
        this.userExperiencesService = userExperiencesService;
        this.pageService = pageService;
    }
    ExperiencesComponent.prototype.ngOnInit = function () {
        this.userExperiencesInfo = this.userExperiencesService.getExperiencesInfo();
        this.pageInfo = this.pageService.getPageInfo();
        document.getElementById("experiences").style.backgroundColor = this.pageInfo['experiencesBackgroundColor'];
    };
    return ExperiencesComponent;
}());
ExperiencesComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-experiences',
        template: __webpack_require__("../../../../../src/app/body/experiences/experiences.component.html"),
        styles: [__webpack_require__("../../../../../src/app/body/experiences/experiences.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_1__user_experiences_service__["a" /* UserExperiencesService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__user_experiences_service__["a" /* UserExperiencesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__user_experiences_service__["a" /* UserExperiencesService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__page_service__["a" /* PageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__page_service__["a" /* PageService */]) === "function" && _b || Object])
], ExperiencesComponent);

var _a, _b;
//# sourceMappingURL=experiences.component.js.map

/***/ }),

/***/ "../../../../../src/app/body/experiences/user-experiences.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserExperiencesService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var UserExperiencesService = (function () {
    function UserExperiencesService() {
        this.experiencesInfo = {
            myExperiences: "",
            educations: [
                {
                    schoolName: "KULeuven",
                    startDate: "September 2012",
                    endDate: "June 2014",
                    degreeTitle: "Master of science in Engineering: Computer science",
                    certificationDescription: "Magna cum Laude",
                    location: "Leuven, Belgium"
                },
                {
                    schoolName: "KULeuven",
                    startDate: "September 2009",
                    endDate: "June 2012",
                    degreeTitle: "Bachelor of science in Engineering: Electrical Engineering",
                    certificationDescription: "Magna cum Laude",
                    location: "Leuven, Belgium"
                }
            ],
            careers: [
                {
                    companyName: "LMS Siemens",
                    startDate: "September 2014",
                    endDate: "September 2015",
                    jobType: "Software",
                    jobTitle: "Software development engineer",
                    jobDuty: "Building PLM Software products",
                    location: "Heverlee, Belgium",
                    companyLink: "https://www.plm.automation.siemens.com/en/products/lms/engineering/"
                },
                {
                    companyName: "Xenit solution",
                    startDate: "September 2015",
                    endDate: "Ongoing",
                    jobType: "Software",
                    jobTitle: "Software development engineer",
                    jobDuty: "Building ECM Software",
                    location: "Leuven, Belgium",
                    companyLink: "https://www.xenit.eu"
                },
            ],
            certificates: [
                {
                    certificateTitle: "Flemish Math Olympiad: Finalist, 2009",
                    imageUrl: "https://www.japantimes.co.jp/wp-content/uploads/2016/11/n-math-a-20161130-870x580.jpg"
                },
                {
                    certificateTitle: "Flemish Physics Olympiad: 7th, 2009",
                    imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6JPXC2k8MK4yhlKLDUS8wesg_Sy_SVWpI8rlvm5wFLWgauWJC4Q"
                },
                {
                    certificateTitle: "Flemish Programming Competition: 3th with my team, 2010",
                    imageUrl: "https://www.dreamhost.com/blog/wp-content/uploads/2015/11/programming-1009134_1280-810x540.jpg"
                }
            ]
        };
    }
    UserExperiencesService.prototype.getExperiencesInfo = function () {
        return this.experiencesInfo;
    };
    return UserExperiencesService;
}());
UserExperiencesService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])()
], UserExperiencesService);

//# sourceMappingURL=user-experiences.service.js.map

/***/ }),

/***/ "../../../../../src/app/body/profile/about-me/about-me.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "p{\n    font-size: 18px !important;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/body/profile/about-me/about-me.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-4\">\n  <h3>About me</h3>\n  <p>{{ userInfo['aboutMe'] }}</p>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/body/profile/about-me/about-me.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutMeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutMeComponent = (function () {
    function AboutMeComponent(userService) {
        this.userService = userService;
    }
    AboutMeComponent.prototype.ngOnInit = function () {
        this.userInfo = this.userService.getUserInfo();
    };
    return AboutMeComponent;
}());
AboutMeComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-about-me',
        template: __webpack_require__("../../../../../src/app/body/profile/about-me/about-me.component.html"),
        styles: [__webpack_require__("../../../../../src/app/body/profile/about-me/about-me.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */]) === "function" && _a || Object])
], AboutMeComponent);

var _a;
//# sourceMappingURL=about-me.component.js.map

/***/ }),

/***/ "../../../../../src/app/body/profile/details/details.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "p{\n    font-size: 18px !important;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/body/profile/details/details.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-4\">\n  <h3>Details</h3>\n  <p>\n    <strong>Name:</strong>\n    {{ userInfo['name'] }}</p>\n  <p>\n    <strong>Country:</strong>\n    {{ userInfo['location'] }}</p>\n  <p>\n    <strong>Region:</strong>\n    Vlaams-Brabant, Limburg, Antwerpen.</p>\n  <p>\n    <strong>Phone:</strong>\n    See my CV</p>\n  <p>\n    <strong>CV:</strong>\n    See my LinkedIn</p>\n  <p>\n    <strong> email:</strong>\n    <br>\n    <span style=\"unicode-bidi:bidi-override; direction: rtl;\">\n      moc.liamg@nevlihrepsaj </span>\n  </p>\n  <p>\n    <strong>\n      <a href=\"https://www.linkedin.com/in/jasper-hilven-770b9691/\">LinkedIn </a>\n    </strong>\n  </p>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/body/profile/details/details.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DetailsComponent = (function () {
    function DetailsComponent(userService) {
        this.userService = userService;
    }
    DetailsComponent.prototype.ngOnInit = function () {
        this.userInfo = this.userService.getUserInfo();
    };
    return DetailsComponent;
}());
DetailsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-details',
        template: __webpack_require__("../../../../../src/app/body/profile/details/details.component.html"),
        styles: [__webpack_require__("../../../../../src/app/body/profile/details/details.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */]) === "function" && _a || Object])
], DetailsComponent);

var _a;
//# sourceMappingURL=details.component.js.map

/***/ }),

/***/ "../../../../../src/app/body/profile/profile-picture/profile-picture.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "img {\n  width: 100%;\n  max-width: 246px;\n  height: auto;\n  border-radius: 50%;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/body/profile/profile-picture/profile-picture.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-md-4 text-center\">\n  <img [src]=\"userInfo['profilePicture']\" alt=\"{{userInfo['name']}}\" width=\"246\" height=\"246\">\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/body/profile/profile-picture/profile-picture.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePictureComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ProfilePictureComponent = (function () {
    function ProfilePictureComponent(userService) {
        this.userService = userService;
    }
    ProfilePictureComponent.prototype.ngOnInit = function () {
        this.userInfo = this.userService.getUserInfo();
    };
    return ProfilePictureComponent;
}());
ProfilePictureComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-profile-picture',
        template: __webpack_require__("../../../../../src/app/body/profile/profile-picture/profile-picture.component.html"),
        styles: [__webpack_require__("../../../../../src/app/body/profile/profile-picture/profile-picture.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */]) === "function" && _a || Object])
], ProfilePictureComponent);

var _a;
//# sourceMappingURL=profile-picture.component.js.map

/***/ }),

/***/ "../../../../../src/app/body/profile/profile.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#profile {\n  width: 100%;\n  min-height: 100vh;\n  background-color: white;\n  margin: 0;\n  padding-top: 50;\n}\n\n.title {\n  text-align: center;\n}\n\n.subtitle {\n  text-align: center;\n  color: #727878;\n}\n\n#profile .row > div {\n  margin-bottom: 20px;\n}\np{\n  font-size: 24px !important;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/body/profile/profile.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"profile\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col col-xs-12 col-sm-12\">\n        <h2 class=\"title\">Profile</h2>\n        <p class=\"subtitle\">I'm a {{ userInfo['jobTitle'] }}</p>\n        <hr>\n        <app-about-me></app-about-me>\n        <app-profile-picture></app-profile-picture>\n        <app-details></app-details>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/body/profile/profile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__page_service__ = __webpack_require__("../../../../../src/app/page.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ProfileComponent = (function () {
    function ProfileComponent(userService, pageService) {
        this.userService = userService;
        this.pageService = pageService;
    }
    ProfileComponent.prototype.ngOnInit = function () {
        this.userInfo = this.userService.getUserInfo();
        this.pageInfo = this.pageService.getPageInfo();
        document.getElementById("profile").style.backgroundColor = this.pageInfo['profileBackgroundColor'];
    };
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-profile',
        template: __webpack_require__("../../../../../src/app/body/profile/profile.component.html"),
        styles: [__webpack_require__("../../../../../src/app/body/profile/profile.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__page_service__["a" /* PageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__page_service__["a" /* PageService */]) === "function" && _b || Object])
], ProfileComponent);

var _a, _b;
//# sourceMappingURL=profile.component.js.map

/***/ }),

/***/ "../../../../../src/app/body/projects/jasperhilvenbe/jasperhilvenbe.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "figure {\n  position: relative;\n  overflow: hidden;\n  margin: 3%;\n}\n\nfigure iframe {\n  width: 400px;\n  height: 300px;\n  opacity: 1;\n}\n\n\nfigure figcaption {\n  padding: 20px 30px;\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  height: 100%;\n  width: 100%;\n  background-color: #22A39F;\n  opacity: 0.9;\n  display: none;\n}\n\nfigure:hover figcaption {\n  display: block;\n}\n\nfigure:hover img {\n  opacity: 0.5;\n}\n\nfigure p > strong {\n  width: 60px;\n  display: inline-block;\n  margin: 0px;\n}\n\nfigure h3 {\n  color: #FFF;\n  font-weight: 600;\n  margin-bottom: 5px;\n}\n\nfigure p > strong {\n  width: 60px;\n  display: inline-block;\n  margin: 0px;\n}\n\nfigure a {\n  z-index: 1000;\n  text-indent: 200%;\n  white-space: nowrap;\n  font-size: 0;\n  opacity: 0;\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  height: 100%;\n  width: 100%;\n}\n\nfigure .icon {\n  background: #22A39F;\n  position: absolute;\n  top: 0px;\n  right: 0px;\n  width: 48px;\n  height: 48px;\n}\n\nfigure .icon span {\n  font-size: 18px;\n  line-height: 18px;\n  padding: 15px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/body/projects/jasperhilvenbe/jasperhilvenbe.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-lg-4 col-md-6 col-sm-12 col-xs-12\">\n  <figure class=\"effect\">\n    <iframe src=\"https://dry-shore-6764.herokuapp.com/\" alt=\"Three.js website\"></iframe>\n\n    <figcaption>\n      <h3>Three.js website</h3>\n      <p>My previous personal website, uses Three.js to render</p>\n      <p><strong>Tags:</strong> <br>Three.js</p>\n      <a href=\"https://dry-shore-6764.herokuapp.com/\" target=\"https://dry-shore-6764.herokuapp.com/\">View more</a>\n      <span class=\"icon\">\n\t\t\t\t\t<span class=\"glyphicon glyphicon-new-window\"></span>\n\t\t\t\t</span>\n    </figcaption>\n  </figure>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/body/projects/jasperhilvenbe/jasperhilvenbe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Jasperhilvenbe; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var Jasperhilvenbe = (function () {
    function Jasperhilvenbe() {
    }
    Jasperhilvenbe.prototype.ngOnInit = function () {
    };
    Jasperhilvenbe.prototype.printProps = function () {
    };
    Jasperhilvenbe.prototype.ngAfterContentInit = function () {
    };
    return Jasperhilvenbe;
}());
Jasperhilvenbe = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'jasperhilvenbeProject',
        template: __webpack_require__("../../../../../src/app/body/projects/jasperhilvenbe/jasperhilvenbe.component.html"),
        styles: [__webpack_require__("../../../../../src/app/body/projects/jasperhilvenbe/jasperhilvenbe.component.css")]
    }),
    __metadata("design:paramtypes", [])
], Jasperhilvenbe);

//# sourceMappingURL=jasperhilvenbe.js.map

/***/ }),

/***/ "../../../../../src/app/body/projects/projects.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#portfolio {\n    width: 100%;\n    min-height: 100vh;\n    margin: 0;\n    padding: 0;\n}\n\n.subtitle {\n    text-align: center;\n    color: #727878;\n}\n\n#app-projest-list.row > div {\n        margin-bottom: 30px;\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/body/projects/projects.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"portfolio\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div width=\"100%\" class=\"col col-xs-12\">\n        <h2 class=\"title\">Portfolio</h2>\n        <p class=\"subtitle\">{{ projectInfo['myProjects'] }}</p>\n        <hr>\n        <div id=\"app-projest-list\" >\n        <app-project-item *ngFor=\"let project of projectInfo.projects\" \n            [projectTitle]= \"project.projectTitle\" \n            [projectImageLink]= \"project.projectImageLink\"\n            [projectDescription]= \"project.projectDescription\"\n            [skillsList]= \"project.skillsList\"\n            [projectLink]= \"project.projectLink\"></app-project-item>\n            <jasperhilvenbeProject></jasperhilvenbeProject>\n          </div>\n        \n      </div>\n      <div class=\"text-center project-referal\">\n        <p>See my other coding project on GitHub.</p>\n        <a [href]=\"userInfo['githubAccount']\" class=\"btn btn-primary\" target=\"_blank\">See project on Github</a>\n      </div>\n    </div>\n   \n    \n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/body/projects/projects.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__page_service__ = __webpack_require__("../../../../../src/app/page.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_projects_service__ = __webpack_require__("../../../../../src/app/body/projects/user-projects.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectsComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var ProjectsComponent = (function () {
    function ProjectsComponent(userProjectsService, pageService, userService) {
        this.userProjectsService = userProjectsService;
        this.pageService = pageService;
        this.userService = userService;
    }
    ProjectsComponent.prototype.ngOnInit = function () {
        this.projectInfo = this.userProjectsService.getProjectsInfo();
        this.pageInfo = this.pageService.getPageInfo();
        this.userInfo = this.userService.getUserInfo();
        document.getElementById("projects").style.backgroundColor = this.pageInfo['projectsBackgroundColor'];
    };
    return ProjectsComponent;
}());
ProjectsComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-projects',
        template: __webpack_require__("../../../../../src/app/body/projects/projects.component.html"),
        styles: [__webpack_require__("../../../../../src/app/body/projects/projects.component.css")],
        providers: [__WEBPACK_IMPORTED_MODULE_2__user_projects_service__["a" /* UserProjectsService */]]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__user_projects_service__["a" /* UserProjectsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__user_projects_service__["a" /* UserProjectsService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__page_service__["a" /* PageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__page_service__["a" /* PageService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__user_service__["a" /* UserService */]) === "function" && _c || Object])
], ProjectsComponent);

var _a, _b, _c;
//# sourceMappingURL=projects.component.js.map

/***/ }),

/***/ "../../../../../src/app/body/projects/projest-item/project-item.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "figure {\n  position: relative;\n  overflow: hidden;\n  margin: 3%;\n}\n\nfigure img {\n  width: 400px;\n  height: 300px;\n  opacity: 1;\n}\n\nfigure figcaption {\n  padding: 20px 30px;\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  height: 100%;\n  width: 100%;\n  background-color: #22A39F;\n  opacity: 0.9;\n  display: none;\n}\n\nfigure:hover figcaption {\n  display: block;\n}\n\nfigure:hover img {\n  opacity: 0.5;\n}\n\nfigure p > strong {\n  width: 60px;\n  display: inline-block;\n  margin: 0px;\n}\n\nfigure h3 {\n  color: #FFF;\n  font-weight: 600;\n  margin-bottom: 5px;\n}\n\nfigure p > strong {\n  width: 60px;\n  display: inline-block;\n  margin: 0px;\n}\n\nfigure a {\n  z-index: 1000;\n  text-indent: 200%;\n  white-space: nowrap;\n  font-size: 0;\n  opacity: 0;\n  position: absolute;\n  top: 0px;\n  left: 0px;\n  height: 100%;\n  width: 100%;\n}\n\nfigure .icon {\n  background: #22A39F;\n  position: absolute;\n  top: 0px;\n  right: 0px;\n  width: 48px;\n  height: 48px;\n}\n\nfigure .icon span {\n  font-size: 18px;\n  line-height: 18px;\n  padding: 15px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/body/projects/projest-item/project-item.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"col-lg-4 col-md-6 col-sm-12 col-xs-12\">\n  <figure class=\"effect\">\n    <img src={{projectImageLink}} alt=\"{{projectTitle}}\">\n\n    <figcaption>\n      <h3>{{projectTitle}}</h3>\n      <p>{{projectDescription}}</p>\n      <p><strong>Tags:</strong> <br>{{skillsList}}</p>\n      <a href=\"{{projectLink}}\" target=\"_blank\">View more</a>\n      <span class=\"icon\">\n\t\t\t\t\t<span class=\"glyphicon glyphicon-new-window\"></span>\n\t\t\t\t</span>\n    </figcaption>\n  </figure>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/body/projects/projest-item/project-item.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProjectItemComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ProjectItemComponent = (function () {
    function ProjectItemComponent() {
    }
    ProjectItemComponent.prototype.ngOnInit = function () {
        console.log("Initiated project item");
        this.printProps();
    };
    ProjectItemComponent.prototype.printProps = function () {
        console.log(this.projectTitle);
        console.log(this.projectImageLink);
        console.log(this.projectDescription);
        console.log(this.skillsList);
        console.log(this.projectLink);
    };
    ProjectItemComponent.prototype.ngAfterContentInit = function () {
        console.log("after content init");
        this.printProps();
    };
    return ProjectItemComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", String)
], ProjectItemComponent.prototype, "projectTitle", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", String)
], ProjectItemComponent.prototype, "projectImageLink", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", String)
], ProjectItemComponent.prototype, "projectDescription", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", String)
], ProjectItemComponent.prototype, "skillsList", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["O" /* Input */])(),
    __metadata("design:type", String)
], ProjectItemComponent.prototype, "projectLink", void 0);
ProjectItemComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-project-item',
        template: __webpack_require__("../../../../../src/app/body/projects/projest-item/project-item.component.html"),
        styles: [__webpack_require__("../../../../../src/app/body/projects/projest-item/project-item.component.css")]
    }),
    __metadata("design:paramtypes", [])
], ProjectItemComponent);

//# sourceMappingURL=project-item.component.js.map

/***/ }),

/***/ "../../../../../src/app/body/projects/user-projects.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserProjectsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var UserProjectsService = (function () {
    function UserProjectsService() {
        this.projectsInfo = {
            myProjects: "",
            projects: [
                {
                    projectTitle: "Alfred Desktop @ Xenit",
                    projectImageLink: "https://xenit.eu/wp-content/uploads/2017/08/XeniT_AlfredDesktop_Mock61.png",
                    projectDescription: "Worked together with a team on an C# Desktop client.",
                    skillsList: "C#",
                    projectLink: "https://xenit.eu/alfred-desktop-for-alfresco/"
                },
                {
                    projectTitle: "LMS Test lab @ Siemens",
                    projectImageLink: "http://img.minixiazai.com/uploadfile/2016/1216/20161216040754404.jpg",
                    projectDescription: "Together with a full product team, helped building this C++ software product.",
                    skillsList: "C++",
                    projectLink: "https://www.plm.automation.siemens.com/global/en/products/simulation-test/testing.html",
                },
                {
                    projectTitle: "Alfred Finder @ Xenit",
                    projectImageLink: "https://xenit.eu/wp-content/uploads/2017/08/XeniT_AlfredDesktop_Mock6-compressor.png",
                    projectDescription: "Lead developer on a Frontend product at Xenit. Multiple versions for multiple customers are made. Some build with React, some build with angular.",
                    skillsList: "Typescript, Angular, React",
                    projectLink: "https://xenit.eu/searching-documents-alfresco-finder/"
                },
                {
                    projectTitle: "Picoblaze assembler",
                    projectImageLink: "https://cdn.lynda.com/course/512724/512724-636207639069178763-16x9.jpg",
                    projectDescription: "Wrote a picoblaze assembler. (C# code that converts Xilinx Picoblaze assembly instructions to its hexadecimal counterpart.)",
                    skillsList: "C#",
                    projectLink: "https://github.com/Jasper-Hilven/Picoblaze-assembler"
                },
                {
                    projectTitle: "Startup prototype",
                    projectImageLink: "https://udemy-images.udemy.com/course/750x422/15044_8989_7.jpg",
                    projectDescription: "Wrote a frontend and backend prototype for a startup experiment.",
                    skillsList: "Javascript, node.js, express",
                    projectLink: "https://github.com/Jasper-Hilven/Typescript-Frontend-Backend"
                },
                {
                    projectTitle: "FPGA segway Robot brain unit ",
                    projectImageLink: "http://www.tekkna.it/open2b/var/catalog/b/18163.jpg",
                    projectDescription: "Implemented brain unit and sound system on FPGA for segway robot with 3 Picoblazes",
                    skillsList: "Xilinx Spartan, Picoblaze",
                    projectLink: "https://www.ebay.com/itm/Xilinx-FPGA-Spartan-6-XC6SLX9-Core-Board-/111640406811?rmvSB=true"
                },
                {
                    projectTitle: "Alfred API @ Xenit",
                    projectImageLink: "http://crbtech.in/Java-Training/images/java_api.jpg",
                    projectDescription: "Extended and further automized a Spring Java Rest API. Used docker-compose, OSGI and Gradle to spin up full automatic integration tests.",
                    skillsList: "Java, OSGI, Gradle, Spring, Rest, Swagger, Alfresco",
                    projectLink: "http://www.xenit.eu"
                },
                {
                    projectTitle: "Alfresco software engineering and support @ Xenit",
                    projectImageLink: "https://pbs.twimg.com/profile_images/260667897/wiki-alf_400x400.png",
                    projectDescription: "Provide software engineering services and support for customers at Xenit",
                    skillsList: "Alfresco, Java",
                    projectLink: "https://www.alfresco.com/"
                },
                {
                    projectTitle: "Particle simulator for testing of Load balancing algorithms",
                    projectImageLink: "https://www.particleincell.com/wp-content/uploads/2015/12/phi_den2.png",
                    projectDescription: "Build a particle-in-cell simulator to test my own load balancing algorithms. for HPC.",
                    skillsList: "C#",
                    projectLink: "https://github.com/Jasper-Hilven/particle-simulator"
                },
                {
                    projectTitle: "IEEE robot competition",
                    projectImageLink: "https://s-media-cache-ak0.pinimg.com/564x/01/11/5e/01115e91947fdbb00beb488281e00c78.jpg",
                    projectDescription: "Built an arduino robot that won the IEEE Leuven robot competition 2011.",
                    skillsList: "Arduino, lego",
                    projectLink: "http://www.ieee-sb-leuven.be/"
                },
                {
                    projectTitle: "Dinner in the dark",
                    projectImageLink: "http://ludumdare.com/compo/wp-content/compo2/479518/57665-shot0-1440447479.png",
                    projectDescription: "A first person game in which you are the monster . Made together with 3 friends in a weekend.",
                    skillsList: "Unity",
                    projectLink: "http://ludumdare.com/compo/ludum-dare-33/?action=preview&uid=57665"
                },
                {
                    projectTitle: "Jungle Jumper",
                    projectImageLink: "https://images.crazygames.com/junglerunner.png?auto=format,compress&ch=DPR&q=190&cs=strip&w=300",
                    projectDescription: "A side scroller game published on crazygames.",
                    skillsList: "Typescript, Pixi.js",
                    projectLink: "https://www.crazygames.com/game/jungle-runner"
                },
                {
                    projectTitle: "OV",
                    projectImageLink: "https://img.itch.zone/aW1hZ2UvMTM0NzU5Lzc4MDYxOS5wbmc=/original/cD4UoQ.png",
                    projectDescription: "Published a java 3D game with more than 70 levels.",
                    skillsList: "Java, JMonkey",
                    projectLink: "https://jhilven.itch.io/ov"
                },
                {
                    projectTitle: "TI Pokemon",
                    projectImageLink: "https://github.com/Jasper-Hilven/pokemon-TI/blob/master/movies/first-walk.gif?raw=true",
                    projectDescription: "A pokemon game made during high school on a TI84+ calculator",
                    skillsList: "TI Basic",
                    projectLink: "https://github.com/Jasper-Hilven/pokemon-TI/",
                },
            ]
        };
    }
    UserProjectsService.prototype.getProjectsInfo = function () {
        return this.projectsInfo;
    };
    return UserProjectsService;
}());
UserProjectsService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])()
], UserProjectsService);

//# sourceMappingURL=user-projects.service.js.map

/***/ }),

/***/ "../../../../../src/app/body/sidebar/sidebar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#sidebar {\n  border: 0;\n  background-color: #222222;\n  margin: 0;\n}\n#sidebar-links{\n  position:-webkit-sticky;\n  position:sticky;\n}\n/*\n.navbar .navbar-nav {\n  float: none;\n}\n\n.navbar-nav {\n  margin: 0px;\n}\n*/\n\n.navbar .nav > li>a {\n color:white;\n font-size:x-large;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/body/sidebar/sidebar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\" id=\"sidebar\" role=\"navigation\">\n  <!-- Brand and toggle get grouped for better mobile display -->\n<!--\n  <div id=\"sidebar-links\" class=\"navbar-header\">\n    <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-ex1-collapse\">\n      <span class=\"sr-only\">Toggle navigation</span>\n      <span class=\"icon-bar\"></span>\n      <span class=\"icon-bar\"></span>\n      <span class=\"icon-bar\"></span>\n    </button>\n  </div>\n-->\n  <!-- Collect the nav links, forms, and other content for toggling -->\n  <!--<div  class=\"navbar-collapse navbar-ex1-collapse collapse\"> -->\n      <div  class=\"\"> \n    <ul class=\"nav navbar-nav\">\n      <li class=\"\" *ngIf=\"pageInfo['showProfile']\"><a href=\"#profile\">Profile</a></li>\n      <li class=\"\" *ngIf=\"pageInfo['showPortfolio']\"><a href=\"#portfolio\">Portfolio</a></li>\n      <li class=\"\" *ngIf=\"pageInfo['showExperiences']\"><a href=\"#experiences\">Career</a></li>\n      <li class=\"\" *ngIf=\"pageInfo['showAbilities']\"><a href=\"#abilities\">Abilities</a></li>\n      <li class=\"\" *ngIf=\"pageInfo['showAwards']\"><a href=\"#awards\">Awards</a></li>\n      <li class=\"\" *ngIf=\"pageInfo['showContact']\"><a href=\"#contact\">Contact</a></li>\n    </ul>\n  </div><!-- /.navbar-collapse -->\n</nav>\n"

/***/ }),

/***/ "../../../../../src/app/body/sidebar/sidebar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__page_service__ = __webpack_require__("../../../../../src/app/page.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SidebarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SidebarComponent = (function () {
    function SidebarComponent(pageService) {
        this.pageService = pageService;
    }
    SidebarComponent.prototype.ngOnInit = function () {
        this.pageInfo = this.pageService.getPageInfo();
    };
    return SidebarComponent;
}());
SidebarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-sidebar',
        template: __webpack_require__("../../../../../src/app/body/sidebar/sidebar.component.html"),
        styles: [__webpack_require__("../../../../../src/app/body/sidebar/sidebar.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__page_service__["a" /* PageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__page_service__["a" /* PageService */]) === "function" && _a || Object])
], SidebarComponent);

var _a;
//# sourceMappingURL=sidebar.component.js.map

/***/ }),

/***/ "../../../../../src/app/header/header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#header {\n  width: 100%;\n  min-height: 100%;\n  height: 100%;\n  color: white;\n  margin: 0;\n  padding: 0;\n  display: -ms-flexbox;\n  display: flex;\n  -ms-flex-align: center;\n      align-items: center;\n  font-size: 300%;\n  position: relative;\n  text-shadow: 3px 0 0 #888, -3px 0 0 #888, 0 3px 0 #888, 0 -3px 0 #888, 2px 2px #888, -2px -2px 0 #888, 2px -2px 0 #888, -2px 2px 0 #888;\n  background-size: 100%;\n  background-size: cover;\n  background-color:rgba(255,255,255,0.2);\n  -ms-filter: \"progid:DXImageTransform.Microsoft.AlphaImageLoader(src='images/background.jpg', sizingMethod='scale')\";\n  margin-bottom: 0px;\n  padding: 0px;\n}\n\n.scroll-down {\n  height: 80px;\n  width: 110px;\n  display: block;\n  position: absolute;\n  bottom: 0px;\n  right: 5%;\n  background-color: #222222;\n  text-align: center;\n  z-index: 6;\n}\n\n.scroll-down .glyphicon {\n  color: #FFFFFF;\n  font-size: 30px;\n  padding-right: 2px;\n  padding-top: 20px;\n  animation-name: wiggle;\n  animation-duration: 1.2s;\n  animation-timing-function: linear;\n  animation-iteration-count: infinite;\n  animation-direction: normal;\n}\n\n.title {\n  padding-bottom: 20px;\n  border-bottom: 1px solid #FFFFFF;\n  border-bottom-color: rgba(255,255,255,0.35);\n  display: inline-block;\n}\n\n.subtitle {\n  font-size: 28px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"header\" class=\"jumbotron\">\n  <div class=\"container text-center pagination-centered\">\n    <div class=\"row\">\n      <div class=\"col col-xs-12 col-sm-10 col-sm-push-1 col-md-8 col-md-push-2\">\n        <h1 class=\"title\">{{ userInfo['name'] }}</h1>\n        <p class=\"subtitle\">{{ pageInfo['resumeTitle'] }}</p>\n        <!--<div class=\"text-center project-referal\">\n          <p>This code is available on GitHub.</p>\n          <a href=\"https://github.com/Wrinth/personal_profile_angular4\" class=\"btn btn-primary\" target=\"_blank\">See project on Github</a>\n        </div>-->\n      </div>\n    </div>\n  </div>\n  <a href=\"#sidebar\" class=\"scroll-down\">\n    <span class=\"glyphicon glyphicon-chevron-down\"></span>\n  </a>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__user_service__ = __webpack_require__("../../../../../src/app/user.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__page_service__ = __webpack_require__("../../../../../src/app/page.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeaderComponent = (function () {
    function HeaderComponent(userService, pageService) {
        this.userService = userService;
        this.pageService = pageService;
    }
    HeaderComponent.prototype.ngOnInit = function () {
        this.userInfo = this.userService.getUserInfo();
        this.pageInfo = this.pageService.getPageInfo();
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_0" /* Component */])({
        selector: 'app-header',
        template: __webpack_require__("../../../../../src/app/header/header.component.html"),
        styles: [__webpack_require__("../../../../../src/app/header/header.component.css")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__user_service__["a" /* UserService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__page_service__["a" /* PageService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__page_service__["a" /* PageService */]) === "function" && _b || Object])
], HeaderComponent);

var _a, _b;
//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ "../../../../../src/app/page.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PageService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/*

.color-primary-0 { color: #00A8A2 }	// Main Primary color
.color-primary-1 { color: #49BEBA }
.color-primary-2 { color: #25AEA9 }
.color-primary-3 { color: #00817C }
.color-primary-4 { color: #006561 }

.color-secondary-1-0 { color: #FFA900 }	// Main Secondary color (1) /
.color-secondary-1-1 { color: #FFCA62 }
.color-secondary-1-2 { color: #FFBB37 }
.color-secondary-1-3 { color: #D48C00 }
.color-secondary-1-4 { color: #A66E00 }

.color-secondary-2-0 { color: #FD0006 }	// Main Secondary color (2) /
.color-secondary-2-1 { color: #FE6266 }
.color-secondary-2-2 { color: #FD363B }
.color-secondary-2-3 { color: #D20005 }
.color-secondary-2-4 { color: #A50004 }



.rgba-primary-0 { color: rgba(  0,168,162,1) }	/ Main Primary color /
.rgba-primary-1 { color: rgba( 73,190,186,1) }
.rgba-primary-2 { color: rgba( 37,174,169,1) }
.rgba-primary-3 { color: rgba(  0,129,124,1) }
.rgba-primary-4 { color: rgba(  0,101, 97,1) }

.rgba-secondary-1-0 { color: rgba(255,169,  0,1) }	// Main Secondary color (1) //
.rgba-secondary-1-1 { color: rgba(255,202, 98,1) }
.rgba-secondary-1-2 { color: rgba(255,187, 55,1) }
.rgba-secondary-1-3 { color: rgba(212,140,  0,1) }
.rgba-secondary-1-4 { color: rgba(166,110,  0,1) }

.rgba-secondary-2-0 { color: rgba(253,  0,  6,1) }	// Main Secondary color (2) //
.rgba-secondary-2-1 { color: rgba(254, 98,102,1) }
.rgba-secondary-2-2 { color: rgba(253, 54, 59,1) }
.rgba-secondary-2-3 { color: rgba(210,  0,  5,1) }
.rgba-secondary-2-4 { color: rgba(165,  0,  4,1) }
*/
var PageService = (function () {
    function PageService() {
        this.pageInfo = {
            backgroundImage: "http://www.schoolsplus.co.uk/wp-content/uploads/2017/06/technology.jpg",
            showHeader: true,
            showProfile: true,
            profileBackgroundColor: "white",
            showExperiences: true,
            experiencesBackgroundColor: "white",
            showAbilities: true,
            abilitiesBackgroundColor: "white",
            showPortfolio: true,
            projectsBackgroundColor: "white",
            showAwards: false,
            awardsBackgroundColor: "white",
            showContact: true,
            contactBackgroundColor: "rgb(66, 73, 73)",
            resumeTitle: "Software development engineer",
            projectLink: "https://github.com/Wrinth/personal_profile_angular4"
        };
    }
    PageService.prototype.getPageInfo = function () {
        return this.pageInfo;
    };
    return PageService;
}());
PageService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])()
], PageService);

//# sourceMappingURL=page.service.js.map

/***/ }),

/***/ "../../../../../src/app/user.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var UserService = (function () {
    function UserService() {
        this.userInfo = {
            name: "Jasper Hilven",
            jobTitle: "Software development engineer",
            aboutMe: "I make software. I love helping people by solving their problems. You can find me working on frontend, backend, low level software or on game development. Besides making software, you can find me playing the guitar, a little bit of piano, visiting friends or running.",
            profilePicture: "https://media.licdn.com/dms/image/C4E03AQE1s_BcGZo2wg/profile-displayphoto-shrink_200_200/0?e=1530349200&v=beta&t=BMSQHynu2V_YL5u-9f0CTv5ZBLt8hgYk55aQGluq7zg",
            location: "Belgium",
            email: "jasperhilven@gmail.com",
            devpostAccount: "",
            facebookAccount: "",
            githubAccount: "https://github.com/jasper-hilven",
            googleAccount: "",
            linkedinAccount: "",
            twitterAccount: "",
            otherAccount: ""
        };
    }
    UserService.prototype.getUserInfo = function () {
        return this.userInfo;
    };
    return UserService;
}());
UserService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])()
], UserService);

//# sourceMappingURL=user.service.js.map

/***/ }),

/***/ "../../../../../src/assets/sm_icon_sprite.png":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAACABAMAAACYSHYpAAAAA3NCSVQICAjb4U/gAAAAMFBMVEX///////////////////////////////////////////////////////////////9Or7hAAAAAEHRSTlMAESIzRFVmd4iZqrvM3e7/dpUBFQAAAAlwSFlzAAALEgAACxIB0t1+/AAAAB90RVh0U29mdHdhcmUATWFjcm9tZWRpYSBGaXJld29ya3MgOLVo0ngAAAAWdEVYdENyZWF0aW9uIFRpbWUAMDkvMDUvMTM8iTJ6AAAC2ElEQVRIic3VS2gTQRgH8P9uUvsUtvhArJZV8dGDUgTBg7Yp1JuQgl700BZEwYup9KZIg4qH9pBc9CapoidbEkEqFKGpBRGJhqqoiHax6kULe7BtUpOdcWZnZpNtQS2l6EDC5rczO4/v2y+osGlZIx3opL72FbYfCOiitiJ4eyZJbQFJ/nvBQMVIzAWnikMaQHDKhQLOMehgoHeKHtDZIIP3sMQzQtAHpkwG1XKWV+x6He9RK6B4GrLVCSCGgkY5JK6gS0JedUlIIJfFb92WUJQdarzNxUuPEFDs9UbI7b/mcFidB/l4l0+zxlbgdPP7wbHSiRWvb99xIruCU18SyiXBXpIOq5UfTv8iGEfEDz3Y6oco9vnhi5ZcNMvUn6Ydr+/K1zc82bY+KyGFcA5r2Mm3SEgjnHdDt9YH/c3ucjyopNMqgwTU0lmVYwJqGNStJqTQmmPww5t2JpN1Mi9okX3+9/wgj/zrKLRpuz9k7BJE3RjsHFPwU75hwayET+otbZDA37iNwzNXgDEBrFAELHdNMnIhXgVGTrLIVQjoAVoLrP8skHUhxaBoYO9LoM+Fz2CD37VpIkEEsMHkAfgNDpPs6ih73P1ywK6bNK+ADdkchZ4gbhFiMAdE5nm9MRF0YQEIExMRB9BstxiY2ELfnOU9NUsWJZ0tkXSrHvxW5dAzXogCsiix7cGQVQji7GULq2Dflodoe9F/eOzAKQRiZelAbJKxKP23+eGb9m/h6fH2C3YZ3OF73VOCHDYMjF4VK3Chu9Ji3xMVCvJIONcufX9uJCVMVrG46qHGeFhCT6tjbLqFrrQqBs2xWcTmkZiU5YIY2bRO5zQ7LcEx7DgrFkE62KLAilbRwWoa6pPPMJKpIDFrcpoloSMyjf2aZnp/J6m6gqkNGQGV/HQuYH0bpu+zHhCziV9O1Hqbe4yD90Z7ccgDcp6fR1PZAZEb7UcuLvOQfwfLz49f2QUIHlTOROEAAAAASUVORK5CYII="

/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[1]);
//# sourceMappingURL=main.bundle.js.map