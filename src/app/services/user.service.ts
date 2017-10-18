import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/toPromise';

@Injectable()
export class UserService {

    public userData: any = null;

    constructor(
        private http: Http,
        private _router: Router
    ) { }

    getData(token: any){

        let header = new Headers();

        header.append('AUTHTOKEN', token);

        const data = {
            username: localStorage.getItem('username')
        };

        return this.http.post('http://83.136.250.124/user/my/', data, {
            headers: header
        });
    }

    getUsersFromAdmin(token: string, name: string){
        let header = new Headers();

        let auth_token = token

        header.append('AUTHTOKEN',auth_token);

        let data = {
            username: name
        }

        return this.http.post('http://83.136.250.124/user/search/',data,{
            headers: header
        })
    }

    createUser(token: string, data: object){
        let header = new Headers();

        let auth_token = token

        header.append('AUTHTOKEN',auth_token);

        return this.http.post('http://83.136.250.124/user/create/',data,{
            headers: header
        })
    }

    deleteUser(token: string,name: string, user_id: number){
        let header = new Headers();

        let auth_token = token

        header.append('AUTHTOKEN',auth_token);

        let data = {
            username: name,
            user_id: user_id
        }

        return this.http.post('http://83.136.250.124/user/delete/',data,{
            headers: header
        })
    }


    getUserById(token: string, id:number){
        let header = new Headers();

        let auth_token = token

        header.append('AUTHTOKEN',auth_token);

        let data = {
            user_id: id
        }

        return this.http.post('http://83.136.250.124/user/search/id',data,{
            headers: header
        })
    }
}