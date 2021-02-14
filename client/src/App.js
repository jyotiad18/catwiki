import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route, 
  Link
} from "react-router-dom";

import { useDispatch  } from 'react-redux';
import './App.scss';
import './components/Components.scss';
import logo from './images/CatwikiLogo.svg';
import Footer from './components/Footer';
import Home from './pages/Home';
import TopTen from './pages/TopTen';
import BreedDetail from './pages/BreedDetail';
import { getAllBreed } from './redux/reducers/breedSlice';
import axios from './axios.js';

function App() {
  const [totalBreed, setTotalBreed] = useState(0);
  const dispatch = useDispatch();

  useEffect(() => {
    async function getBreeds() {
      const url = "/breeds";
      const resp = await axios.get(url, {
        headers: { 'Content-Type': 'application/json' }
      });
      const data = resp.data.data;
      setTotalBreed(data.length);
      dispatch(getAllBreed({ data }));      
    }
    getBreeds();
  }, [dispatch])

  return (
    <Router>
      { totalBreed > 0 ?
        <div className="app">
          <div className="app__logo">
            <Link to="/">
              <img src={logo} alt="CatWiki" />
            </Link>
          </div>
          <Switch>
            <Route exact path='/topten'>
              <TopTen />
            </Route>
            <Route exact path='/breed-details/:breedname'>
              <BreedDetail />
            </Route>
            <Route exact path='/'>
              <Home totalBreed={totalBreed} />
            </Route>
          </Switch>
          <Footer />
        </div>  
      : null }
    </Router>        
  );
}

export default App;
