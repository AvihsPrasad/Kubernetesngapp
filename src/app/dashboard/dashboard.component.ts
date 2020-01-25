import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  public chartType: string = 'line';
  public msg: boolean = true;

  public chartDatasets: Array<any> = [
    { data: [65, 59, 80, 81, 56, 55, 40], label: 'My First dataset' },
    { data: [28, 48, 40, 19, 86, 27, 90], label: 'My Second dataset' }
  ];

  public chartLabels: Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

  public chartColors: Array<any> = [
    {
      backgroundColor: 'rgba(255,255, 255, .2)',
      borderColor: 'rgba(255, 255, 255, .7)',
      borderWidth: 2,
    },
    {
      backgroundColor: 'rgba(255, 255, 255, .2)',
      borderColor: 'rgba(255, 255, 255, .7)',
      borderWidth: 2,
    }
  ];

  public chartOptions: any = {
    responsive: true,
    legend: {
      labels: {
        fontColor: "white",
      }
    },
    scales: {
      // We use this empty structure as a placeholder for dynamic theming.
      xAxes: [
        {
        id: 'x-axis-0',
        position: 'bottom',
        ticks: {
          fontColor: '#fff',
        }
      },
    ],  
      yAxes: [
        {
          id: 'y-axis-0',
          position: 'left',
          ticks: {
            fontColor: '#fff',
          }
        },
      ]
    },plugins: {
      datalabels: {
        anchor: 'end',
        align: 'end',
        font: {
          size: 20,
          color: '#fff'
        }
      }
    }
  };
  public chartClicked(e: any): void { }
  public chartHovered(e: any): void { }

  constructor() { }

  ngOnInit() {
  }

  recivemsg($event){
    this.msg = $event
    console.log('this.msg '+ this.msg)
    // if (this.msg)
  }

}
