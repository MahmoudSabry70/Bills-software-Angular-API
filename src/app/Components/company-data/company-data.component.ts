import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
import { UniqeValidator } from 'src/app/CustomValidators/UniqeValidator';
import { CompanyData } from 'src/app/Model/company-data';
import { CompanyDataService } from 'src/app/Services/company-data-service.service';

@Component({
  selector: 'app-company-data',
  templateUrl: './company-data.component.html',
  styleUrls: ['./style.css'],
})
export class CompanyDataComponent implements OnInit, OnChanges {
  public companyForm: FormGroup;
  public companyData: CompanyData;
  public showConfirm: boolean;

  constructor(
    private CompanyService: CompanyDataService,
    private fb: FormBuilder
  ) {
    this.companyData = {} as CompanyData;
    this.showConfirm = false;
    this.companyForm = new FormGroup({
      companyName: new FormControl(
        '',
        [Validators.required],
        [UniqeValidator(this.CompanyService)]
      ),
      notes: new FormControl(''),
    });
  }
  ngOnChanges(changes: SimpleChanges): void {}

  ngOnInit(): void {}

  get companyName() {
    return this.companyForm.get('companyName');
  }
  get notes() {
    return this.companyForm.get('notes');
  }
  addCompany() {
    if (this.companyForm.valid && this.companyName != null) {
      this.companyData.name = this.companyName.value;
      this.companyData.note = this.notes.value;
      this.companyData.id = 0;

      this.CompanyService.addCompany(this.companyData).subscribe(
        (ApiModel) => {}
      );
      this.companyForm.reset();
      this.showConfirm = true;
      setTimeout(() => (this.showConfirm = false), 1500);
    }
  }
}
