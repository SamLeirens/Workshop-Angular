import { Pokemon } from "./../Model/Pokemon";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatDialogRef } from "@angular/material";

@Component({
  selector: "app-toevoegen-dialog",
  templateUrl: "./toevoegen-dialog.component.html",
  styleUrls: ["./toevoegen-dialog.component.css"]
})
export class ToevoegenDialogComponent implements OnInit {
  form: FormGroup;
  colour: any;
  showErrors = false;

  constructor(
    private formBuilder: FormBuilder,
    private dialogRef: MatDialogRef<ToevoegenDialogComponent>
  ) {}

  ngOnInit() {
    this.colour = "#2883e9";

    this.form = this.formBuilder.group({
      name: ["", Validators.compose([Validators.maxLength(20),Validators.required,Validators.minLength(3)])],
      type: ["", Validators.required],
      color: ["", Validators.required]
    });
  }

  submit(form) {
    this.showErrors = true;
    if (this.form.valid) {
      let pokemon = new Pokemon(
        form.value.name,
        form.value.type,
        form.value.color
      );
      this.dialogRef.close(pokemon);
    }
  }
}
