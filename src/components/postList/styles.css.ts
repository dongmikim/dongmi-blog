import { style } from '@vanilla-extract/css'
import { themes } from 'styles/themes.css'

const { spacing, color, fontWeight } = themes

export const container = style({
  position: 'relative',
  paddingTop: spacing.xxxxl,
})

export const wrapper = style({
  position: 'relative',
})

export const year = style({
  position: 'absolute',
  top: '1.2rem',
  left: '-2rem',
  fontSize: '5rem',
  fontWeight: fontWeight.bold,
  opacity: '0.4',
  color: color.primary50,
})
