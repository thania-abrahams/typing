import { Component } from '@angular/core';
import { lorem } from 'faker';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  randomText = lorem.sentence();
  inputText = '';

  onInputChange(value: string) {
    this.inputText = value;
  }

  compare(randomLetter: string, inputLetter: string) {
    if(!inputLetter) {
      return 'pending';
    }

    return randomLetter === inputLetter ? 'correct' : 'incorrect';
  }
}
