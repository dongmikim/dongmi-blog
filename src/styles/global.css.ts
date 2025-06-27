import { globalStyle } from '@vanilla-extract/css'
import { themes } from './themes.css'

globalStyle(
  'html, body, div, span, applet, object, iframe, h1, h2, h3, h4, h5, h6, p, blockquote, pre, a, abbr, acronym, address, big, cite, code, del, dfn, em, img, ins, kbd, q, s, samp, small, strike, strong, sub, sup, tt, var, b, u, i, center, dl, dt, dd, ol, ul, li, fieldset, form, label, legend, table, caption, tbody, tfoot, thead, tr, th, td, article, aside, canvas, details, embed, figure, figcaption, footer, header, hgroup, menu, nav, output, ruby, section, summary, time, mark, audio, video',
  {
    boxSizing: 'border-box',
    margin: 0,
    padding: 0,
    border: 0,
    verticalAlign: 'baseline',
  },
)

globalStyle('html,body', {
  fontSize: 14,
  fontFamily:
    'Pretendard,SF Pro KR,SF Pro Display,SF Pro Icons,-apple-system,BlinkMacSystemFont,Basier Square,Apple SD Gothic Neo,Roboto,Noto Sans KR,Noto Sans,Helvetica Neue,Helvetica,Arial,sans-serif',
  // color: '#383838',
  backgroundColor: themes.backgroundColor.default,
  color: themes.typography.default,
})

globalStyle(
  'article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section',
  { display: 'block' },
)

globalStyle('a', {
  textDecoration: 'none',
  color: themes.typography.default,
})

globalStyle('ol, ul', { listStyle: 'none' })

globalStyle('hr', {
  marginTop: 42,
  marginBottom: 42,
})

globalStyle('img', {
  width: '100%',
  maxWidth: '670px',
})

globalStyle('table', {
  width: '100%',
})

globalStyle('td', {
  verticalAlign: 'top',
  width: '50%',
})

globalStyle('.sr-only', {
  position: 'absolute',
  width: '1px',
  height: '1px',
  padding: '0',
  margin: '-1px',
  overflow: 'hidden',
  clip: 'rect(0, 0, 0, 0)',
  whiteSpace: 'nowrap',
  border: '0',
})
