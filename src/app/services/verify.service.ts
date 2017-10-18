import { Injectable } from '@angular/core';
import { Http, Headers} from '@angular/http';

@Injectable()
export class VerifyService {
    constructor(private http: Http) { }

   verifyToken(token:any) {
        let header = new Headers();

        header.append('Content-Type', 'application/json');

        return this.http.post('http://83.136.250.124/verify/', { token: token } ,{
            headers: header
        });
    }
}
