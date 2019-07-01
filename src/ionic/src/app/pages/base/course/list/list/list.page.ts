import { Component, OnInit } from '@angular/core';
import { CursosService } from 'src/app/services/cursos/cursos.service';
import { ActivatedRoute } from '@angular/router';
import { NavController, Platform } from '@ionic/angular/';
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
    private platform: Platform,
  ) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      this.id = JSON.parse(params.id);
      this.platform.ready().then(dataP => {
        this.cursosService.listCursos(this.id)
          .then(data => {
            this.cursos = JSON.parse(data.data);
            console.log(this.cursos);
          });
      });
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
