import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { RootComponent } from './root/root.component';
import { SessionListComponent } from './session-list/session-list.component';
import { SessionsService } from './services/sessions.service';
import { SessionDetailsComponent } from './session-details/session-details.component';
import { ReactiveFormsModule } from '@angular/forms';
import { PlatformService } from './services/platform.service';
import { ShareService } from './services/share.service';
import { MobileShareService } from './services/mobile/mobile.share.service';
import { NullShareService } from './services/null/null.share.service';

const APP_ROUTES = [{ path: '', component: SessionListComponent }, { path: 'sessions/:id', component: SessionDetailsComponent }];

export function shareServiceFactory(platformService: PlatformService): ShareService {
  if (platformService.isMobileAppApp()) {
    return new MobileShareService();
  }
  return new NullShareService();
}
@NgModule({
  declarations: [RootComponent, SessionListComponent, SessionDetailsComponent],
  imports: [BrowserModule, HttpClientModule, RouterModule.forRoot(APP_ROUTES, { useHash: true }), ReactiveFormsModule],
  providers: [
    PlatformService,
    SessionsService,
    {
      provide: ShareService,
      useFactory: shareServiceFactory,
      deps: [PlatformService],
    },
  ],
  bootstrap: [RootComponent],
})
export class AppModule {}
