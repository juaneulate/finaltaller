import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
var CursoPage = /** @class */ (function () {
    function CursoPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.videoPath = 'assets/cursos/';
        this.cursos = [
            { video: this.videoPath + 'course_one.gif', title: 'Mi asombroso curso - First', duration: '8m36s', id: 1 },
            { video: this.videoPath + 'course_two.gif', title: 'Mi asombroso curso - Second', duration: '23m12s', id: 2 },
            { video: this.videoPath + 'course_three.gif', title: 'Mi asombroso curso - Third', duration: '36m6s', id: 3 },
            { video: this.videoPath + 'course_four.gif', title: 'Mi asombroso curso - Fourth', duration: '45m32s', id: 4 },
            { video: this.videoPath + 'course_five.gif', title: 'Mi asombroso curso - New', duration: '35m15s', id: 5 },
            { video: this.videoPath + 'course_six.gif', title: 'Mi asombroso curso - 2015', duration: '15m26s', id: 6 },
            { video: this.videoPath + 'course_seven.gif', title: 'Mi asombroso curso - 2016', duration: '12m46s', id: 7 },
        ];
    }
    CursoPage.prototype.ngOnInit = function () {
    };
    CursoPage.prototype.go = function (id) {
        var navOptions = {
            queryParams: {
                id: JSON.stringify(id),
                section: 'Course',
            }
        };
        this.navCtrl.navigateForward('/course', navOptions);
    };
    CursoPage = tslib_1.__decorate([
        Component({
            selector: 'app-curso',
            templateUrl: './curso.page.html',
            styleUrls: ['./curso.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [NavController])
    ], CursoPage);
    return CursoPage;
}());
export { CursoPage };
//# sourceMappingURL=curso.page.js.map