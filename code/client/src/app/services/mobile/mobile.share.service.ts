import { ShareService } from '../share.service';
import { Injectable } from '@angular/core';
import { IWindowWithPlugins } from '../../models/window-with-plugins';

declare var window: IWindowWithPlugins;
@Injectable()
export class MobileShareService extends ShareService {
  public shareMessage(message: string): void {
    const options = {
      message: message, // not supported on some apps (Facebook, Instagram)
      subject: 'BASTA! 2018', // fi. for email
      chooserTitle: 'Pick an app', // Android only, you can override the default share sheet title,
    };

    window.plugins.socialsharing.shareWithOptions(options, () => {}, () => {});
  }
}
