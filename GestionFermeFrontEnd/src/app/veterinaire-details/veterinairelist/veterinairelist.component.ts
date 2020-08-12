import { Component, OnInit } from '@angular/core';
import { VeterinaireDetailService } from './../../shared/veterinaire-detail.service';
import { VeterinaireDetail  } from './../../shared/veterinaire-detail.model';

@Component({
  selector: 'app-veterinairelist',
  templateUrl: './veterinairelist.component.html',
  styleUrls: []
})
export class VeterinairelistComponent implements OnInit {

  constructor(public service : VeterinaireDetailService ) { }

  ngOnInit(): void {
    this.service.refreshList()

  }
  populateForm(pd:VeterinaireDetail){
    this.service.formData=Object.assign({},pd)
      }
      onDelete(IDVet ){
        if(confirm('Are u sure ? ')
        )
        {
        this.service.deletevet(IDVet).subscribe(res =>  {this.service.refreshList();
//    this.toast.warning("delete Successfully",'Payment Detail');
        } ,
          err=> {
            console.log(err)
          })
      }
    }
    }