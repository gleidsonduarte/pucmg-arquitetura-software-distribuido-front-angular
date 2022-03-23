import ApiMicConfigs from 'src/app/core/configs/ApiMicConfigs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ProviderInterface } from 'src/app/shared/models/ProviderInterface';

@Injectable({
  providedIn: 'root'
})
export class ProviderService {

  constructor(private http: HttpClient) { }

  getProviderByName(providerName: string) {
    return this.http
      .get<ProviderInterface>(`${ApiMicConfigs.basePath}/v1/provider/first-name/${providerName}`, {
        headers: ApiMicConfigs.headers
      });
  }

  getAllProviders() {
    return this.http
      .get<ProviderInterface[]>(`${ApiMicConfigs.basePath}/v1/provider`, {
        headers: ApiMicConfigs.headers
      });
  }

  saveProvider(provider: ProviderInterface) {
    return this.http
      .post(`${ApiMicConfigs.basePath}/v1/provider`, provider, {
        headers: ApiMicConfigs.headers
      });
  }

  updateProvider(provider: ProviderInterface) {
    return this.http
      .put(`${ApiMicConfigs.basePath}/v1/provider`, provider, {
        headers: ApiMicConfigs.headers
      });
  }

  deleteProviderById(id: string) {
    return this.http
      .delete(`${ApiMicConfigs.basePath}/v1/provider`, {
        headers: ApiMicConfigs.headers,
        body: { id: id }
      });
  }
}
