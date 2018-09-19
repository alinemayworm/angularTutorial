import { Component, Input, OnChanges } from '@angular/core';
import { ISession } from '../shared/index';

@Component({
  selector: 'session-list',
  templateUrl: './session-list.component.html'
})
export class SessionListComponent implements OnChanges {
  @Input() sessions: ISession[];
  @Input() filteredBy: string;
  @Input() sortBy: string;
  visibleSessions: ISession[] = [];

  ngOnChanges() {
    if (this.sessions) {
      this.filterSessions(this.filteredBy);
      this.sortBy === 'name' ? this.visibleSessions.sort(sortByNameAsc) : this.visibleSessions.sort(sortByVotesDesc);
    }
  }

  filterSessions(filter) {
    if (filter === 'all') {
      this.visibleSessions = this.sessions.slice(0);
    } else {
      this.visibleSessions = [];
      for (let i = 0; 0 < this.sessions.length; i++) {
        if (this.sessions[i].level.toLocaleLowerCase() === filter) {
          this.visibleSessions.push(this.sessions[i]);
        }
      }
    }
  }
}
function sortByNameAsc(s1: ISession, s2: ISession) {
  if (s1.name > s2.name) {
    return 1;
  } else if (s1.name === s2.name) {
    return 0;
  } else {
    return -1;
  }
}

function sortByVotesDesc(s1: ISession, s2: ISession) {
  return (s2.voters.length - s1.voters.length);
}
