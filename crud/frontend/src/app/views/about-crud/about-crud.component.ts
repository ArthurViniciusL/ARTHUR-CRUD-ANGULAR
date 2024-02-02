import { Component } from '@angular/core';
import { HeaderService } from '../../components/template/header/header.service';

@Component({
  selector: 'app-about-crud',
  templateUrl: './about-crud.component.html',
  styleUrl: './about-crud.component.css'
})
export class AboutCrudComponent {
    constructor(private headerService: HeaderService) {
      this.headerService.headerData = {
        title: 'Sobre o projeto',
        icon: 'info',
        routeUrl: ''
      }
    }  
  }
