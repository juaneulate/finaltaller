import { Component, OnInit } from '@angular/core';
import { SafeResourceUrl, DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import { YoutubeVideoPlayer } from '@ionic-native/youtube-video-player/ngx';
import { CursosService } from 'src/app/services/cursos/cursos.service';

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
    private curssoService: CursosService
  ) { }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe(params => {
      console.log(params);

      this.id = JSON.parse(params.id);
      this.section = params.section;
      this.details = [
        { title: this.section + ' 1', duration: '6m54s' },
        { title: this.section + ' 2', duration: '4m1s' },
        { title: this.section + ' 3', duration: '6m34s' },
        { title: this.section + ' 4', duration: '7m2s' },
        { title: this.section + ' 5', duration: '8m35s' },
        { title: this.section + ' 6', duration: '13m9s' },
        { title: this.section + ' 7', duration: '52m21ss' },
        { title: this.section + ' 8', duration: '26m9s' },
      ];
      this.video = this.curssoService.getVideo(this.id);
      this.showVideo = true;
    });
  }

  fullScreen() {
    this.youtube.openVideo(this.video.id);
  }
  secureUrl(url: string) {
    const result = this.dom.bypassSecurityTrustResourceUrl(url);
    console.log(result);
    return result;
  }

  private getVideo(id: number) {
    let resultPath = this.pathImages + '';
    switch (id) {
      case 1:
      case 5:
        resultPath += 'course_one.gif';
        break;
      case 2:
      case 6:
        resultPath += 'course_two.gif';
        break;
      case 3:
      case 7:
        resultPath += 'course_three.gif';
        break;
      case 4:
      case 8:
        resultPath += 'course_four.gif';
        break;
      default:
        resultPath += 'course_five.gif';
        break;
    }
    console.log(id);
    return resultPath;
  }

}
