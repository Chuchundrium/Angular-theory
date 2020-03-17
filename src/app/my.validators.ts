import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';

export class MyValidators {
  static restrictedEmails(control: FormControl): {[key: string]: boolean} {
    if (['test@mail.ru', 'test@test.ru'].includes(control.value)) {
      return { restrictedEmail: true };
    }

    // when everything is good
    return null;
  }

  static uniqEmail(control: FormControl): Promise<any> | Observable<any>{
    return new Promise(resolve => {
      setTimeout(() => {
        if (control.value === 'async@mail.ru') {
          resolve({uniqEmail: true});
        } else {
          resolve(null);
        }
      }, 1000);
    });
  }
}
