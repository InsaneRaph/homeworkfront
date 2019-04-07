import {RouterModule, Routes} from '@angular/router';

import {HomeComponent} from './home';
import {LoginComponent} from './login';
import {AuthGuard} from './_guards';
import {SignComponent} from "./sign";
import {CardComponent, PaymentComponent} from "./card";

const appRoutes: Routes = [
    {path: '', component: HomeComponent, canActivate: [AuthGuard]},
    {path: 'login', component: LoginComponent},
    {path: 'sign', component: SignComponent},
    {path: 'card', component: CardComponent, canActivate: [AuthGuard]},
    {path: 'card/:id/payments', component: PaymentComponent, canActivate: [AuthGuard]},

    // otherwise redirect to home
    {path: '**', redirectTo: ''}
];

export const routing = RouterModule.forRoot(appRoutes);