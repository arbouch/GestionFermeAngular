import { Component, OnInit } from '@angular/core';
import { RaceDetailService } from './../../shared/race-detail.service';
import {RaceDetail  } from './../../shared/race-detail.model';
import { ToastContainerModule, ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-race-detail-list',
  templateUrl: './race-detail-list.component.html',
  styleUrls: ['./race-detail-list.component.css']
})
export class RaceDetailListComponent implements OnInit {
  p:number=1;

  constructor(public service : RaceDetailService , private toast :ToastrService) { }

  ngOnInit(): void {
    this.service.refreshList()
  }
  refrech() {
    
    return this.service.refreshList();
  }
  txtValue:string = null;

  onTextChange(value)
  {
    this.service.formData.Designation = value;
    if(this.service.formData.Designation == '')
    {
      this.service.refreshList()
    }
    
  }
search() {

  
   this.service.list = this.service.list.filter(res =>  {
    return res.Designation.toLocaleLowerCase().match(this.service.formData.Designation.toLocaleLowerCase());

  })
}

populateForm(pd:RaceDetail){
  this.service.formData=Object.assign({},pd)
    }
    onDelete(idRace){
      if(confirm('Etes vous sur de vouloir supprimer ?'+idRace)
      )
      {
      this.service.deleteRace(idRace).subscribe(res =>  {this.service.refreshList();
this.toast.warning("Suppression avec succees",'Suppression Race');
      } ,
        err=> {
          console.log(err)
        })
    }
  }
  }