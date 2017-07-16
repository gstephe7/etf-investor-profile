import React, { Component } from 'react';
import { CSSTransitionGroup } from 'react-transition-group';

export default class Disclaimer extends Component {
  render(props) {
    if (this.props.showDisclaimer === true) {
      return (
        <CSSTransitionGroup
          transitionName="tada"
          transitionAppear={true}
          transitionAppearTimeout={300}
          transitionEnterTimeout={300}
          transitionLeaveTimeout={300}>
          <div id="disclaimer" className="container">
            <div className="row">
              <div className="col-xs-12">
                <h3>Disclaimer</h3>
                <p>ETFInvestorProfile.com provides information intended for personal entertainment use only, and does not provide any warranty or guarantee as to the accuracy, timeliness, performance, completeness or suitability of the information and materials found or offered for any purpose. ETFInvestorProfile.com is not a registered investment advisor. The data, materials and information provided may contain inaccuracies and/or errors and ETFInvestorProfile.com expressly excludes liability for any such inaccuracies or errors to the fullest extent permitted by law.</p>
                <p>You understand that no content published as part of the Services constitutes a recommendation that any particular investment, security, portfolio of securities, transaction or investment strategy is suitable for any specific person. You further understand that none of the creators, owners or providers of the ETFInvestorProfile.com services or their affiliates will advise you personally concerning the nature, potential, value or suitability of any particular investment, security, portfolio of securities, transaction, investment strategy or other matter. Any information gained through ETFInvestorProfile.com is impersonal and is not tailored to the investment needs of any specific person.</p>
                <p>You understand that performance data is supplied by sources believed to be reliable, that the calculations therein are made using such data, and that such calculations are not guaranteed by these sources, the information providers, or any other person or entity, and may not be complete. In addition, past performance is not an indication of future results.</p>
                <p>Each profile is available for informational purposes only. The information, research, and opinions contained on our site have been obtained or derived from sources believed to be reliable, but ETFInvestorProfile.com specifically disclaims any guarantee as to its accuracy and completeness and/or the opinions based thereon. You should not rely solely upon the research herein for purposes of transacting securities or other investments, and you are encouraged to conduct your own research and due diligence, and to seek the advice of a qualified securities professional before you make any investment.</p>
                <p>None of the information contained in our products constitutes, or is intended to constitute a recommendation by us of any particular security or trading strategy or a determination by us that any security or trading strategy is suitable for any specific person. Trading in any security can result in immediate and substantial losses of the money invested. ETFInvestorProfile.com will not be responsible or liable to you for any losses (Limitation of Liability).</p>
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
