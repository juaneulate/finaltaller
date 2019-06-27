import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {

  tabs = [
    { icon: 'list-box', name: 'info', title: 'info' },
    { icon: 'notifications', name: 'notifications', title: 'notifications' },
    { icon: 'mail', name: 'mail', title: 'mail' },
  ];

  constructor() { }

  ngOnInit() {
  }

}
