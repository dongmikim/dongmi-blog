import { style } from '@vanilla-extract/css'
import { sprinkles } from 'styles/sprinkles.css'

export const wrapper = style({
  display: 'flex',
  flexDirection: 'column',
  height: '100vh',
})

export const container = style([
  sprinkles({
    paddingRight: {
      mobile: 'lg',
      tablet: 'lg',
      desktop: 'sm',
    },
    paddingLeft: {
      mobile: 'lg',
      tablet: 'lg',
      desktop: 'sm',
    },
  }),
])
