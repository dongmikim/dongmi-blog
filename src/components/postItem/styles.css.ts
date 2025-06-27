import { globalStyle, style } from '@vanilla-extract/css'
import { themes } from 'styles/themes.css'
import { sprinkles } from 'styles/sprinkles.css'

const { spacing, fontSize, fontWeight, borderRadius, color } = themes

export const postItem = style({
  padding: '1rem 0',
})

globalStyle(`${postItem} a:hover h3`, {
  color: color.brown,
})

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

export const postTitle = style([
  {
    marginTop: 5,
    marginBottom: 10,
    fontWeight: fontWeight.medium,
  },
  sprinkles({
    fontSize: {
      desktop: 'xl',
      tablet: 'xl',
      mobile: 'md',
    },
  }),
])

export const postSummary = style([
  {
    color: color.gray,
  },
  sprinkles({
    fontSize: {
      desktop: 'md',
      tablet: 'md',
      mobile: 'sm',
    },
  }),
])

export const date = style({
  color: '#ccc',
  fontSize: fontSize.sm,
})
