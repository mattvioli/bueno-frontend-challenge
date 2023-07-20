import { render } from "@testing-library/react";
import { Nav } from "./index";

describe("Nav", () => {
	it("renders correctly", () => {
		const nav = render(<Nav />);
		expect(nav).toMatchSnapshot();
	});
});