import { Component, OnInit } from '@angular/core';
import { ToastContainerModule, ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-race-details',
  templateUrl: './race-details.component.html',
  styleUrls: ['./race-details.component.css']
})
export class RaceDetailsComponent implements OnInit {
  p:number=1;

  constructor() { }

  ngOnInit(): void {
  }

}
