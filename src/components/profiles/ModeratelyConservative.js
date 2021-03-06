import React, { Component } from 'react';
import { CSSTransitionGroup } from 'react-transition-group';

import DesktopAllyAd from '../DesktopAllyAd.js';
import MobileAllyAd from '../MobileAllyAd.js';
import AllyTextAd from '../AllyTextAd.js';

import ModConChart from '../../img/modConChart.png';

import ModConAllocation from './allocations/ModConAllocation.js';

export default class ModeratelyConservative extends Component {

  render(props) {
    if (this.props.showModConservative === true) {
      return (
        <CSSTransitionGroup
          transitionName="tada"
          transitionAppear={true}
          transitionAppearTimeout={300}
          transitionEnterTimeout={300}
          transitionLeaveTimeout={300}>
          <div id="profile" className="container">
            <div className="row">
              <div className="col-xs-12">
                <h3>ETF Investor Profile: </h3>
                <h3 className="mod-con"><em>MODERATELY CONSERVATIVE</em></h3>
                <p>Due to your short investing time horizon, your suggested ETF Investor Profile is <em>Moderately Conservative</em>. Moderately Conservative investors usually have an investing timeframe of 5 to 9 years and slightly favor capital preservation over growth. Half of the portfolio is kept in large-cap stocks in order to provide growth, but stocks are balanced out by government bonds which make up the other half of the portfolio. The Moderately Conservative Profile is ideal for investors between the ages of 55 and 60 who are saving for retirement, parents who are saving for their child's future in 5 to 9 years, or for individuals saving for big purchases or events anticipated in 5 to 9 years.</p>
              </div>
            </div>
            <DesktopAllyAd />
            <MobileAllyAd />
            <div className="row">
              <div className="col-xs-12">
                <h4>Suggested Portfolio Allocation</h4>
                <img className="chart center-block" src={ModConChart} alt="moderately conservative portfolio pie chart"/>
                <ModConAllocation
                  principle={this.props.principle}
                />
                <p>The Moderately Conservative Portfolio allocates 50% of its value in a Large-Cap Stock ETF, 30% of its value in an Intermediate-Term US Government Treasury ETF, and 20% in a Short-Term Government Treasury ETF. Large-cap stocks provide growth potential while offering a little more stability than small-cap stocks. An ETF that tracks the <a href="http://money.cnn.com/data/markets/sandp/" target="_blank" rel="noopener noreferrer">S&P 500 Index</a> is suggested for the large-cap portion of the portfolio. The bond allocation of the moderately conservative portfolio is covered by a US Government Intermediate-Term Treasury ETF and a US Government Short-Term Treasury ETF. The intermediate-term treasury ETF is a little more volatile than the short-term treasury ETF, but intermediate-term treasuries usually provide higher returns. Government bonds stabilize the portfolio and protect against market downturns. </p>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12">
                <h4>Suggested ETFs</h4>
                <ul>
                  <h5><a href="https://www.ishares.com/us/products/239726/ishares-core-sp-500-etf" target="_blank" rel="noopener noreferrer">iShares Core S&P 500 ETF</a></h5>
                  <li>Ticker Symbol: IVV</li>
                  <li>Average Return: 9.5%</li>
                  <li>Expense Ratio: 0.04%</li>
                  <li>Description: The iShares Core S&P 500 ETF seeks to invest in all 500 companies found in the S&P 500 Index. S&P 500 Companies are the largest companies in the United States and have a market cap of over $10 billion. A few examples of companies found in this ETF include Apple (AAPL), Johnson & Johnson (JNJ), and Exxon Mobile (XOM).</li>
                </ul>
                <ul>
                  <h5><a href="https://us.spdrs.com/en/etf/spdr-bloomberg-barclays-intermediate-term-treasury-etf-ITE" target="_blank" rel="noopener noreferrer">SPDR Bloomberg Barclays Intermediate Term Treasury ETF</a></h5>
                  <li>Ticker Symbol: ITE</li>
                  <li>Average Return: 3.35%</li>
                  <li>Expense Ratio: 0.10%</li>
                  <li>Description: The SDPR Bloomberg Barclays Intermediate Term Treasury ETF seeks to invest in US Government Bonds that range in maturity from 1 to 10 years. A governent bond ETF serves to stabilize your portfolio and act as a counterbalance to equities in your portfolio. For the most part, if stocks are falling in price then US Government Bond ETFs are increasing in price - and vice versa.</li>
                </ul>
                <ul>
                  <h5><a href="https://personal.vanguard.com/us/funds/snapshot?FundIntExt=INT&FundId=3142" target="_blank" rel="noopener noreferrer">Vanguard Short-Term Government Bond ETF</a></h5>
                  <li>Ticker Symbol: VGSH</li>
                  <li>Average Return: 0.80%</li>
                  <li>Expense Ratio: 0.07%</li>
                  <li>Description: The Vanguard Short-Term Government Bond ETF seeks to invest in US Government Bonds that range in maturity from 1 to 3 years. Short-term government bond ETFs are extremely conservative and are used to preserve the value of a portfolio while providing a stable annual return. </li>
                </ul>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12">
                <h4>Projected Final Value of Portfolio: ${this.props.futureValue}</h4>
              </div>
            </div>
            <AllyTextAd />
          </div>
        </CSSTransitionGroup>
      );
    } else {
      return null;
    }
  }
}
