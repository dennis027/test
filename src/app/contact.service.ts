import { Injectable } from '@angular/core';
import { HttpHeaders,HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';


const CONTACT = "https://dennis027.herokuapp.com/";

const httpOptions = {
  headers: new HttpHeaders ({'Content-Type':'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private api = "https://dennistry.herokuapp.com/contact/";
  constructor(private httpClient:HttpClient,private http:HttpClient, private router:Router) { }

  getData(): Observable<any[]> {
    return this.httpClient.get<any[]>(this.api);
  }

  post(name:string,email:string,subject:string,message:string): Observable<any>{
    return this.http.post(CONTACT + 'contact/',{
      
      name,email,subject,message
    },httpOptions)
  }
  deleteData (id: number): Observable<any[]> {
    return this.httpClient.delete<any[]>(this.api + id);
  }
  // getId(heroes: Hero[]): number {
  //   return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  // }
}