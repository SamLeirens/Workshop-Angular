import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Pokemon} from "../Model/Pokemon";
import {PokemonService} from "../Service/pokemon.service";

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  @Output() SearchCompleted: EventEmitter<Pokemon[]> = new EventEmitter();

  constructor(private pokemonService: PokemonService) { }

  ngOnInit() {
  }

  search(searchString: string) {
  this.pokemonService.getPokemonsBySearch(searchString).subscribe(data => this.SearchCompleted.emit(data as Pokemon[]));
  }

}
