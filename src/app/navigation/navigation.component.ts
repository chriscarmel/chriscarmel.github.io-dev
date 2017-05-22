import { Component, OnInit } from '@angular/core';

class NavigationSection {
  public heading: string;
  public url: string;

  public constructor(
    heading: string,
    url: string
  ) {
    this.heading = heading;
    this.url = url;
  }
}

const NAVIGATION_SECTION_ARRAY: Array<NavigationSection> = [
  new NavigationSection('Projects', '/projects'),
  new NavigationSection('Languages', '/languages'),
  new NavigationSection('Frameworks', '/frameworks'),
  new NavigationSection('Concepts', '/concepts'),
  new NavigationSection('About', '/about')
];

@Component({
  selector: 'cc-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  public navigationSectionArray: Array<NavigationSection>;

  public constructor() {
    this.navigationSectionArray = NAVIGATION_SECTION_ARRAY;
  }

  public ngOnInit(): void {
  }

}
