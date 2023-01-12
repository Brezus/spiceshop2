// import { Html, Head, Main, NextScript } from "next/document"
// import { renderToString } from "react-dom/server"
// import { ServerStyleSheet } from "styled-components"

// export default function Document() {
//   return (
//     <Html>
//       <Head>
//         <link
//           rel="stylesheet"
//           href="https://unpkg.com/modern-css-reset/dist/reset.min.css"
//         />
//         <link rel="preconnect" href="https://fonts.googleapis.com" />
//         <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
//         <link
//           href="https://fonts.googleapis.com/css2?family=Raleway:wght@300;500;800&display=swap"
//           rel="stylesheet"
//         ></link>
//         <link rel="preconnect" href="https://fonts.googleapis.com" />
//         <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
//         <link
//           href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;600&display=swap"
//           rel="stylesheet"
//         ></link>
//       </Head>
//       <body>
//         <Main />
//         <NextScript />
//       </body>
//     </Html>
//   )
// }

import Document from "next/document"
import { ServerStyleSheet } from "styled-components"

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet()
    const originalRenderPage = ctx.renderPage

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        })

      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      }
    } finally {
      sheet.seal()
    }
  }
}
