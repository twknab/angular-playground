import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'custom-counter',
  templateUrl: 'custom-counter.component.html',
  styleUrls: ['custom-counter.component.scss'],
})

export class CustomCounterComponent {
  @Input() count? : number;
  @Output() increment = new EventEmitter();

  onIncrement() {
    console.log("incremeting")
    this.increment.emit();
  }
}