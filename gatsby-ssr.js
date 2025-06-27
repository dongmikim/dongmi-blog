/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/ssr-apis/
 */
const React = require("react")

exports.onRenderBody = ({ setHtmlAttributes, setHeadComponents }) => {
  setHtmlAttributes({ lang: `ko` })
  setHeadComponents([
    <link rel="preconnect" href="https://fonts.googleapis.com" key="preconnect-googleapis" />,
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" key="preconnect-gstatic" />,
    <link href="https://fonts.googleapis.com/css2?family=Reenie+Beanie&display=swap" rel="stylesheet" key="reenie-beanie-font" />,
  ])
}
