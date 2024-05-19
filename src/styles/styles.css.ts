import { style, globalStyle } from '@vanilla-extract/css'
import { sprinkles } from 'styles/sprinkles.css'

import { themes } from 'styles/themes.css'

const { spacing, fontSize, lineHeight, borderRadius, color, fontWeight } =
  themes

export const container = style({
  maxWidth: 920,
  margin: 'auto',
  fontSize: fontSize.lg,
  paddingTop: spacing.xxxxl,
})

export const intro = style([
  {
    paddingTop: spacing.xxxxl,
    paddingBottom: spacing.xxl,
  },
  sprinkles({
    fontSize: {
      mobile: 'lg',
      tablet: 'xxl',
      desktop: 'xxxl',
    },
  }),
])

globalStyle(`${intro} h1`, {
  display: 'inline-block',
  fontSize: fontSize.mega,
})

export const desc = style({
  display: 'block',
  paddingTop: spacing.lg,
  fontSize: fontSize.md,
  color: color.gray,
})

globalStyle(`${desc} p`, {
  marginBottom: spacing.md,
})

export const profile = style({
  display: 'flex',
  alignItems: 'center',
  gap: spacing.md,
  marginBottom: spacing.xxxl,
})

export const avatar = style({
  display: 'inline-block',
  width: 48,
  height: 48,
  marginRight: spacing.md,
  borderRadius: borderRadius.circle,
  overflow: 'hidden',
})

export const greeting = style({
  margin: '15px 0',
})

export const introDesc = style({
  marginTop: spacing.xxxxl,
  marginLeft: spacing.xxl,
})

globalStyle(`${introDesc} li`, {
  position: 'relative',
  marginTop: spacing.xl,
})

globalStyle(`${introDesc} li::before`, {
  content: '',
  position: 'absolute',
  top: 9,
  left: -15,
  width: 5,
  height: 5,
  borderRadius: themes.borderRadius.circle,
  background: themes.color.gray,
})

globalStyle(`${greeting} p`, {
  marginTop: spacing.lg,
  lineHeight: lineHeight.xl,
})
