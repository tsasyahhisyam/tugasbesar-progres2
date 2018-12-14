import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Response } from 'selenium-webdriver/http';

import { DataStorageService } from '../shared/data-storage.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private dataStorageService: DataStorageService) {

  }
  onSaveData() {
    this.dataStorageService.storeDvds()
    .subscribe(
      (response: Response) => {
        console.log(response);
      }
    );
  }
  onFetchData() {
    this.dataStorageService.getDvds();
  }
  ngOnInit() {
  }

}
