import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { BaseService } from '../base/base.service';
import { HTTP } from '@ionic-native/http/ngx';
var StudentService = /** @class */ (function (_super) {
    tslib_1.__extends(StudentService, _super);
    function StudentService(http) {
        var _this = _super.call(this) || this;
        _this.http = http;
        _this.controllerUrl = 'student/';
        return _this;
    }
    StudentService.prototype.save = function (fullname, age, login, password) {
        var headers = {
            'Content-Type': 'application/json'
        };
        var body = {
            fullname: fullname,
            age: age,
            login: login,
            password: password
        };
        this.http.setDataSerializer('json');
        return this.http.post(this.getFullUrl() + 'save', body, headers);
    };
    StudentService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HTTP])
    ], StudentService);
    return StudentService;
}(BaseService));
export { StudentService };
//# sourceMappingURL=student.service.js.map