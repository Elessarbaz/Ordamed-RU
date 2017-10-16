/**
 * Created by injection on 16.10.17.
 */
import { Component, OnInit } from '@angular/core';

declare var $: any;
declare var Draggabilly: any;

@Component({
    moduleId: module.id,
    selector: 'deals',
    templateUrl: './deals.component.html'
})

export class DealsComponent implements OnInit {

    private token = localStorage.getItem('auth_token');

    constructor(){}

    ngOnInit() {

    }
}