import ApiMicConfigs from 'src/app/core/configs/ApiMicConfigs';
import { AssociateInterface } from 'src/app/shared/models/AssociateInterface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AssociateService {

  constructor(private http: HttpClient) { }

  getAssociateByName(associateName: string) {
    return this.http
      .get<AssociateInterface>(`${ApiMicConfigs.basePath}/v1/associate/first-name/${associateName}`, {
        headers: ApiMicConfigs.headers }
      );
  }

  getAllAssociates() {
    return this.http.get<AssociateInterface[]>(`${ApiMicConfigs.basePath}/v1/associate`, {
      headers: ApiMicConfigs.headers
    });
  }

  saveAssociate(associate: AssociateInterface) {
    return this.http.post(`${ApiMicConfigs.basePath}/v1/associate`, associate, {
      headers: ApiMicConfigs.headers
    });
  }

  updateAssociate(associate: AssociateInterface) {
    return this.http.put(`${ApiMicConfigs.basePath}/v1/associate`, associate, {
      headers: ApiMicConfigs.headers
    });
  }

  deleteAssociateById(id: string) {
    return this.http.delete(`${ApiMicConfigs.basePath}/v1/associate`, {
      headers: ApiMicConfigs.headers, body: { id: id }
    });
  }
}
