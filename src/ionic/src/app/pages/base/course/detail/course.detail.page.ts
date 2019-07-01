import { Component, OnInit } from '@angular/core';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player/ngx';
import { CursosService } from 'src/app/services/cursos/cursos.service';
import { NavController, Platform } from '@ionic/angular';
import { VideoService } from 'src/app/services/video/video.service';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course.detail.page.html',
  styleUrls: ['./course.detail.page.scss'],
})
export class CourseDetailPage implements OnInit {
  pathImages = 'assets/cursos/';
  video: any;
  curso: any;
  showVideo = false;
  showVideos = false;
  id: number;
  videos: any[];

  constructor(
    private activatedRoute: ActivatedRoute,
    private youtube: YoutubeVideoPlayer,
    private dom: DomSanitizer,
    private curssoService: CursosService,
    private navCtrl: NavController,
    private platform: Platform,
    private videoService: VideoService,
  ) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      console.log(params);

      this.id = JSON.parse(params.id);

      this.platform.ready()
        .then(dataP => {
          this.videoService.list(this.id).then(data => {
            this.videos = JSON.parse(data.data);
            let first = true;
            this.videos.forEach(element => {
              const splited = element.dir.split(',');
              element.url = splited[0];
              element.code = splited[1];

              if (first) {
                this.video = {
                  url: element.url,
                  code: element.code
                };
                this.showVideo = true;
                first = false;
              }
            });
            this.showVideos = true;
            console.log(this.videos);
          });
        });
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

  getVideo(id: number) {
    this.videos.forEach(element => {
      if (element.id === id) {
        this.video = {
          url: element.url,
          code: element.code
        };
      }
    })
  }
}
