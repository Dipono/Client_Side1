import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormGroup, FormControl, NgForm, Validators } from '@angular/forms';
import { MyserviceService } from '../myservice.service';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';
import { BloodType } from '../model/blood.models';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {

  myForm: FormGroup;
  bloodtype: BloodType[] = [{id :1, name: 'A+'}, 
                            {id :2, name: 'B+'},
                            {id :4, name: 'A-'},
                            {id :5, name: 'B-'},
                            {id :6, name: 'AB+'},
                            {id :7, name: 'AB-'},
                            {id :8, name: 'O+'},
                            {id :9, name: 'O-'}
 ];
  myMessage = '';


  constructor(private _myservice: MyserviceService, private router: Router) {
    this.myForm = new FormGroup({
      patientId: new FormControl(null, Validators.required),
      PatientName: new FormControl(null, Validators.required),
      PatientSurname: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.email, Validators.required]),
      phoneNumber: new FormControl(null, Validators.required),
      PatientAddress: new FormControl(null, Validators.required),
      dob: new FormControl(null, Validators.required),
      bldTypeId: new FormControl(null, Validators.required)
    });

  }

  ngOnInit(): void {
  }



  isValid(controlName) {
    return this.myForm.get(controlName).invalid && this.myForm.get(controlName).touched;
  }


  register() {
    if (this.myForm.value.patientId == null || this.myForm.value.PatientName == null || this.myForm.value.PatientSurname == null
      || this.myForm.value.email == null  || this.myForm.value.phoneNumber == null || this.myForm.value.PatientAddress == null
      || this.myForm.value.dob == null || this.myForm.value.bldTypeId == null) {
      console.log('Fill all the field');
      return this.myMessage = 'Fill all the field(s)';
    }
    else {
      for(var k = 0; k < this.bloodtype.length; k++){
        this.myForm.value.bldTypeId == k;
      }
      console.log(this.myForm.value);


      if (this.myForm.valid) {
        console.log(JSON.stringify(this.myForm.value))

        this._myservice.submitRegister(this.myForm.value)
          .subscribe(
            data => {
              this.myMessage = 'Registered Successfully';
              this.router.navigate(['/admin']);
            },
            error => this.myMessage = 'Cannot Register'

          )
      }


      else {
        console.log('invalid'); return;
      }
    }

  }

}
