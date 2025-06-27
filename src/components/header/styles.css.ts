import { style } from '@vanilla-extract/css'
import { sprinkles } from 'styles/sprinkles.css'
import { themes, colors } from 'styles/themes.css'

export const header = style({
  zIndex: 1,
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  backgroundColor: 'rgba(255,255,255,0.7)',
  backdropFilter: 'blur(8px)',
})

export const headerInner = style({
  display: 'flex',
  alignItems: 'center',
  padding: `${themes.spacing.xxxl} ${themes.spacing.sm}`,
  width: '100%',
  maxWidth: 920,
  margin: '0 auto',
})

export const logo = style({
  display: 'flex',
  alignItems: 'center',
})

export const logoText = style([
  {
    paddingLeft: themes.spacing.lg,
    fontSize: themes.fontSize.xxxl,
    fontWeight: themes.fontWeight.medium,
    fontFamily: 'Reenie Beanie',
    color: themes.color.primary,
  },
  sprinkles({
    display: {
      mobile: 'none',
    },
  }),
])

export const nav = style({
  marginLeft: 'auto',
})

export const navLink = style({
  padding: 10,
  fontWeight: themes.fontWeight.medium,
  fontSize: themes.fontSize.lg,
  transition: 'opacity .2s ease',
  opacity: '.6',
  selectors: {
    '&:hover': {
      opacity: 1.0,
      color: themes.color.primary,
    },
  },
})

export const navLinkActive = style({
  opacity: 1.0,
  color: themes.color.primary,
})

export const socialLinkGroup = style({
  paddingRight: themes.spacing.md,
  paddingLeft: themes.spacing.md,
  borderRight: `1px solid #ccc`,
  borderLeft: `1px solid #ccc`,
})

export const socialLink = style({
  padding: `0 ${themes.spacing.sm}`,
  marginLeft: themes.spacing.sm,
  color: colors.gray,
})

export const themeToggle = style({
  background: 'none',
  border: 'none',
  color: colors.gray,
})
