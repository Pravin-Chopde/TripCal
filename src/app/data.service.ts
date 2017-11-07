import { Injectable } from '@angular/core';

import { Http, Headers, RequestOptions } from '@angular/http'
import 'rxjs/add/operator/map'

@Injectable()
export class DataService {

  constructor(private _http: Http) { }

  result: any;

  getCrud() {
    return this._http.get("/api/crud")
      .map(result => this.result = result.json().data);
  }

}
