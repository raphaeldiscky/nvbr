import './App.scss'
import Header from './components/Header'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

import Contact from './pages/Contact'
import Home from './pages/Home'
import Opportunities from './pages/Opportunities'
import Solutions from './pages/Solutions'

const App = () => {
  return (
    <Router>
      <div className='App'>
        <Header />
        <div className='container'>
          <div className='wrapper'>
            <div className='home'>
              <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/opportunities' component={Opportunities} />
                <Route exact path='/solutions' component={Solutions} />
                <Route exact path='/contact-us' component={Contact} />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    </Router>
  )
}

export default App
