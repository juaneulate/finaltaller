import { Injectable } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';
import { BaseService } from '../base/base.service';

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

  getRecomendados(office, RRSS, navegador, email) {
    // Initialize Params Object
    const params = {
      office,
      RRSS,
      navegador,
      email
    };

    return this.http.get(this.getFullUrl() + 'get-student', params, {});
  }
}
