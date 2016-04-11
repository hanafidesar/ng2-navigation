// Copyright (C) 2016 Sergey Akopkokhyants
// This project is licensed under the terms of the MIT license.
// https://github.com/akserg/ng2-navigation

import {Injectable} from 'angular2/core';

export interface NavItem {
    name?: string;
    link?: Array<any>;
    isDivider?: boolean;
    items?: Array<NavItem>
}

/**
 * Navigation service helps create Navbar or Sidebar data
 */
@Injectable()
export class NavigationService {
}
