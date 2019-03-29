import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatToolbarModule, MatIconModule } from "@angular/material";

@NgModule({
  declarations: [],
  imports: [CommonModule, BrowserAnimationsModule],
  exports: [BrowserAnimationsModule, MatToolbarModule, MatIconModule]
})
export class SharedModule {}
