import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormBuilder } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { LoginService } from 'src/app/services/login/login.service';
import { ErrorService } from 'src/app/services/error/error.service';
import { AlertService } from 'src/app/services/alert/alert.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formLogin: any = {};

  constructor(
    private formBuilder: FormBuilder,
    private navCtrl: NavController,
    private loginService: LoginService,
    private errorService: ErrorService,
    private alertService: AlertService,
  ) { }

  ngOnInit() {
    this.formLogin = this.formBuilder.group({
      username: new FormControl('', { validators: Validators.required }),
      password: new FormControl('', { validators: Validators.required }),
    });

    this.logout();
  }
  get f() {
    return this.formLogin.controls;
  }

  login() {
    const url = '/base';
    // stop here if form is invalid
    if (this.formLogin.invalid) {
      return;
    }

    const username = this.f.username.value;
    const password = this.f.password.value;

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

  logout() {
    localStorage.clear();
  }
}
