import { Injectable } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';
import { BaseService } from '../base/base.service';
import { stringify } from '@angular/core/src/render3/util';

@Injectable({
  providedIn: 'root'
})
export class CursosService extends BaseService {
  videos = [
    { code: 1, url: 'https://www.youtube.com/embed/PivCddhY_Io', id: 'PivCddhY_Io' },
    { code: 2, url: 'https://www.youtube.com/embed/I7cyVg90J0I', id: 'I7cyVg90J0I' },
    { code: 3, url: 'https://www.youtube.com/embed/QrX-rZ-M3bQ', id: 'QrX-rZ-M3bQ' },
    { code: 4, url: 'https://www.youtube.com/embed/-JRR_rAmgmo', id: '-JRR_rAmgmo' },
    { code: 5, url: 'https://www.youtube.com/embed/ZV3nwLDvf1U', id: 'ZV3nwLDvf1U' },
    { code: 6, url: 'https://www.youtube.com/embed/aBHLZWY7bDs', id: 'aBHLZWY7bDs' },
    { code: 7, url: 'https://www.youtube.com/embed/fPirRGYxYDQ', id: 'fPirRGYxYDQ' },
    { code: 8, url: 'https://www.youtube.com/embed/LdF2RcelRg0', id: 'LdF2RcelRg0' },
    { code: 9, url: 'https://www.youtube.com/embed/ZMKJApsjLpw', id: 'ZMKJApsjLpw' },
  ];

  cursos = [
    { code: 1, title: 'Curso 1', description: 'Description 1' },
    { code: 2, title: 'Curso 2', description: 'Description 2' },
    { code: 3, title: 'Curso 3', description: 'Description 3' },
    { code: 4, title: 'Curso 4', description: 'Description 4' },
    { code: 5, title: 'Curso 5', description: 'Description 5' },
    { code: 6, title: 'Curso 6', description: 'Description 6' },
    { code: 7, title: 'Curso 7', description: 'Description 7' },
    { code: 8, title: 'Curso 8', description: 'Description 8' },
    { code: 9, title: 'Curso 9', description: 'Description 9' },
  ];

  constructor(
    private http: HTTP,
  ) {
    super();
    this.controllerUrl = 'course/';
  }

  getVideo(id) {
    let result: any;
    this.videos.forEach(video => {
      if (video.code === id) {
        result = video;
      }
    });
    return result;
  }

  list() {
    return this.cursos;
  }

  listCursos(idTopic: number) {
    // Initialize Params Object
    const params = {
      topic_id: idTopic.toString()
    };

    return this.http.get(this.getFullUrl() + 'get-course-topic', params, {});
  }

  listFree() {
    return this.http.get(this.getFullUrl() + 'get-course-free', {}, {});
  }

  listPremium() {
    return this.http.get(this.getFullUrl() + 'get-course-premium', {}, {});
  }

  getRecomendados(office, RRSS, marketing, Google) {
    // Initialize Params Object
    let param = '?';
    if (office) { param += 'topic_list=' + 'office' + '&'; }
    if (RRSS) { param += 'topic_list=' + 'RRSS' + '&'; }
    if (marketing) { param += 'topic_list=' + 'marketing' + '&'; }
    if (Google) { param += 'topic_list=' + 'Google' + '&'; }

    return this.http.get(this.getFullUrl() + 'get-course-by-topics' + param, {}, {});
  }

  get(idCourse: number) {
    // Initialize Params Object
    const params = {
      course_id: idCourse.toString()
    };

    return this.http.get(this.getFullUrl() + 'get-course', params, {});
  }
}
