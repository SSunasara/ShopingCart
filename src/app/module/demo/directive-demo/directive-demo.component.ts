import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directive-demo',
  templateUrl: './directive-demo.component.html',
  styleUrls: ['./directive-demo.component.css']
})
export class DirectiveDemoComponent implements OnInit {

  cases = null;
  selectedValue: string;
  s:string;
  bgcolor:string;
  constructor() { }

  ngOnInit(): void {
    this.cases = ['One', 'Two', 'Three'];
    this.selectedValue = 'One';
  }

}
