import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { OnePage } from './one.page';
var routes = [
    {
        path: '',
        component: OnePage
    }
];
var OnePageModule = /** @class */ (function () {
    function OnePageModule() {
    }
    OnePageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [OnePage]
        })
    ], OnePageModule);
    return OnePageModule;
}());
export { OnePageModule };
//# sourceMappingURL=one.module.js.map