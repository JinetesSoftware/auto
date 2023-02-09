import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ModalService } from '../../../services/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
  @Input() titleModal: string = '';
  @Input() btnLabel: string = '';
  @Input() btn1Visible: boolean = false;
  @Input() btn2Visible: boolean = true;
  @Output() modalAction = new EventEmitter()

  display: any = false;

  constructor(private modalService: ModalService) {
    this.modalService.display.subscribe((resp) => {
      this.display = resp;
    });
  }

modalAct = () => {
  this.modalAction.emit(true);
}

  close = () => {
    this.modalService.close();
  };
}
