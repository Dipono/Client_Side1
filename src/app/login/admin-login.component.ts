import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormGroup, FormControl, NgForm, Validators } from '@angular/forms';
import { MyserviceService } from '../myservice.service';
import {RouterModule,Router, ActivatedRoute} from '@angular/router';
import { ValidateService } from '../validate.service';


@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {
  loginForm: FormGroup;
  myMessage= '';

  constructor(private _myservice:MyserviceService,  
    private _router:Router, 
    private _activatedRoute: ActivatedRoute,
    private _validate: ValidateService) { 
      this.loginForm = new FormGroup({
        adminPasswrd : new FormControl(null, Validators.required),
        adminId : new FormControl(null, Validators.required)
      });
    }

  ngOnInit(): void {
  }

  
  isValid(controlName){
    return this.loginForm.get(controlName).invalid && this.loginForm.get(controlName).touched
  }

  login() {
    if(this.loginForm.value.adminId == null || this.loginForm.value.adminPasswrd == null){
      console.log('Fill all the field')
      return this.myMessage='Fill all the field(s)'
    }
    else{
      console.log(this.loginForm.value);

    this._myservice.submitLoginAdmin(this.loginForm.value)
    .subscribe(
      data => {
        console.log(data);
        console.log('Successfully Login');
        //localStorage.setItem('token',data.toString());
        this._router.navigate(['/admin']);
        
      },
      error => {
      console.log('Cannot Login');
         return this.myMessage = 'Wrong Admin Id or Password';
      }
    )
    }

  }

  moveBack(){
    this._router.navigate(['/home'])
  }

}
