import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>Local Zoo for {{month}}/{{day}}/{{year}}</h1>
    <h3>{{currentFocus}}</h3>
    <ul>
      <li *ngFor="let currentAnimal of animals">{{currentAnimal.species}}</li>
    </ul>
  </div>
  `
})

export class AppComponent {
  currentFocus: string = 'Animal List';
  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();
  animals: Animal[] = [
    new Animal("Lion", "King", 2, "Carnivore", "Savannah", 6, "Female", "Cool shade", "Loud noises"),
    new Animal("Tiger", "Nala", 2, "Carnivore", "Savannah", 5, "Male", "Skittles", "Coldplay"),
    new Animal("Panda", "Po", 4, "Herbivore", "Asia", 2, "Male", "Noodles", "Homework"),
    new Animal("Unicorn", "Juan", 8, "Herbivore", "Fantasy", 3, "Female", "Skittles", "Coldplay"),
  ]
}
export class Animal {
  public done: false;
  constructor (public species: string, public name: string, public age: number, public diet: string, public location: string, public caretakers: number, public sex: string, public likes: string, public dislikes: string) {}
}
