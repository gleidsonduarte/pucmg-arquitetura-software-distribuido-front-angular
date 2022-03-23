import { Component, OnInit } from '@angular/core';
import ConvertUtil from 'src/app/shared/utils/Convert.util';
import { ProviderInterface } from 'src/app/shared/models/ProviderInterface';
import { ProviderService } from '../../core/services/provider/provider.service';

declare var $: any;

@Component({
  selector: 'app-provider',
  templateUrl: './provider.component.html',
  styleUrls: ['./provider.component.scss']
})
export class ProviderComponent implements OnInit {

  title = 'Prestador';
  persons: any;
  hasEditPerson: boolean = false;
  alertMessage: string = '';

  findPersonByName = (personName: string) => {
    if (personName == undefined || personName == '') {
      this.findAllProviders();
      return;
    }

    this.providerService.getProviderByName(personName)
      .subscribe((provider) => {
        this.persons = (provider as any).data;
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

    let provider: ProviderInterface = this.createProviderObject(inputs, gender);
    if (this.hasEditPerson) {
      this.updateProvider(provider, inputs);
      return;
    }

    this.saveProvider(provider);
  }

  private createProviderObject(inputs: any[], gender: string): ProviderInterface {
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
      education: inputs[11].value,
      maritalStatus: inputs[12].value,
      gender: gender
    };
  }

  private updateProvider(provider: ProviderInterface, inputs: any[]) {
    provider.id = $('#id').val();
    provider.birthDate = ConvertUtil.stringBirthDateToSave(inputs[3].value);

    this.providerService.updateProvider(provider)
      .subscribe((provider) => {
        let updatedProvider = (provider as any).data;
        var index = this.persons.map(function (person: any) { return person._id; }).indexOf(updatedProvider._id);
        this.persons[index] = updatedProvider;

        this.hasEditPerson = false;
        $('#personModal').modal('hide');
      });
  }

  private saveProvider(provider: ProviderInterface,) {
    this.providerService.saveProvider(provider)
      .subscribe((provider) => {
        this.persons.push((provider as any).data)
        $('#personModal').modal('hide');
      });
  }

  editPerson = (provider: ProviderInterface) => {
    this.hasEditPerson = true;

    $('#id').val(provider._id);
    $('#first-name').val(provider.firstName);
    $('#last-name').val(provider.lastName);
    $('#cpf').val(provider.cpf);
    $('#birth-date').val(ConvertUtil.birthDateToSetModal(provider.birthDate.toString()));
    $('#public-area').val(provider.address.publicArea);
    $('#city').val(provider.address.city);
    $('#state').val(provider.address.state);
    $('#cep').val(provider.address.postalCode);
    $('#phone-number').val(provider.contact.phoneNumber);
    $('#cell-number').val(provider.contact.cellNumber);
    $('#email').val(provider.contact.emailAddress);
    $('#education').val([provider.education.toLowerCase()]);
    $('#marital-status').val([provider.maritalStatus.toLowerCase()]);
    $('input[name=gender]').val([provider.gender.toLowerCase()]);

    $('#personModal').modal('show');
  }

  deletePerson = (personId: any, tableRowIndex: any) => {
    var canDeleteProvider = confirm('Deseja realmente excluir os dados deste prestador?');
    if (canDeleteProvider) {
      this.providerService.deleteProviderById(personId)
        .subscribe(() => {
          this.persons.splice(tableRowIndex, 1);
        });
    }
  }

  constructor(public providerService: ProviderService) { }

  ngOnInit(): void {
    this.findAllProviders();
    this.clearAllFieldsWhenModalCloses();
  }

  private findAllProviders(): void {
    this.providerService.getAllProviders()
      .subscribe((providers) => {
        this.persons = (providers as any).data;
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
    });

    this.hasEditPerson = false;
  }

}
