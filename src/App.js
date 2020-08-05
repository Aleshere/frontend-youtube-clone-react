import React from 'react';
import Header from './Header'
import Sidebar from './Sidebar'
import RecommendedVideos from './RecommendedVideos'
import SearchPage from './SearchPage'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'


import './App.css';


function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        
        <Switch>
          <Route path='/search' >
            <div className="app__page">
                <Sidebar />
                <SearchPage />
            </div>
          </Route>
          <Route path='/'>
            <div className="app__page">
              <Sidebar />
              <RecommendedVideos />
            </div>
          </Route>
        </Switch>
      </Router>

    </div>
  );
}

export default App;
