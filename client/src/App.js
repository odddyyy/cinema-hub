import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

//pages
import Home from './pages/Home'
import Movies from './pages/Movie'
import Series from './pages/Serie'

//components
import Navbar from './components/Navbar'
import Footer from './components/Footer'


//route
const routes = [
  {
    path: '/',
    exact: true,
    children: <Home />
  },
  {
    path: '/movies',
    children: <Movies />
  },
  {
    path: '/series',
    children: <Series />
  }
]

function App() {
  return (
    <Router>
      <div className="main-page pb-5">
        <Navbar />
        <Switch>
          {routes.map((i, idx) => (
            <Route key={idx} {...i}/>
          ))}
        </Switch>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
