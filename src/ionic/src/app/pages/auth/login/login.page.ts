import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormBuilder } from '@angular/forms';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  formLogin: any = {};

  constructor(
    private formBuilder: FormBuilder,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
    this.formLogin = this.formBuilder.group({
      username: new FormControl('', { validators: Validators.required }),
      password: new FormControl('', { validators: Validators.required }),
    });

    this.logout();
  }

  login() {
    const url = '/base';
    localStorage.setItem('isLoggedIn', 'true');
    return this.navCtrl.navigateRoot(url);
  }

  logout() {
    localStorage.clear();
  }
}
