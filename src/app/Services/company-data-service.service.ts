import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ApiModel } from '../Model/ApiModel';
import { CompanyData } from '../Model/company-data';
import { GenericAPIHandlerService } from './generic-apihandler.service';

@Injectable({
  providedIn: 'root',
})
export class CompanyDataService {
  APIRoute: string;

  constructor(private genericAPIHandlerService: GenericAPIHandlerService) {
    this.APIRoute = 'companyData/Company';
  }
  getAllCompany(): Observable<ApiModel> {
    return this.genericAPIHandlerService.getAll(this.APIRoute);
  }
  getCompanyById(id: number): Observable<ApiModel> {
    return this.genericAPIHandlerService.getByID(id, this.APIRoute);
  }
  addCompany(companyData: CompanyData) {
    return this.genericAPIHandlerService.add(companyData, this.APIRoute);
  }
  uniqeName(name: string) {
    return this.genericAPIHandlerService.UniqeName(
      name,
      'companyData/uniqeName'
    );
  }

  // getAllCompany(): Observable<ApiModel> {
  //   return this.httpClint.get<ApiModel>(
  //     `${environment.APIURL}companyData/Company`
  //   );
  // }
  // getCompanyById(id: number): Observable<ApiModel> {
  //   return this.httpClint.get<ApiModel>(
  //     `${environment.APIURL}companyData/Company/${id}`
  //   );
  // }
  // addCompany(companyData: CompanyData) {
  //   return this.httpClint.post(
  //     `${environment.APIURL}companyData/Company`,
  //     JSON.stringify(companyData),
  //     this.httpOptions
  //   );
  // }
}
