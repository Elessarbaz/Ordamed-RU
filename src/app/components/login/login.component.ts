/**
 * Created by injection on 16.10.17.
 */
import { Component, OnInit } from '@angular/core';

declare var $: any;
declare var Draggabilly: any;

@Component({
    moduleId: module.id,
    selector: 'login',
    templateUrl: './login.component.html'
})

export class LoginComponent implements OnInit {

    private token = localStorage.getItem('auth_token');

    constructor(){}

    ngOnInit() {

    }
}
