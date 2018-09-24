import { Injectable } from '@angular/core';

@Injectable()
export class PlatformService {
  public isMobileAppApp(): boolean {
    return !!window['cordova'];
  }
}
