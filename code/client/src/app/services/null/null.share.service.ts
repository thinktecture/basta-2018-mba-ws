import { ShareService } from '../share.service';
import { Injectable } from '@angular/core';

@Injectable()
export class NullShareService extends ShareService {
  public shareMessage(message: string): void {
    console.dir(message);
  }
}
