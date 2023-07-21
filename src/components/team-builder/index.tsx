import { useState } from "react";
import { Header } from "components/header";
import { TypeFilter } from "components/type-filter";
import { TeamContainer } from "components/team-container";
import { PokemonTable } from "components/pokemon-table";
import { HeaderContainer } from "components/header-container";
import jsonData from "data/pokemon-gen1.json";
import pokemonTypeData from "data/pokemon-types.json";
import type { Pokemon } from "types";

const pokemonData = jsonData as Pokemon[];

export const TeamBuilder = () => {
	const [selectedTypes, setSelectedTypes] = useState<String[]>([]);
	return (
		<TeamContainer>
			<HeaderContainer>
				<Header>Find Pokémon to build your team!</Header>
				<TypeFilter
					typeList={pokemonTypeData}
					{...{ selectedTypes, setSelectedTypes }}
				/>
			</HeaderContainer>
			<PokemonTable pokemons={pokemonData} {...{ selectedTypes }} />
		</TeamContainer>
	);
};