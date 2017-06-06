import { Component, OnInit } from '@angular/core';

import { ApiService } from '../api.service';

import { Post } from '../app.model';

@Component({
  selector: 'cc-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public postArray: Array<Post>;

  public constructor(
    private apiService: ApiService
  ) {
    this.postArray = this.apiService.getPostArray();
  }

  public ngOnInit(): void { }
}
