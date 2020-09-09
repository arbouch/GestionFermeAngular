import { Component, OnInit } from '@angular/core';
import { ToastContainerModule, ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';
import { CategorieDetailService } from './../../shared/categorie-detail.service';
@Component({
  selector: 'app-categorie-detail',
  templateUrl: './categorie-detail.component.html',
  styles: [
  ]
})
export class CategorieDetailComponent implements OnInit {

  constructor(public service :CategorieDetailService, private toast :ToastrService) { }

  ngOnInit(): void {
    this.resetForm();

  }
  search() {
    this.service.list = this.service.list.filter(res =>  {
      return res.categorieLabelle.toLocaleLowerCase().match(this.service.formData.categorieLabelle.toLocaleLowerCase());
    })
  }
  resetForm(form?:NgForm) {
    if(form!=null)
      form.resetForm() ;
      this.service.formData = {
        categorieId:0,
        categorieLabelle :"",
      
      }
      }
      refrech() {
    
        return this.service.refreshList();
      }

onSubmit(form:NgForm) {
  

      if(this.service.formData.categorieId==0) 
       
         this.insertRecord(form);
      
        else 
      this.updateRecord(form);
    }
    insertRecord(form:NgForm) {
      this.service.PostCategorie().subscribe(
        res=>{
          this.resetForm(form);
          this.toast.success('ajout avec succees',"Ajout Categorie");
         this.service.refreshList();
        },
        err => {console.log(err);
        } 
      )
    }
    updateRecord(form:NgForm) {
      this.service.PutCategorie().subscribe(
        res=>{
          this.resetForm(form);
          this.toast.success('Modification avec succees',"Modification Categorie");
    
         this.service.refreshList();
        },
        err => {console.log(err);
        } 
      )
    }
    }