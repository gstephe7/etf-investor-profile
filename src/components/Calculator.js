import React, { Component } from 'react';

export default class Calculator extends Component {
  constructor() {
    super();
    this.state = {
      noYears: false
    }
    this.calculator = this.calculator.bind(this);
  };

  calculator(props) {
    var self = this;
    if (self.props.years > 0) {
      self.props.calculate();
      self.setState({
        noYears: false
      })
    }
    else {
      self.setState({
        noYears: true
      })
    }
  };

  alertStyle() {
    return {
      border: this.state.noYears ? 'red thin solid' : null
    }
  };

  render(props) {
    var self = this;

    var style = {
      color: "black"
    };

    function Error() {
      if (self.state.noYears === true) {
        return (
          <p className="text-danger">Make sure to input how many years you plan on saving/investing your money</p>
        );
      }
      else {
        return null;
      }
    };

    return (
      <div className="calculator container">
        <div className="row">
          <div className="col-xs-12">
            <form>
              <label>How much money are you starting with?</label>
              <br/>
              $<input type="number" value={this.props.principle} onChange={this.props.changePrinciple}/>
              <br/>
              <br/>
              <label>How many years do you plan on saving/investing this money?</label>
              <br/>
              &nbsp;&nbsp;<input type="number" style={this.alertStyle()} value={this.props.years} onChange={this.props.changeYears}/>
              <br/>
              <br/>
              <label>How much additional money will you contribute to this account every year?</label>
              <br/>
              $<input type="number" value={this.props.addition} onChange={this.props.changeAddition}/>
              <br/>
              <br/>
            </form>
            <a href="#profile" style={style}><button onClick={this.calculator}>Calculate Profile</button></a>
            <Error />
          </div>
        </div>
      </div>
    );
  }
}
