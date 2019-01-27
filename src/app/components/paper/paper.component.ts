import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';

@Component({
  selector: 'app-paper',
  templateUrl: './paper.component.html',
  styleUrls: ['./paper.component.css'],
  animations: [
    trigger('onHover', [
      state('default', style({ transform: 'scale(1.0)' })),
      state('hovered', style({ transform: 'scale(1.5)' })),

      transition('default => hovered', animate('0.1s')),
      transition('hovered => default', animate('0.1s'))
    ])
  ]
})
export class PaperComponent implements OnInit {
  state = 'default';
  defaultSize = 50;

  @Input() size: number;
  @Output() clicked: EventEmitter<string> = new EventEmitter();

  constructor() { }

  ngOnInit() {}
  selected() {
    this.clicked.emit('paper');
  }
}
