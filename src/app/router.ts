import { Routes } from '@angular/router';
import { Error404Component } from './errors/404.component';

import {
  EventsListComponent,
  EventDetailsComponent,
  EventRouteActivator,
  CreateEventComponent,
  EventsListResolver,
  CreateSessionComponent
 } from './events/index';

export const appRoutes: Routes = [

  { path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent'] },
  { path: 'events', component: EventsListComponent, resolve: {events: EventsListResolver} },
  { path: 'events/:id', component: EventDetailsComponent, canActivate: [EventRouteActivator] },
  { path: '', redirectTo: '/events', pathMatch: 'full' },
  { path: '404', component: Error404Component },
  { path: 'events/session/new', component: CreateSessionComponent },
  { path: 'user', loadChildren: './user/user.module#UserModule' }
];



