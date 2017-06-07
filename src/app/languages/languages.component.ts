import { Component, OnInit } from '@angular/core';

import { ApiService } from '../api.service';

import { Language } from '../app.constant';

@Component({
  selector: 'cc-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.scss']
})
export class LanguagesComponent implements OnInit {

  public languageNameArray: Array<string>;

  public constructor(
    private apiService: ApiService
  ) {
    this.languageNameArray = this.apiService.getLanguageNameArray();
  }

  public ngOnInit(): void {
  }

}
