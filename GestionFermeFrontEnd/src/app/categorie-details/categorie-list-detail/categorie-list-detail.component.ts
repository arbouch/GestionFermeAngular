import { Component, OnInit } from '@angular/core';
import { CategorieDetailService } from './../../shared/categorie-detail.service';
import { CategorieDetail  } from './../../shared/categorie-detail.model';
 
import { ToastContainerModule, ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-categorie-list-detail',
  templateUrl: './categorie-list-detail.component.html',
  styles: [
  ]
})
export class CategorieListDetailComponent implements OnInit {
  p:number=1;
  constructor(public service : CategorieDetailService , private toast :ToastrService) { }

  ngOnInit(): void {
    this.service.refreshList()

  }
  refrech() {
    
    return this.service.refreshList();
  }
  txtValue:string = null;

  onTextChange(value)
  {
    this.service.formData.categorieLabelle = value;
    if(this.service.formData.categorieLabelle == '')
    {
      this.service.refreshList()
    }
  }
    search() {

    
      this.service.list = this.service.list.filter(res =>  {
       return res.categorieLabelle.toLocaleLowerCase().match(this.service.formData.categorieLabelle.toLocaleLowerCase());
 
     })
   }
   
   populateForm(pd:CategorieDetail){
     this.service.formData=Object.assign({},pd)
       }
       onDelete(IDVet){
         if(confirm('Etes vous sur de vouloir supprimer ?'+IDVet)
         )
         {
         this.service.deleteCategorie(IDVet).subscribe(res =>  {this.service.refreshList();
  this.toast.warning("Suppression avec succees",'Suppression Categorie');
         } ,
           err=> {
             console.log(err)
           })
       }
     }
     }
