import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { TabInfoPage } from './tab-info.page';
var routes = [
    {
        path: '',
        component: TabInfoPage
    }
];
var TabInfoPageModule = /** @class */ (function () {
    function TabInfoPageModule() {
    }
    TabInfoPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [TabInfoPage]
        })
    ], TabInfoPageModule);
    return TabInfoPageModule;
}());
export { TabInfoPageModule };
//# sourceMappingURL=tab-info.module.js.map