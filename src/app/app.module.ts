import { Component } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { HttpModule } from '@angular/http';
import { Angular2FontAwesomeModule } from 'angular2-font-awesome/angular2-font-awesome';
import { routing } from './app.routing';


import { CoursesComponent } from './courses.component';
import { MessageComponent } from './message.component';
import { MessageService } from './message.service';
import { AuthorsComponennt } from './author.component';
import { AuthorsService } from './author.service';
import { AutoGrowDirective } from './auto-grow.directive';
import { FavoriteComponent } from './favorite.component';
import { LikesComponent } from './like.component';
import { VoterComponent } from './voter.component';
import { TabsComponent } from './tab.component';
import { PipesComponent } from './pipe.component';
import { CustomPipeComponent } from './customPipe.component';
import{ SummaryPipe } from './summary.pipe';
import{ TweetComponent } from './tweet.component';
import{ TweetsComponent } from './tweets.component';
import { TweetService } from './tweet.service';
import { BootstrapPanel } from './bootstrap.panel.component';
import { ZippyComponent } from './zippy.component';
import { ContactFormComponent } from './contact-form.component';
import { SubscriptionFormComponent } from './subscription-form.component';
import { SignUpFormComponent } from './signup-form.component';
import { ChangePasswordFormComponent } from './change-password-form.component';
import { PostService } from './post.service';
import { TestObservables } from './test-observables.component';
import { ServerConnectionComponent } from './server-connection.component';
import { GithubProfileComponent } from './github-profile.component';
import { GithubService } from './github.service';
import { PhotoService } from './photo.service';
import { RoutesTestComponent } from './route-test.component';
import { AlbumComponent } from './album.component';
import { ContactComponent } from './contact.component';
import { AlbumsComponent } from './albums.component';

import { HomeComponent } from './home.component';
import { NotFoundComponent } from './not-found.component';
import { MessagesComponent } from './messages/messages.component';
import { MessagesService } from './messages/messages.service';
import { PhotosComponent } from './photos/photos.component';
import { PhotoDetailsComponent } from './photos/photo-details.component';
import { photosRouting } from './photos/photos.routing';

import { AuthService } from './auth.service';
import { AuthGuard } from './auth-guard.service';
import { PreventUnsavedChangesGuard } from './prevent-unsaved-changes-guard.services';



@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    MessageComponent,
    AuthorsComponennt,
    AutoGrowDirective,
    FavoriteComponent,
    LikesComponent,
    VoterComponent,
    TabsComponent,
    PipesComponent,
    CustomPipeComponent,
    SummaryPipe,
    TweetComponent,
    TweetsComponent,
    BootstrapPanel,
    ZippyComponent,
    ContactFormComponent,
    SubscriptionFormComponent,
    SignUpFormComponent,
    ChangePasswordFormComponent,
    TestObservables,
    ServerConnectionComponent,
    GithubProfileComponent,
    AlbumComponent,
    ContactComponent,
    AlbumsComponent,
    RoutesTestComponent,
    HomeComponent,
    NotFoundComponent,
    MessagesComponent,
    PhotosComponent,
    PhotoDetailsComponent
    
  ],

  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    Angular2FontAwesomeModule,
    ReactiveFormsModule,
    
    photosRouting,
    routing
    
  ],

  providers:[ 
    MessageService, 
    AuthorsService, 
    TweetService, 
    PostService, 
    GithubService, 
    PhotoService, 
    MessagesService, 
    AuthService,
    AuthGuard,
    PreventUnsavedChangesGuard 
    
    ],

  bootstrap: [AppComponent]
})


export class AppModule { }

