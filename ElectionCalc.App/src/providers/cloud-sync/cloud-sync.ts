import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { ScoreElection, ScoreArea, ScoreParty, ShowScore, ShowScoreArea, CompareScoreArea } from '../../app/models';

/*
  Generated class for the CloudSyncProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CloudSyncProvider {

  private readonly baseUrl: string = "http://localhost:5000/api/ElectionCalc/";

  constructor(public http: HttpClient) {
    console.log('Hello CloudSyncProvider Provider');
  }

  public loadScoreElection(): Observable<any> {
    return this.http.get<ScoreElection[]>(this.baseUrl + 'GetScoreElection/');
  }

  public loadScoreArea(): Observable<any> {
    return this.http.get<ScoreArea[]>(this.baseUrl + 'GetScoreArea/');
  }

  public loadScoreParty(): Observable<any> {
    return this.http.get<ScoreParty[]>(this.baseUrl + 'GetScoreParty/');
  }

  public loadScorePartyRatio(): Observable<any> {
    return this.http.get<ScoreParty[]>(this.baseUrl + 'GetScorePartyRatio/');
  }

  public loadShowScoreParty(): Observable<any> {
    return this.http.get<ShowScore[]>(this.baseUrl + 'GetShowScoreParty/');
  }

  public loadShowScorePartyRatio(): Observable<any> {
    return this.http.get<ShowScore[]>(this.baseUrl + 'GetShowScorePartyRatio/');
  }

  public loadCompareScoreParty(batch1st: string, batch2nd: string): Observable<any> {
    return this.http.get<ShowScore[]>(this.baseUrl + 'GetCompareScoreParty/' + batch1st + '/' + batch2nd);
  }

  public loadCompareScorePartyRatio(batch1st: string, batch2nd: string): Observable<any> {
    return this.http.get<ShowScore[]>(this.baseUrl + 'GetCompareScorePartyRatio/' + batch1st + '/' + batch2nd);
  }

  public loadShowScoreArea(): Observable<any> {
    return this.http.get<ShowScoreArea[]>(this.baseUrl + 'GetShowScoreArea/');
  }

  public loadCompareScoreArea(batch1st: string, batch2nd: string): Observable<any> {
    return this.http.get<CompareScoreArea[]>(this.baseUrl + 'GetCompareScoreArea/' + batch1st + '/' + batch2nd);
  }

}
