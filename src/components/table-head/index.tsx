import { styled } from "styled-components";

export const TableHead = styled.thead`
	margin-bottom: 16px;
	text-align: justify;
	&:after {
		content: "@";
		display: block;
		line-height: 16px;
		text-indent: -99999px;
	}
`;