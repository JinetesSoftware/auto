import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

isOpen = true;
toggleSidebar(status: boolean){
this.isOpen = status;
}

}
