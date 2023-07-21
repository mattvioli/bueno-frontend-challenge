import { PokemonStatsWrapper } from "components/pokemon-stats-wrapper";
import { ReactNode } from "react";

export const PokemonStats = ({ children }: { children: ReactNode }) => {
	return (
		<PokemonStatsWrapper $highlighted={Boolean(children && children >= 90)}>
			{children}
		</PokemonStatsWrapper>
	);
};