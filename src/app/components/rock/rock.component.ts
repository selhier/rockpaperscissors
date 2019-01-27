import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-rock',
  templateUrl: './rock.component.html',
  styleUrls: ['./rock.component.css'],
  animations: [
    trigger('onHover', [
      state('default', style({ transform: 'scale(1.0)'})),
      state('hovered', style({ transform: 'scale(1.5)'})),

      transition('default => hovered', animate('0.1s')),
      transition('hovered => default', animate('0.1s'))
    ])
  ]
})
export class RockComponent implements OnInit {
  state = 'default';

  @Input() size: number;
  @Output() clicked: EventEmitter<string> = new EventEmitter<string>();
  defaultSize = 50;

  constructor() { }

  ngOnInit() { }
  selected() {
    this.clicked.emit('rock');
  }
}
