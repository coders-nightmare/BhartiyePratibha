import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private baseUrl='http://localhost:8082/user'


  constructor(private http:HttpClient) { }

  registerUser(data:any){
    console.log(data);
    
    const postUrl=this.baseUrl+'/register';
    return this.http.post(postUrl,data);
  }

  logInUser(data:any){
    const postUrl=this.baseUrl+"/login";
    return this.http.post(postUrl,data);
  }

  loggedIn(){
    return !!localStorage.getItem('token');
  }

  getToken(){
    return localStorage.getItem('token');
  }

  getUserName(){
    return localStorage.getItem('name');
  }

  getAllServices(){
        const getUrl=this.baseUrl+"/company/services";
    return this.http.get(getUrl); 
  }

  addContact(data:any){
        console.log(data);
    
    const postUrl=this.baseUrl+'/contact';
    return this.http.post(postUrl,data);

  }

  getContact(data:any){
    const postUrl=this.baseUrl+'/company/contacts';
    return this.http.post(postUrl,data);
  }
}
