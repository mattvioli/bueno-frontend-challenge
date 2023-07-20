import { Header } from "components/header";
import { ListContainer } from "components/list-container";
import jsonData from "data/pokemon-gen1.json";
import type { Pokemon } from "types";

const data = jsonData as Pokemon[];

export const TeamBuilder = () => {
	return (
		<>
			<Header>Find Pokémon to build your team!</Header>
			<p>Type selector here</p>
			<p>Type list headers here</p>
			<ListContainer>Pokemon here!</ListContainer>
		</>
	);
};