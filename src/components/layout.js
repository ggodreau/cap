import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

import Header from './header'
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
          background: `white`,
        }}
      >
        <Header siteTitle={data.site.siteMetadata.title} />
        <div class="stripe-top">OO</div>
        <div class="tick-top arrow-right">XX</div>
        <div class="move-me move-me-3">pinkstuff</div>
        <div
          style={{
            background: `#a2b9da`,
            height: `85px`,
            opacity: `1`,
          }}
        />
        <div
          style={{
            zIndex: `1`,
            position: `absolute`,
            top: `175px`,
            width: `100%`,
            textAlign: `center`,
            color: `white`,
            fontSize: `48px`,
          }}
        >
          DOIN THANGS
        </div>
        <div
          style={{
            background: `#83a1d4`,
            height: `85px`,
            opacity: `1`,
          }}
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
            top: `650px`,
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
            top: `700px`,
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
        <div
          style={{
            margin: `0 auto`,
            background: `coral`,
            opacity: `0.7`,
            maxWidth: 960,
            height: 585,
            padding: `0px 1.0875rem 1.45rem`,
            paddingTop: 0,
          }}
        >
          {children}
          <footer>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </footer>
        </div>
      </div>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
