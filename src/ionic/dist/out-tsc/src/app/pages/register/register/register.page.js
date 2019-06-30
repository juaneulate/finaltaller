import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { StudentService } from 'src/app/services/student/student.service';
import { ErrorService } from 'src/app/services/error/error.service';
import { AlertService } from 'src/app/services/alert/alert.service';
var RegisterPage = /** @class */ (function () {
    function RegisterPage(formBuilder, navCtrl, studentService, errorService, alertService) {
        this.formBuilder = formBuilder;
        this.navCtrl = navCtrl;
        this.studentService = studentService;
        this.errorService = errorService;
        this.alertService = alertService;
        this.formRegister = {};
    }
    RegisterPage.prototype.ngOnInit = function () {
        this.formRegister = this.formBuilder.group({
            fullName: new FormControl('', { validators: Validators.required }),
            age: new FormControl('', { validators: Validators.required }),
            login: new FormControl('', { validators: Validators.required }),
            password: new FormControl('', { validators: Validators.required }),
        });
    };
    Object.defineProperty(RegisterPage.prototype, "f", {
        get: function () {
            return this.formRegister.controls;
        },
        enumerable: true,
        configurable: true
    });
    RegisterPage.prototype.register = function () {
        var _this = this;
        // stop here if form is invalid
        if (this.formRegister.invalid) {
            return;
        }
        var fullname = this.f.fullName.value;
        var age = this.f.age.value;
        var login = this.f.login.value;
        var password = this.f.password.value;
        this.studentService.save(fullname, age, login, password)
            .then(function (data) {
            console.log(data.data);
            _this.navCtrl.navigateRoot('/login');
        })
            .catch(function (error) {
            _this.errorService.consoleLog(error);
            _this.errorService.alertError(error);
        });
    };
    RegisterPage = tslib_1.__decorate([
        Component({
            selector: 'app-register',
            templateUrl: './register.page.html',
            styleUrls: ['./register.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [FormBuilder,
            NavController,
            StudentService,
            ErrorService,
            AlertService])
    ], RegisterPage);
    return RegisterPage;
}());
export { RegisterPage };
//# sourceMappingURL=register.page.js.map