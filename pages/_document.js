import { Html, Head, Main, NextScript } from "next/document"
import { renderToString } from "react-dom/server"
import { ServerStyleSheet } from "styled-components"

export default function Document() {
  const sheet = new ServerStyleSheet()
  try {
    const html = renderToString(sheet.collectStyles(<YourApp />))
    const styleTags = sheet.getStyleTags() // or sheet.getStyleElement();
  } catch (error) {
    // handle error
    console.error(error)
  } finally {
    sheet.seal()
  }
  return (
    <Html>
      <Head>
        <link
          rel="stylesheet"
          href="https://unpkg.com/modern-css-reset/dist/reset.min.css"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Raleway:wght@300;500;800&display=swap"
          rel="stylesheet"
        ></link>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;600&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
