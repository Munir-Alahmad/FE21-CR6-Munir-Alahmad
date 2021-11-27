import { Component, OnInit } from '@angular/core';
import { travels } from '../travels';
@Component({
  selector: 'backeges',
  templateUrl: './backeges.component.html',
  styleUrls: ['./backeges.component.css']
})
export class BackegesComponent implements OnInit {
travels = travels;
  constructor() { }

  ngOnInit(): void {
  }

}
