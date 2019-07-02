import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { NavigationOptions } from '@ionic/angular/dist/providers/nav-controller';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.page.html',
  styleUrls: ['./curso.page.scss'],
})
export class CursoPage implements OnInit {

  videoPath = 'assets/cursos/';
  cursos = [
    { video: this.videoPath + 'course_one.gif', title: 'Curso sobre uso de word', duration: '8m36s', id: 1 },
    { video: this.videoPath + 'course_two.gif', title: 'Como anunciar en facebook', duration: '23m12s', id: 2 },
    { video: this.videoPath + 'course_three.gif', title: 'Como vender en Instagram', duration: '36m6s', id: 3 },
    { video: this.videoPath + 'course_four.gif', title: 'Porque tu negocio necesita un plan', duration: '45m32s', id: 4 },
    { video: this.videoPath + 'course_five.gif', title: 'Curso de Google Drive', duration: '35m15s', id: 5 },
  ];

  constructor(
    private navCtrl: NavController
  ) { }

  ngOnInit() {
  }

  go(id: number) {
    const navOptions: NavigationOptions = {
      queryParams: {
        id: JSON.stringify(id),
        section: 'Course',
      }
    };

    this.navCtrl.navigateForward('/course', navOptions);
  }

}
