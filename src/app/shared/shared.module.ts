import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FormsModule } from '@angular/forms';

import { AlertMessageComponent } from './components/alert-message/alert-message.component';
import { PersonModalComponent } from './components/person-modal/person-modal.component';
import { PersonSearchFieldComponent } from './components/person-search-field/person-search-field.component';
import { PersonTableComponent } from './components/person-table/person-table.component';

@NgModule({
  declarations: [
    PersonModalComponent,
    PersonTableComponent,
    PersonSearchFieldComponent,
    AlertMessageComponent
  ],
  imports: [
    CommonModule,
    FontAwesomeModule,
    FormsModule
  ],
  exports: [
    PersonModalComponent,
    PersonTableComponent,
    PersonSearchFieldComponent,
    AlertMessageComponent
  ]
})
export class SharedModule {
  constructor() { }
}
