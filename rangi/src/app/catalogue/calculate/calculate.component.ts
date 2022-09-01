import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculate',
  templateUrl: './calculate.component.html',
  styleUrls: ['./calculate.component.css']
})
export class CalculateComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  Calculate(){
    alert("You will need X litres of paint for your room ")
  }

}
