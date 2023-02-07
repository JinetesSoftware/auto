import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
private display: BehaviorSubject<any> = new BehaviorSubject(false)
  constructor() { }

  open = () => {
    this.display.next(true);
  }
  close = () => {
    this.display.next(false);
  }
}
