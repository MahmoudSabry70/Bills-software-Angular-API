import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { ApiModel } from '../Model/ApiModel';
import { TypeView } from '../Model/type-view';
import { GenericAPIHandlerService } from './generic-apihandler.service';

@Injectable({
  providedIn: 'root',
})
export class TypeDataService {
  APIRoute: string;

  constructor(private genericAPIHandlerService: GenericAPIHandlerService) {
    this.APIRoute = 'TypeData/Type';
  }
  getAllTypes(): Observable<ApiModel> {
    return this.genericAPIHandlerService.getAll(this.APIRoute);
  }
  getTypeById(id: number): Observable<ApiModel> {
    return this.genericAPIHandlerService.getByID(id, this.APIRoute);
  }
  addType(TypeView: TypeView) {
    return this.genericAPIHandlerService.add(TypeView, this.APIRoute);
  }
  getTypesByCompanyId(id: number): Observable<ApiModel> {
    this.APIRoute = 'TypeData/TypesByCompanyId';
    return this.genericAPIHandlerService.getByID(id, this.APIRoute);
  }
  Uniqetype(TypeView: TypeView): Observable<ApiModel> {
    return this.genericAPIHandlerService.Uniqetype(
      `TypeData/uniqeName/${TypeView.name}/${TypeView.companyId}`
    );
  }
}
