import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app works!';
  fibPosition = 0;
  fibSeriesWithFor :number[] = [];
  performance = {
    fibNumWithFor:0,
    fibNumWithWhile:0,
    fibNumWithRecursion:0
  };
  values = {
    fibNumWithFor :0,
    fibNumWithRecursion:0
  }
  fibSeriesWithRecursion :any = [];

  setFibPosition(event:any){
    // console.log(event);
    this.fibPosition = Math.abs(event.target.value);
    console.trace();
    this.generateFibSeriesWithFor();
    this.generateFibSeriesWithRecursion();
  }
  generateFibSeriesWithFor(){
    let t0 = performance.now();
    let x=0, y=1, currentSum=0;
    this.fibSeriesWithFor = [];
    for(let i = 0; i< this.fibPosition; i++){
      if(i < 1){
        // this.fibSeriesWithFor.push(1);
      }else{
      currentSum = x+y;
      // this.fibSeriesWithFor.push(currentSum);
      x = y;
      y = currentSum;
      }
    }
    this.values.fibNumWithFor= currentSum;

    let t1 = performance.now();
    this.performance.fibNumWithFor = t1-t0;
  }
  generateFibSeriesWithRecursion(){
    let t0 = performance.now();
    this.values.fibNumWithRecursion = this.fibRecursion(this.fibPosition);
    let t1 = performance.now();
    this.performance.fibNumWithRecursion = t1-t0;
  }
  fibRecursion(position: number){
    if(position <= 1){
      return position;
    }else{
      return this.fibRecursion(position-1) + this.fibRecursion(position-2)
    }
  }
}
