import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {

  private movieId: string;

  constructor() { }

  ngOnInit() {
  }

}
