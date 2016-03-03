// Copyright (C) 2016 Sergey Akopkokhyants
// This project is licensed under the terms of the MIT license.
// https://github.com/akserg/ng2-navigation

'use strict';

import {Menu, MenuItem} from './src/menu.component';
import {Navbar} from './src/navbar.component';
import {Sidebar} from './src/sidebar.component';
import {NavigationService} from './src/navigation.service';

export * from './src/menu.component';
export * from './src/navbar.component';
export * from './src/sidebar.component';
export * from './src/navigation.service';

export default {
  providers: [NavigationService],
  directives: [Menu, MenuItem, Navbar, Sidebar]
}
