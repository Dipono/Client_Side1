import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
   title = 'practice';
   closeResult = '';

  constructor( private router:Router) { }

  ngOnInit(): void {

  }

  moveToAminLogin(){
    this.router.navigate(['/adminLog'])
  }

  moveToDoctorLogin(){
    this.router.navigate(['/doctorLog'])
  }

}
