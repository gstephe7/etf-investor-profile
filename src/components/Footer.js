import React, { Component } from 'react';

import logo from '../img/spacemonkey.png';

export default class Footer extends Component {

  render(props) {
    return (
      <div className="footer container">
        <div className="row">
          <div className="col-xs-8">
            <ul className="footer-list">
              <li className="footer-text">
                <a className="footer-text" onClick={this.props.displayProfile} href="#yourprofile">Find Your Profile</a>
              </li>
              <li className="footer-text">
                <a className="footer-text" onClick={this.props.displayAboutETF} href="#aboutetfs">What is an ETF?</a>
              </li>
              <li className="footer-text">
                <a className="footer-text" onClick={this.props.displayContact} href="#contact">Contact</a>
              </li>
              <li className="footer-text">
                <a className="footer-text" onClick={this.props.displayDisclaimer} href="#disclaimer">Disclaimer</a>
              </li>
              <li className="footer-text">
                <a className="footer-text" onClick={this.props.displayPrivacy} href="#privacy">Privacy Policy</a>
              </li>
            </ul>
          </div>
          <div className="col-xs-4">
            <img className="footer-logo pull-right" src={logo} alt="spacemonkey applications logo"/>
          </div>
        </div>
      </div>
    );
  }
}
