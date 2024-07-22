import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.scss',
})
export class NavigationComponent {
  siteName: string = 'CCWorld';
  pathLogo: string = '../../assets/logo.png';
  homePage: string = 'home';
  upcomingPage: string = 'upcoming';
}
