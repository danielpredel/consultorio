import { AbstractControl, ValidationErrors } from "@angular/forms";

export class ValidacionesPersonalizadas {
    static minuscula(control: AbstractControl): ValidationErrors| null {
        let pass = control.value;
        let re = new RegExp('(?=.*[a-z])');
        if ( re.test(pass) )
            return null;
        else
            return { minuscula: true };
    }
    static mayuscula(control: AbstractControl): ValidationErrors| null {
        let pass = control.value;
        let re = new RegExp('(?=.*[A-Z])');
        if ( re.test(pass) )
            return null;
        else
            return { mayuscula: true };
    }
    static digito(control: AbstractControl): ValidationErrors| null {
        let pass = control.value;
        let re = new RegExp('(?=.*[0-9])');
        if ( re.test(pass) )
            return null;
        else
            return { digito: true };
    }
}
