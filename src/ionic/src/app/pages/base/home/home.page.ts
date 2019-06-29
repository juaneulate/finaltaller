import { Component, OnInit } from '@angular/core';
import { NavController, Platform } from '@ionic/angular';
import { NavigationOptions } from '@ionic/angular/dist/providers/nav-controller';
import { LoginService } from 'src/app/services/login/login.service';
import { ErrorService } from 'src/app/services/error/error.service';
import { AlertService } from 'src/app/services/alert/alert.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {


  sliderConfig = {
    spaceBetween: 10,
    slidesPerView: 1.4
  };

  pathImages = 'assets/cursos/';
  showStudent: boolean;
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

  student: any;

  constructor(
    private navCtrl: NavController,
    private platform: Platform,
    private loginService: LoginService,
    private errorService: ErrorService,
    private alertService: AlertService,
  ) { }

  ngOnInit(): void {
    this.showStudent = false;
    this.platform.ready().then(dataP => {
      console.log(dataP);
      const username = localStorage.getItem('token');

      this.loginService.getStudent(username)
        .then(data => {
          console.log(data);
          this.showStudent = true;
          this.student = JSON.parse(data.data);
        })
        .catch(error => {
          this.errorService.consoleLog(error);
          this.errorService.alertError(error);
        });
    });
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
