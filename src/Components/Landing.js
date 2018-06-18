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
                <div style={{textAlign: "center"}}>

                    {/* PARKUPP */}
                    <div style={{paddingTop: 200, paddingBottom: 50, backgroundColor: "#2bbbad"}}>
                        <h1 style={{color: "white", fontSize: 100}}><strong>ParkUpp</strong></h1><br/>
                        <h2 style={{color: "white", fontSize: 30}}><strong>Reimagine. Parking.</strong></h2>

                        <div class="row" style={{marginTop: 60}}>
                            <div class="col-sm-2 offset-sm-4">
                                <div>
                                    <h2 style={{color: "yellow"}}>1 235 789</h2>
                                    <h4 style={{color: "white"}}>Shared Driveways</h4>   
                                </div>
                            </div>
                            <div class="col-sm-2">
                                <div>
                                    <h2 style={{color: "yellow"}}>100 245 365</h2>
                                    <h4 style={{color: "white"}}>Sharing Parkers</h4>   
                                </div>
                            </div>
                        </div>

                        <hr style={{borderColor: "white", width: 120, marginTop: 200}}/>
                    </div>
                    
                    {/* WHY PARKUPP */}
                    <div style={{paddingTop: 50, paddingBottom: 50, backgroundColor: "#2bbbad"}}>
                        <h1 style={{color: "white", fontSize: 50}}>Why ParkUpp?</h1>

                        <div class="row" style={{marginTop: 100, color: "white"}}>
                            <div class="col-sm-4">
                                <img src={require("../time.png")} style={{height: 200}} /> 
                                <h3 style={{marginTop: 50}}>Save Time</h3>
                                <p>ParkUpp wherever you go</p>
                            </div>
                            <div class="col-sm-4">
                                <img src={require("../pay_easy.png")} style={{height: 200}} />
                                <h3 style={{marginTop: 50}}>Pay Easy</h3>
                                <p>
                                    Users can find their spot<br/>
                                    and pay for it with the<br/>
                                    app and cut out any cash<br/>
                                    exchange
                                </p>
                            </div>
                            <div class="col-sm-4">
                                <img src={require("../culture.png")} style={{height: 200}} />
                                <h3 style={{marginTop: 50}}>Share Culture</h3>
                                <p>
                                    ParkUpp lets you list your<br/>
                                    driveway so drivers can<br/>
                                    find parking anywhere in<br/>
                                    the city
                                </p>
                            </div>                            
                        </div>

                        <div class="row" style={{marginTop: 50, color: "white"}}>
                            <div class="col-sm-2 offset-sm-4" >
                                <div style={{border: "2px solid yellow", borderRadius: 30, padding: 10}}> 
                                    <h4>DRIVER</h4>
                                </div>
                            </div>
                            <div class="col-sm-2">
                                <div style={{border: "2px solid yellow", borderRadius: 30, padding: 10}}> 
                                    <h4>OWNER</h4>
                                </div>
                            </div>
                        </div>
                        
                        <hr style={{borderColor: "white", width: 120, marginTop: 100}}/>
                        
                    </div>

                    {/* HOW IT WORKS 1*/}
                    <div style={{paddingTop: 50, paddingBottom: 50, backgroundColor: "#2bbbad"}}>
                        <h1 style={{color: "white", fontSize: 50}}>Why ParkUpp?</h1>

                        <div class="row" style={{marginTop: 100, color: "white"}}>

                            <div class="col-sm-4">
                                <img src={require("../search.png")} style={{height: 200}} /> 
                                <h3 style={{marginTop: 50}}>Search</h3>                                
                            </div>

                            <div class="col-sm-4">
                                <img src={require("../parking.png")} style={{height: 200}} />
                                <h3 style={{marginTop: 50}}>Park</h3>                             
                            </div>

                            <div class="col-sm-4">
                                <img src={require("../pay.png")} style={{height: 200}} />
                                <h3 style={{marginTop: 50}}>Pay</h3>                            
                            </div>
                        </div>  
                           
                        <hr style={{borderColor: "white", width: 120, marginTop: 100}}/>                        
                    </div>

                    {/* HOW IT WORKS 2*/} 
                    <div style={{paddingTop: 50, paddingBottom: 50, backgroundColor: "#aaa8a5"}}>
                        <h1 style={{color: "white", fontSize: 50}}>Why ParkUpp?</h1>

                        <div class="row" style={{marginTop: 100, color: "white"}}>

                            <div class="col-sm-4">
                                <img src={require("../list.png")} style={{height: 200}} /> 
                                <h3 style={{marginTop: 50}}>List</h3>                                
                            </div>

                            <div class="col-sm-4">
                                <img src={require("../accept.png")} style={{height: 200}} />
                                <h3 style={{marginTop: 50}}>Accept</h3>                             
                            </div>

                            <div class="col-sm-4">
                                <img src={require("../get_paid.png")} style={{height: 200}} />
                                <h3 style={{marginTop: 50}}>Get Paid</h3>                            
                            </div>
                        </div>  
                           
                        <hr style={{borderColor: "white", width: 120, marginTop: 100}}/>                        
                    </div>

                    {/* ABOUT US*/} 
                    <div style={{paddingTop: 50, paddingBottom: 50, backgroundColor: "#121a5e", color: "white"}}>
                        <h1 style={{fontSize: 50}}>About Us</h1>

                        <p style={{marginTop: 70, fontSize: 20}}>
                            At the ParkUpp family, we wake up everyday to solve some of the land<br/>
                            allocation issues that the world is facing. <br/>
                            <br/>
                            The first problem we are solving is the one of parking. When people<br/>
                            buy cars, they don’t realise that the car they are buying will be parked<br/>
                            95% of the time. Furthermore, we don’t believe that new parkades<br/>
                            need to be built in order to accommodate new cars that are being<br/>
                            bought everyday. There are enough driveways in the world that are<br/>
                            already solving this problem but are currently not being used to their<br/>
                            fullest capacity. Throughout the world, only 4% of land is allocated to<br/>
                            parking therefore making the resource very scarce.<br/>
                            <br/>
                            ParkUpp is a peer-to-peer platform that will connect people with idle<br/>
                            driveways to the ones who desperately need parking. Let’s share<br/>
                            parking and use the land for something more useful.
                        </p>
                           
                        <hr style={{borderColor: "white", width: 120, marginTop: 100}}/>                        
                    </div>


                </div>    			
            </div>
		)
	}

}

