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
        <div
          style={{
            background: `#a2b9da`,
            height: `100px`,
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
