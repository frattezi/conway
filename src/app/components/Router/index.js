import React from 'react'

import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Home from 'app/pages/Home'
import NavBar from 'app/components/NavBar'

// TODO make 404 page
const Page404 = () => <div>404</div>

const Router = () =>  (
    <>
    <NavBar />
    <BrowserRouter>
      <Switch>
        <Route path='/' component={Home} />
        <Route component={Page404} />
      </Switch>
    </BrowserRouter>
    </>
)

export default Router
