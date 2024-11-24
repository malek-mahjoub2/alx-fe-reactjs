import React, { useState } from 'react';

const AddTodoForm = ({ addTodo }) => {
  const [input, setInput] = useState('');

  // Handle input changes
  const handleChange = (e) => {
    setInput(e.target.value);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload on form submit
    if (input.trim()) {
      addTodo(input);  // Call the addTodo function passed as a prop
      setInput('');     // Reset input field after submission
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={input}
        onChange={handleChange}
        placeholder="Add a new todo"
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddTodoForm;
