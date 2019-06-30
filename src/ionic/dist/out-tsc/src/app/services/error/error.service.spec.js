import { TestBed } from '@angular/core/testing';
import { ErrorService } from './error.service';
describe('ErrorService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(ErrorService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=error.service.spec.js.map