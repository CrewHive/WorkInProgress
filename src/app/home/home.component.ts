import { NgFor, NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [NgFor, NgClass]
})

export class HomeComponent {

  readonly carouselItems: string[] = ["miao", "miao2", "miao3"];

  currentIndex: number = 0;

  next(): void {
    this.currentIndex = (this.currentIndex + 1) % this.carouselItems.length;
  }

  prev(): void {
    this.currentIndex = (this.currentIndex - 1 + this.carouselItems.length) % this.carouselItems.length;

  }
}
