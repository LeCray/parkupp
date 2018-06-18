import React, { Component } from 'react';

import Background from '../parkupp_gif.png';



import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
  Row,
  Col,
  Jumbotron,
  Button
} from 'react-bootstrap';



export default class Landing extends Component {

	render() {		
		return(  
			<div>				
                <img src={require("../parkupp_gif.png")} style={{width: "100%"}} /> 
                <div style={{backgroundColor: "#2bbbad", textAlign: "center"}}>

                    <div style={{paddingTop: 200, paddingBottom: 50, border: "1px solid red"}}>
                        <h1 style={{color: "white", fontSize: 100}}><strong>ParkUpp</strong></h1><br/>
                        <h2 style={{color: "white", fontSize: 30}}><strong>Reimagine. Parking.</strong></h2>

                        <div class="row" style={{marginTop: 60}}>
                            <div class="col-sm-2 offset-sm-4">
                                <h2 style={{color: "yellow"}}>1 235 789</h2>
                                <h3 style={{color: "white"}}>Shared Driveways</h3>   
                            </div>
                            <div class="col-sm-2">
                                <h2 style={{color: "yellow"}}>100 245 365</h2>
                                <h3 style={{color: "white"}}>Sharing Parkers</h3>   
                            </div>
                        </div>

                        <hr style={{borderColor: "white", width: 120, marginTop: 200}}/>
                    </div>

                    <div style={{paddingTop: 200, paddingBottom: 200}}>
                        <h1 style={{color: "white", fontSize: 50}}>Why ParkUpp?</h1>
                        <div class="row" style={{marginTop: 60}}>
                            <div class="col-sm-3 offset-sm-1" style={{border: "1px solid red"}}>
                                <img src={require("../time.png")} style={{height: 200, width: "100%"}} /> 
                            </div>
                            <div class="col-sm-3">
                                  
                            </div>
                            <div class="col-sm-3">
                                  
                            </div>
                        </div>
                        
                    </div>

                </div>    			
            </div>
		)
	}

}

