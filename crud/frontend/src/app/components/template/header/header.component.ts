import { HeaderService } from './header.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  constructor(private headerService: HeaderService) { }

  get title():string {
    return this.headerService.headerData.title;
  }

  get icon():string {
    return this.headerService.headerData.icon;
  }

  get routeLink():string {
    return this.headerService.headerData.routeUrl;
  }
}
