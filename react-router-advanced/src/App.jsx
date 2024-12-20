import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import Profile from './pages/Profile';
import ProfileDetails from './pages/ProfileDetails';
import ProfileSettings from './pages/ProfileSettings';
import Post from './pages/Post';
import NotFound from './pages/NotFound';
import ProtectedRoute from './components/ProtectedRoute';
import BlogPost from './pages/BlogPost'; // Import the BlogPost component

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/profile"
          element={
            <ProtectedRoute
              element={<Profile />}
              isAuthenticated={isAuthenticated}
            />
          }
        >
          <Route path="details" element={<ProfileDetails />} />
          <Route path="settings" element={<ProfileSettings />} />
        </Route>
        <Route path="/post/:postId" element={<Post />} />
        <Route path="/blog/:id" element={<BlogPost />} /> {/* Add the BlogPost route */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;