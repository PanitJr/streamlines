import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'semantic-ui-css/semantic.min.css'
import { Divider, Header, Icon } from 'semantic-ui-react'
import * as serviceWorker from './serviceWorker';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom'
import App from './components/app/App';
import Notfound from './components/Notfound';
import Bar from './components/charts/Bar';
import NevBarMenu from './components/menu/NevBarMenu';
import Staff from './components/staff/Staff';

const routing = (
    <Router>
      <div>
        <NevBarMenu />
        <Divider horizontal>
            <Header as='h4'>
            <Icon name='building' />
              INET MS
            </Header>
          </Divider>
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/bar" component={Bar} />
          <Route path="/staff" component={Staff} />
          <Route component={Notfound} />
        </Switch>
      </div>
    </Router>
  )
  ReactDOM.render(routing, document.getElementById('root'))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
