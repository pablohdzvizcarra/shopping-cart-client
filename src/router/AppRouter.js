import React from 'react'
import {
  BrowserRouter as Router,
  Switch
} from 'react-router-dom'
import App from '../App'
import LoginScreen from '../components/loginScreen/LoginScreen'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PublicRoute'

const AppRouter = () => {
  const user = false

  return (
    <Router>
      <div>
        <Switch>
          <PublicRoute 
            exact
            path="/login"
            component={LoginScreen}
            isAuthenticated={user}
          />

          <PrivateRoute 
            path="/"
            component={App}
            isAuthenticated={user}
          />
        </Switch>
      </div>
    </Router>
  )
}

export default AppRouter