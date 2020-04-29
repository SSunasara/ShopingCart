import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  Test_Text = "Default Text";
  Test_Checkbox = true;
  Test_Select = "op2";

  
  PropBinding = "Property Binding";

  ClickMessage = "";
  constructor() { 
    
  }

  ngOnInit(): void {
  }

  clear(){
    this.ClickMessage = "";
  }

  clickFirst(){
    this.ClickMessage += " First Div Clicked!!! \n ";
  }

  clickSecond(){
    this.ClickMessage += " Second Div Clicked!! \n ";
  }

  clickThird(){
    this.ClickMessage += ' Third Div Clicked!!';
  }

  clickButton1(){
    this.ClickMessage += ' Button1 Clicked!!';
  }

  clickButton2(){
    this.ClickMessage += ' Button2 Clicked!!';
  }


}
