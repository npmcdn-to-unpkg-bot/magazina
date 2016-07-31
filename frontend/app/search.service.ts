import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class SearchService {
  private heroesUrl = 'api2/search';  // URL to web api

  constructor( private http: Http ) {}

  getResults() {
    return this.http.get(this.heroesUrl)
               .toPromise()
               .then(response => response.json())
               .catch();
  }

  getProduct(id: number) {
    return this.http.get(`api2/product/${id}`)
               .toPromise()
               .then(response => response.json())
               .catch();
  }



}