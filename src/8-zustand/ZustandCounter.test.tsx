import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { ZustandCounter, CounterControls, CounterLabel } from "./ZustandCounter";
import { useStore } from "./zustandStore";

const originalState = useStore.getState();

beforeEach(() => {
  useStore.setState(originalState);
});

test("increment - single component", () => {
  render(<ZustandCounter />);

  const counter = screen.getByRole("contentinfo");
  expect(counter).toHaveTextContent("0");

  const incrementButton = screen.getByText(/plus one/i);
  fireEvent.click(incrementButton);

  expect(counter).toHaveTextContent("1");
});

test("increment again - single component", () => {
  render(<ZustandCounter />);

  const counter = screen.getByRole("contentinfo");
  expect(counter).toHaveTextContent("0");

  const incrementButton = screen.getByText(/plus one/i);
  fireEvent.click(incrementButton);

  expect(counter).toHaveTextContent("1");
});

test("increment - multiple components", ()=> {
    render(<CounterControls/>);
    render(<CounterLabel/>);

    // // The single component is not in memory
    // // This will fail...
    // const counter = screen.getByRole("contentinfo");
    // expect(counter).toHaveTextContent("0");

    const label = screen.getByRole("heading");
    expect(label).toHaveTextContent("0");

    const incrementButton = screen.getByText(/one up/i);
    fireEvent.click(incrementButton);

    expect(label).toHaveTextContent("1");
})

test("increment again - multiple components", ()=> {
    render( <>
                <CounterControls/>
                <CounterLabel/>
            </> );

    const label = screen.getByRole("heading");
    expect(label).toHaveTextContent("0");

    const incrementButton = screen.getByText(/one up/i);
    fireEvent.click(incrementButton);

    expect(label).toHaveTextContent("1");

})