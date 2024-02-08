import { HeaderService } from './../../components/template/header/header.service';
import { Component, NgModule } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',

})

export class HomeComponent {

  constructor(private headerService: HeaderService) {
    this.headerService.headerData = {
      title: 'Início',
      icon: 'home',
      iconMsg: 'Início',
      routeUrl: ''
    }
  }

}
