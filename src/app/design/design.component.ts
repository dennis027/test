import { Component, OnInit, ViewChild } from '@angular/core';
import { ContactService } from '../contact.service';
import { FormsModule, NgForm }   from '@angular/forms';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { UpdateComponent } from '../update/update.component';
import { Results } from '../results';

@Component({
  selector: 'app-design',
  templateUrl: './design.component.html',
  styleUrls: ['./design.component.css']
})
export class DesignComponent implements OnInit {
  searchText = '';


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
  // allUsers:any;
  constructor(private contactService:ContactService,public dialog: MatDialog) { }
  openDialog(id:string): void {
    
    const dialogRef = this.dialog.open(UpdateComponent, {
      
      width: '250px',
    
    
    });
    this.userId=id;
    let currentData = this.allUsers.find((p) =>{return p.id === id});
    console.log(this.form)
   this.form.setValue({
     name: currentData!.name,
     email: currentData!.email,
     subject: currentData!.subject,
     message: currentData!.message,
   });
    dialogRef.afterClosed().subscribe(result => {
   
    
    });
  }
  ngOnInit(): void {
  
  //  this.contactService.updateData(this.userId,this.data)

    this.contactService.getData().subscribe((res: any[]) => {
      this.allUsers = res;
      console.log(this.allUsers)
    })
    

  }



  deleteData(id:any) {
    this.contactService.deleteData(id).subscribe(
      (msg) => console.log(msg),
      (error) => console.log(error)
    );
   
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

