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
    { path: '/test', component: TestComponent, name: 'Test' }
])
export class App { }


export function main() {
    describe('Menu NavItem', () => {
        let componentFixture: ComponentFixture;
        let el: HTMLElement;
        let menuItem: MenuItem;

        let item: NavItem = <NavItem>{
            name: "NavItem 1",
            link: ['Test'],
            isDivider: false
        };

        let itemDiv: NavItem = <NavItem>{
            isDivider: true
        };

        beforeEachProviders(() => [
            TEST_BROWSER_PLATFORM_PROVIDERS,
            TEST_BROWSER_APPLICATION_PROVIDERS,
            ROUTER_PROVIDERS,
            provide(APP_BASE_HREF, {useValue: '/'}),
            provide(ApplicationRef, {useClass: MockApplicationRef}),
            provide(ROUTER_PRIMARY_COMPONENT, {useValue: App})
        ]);

        beforeEach(injectAsync([TestComponentBuilder], (tcb:TestComponentBuilder) => {
            return tcb.createAsync(MenuItem).then((cf:ComponentFixture) => {
                componentFixture = cf;
                el = cf.nativeElement;
                menuItem = cf.componentInstance;
            });
        }));

        it('should be defined', () => {
            menuItem.item = item;
            componentFixture.detectChanges();

            // console.log('Menu NavItem', el);

            let li:HTMLElement = <HTMLElement>el.querySelector('li');
            expect(li).toBeDefined();

            let a:HTMLAnchorElement = <HTMLAnchorElement>li.querySelector('a');
            expect(a).toBeDefined();
            expect(a.href.endsWith('/test')).toBeTruthy();
            expect(a.innerText).toBe('NavItem 1');
        });

        it('should be defined as divider', () => {
            menuItem.item = itemDiv;
            componentFixture.detectChanges();

            // console.log('Menu Divider', el);

            let li:HTMLElement = <HTMLElement>el.querySelector('li');
            expect(li).toBeDefined();
            expect(li).toHaveCssClass('divider');
            expect(li.children.length).toBe(0);
        });
    });
}