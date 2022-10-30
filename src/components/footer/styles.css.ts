import { style } from '@vanilla-extract/css'
import { themes } from 'styles/themes.css'

export const footer = style({
  marginTop: 'auto',
})

export const footerInner = style({
  maxWidth: 920,
  padding: themes.spacing.md,
  margin: `${themes.spacing.xl} auto 0`,
  textAlign: 'center',
  fontSize: themes.fontSize.xs,
  color: themes.color.blue,
})
