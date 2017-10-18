import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

    constructor(
        private _userService: UserService,
        private _router: Router
    ){}

    private token = localStorage.getItem('auth_token');
    private username = localStorage.getItem('username');

    ngOnInit(){
        if(!this.token){
            this._router.navigate(['/login'])
        }
    }
}
