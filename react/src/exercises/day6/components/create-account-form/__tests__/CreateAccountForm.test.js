import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import CreateAccountForm from "../CreateAccountForm";

const stubbedExpectedSubmit = {
  name: "Testname",
  lastName: "Test Surname",
  email: "email@test.com",
  password: "Password",
  countryCode: "RO",
  userAgreement: true,
};

const stubbedExpectedKeyboardSubmit = {
  name: "a",
  lastName: "b",
  email: "c",
  password: "d",
  countryCode: "RO",
  userAgreement: true,
};

const mockedAlert = jest.fn();

const jsdomAlert = window.alert;

beforeAll(() => {
  window.alert = mockedAlert;
});

describe("<CreateAccountForm>", () => {
  test("Rendered form matches snapshot", () => {
    const { asFragment } = render(<CreateAccountForm />);
    expect(asFragment).toMatchSnapshot();
  });

  test("Can't submit empty form", () => {
    render(<CreateAccountForm />);

    const submitButton = screen.getByRole("button");
    userEvent.click(submitButton);

    expect(screen.getAllByTestId("errorMessage")).toHaveLength(6);
  });

  test("Can't submit incomplete form", () => {
    render(<CreateAccountForm />);

    const firstField = screen.getAllByRole("textbox")[0];
    userEvent.type(firstField, "Name");

    const submitButton = screen.getByRole("button");
    userEvent.click(submitButton);

    expect(screen.getAllByTestId("errorMessage")).toHaveLength(5);
  });

  test("Can submit form", async () => {
    render(<CreateAccountForm />);

    const nameInput = screen.getByLabelText("First name");
    userEvent.type(nameInput, stubbedExpectedSubmit.name);

    const lastNameInput = screen.getByLabelText("Last name");
    userEvent.type(lastNameInput, stubbedExpectedSubmit.lastName);

    const emailInput = screen.getByLabelText("Email");
    userEvent.type(emailInput, stubbedExpectedSubmit.email);

    const passwordInput = screen.getByLabelText("Password");
    userEvent.type(passwordInput, stubbedExpectedSubmit.password);

    const countrySelect = screen.getByLabelText("Country");
    userEvent.click(countrySelect);
    const selectOptions = screen.getAllByRole("option");
    expect(selectOptions.length).toBeGreaterThan(1);
    userEvent.selectOptions(countrySelect, stubbedExpectedSubmit.countryCode);

    const userAgreement = screen.getByLabelText("Accept the terms of service");
    userEvent.click(userAgreement);

    const submitButton = screen.getByRole("button");
    userEvent.click(submitButton);

    expect(mockedAlert).toHaveBeenCalledWith(
      JSON.stringify(stubbedExpectedSubmit, null, 2)
    );

    const errors = await screen.queryAllByTestId("errorMessage");
    expect(errors).toHaveLength(0);
  });
});

afterAll(() => {
  window.alert = jsdomAlert;
});
