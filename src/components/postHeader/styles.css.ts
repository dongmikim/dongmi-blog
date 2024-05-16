import { style, globalStyle } from '@vanilla-extract/css'
import { themes } from 'styles/themes.css'

const { spacing, fontSize, fontWeight, borderRadius, color } = themes

export const categoryWrapper = style({
  margin: '15px 0',
})

export const category = style({
  padding: `${spacing.xs} ${spacing.md}`,
  borderRadius: borderRadius.sm,
  background: color.beige,
  marginRight: '10px',
  fontSize: fontSize.xs,
  fontWeight: fontWeight.medium,
})

export const postTitle = style({
  fontSize: fontSize.xxxxl,
})

export const desc = style({
  display: 'flex',
  alignItems: 'center',
  fontSize: fontSize.xs,
  color: color.gray,
  marginTop: spacing.lg,
})

export const avatar = style({
  display: 'inline-block',
  width: 32,
  height: 32,
  marginRight: spacing.md,
  borderRadius: borderRadius.circle,
  overflow: 'hidden',
})

export const date = style({
  position: 'relative',
  marginLeft: spacing.lg,
})

globalStyle(`${date}::before`, {
  content: '',
  position: 'absolute',
  top: 5,
  left: -8,
  width: 3,
  height: 3,
  background: color.gray,
})

export const divider = style({
  width: '10%',
  margin: `${spacing.mega} auto`,
  borderColor: color.green50,
  borderWidth: 0.5,
})
