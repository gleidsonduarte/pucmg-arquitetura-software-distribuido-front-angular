import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-person-search-field',
  templateUrl: './person-search-field.component.html',
  styleUrls: ['./person-search-field.component.scss']
})
export class PersonSearchFieldComponent {

  personName: any;
  @Input() findPersonByName: any;

}
