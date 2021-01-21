import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HomeComponent } from './home/home.component';
import { StaffLoginComponent } from './login/staff-login.component';
import { PatientComponent } from './patient/patient.component';
import { DoctorComponent } from './doctor/doctor.component';
import { RecordComponent } from './record/record.component';
import { AdminComponent } from './admin/admin.component';
import { BookingComponent } from './booking/booking.component';

import { MyserviceService } from './myservice.service';


/*const appRoute = [
  {path:'staff', component:StaffLoginComponent},
  {path:'patient', component:PatientLoginComponent},
  {path:'record', component:RecordComponent},
  {path:'admin', component:AdminComponent},
  {path:'booking', component:BookingComponent},
  {path:'patientForm',component:PatientComponent}

];*/

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StaffLoginComponent,
    PatientComponent,
    DoctorComponent,
    RecordComponent,
    AdminComponent,
    BookingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    //RouterModule.forRoot(appRoute),
    FontAwesomeModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ MyserviceService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
