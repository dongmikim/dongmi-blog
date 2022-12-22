import { style, globalStyle } from '@vanilla-extract/css'
import { sprinkles } from 'styles/sprinkles.css'

import { themes } from 'styles/themes.css'

const { spacing, fontSize, lineHeight, borderRadius, color, fontWeight } =
  themes

export const container = style({
  maxWidth: 920,
  margin: 'auto',
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
  fontSize: fontSize.xxxl,
})

export const desc = style({
  display: 'block',
  paddingTop: spacing.md,
  fontSize: fontSize.md,
  color: color.gray,
})

globalStyle(`${desc} p`, {
  marginBottom: spacing.md,
})

export const section = style({
  paddingTop: spacing.xxxxl,
})

export const email = style({
  marginTop: spacing.xxl,
})

export const experienceItem = style({
  padding: `${spacing.xxxl} ${spacing.md}`,
  borderBottom: `3px solid ${color.skyblue}`,
})

export const company = style([
  {
    display: 'inline-block',
    color: themes.color.blue,
  },
  sprinkles({
    width: {
      mobile: 'auto',
      tablet: '25%',
      desktop: '25%',
    },
  }),
])

export const experienceDesc = style([
  sprinkles({
    display: {
      mobile: 'block',
    },
  }),
  {
    fontSize: fontSize.sm,
    color: themes.color.gray,
  },
])

export const contactItem = style({
  display: 'inline-flex',
  paddingTop: spacing.lg,
  marginRight: spacing.lg,
  fontWeight: fontWeight.bold,
  borderBottom: `3px solid ${color.skyblue}`,
})

globalStyle(`${contactItem}:hover a`, {
  cursor: 'pointer',
  color: themes.color.blue,
})
