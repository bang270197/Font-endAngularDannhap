import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Hero} from '../../hero/hero';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // Template-Driven Forms
  constructor() {
  }
  ngOnInit() {
  }
  onSubmit(val) {
    console.log( val.value);
  }
}
