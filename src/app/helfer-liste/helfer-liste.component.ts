import { Component, OnInit } from '@angular/core';
import { Helfer } from '../models/helfer.models';

@Component({
  selector: 'app-helfer-liste',
  templateUrl: './helfer-liste.component.html',
  styleUrls: ['./helfer-liste.component.css']
})
export class HelferListeComponent implements OnInit {
  public helfer: Helfer[] = [
    {
      id: 1,
      name: "Fabian Zimmermann",
      adress: "Duenserberg Alte Landstrasse 1",
      phonenumber: "0664 9160879",
    },
    {
      id: 2,
      name: "Simon Kremmel",
      adress: "Raggal 168",
      phonenumber: "0664 8243948"
    },
  ];
  public constructor() { }

  ngOnInit(): void {
  }

}
