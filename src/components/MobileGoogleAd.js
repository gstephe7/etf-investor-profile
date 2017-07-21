import React, { Component } from 'react';
import AdSense from 'react-adsense';

export default class MobileGoogleAd extends Component {

  render(props) {
    return (
      <div className="visible-xs container">
        <div className="row">
          <div className="hori-ads col-xs-12">
            <AdSense.Google
              client='ca-pub-9052520418723092'
              slot='3661725640'
            />
          </div>
        </div>
      </div>
    );
  }
}
