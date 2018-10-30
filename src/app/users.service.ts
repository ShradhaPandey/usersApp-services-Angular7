import { Injectable } from '@angular/core';

import { CounterService } from './counter.service';

/*
This decorater is used on the service which wants to use another service,
so here, User service wants to use the counter service, i.e Counter service is injected in User service,
using @Injectable() on the user service.
*/
@Injectable()
export class UserService {
  activeUsers = ['Shradha', 'Karen'];
  inactiveUsers = ['Frank', 'Mathew'];

  constructor(private counterService: CounterService) {}

  setToActive(id: number) {
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1);
    this.counterService.incrementCountInActiveToActive();
  }

  setToInactive(id: number) {
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1);
    this.counterService.incrementCountActiveToInactive();
  }
}
