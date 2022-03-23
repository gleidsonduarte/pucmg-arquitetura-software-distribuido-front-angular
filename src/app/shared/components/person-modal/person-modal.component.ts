import { AddressService } from '../../../core/services/address/address.service';
import { Component, Input } from '@angular/core';

declare var $: any;

@Component({
  selector: 'app-person-modal',
  templateUrl: './person-modal.component.html',
  styleUrls: ['./person-modal.component.scss']
})
export class PersonModalComponent {

  @Input() title: string = '';
  @Input() savePerson: any;
  @Input() alertMessage: string = '';

  constructor(public addressService: AddressService) { }

  openingModal(): void {
    $('#personModal').modal('show');
  }

  searchCEP(cep: string): void {
    if (cep.length < 8 || cep.length > 10) {
      this.clearAddressFields();
      this.alertMessage = 'Por favor digite um CEP válido!';
      return;
    }

    let replaceCEP = cep.replace('.', '').replace('-', '');
    this.addressService.getAddressByCEP(replaceCEP)
      .subscribe(
        address => {
          let newAddress = (address as any).data;
          $('input[id=public-area]').val(newAddress.publicArea);
          $('input[id=city]').val(newAddress.city);
          $('input[id=state]').val(newAddress.state);
        },
        error => {
          this.clearAddressFields();
        }
      );
  }

  private clearAddressFields(): void {
    $('#cep').val('');
    $('#area').val('');
    $('#city').val('');
    $('#state').val('');
  }

}
