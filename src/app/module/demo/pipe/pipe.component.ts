import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.css']
})
export class PipeComponent implements OnInit {

  currency = 99999999;
  date = new Date();
  text = 'This is some random text';
  decimal = 78560.66;
  image: string = null;
  constructor() { }

  ngOnInit(): void {
  }

}
