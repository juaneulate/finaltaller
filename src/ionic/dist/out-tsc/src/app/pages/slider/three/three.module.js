import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { ThreePage } from './three.page';
var routes = [
    {
        path: '',
        component: ThreePage
    }
];
var ThreePageModule = /** @class */ (function () {
    function ThreePageModule() {
    }
    ThreePageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [ThreePage]
        })
    ], ThreePageModule);
    return ThreePageModule;
}());
export { ThreePageModule };
//# sourceMappingURL=three.module.js.map