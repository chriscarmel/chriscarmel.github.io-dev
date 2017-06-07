import { Component, Input, OnInit } from '@angular/core';

import { Post, Project } from '../../app.model';

@Component({
  selector: 'cc-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input()
  public post: Post;

  public constructor() {}

  public ngOnInit(): void {
    // console.log('this.post', this.post);
  }

}
