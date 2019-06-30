import { Injectable } from '@angular/core';
import { BaseService } from '../base/base.service';
import { HTTP, HTTPResponse } from '@ionic-native/http/ngx';
import { parseHttpResponse } from 'selenium-webdriver/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService extends BaseService {

  constructor(
    private http: HTTP
  ) {
    super();
    this.controllerUrl = 'login/';
  }

  login(username, password) {
    // Initialize Params Object
    const params = {
      username,
      password
    };

    return this.http.get(this.getFullUrl() + 'validate', params, {});
  }

  loginFake(username, password) {
    return new Promise<HTTPResponse>((resolve, reject) => {
      const result = {
        data: 'true',
      } as HTTPResponse;
      resolve(result);
    });
  }

  getStudent(username) {
    // Initialize Params Object
    const params = {
      username
    };

    return this.http.get(this.getFullUrl() + 'get-student', params, {});
  }
}
