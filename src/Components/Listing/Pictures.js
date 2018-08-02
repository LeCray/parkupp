import React, { Component } from 'react';
import Ionicon from 'react-ionicons'
import { Link } from 'react-router-dom'
import ImageUploader from 'react-images-upload';

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
     constructor(props) {
        super(props);
        this.state = { 
            pictures: [],
            preview: true
        };
         this.onDrop = this.onDrop.bind(this);
         this.preview = this.preview.bind(this);
    }
 
    onDrop(picture) {
        this.setState({
            pictures: this.state.pictures.concat(picture),
        });
    }

    preview() {
        this.setState({preview: !this.state.preview})
    }

    componentDidMount() {
      window.scrollTo(0, 0)
    }

    render() {   
    return(  
        <div>
                                     
          <div class="container" style={{height: 450, padding: 40, borderBottom: "1px solid white"}}>                    
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
                        type="text"
                        placeholder="Name your parking"
                        required
                        onChange={this.handleChange}/>
                </div>

                <div style={{marginTop: 20, textAlign: "left"}}>
                    <h4 style={{marginTop: 5, display: "inline-block"}}>Upload 3 Pics</h4> 

                    <p class="previewButton pull-right" onClick={this.preview}>{this.state.preview?"Save":"Preview"}</p>

                    <div style={{marginTop: 20, textAlign: "center"}}>
                        <ImageUploader                        
                            withIcon={true}
                            buttonText='Choose images'
                            onChange={this.onDrop}
                            imgExtension={['.jpg', '.gif', '.png', '.gif']}
                            maxFileSize={5242880}
                            withPreview={this.state.preview}
                        />
                    </div>
                </div>
          </div>   
                                                      
        </div>
        
    )}
}