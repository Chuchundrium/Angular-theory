import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {User} from '../../shared/interfaces';
import {AuthService} from '../shared/services/auth.service';
import {ActivatedRoute, Params, Router} from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {
  form: FormGroup;
  submitted = false;
  needLoginMessage: string;

  constructor(public auth: AuthService,
              private router: Router, /* for redirect */
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe((params: Params) => {
      if (params.needLogin) {
        this.needLoginMessage = 'Please, fill email and password fields';
      }
    });
    this.form = new FormGroup({
      email: new FormControl(null, [
        Validators.required,
        Validators.email
      ]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(7)
      ])
    });
  }

  submit() {
    if (this.form.invalid) {
      return;
    }

    this.submitted = true;

    /* we will send this data to service and redirect if OK */
    const user: User = {
      email: this.form.value.email,
      password: this.form.value.password,
    };
    /* Firebase, "admin" data:
    ** email: test@gmail.com
    ** password: testtest */
    this.auth.login(user).subscribe(() => {
      this.form.reset();
      this.router.navigate(['/admin', 'dashboard']);
      this.submitted = false;
    }, () => {
      this.submitted = false;
    });
  }
}
