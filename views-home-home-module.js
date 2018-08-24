(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["views-home-home-module"],{

/***/ "./node_modules/@ngu/carousel/index.js":
/*!*********************************************!*\
  !*** ./node_modules/@ngu/carousel/index.js ***!
  \*********************************************/
/*! exports provided: NguCarouselModule, NguCarousel, NguCarouselStore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_ngu_carousel_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/ngu-carousel.module */ "./node_modules/@ngu/carousel/src/ngu-carousel.module.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NguCarouselModule", function() { return _src_ngu_carousel_module__WEBPACK_IMPORTED_MODULE_0__["NguCarouselModule"]; });

/* harmony import */ var _src_ngu_carousel_ngu_carousel_interface__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/ngu-carousel/ngu-carousel.interface */ "./node_modules/@ngu/carousel/src/ngu-carousel/ngu-carousel.interface.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NguCarousel", function() { return _src_ngu_carousel_ngu_carousel_interface__WEBPACK_IMPORTED_MODULE_1__["NguCarousel"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "NguCarouselStore", function() { return _src_ngu_carousel_ngu_carousel_interface__WEBPACK_IMPORTED_MODULE_1__["NguCarouselStore"]; });



//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/@ngu/carousel/src/ngu-carousel.directive.js":
/*!******************************************************************!*\
  !*** ./node_modules/@ngu/carousel/src/ngu-carousel.directive.js ***!
  \******************************************************************/
/*! exports provided: NguCarouselItemDirective, NguCarouselNextDirective, NguCarouselPrevDirective, NguCarouselPointDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NguCarouselItemDirective", function() { return NguCarouselItemDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NguCarouselNextDirective", function() { return NguCarouselNextDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NguCarouselPrevDirective", function() { return NguCarouselPrevDirective; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NguCarouselPointDirective", function() { return NguCarouselPointDirective; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var NguCarouselItemDirective = /** @class */ (function () {
    function NguCarouselItemDirective() {
    }
    NguCarouselItemDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    // tslint:disable-next-line:directive-selector
                    selector: '[NguCarouselItem]'
                },] },
    ];
    /** @nocollapse */
    NguCarouselItemDirective.ctorParameters = function () { return []; };
    return NguCarouselItemDirective;
}());

var NguCarouselNextDirective = /** @class */ (function () {
    function NguCarouselNextDirective() {
    }
    NguCarouselNextDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    // tslint:disable-next-line:directive-selector
                    selector: '[NguCarouselNext]'
                },] },
    ];
    /** @nocollapse */
    NguCarouselNextDirective.ctorParameters = function () { return []; };
    return NguCarouselNextDirective;
}());

var NguCarouselPrevDirective = /** @class */ (function () {
    function NguCarouselPrevDirective() {
    }
    NguCarouselPrevDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    // tslint:disable-next-line:directive-selector
                    selector: '[NguCarouselPrev]'
                },] },
    ];
    /** @nocollapse */
    NguCarouselPrevDirective.ctorParameters = function () { return []; };
    return NguCarouselPrevDirective;
}());

var NguCarouselPointDirective = /** @class */ (function () {
    function NguCarouselPointDirective() {
    }
    NguCarouselPointDirective.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Directive"], args: [{
                    // tslint:disable-next-line:directive-selector
                    selector: '[NguCarouselPoint]'
                },] },
    ];
    /** @nocollapse */
    NguCarouselPointDirective.ctorParameters = function () { return []; };
    return NguCarouselPointDirective;
}());

//# sourceMappingURL=ngu-carousel.directive.js.map

/***/ }),

/***/ "./node_modules/@ngu/carousel/src/ngu-carousel.module.js":
/*!***************************************************************!*\
  !*** ./node_modules/@ngu/carousel/src/ngu-carousel.module.js ***!
  \***************************************************************/
/*! exports provided: NguCarouselModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NguCarouselModule", function() { return NguCarouselModule; });
/* harmony import */ var _ngu_carousel_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ngu-carousel.directive */ "./node_modules/@ngu/carousel/src/ngu-carousel.directive.js");
/* harmony import */ var _ngu_item_ngu_item_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ngu-item/ngu-item.component */ "./node_modules/@ngu/carousel/src/ngu-item/ngu-item.component.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _ngu_carousel_ngu_carousel_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ngu-carousel/ngu-carousel.component */ "./node_modules/@ngu/carousel/src/ngu-carousel/ngu-carousel.component.js");
/* harmony import */ var _ngu_tile_ngu_tile_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ngu-tile/ngu-tile.component */ "./node_modules/@ngu/carousel/src/ngu-tile/ngu-tile.component.js");






var NguCarouselModule = /** @class */ (function () {
    function NguCarouselModule() {
    }
    NguCarouselModule.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"], args: [{
                    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"]],
                    exports: [
                        _ngu_carousel_ngu_carousel_component__WEBPACK_IMPORTED_MODULE_4__["NguCarouselComponent"],
                        _ngu_item_ngu_item_component__WEBPACK_IMPORTED_MODULE_1__["NguItemComponent"],
                        _ngu_tile_ngu_tile_component__WEBPACK_IMPORTED_MODULE_5__["NguTileComponent"],
                        _ngu_carousel_directive__WEBPACK_IMPORTED_MODULE_0__["NguCarouselPointDirective"],
                        _ngu_carousel_directive__WEBPACK_IMPORTED_MODULE_0__["NguCarouselItemDirective"],
                        _ngu_carousel_directive__WEBPACK_IMPORTED_MODULE_0__["NguCarouselNextDirective"],
                        _ngu_carousel_directive__WEBPACK_IMPORTED_MODULE_0__["NguCarouselPrevDirective"]
                    ],
                    declarations: [
                        _ngu_carousel_ngu_carousel_component__WEBPACK_IMPORTED_MODULE_4__["NguCarouselComponent"],
                        _ngu_item_ngu_item_component__WEBPACK_IMPORTED_MODULE_1__["NguItemComponent"],
                        _ngu_tile_ngu_tile_component__WEBPACK_IMPORTED_MODULE_5__["NguTileComponent"],
                        _ngu_carousel_directive__WEBPACK_IMPORTED_MODULE_0__["NguCarouselPointDirective"],
                        _ngu_carousel_directive__WEBPACK_IMPORTED_MODULE_0__["NguCarouselItemDirective"],
                        _ngu_carousel_directive__WEBPACK_IMPORTED_MODULE_0__["NguCarouselNextDirective"],
                        _ngu_carousel_directive__WEBPACK_IMPORTED_MODULE_0__["NguCarouselPrevDirective"]
                    ],
                    providers: []
                },] },
    ];
    /** @nocollapse */
    NguCarouselModule.ctorParameters = function () { return []; };
    return NguCarouselModule;
}());

//# sourceMappingURL=ngu-carousel.module.js.map

/***/ }),

/***/ "./node_modules/@ngu/carousel/src/ngu-carousel/ngu-carousel.component.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@ngu/carousel/src/ngu-carousel/ngu-carousel.component.js ***!
  \*******************************************************************************/
/*! exports provided: NguCarouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NguCarouselComponent", function() { return NguCarouselComponent; });
/* harmony import */ var _ngu_carousel_directive__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../ngu-carousel.directive */ "./node_modules/@ngu/carousel/src/ngu-carousel.directive.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");



