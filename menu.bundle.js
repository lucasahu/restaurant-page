/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!********************************!*\
  !*** ./src/components/menu.js ***!
  \********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   menu: () => (/* binding */ menu)
/* harmony export */ });
const menu = document.createElement('div');

menu.classList.add('menu-component');
menu.setAttribute('id', 'menu');

menu.innerHTML = 
`<div class="menu">
    <h1 class="menu-title">Menu</h1>
    <div class="menu-content">
        <p class="item-title">Items</p>
        <div class="item">
            <p class="item-name">Espresso</p>
            <p class="item-description">Intense and invigorating, our Espresso captivates with its bold flavor and rich aroma – a pure coffee essence in every sip.</p>
        </div>
        <div class="item">
            <p class="item-name">Latte</p>
            <p class="item-description">Luxurious espresso meets velvety steamed milk, crafting a smooth and harmonious Latte that's both comforting and bold.</p>
        </div>
        <div class="item">
            <p class="item-name">Capuccino</p>
            <p class="item-description">A classic blend of espresso, frothy milk, and cocoa dusting, our Cappuccino offers a balanced and delightful Italian tradition.</p>
        </div>
        <div class="item">
            <p class="item-name">Mocha</p>
            <p class="item-description">Indulge in the perfect union of espresso and premium chocolate, crowned with whipped cream – a heavenly Mocha experience.</p>
        </div>
        <div class="item">
            <p class="item-name">Frappe</p>
            <p class="item-description">A creative fusion of chilled coffee and ice, our Frappe is a refreshing escape that redefines your coffee adventure.</p>
        </div>
        <div class="item">
            <p class="item-name">Iced Matcha Latte</p>
            <p class="item-description">Revitalize with the serene harmony of Iced Matcha, where vibrant green tea meets the cool embrace of ice and milk for pure refreshment.</p>
        </div>
    </div>
</div>`


/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVudS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnQtcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC1wYWdlLy4vc3JjL2NvbXBvbmVudHMvbWVudS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImNvbnN0IG1lbnUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcblxubWVudS5jbGFzc0xpc3QuYWRkKCdtZW51LWNvbXBvbmVudCcpO1xubWVudS5zZXRBdHRyaWJ1dGUoJ2lkJywgJ21lbnUnKTtcblxubWVudS5pbm5lckhUTUwgPSBcbmA8ZGl2IGNsYXNzPVwibWVudVwiPlxuICAgIDxoMSBjbGFzcz1cIm1lbnUtdGl0bGVcIj5NZW51PC9oMT5cbiAgICA8ZGl2IGNsYXNzPVwibWVudS1jb250ZW50XCI+XG4gICAgICAgIDxwIGNsYXNzPVwiaXRlbS10aXRsZVwiPkl0ZW1zPC9wPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiaXRlbVwiPlxuICAgICAgICAgICAgPHAgY2xhc3M9XCJpdGVtLW5hbWVcIj5Fc3ByZXNzbzwvcD5cbiAgICAgICAgICAgIDxwIGNsYXNzPVwiaXRlbS1kZXNjcmlwdGlvblwiPkludGVuc2UgYW5kIGludmlnb3JhdGluZywgb3VyIEVzcHJlc3NvIGNhcHRpdmF0ZXMgd2l0aCBpdHMgYm9sZCBmbGF2b3IgYW5kIHJpY2ggYXJvbWEg4oCTIGEgcHVyZSBjb2ZmZWUgZXNzZW5jZSBpbiBldmVyeSBzaXAuPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIml0ZW1cIj5cbiAgICAgICAgICAgIDxwIGNsYXNzPVwiaXRlbS1uYW1lXCI+TGF0dGU8L3A+XG4gICAgICAgICAgICA8cCBjbGFzcz1cIml0ZW0tZGVzY3JpcHRpb25cIj5MdXh1cmlvdXMgZXNwcmVzc28gbWVldHMgdmVsdmV0eSBzdGVhbWVkIG1pbGssIGNyYWZ0aW5nIGEgc21vb3RoIGFuZCBoYXJtb25pb3VzIExhdHRlIHRoYXQncyBib3RoIGNvbWZvcnRpbmcgYW5kIGJvbGQuPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIml0ZW1cIj5cbiAgICAgICAgICAgIDxwIGNsYXNzPVwiaXRlbS1uYW1lXCI+Q2FwdWNjaW5vPC9wPlxuICAgICAgICAgICAgPHAgY2xhc3M9XCJpdGVtLWRlc2NyaXB0aW9uXCI+QSBjbGFzc2ljIGJsZW5kIG9mIGVzcHJlc3NvLCBmcm90aHkgbWlsaywgYW5kIGNvY29hIGR1c3RpbmcsIG91ciBDYXBwdWNjaW5vIG9mZmVycyBhIGJhbGFuY2VkIGFuZCBkZWxpZ2h0ZnVsIEl0YWxpYW4gdHJhZGl0aW9uLjwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJpdGVtXCI+XG4gICAgICAgICAgICA8cCBjbGFzcz1cIml0ZW0tbmFtZVwiPk1vY2hhPC9wPlxuICAgICAgICAgICAgPHAgY2xhc3M9XCJpdGVtLWRlc2NyaXB0aW9uXCI+SW5kdWxnZSBpbiB0aGUgcGVyZmVjdCB1bmlvbiBvZiBlc3ByZXNzbyBhbmQgcHJlbWl1bSBjaG9jb2xhdGUsIGNyb3duZWQgd2l0aCB3aGlwcGVkIGNyZWFtIOKAkyBhIGhlYXZlbmx5IE1vY2hhIGV4cGVyaWVuY2UuPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzcz1cIml0ZW1cIj5cbiAgICAgICAgICAgIDxwIGNsYXNzPVwiaXRlbS1uYW1lXCI+RnJhcHBlPC9wPlxuICAgICAgICAgICAgPHAgY2xhc3M9XCJpdGVtLWRlc2NyaXB0aW9uXCI+QSBjcmVhdGl2ZSBmdXNpb24gb2YgY2hpbGxlZCBjb2ZmZWUgYW5kIGljZSwgb3VyIEZyYXBwZSBpcyBhIHJlZnJlc2hpbmcgZXNjYXBlIHRoYXQgcmVkZWZpbmVzIHlvdXIgY29mZmVlIGFkdmVudHVyZS48L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8ZGl2IGNsYXNzPVwiaXRlbVwiPlxuICAgICAgICAgICAgPHAgY2xhc3M9XCJpdGVtLW5hbWVcIj5JY2VkIE1hdGNoYSBMYXR0ZTwvcD5cbiAgICAgICAgICAgIDxwIGNsYXNzPVwiaXRlbS1kZXNjcmlwdGlvblwiPlJldml0YWxpemUgd2l0aCB0aGUgc2VyZW5lIGhhcm1vbnkgb2YgSWNlZCBNYXRjaGEsIHdoZXJlIHZpYnJhbnQgZ3JlZW4gdGVhIG1lZXRzIHRoZSBjb29sIGVtYnJhY2Ugb2YgaWNlIGFuZCBtaWxrIGZvciBwdXJlIHJlZnJlc2htZW50LjwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG48L2Rpdj5gXG5cbmV4cG9ydCB7IG1lbnUgfTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=