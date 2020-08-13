import { Injectable } from '@angular/core';
import {  HttpClient} from "@angular/common/http";
import { VeterinaireDetail } from './veterinaire-detail.model';

@Injectable({
  providedIn: 'root'
})
export class VeterinaireDetailService {
  formData:VeterinaireDetail;
  readonly root ='http://localhost:61347/api';
  list : VeterinaireDetail[];

  constructor(private http:HttpClient) { }
  PostVETERINAIRE() {
    console.log(this.formData.IDVet)
    console.log(this.formData.nom)
    console.log(this.formData.prenom)
    console.log(this.formData.num1)
    console.log(this.formData.num2)

    return  this.http.post(this.root + '/VETERINAIREs',this.formData)
      }
      PutVETERINAIRE() {
        return  this.http.put(this.root + '/VETERINAIREs/'+this.formData.IDVet,this.formData)
          }
          deletevet(id) {
            return  this.http.delete(this.root + '/VETERINAIREs/'+id)
              }
      refreshList()
      {
        this.http.get(this.root + '/VETERINAIREs').toPromise().then(res => this.list = res as  VeterinaireDetail[]);
      }
}
