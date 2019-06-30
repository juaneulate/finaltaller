import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { FormControl, Validators, FormBuilder } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { QuestionsService } from 'src/app/services/questions/questions.service';
var QuestionsPage = /** @class */ (function () {
    function QuestionsPage(formBuilder, navCtrl, questionsService) {
        this.formBuilder = formBuilder;
        this.navCtrl = navCtrl;
        this.questionsService = questionsService;
        this.formQuestions = {};
        this.questions = [];
    }
    QuestionsPage.prototype.ngOnInit = function () {
        this.formQuestions = this.formBuilder.group({
            qone: new FormControl('', { validators: Validators.required }),
            qtwo: new FormControl('', { validators: Validators.required }),
            qthree: new FormControl('', { validators: Validators.required }),
            qfour: new FormControl('', { validators: Validators.required }),
        });
        this.questions = this.questionsService.getQuestion();
    };
    QuestionsPage.prototype.save = function () {
        localStorage.setItem('isFirstTime', 'not');
        this.navCtrl.navigateRoot('/base');
    };
    QuestionsPage = tslib_1.__decorate([
        Component({
            selector: 'app-questions',
            templateUrl: './questions.page.html',
            styleUrls: ['./questions.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [FormBuilder,
            NavController,
            QuestionsService])
    ], QuestionsPage);
    return QuestionsPage;
}());
export { QuestionsPage };
//# sourceMappingURL=questions.page.js.map