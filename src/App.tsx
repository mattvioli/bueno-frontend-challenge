import "css-wipe";
import jsonData from "./data/pokemon-gen1.json";
import type { Pokemon } from "./types";
import { Nav } from "./components/nav";

const data = jsonData as Pokemon[];

function App() {
	return (
		<div className="container">
			<Nav />
			<main className="content">
				<p>Your content here!</p>
				<div className="list-container">Pokemon here!</div>
			</main>
		</div>
	);
}

export default App;