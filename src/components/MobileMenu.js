import React, { Component } from 'react';
import { CSSTransitionGroup } from 'react-transition-group';

export default class MobileMenu extends Component {
  render(props) {
    if (this.props.showMenu === true) {
      return (
        <CSSTransitionGroup
          transitionName="slide"
          transitionAppear={true}
          transitionAppearTimeout={300}
          transitionEnterTimeout={300}
          transitionLeaveTimeout={300}>
          <div className="menu container visible-xs">
            <div className="row">
              <div className="col-xs-12">
                <ul className="pull-right">
                  <li className="menu-item text-right">
                    <a className="menu-item" onClick={this.props.displayProfile} href="#yourprofile">Find Your Profile</a>
                  </li>
                  <li className="menu-item text-right">
                    <a className="menu-item" onClick={this.props.displayAboutETF} href="#aboutetfs">What is an ETF?</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </CSSTransitionGroup>
      );
    } else {
      return null;
    }
  }
}
