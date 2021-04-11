import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  private locale;

  constructor() { }

  setLocale(locale : string) {
    this.locale = locale;
  }
  getLocale() : string{
    return this.locale || 'en-US';
  }
}