var NguCarouselComponent = /** @class */ (function () {
    function NguCarouselComponent(el, renderer, platformId) {
        this.el = el;
        this.renderer = renderer;
        this.platformId = platformId;
        this.carouselLoad = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.onMove = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.pauseCarousel = false;
        this.Arr1 = Array;
        this.pointNumbers = [];
        this.data = {
            type: 'fixed',
            classText: '',
            deviceType: 'lg',
            items: 0,
            load: 0,
            deviceWidth: 0,
            carouselWidth: 0,
            itemWidth: 0,
            visibleItems: { start: 0, end: 0 },
            slideItems: 0,
            itemWidthPer: 0,
            itemLength: 0,
            currentSlide: 0,
            easing: 'cubic-bezier(0, 0, 0.2, 1)',
            speed: 400,
            transform: { xs: 0, sm: 0, md: 0, lg: 0, all: 0 },
            loop: false,
            dexVal: 0,
            touchTransform: 0,
            touch: { active: false, swipe: '', velocity: 0 },
            isEnd: false,
            isFirst: true,
            isLast: false,
            RTL: false
        };
    }
    NguCarouselComponent.prototype.ngOnChanges = function (changes) {
        // tslint:disable-next-line:no-unused-expression
        this.moveToSlide > -1 &&
            !changes.moveToSlide.firstChange &&
            this.moveTo(changes.moveToSlide.currentValue);
    };
    NguCarouselComponent.prototype.ngOnInit = function () {
        this.carousel = this.el.nativeElement;
        this.carouselMain = this.carouselMain1.nativeElement;
        this.carouselInner = this.carouselInner1.nativeElement;
        // this.carouselItems = this.carouselInner.getElementsByClassName('item');
        this.rightBtn = this.next.nativeElement;
        this.leftBtn = this.prev.nativeElement;
        this.data.type = this.userData.grid.all !== 0 ? 'fixed' : 'responsive';
        this.data.loop = this.userData.loop || false;
        this.userData.easing = this.userData.easing || 'cubic-bezier(0, 0, 0.2, 1)';
        this.data.touch.active = this.userData.touch || false;
        this.data.RTL = this.userData.RTL ? true : false;
        this.directionSym = this.data.RTL ? '' : '-';
        this.carouselSize();
        // const datas = this.itemsElements.first.nativeElement.getBoundingClientRect().width;
    };
    NguCarouselComponent.prototype.ngAfterContentInit = function () {
        var _this = this;
        this.renderer.listen(this.leftBtn, 'click', function () {
            return _this.carouselScrollOne(0);
        });
        this.renderer.listen(this.rightBtn, 'click', function () {
            return _this.carouselScrollOne(1);
        });
        this.carouselCssNode = this.createStyleElem();
        this.storeCarouselData();
        this.buttonControl();
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["isPlatformBrowser"])(this.platformId)) {
            this.carouselInterval();
            this.onWindowScrolling();
            this.touch();
            this.renderer.listen('window', 'resize', function (event) {
                _this.onResizing(event);
            });
        }
        this.items.changes.subscribe(function (val) {
            _this.data.isLast = false;
            _this.carouselPoint();
            _this.buttonControl();
        });
        // tslint:disable-next-line:no-unused-expression
        this.moveToSlide > -1 && this.moveTo(this.moveToSlide);
    };
    NguCarouselComponent.prototype.ngAfterViewInit = function () {
        if (this.userData.point.pointStyles) {
            var datas = this.userData.point.pointStyles.replace(/.ngucarouselPoint/g, "." + this.data.classText + " .ngucarouselPoint");
            this.createStyleElem(datas);
        }
        else if (this.userData.point && this.userData.point.visible) {
            this.renderer.addClass(this.pointMain.nativeElement, 'ngucarouselPointDefault');
        }
    };
    NguCarouselComponent.prototype.ngOnDestroy = function () {
        clearInterval(this.carouselInt);
        // tslint:disable-next-line:no-unused-expression
        this.itemsSubscribe && this.itemsSubscribe.unsubscribe();
    };
    NguCarouselComponent.prototype.onResizing = function (event) {
        var _this = this;
        clearTimeout(this.onResize);
        this.onResize = setTimeout(function () {
            // tslint:disable-next-line:no-unused-expression
            _this.data.deviceWidth !== event.target.outerWidth &&
                _this.storeCarouselData();
        }, 500);
    };
    /* Get Touch input */
    NguCarouselComponent.prototype.touch = function () {
        var _this = this;
        if (this.userData.touch) {
            var hammertime = new Hammer(this.carouselInner);
            hammertime.get('pan').set({ direction: Hammer.DIRECTION_HORIZONTAL });
            hammertime.on('panstart', function (ev) {
                _this.data.carouselWidth = _this.carouselInner.offsetWidth;
                _this.data.touchTransform = _this.data.transform[_this.data.deviceType];
                _this.data.dexVal = 0;
                _this.setStyle(_this.carouselInner, 'transition', '');
            });
            hammertime.on('panleft', function (ev) {
                _this.touchHandling('panleft', ev);
            });
            hammertime.on('panright', function (ev) {
                _this.touchHandling('panright', ev);
            });
            hammertime.on('panend', function (ev) {
                // this.setStyle(this.carouselInner, 'transform', '');
                _this.data.touch.velocity = ev.velocity;
                var direc = 0;
                if (!_this.data.RTL) {
                    direc = _this.data.touch.swipe === 'panright' ? 0 : 1;
                }
                else {
                    direc = _this.data.touch.swipe === 'panright' ? 1 : 0;
                }
                _this.carouselScrollOne(direc);
            });
            hammertime.on("hammer.input", function (ev) {
                // allow nested touch events to no propagate, this may have other side affects but works for now.
                // TODO: It is probably better to check the source element of the event and only apply the handle to the correct carousel
                ev.srcEvent.stopPropagation();
            });
        }
    };
    /* handle touch input */
    NguCarouselComponent.prototype.touchHandling = function (e, ev) {
        // vertical touch events seem to cause to panstart event with an odd delta
        // and a center of {x:0,y:0} so this will ignore them
        if (ev.center.x === 0) {
            return;
        }
        ev = Math.abs(ev.deltaX);
        var valt = ev - this.data.dexVal;
        valt =
            this.data.type === 'responsive'
                ? Math.abs(ev - this.data.dexVal) / this.data.carouselWidth * 100
                : valt;
        this.data.dexVal = ev;
        this.data.touch.swipe = e;
        if (!this.data.RTL) {
            this.data.touchTransform =
                e === 'panleft'
                    ? valt + this.data.touchTransform
                    : this.data.touchTransform - valt;
        }
        else {
            this.data.touchTransform =
                e === 'panright'
                    ? valt + this.data.touchTransform
                    : this.data.touchTransform - valt;
        }
        if (this.data.touchTransform > 0) {
            this.setStyle(this.carouselInner, 'transform', this.data.type === 'responsive'
                ? "translate3d(" + this.directionSym + this.data.touchTransform + "%, 0px, 0px)"
                : "translate3d(" + this.directionSym + this.data.touchTransform + "px, 0px, 0px)");
        }
        else {
            this.data.touchTransform = 0;
        }
    };
    /* this used to disable the scroll when it is not on the display */
    NguCarouselComponent.prototype.onWindowScrolling = function () {
        var top = this.carousel.offsetTop;
        var scrollY = window.scrollY;
        var heightt = window.innerHeight;
        var carouselHeight = this.carousel.offsetHeight;
        if (top <= scrollY + heightt - carouselHeight / 4 &&
            top + carouselHeight / 2 >= scrollY) {
            this.carouselIntervalEvent(0);
        }
        else {
            this.carouselIntervalEvent(1);
        }
    };
    /* store data based on width of the screen for the carousel */
    NguCarouselComponent.prototype.storeCarouselData = function () {
        if (Object(_angular_common__WEBPACK_IMPORTED_MODULE_2__["isPlatformBrowser"])(this.platformId)) {
            this.data.deviceWidth = window.innerWidth;
        }
        else {
            this.data.deviceWidth = 1200;
        }
        this.data.carouselWidth = this.carouselMain.offsetWidth;
        if (this.data.type === 'responsive') {
            this.data.deviceType =
                this.data.deviceWidth >= 1200
                    ? 'lg'
                    : this.data.deviceWidth >= 992
                        ? 'md'
                        : this.data.deviceWidth >= 768 ? 'sm' : 'xs';
            this.data.items = this.userData.grid[this.data.deviceType];
            this.data.itemWidth = this.data.carouselWidth / this.data.items;
        }
        else {
            this.data.items = Math.trunc(this.data.carouselWidth / this.userData.grid.all);
            this.data.itemWidth = this.userData.grid.all;
            this.data.deviceType = 'all';
        }
        this.data.slideItems = +(this.userData.slide < this.data.items
            ? this.userData.slide
            : this.data.items);
        this.data.load =
            this.userData.load >= this.data.slideItems
                ? this.userData.load
                : this.data.slideItems;
        this.userData.speed =
            this.userData.speed || this.userData.speed > -1
                ? this.userData.speed
                : 400;
        this.carouselPoint();
    };
    /* Init carousel point */
    NguCarouselComponent.prototype.carouselPoint = function () {
        // if (this.userData.point.visible === true) {
        var Nos = this.items.length - (this.data.items - this.data.slideItems);
        this.pointIndex = Math.ceil(Nos / this.data.slideItems);
        var pointers = [];
        if (this.pointIndex > 1 || !this.userData.point.hideOnSingleSlide) {
            for (var i = 0; i < this.pointIndex; i++) {
                pointers.push(i);
            }
        }
        this.pointNumbers = pointers;
        this.carouselPointActiver();
        if (this.pointIndex <= 1) {
            this.btnBoolean(1, 1);
        }
        else {
            if (this.data.currentSlide === 0 && !this.data.loop) {
                this.btnBoolean(1, 0);
            }
            else {
                this.btnBoolean(0, 0);
            }
        }
        this.buttonControl();
        // }
    };
    /* change the active point in carousel */
    NguCarouselComponent.prototype.carouselPointActiver = function () {
        var i = Math.ceil(this.data.currentSlide / this.data.slideItems);
        this.pointers = i;
    };
    /* this function is used to scoll the carousel when point is clicked */
    NguCarouselComponent.prototype.moveTo = function (index) {
        if (this.pointers !== index && index < this.pointIndex) {
            var slideremains = 0;
            var btns = this.data.currentSlide < index ? 1 : 0;
            if (index === 0) {
                this.btnBoolean(1, 0);
                slideremains = index * this.data.slideItems;
            }
            else if (index === this.pointIndex - 1) {
                this.btnBoolean(0, 1);
                slideremains = this.items.length - this.data.items;
            }
            else {
                this.btnBoolean(0, 0);
                slideremains = index * this.data.slideItems;
            }
            this.carouselScrollTwo(btns, slideremains, this.data.speed);
        }
    };
    /* set the style of the carousel based the inputs data */
    NguCarouselComponent.prototype.carouselSize = function () {
        this.data.classText = this.generateID();
        var dism = '';
        var styleid = '.' + this.data.classText + ' > .ngucarousel > .ngucarousel-inner > .ngucarousel-items >';
        if (this.userData.custom === 'banner') {
            this.renderer.addClass(this.carousel, 'banner');
        }
        if (this.userData.animation === 'lazy') {
            dism += styleid + " .item {transition: transform .6s ease;}";
        }
        var itemStyle = '';
        if (this.data.type === 'responsive') {
            var itemWidth_xs = this.userData.type === 'mobile'
                ? styleid + " .item {width: " + 95 / +this.userData.grid.xs + "%}"
                : styleid + " .item {width: " + 100 / +this.userData.grid.xs + "%}";
            var itemWidth_sm = styleid + ' .item {width: ' + 100 / +this.userData.grid.sm + '%}';
            var itemWidth_md = styleid + ' .item {width: ' + 100 / +this.userData.grid.md + '%}';
            var itemWidth_lg = styleid + ' .item {width: ' + 100 / +this.userData.grid.lg + '%}';
            itemStyle = "@media (max-width:767px){" + itemWidth_xs + "}\n                    @media (min-width:768px){" + itemWidth_sm + "}\n                    @media (min-width:992px){" + itemWidth_md + "}\n                    @media (min-width:1200px){" + itemWidth_lg + "}";
        }
        else {
            itemStyle = styleid + " .item {width: " + this.userData.grid.all + "px}";
        }
        this.renderer.addClass(this.carousel, this.data.classText);
        this.data.RTL &&
            this.renderer.addClass(this.carousel, 'ngurtl');
        this.createStyleElem(dism + " " + itemStyle);
    };
    /* logic to scroll the carousel step 1 */
    NguCarouselComponent.prototype.carouselScrollOne = function (Btn) {
        var itemSpeed = this.data.speed;
        var translateXval, currentSlide = 0;
        var touchMove = Math.ceil(this.data.dexVal / this.data.itemWidth);
        this.setStyle(this.carouselInner, 'transform', '');
        if (this.pointIndex === 1) {
            return;
        }
        else if (Btn === 0 &&
            ((!this.data.loop && !this.data.isFirst) || this.data.loop)) {
            var slide = this.data.slideItems * this.pointIndex;
            var currentSlideD = this.data.currentSlide - this.data.slideItems;
            var MoveSlide = currentSlideD + this.data.slideItems;
            this.btnBoolean(0, 1);
            if (this.data.currentSlide === 0) {
                currentSlide = this.items.length - this.data.items;
                itemSpeed = 400;
                this.btnBoolean(0, 1);
            }
            else if (this.data.slideItems >= MoveSlide) {
                currentSlide = translateXval = 0;
                this.btnBoolean(1, 0);
            }
            else {
                this.btnBoolean(0, 0);
                if (touchMove > this.data.slideItems) {
                    currentSlide = this.data.currentSlide - touchMove;
                    itemSpeed = 200;
                }
                else {
                    currentSlide = this.data.currentSlide - this.data.slideItems;
                }
            }
            this.carouselScrollTwo(Btn, currentSlide, itemSpeed);
        }
        else if (Btn === 1 && ((!this.data.loop && !this.data.isLast) || this.data.loop)) {
            if (this.items.length <=
                this.data.currentSlide + this.data.items + this.data.slideItems &&
                !this.data.isLast) {
                currentSlide = this.items.length - this.data.items;
                this.btnBoolean(0, 1);
            }
            else if (this.data.isLast) {
                currentSlide = translateXval = 0;
                itemSpeed = 400;
                this.btnBoolean(1, 0);
            }
            else {
                this.btnBoolean(0, 0);
                if (touchMove > this.data.slideItems) {
                    currentSlide =
                        this.data.currentSlide +
                            this.data.slideItems +
                            (touchMove - this.data.slideItems);
                    itemSpeed = 200;
                }
                else {
                    currentSlide = this.data.currentSlide + this.data.slideItems;
                }
            }
            this.carouselScrollTwo(Btn, currentSlide, itemSpeed);
        }
        // cubic-bezier(0.15, 1.04, 0.54, 1.13)
    };
    /* logic to scroll the carousel step 2 */
    NguCarouselComponent.prototype.carouselScrollTwo = function (Btn, currentSlide, itemSpeed) {
        // tslint:disable-next-line:no-unused-expression
        this.userData.animation &&
            this.carouselAnimator(Btn, currentSlide + 1, currentSlide + this.data.items, itemSpeed, Math.abs(this.data.currentSlide - currentSlide));
        if (this.data.dexVal !== 0) {
            var val = Math.abs(this.data.touch.velocity);
            var somt = Math.floor(this.data.dexVal /
                val /
                this.data.dexVal *
                (this.data.deviceWidth - this.data.dexVal));
            somt = somt > itemSpeed ? itemSpeed : somt;
            itemSpeed = somt < 200 ? 200 : somt;
            this.data.dexVal = 0;
        }
        this.setStyle(this.carouselInner, 'transition', "transform " + itemSpeed + "ms " + this.userData.easing);
        this.data.itemLength = this.items.length;
        this.transformStyle(currentSlide);
        this.data.currentSlide = currentSlide;
        this.onMove.emit(this.data);
        this.carouselPointActiver();
        this.carouselLoadTrigger();
        this.buttonControl();
    };
    /* boolean function for making isFirst and isLast */
    NguCarouselComponent.prototype.btnBoolean = function (first, last) {
        this.data.isFirst = first ? true : false;
        this.data.isLast = last ? true : false;
    };
    /* set the transform style to scroll the carousel  */
    NguCarouselComponent.prototype.transformStyle = function (slide) {
        var slideCss = '';
        if (this.data.type === 'responsive') {
            this.data.transform.xs = 100 / this.userData.grid.xs * slide;
            this.data.transform.sm = 100 / this.userData.grid.sm * slide;
            this.data.transform.md = 100 / this.userData.grid.md * slide;
            this.data.transform.lg = 100 / this.userData.grid.lg * slide;
            slideCss = "@media (max-width: 767px) {\n              ." + this.data
                .classText + " > .ngucarousel > .ngucarousel-inner > .ngucarousel-items { transform: translate3d(" + this.directionSym + this
                .data.transform.xs + "%, 0, 0); } }\n            @media (min-width: 768px) {\n              ." + this.data
                .classText + " > .ngucarousel > .ngucarousel-inner > .ngucarousel-items { transform: translate3d(" + this.directionSym + this
                .data.transform.sm + "%, 0, 0); } }\n            @media (min-width: 992px) {\n              ." + this.data
                .classText + " > .ngucarousel > .ngucarousel-inner > .ngucarousel-items { transform: translate3d(" + this.directionSym + this
                .data.transform.md + "%, 0, 0); } }\n            @media (min-width: 1200px) {\n              ." + this.data
                .classText + " > .ngucarousel > .ngucarousel-inner > .ngucarousel-items { transform: translate3d(" + this.directionSym + this
                .data.transform.lg + "%, 0, 0); } }";
        }
        else {
            this.data.transform.all = this.userData.grid.all * slide;
            slideCss = "." + this.data
                .classText + " > .ngucarousel > .ngucarousel-inner > .ngucarousel-items { transform: translate3d(" + this.directionSym + this.data
                .transform.all + "px, 0, 0);";
        }
        // this.renderer.createText(this.carouselCssNode, slideCss);
        this.carouselCssNode.innerHTML = slideCss;
    };
    /* this will trigger the carousel to load the items */
    NguCarouselComponent.prototype.carouselLoadTrigger = function () {
        if (typeof this.userData.load === 'number') {
            // tslint:disable-next-line:no-unused-expression
            this.items.length - this.data.load <=
                this.data.currentSlide + this.data.items &&
                this.carouselLoad.emit(this.data.currentSlide);
        }
    };
    /* generate Class for each carousel to set specific style */
    NguCarouselComponent.prototype.generateID = function () {
        var text = '';
        var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        for (var i = 0; i < 6; i++) {
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return "ngucarousel" + text;
    };
    /* handle the auto slide */
    NguCarouselComponent.prototype.carouselInterval = function () {
        var _this = this;
        if (typeof this.userData.interval === 'number' && this.data.loop) {
            this.renderer.listen(this.carouselMain, 'touchstart', function () {
                _this.carouselIntervalEvent(1);
            });
            this.renderer.listen(this.carouselMain, 'touchend', function () {
                _this.carouselIntervalEvent(0);
            });
            this.renderer.listen(this.carouselMain, 'mouseenter', function () {
                _this.carouselIntervalEvent(1);
            });
            this.renderer.listen(this.carouselMain, 'mouseleave', function () {
                _this.carouselIntervalEvent(0);
            });
            this.renderer.listen('window', 'scroll', function () {
                clearTimeout(_this.onScrolling);
                _this.onScrolling = setTimeout(function () {
                    _this.onWindowScrolling();
                }, 600);
            });
            this.carouselInt = setInterval(function () {
                // tslint:disable-next-line:no-unused-expression
                !_this.pauseCarousel && _this.carouselScrollOne(1);
            }, this.userData.interval);
        }
    };
    /* pause interval for specific time */
    NguCarouselComponent.prototype.carouselIntervalEvent = function (ev) {
        var _this = this;
        this.evtValue = ev;
        if (this.evtValue === 0) {
            clearTimeout(this.pauseInterval);
            this.pauseInterval = setTimeout(function () {
                // tslint:disable-next-line:no-unused-expression
                _this.evtValue === 0 && (_this.pauseCarousel = false);
            }, this.userData.interval);
        }
        else {
            this.pauseCarousel = true;
        }
    };
    /* animate the carousel items */
    NguCarouselComponent.prototype.carouselAnimator = function (direction, start, end, speed, length) {
        var _this = this;
        var val = length < 5 ? length : 5;
        val = val === 1 ? 3 : val;
        var itemList = this.items.toArray();
        if (direction === 1) {
            for (var i = start - 1; i < end; i++) {
                val = val * 2;
                // tslint:disable-next-line:no-unused-expression
                itemList[i] && this.setStyle(itemList[i].nativeElement, 'transform', "translate3d(" + val + "px, 0, 0)");
            }
        }
        else {
            for (var i = end - 1; i >= start - 1; i--) {
                val = val * 2;
                // tslint:disable-next-line:no-unused-expression
                itemList[i] && this.setStyle(itemList[i].nativeElement, 'transform', "translate3d(-" + val + "px, 0, 0)");
            }
        }
        setTimeout(function () {
            _this.items.forEach(function (elem) {
                return _this.setStyle(elem.nativeElement, 'transform', "translate3d(0, 0, 0)");
            });
        }, speed * .7);
    };
    /* control button for loop */
    NguCarouselComponent.prototype.buttonControl = function () {
        if (!this.data.loop || (this.data.isFirst && this.data.isLast)) {
            this.setStyle(this.leftBtn, 'display', this.data.isFirst ? 'none' : 'block');
            this.setStyle(this.rightBtn, 'display', this.data.isLast ? 'none' : 'block');
        }
        else {
            this.setStyle(this.leftBtn, 'display', 'block');
            this.setStyle(this.rightBtn, 'display', 'block');
        }
    };
    /** Short form for setElementStyle */
    NguCarouselComponent.prototype.setStyle = function (el, prop, val) {
        this.renderer.setStyle(el, prop, val);
    };
    /** For generating style tag */
    NguCarouselComponent.prototype.createStyleElem = function (datas) {
        var styleItem = this.renderer.createElement('style');
        if (datas) {
            var styleText = this.renderer.createText(datas);
            this.renderer.appendChild(styleItem, styleText);
        }
        this.renderer.appendChild(this.carousel, styleItem);
        return styleItem;
    };
    NguCarouselComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"], args: [{
                    // tslint:disable-next-line:component-selector
                    selector: 'ngu-carousel',
                    template: "<div #ngucarousel class=\"ngucarousel\"><div #forTouch class=\"ngucarousel-inner\"><div #nguitems class=\"ngucarousel-items\"><ng-content select=\"[NguCarouselItem]\"></ng-content></div><div style=\"clear: both\"></div></div><ng-content select=\"[NguCarouselPrev]\"></ng-content><ng-content select=\"[NguCarouselNext]\"></ng-content></div><div #points *ngIf=\"userData.point.visible\"><ul class=\"ngucarouselPoint\"><li #pointInner *ngFor=\"let i of pointNumbers; let i = index\" [class.active]=\"i==pointers\" (click)=\"moveTo(i)\"></li></ul></div>",
                    styles: ["\n    :host {\n      display: block;\n      position: relative;\n    }\n\n    :host.ngurtl {\n      direction: rtl;\n    }\n\n    .ngucarousel .ngucarousel-inner {\n      position: relative;\n      overflow: hidden;\n    }\n    .ngucarousel .ngucarousel-inner .ngucarousel-items {\n      white-space: nowrap;\n      position: relative;\n    }\n\n    .banner .ngucarouselPointDefault .ngucarouselPoint {\n      position: absolute;\n      width: 100%;\n      bottom: 20px;\n    }\n    .banner .ngucarouselPointDefault .ngucarouselPoint li {\n      background: rgba(255, 255, 255, 0.55);\n    }\n    .banner .ngucarouselPointDefault .ngucarouselPoint li.active {\n      background: white;\n    }\n    .banner .ngucarouselPointDefault .ngucarouselPoint li:hover {\n      cursor: pointer;\n    }\n\n    .ngucarouselPointDefault .ngucarouselPoint {\n      list-style-type: none;\n      text-align: center;\n      padding: 12px;\n      margin: 0;\n      white-space: nowrap;\n      overflow: auto;\n      box-sizing: border-box;\n    }\n    .ngucarouselPointDefault .ngucarouselPoint li {\n      display: inline-block;\n      border-radius: 50%;\n      background: rgba(0, 0, 0, 0.55);\n      padding: 4px;\n      margin: 0 4px;\n      transition-timing-function: cubic-bezier(0.17, 0.67, 0.83, 0.67);\n      transition: 0.4s;\n    }\n    .ngucarouselPointDefault .ngucarouselPoint li.active {\n      background: #6b6b6b;\n      transform: scale(1.8);\n    }\n    .ngucarouselPointDefault .ngucarouselPoint li:hover {\n      cursor: pointer;\n    }\n\n  "]
                },] },
    ];
    /** @nocollapse */
    NguCarouselComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], },
        { type: Object, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["PLATFORM_ID"],] },] },
    ]; };
    NguCarouselComponent.propDecorators = {
        'userData': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['inputs',] },],
        'moveToSlide': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"], args: ['moveToSlide',] },],
        'carouselLoad': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"], args: ['carouselLoad',] },],
        'onMove': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"], args: ['onMove',] },],
        'items': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"], args: [_ngu_carousel_directive__WEBPACK_IMPORTED_MODULE_0__["NguCarouselItemDirective"], { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },] },],
        'points': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChildren"], args: ['pointInner', { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },] },],
        'next': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"], args: [_ngu_carousel_directive__WEBPACK_IMPORTED_MODULE_0__["NguCarouselNextDirective"], { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },] },],
        'prev': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChild"], args: [_ngu_carousel_directive__WEBPACK_IMPORTED_MODULE_0__["NguCarouselPrevDirective"], { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },] },],
        'carouselMain1': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['ngucarousel', { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },] },],
        'carouselInner1': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['nguitems', { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },] },],
        'carousel1': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['main', { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },] },],
        'pointMain': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['points', { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },] },],
        'forTouch': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"], args: ['forTouch', { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] },] },],
    };
    return NguCarouselComponent;
}());

