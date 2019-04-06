import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import {map} from "rxjs/operators";

@Injectable({providedIn: 'root'})
export class UserService{
    constructor(private http: HttpClient){}

    // create
    create(email: string, password:string){
        return this.http.post<any>(`${config.apiUrl}/api/user/new`, {email: email, password: password})
            .pipe(
                map(user => {
                    if(user && user.token){
                        localStorage.setItem('currentUser', JSON.stringify(user));
                    }
                    return user;
                })
            );
    }
    // getCurrent
    getCurrentUser(){
        return JSON.parse(localStorage.getItem('currentUser'))
    }

}