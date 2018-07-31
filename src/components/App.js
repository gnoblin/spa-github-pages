import React from 'react';
import Interactive from 'react-interactive';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';


export default function App() {
  return (
    <div>
      
      <h1>SPA Routing WIP f001</h1>

      url:{location.pathname}

      <nav>
        {/*<Breadcrumbs />*/}
      </nav>

      <Switch>
        <Route exact path="/spa-github-pages/" component={Home} />
        <Route exact path="/spa-github-pages/example/" component={MyPage1} />
        <Route path="/spa-github-pages/my-page1/" component={MyPage1} />
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
