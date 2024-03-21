import { Component } from '@angular/core';
import { articles } from '../articles2';

@Component({
  selector: 'app-deals',
  templateUrl: './deals.component.html',
  styleUrl: './deals.component.css'
})
export class DealsComponent {
  articles = articles;
}
