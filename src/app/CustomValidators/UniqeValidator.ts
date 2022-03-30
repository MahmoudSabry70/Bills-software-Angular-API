import {
  AbstractControl,
  AsyncValidatorFn,
  ValidationErrors,
} from '@angular/forms';
import { map, Observable } from 'rxjs';
import { ApiModel } from '../Model/ApiModel';
import { TypeView } from '../Model/type-view';

//Custom Validator:
// https://angular.io/guide/form-validation#defining-custom-validators

/*
 Validator functions
  Validator functions can be either synchronous or asynchronous.

  Sync validators: Synchronous functions that take a control instance and immediately return either a set of validation errors or null. Pass these in as the second argument when you instantiate a FormControl.

  Async validators: Asynchronous functions that take a control instance and return a Promise or Observable that later emits a set of validation errors or null. Pass these in as the third argument when you instantiate a FormControl.
*/

/* It's not recommended to use this implementation
     to send the email list,
     INSTEAD, use Async validator to call API,
      that takes the email value and returns boolean
     https://angular.io/guide/form-validation#creating-asynchronous-validators
     https://www.concretepage.com/angular-2/angular-custom-async-validator-example#AsyncValidatorFn
     https://www.tektutorialshub.com/angular/angular-async-validator-example/
     https://www.thisdot.co/blog/using-custom-async-validators-in-angular-reactive-forms
     https://codinglatte.com/posts/angular/how-to-add-async-validators-to-an-angular-reactive-form/
  */

export function UniqeValidator(anyService): AsyncValidatorFn {
  return (control: AbstractControl): Observable<ValidationErrors | null> => {
    let validationError = { alreadyExist: true };

    if (control.value.length == 0 && control.untouched) return null;
    return anyService.uniqeName(control.value).pipe(
      map((ApiModel: ApiModel) => {
        return ApiModel.data ? validationError : null;
      })
    );
  };
}
export function typeUniqeValidator(typeService): AsyncValidatorFn {
  return (control: AbstractControl): Observable<ValidationErrors | null> => {
    let companyId = control.get('companyId');
    let typeName = control.get('typeName');
    let typeView: TypeView = {} as TypeView;
    typeView.companyId = companyId.value;
    typeView.name = typeName.value;
    let validationError = { alreadyExist: true };
    if (
      (companyId.value.length == 0 && companyId.untouched) ||
      (typeName.value.length == 0 && typeName.untouched)
    )
      return null;

    return typeService.Uniqetype(typeView).pipe(
      map((ApiModel: ApiModel) => {
        return ApiModel.data ? validationError : null;
      })
    );
  };
}
