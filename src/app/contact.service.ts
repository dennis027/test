import { Injectable } from '@angular/core';
import { HttpHeaders,HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { User } from './user';


const CONTACT = "https://dennistry.herokuapp.com/";

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
  
  updateData(id: string,data:any) {
    return this.http.put(this.api + id +'/', data).subscribe();
  }
//   updateData( id: string, data: any): Observable<any> {
//     return this.http.put(`${this.api}/${id}`, data)
// }
}
