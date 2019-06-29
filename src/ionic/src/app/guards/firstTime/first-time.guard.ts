import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirstTimeGuard implements CanActivate {

  constructor(
    private router: Router
  ) {

  }

  url: string;

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    this.url = state.url;
    return this.verifyFirstTime(this.url);
  }
  verifyFirstTime(url: string): boolean {
    if (this.isFirstTime()) {
      this.router.navigate(['/tutorial']);
      return false;
    } else if (!this.isFirstTime()) {
      return true;
    }
  }

  isFirstTime(): boolean {
    let result = true;
    if (localStorage.getItem('isFirstTime') === 'not') {
      result = false;
    }

    return result;
  }

}
