import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor(private _activatedRoute: ActivatedRoute,
              private _router: Router) { }

  onMakeBookingButtonClick(): void{
    this._router.navigate(['/booking']/*,{relativeTo:this._activatedRoute}*/)
  }

  onMAddPatientgButtonClick(): void{
    this._router.navigate(['/register']/*,{relativeTo:this._activatedRoute}*/)
  }

  ngOnInit(): void {
  }

}
