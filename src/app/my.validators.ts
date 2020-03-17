import {FormControl} from '@angular/forms';

export class MyValidators {
  static restrictedEmails(control: FormControl): {[key: string]: boolean} {
    if (['test@mail.ru', 'test@test.ru'].includes(control.value)) {
      return { restrictedEmail: true };
    }

    // when everything is good
    return null;
  }
}
