import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalService {
display: BehaviorSubject<boolean> = new BehaviorSubject(false)
  constructor() { }

  open = () => {
    this.display.next(true);
   console.log('PASO POR AQUI open');

  }
  close = () => {
    this.display.next(false);
    console.log('PASO POR AQUI close');
  }
}
