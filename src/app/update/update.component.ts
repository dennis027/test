import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DesignComponent } from '../design/design.component';
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
allUsers:any;
form:any = {
  name:null,
  email:null,
  subject:null,
  message:null
}
  constructor(private contactService:ContactService, public dialogRef: MatDialogRef<DesignComponent>,
  ) { }

  ngOnInit(): void {
    this.contactService.getData().subscribe((res: any[]) => {
      this.allUsers = res;
      console.log(this.allUsers)
  
     
    })
  }
  onSubmit(): void{
    let {name,email,subject,message}= this.form;
    this.contactService.updateData(name,email,/*subject,message*/)
    }
  onNoClick(): void {
    this.dialogRef.close();
  }
  //   onSubmit(): void{
      
  //     let {name,email,subject,message}= this.form;
  //   this.contactService.updateData(this.form,id).subscribe(
  //     (data) => {
  //       console.log(data)
       
       
  //     },
  //     (err) => {
  //      console.log(err)
        
  //     });
  //   }
  // onNoClick(): void {
  //   this.dialogRef.close();
  // }
}
