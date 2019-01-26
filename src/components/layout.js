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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.19444in"
              height="2in"
              viewBox="0 0 86 144"
            >
              <path
                id="Selection"
                fill="gray"
                stroke="lightgray"
                stroke-width="1"
                d="M 28.60,82.68
                       C 28.60,82.68 35.49,89.09 35.49,89.09
                         38.28,92.75 37.99,96.67 38.00,101.00
                         38.00,101.00 9.00,101.00 9.00,101.00
                         9.16,97.47 9.70,91.34 11.82,88.47
                         16.69,81.88 20.85,86.50 21.00,75.00
                         28.98,75.67 25.73,72.27 28.60,82.68 Z
                       M 39.82,103.18
                       C 39.82,103.18 7.27,102.91 7.27,102.91
                         7.27,102.91 7.36,110.91 7.36,110.91
                         7.36,110.91 40.18,111.18 40.18,111.18
                         40.18,111.18 39.82,103.18 39.82,103.18 Z"
              />
            </svg>
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
