import React from 'react'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'

import { store } from './store'

import Header from './Header'
import Footer from './Footer'
import UserDetails from './UserDetails'
import UserTable from './UserTable'
import WrongPage from './WrongPage'

function App() {
    return (
        <Provider {...{ store }}>
            <Router>
                <main>
                    <Header />

                    <Switch>
                        <Route path="/" exact>
                            <UserTable />
                        </Route>
                        <Route path="/user/:id">
                            <UserDetails />
                        </Route>

                        <Route path="/">
                            <WrongPage />
                        </Route>
                    </Switch>

                    <Footer />
                </main>
            </Router>
        </Provider>
    )
}

export default App
