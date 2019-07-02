import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormBuilder } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { QuestionsService } from 'src/app/services/questions/questions.service';
import { isBoolean } from 'util';

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

    const office = isBoolean(this.f.office.value) ? this.f.office.value : this.f.office.value === 'true';
    const RRSS = isBoolean(this.f.RRSS.value) ? this.f.RRSS.value : this.f.RRSS.value === 'true';
    const marketing = isBoolean(this.f.marketing.value) ? this.f.marketing.value : this.f.marketing.value === 'true';
    const Google = isBoolean(this.f.Google.value) ? this.f.Google.value : this.f.Google.value === 'true';

    const logge = [office, RRSS, marketing, Google];

    localStorage.setItem('videos.related', JSON.stringify(logge));

    this.navCtrl.navigateRoot('/base');
  }
}
