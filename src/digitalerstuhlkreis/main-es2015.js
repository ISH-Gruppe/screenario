(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/grilborzer/Code/digitaler-stuhlkreis/src/main.ts */"zUnb");


/***/ }),

/***/ "2tb1":
/*!**************************************************!*\
  !*** ./src/app/impressum/impressum.component.ts ***!
  \**************************************************/
/*! exports provided: ImpressumComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ImpressumComponent", function() { return ImpressumComponent; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _type_effect_headline_heading_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../type-effect-headline/heading.component */ "o/Iz");



class ImpressumComponent {
    constructor() {
        this.show = false;
    }
    ngOnInit() {
        setTimeout(() => {
            this.show = true;
        }, 700);
    }
    toggle() {
        this.show = !this.show;
    }
}
ImpressumComponent.ɵfac = function ImpressumComponent_Factory(t) { return new (t || ImpressumComponent)(); };
ImpressumComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: ImpressumComponent, selectors: [["app-impressum"]], decls: 58, vars: 2, consts: [[1, "page-container"], [3, "heading0"], [2, "width", "100%"], [1, "parent"], [1, "div1"], [1, "div2"], ["href", "https://ish-gruppe.de/", "target", "_blank"], [2, "text-align", "justify"], [1, "div3"], [1, "contributor-name"], [1, "contributor-contact"], [1, "div4"]], template: function ImpressumComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-heading", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " Anbieter ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](8, " Institut f\u00FCr Schulentwicklung und Hochschuldidaktik GmbH ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, " Dennis Sawatzki ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](12, " Schadowstra\u00DFe 34 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](13, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](14, " 44799 Bochum ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](15, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, " Kontakt ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Website: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](21, " https://ish-gruppe.de/");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](22, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, " E-Mail: office@ish-gruppe.de ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "p", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](25, " Telefon: 02 34 / 54 57 41 11 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](26, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, " Technische Umsetzung ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, " S\u00F6ren Stra\u00DFmann ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, " E-Mail: soeren.strassmann@coachingspace.net ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, " Sergej Grilborzer ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, " E-Mail: sergej@grilborzer.de ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](38, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](39, " Fachliche Umsetzung ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](40, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](41, " Dennis Sawatzki ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](42, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](43, " E-Mail: sawatzki@ish-gruppe.de ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, " Marcus Kuhn ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, " E-Mail: kuhn@ish-gruppe.de ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, " Englische \u00DCbersetzung ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, " Annika Franzke ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "p", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, " Gustav-Heinemann-Gesamtschule\u00A0Alsdorf ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](54, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](55, " Spanische \u00DCbersetzung ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](56, "p", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](57, " Carmen Gonzalez Guti\u00E9rez ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("heading0", "Impressum");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@showHide", ctx.show ? "show" : "hide");
    } }, directives: [_type_effect_headline_heading_component__WEBPACK_IMPORTED_MODULE_2__["HeadingComponent"]], styles: ["@media screen and (max-width: 576px) {\n  .about-section[_ngcontent-%COMP%] {\n    flex-wrap: wrap;\n  }\n}\n.color-primary[_ngcontent-%COMP%] {\n  color: #f26a38;\n}\n.button[_ngcontent-%COMP%] {\n  text-decoration: none;\n  display: inline-block;\n  transition: 0.35s;\n  border-style: solid;\n  border-width: 1px;\n  border-color: #f26a38;\n  padding: 7px 25px 7px 25px;\n  color: #ffffff;\n}\n.button[_ngcontent-%COMP%]:hover {\n  text-decoration: none;\n  background-color: #ee9575;\n  color: black;\n  border-style: solid;\n}\n.span-primary[_ngcontent-%COMP%] {\n  border: #f26a38;\n  border-style: solid;\n  border-width: 1px;\n  color: #f26a38;\n  padding: 3px 5px 3px 5px;\n  font-size: small;\n}\nh3[_ngcontent-%COMP%] {\n  font-weight: 200;\n  margin-bottom: 10px;\n}\nh5[_ngcontent-%COMP%], h2[_ngcontent-%COMP%] {\n  letter-spacing: 2px;\n}\nli[_ngcontent-%COMP%] {\n  color: #a7a7a7;\n  font-size: small;\n  letter-spacing: 2px;\n}\np[_ngcontent-%COMP%] {\n  line-height: 20px;\n  margin-top: 8px;\n  margin-bottom: 0;\n}\n.contributor-name[_ngcontent-%COMP%] {\n  font-weight: bold;\n  margin-bottom: 0;\n}\n.contributor-contact[_ngcontent-%COMP%] {\n  margin-bottom: 10px;\n}\n.parent[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-areas: \"Anbieter\" \"Kontakt\" \"TechnischeUmsetzung\" \"FachlicheUmsetzung\";\n  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\n  grid-template-rows: auto;\n  grid-column-gap: 10rem;\n  grid-row-gap: 1.5rem;\n}\n.div1[_ngcontent-%COMP%] {\n  grid-area: Anbieter;\n}\n.div2[_ngcontent-%COMP%] {\n  grid-area: Kontakt;\n}\n.div3[_ngcontent-%COMP%] {\n  grid-area: TechnischeUmsetzung;\n}\n.div4[_ngcontent-%COMP%] {\n  grid-area: FachlicheUmsetzung;\n}\n@media (min-width: 1024px) {\n  .parent[_ngcontent-%COMP%] {\n    grid-template-areas: \"Anbieter TechnischeUmsetzung\" \"Kontakt FachlicheUmsetzung\";\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2ltcHJlc3N1bS5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uLy4uL2NvbG9ycy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0U7SUFDRSxlQUFBO0VBREY7QUFDRjtBQUlBO0VBQ0UsY0NUUTtBRE9WO0FBS0E7RUFDRSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFFQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EscUJDbkJRO0VEc0JSLDBCQUFBO0VBQ0EsY0N0QlU7QURpQlo7QUFRQTtFQUNFLHFCQUFBO0VBQ0EseUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUFMRjtBQVFBO0VBQ0UsZUNsQ1E7RURtQ1IsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGNDckNRO0VEc0NSLHdCQUFBO0VBQ0EsZ0JBQUE7QUFMRjtBQVFBO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtBQUxGO0FBUUE7O0VBRUUsbUJBQUE7QUFMRjtBQVFBO0VBQ0UsY0NuRE07RURvRE4sZ0JBQUE7RUFDQSxtQkFBQTtBQUxGO0FBUUE7RUFDRSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtBQUxGO0FBUUE7RUFDRSxpQkFBQTtFQUNBLGdCQUFBO0FBTEY7QUFRQTtFQUNFLG1CQUFBO0FBTEY7QUFRQTtFQUNFLGFBQUE7RUFDQSxvRkFBQTtFQUtBLDREQUFBO0VBQ0Esd0JBQUE7RUFFQSxzQkFBQTtFQUNBLG9CQUFBO0FBVkY7QUFhQTtFQUNFLG1CQUFBO0FBVkY7QUFhQTtFQUNFLGtCQUFBO0FBVkY7QUFhQTtFQUNFLDhCQUFBO0FBVkY7QUFhQTtFQUNFLDZCQUFBO0FBVkY7QUFhQTtFQUNFO0lBQ0ksZ0ZBQUE7RUFWSjtBQUNGIiwiZmlsZSI6ImltcHJlc3N1bS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgXCIuLi8uLi9jb2xvcnMuc2Nzc1wiO1xuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1NzZweCkge1xuICAuYWJvdXQtc2VjdGlvbiB7XG4gICAgZmxleC13cmFwOiB3cmFwO1xuICB9XG59XG5cbi5jb2xvci1wcmltYXJ5IHtcbiAgY29sb3I6ICRwcmltYXJ5O1xufVxuXG4uYnV0dG9uIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIHRyYW5zaXRpb246IDAuMzVzO1xuICAvLyBiYWNrZ3JvdW5kLWNvbG9yOiAkcHJpbWFyeTtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gIGJvcmRlci1jb2xvcjogJHByaW1hcnk7XG5cbiAgLy8gYm9yZGVyOiAwZW07XG4gIHBhZGRpbmc6IDdweCAyNXB4IDdweCAyNXB4O1xuICBjb2xvcjogJHNlY29uZGFyeTtcbn1cblxuLmJ1dHRvbjpob3ZlciB7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2VlOTU3NTtcbiAgY29sb3I6IGJsYWNrO1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xufVxuXG4uc3Bhbi1wcmltYXJ5IHtcbiAgYm9yZGVyOiAkcHJpbWFyeTtcbiAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gIGNvbG9yOiAkcHJpbWFyeTtcbiAgcGFkZGluZzogM3B4IDVweCAzcHggNXB4O1xuICBmb250LXNpemU6IHNtYWxsO1xufVxuXG5oMyB7XG4gIGZvbnQtd2VpZ2h0OiAyMDA7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbmg1LFxuaDIge1xuICBsZXR0ZXItc3BhY2luZzogMnB4O1xufVxuXG5saSB7XG4gIGNvbG9yOiAkdGhpcmQ7XG4gIGZvbnQtc2l6ZTogc21hbGw7XG4gIGxldHRlci1zcGFjaW5nOiAycHg7XG59XG5cbnAge1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgbWFyZ2luLXRvcDogOHB4O1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG4uY29udHJpYnV0b3ItbmFtZSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBtYXJnaW4tYm90dG9tOiAwO1xufVxuXG4uY29udHJpYnV0b3ItY29udGFjdCB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5wYXJlbnQge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWFyZWFzOiAgXCJBbmJpZXRlclwiXG4gICAgICAgICAgICAgICAgICAgICAgICBcIktvbnRha3RcIlxuICAgICAgICAgICAgICAgICAgICAgICAgXCJUZWNobmlzY2hlVW1zZXR6dW5nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiRmFjaGxpY2hlVW1zZXR6dW5nXCI7XG5cbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by1maWxsLCBtaW5tYXgoMjAwcHgsIDFmcikpO1xuICBncmlkLXRlbXBsYXRlLXJvd3M6IGF1dG87XG4gIFxuICBncmlkLWNvbHVtbi1nYXA6IDEwcmVtO1xuICBncmlkLXJvdy1nYXA6IDEuNXJlbTtcbn1cblxuLmRpdjEge1xuICBncmlkLWFyZWE6IEFuYmlldGVyO1xufVxuXG4uZGl2MiB7XG4gIGdyaWQtYXJlYTogS29udGFrdDtcbn1cblxuLmRpdjMge1xuICBncmlkLWFyZWE6IFRlY2huaXNjaGVVbXNldHp1bmc7XG59XG5cbi5kaXY0IHtcbiAgZ3JpZC1hcmVhOiBGYWNobGljaGVVbXNldHp1bmc7XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiAxMDI0cHgpIHtcbiAgLnBhcmVudCB7XG4gICAgICBncmlkLXRlbXBsYXRlLWFyZWFzOiAgXCJBbmJpZXRlciBUZWNobmlzY2hlVW1zZXR6dW5nXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIktvbnRha3QgRmFjaGxpY2hlVW1zZXR6dW5nXCI7XG4gIH1cbn0iLCIkcHJpbWFyeTogI2YyNmEzODtcbiRzZWNvbmRhcnk6ICNmZmZmZmY7XG4kdGhpcmQ6ICNhN2E3YTc7XG4kc3VjY2VzczogIzRlZGY5OTtcbiRpbmZvOiAjMTdhMmI4O1xuJHdhcm5pbmc6ICNmM2ExNWU7XG4kZGFuZ2VyOiAjZjA1MDZlOyJdfQ== */"], data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('showHide', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('show', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                    opacity: 100
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('hide', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                    opacity: 0
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('show <=> hide', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s')
                ]),
            ])
        ] } });


/***/ }),

/***/ "6gGL":
/*!****************************************************!*\
  !*** ./src/app/questionnaire/questions-spanish.ts ***!
  \****************************************************/
