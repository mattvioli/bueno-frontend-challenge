import { styled } from "styled-components";

export const PokemonStatsWrapper = styled.div<{ $highlighted?: boolean }>`
	display: flex;
	justify-content: center;
	color: ${(props) => props.$highlighted && "var(--color-red)"};
`;