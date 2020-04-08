

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts'
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { GraficoPieComponent } from './grafico-pie/grafico-pie.component';
import { CardQuantitativoPrincipalComponent } from './card-quantitativo-principal/card-quantitativo-principal.component';
import { CardQuantitativoSecundarioComponent } from './card-quantitativo-secundario/card-quantitativo-secundario.component';
import { IssueOverviewComponent } from './issue-overview/issue-overview.component';
import { QuantidadeTelasOverviewComponent } from './quantidade-telas-overview/quantidade-telas-overview.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { IssuesScreenComponent } from './issues-screen/issues-screen.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    GraficoPieComponent,
    CardQuantitativoPrincipalComponent,
    CardQuantitativoSecundarioComponent,
    IssueOverviewComponent,
    QuantidadeTelasOverviewComponent,
    NavBarComponent,
    IssuesScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
