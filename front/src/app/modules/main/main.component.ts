import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { navLinks } from 'src/app/core/models/commons';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent {
  constructor(private router: Router) {
    this.router.events.subscribe((val) => {
      if (val instanceof NavigationEnd) {
        this.url = val.url;
        console.log(this.url);
      }
    });
  }

  isOpen = true;
  url!: string;
  navLinks: navLinks[] = [
    {
      name: 'Clients',
      url: '/app/client',
      icon: 'person',
      submenus: [
        {
          name: 'New client',
          url: '/app/client/new-client',
        },
        {
          name: 'Clients List',
          url: '/app/client',
        },
        {
          name: 'Works orders',
          url: '/app/client/work-orders',
        },
        {
          name: 'Billing',
          url: '/app/client/billing',
        },
      ],
    },
    {
      name: 'Planning',
      url: '/app/planning',
      icon: 'event',
    },
    {
      name: 'Works',
      url: '/app/works',
      icon: 'settings',
    },
  ];

  navigate(url: string) {
    this.router.navigate([url]);
  }

  toggleSidebar(status: boolean) {
    this.isOpen = status;
  }
}
