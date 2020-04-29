import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { IssuesComponent } from './pages/issues/issues.component';
import { BurndownComponent } from './pages/burndown/burndown.component';
//import { AuthGuard } from './pages/auth-guard.service';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'issues', component: IssuesComponent },
  { path: 'burndown', component: BurndownComponent },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: '**', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
