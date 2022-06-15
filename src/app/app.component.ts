import { Component } from '@angular/core';
import { ContactService } from './contact.service';
import * as $ from 'jquery';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'test';

  constructor(private contactService:ContactService) { }

 ngOnInit() {
                //Toggle Click Function
    $("#menu-toggle").click(function(e: { preventDefault: () => void; }) {
      e.preventDefault();
      $("#wrapper").toggleClass("toggled");
    });
  }

}

