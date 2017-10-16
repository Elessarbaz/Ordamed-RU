import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DealsComponent } from './components/deals/deals.component';
import { UsersComponent } from './components/users/users.component';

const appRoutes: Routes = [
    { path: '', component: DealsComponent},
    { path: 'login', component: LoginComponent },
    { path: 'users', component: UsersComponent },

    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);