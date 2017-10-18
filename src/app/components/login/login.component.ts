/**
 * Created by injection on 16.10.17.
 */
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {  AuthenticationService } from '../../services/authentication.service';

declare var $: any;
declare var Draggabilly: any;

@Component({
    moduleId: module.id,
    selector: 'login',
    templateUrl: './login.component.html'
})

export class LoginComponent implements OnInit {

    public model = {
        email: '',
        password: ''
    };
    public loading = false;
    public returnUrl: string;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService) { }

    ngOnInit() {
        localStorage.removeItem('auth_token');
        localStorage.removeItem('username');
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    login() {
        this.loading = true;
        this.authenticationService.login(this.model.email, this.model.password)
            .subscribe(
                data => {
                    const user = data.json();
                    localStorage.setItem('username', this.model.email);
                    localStorage.setItem('auth_token', user.token);
                    this.router.navigate([this.returnUrl]);
                },
                error => {
                    this.loading = false;
                });
    }
}
