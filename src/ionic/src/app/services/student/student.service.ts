import { Injectable } from '@angular/core';
import { BaseService } from '../base/base.service';
import { StudentModel } from 'src/app/models/student.model';
import { HTTP } from '@ionic-native/http/ngx';

@Injectable({
  providedIn: 'root'
})
export class StudentService extends BaseService {

  constructor(
    private http: HTTP
  ) {
    super();
    this.controllerUrl = 'student/';
  }

  save(fullname, age, login, password) {
    const headers = {
      'Content-Type': 'application/json'
    };

    const body = {
      fullname,
      age,
      login,
      password
    };

    this.http.setDataSerializer('json');
    return this.http.post(this.getFullUrl() + 'save', body, headers);
  }
}
