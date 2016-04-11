import {
    describe,
    expect,
    beforeEach,
    it,
    inject,
    injectAsync,
    beforeEachProviders,
    TestComponentBuilder,
    ComponentFixture,
    fakeAsync,
    tick,
    MockApplicationRef,
} from 'angular2/testing';

import {Component, provide, ApplicationRef} from 'angular2/core';
import {RouteConfig, RouterOutlet, Router, RouteRegistry, ROUTER_PRIMARY_COMPONENT, ROUTER_PROVIDERS, ROUTER_DIRECTIVES, APP_BASE_HREF} from 'angular2/router';
import {SpyLocation} from 'angular2/router/testing';

import {TEST_BROWSER_PLATFORM_PROVIDERS, TEST_BROWSER_APPLICATION_PROVIDERS}
from 'angular2/platform/testing/browser';

import {NavItem} from '../src/nav.service';
import {Menu, MenuItem} from '../src/menu';

@Component({ selector: 'mock-cmp', template: ''})
class TestComponent {
}


@Component({
    selector: 'app',
    template: ''
})
@RouteConfig([
    { path: '/test', component: TestComponent, name: 'Test' },
    { path: '/test1', component: TestComponent, name: 'Test1' },
    { path: '/test2', component: TestComponent, name: 'Test2' },
    { path: '/test3', component: TestComponent, name: 'Test3' },
    { path: '/test4', component: TestComponent, name: 'Test4' }
])
export class App { }


export function main() {
    describe('Menu', () => {
        let componentFixture: ComponentFixture;
            let el: HTMLElement;
            let menu: Menu;

            let items: Array<NavItem> = [<NavItem>{
                name: "NavItem 1",
                link: ['Test'],
                isDivider: false,
                items: [{
                        name: "NavItem 2",
                        link: ['Test1'],
                        isDivider: false
                    },{
                        name: "NavItem 3",
                        link: ['Test2'],
                        isDivider: false
                    }]
            }, <NavItem>{
                isDivider: true
            }, <NavItem>{
                name: "NavItem 3",
                link: ['Test3']
            }, <NavItem>{
                name: "NavItem 4"
            }];

        beforeEachProviders(() => [
            TEST_BROWSER_PLATFORM_PROVIDERS,
            TEST_BROWSER_APPLICATION_PROVIDERS,
            ROUTER_PROVIDERS,
            provide(APP_BASE_HREF, {useValue: '/'}),
            provide(ApplicationRef, {useClass: MockApplicationRef}),
            provide(ROUTER_PRIMARY_COMPONENT, {useValue: App})
        ]);

        beforeEach(injectAsync([TestComponentBuilder], (tcb:TestComponentBuilder) => {
            return tcb.createAsync(Menu).then((cf:ComponentFixture) => {
                componentFixture = cf;
                el = cf.nativeElement;
                menu = cf.componentInstance;
                //
                menu.items = items;
                componentFixture.detectChanges();
                componentFixture.detectChanges();
            });
        }));

        it('should be defined', () => {
            expect(el).toBeDefined();
            console.log('Menu', el);

            let ul:HTMLElement = <HTMLElement>el.querySelector('ul');
            expect(ul.children.length).toBe(4);
        });
    });
}