import React, { Component } from 'react';
import { CSSTransitionGroup } from 'react-transition-group';

import DesktopAllyAd from '../DesktopAllyAd.js';
import MobileAllyAd from '../MobileAllyAd.js';
import AllyTextAd from '../AllyTextAd.js';

import BalChart from '../../img/balChart.png';

import BalAllocation from './allocations/BalAllocation.js';

export default class Balanced extends Component {

  render(props) {
    if (this.props.showBalanced === true) {
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
                <h3 className="text-primary"><em>BALANCED</em></h3>
                <p>Due to your average investing time horizon, your suggested ETF Investor Profile is <em>Balanced</em>. Balanced investors usually have an investing timeframe of 10 to 14 years and pursue a balance of both growth and capital preservation. They do not want to have too much of their portfolio in aggressive positions in case of a market downturn, but a moderate amount of exposure to stocks gives this portfolio plenty of room to grow. The Balanced Profile is ideal for investors between the ages of 50 and 55 who are saving for retirement, or for parents who are saving for their child's future in 10 to 14 years.</p>
              </div>
            </div>
            <DesktopAllyAd />
            <MobileAllyAd />
            <div className="row">
              <div className="col-xs-12">
                <h4>Suggested Portfolio Allocation</h4>
                <img className="chart center-block" src={BalChart} alt="balanced portfolio pie chart" />
                <BalAllocation
                  principle={this.props.principle}
                />
                <p>The Balanced Portfolio allocates 40% of its value in a Large-Cap Stock ETF, 20% of its value in a Small-Cap Stock ETF, and 40% in an Intermediate-Term US Government Treasury ETF. Large-cap stocks provide growth potential while offering a little more stability than small-cap stocks. An ETF that tracks the S&P 500 Index is suggested for the large-cap portion of the portfolio. A cautious allocation toward small-cap stocks provide the portfolio with some extra growth potential and upside. A Small-Cap Value ETF is preferred because small-cap value stocks have historically outperformed small-cap growth stocks. The bond allocation of the balanced portfolio is covered by a US Government Intermediate-Term Treasury ETF. Government bonds balance out the portfolio and provide protection against market downturns. </p>
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
                  <li>Description: The Vanguard Small-Cap Value ETF seeks to invest in small-cap companies (companies with a market cap under $2 billion) that are belived to be currently <em>undervalued</em> by the market. A few examples of companies found in this ETF include Valspar Corp (VAL), JetBlue Airways Corp (JBLU), and Primerica (PRI).</li>
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
