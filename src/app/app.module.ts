import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NavheaderComponent } from './navheader/navheader.component';
import { SideheaderComponent } from './sideheader/sideheader.component';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';
import { CustomMaterialModule } from './core/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { FooterComponent } from './footer/footer.component';
import { UpcomingProductComponent } from './upcoming-product/upcoming-product.component';
import { ToysComponent } from './toys/toys.component';
import { KitchenSetComponent } from './kitchen-set/kitchen-set.component';
import { FootwearComponent } from './footwear/footwear.component';
import { ClothingComponent } from './clothing/clothing.component';
import { BabyGearComponent } from './baby-gear/baby-gear.component';
import { TravelStrollersComponent } from './travel-strollers/travel-strollers.component';
import { TeadyBearComponent } from './teady-bear/teady-bear.component';
import { OutletComponent } from './outlet/outlet.component';
import { AccessoriesComponent } from './accessories/accessories.component';
import { VehiclesComponent } from './vehicles/vehicles.component';

@NgModule({
  declarations: [
    AppComponent,
    NavheaderComponent,
    SideheaderComponent,
    FooterComponent,
    UpcomingProductComponent,
    ToysComponent,
    KitchenSetComponent,
    FootwearComponent,
    ClothingComponent,
    BabyGearComponent,
    TravelStrollersComponent,
    TeadyBearComponent,
    OutletComponent,
    AccessoriesComponent,
    VehiclesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CustomMaterialModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas  : [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ]
})
export class AppModule { }
