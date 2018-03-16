import React, { Fragment } from 'react'
import { Route } from 'react-router-dom'

import Application from '../client/application/application'

const Routes = () => (
  <Fragment>
    <Route exact path='/' component={Application} />
  </Fragment>
)

export default Routes
