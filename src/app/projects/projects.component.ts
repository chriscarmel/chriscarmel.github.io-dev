import { Component, OnInit } from '@angular/core';

import { ApiService } from '../api.service';

import { Project } from '../app.model';
import { PROJECT_COMPARE_FUNCTION } from '../app.constant';
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
    this.projectArray = this.projectArray.sort(PROJECT_COMPARE_FUNCTION);
  }

  public ngOnInit(): void { }

}
