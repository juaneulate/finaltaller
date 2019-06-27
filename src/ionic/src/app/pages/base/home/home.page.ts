import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { NavigationOptions } from '@ionic/angular/dist/providers/nav-controller';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  sliderConfig = {
    spaceBetween: 10,
    slidesPerView: 1.4
  };

  pathImages = 'assets/cursos/';

  relatedVideos = [
    { id: 1, title: 'Curso tema one', img: this.pathImages + 'course_one.gif' },
    { id: 2, title: 'Curso tema two', img: this.pathImages + 'course_two.gif' },
    { id: 3, title: 'Curso tema three', img: this.pathImages + 'course_three.gif' },
  ];

  freeVideos = [
    { id: 4, title: 'Curso tema four', img: this.pathImages + 'course_four.gif' },
    { id: 5, title: 'Curso tema five', img: this.pathImages + 'course_five.gif' },
    { id: 6, title: 'Curso tema six', img: this.pathImages + 'course_six.gif' },
  ];

  premiumVideos = [
    { id: 7, title: 'Curso tema seven', img: this.pathImages + 'course_seven.gif' },
    { id: 8, title: 'Curso tema eight', img: this.pathImages + 'course_eight.gif' },
    { id: 9, title: 'Curso tema nine', img: this.pathImages + 'course_nine.gif' },
  ];

  constructor(
    private navCtrl: NavController
  ) { }

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
