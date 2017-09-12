import React from 'react'
import {
  default as NextDocument,
  Head,
  Main,
  NextScript
} from 'next/document'
import {ServerStyleSheet} from 'styled-components'


class Document extends NextDocument {
  render() {
    const sheet = new ServerStyleSheet()
    const main = sheet.collectStyles(<Main />)
    const styleTags = sheet.getStyleElement()
    return (
      <html>
        <Head>
          <title>Blackome Digital</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0"/>
          <link rel="shortcut icon" type="image/x-icon" href="/static/logo.png"/>
          <link rel="stylesheet" href="/static/style.css"/>
          {styleTags}
        </Head>
        <body>
          <div className="root">
            {main}
          </div>
          <NextScript />
        </body>
      </html>
    )
  }
}

export default Document
