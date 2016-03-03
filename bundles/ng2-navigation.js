System.registerDynamic("src/menu.component", ["angular2/core", "angular2/router", "angular2/common", "angular2/src/facade/lang", "./navigation.service"], true, function($__require, exports, module) {
  ;
  var define;
  var global = this;
  var GLOBAL = this;
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
  var router_1 = $__require('angular2/router');
  var common_1 = $__require('angular2/common');
  var lang_1 = $__require('angular2/src/facade/lang');
  var navigation_service_1 = $__require('./navigation.service');
  var MenuItem = (function() {
    function MenuItem(elementRef, router, navigationService) {
      var _this = this;
      this.elementRef = elementRef;
      this.router = router;
      this.navigationService = navigationService;
      this.isActive = false;
      router.subscribe(function(value) {
        _this.isActive = _this.isMenuItemActive(_this.menuItem, value);
      });
    }
    MenuItem.prototype.iconBaseClass = function() {
      return this.navigationService.iconBaseClass;
    };
    MenuItem.prototype.isMenuItemActive = function(item, value) {
      if (!lang_1.isPresent(item.children)) {
        return lang_1.isPresent(item.name) && value.name === item.name;
      }
      for (var i = 0; i < item.children.length; i++) {
        if (lang_1.isPresent(item.children[i].name) && value.name === item.children[i].name) {
          return true;
        }
        if (this.isMenuItemActive(item.children[i], value)) {
          return true;
        }
      }
      return false;
    };
    __decorate([core_1.Input('menu-item'), __metadata('design:type', Object)], MenuItem.prototype, "menuItem", void 0);
    __decorate([core_1.Input('menu-item-collapsed-icon-class'), __metadata('design:type', String)], MenuItem.prototype, "menuItemCollapsedIconClass", void 0);
    __decorate([core_1.Input('menu-item-expanded-icon-class'), __metadata('design:type', String)], MenuItem.prototype, "menuItemExpandedIconClass", void 0);
    MenuItem = __decorate([core_1.Component({
      selector: 'ng2-menu-item',
      directives: [common_1.CORE_DIRECTIVES],
      template: "\n<li ngClass=\"{ 'leaf': !menuItem.children }\" ngIf=\"isVisible(menuItem)\">\n  <span ngIf=\"menuItem.children\" class=\"float-right icon-fw {{ iconBaseClass() }}\" ngClass=\"menuItem.isCollapsed ? menuItemCollapsedIconClass : menuItemExpandedIconClass\"></span>\n  <a ngIf=\"item.name\" ngLink=\"{{item.name}}\">\n    <span class=\"menu-item-icon icon-fw {{ iconBaseClass() }} {{ menuItem.iconClass}}\"></span>\n    <span class=\"menu-item-text\"> {{ menuItem.text }}</span>\n    <!-- Menu with children here -->\n  </a>\n</li>\n"
    }), __metadata('design:paramtypes', [core_1.ElementRef, router_1.Router, navigation_service_1.NavigationService])], MenuItem);
    return MenuItem;
  })();
  exports.MenuItem = MenuItem;
  var Menu = (function() {
    function Menu(navigationService) {
      this.navigationService = navigationService;
      this._navClass = 'navigation-menu';
      this.menuItems = [];
    }
    Object.defineProperty(Menu.prototype, "navClass", {
      get: function() {
        return this._navClass;
      },
      set: function(value) {
        this._navClass = value || 'navigation-menu';
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(Menu.prototype, "menuItemCollapsedIconClass", {
      get: function() {
        return this.menuItemCollapsedIconClass;
      },
      set: function(value) {
        this._menuItemCollapsedIconClass = value || this.navigationService.defaultIconClassPrefix + '-chevron-left';
      },
      enumerable: true,
      configurable: true
    });
    Object.defineProperty(Menu.prototype, "menuItemExpandedIconClass", {
      get: function() {
        return this._menuItemCollapsedIconClass;
      },
      set: function(value) {
        this._menuItemExpandedIconClass = value || this.navigationService.defaultIconClassPrefix + '-chevron-down';
      },
      enumerable: true,
      configurable: true
    });
    __decorate([core_1.Input('nav-class'), __metadata('design:type', String), __metadata('design:paramtypes', [String])], Menu.prototype, "navClass", null);
    __decorate([core_1.Input('menu-item-collapsed-icon-class'), __metadata('design:type', String), __metadata('design:paramtypes', [String])], Menu.prototype, "menuItemCollapsedIconClass", null);
    __decorate([core_1.Input('menu-item-expanded-icon-class'), __metadata('design:type', String), __metadata('design:paramtypes', [String])], Menu.prototype, "menuItemExpandedIconClass", null);
    Menu = __decorate([core_1.Component({
      selector: 'ng2-nav-menu',
      directives: [common_1.CORE_DIRECTIVES],
      template: "\n<ul ngClass=\"navClass\">\n    <ng2-nav-menu-item *ngFor=\"item of menuItems\" menuItem=\"item\"\n        menu-item-collapsed-icon-class=\"menuItemCollapsedIconClass\"\n        menu-item-expanded-icon-class=\"menuItemExpandedIconClass\"></ng2-menu-item>\n</ul>"
    }), __metadata('design:paramtypes', [navigation_service_1.NavigationService])], Menu);
    return Menu;
  })();
  exports.Menu = Menu;
  return module.exports;
});

System.registerDynamic("src/navbar.component", ["angular2/core", "angular2/common"], true, function($__require, exports, module) {
  ;
  var define;
  var global = this;
  var GLOBAL = this;
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
  var Navbar = (function() {
    function Navbar() {}
    Navbar = __decorate([core_1.Component({
      selector: 'ng2-navbar',
      directives: [common_1.CORE_DIRECTIVES],
      template: ""
    }), __metadata('design:paramtypes', [])], Navbar);
    return Navbar;
  })();
  exports.Navbar = Navbar;
  return module.exports;
});

System.registerDynamic("src/sidebar.component", ["angular2/core", "angular2/common"], true, function($__require, exports, module) {
  ;
  var define;
  var global = this;
  var GLOBAL = this;
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
  var Sidebar = (function() {
    function Sidebar() {}
    Sidebar = __decorate([core_1.Component({
      selector: 'ng2-sidebar',
      directives: [common_1.CORE_DIRECTIVES],
      template: ""
    }), __metadata('design:paramtypes', [])], Sidebar);
    return Sidebar;
  })();
  exports.Sidebar = Sidebar;
  return module.exports;
});

System.registerDynamic("src/navigation.service", ["angular2/core"], true, function($__require, exports, module) {
  ;
  var define;
  var global = this;
  var GLOBAL = this;
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
    function NavigationService() {
      this.iconBaseClass = 'glyphicon';
      this.defaultIconClassPrefix = 'glyphicon';
      this.menuItems = [];
    }
    NavigationService = __decorate([core_1.Injectable(), __metadata('design:paramtypes', [])], NavigationService);
    return NavigationService;
  })();
  exports.NavigationService = NavigationService;
  return module.exports;
});

System.registerDynamic("ng2-navigation", ["./src/menu.component", "./src/navbar.component", "./src/sidebar.component", "./src/navigation.service"], true, function($__require, exports, module) {
  "use strict";
  ;
  var define;
  var global = this;
  var GLOBAL = this;
  function __export(m) {
    for (var p in m)
      if (!exports.hasOwnProperty(p))
        exports[p] = m[p];
  }
  var menu_component_1 = $__require('./src/menu.component');
  var navbar_component_1 = $__require('./src/navbar.component');
  var sidebar_component_1 = $__require('./src/sidebar.component');
  var navigation_service_1 = $__require('./src/navigation.service');
  __export($__require('./src/menu.component'));
  __export($__require('./src/navbar.component'));
  __export($__require('./src/sidebar.component'));
  __export($__require('./src/navigation.service'));
  Object.defineProperty(exports, "__esModule", {value: true});
  exports.default = {
    providers: [navigation_service_1.NavigationService],
    directives: [menu_component_1.Menu, menu_component_1.MenuItem, navbar_component_1.Navbar, sidebar_component_1.Sidebar]
  };
  return module.exports;
});
