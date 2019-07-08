import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'my-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];
  otherHeroes: Hero[] = [];
  isHighlightingLong1: boolean;
  isHighlightingLong2: boolean;

  constructor(
    private router: Router,
    private heroService: HeroService) {
  }

  ngOnInit(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => {
        this.heroes = heroes.slice(1, 5);
        this.otherHeroes = heroes.slice(5);
      });
  }

  addRandomHero(): void {
    if (this.otherHeroes.length) {
      this.heroes.push(this.otherHeroes.pop());
    }
  }

  gotoDetail(hero: Hero): void {
    const link = ['/detail', hero.id];
    this.router.navigate(link);
  }
}
