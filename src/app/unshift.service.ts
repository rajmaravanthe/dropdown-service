import { Injectable } from '@angular/core';

@Injectable()
export class UnshiftService {

  person = [];
  constructor() { }
  sums = 0;
  persons() {
    return this.person = [{
      name: 'Kevin',
      salary: 123
    },
    {
      name: 'AB',
      salary: 234
    },
    {
      name: 'Yuvaraj',
      salary: 345
    }]
  }

  sum () {
    for (let i in this.person) {
      this.sums += this.person[i].salary;
    }
    return this.sums;
  }
}
