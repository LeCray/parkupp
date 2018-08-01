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



export default class Type extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: "",
            residential: false,
            commercial: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.renderResCom = this.renderResCom.bind(this);
        //this.handleSubmit = this.handleSubmit.bind(this);
      }
    componentDidMount() {
      window.scrollTo(0, 0)
    }

    async handleChange (evt) {
        await this.setState({ [evt.target.name]: evt.target.value })
        this.renderResCom()        
    }

    renderResCom() {
        if (this.state.type == "Residential") {
            console.log(this.state.type)
            this.setState({residential: true})
            this.state.commercial? this.setState({commercial: false}): null
        } else {
            console.log(this.state.type)
            this.setState({commercial: true})
            this.state.residential? this.setState({residential: false}): null
        }
    }

    render() {   
    return(  
        <div>
                                     
        <div class="borderr container" style={{height: 500, padding: 40}}>                    
            <h6 style={{marginBottom: 20}}>Please tell us the type of your parking spot</h6>              
            
            <div style={{marginBottom: 25}}>
                <select
                    style={{width: 300, display: "inline-block"}}                
                    className="form-control pull-left"
                    required
                    value={this.state.value} 
                    onChange={this.handleChange}
                    name="type">                    
                        <option value="" disabled>Type of parking</option>
                        <option value="Residential">Residential</option>
                        <option value="Commercial">Commercial</option>                      
                </select>
                <h4 style={{display: "inline-block"}}>{this.state.type}</h4>  
            </div>
            
            <div style={{marginBottom: 25}}>
                <div class="pull-left" style={{display: "inline-block"}}>
                    <select
                        style={{width: 300, display: this.state.residential?"":"none"}}                
                        className="form-control"
                        required
                        value={this.state.value} 
                        onChange={this.handleChange}
                        name="resKind">                    
                            <option value="" disabled>What kind?</option>
                            <option value="Driveway">Driveway</option>
                            <option value="ParkingLot">Parking Lot</option>                      
                    </select>
                </div>
                <h4 style={{display: "inline-block"}}>{this.state.Driveway?this.state.Drieway:this.state.ParkingLot}</h4>      
            </div>
            
            <div >
                <input
                    style={{width: 300, display: this.state.commercial?"":"none"}}
                    name="numberOfBays"
                    autoComplete="off"
                    type="number"
                    placeholder="Number of Parking bays"
                    className="form-control"
                    required
                    onChange={this.handleChange}/>
                <input
                    style={{marginTop: 25, width: 300, display: this.state.commercial?"":"none"}}
                    name="numberOfEntrances"
                    autoComplete="off"
                    type="number"
                    placeholder="Number of Entrances"
                    className="form-control"
                    required
                    onChange={this.handleChange}/>
                <select
                    style={{marginTop: 24, width: 300, display: this.state.commercial?"":"none"}}                
                    className="form-control"
                    required
                    value={this.state.value} 
                    onChange={this.handleChange}
                    name="lpr">                    
                        <option value="" disabled>Do you have LPR installed?</option>
                        <option value="resDriveway">Yes</option>
                        <option value="resParkingLot">No</option>                      
                </select>
            </div>
           

            <select
                style={{marginTop: 0}}
                name="locked"                
                className="form-control"
                required
                value={this.state.value} 
                onChange={this.handleChange}>                    
                    <option value="">Is the space locked?</option>
                    <option value="yes">Yes</option>
                    <option value="no">No</option>                      
            </select>

             <input
                style={{marginTop: 25}}
                name="numberOfBays"
                autoComplete="off"
                type="number"
                placeholder="Number of bays"
                className="form-control"
                required
                onChange={this.handleChange}/>
                                              
          </div>   
                                                      
        </div>
        
    )}
}