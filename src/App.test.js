import { render, screen } from "@testing-library/react";
import App from "./App";
import EditNote from "./components/EditNote";

test("renders Only People Notes switch", () => {
  render(<App />);
  const linkElement = screen.getByText(/Only People Notes/i);
  expect(linkElement).toBeInTheDocument();
});

test("renders Publish button in Edit Notes Component", () => {
  render(<EditNote />);
  const publishBtn = screen.getByText(/Publish/i);
  expect(publishBtn).toBeInTheDocument();
});
