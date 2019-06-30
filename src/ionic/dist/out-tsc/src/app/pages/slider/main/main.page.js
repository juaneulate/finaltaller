import * as tslib_1 from "tslib";
import { Component, ViewChild } from '@angular/core';
import { IonSlides, NavController } from '@ionic/angular';
var MainSliderPage = /** @class */ (function () {
    function MainSliderPage(navCtrl) {
        this.navCtrl = navCtrl;
        this.slides = [];
        this.pathImg = '';
    }
    MainSliderPage.prototype.ngOnInit = function () {
        this.pathImg = 'assets/img/';
        this.slides = [
            {
                title: 'Bienvenido a PIAAM',
                description: 'Te brindamos una capacitacion personalizada y con una variedad de nuevos cursos.',
                image: this.pathImg + 'slide_one.png',
                last: false,
                class: 'slide-one',
            },
            {
                title: 'Aprendizaje',
                description: 'Amplia tus habilidades usando herramientas digitales.',
                image: this.pathImg + 'slide_two.png',
                last: false,
                class: 'slide-two',
            },
            {
                title: 'Comunicacion',
                description: 'Comparte tus experiencias de cada curso con las demas personas en nuestro foro.',
                image: this.pathImg + 'slide_three.png',
                last: false,
                class: 'slide-three',
            },
            {
                title: 'Nuevas metas',
                description: 'Te desafia a que logres alcanzar nuevas metas en un nuevo mundo.',
                image: this.pathImg + 'slide_four.png',
                last: true,
                class: 'slide-four',
            }
        ];
    };
    MainSliderPage.prototype.onClick = function () {
        this.navCtrl.navigateRoot('/questions');
    };
    tslib_1.__decorate([
        ViewChild('slider'),
        tslib_1.__metadata("design:type", IonSlides)
    ], MainSliderPage.prototype, "slider", void 0);
    MainSliderPage = tslib_1.__decorate([
        Component({
            selector: 'app-slider-main',
            templateUrl: './main.page.html',
            styleUrls: ['./main.page.scss'],
        }),
        tslib_1.__metadata("design:paramtypes", [NavController])
    ], MainSliderPage);
    return MainSliderPage;
}());
export { MainSliderPage };
//# sourceMappingURL=main.page.js.map