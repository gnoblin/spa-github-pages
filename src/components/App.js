import React from 'react';
import Interactive from 'react-interactive';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import ExampleComponent from './ExampleComponent';
import PageNotFound from './PageNotFound';

export default function App() {
  return (
    <div>
      
      <h1>SPA Routing WIP</h1>

      url:{location.pathname}

      <nav>
        {/*<Breadcrumbs />*/}
      </nav>

      <Switch>
        <Route exact path="/spa-github-pages/" component={Home} />
        <Route path="/spa-github-pages/example" component={ExampleComponent} />
        <Route path="/spa-github-pages/my-page1" component={MyPage1} />
        <Route component={PageNotFound} />
      </Switch>

     
    </div>
  );
}

function MyPage1() {
  return (
    <div>
      
      <h1>MyPageTest1</h1>

    </div>
  );
}
