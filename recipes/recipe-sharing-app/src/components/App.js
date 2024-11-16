import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import RecipeDetails from './RecipeDetails';
import { Link } from 'react-router-dom';

const App = () => {
  return (
    <Router>
      <div>
        <h1>Recipe Sharing App</h1>
        <nav>
          <Link to="/">Home</Link>
        </nav>

        <Switch>
          <Route path="/recipe/:id" component={RecipeDetails} />
          {/* Add more routes here if needed */}
        </Switch>
      </div>
    </Router>
  );
};

export default App;