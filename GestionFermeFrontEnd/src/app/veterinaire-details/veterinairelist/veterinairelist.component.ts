import { Component, OnInit } from '@angular/core';
import { VeterinaireDetailService } from './../../shared/veterinaire-detail.service';
import { VeterinaireDetail  } from './../../shared/veterinaire-detail.model';

@Component({
  selector: 'app-veterinairelist',
  templateUrl: './veterinairelist.component.html',
  styleUrls: []
})
export class VeterinairelistComponent implements OnInit {
  p:number=1;

  constructor(public service : VeterinaireDetailService ) { }
 
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