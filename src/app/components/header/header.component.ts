import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  app_name: string = 'HIV Tools Resistance';

  constructor() { }

  ngOnInit(): void {
  }

}
