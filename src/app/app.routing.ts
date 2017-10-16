import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { DealsComponent } from './components/deals/deals.component';

const appRoutes: Routes = [
    { path: '', component: DealsComponent},
    { path: 'login', component: LoginComponent },

    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);