/*! exports provided: questionnaireES */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "questionnaireES", function() { return questionnaireES; });
const questionnaireES = {
    titleRandomGenerator: "Generador aleatorio",
    subtitleRandomGenerator: "Para preguntas personalizadas, etc.",
    buttonTextRandomPick: "Nueva selección",
    buttonTextNewQuestion: "Nueva pregunta",
    toggleSwitchTextRepeatQuestions: "Repetir preguntas",
    toggleSwitchTextRepeatUserEntries: "Repetir entradas",
    checkin: {
        name: "Checkin",
        questions: [
            "¿Qué me ha pasado esta semana realmente especial?",
            "¿Qué me satisface de mi trabajo?",
            "¿Por qué mis colegas/ alumnado/ TN se pueden sentir bien/comodos trabajando conmigo?",
            "¿Cuándo y sobre qué me reí con ganas por última vez?",
            "¿Qué pensaban sobre mí mis profesores y que dirían hoy?",
            "¿Quién fue topado/golpeado por mi última bola de nieve?",
            "¿En que ocasiones me muestro supersticioso?",
            "¿A quién prefiero: A Epi o a Blas?",
            "¿Cómo se dice correctamente: Die Nutella o Das Nutella?",
            "Algo que siempre me hace reír.",
            "¿Qué animal me gusta más? ¿En qué nos parecemos?",
            "¿En qué me gustaría mejorar?",
            "¿Qué aparece en mi eterna lista de cosas que hacer?",
            "¿Cuáles son mis planes para el próximo fin de semana?",
            "¿Playa o montaña?",
            "¿Cuál es mi ciudad favorita?",
            "¿Alguna vez he robado algo?",
            "Si tuviera 1000 Euros para gastar solo hoy, haría ...",
            "Eso lo aprendí sobre mí mismo el pasado año:",
            "Con esos tres alimentos me podría alimentar siempre.",
            "¿A qué diría hoy sí?",
            "¿Por qué me siento hoy agradecido?",
            "Lo que me encanta de mi profesión es:",
            "Hoy haré ...",
            "¿Qué me gustaría probar en la vida?",
            "¿Qué debería pasar hoy, para qué el día fuera perfecto?",
            "Un regalo muy bonito, que alguna vez he recibido....",
            "¿Qué he dejado atrás este año?",
            "Mi filosofía de vida:",
            "¿Quién o qué capta hoy mi atención?",
            "Si mi humor de hoy fuera una canción o una película, sería ...",
            "¿Qué cualidades prefiero en mis amistades?",
            "¿Sobre qué me alegro especialmente en estos momentos?",
            "¿Qué me fascina?",
            "¿Cuál fue hoy mi primer pensamiento?",
            "¿De qué me siento orgulloso?",
            "¿Qué ha sido, hasta el momento, lo mejor del día?",
            "Mi afición preferida...",
            "¿A quién encontré por casualidad en el extranjero?",
            "¿Cómo podríamos hoy planear perfectamente nuestro día juntos?",
            "¿Por qué estoy aquí hoy?",
            "¿Qué superpoder me gustaría tener?",
            "¿Cuál fue el primer CD que me compré?",
            "¿Perro o gato?",
            "¿Cuál es, ahora mismo, mi comida favorita?",
            "¿Cuál es, ahora mismo, mi prenda de ropa favorita?",
            "¿Qué plato cociné la última vez?",
            "Si fuera un animal, preferiría ser...",
            "Mi anti-hobby es...",
            "Haz un cumplido a alguien de la reunión.",
            "¿Cuál es el último libro que he leído?",
            "Una recomendación de una película o de una serie.",
            "¿Qué estaría haciendo ahora, si no estuviera aquí?",
            "¿Dónde estaría ahora de vacaciones?",
            "Un gran viaje aún por planificar ...",
            "¿Tengo un modelo o ídolo?",
            "¿Qué es lo que nadie de esta reunión conoce de mí?",
            "Una información que, en esta reunión, solo es palicable a mí …",
            "Nunca he ...",
            "Mi estación del año favorita:",
            "¿Cuál fue el peor trabajo que he tenido?",
            "¿Qué me gustaría aprender hoy?",
            "¿Cuál de mis rasgos de personalidad ya estaba presente en mi infancia?",
            "Algo con lo que me gustaría, por fín, terminar.",
            "Algo que me gustaría, por fin, empezar.",
            "¿Qué palabra deberíamos usar con más o menos frecuencia?",
            "¿Qué me saca de quicio?",
            "Una de mis debilidades ...",
            "Una de mis fortalezas ...",
            "¿Qué buen consejo he recibido alguna vez?",
            "¿Qué buen consejo he dado alguna vez?",
            "¿Qué objeto rescataría de mi casa en llamas?",
            "¿Qué tres objetos llevaría conmigo a una isla desierta?",
            "Mi color favorito ...",
            "¿Cuál es el lugar más bonito en los alrededores de donde vivo?",
            "Esa era mi pasión de niño ...",
            "¿De qué color me siento hoy y por qué?",
            "Mi acontecimiento más importante de la semana ...",
            "¿Cuál es mi figura geométrica favorita y por qué?",
            "Si no estuviera ahora mismo aquí, ¿dónde estaría entonces?",
            "¿Qué me proporciona energía?",
            "Si pudiera aprender un idioma durante la noche, ¿cuál escogería?",
            "¿Quién haría el papel protagonista en la película sobre mi vida?",
            "¿Cómo se podría titular mi autobiografía?",
            "¿Cuándo fue la última vez que hice algo por primera vez en mi vida?",
            "¿Qué sé hacer por encima de la media?",
            "¿Con qué conocidas personalidades me cambiaría por un día?",
            "¿Qué trabajo me gustaría probar durante una semana?",
            "¿Qué tres valores son importantes para mí?",
            "¿Bajo qué condiciones aprendo mejor?",
            "Un héroe de mi infancia ...",
            "Si pudiera eximir de cumplir una ley que toda la humanidad debe cumplir ...",
            "¿Cómo estoy hoy aquí? ¿Hasta que punto es algo típico o atípico en mí?",
            "¿Cuáles han sido los tres pilares más importantes de mi vida?",
            "¿Cuál es el rincón preferido de mi vivienda?",
            "¿Qué deporte prefiero ver que practicar?",
            "¿Qué género musical me gusta especialmente y cuál no?",
            "Eso me genera quebraderos de cabeza:",
            "Algo que me ayuda a relajarme y a recuperarme.",
            "Optimista o pesimista: ¿Cómo me definiría a mí mismo?"
        ]
    },
    kennenlernen: {
        name: "Conocerse",
        questions: [
            "¿En qué lugar creciste?",
            "¿Irías solo a un concierto? ¿Qué es lo que nunca harías solo? y ¿por qué?",
            "¿Tienes un libro favorito? En caso de que sí: ¿Por qué te gusta tanto?",
            "¿Tienes hermanos?",
            "Vacaciones: ¿En el mar o en la montaña?",
            "¿Qué aficiones tenías antes que ya no realizas ahora?",
            "¿Qué creencias tuviste, que luego las tuvieras por falsas?",
            "Si ganaras un millón de euros, ¿qué harías?",
            "¿Conoces la historia que hay detrás de tu nombre?",
            "Si fueras un animal, ¿cuál serías y por qué?",
            "¿Qué tres cosas llevarías a una isla desierta y por qué?",
            "¿Qué te ha pasado recientemente, que te haya hecho inmensamente feliz?",
            "Si pudieras elegir otra vez, ¿qué profesión te gustaría aprender?",
            "¿Tocas un instrumento o te gustaría tocar alguno?",
            "¿Cuál era en tu niñez la profesión de tus sueños?",
            "¿Sin qué comida no podrías vivir?",
            "¿Cuál es tu sabor de helado favorito?",
            "¿Te gusta cocinar?",
            "¿Cuál es tu rincón favorito de la casa?",
            "¿Cuál es tu afición favorita?",
            "¿Cuál es tu color favorito? ¿Has comprado algo alguna vez solo porque era de ese color?",
            "¿Tienes algún modelo o ídolo?",
            "¿Qué tipo de música prefieres escuchar?",
            "¿Cuál es la primera característica que tus amigos usarían para describirte?"
        ]
    },
    entwederOder: {
        name: "Una de dos",
        questions: [
            "Champán o zumo",
            "Cerveza o vino",
            "Vino blanco o tinto",
            "Mar o montaña",
            "Apple o Windows/ Mac o Microsoft",
            "Gato o perro",
            "Ciudad o pueblo",
            "Coche o tren",
            "Hotel o residencia de vacaciones",
            "Móvil o teléfono inteligente",
            "Verdura o fruta",
            "Discoteca o bar",
            "Cocinar o pedido a domicilio",
            "Pizza o pasta",
            "Esquí o snowboard",
            "Cine o teatro",
            "Suspense o comedia",
            "Heavy o clásica",
            "Camping o Hotel",
            "Bosque de coníferas o caducifolio",
            "Sol o nieve",
            "Senderismo o caminar",
            "Fresas o cerezas",
            "Salchichas o queso",
            "Desayuno dulce o salado",
            "Pan o cereales",
            "Música o silencio",
            "París o Londres",
            "Té o café",
            "Sherlock Holmes o Dr. Watson",
            "Película del oeste o de la Edad Media",
            "Beatles o Stones",
            "Rammstein o la Kelly Family",
            "Rosas o lilas",
            "Hoguera o chimenea",
            "Columpio o balancín",
            "Tren o bus",
            "El señor de los anillos o Harry Potter",
            "Mosquito o zancudo",
            "Hola o Adiós",
            "Alt o Kolsch",
            "Pan blanco o negro",
            "Semmel o Brötchen",
            "Fasching o Karneval",
            "BigBlueButton o Zoom",
            "Mayonesa o Kétchup",
            "Bicicleta eléctrica o bicicleta",
            "Palomitas o nachos",
            "Chocolate o patatas",
            "Bailar o cantar",
            "Mantequilla o margarina",
            "Búho o Alondra",
            "Carta o e-mail",
            "Helado en tarrina o en cucurucho",
            "Teléfono móvil o fijo",
            "Gimnasio o correr",
            "Helau o Alaaf"
        ]
    },
    zielsetzung: {
        name: "Objetivos",
        questions: [
            "¿Cuál es el siguiente paso?",
            "¿Qué te atrae de la meta?",
            "¿Cómo se hace la meta más llevadera?",
            "¿Qué tiene que suceder para despejar el camino a la meta?",
            "¿Cómo se podría describir esa meta en una sola frase?",
            "¿Qué puedo hacer para no alcanzar la meta?",
            "En una escala del 0 (para nada) al 10 (muy fuerte): ¿cuánto valoro alcanzar esa meta?",
            "En una escala del 0 (para nada) al 10 (muy fuerte): ¿cómo valoro que puedo alcanzar la meta con los medios de los que dispongo actualmente?",
            "¿Quién se alegraría si alcanzara la meta?",
            "¿Quién se alegraría si no alcanzara la meta?",
            "¿Hay metas competitivas que me gustarían alcanzar también?",
            "¿Cuánto tiempo creo que tardaré en lograr mi objetivo?",
            "¿Hay escalas en la meta, como por ejemplo en las notas de clase? ¿Cómo sería obtener un sobresaliente o un muy deficiente?",
            "¿Quién se daría cuenta de que la meta ha sido alcanzada?",
            "¿Hay una planificación temporal para alcanzar el objetivo?",
            "¿Cómo de realista es el objetivo?",
            "¿Qué ayuda externa necesito para llegar al objetivo?",
            "¿Cómo puedo examinar que el propósito ha sido alcanzado?",
            "¿Es un objetivo a corto, medio o largo plazo?",
            "¿Es una meta inamovible o flexible?",
            "¿Desde cuándo persigo ese objetivo? ¿Cómo llegué a él?",
            "¿Alguna vez había perseguido un propósito parecido? ¿Con qué resultados?",
            "¿Es un objetivo privado, profesional o algo de los dos?",
            "¿Quién o qué me ha animado a perseguir mi objetivo?",
            "¿Hay alguien que persiga este objetivo con aún mayor empeño que yo?",
            "¿Se trata de un objetivo intrínseco o extrínseco?",
            "¿Conozco a alguien que haya alcanzado una meta parecida antes? ¿Cómo lo logró?",
            "¿Qué competencias o cualidades poseo que me permitirán conseguir mi propósito?",
            "Si tuviera que describir mi objetivo a través de una metáfora o un cuadro, ¿qué imagen me viene a la cabeza?",
            "¿Qué me resulta más importante: la meta o el camino para conseguirla?",
            "¿De quién necesito apoyo para alcanzar la meta?",
            "¿Qué recursos se necesitan para alcanzar el objetivo?"
        ]
    },
    teamarbeit: {
        name: "Trabajo en equipo",
        questions: [
            "En nuestros puestos de trabajo necesitamos indispensablemente ...",
            "El último año ha cambiado lo siguiente:",
            "En el futuro tomaremos decisiones, en las cuales ...",
            "Este año como equipo definitivamente deberíamos ...",
            "Llego los lunes a trabajar con una sonrisa, si ...",
            "Para encontrarme perfectamente cómodo en el equipo, aún necesito ...",
            "Dejaría el equipo, si ...",
            "En un año, cuando vuelva la vista atrás, me sentiré orgulloso de nuestro trabajo en equipo, porque ...",
            "En el futuro me gustaría adoptar en el equipo el papel de ...",
            "Lo que deberíamos dejar definitivamente es ...",
            "Colaboraré en la creación de una buena atmósfera laboral mediante ...",
            "Las siguientes perspectivas aún faltan en nuestro equipo actual:",
            "Para poder resolver bien mi trabajo, necesito ...",
            "Deberiamos terminar con ...",
            "Necesitamos más ...",
            "Lo que valoro especialmente de mi equipo es ...",
            "Un trabajo en equipo exitoso está esencialmente influido por ..."
        ]
    },
    kontroversen: {
        name: "Polémicas",
        questions: [
            "¿Debería estar restringido legalmente el uso rutinario de Netflix y otras plataformas similares?",
            "¿Deberían estar prohibidas las motos eléctricas en las ciudades?",
            "¿Deberían ser grabadas todas las clases universitarias?",
            "¿Es necesaria la jornada laboral de 6 horas?",
            "¿Es necesario un salario base sin condiciones?",
            "¿Debería estar prohíbido fumar en espacios públicos?",
            "¿Es necesario un año obligatorio destinado a servicios sociales?",
            "¿Es necesario que el tiempo libre sea un derecho?",
            "¿Es necesario que la velocidad máxima permitida en la autopista sea de 130 Km/h?",
            "¿Es necesario que sea obligatorio el uso de casco en la bici?",
            "¿Debería estar prohíbida en el centro de las ciudades la mendicidad?",
            "¿Deberían ser suprimidos los deberes para casa?",
            "¿Debería el sueldo en la politica estar calculado según los ingresos medios de la ciudadanía?",
            "¿Deberían ser anónimas por ley las solicitudes de trabajo?",
            "¿Es necesario el uniforme de escuela?",
            "¿Es necesario una tasa de alcoholemia del 0% en nuestras carreteras?",
            "¿Deberían estar prohíbidos los concursos de belleza, así como la elección de misses?"
        ]
    },
    gruppenreflexion: {
        name: "Reflexión grupal",
        questions: [
            "¿Cómo he vivido nuestra experiencia de trabajo en grupo?",
            "¿Pudo contribuir cada miembro del grupo?",
            "¿Cómo de satisfecho estoy con los resultados?",
            "¿Hemos hecho un reparto de tareas? ¿Cómo ha funcionado?",
            "¿Qué ha salido bien?",
            "¿Qué podríamos mejorar la próxima vez?",
            "¿Qué deberíamos mantener como grupo?",
            "¿Hubo algo que me molestara?",
            "¿Qué me sorprendió?",
            "¿Qué nos resultó fácil?",
            "¿Con qué tuvimos dificultades?",
            "¿En qué parte podríamos aún necesitar consejo?",
            "¿Qué hubiera pensado un observador externo de nuestro trabajo?",
            "¿Cómo nos hemos coordinado y puesto de acuerdo?",
            "¿Qué clima de trabajo me he encontrado durante el trabajo en equipo?"
        ]
    },
    checkout: {
        name: "Checkout",
        questions: [
            "¿Qué es lo siguiente que me propongo?",
            "¿Qué conclusiones saco de todo esto hoy?",
            "Algo que hoy me ha hecho feliz:",
            "Algo que me llevo conmigo:",
            "Algo que me ha sorprendido:",
            "Algo que me ha inspirado:",
            "Algo que me gustaría repetir:",
            "¿Con qué pensamientos termino hoy el día?",
            "Algo que me ha sorprendido para bien:",
            "Algo que me ha impresionado/infundido respeto:",
            "¿Cuáles serán mis próximos tres pasos?",
            "¿Qué pude hoy observar de mí mismo?",
            "¿Qué frase quiero aún quitar de mi cabeza?",
            "Un cumplido para una persona, una frase inteligente o un acto memorable:",
            "¿Cómo me encontraba hoy al inicio y cómo me siento ahora?",
            "Tras el día de hoy pienso que ...",
            "¿En qué he puesto hoy mi foco principalmente?",
            "Si mi estado de ánimo ahora mismo fuera un animal, sería ...",
            "¿Qué fue especialmente ventajoso para mí hoy?",
            "Uno de los momentos destacables del día ha sido ...",
            "¿Qué dejo aquí hoy?",
            "¿Qué me gustaría probar o poner en práctica después?",
            "¿De qué necesito más?",
            "¿De qué necesito menos?",
            "¿Qué haría distinto la próxima vez?",
            "Hoy he estado/sido ...",
            "¿Qué problema he podido solucionar hoy?",
            "¿Cómo de satisfecho estoy hoy conmigo mismo?",
            "¿Cómo me recompensaré por mi participación de hoy?",
            "¿Cuál ha sido hoy el error más valioso?",
            "¿Qué palabra tenemos que usar menos la próxima vez?",
            "¿A qué quisiera dedicar aún la mayor parte de mi tiempo hoy?",
            "Hoy me he sentido especialmente bien, cuando ...",
            "¿Qué es lo que aún me frustra?",
            "¿Qué he olvidado hoy?",
            "¿Dónde veo todavía un posible potencial de desarrollo?",
            "¿Sobre qué me podría haber reído hoy?",
            "¿Qué aportación de otro participante del grupo ha sido especialmente valiosa para mí?",
            "¿Cuándo he salido hoy de mi zona de confort?",
            "¿Qué me gustaría decirle al grupo aún?",
            "¿Qué me resultó fácil hoy?",
            "Para la próxima vez desearía ...",
            "¿Qué podríamos haber hecho hoy con una hora extra?",
            "¿Cuál ha sido hoy mi reto más importante?",
            "¿Sobre qué seguiré hoy reflexionando?",
            "Tras el día de hoy me siento preparado para ...",
            "¿Qué se ha aclarado para mí?",
            "¿Qué cambiaré inmediatamente?",
            "¿Qué voy a seguir manteniendo?",
            "¿Qué propósito me llevo hoy conmigo?",
            "¿A quién le contaré sobre el día de hoy?",
            "¿Qué tres adjetivos me vienen a la cabeza sobre hoy?",
            "¿Qué veo ahora con mayor claridad?",
            "¿De qué debería/ querría/ necesitaría ocuparme aún?",
            "¿Cuál es mi principal aprendizaje de hoy?",
            "¿De qué me voy a acordar tras el día de hoy?"
        ]
    }
};


/***/ }),

/***/ "84zG":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class AboutComponent {
    constructor() { }
    ngOnInit() {
    }
}
AboutComponent.ɵfac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(); };
AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutComponent, selectors: [["about"]], decls: 35, vars: 0, consts: [[1, "title"], [1, "d-flex", "flex-column"], [1, "brand-column", "d-flex", "flex-row", "mb-2"], ["href", "https://ish-gruppe.de", "target", "_blank", 1, "anchor-image-wrapper"], ["src", "/assets/ish-gruppe-logo.jpg"], [1, "d-flex", "flex-wrap"], ["href", "https://ish-gruppe.de", "target", "_blank"], [1, "brand-column", "d-flex", "mb-2"], ["href", "https://super.vision", "target", "_blank", 1, "anchor-image-wrapper"], ["src", "/assets/supervision.jpg", 1, "d-flex"], ["href", "https://super.vision", "target", "_blank", 2, "display", "block"], ["href", "https://coachingspace.net", "target", "_blank", 1, "anchor-image-wrapper"], ["src", "/assets/cs-new-logo.jpg", 1, "d-flex"], ["href", "https://coachingspace.net", "target", "_blank", 2, "display", "block"], ["href", "https://www.methogo.de", "target", "_blank", 1, "anchor-image-wrapper"], ["src", "/assets/methogo-logo.jpeg", 1, "d-flex"], ["href", "https://www.methogo.de", "target", "_blank", 2, "width", "100%"]], template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "h1", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "\u00DCber uns");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Der digitale Stuhlkreis ist ein kostenfreies Angebot der ISH Gruppe. Sind Sie interessiert an Fortbildung und Beratung f\u00FCr Schulen, Unis und (hoch)schulische Akteure? Dann besuchen Sie unsere Webseite: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "https://ish-gruppe.de");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, ". ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Sie sind Berater:in, Coach oder supervisorisch t\u00E4tig und m\u00F6chten sich in Sachen Online-Coaching weiterqualifizieren? Dann schauen Sie nach unseren Weiterbildungen und Zusatzqualifizierungen unter ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, "https://super.vision");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, ". ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](21, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " Als Kooperationspartner von coachingspace weisen wir an dieser Stelle gerne auch auf das virtuelle Beratungszimmer und die darin befindlichen digitalen L\u00F6sungen analoger Coaching- und Beratungsmethoden hin: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "a", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "https://coachingspace.net");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, ". ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " Methoden und Mikrofortbildungen f\u00FCr Klassenraum & Co. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "a", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "https://www.methogo.de.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".title[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n\n.anchor-image-wrapper[_ngcontent-%COMP%] {\n  width: 4rem;\n  height: 100%;\n  margin-right: 1rem;\n}\n\nimg[_ngcontent-%COMP%] {\n  width: 4rem;\n  height: 100%;\n  margin-right: 1rem;\n}\n\n.mb-2[_ngcontent-%COMP%] {\n  margin-bottom: 2rem;\n}\n\n@media screen and (max-width: 500px) {\n  .brand-column[_ngcontent-%COMP%] {\n    flex-flow: column;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2Fib3V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksbUJBQUE7QUFDSjs7QUFFQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBSUEsa0JBQUE7QUFGSjs7QUFLQTtFQUNJLFdBQUE7RUFDQSxZQUFBO0VBSUEsa0JBQUE7QUFMSjs7QUFRQTtFQUNJLG1CQUFBO0FBTEo7O0FBU0E7RUFDSTtJQUNJLGlCQUFBO0VBTk47QUFDRiIsImZpbGUiOiJhYm91dC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi50aXRsZSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbn1cblxuLmFuY2hvci1pbWFnZS13cmFwcGVyIHtcbiAgICB3aWR0aDogNHJlbTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgLy8gd2lkdGg6IDEwMCU7XG4gICAgLy8gaGVpZ2h0OiAzcmVtO1xuXG4gICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xufVxuXG5pbWcge1xuICAgIHdpZHRoOiA0cmVtO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICAvLyB3aWR0aDogMTAwJTtcbiAgICAvLyBoZWlnaHQ6IDNyZW07XG5cbiAgICBtYXJnaW4tcmlnaHQ6IDFyZW07XG59XG5cbi5tYi0yIHtcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xufVxuXG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDUwMHB4KSB7XG4gICAgLmJyYW5kLWNvbHVtbiB7XG4gICAgICAgIGZsZXgtZmxvdzogY29sdW1uO1xuICAgIH1cbn0iXX0= */"] });


/***/ }),

/***/ "9vUh":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _services_persistence_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/persistence.service */ "lxVI");
/* harmony import */ var _questionnaire_questions_german__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../questionnaire/questions-german */ "Di4M");
/* harmony import */ var _questionnaire_questions_english__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../questionnaire/questions-english */ "dyHY");
/* harmony import */ var _questionnaire_questions_spanish__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../questionnaire/questions-spanish */ "6gGL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ngx_pretty_checkbox__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-pretty-checkbox */ "JU0p");










function HomeComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("@showHide", ctx_r0.show ? "show" : "hide")("@languageChange", ctx_r0.selectedLanguage);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"]("> ", ctx_r0.selectedQuestionSet.name, "");
} }
function HomeComponent_div_2_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "h1", null, 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("@showHide", ctx_r1.show ? "show" : "hide")("@languageChange", ctx_r1.selectedLanguage);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.selectedQuestionSet.questions[ctx_r1.selectedIndex]);
} }
function HomeComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "button", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function HomeComponent_div_4_Template_button_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r4.nextQuestion(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx_r2.questionnaire.buttonTextNewQuestion, " ");
} }
class HomeComponent {
    constructor(activatedRoute, router, persistenceService) {
        this.activatedRoute = activatedRoute;
        this.router = router;
        this.persistenceService = persistenceService;
        this.heading0 = '';
        this.heading0Shown = '';
        this.show = true;
        this.startUpFadeIn = false;
        this.repeatQuestions = false;
        this.usedIndices = new Set();
        this.selectedLanguage = _services_persistence_service__WEBPACK_IMPORTED_MODULE_1__["SupportedLanguages"].GERMAN;
    }
    ngOnInit() {
        this.activatedRouteSubscription = this.activatedRoute.paramMap.subscribe((params) => {
            const questionType = params.get('type');
            this.usedIndices.clear();
            if (questionType) {
                this.questionType = questionType.toLowerCase();
                this.nextQuestion();
            }
            else {
                this.navigateToCheckin();
            }
        });
        this.repeatQuestionsSubscription = this.persistenceService.getRepeatQuestions().subscribe(value => this.repeatQuestions = value);
        this.languageSwitchSubscription = this.persistenceService.getSelectedLanguage().subscribe((language) => {
            this.selectedLanguage = language;
            switch (this.selectedLanguage) {
                case _services_persistence_service__WEBPACK_IMPORTED_MODULE_1__["SupportedLanguages"].GERMAN:
                    this.questionnaire = _questionnaire_questions_german__WEBPACK_IMPORTED_MODULE_2__["questionnaireDE"];
                    break;
                case _services_persistence_service__WEBPACK_IMPORTED_MODULE_1__["SupportedLanguages"].ENGLISH:
                    this.questionnaire = _questionnaire_questions_english__WEBPACK_IMPORTED_MODULE_3__["questionnaireEN"];
                    break;
                case _services_persistence_service__WEBPACK_IMPORTED_MODULE_1__["SupportedLanguages"].SPANISH:
                    this.questionnaire = _questionnaire_questions_spanish__WEBPACK_IMPORTED_MODULE_4__["questionnaireES"];
                    break;
                default:
                    this.questionnaire = _questionnaire_questions_german__WEBPACK_IMPORTED_MODULE_2__["questionnaireDE"];
                    break;
            }
            this.updateSelectedQuestionSetTranslation();
        });
    }
    ngAfterViewInit() {
        window.scrollTo(0, 0);
        setTimeout(() => {
            this.startUpFadeIn = true;
        }, 700);
    }
    updateRepeatQuestionIsAllowed(value) {
        this.repeatQuestions = value;
        this.persistenceService.setRepeatQuestions(value);
    }
    nextQuestion() {
        this.show = false;
        setTimeout(() => {
            this.updateSelectedQuestionSetTranslation();
            let newIndex = this.getRandomIndexForQuestions(this.selectedQuestionSet);
            // Save indices of questions that have been displayed if repeating questions are disallowed
            // Make all indices available again if all questions have been answered
            if (!this.repeatQuestions) {
                if (this.usedIndices.size === this.selectedQuestionSet.questions.length) {
                    this.usedIndices.clear();
                }
                while (this.usedIndices.has(newIndex)) {
                    newIndex = this.getRandomIndexForQuestions(this.selectedQuestionSet);
                    this.show = false;
                }
            }
            this.usedIndices.add(newIndex);
            this.selectedIndex = newIndex;
            const questionsLeft = this.selectedQuestionSet.questions.length - this.usedIndices.size;
            console.log("Questions left: ", questionsLeft);
            this.heading0Shown = this.heading0;
        }, 1500);
        setTimeout(() => {
            this.show = true;
        }, 1800);
    }
    updateSelectedQuestionSetTranslation() {
        switch (this.questionType) {
            case 'checkin':
                this.selectedQuestionSet = this.questionnaire.checkin;
                break;
            case 'kennenlernen':
                this.selectedQuestionSet = this.questionnaire.kennenlernen;
                break;
            case 'entweder_oder':
                this.selectedQuestionSet = this.questionnaire.entwederOder;
                break;
            case 'zielsetzung':
                this.selectedQuestionSet = this.questionnaire.zielsetzung;
                break;
            case 'teamarbeit':
                this.selectedQuestionSet = this.questionnaire.teamarbeit;
                break;
            case 'kontroversen':
                this.selectedQuestionSet = this.questionnaire.kontroversen;
                break;
            case 'gruppenreflexion':
                this.selectedQuestionSet = this.questionnaire.gruppenreflexion;
                break;
            case 'checkout':
                this.selectedQuestionSet = this.questionnaire.checkout;
                break;
            default:
                this.selectedQuestionSet = this.questionnaire.checkin;
                break;
        }
    }
    getRandomIndexForQuestions(questionSet) {
        return Math.round(Math.random() * (questionSet.questions.length - 1));
    }
    navigateToCheckin() {
        this.router.navigate(['checkin']);
    }
    ngOnDestroy() {
        this.repeatQuestionsSubscription.unsubscribe();
        this.activatedRouteSubscription.unsubscribe();
        this.languageSwitchSubscription.unsubscribe();
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_persistence_service__WEBPACK_IMPORTED_MODULE_1__["PersistenceService"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 7, vars: 6, consts: [[2, "min-height", "60vh", "display", "flex", "justify-content", "center", "flex-direction", "column"], ["id", "questionTypePrettyFormatted", 4, "ngIf"], ["style", "flex-grow: 1;", "class", "animated-text-big", 4, "ngIf"], [2, "display", "flex", "justify-content", "center", "align-items", "center", "margin-top", "-15px", "margin-bottom", "15px"], [4, "ngIf"], ["color", "primary", "isSwitch", "true", "stroke", "fill", 2, "display", "flex", "justify-content", "center", "margin-left", "1rem", "margin-top", "0.5rem", 3, "checked", "change"], ["id", "questionTypePrettyFormatted"], [1, "animated-text-big", 2, "flex-grow", "1"], ["heading0div", ""], [1, "button", "d-flex", 3, "click"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](1, HomeComponent_div_1_Template, 3, 3, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](2, HomeComponent_div_2_Template, 4, 3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](4, HomeComponent_div_4_Template, 3, 1, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "p-checkbox", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function HomeComponent_Template_p_checkbox_change_5_listener() { return ctx.updateRepeatQuestionIsAllowed(!ctx.repeatQuestions); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("@startUpFadeIn", ctx.startUpFadeIn ? "true" : "false");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.selectedQuestionSet);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.selectedQuestionSet);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.selectedQuestionSet);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("checked", ctx.repeatQuestions);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx.questionnaire.toggleSwitchTextRepeatQuestions, " ");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], ngx_pretty_checkbox__WEBPACK_IMPORTED_MODULE_8__["NgxPrettyCheckboxComponent"]], styles: [".button[_ngcontent-%COMP%] {\n  text-decoration: none;\n  display: inline-block;\n  transition: 0.35s;\n  background-color: transparent;\n  border-style: solid;\n  border-width: 1px;\n  border-color: #ffffff;\n  padding: 7px 25px 7px 25px;\n  color: #ffffff;\n  cursor: pointer;\n  border-radius: 0px;\n  outline: none;\n}\n\n.button[_ngcontent-%COMP%]:hover {\n  text-decoration: none;\n  background-color: #ffffff7c;\n  color: black;\n  border-style: solid;\n  border-width: 1px;\n  border-radius: 0px;\n}\n\n.button[_ngcontent-%COMP%]:active {\n  border-style: outset;\n  border-color: white;\n}\n\n.span-primary[_ngcontent-%COMP%] {\n  border: white;\n  border-style: solid;\n  border-width: 1px;\n  color: #f26a38;\n  padding: 3px 5px 3px 5px;\n  font-size: small;\n  border-radius: 0px;\n}\n\np[_ngcontent-%COMP%] {\n  color: #a7a7a7;\n}\n\nspan[_ngcontent-%COMP%] {\n  color: #a7a7a7;\n}\n\nh4[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  text-decoration: underline;\n  -webkit-text-decoration-color: #a7a7a7;\n          text-decoration-color: #a7a7a7;\n  letter-spacing: 2px;\n}\n\nh5[_ngcontent-%COMP%], h2[_ngcontent-%COMP%] {\n  letter-spacing: 2px;\n}\n\nli[_ngcontent-%COMP%] {\n  color: #a7a7a7;\n  font-size: small;\n  letter-spacing: 2px;\n}\n\n.animated-text-big[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  margin-bottom: 20px;\n  height: 100%;\n  align-items: center;\n}\n\n.animated-text-big[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  overflow: hidden;\n  margin: 0 auto;\n  letter-spacing: 2px;\n  text-align: center;\n}\n\nh1[_ngcontent-%COMP%] {\n  \n  font-size: 20px;\n  \n  \n  \n}\n\n@media (min-width: 768px) {\n  h1[_ngcontent-%COMP%] {\n    font-size: 28px;\n  }\n}\n\n@media (min-width: 992px) {\n  h1[_ngcontent-%COMP%] {\n    font-size: 38px;\n  }\n}\n\n@media (min-width: 1200px) {\n  h1[_ngcontent-%COMP%] {\n    font-size: 48px;\n  }\n}\n\n#questionTypePrettyFormatted[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  margin-bottom: -15px;\n}\n\n@media screen and (min-width: 937px) {\n  #questionTypePrettyFormatted[_ngcontent-%COMP%] {\n    display: none !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2hvbWUuY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi8uLi9jb2xvcnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQ1JRO0VEV1IsMEJBQUE7RUFDQSxjQ1pRO0VEYVIsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtBQUhKOztBQU1BO0VBQ0kscUJBQUE7RUFDQSwyQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFISjs7QUFNQTtFQUNJLG9CQUFBO0VBQ0EsbUJBQUE7QUFISjs7QUFPQTtFQUNJLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0N0Q007RUR1Q04sd0JBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FBSko7O0FBT0E7RUFDSSxjQzNDSTtBRHVDUjs7QUFPQTtFQUNJLGNDL0NJO0FEMkNSOztBQU9BO0VBQ0kseUJBQUE7RUFDQSwwQkFBQTtFQUNBLHNDQ3JESTtVRHFESiw4QkNyREk7RURzREosbUJBQUE7QUFKSjs7QUFPQTs7RUFFSSxtQkFBQTtBQUpKOztBQVFBO0VBQ0ksY0NoRUk7RURpRUosZ0JBQUE7RUFDQSxtQkFBQTtBQUxKOztBQVdBO0VBQ0ksYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUFSSjs7QUFXQTtFQUNJLGdCQUFBO0VBQ0EsY0FBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUFSSjs7QUFZQTtFQUNJLGtEQUFBO0VBQ0EsZUFBQTtFQUVBLDBDQUFBO0VBS0EsNENBQUE7RUFLQSxrREFBQTtBQWxCSjs7QUFTSTtFQUxKO0lBTVEsZUFBQTtFQU5OO0FBQ0Y7O0FBU0k7RUFWSjtJQVdRLGVBQUE7RUFOTjtBQUNGOztBQVNJO0VBZko7SUFnQlEsZUFBQTtFQU5OO0FBQ0Y7O0FBU0E7RUFDSSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQkFBQTtBQU5KOztBQVVBO0VBQ0k7SUFDSSx3QkFBQTtFQVBOO0FBQ0YiLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uL2NvbG9ycy5zY3NzJztcblxuLmJ1dHRvbiB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgICB0cmFuc2l0aW9uOiAwLjM1cztcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgIGJvcmRlci13aWR0aDogMXB4O1xuICAgIGJvcmRlci1jb2xvcjogJHNlY29uZGFyeTtcblxuICAgIC8vIGJvcmRlcjogMGVtO1xuICAgIHBhZGRpbmc6IDdweCAyNXB4IDdweCAyNXB4O1xuICAgIGNvbG9yOiAkc2Vjb25kYXJ5O1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBib3JkZXItcmFkaXVzOiAwcHg7XG4gICAgb3V0bGluZTogbm9uZTtcbn1cblxuLmJ1dHRvbjpob3ZlciB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY3YztcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICBib3JkZXItd2lkdGg6IDFweDtcbiAgICBib3JkZXItcmFkaXVzOiAwcHg7XG59XG5cbi5idXR0b246YWN0aXZlIHtcbiAgICBib3JkZXItc3R5bGU6IG91dHNldDtcbiAgICBib3JkZXItY29sb3I6IHdoaXRlO1xuXG59XG5cbi5zcGFuLXByaW1hcnkge1xuICAgIGJvcmRlcjogd2hpdGU7XG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICBib3JkZXItd2lkdGg6IDFweDtcbiAgICBjb2xvcjogJHByaW1hcnk7XG4gICAgcGFkZGluZzogM3B4IDVweCAzcHggNXB4O1xuICAgIGZvbnQtc2l6ZTogc21hbGw7XG4gICAgYm9yZGVyLXJhZGl1czogMHB4O1xufVxuXG5wIHtcbiAgICBjb2xvcjogJHRoaXJkO1xufVxuXG5zcGFuIHtcbiAgICBjb2xvcjogJHRoaXJkO1xufVxuXG5oNCB7XG4gICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcbiAgICB0ZXh0LWRlY29yYXRpb24tY29sb3I6ICR0aGlyZDtcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xufVxuXG5oNSxcbmgyIHtcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xufVxuXG5cbmxpIHtcbiAgICBjb2xvcjogJHRoaXJkO1xuICAgIGZvbnQtc2l6ZTogc21hbGw7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbn1cblxuLy8gIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXG4vLyAjIyMjIyMjIyMgQW5pbWF0aW9ucyAjIyMjIyMjIyNcbi8vICMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1xuLmFuaW1hdGVkLXRleHQtYmlnIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5cbi5hbmltYXRlZC10ZXh0LWJpZyBoMSB7XG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICBtYXJnaW46IDAgYXV0bztcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAvLyBtaW4taGVpZ2h0OiAzMHZoO1xufVxuXG5oMSB7XG4gICAgLyogRXh0cmEgc21hbGwgZGV2aWNlcyAocGhvbmVzLCBsZXNzIHRoYW4gNzY4cHgpICovXG4gICAgZm9udC1zaXplOiAyMHB4O1xuXG4gICAgLyogU21hbGwgZGV2aWNlcyAodGFibGV0cywgNzY4cHggYW5kIHVwKSAqL1xuICAgIEBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xuICAgICAgICBmb250LXNpemU6IDI4cHg7XG4gICAgfVxuXG4gICAgLyogTWVkaXVtIGRldmljZXMgKGRlc2t0b3BzLCA5OTJweCBhbmQgdXApICovXG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDk5MnB4KSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMzhweDtcbiAgICB9XG5cbiAgICAvKiBMYXJnZSBkZXZpY2VzIChsYXJnZSBkZXNrdG9wcywgMTIwMHB4IGFuZCB1cCkgKi9cbiAgICBAbWVkaWEgKG1pbi13aWR0aDogMTIwMHB4KSB7XG4gICAgICAgIGZvbnQtc2l6ZTogNDhweDtcbiAgICB9XG59XG5cbiNxdWVzdGlvblR5cGVQcmV0dHlGb3JtYXR0ZWQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogLTE1cHg7XG59XG5cbi8vIDkzNnB4IGlzIHRoZSBtaW5pbXVtIHJlcXVpcmVkIHZpZXdwb3J0IHRvIGRpc3BsYXkgZXZlcnl0aGluZyBpbiBzbWFsbCBzaXplXG5AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOiA5MzdweCkge1xuICAgICNxdWVzdGlvblR5cGVQcmV0dHlGb3JtYXR0ZWQge1xuICAgICAgICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG4gICAgfVxufVxuIiwiJHByaW1hcnk6ICNmMjZhMzg7XG4kc2Vjb25kYXJ5OiAjZmZmZmZmO1xuJHRoaXJkOiAjYTdhN2E3O1xuJHN1Y2Nlc3M6ICM0ZWRmOTk7XG4kaW5mbzogIzE3YTJiODtcbiR3YXJuaW5nOiAjZjNhMTVlO1xuJGRhbmdlcjogI2YwNTA2ZTsiXX0= */"], data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('showHide', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('show', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                    opacity: 100
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('hide', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                    opacity: 0
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('show <=> hide', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s')
                ]),
            ]),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('startUpFadeIn', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('true', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                    opacity: 100
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('false', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                    opacity: 0
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('true <=> false', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s')
                ]),
            ]),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('languageChange', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('void => *', []),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => void', []),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => *', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(2000, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ offset: 0.0, opacity: 0 }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ offset: 1.0, opacity: 100 }),
                    ])),
                ]),
            ]),
        ] } });


/***/ }),

