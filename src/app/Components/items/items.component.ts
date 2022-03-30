import {
  Component,
  DoCheck,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { CompanyData } from 'src/app/Model/company-data';
import { Item } from 'src/app/Model/item';
import { TypeData } from 'src/app/Model/typeData';
import { UnitData } from 'src/app/Model/unitData';
import { CompanyDataService } from 'src/app/Services/company-data-service.service';
import { TypeDataService } from 'src/app/Services/type-data-service.service';
import { UnitDataService } from 'src/app/Services/unit-data-service.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
})
export class ItemsComponent implements OnInit, OnChanges, DoCheck {
  item: Item;
  companyList: CompanyData[];
  typeList: TypeData[];
  alltypeList: TypeData[];
  unitList: UnitData[];
  constructor(
    private companyDataService: CompanyDataService,
    private typeService: TypeDataService,
    private uniteService: UnitDataService
  ) {
    this.item = {} as Item;
    this.companyDataService.getAllCompany().subscribe((ApiModel) => {
      this.companyList = ApiModel.data;
    });
    this.uniteService.getAllUnits().subscribe((ApiModel) => {
      this.unitList = ApiModel.data;
    });
    this.typeService.getAllTypes().subscribe((ApiModel) => {
      this.typeList = this.alltypeList = ApiModel.data;
    });
  }

  selectedCampanyId: number;
  updaeTypes(companyID: string) {
    console.log(companyID);
    if (Number(companyID) === 0) {
      this.typeList = this.alltypeList;
    } else {
      console.log(companyID + 'sadsss');
      this.typeService
        .getTypesByCompanyId(Number(companyID))
        .subscribe((ApiModel) => {
          this.typeList = ApiModel.data;
        });
    }
  }

  ngOnChanges(changes: SimpleChanges): void {}
  ngOnInit(): void {}
  ngDoCheck(): void {}
}
