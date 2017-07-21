import React, { Component } from 'react';
import AdSense from 'react-adsense';

export default class VerticalGoogleAd extends Component {

  render(props) {
    return (
      <div className="hidden-md-down container">
        <div className="row">
          <div className="vert-ads col-xs-12">
            <AdSense.Google
              client='ca-pub-9052520418723092'
              slot='5996167969'
            />
          </div>
        </div>
      </div>
    );
  }
}
