import { style } from '@vanilla-extract/css'
import { themes } from 'styles/themes.css'

const { spacing } = themes

export const postWrapper = style({
  position: 'relative',
  padding: `${spacing.xxxl} 0 10rem`,
  width: '100%',
  maxWidth: 920,
  margin: 'auto',
})
