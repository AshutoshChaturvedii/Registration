import { Component, OnInit } from '@angular/core';
import {OwnerForCreation} from './registration.model'
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {MatDialog, MatDialogModule} from '@angular/material/dialog'
import { MatDialogConfig } from '@angular/material/dialog';
import {MyModalComponent} from 'src/app/my-component/my-component.component'
@Component({
  selector: 'app-registration-component',
  templateUrl: './registration-component.component.html',
  styleUrls: ['./registration-component.component.css']
})
export class RegistrationComponentComponent implements OnInit {
  Genders: string[] = ['Male', 'Female'];
  checkbox = false;
  public ownerForm!: FormGroup;


  ngOnInit() {
  
    this.ownerForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.maxLength(60),Validators.pattern('^[a-zA-Z ]*$')]),
      lname: new FormControl('', [Validators.required, Validators.maxLength(60),Validators.pattern('^[a-zA-Z ]*$')]),
      address: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]),
      password: new FormControl('', [Validators.required, Validators.maxLength(10),Validators.minLength(6)]),
      gender : new FormControl('', [Validators.required]),
      checkbox:  new FormControl('', [Validators.required]),
    });
   
}
public hasError = (controlName: string, errorName: string) =>{
  return this.ownerForm.controls[controlName].hasError(errorName);
}
public Register = (ownerFormValue: { name: any; }) => {
  if (this.ownerForm.valid) {

    this.executeOwnerCreation(ownerFormValue);
    let message="Registration successful";
    //this.toastr.success(message);
  }
}

private executeOwnerCreation = (ownerFormValue: { name: any; }) => {
  let owner: OwnerForCreation = {
    name: ownerFormValue.name
    
  }
}

constructor(public dialog: MatDialog) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(MyModalComponent, {
      width: '600px',
      height: '480px',
      data: { }
    });

}

}