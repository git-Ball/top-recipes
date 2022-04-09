import { AbstractControl } from "@angular/forms";

export function passwordMatch(passwordFormControl: AbstractControl) {
    return (repassFormControl: AbstractControl) => {
        if (passwordFormControl.value !== repassFormControl.value) {
            return {
                 passwordMatch: true 
                }
        }
        return null;
    }
}

