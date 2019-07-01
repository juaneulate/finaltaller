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
      office: new FormControl('false', { validators: Validators.required }),
      RRSS: new FormControl('false', { validators: Validators.required }),
      marketing: new FormControl('false', { validators: Validators.required }),
      Google: new FormControl('false', { validators: Validators.required }),
    });

    this.questions = this.questionsService.getQuestion();
  }

  get f() {
    return this.formQuestions.controls;
  }

  save() {
    localStorage.setItem('isFirstTime', 'not');

    const office = this.f.office.value;
    const RRSS = this.f.RRSS.value;
    const marketing = this.f.marketing.value;
    const Google = this.f.Google.value;
    const logge = [office, RRSS, marketing, Google];

    console.log(logge);

    this.navCtrl.navigateRoot('/base');
  }
}
