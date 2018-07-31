import React from 'react';
import Interactive from 'react-interactive';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import ExampleComponent from './ExampleComponent';
import PageNotFound from './PageNotFound';

import s from '../styles/app.style';

export default function App() {
  return (
    <div>
      
      <h1>SPA Routing WIP</h1>

      <nav>
        {/*<Breadcrumbs />*/}
      </nav>

      <Switch>
        <Route exact path="/spa-github-pages/" component={Home} />
        <Route path="/spa-github-pages/example" component={ExampleComponent} />
        <Route component={PageNotFound} />
      </Switch>

     
    </div>
  );
}
