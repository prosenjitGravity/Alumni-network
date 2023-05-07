import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { FooterComponent } from './components/footer/footer.component';
import { HelpPageComponent } from './pages/help-page/help-page.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { ProfileComponent } from './components/profile/profile.component';
import { PostComponent } from './components/post/post.component';
import { LoginComponent } from './components/login/login.component';
import { SkillsComponent } from './components/skills/skills.component';
import { EducationComponent } from './components/education/education.component';
import { KnowledgeComponent } from './pages/knowledge/knowledge.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { MyprofileComponent } from './pages/myprofile/myprofile.component';

const routes: Routes = [
  {
    path:'', component:HomeComponent,
  },
  {
    path:'footer',component:FooterComponent
  },
  {
    path:'about', component:AboutComponent
  },
  {
    path:'education',component:EducationComponent
  },
  {
    path:'help',component:HelpPageComponent
  },
  {
    path:'skills',component:SkillsComponent
  },
  {
    path:'post',component:PostComponent
  },
  {
    path:'profile',component:ProfileComponent
  },
  {
    path:'register', component:RegistrationComponent
  },
  {
    path:'login', component:LoginComponent
  },
  {
    path:'knowledge',component:KnowledgeComponent
  },
  {
    path:'dashboard', component:DashboardComponent
  },
  {
    path:'my-profile', component:MyprofileComponent
  },
  {
    path:'**',component:NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
