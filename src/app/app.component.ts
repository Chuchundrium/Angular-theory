import {Component, OnInit} from '@angular/core';
import {FormArray, FormControl, FormGroup, Validators} from '@angular/forms';
import {MyValidators} from './my.validators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  myForm: FormGroup;

  ngOnInit(): void {
    this.myForm = new FormGroup({
      // FormControl(initial state, [sync validators], [async validators] )
      email: new FormControl('', [
        Validators.email,
        Validators.required,
        MyValidators.restrictedEmails
      ], [MyValidators.uniqEmail]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(5)
      ]),
      address: new FormGroup({
        country: new FormControl('il'),
        city: new FormControl('Jerusalem', [Validators.required])
      }),
      skills: new FormArray([]),
    });
  }

  submit() {
    if (this.myForm.valid) {
      console.log('Form submitted: ', this.myForm);
      const formData = {...this.myForm.value};
      console.log('Form Data', formData);
    }
  }

  setCapital() {
    const cityMap = {
      il: 'Jerusalem',
      ca: 'Ottawa',
      au: 'Canberra'
    };
    const cityKey = this.myForm.get('address').get('country').value;
    const city = cityMap[cityKey];
    this.myForm.patchValue({address: {city}});
  }

  addSkill() {
    const control = new FormControl('', Validators.required);
    // (<FormArray>this.myForm.get('skills')).push(control);
    (this.myForm.get('skills') as FormArray).push(control);
  }
}