//# sourceMappingURL=ngu-carousel.component.js.map

/***/ }),

/***/ "./node_modules/@ngu/carousel/src/ngu-carousel/ngu-carousel.interface.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@ngu/carousel/src/ngu-carousel/ngu-carousel.interface.js ***!
  \*******************************************************************************/
/*! exports provided: NguCarouselStore, ItemsControl, Touch, Transfrom, NguCarousel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NguCarouselStore", function() { return NguCarouselStore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ItemsControl", function() { return ItemsControl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Touch", function() { return Touch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Transfrom", function() { return Transfrom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NguCarousel", function() { return NguCarousel; });
var NguCarouselStore = /** @class */ (function () {
    function NguCarouselStore() {
    }
    return NguCarouselStore;
}());

var ItemsControl = /** @class */ (function () {
    function ItemsControl() {
    }
    return ItemsControl;
}());

var Touch = /** @class */ (function () {
    function Touch() {
    }
    return Touch;
}());

var Transfrom = /** @class */ (function () {
    function Transfrom() {
    }
    return Transfrom;
}());

var NguCarousel = /** @class */ (function () {
    function NguCarousel() {
    }
    return NguCarousel;
}());

//# sourceMappingURL=ngu-carousel.interface.js.map

/***/ }),

/***/ "./node_modules/@ngu/carousel/src/ngu-item/ngu-item.component.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@ngu/carousel/src/ngu-item/ngu-item.component.js ***!
  \***********************************************************************/
/*! exports provided: NguItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NguItemComponent", function() { return NguItemComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var NguItemComponent = /** @class */ (function () {
    function NguItemComponent() {
        this.classes = true;
    }
    NguItemComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'ngu-item',
                    template: "<ng-content></ng-content>",
                    styles: ["\n    :host {\n        display: inline-block;\n        white-space: initial;\n        vertical-align: top;\n    }\n  "]
                },] },
    ];
    /** @nocollapse */
    NguItemComponent.ctorParameters = function () { return []; };
    NguItemComponent.propDecorators = {
        'classes': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.item',] },],
    };
    return NguItemComponent;
}());

//# sourceMappingURL=ngu-item.component.js.map

/***/ }),

/***/ "./node_modules/@ngu/carousel/src/ngu-tile/ngu-tile.component.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@ngu/carousel/src/ngu-tile/ngu-tile.component.js ***!
  \***********************************************************************/
/*! exports provided: NguTileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NguTileComponent", function() { return NguTileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");

var NguTileComponent = /** @class */ (function () {
    function NguTileComponent() {
        this.classes = true;
    }
    NguTileComponent.decorators = [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"], args: [{
                    selector: 'ngu-tile',
                    template: "<div class=\"tile\"><ng-content></ng-content></div>",
                    styles: ["\n    :host {\n        display: inline-block;\n        white-space: initial;\n        padding: 10px;\n        box-sizing: border-box;\n        vertical-align: top;\n    }\n\n    .tile {\n        box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);\n    }\n\n    * {\n        box-sizing: border-box;\n    }\n  "]
                },] },
    ];
    /** @nocollapse */
    NguTileComponent.ctorParameters = function () { return []; };
    NguTileComponent.propDecorators = {
        'classes': [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"], args: ['class.item',] },],
    };
    return NguTileComponent;
}());

//# sourceMappingURL=ngu-tile.component.js.map

/***/ }),

/***/ "./src/app/shared/helpers/window.helper.ts":
/*!*************************************************!*\
  !*** ./src/app/shared/helpers/window.helper.ts ***!
  \*************************************************/
/*! exports provided: _window, WINDOW, WindowRef, BrowserWindowRef, windowProvider, WINDOW_PROVIDERS */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "_window", function() { return _window; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WINDOW", function() { return WINDOW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WindowRef", function() { return WindowRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BrowserWindowRef", function() { return BrowserWindowRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "windowProvider", function() { return windowProvider; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WINDOW_PROVIDERS", function() { return WINDOW_PROVIDERS; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

function _window() {
    return window;
}
var WINDOW = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["InjectionToken"]("WindowToken");
var WindowRef = /** @class */ (function () {
    function WindowRef() {
    }
    Object.defineProperty(WindowRef.prototype, "nativeWindow", {
        get: function () {
            throw new Error("Not implemented.");
        },
        enumerable: true,
        configurable: true
    });
    return WindowRef;
}());

var BrowserWindowRef = /** @class */ (function (_super) {
    __extends(BrowserWindowRef, _super);
    function BrowserWindowRef() {
        return _super.call(this) || this;
    }
    Object.defineProperty(BrowserWindowRef.prototype, "nativeWindow", {
        get: function () {
            return _window();
        },
        enumerable: true,
        configurable: true
    });
    return BrowserWindowRef;
}(WindowRef));

var browserWindowProvider = {
    provide: WindowRef,
    useClass: BrowserWindowRef
};
var windowProvider = {
    provide: WINDOW,
    useFactory: _window,
    deps: []
};
var WINDOW_PROVIDERS = [
    browserWindowProvider,
    windowProvider
];


/***/ }),

/***/ "./src/app/views/home/all-sections.component.ts":
/*!******************************************************!*\
  !*** ./src/app/views/home/all-sections.component.ts ***!
  \******************************************************/
/*! exports provided: AllSectionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllSectionsComponent", function() { return AllSectionsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_landing_fix_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/landing-fix.service */ "./src/app/shared/services/landing-fix.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AllSectionsComponent = /** @class */ (function () {
    function AllSectionsComponent(fix) {
        this.fix = fix;
    }
    AllSectionsComponent.prototype.ngOnInit = function () {
        this.fix.addFix();
    };
    AllSectionsComponent.prototype.ngOnDestroy = function () {
        this.fix.removeFix();
    };
    AllSectionsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home-one',
            template: "<app-header></app-header>\n  <div style=\"height: 80px; width: 100%\"></div>\n  <app-portfolio [backgroundGray]=\"true\"></app-portfolio>\n  <app-portfolio-carousel></app-portfolio-carousel>\n  <app-services [backgroundGray]=\"true\"></app-services>\n  <app-services-carousel></app-services-carousel>\n  <app-testimonials [backgroundGray]=\"true\"></app-testimonials>\n  <app-testimonials-carousel></app-testimonials-carousel>\n  <app-cta></app-cta>\n  <app-pricings></app-pricings>\n  <app-contact [backgroundGray]=\"true\"></app-contact>\n  <app-footer></app-footer>"
        }),
        __metadata("design:paramtypes", [_shared_services_landing_fix_service__WEBPACK_IMPORTED_MODULE_1__["LandingFixService"]])
    ], AllSectionsComponent);
    return AllSectionsComponent;
}());



/***/ }),

/***/ "./src/app/views/home/contact/contact.component.html":
/*!***********************************************************!*\
  !*** ./src/app/views/home/contact/contact.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"contact-section\" class=\"home-section\" [ngClass]=\"{'light-gray': backgroundGray}\">\n  <div class=\"container\">\n    <div class=\"section-header\">\n      <h2>Send Us An Email</h2>\n      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Numquam, error.</p>\n    </div>\n    <form [formGroup]=\"contactForm\">\n      <div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutWrap=\"wrap\">\n        <div fxFlex=\"100\">\n          <div class=\"pb-1\">\n            <mat-form-field class=\"full-width\">\n              <input matInput name=\"name\" [formControl]=\"contactForm.controls['name']\" placeholder=\"Your Name\">\n            </mat-form-field>\n            <small *ngIf=\"contactForm.controls.name.touched && contactForm.controls.name.errors?.required\" class=\"form-error-msg\">Name is required</small>\n          </div>\n          <div class=\"pb-1\">\n            <mat-form-field class=\"full-width\">\n              <input matInput name=\"email\" [formControl]=\"contactForm.controls['email']\" placeholder=\"Your Email\">\n            </mat-form-field>\n            <small *ngIf=\"contactForm.controls.email.touched && contactForm.controls.email.errors?.email\" class=\"form-error-msg\">Invalid Email</small>\n          </div>\n\n        </div>\n        <div fxFlex=\"100\">\n          <div class=\"pb-1\">\n            <mat-form-field class=\"full-width\">\n              <input matInput name=\"subject\" [formControl]=\"contactForm.controls['subject']\" placeholder=\"Subject\">\n            </mat-form-field>\n            <small *ngIf=\"contactForm.controls.subject.touched && contactForm.controls.subject.errors?.required\" class=\"form-error-msg\">Subject is required</small>\n          </div>\n          <div class=\"pb-1\">\n            <mat-form-field class=\"full-width\">\n              <textarea matInput row=\"8\" name=\"message\" [formControl]=\"contactForm.controls['message']\" placeholder=\"Message\"></textarea>\n            </mat-form-field>\n            <small *ngIf=\"contactForm.controls.message.touched && contactForm.controls.message.errors?.required\" class=\"form-error-msg\">Message is required</small>\n          </div>\n        </div>\n\n        <div fxFlex=\"100\">\n          <button mat-fab color=\"primary\" [disabled]=\"!contactForm.valid\"><mat-icon>send</mat-icon></button>\n        </div>\n      </div>\n    </form>\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/views/home/contact/contact.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/views/home/contact/contact.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/home/contact/contact.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/views/home/contact/contact.component.ts ***!
  \*********************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ContactComponent = /** @class */ (function () {
    function ContactComponent(fb) {
        this.fb = fb;
    }
    ContactComponent.prototype.ngOnInit = function () {
        this.contactForm = this.fb.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]],
            subject: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]],
            message: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('backgroundGray'),
        __metadata("design:type", Object)
    ], ContactComponent.prototype, "backgroundGray", void 0);
    ContactComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/views/home/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.scss */ "./src/app/views/home/contact/contact.component.scss")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/views/home/cta/cta.component.html":
/*!***************************************************!*\
  !*** ./src/app/views/home/cta/cta.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"home-section home-cta\">\n  <div class=\"container\">\n    <div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutWrap=\"nowrap\" fxLayoutGap=\"20px\">\n      <div fxFlex=\"66.666\">\n        <h2>Egret Is A Complete UI Framework For Angular</h2>\n        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure nam, illum et quis officiis beatae.</p>\n      </div>\n      <div fxFlex=\"33.333\" fxLayoutAlign=\"center center\">\n        <button mat-raised-button mat-lg-button color=\"accent\" (click)=\"buyEgret()\">BUY EGRET NOW</button>\n      </div>\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/views/home/cta/cta.component.scss":
/*!***************************************************!*\
  !*** ./src/app/views/home/cta/cta.component.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".home-cta {\n  background: url('home-bg.jpg') no-repeat center center;\n  background-size: cover;\n  color: #ffffff; }\n"

/***/ }),

/***/ "./src/app/views/home/cta/cta.component.ts":
/*!*************************************************!*\
  !*** ./src/app/views/home/cta/cta.component.ts ***!
  \*************************************************/
/*! exports provided: CtaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CtaComponent", function() { return CtaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CtaComponent = /** @class */ (function () {
    function CtaComponent() {
    }
    CtaComponent.prototype.ngOnInit = function () {
    };
    CtaComponent.prototype.buyEgret = function () {
        window.open('https://themeforest.net/item/egret-angular-4-material-design-admin-template/20161805?ref=mh_rafi');
    };
    CtaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-cta',
            template: __webpack_require__(/*! ./cta.component.html */ "./src/app/views/home/cta/cta.component.html"),
            styles: [__webpack_require__(/*! ./cta.component.scss */ "./src/app/views/home/cta/cta.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], CtaComponent);
    return CtaComponent;
}());



/***/ }),

