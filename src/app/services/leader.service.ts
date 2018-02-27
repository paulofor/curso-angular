import { Injectable } from '@angular/core';

import { Leader } from '../shared/leader';
import { LEADERS } from '../shared/leaders';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/delay';
import 'rxjs/add/observable/of';

import { Http, Response } from '@angular/http';
import { baseUrl } from '../shared/baseurl';
import { ProcessHttpmsgService } from '../services/process-httpmsg.service';
import { HttpClient, HttpHeaders } from '@angular/common/http'

@Injectable()
export class LeaderService {

  constructor(private http: Http,
    private processHTTPMsgService: ProcessHttpmsgService) { }

  getLeaders(): Observable<Leader[]> {
    return this.http.get(baseUrl + 'leaders')
        .map(res => { return this.processHTTPMsgService.extractData(res); });
  }

  getLeader(pos: number) : Observable<Leader> {
    return  this.http.get(baseUrl + 'leaders/' +pos)
        .map(res => { return this.processHTTPMsgService.extraiDado(res); });
   
  }

  getFeaturedLeader() : Observable<Leader> {
    return this.http.get(baseUrl + 'leaders?featured=true')
        .map(res => { return this.processHTTPMsgService.extraiDado(res)[0]; });
  }

}
