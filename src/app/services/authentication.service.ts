import { Injectable } from '@angular/core';
import { Http, Headers, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AuthenticationService {
    constructor(private http: Http) { }

    public login(username: string, password: string) {

        const data = {
            email: username,
            password: password };

        return this.http.post('http://back.salesmaster.me/authorization_token/', data);
    }

    public logout() {
        localStorage.removeItem('auth_token');
    }
}