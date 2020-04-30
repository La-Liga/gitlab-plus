
import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { IssuesComponent } from './pages/issues/issues.component';
import { BurndownComponent } from './pages/burndown/burndown.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { AuthGuard } from './pages/auth-guard.service';
//import { AuthGuard } from './pages/auth-guard.service';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', canActivate: [AuthGuard], component: DashboardComponent },
  { path: 'issues', canActivate: [AuthGuard], component: IssuesComponent },
  { path: 'burndown', canActivate: [AuthGuard], component: BurndownComponent },
  { path: '', canActivate: [AuthGuard], redirectTo: 'dashboard', pathMatch: 'full' },
  { path: '**', canActivate: [AuthGuard], component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
