import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { MainSliderPage } from './main.page';
var routes = [
    {
        path: '',
        component: MainSliderPage
    }
];
var MainSliderPageModule = /** @class */ (function () {
    function MainSliderPageModule() {
    }
    MainSliderPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [MainSliderPage]
        })
    ], MainSliderPageModule);
    return MainSliderPageModule;
}());
export { MainSliderPageModule };
//# sourceMappingURL=main.module.js.map