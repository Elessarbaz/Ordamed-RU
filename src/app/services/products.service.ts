import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/toPromise';

@Injectable()
export class ProductsService {
    constructor(private http: Http) { }

    getBrands(token: any){
        let header = new Headers();

        let auth_token = token;

        header.append('AUTHTOKEN',auth_token);

        return this.http.get('http://83.136.250.124/product/brands/',{
            headers: header
        })
    }

    getProductsByCompany(token: any, company: any){
        let header = new Headers();

        header.append('AUTHTOKEN',token);

        let data = {
            company: company
        }

        return this.http.post('http://83.136.250.124/product/search/',data,{
            headers: header
        });
    }

    getProductById(token:any,id:any){
        let header = new Headers();

        header.append('Authorization',token);

        return this.http.get('http://ordamed-crm.appspot.com/_ah/api/web/v1/products/?product_id='+id,{
            headers: header
        });
    }

    getSecondaryProduct(token :string, company:string, brand:string, name:string){
        let header = new Headers();

        header.append('AUTHTOKEN',token);

        let data = {
            company: company,
            brand_name: brand,
            parent_product: name
        }

        return this.http.post('http://83.136.250.124/product/search/',data,{
            headers: header
        });
    }

    getData(token: any){
        let header = new Headers();

        header.append('Authorization',token);

        return this.http.get('http://ordamed-crm.appspot.com/_ah/api/web/v1/products',{
            headers: header
        });
    }

    getProductsByBrand(token:any, brand:string){
        let header = new Headers();

        let auth_token = token;

        header.append('AUTHTOKEN',auth_token);

        let data = {
            brand_name: brand
        }

        return this.http.post('http://83.136.250.124/product/search/', data,{
            headers: header
        });
    }

    addData(token:any,data:any){
        let header = new Headers();

        header.append('AUTHTOKEN',token);
        header.append('Content-Type', 'application/json' );

        return this.http.post('http://83.136.250.124/product/create/', data, {
                headers: header
            }
        );
    }

    saveData(token: any, data: any){
        let header = new Headers();

        header.append('AUTHTOKEN',token);
        header.append('Content-Type', 'application/json' );

        return this.http.post('http://83.136.250.124/product/update/', data, {
                headers: header
            }
        );
    }

    getDataFromNextPage(token: any,url: any,brand: string){
        let header = new Headers();

        header.append('Authorization',token);

        return this.http.get('http://ordamed-crm.appspot.com/'+url+'&brand_name='+brand,{
            headers: header
        });
    }

    searchByName(token:any, name:any, brand:string){
        let header = new Headers();

        header.append('AUTHTOKEN',token);

        let data = {
            name: name,
            brand_name: brand
        }

        return this.http.post('http://83.136.250.124/product/search/',data,{
            headers: header
        });
    }

    searchByOnlyName(token:any, name:any){
        let header = new Headers();

        header.append('Authorization',token);

        return this.http.get('http://ordamed-crm.appspot.com/_ah/api/web/v1/products/?name='+name,{
            headers: header
        });
    }

}