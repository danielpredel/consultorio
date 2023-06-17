import {
  AbstractControl
} from "@angular/forms";

export function passwordMatch(password: string, confirmacionPassword: string) {
  return function (form: AbstractControl) {
    const passwordValue = form.get(password)?.value;
    const confirmPasswordValue = form.get(confirmacionPassword)?.value;
    if (passwordValue === confirmPasswordValue) {
      return null;
    }
    else {
      return {
        passwordMismatchError: true
      }
    }
  }
}