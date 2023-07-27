import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NewCmpComponent } from './new-cmp/new-cmp.component';
import { ContactMeComponent } from './contact-me/contact-me.component';
import { MyProjectsComponent } from './my-projects/my-projects.component';
import { LoginComponent } from './login/login.component';
import { AddProjectComponent } from './add-project/add-project.component';

const routes: Routes = [
  
  { path: '', component: HomeComponent},
  { path: 'my-projects',component: MyProjectsComponent},
  { path: 'contact-me', component: ContactMeComponent},
  { path: 'login', component: LoginComponent},
  { path: 'add', component: AddProjectComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponent = [ HomeComponent, MyProjectsComponent, ContactMeComponent, LoginComponent];
