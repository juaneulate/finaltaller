import { Component, OnInit } from '@angular/core';
import { CursosService } from 'src/app/services/cursos/cursos.service';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular/';
import { NavigationOptions } from '@ionic/angular/dist/providers/nav-controller';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
})
export class ListPage implements OnInit {

  id: number;
  cursos: any;

  constructor(
    private cursosService: CursosService,
    private activatedRoute: ActivatedRoute,
    private navCtrl: NavController,
  ) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      console.log(params);
      this.id = JSON.parse(params.id);
      this.cursos = this.cursosService.list();
    });
  }

  go(id) {
    const navOptions: NavigationOptions = {
      queryParams: {
        id: JSON.stringify(id),
        section: 'Temario',
      }
    };

    this.navCtrl.navigateForward('/course', navOptions);
  }
}
