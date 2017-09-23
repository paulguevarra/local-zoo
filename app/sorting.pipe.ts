import {Pipe, PipeTransform} from '@angular/core';
import {Animal} from './animal.model';

@Pipe({
  name: "sorting",
  pure: false
})

export class SortingPipe implements PipeTransform {
  transform(input: Animal[], desiredSorting){
    var output: Animal[] = [];
    if(desiredSorting === "matureAnimals") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].age >= 2) {
          output.push(input[i]);
        }
      }
      return output;
  } else if (desiredSorting === "youngAnimals") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].age < 2) {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }
}
