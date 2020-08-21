import { Injectable } from '@angular/core';
import {  HttpClient} from "@angular/common/http";
import { FermeDetail } from './ferme-detail.model';
@Injectable({
  providedIn: 'root'
})
export class FermeDetailService {
  formData:FermeDetail;
  readonly root ='http://localhost:61347/api';
  list : FermeDetail[];

  constructor(private http:HttpClient) { }
  PostFerme() {
    console.log(this.formData.FermeId)
    console.log(this.formData.cinPopr)
    console.log(this.formData.adresse)
    console.log(this.formData.dateAdhesion)
    console.log(this.formData.delegation)
    console.log(this.formData.gouveroratFerme)
    console.log(this.formData.nomFerme)
    console.log(this.formData.nomProp)
    console.log(this.formData.numTelProp)


    return  this.http.post(this.root + '/Fermes',this.formData)
  
       }
      PutFerme() {
       
         return  this.http.put(this.root + '/Fermes/'+this.formData.FermeId,this.formData)
          }
          deleteFerme(id) {
         
            return  this.http.delete(this.root + '/Fermes/'+id)
              }
      refreshList()
      {
        this.http.get(this.root + '/Fermes').toPromise().then(res => this.list = res as  FermeDetail[]);
      }
}
