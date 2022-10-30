import { style, globalStyle } from '@vanilla-extract/css'
import { sprinkles } from 'styles/sprinkles.css'

import { themes } from 'styles/themes.css'

export const tocWrapper = style({
  position: 'fixed',
  top: 200,
  right: 20,
})

export const toc = style([
  sprinkles({
    display: {
      mobile: 'none',
      tablet: 'none',
      desktop: 'block',
    },
  }),
  {
    width: '240px',
    maxHeight: 'calc(100vh - 270px)',
    paddingLeft: themes.spacing.md,
    borderLeft: '1px solid #ccc',
    overflow: 'hidden auto',
    fontSize: themes.fontSize.xs,
  },
])

globalStyle(`${toc} ul`, {
  paddingLeft: themes.spacing.md,
  lineHeight: themes.lineHeight.sm,
})

globalStyle(`${toc} a`, {
  color: themes.color.gray,
})
