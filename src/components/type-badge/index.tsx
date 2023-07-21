import { styled } from "styled-components";

export const TypeBadge = styled.button<{ $type?: String; $selected?: Boolean }>`
	width: fit-content;
	display: flex;
	height: 32px;
	padding: 0px 8px;
	align-items: center;
	border-radius: 16px;
	border: ${(props) => `1px solid var(--color-type-${props.$type})`};
	color: ${(props) =>
		props.$selected
			? "var(--color-white)"
			: `var(--color-type-${props.$type}-alt)`};
	background-color: ${(props) =>
		props.$selected
			? `var(--color-type-${props.$type}-alt)`
			: "var(--color-white)"};
	font-weight: bold;
`;