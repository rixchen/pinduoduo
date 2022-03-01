import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

export interface TopMenu {
  title: string;
  readonly link?: string;
}

@Component({
  selector: 'app-scrollable-tab',
  templateUrl: './scrollable-tab.component.html',
  styleUrls: ['./scrollable-tab.component.css']
})
export class ScrollableTabComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  


  @Input() Menu: TopMenu[] = []

  @Output() SelectIndexEmit = new EventEmitter()

  handleClick(index : string | number)  {
      // console.log(index)
      this.SelectIndexEmit.emit(index)
  }

}
