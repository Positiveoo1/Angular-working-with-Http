import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostingService {

  private apiUrl = 'https://jsonplaceholder.typicode.com/posts';
  constructor(private http : HttpClient) { 

  }

  getPost():Observable<any> {
    return this.http.get(this.apiUrl);
  }
  
  createPost(postData:any):Observable<any> {
    return this.http.post<any>(this.apiUrl, postData)
  }

  updatePost(postId:number , postData:any):Observable<any>{
    const url= `${this.apiUrl}/${postId}`;
    return this.http.put<any>(url , postData);
  }


  
  delPost(postId : number):Observable<any> {

    const url= `${this.apiUrl}/${postId}`;

    return this.http.delete<any>(url);
  }
}

