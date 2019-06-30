import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
var BaseService = /** @class */ (function () {
    function BaseService() {
        this.baseUrl = 'http://52.14.41.220:8080/rest/';
    }
    BaseService.prototype.getFullUrl = function () {
        return this.baseUrl + this.controllerUrl;
    };
    BaseService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], BaseService);
    return BaseService;
}());
export { BaseService };
//# sourceMappingURL=base.service.js.map