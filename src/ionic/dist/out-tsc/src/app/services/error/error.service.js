import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { AlertService } from '../alert/alert.service';
var ErrorService = /** @class */ (function () {
    function ErrorService(alertService) {
        this.alertService = alertService;
    }
    ErrorService.prototype.parse = function (error) {
        // get best available error message
        var parsedError = {
            message: error.message ? error.message : error.error
        };
        // include HTTP status code
        if (error.status != null) {
            parsedError.status = error.status;
        }
        // include stack trace
        if (error.stack != null) {
            parsedError.stack = error.stack;
        }
        return parsedError;
    };
    ErrorService.prototype.consoleLog = function (error) {
        var parseError = this.parse(error);
        console.log(parseError.message, parseError.stack);
    };
    ErrorService.prototype.alertError = function (error) {
        var parseError = this.parse(error);
        this.alertService.presentConfirm(parseError.message, parseError.stack);
    };
    ErrorService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [AlertService])
    ], ErrorService);
    return ErrorService;
}());
export { ErrorService };
//# sourceMappingURL=error.service.js.map