import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
var QuestionsService = /** @class */ (function () {
    function QuestionsService() {
        this.questions = [
            { question: 'Conoces las herramientas de Word, Excel y Powerpoint?', name: 'qone' },
            { question: 'Sabes que son las redes sociales y como se usan?', name: 'qtwo' },
            { question: 'Conoces lo que es un navegador web?', name: 'qthree' },
            { question: 'Conoces lo que es un correo electronico o e-mail?', name: 'qfour' },
        ];
    }
    QuestionsService.prototype.getQuestion = function () {
        return this.questions;
    };
    QuestionsService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], QuestionsService);
    return QuestionsService;
}());
export { QuestionsService };
//# sourceMappingURL=questions.service.js.map