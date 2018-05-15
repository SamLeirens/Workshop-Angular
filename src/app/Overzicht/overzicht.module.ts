import { ColorPickerModule } from 'ngx-color-picker';
import { OverzichtComponent } from "./overzicht.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {SearchBarComponent} from "../search-bar/search-bar.component";

@NgModule({
  imports: [CommonModule,ColorPickerModule],
  declarations: [OverzichtComponent, SearchBarComponent]
})
export class OverzichtModule {}
 