import { Component, OnInit } from '@angular/core';
import { ToastContainerModule, ToastrService } from 'ngx-toastr';
import { FermeDetailService } from './../../shared/ferme-detail.service';
import {FermeDetail  } from './../../shared/ferme-detail.model';
@Component({
  selector: 'app-ferme-list-detail',
  templateUrl: './ferme-list-detail.component.html',
  styleUrls: ['./ferme-list-detail.component.css']
})
export class FermeListDetailComponent implements OnInit {

  constructor(public service : FermeDetailService , private toast :ToastrService) { }
  p:number=1;
  ngOnInit(): void {
    this.service.refreshList()

  }
  refrech() {
    
    return this.service.refreshList();
  }
  txtValue:string = null;
  onTextChange(value)
  {
    this.service.formData.nomFerme = value;
    if(this.service.formData.nomFerme == '')
    {
      this.service.refreshList()
    }
    
  }
search() {

  
   this.service.list = this.service.list.filter(res =>  {
    return res.nomFerme.toLocaleLowerCase().match(this.service.formData.nomFerme.toLocaleLowerCase());

  })
}
populateForm(pd:FermeDetail){
  this.service.formData=Object.assign({},pd)
    }
    onDelete(idRace){
      if(confirm('Etes vous sur de vouloir supprimer ?'+idRace)
      )
      {
      this.service.deleteFerme(idRace).subscribe(res =>  {this.service.refreshList();
this.toast.warning("Suppression avec succees",'Suppression Race');
      } ,
        err=> {
          console.log(err)
        })
    }
  }
}
