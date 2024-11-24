import { render, screen, fireEvent } from '@testing-library/react';
import TodoList from '../TodoList';

describe('TodoList', () => {
  test('renders the TodoList component', () => {
    render(<TodoList />);

    // Check if the title "Todo List" is displayed
    expect(screen.getByText(/todo list/i)).toBeInTheDocument();

    // Check if the initial todos are displayed
    expect(screen.getByText(/learn react/i)).toBeInTheDocument();
    expect(screen.getByText(/build a todo app/i)).toBeInTheDocument();
    expect(screen.getByText(/write tests/i)).toBeInTheDocument();
  });

  test('adds a new todo item', () => {
    render(<TodoList />);

    // Simulate user typing into the input field
    fireEvent.change(screen.getByPlaceholderText(/add a new todo/i), {
      target: { value: 'New Todo' },
    });

    // Simulate form submission
    fireEvent.click(screen.getByText(/add/i));

    // Check if the new todo is added
    expect(screen.getByText(/new todo/i)).toBeInTheDocument();
  });

  test('toggles the completion status of a todo', () => {
    render(<TodoList />);

    const todoItem = screen.getByText(/learn react/i);
    
    // Simulate click on todo item to toggle completion
    fireEvent.click(todoItem);

    // Verify the todo is toggled to completed
    expect(todoItem).toHaveStyle('text-decoration: line-through');
  });

  test('deletes a todo item', () => {
    render(<TodoList />);

    // Find the delete button and click it
    const deleteButton = screen.getAllByText(/delete/i)[0];
    fireEvent.click(deleteButton);

    // Verify that the todo item is deleted
    expect(screen.queryByText(/learn react/i)).not.toBeInTheDocument();
  });
});
