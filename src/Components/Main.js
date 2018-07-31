import React, { Component}  from 'react';
import { Switch, Route } from 'react-router-dom'

import Landing from './Landing';
import Support from './Support';
import Contact_Us from './Contact_Us';
import Terms_Conditions from './Terms_Conditions';
import Privacy_Policy from './Privacy_Policy';
import Careers from './Careers';
import About_Us from './About_Us';
import Sign_Up from './Sign_Up';
import Parking from './Parking';
import FAQ from './FAQ';
import Mobile_App from './Mobile_App';
import Discover_Parking from './Discover_Parking';
import List_Parking from './List_Parking';




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
        <Route path="/Sign_Up" component={Sign_Up}/>
        <Route path="/Parking" component={Parking}/>
        <Route path="/FAQ" component={FAQ}/>                
        <Route path="/Mobile_App" component={Mobile_App}/>
        <Route path="/Discover_Parking" component={Discover_Parking}/>
        <Route path="/List_Parking" component={List_Parking}/>                
    </Switch>
  </main>
)

export default Main;