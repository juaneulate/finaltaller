import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { FourPage } from './four.page';
var routes = [
    {
        path: '',
        component: FourPage
    }
];
var FourPageModule = /** @class */ (function () {
    function FourPageModule() {
    }
    FourPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [FourPage]
        })
    ], FourPageModule);
    return FourPageModule;
}());
export { FourPageModule };
//# sourceMappingURL=four.module.js.map