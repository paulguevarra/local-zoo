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
    <new-animal (newAnimalSender)="addAnimal($event)"></new-animal>
    <div *ngIf="selectedAnimal">
      <h3>{{selectedAnimal.species}}</h3>
      <p>Task Complete? {{selectedAnimal.done}}</p>
      <h3>Edit Animal</h3>
      <label>Enter Animal Species:</label>
      <input [(ngModel)]="selectedAnimal.species">
      <br>
      <label>Enter Animal Name:</label>
      <input [(ngModel)]="selectedAnimal.name">
      <br>
      <label>Enter Animal Age:</label>
      <input [(ngModel)]="selectedAnimal.age">
      <br>
      <label>Enter Animal Diet:</label>
      <input [(ngModel)]="selectedAnimal.diet">
      <br>
      <label>Enter Animal Location:</label>
      <input [(ngModel)]="selectedAnimal.location">
      <br>
      <label>Enter Animal Caretakers:</label>
      <input [(ngModel)]="selectedAnimal.caretakers">
      <br>
      <label>Enter Animal Sex:</label>
      <input [(ngModel)]="selectedAnimal.sex">
      <br>
      <label>Enter Animal Likes:</label>
      <input [(ngModel)]="selectedAnimal.likes">
      <br>
      <label>Enter Animal Dislikes:</label>
      <input [(ngModel)]="selectedAnimal.dislikes">
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
  addAnimal(newAnimalFromChild: Animal) {
  this.masterAnimalList.push(newAnimalFromChild);
}

}
