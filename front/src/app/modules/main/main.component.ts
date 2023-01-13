import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { navLinks } from 'src/app/core/models/commons';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {

  constructor(private router: Router) { }

  isOpen = true;
  isActive = 0;

  navLinks: navLinks[] = [
    {
      name: 'Clients',
      url: '/app/',
      icon: 'person',
      submenus: [
        {
          name: 'New client',
          url: '/app/new-client'
        },
        {
          name: 'Works orders',
          url: '/app/work-orders'
        },
        {
          name: 'billing',
          url: '/app/billing'
        },
      ]
    },
    {
      name: 'Planning',
      url: '/app/planning',
      icon: 'event'
    },
    {
      name: 'Works',
      url: '/app/works',
      icon: 'settings'
    },

  ]


  navigate(url: string, i: number) {
    this.isActive = i;
    this.router.navigate([url]);
  }

  toggleSidebar(status: boolean) {
    this.isOpen = status;
  }

}
