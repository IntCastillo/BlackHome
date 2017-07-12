import Document, { Head, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

export default class BlackHomeDocument extends Document {
  render () {
    const sheet = new ServerStyleSheet()
    const main = sheet.collectStyles(<Main />)
    const styleTags = sheet.getStyleElement()
    return (
      <html>
        <Head>
          <title>Blackome Digital</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0"/>
          <link rel="shortcut icon" type="image/x-icon" href="/static/favicon.png"/>
          <link href="https://fonts.googleapis.com/css?family=Quicksand:300,400,500,600|Space+Mono:400,700,700i" rel="stylesheet" />
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
