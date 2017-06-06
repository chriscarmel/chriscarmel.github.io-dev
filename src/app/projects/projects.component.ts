import { Component, OnInit } from '@angular/core';

import { ApiService } from '../api.service';

import { Project } from '../app.model';

@Component({
  selector: 'cc-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  public projectArray: Array<Project>;

  public constructor(
    private apiService: ApiService
  ) {
    this.projectArray = this.apiService.getProjectArray();
  }

  public ngOnInit(): void { }

}
