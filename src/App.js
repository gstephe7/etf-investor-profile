import React, { Component } from 'react';
import 'bootstrap/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './App.css';

import AboutETF from './components/AboutETF.js';
import Contact from './components/Contact.js';
import DesktopNavbar from './components/DesktopNavbar.js';
import Disclaimer from './components/Disclaimer.js';
import Footer from './components/Footer.js';
import Heading from './components/Heading.js';
import MobileMenu from './components/MobileMenu.js';
import MobileNavbar from './components/MobileNavbar.js';
import Privacy from './components/Privacy.js';
import Profile from './components/Profile.js';

class App extends Component {
  constructor() {
    super();
    this.state = {
      showMenu: false,
      showProfile: true,
      showAboutETF: false,
      showContact: false,
      showDisclaimer: false,
      showPrivacy: false
    }
    this.displayMenu = this.displayMenu.bind(this);
    this.displayProfile = this.displayProfile.bind(this);
    this.displayAboutETF = this.displayAboutETF.bind(this);
    this.displayContact = this.displayContact.bind(this);
    this.displayDisclaimer = this.displayDisclaimer.bind(this);
    this.displayPrivacy = this.displayPrivacy.bind(this);
  }

  displayMenu() {
    this.setState({
      showMenu: !this.state.showMenu
    })
  }

  displayProfile() {
    this.setState({
      showProfile: true,
      showMenu: false,
      showAboutETF: false,
      showContact: false,
      showDisclaimer: false,
      showPrivacy: false
    })
  }

  displayAboutETF() {
    this.setState({
      showAboutETF: true,
      showMenu: false,
      showProfile: false,
      showContact: false,
      showDisclaimer: false,
      showPrivacy: false
    })
  }

  displayContact() {
    this.setState({
      showMenu: false,
      showProfile: false,
      showAboutETF: false,
      showContact: true,
      showDisclaimer: false,
      showPrivacy: false
    })
  }

  displayDisclaimer() {
    this.setState({
      showMenu: false,
      showProfile: false,
      showAboutETF: false,
      showContact: false,
      showDisclaimer: true,
      showPrivacy: false
    })
  }

  displayPrivacy() {
    this.setState({
      showMenu: false,
      showProfile: false,
      showAboutETF: false,
      showContact: false,
      showDisclaimer: false,
      showPrivacy: true
    })
  }

  render() {
    return (
      <div className="container">
        <MobileNavbar
          displayMenu={this.displayMenu}
        />
        <MobileMenu
          showMenu={this.state.showMenu}
          displayAboutETF={this.displayAboutETF}
          displayProfile={this.displayProfile}
        />
        <DesktopNavbar
          displayAboutETF={this.displayAboutETF}
          displayProfile={this.displayProfile}
        />
        <Heading />

        <div className="container">
          <div className="row">
            <div className="col-sm-2 hidden-xs">

            </div>
            <div className="col-sm-8 col-xs-12">
              <Profile
                showProfile={this.state.showProfile}
              />
              <AboutETF
                showAboutETF={this.state.showAboutETF}
              />
              <Contact
                showContact={this.state.showContact}
              />
              <Disclaimer
                showDisclaimer={this.state.showDisclaimer}
              />
              <Privacy
                showPrivacy={this.state.showPrivacy}
              />
            </div>
            <div className="col-sm-2 hidden-xs">

            </div>
          </div>
        </div>

        <Footer
          displayProfile={this.displayProfile}
          displayAboutETF={this.displayAboutETF}
          displayContact={this.displayContact}
          displayDisclaimer={this.displayDisclaimer}
          displayPrivacy={this.displayPrivacy}
        />

      </div>
    );
  }
}

export default App;
