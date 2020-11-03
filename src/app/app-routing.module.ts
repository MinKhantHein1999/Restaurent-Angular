import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddRestComponent } from './add-rest/add-rest.component';
import { AllRestComponent } from './all-rest/all-rest.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { UpdateRestComponent } from './update-rest/update-rest.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'all-rest',
    component: AllRestComponent,
  },
  {
    path: 'add',
    component: AddRestComponent,
  },
  {
    path: 'update/:id',
    component: UpdateRestComponent,
  },
  {
    path: 'update',
    component: UpdateRestComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: '**',
    component: HomeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