/***/ "./src/app/views/home/demo/demo.component.html":
/*!*****************************************************!*\
  !*** ./src/app/views/home/demo/demo.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"section-demo\" class=\"home-section\">\n\n  <div class=\"container\">\n    <div class=\"section-header\">\n      <h2>Choose a Demo</h2>\n      <p>Each Section is an Angular Component and located in it's own directory. So it's super easy to customize.</p>\n    </div>\n    <div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutWrap=\"nowrap\" fxLayoutGap=\"30px\">\n      <div fxFlex=\"33.33\">\n        <mat-card matRipple [routerLink]=\"'/home/one'\">\n          <mat-card-content class=\"p-1 m-0\">\n            <h5>Version 1</h5>\n          </mat-card-content>\n          <img mat-card-image class=\"m-0\" src=\"assets/images/demo_home_one.jpg\">\n        </mat-card>\n      </div>\n      <div fxFlex=\"33.33\">\n        <mat-card matRipple [routerLink]=\"'/home/two'\">\n          <mat-card-content class=\"p-1 m-0\">\n            <h5>Version 2</h5>\n          </mat-card-content>\n          <img mat-card-image class=\"m-0\" src=\"assets/images/demo_home_two.jpg\">\n        </mat-card>\n      </div>\n      <div fxFlex=\"33.33\">\n        <mat-card matRipple [routerLink]=\"'/home/all'\">\n          <mat-card-content class=\"p-1 m-0\">\n            <h5>All Sections</h5>\n          </mat-card-content>\n          <img mat-card-image class=\"m-0\" src=\"assets/images/demo_all.jpg\">\n        </mat-card>\n      </div>\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/views/home/demo/demo.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/views/home/demo/demo.component.scss ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-card {\n  text-align: center;\n  cursor: pointer;\n  padding: 0;\n  margin: 0; }\n  .mat-card:active {\n    outline: 0; }\n  :host ::ng-deep .mat-card-image {\n  vertical-align: bottom; }\n  :host ::ng-deep .mat-ripple-element {\n  height: 0; }\n"

/***/ }),

/***/ "./src/app/views/home/demo/demo.component.ts":
/*!***************************************************!*\
  !*** ./src/app/views/home/demo/demo.component.ts ***!
  \***************************************************/
/*! exports provided: DemoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoComponent", function() { return DemoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_landing_fix_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../shared/services/landing-fix.service */ "./src/app/shared/services/landing-fix.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DemoComponent = /** @class */ (function () {
    function DemoComponent(fix) {
        this.fix = fix;
    }
    DemoComponent.prototype.ngOnInit = function () {
        this.fix.addFix();
    };
    DemoComponent.prototype.ngOnDestroy = function () {
        this.fix.removeFix();
    };
    DemoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-demo',
            template: __webpack_require__(/*! ./demo.component.html */ "./src/app/views/home/demo/demo.component.html"),
            styles: [__webpack_require__(/*! ./demo.component.scss */ "./src/app/views/home/demo/demo.component.scss")]
        }),
        __metadata("design:paramtypes", [_shared_services_landing_fix_service__WEBPACK_IMPORTED_MODULE_1__["LandingFixService"]])
    ], DemoComponent);
    return DemoComponent;
}());



/***/ }),

/***/ "./src/app/views/home/footer/footer.component.html":
/*!*********************************************************!*\
  !*** ./src/app/views/home/footer/footer.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer class=\"home-footer\">\n  <section class=\"home-footer-top\">\n    <div class=\"container\">\n      <div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutWrap=\"nowrap\">\n        <div fxFlex=\"50\" class=\"footer-box\">\n          <h4 class=\"footer-box-title\"><b>About Us</b></h4>\n          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. \n            Officiis perferendis rem, aut aliquam neque nam? dolor sit amet, consectetur adipisicing elit consectetur adipisicing elit. \n            Officiis perferendis rem, aut aliquam.</p>\n          <button mat-raised-button color=\"accent\">Contact Us</button>\n        </div>\n        <div fxFlex=\"25\" class=\"footer-box\">\n          <h4 class=\"footer-box-title\"><b>Contact</b></h4>\n          <mat-list>\n            <mat-list-item>\n              <mat-icon mat-list-icon color=\"accent\">email</mat-icon>\n              <h5 matLine><b>Email</b></h5>\n              <p matLine> email@abc.com </p>\n            </mat-list-item>\n            <mat-list-item>\n                <mat-icon mat-list-icon color=\"accent\">location_on</mat-icon>\n                <h5 matLine><b>Adress</b></h5>\n                <p matLine>Topoban, Akhalia </p>\n                <p matLine>Sylhet 3114, BD </p>\n              </mat-list-item>\n          </mat-list>\n        </div>\n        <div fxFlex=\"25\" class=\"footer-box\">\n          <h4 class=\"footer-box-title\"><b>Disclaimer</b></h4>\n          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officiis perferendis rem, aut aliquam neque nam?</p>\n          <div class=\"socials pt-1\">\n            <ul>\n              <li><a href=\"\" class=\"social-icon linkedin\"></a></li>\n              <li><a href=\"\" class=\"social-icon twitter\"></a></li>\n              <li><a href=\"\" class=\"social-icon facebook\"></a></li>\n            </ul>\n          </div>\n        </div>\n      </div>\n    </div>\n  </section>\n</footer>"

/***/ }),

/***/ "./src/app/views/home/footer/footer.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/views/home/footer/footer.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".home-footer-top {\n  background-color: #212121;\n  color: #ffffff !important; }\n\n.mat-list-item {\n  color: #ffffff !important; }\n\n.footer-box {\n  padding: 30px;\n  box-shadow: 3px 0px 4px rgba(0, 0, 0, 0.2); }\n\n.footer-box:first-child {\n  padding-left: 0; }\n\n.footer-box-title {\n  position: relative;\n  margin: 0 0 24px;\n  padding-bottom: 12px; }\n\n.footer-box-title::after {\n  content: \"\";\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  height: 2px;\n  width: 64px;\n  background-color: #ffc107; }\n\n.footer-box .mat-list {\n  padding: 0 !important; }\n\n.footer-box .mat-list-item-content {\n  padding-left: 0 !important; }\n\n.footer-box .mat-list-text {\n  color: #ffffff; }\n\n.socials ul {\n  list-style: none;\n  padding: 0;\n  margin: 0; }\n\n.socials ul li {\n  display: inline-block; }\n\n.social-icon {\n  display: inline-block;\n  width: 24px;\n  height: 24px;\n  margin: 8px;\n  background-size: cover !important; }\n\n.social-icon.facebook {\n  background: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAN1wAADdcBQiibeAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAFzSURBVFiF7Za9SsRAFIXPGQYs1SJYWGir+NNa+QAKWwV3wcZKtvUJbETEysJesAoMgbyDFoKCIoIPoC+gIijrzLVRiCGZNZMFLXIgzb33zP3C3EmGIoImStN0TUTWASx+PROFkp04jo+q/Dq0sTEmInkMYMNXR3LFlw8CMMaMk7wGMB3iz0uFmEjuj6J5EECapksA+r+tlyFDVhvAObda0/foS9aeAaXUvOelzkmeArhyzgkARFF0N1IAEZmryllrt7vd7n2d9WpvgYhMVqRe6zYPAvDoI8Q0SoAg0XdKkiSZ1VpvFcJ9AFMl5e8ADvIBEXHW2pNer/dQ1cM7hFrrPQCbvpqcxgDs5gMkobV+A3BYZfJuAcngf8W3RMTb489noAXwAojIbcP1haT3U+w9hgCQZdmPG85gMDgjuVBS+qy1nskHlFK20+m8NAIoyhhzQ3K5JPUUx3HxOjZU/3sGWoAWoAVoAVqAMpG8LIuLyEUIwCe7+Gy5d2YZUwAAAABJRU5ErkJggg==\") no-repeat center center; }\n\n.social-icon.twitter {\n  background: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAN1wAADdcBQiibeAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAMiSURBVFiFzZdNiBxFGIaft2tGNC54kAEvUQSjoIElGPW6QSHgaWa6GmUxK1FQCf7gQSGoEKL4c80tQmQ1B4epnt3LCqIhIPHn4E+QzboREcSfKEkOguSwcXo+D7uz9Ex2d7Y3s1k/aLqr6ut6H6qqu96SmbGVEW2p+v8BoDTMztI0nZD0sJndB9wEfG1mX5XL5SPVavXvbl4IwTnn9szOzp5Udw2EEJ5MkuTYRoQbjcZ259x7kh5aqV3Sb5Iez7LsnKT9wASQeu+fl5kxNTV1W6fT+QV4w3v/WhHxEMINkk4Ddw1INUBLz3+Y2a4kSS5EAFmWdclfTdP0zSIAURS9tQ5xcuI/AC9KOpCm6UQEIGl3LvFgCOHjRqOxfVCPIYTrzOxAEWBgB9AEbvfeH48AzOx0D6q0t1QqzYUQnsqRXxHOuZ1AuSBAGfhwbm7uCcBkZoQQ7pD000rZkubN7Jhz7nitVjufbwsh7JP0QRF1M/u+UqnsHhsbawMsfwVpmp5l7bn818w+kvSFmc075+azLBuVNFUEAPjEe7+3W1j+D0iqmtnnwM2rvFiWVAWqkuh0OkjKCooD9IxiBBBCeMXMxoG3gcsFOnMbAPgrXygBSIqAQt//RsPMfs+Xu3vBl9dCHMA5dypfzi/CE8CDm6x/3nt/C4t/RSC3G0p6lr752YT4NC/eAxDH8dl2u32/mX23iQBH+yt6/IBz7hIwDrwEXByy+Gfe+1P9lf1+wEn6FrhxyOKY2eGV6ntGIEmSC8A7wxYHmkmSnBwIAOC9f13Su0MU/7VUKj29WuOKnjCO42fM7FFJP1+leAY8lrdj/aFBtnx6enq03W6/L2m0oPhlSeNxHLfWSloVYHJy8vqRkZEXgIMsGswicSmKomq9Xj8xKHEZYGZmZtvCwsLdwD1mtlPSI2Y20BX1h5mdiaJofxzH36wnX81m815JzwH7uLpzwj9mdqhSqRzpmo11AXRHoNVq7TKzl4GEAtvskmNqRlF0tF6v/1mU+oo1EEK4VdIDLJrHO5fuO4BtwLnc9aNzrlWr1c4UFV0T4FrHlp8NtxzgPyyZKGARDimiAAAAAElFTkSuQmCC\") no-repeat center center; }\n\n.social-icon.linkedin {\n  background: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAN1wAADdcBQiibeAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAH/SURBVFiF7ZY/aBNhGMZ/7yWVWBRNEFHwD0KFgoOgLnZzFOJyfxaFEkEQcXAo1NVJcXGQUkoGFxfJ3cVkK7qIiwjiVgQHV6uDUlJTlZDHJYFa76LCJVnyLh/f8zwv7++477jPJAHQaDT2d7vdWUntVqv1vlKpfGcEZbVaLWdm94FbQL6nfwFu+r7/ZNgAjpktAAvbhgOUgMf1ev3M0AGAqyleXtL8KAAOD/APjQLg9QB/kJcNgKTbwB8n3szedbvdlWEDmCTCMJwxs0XgNLABvCwUCg/K5XJ7JADjLGes04F8HMfnJM0kmZJeBEGw3t9HUeQCuxKiW77vNwGq1epUsVi8YmZzkk4AOcdx1oA1M3vmuu6H3wAkXQOupwBeBFa37R8B+xJyn4BmGIZnS6VSHTgGYGb9B7nQW9txHC96nrcMCDJ8BXEcz5rZan94Sk1LWgrDsAlYlgDTkp4DB/4lbGaXoii6nCXAXuDI/zSY2b0wDHcP4yvYBJ4Cr4CfaSFJR81sPlMAM7sh6aDv+67v+3OO45wH1ge0nMoMwMyWPM9bCYJgq6+5rvsWuDOg7WSWAHeTdEmplxozywxg03Xdj0lGEAQbwNcUuONZAXz7i/85Rc+P/V8wAZgATAAmAGMHyEt6CDSSzE6n82aH5Ema2pnL5XI/Bg3p3Tv3JHm/AOkjrg/niJtWAAAAAElFTkSuQmCC\") no-repeat center center; }\n\n.social-icon.dribble {\n  background: url(\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAN1wAADdcBQiibeAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAXQSURBVFiFxZd/iFxXFcc/577ZbSK0yWomKwFJFqw/krSNjQ21WtwqVKRpzMy+a7OBUFrpLxWbwCIapdFgf/iHv/4orEURLM6w3rdvl8aUguiOfzSFloJiuohad1s1NM5ustK0K7Pz3vGPd2fzMpnJDgXx/PPuOffc8/3ee989515RVXqRWq1WqNfr+0XkFmAbMOS/APPAHDCvqqeKxeL08PBws5e4shaBarU62NfXdz/wILClJ7ZwBhhfWVl5anR09Ow7JSDOuaMi8gjQn7Mvi0gEvJ6m6evGmHWqulNVrxORHcDVOd+Gqh631j4GdATqSKBSqQz09/c/DdzhTReAZaAIoKqftdY+1yleHMdDqjqmqg8AxttPNhqNQwcPHjy/JoGpqamdSZI8Q7bHAJGqHhaRjwAnvO01Vd1prb3QaVYAcRzflCTJuIjc6E1zQRDsK5VKp/N+Jq9UKpWBHPgK8PkwDK219p9hGP4KqHrXrSLyaDdwgHK5/NLs7OxNwBFvGkqS5JlKpTLQjYD4ZR8Cmqp6VxiGLu+sqg8DC179chzHN1+JxLFjx1LgQznTkMeQywg4547i91xV77bWTrUHtNbWgcOtsWma/sQ519/uB9mxjaLop8AD3hT77x0e6yKBarU66P92gNhaW+k2qzAMf6Gqz3p1h4h8vd1nYmLiwwsLCzPAvQAi8mgYhiNAzeuPVKvVwVUC/pz3A2+q6le6gbckSZIHgTe9etQ5tx1gampqcxRFTwRB8HvgE0BTRB4aGRn5JkAQBIeBFOj3mMjMzExhYWHhNbIk83gYhkfbATtJFEVfBJ706osi8rKq3gOs87Y/GmO+UC6XX2obN062LWc2bdq01dTr9f0enCAIJnoBj+N4q4icza3CHlV9yIPXVfWr586d290ODmCM+Y5vbqnX6/sLPrcD/KVUKv3Bt8U5d02SJANBEGwE3m+M2a2qNwK7gfd04KWqOrZ+/frxvXv3vt2NfLlc/kcURQvAJhG5pcDFgrI5iqK/ARuBDSJiCoVCPnp7rERVT4vIVWRHTYwxf7oSeE5OA8PANsPFjLfBtwdoS1Be3lDVaeBrwG3Ly8sbrLW7VPXulkOapmM9gCMirWw4JM6588BGVT0hIi+q6pKInFfVpSAIlpIkOd9sNhevVNWcc78Vkdu8WiUrSFeTnawGsAT8C/i7qr7q0/oYsFTIxflNGIY/6mUGrYk45+4UkSMicmvOPrrG7C/RC2SXiV0ickOvyM65T4nID0Tk+i4g30/T9N8i8hZwQVXXGWOuU9UbgB3Aeu86XyC7yezynWsBF40x3xORQznzBeDHwDXAfQBpmkbW2he6xAhE5GmylZozZCuAiOyo1WqFToP8wD0iclpVW+D/AR4LgmBbGIZjqvrD3Ap8plsca20CfNSr80ZVT3nlqsXFxQ92GhRF0edEZAbYDKCqJ1R1exiG3yiVSos+8Cww64fc3o1AHMdbgWt9nFOmWCxOk93hAC6rA865+8kq2buAt4ARa+0+a+1ch/i/9N8909PTGzsRUNUv+eaZYrE4bfztddx33uec+1iO7cdF5EmyvHBWVT8ZhmF8edjV4K37Q5Akyafb+6vV6mCOwPjw8HDTAKysrDxFdl5FRMZrtVrBOfduVa0CBRF5tdls3mytfbkbOGTbICJ/9upl29DX1/c42Uo2PGaW8UZHR8+q6nHvd329Xj8iIj9T1fcBK2ma3nXgwIH5K4HnVuF3nQhMTk7eC9zjfY63EttqyvVX55Nky/AEsM93fWutmedFRJ73INsmJiY+ABBF0a2q2irdJz0WlxAAtNFoHCLLCy37X1X1u72CA6Rp+vxqcGNud84dAn5NVqrnPMZqZevlWv6CMebhTrW9m0RR9AYwCNTxbwm6XMt7fZgo8HNV/XaX47cqk5OT16pqBOTTdO8Pk3xfl6fZkqq+4kvqK6r6NvBeEdlCVuO353zf2dMsL//Px+kl8r96nv8XHLTDy+ddCjcAAAAASUVORK5CYII=\") no-repeat center center; }\n\n@media (max-width: 959px) {\n  .footer-box:first-child {\n    padding-left: 30px; }\n  .footer-box {\n    box-shadow: 0px 3px 2px rgba(0, 0, 0, 0.2); } }\n"

/***/ }),

