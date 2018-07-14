import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, NavLink, Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'mdbreact';

import {
  //Collapse,
  //Navbar,
  //NavbarToggler,
  //NavbarBrand,
  Nav,
  //NavItem,
  //NavLink,
  Container,
  Row,
  Col,
  Jumbotron,
  Button
} from 'react-bootstrap';



export default class Privacy_Policy extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            driver: false,
            owner: false,
            height: ""
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.driver = this.driver.bind(this);
        this.owner = this.owner.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.state.value);
        event.preventDefault();
    }

    driver() {this.setState({driver: !this.state.driver})}       
    owner() {this.setState({owner: !this.state.owner})}            

    componentWillMount(){
        this.setState({height: window.innerHeight + 'px'});
      }

    componentDidMount() {
      window.scrollTo(0, 0)
    }

	render() {   
    return(  
        <div>
        <link href="https://fonts.googleapis.com/css?family=Quicksand:500" rel="stylesheet"/>
       
        <div ref={(section) => { this.top = section; }} style={{backgroundColor: "#2bbbad", height: "100%", color: "white", paddingTop: 150, fontFamily: "Quicksand"}}>
                        
            <div style={{textAlign: "center", marginBottom: 50}}>
                <img src={require("../privacy_policy.png")} style={{height: 100, marginBottom: 10}} /> 
                <h1>Privacy Policy</h1>
                <p>We all got trust issues</p>
            </div>

            
            <div style={{backgroundColor: "white", height: "70vh", width: "90%", color: "black",
                         padding: 50, overflow: "scroll", alignSelf: "center", margin: "0 auto", "-webkit-overflow-scrolling": "touch", marginTop: 50}}>
            
            
                <h2>Privacy Policy</h2>
                                
                ParkUpp respects privacy and is committed to protecting the privacy of users of the website/App. 
                ParkUpp seeks to employ best practice when it comes to the collection and processing of personal information. 
                A summary of the type of information that is collected when you visit the ParkUpp website and how this information will be used is set out in this policy.
                <br/><br/>
                This policy applies to ParkUpp and the Services we provide from time to time.
                <br/><br/>
                If you follow a link to any other website, please check their policies before you submit any personal information to those websites.

                <br/><br/>

                <h4><strong>Information collected</strong></h4>
                ParkUpp may collect your personal information through your access and use of the website/App, during conversations or correspondence with ParkUpp’s representatives, 
                or when you use the Services, purchase goods and/or complete an application form.
                <br/><br/>
                ParkUpp may collect and store personal information from you in connection with:

                <ul>
                    <li>the provision of any product or service that ParkUpp and/or our affiliates may offer now or in the future;</li>                                                    
                    <li>orders, activations, and registrations for any products or services;</li>                                                    
                    <li>creation of a user profile on our website/App and verification of such profile;</li>                                                
                    <li>details of your motor vehicle, including make, model and registration number;</li>
                    <li>information requests or complaints;</li>
                    <li>marketing, newsletter or support subscriptions from us and/or third parties;</li>
                    <li>contest entries or survey participation;</li>
                    <li>employment applications;</li>
                    <li>registration for events;</li>
                    <li>visits or browsing on ParkUpp website/App; or</li>
                    <li>visits or browsing any partner websites/apps.</li>
                </ul>
                ParkUpp may collect the following types of personal information, including:
                <ul>

                    <li>personal and business contact information, such as name, address, telephone number, and email address;</li>
                    <li>financial information, such as your credit/debit card number or other billing information;</li>
                    <li>other unique information such as user IDs and passwords, product functionality, product and service preferences and contact preferences;</li>
                    <li>any information necessary in order for us to provide the Services you have requested;</li>
                    <li>geo-location information such as your IP address or physical location;</li>
                    <li>
                        details of the products and services you have purchased from us or which you have enquired about, together with any additional information 
                        necessary to deliver those products and services and to respond to your enquiries;
                    </li>
                    <li>
                        any additional information relating to you that you provide to us directly through our website/App or indirectly through use of our website/App 
                        or online presence, through our representatives or otherwise;
                    </li>
                    <li>information you provide to us through our service centre, customer surveys or visits by our representatives from time to time.</li>
                </ul>
                ParkUpp may store your personal information manually or electronically. By supplying this information you consent to ParkUpp holding and using it for the 
                purposes for which it was provided including in relation to the provision of the Services,. Information provided will be kept for as long as is necessary to fulfil that purpose.
                We may also collect information about your computer or mobile device, including where available your IP address, operating system and browser type, 
                for system administration and to report aggregate information to our webmasters. This information reveals nothing personal about you. 
                It is statistical data about our users browsing actions and patterns which does not identify any individual and allows us to ensure that content from our website/App 
                is presented in the most effective manner for you and for your device.

                <br/><br/>

                <h4><strong>How the information collected is used</strong></h4>
                Personal information provided to ParkUpp by you will only be used for the purposes it was provided as well as for the purposes listed in these Terms. 
                In light of the nature of the Services we offer, we may share your information to our third party service providers in order to provide our services to you. 
                In the provision of the Services, we may also provide third parties with your personal information, provided you have agreed thereto, in order to provide you with 
                marketing and promotional material. Personal information will not be provided to direct marketing companies or other such organisations without your permission. 
                We may disclose your personal information to third parties if we are under a duty to disclose or share such information in order to comply with any legal obligation 
                or to protect the rights, property or safety of ParkUpp, its clients or others. 
                ParkUpp may use your information to:

                <ul>
                    <li>provide the Services and/or products to you, which may necessitate sharing your personal information with third party service providers located in South Africa as well as outside of South Africa;</li>
                    <li>manage our relationship with you and third party service providers;</li>
                    <li>provide you with access to protected areas of our website/App;</li>
                    <li>communicate with you about ParkUpp’s products, services or support as well as that of our affiliates and service providers and send marketing communications in connection therewith;</li>
                    <li>provide support to you in respect of the Services;</li>
                    <li>improve our Services and develop new products and services;</li>
                    <li>provide personalised promotional offers;</li>
                    <li>measure performance of marketing initiatives;</li>
                    <li>allow you to participate in contests and surveys;</li>
                    <li>answer enquiries, provide information, support or advice about existing and new products or services;</li>
                    <li>assess and improve the performance and operation of the website/App;</li>
                    <li>to keep your contact details up to date and provide updated details to ParkUpp’s service providers and suppliers where necessary;</li>
                    <li>prevent and detect security threats, fraud or other malicious activity;</li>
                    <li>to process and respond to any complaint made by you.</li>
                </ul>

                Credit card information is used only for payment processing and fraud prevention. This information is not used for any other purpose by us or our financial 
                services providers and will not be kept longer than necessary for providing the Services.
                <br/><br/>
                Demographical and statistical information about user behaviour may be collected and used to analyse the popularity and effectiveness of the ParkUpp website. 
                Any disclosure of this information will be in aggregate form and will not identify individual users.
                <br/><br/>
                If you subscribe for data, news, announcements, alerts or any such information to be emailed to you from ParkUpp, we will hold your details on our database until 
                such time as you chose to unsubscribe from this service. You may do this at any stage by selecting the appropriate option in the alerts section of the mobile application.

                <br/><br/>

                <h4><strong>How we store information collected</strong></h4>
                Information, including your personal information is stored via the Amazon EC2 cloud network, which is based in various locations around the world, 
                including the USA, Australia and Europe (currently Ireland and Frankfurt) as well as in Singapore and Tokyo. . Information is held only as long as you are a 
                registered user of the website/App or as may be legally required. Information which you provide to us will be stored electronically and/or in hard copy, with 
                reasonable security measures protecting such. However, we do work with third party contractors, some of whom host and operate certain features of the website/App. 
                Accordingly, information that we collect from you may be collected in or transferred to a destination outside South Africa, including in Ireland, Australia or any 
                other such region as deemed appropriate from time to time and / or may be processed by staff operating outside South Africa who work for us or for one of our 
                contractors. By submitting personal information, you agree to this transfer, storing and processing. We will take all steps reasonably necessary to ensure that 
                your data and personal information is treated securely and in accordance with this Privacy Policy.

                <br/><br/>

                <h4><strong>Quality and Protection of your Information</strong></h4>
                We make every effort to keep the personal information we hold updated, complete and accurate. 
                It is your duty to provide ParkUpp with the most up to date personal information. You may do so in the following ways:

                <ul>
                    <li>email info@parkupp.co.za or</li>
                    <li>the App.</li>
                </ul>

                ParkUpp strives to ensure the security of personal information we hold by taking reasonable measures to prevent destruction, unlawful access and loss of personal information. Any compromise of data integrity or confidentiality will be reported to you by written notice.
                Please contact us by phone, or email if you:

                <ul>
                    <li>require access to any personal information we hold on you;</li>
                    <li>wish to notify us of any change, modification or correction; or</li>
                    <li>would like to have your personal information removed from our records.</li>
                    <li>believe that someone is impersonating or otherwise unlawfully using your account.</li>
                </ul>

                We will require suitable proof of identity from you before we action any of the above requests.

                <br/><br/>

                <h4><strong>Access to information</strong></h4>
                The Promotion of Access to Information Act, 2000 gives you the right to access information held about you. 
                For further information about this right and how to exercise it, please see ParkUpp’s PAIA Manual. 
                ParkUpp’s subsidiaries may have dedicated PAIA Manuals that are accessible on their specific websites. Should you be a client of a specific 
                subsidiary or a registered user of its site, please refer to that subsidiary’s PAIA Manual.
               
                <br/><br/>
                
                <h4><strong>Changes to our Online Privacy Policy</strong></h4>
                Any changes we may make to our Privacy Policy in the future will be posted on the website/App.
                
                <br/><br/>

                <h4><strong>Contact</strong></h4>
                Any queries or concerns about privacy on this website should be sent by email to info@parkupp.co.za 

            </div>

            <hr style={{borderColor: "white", width: "75%", marginTop: 100}}/>    

            <div style={{marginTop: 20, textAlign: "center", padding: 25, marginTop: -20}}>
                <p>
                    <Link to="/Support" style={{ color: '#FFF' }}>Support </Link>
                    | <Link to="/Contact_Us" style={{ color: '#FFF' }}>Contact us </Link>  
                    | <Link to="/Terms_Conditions" style={{ color: '#FFF' }}>Terms & Conditions </Link> 
                    | <Link to="/Privacy_Policy" style={{ color: '#FFF' }}>Privacy Policy </Link>
                    | <Link to="/Careers" style={{ color: '#FFF' }}>Careers </Link>
                    | <Link to="/FAQ" style={{ color: '#FFF' }}>FAQ </Link>
                </p>
                <p>© Copyright 2018 ParkUpp. All rights reserved</p>                                
            </div>  
        </div>
    </div>
    
	)}

}

