import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SessionsService } from '../services/sessions.service';
import { ActivatedRoute } from '@angular/router';
import { PlatformService } from '../services/platform.service';
import { ShareService } from '../services/share.service';

@Component({
  selector: 'basta-session-details',
  templateUrl: './session-details.component.html',
  styleUrls: ['./session-details.component.css'],
})
export class SessionDetailsComponent implements OnInit {
  public sessionDetails: FormGroup;

  constructor(
    private readonly _formBuilder: FormBuilder,
    private readonly _activateRoute: ActivatedRoute,
    private readonly _sessionsService: SessionsService,
    private readonly _platformService: PlatformService,
    private readonly _shareService: ShareService
  ) {
    this.sessionDetails = _formBuilder.group({
      title: ['Your session title', Validators.required],
      abstract: [''],
      id: [''],
      speaker: _formBuilder.group({
        id: [''],
        firstname: [''],
        lastname: [''],
      }),
    });
  }

  public get isMobileAppApp(): boolean {
    return this._platformService.isMobileAppApp();
  }

  public shareSession(): void {
    this._shareService.shareMessage(`w000t look at this talk please!! '${this.sessionDetails.value.title}'`);
  }
  public ngOnInit() {
    this._activateRoute.paramMap.subscribe(paramMap => {
      const id = paramMap.get('id');
      this._sessionsService.getSessionById(id).subscribe(session => {
        this.sessionDetails.setValue(session);
      });
    });
  }
}
