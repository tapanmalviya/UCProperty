import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatSliderModule} from '@angular/material/slider';
import { MatRadioModule } from '@angular/material/radio';

import { BasicPropertyInfoComponent } from './basic-property-info/basic-property-info.component';
import { BasicPropertyAddressComponent } from './basic-property-address/basic-property-address.component';
import { PropertyProfileInfoComponent } from './property-profile-info/property-profile-info.component';
import { PropertyPhotographsComponent } from './property-photographs/property-photographs.component';
import { PropertyPriceOthersComponent } from './property-price-others/property-price-others.component';
import { PropertyAmentiesComponent } from './property-amenties/property-amenties.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicPropertyInfoComponent,
    BasicPropertyAddressComponent,
    PropertyProfileInfoComponent,
    PropertyPhotographsComponent,
    PropertyPriceOthersComponent,
    PropertyAmentiesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSliderModule,
    MatRadioModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
