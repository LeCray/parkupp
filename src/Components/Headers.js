import React, { Component}  from 'react';
import { Switch, Route } from 'react-router-dom'

import GreenHeader from './GreenHeader';
import WhiteHeader from './WhiteHeader';




const Headers = () => (
  
    <Switch>    	
        <Route path="/Support" component={GreenHeader}/>
        <Route path="/Sign_Up" component={GreenHeader}/>
        <Route exact path="/" component={WhiteHeader}/>
        <Route path="/Parking" component={WhiteHeader}/>
        <Route path="/Contact_Us" component={WhiteHeader}/>
        <Route path="/Terms_Conditions" component={WhiteHeader}/>
        <Route path="/Privacy_Policy" component={WhiteHeader}/>
        <Route path="/Careers" component={WhiteHeader}/>
        <Route path="/About_Us" component={WhiteHeader}/>     
              
    </Switch>
  
)

export default Headers;