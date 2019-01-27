import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { trigger, style, state, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-scissors',
  templateUrl: './scissors.component.html',
  styleUrls: ['./scissors.component.css'],
  animations: [
    trigger('onHover', [
      state('default', style({transform: 'scale(1.0)'})),
      state('hovered', style({transform: 'scale(1.5)'})),

      transition('default => hovered', animate('0.1s')),
      transition('hovered => default', animate('0.1s'))
    ])
  ]
})
export class ScissorsComponent implements OnInit {
  @Input() size: number;
  @Output() clicked: EventEmitter<string> = new EventEmitter();
  defaultSize = 50;
  state = 'default';

  constructor() { }

  ngOnInit() {
  }
  selected() {
    this.clicked.emit('scissors');
  }
}
