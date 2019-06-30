import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CursoPage } from './curso.page';
var routes = [
    {
        path: '',
        component: CursoPage
    }
];
var CursoPageModule = /** @class */ (function () {
    function CursoPageModule() {
    }
    CursoPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [CursoPage]
        })
    ], CursoPageModule);
    return CursoPageModule;
}());
export { CursoPageModule };
//# sourceMappingURL=curso.module.js.map