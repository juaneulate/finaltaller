import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
var TemarioPage = /** @class */ (function () {
    function TemarioPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.pathImages = 'assets/temario/';
        this.temarios = [
            { title: 'Diseño', icon: this.pathImages + 'diseno.png', id: 1 },
            { title: 'Oficina', icon: this.pathImages + 'oficina.jpg', id: 2 },
            { title: 'Oratoria', icon: this.pathImages + 'oratoria.jpg', id: 3 },
            { title: 'Informatica', icon: this.pathImages + 'informatica.png', id: 4 }
        ];
    }
    TemarioPage.prototype.ngOnInit = function () {
    };
    TemarioPage.prototype.acercade = function () {
        this.navCtrl.navigateForward('/acercade');
    };
    TemarioPage.prototype.onClick = function (id) {
        var navOptions = {
            queryParams: {
                id: JSON.stringify(id),
                section: 'Temario',
            }
        };
        this.navCtrl.navigateForward('/course', navOptions);
    };
    TemarioPage = tslib_1.__decorate([
        Component({
            selector: 'app-temario',
            templateUrl: './temario.page.html',
            styleUrls: ['./temario.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [NavController])
    ], TemarioPage);
    return TemarioPage;
}());
export { TemarioPage };
//# sourceMappingURL=temario.page.js.map