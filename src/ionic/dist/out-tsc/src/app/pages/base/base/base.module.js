import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { BasePage } from './base.page';
var routes = [
    {
        path: 'main',
        children: [
            { path: 'home', loadChildren: '../home/home.module#HomePageModule' },
            { path: 'test', loadChildren: '../questions/questions/questions.module#QuestionsPageModule' },
            { path: 'list', loadChildren: '../list/list.module#ListPageModule' },
        ]
    },
    {
        path: '',
        redirectTo: 'main/home',
        pathMatch: 'full',
        component: BasePage
    }
];
var BasePageModule = /** @class */ (function () {
    function BasePageModule() {
    }
    BasePageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [BasePage]
        })
    ], BasePageModule);
    return BasePageModule;
}());
export { BasePageModule };
//# sourceMappingURL=base.module.js.map