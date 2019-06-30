import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { TabNotificationsPage } from './tab-notifications.page';
var routes = [
    {
        path: '',
        component: TabNotificationsPage
    }
];
var TabNotificationsPageModule = /** @class */ (function () {
    function TabNotificationsPageModule() {
    }
    TabNotificationsPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [TabNotificationsPage]
        })
    ], TabNotificationsPageModule);
    return TabNotificationsPageModule;
}());
export { TabNotificationsPageModule };
//# sourceMappingURL=tab-notifications.module.js.map