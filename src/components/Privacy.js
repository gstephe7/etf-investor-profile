import React, { Component } from 'react';
import { CSSTransitionGroup } from 'react-transition-group';

export default class Privacy extends Component {
  render(props) {
    if (this.props.showPrivacy === true) {
      return (
        <CSSTransitionGroup
          transitionName="tada"
          transitionAppear={true}
          transitionAppearTimeout={300}
          transitionEnterTimeout={300}
          transitionLeaveTimeout={300}>
          <div id="privacy" className="container">
            <div className="row">
              <div className="col-xs-12">
                <h3>Privacy Policy</h3>
                <p>We respect your right to privacy. Visitors should be aware that each time they visit a website two general levels of information about their visit can be retained. The first level comprises statistical and other analytical information collected on an aggregate and non-individual specific basis of all browsers who visit the site, and the second is information which is personal or particular to a specific visitor who knowingly chooses to provide that information.</p>
                <p>The statistical and analytical information provides us with general and not individually specific information about the number of people who visit this website; the number of people who return to this site; the pages that they visit; where they were before they came to this site and the page in the site at which they exited. This information helps us monitor traffic on our website so that we can manage the site’s capacity and efficiency. It also helps us to understand which parts of this site are most popular, and generally to assess user behaviour and characteristics in order to measure interest in and use of the various areas of the site.</p>
                <p>The statistical and analytical information and data can be collected through the standard operation of our internet servers and logs as well as “cookies”. “Cookies” are small text files that a website can use in order to recognize visitors who revisit a site so as to facilitate their ongoing access to and use of the site. It enables usage behaviour to be tracked and aggregate data to be compiled that would facilitate more targeted advertising and improved content. Typically, cookies involve the assigning of a unique number to the visitor. Visitors should be aware that we are unable to control the use of cookies or the resulting information by other third parties such as advertisers or parties hosting data for this site. One simple way to prevent the use of cookies it to activate the facility which is available in most web browsers that enables the user to deny or accept cookies. However, visitors should realize that certain cookies may be necessary in order to provide the visitor with certain features such as the customized delivery of certain information.</p>
                <p>In general, the third-party providers used by us will only collect, use and disclose your information to the extent necessary to allow them to perform the services they provide to us.</p>
                <p>For these providers, we recommend that you read their privacy policies so you can understand the manner in which your personal information will be handled by these providers.</p>
                <p>In particular, remember that certain providers may be located in or have facilities that are located in a different jurisdiction than either you or us. So if you elect to proceed with a transaction that involves the services of a third-party service provider, then your information may become subject to the laws of the jurisdiction(s) in which that service provider or its facilities are located.</p>
                <p>When you click on links on our site, they may direct you away from our site. We are not responsible for the privacy practices of other sites and encourage you to read their privacy statements. Once you leave our website or are redirected to a third-party website or application, you are no longer governed by this Privacy Policy or our website’s Terms of Service.</p>
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
