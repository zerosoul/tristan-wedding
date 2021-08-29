import React, { useState, useEffect } from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import { Reset } from 'styled-reset'
import FirstView from '../components/FirstView'
import Couple from '../components/Couple'
import Story from '../components/Story'
import Wedding from '../components/Wedding'
import Gallery from '../components/Gallery'
import Welcome from '../components/Welcome'
import CommonStyle from '../components/CommonStyle'
import Footer from '../components/Footer'


export default function Index({ data }) {
  const [ready, setReady] = useState(false)
  const {
    title: siteTitle,
    description: siteDescription
  } = data.site.siteMetadata
  useEffect(() => {
    const inter = setTimeout(() => {
      setReady(true)
    }, 1000)
    return () => {
      clearTimeout(inter)
    }
  }, [])
  return (
    <div>
      <Helmet>
        <title>{siteTitle}</title>
        <meta name="description" content={siteDescription} />
      </Helmet>
      <CommonStyle />
      <Reset />
      <FirstView />
      <Couple />
      <Story />
      {ready && <Gallery />}
      <Wedding />
      <Welcome />
      <Footer />
    </div>
  )
}

export const pageQuery = graphql`
  query PageQuery {
    site {
      siteMetadata {
        title
        description
      }
    }
  }
`
