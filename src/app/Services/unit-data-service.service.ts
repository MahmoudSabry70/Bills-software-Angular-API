import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { ApiModel } from '../Model/ApiModel';
import { UnitData } from '../Model/unitData';
import { GenericAPIHandlerService } from './generic-apihandler.service';

@Injectable({
  providedIn: 'root',
})
export class UnitDataService {
  APIRoute: string;

  constructor(private genericAPIHandlerService: GenericAPIHandlerService) {
    this.APIRoute = 'units/unit';
  }
  getAllUnits(): Observable<ApiModel> {
    return this.genericAPIHandlerService.getAll(this.APIRoute);
  }
  getUnitById(id: number): Observable<ApiModel> {
    return this.genericAPIHandlerService.getByID(id, this.APIRoute);
  }
  addUnit(Unit: UnitData) {
    return this.genericAPIHandlerService.add(Unit, this.APIRoute);
  }
  uniqeName(name: string) {
    return this.genericAPIHandlerService.UniqeName(name, 'Units/uniqeName');
  }
}
