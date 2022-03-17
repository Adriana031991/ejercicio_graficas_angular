import { Component, OnInit } from '@angular/core';
import { ChartData, ChartDataset } from 'chart.js';

@Component({
  selector: 'app-barras-doble',
  templateUrl: './barras-doble.component.html',
  styles: [
  ]
})
export class BarrasDobleComponent implements OnInit {


  proveedoresData:  ChartData<'bar'> = {
    labels: [ '2022', '2023', '2024', '2025', '2026' ],
    datasets: [
    { data: [ 100,200,300,400,500 ], label: 'Vendedor A' },
    { data: [ 50,250,30, 450,200 ], label: 'Vendedor B' },
  ]
  };

  proveedoresLabels: string[] = ['2021', '2022','2023','2024','2025'];

  productoData: ChartData<'bar'> = {
    labels: [ '2022', '2023', '2024', '2025', '2026' ],
    datasets: [
      { data: [ 200, 300,400,300, 100 ], label: 'Carros', backgroundColor: 'blue' },

  ]
  };




  constructor() { }

  ngOnInit(): void {
  }

}
