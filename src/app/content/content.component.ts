import {Component, Input, OnInit, Output,EventEmitter} from '@angular/core';


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
  constructor() { }

  ngOnInit(): void {
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
