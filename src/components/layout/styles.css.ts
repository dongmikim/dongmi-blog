import { style } from '@vanilla-extract/css'
import { themes } from 'styles/themes.css'

export const wrapper = style({
  display: 'flex',
  flexDirection: 'column',
})

export const container = style({
  paddingRight: themes.spacing.sm,
  paddingLeft: themes.spacing.sm,
})
