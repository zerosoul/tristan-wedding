import React from 'react'
export default function HTML(props) {
  return (
    <html {...props.htmlAttributes} lang="zh-CN">
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge;chrome" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no,user-scalable=no,maximum-scale=1" />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
      </body>
    </html>
  )
}


