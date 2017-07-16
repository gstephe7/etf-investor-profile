import React, { Component } from 'react';
import { CSSTransitionGroup } from 'react-transition-group';

import logo from '../img/etfinvestorprofile.png';

export default class Jumbotron extends Component {
  render() {
    return (
      <CSSTransitionGroup
        transitionName="fadeIn"
        transitionAppear={true}
        transitionAppearTimeout={5000}
        transitionEnterTimeout={5000}
        transitionLeaveTimeout={1000}>
        <div id="yourprofile" className="container">
          <div className="row">
            <div className="heading col-xs-12">
              <div className="layer">
                <img className="heading-logo center-block" src={logo} alt="ETF Investor Profile Logo" />
              </div>
            </div>
          </div>
        </div>
      </CSSTransitionGroup>
    );
  }
}
