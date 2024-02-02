import { Component } from '@angular/core';
import { HeaderService } from '../../components/template/header/header.service';

@Component({
  selector: 'app-license',
  templateUrl: './license.component.html',
  styleUrl: './license.component.css'
})
export class LicenseComponent {

  constructor(private headerService: HeaderService) {
    this.headerService.headerData = {
      title: 'Licença do projeto',
      icon: 'policy',
      routeUrl: ''
    }
  }

}
