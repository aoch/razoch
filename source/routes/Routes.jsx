import React, { Fragment } from 'react'
import { Route } from 'react-router-dom'

import Application from '../client/application/application'

const Routes = () => (
  <Fragment>
    <Route exact path='/' component={Application} />
    <Route path='/hi' component={() => 'hi!'} />
  </Fragment>
)

export default Routes
