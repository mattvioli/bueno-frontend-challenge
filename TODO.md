# TODO

As time constraints, this is not 100% what I would like it to be.
Here is a list of things still to do.

1. Write unit tests for utils functions
2. Write unit tests to ensure buttons work/don't get broken
3. PokemonTable component is to big, split into Head and Body components
4. Replace snapshot tests with visual regression test
5. Add horizontal break line between pokemon in the table

## Extensions

### Select up to 6 pokemon

As a Pokemon Trainer, I would like to select up to 6 Pokemon to show which are on my current team.

#### Constraints

- A Pokemon Trainer can only have a maximum of 6 Pokemon.

#### Assumptions

- There is no error when attempting to add more than 6, it just won't let you.
- The designer has already provided a design, which is just a coloured border

#### Steps

1. Write test to ensure component .toHaveStyle()
2. Create custom <tr></tr> component, ensuring it takes a selected boolean
3. If selected, display border
4. check tests with passing selected boolean
5. Create onClick which adds the pokemon name to selectedPokemon state array
6. Pass prop selected if the pokemon name is in selectedPokemon array
7. Add early exit in onClick if selectedPokemon.length > 6

### Sort pokemon by attribute

As a Pokemon Trainer, I want to sort the pokemon by the strongest attribute, so I can pick the strongest team.

#### Constraints

- .toSorted() could be used to avoid the mutability of sort() method, however, due to it being a recent addition to browsers, we won't use it

#### Assumptions

- The trainer want to sort by descending, as they want the strongest
- Designer has returned a design that you click the table headers

#### Steps

1. Add a onClick which sets state of which attribute is clicked
2. Update onClick if header is clicked, and attribute is already selected to clear state
3. Ensure chevron is displayed when attribute is selected
4. Create a parse fundtion that parse the pokemon data so the stats aren't nested I.e. {name: Bulbasaur, attack: number}, and only return data actually needed by UI
5. Create a sort function that takes the data, and param
6. If no param, just return data
7. The sort should return [...data][param].sort() <- this is just a guess
8. Replace the filteredPokemon.map with sortedPokemon.map()
9. Look for errors

### Third extension... I forgot what it was.

Sorry!