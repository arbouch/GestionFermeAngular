import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-veterinaire-details',
  templateUrl: './veterinaire-details.component.html',
  styleUrls: ['./veterinaire-details.component.css']
})
export class VeterinaireDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  isMobileMenu() {
    if ($(window).width() > 991) {
        return false;
    }
    return true;
}
}
