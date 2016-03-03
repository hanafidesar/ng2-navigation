import {
  describe,
  expect,
  beforeEach,
  it,
  inject,
  injectAsync,
  beforeEachProviders
} from 'angular2/testing';

import {Observable} from 'rxjs/Observable';

import {NavigationService} from '../src/navigation.service';

export function main() {
    describe('NavigationService', () => {

        beforeEachProviders(() => {
            return [
                NavigationService
            ];
        });

        it('is defined',
            inject([NavigationService], (service:NavigationService) => {
                expect(NavigationService).toBeDefined();
                expect(service instanceof NavigationService).toBeTruthy();
            })
        );
    });
}