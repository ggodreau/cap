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
          <div class="ustripe-top-bg">foo</div>
          <div class="ustripe-top">bar</div>
        </div>
        <div id="middle">im feeling</div>
        <div id="bottom">alright today</div>
      </div>
    )}
  />
)

export default Layout
