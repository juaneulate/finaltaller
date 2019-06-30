import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { TwoPage } from './two.page';
var routes = [
    {
        path: '',
        component: TwoPage
    }
];
var TwoPageModule = /** @class */ (function () {
    function TwoPageModule() {
    }
    TwoPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [TwoPage]
        })
    ], TwoPageModule);
    return TwoPageModule;
}());
export { TwoPageModule };
//# sourceMappingURL=two.module.js.map