import { Component, Input } from '@angular/core';

@Component({
  selector: 'event-thumbnail',

  template: `
    <div [routerLink]="['/events', event.id]" class="well hoverwell thumbnail">
      <div class="col-md-10">
        <h2> {{ event?.name }}</h2>
         <div>Date: {{ event?.date }}</div>
         <div style="..." [ngStyle]="getStartTimeStyle()"
         [ngSwitch]="event?.time">
         Time: {{ event?.time }}
         <span *ngSwitchCase="'8:00 am'">(Early Start)</span>
         <span *ngSwitchCase="'10:00 am'">(Late Start)</span>
         <span *ngSwitchDefault>(Normal Start)</span>
         </div>
         <div>Price: \$ {{ event?.price }}</div>
         <div *ngIf="event?.location">
          <span>Location: {{ event?.location?.address }}</span>
          <span class="pad-left">{{ event?.location?.city }}, {{ event?.location?.country }}</span>
         </div>
         <div *ngIf="event?.onlineUrl">
          <span>Online URL: {{event?.onlineUrl}} </span>
         </div>
       </div>
       <div class="col-md-2">
        <img src=" {{ event.imageUrl }}" align="right" width="70" alt="Event Logo" >
       </div>
      </div>
    `,

  styles: [
    `
      .thumbnail {
        min-height: 250px;
      }
      .pad-left {
        margin-left: 10px;
      }
      .well div {
        color: #bbb;
      }

    `
  ]
})
export class EventThumbnailComponent {
  @Input()
  event: any;

  getStartTimeStyle(): any {
    if (this.event && this.event.time === '8:00 am') {
      return { color: '#003300', 'font-weight': 'bold' };
    }
    if (this.event && this.event.time === '10:00 am') {
      return { color: 'orange', 'font-weight': 'bold' };
    }
      return { color: 'yellow', 'font-weight': 'bold' };
  }
}

