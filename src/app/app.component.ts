import { Component } from '@angular/core';
import { UnshiftService } from './unshift.service';
import { DropdownService } from './dropdown.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UnshiftService]
})
export class AppComponent {
  title = 'app works!';
  persons = [];
  sums = 0;
  combos = [];
  constructor(public unshiftService: UnshiftService, public dropdownService: DropdownService) {

  }
  ngOnInit() {
    this.persons = this.unshiftService.persons();
    this.sums = this.unshiftService.sum();
    this.combos = this.dropdownService.dropdown();
  }
}
