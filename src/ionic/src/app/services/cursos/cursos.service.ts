import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursosService {
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
  ]
  constructor() { }

  getVideo(id) {
    let result: any;
    this.videos.forEach(video => {
      if (video.code === id) {
        result = video;
      }
    });
    return result;
  }
}
