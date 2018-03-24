import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { VehiculosComponent } from './vehiculos/vehiculos.component';


@NgModule({
  declarations: [
    AppComponent,
    VehiculosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
