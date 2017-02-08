import { Injectable } from '@angular/core';
import apiUrl from '../constants/constants'
import {Http} from '@angular/http';

@Injectable()
export class EventService {

  constructor(private http: Http) {

    
   }


  get(data){
    this.http.post(apiUrl.API_URL, data).subscribe(response=>console.log(response))
  }

}
