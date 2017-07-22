import React, { Component } from 'react';
import { CSSTransitionGroup } from 'react-transition-group';

import DesktopAllyAd from '../DesktopAllyAd.js';
import MobileAllyAd from '../MobileAllyAd.js';
import AllyTextAd from '../AllyTextAd.js';

import ModAggChart from '../../img/modAggChart.png';

import ModAggAllocation from './allocations/ModAggAllocation.js';

export default class ModeratelyAggressive extends Component {

  render(props) {
    if (this.props.showModAggressive === true) {
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
                <h3 className="mod-agg"><em>MODERATELY AGGRESSIVE</em></h3>
                <p>Due to your long investing time horizon, your suggested ETF Investor Profile is <em>Moderately Aggressive</em>. Moderately aggressive investors have an investing timeframe of 15 to 19 years and pursue growth potential while maintaining a little stability in their portfolio. They seek out opportunities with greater risk/reward, but refrain from investing too much of their portfolio in these high risk/reward investments. A 15 to 19 year timeframe gives this investor some time to recover from a market downturn, but an increase in allocation toward government bonds is needed to provide stablity. The Moderately Aggressive Profile is usually ideal for investors between the ages of 45 and 50 who are saving for retirement, or for parents who are saving for their child's future in 15 to 18 years. </p>
              </div>
            </div>
            <DesktopAllyAd />
            <MobileAllyAd />
            <div className="row">
              <div className="col-xs-12">
                <h4>Suggested Portfolio Allocation</h4>
                <img className="chart center-block" src={ModAggChart} alt="moderately aggressive portfolio pie chart"/>
                <ModAggAllocation
                  principle={this.props.principle}
                />
                <p>The Moderately Aggressive Portfolio allocates 40% of its value in a Small-Cap Stock ETF, 30% of its value in a Large-Cap Stock ETF, and 30% in an Intermediate-Term US Government Treasury ETF. Small-cap stocks provide the moderately aggressive portfolio with a large amount of growth potential and upside. A Small-Cap Value ETF is preferred because small-cap <a href="http://www.investopedia.com/terms/v/valuestock.asp?lgl=rira-baseline-vertical" target="_blank" rel="noopener noreferrer">value stocks</a> have historically outperformed small-cap <a href="http://www.investopedia.com/terms/g/growthstock.asp?lgl=rira-baseline-vertical" target="_blank" rel="noopener noreferrer">growth stocks</a>. Large-cap stocks are included to provide diversification and a little more stability. An ETF that tracks the <a href="http://money.cnn.com/data/markets/sandp/" target="_blank" rel="noopener noreferrer">S&P 500 Index</a> is suggested for the large-cap portion of the portfolio. The bond allocation of the moderately aggressive portfolio is covered by a US Government Intermediate-Term Treasury ETF. Government bonds balance out the portfolio and provide some protection against market downturns. </p>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12">
                <h4>Suggested ETFs</h4>
                <ul>
                  <h5><a href="https://personal.vanguard.com/us/funds/snapshot?FundIntExt=INT&FundId=0937#tab=0" target="_blank" rel="noopener noreferrer">Vanguard Small-Cap Value ETF</a></h5>
                  <li>Ticker Symbol: VBR</li>
                  <li>Average Return: 9.10%</li>
                  <li>Expense Ratio: 0.07%</li>
                  <li>Description: The Vanguard Small-Cap Value ETF seeks to invest in small-cap companies (companies with a market cap under $2 billion) that are belived to be currently <em>undervalued</em> by the market. A few examples of companies found in this ETF include Valvoline Inc (VVV), JetBlue Airways Corp (JBLU), and Primerica (PRI).</li>
                </ul>
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
