import { render } from "@testing-library/react";
import NumberOfEvents from "../components/NumberOfEvents";
import userEvent from "@testing-library/user-event";

describe("<NumberOfEvents /> component", () => {
  test('renders a textbox with the role "textbox"', () => {
    const { container } = render(<NumberOfEvents />);
    const inputElement = container.querySelector('input[type="text"]');
    expect(inputElement).toBeInTheDocument();
  });

  test("default value of the input field is 32", () => {
    const { container } = render(<NumberOfEvents />);
    const inputElement = container.querySelector('input[type="text"]');
    expect(inputElement).toHaveValue("32");
  });

  test("value changes accordingly when user types", async () => {
    const setNumberOfEvents = jest.fn(); // Mock setNumberOfEvents function
    const { container } = render(
      <NumberOfEvents setNumberOfEvents={setNumberOfEvents} />
    );
    const inputElement = container.querySelector('input[type="text"]');
    await userEvent.type(inputElement, "{backspace}{backspace}10");
    expect(inputElement).toHaveValue("10");
    expect(setNumberOfEvents).toHaveBeenCalledWith("10"); // Ensure setNumberOfEvents was called with the updated value
  });
});
