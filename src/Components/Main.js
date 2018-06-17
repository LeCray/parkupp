import React, { Component}  from 'react';
import { Switch, Route } from 'react-router-dom'

import Landing from '../Components/Landing';




const Main = () => (
  <main>
    <Switch>
    	<Route exact path='/' component={Landing}/>
     
    </Switch>
  </main>
)

export default Main;