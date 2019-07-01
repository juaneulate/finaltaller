import { Injectable } from '@angular/core';
import { BaseService } from '../base/base.service';
import { HTTP } from '@ionic-native/http/ngx';

@Injectable({
  providedIn: 'root'
})
export class VideoService extends BaseService {

  constructor(
    private http: HTTP
  ) {
    super();
    this.controllerUrl = 'video/';
  }

  list(idCurso: number) {
    // Initialize Params Object
    const params = {
      course_id: idCurso.toString()
    };

    return this.http.get(this.getFullUrl() + 'list', params, {});
  }
}
