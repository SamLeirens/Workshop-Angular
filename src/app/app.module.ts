import { PokemonDataService } from './Service/In-memory-data.service';
import { OverzichtModule } from './Overzicht/overzicht.module';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { provideRoutes} from '@angular/router';
import { AppComponent } from './app.component';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { HttpClientModule } from '@angular/common/http';
import { ColorPickerModule } from 'ngx-color-picker';
import {MatDialogModule} from '@angular/material/dialog';
import { EditDialogComponent } from './edit-dialog/edit-dialog.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { ToevoegenDialogComponent } from './toevoegen-dialog/toevoegen-dialog.component';
import { SearchBarComponent } from './search-bar/search-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    EditDialogComponent,
    ToevoegenDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    OverzichtModule,
    HttpClientModule,
    ColorPickerModule,
    BrowserAnimationsModule,
    MatDialogModule,
   HttpClientInMemoryWebApiModule.forRoot(PokemonDataService)
  ],
  exports:[ColorPickerModule],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [EditDialogComponent, ToevoegenDialogComponent]
})
export class AppModule { }
