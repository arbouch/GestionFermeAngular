import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { RaceDetailsComponent} from './race-details/race-details.component';
import { VeterinaireDetailsComponent } from './veterinaire-details/veterinaire-details.component';


const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
    {path: 'race',
    component: RaceDetailsComponent
    },
    {path: 'veto',
    component: VeterinaireDetailsComponent
    },
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }