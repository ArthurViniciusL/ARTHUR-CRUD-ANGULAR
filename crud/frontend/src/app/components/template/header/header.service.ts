import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HeaderData } from './header-data.model';

@Injectable({
  providedIn: 'root'
})
export class HeaderService implements OnInit {
  
  constructor() { }
  
  ngOnInit(): void { }
  
    private _headerData = new BehaviorSubject<HeaderData>({
      title: 'Início',
      icon: 'home',
      routeUrl: ''
    });
  
    get headerData(): HeaderData {
      return this._headerData.value
    }

    set headerData(headerData: HeaderData) {
      this._headerData.next(headerData);
    }
}

