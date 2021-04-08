import {Component, Input, OnInit, Output, EventEmitter, SimpleChanges} from '@angular/core';
import {FormGroup} from '@angular/forms';
interface IRatingUnit {
  value: number;
  active: boolean;
}

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  @Input() backgroundColor = '#D9D9D9';
  @Input() progressColor = '#4CAF50';
  @Input() width = 100;
  Timer;
  @Input() time = 3;

  text = "20px";

  @Input()
  max = 10;
  @Input()
  ratingValue = 10;
  @Input()
  showRatingValue = true;

  @Output()
  rateChange = new EventEmitter<number>();

  ratingUnits: Array<IRatingUnit> = [];

  clientForm: FormGroup;


  constructor() { }

  ngOnChanges(changes: SimpleChanges) {
    if ('max' in changes) {
      let max = changes.max.currentValue;
      max = typeof max === 'undefined' ? 10 : max;
      this.max = max;
      this.calculate(max, this.ratingValue);
    }
  }

  calculate(max, ratingValue) {
    this.ratingUnits = Array.from({length: max},
      (_, index) => ({
        value: index + 1,
        active: index < ratingValue
      }));
  }

  ngOnInit() {
    this.calculate(this.max, this.ratingValue);
  }

  select(index) {
    this.ratingValue = index + 1;
    this.ratingUnits.forEach((item, idx) => item.active = idx < this.ratingValue);
    this.rateChange.emit(this.ratingValue);
  }
  enter(index) {
    this.ratingUnits.forEach((item, idx) => item.active = idx <= index);
  }
  reset() {
    this.ratingUnits.forEach((item, idx) => item.active = idx < this.ratingValue);
  }


  // get second() {
  //   return this.time;
  // }
  // set second(value) {
  //   this.time = value;
  // }
  startTime() {
    if (this.time  > 0) {
      this.Timer = setInterval(() => {
        this.time--;
        this.isCountDownFinish();
        console.log(this.time);
      }, 1000);
    }

  }

  stop() {
    // @ts-ignore
    clearInterval(this.Timer);
  }

  @Output()
  finish = new EventEmitter<boolean>();
  isCountDownFinish() {
    if (this.time == 0) {
      this.stop();
      this.finish.emit(true);
    }
  }

}
