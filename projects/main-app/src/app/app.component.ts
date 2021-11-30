import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormControl, NgControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  @ViewChild('fc2', { static: true }) fc2: ElementRef | undefined;

  public form = new FormGroup({
    myInput1:  new FormControl('myInput1'),
    myInput2:  new FormControl('myInput2'),
    myInput3:  new FormControl('myInput3')
  })
}
