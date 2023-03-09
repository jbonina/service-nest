import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ErrorLog } from  './error-log';

@Injectable(
  {providedIn: 'root'}
)
export class ApiService implements OnInit{
  API_SERVER = "http://localhost:3000";
  constructor(private httpClient: HttpClient) { }  
  
  ngOnInit() {
    console.log('ApiService ngOnInit');
  }
  

  public getErrorlogs(){
    return this.httpClient.get<ErrorLog[]>(`${this.API_SERVER}/error-log`);
  }
}

