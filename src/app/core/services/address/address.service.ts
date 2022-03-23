import ApiMicConfigs from 'src/app/core/configs/ApiMicConfigs';
import { AddressInterface } from 'src/app/shared/models/AddressInterface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddressService {

  constructor(private http: HttpClient) { }

  getAddressByCEP(address: string) {
    return this.http
      .get<AddressInterface>(`${ApiMicConfigs.basePath}/v1/address/postal-code/${address}`, {
        headers: ApiMicConfigs.headers
      });
  }
}
