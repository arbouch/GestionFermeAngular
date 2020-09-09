import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { RaceDetailsComponent} from './race-details/race-details.component';
import { VeterinaireDetailsComponent } from './veterinaire-details/veterinaire-details.component';
import { FermeDetailsComponent } from './ferme-details/ferme-details.component';
import { CategorieDetailsComponent } from './categorie-details/categorie-details.component';



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
    {path: 'Ferme',
    component: FermeDetailsComponent
    },
    {path: 'categorie',
    component: CategorieDetailsComponent
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