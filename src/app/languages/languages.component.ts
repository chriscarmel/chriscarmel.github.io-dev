import { Component, OnInit } from '@angular/core';

import { ApiService } from '../api.service';

import { Language } from '../app.model';

@Component({
  selector: 'cc-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.scss']
})
export class LanguagesComponent implements OnInit {

  public languageArray: Array<Language>;

  public constructor(
    private apiService: ApiService
  ) {
    this.languageArray = this.apiService.getLanguageArray();
  }

  public ngOnInit(): void {
  }

}
