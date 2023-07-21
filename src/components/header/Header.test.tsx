import { render } from "@testing-library/react";
import { Header } from "./index";

describe("Header", () => {
	it("renders correctly", () => {
		const header = render(<Header>This is content</Header>);
		expect(header).toMatchSnapshot();
	});
});