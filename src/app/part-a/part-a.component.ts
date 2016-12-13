import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-part-a',
  templateUrl: './part-a.component.html',
  styleUrls: ['./part-a.component.css']
})
export class PartAComponent implements OnInit{

  constructor(private router: Router) { }

  navigate() {
        this.router.navigate(["home"]),
        this.router.navigate(["part-b"]);
    }


  Celcius : number = 0;
  Fahrenheit : number = 0;
  counter : number = 0;

  CelciusToFahrenheit() {
    this.Fahrenheit = this.Celcius * 9/5 + 32;
    this.counter++;
  }

  fahrentheitToCelcius() {
    this.Celcius= (this.Fahrenheit -32) * 5/9;
    this.counter++;
  }

  ngOnInit() {
  }
}