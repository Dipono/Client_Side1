import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ValidateService {
 
  constructor() { }

  validateLogin(credentials){
    if(credentials.staffId == undefined || credentials.staffPassword){
      return false;
    }
    else{
      return true;
    }
  }

  validateRegistration(info){
    if(info.patientId == undefined || info.patientName == undefined || info.patientSurname == undefined || info.gender == undefined || info.dob == undefined || info.phoneNumber == undefined ||
       info.email == undefined  || info.PatientAddress == undefined){
         return false;
       }

       else{
         return true;
       }
  }


  validateEmail(email){
    const re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    return re.test(email);
  }
}
