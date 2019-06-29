import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { StudentService } from 'src/app/services/student/student.service';
import { StudentModel } from 'src/app/models/student.model';
import { ErrorService } from 'src/app/services/error/error.service';
import { AlertService } from 'src/app/services/alert/alert.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  formRegister: any = {};
  student: StudentModel;

  constructor(
    private formBuilder: FormBuilder,
    private navCtrl: NavController,
    private studentService: StudentService,
    private errorService: ErrorService,
    private alertService: AlertService,
  ) { }

  ngOnInit() {
    this.formRegister = this.formBuilder.group({
      fullName: new FormControl('', { validators: Validators.required }),
      age: new FormControl('', { validators: Validators.required }),
      login: new FormControl('', { validators: Validators.required }),
      password: new FormControl('', { validators: Validators.required }),
    });
  }

  get f() {
    return this.formRegister.controls;
  }


  register() {
    // stop here if form is invalid
    if (this.formRegister.invalid) {
      return;
    }

    const fullname = this.f.fullName.value;
    const age = this.f.age.value;
    const login = this.f.login.value;
    const password = this.f.password.value;

    this.studentService.save(fullname, age, login, password)
      .then(data => {
        console.log(data.data);
        this.navCtrl.navigateRoot('/login');
      })
      .catch(error => {
        this.errorService.consoleLog(error);
        this.errorService.alertError(error);
      });
  }

}
