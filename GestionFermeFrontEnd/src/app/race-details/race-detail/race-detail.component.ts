import { Component, OnInit } from '@angular/core';
import { RaceDetailService } from './../../shared/race-detail.service';
import { ToastContainerModule, ToastrService } from 'ngx-toastr';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-race-detail',
  templateUrl: './race-detail.component.html',
  styleUrls: ['./race-detail.component.css']
})
export class RaceDetailComponent implements OnInit {

  constructor(public service :RaceDetailService, private toast :ToastrService) { }

  ngOnInit(): void {
    this.resetForm();

  }
  search() {
    this.service.list = this.service.list.filter(res =>  {
      return res.Designation.toLocaleLowerCase().match(this.service.formData.Designation.toLocaleLowerCase());
    })
  }
  resetForm(form?:NgForm) {
    if(form!=null)
      form.resetForm() ;
    
    this.service.formData = {
      IDRace:0,
      Designation:"",
      Type:"",
   
    
    }
    }
    refrech() {
    
      return this.service.refreshList();
    }
    onSubmit(form:NgForm) {
  

      if(this.service.formData.IDRace==0) 
       
         this.insertRecord(form);
      
        else 
      this.updateRecord(form);
    }
    insertRecord(form:NgForm) {
      this.service.PostRace().subscribe(
        res=>{
          this.resetForm(form);
          this.toast.success('ajout avec succees',"Ajout Race");
         this.service.refreshList();
        },
        err => {console.log(err);
        } 
      )
    }
    updateRecord(form:NgForm) {
      this.service.PutRace().subscribe(
        res=>{
          this.resetForm(form);
          this.toast.success('Modification avec succees',"Modification Race");
    
         this.service.refreshList();
        },
        err => {console.log(err);
        } 
      )
    }
    }
