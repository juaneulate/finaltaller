import { TestBed } from '@angular/core/testing';
import { QuestionsService } from './questions.service';
describe('QuestionsService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(QuestionsService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=questions.service.spec.js.map