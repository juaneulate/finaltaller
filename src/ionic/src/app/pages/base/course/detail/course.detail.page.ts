import { Component, OnInit } from '@angular/core';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player/ngx';
import { CursosService } from 'src/app/services/cursos/cursos.service';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course.detail.page.html',
  styleUrls: ['./course.detail.page.scss'],
})
export class CourseDetailPage implements OnInit {


  pathImages = 'assets/cursos/';
  video: any;

  section = '';

  details = [];
  showVideo = false;
  icon = '';
  id: number;

  constructor(
    private activatedRoute: ActivatedRoute,
    private youtube: YoutubeVideoPlayer,
    private dom: DomSanitizer,
    private curssoService: CursosService,
    private navCtrl: NavController,
  ) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      console.log(params);

      this.id = JSON.parse(params.id);
      this.section = params.section;
      this.details = [
        { id: 1, title: this.section + ' 1', duration: '6m54s' },
        { id: 2, title: this.section + ' 2', duration: '4m1s' },
        { id: 3, title: this.section + ' 3', duration: '6m34s' },
        { id: 4, title: this.section + ' 4', duration: '7m2s' },
        { id: 5, title: this.section + ' 5', duration: '8m35s' },
        { id: 6, title: this.section + ' 6', duration: '13m9s' },
        { id: 7, title: this.section + ' 7', duration: '52m21ss' },
        { id: 8, title: this.section + ' 8', duration: '26m9s' },
      ];
      this.video = this.curssoService.getVideo(this.id);
      this.showVideo = true;
    });
  }

  fullScreen() {
    this.youtube.openVideo(this.video.id);
  }

  acercade() {
    this.navCtrl.navigateForward('/acercade');
  }

  secureUrl(url: string) {
    const result = this.dom.bypassSecurityTrustResourceUrl(url);
    console.log(result);
    return result;
  }

  getVideo(id) {
    this.video = this.curssoService.getVideo(id);
    console.log(this.video);
  }

}
