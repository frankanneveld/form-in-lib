import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public form = new FormGroup({
    myInput1:  new FormControl('myInput1'),
    myInput2:  new FormControl('myInput2'),
    myInput3:  new FormControl('myInput3')
  })
}
