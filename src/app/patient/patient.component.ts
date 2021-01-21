import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormGroup, FormControl, NgForm, Validators } from '@angular/forms';
import { MyserviceService } from '../myservice.service';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';
import { invalid } from '@angular/compiler/src/render3/view/util';
//import { Gender } from '../model/gender.models'

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {

  myForm: FormGroup;
  //gender: Gender[] = [{id :1, name: 'male'}, {id :2, name: 'female'}];
  gender: string[] = ['male','female'];

  myMessage = '';

  constructor(private _myservice: MyserviceService, private router: Router) {
    this.myForm = new FormGroup({
      patientId: new FormControl(null, Validators.required),
      PatientName: new FormControl(null, Validators.required),
      PatientSurname: new FormControl(null, Validators.required),
      gender: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.email, Validators.required]),
      phoneNumber: new FormControl(null, Validators.required),
      PatientAddress: new FormControl(null, Validators.required),
      dob: new FormControl(null, Validators.required)
     // bldTypeId: new FormControl(null, Validators.required)      
    });

    
  }

  ngOnInit(): void {
  }

  

  isValid(controlName) {
    return this.myForm.get(controlName).invalid && this.myForm.get(controlName).touched;
  }


  register() {
    console.log(this.myForm.value);

    //this.myForm.value.gender = this.gender;
    if(this.myForm.value.gender == 'female')
    {
      this.myForm.value.gender = this.gender[1];
    }
    else{
      this.myForm.value.gender = this.gender[0];
    }

 
    if (this.myForm.valid) {
      console.log(JSON.stringify(this.myForm.value))
      
      this._myservice.submitRegister(this.myForm.value)
        .subscribe(
          data => {
            this.myMessage = 'Registered Successfully';
            this.router.navigate(['/admin']);
          },
          error => this.myMessage = 'Not Registered'

        )
    }


    else {
      console.log('invalid'); return;
    }

  }

}
