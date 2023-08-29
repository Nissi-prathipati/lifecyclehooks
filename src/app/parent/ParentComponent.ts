import { Component, OnChanges, OnInit } from '@angular/core';


@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit, OnChanges {

  Ischild = true;
  ChannelName='';
  constructor() {
    console.log('Parent constructor is called');
  }
  ngOnInit(): void {
    console.log('Parent OnInit is called');
  }
  tchild() {
    this.Ischild = !this.Ischild;
  }
  ngOnChanges()
  {
    console.log("parent Onchanges is called");
  }

}
