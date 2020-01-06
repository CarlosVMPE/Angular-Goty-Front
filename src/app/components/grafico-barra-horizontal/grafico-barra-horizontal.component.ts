import { Component, OnDestroy} from '@angular/core';
import { interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-grafico-barra-horizontal',
  templateUrl: './grafico-barra-horizontal.component.html',
  styleUrls: ['./grafico-barra-horizontal.component.css']
})
export class GraficoBarraHorizontalComponent implements OnDestroy {
  
  results: any[] = [
    {
      "name": "Juego 1",
      "value": 20
    },
    {
      "name": "Juego 2",
      "value": 25
    },
    {
      "name": "Juego 3",
      "value": 15
    },
    {
      "name": "Juego 4",
      "value": 30
    }
  ];

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = true;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Juegos';
  showYAxisLabel = true;
  yAxisLabel = 'Votos';

  colorScheme = 'nightLights';

  interval$: Subscription;

  constructor() {


    /* setInterval(() => {
      console.log('tick');

      const newResults = [...this.results];

      for (let i in newResults) {
        newResults[i].value = Math.round(Math.random() * 500)
      }

      this.results = [...newResults];
    }, 1500); */

    this.interval$ = interval(1500).subscribe(() => {
      console.log('tick');

      const newResults = [...this.results];

      for (let i in newResults) {
        newResults[i].value = Math.round(Math.random() * 500) + 1;
      }

      this.results = [...newResults];
    })

  }

  onSelect(event) {
    console.log(event);
  }

  ngOnDestroy(): void {
    this.interval$.unsubscribe();
  }

}
