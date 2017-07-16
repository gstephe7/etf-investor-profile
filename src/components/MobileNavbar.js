import React, { Component } from 'react';

import logo from '../img/etf.png';

export default class MobileNavbar extends Component {
  render(props) {
    return (
      <div className="mobile-nav container visible-xs">
        <div className="row">
          <div className="col-xs-10">
            <img className="logo" src={logo} alt="ETF Investor Profile Logo" />
          </div>
          <div className="col-xs-2">
            <button className="menu-btn pull-right"  onClick={this.props.displayMenu}><i className="fa fa-bars"></i></button>
          </div>
        </div>
      </div>
    );
  }
}
