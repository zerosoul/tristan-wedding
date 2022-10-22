import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Wrapper = styled.footer`
  width: 100%;
  max-width: 100%;
  padding: 1rem 0 0.4rem 0;
  text-align: center;
  .copyright,
  .powered_by,
  .icp {
    letter-spacing: 2px;
    font-size: 0.14rem;
    opacity: 0.75;
    margin-bottom: 0.1rem;
    text-transform: uppercase;
    color: #ccc;
    a {
      margin: 0 0.1rem;
    }
  }
`

const Footer = (props) => (
  <Wrapper style={props.timeout ? { display: 'none' } : {}}>
    <p className="copyright">
      created by{' '}
      <a href="//yangerxiao.com" target="_blank">
        tristan
      </a>{' '}
      with ❤️ &nbsp;&copy; 2020 - {new Date().getFullYear()}
    </p>
    <p className="powered_by">
      Powered by
      <a target="_blank" href="https://www.gatsbyjs.org/">
        Gatsby.js
      </a>
    </p>
    <p className="icp">
      <a target="_blank" href="http://www.beian.miit.gov.cn/">
        京ICP备16015459号-1
      </a>
    </p>
  </Wrapper>
)

Footer.propTypes = {
  timeout: PropTypes.bool
}

export default Footer
