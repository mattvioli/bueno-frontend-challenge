import { ListContainer } from "components/list-container";
import jsonData from "data/pokemon-gen1.json";
import type { Pokemon } from "types";

const data = jsonData as Pokemon[];

export const TeamBuilder = () => {
	return (
		<>
			<h1>Find Pokémon to build your team!</h1>
			<p>Type selector here</p>
			<ListContainer>Pokemon here!</ListContainer>
		</>
	);
};