/***/ "AytR":
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
const environment = {
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

/***/ "Di4M":
/*!***************************************************!*\
  !*** ./src/app/questionnaire/questions-german.ts ***!
  \***************************************************/
/*! exports provided: questionnaireDE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "questionnaireDE", function() { return questionnaireDE; });
const questionnaireDE = {
    titleRandomGenerator: "Zufallsgenerator",
    subtitleRandomGenerator: "Für eigene Fragen etc.",
    buttonTextRandomPick: "Neue Auswahl",
    buttonTextNewQuestion: "Neue Frage",
    toggleSwitchTextRepeatQuestions: "Fragen wiederholen",
    toggleSwitchTextRepeatUserEntries: "Einträge wiederholen",
    checkin: {
        name: "Checkin",
        questions: [
            'Was ist mir besonders Schönes in dieser Woche passiert?',
            'Was macht mich an meinem Beruf glücklich?',
            'Warum können sich meine Kolleg:innen/Schüler:innen/TN glücklich schätzen, mit mir zu arbeiten?',
            'Wann habe ich das letzte Mal richtig laut gelacht und worüber?',
            'Was haben meine Lehrer:innen wohl damals über mich gedacht und was würden sie heute sagen?',
            'Wen hat mein letzter Schneeball getroffen?',
            'Wobei bin ich abergläubisch?',
            'Wen mochte ich lieber? Ernie oder Bert?',
            'Wie heißt es richtig: Die Nutella oder das Nutella?',
            'Darüber kann ich fast immer lächeln.',
            'Welches Tier mag ich besonders? Und worin ähneln wir uns?',
            'Worin würde ich mich gerne verbessern?',
            'Was steht auf meiner ewigen To-Do-Liste?',
            'Was habe ich mir für das kommende Wochenende vorgenommen?',
            'Strand oder Berge?',
            'Welches ist meine Lieblingsstadt?',
            'Habe ich schon mal was geklaut?',
            'Mit 1.000 €, die ich nur heute ausgeben darf, würde ich …',
            'Das habe ich im letzten Jahr über mich gelernt:',
            'Mit diesen drei Lebensmitteln könnte ich mich ewig ernähren:',
            'Zu was sage ich heute ja?',
            'Für was war ich heute schon dankbar?',
            'Was ich an meiner Tätigkeit liebe:',
            'Heute werde ich ...',
            'Was möchte ich in meinem Leben gerne mal ausprobieren?',
            'Was müsste heute passieren, damit der Tag perfekt wird?',
            'Ein sehr schönes Geschenk, welches ich mal bekommen habe …',
            'Was habe ich dieses Jahr hinter mir gelassen?',
            'Ein Lebensmotto von mir …',
            'Wer oder was bekommt heute meine Aufmerksamkeit?',
            'Wenn meine aktuelle Stimmung ein Lied oder ein Film wäre ...',
            'Welche Eigenschaften mag ich am liebsten an meinen Freund:innen?',
            'Worauf freue ich mich momentan besonders?',
            'Was fasziniert mich?',
            'Was war heute mein erster Gedanke?',
            'Auf was bin ich stolz?',
            'Was war das bislang Beste an diesem Tag?',
            'Mein Lieblingshobby …',
            'Wen habe ich mal zufällig im Ausland getroffen?',
            'Wie können wir heute den gemeinsamen Tag perfekt gestalten?',
            'Warum bin ich heute hier?',
            'Welche Superheldenkraft hätte ich gern?',
            'Welches war die erste CD, die ich mir gekauft habe?',
            'Hund oder Katze?',
            'Was ist mein derzeitiges Lieblingsessen?',
            'Was ist mein derzeitiges Lieblingskleidungsstück?',
            'Welches Gericht habe ich zuletzt gekocht?',
            'Wenn ich ein Tier wäre, dann am liebsten ein(e) ...',
            'Mein Anti-Hobby ist …',
            'Mach jemandem hier aus der Runde spontan ein Kompliment.',
            'Welches Buch habe ich zuletzt gelesen?',
            'Ein Film- oder Serientipp ...',
            'Was würde ich gerade tun, wenn ich nicht hier wäre?',
            'Wo wäre ich gerade gerne im Urlaub?',
            'Welche große Reise steht noch aus?',
            'Habe ich ein Vorbild oder Idol?',
            'Was weiß ganz sicher noch niemand in dieser Runde über mich?',
            'Eine Information, die nur auf mich in dieser Runde zutreffen dürfte …',
            'Ich habe noch niemals ...',
            'Meine Lieblingsjahreszeit …',
            'Was war der schlimmste Job, den ich jemals hatte?',
            'Was möchte ich heute lernen?',
            'Welche meiner heutigen Charaktereigenschaften war auch schon in meiner Kindheit stark ausgeprägt?',
            'Damit möchte ich endlich aufhören:',
            'Damit möchte ich endlich anfangen:',
            'Welches Wort sollten wir öfter und welches seltener verwenden?',
            'Was bringt mich zur Weißglut?',
            'Eine meiner Schwächen …',
            'Eine meiner Stärken …',
            'Was war ein guter Tipp, den ich mal bekommen habe?',
            'Was war ein guter Tipp, den ich mal gegeben habe?',
            'Welchen Gegenstand würde ich aus meinem brennenden Haus retten?',
            'Welche drei Gegenstände würde ich auf eine einsame Insel mitnehmen?',
            'Meine Lieblingsfarbe …',
            'Welches ist der schönste Ort nahe meines Wohnorts?',
            'Das war meine große Leidenschaft als Kind …',
            'Welche Farbe bin ich heute und warum?',
            'Mein bisheriges Highlight in dieser Woche:',
            'Was ist meine geometrische Lieblingsform und warum?',
            'Wenn ich nicht gerade hier wäre, wo wäre ich dann?',
            'Was gibt mir Energie?',
            'Wenn ich eine Fremdsprache über Nacht lernen könnte, welche würde ich mir aussuchen?',
            'Wer sollte in der Verfilmung meines Lebens die Hauptrolle spielen?',
            'Wie könnte der Titel meiner Autobiografie heißen?',
            'Wann habe ich zum letzten Mal etwas zum allerersten Mal getan?',
            'Was kann ich überdurchschnittlich gut?',
            'Mit welcher berühmten Persönlichkeit würde ich gerne mal einen Tag lang tauschen?',
            'Welchen Beruf würde ich gerne mal eine Woche lang ausprobieren?',
            'Welche drei Werte sind für mich besonders wichtig?',
            'Unter diesen Bedingungen kann ich am besten lernen:',
            'Ein Held meiner Kindheit …',
            'Wenn ich ein Gesetz erlassen dürfte, an das sich alle Menschen weltweit halten müssten …',
            'Wie bin ich heute hier - und inwiefern ist das typisch oder ungewöhnlich?',
            'Was waren drei wichtige Meilensteine in meiner Biografie?',
            'Welches ist mein Lieblingsort in meiner Wohnung?',
            'Welche Sportart schaue ich lieber, als dass ich sie selbst betreibe?',
            'Welches Musikgenre mag ich besonders und welches gar nicht?',
            'Das bereitet mir manchmal Kopfzerbrechen:',
            'Dabei kann ich besonders gut entspannen und mich erholen:',
            'Optimist oder Pessimist: Wie würde ich mich selbst beschreiben?'
        ]
    },
    kennenlernen: {
        name: "Kennenlernen",
        questions: [
            'In welchem Ort bist du aufgewachsen?',
            'Würdest du alleine auf ein Konzert gehen? Was würdest du niemals alleine tun und warum nicht?',
            'Hast du ein Lieblingsbuch? Falls ja: Warum gefällt es dir so gut?',
            'Hast du Geschwister?',
            'Urlaub: In die Berge oder lieber ans Meer? ',
            'Welche Hobbys hattest du früher, die du heute nicht mehr ausübst?',
            'Woran hast du mal geglaubt, was sich später als falsch herausgestellt hat?',
            'Wenn du eine Million Euro gewinnen würdest, was würdest du tun?',
            'Kennst du die Geschichte hinter deinem Namen?',
            'Wenn du ein Tier wärest, was wärest du dann? Und warum?',
            'Welche drei Dinge würdest du auf eine einsame Insel mitnehmen? ',
            'Was ist dir in letzter Zeit passiert, worüber du dich total gefreut hast?',
            'Wenn du nochmal wählen könntest, welchen Beruf würdest du erlernen?',
            'Spielst du ein Instrument oder würdest du gerne eines spielen?',
            'Was war als Kind dein Traumberuf? ',
            'Auf welches Essen würdest du niemals verzichten wollen?',
            'Welche Eissorte isst du am liebsten?',
            'Kochst du gerne?',
            'Welches ist dein Lieblingsplatz bei dir zuhause?',
            'Was ist dein Lieblingshobby?',
            'Welche ist deine Lieblingsfarbe? Und hast du schon mal etwas nur wegen dieser Farbe gekauft?',
            'Hast du ein Idol oder Vorbild?',
            'Welche Musikrichtung hörst du?',
            'Wenn dich ein guter Freund oder eine gute Freundin beschreiben soll, was würde er/sie als erstes sagen?'
        ]
    },
    entwederOder: {
        name: "Entweder oder",
        questions: [
            'Sekt oder Saft',
            'Bier oder Wein',
            'Rotwein oder Weißwein',
            'Berge oder Meer',
            'Mac oder Microsoft',
            'Katze oder Hund',
            'Stadt oder Land',
            'Auto oder Zug',
            'Ferienhaus oder Hotel',
            'Handy oder Smartphone',
            'Gemüse oder Obst',
            'Disco oder Club',
            'Kochen oder bestellen',
            'Pizza oder Pasta ',
            'Ski oder Snowboard',
            'Theater oder Kino',
            'Thriller oder Komödie',
            'Metal oder Klassik',
            'Camping oder Hotel',
            'Nadelwald oder Laubwald',
            'Schnee oder Sonne',
            'Wandern oder spazieren',
            'Erdbeere oder Kirsche',
            'Wurst oder Käse',
            'Süßes oder herzhaftes Frühstück',
            'Brot oder Müsli',
            'Musik oder Stille',
            'Paris oder London',
            'Kaffee oder Tee',
            'Holmes oder Watson',
            'Westernfilm oder Mittelalter-Epos',
            'Beatles oder Stones',
            'Rammstein oder Kelly Family',
            'Rosen oder Lilien',
            'Lagerfeuer oder Kamin',
            'Schaukel oder Wippe',
            'Zug oder Bus',
            'Herr der Ringe oder Harry Potter',
            'Mücke oder Schnake',
            'Moin oder Servus',
            'Alt oder Kölsch',
            'Weißbrot oder Schwarzbrot',
            'Semmel oder Brötchen',
            'Fasching oder Karneval',
            'BigBlueButton oder Zoom',
            'Ketchup oder Mayo',
            'Fahrrad oder E-Bike',
            'Popcorn oder Nachos',
            'Schokolade oder Chips',
            'Singen oder Tanzen',
            'Butter oder Margarine',
            'Frühaufsteher oder Nachteule',
            'E-Mail oder Brief',
            'Eis im Becher oder in der Waffel',
            'Handy oder Festnetz',
            'Joggen oder Fitnessstudio',
            'Helau oder Alaaf'
        ]
    },
    zielsetzung: {
        name: "Zielsetzung",
        questions: [
            'Was ist der nächste Schritt?',
            'Was ist das Reizvolle an diesem Ziel?',
            'Wie lässt sich das Ziel am wahrscheinlichsten erreichen?',
            'Was muss geschehen, damit das Ziel klarer wird?',
            'Wie lässt sich das Ziel in einem Satz beschreiben?',
            'Was kann ich tun, damit ich das Ziel nicht erreiche? ',
            'Auf einer Skala von 0 (gar nicht) bis 10 (sehr stark): Wie sehr möchte ich dieses Ziel erreichen?',
            'Auf einer Skala von 0 (gar nicht) bis 10 (sehr stark): Wie sehr glaube ich, kann ich dieses Ziel mit meinen aktuellen Mitteln erreichen?',
            'Wer würde sich darüber freuen, wenn ich das Ziel erreiche?',
            'Wer würde sich darüber freuen, wenn ich das Ziel nicht erreiche?',
            'Gibt es Konkurrenzziele, die ich zeitgleich ebenfalls gerne verfolgen würde?',
            'Wie lange glaube ich, wird es dauern, bis ich das Ziel erreiche?',
            'Gibt es Abstufungen für mein Ziel (z. B. im Sinne von Schulnoten: Wie sähe ein Ergebnis aus, das ich mit der Note 3 bewerten würde, wie eines mit Note 2 usw.)?',
            'Wer würde merken, wenn das Ziel erreicht wurde?',
            'Gibt es einen Zeitplan für die Zielerreichung?',
            'Wie realistisch ist das Ziel?',
            'Was brauche ich von außen, um das Ziel zu erreichen?',
            'Wie lässt sich überprüfen, ob das Ziel erreicht wurde?',
            'Ist das Ziel eher ein Fernziel oder ein Teilziel?',
            'Ist das Ziel flexibel oder unveränderlich?',
            'Seit wann verfolge ich das Ziel? Wie kam es dazu?',
            'Habe ich schon einmal ein ähnliches Ziel verfolgt? Mit welchem Ergebnis?',
            'Ist das Ziel eher ein berufliches, ein privates oder von beidem etwas?',
            'Wer oder was hat mich dazu angeregt, dieses Ziel zu verfolgen?',
            'Gibt es jemanden, der/die das Ziel noch viel stärker verfolgt als ich?',
            'Kommt das Ziel eher von innen oder von außen?',
            'Kenne ich jemanden, der/die ein solches Ziel schon mal erreicht hat? Wie hat er/sie das geschafft?',
            'Welche Kompetenzen oder Eigenschaften bringe ich mit, die der Zielerreichung dienlich sein können?',
            'Wenn ich jemandem das Ziel in einem Bild oder einer Metapher beschreiben sollte: Was würde mir dazu einfallen?',
            'Was ist mir dabei wichtiger: Das Ziel oder der Weg dorthin?',
            'Von wem benötige ich Unterstützung, um das Ziel zu erreichen?',
            'Welche Ressourcen braucht es, um das Ziel zu erreichen?'
        ]
    },
    teamarbeit: {
        name: "Teamarbeit",
        questions: [
            'An unseren Arbeitsplätzen brauchen wir auf jeden Fall ... ',
            'Im letzten Jahr hat sich Folgendes geändert:',
            'In Zukunft treffen wir Entscheidungen, indem wir ... ',
            'Wir sollten als Team in diesem Jahr auf jeden Fall ... ',
            'Ich komme montags mit einem Lächeln zur Arbeit, wenn ...',
            'Ich brauche noch ..., um mich im Team wohler zu fühlen.',
            'Ich würde das Team verlassen, wenn ...',
            'In einem Jahr werde ich stolz auf unsere Teamarbeit zurückschauen, weil ...',
            'Ich möchte zukünftig im Team die Rolle als ... wahrnehmen.',
            'Was wir definitiv lassen sollten, ist ... ',
            'Ich werde zu einer guten Arbeitsatmosphäre beitragen, indem ich ...',
            'Folgende Perspektive fehlt in unserem Team aktuell: ',
            'Ich brauche ..., um meine Arbeit gut erledigen zu können.',
            'Wir sollten aufhören mit ...',
            'Wir brauchen mehr von ...',
            'An meinem Team schätze ich besonders ... ',
            'Erfolgreiche Teamarbeit wird im Wesentlichen beeinflusst von ...'
        ]
    }, kontroversen: {
        name: "Kontroversen",
        questions: [
            'Soll die tägliche Nutzungsdauer von Netflix und Co. gesetzlich beschränkt werden?',
            'Sollen E-Scooter in allen Städten verboten werden?',
            'Sollen sämtliche Univorlesungen per Video aufgezeichnet werden?',
            'Brauchen wir den 6-Stunden-Arbeitstag?',
            'Brauchen wir ein bedingungsloses Grundeinkommen?',
            'Soll das Rauchen in der Öffentlichkeit verboten werden?',
            'Brauchen wir ein verpflichtendes soziales Jahr?',
            'Brauchen wir ein Recht auf Feierabend?',
            'Brauchen wir ein Tempolimit von 130 km/h auf der Autobahn?',
            'Brauchen wir eine Helmpflicht für Fahrradfahrer?',
            'Soll das Betteln in Innenstädten verboten werden?',
            'Sollen Hausaufgaben abgeschafft werden?',
            'Sollte sich das Gehalt von Politiker:innen am Durchschnittseinkommen der Bürger:innen ihres Landes orientieren?',
            'Soll das anonymisierte Bewerbungsverfahren gesetzlich verpflichtend sein?',
            'Brauchen wir die Schuluniform?',
            'Brauchen wir die Null-Promille-Grenze im Straßenverkehr?',
            'Sollen Schönheitswettbewerbe (wie z. B. Miss-Wahlen) verboten werden?'
        ]
    }, gruppenreflexion: {
        name: "Gruppenreflexion",
        questions: [
            'Wie habe ich unsere Gruppenarbeit erlebt?',
            'Hat sich jeder einbringen können?',
            'Wie zufrieden bin ich mit unserem Ergebnis?',
            'Sind wir arbeitsteilig vorgegangen? Wie hat das funktioniert?',
            'Was hat gut geklappt?',
            'Was könnten wir beim nächsten Mal besser machen?',
            'Was sollten wir als Gruppe beibehalten?',
            'Gab es etwas, das mich irritiert hat?',
            'Was hat mich überrascht?',
            'Was fiel uns leicht?',
            'Womit hatten wir Schwierigkeiten?',
            'Wo könnten wir noch einen Tipp gebrauchen?',
            'Was hätte wohl ein Außenstehender gedacht, wenn er uns beobachtet hätte?',
            'Wie haben wir uns koordiniert und abgestimmt?',
            'Wie habe ich die Atmosphäre während der Gruppenarbeit erlebt?'
        ]
    },
    checkout: {
        name: "Checkout",
        questions: [
            'Was nehme ich mir konkret als nächstes vor?',
            'Was ist heute hängen geblieben?',
            'Das hat mich heute gefreut:',
            'Das nehme ich für mich mit:',
            'Das hat mich heute erstaunt:',
            'Das hat mich heute inspiriert:',
            'Das möchte ich gerne noch einmal machen:',
            'Mit welchen Gedanken beende ich den heutigen Tag?',
            'Das hat mich heute positiv überrascht:',
            'Was hat mir heute imponiert?',
            'Was sind meine nächsten drei Schritte?',
            'Was konnte ich heute an mir selbst beobachten?',
            'Welchen Satz möchte ich noch loswerden?',
            'Ein Lob für eine Person für einen klugen Satz oder eine gute Aktion.',
            'Wie ging es mir heute zum Einstieg und wie es geht es mir jetzt?',
            'Nach dem heutigen Tag denke ich ...',
            'Worauf lag heute mein Hauptaugenmerk?',
            'Wenn meine jetzige Verfassung ein Tier wäre, welches wäre es?',
            'Was war heute besonders gewinnbringend?',
            'Ein Highlight war heute für mich …',
            'Was lasse ich heute hier?',
            'Was möchte ich als nächstes ausprobieren oder umsetzen?',
            'Wovon bräuchte ich mehr?',
            'Wovon bräuchte ich weniger?',
            'Was werde ich das nächste Mal anders machen?',
            'Heute war ich ...',
            'Welches Problem konnte ich heute lösen oder angehen?',
            'Wie zufrieden bin ich heute mit mir?',
            'Womit werde ich mich für meine heutige Teilnahme belohnen?',
            'Was war heute der wertvollste Fehler?',
            'Welches Wort sollten wir das nächste Mal seltener verwenden?',
            'Womit möchte ich heute noch die meiste Zeit verbringen?',
            'Ich habe mich heute sehr wohl gefühlt, als ...',
            'Was ist immer noch frustrierend für mich?',
            'Was habe ich heute vermisst?',
            'Wo sehe ich noch Entwicklungspotenzial?',
            'Worüber musste ich heute lächeln?',
            'Welcher Beitrag eines Teammitglieds war heute besonders wertvoll?',
            'Wann habe ich heute meine Komfortzone verlassen?',
            'Was möchte ich der Runde noch sagen?',
            'Was fiel mir heute leicht?',
            'Für ein nächstes Mal würde ich mir wünschen ...',
            'Was hätten wir heute mit einer Extra-Stunde anfangen sollen?',
            'Was war heute meine größte Herausforderung?',
            'Worüber werde ich weiter nachdenken?',
            'Nach dem heutigen Tag fühle ich mich vorbereitet für ...',
            'Was ist mir heute deutlicher geworden?',
            'Was werde ich ab sofort ändern?',
            'Was werde ich weiterhin beibehalten?',
            'Welchen Vorsatz nehme ich mir heute mit?',
            'Wem werde ich von heute berichten?',
            'Welche drei Adjektive fallen mir zu heute ein?',
            'Was sehe ich jetzt klarer?',
            'Womit darf/sollte/muss ich mich noch weitergehend befassen?',
            'Was ist mein zentrales Learning von heute?',
            'Woran werde ich mich nach dem heutigen Tag erinnern?'
        ]
    }
};


/***/ }),

/***/ "PAVq":
/*!************************************************!*\
  !*** ./src/app/security/security.component.ts ***!
  \************************************************/
/*! exports provided: SecurityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecurityComponent", function() { return SecurityComponent; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _type_effect_headline_heading_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../type-effect-headline/heading.component */ "o/Iz");



