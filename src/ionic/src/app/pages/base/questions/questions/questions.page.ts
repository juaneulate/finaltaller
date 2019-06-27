import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, FormBuilder } from '@angular/forms';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.page.html',
  styleUrls: ['./questions.page.scss'],
})
export class QuestionsPage implements OnInit {

  formQuestions: any = {};
  questions = [
    { question: 'Conoces las herramientas de Word, Excel y Powerpoint?', name: 'qone' },
    { question: 'Sabes que son las redes sociales y como se usan?', name: 'qtwo' },
    { question: 'Conoces lo que es un navegador web?', name: 'qthree' },
    { question: 'Conoces lo que es un correo electronico o e-mail?', name: 'qfour' },
  ];

  constructor(
    private formBuilder: FormBuilder,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
    this.formQuestions = this.formBuilder.group({
      qone: new FormControl('', { validators: Validators.required }),
      qtwo: new FormControl('', { validators: Validators.required }),
      qthree: new FormControl('', { validators: Validators.required }),
      qfour: new FormControl('', { validators: Validators.required }),
    });
  }

  save() {
    this.navCtrl.navigateRoot('/base');
  }
}
