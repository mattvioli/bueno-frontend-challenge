import { Pokemon, PokemonType } from "types";
import { ListContainer } from "components/list-container";
import { Table } from "components/table";
import { TypeBadge } from "components/type-badge";
import { capitalize } from "utils/common";
import { filterPokemon, parsePokemonStats } from "utils/pokemon";
import { PokemonSprite } from "components/pokemon-sprite";
import { TableData } from "components/table-data";
import { PokemonStats } from "components/pokemon-stats";
import { PokemonDisplay } from "components/pokemon-display";
import { TableTypes } from "components/table-types";
import { TableHead } from "components/table-head";

const TABLE_HEADERS = [
	"Pokemon",
	"Type(s)",
	"Attack",
	"Sp. Attack",
	"Defence",
	"Sp. Defence",
	"Speed",
	"Hit Points",
];

export const PokemonTable = ({
	pokemons,
	selectedTypes,
}: {
	pokemons: Pokemon[];
	selectedTypes: String[];
}) => {
	const filteredPokemon = filterPokemon(pokemons, selectedTypes);
	return (
		<Table>
			<TableHead>
				<tr>
					{TABLE_HEADERS.map((header, index) => (
						<th key={index}>{header}</th>
					))}
				</tr>
			</TableHead>
			<ListContainer>
				{filteredPokemon.length > 0 ? (
					filteredPokemon.map((pokemon, index) => {
						const pokemonStats = parsePokemonStats(pokemon.stats);
						return (
							<tr key={index}>
								<PokemonDisplay>
									<PokemonSprite src={pokemon.sprite.front_url} />
									{pokemon.name}
								</PokemonDisplay>
								<TableData>
									<TableTypes>
										{pokemon.types.map((type: PokemonType, index) => (
											<TypeBadge
												key={index}
												$selected={selectedTypes.includes(
													capitalize(type.type_name)
												)}
												$type={type.type_name}
											>
												{capitalize(type.type_name)}
											</TypeBadge>
										))}
									</TableTypes>
								</TableData>
								<TableData>
									<PokemonStats>{pokemonStats.attack}</PokemonStats>
								</TableData>
								<TableData>
									<PokemonStats>{pokemonStats["special-attack"]}</PokemonStats>
								</TableData>
								<TableData>
									<PokemonStats>{pokemonStats.defense}</PokemonStats>
								</TableData>
								<TableData>
									<PokemonStats>{pokemonStats["special-defense"]}</PokemonStats>
								</TableData>
								<TableData>
									<PokemonStats>{pokemonStats.speed}</PokemonStats>
								</TableData>
								<TableData>
									<PokemonStats>{pokemonStats.hp}</PokemonStats>
								</TableData>
							</tr>
						);
					})
				) : (
					<tr>No Pokemon with that type found</tr>
				)}
			</ListContainer>
		</Table>
	);
};