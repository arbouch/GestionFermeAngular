import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { VeterinaireDetailsComponent } from './veterinaire-details/veterinaire-details.component';
import { VeterinairelistComponent } from './veterinaire-details/veterinairelist/veterinairelist.component';
import { VeterinairedetailComponent } from './veterinaire-details/veterinairedetail/veterinairedetail.component';
import {  HttpClientModule} from "@angular/common/http";
import { VeterinaireDetailService } from './shared/veterinaire-detail.service';
import { FormsModule } from '@angular/forms';
import { PipeSearchByModule } from "ngx-pipe-search-by";
import { NgxPaginationModule } from "ngx-pagination";
@NgModule({
  declarations: [
    AppComponent,
    VeterinaireDetailsComponent,
    VeterinairelistComponent,
    VeterinairedetailComponent,
   ],
  imports: [
    BrowserModule, FormsModule,HttpClientModule,BrowserAnimationsModule,PipeSearchByModule,NgxPaginationModule
  ],
  providers: [VeterinaireDetailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
