import { Component, OnInit } from '@angular/core';

import { ApiService } from '../api.service';

import { Post } from '../app.model';
import { POST_COMPARE_FUNCTION } from '../app.constant';

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
    this.postArray = this.postArray.sort(POST_COMPARE_FUNCTION);
  }

  public ngOnInit(): void { }
}
