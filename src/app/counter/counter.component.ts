import { Component, OnInit } from '@angular/core';
import {count} from 'rxjs/operators';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {


  Count:number=0;

  constructor() { }

  ngOnInit() {
  }
    Incrise(){
    this.Count ++ ;
    }
    Decrise(){
    if (this.Count > 0) {
      this.Count--;
    }
    }
}
