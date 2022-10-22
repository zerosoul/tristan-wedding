module.exports = {
  siteMetadata: {
    title: '我们结婚啦 - wedding - Tristan - 杨国春',
    author: 'Tristan',
    description: '杨二的结婚网站'
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Wedding',
        short_name: 'Tristan',
        start_url: '/',
        background_color: '#1b1f22',
        theme_color: '#7f828d',
        display: 'minimal-ui',
        icons: [
          {
            // Everything in /static will be copied to an equivalent
            // directory in /public during development and build, so
            // assuming your favicons are in /static/favicons,
            // you can reference them here
            src: `/pwa-icons/icon-192x192.png`,
            sizes: `192x192`,
            type: `image/png`
          },
          {
            src: `/pwa-icons/icon-512x512.png`,
            sizes: `512x512`,
            type: `image/png`
          }
        ]
      }
    },
    'gatsby-plugin-offline',
    `gatsby-plugin-styled-components`
  ]
}
