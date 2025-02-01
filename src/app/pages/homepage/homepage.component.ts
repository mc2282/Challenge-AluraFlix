import { Component } from '@angular/core';
import { CardsComponent } from "../../components/cards/cards.component";
import { HomeComponent } from '../../components/home/home.component';

@Component({
  selector: 'app-homepage',
  standalone: true,
  imports: [CardsComponent, HomeComponent],
  templateUrl: './homepage.component.html',
  styleUrl: './homepage.component.css'
})
export class HomepageComponent {

}
