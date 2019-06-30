import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { TemarioPage } from './temario.page';
var routes = [
    {
        path: '',
        component: TemarioPage
    }
];
var TemarioPageModule = /** @class */ (function () {
    function TemarioPageModule() {
    }
    TemarioPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [TemarioPage]
        })
    ], TemarioPageModule);
    return TemarioPageModule;
}());
export { TemarioPageModule };
//# sourceMappingURL=temario.module.js.map