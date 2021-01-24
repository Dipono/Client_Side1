import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { MyserviceService } from '../myservice.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private _activatedRoute: ActivatedRoute,
    private router: Router,
    private myservice: MyserviceService) { }

    title = 'Patient Records';

  getPatientDetails(loginForm: NgForm) {
    //this.router.navigate(['patient-details', loginForm.value.idNumber]);
  }

  logout() {
    //this.router.navigate(['welcome-page']);
  }
  registerPatient() {
    //this.router.navigate(['patient-registration']);
  }

  ngOnInit(): void {
  }

}
