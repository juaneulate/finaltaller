import { TestBed } from '@angular/core/testing';
import { CursosService } from './cursos.service';
describe('CursosService', function () {
    beforeEach(function () { return TestBed.configureTestingModule({}); });
    it('should be created', function () {
        var service = TestBed.get(CursosService);
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=cursos.service.spec.js.map