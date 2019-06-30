import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { MainPage } from './main.page';
var routes = [
    {
        path: 'tabs',
        children: [
            { path: 'info', loadChildren: '../tab-info/tab-info.module#TabInfoPageModule' }
        ]
    },
    {
        path: '',
        redirectTo: 'tabs/info',
        component: MainPage,
    }
];
var TabMainPageModule = /** @class */ (function () {
    function TabMainPageModule() {
    }
    TabMainPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [MainPage]
        })
    ], TabMainPageModule);
    return TabMainPageModule;
}());
export { TabMainPageModule };
//# sourceMappingURL=main.module.js.map