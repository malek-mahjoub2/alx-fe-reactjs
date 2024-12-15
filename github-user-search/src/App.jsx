
import React from "react";
import "./App.css";
import Search from './components/Search';
import './styles/tailwind.css';
import Search from './Search'; 
const myData = [
  { id: 1, name: 'Item 1' },
  { id: 2, name: 'Item 2' },
  { id: 3, name: 'Item 3' },
  // ... more items
];
function App() {
  return (
    <div className="App">
      <h1>GitHub User Search</h1>
      <Search data={myData} /> 
    </div>
  );
}

export default App;
