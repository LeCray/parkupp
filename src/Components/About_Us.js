import React, { Component } from 'react';


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



export default class About_Us extends Component {

    render() {   
    return(  
        <div style={{backgroundColor: "#2bbbad", height: "120vh", 
                        color: "white", paddingTop: 50}}>

            <div style={{paddingTop: 50, paddingBottom: 50, backgroundColor: "#2bbbad", color: "white"}}>
                <div class="container" style={{padding: 20}}>

                    {/*<Element name="about" className="element" >*/}
                        <h1 style={{fontSize: 30}}>About Us</h1>
                    {/*</Element>*/}

                    <p style={{marginTop: 50, fontSize: 20}}>
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
    )}
}