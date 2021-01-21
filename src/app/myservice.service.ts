import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const baseUrl = 'http://localhost:4041';


@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  constructor(private _http:HttpClient) { }

  submitRegister(body:any){
    return this._http.post('http://localhost:4041/register', body,{
      observe:'body'
    });
  }

  submitLogin(body:any){
    return this._http.post('http://localhost:4041/logadmin', body,{
      observe:'body'
    });
  }
  submitBloodType(){
    return this._http.get('http://localhost:4041/getblood', {
      observe: 'body'
    });
  }
}
