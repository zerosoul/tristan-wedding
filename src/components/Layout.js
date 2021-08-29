// import React from 'react'
// import { StaticQuery, graphql } from 'gatsby'
// import { Helmet } from 'react-helmet'

// export default function Layout() {
//   return <>
//     <StaticQuery
//       query={graphql`
//           query PageQuery {
//             site {
//               siteMetadata {
//                 title
//                 description
//               }
//             }
//           }
//       `}
//       render={data => {
//         console.log("dddddd", data);

//         return <Helmet>
//           <title>{data.site.siteMetadata.title}</title>
//           <meta name="description" content={data.site.siteMetadata.description} />
//         </Helmet>
//       }}
//     />
//     {props.children}
//   </>
// }