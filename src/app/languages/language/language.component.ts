import { Component, Input, OnInit } from '@angular/core';

import { Language, Project } from '../../app.model';

@Component({
  selector: 'cc-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.scss']
})
export class LanguageComponent implements OnInit {

  @Input()
  public language: Language;

  public constructor() {
    this.language = new Language();
  }

  public ngOnInit(): void { }

}
