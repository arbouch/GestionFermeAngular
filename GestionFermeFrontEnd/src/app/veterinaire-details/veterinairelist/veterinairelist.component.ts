import { Component, OnInit } from '@angular/core';
import { VeterinaireDetailService } from './../../shared/veterinaire-detail.service';
import { VeterinaireDetail  } from './../../shared/veterinaire-detail.model';
import { ToastContainerModule, ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-veterinairelist',
  templateUrl: './veterinairelist.component.html',
  styleUrls: []
})
export class VeterinairelistComponent implements OnInit {
  p:number=1;

  constructor(public service : VeterinaireDetailService , private toast :ToastrService) { }
 
  ngOnInit(): void {
    this.service.refreshList()

  }
  refrech() {
    
      return this.service.refreshList();
    }
    txtValue:string = null;

    onTextChange(value)
    {
      this.service.formData.prenom = value;
      if(this.service.formData.prenom == '')
      {
        this.service.refreshList()
      }
      
    }
  search() {

    
     this.service.list = this.service.list.filter(res =>  {
      return res.prenom.toLocaleLowerCase().match(this.service.formData.prenom.toLocaleLowerCase());

    })
  }
  
  populateForm(pd:VeterinaireDetail){
    this.service.formData=Object.assign({},pd)
      }
      onDelete(IDVet){
        if(confirm('Etes vous sur de vouloir supprimer ?'+IDVet)
        )
        {
        this.service.deletevet(IDVet).subscribe(res =>  {this.service.refreshList();
 this.toast.warning("Suppression avec succees",'Suppression Veterinaire');
        } ,
          err=> {
            console.log(err)
          })
      }
    }
    }