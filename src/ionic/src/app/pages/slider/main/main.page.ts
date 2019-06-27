import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides, NavController } from '@ionic/angular';

@Component({
  selector: 'app-slider-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainSliderPage implements OnInit {

  slides = [];
  pathImg = '';
  @ViewChild('slider') slider: IonSlides;
  constructor(
    private navCtrl: NavController,
  ) { }

  ngOnInit() {
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
  }

  onChange() {
    this.slider.getActiveIndex().then(data => {
    });
  }

  onClick() {
    this.navCtrl.navigateRoot('/login');
  }
}
