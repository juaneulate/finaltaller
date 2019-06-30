import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
var MainPage = /** @class */ (function () {
    function MainPage() {
        this.tabs = [
            { icon: 'list-box', name: 'info', title: 'info' },
            { icon: 'notifications', name: 'notifications', title: 'notifications' },
            { icon: 'mail', name: 'mail', title: 'mail' },
        ];
    }
    MainPage.prototype.ngOnInit = function () {
    };
    MainPage = tslib_1.__decorate([
        Component({
            selector: 'app-tab-main',
            templateUrl: './main.page.html',
            styleUrls: ['./main.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], MainPage);
    return MainPage;
}());
export { MainPage };
//# sourceMappingURL=main.page.js.map