import { Component, OnInit } from '@angular/core';
import { ChartData, ChartType, Color } from 'chart.js';

@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent implements OnInit {

  public doughnutChartLabels: string[] = [ 'Download Sales', 'In-Store Sales', 'Mail-Order Sales' ];
  public doughnutChartData: ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [
      { data: [ 350, 450, 100 ], backgroundColor: [
        '#7BEDAE',
        '#B3F781',
        '#E0D580',
        '#F7C881',
        '#F09C86',
      ] },
      { data: [ 50, 150, 120 ], backgroundColor: [
        '#EDED11',
        '#F7B611',
        '#E0631A',
        '#F71132',
        '#B01AF0',
      ] },
      { data: [ 250, 130, 70 ], backgroundColor: [
        '#B01AF0',
        '#F71132',
        '#E0631A',
        '#F7C881',
        '#F09C86',
      ] }
    ]
  };
  public doughnutChartType: ChartType = 'doughnut';

  constructor() { }

  ngOnInit(): void {
  }

}
