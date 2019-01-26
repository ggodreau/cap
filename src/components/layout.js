import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

import './layout.css'

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <div id="parent">
        <div id="header" />
        <div id="upper">
          <div className="ustripe-top-bg" />
          <div className="ustripe-top" />
          <div className="ustripe-bot-bg" />
          <div className="ustripe-bot" />
          <div className="tick-top" />
          <div className="tick-bot" />
          <div className="notch-top" />
          <div className="notch-bot" />
          <div className="cap-text">CAPITAL METRO</div>
        </div>
        <div id="break" />
        <div id="middle">
          <div className="bstripe-top" />
          <div className="cap-logo">
            <img
              src="http://www.stickpng.com/assets/images/580b585b2edbce24c47b2a2f.png"
              height="75px"
              width="75px"
              alt="lolol"
            />
          </div>
          <div className="bstripe-bot" />
          <div className="mid-text">1 LOCAL</div>
        </div>
        <div id="break" />
        <div id="bottom">
          <div className="fstripe-top" />
          <div className="fstripe-bot" />
          <div className="bot-text shim1">01/23/2019 at 7:57AM</div>
          <div className="bot-text shim2">Ticket Expiration Date</div>
        </div>
      </div>
    )}
  />
)

export default Layout
