import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './pages/admin/admin.component';
import { ContractorListComponent } from './pages/contractor-list/contractor-list.component';
import { ContractorMapComponent } from './pages/contractor-map/contractor-map.component';
import { ContractorComponent } from './pages/contractor/contractor.component';
import { EmployeeListComponent } from './pages/employee-list/employee-list.component';
import { EmployeeMapComponent } from './pages/employee-map/employee-map.component';
import { ForbiddenComponent } from './pages/forbidden/forbidden.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SidenavComponent } from './pages/sidenav/sidenav.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: 'sidenav', component: SidenavComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'admin', component: AdminComponent },
      { path: 'contractor', component: ContractorComponent },
      { path: 'forbidden', component: ForbiddenComponent },
      { path: 'contractor-list', component: ContractorListComponent },
      { path: 'employee-list', component: EmployeeListComponent },
      { path: 'contractor-map', component: ContractorMapComponent },
      { path: 'employee-map', component: EmployeeMapComponent }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
