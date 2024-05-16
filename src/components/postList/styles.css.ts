import { style } from '@vanilla-extract/css'
import { themes } from 'styles/themes.css'
// import * as utils from 'styles/utils.css'

const { spacing, color, fontWeight } = themes

export const container = style({
  position: 'relative',
  paddingTop: spacing.xxxxl,
})

export const wrapper = style({
  position: 'relative',
  zIndex: 1,
})

export const year = style({
  position: 'absolute',
  top: '1.2rem',
  left: '-2rem',
  fontSize: '5rem',
  fontWeight: fontWeight.bold,
  opacity: '0.2',
  color: color.primary,
})
