import { Component, OnDestroy, OnInit, ViewChild , TemplateRef } from '@angular/core';

import { NgForm } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { BehaviorSubject, Subscription } from 'rxjs';
import { ContactService } from './contact.service';
import { Results } from './results';
import { UpdateComponent } from './update/update.component';
import { Observable } from 'rxjs';
import { timer } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'test';
  subscription!: Subscription;
  everyFiveSeconds: Observable<number> = timer(0, 1000);
  searchText = '';


  userId!:string;
  allUsers!: Results[];
  public search: any = '';
  locked: any[] = [];
   allUsers$! : Observable<Results[]>
  @ViewChild('f') form!:NgForm 
 
  data: any = {
    name: null,
    email: null,
    subject: null,
    message: null,
  };
  refreshUsers$ = new BehaviorSubject<boolean>(true);
  @ViewChild('callAPIDialog') callAPIDialog!: TemplateRef<any>;
  // allUsers:any;
  constructor(private contactService:ContactService,public dialog: MatDialog) { }
 
  openDialog(id:string): void {
    
    const dialogRef = this.dialog.open(UpdateComponent, {
      
      width: '250px',
    
     
     });

    dialogRef.afterClosed().subscribe(result => {
   
    
    });
  }
  callAPI(id:string) {
    let dialogRef = this.dialog.open(this.callAPIDialog);
    dialogRef.afterClosed().subscribe(result => {
        // Note: If the user clicks outside the dialog or presses the escape key, there'll be no result
        // this.updateData(id);{ 
        //   this.userId=id;
        //  let currentData = this.allUsers.find((p) =>{return p.id === id});
        //  console.log(this.form)
        // this.form.setValue({
        //   name: currentData!.name,
        //   email: currentData!.email,
        //   subject: currentData!.subject,
        //   message: currentData!.message,
        // });
        // }
    })
}

  ngOnInit(): void {
    this.subscription = this.everyFiveSeconds.subscribe(() => {
      this.contactService.getData().subscribe((res: any[]) => {
        this.allUsers = res;

        
      })
    });
  
   this.contactService.updateData(this.userId,this.data)


    this.allUsers$=this.contactService.getData()

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
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
