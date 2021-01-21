import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormGroup, FormControl, NgForm, Validators } from '@angular/forms';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-patient-chronic',
  templateUrl: './patient-chronic.component.html',
  styleUrls: ['./patient-chronic.component.css']
})
export class PatientChronicComponent implements OnInit {

  patientDetail: FormGroup;
  constructor() { 
    this.patientDetail = new FormGroup({
      patientId: new FormControl(null, Validators.required),
      patientName : new FormControl(null, Validators.required),
      patientSurname: new FormControl(null, Validators.required),
      bldTypeName: new FormControl(null, Validators.required),
      chronicName: new FormControl(null, Validators.required),
      details: new FormControl(null, Validators.required)
    });
  }

  ngOnInit(): void {
  }

  isValid(controlName) {
    return this.patientDetail.get(controlName).invalid && this.patientDetail.get(controlName).touched;
  }

}
