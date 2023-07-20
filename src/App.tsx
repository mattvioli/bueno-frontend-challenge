import "css-wipe";
import { Nav } from "components/nav";
import { Container } from "components/container";
import { Content } from "components/content";
import { TeamBuilder } from "components/team-builder";

function App() {
	return (
		<Container>
			<Nav />
			<Content>
				<TeamBuilder />
			</Content>
		</Container>
	);
}

export default App;