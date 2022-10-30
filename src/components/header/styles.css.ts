import { style } from '@vanilla-extract/css'
import { themes, colors } from 'styles/themes.css'
import { sprinkles } from 'styles/sprinkles.css'

export const header = style({
  zIndex: 1,
  position: 'sticky',
  top: 0,
  left: 0,
  display: 'flex',
  alignItems: 'center',
  padding: `${themes.spacing.xxxl} ${themes.spacing.sm}`,
  width: '100%',
  maxWidth: 920,
  margin: 'auto',
  background: '#fff',
})

export const logo = style({
  height: '100%',
  fontSize: themes.fontSize.xxl,
  fontWeight: 700,
})

export const nav = style({
  marginLeft: 'auto',
})

export const navLink = style({
  height: '100%',
  padding: 10,
  fontWeight: themes.fontWeight.bold,
  fontSize: themes.fontSize.lg,
})

export const navLinkActive = style({
  color: colors.blue,
})

export const textBeige = style([
  { color: colors.beige },
  sprinkles({
    display: {
      mobile: 'none',
    },
  }),
])

export const textBlue = style([
  { color: colors.blue },
  sprinkles({
    display: {
      mobile: 'none',
    },
  }),
])
