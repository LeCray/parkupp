import React, { Component}  from 'react';
import { Switch, Route } from 'react-router-dom'

import Landing from './Landing';
import Support from './Support';
import Contact_Us from './Contact_Us';
import Terms_Conditions from './Terms_Conditions';
import Privacy_Policy from './Privacy_Policy';
import Careers from './Careers';
import About_Us from './About_Us';


const Main = () => (
  <main>
    <Switch>
    	<Route exact path="/" component={Landing}/>
    	<Route path="/Support" component={Support}/>
    	<Route path="/Contact_Us" component={Contact_Us}/>
    	<Route path="/Terms_Conditions" component={Terms_Conditions}/>
    	<Route path="/Privacy_Policy" component={Privacy_Policy}/>
    	<Route path="/Careers" component={Careers}/>
        <Route path="/About_Us" component={About_Us}/>     
    </Switch>
  </main>
)

export default Main;