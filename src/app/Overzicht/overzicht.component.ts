import { ToevoegenDialogComponent } from "./../toevoegen-dialog/toevoegen-dialog.component";
import { EditDialogComponent } from "./../edit-dialog/edit-dialog.component";
import { PokemonService } from "./../Service/pokemon.service";
import { Pokemon } from "./../Model/Pokemon";
import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { MatDialog } from "@angular/material/dialog";
import { isNullOrUndefined, isNull } from "util";

@Component({
  selector: "app-overzicht",
  templateUrl: "./overzicht.component.html",
  styleUrls: ["./overzicht.component.css"],
  encapsulation: ViewEncapsulation.None
})
export class OverzichtComponent implements OnInit {
  pokemons: Pokemon[] = [];

  constructor(
    private pokemonService: PokemonService,
    public dialog: MatDialog
  ) {}

  ngOnInit() {
    this.fetchPokemons();
  }

  fetchPokemons() {
    this.pokemonService.getPokemons().subscribe(data => (this.pokemons = data));
  }

  add() {
    let dialogRef = this.dialog.open(ToevoegenDialogComponent);

    dialogRef.afterClosed().subscribe(data => {
      if (!isNullOrUndefined(data)) {
        if (!isNullOrUndefined(data.name)) {
          this.pokemonService
            .addPokemon(data)
            .subscribe(() => this.fetchPokemons());
        }
      }
    });
  }

  edit(id: number) {
    let config = {
      data: {
        pokemonId: id
      }
    };

    let dialogRef = this.dialog.open(EditDialogComponent, config);

    dialogRef.afterClosed().subscribe(data => {
      if (!isNullOrUndefined(data)) {
        if (!isNullOrUndefined(data.name)) {
          this.pokemonService
            .updatePokemon(data)
            .subscribe(() => this.fetchPokemons());
        }
      }
    });
  }

  delete(id: number) {
    this.pokemonService.deletePokemon(id).subscribe(() => this.fetchPokemons());
  }

  ShowSearchResults(searchResults: Pokemon[]) {
    this.pokemons = searchResults;
  }

  clearPokedex() {
    this.pokemons = [];
  }
}
