import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';


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
import { AboutMeComponent } from './components/about-me/about-me.component';
import { LinksComponent } from './components/links/links.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ProfileToolbarComponent } from './components/profile-toolbar/profile-toolbar.component';
import {MatBadgeModule} from '@angular/material/badge';
import { LayoutModule } from '@angular/cdk/layout';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { ApiCallComponent } from './components/api-call/api-call.component';
import { ValueArrayPipe } from './pipes/value-array.pipe';
import {AppbarComponent} from './components/appbar/appbar.component'
import {FlexLayoutModule} from "@angular/flex-layout";
import { ProfileLinksComponent } from './components/profile-links/profile-links.component';
import { AllPostComponent } from './pages/all-post/all-post.component';
import {MatExpansionModule} from '@angular/material/expansion';
import { ListComponent } from './components/list/list.component';
import {MatTableModule} from '@angular/material/table';
import { DateFilterPipe } from './pipes/date-filter.pipe';
import { MobileToolbarComponent } from './components/mobile-toolbar/mobile-toolbar.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    AppbarComponent,
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
    PostactivityComponent,
    AboutMeComponent,
    LinksComponent,
    ExperienceComponent,
    ProfileToolbarComponent,
    ToolbarComponent,
    ApiCallComponent,
    ValueArrayPipe,
    ProfileLinksComponent,
    AllPostComponent,
    ListComponent,
    DateFilterPipe,
    MobileToolbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
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
    MatButtonToggleModule,
    MatBadgeModule,
    LayoutModule,
    MatExpansionModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
