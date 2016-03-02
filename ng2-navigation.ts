// Copyright (C) 2016 Sergey Akopkokhyants
// This project is licensed under the terms of the MIT license.
// https://github.com/akserg/ng2-navigation

'use strict';

import {Menu} from './src/menu.container';
import {Navbar} from './src/navbar.component';
import {Sidebar} from './src/sidebar.config';
import {NavigationService} from './src/navigation.service';

export * from './src/menu.container';
export * from './src/navbar.component';
export * from './src/sidebar.component';
export * from './src/navigation.service';

export default {
  providers: [NavigationService],
  directives: [Menu, Navbar, Sidebar]
}
