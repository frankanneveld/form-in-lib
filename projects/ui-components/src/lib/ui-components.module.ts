import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { CustomInputComponent } from "./custom-input/custom-input.component";

@NgModule({
  declarations: [CustomInputComponent],
  imports: [ReactiveFormsModule],
  exports: [CustomInputComponent],
})
export class UiComponentsModule {}
