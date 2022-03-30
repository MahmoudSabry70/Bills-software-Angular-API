import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { ApiModel } from '../Model/ApiModel';
import { ClientData } from '../Model/clientData';
import { GenericAPIHandlerService } from './generic-apihandler.service';

@Injectable({
  providedIn: 'root',
})
export class ClintServiceService {
  APIRoute: string;

  constructor(private genericAPIHandlerService: GenericAPIHandlerService) {
    this.APIRoute = 'clients/client';
  }
  getAllClient(): Observable<ApiModel> {
    return this.genericAPIHandlerService.getAll(this.APIRoute);
  }
  getClientById(id: number): Observable<ApiModel> {
    return this.genericAPIHandlerService.getByID(id, this.APIRoute);
  }
  addClient(Client: ClientData) {
    return this.genericAPIHandlerService.add(Client, this.APIRoute);
  }
}