class SecurityComponent {
    constructor() {
        this.show = false;
    }
    ngOnInit() {
        window.scrollTo(0, 0);
        setTimeout(() => {
            this.show = true;
        }, 700);
    }
    toggle() {
        this.show = !this.show;
    }
}
SecurityComponent.ɵfac = function SecurityComponent_Factory(t) { return new (t || SecurityComponent)(); };
SecurityComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: SecurityComponent, selectors: [["app-security"]], decls: 54, vars: 2, consts: [[1, "page-container", 2, "padding-right", "15px"], [3, "heading0"], [1, "content-section"], [2, "margin-top", "10px"], [2, "margin-left", "30px"], [2, "text-align", "justify"], [2, "margin-top", "30px"], ["href", "https://www.bfdi.bund.de/DE/Infothek/Anschriften_Links/anschriften_links-node.html"]], template: function SecurityComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](1, "app-heading", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "h2", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](4, " Benennung der verantwortlichen Stelle ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](5, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](6, " Die verantwortliche Stelle f\u00FCr die Datenverarbeitung auf dieser Website ist: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](7, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, " Dennis Sawatzki ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, " Schadowstra\u00DFe 34 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, " 44799 Bochum ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, " Die verantwortliche Stelle entscheidet allein oder gemeinsam mit anderen \u00FCber die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z.B. Namen, Kontaktdaten o. \u00C4.). ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "h2", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, " Recht auf Beschwerde bei der zust\u00E4ndigen Aufsichtsbeh\u00F6rde ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, " Als Betroffener steht Ihnen im Falle eines datenschutzrechtlichen Versto\u00DFes ein Beschwerderecht bei der zust\u00E4ndigen Aufsichtsbeh\u00F6rde zu. Zust\u00E4ndige Aufsichtsbeh\u00F6rde bez\u00FCglich datenschutzrechtlicher Fragen ist der Landesdatenschutzbeauftragte des Bundeslandes, in dem sich der Sitz unseres Unternehmens befindet. Der folgende Link stellt eine Liste der Datenschutzbeauftragten sowie deren Kontaktdaten bereit: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](21, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, " BFDI ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "h2", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](24, " Widerruf Ihrer Einwilligung zur Datenverarbeitung ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](25, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, " Nur mit Ihrer ausdr\u00FCcklichen Einwilligung sind einige Vorg\u00E4nge der Datenverarbeitung m\u00F6glich. Ein Widerruf Ihrer bereits erteilten Einwilligung ist jederzeit m\u00F6glich. F\u00FCr den Widerruf gen\u00FCgt eine formlose Mitteilung per E-Mail. Die Rechtm\u00E4\u00DFigkeit der bis zum Widerruf erfolgten Datenverarbeitung bleibt vom Widerruf unber\u00FChrt. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "h2", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](28, " Recht auf Daten\u00FCbertragbarkeit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](29, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, " Ihnen steht das Recht zu, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erf\u00FCllung eines Vertrags automatisiert verarbeiten, an sich oder an Dritte aush\u00E4ndigen zu lassen. Die Bereitstellung erfolgt in einem maschinenlesbaren Format. Sofern Sie die direkte \u00DCbertragung der Daten an einen anderen Verantwortlichen verlangen, erfolgt dies nur, soweit es technisch machbar ist. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](31, "h2", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](32, " Recht auf Auskunft, Berichtigung, Sperrung, L\u00F6schung ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](33, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](34, " Sie haben jederzeit im Rahmen der geltenden gesetzlichen Bestimmungen das Recht auf unentgeltliche Auskunft \u00FCber Ihre gespeicherten personenbezogenen Daten, Herkunft der Daten, deren Empf\u00E4nger und den Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung, Sperrung oder L\u00F6schung dieser Daten. Diesbez\u00FCglich und auch zu weiteren Fragen zum Thema personenbezogene Daten k\u00F6nnen Sie sich jederzeit \u00FCber die im Impressum aufgef\u00FChrten Kontaktm\u00F6glichkeiten an uns wenden. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](35, "h2", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](36, " SSL- bzw. TLS-Verschl\u00FCsselung ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](37, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](38, " Aus Sicherheitsgr\u00FCnden und zum Schutz der \u00DCbertragung vertraulicher Inhalte, die Sie an uns als Seitenbetreiber senden, nutzt unsere Website eine SSL-bzw. TLS-Verschl\u00FCsselung. Damit sind Daten, die Sie \u00FCber diese Website \u00FCbermitteln, f\u00FCr Dritte nicht mitlesbar. Sie erkennen eine verschl\u00FCsselte Verbindung an der \u201Ehttps://\u201C Adresszeile Ihres Browsers und am Schloss-Symbol in der Browserzeile. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](39, "h2", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](40, " Datenspeicherung im lokalen Browserspeicher ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](41, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](42, " Um Ihre Erfahrung mit unserer Seite bestm\u00F6glich zu gestalten, haben Sie die M\u00F6glichkeit ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](43, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](44, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](45, " die gew\u00FCnsche Sprache einzustellen ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](46, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](47, " das Wiederholen/ nicht Wiederholen von Fragen einzustellen ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](48, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](49, " und eigene Begriffe im Zufallsgenerator einzutragen ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](50, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](51, " Damit Ihre gew\u00FCnschten Pr\u00E4ferenzen und eingegeben Begriffe beim Verlassen oder Aktualisieren der Seite nicht verloren gehen, werden sie unverschl\u00FCsselt in Ihrem lokalen Browserspeicher, dem \"Local Storage\", hinterlegt. Es werden keine Daten an den Anbieter oder an Dritte \u00FCbertragen. Die Daten verbleiben auf Ihrem System bis sie von Ihnen gel\u00F6scht werden. Sie k\u00F6nnen die Daten l\u00F6schen indem Sie mittels der Browsereinstellungen den Browserchache leeren. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](52, "p", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](53, " Sie k\u00F6nnen das Speichern von lokalen Daten in Ihren Browsereinstellungen allgemein verbieten. In diesem Fall weisen wir auf m\u00F6gliche Funktionseinschr\u00E4nkungen dieser Seite hin. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("heading0", "Datenschutz");
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("@showHide", ctx.show ? "show" : "hide");
    } }, directives: [_type_effect_headline_heading_component__WEBPACK_IMPORTED_MODULE_2__["HeadingComponent"]], styles: [".contect-section[_ngcontent-%COMP%] {\n  width: 250px;\n}\n\n.color-primary[_ngcontent-%COMP%] {\n  color: #f26a38;\n}\n\n.button[_ngcontent-%COMP%] {\n  text-decoration: none;\n  display: inline-block;\n  transition: 0.35s;\n  border-style: solid;\n  border-width: 1px;\n  border-color: #f26a38;\n  padding: 7px 25px 7px 25px;\n  color: #ffffff;\n}\n\n.button[_ngcontent-%COMP%]:hover {\n  text-decoration: none;\n  background-color: #ee9575;\n  color: black;\n  border-style: solid;\n}\n\n.span-primary[_ngcontent-%COMP%] {\n  border: #f26a38;\n  border-style: solid;\n  border-width: 1px;\n  color: #f26a38;\n  padding: 3px 5px 3px 5px;\n  font-size: small;\n}\n\nh3[_ngcontent-%COMP%] {\n  font-weight: 200;\n  margin-bottom: 10px;\n}\n\nh5[_ngcontent-%COMP%], h2[_ngcontent-%COMP%] {\n  letter-spacing: 2px;\n}\n\nh1[_ngcontent-%COMP%] {\n  text-transform: uppercase;\n  letter-spacing: 2px;\n  font-size: xx-large;\n  font-weight: 600;\n}\n\np[_ngcontent-%COMP%] {\n  line-height: 20px;\n  margin-top: 8px;\n  margin-bottom: 8px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NlY3VyaXR5LmNvbXBvbmVudC5zY3NzIiwiLi4vLi4vLi4vLi4vLi4vY29sb3JzLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDRSxZQUFBO0FBREY7O0FBSUE7RUFDRSxjQ1BRO0FETVY7O0FBSUE7RUFDRSxxQkFBQTtFQUNBLHFCQUFBO0VBQ0EsaUJBQUE7RUFFQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EscUJDakJRO0VEb0JSLDBCQUFBO0VBQ0EsY0NwQlU7QURnQlo7O0FBT0E7RUFDRSxxQkFBQTtFQUNBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBSkY7O0FBT0E7RUFDRSxlQ2hDUTtFRGlDUixtQkFBQTtFQUNBLGlCQUFBO0VBQ0EsY0NuQ1E7RURvQ1Isd0JBQUE7RUFDQSxnQkFBQTtBQUpGOztBQU9BO0VBQ0UsZ0JBQUE7RUFDQSxtQkFBQTtBQUpGOztBQU9BOztFQUVFLG1CQUFBO0FBSkY7O0FBYUE7RUFDRSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsbUJBQUE7RUFDQSxnQkFBQTtBQVZGOztBQWFBO0VBQ0UsaUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFWRiIsImZpbGUiOiJzZWN1cml0eS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgJy4uLy4uL2NvbG9ycy5zY3NzJztcblxuLmNvbnRlY3Qtc2VjdGlvbiB7XG4gIHdpZHRoOiAyNTBweDtcbn1cblxuLmNvbG9yLXByaW1hcnkge1xuICBjb2xvcjogJHByaW1hcnk7XG59XG5cbi5idXR0b24ge1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgdHJhbnNpdGlvbjogMC4zNXM7XG4gIC8vIGJhY2tncm91bmQtY29sb3I6ICRwcmltYXJ5O1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItd2lkdGg6IDFweDtcbiAgYm9yZGVyLWNvbG9yOiAkcHJpbWFyeTtcblxuICAvLyBib3JkZXI6IDBlbTtcbiAgcGFkZGluZzogN3B4IDI1cHggN3B4IDI1cHg7XG4gIGNvbG9yOiAkc2Vjb25kYXJ5O1xufVxuXG4uYnV0dG9uOmhvdmVyIHtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWU5NTc1O1xuICBjb2xvcjogYmxhY2s7XG4gIGJvcmRlci1zdHlsZTogc29saWQ7XG59XG5cbi5zcGFuLXByaW1hcnkge1xuICBib3JkZXI6ICRwcmltYXJ5O1xuICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICBib3JkZXItd2lkdGg6IDFweDtcbiAgY29sb3I6ICRwcmltYXJ5O1xuICBwYWRkaW5nOiAzcHggNXB4IDNweCA1cHg7XG4gIGZvbnQtc2l6ZTogc21hbGw7XG59XG5cbmgzIHtcbiAgZm9udC13ZWlnaHQ6IDIwMDtcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcbn1cblxuaDUsXG5oMiB7XG4gIGxldHRlci1zcGFjaW5nOiAycHg7XG59XG5cbi8vIGxpIHtcbi8vICAgY29sb3I6ICR0aGlyZDtcbi8vICAgZm9udC1zaXplOiBzbWFsbDtcbi8vICAgbGV0dGVyLXNwYWNpbmc6IDJweDtcbi8vIH1cblxuaDEge1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICBmb250LXNpemU6IHh4LWxhcmdlO1xuICBmb250LXdlaWdodDogNjAwO1xufVxuXG5wIHtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIG1hcmdpbi10b3A6IDhweDtcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xufSIsIiRwcmltYXJ5OiAjZjI2YTM4O1xuJHNlY29uZGFyeTogI2ZmZmZmZjtcbiR0aGlyZDogI2E3YTdhNztcbiRzdWNjZXNzOiAjNGVkZjk5O1xuJGluZm86ICMxN2EyYjg7XG4kd2FybmluZzogI2YzYTE1ZTtcbiRkYW5nZXI6ICNmMDUwNmU7Il19 */"], data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('showHide', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('show', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                    opacity: 100
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('hide', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                    opacity: 0
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('show <=> hide', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s')
                ]),
            ])
        ] } });


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navbar/navbar.component */ "kWWo");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer/footer.component */ "fp1T");




class AppComponent {
    constructor() {
        this.title = 'digitaler-stuhlkreis.de';
    }
    ngOnInit() {
        this.innerHeight = window.innerHeight;
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 6, vars: 0, consts: [["id", "app-outer-wrapper"], ["id", "app-inner-content-wrapper"], ["id", "app-inner-content-centered"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "app-footer");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterOutlet"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_3__["FooterComponent"]], styles: ["#app-outer-wrapper[_ngcontent-%COMP%] {\n  margin: 20px;\n  display: flex;\n  flex-direction: column;\n  height: 88vh;\n}\n\n#app-inner-content-wrapper[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: center;\n  overflow-x: hidden;\n  margin-top: 20px;\n  margin-bottom: 20px;\n  flex-grow: 1;\n}\n\n#app-inner-content-centered[_ngcontent-%COMP%] {\n  max-width: 1024px;\n}\n\n#app-inner-content-wrapper[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n  border-radius: 10px;\n  background-color: #a7a7a7;\n}\n\n#app-inner-content-wrapper[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 6px;\n  background-color: #28282F;\n}\n\n#app-inner-content-wrapper[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  border-radius: 10px;\n  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\n  background-color: #ffffff;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL2FwcC5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uL2NvbG9ycy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBQ0ksWUFBQTtFQUNBLGFBQUE7RUFDQSxzQkFBQTtFQUVBLFlBQUE7QUFGSjs7QUFNQTtFQUNJLGFBQUE7RUFDQSx1QkFBQTtFQUlBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLFlBQUE7QUFOSjs7QUFlQTtFQUNJLGlCQUFBO0FBWko7O0FBaUJBO0VBQ0ksNENBQUE7RUFDQSxvREFBQTtFQUNBLG1CQUFBO0VBQ0EseUJDckNJO0FEdUJSOztBQWlCQTtFQUNJLFVBQUE7RUFDQSx5QkFBQTtBQWRKOztBQWlCQTtFQUNJLG1CQUFBO0VBQ0EsNENBQUE7RUFDQSxvREFBQTtFQUNBLHlCQ2xEUTtBRG9DWiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi9jb2xvcnMuc2Nzcyc7XG5cbiNhcHAtb3V0ZXItd3JhcHBlciB7XG4gICAgbWFyZ2luOiAyMHB4O1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAvLyBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgaGVpZ2h0OiA4OHZoO1xuXG59XG5cbiNhcHAtaW5uZXItY29udGVudC13cmFwcGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIC8vIGZsZXgtZ3JvdzogMTtcbiAgICAvLyBhbGlnbi1pdGVtczogc3RyZXRjaDtcbiAgICAvLyBvdmVyZmxvdy15OiBzY3JvbGw7XG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xuICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICBmbGV4LWdyb3c6IDE7XG4gICAgLy8gcGFkZGluZy1yaWdodDogMTVweDtcbn1cblxuXG4vLyAjYXBwLWlubmVyLWNvbnRlbnQtd3JhcHBlcjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuLy8gICAgIHdpZHRoOiAxZW07XG4vLyB9XG5cbiNhcHAtaW5uZXItY29udGVudC1jZW50ZXJlZCB7XG4gICAgbWF4LXdpZHRoOiAxMDI0cHg7XG4gICAgLy8gaGVpZ2h0OiAyMDBweDtcbn1cblxuXG4jYXBwLWlubmVyLWNvbnRlbnQtd3JhcHBlcjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgMCA2cHggcmdiYSgwLCAwLCAwLCAwLjMpO1xuICAgIC13ZWJraXQtYm94LXNoYWRvdzogaW5zZXQgMCAwIDZweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkdGhpcmQ7XG59XG5cbiNhcHAtaW5uZXItY29udGVudC13cmFwcGVyOjotd2Via2l0LXNjcm9sbGJhciB7XG4gICAgd2lkdGg6IDZweDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjgyODJGO1xufVxuXG4jYXBwLWlubmVyLWNvbnRlbnQtd3JhcHBlcjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDZweCByZ2JhKDAsIDAsIDAsIDAuMyk7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiBpbnNldCAwIDAgNnB4IHJnYmEoMCwgMCwgMCwgLjMpO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICRzZWNvbmRhcnk7XG59IiwiJHByaW1hcnk6ICNmMjZhMzg7XG4kc2Vjb25kYXJ5OiAjZmZmZmZmO1xuJHRoaXJkOiAjYTdhN2E3O1xuJHN1Y2Nlc3M6ICM0ZWRmOTk7XG4kaW5mbzogIzE3YTJiODtcbiR3YXJuaW5nOiAjZjNhMTVlO1xuJGRhbmdlcjogI2YwNTA2ZTsiXX0= */"] });


/***/ }),

/***/ "WL4d":
/*!*************************************************************************!*\
  !*** ./src/app/navbar/language-switcher/language-switcher.component.ts ***!
  \*************************************************************************/
/*! exports provided: LanguageSwitcherComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LanguageSwitcherComponent", function() { return LanguageSwitcherComponent; });
/* harmony import */ var src_app_services_persistence_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/persistence.service */ "lxVI");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "ofXK");




const _c0 = function (a0) { return { "active": a0 }; };
class LanguageSwitcherComponent {
    constructor(persistenceService) {
        this.persistenceService = persistenceService;
        // Angular doesn't support accessing enums from within templates
        // We use this help attributes to enable strict type checking within selectLanguage,
        // but avoid matching strings with enums
        this.LANG_GERMAN = src_app_services_persistence_service__WEBPACK_IMPORTED_MODULE_0__["SupportedLanguages"].GERMAN;
        this.LANG_ENGLISH = src_app_services_persistence_service__WEBPACK_IMPORTED_MODULE_0__["SupportedLanguages"].ENGLISH;
        this.LANG_SPANISH = src_app_services_persistence_service__WEBPACK_IMPORTED_MODULE_0__["SupportedLanguages"].SPANISH;
        this.selectedLanguage = src_app_services_persistence_service__WEBPACK_IMPORTED_MODULE_0__["SupportedLanguages"].GERMAN;
    }
    ngOnInit() {
        this.persistenceService.getSelectedLanguage().subscribe((language) => this.selectedLanguage = language);
    }
    selectLanguage(language) {
        this.selectedLanguage = language;
        this.persistenceService.setSelectedLanguage(language);
    }
}
LanguageSwitcherComponent.ɵfac = function LanguageSwitcherComponent_Factory(t) { return new (t || LanguageSwitcherComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_persistence_service__WEBPACK_IMPORTED_MODULE_0__["PersistenceService"])); };
LanguageSwitcherComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({ type: LanguageSwitcherComponent, selectors: [["language-switcher"]], decls: 3, vars: 9, consts: [["src", "assets/Germany-32x32.png", 1, "language-flag", 3, "ngClass", "click"], ["src", "assets/United-Kingdom-32x32.png", 1, "language-flag", 3, "ngClass", "click"], ["src", "assets/Spain-32x32.png", 1, "language-flag", 3, "ngClass", "click"]], template: function LanguageSwitcherComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "img", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LanguageSwitcherComponent_Template_img_click_0_listener() { return ctx.selectLanguage(ctx.LANG_GERMAN); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](1, "img", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LanguageSwitcherComponent_Template_img_click_1_listener() { return ctx.selectLanguage(ctx.LANG_ENGLISH); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵlistener"]("click", function LanguageSwitcherComponent_Template_img_click_2_listener() { return ctx.selectLanguage(ctx.LANG_SPANISH); });
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](3, _c0, ctx.selectedLanguage === "GERMAN"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](5, _c0, ctx.selectedLanguage === "ENGLISH"));
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵpureFunction1"](7, _c0, ctx.selectedLanguage === "SPANISH"));
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["NgClass"]], styles: [".language-flag[_ngcontent-%COMP%] {\n  opacity: 0.5;\n  cursor: pointer;\n}\n\n.language-flag.active[_ngcontent-%COMP%] {\n  opacity: 1;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL2xhbmd1YWdlLXN3aXRjaGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksWUFBQTtFQUNBLGVBQUE7QUFDSjs7QUFFQTtFQUNJLFVBQUE7QUFDSiIsImZpbGUiOiJsYW5ndWFnZS1zd2l0Y2hlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sYW5ndWFnZS1mbGFnIHtcbiAgICBvcGFjaXR5OiAwLjU7XG4gICAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubGFuZ3VhZ2UtZmxhZy5hY3RpdmUge1xuICAgIG9wYWNpdHk6IDEuMDtcbn0iXX0= */"] });


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_elements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/elements */ "Dti6");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "R1ws");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./navbar/navbar.component */ "kWWo");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./footer/footer.component */ "fp1T");
/* harmony import */ var _impressum_impressum_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./impressum/impressum.component */ "2tb1");
/* harmony import */ var _security_security_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./security/security.component */ "PAVq");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "3Pt+");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common/http */ "tk/3");
/* harmony import */ var _navbar_language_switcher_language_switcher_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./navbar/language-switcher/language-switcher.component */ "WL4d");
/* harmony import */ var ngx_pretty_checkbox__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-pretty-checkbox */ "JU0p");
/* harmony import */ var _random_generator_random_generator_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./random-generator/random-generator.component */ "cWdb");
/* harmony import */ var ngx_smart_modal__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ngx-smart-modal */ "bqtT");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./about/about.component */ "84zG");
/* harmony import */ var _type_effect_headline_heading_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./type-effect-headline/heading.component */ "o/Iz");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/core */ "fXoL");





















class AppModule {
    constructor(injector) {
        this.injector = injector;
        const webComponent = Object(_angular_elements__WEBPACK_IMPORTED_MODULE_1__["createCustomElement"])(_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], { injector: this.injector });
        customElements.define('angular-component', webComponent);
    }
    ngDoBootstrap() { }
}
AppModule.ɵfac = function AppModule_Factory(t) { return new (t || AppModule)(_angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵinject"](_angular_core__WEBPACK_IMPORTED_MODULE_19__["Injector"])); };
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵdefineInjector"]({ providers: [{ provide: _angular_common__WEBPACK_IMPORTED_MODULE_18__["APP_BASE_HREF"], useValue: '/' }], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
            ngx_pretty_checkbox__WEBPACK_IMPORTED_MODULE_13__["NgxPrettyCheckboxModule"],
            ngx_smart_modal__WEBPACK_IMPORTED_MODULE_15__["NgxSmartModalModule"].forRoot()
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_19__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
        _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__["NavbarComponent"],
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"],
        _impressum_impressum_component__WEBPACK_IMPORTED_MODULE_8__["ImpressumComponent"],
        _security_security_component__WEBPACK_IMPORTED_MODULE_9__["SecurityComponent"],
        _type_effect_headline_heading_component__WEBPACK_IMPORTED_MODULE_17__["HeadingComponent"],
        _navbar_language_switcher_language_switcher_component__WEBPACK_IMPORTED_MODULE_12__["LanguageSwitcherComponent"],
        _random_generator_random_generator_component__WEBPACK_IMPORTED_MODULE_14__["RandomGeneratorComponent"],
        _about_about_component__WEBPACK_IMPORTED_MODULE_16__["AboutComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"],
        ngx_pretty_checkbox__WEBPACK_IMPORTED_MODULE_13__["NgxPrettyCheckboxModule"], ngx_smart_modal__WEBPACK_IMPORTED_MODULE_15__["NgxSmartModalModule"]] }); })();


/***/ }),

/***/ "cWdb":
/*!****************************************************************!*\
  !*** ./src/app/random-generator/random-generator.component.ts ***!
  \****************************************************************/
/*! exports provided: RandomGeneratorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RandomGeneratorComponent", function() { return RandomGeneratorComponent; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _services_persistence_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/persistence.service */ "lxVI");
/* harmony import */ var _questionnaire_questions_german__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../questionnaire/questions-german */ "Di4M");
/* harmony import */ var _questionnaire_questions_spanish__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../questionnaire/questions-spanish */ "6gGL");
/* harmony import */ var _questionnaire_questions_english__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../questionnaire/questions-english */ "dyHY");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var ngx_pretty_checkbox__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-pretty-checkbox */ "JU0p");









