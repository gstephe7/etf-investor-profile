import React, { Component } from 'react';
import { CSSTransitionGroup } from 'react-transition-group';

export default class AboutETF extends Component {
  render(props) {
    if (this.props.showAboutETF === true) {
      return (
        <CSSTransitionGroup
          transitionName="tada"
          transitionAppear={true}
          transitionAppearTimeout={300}
          transitionEnterTimeout={300}
          transitionLeaveTimeout={300}>
          <div id="aboutetfs" className="container">
            <div className="row">
              <div className="col-xs-12">
                <h3>What is an ETF?</h3>
                <p>ETF is short for Exchange Traded Fund. It's basically a big basket of stocks, bonds, or a mixture of both. ETFs are very similar to mutual funds, except for the fact that they are bought and sold on a stock exchange and just like a stock, the price of an ETF will change throughout the trading day.</p>
                <p><a href="http://www.investopedia.com/" target="_blank" rel="noopener noreferrer">Investopedia</a> does a wonderful job explaining all things related to finance. Here's a video from Investopedia explaining ETFs...</p>
                <iframe className="center-block visible-xs" width="300" height="215" title="ETF Explanation" src="https://www.youtube.com/embed/FcXn7eR3RAo" frameBorder="0" allowFullScreen>
                </iframe>
                <iframe className="center-block hidden-xs" width="600" height="450" title="ETF Explanation" src="https://www.youtube.com/embed/FcXn7eR3RAo" frameBorder="0" allowFullScreen>
                </iframe>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12">
                <h3>How Do I Make Money With ETFs?</h3>
                <ul>
                  <li>
                    <h5>Dividends</h5>
                    <p>Just like stocks, some ETFs pay investors a dividend every month, quarter, or year. A consistent dividend paying ETF can be a great choice for income investors. </p>
                  </li>
                  <li>
                    <h5>Appreciation</h5>
                    <p>ETFs can increase in value over time and investors may profit by selling an ETF at a higher price than they bought it for (buy low/sell high). This is the most common way to profit from an ETF.</p>
                  </li>
                  <li>
                    <h5>Short-Selling</h5>
                    <p>Short-selling is the act of selling a borrowed ETF at a high price, buying back the ETF at a lower price, and then returning the borrowed ETF (selling high/buying back low). Short-selling can be very risky and is not recommended by ETFInvestorProfile.com.</p>
                  </li>
                </ul>
              </div>
            </div>
            <div className="row">
              <div className="col-xs-12">
                <h3>Why Choose ETFs?</h3>
                <p>ETFs are a great investment option for any investor. They offer built-in diversification - some hold as many as 2,000+ stocks. ETFs have a lower barrier of entry than their mutual fund brothers - some mutual funds have a minimum investment of over $10,000 while ETFs are simply sold at market price. A lower barrier of entry provides a diversified option for new investors who may not have a lot of money to drop into a mutual fund. ETFs also offer extremely cheap management fees (as low as 0.04% in some cases). Lastly, ETFs are simple. You can buy an ETF using any brokerage and can have a much easier time exiting your position within an ETF than with a mutual fund.</p>
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
