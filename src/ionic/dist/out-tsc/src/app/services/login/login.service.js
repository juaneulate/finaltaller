import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { BaseService } from '../base/base.service';
import { HTTP } from '@ionic-native/http/ngx';
var LoginService = /** @class */ (function (_super) {
    tslib_1.__extends(LoginService, _super);
    function LoginService(http) {
        var _this = _super.call(this) || this;
        _this.http = http;
        _this.controllerUrl = 'login/';
        return _this;
    }
    LoginService.prototype.login = function (username, password) {
        // Initialize Params Object
        var params = {
            username: username,
            password: password
        };
        return this.http.get(this.getFullUrl() + 'validate', params, {});
    };
    LoginService.prototype.getStudent = function (username) {
        // Initialize Params Object
        var params = {
            username: username
        };
        return this.http.get(this.getFullUrl() + 'get-student', params, {});
    };
    LoginService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [HTTP])
    ], LoginService);
    return LoginService;
}(BaseService));
export { LoginService };
//# sourceMappingURL=login.service.js.map