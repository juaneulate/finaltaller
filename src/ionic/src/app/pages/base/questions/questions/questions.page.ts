import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormBuilder } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { QuestionsService } from 'src/app/services/questions/questions.service';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.page.html',
  styleUrls: ['./questions.page.scss'],
})
export class QuestionsPage implements OnInit {

  formQuestions: any = {};
  questions = [];

  constructor(
    private formBuilder: FormBuilder,
    private navCtrl: NavController,
    private questionsService: QuestionsService
  ) { }

  ngOnInit() {
    this.formQuestions = this.formBuilder.group({
      qone: new FormControl('', { validators: Validators.required }),
      qtwo: new FormControl('', { validators: Validators.required }),
      qthree: new FormControl('', { validators: Validators.required }),
      qfour: new FormControl('', { validators: Validators.required }),
    });

    this.questions = this.questionsService.getQuestion();
  }

  save() {
    localStorage.setItem('isFirstTime', 'not');
    this.navCtrl.navigateRoot('/base');
  }
}
