import { Injectable } from '@angular/core';
import {  HttpClient} from "@angular/common/http";
import { RaceDetail } from './race-detail.model';

@Injectable({
  providedIn: 'root'
})
export class RaceDetailService {
  formData:RaceDetail;
  list : RaceDetail[];

  readonly root ='http://localhost:61347/api';

  constructor(private http:HttpClient) { }
  PostRace() {
  

    return  this.http.post(this.root + '/RACEs',this.formData)
      }
      PutRace() {
        return  this.http.put(this.root + '/RACEs/'+this.formData.IDRace,this.formData)
          }
          deleteRace(id) {
            return  this.http.delete(this.root + '/RACEs/'+id)
              }
      refreshList()
      {
        this.http.get(this.root + '/RACEs').toPromise().then(res => this.list = res as  RaceDetail[]);
      }
}
