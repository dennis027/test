import { BrowserModule } from '@angular/platform-browser';

import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MatTabsModule } from '@angular/material/tabs';

import { NO_ERRORS_SCHEMA } from '@angular/core';

import { MatCardModule} from '@angular/material/card'; 
import { MatSliderModule } from '@angular/material/slider';

import { MatSidenavModule} from '@angular/material/sidenav';
import { OverlayModule } from '@angular/cdk/overlay';
import { CdkTreeModule } from '@angular/cdk/tree';
import { PortalModule } from '@angular/cdk/portal';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

import { MatButtonToggleModule } from '@angular/material/button-toggle';

import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatRippleModule } from '@angular/material/core';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';

import { MatInputModule } from '@angular/material/input';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatMenuModule } from '@angular/material/menu';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatSelectModule } from '@angular/material/select';
import { ToastrModule } from 'ngx-toastr'; 
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTreeModule } from '@angular/material/tree';
import { MatBadgeModule } from '@angular/material/badge';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatRadioModule } from '@angular/material/radio';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatTooltipModule } from '@angular/material/tooltip';
import { DesignComponent } from './design/design.component';


@NgModule({
  declarations: [
    AppComponent,
    DesignComponent,

  


  ],           
  imports: [ 
    BrowserAnimationsModule,
    HttpClientModule,  
    BrowserModule,
    AppRoutingModule,
    MatTabsModule,
    FormsModule,
     ReactiveFormsModule,
    FlexLayoutModule,
    AppRoutingModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatSliderModule,
    CdkTreeModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDividerModule,
    MatExpansionModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatProgressSpinnerModule,
    MatPaginatorModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatButtonToggleModule,
    MatTreeModule,
    OverlayModule,
    PortalModule,
    MatBadgeModule,
    MatGridListModule,
    MatRadioModule,
    MatDatepickerModule,
    MatTooltipModule,
    ToastrModule.forRoot(),
    // MatCarouselModule.forRoot(),
    BrowserAnimationsModule, 
    NgbModule,


  ],
  schemas: [NO_ERRORS_SCHEMA],
  exports: [
    MatTabsModule,
  
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
  ],
 
  providers: [], 
  bootstrap: [AppComponent],   
       

})
export class AppModule { }