import { Injectable } from '@angular/core';
import { CategorieDetail } from './categorie-detail.model';
import {  HttpClient} from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class CategorieDetailService {
  formData:CategorieDetail;
  readonly root ='http://localhost:61347/api';
  list : CategorieDetail[];
  constructor(private http:HttpClient) { 

  }
  PostCategorie() {
    console.log(this.formData.categorieId)
    console.log(this.formData.categorieLabelle)
 


    return  this.http.post(this.root + '/categories',this.formData)
  
       }
       PutCategorie() {
       
        return  this.http.put(this.root + '/categories/'+this.formData.categorieId,this.formData)
         }
         deleteCategorie(id) {
        
           return  this.http.delete(this.root + '/categories/'+id)
             }
             refreshList()
             {
               this.http.get(this.root + '/categories').toPromise().then(res => this.list = res as  CategorieDetail[]);
             }
}
