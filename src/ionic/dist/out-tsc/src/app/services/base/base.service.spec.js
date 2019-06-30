import { TestBed } from '@angular/core/testing';
import { BaseService } from './base.service';
describe('BaseService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(BaseService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=base.service.spec.js.map