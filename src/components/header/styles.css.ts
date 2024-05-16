import { style } from '@vanilla-extract/css'
import { themes, colors } from 'styles/themes.css'

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
  margin: '0 auto',
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
