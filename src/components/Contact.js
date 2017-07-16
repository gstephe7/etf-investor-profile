import React, { Component } from 'react';
import { CSSTransitionGroup } from 'react-transition-group';

export default class Contact extends Component {
  render(props) {
    if (this.props.showContact === true) {
      return (
        <CSSTransitionGroup
          transitionName="tada"
          transitionAppear={true}
          transitionAppearTimeout={300}
          transitionEnterTimeout={300}
          transitionLeaveTimeout={300}>
          <div id="contact" className="container">
            <div className="row">
              <div className="col-xs-12">
                <h3>Contact</h3>
                <p>Email: <a href="mailto:contact@spacemonkeyapps.com" target="_blank" rel="noopener noreferrer">contact@spacemonkeyapps.com</a></p>
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
