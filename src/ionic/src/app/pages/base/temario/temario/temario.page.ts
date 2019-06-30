import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { NavigationOptions } from '@ionic/angular/dist/providers/nav-controller';

@Component({
  selector: 'app-temario',
  templateUrl: './temario.page.html',
  styleUrls: ['./temario.page.scss'],
})
export class TemarioPage implements OnInit {

  pathImages = 'assets/temario/';

  temarios = [
    { title: 'Diseño', icon: this.pathImages + 'diseno.png', id: 1 },
    { title: 'Oficina', icon: this.pathImages + 'oficina.jpg', id: 2 },
    { title: 'Oratoria', icon: this.pathImages + 'oratoria.jpg', id: 3 },
    { title: 'Informatica', icon: this.pathImages + 'informatica.png', id: 4 }
  ];

  constructor(
    private navCtrl: NavController
  ) { }

  ngOnInit() {
  }

  acercade() {
    this.navCtrl.navigateForward('/acercade');
  }

  onClick(id: number) {
    const navOptions: NavigationOptions = {
      queryParams: {
        id: JSON.stringify(id),
        section: 'Temario',
      }
    };

    this.navCtrl.navigateForward('/courseList', navOptions);
  }
}
