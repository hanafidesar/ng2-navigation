// Copyright (C) 2016 Sergey Akopkokhyants
// This project is licensed under the terms of the MIT license.
// https://github.com/akserg/ng2-navigation

import {Injectable} from 'angular2/core';
import {isPresent} from 'angular2/src/facade/lang';

/**
 * Navigation Item
  */
export interface NavItem {
    name: string;

    iconClass?:string;
    text?:string;
    isDivider?:boolean;

    children?:Array<NavItem>;
}

/**
 * Navigation service helps create Navbar or Sidebar data
 */
@Injectable()
export class NavigationService {
    iconBaseClass:string = 'glyphicon';
    defaultIconClassPrefix:string = 'glyphicon';
    menuItems:Array<NavItem> = [];
}

