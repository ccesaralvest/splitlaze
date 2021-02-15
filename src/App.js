import './App.css';
import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const Header = React.lazy(() => import('./components/Header'));
const Home = React.lazy(() => import('./components/Home'));
const About = React.lazy(() => import('./components/About'));

function App() {
  return (
    <div className="App">


    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Header />

        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/about" component={About}/>
        </Switch>
      </Suspense>
    </Router>

    </div>
  );
}

export default App;
