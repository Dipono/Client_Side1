import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormGroup, FormControl, NgForm, Validators } from '@angular/forms';
import { MyserviceService } from '../myservice.service';
import { RouterModule, Router, ActivatedRoute } from '@angular/router';
import { ValidateService } from '../validate.service';

@Component({
  selector: 'app-doctor-login',
  templateUrl: './doctor-login.component.html',
  styleUrls: ['./doctor-login.component.css']
})
export class DoctorLoginComponent implements OnInit {
  loginForm: FormGroup;
  myMessage = '';
  constructor(private _myservice: MyserviceService,
    private _router: Router,
    private _activatedRoute: ActivatedRoute,
    private _validate: ValidateService) {
    this.loginForm = new FormGroup({
      doctorPasswrd: new FormControl(null, Validators.required),
      doctorId: new FormControl(null, Validators.required)
    });
  }

  ngOnInit(): void {
  }


  isValid(controlName) {
    return this.loginForm.get(controlName).invalid && this.loginForm.get(controlName).touched
  }

  login() {
    if (this.loginForm.value.doctorId == null || this.loginForm.value.doctorPasswrd == null) {
      console.log('Fill all the field')
      return this.myMessage = 'Fill all the field(s)'
    }
    else {
      console.log(this.loginForm.value);

      this._myservice.submitLoginDoctr(this.loginForm.value)
        .subscribe(
          data => {
            console.log(data);
            //localStorage.setItem('token',data.toString());
            this._router.navigate(['/record']);

          },
          error => {
            return this.myMessage = 'Wrong Doctor Id or Password';
          }
        )
    }

  }

  moveBack() {
    this._router.navigate(['/home'])
  }

}
