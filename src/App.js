import React from 'react';
import NavBar from './NavBar';
import './App.css';
import Homepage from './Homepage';
import { BrowserRouter as Router,Route ,Switch} from 'react-router-dom';
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';


function App() {
  return (
    <Router>
    <div className="App">
      <NavBar/>
      <div className='content'>
      <Switch>
        <Route exact path="/">
          <Homepage/>
        </Route>
        <Route  path="/create">
          <Create/>
        </Route>
        <Route  path="/blogs/:id">
          <BlogDetails/>
        </Route>
        <Route path="*">
          <NotFound/>
        </Route>
      </Switch>
      </div>
    </div>
    </Router>
  );
}

export default App;