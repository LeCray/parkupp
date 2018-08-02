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
            commercial: false,
            driveway: false,
            parkingLot: false
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
        //RESIDENTIAL/COMMERCIAL
        if (this.state.type == "Residential") {
            console.log(this.state.type)
            this.setState({residential: true})
            this.state.commercial? this.setState({commercial: false}): null
        } else {
            console.log(this.state.type)
            this.setState({commercial: true})
            this.state.residential? this.setState({residential: false}): null
        }

        //DRIVEWAY/PARKING LOT
        if (this.state.resKind == "Driveway") {
            console.log(this.state.type)
            this.setState({driveway: true})
            this.state.parkingLot? this.setState({parkingLot: false}): null
        } else {
            console.log(this.state.type)
            this.setState({parkingLot: true})
            this.state.driveway? this.setState({driveway: false}): null
        }
    }

    render() {   
    return(  
        
        
                               
        <div class="container" style={{height: this.state.commercial?600:450, padding: 40, borderBottom: "1px solid white", textAlign: "left"}}>  
            <h3 style={{marginBottom: 25}}>Please tell us the type of your parking spot</h3>
            
            <hr style={{borderColor: "#fff", marginBottom: 25}}/>
            {/*TYPE OF PARKING*/}                  
            <div  style={{flex: 1, flexDirection: "row", justifyContent: "flex-end"}}>
                <h4 style={{marginTop: 5, display: "inline-block"}}>Type of Parking</h4>  
                <div class="float-right" style={{display: "inline-block"}}>
                    <select
                        style={{marginLeft: 20, width: 300}}  
                        className="form-control "
                        required
                        value={this.state.value} 
                        onChange={this.handleChange}
                        name="type">                    
                            <option value="" disabled>{this.state.type?this.state.type:"Type of parking"}</option>
                            <option value="Residential">Residential</option>
                            <option value="Commercial">Commercial</option>                      
                    </select>
                </div>
            </div>
            
            {/*TYPE OF PARKING == RESIDENTIAL*/}
            <div  style={{marginTop: 20, display: this.state.residential?"":"none"}}>
                <h5 style={{marginTop: 5, display: "inline-block", fontStyle: "italic"}}>
                    What kind?
                </h5>    
                <div class="pull-right" style={{display: "inline-block"}}>
                    <select
                        style={{width: 300}}                
                        className="form-control"
                        required
                        value={this.state.value} 
                        onChange={this.handleChange}
                        name="resKind">                    
                            <option value="" disabled>{this.state.resKind?this.state.resKind:"What kind?"}</option>
                            <option value="Driveway">Driveway</option>
                            <option value="ParkingLot">Parking Lot</option>                      
                    </select>
                </div>
            </div>
            
            {/*MAX HOURS*/}
            <div  style={{display: this.state.driveway?"":"none", marginTop: 20}}>
                <h5 style={{marginTop: 5, fontStyle: "italic", display: "inline-block"}}>
                    Max hours
                </h5>                    
                <input
                    style={{width: 300, display: "inline-block"}}
                    className="form-control pull-right"
                    name="maxHours"
                    autoComplete="off"
                    type="number"
                    placeholder="Max hours"
                    required
                    onChange={this.handleChange}/>                
            </div>
            
            {/*TYPE OF PARKING == COMMERCIAL*/}
            <div style={{display: this.state.commercial?"":"none", marginTop: 20}}>
                <div>
                    <h5 style={{marginTop: 5, display: "inline-block", fontStyle: "italic"}}>
                        Number of parking bays
                    </h5>
                    <input
                        style={{width: 300, display: "inline-block"}}
                        className="form-control pull-right"
                        name="numberOfBays"
                        autoComplete="off"
                        type="number"
                        placeholder="Number of parking bays"
                        required
                        onChange={this.handleChange}/>
                </div>
                
                <div style={{marginTop: 20}}>
                    <h5 style={{marginTop: 5, display: "inline-block", fontStyle: "italic"}}>
                        Number of entrances
                    </h5>
                    <input
                        style={{width: 300, display: "inline-block"}}
                        className="form-control pull-right"
                        name="numberOfEntrances"
                        autoComplete="off"
                        type="number"
                        placeholder="Number of Entrances"                    
                        required
                        onChange={this.handleChange}/>
                </div>
                
                <div style={{marginTop: 20}}>
                    <h5 style={{marginTop: 5, display: "inline-block", fontStyle: "italic"}}>
                        Do you have LPR?
                    </h5>
                    <select
                        style={{width: 300, display: "inline-block"}}
                        className="form-control pull-right"
                        required
                        value={this.state.value} 
                        onChange={this.handleChange}
                        name="lpr">                    
                            <option value="" disabled>LPR?</option>
                            <option value="resDriveway">Yes</option>
                            <option value="resParkingLot">No</option>                      
                    </select>
                </div>
                
                <div style={{marginTop: 20}}>
                    <h5 style={{marginTop: 5, display: "inline-block", fontStyle: "italic"}}>
                        Parking rates?
                    </h5>
                    <select
                        style={{width: 300, display: "inline-block"}}
                        className="form-control pull-right"
                        required
                        value={this.state.value} 
                        onChange={this.handleChange}
                        name="rates">                    
                            <option value="" disabled>{this.state.rates?this.state.rates:"Rates?"}</option>
                            <option value="yes">Yes</option>
                            <option value="no">No</option>                      
                    </select>
                </div>
            </div>
           
            {/*IS THE SPACE LOCKED*/}
            <div style={{marginTop: 20}}>
                <h4 style={{marginTop: 5, display: "inline-block"}}>Is the space locked?</h4>
                <select
                    style={{display: "inline-block", width: 300}}
                    name="locked"                
                    className="form-control pull-right"
                    required
                    value={this.state.value} 
                    onChange={this.handleChange}>                    
                        <option value="">Is the space locked?</option>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>                      
                </select>
            </div>

            <div style={{marginTop: 20}}>
                <h4 style={{marginTop: 5, display: "inline-block"}}>Number of bays</h4>
                <input
                    style={{width: 300, display: "inline-block"}}
                    className="form-control pull-right"
                    name="numberOfBays"
                    autoComplete="off"
                    type="number"
                    placeholder="Number of bays"
                    required
                    onChange={this.handleChange}/>
            </div>
                                              
        </div>   
                                                      
        
        
    )}
}