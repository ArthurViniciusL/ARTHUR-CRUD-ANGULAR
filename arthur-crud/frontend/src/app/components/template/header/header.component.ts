import { HeaderService } from './header.service';
import { Component } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css', '/src/styles.css']
})
export class HeaderComponent {

  constructor(private headerService: HeaderService) { }

  get title(): string {
    return this.headerService.headerData.title;
  }

  get titleColor(): string {
    return this.headerService.headerData.titleColor || '';
  }

  get icon(): string {
    return this.headerService.headerData.icon;
  }

  get iconMsg(): string {
    return this.headerService.headerData.iconMsg;
  }

  get routeLink(): string {
    return this.headerService.headerData.routeUrl;
  }

}
