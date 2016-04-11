// Copyright (C) 2016 Sergey Akopkokhyants
// This project is licensed under the terms of the MIT license.
// https://github.com/akserg/ng2-navigation

'use strict';

import {Menu, MenuItem} from './src/menu';
//import {} from './src/menu';
import {NavItem} from './src/nav.service';
//import {} from './src/navbar';
//import {} from './src/sidebar'

export * from './src/menu';
//export * from './src/menu';
export * from './src/nav.service';
// export * from './src/navbar';
//export * from './src/sidebar'

//export const NAV_PROVIDERS: any[] = [];
export const NAV_DIRECTIVES: any[] = [MenuItem, Menu];
