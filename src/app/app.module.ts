import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input'
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { SidenavComponent } from './pages/sidenav/sidenav.component';
import { HomeComponent } from './pages/home/home.component';
import { AdminComponent } from './pages/admin/admin.component';
import { ContractorComponent } from './pages/contractor/contractor.component';
import { ForbiddenComponent } from './pages/forbidden/forbidden.component';
import { LoginComponent } from './pages/login/login.component';
import { ContractorListComponent } from './pages/contractor-list/contractor-list.component';
import { EmployeeListComponent } from './pages/employee-list/employee-list.component';
import { EmployeeMapComponent } from './pages/employee-map/employee-map.component';
import { ContractorMapComponent } from './pages/contractor-map/contractor-map.component';

@NgModule({
  declarations: [
    AppComponent,
    SidenavComponent,
    HomeComponent,
    AdminComponent,
    ContractorComponent,
    ForbiddenComponent,
    LoginComponent,
    ContractorListComponent,
    EmployeeListComponent,
    EmployeeMapComponent,
    ContractorMapComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatInputModule,
    MatTableModule,
    MatButtonModule,
    MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