/***/ "./src/app/views/home/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/views/home/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/views/home/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.scss */ "./src/app/views/home/footer/footer.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/views/home/header/header.component.html":
/*!*********************************************************!*\
  !*** ./src/app/views/home/header/header.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header id=\"home-header\" [ngClass]=\"{'header-fixed': isFixed}\">\n  <div class=\"container\" fxLayout=\"row\" fxLayoutWrap=\"wrap\" fxLayoutAlign=\"start center\">\n    <div class=\"header-mobile-top\" fxLayout=\"row\" fxLayoutWrap=\"wrap\" fxLayoutAlign=\"start center\">\n      <div class=\"home-logo mr-1\">\n          <a href=\"/\"><img src=\"assets/images/logo-full.png\" alt=\"logo\"></a>\n      </div>\n      <button mat-icon-button id=\"menu-toggle\" (click)=\"toggleMenu()\"><mat-icon>menu</mat-icon></button>\n    </div>\n    <div fxFlex class=\"top-menu\">\n     <!-- <button mat-button id=\"dashboard-topbtn\" class=\"hometop-btn\" [routerLink]=\"'/home/demos'\"><strong>Demos</strong></button>-->\n      <button mat-button id=\"dashboard-topbtn\" class=\"hometop-btn\" scrollTo=\"portfolio-section\"><strong translate>Works</strong></button>\n      <button mat-button id=\"dashboard-topbtn\" class=\"hometop-btn\" scrollTo=\"service-section\"><strong translate>Services</strong></button>\n      <button mat-button id=\"dashboard-topbtn\" class=\"hometop-btn\" scrollTo=\"testimonials-section\"><strong>Testimonials</strong></button>\n      <button mat-button id=\"dashboard-topbtn\" class=\"hometop-btn\" scrollTo=\"pricings-section\"><strong>Pricings</strong></button>\n      <button mat-button id=\"dashboard-topbtn\" class=\"hometop-btn\" scrollTo=\"contact-section\"><strong>Contact</strong></button>\n      <span fxFlex></span>\n\n\n      <button mat-button id=\"dashboard-topbtn\" (click)=\"switchLanguage('en')\"><strong>en</strong></button>\n      <button mat-button id=\"dashboard-topbtn\" (click)=\"switchLanguage('fr')\"><strong>fr</strong></button>\n   \n    \n      <!--<button mat-button id=\"dashboard-topbtn\" class=\"hometop-btn icon-button\" (click)=\"buyEgret()\"><mat-icon>person</mat-icon><strong> My Account</strong></button>-->\n    </div>\n  </div>\n</header>"

/***/ }),

/***/ "./src/app/views/home/header/header.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/views/home/header/header.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#home-header {\n  position: absolute;\n  width: 100%;\n  background: #fff;\n  top: 0;\n  left: 0;\n  right: 0;\n  padding: 22px 0;\n  transition: padding 0.3s linear;\n  -webkit-transition: padding 0.3s linear;\n  z-index: 999; }\n\n#home-header > .container {\n  height: auto; }\n\n.hometop-btn:hover ::ng-deep .mat-button-focus-overlay {\n  display: none; }\n\n#home-header:not(.header-fixed) .hometop-btn ::ng-deep .mat-button-ripple {\n  top: -22px;\n  bottom: -22px; }\n\n.header-fixed {\n  position: fixed !important;\n  left: 0;\n  right: 0;\n  top: 0;\n  background: #fff;\n  padding: 0 !important;\n  box-shadow: 0 0 4px rgba(0, 0, 0, 0.14), 0 4px 8px rgba(0, 0, 0, 0.28);\n  -webkit-animation: .6s slideDown forwards;\n          animation: .6s slideDown forwards; }\n\n.header-fixed .container {\n  height: 60px !important; }\n\n.header-fixed .hometop-btn {\n  line-height: 60px !important; }\n\n.home-logo {\n  display: flex;\n  align-items: center; }\n\n.home-logo a {\n    display: inherit; }\n\n#menu-toggle {\n  display: none;\n  position: absolute;\n  right: 5px;\n  top: 10px; }\n\n.icon-button .mat-icon {\n  font-size: 20px; }\n\n@media (max-width: 991px) {\n  #home-header {\n    padding: 0; }\n  #home-header > .container {\n    height: 60px;\n    padding: 0; }\n  .menu-opened:host .header-mobile-top {\n    padding: 13px 0; }\n  #menu-toggle {\n    display: block; }\n  .menu-opened:host .container {\n    height: auto !important; }\n  .home-logo {\n    margin-left: 15px; }\n  .top-menu {\n    display: none !important; }\n  .menu-opened:host .top-menu {\n    display: block !important;\n    width: 100% !important;\n    flex: none !important;\n    background: #f3f3f3; }\n  .menu-opened:host .top-menu button {\n    display: block;\n    width: 100%;\n    line-height: 56px !important; } }\n"

/***/ }),

/***/ "./src/app/views/home/header/header.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/views/home/header/header.component.ts ***!
  \*******************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _shared_helpers_window_helper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../shared/helpers/window.helper */ "./src/app/shared/helpers/window.helper.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(document, window, translate) {
        this.document = document;
        this.window = window;
        this.translate = translate;
        this.menuOpened = false;
        translate.setDefaultLang('en');
    }
    HeaderComponent.prototype.switchLanguage = function (language) {
        this.translate.use(language);
    };
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent.prototype.onWindowScroll = function () {
        var offset = this.window.pageYOffset || this.document.documentElement.scrollTop || this.document.body.scrollTop || 0;
        if (offset > 10) {
            this.isFixed = true;
        }
        else {
            this.isFixed = false;
        }
    };
    HeaderComponent.prototype.toggleMenu = function () {
        this.menuOpened = !this.menuOpened;
    };
    HeaderComponent.prototype.buyEgret = function () {
        this.window.open('https://themeforest.net/item/egret-angular-4-material-design-admin-template/20161805?ref=mh_rafi');
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])("window:scroll", []),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], HeaderComponent.prototype, "onWindowScroll", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostBinding"])("class.menu-opened"),
        __metadata("design:type", Object)
    ], HeaderComponent.prototype, "menuOpened", void 0);
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/views/home/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.scss */ "./src/app/views/home/header/header.component.scss")]
        }),
        __param(0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DOCUMENT"])),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_shared_helpers_window_helper__WEBPACK_IMPORTED_MODULE_2__["WINDOW"])),
        __metadata("design:paramtypes", [Document,
            Window,
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_3__["TranslateService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/views/home/home-one.component.ts":
/*!**************************************************!*\
  !*** ./src/app/views/home/home-one.component.ts ***!
  \**************************************************/
/*! exports provided: HomeOneComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeOneComponent", function() { return HomeOneComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_landing_fix_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/landing-fix.service */ "./src/app/shared/services/landing-fix.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeOneComponent = /** @class */ (function () {
    function HomeOneComponent(fix) {
        this.fix = fix;
    }
    HomeOneComponent.prototype.ngOnInit = function () {
        this.fix.addFix();
    };
    HomeOneComponent.prototype.ngOnDestroy = function () {
        this.fix.removeFix();
    };
    HomeOneComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home-one',
            template: "<app-header></app-header>\n  <app-intro></app-intro>\n  <app-portfolio></app-portfolio>\n  <app-services [backgroundGray]=\"true\"></app-services>\n  <app-testimonials-carousel></app-testimonials-carousel>\n  <app-cta></app-cta>\n  <app-pricings></app-pricings>\n  <app-contact [backgroundGray]=\"true\"></app-contact>\n  <app-footer></app-footer>"
        }),
        __metadata("design:paramtypes", [_shared_services_landing_fix_service__WEBPACK_IMPORTED_MODULE_1__["LandingFixService"]])
    ], HomeOneComponent);
    return HomeOneComponent;
}());



/***/ }),

/***/ "./src/app/views/home/home-two.component.ts":
/*!**************************************************!*\
  !*** ./src/app/views/home/home-two.component.ts ***!
  \**************************************************/
/*! exports provided: HomeTwoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeTwoComponent", function() { return HomeTwoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_services_landing_fix_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/landing-fix.service */ "./src/app/shared/services/landing-fix.service.ts");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeTwoComponent = /** @class */ (function () {
    function HomeTwoComponent(fix, translate) {
        this.fix = fix;
        this.translate = translate;
        translate.setDefaultLang('en');
    }
    HomeTwoComponent.prototype.switchLanguage = function (language) {
        this.translate.use(language);
    };
    HomeTwoComponent.prototype.ngOnInit = function () {
        this.fix.addFix();
    };
    HomeTwoComponent.prototype.ngOnDestroy = function () {
        this.fix.removeFix();
    };
    HomeTwoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home-two',
            template: "<app-header></app-header>\n  <app-intro-two></app-intro-two>\n  <app-portfolio-carousel></app-portfolio-carousel>\n  <app-testimonials [backgroundGray]=\"true\"></app-testimonials>\n  <app-services-carousel></app-services-carousel>\n  <app-cta></app-cta>\n  <app-pricings></app-pricings>\n  <app-contact [backgroundGray]=\"true\"></app-contact>\n  <app-footer></app-footer>"
        }),
        __metadata("design:paramtypes", [_shared_services_landing_fix_service__WEBPACK_IMPORTED_MODULE_1__["LandingFixService"],
            _ngx_translate_core__WEBPACK_IMPORTED_MODULE_2__["TranslateService"]])
    ], HomeTwoComponent);
    return HomeTwoComponent;
}());



/***/ }),

/***/ "./src/app/views/home/home.module.ts":
/*!*******************************************!*\
  !*** ./src/app/views/home/home.module.ts ***!
  \*******************************************/
/*! exports provided: HomeModule, HttpLoaderFactory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpLoaderFactory", function() { return HttpLoaderFactory; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _ngu_carousel__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngu/carousel */ "./node_modules/@ngu/carousel/index.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _home_routing__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./home.routing */ "./src/app/views/home/home.routing.ts");
/* harmony import */ var _home_one_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./home-one.component */ "./src/app/views/home/home-one.component.ts");
/* harmony import */ var _home_two_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./home-two.component */ "./src/app/views/home/home-two.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./header/header.component */ "./src/app/views/home/header/header.component.ts");
/* harmony import */ var _intro_one_intro_one_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./intro-one/intro-one.component */ "./src/app/views/home/intro-one/intro-one.component.ts");
/* harmony import */ var _intro_two_intro_two_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./intro-two/intro-two.component */ "./src/app/views/home/intro-two/intro-two.component.ts");
/* harmony import */ var _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./portfolio/portfolio.component */ "./src/app/views/home/portfolio/portfolio.component.ts");
/* harmony import */ var _services_services_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/services.component */ "./src/app/views/home/services/services.component.ts");
/* harmony import */ var _cta_cta_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./cta/cta.component */ "./src/app/views/home/cta/cta.component.ts");
/* harmony import */ var _pricings_pricings_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./pricings/pricings.component */ "./src/app/views/home/pricings/pricings.component.ts");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/views/home/contact/contact.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/views/home/footer/footer.component.ts");
/* harmony import */ var _testimonials_testimonials_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./testimonials/testimonials.component */ "./src/app/views/home/testimonials/testimonials.component.ts");
/* harmony import */ var _portfolio_carousel_portfolio_carousel_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./portfolio-carousel/portfolio-carousel.component */ "./src/app/views/home/portfolio-carousel/portfolio-carousel.component.ts");
/* harmony import */ var _testimonials_carousel_testimonials_carousel_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./testimonials-carousel/testimonials-carousel.component */ "./src/app/views/home/testimonials-carousel/testimonials-carousel.component.ts");
/* harmony import */ var _services_carousel_services_carousel_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./services-carousel/services-carousel.component */ "./src/app/views/home/services-carousel/services-carousel.component.ts");
/* harmony import */ var _demo_demo_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./demo/demo.component */ "./src/app/views/home/demo/demo.component.ts");
/* harmony import */ var _all_sections_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./all-sections.component */ "./src/app/views/home/all-sections.component.ts");
/* harmony import */ var _shared_helpers_window_helper__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../shared/helpers/window.helper */ "./src/app/shared/helpers/window.helper.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _ngx_translate_core__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @ngx-translate/core */ "./node_modules/@ngx-translate/core/fesm5/ngx-translate-core.js");
/* harmony import */ var _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @ngx-translate/http-loader */ "./node_modules/@ngx-translate/http-loader/esm5/ngx-translate-http-loader.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







// import { CommonDirectivesModule } from '../../directives/common/common-directives.module';























var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatMenuModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatListModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatRippleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSlideToggleModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBarModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"],
                _ngu_carousel__WEBPACK_IMPORTED_MODULE_6__["NguCarouselModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(_home_routing__WEBPACK_IMPORTED_MODULE_8__["HomeRoutes"]),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_27__["HttpClientModule"],
                _ngx_translate_core__WEBPACK_IMPORTED_MODULE_28__["TranslateModule"].forRoot({
                    loader: {
                        provide: _ngx_translate_core__WEBPACK_IMPORTED_MODULE_28__["TranslateLoader"],
                        useFactory: HttpLoaderFactory,
                        deps: [_angular_common_http__WEBPACK_IMPORTED_MODULE_27__["HttpClient"]]
                    }
                })
            ],
            declarations: [
                _home_one_component__WEBPACK_IMPORTED_MODULE_9__["HomeOneComponent"],
                _home_two_component__WEBPACK_IMPORTED_MODULE_10__["HomeTwoComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_11__["HeaderComponent"],
                _intro_one_intro_one_component__WEBPACK_IMPORTED_MODULE_12__["IntroOneComponent"],
                _intro_two_intro_two_component__WEBPACK_IMPORTED_MODULE_13__["IntroTwoComponent"],
                _portfolio_portfolio_component__WEBPACK_IMPORTED_MODULE_14__["PortfolioComponent"],
                _services_services_component__WEBPACK_IMPORTED_MODULE_15__["ServicesComponent"],
                _cta_cta_component__WEBPACK_IMPORTED_MODULE_16__["CtaComponent"],
                _pricings_pricings_component__WEBPACK_IMPORTED_MODULE_17__["PricingsComponent"],
                _contact_contact_component__WEBPACK_IMPORTED_MODULE_18__["ContactComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_19__["FooterComponent"],
                _testimonials_testimonials_component__WEBPACK_IMPORTED_MODULE_20__["TestimonialsComponent"],
                _portfolio_carousel_portfolio_carousel_component__WEBPACK_IMPORTED_MODULE_21__["PortfolioCarouselComponent"],
                _testimonials_carousel_testimonials_carousel_component__WEBPACK_IMPORTED_MODULE_22__["TestimonialsCarouselComponent"],
                _services_carousel_services_carousel_component__WEBPACK_IMPORTED_MODULE_23__["ServicesCarouselComponent"],
                _demo_demo_component__WEBPACK_IMPORTED_MODULE_24__["DemoComponent"],
                _all_sections_component__WEBPACK_IMPORTED_MODULE_25__["AllSectionsComponent"]
            ],
            providers: [_shared_helpers_window_helper__WEBPACK_IMPORTED_MODULE_26__["WINDOW_PROVIDERS"]]
        })
    ], HomeModule);
    return HomeModule;
}());

