import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { JQ_TOKEN, TOASTR_TOKEN, Toastr, CollapsibleWellComponent} from './common/index';

import {
  EventsListComponent,
  EventThumbnailComponent,
  EventsListResolver,

  EventDetailsComponent,
  EventService,
  CreateEventComponent,
  CreateSessionComponent,
  SessionListComponent,
  } from './events/index';

import { EventsAppComponent } from './events-app.component';
import { NavBarComponent } from './nav/navbar.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './router';
import { Error404Component } from './errors/404.component';
import { AuthService } from './user/auth.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DurationPipe } from './events/shared/duration.pipe';



const toastr: Toastr = window['toastr'];
const jQuery = window['$'];


@NgModule({
  declarations: [
    EventsAppComponent ,
    EventsListComponent,
    EventThumbnailComponent,
    NavBarComponent,
    EventDetailsComponent,
    Error404Component,
    CreateEventComponent,
    CreateSessionComponent,
    SessionListComponent,
    CollapsibleWellComponent,
    DurationPipe

  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,

  ],
  providers: [
    EventService,
    { provide: TOASTR_TOKEN, useValue: toastr },


    AuthService,
    {
      provide: 'canDeactivateCreateEvent',
      useValue: checkDirtyState
    },
    EventsListResolver
  ],
  bootstrap: [EventsAppComponent]
})
export class AppModule {
}
export function checkDirtyState(component: CreateEventComponent) {
  if (component.isDirty) {
    return window.confirm('You have not saved this event, do you really want to cancel?');
  }
  return true;
}

