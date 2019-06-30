import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { TabMailPage } from './tab-mail.page';
var routes = [
    {
        path: '',
        component: TabMailPage
    }
];
var TabMailPageModule = /** @class */ (function () {
    function TabMailPageModule() {
    }
    TabMailPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [TabMailPage]
        })
    ], TabMailPageModule);
    return TabMailPageModule;
}());
export { TabMailPageModule };
//# sourceMappingURL=tab-mail.module.js.map