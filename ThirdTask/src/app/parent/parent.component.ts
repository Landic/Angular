import { Component } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
  petsData = [
    {
      name: "Purrsloud",
      species: "Cat",
      favFoods: ["wet food", "dry food", "any food"],
      birthYear: 2017,
      photo: "https://learnwebcode.github.io/json-example/images/cat-2.jpg"
    },
    {
      name: "Barksalot",
      species: "Dog",
      birthYear: 2008,
      photo: "https://learnwebcode.github.io/json-example/images/dog-1.jpg"
    },
    {
      name: "Meowsalot",
      species: "Cat",
      favFoods: ["tuna", "catnip", "celery"],
      birthYear: 2024,
      photo: "https://learnwebcode.github.io/json-example/images/cat-1.jpg"
    }
  ];
}
