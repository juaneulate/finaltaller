import { TestBed, inject } from '@angular/core/testing';
import { FirstTimeGuard } from './first-time.guard';
describe('FirstTimeGuard', function () {
    beforeEach(function () {
        TestBed.configureTestingModule({
            providers: [FirstTimeGuard]
        });
    });
    it('should ...', inject([FirstTimeGuard], function (guard) {
        expect(guard).toBeTruthy();
    }));
});
//# sourceMappingURL=first-time.guard.spec.js.map