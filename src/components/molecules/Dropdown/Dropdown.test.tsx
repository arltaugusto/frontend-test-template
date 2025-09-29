import userEvent from "@testing-library/user-event";
import { render, screen, within } from "@testing-library/react";
import { Dropdown } from "./Dropdown";

const options = [
  {
    label: "1",
    value: "1",
  },
  {
    label: "2",
    value: "2",
  },
];
describe("Dropdown", () => {
  it("should open options on button click", async () => {
    render(<Dropdown options={options} renderOption={(option) => <div>{option.label}</div>} />);

    const dropdownButton = screen.getByRole("button");
    await userEvent.click(dropdownButton);

    expect(screen.getByRole("list")).toBeInTheDocument();
  });

  it("should select option and close dropdown on click", async () => {
    render(<Dropdown options={options} renderOption={(option) => <div>{option.label}</div>} />);

    const dropdownButton = screen.getByRole("button");
    await userEvent.click(dropdownButton);
    const list = screen.getByRole("list");
    const option = within(list).getByText("2");
    await userEvent.click(option);

    expect(dropdownButton).toContainHTML("2");
    expect(list).not.toBeInTheDocument();
  });

  it("should call onOptionClick if it is present", async () => {
    const onOptionClickMock = jest.fn();
    render(
      <Dropdown
        options={options}
        onOptionClick={onOptionClickMock}
        renderOption={(option) => <div>{option.label}</div>}
      />,
    );

    const dropdownButton = screen.getByRole("button");
    await userEvent.click(dropdownButton);
    const list = screen.getByRole("list");
    const option = within(list).getByText("2");
    await userEvent.click(option);

    expect(dropdownButton).toContainHTML("2");
    expect(list).not.toBeInTheDocument();
    expect(onOptionClickMock).toHaveBeenCalled();
  });

  it("should select defaultOption if sent", async () => {
    render(
      <Dropdown
        options={options}
        defaultOption={1}
        renderOption={(option) => <div>{option.label}</div>}
      />,
    );

    const dropdownButton = screen.getByRole("button");

    expect(dropdownButton).toContainHTML("2");
  });
});
