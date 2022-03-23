import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-person-table',
  templateUrl: './person-table.component.html',
  styleUrls: ['./person-table.component.scss']
})
export class PersonTableComponent {

  titles = [
    'Nome',
    'Sobrenome',
    'Data Nascimento',
    'Sexo',
    'Celular',
    'E-mail',
    'Endereço',
    'Ações'
  ];
  @Input() persons: any;
  @Input() editPerson: any;
  @Input() deletePerson: any;

}
