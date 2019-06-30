import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormBuilder } from '@angular/forms';
import { NavController, Platform } from '@ionic/angular';
import { LoginService } from 'src/app/services/login/login.service';
import { ErrorService } from 'src/app/services/error/error.service';
import { AlertService } from 'src/app/services/alert/alert.service';
import { AndroidFingerprintAuth } from '@ionic-native/android-fingerprint-auth/ngx';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formLogin: any = {};
  urlFLogin: string;
  showFinger: boolean;
  existFinger: boolean;
  constructor(
    private formBuilder: FormBuilder,
    private navCtrl: NavController,
    private loginService: LoginService,
    private errorService: ErrorService,
    private alertService: AlertService,
    private androidFingerprintAuth: AndroidFingerprintAuth,
    private platform: Platform,
  ) { }

  ngOnInit() {
    this.formLogin = this.formBuilder.group({
      username: new FormControl('', { validators: Validators.required }),
      password: new FormControl('', { validators: Validators.required }),
      finger: new FormControl('false', { validators: Validators.required }),
    });
    this.existFinger = false;
    this.urlFLogin = '/flogin';
    this.showFinger = localStorage.getItem('finger.finger') === 'true';
    this.logout();
    this.platform.ready().then(dataP => {
      this.androidFingerprintAuth.isAvailable()
        .then(result => {
          this.existFinger = true;
        })
        .catch(error => {
          this.existFinger = false;
        });
    });
  }

  get f() {
    return this.formLogin.controls;
  }

  login() {
    // stop here if form is invalid
    if (this.formLogin.invalid) {
      return;
    }

    const username = this.f.username.value;
    const password = this.f.password.value;
    const finger = this.f.finger.value === 'true';

    console.log(finger);

    if (finger) {
      localStorage.setItem('finger.finger', finger.toString());
      this.androidFingerprintAuth.isAvailable()
        .then((result) => {
          if (result.isAvailable) {
            // it is available
            this.androidFingerprintAuth.encrypt({ clientId: 'uagrm.ficct.piaam', username, password })
              .then(resultEncrypt => {
                if (resultEncrypt.withFingerprint) {
                  localStorage.setItem('finger.token', resultEncrypt.token);
                }
                this.serviceLogin(username, password);
              })
              .catch(error => {
                if (error === this.androidFingerprintAuth.ERRORS.FINGERPRINT_CANCELLED) {
                  console.log('Fingerprint authentication cancelled');
                } else { console.error(error); }
              });
          }
        })
        .catch(error => console.error(error));
    } else {
      this.serviceLogin(username, password);
    }
  }

  serviceLogin(username, password) {
    const url = '/base';
    this.loginService.loginFake(username, password)
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

  logout() {
    const token = localStorage.getItem('finger.token');
    const username = localStorage.getItem('token');
    const finger = localStorage.getItem('finger.finger');

    localStorage.clear();

    localStorage.setItem('finger.token', token);
    localStorage.setItem('token', username);
    localStorage.setItem('finger.finger', finger);
  }

  go(url: string) {
    this.navCtrl.navigateRoot(url);
  }
}
