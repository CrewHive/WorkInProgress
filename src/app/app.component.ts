import { Component } from '@angular/core';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './shared/footer/footer.component';

@Component({
  standalone: true,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  imports: [NavbarComponent, HomeComponent, FooterComponent]
  
})
export class AppComponent {
  title = 'work-in-progress';
}
