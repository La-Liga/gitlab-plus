import { AuthServiceGuards } from './pages/auth-service-guard';
import { environment } from '../environments/environment';


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
import { AuthService } from './pages/auth.service';
import { AuthGuard } from './pages/auth-guard.service';
import { FormsModule } from '@angular/forms';
import { AppFilterIssuesBurndownComponent } from './components/app-filter-issues-burndown/app-filter-issues-burndown.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { MensagemErrorComponent } from './mensagem-error/mensagem-error.component';




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
    BurndownComponent,
    AppFilterIssuesBurndownComponent,
    CadastroComponent,
    MensagemErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartsModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule
  ],
  providers: [AuthService, AuthServiceGuards, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
