import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the CloudSyncProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CloudSyncProvider {

  private readonly baseUrl: string = "http://localhost:5000/api/";

  constructor(public http: HttpClient) {
    console.log('Hello CloudSyncProvider Provider');
  }

  public loadScoreElection(): Observable<any> {
    return this.http.get(this.baseUrl + 'GetScoreElection/');
  }

  public loadScoreArea(): Observable<any> {
    return this.http.get(this.baseUrl + 'GetScoreArea/');
  }

  public loadScoreParty(): Observable<any> {
    return this.http.get(this.baseUrl + 'GetScoreParty/');
  }
  
  public loadScorePartyRatio(): Observable<any> {
    return this.http.get(this.baseUrl + 'GetScorePartyRatio/');
  }

}
