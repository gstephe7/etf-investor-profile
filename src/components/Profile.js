import React, { Component } from 'react';
import { CSSTransitionGroup } from 'react-transition-group';

import Welcome from './Welcome.js';
import Aggressive from './profiles/Aggressive.js';
import ModeratelyAggressive from './profiles/ModeratelyAggressive.js';
import Balanced from './profiles/Balanced.js';
import ModeratelyConservative from './profiles/ModeratelyConservative.js';
import Conservative from './profiles/Conservative.js';
import Calculator from './Calculator.js';
import MobileGoogleAd from './MobileGoogleAd.js';

export default class Profile extends Component {
  constructor() {
    super();
    this.state = {
      years: null,
      principle: null,
      addition: null,
      interest: null,
      futureValue: '',
      showAggressive: false,
      showModAggressive: false,
      showBalanced: false,
      showModConservative: false,
      showConservative: false
    }
    this.changeYears = this.changeYears.bind(this);
    this.changePrinciple = this.changePrinciple.bind(this);
    this.changeAddition = this.changeAddition.bind(this);
    this.calculate = this.calculate.bind(this);
    this.displayAggressive = this.displayAggressive.bind(this);
    this.displayModAggressive = this.displayModAggressive.bind(this);
    this.displayBalanced = this.displayBalanced.bind(this);
    this.displayModConservative = this.displayModConservative.bind(this);
    this.displayConservative = this.displayConservative.bind(this);
  }

  changeYears(event) {
    if (Number(event.target.value) > 0) {
      this.setState({
        years: Number(event.target.value)
      })
    } else {
      this.setState({
        years: null
      })
    }
  }

  changePrinciple(event) {
    if (Number(event.target.value) > 0) {
      this.setState({
        principle: Number(event.target.value)
      })
    } else {
      this.setState({
        principle: null
      })
    }
  }

  changeAddition(event) {
    if (Number(event.target.value) > 0) {
      this.setState({
        addition: Number(event.target.value)
      })
    } else {
      this.setState({
        addition: null
      })
    }
  }

  calculate() {
    this.renderProfile();
    var amount = this.state.principle;
    var self = this;
    setTimeout(function() {
      for (var i = 0; i < self.state.years; i++) {
        amount = (amount + self.state.addition) * (1 + self.state.interest);
      };
      self.setState({
        futureValue: amount.toLocaleString(undefined, {
          minimumFractionDigits: 2,
          maximumFractionDigits: 2
        })
      });
    }, 100);
  }

  renderProfile() {
    if (this.state.years > 19) {
      this.setState({
        interest: 0.067
      })
      this.displayAggressive();
    }
    else if (this.state.years < 20 && this.state.years > 14) {
      this.setState({
        interest: 0.064
      })
      this.displayModAggressive();
    }
    else if (this.state.years < 15 && this.state.years > 9) {
      this.setState({
        interest: 0.059
      })
      this.displayBalanced();
    }
    else if (this.state.years < 10 && this.state.years > 4) {
      this.setState({
        interest: 0.055
      })
      this.displayModConservative();
    }
    else {
      this.setState({
        interest: 0.05
      })
      this.displayConservative();
    }
  }

  displayAggressive() {
    this.setState({
      showAggressive: true,
      showModAggressive: false,
      showBalanced: false,
      showModConservative: false,
      showConservative: false
    })
  }

  displayModAggressive() {
    this.setState({
      showAggressive: false,
      showModAggressive: true,
      showBalanced: false,
      showModConservative: false,
      showConservative: false
    })
  }

  displayBalanced() {
    this.setState({
      showAggressive: false,
      showModAggressive: false,
      showBalanced: true,
      showModConservative: false,
      showConservative: false
    })
  }

  displayModConservative() {
    this.setState({
      showAggressive: false,
      showModAggressive: false,
      showBalanced: false,
      showModConservative: true,
      showConservative: false
    })
  }

  displayConservative() {
    this.setState({
      showAggressive: false,
      showModAggressive: false,
      showBalanced: false,
      showModConservative: false,
      showConservative: true
    })
  }

  render(props) {
    if (this.props.showProfile) {
      return (
        <CSSTransitionGroup
          transitionName="tada"
          transitionAppear={true}
          transitionAppearTimeout={300}
          transitionEnterTimeout={300}
          transitionLeaveTimeout={300}>
          <div className="container">
            <div className="row">
              <div className="col-xs-12">
                <Welcome />
                <h1 className="hidden-xs">Find Your ETF Investor Profile</h1>
                <h1 className="visible-xs text-center">Find Your ETF Investor Profile</h1>
                <Calculator
                  years={this.state.years}
                  principle={this.state.principle}
                  addition={this.state.addition}
                  interest={this.state.addition}
                  changeYears={this.changeYears}
                  changePrinciple={this.changePrinciple}
                  changeAddition={this.changeAddition}
                  calculate={this.calculate}
                />
                <MobileGoogleAd />
                <Aggressive
                  showAggressive={this.state.showAggressive}
                  futureValue={this.state.futureValue}
                  principle={this.state.principle}
                />
                <ModeratelyAggressive
                  showModAggressive={this.state.showModAggressive}
                  futureValue={this.state.futureValue}
                  principle={this.state.principle}
                />
                <Balanced
                  showBalanced={this.state.showBalanced}
                  futureValue={this.state.futureValue}
                  principle={this.state.principle}
                />
                <ModeratelyConservative
                  showModConservative={this.state.showModConservative}
                  futureValue={this.state.futureValue}
                  principle={this.state.principle}
                />
                <Conservative
                  showConservative={this.state.showConservative}
                  futureValue={this.state.futureValue}
                  principle={this.state.principle}
                />
              </div>
            </div>
          </div>
        </CSSTransitionGroup>
      );
    }
    else {
      return null;
    }
  }
}
