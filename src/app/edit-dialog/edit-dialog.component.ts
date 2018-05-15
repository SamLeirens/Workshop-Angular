import { Component, Inject, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material";
import { Pokemon } from "../Model/Pokemon";
import { PokemonService } from "../Service/pokemon.service";

@Component({
  selector: "edit-dialog",
  templateUrl: "./edit-dialog.component.html",
  styleUrls: ["./edit-dialog.component.css"]
})
export class EditDialogComponent implements OnInit {
  pokemon: Pokemon;

  form: FormGroup;
  colour: any;
  showErrors = false;

  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<EditDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private pokemonService: PokemonService
  ) {}

  ngOnInit() {
    this.colour = "#2883e9";

    this.pokemonService.getPokemonById(this.data.pokemonId).subscribe(data => {
      this.pokemon = data as Pokemon;

      this.form = this.formBuilder.group({
        name: [
          this.pokemon.name,
          Validators.compose([
            Validators.maxLength(20),
            Validators.required,
            Validators.minLength(3)
          ])
        ],
        type: [this.pokemon.type, Validators.required],
        color: [this.pokemon.color, Validators.required]
      });
    });
  }

  submit(form) {
    this.showErrors = true;
    if (this.form.valid) {
      this.dialogRef.close(this.pokemon);
    }
  }
}
