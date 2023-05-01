import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { FooterComponent } from './components/footer/footer.component';
import { HelpPageComponent } from './pages/help-page/help-page.component';

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
    path:'help',component:HelpPageComponent
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
