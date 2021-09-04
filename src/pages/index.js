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
import Confetti from '../components/Confetti'

export default function Index({ data }) {
  const [ready, setReady] = useState(false);
  const [dan, setDan] = useState(null)
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
  }, []);
  const closeDan = () => {
    setDan(null)
  }
  return (
    <div>
      <Helmet>
        <title>{siteTitle}</title>
        <meta name="description" content={siteDescription} />
      </Helmet>
      <CommonStyle />
      <Reset />
      {dan && <Confetti dan={dan} closeDan={closeDan} />}
      <FirstView />
      <Couple popupDan={setDan} />
      <Story />
      {ready && <Gallery popupDan={setDan} />}
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
