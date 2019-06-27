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
    { video: this.videoPath + 'course_one.gif', title: 'Mi asombroso curso - First', duration: '8m36s', id: 1 },
    { video: this.videoPath + 'course_two.gif', title: 'Mi asombroso curso - Second', duration: '23m12s', id: 2 },
    { video: this.videoPath + 'course_three.gif', title: 'Mi asombroso curso - Third', duration: '36m6s', id: 3 },
    { video: this.videoPath + 'course_four.gif', title: 'Mi asombroso curso - Fourth', duration: '45m32s', id: 4 },
    { video: this.videoPath + 'course_five.gif', title: 'Mi asombroso curso - New', duration: '35m15s', id: 5 },
    { video: this.videoPath + 'course_six.gif', title: 'Mi asombroso curso - 2015', duration: '15m26s', id: 6 },
    { video: this.videoPath + 'course_seven.gif', title: 'Mi asombroso curso - 2016', duration: '12m46s', id: 7 },
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
