import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { RootComponent } from './root/root.component';
import { SessionListComponent } from './session-list/session-list.component';
import { SessionsService } from './services/sessions.service';
import { SessionDetailsComponent } from './session-details/session-details.component';
import { ReactiveFormsModule } from '@angular/forms';

const APP_ROUTES = [{ path: '', component: SessionListComponent }, { path: 'sessions/:id', component: SessionDetailsComponent }];
@NgModule({
  declarations: [RootComponent, SessionListComponent, SessionDetailsComponent],
  imports: [BrowserModule, HttpClientModule, RouterModule.forRoot(APP_ROUTES, { useHash: true }), ReactiveFormsModule],
  providers: [{ provide: SessionsService, useClass: SessionsService }],
  bootstrap: [RootComponent],
})
export class AppModule {}
