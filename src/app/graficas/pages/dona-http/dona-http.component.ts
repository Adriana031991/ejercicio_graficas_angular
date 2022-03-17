import { Component, OnInit } from '@angular/core';
import { ChartData, ChartType } from 'chart.js';
import { GraficasService } from '../../service/graficas.service';


@Component({
  selector: 'app-dona-http',
  templateUrl: './dona-http.component.html',
  styles: [
  ]
})
export class DonaHttpComponent implements OnInit {

  constructor( private service: GraficasService) { }

  public doughnutChartData: ChartData<'doughnut'> = {
    labels: [],
    datasets: [ { data: [  ] } ],

  };

  public doughnutChartType: ChartType = 'doughnut';

  ngOnInit(): void {
    this.service.getData().subscribe(({labels, values}) => {
    //   const labels = Object.keys(response)
      this.doughnutChartData.labels= labels;
    //   // this.doughnutChartLabels.push(...labels);
    //   const values = Object.values(response)
      this.doughnutChartData.datasets.forEach((data, i) =>{
        console.log(data, i)
        this.doughnutChartData.datasets[i].data.push(...values)
      })
      // this.doughnutChartData.push(...values);

      console.log(this.doughnutChartData.datasets)
      console.log(this.doughnutChartData.datasets[0].data.length)
    })
  }
}
