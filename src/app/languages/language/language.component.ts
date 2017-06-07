import { Component, Input, OnInit } from '@angular/core';

import { Language } from '../../app.constant';
import { Project } from '../../app.model';

@Component({
  selector: 'cc-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.scss']
})
export class LanguageComponent implements OnInit {

  @Input()
  public language: string;

  public constructor() {
    this.language = '';
  }

  public ngOnInit(): void { }

}
