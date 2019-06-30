import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
var AcercadePage = /** @class */ (function () {
    function AcercadePage() {
        this.messages = [
            { name: 'David Guzman', main: 'Excelente curso', info: 'Buen profe, excelente videos' },
            { name: 'Cristofer Padilla', main: 'Mas y mejor', info: 'Produccion de alto nivel' },
            { name: 'Dunia Herrera', main: 'Sigan adelante', info: 'No se que rellenar aca' },
            { name: 'Pedro Vargas', main: 'Somos campeones', info: 'Yo igual xD' },
            { name: 'Raul Nota', main: 'Vamos que se puede', info: 'este men -.-' },
            { name: 'Gerardo Vargas', main: 'Maso que va', info: 'xD xD xxD' },
        ];
    }
    AcercadePage.prototype.ngOnInit = function () {
    };
    AcercadePage = tslib_1.__decorate([
        Component({
            selector: 'app-acercade',
            templateUrl: './acercade.page.html',
            styleUrls: ['./acercade.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [])
    ], AcercadePage);
    return AcercadePage;
}());
export { AcercadePage };
//# sourceMappingURL=acercade.page.js.map