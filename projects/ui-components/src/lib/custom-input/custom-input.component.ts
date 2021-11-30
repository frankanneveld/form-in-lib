import { Component, Input, OnInit } from '@angular/core';
import { ControlValueAccessor, FormControl, NgControl } from '@angular/forms';

@Component({
  selector: 'lib-custom-input',
  templateUrl: './custom-input.component.html',
  styleUrls: ['./custom-input.component.scss']
})
export class CustomInputComponent implements OnInit {

  @Input() name = '';

  public input: FormControl = new FormControl();

  protected onChange: any = (_: any) => ({});
  protected onTouched: any = () => ({});
  protected onValue: any = () => ({});

  constructor(private ngControl: NgControl) { 
    ngControl.valueAccessor = this as unknown as ControlValueAccessor;
  }

  ngOnInit(): void {
    this.input = this.ngControl.control as FormControl;
  }

  public writeValue(val: any): void {
    // Deze is niet nodig als er al een value gezet wordt vanuit een ander component.
    // Maar moet wel geimplementeerd worden vanwege de ControlValueAccessor interface.
    this.onValue(val);
  }

  public registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  public registerOnTouched(fn: any): void {
    this.onChange = fn;
  }

  public setValue(val: any): void {
    this.input.patchValue(val);
  }

}
