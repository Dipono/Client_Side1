import { Component, OnInit } from '@angular/core';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-home-book',
  templateUrl: './home-book.component.html',
  styleUrls: ['./home-book.component.css']
})
export class HomeBookComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  moveToAdmin(){
    this.router.navigate(['/admin']);
  }

  logout(){

  }

  onMakeBooking(){
    this.router.navigate(['/booking']);
  }

}
