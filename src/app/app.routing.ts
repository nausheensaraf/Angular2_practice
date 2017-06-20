import { Router, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';
import { MessagesComponent } from './messages/messages.component';
import { NotFoundComponent } from './not-found.component';

import { AuthGuard } from './auth-guard.service';
import { PreventUnsavedChangesGuard } from './prevent-unsaved-changes-guard.services';


/*
    forRoot method takes an array of route objects

    for each route,
    we define a path and assign it to a component

    we put "const" keyword to prevent accidental 
    modification of these routes nowhere else in the application.
*/
export const routing = RouterModule.forRoot([
    { path: '', component: HomeComponent },
    { 
        path: 'messages', 
        component: MessagesComponent,
        canActivate: [ AuthGuard ],
        canDeactivate : [ PreventUnsavedChangesGuard ]
    },
    { path: '**', component: NotFoundComponent } // used a wild card for any other routes and linked it to NotFoundComponent
]);