import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'c-kpi-cards',
  templateUrl: './c-kpi-cards.component.html',
  styleUrls: ['./c-kpi-cards.component.css']
})
export class CKpiCardsComponent implements OnInit {

  kpiCards: any = require("./f-json-data/kpi-cards-data.json");

  constructor() { }

  ngOnInit(): void {
  }

}
