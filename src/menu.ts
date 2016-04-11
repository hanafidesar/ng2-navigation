// Copyright (C) 2016 Sergey Akopkokhyants
// This project is licensed under the terms of the MIT license.
// https://github.com/akserg/ng2-navigation

import {Component, Input, ElementRef} from 'angular2/core';
import {Router} from 'angular2/router';
import {CORE_DIRECTIVES} from 'angular2/common';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {isPresent} from 'angular2/src/facade/lang';

import {NavItem} from './nav.service';

/**
 * This component is a Menu used in Navbar and Sidebar components.
 */
@Component({
    selector: 'ng2-menu',
    directives: [CORE_DIRECTIVES, ROUTER_DIRECTIVES],
    template: `
<ul class='dropdown-menu'>
    <ng2-menu-item *ngFor='#item of items' item='item'></ng2-menu-item>
</ul>`
})
export class Menu {
    @Input() items: Array<NavItem> = [];
}

/**
 * This component is a MenuItem used in Menu, Navbar and Sidebar components.
 */
@Component({
    selector: 'ng2-menu-item',
    directives: [CORE_DIRECTIVES, ROUTER_DIRECTIVES],
    template: `
<li [ngClass]="{divider: item.isDivider}">
    <a [routerLink]="item.link" *ngIf="!item.isDivider">{{item.name}}</a>
    <ng2-menu *ngIf="item.items" items="item.items"></ng2-menu>
</li>`
})
export class MenuItem {

    private _item:NavItem;
    @Input() set item(value: NavItem) {
        this._item = this.checkAndFixItem(value);
    }
    get item(): NavItem {
        return this._item;
    }

    el: HTMLElement;

    // See http://stackoverflow.com/a/32341540/1666663 how to create components dynamically
    // constructor(private loader: DynamicComponentLoader, private elRef: ElementRef) {
    //     loader.loadIntoLocation(Menu, elRef, 'child');
    // }

    constructor(private elRef: ElementRef) {
        this.el = elRef.nativeElement;
        let clazz = this.getClassByParent();
        this.el.classList.add(clazz);
    }

    checkAndFixItem(value: NavItem): NavItem {
        if (isPresent(value)) {
            if (!isPresent(value.name)) {
                value.name = '';
            }
            if (!isPresent(value.link)) {
                value.link = [];
            }
            if (!isPresent(value.isDivider)) {
                value.isDivider = false;
            }
            return value;
        } else {
            return {
                name: '',
                link: [],
                isDivider: false
            }
        }
    }

    getClassByParent(): string {
        // Result to return
        let clazz: string = 'dropdown-submenu';
        // Parent element
        let parent: HTMLElement = this.el.parentElement;
        // Move through hierarchy to find dropdown parent pushed to right
        while(parent) {
            // Check if the dropdown has been push to right
            if (parent.className.indexOf('navbar-right') !== -1) {
                clazz = 'dropdown-submenu-right';
                break;
            }
            parent = parent.parentElement;
        }
        return clazz;
    }
}
