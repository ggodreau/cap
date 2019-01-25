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
      <div
        style={{
          background: `green`,
        }}
      >
        <div class="stripe-header" />
        <div class="ustripe-top-bg" />
        <div class="ustripe-top" />
        <div class="tick-top" />
        <div class="notch-top" />
        <div class="cap-text">CAPITAL METRO</div>
        <div class="ustripe-bot-bg" />
        <div class="ustripe-bot" />
        <div class="tick-bot" />
        <div class="notch-bot" />
        />
        {/* break 1 */}
        <div
          style={{
            background: `#ddf8ff`,
            height: `3px`,
            opacity: `1`,
          }}
        />
        {/* local section */}
        <div
          style={{
            background: `#a2b9da`,
            height: `190px`,
            opacity: `1`,
          }}
        />
        <div
          style={{
            zIndex: `1`,
            position: `absolute`,
            top: `350px`,
            width: `100%`,
            textAlign: `center`,
            color: `white`,
            fontSize: `28px`,
          }}
        >
          REAL GUD
        </div>
        <div
          style={{
            background: `#00479d`,
            height: `190px`,
            opacity: `1`,
          }}
        />
        {/* break 2 */}
        <div
          style={{
            background: `#ddf8ff`,
            height: `3px`,
            opacity: `1`,
          }}
        />
        {/* bottom section */}
        <div
          style={{
            background: `#b1b0b1`,
            height: `60px`,
            opacity: `1`,
          }}
        />
        <div
          style={{
            zIndex: `1`,
            position: `absolute`,
            top: `250px`,
            width: `100%`,
            textAlign: `center`,
            color: `white`,
            fontSize: `48px`,
          }}
        >
          XXXXX
        </div>
        <div
          style={{
            zIndex: `1`,
            position: `absolute`,
            top: `300px`,
            width: `100%`,
            textAlign: `center`,
            color: `white`,
            fontSize: `48px`,
          }}
        >
          YYYYY
        </div>
        <div
          style={{
            background: `#757579`,
            height: `60px`,
            opacity: `1`,
          }}
        />
        {/*This is the main body*/}
        {/*padding is above left below*/}
      </div>
    )}
  />
)

export default Layout