const _c0 = ["userInput"];
const _c1 = function (a0) { return { "active": a0 }; };
function RandomGeneratorComponent_div_10_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function RandomGeneratorComponent_div_10_Template_div_click_1_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r5); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r4.deselectActiveElement(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](2, "p", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](4, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function RandomGeneratorComponent_div_10_Template_i_click_4_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r5); const i_r3 = ctx.index; const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"](); return ctx_r6.removeUserEntry(i_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const userEntry_r2 = ctx.$implicit;
    const i_r3 = ctx.index;
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("@startUpFadeIn", ctx_r1.startUpFadeIn ? "true" : "false")("@showHide", ctx_r1.show ? "show" : "hide");
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](5, _c1, i_r3 === 0 && ctx_r1.highlightSelectedElement));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction1"](7, _c1, i_r3 === 0 && ctx_r1.highlightSelectedElement));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](userEntry_r2);
} }
class RandomGeneratorComponent {
    constructor(persistenceService) {
        this.persistenceService = persistenceService;
        this.show = true;
        this.startUpFadeIn = false;
        this.repeatQuestions = false;
        this.numberOfPickedEntries = 0;
        this.userEntries = [];
        this.highlightSelectedElement = false;
        this.selectedLanguage = _services_persistence_service__WEBPACK_IMPORTED_MODULE_1__["SupportedLanguages"].GERMAN;
    }
    ngOnInit() {
        this.userEntrySubscription = this.persistenceService.getUserEntries().subscribe(value => this.userEntries = value);
        this.repeatQuestionsSubscription = this.persistenceService.getRepeatQuestions().subscribe(value => this.repeatQuestions = value);
        this.languageSwitchSubscription = this.persistenceService.getSelectedLanguage().subscribe((language) => {
            this.selectedLanguage = language;
            switch (this.selectedLanguage) {
                case _services_persistence_service__WEBPACK_IMPORTED_MODULE_1__["SupportedLanguages"].GERMAN:
                    this.questionnaire = _questionnaire_questions_german__WEBPACK_IMPORTED_MODULE_2__["questionnaireDE"];
                    break;
                case _services_persistence_service__WEBPACK_IMPORTED_MODULE_1__["SupportedLanguages"].ENGLISH:
                    this.questionnaire = _questionnaire_questions_english__WEBPACK_IMPORTED_MODULE_4__["questionnaireEN"];
                    break;
                case _services_persistence_service__WEBPACK_IMPORTED_MODULE_1__["SupportedLanguages"].SPANISH:
                    this.questionnaire = _questionnaire_questions_spanish__WEBPACK_IMPORTED_MODULE_3__["questionnaireES"];
                    break;
                default:
                    this.questionnaire = _questionnaire_questions_german__WEBPACK_IMPORTED_MODULE_2__["questionnaireDE"];
                    break;
            }
        });
    }
    ngAfterViewInit() {
        window.scrollTo(0, 0);
        setTimeout(() => {
            this.startUpFadeIn = true;
        }, 700);
    }
    updateRepeatQuestionIsAllowed(value) {
        this.repeatQuestions = value;
        this.persistenceService.setRepeatQuestions(value);
    }
    addUserEntry(entry) {
        if (entry) {
            this.userEntries.push(entry);
            this.persistenceService.setUserEntries(this.userEntries);
            // Clear input field in template
            this.userInputRef.nativeElement.value = "";
        }
    }
    removeUserEntry(i) {
        console.log(`removeUserEntry ${i} from ${this.userEntries.length}`);
        this.userEntries.splice(i, 1);
        this.persistenceService.setUserEntries(this.userEntries);
    }
    deselectActiveElement() {
        this.highlightSelectedElement = false;
    }
    makeNewSelection() {
        if (this.repeatQuestions) {
            this.pickRandomEntry();
        }
        else {
            this.pickRandomEntryWithoutRepeating();
        }
    }
    pickRandomEntry() {
        this.show = false;
        setTimeout(() => {
            let newIndex = this.getRandomIndexForQuestions(this.userEntries);
            this.selectedIndex = newIndex;
            const selectedEntry = this.userEntries[newIndex];
            // Highlight & shift selected index to top
            this.userEntries.splice(newIndex, 1);
            this.userEntries.unshift(selectedEntry);
            this.highlightSelectedElement = true;
            // Write new order to storage
            this.persistenceService.setUserEntries(this.userEntries);
        }, 1500);
        setTimeout(() => {
            this.show = true;
        }, 1800);
    }
    pickRandomEntryWithoutRepeating() {
        this.show = false;
        setTimeout(() => {
            // Reset numberOfPickedEntries if all possible entries have been picked
            if (this.numberOfPickedEntries === this.userEntries.length) {
                this.numberOfPickedEntries = 0;
            }
            const availableUnpickedQuestions = this.userEntries.slice(this.numberOfPickedEntries, this.userEntries.length);
            this.selectedIndex = this.getRandomIndexForQuestions(availableUnpickedQuestions) + this.numberOfPickedEntries;
            const selectedEntry = this.userEntries[this.selectedIndex];
            // Highlight & shift selected index to top
            this.userEntries.splice(this.selectedIndex, 1);
            this.userEntries.unshift(selectedEntry);
            this.numberOfPickedEntries = this.numberOfPickedEntries + 1;
            this.highlightSelectedElement = true;
            // Write new order to storage
            this.persistenceService.setUserEntries(this.userEntries);
        }, 1500);
        setTimeout(() => {
            this.show = true;
        }, 1800);
    }
    getRandomIndexForQuestions(questionSet) {
        return Math.round(Math.random() * (questionSet.length - 1));
    }
    ngOnDestroy() {
        this.userEntrySubscription.unsubscribe();
        this.repeatQuestionsSubscription.unsubscribe();
        this.languageSwitchSubscription.unsubscribe();
    }
}
RandomGeneratorComponent.ɵfac = function RandomGeneratorComponent_Factory(t) { return new (t || RandomGeneratorComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_persistence_service__WEBPACK_IMPORTED_MODULE_1__["PersistenceService"])); };
RandomGeneratorComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: RandomGeneratorComponent, selectors: [["app-random-generator"]], viewQuery: function RandomGeneratorComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵviewQuery"](_c0, 1);
    } if (rf & 2) {
        let _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵloadQuery"]()) && (ctx.userInputRef = _t.first);
    } }, decls: 15, vars: 8, consts: [["id", "randomGeneratorWrapper", 1, "d-flex", "flex-column", 2, "justify-content", "center", "align-items", "center", "margin-top", "0.5rem", "margin-bottom", "15px"], [1, "random-generator-title", 2, "margin-bottom", "-1rem"], [1, "random-generator-title"], [1, "d-flex", "flex-row", 2, "width", "100%"], ["placeholder", "", 2, "border-radius", "4px", 3, "keydown.enter"], ["userInput", ""], [1, "button", "d-flex", 2, "margin-left", "0.5rem", 3, "click"], [1, "fas", "fa-plus"], ["style", "width: 100%;", 4, "ngFor", "ngForOf"], [1, "button", "d-flex", 2, "width", "100%", "margin-top", "1rem", 3, "click"], ["color", "primary", "isSwitch", "true", "stroke", "fill", 2, "display", "flex", "justify-content", "center", "margin-left", "1rem", "margin-top", "1rem", 3, "checked", "change"], [2, "width", "100%"], [1, "d-flex", "flex-row", "userEntry", 2, "align-items", "center", "justify-content", "space-between", 3, "ngClass", "click"], [2, "width", "100%", 3, "ngClass"], [1, "fas", "fa-times", 2, "cursor", "pointer", "margin-left", "1rem", 3, "click"]], template: function RandomGeneratorComponent_Template(rf, ctx) { if (rf & 1) {
        const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵgetCurrentView"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "h2", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "h4", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](6, "input", 4, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("keydown.enter", function RandomGeneratorComponent_Template_input_keydown_enter_6_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r7); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](7); return ctx.addUserEntry(_r0.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](8, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function RandomGeneratorComponent_Template_button_click_8_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵrestoreView"](_r7); const _r0 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵreference"](7); return ctx.addUserEntry(_r0.value); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](9, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](10, RandomGeneratorComponent_div_10_Template, 5, 9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function RandomGeneratorComponent_Template_button_click_11_listener() { return ctx.makeNewSelection(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "p-checkbox", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("change", function RandomGeneratorComponent_Template_p_checkbox_change_13_listener() { return ctx.updateRepeatQuestionIsAllowed(!ctx.repeatQuestions); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](14);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("@startUpFadeIn", ctx.startUpFadeIn ? "true" : "false")("@languageChange", ctx.selectedLanguage);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx.questionnaire.titleRandomGenerator, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx.questionnaire.subtitleRandomGenerator, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngForOf", ctx.userEntries);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx.questionnaire.buttonTextRandomPick, " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("checked", ctx.repeatQuestions);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate1"](" ", ctx.questionnaire.toggleSwitchTextRepeatUserEntries, " ");
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_6__["NgForOf"], ngx_pretty_checkbox__WEBPACK_IMPORTED_MODULE_7__["NgxPrettyCheckboxComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_6__["NgClass"]], styles: [".userEntry[_ngcontent-%COMP%] {\n  transition: 0.35s;\n  background-color: transparent;\n  border-style: solid;\n  border-width: 1px;\n  border-color: #ffffff;\n  padding: 5px 15px;\n  color: #ffffff;\n  border-radius: 4px;\n  margin-top: 0.5rem;\n  max-height: 1.5rem;\n}\n\n.userEntry[_ngcontent-%COMP%]:hover {\n  text-decoration: none;\n  background-color: #ffffff7c;\n  color: black;\n  border-style: solid;\n  border-width: 1px;\n  border-radius: 0px;\n}\n\n.userEntry.active[_ngcontent-%COMP%] {\n  text-decoration: none;\n  background-color: #4edf99;\n  color: black;\n  border-style: solid;\n  border-width: 1px;\n  border-radius: 0px;\n}\n\np.active[_ngcontent-%COMP%] {\n  color: black;\n}\n\np[_ngcontent-%COMP%]:hover {\n  color: black;\n}\n\n.userEntryText[_ngcontent-%COMP%]:hover {\n  text-decoration: none;\n  background-color: #ffffff7c;\n  color: black;\n  border-style: solid;\n  border-width: 1px;\n  border-radius: 0px;\n}\n\n.userEntry[_ngcontent-%COMP%]:active {\n  border-style: outset;\n  border-color: white;\n}\n\n.button[_ngcontent-%COMP%] {\n  text-decoration: none;\n  display: inline-block;\n  transition: 0.35s;\n  background-color: transparent;\n  border-style: solid;\n  border-width: 1px;\n  border-color: #ffffff;\n  padding: 5px 15px;\n  color: #ffffff;\n  cursor: pointer;\n  border-radius: 4px;\n  outline: none;\n}\n\n.button[_ngcontent-%COMP%]:hover {\n  text-decoration: none;\n  background-color: #ffffff7c;\n  color: black;\n  border-style: solid;\n  border-width: 1px;\n  border-radius: 0px;\n}\n\n.button[_ngcontent-%COMP%]:active {\n  border-style: outset;\n  border-color: white;\n}\n\nh5[_ngcontent-%COMP%], h2[_ngcontent-%COMP%] {\n  letter-spacing: 2px;\n}\n\ninput[_ngcontent-%COMP%] {\n  width: 100%;\n  height: 2.5rem;\n}\n\n@media screen and (min-width: 1200px) {\n  #randomGeneratorWrapper[_ngcontent-%COMP%] {\n    margin-right: 1rem;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3JhbmRvbS1nZW5lcmF0b3IuY29tcG9uZW50LnNjc3MiLCIuLi8uLi8uLi8uLi8uLi9jb2xvcnMuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUNJLGlCQUFBO0VBQ0EsNkJBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0EscUJDTlE7RURRUixpQkFBQTtFQUNBLGNDVFE7RURVUixrQkFBQTtFQUVBLGtCQUFBO0VBQ0Esa0JBQUE7QUFISjs7QUFNQTtFQUNJLHFCQUFBO0VBQ0EsMkJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBSEo7O0FBTUE7RUFDSSxxQkFBQTtFQUVBLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQUpKOztBQU9BO0VBQ0ksWUFBQTtBQUpKOztBQU9BO0VBQ0ksWUFBQTtBQUpKOztBQU9BO0VBQ0kscUJBQUE7RUFDQSwyQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUFKSjs7QUFPQTtFQUNJLG9CQUFBO0VBQ0EsbUJBQUE7QUFKSjs7QUFPQTtFQUNJLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLDZCQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLHFCQ2hFUTtFRGtFUixpQkFBQTtFQUNBLGNDbkVRO0VEb0VSLGVBQUE7RUFDQSxrQkFBQTtFQUVBLGFBQUE7QUFOSjs7QUFTQTtFQUNJLHFCQUFBO0VBQ0EsMkJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FBTko7O0FBU0E7RUFDSSxvQkFBQTtFQUNBLG1CQUFBO0FBTko7O0FBU0E7O0VBRUksbUJBQUE7QUFOSjs7QUFTQTtFQUNJLFdBQUE7RUFDQSxjQUFBO0FBTko7O0FBU0E7RUFDSTtJQUNJLGtCQUFBO0VBTk47QUFDRiIsImZpbGUiOiJyYW5kb20tZ2VuZXJhdG9yLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uL2NvbG9ycy5zY3NzXCI7XG5cbi51c2VyRW50cnkge1xuICAgIHRyYW5zaXRpb246IDAuMzVzO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gICAgYm9yZGVyLWNvbG9yOiAkc2Vjb25kYXJ5O1xuXG4gICAgcGFkZGluZzogNXB4IDE1cHg7XG4gICAgY29sb3I6ICRzZWNvbmRhcnk7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuXG4gICAgbWFyZ2luLXRvcDogMC41cmVtO1xuICAgIG1heC1oZWlnaHQ6IDEuNXJlbTtcbn1cblxuLnVzZXJFbnRyeTpob3ZlciB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY3YztcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICBib3JkZXItd2lkdGg6IDFweDtcbiAgICBib3JkZXItcmFkaXVzOiAwcHg7XG59XG5cbi51c2VyRW50cnkuYWN0aXZlIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgLy8gYmFja2dyb3VuZC1jb2xvcjogI2UyY2E1ZTdjO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICM0ZWRmOTk7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gICAgYm9yZGVyLXJhZGl1czogMHB4O1xufVxuXG5wLmFjdGl2ZSB7XG4gICAgY29sb3I6IGJsYWNrO1xufVxuXG5wOmhvdmVyIHtcbiAgICBjb2xvcjogYmxhY2s7XG59XG5cbi51c2VyRW50cnlUZXh0OmhvdmVyIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZmZmZjdjO1xuICAgIGNvbG9yOiBibGFjaztcbiAgICBib3JkZXItc3R5bGU6IHNvbGlkO1xuICAgIGJvcmRlci13aWR0aDogMXB4O1xuICAgIGJvcmRlci1yYWRpdXM6IDBweDtcbn1cblxuLnVzZXJFbnRyeTphY3RpdmUge1xuICAgIGJvcmRlci1zdHlsZTogb3V0c2V0O1xuICAgIGJvcmRlci1jb2xvcjogd2hpdGU7XG59XG5cbi5idXR0b24ge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgdHJhbnNpdGlvbjogMC4zNXM7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICBib3JkZXItd2lkdGg6IDFweDtcbiAgICBib3JkZXItY29sb3I6ICRzZWNvbmRhcnk7XG5cbiAgICBwYWRkaW5nOiA1cHggMTVweDtcbiAgICBjb2xvcjogJHNlY29uZGFyeTtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xuICAgIC8vIG1hcmdpbi1sZWZ0OiAwLjVyZW07XG4gICAgb3V0bGluZTogbm9uZTtcbn1cblxuLmJ1dHRvbjpob3ZlciB7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmZmZmY3YztcbiAgICBjb2xvcjogYmxhY2s7XG4gICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICBib3JkZXItd2lkdGg6IDFweDtcbiAgICBib3JkZXItcmFkaXVzOiAwcHg7XG59XG5cbi5idXR0b246YWN0aXZlIHtcbiAgICBib3JkZXItc3R5bGU6IG91dHNldDtcbiAgICBib3JkZXItY29sb3I6IHdoaXRlO1xufVxuXG5oNSxcbmgyIHtcbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xufVxuXG5pbnB1dCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAyLjVyZW07XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6IDEyMDBweCkge1xuICAgICNyYW5kb21HZW5lcmF0b3JXcmFwcGVyIHtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAxcmVtO1xuICAgIH1cbn1cbiIsIiRwcmltYXJ5OiAjZjI2YTM4O1xuJHNlY29uZGFyeTogI2ZmZmZmZjtcbiR0aGlyZDogI2E3YTdhNztcbiRzdWNjZXNzOiAjNGVkZjk5O1xuJGluZm86ICMxN2EyYjg7XG4kd2FybmluZzogI2YzYTE1ZTtcbiRkYW5nZXI6ICNmMDUwNmU7Il19 */"], data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('showHide', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('show', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                    opacity: 100
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('hide', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                    opacity: 0
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('show <=> hide', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s')
                ]),
            ]),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('startUpFadeIn', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('true', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                    opacity: 100
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["state"])('false', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({
                    opacity: 0
                })),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('true <=> false', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])('0.5s')
                ]),
            ]),
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('languageChange', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('void => *', []),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => void', []),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => *', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(2000, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ offset: 0.0, opacity: 0 }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ offset: 1.0, opacity: 100 }),
                    ])),
                ]),
            ])
        ] } });


/***/ }),

/***/ "dyHY":
/*!****************************************************!*\
  !*** ./src/app/questionnaire/questions-english.ts ***!
  \****************************************************/
