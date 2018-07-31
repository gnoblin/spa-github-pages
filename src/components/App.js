import React from 'react';
import Interactive from 'react-interactive';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import ExampleComponent from './ExampleComponent';
import PageNotFound from './PageNotFound';
import Breadcrumbs from './Breadcrumbs';
import s from '../styles/app.style';

export default function App() {
  return (
    <div style={s.root}>
      <h1 style={s.title}>Single Page Apps v2 for GitHub Pages</h1>
      <Interactive
        as="a"
        href="https://gnoblin.github.io/spa-github-pages/"
        style={s.repoLink}
        {...s.link}
      >https://gnoblin.github.io/spa-github-pages/</Interactive>

      <nav style={s.breadcrumbs}>
        <Breadcrumbs />
      </nav>

      <Switch>
        <Route exact path="/spa-github-pages/" component={Home} />
        <Route path="/spa-github-pages/example" component={ExampleComponent} />
        <Route component={PageNotFound} />
      </Switch>

     
    </div>
  );
}
