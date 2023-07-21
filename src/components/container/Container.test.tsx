import { render } from "@testing-library/react";
import { Container } from "./index";

describe("Container", () => {
	it("renders correctly", () => {
		const container = render(<Container>This is content</Container>);
		expect(container).toMatchSnapshot();
	});
});