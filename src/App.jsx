import React, { useState } from 'react'
import logo from './logo.svg'
import { Card } from './Card/Card'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";
import './App.css'
import { TransitionGroup } from './TransitionGroup';
import { ContentSwitching } from './ContentSwitching/ContentSwitching';

function OldSchoolMenuLink({ children, to, activeOnlyWhenExact }) {
  let match = useRouteMatch({
    path: to,
    exact: activeOnlyWhenExact
  });

  return (
    <div className={match ? "active" : ""}>
      {match && "> "}
      <Link to={to}>{children}</Link>
    </div>
  );
}


function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <div>
        <ul>
          <li>
            <OldSchoolMenuLink to="/" activeOnlyWhenExact={true}>Content Switch</OldSchoolMenuLink>
          </li>
          <li>
            <OldSchoolMenuLink to="/basic">Basic CSS Transition</OldSchoolMenuLink>
          </li>
          <li>
            <OldSchoolMenuLink to="/transition-group">Transition Group</OldSchoolMenuLink>
          </li>
        </ul>

        <hr />

        <Switch>
          <Route exact path="/">
            <ContentSwitching />
          </Route>
          <Route exact path="/basic">
            <Card />
          </Route>
          <Route path="/transition-group">
            <TransitionGroup />
          </Route>
        </Switch>
      </div>
    </Router>
  )

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>App.jsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className="App-link"
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
    </div>
  )
}

export default App
