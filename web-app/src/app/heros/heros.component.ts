import { Component, OnInit } from '@angular/core';
import { Hero, HEROES } from '../module/hero';

@Component({
  selector: 'app-heros',
  templateUrl: './heros.component.html',
  styleUrls: ['./heros.component.css']
})
export class HerosComponent implements OnInit {

  heroes:Hero[];
  constructor() { }

  ngOnInit() {
    this.heroes = HEROES;
  }

}
