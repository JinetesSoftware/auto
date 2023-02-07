import { Component } from '@angular/core';
import { ModalService } from '../../../services/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  display:boolean = false;

  constructor (private modalService:ModalService) {}

  close = () => {
    this.modalService.close();
  }
}
