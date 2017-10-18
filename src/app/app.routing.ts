import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DealsComponent } from './components/deals/deals.component';
import { UsersComponent } from './components/users/users.component';
import {AuthGuard} from "./guards/auth.guard";

const appRoutes: Routes = [
    { path: '', component: DealsComponent, canActivate: [AuthGuard]},
    { path: 'login', component: LoginComponent },
    { path: 'users', component: UsersComponent, canActivate: [AuthGuard]},

    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);