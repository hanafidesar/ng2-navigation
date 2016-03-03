// Copyright (C) 2016 Sergey Akopkokhyants
// This project is licensed under the terms of the MIT license.
// https://github.com/akserg/ng2-navigation

import {Component, Input, ElementRef} from 'angular2/core';
import {Router} from 'angular2/router';
import {CORE_DIRECTIVES} from 'angular2/common';
import {isPresent} from 'angular2/src/facade/lang';

import {makeNavigationError} from './exceptions';
import {NavItem/*, isNavItemValid*/, NavigationService} from './navigation.service';

/**
 * This component is a menu item used in Menu, Navbar and Sidebar components.
 */
@Component({
    selector: 'ng2-menu-item',
    directives: [CORE_DIRECTIVES],
    template: `
<li ngClass="{ 'leaf': !menuItem.children }" ngIf="isVisible(menuItem)">
  <span ngIf="menuItem.children" class="float-right icon-fw {{ iconBaseClass() }}" ngClass="menuItem.isCollapsed ? menuItemCollapsedIconClass : menuItemExpandedIconClass"></span>
  <a ngIf="item.name" ngLink="{{item.name}}">
    <span class="menu-item-icon icon-fw {{ iconBaseClass() }} {{ menuItem.iconClass}}"></span>
    <span class="menu-item-text"> {{ menuItem.text }}</span>
    <!-- Menu with children here -->
  </a>
</li>
`
})
export class MenuItem {

    @Input('menu-item') menuItem: NavItem;
    @Input('menu-item-collapsed-icon-class') menuItemCollapsedIconClass:string;
    @Input('menu-item-expanded-icon-class') menuItemExpandedIconClass:string;

    isActive: boolean = false;

    constructor(private elementRef: ElementRef, private router: Router, private navigationService:NavigationService) {
        router.subscribe((value: any) => {
            this.isActive = this.isMenuItemActive(this.menuItem, value);
        });
    }

    iconBaseClass():string {
        return this.navigationService.iconBaseClass;
    }

    private isMenuItemActive(item:NavItem, value: any): boolean {
        if (!isPresent(item.children)) {
            // Return whether or not the leaf is active.
            return isPresent(item.name) && value.name === item.name;
        }
        for (var i = 0; i < item.children.length; i++) {
            if (isPresent(item.children[i].name) && value.name === item.children[i].name) {
                // Return true if the child menu item is active.
                return true;
            }
            if (this.isMenuItemActive(item.children[i], value)) {
                // Return true if the child has at least one active child of its own.
                return true;
            }
        }
        // Return false if the menu item has no active children.
        return false;
    }
}


/**
 * This component is a menu used in Navbar and Sidebar components.
 */
@Component({
    selector: 'ng2-nav-menu',
    directives: [CORE_DIRECTIVES],
    template: `
<ul ngClass="navClass">
    <ng2-nav-menu-item *ngFor="item of menuItems" menuItem="item"
        menu-item-collapsed-icon-class="menuItemCollapsedIconClass"
        menu-item-expanded-icon-class="menuItemExpandedIconClass"></ng2-menu-item>
</ul>`
})
export class Menu {
    private _navClass:string = 'navigation-menu';

    @Input('nav-class') set navClass(value:string) {
        this._navClass = value || 'navigation-menu';
    }
    get navClass():string {
        return this._navClass;
    }

    private _menuItemCollapsedIconClass:string;

    @Input('menu-item-collapsed-icon-class') set menuItemCollapsedIconClass(value:string) {
        this._menuItemCollapsedIconClass = value || this.navigationService.defaultIconClassPrefix + '-chevron-left';
    }

    get menuItemCollapsedIconClass():string {
        return this.menuItemCollapsedIconClass;
    }

    private _menuItemExpandedIconClass:string;

    @Input('menu-item-expanded-icon-class') set menuItemExpandedIconClass(value:string) {
        this._menuItemExpandedIconClass = value || this.navigationService.defaultIconClassPrefix + '-chevron-down';
    }

    get menuItemExpandedIconClass():string {
        return this._menuItemCollapsedIconClass;
    }

    menuItems:Array<NavItem> = [];

    constructor(private navigationService:NavigationService) {
    }
}

