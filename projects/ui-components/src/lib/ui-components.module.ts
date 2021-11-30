import { CustomInputComponent } from "./custom-input/custom-input.component";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";

@NgModule({
  declarations: [CustomInputComponent],
  imports: [ReactiveFormsModule],
  exports: [CustomInputComponent],
})
export class UiComponentsModule {}