function HttpLoaderFactory(http) {
    return new _ngx_translate_http_loader__WEBPACK_IMPORTED_MODULE_29__["TranslateHttpLoader"](http, 'assets/i18n/', '.json');
}


/***/ }),

/***/ "./src/app/views/home/home.routing.ts":
/*!********************************************!*\
  !*** ./src/app/views/home/home.routing.ts ***!
  \********************************************/
/*! exports provided: HomeRoutes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeRoutes", function() { return HomeRoutes; });
/* harmony import */ var _home_one_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home-one.component */ "./src/app/views/home/home-one.component.ts");
/* harmony import */ var _home_two_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-two.component */ "./src/app/views/home/home-two.component.ts");
/* harmony import */ var _all_sections_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./all-sections.component */ "./src/app/views/home/all-sections.component.ts");
/* harmony import */ var _demo_demo_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./demo/demo.component */ "./src/app/views/home/demo/demo.component.ts");




var HomeRoutes = [
    { path: 'one', component: _home_one_component__WEBPACK_IMPORTED_MODULE_0__["HomeOneComponent"] },
    { path: 'two', component: _home_two_component__WEBPACK_IMPORTED_MODULE_1__["HomeTwoComponent"] },
    { path: 'all', component: _all_sections_component__WEBPACK_IMPORTED_MODULE_2__["AllSectionsComponent"] },
    { path: 'demos', component: _demo_demo_component__WEBPACK_IMPORTED_MODULE_3__["DemoComponent"] }
];


/***/ }),

/***/ "./src/app/views/home/intro-one/intro-one.component.html":
/*!***************************************************************!*\
  !*** ./src/app/views/home/intro-one/intro-one.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"intro-section\" class=\"home-intro-section\">\n  <div class=\"container\" fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutWrap=\"nowrap\" fxLayoutGap=\"30px\">\n    <div fxFlex=\"50\">\n      <h1 class=\"home-intro-title\">Your complete Angular App Development kit</h1>\n      <div class=\"home-intro-desc\">\n        Egret implements the official Angular Material Design components and built with Angular CLI. <br> No Bootstrap!,\n        No jQuery! and Only TypeScript!\n      </div>\n      <div class=\"intro-list\" fxLayout=\"column\" fxLayoutGap=\"30px\">\n        <div fxFlex=\"100\">\n          <mat-icon color=\"accent\">check</mat-icon><span fxFlex=\"20px\"></span> 100+ Custom Pipes, Directives And Components</div>\n        <div fxFlex=\"100\">\n          <mat-icon color=\"accent\">check</mat-icon><span fxFlex=\"20px\"></span> 4 color Themes and multi language support</div>\n        <div fxFlex=\"100\">\n          <mat-icon color=\"accent\">check</mat-icon><span fxFlex=\"20px\"></span> Super Flexible And Customizable</div>\n      </div>\n      <div fxLayout=\"row\" fxLayout.lt-sm=\"column\">\n        <button mat-raised-button mat-lg-button color=\"primary\" (click)=\"buyEgret()\"><mat-icon>add_shopping_cart</mat-icon> BUY EGRET</button>\n        <span fxFlex=\"20px\"></span>\n        <button mat-raised-button mat-lg-button id=\"frontend-btn\" (click)=\"getNGLanding()\"><mat-icon>get_app</mat-icon> ANGULAR LANDING</button>\n      </div>\n    </div>\n    <span fxFlex.lt-md=\"30px\" fxFlex=\"0\"></span>\n    <div fxFlex=\"50\">\n      <div class=\"intro-product\">\n        <a matRipple class=\"intro-product-link\" href=\"https://themeforest.net/item/egret-angular-4-material-design-admin-template/20161805?ref=mh_rafi\" target=\"_blank\">\n          <div class=\"price\">$24</div>\n          <span class=\"price-text\">Buy From ThemeForest</span>\n        </a>\n        <img mat-card-image src=\"assets/images/egret-screen.png\" [style.margin]=\"'0 !important'\">\n      </div>\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/views/home/intro-one/intro-one.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/views/home/intro-one/intro-one.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".home-intro-section {\n  background: url('home-bg.jpg') no-repeat center center;\n  background-size: cover;\n  padding: 180px 0;\n  color: #ffffff;\n  overflow: hidden; }\n\n.home-intro-title {\n  margin: 0 0 24px;\n  font-size: 48px;\n  font-weight: 900;\n  line-height: 52px;\n  text-shadow: 0 4px 4px rgba(0, 0, 0, 0.22); }\n\n.home-intro-desc {\n  margin: 0 0 40px;\n  font-size: 22px;\n  font-weight: 400;\n  line-height: 32px; }\n\n.intro-list {\n  margin: 0 0 40px; }\n\n.intro-product {\n  position: relative;\n  top: 100px;\n  left: 60px; }\n\n.intro-product-link {\n  position: absolute;\n  top: -110px;\n  left: -45px;\n  text-align: center;\n  display: block;\n  width: 160px;\n  height: 160px;\n  border-radius: 50%;\n  background: #fff;\n  color: rgba(0, 0, 0, 0.87);\n  padding: 37px 20px;\n  box-sizing: border-box;\n  overflow: hidden;\n  box-shadow: 0 14px 32px rgba(0, 0, 0, 0.2);\n  transition: all .3s ease; }\n\n.intro-product-link:hover {\n  box-shadow: 0 19px 32px rgba(0, 0, 0, 0.4); }\n\n.intro-product-link .price {\n  font-size: 32px;\n  font-weight: 700; }\n\n.intro-product-link .price-text {\n  font-size: 14px; }\n\n@media (max-width: 767px) {\n  .home-intro-section {\n    padding: 100px 0 60px; }\n  .home-intro-title {\n    margin: 0 0 30px;\n    font-size: 32px;\n    font-weight: 900;\n    line-height: 38px;\n    text-shadow: 0 4px 4px rgba(0, 0, 0, 0.22); }\n  .home-intro-desc {\n    margin: 0 0 40px;\n    font-size: 18px;\n    font-weight: 400;\n    line-height: 27px; }\n  .intro-product {\n    top: 0;\n    left: 20px; }\n  .intro-product-link {\n    top: -80px;\n    -webkit-transform: scale(0.5);\n            transform: scale(0.5); } }\n"

/***/ }),

/***/ "./src/app/views/home/intro-one/intro-one.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/views/home/intro-one/intro-one.component.ts ***!
  \*************************************************************/
/*! exports provided: IntroOneComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroOneComponent", function() { return IntroOneComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var IntroOneComponent = /** @class */ (function () {
    function IntroOneComponent() {
    }
    IntroOneComponent.prototype.ngOnInit = function () {
    };
    IntroOneComponent.prototype.buyEgret = function () {
        window.open('https://themeforest.net/item/egret-angular-4-material-design-admin-template/20161805?ref=mh_rafi');
    };
    IntroOneComponent.prototype.getNGLanding = function () {
        window.open('');
    };
    IntroOneComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-intro',
            template: __webpack_require__(/*! ./intro-one.component.html */ "./src/app/views/home/intro-one/intro-one.component.html"),
            styles: [__webpack_require__(/*! ./intro-one.component.scss */ "./src/app/views/home/intro-one/intro-one.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], IntroOneComponent);
    return IntroOneComponent;
}());



/***/ }),

/***/ "./src/app/views/home/intro-two/intro-two.component.html":
/*!***************************************************************!*\
  !*** ./src/app/views/home/intro-two/intro-two.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"intro-section\" class=\"home-intro-section text-center\">\n  <div class=\"container\" fxLayout=\"column\" fxLayoutWrap=\"nowrap\">\n    <div class=\"home-intro-subtitle\">\n     Angular Landing + Egret Admin\n    </div>\n    <h1 class=\"home-intro-title\">Your complete Angular App Development kit</h1>\n    <h1 translate>Title</h1>\n    <p class=\"home-intro-text\">Egret implements the official Angular Material Design components and built with Angular CLI. \n      No Bootstrap!, No jQuery! and Only TypeScript!</p>\n      <button mat-raised-button mat-lg-button class=\"intro-cta\"><mat-icon>add_shopping_cart</mat-icon> BUY EGRET</button>\n    <div class=\"intro-product\">\n      <img src=\"assets/images/egret-screen.png\" alt=\"\">\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/views/home/intro-two/intro-two.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/views/home/intro-two/intro-two.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".home-intro-section {\n  background: url('home-bg.jpg') no-repeat center center;\n  background-size: cover;\n  padding: 180px 0 0;\n  color: #ffffff;\n  overflow: visible; }\n\n.home-intro-title {\n  margin: 0 0 24px;\n  font-size: 48px;\n  font-weight: 900;\n  line-height: 54px;\n  text-shadow: 0 4px 4px rgba(0, 0, 0, 0.22); }\n\n.home-intro-subtitle {\n  margin: 0 0 22px;\n  font-size: 22px;\n  font-weight: 400;\n  line-height: 32px; }\n\n.home-intro-text {\n  max-width: 570px;\n  margin: 0 auto 24px; }\n\n.intro-cta {\n  max-width: 180px;\n  margin: 0 auto; }\n\n.intro-product {\n  position: relative;\n  top: auto;\n  left: auto;\n  bottom: -102px; }\n\n@media (max-width: 767px) {\n  .home-intro-section {\n    padding: 100px 0 0; }\n  .home-intro-title {\n    margin: 0 0 24px;\n    font-size: 36px;\n    font-weight: 900;\n    line-height: 38px;\n    text-shadow: 0 4px 4px rgba(0, 0, 0, 0.22); }\n  .home-intro-subtitle {\n    margin: 0 0 22px;\n    font-size: 18px;\n    font-weight: 400;\n    line-height: 27px; }\n  .intro-product {\n    bottom: -63px; }\n    .intro-product img {\n      width: 480px; } }\n\n@media (max-width: 580px) {\n  .intro-product {\n    bottom: -39px; }\n    .intro-product img {\n      width: 280px; } }\n"

/***/ }),

/***/ "./src/app/views/home/intro-two/intro-two.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/views/home/intro-two/intro-two.component.ts ***!
  \*************************************************************/
/*! exports provided: IntroTwoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroTwoComponent", function() { return IntroTwoComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var IntroTwoComponent = /** @class */ (function () {
    function IntroTwoComponent() {
    }
    IntroTwoComponent.prototype.ngOnInit = function () {
    };
    IntroTwoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-intro-two',
            template: __webpack_require__(/*! ./intro-two.component.html */ "./src/app/views/home/intro-two/intro-two.component.html"),
            styles: [__webpack_require__(/*! ./intro-two.component.scss */ "./src/app/views/home/intro-two/intro-two.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], IntroTwoComponent);
    return IntroTwoComponent;
}());



/***/ }),

/***/ "./src/app/views/home/portfolio-carousel/portfolio-carousel.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/views/home/portfolio-carousel/portfolio-carousel.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"portfolio-section\" class=\"portfolio-section home-section\" [ngClass]=\"{'light-gray': backgroundGray}\">\n    <div class=\"container\">\n      <div class=\"section-header\">\n        <h2>Our Works</h2>\n        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat unde inventore molestias ab adipisci eius nisi placeat\n          at.\n        </p>\n      </div>\n    <ngu-carousel\n    [inputs]=\"carouselOptions\">\n      <ngu-item NguCarouselItem *ngFor=\"let p of portfolios\">\n          <mat-card class=\"p-0\">\n              <img mat-card-image [src]=\"p.photo\">\n              <mat-card-content>\n                <h5><strong><a href=\"\">{{p.title}}</a></strong></h5>\n                <p>\n                  {{p.text}}\n                </p>\n                <mat-divider class=\"mb-1\"></mat-divider>\n                <button mat-icon-button><mat-icon class=\"text-muted\">link</mat-icon></button>\n                <button mat-icon-button><mat-icon class=\"text-muted\">share</mat-icon></button>\n              </mat-card-content>\n            </mat-card>\n      </ngu-item>\n      \n      <button mat-fab NguCarouselPrev class='carousel-left'><mat-icon>keyboard_arrow_left</mat-icon></button>\n      <button mat-fab NguCarouselNext class='carousel-right'><mat-icon>keyboard_arrow_right</mat-icon></button>\n  </ngu-carousel>\n    </div>\n  </section>"

/***/ }),

/***/ "./src/app/views/home/portfolio-carousel/portfolio-carousel.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/views/home/portfolio-carousel/portfolio-carousel.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".item .mat-card {\n  margin: 0 16px; }\n"

/***/ }),

/***/ "./src/app/views/home/portfolio-carousel/portfolio-carousel.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/views/home/portfolio-carousel/portfolio-carousel.component.ts ***!
  \*******************************************************************************/
/*! exports provided: PortfolioCarouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioCarouselComponent", function() { return PortfolioCarouselComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PortfolioCarouselComponent = /** @class */ (function () {
    function PortfolioCarouselComponent() {
        this.portfolios = [{
                photo: 'assets/images/sq-10.jpg',
                text: "Adipisci quas repellat sed. Quasi quaerat aut nam possimus \n    vitae dignissimos, sapiente est atque tenetur",
                title: 'Project One',
            }, {
                photo: 'assets/images/sq-11.jpg',
                text: "Adipisci quas repellat sed. Quasi quaerat aut nam possimus \n    vitae dignissimos, sapiente est atque tenetur",
                title: 'Project Two',
            }, {
                photo: 'assets/images/sq-12.jpg',
                text: "Adipisci quas repellat sed. Quasi quaerat aut nam possimus \n    vitae dignissimos, sapiente est atque tenetur",
                title: 'Project Three',
            }, {
                photo: 'assets/images/sq-13.jpg',
                text: "Adipisci quas repellat sed. Quasi quaerat aut nam possimus \n    vitae dignissimos, sapiente est atque tenetur",
                title: 'Project Four',
            }, {
                photo: 'assets/images/sq-15.jpg',
                text: "Adipisci quas repellat sed. Quasi quaerat aut nam possimus \n    vitae dignissimos, sapiente est atque tenetur",
                title: 'Project Five',
            }, {
                photo: 'assets/images/sq-16.jpg',
                text: "Adipisci quas repellat sed. Quasi quaerat aut nam possimus \n    vitae dignissimos, sapiente est atque tenetur",
                title: 'Project Six',
            }];
    }
    PortfolioCarouselComponent.prototype.ngOnInit = function () {
        this.carouselOptions = {
            grid: { xs: 1, sm: 2, md: 3, lg: 3, all: 0 },
            slide: 2,
            speed: 400,
            interval: 4000,
            point: {
                visible: true
            },
            load: 2,
            touch: true,
            loop: true
        };
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('backgroundGray'),
        __metadata("design:type", Object)
    ], PortfolioCarouselComponent.prototype, "backgroundGray", void 0);
    PortfolioCarouselComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-portfolio-carousel',
            template: __webpack_require__(/*! ./portfolio-carousel.component.html */ "./src/app/views/home/portfolio-carousel/portfolio-carousel.component.html"),
            styles: [__webpack_require__(/*! ./portfolio-carousel.component.scss */ "./src/app/views/home/portfolio-carousel/portfolio-carousel.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PortfolioCarouselComponent);
    return PortfolioCarouselComponent;
}());



/***/ }),

