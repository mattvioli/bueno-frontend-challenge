import pokemonLogo from "img/pokemon-logo.png";
import { NavWrapper } from "./Wrapper";
import { PokemonLogo } from "./PokemonLogo";

export const Nav = () => {
	return (
		<NavWrapper>
			<PokemonLogo alt="Pokémon Logo" src={pokemonLogo} />
		</NavWrapper>
	);
};