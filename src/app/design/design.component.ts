import { Component, OnInit } from '@angular/core';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-design',
  templateUrl: './design.component.html',
  styleUrls: ['./design.component.css']
})
export class DesignComponent implements OnInit {

  allUsers:any;
  constructor(private contactService:ContactService) { }

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
}

