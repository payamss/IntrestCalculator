import { Component, OnInit } from '@angular/core';
import { MyMenu } from '../MenuList';
import { MyLeftList } from '../LeftList';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  /*
  leftMenu: MyMenu = {
    id: 1,
    name: 'Simple Intrest Rate'
  };
  */
 leftMenu=MyLeftList;
  constructor() { }

  ngOnInit() {
  }

}
