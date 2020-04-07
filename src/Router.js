import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

//Pages
import Home from './pages/Home'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import Shop from './pages/Shop'
import Transaction from './pages/Transaction'


const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/shop' exact component={Shop} />
                <Route path='/transaction' exact component={Transaction} />
                <Route path='/signin' exact component={Signin} />
                <Route path='/signup' exact component={Signup} />
            </Switch>
        </BrowserRouter>
    )
}

export default Router