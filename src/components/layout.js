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
          <div class="ustripe-top-bg" />
          <div class="ustripe-top" />
          <div class="ustripe-bot-bg" />
          <div class="ustripe-bot" />
          <div class="tick-top" />
          <div class="tick-bot" />
          <div class="notch-top" />
          <div class="notch-bot" />
          <div class="cap-text">CAPITAL METRO</div>
        </div>
        <div id="break" />
        <div id="middle">
          <div class="bstripe-top" />
          <div class="cap-logo">
            <svg height="210" width="400">
              <path d="M150 0 L75 200 L225 200 Z" />
            </svg>
          </div>
          <div class="bstripe-bot" />
          <div class="mid-text">1 LOCAL</div>
        </div>
        <div id="break" />
        <div id="bottom">
          <div class="fstripe-top" />
          <div class="fstripe-bot" />
          <div class="bot-text shim1">01/23/2019 at 7:57AM</div>
          <div class="bot-text shim2">Ticket Expiration Date</div>
        </div>
      </div>
    )}
  />
)

export default Layout
