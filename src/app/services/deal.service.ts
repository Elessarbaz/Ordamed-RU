import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class DealService {
    constructor(private http: Http) { }

    getData(token: any){
        let header = new Headers();

        header.append('Authorization',token);

        return this.http.get('http://ordamed-crm.appspot.com/_ah/api/web/v1/deals/?my=True',{
            headers: header
        });
    }

    updateDeal(token: string, data: any){
        let header = new Headers();

        header.append('AUTHTOKEN',token);
        header.append('Content-Type', 'application/json' );

        return this.http.post('http://83.136.250.124/deal/update/',
            data, {
                headers: header
            }
        );
    }

    addNewDeal(token: any, data: any){
        let header = new Headers();

        header.append('AUTHTOKEN',token);
        header.append('Content-Type', 'application/json' );

        return this.http.post('http://83.136.250.124/deal/create/',
                data,
            {
                headers: header
            }
        );
    }

    searchData(token:any,id:any){
        let header = new Headers();

        let data = {
            'deal_id': id
        };

        header.append('AUTHTOKEN',token);
        return this.http.post('http://83.136.250.124/deal/search/', data, {
            headers: header
        });
    }

    searchDataByUserID(token:any,id:any){
        let header = new Headers();

        let data = {
            'user_id': id
        };

        header.append('AUTHTOKEN',token);
        return this.http.post('http://83.136.250.124/deal/search/', data, {
            headers: header
        });
    }

    saveDeal(token: any, data:any){
        let header = new Headers();

        header.append('AUTHTOKEN',token);
        header.append('Content-Type', 'application/json' );

        return this.http.post('http://83.136.250.124/deal/create/', data, {
                headers: header
            }
        );
    }

    getUserDeal(token: string, user_id: number){
        let header = new Headers();

        let data = {
            'user_id': user_id
        };

        header.append('AUTHTOKEN',token);
        return this.http.post('http://83.136.250.124/deal/search/', data, {
            headers: header
        });
    }

    deleteData(token:any, data:any){
        let header = new Headers();

        header.append('AUTHTOKEN',token);
        header.append('Content-Type', 'application/json' );

        let del = {
            'deal_id': parseInt(data)
        }

        return this.http.post('http://83.136.250.124/deal/delete/',
                data,
            {
                headers: header
            }
        );
    }
}