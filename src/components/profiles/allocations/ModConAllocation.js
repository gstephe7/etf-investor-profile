import React, { Component } from 'react';

export default class ModConAllocation extends Component {
  render(props) {

    var largeCap = (this.props.principle * 0.5).toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });

    var intBond = (this.props.principle * 0.3).toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });

    var shortBond = (this.props.principle * 0.2).toLocaleString(undefined, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });

    if (this.props.principle >= 1000) {
      return (
        <div className="container">
          <div className="row">
            <div className="col-xs-8 col-xs-offset-2">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th>ETF</th>
                    <th>Dollar Value</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Large-Cap Stock ETF</td>
                    <td>${largeCap}</td>
                  </tr>
                  <tr>
                    <td>Intermediate-Term US Treasury ETF</td>
                    <td>${intBond}</td>
                  </tr>
                  <tr>
                    <td>Short-Term US Treasury ETF</td>
                    <td>${shortBond}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}
