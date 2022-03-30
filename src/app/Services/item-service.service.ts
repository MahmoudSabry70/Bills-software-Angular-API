import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { ApiModel } from '../Model/ApiModel';
import { Item } from '../Model/item';
import { GenericAPIHandlerService } from './generic-apihandler.service';

@Injectable({
  providedIn: 'root',
})
export class ItemServiceService {
  APIRoute: string;

  constructor(private genericAPIHandlerService: GenericAPIHandlerService) {
    this.APIRoute = 'Items/Item';
  }
  getAllItems(): Observable<ApiModel> {
    return this.genericAPIHandlerService.getAll(this.APIRoute);
  }
  getItemById(id: number): Observable<ApiModel> {
    return this.genericAPIHandlerService.getByID(id, this.APIRoute);
  }
  addItem(Item: Item) {
    return this.genericAPIHandlerService.add(Item, this.APIRoute);
  }
}
