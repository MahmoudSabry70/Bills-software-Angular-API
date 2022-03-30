import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UniqeValidator } from 'src/app/CustomValidators/UniqeValidator';
import { UnitData } from 'src/app/Model/unitData';
import { UnitDataService } from 'src/app/Services/unit-data-service.service';

@Component({
  selector: 'app-all-units',
  templateUrl: './all-units.component.html',
  styleUrls: ['./style.css'],
})
export class AllUnitsComponent implements OnInit {
  public showConfirm: boolean;
  public unitForm: FormGroup;
  public unitData: UnitData;
  constructor(
    private formBuilder: FormBuilder,
    private unitDataService: UnitDataService
  ) {
    this.showConfirm = false;
    this.unitData = {} as UnitData;
    this.unitForm = this.formBuilder.group({
      unitName: [
        '',
        [Validators.required],
        [UniqeValidator(this.unitDataService)],
      ],
      notes: [''],
    });
  }
  get unitName() {
    return this.unitForm.get('unitName');
  }
  get notes() {
    return this.unitForm.get('notes');
  }

  addUnit() {
    this.unitData.name = this.unitName.value;
    this.unitData.note = this.notes.value;
    this.unitDataService.addUnit(this.unitData).subscribe((ApiModel) => {});
    this.unitForm.reset();
    this.showConfirm = true;
    setTimeout(() => (this.showConfirm = false), 1500);
  }

  ngOnInit(): void {}
}
