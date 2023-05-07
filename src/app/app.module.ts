import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppbarComponent } from './components/appbar/appbar.component';
import { HomeComponent } from './pages/home/home.component';
import { ReactiveFormsModule } from '@angular/forms';


// @angular material libraries importing 
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatDialogModule } from '@angular/material/dialog';
import { MatRadioModule } from '@angular/material/radio';
import { AboutComponent } from './pages/about/about.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { FooterComponent } from './components/footer/footer.component';
import { ActivityComponent } from './components/activity/activity.component';
import { HelpPageComponent } from './pages/help-page/help-page.component';
import { RegistrationComponent } from './components/registration/registration.component';
import {MatStepperModule} from '@angular/material/stepper';
import { ProfileComponent } from './components/profile/profile.component';
import { PostComponent } from './components/post/post.component';
import { LoginComponent } from './components/login/login.component';
import { SkillsComponent } from './components/skills/skills.component';
import { EducationComponent } from './components/education/education.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { KnowledgeComponent } from './pages/knowledge/knowledge.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { CardsComponent } from './components/cards/cards.component';
import {MatChipsModule} from '@angular/material/chips';
import { AdminAppbarComponent } from './components/admin-appbar/admin-appbar.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { MyprofileComponent } from './pages/myprofile/myprofile.component';
import { PostactivityComponent } from './components/postactivity/postactivity.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';


@NgModule({
  declarations: [
    AppComponent,
    AppbarComponent,
    HomeComponent,
    AboutComponent,
    NotFoundComponent,
    FooterComponent,
    ActivityComponent,
    HelpPageComponent,
    RegistrationComponent,
    ProfileComponent,
    PostComponent,
    LoginComponent,
    SkillsComponent,
    EducationComponent,
    KnowledgeComponent,
    GalleryComponent,
    CardsComponent,
    AdminAppbarComponent,
    DashboardComponent,
    MyprofileComponent,
    PostactivityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatDividerModule,
    MatMenuModule,
    MatInputModule,
    MatCardModule,
    MatFormFieldModule,
    MatGridListModule,
    MatAutocompleteModule,
    MatSelectModule,
    MatTooltipModule,
    MatDialogModule,
    MatRadioModule,
    MatStepperModule,
    MatSidenavModule,
    MatListModule,
    MatChipsModule,
    MatButtonToggleModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
