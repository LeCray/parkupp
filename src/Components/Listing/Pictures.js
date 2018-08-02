import React, { Component } from 'react';
import Ionicon from 'react-ionicons'
import { Link } from 'react-router-dom'

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



export default class Pictures extends Component {
    componentDidMount() {
      window.scrollTo(0, 0)
    }

    render() {   
    return(  
        <div>
                                     
          <div class="borderr container" style={{height: 300, padding: 40}}>                    
              <h2>Pictures</h2>
              
              <hr style={{borderColor: "#fff", marginBottom: 25}}/>
                {/*TYPE OF PARKING*/}                  
                <div style={{textAlign: "left"}}>
                    <h4 style={{display: "inline-block"}}>Creative Name</h4>
                    <input
                        style={{width: 300, display: "inline-block"}}
                        className="form-control pull-right"
                        name="maxHours"
                        autoComplete="off"
                        type="number"
                        placeholder="Name your parking"
                        required
                        onChange={this.handleChange}/>
                </div>

                <div style={{marginTop: 20, textAlign: "left"}}>
                    <h4 style={{marginTop: 5}}>Upload 3 Pics</h4>  
                    
                </div>
          </div>   
                                                      
        </div>
        
    )}
}