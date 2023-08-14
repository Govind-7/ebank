import {Route, Redirect, Switch} from 'react-router-dom'
import Login from './components/Login'
import Home from './components/Home'
import Notfound from './components/Notfound'
import Protected from './components/Protected'
import './App.css'

// Replace your code here
const App = () => (
  <Switch>
    <Protected exact path="/" component={Home} />
    <Route exact path="/ebank/login" component={Login} />
    <Route path="/not-found" component={Notfound} />
    <Redirect to="/not-found" />
  </Switch>
)

export default App
