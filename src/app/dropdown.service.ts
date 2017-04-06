import { Injectable } from '@angular/core';

@Injectable()
export class DropdownService {

  constructor() { }

  dropdown () {
    return ["Mr", "Mrs", "Ms"];
  }
}