/***/ "./src/app/views/home/portfolio/portfolio.component.html":
/*!***************************************************************!*\
  !*** ./src/app/views/home/portfolio/portfolio.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"portfolio-section\" class=\"portfolio home-section\" [ngClass]=\"{'light-gray': backgroundGray}\">\n  <div class=\"container\">\n    <div class=\"section-header\">\n      <h2>Our Works</h2>\n      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat unde inventore molestias ab adipisci eius nisi placeat\n        at.\n      </p>\n    </div>\n\n    <div fxLayout=\"row\" fxLayout.lt-sm=\"column\" fxLayoutWrap=\"nowrap\" fxLayoutGap=\"30px\">\n      <div fxFlex=\"33.33\">\n        <mat-card class=\"p-0 m-0\">\n          <img mat-card-image src=\"assets/images/sq-12.jpg\">\n          <mat-card-content>\n            <h5><strong><a href=\"\">Project One</a></strong></h5>\n            <p>\n              Adipisci quas repellat sed. Quasi quaerat aut nam possimus vitae dignissimos, sapiente est atque tenetur.\n            </p>\n            <mat-divider class=\"mb-1\"></mat-divider>\n            <button mat-icon-button><mat-icon class=\"text-muted\">link</mat-icon></button>\n            <button mat-icon-button><mat-icon class=\"text-muted\">share</mat-icon></button>\n          </mat-card-content>\n        </mat-card>\n      </div>\n      <div fxFlex=\"33.33\">\n        <mat-card class=\"p-0 m-0\">\n          <img mat-card-image src=\"assets/images/sq-9.jpg\">\n          <mat-card-content>\n            <h5><strong><a href=\"\">Project Two</a></strong></h5>\n            <p>\n              Adipisci quas repellat sed. Quasi quaerat aut nam possimus vitae dignissimos, sapiente est atque tenetur.\n            </p>\n            <mat-divider class=\"mb-1\"></mat-divider>\n            <button mat-icon-button><mat-icon class=\"text-muted\">link</mat-icon></button>\n            <button mat-icon-button><mat-icon class=\"text-muted\">share</mat-icon></button>\n          </mat-card-content>\n        </mat-card>\n      </div>\n      <div fxFlex=\"33.33\">\n        <mat-card class=\"p-0 m-0\">\n          <img mat-card-image src=\"assets/images/sq-10.jpg\">\n          <mat-card-content>\n            <h5><strong><a href=\"\">Project Three</a></strong></h5>\n            <p>\n              Adipisci quas repellat sed. Quasi quaerat aut nam possimus vitae dignissimos, sapiente est atque tenetur.\n            </p>\n            <mat-divider class=\"mb-1\"></mat-divider>\n            <button mat-icon-button><mat-icon class=\"text-muted\">link</mat-icon></button>\n            <button mat-icon-button><mat-icon class=\"text-muted\">share</mat-icon></button>\n          </mat-card-content>\n        </mat-card>\n      </div>\n    </div>\n    <div class=\"text-center home-section-action\">\n      <button mat-raised-button mat-lg-button color=\"accent\">LOAD MORE</button>\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/views/home/portfolio/portfolio.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/views/home/portfolio/portfolio.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/home/portfolio/portfolio.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/views/home/portfolio/portfolio.component.ts ***!
  \*************************************************************/
/*! exports provided: PortfolioComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PortfolioComponent", function() { return PortfolioComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PortfolioComponent = /** @class */ (function () {
    function PortfolioComponent() {
    }
    PortfolioComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('backgroundGray'),
        __metadata("design:type", Object)
    ], PortfolioComponent.prototype, "backgroundGray", void 0);
    PortfolioComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-portfolio',
            template: __webpack_require__(/*! ./portfolio.component.html */ "./src/app/views/home/portfolio/portfolio.component.html"),
            styles: [__webpack_require__(/*! ./portfolio.component.scss */ "./src/app/views/home/portfolio/portfolio.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PortfolioComponent);
    return PortfolioComponent;
}());



/***/ }),

/***/ "./src/app/views/home/pricings/pricings.component.html":
/*!*************************************************************!*\
  !*** ./src/app/views/home/pricings/pricings.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"pricings-section\" class=\"home-section\" [ngClass]=\"{'light-gray': backgroundGray}\">\n  <div class=\"container\">\n    <div class=\"section-header\">\n      <h2>Choose a Plan</h2>\n      <mat-slide-toggle [(ngModel)]=\"isAnnualSelected\" color=\"primary\" class=\"mb-1\">Get upto 10% discount annually</mat-slide-toggle>\n    </div>\n\n    <div fxLayout=\"row\" fxLayoutWrap=\"wrap\">\n      <!-- Pricing box -->\n      <div fxFlex=\"100\" fxFlex.gt-sm=\"25\" fxFlex.sm=\"50\">\n        <mat-card class=\"plan-pricing text-center p-0\">\n          <mat-card-title class=\"light-gray\">\n            <div class=\"card-title-text\">\n              <div class=\"\">Developer</div>\n              <div class=\"text-sm text-muted\">For New Developers</div>\n            </div>\n            <mat-divider></mat-divider>\n          </mat-card-title>\n          <mat-card-content>\n            <h1><strong>FREE</strong></h1>\n            <mat-list dense class=\"mb-1\">\n              <mat-list-item>10GB of Bandwidth</mat-list-item>\n              <mat-list-item>Max 50 connection</mat-list-item>\n              <mat-list-item>512MB RAM</mat-list-item>\n              <mat-list-item class=\"text-muted\">Unlimited access</mat-list-item>\n              <mat-list-item class=\"text-muted\">Unlimited User</mat-list-item>\n              <mat-list-item class=\"text-muted\">Data analytics</mat-list-item>\n            </mat-list>\n            <button mat-raised-button class=\"mat-accent\">Choose</button>\n          </mat-card-content>\n        </mat-card>\n      </div>\n      <!-- Pricing box -->\n      <div fxFlex=\"100\" fxFlex.gt-sm=\"25\" fxFlex.sm=\"50\">\n        <mat-card class=\"plan-pricing text-center p-0\">\n          <mat-card-title class=\"mat-bg-primary\">\n            <div class=\"card-title-text\">\n              <div class=\"\">Starter</div>\n              <div class=\"text-sm text-muted-white\">For Professional Developers</div>\n            </div>\n            <mat-divider></mat-divider>\n          </mat-card-title>\n          <mat-card-content>\n            <h1>\n              <strong>$ \n                  <span *ngIf=\"!isAnnualSelected\">{{30}} /Mo</span>\n                  <span *ngIf=\"isAnnualSelected\">{{30 * 12 * .9}} /Yr</span>\n                  </strong>\n            </h1>\n            <mat-list dense class=\"mb-1\">\n              <mat-list-item>100GB of Bandwidth</mat-list-item>\n              <mat-list-item>Max 500 connection</mat-list-item>\n              <mat-list-item>1GB RAM</mat-list-item>\n              <mat-list-item>Unlimited access</mat-list-item>\n              <mat-list-item class=\"text-muted\">Unlimited User</mat-list-item>\n              <mat-list-item class=\"text-muted\">Data analytics</mat-list-item>\n            </mat-list>\n            <button mat-raised-button class=\"mat-accent\">Choose</button>\n          </mat-card-content>\n        </mat-card>\n      </div>\n      <!-- Pricing box -->\n      <div fxFlex=\"100\" fxFlex.gt-sm=\"25\" fxFlex.sm=\"50\">\n        <mat-card class=\"plan-pricing text-center p-0\">\n          <mat-card-title class=\"light-gray\">\n            <div class=\"card-title-text\">\n              <div class=\"\">Business</div>\n              <div class=\"text-sm text-muted\">For Small Businesses</div>\n            </div>\n            <mat-divider></mat-divider>\n          </mat-card-title>\n          <mat-card-content>\n            <h1>\n              <strong>$ \n                  <span *ngIf=\"!isAnnualSelected\">{{60}} /Mo</span>\n                  <span *ngIf=\"isAnnualSelected\">{{60 * 12 * .9}} /Yr</span>\n                  </strong>\n            </h1>\n            <mat-list dense class=\"mb-1\">\n              <mat-list-item>100GB of Bandwidth</mat-list-item>\n              <mat-list-item>Max 1500 connection</mat-list-item>\n              <mat-list-item>2GB RAM</mat-list-item>\n              <mat-list-item>Unlimited access</mat-list-item>\n              <mat-list-item>Unlimited User</mat-list-item>\n              <mat-list-item class=\"text-muted\">Data analytics</mat-list-item>\n            </mat-list>\n            <button mat-raised-button class=\"mat-accent\">Choose</button>\n          </mat-card-content>\n        </mat-card>\n      </div>\n      <!-- Pricing box -->\n      <div fxFlex=\"100\" fxFlex.gt-sm=\"25\" fxFlex.sm=\"50\">\n        <mat-card class=\"plan-pricing text-center p-0\">\n          <mat-card-title class=\"light-gray\">\n            <div class=\"card-title-text\">\n              <div class=\"\">Enterprise</div>\n              <div class=\"text-sm text-muted\">For Large companies</div>\n            </div>\n            <mat-divider></mat-divider>\n          </mat-card-title>\n          <mat-card-content>\n            <h1>\n              <strong>$ \n                  <span *ngIf=\"!isAnnualSelected\">{{160}} /Mo</span>\n                  <span *ngIf=\"isAnnualSelected\">{{160 * 12 * .9}} /Yr</span>\n                  </strong>\n            </h1>\n            <mat-list dense class=\"mb-1\">\n              <mat-list-item>1000GB of Bandwidth</mat-list-item>\n              <mat-list-item>Max 5000 connection</mat-list-item>\n              <mat-list-item>8GB RAM</mat-list-item>\n              <mat-list-item>Unlimited access</mat-list-item>\n              <mat-list-item>Unlimited User</mat-list-item>\n              <mat-list-item>Data analytics</mat-list-item>\n            </mat-list>\n            <button mat-raised-button class=\"mat-accent\">Choose</button>\n          </mat-card-content>\n        </mat-card>\n      </div>\n\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/views/home/pricings/pricings.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/views/home/pricings/pricings.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".plan-pricing .mat-list-item ::ng-deep .mat-list-item-content {\n  display: inline-flex !important;\n  text-align: center;\n  font-size: .875rem !important; }\n"

/***/ }),

/***/ "./src/app/views/home/pricings/pricings.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/views/home/pricings/pricings.component.ts ***!
  \***********************************************************/
/*! exports provided: PricingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PricingsComponent", function() { return PricingsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var PricingsComponent = /** @class */ (function () {
    function PricingsComponent() {
        this.isAnnualSelected = false;
    }
    PricingsComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('backgroundGray'),
        __metadata("design:type", Object)
    ], PricingsComponent.prototype, "backgroundGray", void 0);
    PricingsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pricings',
            template: __webpack_require__(/*! ./pricings.component.html */ "./src/app/views/home/pricings/pricings.component.html"),
            styles: [__webpack_require__(/*! ./pricings.component.scss */ "./src/app/views/home/pricings/pricings.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], PricingsComponent);
    return PricingsComponent;
}());



/***/ }),

/***/ "./src/app/views/home/services-carousel/services-carousel.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/views/home/services-carousel/services-carousel.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"service-section\" class=\"service-section home-section\" [ngClass]=\"{'light-gray': backgroundGray}\">\n    <div class=\"container\">\n      <div class=\"section-header\">\n        <h2>Our Services</h2>\n        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat unde inventore molestias ab adipisci eius nisi placeat\n          at.\n        </p>\n      </div>\n    <ngu-carousel\n    [inputs]=\"carouselOptions\">\n      <ngu-item NguCarouselItem *ngFor=\"let s of services\">\n          <mat-card class=\"home-fancy-card\">\n              <div fxLayout=\"column\">\n                <div class=\"text-center\">\n                  <mat-icon mat-card-icon>{{s.icon}}</mat-icon>\n                </div>\n                <span fxFlex=\"20px\"></span>\n                <h3 class=\"m-0 font-light\">{{s.title}}</h3>\n                <span fxFlex=\"20px\"></span>\n                <p class=\"m-0 description\">\n                  {{s.text}}\n                </p>\n                <span fxFlex=\"40px\"></span>\n                <div>\n                  <button mat-button><strong class=\"text-muted\">READ MORE</strong></button>\n                </div>\n              </div>\n            </mat-card>\n      </ngu-item>\n      \n      <button mat-fab NguCarouselPrev class='carousel-left'><mat-icon>keyboard_arrow_left</mat-icon></button>\n      <button mat-fab NguCarouselNext class='carousel-right'><mat-icon>keyboard_arrow_right</mat-icon></button>\n  </ngu-carousel>\n    </div>\n  </section>"

/***/ }),

/***/ "./src/app/views/home/services-carousel/services-carousel.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/views/home/services-carousel/services-carousel.component.scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".item .mat-card {\n  margin: 0 16px; }\n"

/***/ }),

/***/ "./src/app/views/home/services-carousel/services-carousel.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/views/home/services-carousel/services-carousel.component.ts ***!
  \*****************************************************************************/
/*! exports provided: ServicesCarouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesCarouselComponent", function() { return ServicesCarouselComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ServicesCarouselComponent = /** @class */ (function () {
    function ServicesCarouselComponent() {
        this.services = [{
                icon: 'dashboard',
                text: "Lorem ipsum dolor sit amet conse ctetur adipi sicing elit. Doloribus numquam quis.",
                title: 'Business Application'
            }, {
                icon: 'perm_data_setting',
                text: "Lorem ipsum dolor sit amet conse ctetur adipi sicing elit. Doloribus numquam quis.",
                title: 'System Integration'
            }, {
                icon: 'storage',
                text: "Lorem ipsum dolor sit amet conse ctetur adipi sicing elit. Doloribus numquam quis.",
                title: 'Database Administration'
            }, {
                icon: 'stay_primary_portrait',
                text: "Lorem ipsum dolor sit amet conse ctetur adipi sicing elit. Doloribus numquam quis.",
                title: 'Custom Mobile Application'
            }, {
                icon: 'person',
                text: "Lorem ipsum dolor sit amet conse ctetur adipi sicing elit. Doloribus numquam quis.",
                title: 'Management Application'
            }, {
                icon: 'timeline',
                text: "Lorem ipsum dolor sit amet conse ctetur adipi sicing elit. Doloribus numquam quis.",
                title: 'Planning Application'
            }];
    }
    ServicesCarouselComponent.prototype.ngOnInit = function () {
        this.carouselOptions = {
            grid: { xs: 1, sm: 2, md: 3, lg: 3, all: 0 },
            slide: 2,
            speed: 400,
            interval: 4000,
            point: {
                visible: true
            },
            load: 2,
            touch: true,
            loop: true
        };
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('backgroundGray'),
        __metadata("design:type", Object)
    ], ServicesCarouselComponent.prototype, "backgroundGray", void 0);
    ServicesCarouselComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-services-carousel',
            template: __webpack_require__(/*! ./services-carousel.component.html */ "./src/app/views/home/services-carousel/services-carousel.component.html"),
            styles: [__webpack_require__(/*! ./services-carousel.component.scss */ "./src/app/views/home/services-carousel/services-carousel.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ServicesCarouselComponent);
    return ServicesCarouselComponent;
}());



/***/ }),

