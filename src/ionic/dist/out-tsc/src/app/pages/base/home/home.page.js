import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { NavController, Platform } from '@ionic/angular';
import { LoginService } from 'src/app/services/login/login.service';
import { ErrorService } from 'src/app/services/error/error.service';
import { AlertService } from 'src/app/services/alert/alert.service';
var HomePage = /** @class */ (function () {
    function HomePage(navCtrl, platform, loginService, errorService, alertService) {
        this.navCtrl = navCtrl;
        this.platform = platform;
        this.loginService = loginService;
        this.errorService = errorService;
        this.alertService = alertService;
        this.sliderConfig = {
            spaceBetween: 10,
            slidesPerView: 1.4
        };
        this.pathImages = 'assets/cursos/';
        this.relatedVideos = [
            { id: 1, title: 'Curso tema one', img: this.pathImages + 'course_one.gif' },
            { id: 2, title: 'Curso tema two', img: this.pathImages + 'course_two.gif' },
            { id: 3, title: 'Curso tema three', img: this.pathImages + 'course_three.gif' },
        ];
        this.freeVideos = [
            { id: 4, title: 'Curso tema four', img: this.pathImages + 'course_four.gif' },
            { id: 5, title: 'Curso tema five', img: this.pathImages + 'course_five.gif' },
            { id: 6, title: 'Curso tema six', img: this.pathImages + 'course_six.gif' },
        ];
        this.premiumVideos = [
            { id: 7, title: 'Curso tema seven', img: this.pathImages + 'course_seven.gif' },
            { id: 8, title: 'Curso tema eight', img: this.pathImages + 'course_eight.gif' },
            { id: 9, title: 'Curso tema nine', img: this.pathImages + 'course_nine.gif' },
        ];
    }
    HomePage.prototype.ngOnInit = function () {
        var _this = this;
        this.showStudent = false;
        this.platform.ready().then(function (dataP) {
            console.log(dataP);
            var username = localStorage.getItem('token');
            _this.loginService.getStudent(username)
                .then(function (data) {
                console.log(data);
                _this.showStudent = true;
                _this.student = JSON.parse(data.data);
            })
                .catch(function (error) {
                _this.errorService.consoleLog(error);
                _this.errorService.alertError(error);
            });
        });
    };
    HomePage.prototype.go = function (id) {
        var navOptions = {
            queryParams: {
                id: JSON.stringify(id),
                section: 'Course',
            }
        };
        this.navCtrl.navigateForward('/course', navOptions);
    };
    HomePage = tslib_1.__decorate([
        Component({
            selector: 'app-home',
            templateUrl: 'home.page.html',
            styleUrls: ['home.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [NavController,
            Platform,
            LoginService,
            ErrorService,
            AlertService])
    ], HomePage);
    return HomePage;
}());
export { HomePage };
//# sourceMappingURL=home.page.js.map