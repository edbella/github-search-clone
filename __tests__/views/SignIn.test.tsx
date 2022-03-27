import SignIn from "../../src/views/SignIn";
import { render, screen } from "../../src/test-utils";

test("it loads and displays login button", async () => {
	render(<SignIn />);
	const loginText = screen.getByRole("button", { name: "Login to Github" });

	expect(loginText).toBeInTheDocument();
});
