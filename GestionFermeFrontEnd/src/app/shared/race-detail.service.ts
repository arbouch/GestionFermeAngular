import { Injectable } from '@angular/core';
import {  HttpClient} from "@angular/common/http";
import { RaceDetail } from './race-detail.model';

@Injectable({
  providedIn: 'root'
})
export class RaceDetailService {
  formData:RaceDetail;
  readonly root ='http://localhost:61347/api';
  list : RaceDetail[];
  constructor(private http:HttpClient) { }
  PostRace() {
    return  this.http.post(this.root + '/RACEs',this.formData)
      }
      PutRace() {
        console.log(this.formData.idRace)
        console.log(this.formData.Designation)
        console.log(this.formData.Type)
         return  this.http.put(this.root + '/RACEs/'+this.formData.idRace,this.formData)
          }
          deleteRace(id) {
            console.log(this.formData.idRace)
            console.log(this.formData.Designation)
            console.log(this.formData.Type)
            return  this.http.delete(this.root + '/RACEs/'+id)
              }
      refreshList()
      {
        this.http.get(this.root + '/RACEs').toPromise().then(res => this.list = res as  RaceDetail[]);
      }
}
