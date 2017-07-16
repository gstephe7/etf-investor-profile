import React, { Component } from 'react';

import logo from '../img/etf.png';

export default class DesktopNavbar extends Component {

  render(props) {
    return (
      <div className="desktop-nav container hidden-xs">
        <div className="row">
          <div className="col-xs-4">
            <img className="logo" src={logo} alt="ETF Investor Profile Logo" />
          </div>
          <div className="col-xs-8">
            <ul className="menu pull-right">
              <li className="menu-item">
                <a className="menu-item" onClick={this.props.displayProfile} href="#yourprofile">Find Your Profile</a>
              </li>
              <li className="menu-item">
                <a className="menu-item" onClick={this.props.displayAboutETF} href="#aboutetfs">What is an ETF?</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}
