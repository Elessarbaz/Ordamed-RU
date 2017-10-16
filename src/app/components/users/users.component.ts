/**
 * Created by injection on 16.10.17.
 */
import { Component, OnInit } from '@angular/core';

declare var $: any;
declare var Draggabilly: any;

@Component({
    moduleId: module.id,
    selector: 'users',
    templateUrl: './users.component.html'
})

export class UsersComponent implements OnInit {

    private token = localStorage.getItem('auth_token');

    constructor(){}

    ngOnInit() {

    }
}