import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';
import { FormsModule }   from '@angular/forms';
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

  // items: any = [{
  //   title: 'Abc',
  //   items_containers : [{
  //            title: 'edf',
  //            items_containers: [{
  //                 title: 'pqr',
  //                 items_containers: [
  //                 ]
  //            }]
  //   }]
  // }, {
  //   title: 'TTT',
  //   items_containers : [{
  //            title: 'edf',
  //            items_containers: [{
  //                 title: 'pqr',
  //                 items_containers: [
  //                 ]
  //            }]
  //   }]
  // }, {
  //   title: 'ZZZ',
  //   items_containers : [{
  //            title: 'edf',
  //            items_containers: [{
  //                 title: 'pqrr',
  //                 items_containers: [
  //                 ]
  //            }]
  //   }]
  // }];
  // searchText: string;

  allUsers!: Results[];
  public search: any = '';
  locked: any[] = [];
  
 
  newData: any = {
    name: null,
    email: null,
    subject: null,
    message: null,
  };
  // allUsers:any;
  constructor(private contactService:ContactService,public dialog: MatDialog) { }
  openDialog(id:any): void {
    const dialogRef = this.dialog.open(UpdateComponent, {
      width: '250px',
    
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    
    });
  }
  ngOnInit(): void {
  


    this.contactService.getData().subscribe((res: any[]) => {
      this.allUsers = res;
      console.log(this.allUsers)
    })
    

  }

  // deleteData(id:any){
  //   this.contactService.deleteData(id)
  //   .subscribe(book=>{
  //     // this.getsoftBooks();
  //   })
  // }
  deleteData(id:any) {
    this.contactService.deleteData(id).subscribe(
      (msg) => console.log(msg),
      (error) => console.log(error)
    );
   
  }
  updateData(id:any) {
    this.contactService.updateData(this.newData, id).subscribe(
      (msg) => console.log(msg),
      (error) =>console.log(error)
    )
  }
  
}

