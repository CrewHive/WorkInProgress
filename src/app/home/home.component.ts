import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

    repeatAnimationo(): void {
        const element = document.getElementById("wip");
        if (element) {
            element.classList.remove('animate__animated');
            void element.offsetWidth; // Trigger reflow
            element.classList.add('animate__animated');
        }
    }
}
