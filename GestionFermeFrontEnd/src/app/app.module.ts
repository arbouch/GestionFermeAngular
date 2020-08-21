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
import { ToastrModule } from 'ngx-toastr';
import { RaceDetailsComponent } from './race-details/race-details.component';
import { RaceDetailComponent } from './race-details/race-detail/race-detail.component';
import { RaceDetailListComponent } from './race-details/race-detail-list/race-detail-list.component';
import {AppRoutingModule} from './app-routing.module';
import { FermeDetailsComponent } from './ferme-details/ferme-details.component';
import { FermeDetailComponent } from './ferme-details/ferme-detail/ferme-detail.component';
import { FermeListDetailComponent } from './ferme-details/ferme-list-detail/ferme-list-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    VeterinaireDetailsComponent,
    VeterinairelistComponent,
    VeterinairedetailComponent,
    RaceDetailsComponent,
    RaceDetailComponent,
    RaceDetailListComponent,
    FermeDetailsComponent,
    FermeDetailComponent,
    FermeListDetailComponent,
   ],
  imports: [
    BrowserModule, FormsModule,HttpClientModule,BrowserAnimationsModule,PipeSearchByModule,NgxPaginationModule, ToastrModule.forRoot(),AppRoutingModule
  ],
  providers: [VeterinaireDetailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
