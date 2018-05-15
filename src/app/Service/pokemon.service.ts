import { Pokemon } from "./../Model/Pokemon";
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" })
};

@Injectable({
  providedIn: "root"
})
export class PokemonService {
  private url = "api/pokemons";

  constructor(private http: HttpClient) {}

  getPokemons() {
  return this.http.get<Pokemon[]>(this.url);
}

  addPokemon(pokemon: Pokemon) {
    return this.http.post<Pokemon>(this.url, pokemon, httpOptions);
  }

  getPokemonById(id: number) {
    const pokemonUrl = `${this.url}/${id}`;
    return this.http.get<Pokemon>(pokemonUrl);
  }

  updatePokemon (pokemon: Pokemon){
    return this.http.put(this.url, pokemon, httpOptions);
  }

  deletePokemon(id: number) {
    const pokemonUrl = `${this.url}/${id}`;

    return this.http.delete<Pokemon>(pokemonUrl, httpOptions);
  }

  getPokemonsBySearch(searchString: string){
    if(searchString === ''){
      return this.getPokemons();
    } else {
      const pokemonUrl = `${this.url}/?name=${searchString}`;
      return this.http.get<Pokemon[]>(pokemonUrl);
    }
  }
}
