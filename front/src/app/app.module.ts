import { BurndownComponent } from './pages/burndown/burndown.component';


import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { IssuesScreenComponent } from './components/issues-screen/issues-screen.component';
import { IssuesComponent } from './pages/issues/issues.component';
import { FilterIssuesComponent } from './components/filter-issues/filter-issues.component';
import { IssuesTableComponent } from './components/issues-table/issues-table.component';
import { IssueOverviewComponent } from './components/issue-overview/issue-overview.component';
import { GraficoBarChartComponent } from './components/grafico-bar-chart/grafico-bar-chart.component';
import { GraficoPieComponent } from './components/grafico-pie/grafico-pie.component';
import { QuantidadeTelasOverviewComponent } from './components/quantidade-telas-overview/quantidade-telas-overview.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { QuantityByLabelsComponent } from './components/quantity-by-labels/quantity-by-labels.component';
import { AuthService } from './pages/login/auth.service';
import { AuthGuard } from './pages/auth-guard.service';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    GraficoBarChartComponent,
    GraficoPieComponent,
    IssueOverviewComponent,
    QuantidadeTelasOverviewComponent,
    NavBarComponent,
    IssuesScreenComponent,
    IssuesComponent,
    FilterIssuesComponent,
    IssuesTableComponent,
    QuantityByLabelsComponent,
    BurndownComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
    FormsModule
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
