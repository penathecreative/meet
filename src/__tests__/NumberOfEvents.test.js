import { render } from "@testing-library/react";
import NumberOfEvents from "../components/NumberOfEvents";
import userEvent from "@testing-library/user-event";

describe("<NumberOfEvents /> component", () => {
  test('renders a textbox with the role "textbox"', () => {
    const { container } = render(
      <NumberOfEvents
        setCurrentNOE={() => {}}
        setErrorAlert={() => {}}
      />
    );
    const inputElement = container.querySelector('input[type="text"]');
    expect(inputElement).toBeInTheDocument();
  });

  test("default value of the input field is 32", () => {
    const { container } = render(
      <NumberOfEvents
        setCurrentNOE={() => {}}
        setErrorAlert={() => {}}
      />
    );
    const inputElement = container.querySelector('input[type="text"]');
    expect(inputElement).toHaveValue("32");
  });

  test("value changes accordingly when user types", async () => {
    const setCurrentNOE = jest.fn(); // Mock setCurrentNOE function
    const setErrorAlert = jest.fn(); // Mock setErrorAlert function
    const { container } = render(
      <NumberOfEvents
        setCurrentNOE={setCurrentNOE}
        setErrorAlert={setErrorAlert}
      />
    );
    const inputElement = container.querySelector('input[type="text"]');
    await userEvent.type(inputElement, "{backspace}{backspace}10");
    expect(inputElement).toHaveValue("10");
    expect(setCurrentNOE).toHaveBeenCalledWith("10"); // Ensure setCurrentNOE was called with the updated value
    expect(setErrorAlert).toHaveBeenCalledWith(""); // Ensure setErrorAlert was called with an empty string for valid input
  });

  test("displays error message when input value is less than or equal to 0", async () => {
    const setCurrentNOE = jest.fn(); // Mock setCurrentNOE function
    const setErrorAlert = jest.fn(); // Mock setErrorAlert function
    const { container } = render(
      <NumberOfEvents
        setCurrentNOE={setCurrentNOE}
        setErrorAlert={setErrorAlert}
      />
    );
    const inputElement = container.querySelector('input[type="text"]');
    await userEvent.clear(inputElement);
    await userEvent.type(inputElement, "0");
    expect(inputElement).toHaveValue("0");
    expect(setCurrentNOE).toHaveBeenCalledWith("0"); // Ensure setCurrentNOE was called with the updated value
    expect(setErrorAlert).toHaveBeenCalledWith(
      "Only numbers higher than 0 allowed."
    ); // Ensure setErrorAlert was called with the correct error message
  });
});
