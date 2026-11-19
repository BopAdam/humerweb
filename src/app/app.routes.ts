import { Routes } from '@angular/router';
import { HomeComponent } from './home-component/home-component';
import { EmployeeComponent } from './employee-component/employee-component';
import { AboutComponente } from './about-componente/about-componente';

export const routes: Routes = [
    {path:"", component: HomeComponent},
    {path:"home", component: HomeComponent},
    {path:"employee", component: EmployeeComponent},
    {path:"about", component:AboutComponente }
];
