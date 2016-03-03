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
  tick
} from 'angular2/testing';

import {SpyLocation} from 'angular2/src/mock/location_mock';

import {MockApplicationRef} from 'angular2/src/mock/mock_application_ref';

import {TEST_BROWSER_PLATFORM_PROVIDERS, TEST_BROWSER_APPLICATION_PROVIDERS}
    from 'angular2/platform/testing/browser';

import {provide, ApplicationRef} from 'angular2/core';
import {Observable} from 'rxjs/Observable';
import {ROUTER_PROVIDERS, APP_BASE_HREF,
    ROUTER_PRIMARY_COMPONENT, Router, RouteConfig, Location} from 'angular2/router';
import {RootRouter} from 'angular2/src/router/router';

import {Menu, MenuItem} from '../src/menu.component';
import {NavItem, NavigationService} from '../src/navigation.service';
import {NavigationException} from '../src/exceptions';

export function main() {
    describe('MenuItemComponent', () => {

        let componentFixture:ComponentFixture;

        let navItem = {
            'name': 'Path'
        };

        let navItem2 = {
            'name': 'Path2'
        };

        let routerConfig = [
            { 'path': '/path', 'name': 'Path', 'component': MenuItem },
            { 'path': '/path2', 'name': 'Path2', 'component': MenuItem }
        ];

        beforeEachProviders(() => {
            return [TEST_BROWSER_PLATFORM_PROVIDERS, TEST_BROWSER_APPLICATION_PROVIDERS,
                ROUTER_PROVIDERS,
                provide(APP_BASE_HREF, {useValue: '/'}),
                provide(ROUTER_PRIMARY_COMPONENT, {useValue: MenuItem}),
                provide(ApplicationRef, {useClass: MockApplicationRef}),
                NavigationService];
        });


        beforeEach(injectAsync([TestComponentBuilder, Router], (tcb:TestComponentBuilder, r:Router) => {
            r.config(routerConfig);
            return tcb.createAsync(MenuItem).then((cf:ComponentFixture) => {
                componentFixture = cf;
                componentFixture.componentInstance.menuItem = navItem;
                componentFixture.detectChanges();
            });
        }));

        it('should be defined', () => {
            const element = componentFixture.nativeElement;
            expect(element).toBeDefined();
        });

        // describe('should navigates to', () => {

        //     let router:Router;
        //     let location:Location;
        //     let tcb:TestComponentBuilder;

        //     beforeEachProviders(() => {
        //         return [TEST_BROWSER_PLATFORM_PROVIDERS, TEST_BROWSER_APPLICATION_PROVIDERS,
        //             ROUTER_PROVIDERS,
        //             provide(APP_BASE_HREF, {useValue: '/'}),
        //             provide(ROUTER_PRIMARY_COMPONENT, {useValue: MenuItem}),
        //             provide(ApplicationRef, {useClass: MockApplicationRef})];
        //     });


        //     beforeEach(injectAsync([TestComponentBuilder, Router, Location], (tcb:TestComponentBuilder, r:Router, l:Location) => {
        //         r.config(routerConfig);
        //         router = r;
        //         location = l;
        //         return tcb.createAsync(MenuItem).then((cf:ComponentFixture) => {
        //             componentFixture = cf;
        //             componentFixture.componentInstance.menuItem = navItem;
        //             componentFixture.detectChanges();
        //             router.navigate([navItem.name]);
        //             componentFixture.detectChanges();
        //         });
        //     }));

        //     it('should be defined', (done:any) => {
        //         const element = componentFixture.nativeElement;
        //         expect(element).toBeDefined();
        //         expect(componentFixture.componentInstance.isActive).toBeFalsy();
        //         expect(router).toBeDefined();
        //         router.navigate([navItem2.name]).then(() => {
        //             console.log("1", location.path());
        //             // expect(componentFixture.componentInstance.isActive).toBeTruthy();
        //             expect(location.path()).toBe(navItem2.path);
        //             done();
        //         }, (err) => {
        //             console.log("2", err);
        //             done.fail(err);
        //         });
        //     });
        // });
    });

    // describe('MenuComponent', () => {

    //     let componentFixture:ComponentFixture;

    //     beforeEachProviders(() => {
    //         return [TEST_BROWSER_PLATFORM_PROVIDERS, TEST_BROWSER_APPLICATION_PROVIDERS];
    //     });


    //      beforeEach(injectAsync([TestComponentBuilder], (tcb:TestComponentBuilder) => {
    //         return tcb.createAsync(Menu).then((cf:ComponentFixture) => {
    //             componentFixture = cf;
    //             componentFixture.detectChanges();
    //         });
    //     }));

    //     it('should be defined', () => {
    //         const element = componentFixture.nativeElement;
    //         expect(element).toBeDefined();
    //     });
    // });
}