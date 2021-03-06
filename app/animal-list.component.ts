import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-list',
  template: `
  <select (change)="onChange($event.target.value)">
    <option value="allAnimals" selected="selected">All Animals</option>
    <option value="youngAnimals">Animals Age Below 2 yrs</option>
    <option value="matureAnimals">Animals Age +2 yrs</option>
  </select>
  <ul>
    <li (click)="isDone(currentAnimal)" *ngFor="let currentAnimal of childAnimalList | sorting:filterBySorting">{{currentAnimal.species}}
<!--    <input *ngIf="currentAnimal.done === true" type="checkbox" checked (click)="toggleDone(currentAnimal, false)"/>
    <input *ngIf="currentAnimal.done === false" type="checkbox" (click)="toggleDone(currentAnimal, true)"/> -->
    <button (click)="editButtonHasBeenClicked(currentAnimal)">Edit!</button>
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
  `
})

export class AnimalListComponent {
  @Input() childAnimalList: Animal[];
  @Output() clickSender = new EventEmitter();

  filterBySorting: string = "allAnimals";

  onChange(optionFromMenu) {
    this.filterBySorting = optionFromMenu;
  }

  // toggleDone(clickedAnimal: Animal, setSorting: boolean) {
  //    clickedAnimal.done = setSorting;
  //  }

  editButtonHasBeenClicked(animalToEdit: Animal) {
    this.clickSender.emit(animalToEdit);
  }

  // isDone(clickedAnimal: Animal) {
  //   if(clickedAnimal.done === true) {
  //     alert("This Animal is done!");
  //   } else {
  //     alert("This Animal is not done. Better get to work!");
  //   }
  // }

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
