import { SessionOverview } from '../models/session-overview';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Session } from '../models/session';
import { Injectable } from '@angular/core';

@Injectable()
export class SessionsService {
  constructor(private readonly _http: HttpClient) {}

  public getSessions(): Observable<Array<SessionOverview>> {
    return this._http.get<Array<SessionOverview>>(environment.apiRootUrl);
  }

  public getSessionById(id: string): Observable<Session> {
    const sessionUrl = `${environment.apiRootUrl}/${id}`;
    return this._http.get<Session>(sessionUrl);
  }
}
