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



export default class Location extends Component {
     constructor(props) {
        super(props);
        this.state = {
            value: "",
 
        };

        this.handleChange = this.handleChange.bind(this);
        //this.renderResCom = this.renderResCom.bind(this);
        //this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
      window.scrollTo(0, 0)
    }

    async handleChange (evt) {
        await this.setState({ [evt.target.name]: evt.target.value })
        //this.renderResCom()        
    }

    render() {   
    return(  
        <div>
                  
            <div class="borderr container" style={{height: 400, padding: 40}}>                    
                <h2>Location</h2>

                <hr style={{borderColor: "#fff", marginBottom: 25}}/>
                {/*TYPE OF PARKING*/}                  
                <div style={{textAlign: "left"}}>
                    <h4 style={{display: "inline-block"}}>Security?</h4>
                    <select
                        style={{width: 300, display: "inline-block"}}                
                        className="form-control pull-right"
                        required
                        value={this.state.value} 
                        onChange={this.handleChange}
                        name="security">                    
                            <option value="" disabled>{this.state.security?this.state.security:"Do you have security?"}</option>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>                      
                    </select>
                </div>

                <div style={{marginTop: 20, textAlign: "left"}}>
                    <h4 style={{marginTop: 5}}>The Address</h4>  
                    <div class="md-form" style={{marginTop: -20}}>
                        <textarea 
                            type="text" 
                            class="md-form form-light md-textarea" 
                            rows="4" 
                            style={{width: "100%", color: "white"}}/>                        
                    </div>
                </div>

              
          </div>   
       
        </div>
    )}
}