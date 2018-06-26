import { Component, OnInit, Output, EventEmitter, Input} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input('show-modal') showModal: boolean;
  @Output('closed') closeEmitter: EventEmitter < ModalResult > = new EventEmitter < ModalResult > ();
  @Output('loaded') loadedEmitter: EventEmitter < HeaderComponent > = new EventEmitter < HeaderComponent > ();
  @Output() positiveLabelAction = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }
  show() {
    this.showModal = true;
  }

  hide() {
    this.showModal = false;
    this.closeEmitter.next({
      action: ModalAction.POSITIVE
    });
  }
  
}
export enum ModalAction { POSITIVE, CANCEL }
export interface ModalResult {
  action: ModalAction;
}
