import { Component, OnInit } from '@angular/core';
import { NavController, Platform } from '@ionic/angular';
import { NavigationOptions } from '@ionic/angular/dist/providers/nav-controller';
import { LoginService } from 'src/app/services/login/login.service';
import { ErrorService } from 'src/app/services/error/error.service';
import { AlertService } from 'src/app/services/alert/alert.service';
import { CursosService } from 'src/app/services/cursos/cursos.service';

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

  relatedVideos: any[];
  freeVideos: any[];
  premiumVideos: any[];

  student: any;

  constructor(
    private navCtrl: NavController,
    private platform: Platform,
    private loginService: LoginService,
    private errorService: ErrorService,
    private alertService: AlertService,
    private cursosService: CursosService,
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

      this.cursosService.listFree()
        .then(data => {
          this.freeVideos = JSON.parse(data.data);
          this.freeVideos.forEach(element => {
            element.img = this.getImage(element.id);
          });
        });

      this.cursosService.listPremium()
        .then(data => {
          this.premiumVideos = JSON.parse(data.data);
          this.premiumVideos.forEach(element => {
            element.img = this.getImage(element.id);
          });
        });

      const aux = localStorage.getItem('videos.related');
      let relatedUserSelection = JSON.parse(aux);

      this.cursosService.getRecomendados(
        relatedUserSelection[0],
        relatedUserSelection[1],
        relatedUserSelection[2],
        relatedUserSelection[3]
      )
        .then(data => {
          this.relatedVideos = JSON.parse(data.data);
          console.log(this.relatedVideos);
          this.relatedVideos.forEach(element => {
            element.img = this.getImage(element.id);
          });
        });
    });

  }

  private getImage(id) {
    var resultPath = this.pathImages + '';
    switch (id) {
      case 1:
        resultPath += 'course_one.gif';
        break;
      case 2:
        resultPath += 'course_two.gif';
        break;
      case 3:
        resultPath += 'course_three.gif';
        break;
      case 4:
        resultPath += 'course_four.gif';
        break;
      case 5:
        resultPath += 'course_five.gif';
        break;
      case 6:
        resultPath += 'course_six.gif';
        break;
      case 7:
        resultPath += 'course_seven.gif';
        break;
      case 8:
        resultPath += 'course_eight.gif';
        break;
      default:
        resultPath += 'course_five.gif';
        break;
    }
    console.log(id);
    return resultPath;
  };

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
