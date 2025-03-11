import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "../__tests__/TodoList";

describe("TodoList Component", () => {
  test("renders the TodoList component", () => {
    render(<TodoList />);
    expect(screen.getByText(/My Todo List/i)).toBeInTheDocument();
  });

  test("allows users to add a new todo", () => {
    render(<TodoList />);
    const input = screen.getByPlaceholderText(/add a new todo/i);
    const button = screen.getByText(/add todo/i);

    fireEvent.change(input, { target: { value: "Learn React" } });
    fireEvent.click(button);

    expect(screen.getByText(/Learn React/i)).toBeInTheDocument();
  });

  test("toggles a todo's completion status", () => {
    render(<TodoList />);
    const todoItem = screen.getByText(/Learn React/i);

    fireEvent.click(todoItem);
    expect(todoItem).toHaveClass("completed"); // Ensure class changes on toggle
  });

  test("deletes a todo", () => {
    render(<TodoList />);
    const deleteButton = screen.getByText(/delete/i);

    fireEvent.click(deleteButton);
    expect(screen.queryByText(/Learn React/i)).not.toBeInTheDocument();
  });
});
