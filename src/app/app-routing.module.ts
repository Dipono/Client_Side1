import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { StaffLoginComponent } from './login/staff-login.component';
import { PatientComponent } from './patient/patient.component';
import { RecordComponent } from './record/record.component';
import { AdminComponent } from './admin/admin.component';
import { BookingComponent } from './booking/booking.component';
import { DoctorComponent } from './doctor/doctor.component';



const routes: Routes = [
  {path:'', redirectTo:'/home',pathMatch:'full'},
  {path:'home', component:HomeComponent},
  {path:'register', component:PatientComponent},
  {path:'login', component:StaffLoginComponent},
  {path:'record', component:RecordComponent},
  {path:'admin', component:AdminComponent},
  {path:'booking', component:BookingComponent},
  {path:'doctor', component:DoctorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
