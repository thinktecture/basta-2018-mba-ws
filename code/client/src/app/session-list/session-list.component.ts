import { Component, Input, OnInit } from '@angular/core';
import { SessionOverview } from '../models/session-overview';
import { SessionsService } from '../services/sessions.service';

@Component({
  selector: 'basta-session-list',
  templateUrl: './session-list.component.html',
  styleUrls: ['./session-list.component.css'],
})
export class SessionListComponent implements OnInit {
  constructor(private readonly _sessionService: SessionsService) {}

  public sessions: Array<SessionOverview> = [];

  public ngOnInit() {
    this._sessionService.getSessions().subscribe(sessions => (this.sessions = sessions));
  }
}
