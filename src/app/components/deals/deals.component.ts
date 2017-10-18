/**
 * Created by injection on 16.10.17.
 */
import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { ClientService } from '../../services/client.service';
import { ProductsService } from '../../services/products.service';
import { DealService } from '../../services/deal.service';
import { JsonService } from '../../services/json.service';

@Component({
    moduleId: module.id,
    selector: 'deals',
    templateUrl: './deals.component.html'
})

export class DealsComponent implements OnInit {

    private token = localStorage.getItem('auth_token');
    private userInfo: any = null;

    private clientList: any[];
    private currentClient: any = 'none';

    private dealsList: any[];

    constructor(
        private _userService: UserService,
        private _clientService: ClientService,
        private _dealService: DealService,
        private _productService: ProductsService,
        private _jsonService: JsonService
    ){}

    ngOnInit() {
        this.getUserData(this.token);
    }

    public getUserData(token: any){
        this._userService.getData(token).subscribe(
            msg => {
                this.userInfo = msg.json();
                this.userInfo.groups = this._jsonService.convertToObject(this.userInfo.groups);

                this.getClients(this.userInfo.groups[0].name);


            },
            err => console.log(err)
        )
    }

    public openModalToAddDeal(event: Event){
        event.preventDefault();

    }

    public getClients(company: any){
        this._clientService.getData(this.token,20,company).subscribe(
            msg => {
                this.clientList = msg.json();
            },
            err => console.log(err)
        )
    }

    public getDealsOnCurrentClient(client: any){

        this.dealsList = [];

        for(let deal of client.deals){
            this._dealService.searchData(this.token,deal.id_).subscribe(
                msg => {
                    if(msg.json()[0]){
                        let pure_deal = msg.json()[0];

                        pure_deal.jsondata = this._jsonService.convertToObject(pure_deal.jsondata);
                        pure_deal.products = this._jsonService.convertToObject(pure_deal.products);

                        this.dealsList.push(pure_deal)
                    }
                },
                err => console.log(err)
            )
        }
    }

    public changeClient(){
        this.getDealsOnCurrentClient(this.currentClient);
    }
}