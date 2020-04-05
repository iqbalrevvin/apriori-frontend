import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

//Pages
import Home from './pages/Home'
import Signin from './pages/Signin'
import Shop from './pages/Shop'


const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/shop' exact component={Shop} />
                <Route path='/signin' exact component={Signin} />
            </Switch>
        </BrowserRouter>
    )
}

export default Router