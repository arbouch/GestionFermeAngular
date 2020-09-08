import { Component, OnInit } from '@angular/core';
import { ToastContainerModule, ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';
import { FermeDetailService } from './../../shared/ferme-detail.service';

@Component({
  selector: 'app-ferme-detail',
  templateUrl: './ferme-detail.component.html',
  styleUrls: ['./ferme-detail.component.css']
})
export class FermeDetailComponent implements OnInit {
  todayDate : Date = new Date();

  constructor(public service :FermeDetailService, private toast :ToastrService) { }

  ngOnInit(): void {
    this.resetForm();

  }
  search() {
    this.service.list = this.service.list.filter(res =>  {
      return res.nomFerme.toLocaleLowerCase().match(this.service.formData.nomFerme.toLocaleLowerCase());
    })
  }
  resetForm(form?:NgForm) {
    if(form!=null)
      form.resetForm() ;

    this.service.formData = {
      FermeId:0,
      nomFerme :"",
      nomProp:"" ,
      adresse:"",
      numTelProp: "",
      gouveroratFerme:"",
      delegation:"",
      dateAdhesion:"",
      cinPopr:0   
    }
    }
    refrech() {
    
      return this.service.refreshList();
    }

  onSubmit(form:NgForm) {
  

      if(this.service.formData.FermeId==0) 
       
         this.insertRecord(form);
      
        else 
      this.updateRecord(form);
    }
    insertRecord(form:NgForm) {
      this.service.PostFerme().subscribe(
        res=>{
          this.resetForm(form);
          this.toast.success('ajout avec succees',"Ajout Ferme");
         this.service.refreshList();
        },
        err => {console.log(err);
        } 
      )
    }
    updateRecord(form:NgForm) {
      this.service.PutFerme().subscribe(
        res=>{
          this.resetForm(form);
          this.toast.success('Modification avec succees',"Modification Ferme");
    
         this.service.refreshList();
        },
        err => {console.log(err);
        } 
      )
    }
    }

