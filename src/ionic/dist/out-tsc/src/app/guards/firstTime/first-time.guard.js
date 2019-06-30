import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
var FirstTimeGuard = /** @class */ (function () {
    function FirstTimeGuard(router) {
        this.router = router;
    }
    FirstTimeGuard.prototype.canActivate = function (route, state) {
        this.url = state.url;
        return this.verifyFirstTime(this.url);
    };
    FirstTimeGuard.prototype.verifyFirstTime = function (url) {
        if (this.isFirstTime()) {
            this.router.navigate(['/tutorial']);
            return false;
        }
        else if (!this.isFirstTime()) {
            return true;
        }
    };
    FirstTimeGuard.prototype.isFirstTime = function () {
        var result = true;
        if (localStorage.getItem('isFirstTime') === 'not') {
            result = false;
        }
        return result;
    };
    FirstTimeGuard = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [Router])
    ], FirstTimeGuard);
    return FirstTimeGuard;
}());
export { FirstTimeGuard };
//# sourceMappingURL=first-time.guard.js.map