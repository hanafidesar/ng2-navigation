System.registerDynamic("src/menu", ["angular2/core", "angular2/common", "angular2/router", "angular2/src/facade/lang"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var core_1 = $__require('angular2/core');
  var common_1 = $__require('angular2/common');
  var router_1 = $__require('angular2/router');
  var lang_1 = $__require('angular2/src/facade/lang');
  var Menu = (function() {
    function Menu() {
      this.items = [];
    }
    __decorate([core_1.Input(), __metadata('design:type', Array)], Menu.prototype, "items", void 0);
    Menu = __decorate([core_1.Component({
      selector: 'ng2-menu',
      directives: [common_1.CORE_DIRECTIVES, router_1.ROUTER_DIRECTIVES],
      template: "\n<ul class='dropdown-menu'>\n    <ng2-menu-item *ngFor='#item of items' item='item'></ng2-menu-item>\n</ul>"
    }), __metadata('design:paramtypes', [])], Menu);
    return Menu;
  })();
  exports.Menu = Menu;
  var MenuItem = (function() {
    function MenuItem(elRef) {
      this.elRef = elRef;
      this.el = elRef.nativeElement;
      var clazz = this.getClassByParent();
      this.el.classList.add(clazz);
    }
    Object.defineProperty(MenuItem.prototype, "item", {
      get: function() {
        return this._item;
      },
      set: function(value) {
        this._item = this.checkAndFixItem(value);
      },
      enumerable: true,
      configurable: true
    });
    MenuItem.prototype.checkAndFixItem = function(value) {
      if (lang_1.isPresent(value)) {
        if (!lang_1.isPresent(value.name)) {
          value.name = '';
        }
        if (!lang_1.isPresent(value.link)) {
          value.link = [];
        }
        if (!lang_1.isPresent(value.isDivider)) {
          value.isDivider = false;
        }
        return value;
      } else {
        return {
          name: '',
          link: [],
          isDivider: false
        };
      }
    };
    MenuItem.prototype.getClassByParent = function() {
      var clazz = 'dropdown-submenu';
      var parent = this.el.parentElement;
      while (parent) {
        if (parent.className.indexOf('navbar-right') !== -1) {
          clazz = 'dropdown-submenu-right';
          break;
        }
        parent = parent.parentElement;
      }
      return clazz;
    };
    __decorate([core_1.Input(), __metadata('design:type', Object), __metadata('design:paramtypes', [Object])], MenuItem.prototype, "item", null);
    MenuItem = __decorate([core_1.Component({
      selector: 'ng2-menu-item',
      directives: [common_1.CORE_DIRECTIVES, router_1.ROUTER_DIRECTIVES],
      template: "\n<li [ngClass]=\"{divider: item.isDivider}\">\n    <a [routerLink]=\"item.link\" *ngIf=\"!item.isDivider\">{{item.name}}</a>\n    <ng2-menu *ngIf=\"item.items\" items=\"item.items\"></ng2-menu>\n</li>"
    }), __metadata('design:paramtypes', [core_1.ElementRef])], MenuItem);
    return MenuItem;
  })();
  exports.MenuItem = MenuItem;
  return module.exports;
});

System.registerDynamic("src/nav.service", ["angular2/core"], true, function($__require, exports, module) {
  ;
  var define,
      global = this,
      GLOBAL = this;
  var __decorate = (this && this.__decorate) || function(decorators, target, key, desc) {
    var c = arguments.length,
        r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
        d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
      r = Reflect.decorate(decorators, target, key, desc);
    else
      for (var i = decorators.length - 1; i >= 0; i--)
        if (d = decorators[i])
          r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
  var __metadata = (this && this.__metadata) || function(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
      return Reflect.metadata(k, v);
  };
  var core_1 = $__require('angular2/core');
  var NavigationService = (function() {
    function NavigationService() {}
    NavigationService = __decorate([core_1.Injectable(), __metadata('design:paramtypes', [])], NavigationService);
    return NavigationService;
  })();
  exports.NavigationService = NavigationService;
  return module.exports;
});

System.registerDynamic("ng2-navigation", ["./src/menu", "./src/nav.service"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define,
      global = this,
      GLOBAL = this;
  function __export(m) {
    for (var p in m)
      if (!exports.hasOwnProperty(p))
        exports[p] = m[p];
  }
  var menu_1 = $__require('./src/menu');
  __export($__require('./src/menu'));
  __export($__require('./src/nav.service'));
  exports.NAV_DIRECTIVES = [menu_1.MenuItem, menu_1.Menu];
  return module.exports;
});
