import { createGlobalTheme } from '@vanilla-extract/css'

export const colors = {
  blue: '#0092db',
  beige: '#ffea04',
  skyblue: '#38b8ef',
  gray: '#8d9da3',
  red: '#ba3f724',
  orange: '#ce9e5b',
  white: '#fff',
}

export const themes = createGlobalTheme(':root', {
  spacing: {
    xs: '0.125rem',
    sm: '0.25rem',
    md: '0.5rem',
    lg: '1rem',
    xl: '1.25rem',
    xxl: '1.5rem',
    xxxl: '2rem',
    xxxxl: '3rem',
    mega: '4rem',
  },
  fontSize: {
    xs: '0.75rem',
    sm: '0.875rem',
    md: '1rem',
    lg: '1.125rem',
    xl: '1.25rem',
    xxl: '1.5rem',
    xxxl: '1.875rem',
    xxxxl: '2.25rem',
    xxxxxl: '3rem',
    mega: '3.75rem',
  },
  fontWeight: {
    normal: '400',
    medium: '500',
    bold: '700',
  },
  lineHeight: {
    xs: '1rem',
    sm: '1.25rem',
    md: '1.5rem',
    lg: '1.75rem',
    xl: '2rem',
    xxl: '2.25rem',
    xxxl: '2.5rem',
  },
  borderRadius: {
    none: '0',
    sm: '0.125rem',
    md: '0.25rem',
    lg: '0.375rem',
    xl: '0.5rem',
    circle: '50%',
  },
  font: {
    header: 'Bebas Neue, cursive',
    footer: 'Barlow Condensed, sans-serif',
    cardTitle: 'Do Hyeon, sans-serif',
  },
  borderColor: {
    grayOpacity: 'rgba(0,27,55,0.1)',
  },
  color: {
    blue: colors.blue,
    beige: colors.beige,
    skyblue: colors.skyblue,
    skyblue50: colors.skyblue,
    gray: colors.gray,
    red: colors.red,
    orange: colors.orange,
    white: colors.white,
    category: colors.beige,
  },
})
