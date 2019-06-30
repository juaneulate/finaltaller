import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { CourseDetailPage } from './course.detail.page';
var routes = [
    {
        path: '',
        component: CourseDetailPage
    }
];
var CourseDetailPageModule = /** @class */ (function () {
    function CourseDetailPageModule() {
    }
    CourseDetailPageModule = tslib_1.__decorate([
        NgModule({
            imports: [
                CommonModule,
                FormsModule,
                IonicModule,
                RouterModule.forChild(routes)
            ],
            declarations: [CourseDetailPage]
        })
    ], CourseDetailPageModule);
    return CourseDetailPageModule;
}());
export { CourseDetailPageModule };
//# sourceMappingURL=course.detail.module.js.map