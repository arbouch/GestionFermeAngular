import { Component, OnInit } from '@angular/core';
import { VeterinaireDetailService } from './../../shared/veterinaire-detail.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-veterinairedetail',
  templateUrl: './veterinairedetail.component.html',
  styleUrls: [ 

  ]
})
export class VeterinairedetailComponent implements OnInit {

  constructor(public service :VeterinaireDetailService) { }

  ngOnInit(): void {
    this.resetForm();
  }
  search() {
    this.service.list = this.service.list.filter(res =>  {
      return res.prenom.toLocaleLowerCase().match(this.service.formData.prenom.toLocaleLowerCase());
    })
  }
resetForm(form?:NgForm) {
if(form!=null)
  form.resetForm() ;

this.service.formData = {
  IDVet:0,
  nom:"",
  prenom:"",
  num1:0,
  num2:0

}
}
refrech() {
    
  return this.service.refreshList();
}
onSubmit(form:NgForm) {
  

  if(this.service.formData.IDVet==0) 
   
     this.insertRecord(form);
  
    else 
  this.updateRecord(form);
}
insertRecord(form:NgForm) {
  this.service.PostVETERINAIRE().subscribe(
    res=>{
      this.resetForm(form);
     this.service.refreshList();
    },
    err => {console.log(err);
    } 
  )
}
updateRecord(form:NgForm) {
  this.service.PutVETERINAIRE().subscribe(
    res=>{
      this.resetForm(form);
     this.service.refreshList();
    },
    err => {console.log(err);
    } 
  )
}
}
