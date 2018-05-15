import { InMemoryDbService } from "angular-in-memory-web-api";

export class PokemonDataService implements InMemoryDbService {
  createDb() {
    const pokemons = [
      { id: 1, name: "Pickachu", type: "Electric", color: "#aac938" },
      { id: 2, name: "Bulbasaur", type: "Grass", color: "#30cf2d" },
      { id: 3, name: "Charmander", type: "Fire", color: "#de2525" },
      { id: 4, name: "Pidgey", type: "Flying", color: "#20c6e0" },
      { id: 5, name: "Nidoran", type: "Poison", color: "#d21ce6" },
      { id: 6, name: "Hitmonlee", type: "Fighting", color: "#e6811c" },
      { id: 7, name: "Aerodactyl", type: "Rock", color: "#a68800" },
      { id: 8, name: "Snorlax", type: "Normal", color: "#0e9678" },
      { id: 9, name: "Dratini", type: "Dragon", color: "#de11ca" },
      { id: 10, name: "Mewtwo", type: "Psychic", color: "#de4c4c" }
    ];
    return { pokemons };
  }
}
