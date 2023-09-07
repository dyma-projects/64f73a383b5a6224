import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-exercice1-enfant',
  templateUrl: './exercice1-enfant.component.html',
  styleUrls: ['./exercice1-enfant.component.css'],
})
export class Exercice1EnfantComponent implements OnInit {
  constructor() {}

  @Input() public compteurEnfant: number;
  @Output() public incrementDecrement: EventEmitter<boolean> =
    new EventEmitter<boolean>();

  ngOnInit() {}

  public incDec(increment: boolean) {
    this.incrementDecrement.emit(increment);
  }
}
