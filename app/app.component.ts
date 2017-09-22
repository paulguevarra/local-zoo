import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>Local Zoo for {{month}}/{{day}}/{{year}}</h1>
    <h3>{{currentFocus}}</h3>
    <ul>
      <li [class]="sortAge(currentAnimal)" (click)="isDone(currentAnimal)" *ngFor="let currentAnimal of animals">{{currentAnimal.species}} <button (click)="editAnimal()">Edit!</button>
<ul>
  <li>Name: {{this.currentAnimal.name}}</li>
  <li>Age: {{this.currentAnimal.age}}</li>
  <li>Diet: {{this.currentAnimal.diet}}</li>
  <li>Location: {{this.currentAnimal.location}}</li>
  <li>Caretakers: {{this.currentAnimal.caretakers}}</li>
  <li>Sex: {{this.currentAnimal.sex}}</li>
  <li>Likes: {{this.currentAnimal.likes}}</li>
  <li>Dislikes: {{this.currentAnimal.dislikes}}</li>
</ul>
      </li>
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
    new Animal('Lion', 'King', 1, 'Carnivore', 'Savannah', 6, 'Female', 'Cool shade', 'Loud noises'),
    new Animal('Tiger', 'Nala', 1, 'Carnivore', 'Savannah', 5, 'Male', 'Skittles', 'Coldplay'),
    new Animal('Panda', 'Po', 2, 'Herbivore', 'Asia', 2, 'Male', 'Noodles', 'Homework'),
    new Animal('Unicorn', 'Juan', 8, 'Herbivore', 'Fantasy', 3, 'Female', 'Skittles', 'Coldplay'),
  ]
  editAnimal() {
  alert("You just requested to edit an Animal!");
  }
  isDone(clickedAnimal: Animal) {
    if(clickedAnimal.done === true) {
      alert("This Animal is done!");
    } else {
      alert("This Animal is not done. Better get to work!");
    }
  }
  sortAge(currentAnimal){
    if (currentAnimal.age < 2){
      return "bg-success";
    } else if (currentAnimal.age >= 2) {
      return  "bg-danger";
    } else {
      return "bg-info";
    }
  }
}
export class Animal {
  public done: boolean = false;
  constructor (public species: string, public name: string, public age: number, public diet: string, public location: string, public caretakers: number, public sex: string, public likes: string, public dislikes: string) {}
}
