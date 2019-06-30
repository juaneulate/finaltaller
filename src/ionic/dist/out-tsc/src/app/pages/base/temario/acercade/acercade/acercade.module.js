import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { AcercadePage } from './acercade.page';
var routes = [
    {
        path: '',
        component: AcercadePage
    }
];
var AcercadePageModule = /** @class */ (function () {
    function AcercadePageModule() {
    }
    AcercadePageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [AcercadePage]
        })
    ], AcercadePageModule);
    return AcercadePageModule;
}());
export { AcercadePageModule };
//# sourceMappingURL=acercade.module.js.map