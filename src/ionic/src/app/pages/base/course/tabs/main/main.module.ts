import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { MainPage } from './main.page';

const routes: Routes = [
  {
    path: 'tabs',
    children: [
      { path: 'info', loadChildren: '../tab-info/tab-info.module#TabInfoPageModule' }
    ]
  },
  {
    path: '',
    redirectTo: 'tabs/info',
    component: MainPage,
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MainPage]
})
export class TabMainPageModule { }
