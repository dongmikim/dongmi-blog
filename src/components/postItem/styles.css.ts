import { globalStyle, style } from '@vanilla-extract/css'
import { themes } from 'styles/themes.css'
import { sprinkles } from 'styles/sprinkles.css'

const { spacing, fontSize, fontWeight, borderRadius, color } = themes

export const postItem = style({
  padding: '2rem 0',
  borderBottom: '1px solid #ddd',
})

globalStyle(`${postItem}:hover h2`, {
  color: color.blue,
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

// export const postTitle = style([utils.text3Lg, {}])
export const postTitle = style([
  {
    marginBottom: 20,
  },
  sprinkles({
    fontSize: {
      desktop: 'xxl',
      tablet: 'xxl',
      mobile: 'xl',
    },
  }),
])

export const postSummary = style({
  fontSize: 18,
  color: 'gray',
})
