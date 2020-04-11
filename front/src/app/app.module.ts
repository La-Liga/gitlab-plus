

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { IssueOverviewComponent } from './pages/issue-overview/issue-overview.component';
import { GraficoBarChartComponent } from './components/grafico-bar-chart/grafico-bar-chart.component';
import { GraficoPieComponent } from './components/grafico-pie/grafico-pie.component';
import { CardQuantitativoPrincipalComponent } from './components/card-quantitativo-principal/card-quantitativo-principal.component';
import { CardQuantitativoSecundarioComponent } from './components/card-quantitativo-secundario/card-quantitativo-secundario.component';
import { QuantidadeTelasOverviewComponent } from './components/quantidade-telas-overview/quantidade-telas-overview.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { QuantityByLabelsComponent } from './components/quantity-by-labels/quantity-by-labels.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    GraficoBarChartComponent,
    GraficoPieComponent,
    CardQuantitativoPrincipalComponent,
    CardQuantitativoSecundarioComponent,
    IssueOverviewComponent,
    QuantidadeTelasOverviewComponent,
    NavBarComponent,
    QuantityByLabelsComponent

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