/*! exports provided: questionnaireEN */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "questionnaireEN", function() { return questionnaireEN; });
const questionnaireEN = {
    titleRandomGenerator: "Random generator",
    subtitleRandomGenerator: "For custom questions etc.",
    buttonTextRandomPick: "New selection",
    buttonTextNewQuestion: "New questions",
    toggleSwitchTextRepeatQuestions: "Repeat questions",
    toggleSwitchTextRepeatUserEntries: "Repeat entries",
    checkin: {
        name: "Checkin",
        questions: [
            "What beautiful happened to me this week?",
            "What makes me happy about my job?",
            "Why can my colleagues/classmates/pupils/participants be happy to work with me?",
            "When did I laugh out loud the last time and why?",
            "What did my teachers think of me and what would they think of me today?",
            "Who was hit by my last snowball?",
            "In which situations am I superstitious?",
            "Do/Did I prefer Ernie or Bert?",
            "What's the proper article: 'Die' Nutella or 'das' Nutella?",
            "Something that makes me smile nearly every time.",
            "Which animal do I really like? In how far are we similar to each other?",
            "What would I like to get better at?",
            "What is on my eternal to-do-list?",
            "What are my plans for the upcoming weekend?",
            "Beach or mountains?",
            "Which is my favourite city?",
            "Have I ever stolen something?",
            "If I had 1000,- Euros I could only spend today I would…",
            "That did I learn about myself in the past year:",
            "I could nourish myself with these three different food for a lifetime:",
            "What will I say yes to today?",
            "What was I thankful for today?",
            "What I love about my occupation is:",
            "Today I will…",
            "What would I like to try in my life?",
            "What has to happen to make this day perfect?",
            "A very nice present I once received…",
            "What did I leave behind this year?",
            "A philosophy of life of me…",
            "Who or what will get my attention today?",
            "If my current mood was a song or a movie…",
            "Which character trait do I appreciate most about my friends?",
            "What do I really look forward to?",
            "What fascinates me?",
            "What was my first thought today?",
            "What am I proud of?",
            "What was the best about my day so far?",
            "My favourite hobby…",
            "Whom did I accidentally meet abroad?",
            "How could we create our shared day perfectly?",
            "Why am I here today?",
            "Which superpower would I like to have?",
            "What was the first CD I ever bought?",
            "Dog or cat?",
            "What is my current favourite food?",
            "What is my current favourite piece of clothes?",
            "Which dish did I cook last?",
            "If I were an animal I'd prefer to be a…",
            "My anti-hobby is...",
            "Compliment somebody in this round.",
            "Which book did I read last?",
            "A movie or a series recommendation…",
            "What would I do if I wasn't here …",
            "Where would I like to be on holiday at the moment?",
            "Which big journey is still ahead?",
            "Do I have a role model or an idol?",
            "What does nobody in this round know about me?",
            "A piece of information that would only apply to me in this round…",
            "I never have…",
            "My favourite season…",
            "What is the worst job I ever had?",
            "What would I like to learn today?",
            "Which of my current character traits was already distinctive in my childhood?",
            "Something I would finally like to end:",
            "Something I would finally like to start:",
            "Which word should we use more and which one less?",
            "What drives me mad?",
            "One of my weaknesses …",
            "One of my strengths …",
            "What was a good advice I once received?",
            "What was a good advice I once gave?",
            "Which thing would I rescue from my burning house?",
            "Which three things would I take with me to a lonely island?",
            "My favourite colour …",
            "Which is the most beautiful place near my place of residence?",
            "That used to be my great passion as a child …",
            "Which colour am I today and why?",
            "My highlight this week up to now:",
            "What is my favourite geometrical shape and why?",
            "If I was not here right now, I would be in/at…",
            "What offers me power?",
            "If I could learn a foreign language over night, which language would I choose?",
            "Who should star in the film adaption of my life? ",
            "What could be the title of my autobiography?",
            "When was the last time I did something for the first time?",
            "What can I do above-average?",
            "With which famous person would I like to switch for a day?",
            "Which job would I like to try for a week?",
            "Which three values matter a lot to me?",
            "These conditions support my ability to learn:",
            "One of my childhood heroes…",
            "If I was to pass a law which all people had to abide worldwide …",
            "How am I here today - in how far is typical of me or special?",
            "What had been the three most important milestones in my autobiography?",
            "Which is my favourite place in my home?",
            "Which sport would I rather watch than do?",
            "Which musical genre do I really like and which not?",
            "What is sometimes a real worry to me?",
            "Something that helps me relax and recover:",
            "Optimist or pessimist: How would I describe myself?"
        ]
    },
    kennenlernen: {
        name: "Get to know",
        questions: [
            "Where did you grow up?",
            "Would you go to a concert on your own? Is there anything you would never do on your own? Say why!",
            "Do you have a favourite book? If so, why do you like it that much?",
            "Do you have siblings?",
            "Holidays: Mountains or sea?",
            "Which hobbies did you use to have and do not have anymore today?",
            "What did you once believe in that turned out to be wrong?",
            "What would you do if you won a million euros?",
            "Do you know the story behind your name?",
            "If you were an animal, which would it be and why?",
            "Which three things would you take with you to a lonely island?",
            "What happened to you recently that made you really happy?",
            "If you had the chance to choose again: Which job would you like to learn?",
            "Do you play an instrument or would you like to play one?",
            "What was your dream job when you were a child?",
            "Which food couldn't you live without?",
            "Which is your favourite ice cream flavour?",
            "Do you enjoy cooking?",
            "Which is your favourite corner in your home?",
            "What is your favourite hobby?",
            "What is your favourite colour? Have you ever bought anything just because of the colour?",
            "Do you have an idol or a role model?",
            "Which kind of music do you prefer listening to?",
            "What is the first thing a good friend would say to describe you?"
        ]
    },
    entwederOder: {
        name: "Either or",
        questions: [
            "Sparkling wine or juice",
            "Beer or wine",
            "Red or white wine",
            "Mountains or the sea",
            "Apple or Windows",
            "Cat or dog",
            "City or countryside",
            "Car or train",
            "Holiday house or hotel",
            "Mobile phone or smartphone",
            "Vegetables or fruit",
            "Disco or club",
            "Cooking or takeaway",
            "Pizza or pasta",
            "Skiing or snowboarding",
            "Theatre play or cinema ",
            "Thriller or comedy",
            "Metal or classic",
            "Camping or hotel",
            "fir tree or oak",
            "Snow or sunshine",
            "Hiking or going for a walk",
            "Strawberry or cherry",
            "Sausages or cheese",
            "Sweet or hearty dishes",
            "Bread or muesli",
            "Music or silence",
            "Paris or London",
            "Coffee or tea",
            "Holmes or Watson",
            "Western movie or medieval movie",
            "Beatles or Stones",
            "Justin Bieber or Lady Gaga",
            "Roses or lillies",
            "Bonfire or chimney",
            "Swing or seesaw",
            "Train or bus",
            "Lord of the rings or Harry Potter",
            "Mosquito or crane fly",
            "Moin or servus",
            "Alt or Kölsch",
            "White or brown bread",
            "Semmel or brötchen",
            "Fasching or Karneval",
            "Bigbluebutton or Zoom",
            "Ketchup or mayo",
            "Bike or e-bike",
            "Popcorn or nachos",
            "Chocolate or crisps",
            "Singing or dancing",
            "Butter or margarine",
            "Early riser or night owl",
            "Email or letter",
            "Sundae or cornet ice cream",
            "Mobile phone or landline",
            "Running or gym",
            "Helau or Alaaf",
        ]
    },
    zielsetzung: {
        name: "Objectives",
        questions: [
            "What is the next step?",
            "Why is our/my goal attractive?",
            "How is our/my goal most likely achievable?",
            "What has to be done to make our/my goal clear?",
            "How can our/my goal be described in one single sentence?",
            "What can I do NOT to reach our goal?",
            "On scale of 0 (not at all) to 10 (strongly): How much do I want to reach our/my goal?",
            "On scale of 0 (not at all) to 10 (strongly): How much do I believe to reach our/my goal on the basis of my current means?",
            "Who would be happy if I reached our/my goal?",
            "Who would be happy if I did not reach our/my goal?",
            "Are there competing goals I would like to reach as well?",
            "How long do I expect does it take me to reach our/my goal? ",
            "Are there graduations for my goal (as in school grades): What would an A-graded aim look like, what would a C-graded aim look like and so forth…?",
            "Who would notice if I reached my goal?",
            "Is there a time schedule for my goal?",
            "How realistic is our/my goal?",
            "What kind of help (from others/elsewhere) do I need? ",
            "How can be checked if our/my aim has been achieved?",
            "Is my goal a part of a goal or a goal on its own?",
            "Is my goal flexible or static?",
            "Since when do I pursue my goal? What made me pursue this goal?",
            "Have I ever pursued a similar goal (as I do now)? What was its result?",
            "Is it a private or a professional goal or both?",
            "Who or what made me pursue this goal? ",
            "Is there anybody pursuing this goal more than me?",
            "Is this an intrinsic or extrinsic goal?",
            "Do I know anybody who has already reached this goal? How did he/she reach it?",
            "Which skills and character traits do I have that make me able to reach my goal?",
            "If I had to describe this goal as a picture or a metaphor: What would cross my mind?",
            "What is more important to me: My goal or the way to reach it?",
            "Who do I need to support me to reach my goal?",
            "Which resources does it take to reach my goal?"
        ]
    },
    teamarbeit: {
        name: "Teamwork",
        questions: [
            "At our workplaces we definitely need ... ",
            "In the last year the following has changed:",
            "In the future we will make decisions by ... ",
            "As a team this year we should definitely ... ",
            "I come to work on Mondays with a smile when ...",
            "I still need ... to feel more comfortable in my team.",
            "I would leave the team if ...",
            "A year from now I will look back proudly on our teamwork because ...",
            "In the future I would like to play the role of ... in my team.",
            "What we should definitely avoid is ... ",
            "I will contribute to a good working atmosphere by ...",
            "The following perspective is currently missing in our team: ",
            "I need ... to be able to do my job well.",
            "We should quit ...",
            "We need more of ...",
            "What I particularly appreciate about my team is ... ",
            "Successful teamwork is essentially influenced by ..."
        ]
    },
    kontroversen: {
        name: "Controversies",
        questions: [
            "Should the daily use of Netflix etc. be restricted by law?",
            "Should e-scooters be banned from all cities?",
            "Should all university lectures get filmed?",
            "Do we need a 6-hour workday?",
            "Do we need an unconditinional basic income?",
            "Should smoking in public be forbidden?",
            "Do we need an obligatory social year?",
            "Do we need a right to have a 'closing time'?",
            "Do we need a speed limit of 130 km/h on the highway?",
            "Should helmets be mandatory for cyclists?",
            "Should begging be forbidden in city centers?",
            "Should homework be abolished?",
            "Should the salary of politicians be based on the average income of the citizens of their country?",
            "Should job applications be anonymous by law?",
            "Should school uniforms be mandatory?",
            "Do we need a zero-alcohol-level on the roads?",
            "Should beauty contests (such as pageants) be forbidden?"
        ]
    },
    gruppenreflexion: {
        name: "Group reflection",
        questions: [
            "How did I experience our group work?",
            "Was everyone able to contribute?",
            "How satisfied am I with our results?",
            "Did we work in a division of labor? How did it work?",
            "What worked well?",
            "What could we do better next time?",
            "What should we keep doing/being as a group?",
            "Was there anything that irritated me?",
            "What surprised me?",
            "What was easy for us?",
            "What did we have difficulty with?",
            "Where could we use some advice?",
            "What would an outsider have thought if he/she had observed us?",
            "How did we coordinate and align ourselves?",
            "How did I experience the atmosphere during the group work?"
        ]
    },
    checkout: {
        name: "Checkout",
        questions: [
            "What is my precise next step?",
            "What did I get caught on today?",
            "That made me happy today:",
            "That is what I want to keep:",
            "That was astonishing for me happy today:",
            "That inspired me today:",
            "That is something I would like to do again:",
            "What will be my last thought today?",
            "That was a positive surprise today:",
            "That was impressive today:",
            "Which three steps will I take next?",
            "What was I able to observe about myself today?",
            "Which sentence would I like to get off my chest?",
            "A compliment to a person for a clever sentence or a good action.",
            "How did I feel at the beginning of today and how do I feel now?",
            "After today I think…",
            "What was my primary focus today?",
            "If my current mood was be an animal, it would be a…",
            "What was advantageous for me today?",
            "One of today's highlights today was…",
            "What do I leave behind here today?",
            "What do I want to try or do next?",
            "What do I need more of?",
            "What do I need less of?",
            "What will I do differently next time?",
            "Today I was….",
            "Which problem could I solve today?",
            "How satisfied am I about myself today?",
            "How will I reward myself for participating today?",
            "What was today's most precious mistake?",
            "Which word should we use less next time?",
            "What do I want to spend most of today's time with?",
            "I felt quite well today when...",
            "What do I still regard as frustrating?",
            "What did I miss?",
            "Where do I see potential of development?",
            "What could I smile about today?",
            "Which contribution of another participant was extraordinary worthwhile for me today?",
            "When did I leave my comfort zone today?",
            "What do I want to tell this group?",
            "What was easy for me today?",
            "Next time I hope for…",
            "What could we have done with an extra hour today?",
            "What was my greatest challenge today?",
            "What will I keep thinking about?",
            "After today I feel prepared for…",
            "What became clearer for me today?",
            "What will I change from now on?",
            "What will I keep doing?",
            "Which resolution will I take on today?",
            "Whom will I tell about today?",
            "Which three adjectives do I connect with today?",
            "What do I see clearer now?",
            "What will I have to / want to / need to keep dealing with?",
            "What is my main learning of today? ",
            "What will I remember after today?"
        ]
    }
};


/***/ }),

/***/ "fp1T":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var ngx_smart_modal__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ngx-smart-modal */ "bqtT");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../about/about.component */ "84zG");




const _c0 = function () { return ["/security"]; };
const _c1 = function () { return ["/impressum"]; };
const _c2 = function () { return ["/random-generator"]; };
class FooterComponent {
    constructor(ngxSmartModalService) {
        this.ngxSmartModalService = ngxSmartModalService;
    }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](ngx_smart_modal__WEBPACK_IMPORTED_MODULE_1__["NgxSmartModalService"])); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 20, vars: 6, consts: [[1, "footer-div", 2, "padding-bottom", "10px"], [1, "action-icon-and-text", 3, "click"], [1, "fas", "fa-2x", "fa-info-circle"], [1, "footer-div-item"], ["routerLinkActive", "nav-item-active", 1, "nav-item", 3, "routerLink"], [2, "margin-left", "10px", "margin-right", "10px"], [1, "action-icon-and-text", 3, "routerLink"], [1, "fas", "fa-2x", "fa-pen-square"], ["identifier", "myModal", 1, "nsm-dialog-animation-btt"], ["myModal", ""], [1, "nsm-dialog-animation-btt"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function FooterComponent_Template_div_click_1_listener() { return ctx.ngxSmartModalService.getModal("myModal").open(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "i", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "\u00DCber uns");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Datenschutz ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "span", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " | ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, " Impressum ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Freitext");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "ngx-smart-modal", 8, 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "about", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](3, _c0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](4, _c1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction0"](5, _c2));
    } }, directives: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLinkActive"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterLink"], ngx_smart_modal__WEBPACK_IMPORTED_MODULE_1__["NgxSmartModalComponent"], _about_about_component__WEBPACK_IMPORTED_MODULE_3__["AboutComponent"]], styles: ["a[_ngcontent-%COMP%] {\n  color: white;\n  text-decoration: none;\n}\n\n.footer-div[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  color: #a7a7a7;\n}\n\n.footer-div-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n}\n\n.action-icon-and-text[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  cursor: pointer;\n}\n\n.action-icon-and-text[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n  margin-left: 10px;\n}\n\n@media screen and (max-width: 520px) {\n  .action-icon-and-text[_ngcontent-%COMP%]   span[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2Zvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFFQTtFQUVJLFlBQUE7RUFDQSxxQkFBQTtBQUZKOztBQUtBO0VBQ0ksYUFBQTtFQUNBLDhCQUFBO0VBQ0EsY0FBQTtBQUZKOztBQUtBO0VBQ0ksYUFBQTtFQUNBLG1CQUFBO0FBRko7O0FBS0E7RUFDSSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0FBRko7O0FBS0E7RUFDSSxpQkFBQTtBQUZKOztBQUtBO0VBQ0k7SUFDSSxhQUFBO0VBRk47QUFDRiIsImZpbGUiOiJmb290ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IFwiLi4vLi4vY29sb3JzLnNjc3NcIjtcblxuYSB7XG4gICAgLy8gY29sb3I6ICRwcmltYXJ5O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi5mb290ZXItZGl2IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBjb2xvcjogI2E3YTdhNztcbn1cblxuLmZvb3Rlci1kaXYtaXRlbSB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uYWN0aW9uLWljb24tYW5kLXRleHQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5hY3Rpb24taWNvbi1hbmQtdGV4dCBzcGFuIHtcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNTIwcHgpICB7XG4gICAgLmFjdGlvbi1pY29uLWFuZC10ZXh0IHNwYW4ge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgIH1cbn0iXX0= */"] });


/***/ }),

/***/ "kWWo":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_animations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/animations */ "R0Ic");
/* harmony import */ var _services_persistence_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../services/persistence.service */ "lxVI");
/* harmony import */ var _questionnaire_questions_german__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../questionnaire/questions-german */ "Di4M");
/* harmony import */ var _questionnaire_questions_english__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../questionnaire/questions-english */ "dyHY");
/* harmony import */ var _questionnaire_questions_spanish__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../questionnaire/questions-spanish */ "6gGL");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "ofXK");
/* harmony import */ var _language_switcher_language_switcher_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./language-switcher/language-switcher.component */ "WL4d");










