import { defineProperties, createSprinkles } from '@vanilla-extract/sprinkles'
import { themes } from './themes.css'

const space = {
  none: 0,
  sm: '4px',
  md: '8px',
  lg: '16px',
}

const responsiveProperties = defineProperties({
  conditions: {
    mobile: { '@media': 'screen and (max-width: 576px)' },
    tablet: { '@media': 'screen and (min-width: 577px)' },
    desktop: { '@media': 'screen and (min-width: 769px)' },
    desktopLg: { '@media': 'screen and (min-width: 1440px)' },
  },
  defaultCondition: 'mobile',
  properties: {
    display: ['none', 'flex', 'block', 'inline'],
    flexDirection: ['row', 'column'],
    justifyContent: [
      'stretch',
      'flex-start',
      'center',
      'flex-end',
      'space-around',
      'space-between',
    ],
    alignItems: ['stretch', 'flex-start', 'center', 'flex-end'],
    paddingTop: space,
    paddingBottom: space,
    paddingLeft: space,
    paddingRight: space,
    fontSize: themes.fontSize,
    width: ['auto', '25%'],
  },
  shorthands: {
    padding: ['paddingTop', 'paddingBottom', 'paddingLeft', 'paddingRight'],
    paddingX: ['paddingLeft', 'paddingRight'],
    paddingY: ['paddingTop', 'paddingBottom'],
    placeItems: ['justifyContent', 'alignItems'],
  },
})

const colorProperties = defineProperties({
  conditions: {
    lightMode: {},
    darkMode: { '@media': '(prefers-color-scheme: dark)' },
  },
  defaultCondition: 'lightMode',
  properties: {
    color: themes.color,
    background: themes.color,
  },
})

export const sprinkles = createSprinkles(responsiveProperties, colorProperties)

export type Sprinkles = Parameters<typeof sprinkles>[0]
