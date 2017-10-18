import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ClientService {
    constructor(private http: Http) { }

    getData(token: any, how: any, company:any){
        let header = new Headers();

        header.append('AUTHTOKEN', token);

        let data = {
             'company': company
        }

        return this.http.post('http://83.136.250.124/client/search/', data, {
            headers: header
        });
    }

    getDataFromNextPage(token: any, url: any){
        let header = new Headers();

        header.append('Authorization', token);

        return this.http.get('http://ordamed-crm.appspot.com/'+url,{
            headers: header
        });
    }

    getDataFromFullName(token:any,name:any,company:any){
        let header = new Headers();

        header.append('AUTHTOKEN',token);

        let data = {
            'full_name': name,
            'company': company
        }

        return this.http.post('http://83.136.250.124/client/search/', data,{
            headers: header
        })
    }

    getDataFromDealID(token:any,id:any){
        let header = new Headers();

        header.append('AUTHTOKEN',token);

        let data = {
            'deal_id': id
        }

        return this.http.post('http://83.136.250.124/client/search/', data,{
            headers: header
        })
    }

    getDataFromId(id:any, token: any){
        let header = new Headers();

        header.append('authorization',token);

        return this.http.get('http://ordamed-crm.appspot.com/_ah/api/web/v1/client/?client_id='+id,{
            headers: header
        })
    }

    updateClient(token: any, data: any){
        let header = new Headers();

        header.append('AUTHTOKEN',token);
        header.append('Content-Type', 'application/json' );

        return this.http.post('http://83.136.250.124/client/update/', data,
            {
                headers: header
            }
        );
    }

    addClient(token: any, data:any ){
        let header = new Headers();

        header.append('AUTHTOKEN',token);
        header.append('Content-Type', 'application/json' );

        return this.http.post('http://83.136.250.124/client/create/', data,
            {
                headers: header
            }
        );
    }

    deleteClient(token:any,data:any){
        let header = new Headers();

        let del = {
            'del_id': parseInt(data)
        }

        console.log(del);

        header.append('AUTHTOKEN',token);
        header.append('Content-Type', 'application/json' );

        return this.http.post('http://83.136.250.124/client/delete/', data,
            {
                headers: header
            }
        );
    }
}