function NavbarComponent_language_switcher_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](0, "language-switcher");
} }
const _c0 = function () { return ["/checkin"]; };
const _c1 = function () { return { exact: true }; };
const _c2 = function () { return ["/kennenlernen"]; };
const _c3 = function () { return ["/entweder_oder"]; };
const _c4 = function () { return ["/zielsetzung"]; };
const _c5 = function () { return ["/teamarbeit"]; };
const _c6 = function () { return ["/kontroversen"]; };
const _c7 = function () { return ["/gruppenreflexion"]; };
const _c8 = function () { return ["/checkout"]; };
function NavbarComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "i", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](5, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](6, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](7, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](8);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](9, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](10, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](11, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](13, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](14, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](15, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](17, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](18, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](19, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](20);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](21, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](22, "i", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](23, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](24);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](25, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](26, "i", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](27, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](28);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](29, "a", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](30, "i", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](31, "span", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](32);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("@languageChange", ctx_r1.selectedLanguage);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](25, _c0))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](26, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.questionnaire.checkin.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](27, _c2))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](28, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.questionnaire.kennenlernen.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](29, _c3))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](30, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.questionnaire.entwederOder.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](31, _c4))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](32, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.questionnaire.zielsetzung.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](33, _c5))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](34, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.questionnaire.teamarbeit.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](35, _c6))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](36, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.questionnaire.kontroversen.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](37, _c7))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](38, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.questionnaire.gruppenreflexion.name);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](39, _c8))("routerLinkActiveOptions", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵpureFunction0"](40, _c1));
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtextInterpolate"](ctx_r1.questionnaire.checkout.name);
} }
class NavbarComponent {
    constructor(router, persistenceService) {
        this.router = router;
        this.persistenceService = persistenceService;
        this.selectedLanguage = _services_persistence_service__WEBPACK_IMPORTED_MODULE_1__["SupportedLanguages"].GERMAN;
        this.questionnaire = _questionnaire_questions_german__WEBPACK_IMPORTED_MODULE_2__["questionnaireDE"];
    }
    ngOnInit() {
        this.updateCategoryTranslation();
        this.languageSwitchSubscription = this.persistenceService.getSelectedLanguage().subscribe((language) => {
            this.selectedLanguage = language;
            this.updateCategoryTranslation();
        });
    }
    navigateToRoot() {
        this.router.navigate(['/checkin']);
    }
    notViewingImpressumOrDatenschutz() {
        return (this.router.url !== '/security') && (this.router.url !== '/impressum');
    }
    updateCategoryTranslation() {
        switch (this.selectedLanguage) {
            case _services_persistence_service__WEBPACK_IMPORTED_MODULE_1__["SupportedLanguages"].GERMAN:
                this.questionnaire = _questionnaire_questions_german__WEBPACK_IMPORTED_MODULE_2__["questionnaireDE"];
                break;
            case _services_persistence_service__WEBPACK_IMPORTED_MODULE_1__["SupportedLanguages"].ENGLISH:
                this.questionnaire = _questionnaire_questions_english__WEBPACK_IMPORTED_MODULE_3__["questionnaireEN"];
                break;
            case _services_persistence_service__WEBPACK_IMPORTED_MODULE_1__["SupportedLanguages"].SPANISH:
                this.questionnaire = _questionnaire_questions_spanish__WEBPACK_IMPORTED_MODULE_4__["questionnaireES"];
                break;
            default:
                this.questionnaire = _questionnaire_questions_german__WEBPACK_IMPORTED_MODULE_2__["questionnaireDE"];
                break;
        }
    }
    ngOnDestroy() {
        this.languageSwitchSubscription.unsubscribe();
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdirectiveInject"](_services_persistence_service__WEBPACK_IMPORTED_MODULE_1__["PersistenceService"])); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 7, vars: 2, consts: [["id", "logoContainer"], [2, "margin-right", "10px", "cursor", "pointer", 3, "click"], ["src", "../../assets/logo-stuhlkreis.png", 2, "height", "35px", "vertical-align", "middle"], [1, "nav-title"], [4, "ngIf"], ["class", "nav-item-container", 4, "ngIf"], [1, "nav-item-container"], ["routerLinkActive", "nav-item-active", 1, "nav-item", 2, "margin-right", "15px", 3, "routerLink", "routerLinkActiveOptions"], [1, "fa", "fa-sun"], [1, "sk-nav-item-compressed", 2, "margin-left", "10px"], [1, "fas", "fa-handshake"], [1, "fas", "fa-exchange-alt"], [1, "fas", "fa-bullseye"], [1, "fas", "fa-users"], [1, "fas", "fa-balance-scale-left"], [1, "fas", "fa-comments"], [1, "fa", "fa-moon"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵlistener"]("click", function NavbarComponent_Template_div_click_1_listener() { return ctx.navigateToRoot(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementStart"](3, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtext"](4, " digitaler-stuhlkreis.de ");
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](5, NavbarComponent_language_switcher_5_Template, 1, 0, "language-switcher", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵtemplate"](6, NavbarComponent_div_6_Template, 33, 41, "div", 5);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.notViewingImpressumOrDatenschutz());
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵproperty"]("ngIf", ctx.notViewingImpressumOrDatenschutz());
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_7__["NgIf"], _language_switcher_language_switcher_component__WEBPACK_IMPORTED_MODULE_8__["LanguageSwitcherComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkWithHref"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterLinkActive"]], styles: [".color-primary[_ngcontent-%COMP%] {\n  color: white;\n}\n\nh4[_ngcontent-%COMP%], a[_ngcontent-%COMP%] {\n  color: white;\n  font-size: large;\n}\n\na[_ngcontent-%COMP%] {\n  text-decoration: none;\n}\n\n.nav-title[_ngcontent-%COMP%] {\n  text-decoration: none;\n  display: inline-block;\n  transition: 0.35s;\n  background-color: transparent;\n  border: 0em;\n  padding: 0px 25px 0px 7px;\n  color: #f26a38;\n  font-size: large;\n  color: white;\n  text-decoration: none;\n}\n\n.nav-bar[_ngcontent-%COMP%] {\n  justify-content: space-between;\n  align-items: center;\n}\n\n.nav-item-container[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  opacity: 1;\n  transition: all 1s;\n}\n\n.nav-item[_ngcontent-%COMP%] {\n  text-decoration: none;\n  display: inline-block;\n  background-color: transparent;\n  transition: all 2s;\n  color: white;\n}\n\n.nav-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  display: inline;\n}\n\n.social-link[_ngcontent-%COMP%] {\n  display: inline-block;\n  opacity: 1;\n  transition: all 2s;\n}\n\n@media screen and (max-width: 768px) {\n  .social-link[_ngcontent-%COMP%] {\n    display: none;\n    opacity: 0;\n    transition: all 2s;\n  }\n}\n\n@media screen and (max-width: 936px) {\n  .sk-nav-item-compressed[_ngcontent-%COMP%] {\n    display: none;\n    opacity: 0;\n    transition: all 2s;\n  }\n}\n\n#logoContainer[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 1.5rem;\n}\n\n@media screen and (max-height: 400px) {\n  #logoContainer[_ngcontent-%COMP%] {\n    font-size: smaller;\n    margin-bottom: 1rem;\n  }\n}\n\n.nav-item[_ngcontent-%COMP%]:hover {\n  border-width: 1px;\n  border-top: 0;\n  border-left: 0;\n  border-right: 0;\n  border-bottom: 1;\n  border-style: solid;\n  border-color: #f26a38;\n}\n\n.nav-item-active[_ngcontent-%COMP%] {\n  border-width: 1px;\n  border-top: 0px;\n  border-left: 0px;\n  border-right: 0px;\n  border-bottom: 1px;\n  border-style: solid;\n}\n\n@media screen and (min-width: 769px) {\n  .nav-item-hamburger[_ngcontent-%COMP%] {\n    display: none;\n    opacity: 1;\n    transition: all 2s;\n  }\n}\n\n@media (max-width: 768px) {\n  a[_ngcontent-%COMP%] {\n    font-size: medium;\n  }\n}\n\n@media (min-width: 936px) {\n  a[_ngcontent-%COMP%] {\n    font-size: smaller;\n  }\n}\n\n@media (min-width: 1025px) {\n  a[_ngcontent-%COMP%] {\n    font-size: small;\n  }\n}\n\n@media (min-width: 1252px) {\n  a[_ngcontent-%COMP%] {\n    font-size: large;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL25hdmJhci5jb21wb25lbnQuc2NzcyIsIi4uLy4uLy4uLy4uLy4uL2NvbG9ycy5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBO0VBRUksWUFBQTtBQUZKOztBQUtBOztFQUdJLFlBQUE7RUFDQSxnQkFBQTtBQUhKOztBQU1BO0VBQ0kscUJBQUE7QUFISjs7QUFTQTtFQUNJLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSxpQkFBQTtFQUNBLDZCQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0VBQ0EsY0M1Qk07RUQ2Qk4sZ0JBQUE7RUFDQSxZQUFBO0VBQ0EscUJBQUE7QUFOSjs7QUFZQTtFQUVJLDhCQUFBO0VBQ0EsbUJBQUE7QUFWSjs7QUFnQkE7RUFDSSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtBQWJKOztBQXFCQTtFQUNJLHFCQUFBO0VBQ0EscUJBQUE7RUFDQSw2QkFBQTtFQUVBLGtCQUFBO0VBQ0EsWUFBQTtBQW5CSjs7QUFzQkE7RUFDSSxlQUFBO0FBbkJKOztBQXNCQTtFQUNJLHFCQUFBO0VBQ0EsVUFBQTtFQUNBLGtCQUFBO0FBbkJKOztBQXNCQTtFQUNJO0lBQ0ksYUFBQTtJQUNBLFVBQUE7SUFDQSxrQkFBQTtFQW5CTjtBQUNGOztBQXNCQTtFQUNJO0lBQ0ksYUFBQTtJQUNBLFVBQUE7SUFDQSxrQkFBQTtFQXBCTjtBQUNGOztBQXVCQTtFQUNJLGFBQUE7RUFDQSw4QkFBQTtFQUNBLHFCQUFBO0FBckJKOztBQXdCQTtFQUNJO0lBQ0ksa0JBQUE7SUFDQSxtQkFBQTtFQXJCTjtBQUNGOztBQXdCQTtFQUNJLGlCQUFBO0VBQ0EsYUFBQTtFQUNBLGNBQUE7RUFDQSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQ2xITTtBRDRGVjs7QUF5QkE7RUFDSSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQXRCSjs7QUEwQkE7RUFDSTtJQUNJLGFBQUE7SUFDQSxVQUFBO0lBQ0Esa0JBQUE7RUF2Qk47QUFDRjs7QUE2Qkk7RUFESjtJQUVRLGlCQUFBO0VBMUJOO0FBQ0Y7O0FBNEJJO0VBTEo7SUFNUSxrQkFBQTtFQXpCTjtBQUNGOztBQTJCSTtFQVRKO0lBVVEsZ0JBQUE7RUF4Qk47QUFDRjs7QUEwQkk7RUFiSjtJQWNRLGdCQUFBO0VBdkJOO0FBQ0YiLCJmaWxlIjoibmF2YmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCBcIi4uLy4uL2NvbG9ycy5zY3NzXCI7XG5cbi5jb2xvci1wcmltYXJ5IHtcbiAgICAvLyBjb2xvcjogJHByaW1hcnk7XG4gICAgY29sb3I6IHdoaXRlO1xufVxuXG5oNCxcbmEge1xuICAgIC8vIGNvbG9yOiAjZjI2YTM4O1xuICAgIGNvbG9yOiB3aGl0ZTtcbiAgICBmb250LXNpemU6IGxhcmdlO1xufVxuXG5hIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi8vICMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1xuLy8gIyMjIyMjIyMjIFRpdGxlICMjIyMjIyMjIyMjXG4vLyAjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcbi5uYXYtdGl0bGUge1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgdHJhbnNpdGlvbjogMC4zNXM7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgYm9yZGVyOiAwZW07XG4gICAgcGFkZGluZzogMHB4IDI1cHggMHB4IDdweDtcbiAgICBjb2xvcjogJHByaW1hcnk7XG4gICAgZm9udC1zaXplOiBsYXJnZTtcbiAgICBjb2xvcjogd2hpdGU7XG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG4vLyAjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyNcbi8vICMjIyMjIyMjIyBOYXYgQ29udGFpbmVyICMjIyMjIyMjI1xuLy8gIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXG4ubmF2LWJhciB7XG4gICAgLy8gZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cblxuLy8gIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjXG4vLyAjIyMjIyMjIyMgTmF2IEl0ZW1Db250YWluZXIgIyMjIyNcbi8vICMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1xuLm5hdi1pdGVtLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBvcGFjaXR5OiAxO1xuICAgIHRyYW5zaXRpb246IGFsbCAxcztcblxuICAgIC8vIGZsZXgtd3JhcDogd3JhcDtcbn1cblxuLy8gIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1xuLy8gIyMjIyMjIyMjIE5hdiBJdGVtcyAjIyMjIyMjIyMjIyMjI1xuLy8gIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjI1xuLm5hdi1pdGVtIHtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuXG4gICAgdHJhbnNpdGlvbjogYWxsIDJzO1xuICAgIGNvbG9yOiB3aGl0ZTtcbn1cblxuLm5hdi1pdGVtIGkge1xuICAgIGRpc3BsYXk6IGlubGluZTtcbn1cblxuLnNvY2lhbC1saW5rIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgb3BhY2l0eTogMTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMnM7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgLnNvY2lhbC1saW5rIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgb3BhY2l0eTogMDtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDJzO1xuICAgIH1cbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTM2cHgpIHtcbiAgICAuc2stbmF2LWl0ZW0tY29tcHJlc3NlZCB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICAgIG9wYWNpdHk6IDA7XG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAycztcbiAgICB9XG59XG5cbiNsb2dvQ29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtaGVpZ2h0OiA0MDBweCkge1xuICAgICNsb2dvQ29udGFpbmVyIHtcbiAgICAgICAgZm9udC1zaXplOiBzbWFsbGVyO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICAgIH1cbn1cblxuLm5hdi1pdGVtOmhvdmVyIHtcbiAgICBib3JkZXItd2lkdGg6IDFweDtcbiAgICBib3JkZXItdG9wOiAwO1xuICAgIGJvcmRlci1sZWZ0OiAwO1xuICAgIGJvcmRlci1yaWdodDogMDtcbiAgICBib3JkZXItYm90dG9tOiAxO1xuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgYm9yZGVyLWNvbG9yOiAkcHJpbWFyeTtcbn1cblxuLm5hdi1pdGVtLWFjdGl2ZSB7XG4gICAgYm9yZGVyLXdpZHRoOiAxcHg7XG4gICAgYm9yZGVyLXRvcDogMHB4O1xuICAgIGJvcmRlci1sZWZ0OiAwcHg7XG4gICAgYm9yZGVyLXJpZ2h0OiAwcHg7XG4gICAgYm9yZGVyLWJvdHRvbTogMXB4O1xuICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgLy8gYm9yZGVyLWNvbG9yOiAkcHJpbWFyeTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogNzY5cHgpIHtcbiAgICAubmF2LWl0ZW0taGFtYnVyZ2VyIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgICAgb3BhY2l0eTogMTtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDJzO1xuICAgIH1cbn1cblxuLy8gQWRqdXN0IHNpemUgdG8gZml0IGFsbCBjYXRlZ29yeSBkZXNjcmlwdGlvbnNcbi8vIDkzNnB4IGlzIHRoZSBtaW5pbXVtIHJlcXVpcmVkIHZpZXdwb3J0IHRvIGRpc3BsYXkgZXZlcnl0aGluZyBpbiBzbWFsbCBzaXplXG5hIHtcbiAgICBAbWVkaWEgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgZm9udC1zaXplOiBtZWRpdW07XG4gICAgfVxuXG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDkzNnB4KSB7XG4gICAgICAgIGZvbnQtc2l6ZTogc21hbGxlcjtcbiAgICB9XG5cbiAgICBAbWVkaWEgKG1pbi13aWR0aDogMTAyNXB4KSB7XG4gICAgICAgIGZvbnQtc2l6ZTogc21hbGw7XG4gICAgfVxuXG4gICAgQG1lZGlhIChtaW4td2lkdGg6IDEyNTJweCkge1xuICAgICAgICBmb250LXNpemU6IGxhcmdlO1xuICAgIH1cbn1cbiIsIiRwcmltYXJ5OiAjZjI2YTM4O1xuJHNlY29uZGFyeTogI2ZmZmZmZjtcbiR0aGlyZDogI2E3YTdhNztcbiRzdWNjZXNzOiAjNGVkZjk5O1xuJGluZm86ICMxN2EyYjg7XG4kd2FybmluZzogI2YzYTE1ZTtcbiRkYW5nZXI6ICNmMDUwNmU7Il19 */"], data: { animation: [
            Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["trigger"])('languageChange', [
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('void => *', []),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => void', []),
                Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["transition"])('* => *', [
                    Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["animate"])(2000, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["keyframes"])([
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ offset: 0.0, opacity: 0 }),
                        Object(_angular_animations__WEBPACK_IMPORTED_MODULE_0__["style"])({ offset: 1.0, opacity: 100 }),
                    ])),
                ]),
            ]),
        ] } });


/***/ }),

/***/ "lxVI":
/*!*************************************************!*\
  !*** ./src/app/services/persistence.service.ts ***!
  \*************************************************/
/*! exports provided: PersistenceService, PersistenceCategories, SupportedLanguages */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersistenceService", function() { return PersistenceService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PersistenceCategories", function() { return PersistenceCategories; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SupportedLanguages", function() { return SupportedLanguages; });
/* harmony import */ var ngx_webstorage_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ngx-webstorage-service */ "SX+u");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "qCKp");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "fXoL");



class PersistenceService {
    constructor(storage) {
        this.storage = storage;
        this.userEntries = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"]([]);
        this.repeatQuestions = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](false);
        this.selectedLanguage = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](SupportedLanguages.GERMAN);
    }
    getUserEntries() {
        const savedValue = this.storage.get(PersistenceCategories.USER_ENTRIES);
        if (savedValue) {
            this.userEntries.next(savedValue);
        }
        return this.userEntries;
    }
    setUserEntries(value) {
        this.storage.set(PersistenceCategories.USER_ENTRIES, value);
        this.userEntries.next(value);
    }
    getRepeatQuestions() {
        const savedValue = this.storage.get(PersistenceCategories.REPEAT_QUESTIONS);
        if (savedValue) {
            this.repeatQuestions.next(savedValue);
        }
        return this.repeatQuestions;
    }
    setRepeatQuestions(value) {
        this.storage.set(PersistenceCategories.REPEAT_QUESTIONS, value);
        this.repeatQuestions.next(value);
    }
    getSelectedLanguage() {
        const savedValue = this.storage.get(PersistenceCategories.SELECTED_LANGUAGE);
        if (savedValue) {
            this.selectedLanguage.next(savedValue);
        }
        return this.selectedLanguage;
    }
    setSelectedLanguage(value) {
        this.storage.set(PersistenceCategories.SELECTED_LANGUAGE, value);
        this.selectedLanguage.next(value);
    }
}
PersistenceService.ɵfac = function PersistenceService_Factory(t) { return new (t || PersistenceService)(_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵinject"](ngx_webstorage_service__WEBPACK_IMPORTED_MODULE_0__["LOCAL_STORAGE"])); };
PersistenceService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({ token: PersistenceService, factory: PersistenceService.ɵfac, providedIn: 'root' });
var PersistenceCategories;
(function (PersistenceCategories) {
    PersistenceCategories["SELECTED_LANGUAGE"] = "SELECTED_LANGUAGE";
    PersistenceCategories["REPEAT_QUESTIONS"] = "REPEAT_QUESTIONS";
    PersistenceCategories["USER_ENTRIES"] = "USER_ENTRIES";
})(PersistenceCategories || (PersistenceCategories = {}));
var SupportedLanguages;
(function (SupportedLanguages) {
    SupportedLanguages["GERMAN"] = "GERMAN";
    SupportedLanguages["ENGLISH"] = "ENGLISH";
    SupportedLanguages["SPANISH"] = "SPANISH";
})(SupportedLanguages || (SupportedLanguages = {}));


/***/ }),

/***/ "o/Iz":
/*!***********************************************************!*\
  !*** ./src/app/type-effect-headline/heading.component.ts ***!
  \***********************************************************/
/*! exports provided: HeadingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeadingComponent", function() { return HeadingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");

class HeadingComponent {
    constructor() {
        this.heading0Shown = '';
    }
    ngOnInit() {
        this.heading0TypingCallback(this);
    }
    heading0TypingCallback(that) {
        const totalLength = that.heading0.length;
        const currentLength = that.heading0Shown.length;
        if (currentLength < totalLength) {
            that.heading0Shown += that.heading0[currentLength];
        }
        setTimeout(that.heading0TypingCallback, 80, that);
    }
}
HeadingComponent.ɵfac = function HeadingComponent_Factory(t) { return new (t || HeadingComponent)(); };
HeadingComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HeadingComponent, selectors: [["app-heading"]], inputs: { heading0: "heading0" }, decls: 3, vars: 1, consts: [[1, "heading", "animated-text"]], template: function HeadingComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx.heading0Shown);
    } }, styles: [".animated-text[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%] {\n  overflow: hidden;\n  \n  border-right: 0.15em solid white;\n  \n  white-space: nowrap;\n  \n  margin: 0 auto;\n  \n  letter-spacing: 2px;\n  \n  -webkit-animation: blink-caret 0.75s step-end infinite;\n  \n  \n  \n  animation: blink-caret 0.75s step-end infinite;\n  \n}\n\n\n\n@-webkit-keyframes blink-caret {\n  from, to {\n    border-color: transparent;\n  }\n  50% {\n    border-color: white;\n  }\n}\n\n@keyframes blink-caret {\n  from, to {\n    border-color: transparent;\n  }\n  50% {\n    border-color: white;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL2hlYWRpbmcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7RUFDSSxnQkFBQTtFQUNBLDREQUFBO0VBQ0EsZ0NBQUE7RUFDQSx5QkFBQTtFQUNBLG1CQUFBO0VBQ0EsdUNBQUE7RUFDQSxjQUFBO0VBQ0Esc0RBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0VBRUEsc0RBQUE7RUFDQSxjQUFBO0VBRUEsVUFBQTtFQUVBLGNBQUE7RUFDQSw4Q0FBQTtFQUNBLG1CQUFBO0FBRko7O0FBS0EsaUNBQUE7O0FBQ0E7RUFFSTtJQUVJLHlCQUFBO0VBSk47RUFPRTtJQUNJLG1CQUFBO0VBTE47QUFDRjs7QUFKQTtFQUVJO0lBRUkseUJBQUE7RUFKTjtFQU9FO0lBQ0ksbUJBQUE7RUFMTjtBQUNGIiwiZmlsZSI6ImhlYWRpbmcuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0ICcuLi8uLi9jb2xvcnMuc2Nzcyc7XG5cbi5hbmltYXRlZC10ZXh0IGgxIHtcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgIC8qIEVuc3VyZXMgdGhlIGNvbnRlbnQgaXMgbm90IHJldmVhbGVkIHVudGlsIHRoZSBhbmltYXRpb24gKi9cbiAgICBib3JkZXItcmlnaHQ6IDAuMTVlbSBzb2xpZCB3aGl0ZTtcbiAgICAvKiBUaGUgdHlwd3JpdGVyIGN1cnNvciAqL1xuICAgIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gICAgLyogS2VlcHMgdGhlIGNvbnRlbnQgb24gYSBzaW5nbGUgbGluZSAqL1xuICAgIG1hcmdpbjogMCBhdXRvO1xuICAgIC8qIEdpdmVzIHRoYXQgc2Nyb2xsaW5nIGVmZmVjdCBhcyB0aGUgdHlwaW5nIGhhcHBlbnMgKi9cbiAgICBsZXR0ZXItc3BhY2luZzogMnB4O1xuICAgIC8qIEFkanVzdCBhcyBuZWVkZWQgKi9cblxuICAgIC13ZWJraXQtYW5pbWF0aW9uOiBibGluay1jYXJldCAwLjc1cyBzdGVwLWVuZCBpbmZpbml0ZTtcbiAgICAvKiBTYWZhcmkgNCsgKi9cbiAgICAtbW96LWFuaW1hdGlvbjogYmxpbmstY2FyZXQgMC43NXMgc3RlcC1lbmQgaW5maW5pdGU7XG4gICAgLyogRnggNSsgKi9cbiAgICAtby1hbmltYXRpb246IGJsaW5rLWNhcmV0IDAuNzVzIHN0ZXAtZW5kIGluZmluaXRlO1xuICAgIC8qIE9wZXJhIDEyKyAqL1xuICAgIGFuaW1hdGlvbjogYmxpbmstY2FyZXQgMC43NXMgc3RlcC1lbmQgaW5maW5pdGU7XG4gICAgLyogSUUgMTArLCBGeCAyOSsgKi9cbn1cblxuLyogVGhlIHR5cGV3cml0ZXIgY3Vyc29yIGVmZmVjdCAqL1xuQGtleWZyYW1lcyBibGluay1jYXJldCB7XG5cbiAgICBmcm9tLFxuICAgIHRvIHtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICB9XG5cbiAgICA1MCUge1xuICAgICAgICBib3JkZXItY29sb3I6IHdoaXRlO1xuICAgIH1cbn0iXX0= */"] });


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "tyNb");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home/home.component */ "9vUh");
/* harmony import */ var _impressum_impressum_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./impressum/impressum.component */ "2tb1");
/* harmony import */ var _random_generator_random_generator_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./random-generator/random-generator.component */ "cWdb");
/* harmony import */ var _security_security_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./security/security.component */ "PAVq");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "fXoL");







const routes = [
    {
        path: '',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"],
    },
    {
        path: 'random-generator',
        component: _random_generator_random_generator_component__WEBPACK_IMPORTED_MODULE_3__["RandomGeneratorComponent"],
    },
    {
        path: 'impressum',
        component: _impressum_impressum_component__WEBPACK_IMPORTED_MODULE_2__["ImpressumComponent"],
    },
    {
        path: 'security',
        component: _security_security_component__WEBPACK_IMPORTED_MODULE_4__["SecurityComponent"],
    },
    {
        path: ':type',
        component: _home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"],
    }
];
class AppRoutingModule {
}
AppRoutingModule.ɵfac = function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); };
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵdefineInjector"]({ imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(routes, { relativeLinkResolution: 'legacy' })], _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_5__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"]] }); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "AytR");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map