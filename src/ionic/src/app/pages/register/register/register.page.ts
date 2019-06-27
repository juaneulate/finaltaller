import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  formRegister: any = {};
  constructor(
    private formBuilder: FormBuilder,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
    this.formRegister = this.formBuilder.group({
      fullName: new FormControl('', { validators: Validators.required }),
      age: new FormControl('', { validators: Validators.required }),
      username: new FormControl('', { validators: Validators.required }),
      password: new FormControl('', { validators: Validators.required }),
    });
  }

  register() {
    this.navCtrl.navigateRoot('/login');
  }

}
