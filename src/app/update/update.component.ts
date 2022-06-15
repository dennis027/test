import { Component, OnInit, ViewChild } from '@angular/core';
import { ContactService } from '../contact.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DesignComponent } from '../design/design.component';
import { NgForm } from '@angular/forms';
import { Results } from '../results';
@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  
  userId!:string;
  allUsers!: Results[];
  public search: any = '';
  locked: any[] = [];
  // form:any
  @ViewChild('f') form!:NgForm 
 
  data: any = {
    name: null,
    email: null,
    subject: null,
    message: null,
  };
  constructor(private contactService:ContactService, public dialogRef: MatDialogRef<DesignComponent>,
  ) { }

  ngOnInit(): void {
    this.contactService.getData().subscribe((res: any[]) => {
      this.allUsers = res;
      console.log(this.allUsers)
  
     
    })
  }
  updateData(id:string){
    this.userId=id;
   let currentData = this.allUsers.find((p) =>{return p.id === id});
   console.log(this.form)
  this.form.setValue({
    name: currentData!.name,
    email: currentData!.email,
    subject: currentData!.subject,
    message: currentData!.message,
  });
  }
  updateDem(id:any){
    this.contactService.updateData(id,this.data) 
  }
  onSubmit(value:any): void{
    let data = {
      name: value.name,
      email: value.email,
      subject:value.subject,
      message:value.message
    }
   
    this.contactService.updateData(this.userId,data)
   
  }
  
}
