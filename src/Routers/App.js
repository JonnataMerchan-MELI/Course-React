import React from 'react';
import history from '../Utils/history';
import { Router, Route, Switch } from 'react-router-dom';
import Header from '../components/Header';
import CountriesListl from '../components/CountriesList/CountriesList';
import LeaguesByCountry from '../components/LeaguesList/LeaguesByCountry';

const App = () => (
  <Router history={history}>
    <Switch>
      <Route exact path={['/', '/Leagues']}>
        <Header></Header>
        <Route exact path='/' component={CountriesListl} />
        <Route exact path='/Leagues' component={LeaguesByCountry} />
      </Route>
    </Switch>
  </Router>
);

export default App;
