import { AssociateInterface } from 'src/app/shared/models/AssociateInterface';
import { AssociateService } from '../../core/services/associate/associate.service';
import { Component, OnInit } from '@angular/core';
import ConvertUtil from 'src/app/shared/utils/Convert.util';

declare var $: any;

@Component({
  selector: 'app-associate',
  templateUrl: './associate.component.html',
  styleUrls: ['./associate.component.scss']
})
export class AssociateComponent implements OnInit {

  title = 'Associado';
  persons: any;
  hasEditPerson: boolean = false;
  alertMessage: string = '';

  findPersonByName = (personName: string) => {
    if (personName == undefined || personName == '') {
      this.findAllAssociates();
      return;
    }

    this.associateService.getAssociateByName(personName)
      .subscribe((associate) => {
        this.persons = (associate as any).data;
      });
  }

  savePerson = () => {
    let gender = $('input[name=gender]:checked').val();
    let inputs: any[] = $('.person__input');
    for (const input of inputs) {
      if (input.value === '') {
        this.alertMessage = 'Preencha todos os campos por favor!';
        return;
      }
    }

    let associate: AssociateInterface = this.createAssociateObject(inputs, gender);
    if (this.hasEditPerson) {
      this.updateAssociate(associate, inputs);
      return;
    }

    this.saveAssociate(associate);
  }

  private updateAssociate(associate: AssociateInterface, inputs: any[]) {
    associate.id = $('#id').val();
    associate.birthDate = ConvertUtil.stringBirthDateToSave(inputs[3].value);

    this.associateService.updateAssociate(associate)
      .subscribe((associate) => {
        let updatedAssociate = (associate as any).data;
        var index = this.persons.map(function (person: any) { return person._id; }).indexOf(updatedAssociate._id);
        this.persons[index] = updatedAssociate;

        this.hasEditPerson = false;
        $('#personModal').modal('hide');
      });
  }

  private saveAssociate(associate: AssociateInterface,) {
    this.associateService.saveAssociate(associate)
      .subscribe((associate) => {
        this.persons.push((associate as any).data);
        $('#personModal').modal('hide');
      });
  }

  private createAssociateObject(inputs: any[], gender: string): AssociateInterface {
    return {
      firstName: inputs[0].value,
      lastName: inputs[1].value,
      cpf: inputs[2].value,
      birthDate: inputs[3].value,
      address: {
        publicArea: inputs[4].value,
        city: inputs[5].value,
        state: inputs[6].value,
        postalCode: inputs[7].value
      },
      contact: {
        phoneNumber: inputs[8].value,
        cellNumber: inputs[9].value,
        emailAddress: inputs[10].value
      },
      anamnese: {
        bloodGroup: inputs[16].value,
        chronicConditions: inputs[17].value,
        allergies: inputs[18].value
      },
      education: inputs[11].value,
      maritalStatus: inputs[12].value,
      gender: gender
    };
  }

  editPerson = (associate: AssociateInterface) => {
    this.hasEditPerson = true;

    $('#id').val(associate._id);
    $('#first-name').val(associate.firstName);
    $('#last-name').val(associate.lastName);
    $('#cpf').val(associate.cpf);
    $('#birth-date').val(ConvertUtil.birthDateToSetModal(associate.birthDate.toString()));
    $('#public-area').val(associate.address.publicArea);
    $('#city').val(associate.address.city);
    $('#state').val(associate.address.state);
    $('#cep').val(associate.address.postalCode);
    $('#phone-number').val(associate.contact.phoneNumber);
    $('#cell-number').val(associate.contact.cellNumber);
    $('#email').val(associate.contact.emailAddress);
    $('#education').val([associate.education.toLowerCase()]);
    $('#marital-status').val([associate.maritalStatus.toLowerCase()]);
    $('input[name=gender]').val([associate.gender.toLowerCase()]);
    $('#blood-group').val(associate.anamnese.bloodGroup);
    $('#chronic-conditions').val(associate.anamnese.chronicConditions);
    $('#allergies').val(associate.anamnese.allergies);

    $('#personModal').modal('show');
  }

  deletePerson = (personId: any, tableRowIndex: any) => {
    var canDeleteAssociate = confirm('Deseja realmente excluir os dados deste associado?');
    if (canDeleteAssociate) {
      this.associateService.deleteAssociateById(personId)
        .subscribe(() => {
          this.persons.splice(tableRowIndex, 1);
        });
    }
  }

  constructor(private associateService: AssociateService) { }

  ngOnInit(): void {
    this.findAllAssociates();
    this.clearAllFieldsWhenModalCloses();
  }

  private findAllAssociates(): void {
    this.associateService.getAllAssociates()
      .subscribe((associates) => {
        this.persons = (associates as any).data;
      });
  }

  private clearAllFieldsWhenModalCloses(): void {
    $('#personModal').on('hidden.bs.modal', () => {
      $('#id').val('');
      $('#first-name').val('');
      $('#last-name').val('');
      $('#cpf').val('');
      $('#birth-date').val('');
      $('#public-area').val('');
      $('#city').val('');
      $('#state').val('');
      $('#cep').val('');
      $('#phone-number').val('');
      $('#cell-number').val('');
      $('#email').val('');
      $('#education').val(['elementary_school']);
      $('#marital-status').val(['single']);
      $('input[name=gender]').val(['other']);
      $('#blood-group').val('');
      $('#chronic-conditions').val('');
      $('#allergies').val('');
    });

    this.hasEditPerson = false;
  }

}