/***/ "./src/app/views/home/services/services.component.html":
/*!*************************************************************!*\
  !*** ./src/app/views/home/services/services.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"service-section\" class=\"home-section\" [ngClass]=\"{'light-gray': backgroundGray}\">\n  <div class=\"container\">\n    <div class=\"section-header\">\n      <h2>Our Services</h2>\n      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat unde inventore molestias ab adipisci eius nisi placeat\n        at.\n      </p>\n    </div>\n    <div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutWrap=\"nowrap\" fxLayoutGap=\"20px\">\n      <div fxFlex=\"25\">\n        <mat-card class=\"home-fancy-card\">\n          <div fxLayout=\"column\">\n            <div class=\"text-center\">\n              <mat-icon mat-card-icon>dashboard</mat-icon>\n            </div>\n            <span fxFlex=\"20px\"></span>\n            <h3 class=\"m-0 font-light\">Business Application</h3>\n            <span fxFlex=\"20px\"></span>\n            <p class=\"m-0 description\">Lorem ipsum dolor sit amet conse ctetur adipi sicing elit. Doloribus numquam quis.\n            </p>\n            <span fxFlex=\"40px\"></span>\n            <div>\n              <button mat-button><strong class=\"text-muted\">READ MORE</strong></button>\n            </div>\n          </div>\n        </mat-card>\n      </div>\n      <div fxFlex=\"25\">\n        <mat-card class=\"home-fancy-card\">\n          <div fxLayout=\"column\">\n            <div class=\"text-center\">\n              <mat-icon mat-card-icon>perm_data_setting</mat-icon>\n            </div>\n            <span fxFlex=\"20px\"></span>\n            <h3 class=\"m-0 font-light\">Custom System Integration</h3>\n            <span fxFlex=\"20px\"></span>\n            <p class=\"m-0 description\">Lorem ipsum dolor sit amet conse ctetur adipi sicing elit. Doloribus numquam quis.\n            </p>\n            <span fxFlex=\"40px\"></span>\n            <div>\n              <button mat-button><strong class=\"text-muted\">READ MORE</strong></button>\n            </div>\n          </div>\n        </mat-card>\n      </div>\n      <div fxFlex=\"25\">\n        <mat-card class=\"home-fancy-card\">\n          <div fxLayout=\"column\">\n            <div class=\"text-center\">\n              <mat-icon mat-card-icon>storage</mat-icon>\n            </div>\n            <span fxFlex=\"20px\"></span>\n            <h3 class=\"m-0 font-light\">Database Administration</h3>\n            <span fxFlex=\"20px\"></span>\n            <p class=\"m-0 description\">Lorem ipsum dolor sit amet conse ctetur adipi sicing elit. Doloribus numquam quis.\n            </p>\n            <span fxFlex=\"40px\"></span>\n            <div>\n              <button mat-button><strong class=\"text-muted\">READ MORE</strong></button>\n            </div>\n          </div>\n        </mat-card>\n      </div>\n      <div fxFlex=\"25\">\n        <mat-card class=\"home-fancy-card\">\n          <div fxLayout=\"column\">\n            <div class=\"text-center\">\n              <mat-icon mat-card-icon>stay_primary_portrait</mat-icon>\n            </div>\n            <span fxFlex=\"20px\"></span>\n            <h3 class=\"m-0 font-light\">Custom Mobile Application</h3>\n            <span fxFlex=\"20px\"></span>\n            <p class=\"m-0 description\">Lorem ipsum dolor sit amet conse ctetur adipi sicing elit. Doloribus numquam quis.\n            </p>\n            <span fxFlex=\"40px\"></span>\n            <div>\n              <button mat-button><strong class=\"text-muted\">READ MORE</strong></button>\n            </div>\n          </div>\n        </mat-card>\n      </div>\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/views/home/services/services.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/views/home/services/services.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/views/home/services/services.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/views/home/services/services.component.ts ***!
  \***********************************************************/
/*! exports provided: ServicesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServicesComponent", function() { return ServicesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ServicesComponent = /** @class */ (function () {
    function ServicesComponent() {
    }
    ServicesComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('backgroundGray'),
        __metadata("design:type", Object)
    ], ServicesComponent.prototype, "backgroundGray", void 0);
    ServicesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-services',
            template: __webpack_require__(/*! ./services.component.html */ "./src/app/views/home/services/services.component.html"),
            styles: [__webpack_require__(/*! ./services.component.scss */ "./src/app/views/home/services/services.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], ServicesComponent);
    return ServicesComponent;
}());



/***/ }),

/***/ "./src/app/views/home/testimonials-carousel/testimonials-carousel.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/views/home/testimonials-carousel/testimonials-carousel.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"testimonials-section\" class=\"testimonials-section home-section\" [ngClass]=\"{'light-gray': backgroundGray}\">\n  <div class=\"container\">\n    <div class=\"section-header\">\n      <h2>What our customers says</h2>\n      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat unde inventore molestias ab adipisci eius nisi placeat\n        at.\n      </p>\n    </div>\n  <ngu-carousel\n  [inputs]=\"carouselOptions\">\n    <ngu-item NguCarouselItem *ngFor=\"let tm of testimonials\">\n        <mat-card class=\"p-0\">\n            <mat-card-content class=\"\">\n              <img class=\"company-logo\" [src]=\"tm.logo\">\n              <p class=\"text\">{{tm.text}}</p>\n              <div class=\"user-detail\">\n                <span class=\"toolbar-avatar md user-photo\"><img [src]=\"tm.photo\" alt=\"\"></span>\n                <span class=\"user-title\">{{tm.title}}</span>\n                <span class=\"user-subtitle text-muted\">{{tm.subtitle}}</span>\n              </div>\n            </mat-card-content>\n        </mat-card>\n    </ngu-item>\n    \n    <button mat-fab NguCarouselPrev class='carousel-left'><mat-icon>keyboard_arrow_left</mat-icon></button>\n    <button mat-fab NguCarouselNext class='carousel-right'><mat-icon>keyboard_arrow_right</mat-icon></button>\n</ngu-carousel>\n  </div>\n</section>\n"

/***/ }),

/***/ "./src/app/views/home/testimonials-carousel/testimonials-carousel.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/views/home/testimonials-carousel/testimonials-carousel.component.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".item .mat-card {\n  margin: 0 16px; }\n  .item .mat-card .mat-card-content {\n    position: relative;\n    padding: 2rem;\n    min-height: 360px; }\n  .item .mat-card .company-logo {\n    padding-bottom: 24px; }\n  .item .mat-card .text {\n    position: relative;\n    font-size: 1rem;\n    color: rgba(0, 0, 0, 0.64);\n    padding-bottom: 25px;\n    min-height: 240px;\n    margin: 0; }\n  .item .mat-card .user-detail {\n    position: absolute;\n    bottom: 25px;\n    left: 32px;\n    right: 0;\n    margin: auto; }\n  .item .mat-card .user-detail .user-photo {\n      float: left;\n      margin-right: 8px; }\n  .item .mat-card .user-detail .user-title {\n      font-size: 1rem;\n      float: left;\n      width: calc(100% - 56px); }\n  .item .mat-card .user-detail .user-subtitle {\n      float: left; }\n"

/***/ }),

/***/ "./src/app/views/home/testimonials-carousel/testimonials-carousel.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/views/home/testimonials-carousel/testimonials-carousel.component.ts ***!
  \*************************************************************************************/
/*! exports provided: TestimonialsCarouselComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestimonialsCarouselComponent", function() { return TestimonialsCarouselComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TestimonialsCarouselComponent = /** @class */ (function () {
    function TestimonialsCarouselComponent() {
        this.testimonials = [{
                logo: 'assets/images/mock-logo-4.png',
                photo: 'assets/images/face-1.jpg',
                text: "\u201CI\u2019ve tried using different softwares. The computer is not my strong side. \n    There is excellent support behind DevEgret and people to walk you through it. \n    If you have any questions they\u2019ll go over that and explain to you how to do that. \u201D",
                title: 'Jhone Doe',
                subtitle: 'Product Manager'
            }, {
                logo: 'assets/images/mock-logo-2.png',
                photo: 'assets/images/face-2.jpg',
                text: "\"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit modi voluptas vero iusto fuga quos totam eius,\n    atis magnam tempora doloribus ducimus dolorem culpa animi beatae tenetur! Sapiente, quia tempora.\"",
                title: 'Adam Smith',
                subtitle: 'CEO'
            }, {
                logo: 'assets/images/mock-logo-3.png',
                photo: 'assets/images/face-3.jpg',
                text: "\"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit modi voluptas vero iusto fuga quos totam eius,\n    atis magnam tempora doloribus ducimus dolorem culpa animi beatae tenetur! Sapiente, quia tempora.\"",
                title: 'Jhone White',
                subtitle: 'Software Engineer'
            }, {
                logo: 'assets/images/mock-logo-1.png',
                photo: 'assets/images/face-4.jpg',
                text: "\"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit modi voluptas vero iusto fuga quos totam eius,\n    atis magnam tempora doloribus ducimus dolorem culpa animi beatae tenetur! Sapiente, quia tempora.\"",
                title: 'Jessica Hiche',
                subtitle: 'CEO'
            }];
    }
    TestimonialsCarouselComponent.prototype.ngOnInit = function () {
        this.carouselOptions = {
            grid: { xs: 1, sm: 2, md: 3, lg: 3, all: 0 },
            slide: 2,
            speed: 400,
            interval: 4000,
            point: {
                visible: true
            },
            load: 2,
            touch: true,
            loop: true
        };
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('backgroundGray'),
        __metadata("design:type", Object)
    ], TestimonialsCarouselComponent.prototype, "backgroundGray", void 0);
    TestimonialsCarouselComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-testimonials-carousel',
            template: __webpack_require__(/*! ./testimonials-carousel.component.html */ "./src/app/views/home/testimonials-carousel/testimonials-carousel.component.html"),
            styles: [__webpack_require__(/*! ./testimonials-carousel.component.scss */ "./src/app/views/home/testimonials-carousel/testimonials-carousel.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TestimonialsCarouselComponent);
    return TestimonialsCarouselComponent;
}());



/***/ }),

/***/ "./src/app/views/home/testimonials/testimonials.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/views/home/testimonials/testimonials.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section id=\"testimonials-section\" class=\"testimonials-section home-section\" [ngClass]=\"{'light-gray': backgroundGray}\">\n  <div class=\"container\">\n    <div class=\"section-header\">\n      <h2>What our customers says</h2>\n      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugiat unde inventore molestias ab adipisci eius nisi placeat\n        at.\n      </p>\n    </div>\n    <div fxLayout=\"row\" fxLayout.lt-md=\"column\"  fxLayoutGap=\"30px\">\n      <div fxFlex=\"33.33\" *ngFor=\"let tm of testimonials\">\n          <mat-card class=\"p-0\">\n              <mat-card-content class=\"\">\n                <img class=\"company-logo\" [src]=\"tm.logo\">\n                <p class=\"text\">{{tm.text}}</p>\n                <div class=\"user-detail\">\n                  <span class=\"toolbar-avatar md user-photo\"><img [src]=\"tm.photo\" alt=\"\"></span>\n                  <span class=\"user-title\">{{tm.title}}</span>\n                  <span class=\"user-subtitle text-muted\">{{tm.subtitle}}</span>\n                </div>\n              </mat-card-content>\n          </mat-card>\n      </div>\n    </div>\n  </div>\n</section>"

/***/ }),

/***/ "./src/app/views/home/testimonials/testimonials.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/views/home/testimonials/testimonials.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".mat-card .mat-card-content {\n  position: relative;\n  padding: 2rem;\n  min-height: 360px; }\n\n.mat-card .company-logo {\n  padding-bottom: 24px; }\n\n.mat-card .text {\n  position: relative;\n  font-size: 1rem;\n  color: rgba(0, 0, 0, 0.64);\n  padding-bottom: 25px;\n  min-height: 240px;\n  margin: 0; }\n\n.mat-card .user-detail {\n  position: absolute;\n  bottom: 25px;\n  left: 32px;\n  right: 0;\n  margin: auto; }\n\n.mat-card .user-detail .user-photo {\n    float: left;\n    margin-right: 8px; }\n\n.mat-card .user-detail .user-title {\n    font-size: 1rem;\n    float: left;\n    width: calc(100% - 56px); }\n\n.mat-card .user-detail .user-subtitle {\n    float: left; }\n"

/***/ }),

/***/ "./src/app/views/home/testimonials/testimonials.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/views/home/testimonials/testimonials.component.ts ***!
  \*******************************************************************/
/*! exports provided: TestimonialsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TestimonialsComponent", function() { return TestimonialsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var TestimonialsComponent = /** @class */ (function () {
    function TestimonialsComponent() {
        this.testimonials = [{
                logo: 'assets/images/mock-logo-4.png',
                photo: 'assets/images/face-1.jpg',
                text: "\u201CI\u2019ve tried using different softwares. The computer is not my strong side. \n    There is excellent support behind DevEgret and people to walk you through it. \n    If you have any questions they\u2019ll go over that and explain to you how to do that. \u201D",
                title: 'Jhone Doe',
                subtitle: 'Product Manager'
            }, {
                logo: 'assets/images/mock-logo-2.png',
                photo: 'assets/images/face-2.jpg',
                text: "\"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit modi voluptas vero iusto fuga quos totam eius,\n    atis magnam tempora doloribus ducimus dolorem culpa animi beatae tenetur! Sapiente, quia tempora.\"",
                title: 'Adam Smith',
                subtitle: 'CEO'
            }, {
                logo: 'assets/images/mock-logo-3.png',
                photo: 'assets/images/face-3.jpg',
                text: "\"Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit modi voluptas vero iusto fuga quos totam eius,\n    atis magnam tempora doloribus ducimus dolorem culpa animi beatae tenetur! Sapiente, quia tempora.\"",
                title: 'Jhone White',
                subtitle: 'Software Engineer'
            }];
    }
    TestimonialsComponent.prototype.ngOnInit = function () {
        this.carouselOptions = {
            grid: { xs: 1, sm: 1, md: 1, lg: 3, all: 0 },
            slide: 2,
            speed: 400,
            interval: 4000,
            point: {
                visible: true
            },
            load: 2,
            touch: true,
            loop: true
        };
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('backgroundGray'),
        __metadata("design:type", Object)
    ], TestimonialsComponent.prototype, "backgroundGray", void 0);
    TestimonialsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-testimonials',
            template: __webpack_require__(/*! ./testimonials.component.html */ "./src/app/views/home/testimonials/testimonials.component.html"),
            styles: [__webpack_require__(/*! ./testimonials.component.scss */ "./src/app/views/home/testimonials/testimonials.component.scss")]
        }),
        __metadata("design:paramtypes", [])
    ], TestimonialsComponent);
    return TestimonialsComponent;
}());



/***/ })

}]);
//# sourceMappingURL=views-home-home-module.js.map