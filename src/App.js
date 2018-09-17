import React, { Component } from 'react'
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom'
import Register from './pages/Register'
import Login from './pages/Login'
import AuthService from './services'
import Protected from './pages/Protected'

class App extends Component {

	render() {
		let auth = new AuthService()
		return (
			<div>
				<Router>
					{(auth.loggedIn())
						    /* if condition is true, use these routes */
						    ? <Switch>
						        <Route path="/protected" component={Protected} />
						    </Switch>

						    /* else use these routes */
						    : <Switch>
								<Route path="/register" component={Register} />
								<Redirect from="/protected" to="/register"/>
						      	<Route path="/login" component={Login} />
						    </Switch>
						}
				</Router>
			</div>
		);
	}
}

export default App;
