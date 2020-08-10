import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { VeterinaireDetailsComponent } from './veterinaire-details/veterinaire-details.component';
import { VeterinairelistComponent } from './veterinaire-details/veterinairelist/veterinairelist.component';
import { VeterinairedetailComponent } from './veterinaire-details/veterinairedetail/veterinairedetail.component';

@NgModule({
  declarations: [
    AppComponent,
    VeterinaireDetailsComponent,
    VeterinairelistComponent,
    VeterinairedetailComponent,
   ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
