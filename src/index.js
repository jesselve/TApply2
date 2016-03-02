import { React, Route, Application,
         connect, bindActionCreators } from 'reactuate'
import counter from './counter'
import counterAsync from './counter/async'
import HomePage from './home/Home'
import App from './app/App'
import Calculator from './calculator/Calculator'
import './main.css'

const routes = (
  <Route component={App}>
      <Route path="/" component={HomePage} />
      <Route path="/calculator" component={Calculator} />
  </Route>
)

new Application({routes, domains: {counter, counterAsync}}).render()
