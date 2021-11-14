import React from 'react'
import { createBrowserHistory } from 'history'
import { Redirect, Route, Router, Switch } from 'react-router'
import HomePage from '@screens/home'
import UserPage from '@screens/users'
import ToolPage from '@screens/tools'
import SettingPage from '@screens/settings'
const history = createBrowserHistory()
export function RouterProvider() {
	return (
		<Router history={history} >
			<Redirect to="/" />
			<Switch>
				<Route exact path="/">
					<HomePage />
				</Route>

				<Route path="/users">
					<UserPage />
				</Route>

				<Route path="/tools">
					<ToolPage />
				</Route>

				<Route path="/settings">
					<SettingPage />
				</Route>
				<Redirect from="/accounts" to="/users" />
			</Switch>
		</Router>
	)
}