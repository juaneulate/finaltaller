import { Component, OnInit } from '@angular/core';
import { AndroidFingerprintAuth } from '@ionic-native/android-fingerprint-auth/ngx';
import { LoginService } from 'src/app/services/login/login.service';
import { NavController } from '@ionic/angular';
import { ErrorService } from 'src/app/services/error/error.service';
import { AlertService } from 'src/app/services/alert/alert.service';

@Component({
  selector: 'app-flogin',
  templateUrl: './flogin.page.html',
  styleUrls: ['./flogin.page.scss'],
})
export class FloginPage implements OnInit {

  constructor(
    private androidFingerprintAuth: AndroidFingerprintAuth,
    private navCtrl: NavController,
    private loginService: LoginService,
    private errorService: ErrorService,
    private alertService: AlertService,
  ) { }

  ngOnInit() {
    this.androidFingerprintAuth.isAvailable()
      .then((result) => {
        if (result.isAvailable) {
          // it is available
          const token = localStorage.getItem('finger.token');
          this.androidFingerprintAuth.decrypt({ clientId: 'uagrm.ficct.piaam', token })
            .then(resultDecrypt => {
              const password = resultDecrypt.password;
              const username = localStorage.getItem('token');
              this.serviceLogin(username, password);
            });
        }
      })
      .catch(error => console.error(error));
  }

  serviceLogin(username, password) {
    const url = '/base';
    this.loginService.login(username, password)
      .then(data => {
        const isLogin = JSON.parse(data.data);
        if (isLogin) {
          localStorage.setItem('isLoggedIn', 'true');
          localStorage.setItem('token', username);
          return this.navCtrl.navigateRoot(url);
        } else {
          this.alertService.presentConfirm('Error usuario o contraseña invalida.');
        }
      })
      .catch(error => {
        this.errorService.consoleLog(error);
        this.errorService.alertError(error);
      });
  }

}
