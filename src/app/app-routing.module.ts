import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { HomeComponent } from './home/home.component';
import { AuthGuardService } from './utils/auth-gaurd.service';

const routes: Routes = [
  { path: '', canActivate: [AuthGuardService], component: AppComponent },
  { path: 'file-upload', canActivate: [AuthGuardService], component: FileUploadComponent },
  { path: 'login', component: AuthComponent },
  { path: 'dashboard', canActivate: [AuthGuardService], component: DashboardComponent },
  { path: 'home', canActivate: [AuthGuardService], component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
