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
        <div id="header">hello</div>
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
          <div>foo</div>
          <div>bar</div>
        </div>
        <div id="bottom">alright today</div>
      </div>
    )}
  />
)

export default Layout
