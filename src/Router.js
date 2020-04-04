import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

//Pages
import Home from './pages/Home'
import Signin from './pages/Signin'


const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Home} />
                <Route path='/signin' exact component={Signin} />
            </Switch>
        </BrowserRouter>
    )
}

export default Router