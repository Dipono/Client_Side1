import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormGroup, FormControl, NgForm, Validators } from '@angular/forms';
import { MyserviceService } from '../myservice.service';
import {RouterModule,Router, ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-staff-login',
  templateUrl: './staff-login.component.html',
  styleUrls: ['./staff-login.component.css']
})
export class StaffLoginComponent implements OnInit {
  loginForm: FormGroup;
  myMessage = '';
  role: string[] = ['Doctor','Admin'];
  constructor(private _myservice:MyserviceService,  
              private _router:Router, 
              private _activatedRoute: ActivatedRoute) { 
    this.loginForm = new FormGroup({
      adminPasswrd : new FormControl(null, Validators.required),
      adminId : new FormControl(null, Validators.required),
      role : new FormControl(null, Validators.required)

    });
  }

  ngOnInit(): void {
  }

  isValid(controlName){
    return this.loginForm.get(controlName).invalid && this.loginForm.get(controlName).touched
  }



  login() {
    console.log(this.loginForm.value);
    if(this.loginForm.value.role == "Doctor")
    {
      this._router.navigate(['/doctor']);
    }

    else{
      this._myservice.submitLoginAdmin(this.loginForm.value)
      .subscribe(
        data => {
          console.log(data);
          //localStorage.setItem('token',data.toString());
          this._router.navigate(['/admin']/*,{relativeTo:this._activatedRoute}*/);
          
        },
        error => {
          return this.myMessage = 'Wrong Admin Id or Password';
        }
      )
    }
    
  }

}
