import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FormControl, Validators, FormBuilder } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { LoginService } from 'src/app/services/login/login.service';
import { ErrorService } from 'src/app/services/error/error.service';
import { AlertService } from 'src/app/services/alert/alert.service';
var LoginPage = /** @class */ (function () {
    function LoginPage(formBuilder, navCtrl, loginService, errorService, alertService) {
        this.formBuilder = formBuilder;
        this.navCtrl = navCtrl;
        this.loginService = loginService;
        this.errorService = errorService;
        this.alertService = alertService;
        this.formLogin = {};
    }
    LoginPage.prototype.ngOnInit = function () {
        this.formLogin = this.formBuilder.group({
            username: new FormControl('', { validators: Validators.required }),
            password: new FormControl('', { validators: Validators.required }),
        });
        this.logout();
    };
    Object.defineProperty(LoginPage.prototype, "f", {
        get: function () {
            return this.formLogin.controls;
        },
        enumerable: true,
        configurable: true
    });
    LoginPage.prototype.login = function () {
        var _this = this;
        var url = '/base';
        // stop here if form is invalid
        if (this.formLogin.invalid) {
            return;
        }
        console.log(this.finger);
        var username = this.f.username.value;
        var password = this.f.password.value;
        this.loginService.login(username, password)
            .then(function (data) {
            var isLogin = JSON.parse(data.data);
            if (isLogin) {
                localStorage.setItem('isLoggedIn', 'true');
                localStorage.setItem('token', username);
                return _this.navCtrl.navigateRoot(url);
            }
            else {
                _this.alertService.presentConfirm('Error usuario o contraseña invalida.');
            }
        })
            .catch(function (error) {
            _this.errorService.consoleLog(error);
            _this.errorService.alertError(error);
        });
    };
    LoginPage.prototype.logout = function () {
        localStorage.clear();
    };
    LoginPage = tslib_1.__decorate([
        Component({
            selector: 'app-login',
            templateUrl: './login.page.html',
            styleUrls: ['./login.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [FormBuilder,
            NavController,
            LoginService,
            ErrorService,
            AlertService])
    ], LoginPage);
    return LoginPage;
}());
export { LoginPage };
//# sourceMappingURL=login.page.js.map