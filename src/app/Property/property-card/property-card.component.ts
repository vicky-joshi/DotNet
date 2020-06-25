import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-card',
  templateUrl: './property-card.component.html',
  styleUrls: ['./property-card.component.css']
})
export class PropertyCardComponent implements OnInit {
  
  
  property:any={

    "Id":1,
    "Type":"House",
    "Price":20000,
    "Name":"Birla House"
  }

  constructor() { }

  ngOnInit(): void {
  }


 




}
