import { render } from "@testing-library/react";
import { Content } from "./index";

describe("Content", () => {
	it("renders correctly", () => {
		const content = render(<Content>This is content</Content>);
		expect(content).toMatchSnapshot();
	});
});