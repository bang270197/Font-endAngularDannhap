import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
 // kiem tra xe user chuyen vao co trung voi ten trong mang
export function invalisuer(c: AbstractControl) {
  const users = ['abc' , 'qwe'];
  return (users.includes(c.value)) ?
  {
    invalisuer: true
  } : null;
}

@Component({
  selector: 'app-dangky',
  templateUrl: './dangky.component.html',
  styleUrls: ['./dangky.component.css']
})
export class DangkyComponent implements OnInit {
  registerForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    // this.registerForm = this.fb.group({
    //   email: ['', [Validators.required, Validators.email]],
    //   pwGroup: this.fb.group({
    //     password: ['', [Validators.required, Validators.minLength(6)]],
    //     confirmPassword: ['', [Validators.required, Validators.minLength(6)]]
    //   }, {validator: comparePassword}),
    //   country: ['', Validators.required],
    //   age: ['', [Validators.required, Validators.min(18)]],
    //   gender: ['', Validators.required],
    //   phone: ['', [Validators.required, Validators.pattern(/^\+84\d{9,10}$/)]]
    // });
    // function comparePassword(c: AbstractControl) {
    //   const v = c.value;
    //   return (v.password === v.confirmPassword) ? null : {
    //     passwordnotmatch: true
    //   };
    // }
    // // update form state
    // this.registerForm.patchValue({
    //   email: 'info@example.com'
    // });



    this.registerForm = this.fb.group({
      name: [ '', [Validators.required, Validators.minLength(2), invalisuer]],
      email: [ '', [Validators.required, Validators.email]],
      social: this.fb.group({
        facebook: [ '', [Validators.required, Validators.minLength(6)]],
        twitter: [ '', [Validators.required, Validators.minLength(6)]],
        website: [ '', [Validators.required, Validators.minLength(6)]]
      },
        ),
      tel: [ '', [Validators.required, Validators.pattern(/^(0){1}\d{9,10}$/)]]

    });
  }

  onSubmit() {
    console.log(this.registerForm);
  }

}
