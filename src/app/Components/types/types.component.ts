import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import {
  AbstractControl,
  AsyncValidatorFn,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { delay } from 'rxjs';
import { typeUniqeValidator } from 'src/app/CustomValidators/UniqeValidator';
import { CompanyData } from 'src/app/Model/company-data';
import { TypeView } from 'src/app/Model/type-view';
import { CompanyDataService } from 'src/app/Services/company-data-service.service';
import { TypeDataService } from 'src/app/Services/type-data-service.service';

@Component({
  selector: 'app-types',
  templateUrl: './types.component.html',
  styleUrls: ['./type.css'],
})
export class TypesComponent implements OnInit, OnChanges {
  typeForm: FormGroup;
  companyList: CompanyData[];
  typeView: TypeView;
  public showConfirm: boolean;

  constructor(
    private companyService: CompanyDataService,
    private TypeDataService: TypeDataService,
    private fb: FormBuilder
  ) {
    this.showConfirm = false;
    this.companyService.getAllCompany().subscribe((ApiModel) => {
      this.companyList = ApiModel.data;
    });
    this.typeView = {} as TypeView;

    this.typeForm = fb.group(
      {
        companyId: ['', [Validators.required]],
        typeName: ['', [Validators.required]],
        notes: [''],
      },
      { asyncValidator: typeUniqeValidator(TypeDataService) }
    );
  }
  get companyId() {
    return this.typeForm.get('companyId');
  }
  get typeName() {
    return this.typeForm.get('typeName');
  }
  get notes() {
    return this.typeForm.get('notes');
  }
  updateTypeNameValidators() {
    if (this.typeForm.errors?.['alreadyExist'] != null) {
      this.typeName?.setErrors({ alreadyExist: true });
    } else {
      this.typeName.setErrors(null);
    }
  }

  addType() {
    if (this.typeForm.valid == true && this.typeName.value != null) {
      this.typeView.name = this.typeName.value;
      this.typeView.notes = this.notes.value;
      this.typeView.companyId = this.companyId.value;

      this.TypeDataService.addType(this.typeView).subscribe((ApiModel) => {});
      this.typeForm.reset();
      this.showConfirm = true;
      setTimeout(() => (this.showConfirm = false), 1500);
    }
  }

  ngOnInit(): void {}
  ngOnChanges(changes: SimpleChanges): void {}
}
