import { Injectable } from '@angular/core';
import { AlertService } from '../alert/alert.service';
import { ParsedErrorModel } from 'src/app/models/parsed.error.model';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  constructor(
    private alertService: AlertService
  ) {
  }

  parse(error: any): ParsedErrorModel {

    // get best available error message
    const parsedError: ParsedErrorModel = {
      message: error.message ? error.message as string : error.error
    };

    // include HTTP status code
    if (error.status != null) {
      parsedError.status = error.status;
    }

    // include stack trace
    if (error.stack != null) {
      parsedError.stack = error.stack;
    }

    return parsedError;
  }

  consoleLog(error: any) {
    const parseError = this.parse(error);
    console.log(parseError.message, parseError.stack);
  }

  alertError(error: any) {
    const parseError = this.parse(error);
    this.alertService.presentConfirm(parseError.message, parseError.stack);
  }
}
