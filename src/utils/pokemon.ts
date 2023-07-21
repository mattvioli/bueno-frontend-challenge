import { Pokemon, PokemonStat, ParsedPokemonStats } from "types";
import { capitalize } from "./common";

export const parsePokemonStats = (pokemonStats: PokemonStat[]) => {
	return pokemonStats.reduce(
		(acc: ParsedPokemonStats, curr: PokemonStat) => {
			return { ...acc, [curr.stat_name]: curr.base_stat };
		},
		{
			hp: "0",
			attack: "0",
			defense: "0",
			speed: "0",
			"special-attack": "0",
			"special-defense": "0",
		}
	);
};

export const filterPokemon = (pokemons: Pokemon[], selectedTypes: String[]) =>
	selectedTypes.length
		? pokemons.filter((pokemon) =>
				pokemon.types.some((type) =>
					selectedTypes.includes(capitalize(type.type_name))
				)
		  )
		: pokemons;