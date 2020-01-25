import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { ParticlesModule } from 'angular-particle';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
// For MDB Angular Free
import { NavbarModule, WavesModule, ButtonsModule, BadgeModule,BreadcrumbModule,
  CardsModule, CarouselModule, ChartsModule, CheckboxModule, CollapseModule, DropdownModule,
  IconsModule, InputsModule, InputUtilitiesModule, ModalModule, PopoverModule, TableModule,
  TooltipModule } from 'angular-bootstrap-md'
import {MatCardModule, MatIconModule, MatProgressBarModule} from '@angular/material';
import { PieChartComponent } from './pie-chart/pie-chart.component'


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    NavbarComponent,
    PieChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ParticlesModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatIconModule,
    MatProgressBarModule,
    BadgeModule,
    BreadcrumbModule,
    ButtonsModule,
    CardsModule,
    ChartsModule,
    CheckboxModule,
    IconsModule,
    NavbarModule,
    InputUtilitiesModule,
    CarouselModule.forRoot(),
    CollapseModule.forRoot(),
    DropdownModule.forRoot(),
    InputsModule.forRoot(),
    ModalModule.forRoot(),
    PopoverModule.forRoot(),
    TableModule,
    TooltipModule.forRoot(),
    WavesModule.forRoot(),
    MDBBootstrapModule.forRoot()
  ],
  providers: [NavbarModule,WavesModule,ButtonsModule,BadgeModule,TableModule,BreadcrumbModule,ButtonsModule,CardsModule,ChartsModule,CheckboxModule,IconsModule,],
  schemas: [ NO_ERRORS_SCHEMA ],
  bootstrap: [AppComponent]
})
export class AppModule { }
