import { Component } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'app-root',
  template: `
  <div class="container">
    <h1>Local Zoo for {{month}}/{{day}}/{{year}}</h1>
    <h3>{{currentFocus}}</h3>
    <animal-list [childAnimalList]="masterAnimalList" (clickSender)="editAnimal($event)"></animal-list>
    <hr>
    <div *ngIf="selectedAnimal">
      <h3>{{selectedAnimal.species}}</h3>
      <p>Task Complete? {{selectedAnimal.done}}</p>
      <h3>Edit Animal</h3>
      <label>Enter Animal Name:</label>
      <input [(ngModel)]="selectedAnimal.name">
      <br>
      <label>Enter Animal Age:</label>
      <input [(ngModel)]="selectedAnimal.age">
      <br>
      <label>Enter Animal Caretakers:</label>
      <input [(ngModel)]="selectedAnimal.caretakers">
      <br>
      <button (click)="finishedEditing()">Done</button>
   </div>
  </div>
  `
})

export class AppComponent {
  currentFocus: string = 'Animal List';
  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();

  selectedAnimal: Animal = null;

  masterAnimalList: Animal[] = [
    new Animal('Lion', 'King', 1, 'Carnivore', 'Savannah', 6, 'Female', 'Cool shade', 'Loud noises'),
    new Animal('Tiger', 'Nala', 1, 'Carnivore', 'Savannah', 5, 'Male', 'Skittles', 'Coldplay'),
    new Animal('Panda', 'Po', 2, 'Herbivore', 'Asia', 2, 'Male', 'Noodles', 'Homework'),
    new Animal('Unicorn', 'Juan', 8, 'Herbivore', 'Fantasy', 3, 'Female', 'Skittles', 'Coldplay'),
  ];

  editAnimal(clickedAnimal) {
    this.selectedAnimal = clickedAnimal;
  }


  finishedEditing() {
    this.selectedAnimal = null;
  }

}
