import { Component } from '@angular/core';
import { TopMenu } from './components/scrollable-tab';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '拼多多';

  TopMenu: TopMenu[] = [{
    title: '热门',
    link: ''
  },
  {
    title: '男装'
  }];

  handledSelect(index: string | number) {
    console.log('outside', index);

  }
}
