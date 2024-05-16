import { globalStyle, style } from '@vanilla-extract/css'
import { themes } from 'styles/themes.css'

const { spacing, fontSize, lineHeight, borderRadius, color, fontWeight } =
  themes

export const postContent = style({
  lineHeight: lineHeight.lg,
})

globalStyle(`${postContent} h2`, {
  marginTop: spacing.mega,
  fontSize: fontSize.xxl,
  lineHeight: lineHeight.xl,
})

globalStyle(`${postContent} h3`, {
  marginTop: spacing.xxxxl,
  fontSize: fontSize.xl,
  lineHeight: lineHeight.lg,
})

globalStyle(`${postContent} h4`, {
  marginTop: spacing.xxxl,
  fontSize: fontSize.lg,
  lineHeight: lineHeight.md,
})

globalStyle(`${postContent} h2, ${postContent} h3,  ${postContent} h4`, {
  marginBottom: spacing.lg,
})

globalStyle(`${postContent} p`, {
  marginTop: spacing.lg,
  marginBottom: spacing.lg,
})

globalStyle(`${postContent} ol`, {
  listStyle: 'auto',
})

globalStyle(`${postContent} ol, ${postContent} ul`, {
  marginLeft: spacing.lg,
})

globalStyle(`${postContent} ul ul`, {
  marginBottom: spacing.lg,
})

globalStyle(`${postContent} ul li`, {
  position: 'relative',
})

globalStyle(`${postContent} ul li::before`, {
  content: '',
  position: 'absolute',
  top: 9,
  left: -15,
  width: 5,
  height: 5,
  borderRadius: borderRadius.circle,
  background: color.gray,
})

globalStyle(`${postContent} code`, {
  paddingRight: spacing.sm,
  paddingLeft: spacing.sm,
  borderRadius: borderRadius.sm,
  background: `rgba(181,220,221, 0.5)`,
  color: color.primary,
  fontWeight: fontWeight.bold,
  fontSize: fontSize.sm,
})

globalStyle(`${postContent} a:not(.anchor)`, {
  paddingTop: spacing.xs,
  fontWeight: fontWeight.bold,
  borderBottom: `2px solid ${color.green50}`,
})

globalStyle(`${postContent} a:not(.anchor):hover`, {
  color: color.primary,
})

globalStyle(`${postContent} a.gatsby-resp-image-link`, {
  border: 0,
})

globalStyle(`${postContent} blockquote`, {
  marginTop: spacing.md,
  padding: `${spacing.sm} ${spacing.lg}`,
  borderLeft: `5px solid ${color.green50}`,
  color: color.gray,
})

globalStyle(`${postContent} blockquote p`, {
  marginTop: spacing.sm,
  marginBottom: spacing.sm,
})

globalStyle(`${postContent} blockquote p`, {
  marginTop: spacing.sm,
  marginBottom: spacing.sm,
})

// globalStyle(`${postContent} p + ul`, { marginTop: '-15px' })

globalStyle(`${postContent} .gatsby-resp-image-wrapper`, {
  marginRight: 'inherit !important',
  marginLeft: 'inherit !important',
  maxWidth: '650px !important',
})

// globalStyle(`${postContent} strong`, {
//   boxShadow: 'inset 0 -10px 0 ##ffea04',
// })
