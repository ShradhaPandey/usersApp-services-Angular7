export class CounterService {
  activeToInactiveCounter = 0;
  inactiveToActiveCounter = 0;

  incrementCountActiveToInactive() {
    this.activeToInactiveCounter++;
    console.log('Active to Inactive: ' + this.activeToInactiveCounter);
  }

  incrementCountInActiveToActive() {
    this.inactiveToActiveCounter++;
    console.log('Inactive to Active: ' + this.inactiveToActiveCounter);
  }
}
