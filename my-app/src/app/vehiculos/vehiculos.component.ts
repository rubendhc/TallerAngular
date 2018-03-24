import { Component, OnInit } from '@angular/core';
import { AUTOS } from '../carlist';
import { Car } from '../cars';



@Component({
  selector: 'app-vehiculos',
  templateUrl: './vehiculos.component.html',
  styleUrls: ['./vehiculos.component.css']
})
export class VehiculosComponent implements OnInit {
  
  coches = AUTOS;
  carro	= Car;
  carroSelected:Car;

  darClick(carClick:Car): void{
  	this.carroSelected=carClick;
  }

  constructor() { }

  ngOnInit() {

  }

}
