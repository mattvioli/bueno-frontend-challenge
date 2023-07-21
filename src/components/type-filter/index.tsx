import { Button } from "components/button";
import { FilterContainer } from "components/filter-container";
import { TypeBadge } from "components/type-badge";
import { Dispatch, SetStateAction } from "react";

export const TypeFilter = ({
	typeList,
	selectedTypes,
	setSelectedTypes,
}: {
	typeList: String[];
	selectedTypes: String[];
	setSelectedTypes: Dispatch<SetStateAction<String[]>>;
}) => {
	const handleClick = (type: String) => {
		if (selectedTypes.includes(type)) {
			setSelectedTypes(
				selectedTypes.filter((preselected) => preselected != type)
			);
		} else {
			setSelectedTypes([...selectedTypes, type]);
		}
	};

	return (
		<FilterContainer>
			{typeList.map((type, index) => {
				return (
					<TypeBadge
						key={index}
						onClick={() => handleClick(type)}
						$selected={selectedTypes.includes(type)}
						$type={type.toLowerCase()}
					>
						{type}
					</TypeBadge>
				);
			})}
			<Button onClick={() => setSelectedTypes([])}>Clear All</Button>
		</FilterContainer>
	);
};