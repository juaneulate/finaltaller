import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { BasePage } from './base.page';

const routes: Routes = [
  {
    path: 'main',
    children: [
      { path: 'home', loadChildren: '../home/home.module#HomePageModule' },
      { path: 'test', loadChildren: '../questions/questions/questions.module#QuestionsPageModule' },
      { path: 'list', loadChildren: '../list/list.module#ListPageModule' },
    ]
  },
  {
    path: '',
    redirectTo: 'main/home',
    pathMatch: 'full',
    component: BasePage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [BasePage]
})
export class BasePageModule { }
