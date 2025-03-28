const colors = {
  primary: '',
  secondary: '',
  background: '',
  text: {
    primary: '',
    secondary: '',
  },
  border: '',
} as const

const typography = {
  heading: {
    large: {
      fontSize: '',
      lineHeight: '',
      fontWeight: '',
    },
    medium: {
      fontSize: '',
      lineHeight: '',
      fontWeight: '',
    },
    small: {
      fontSize: '',
      lineHeight: '',
      fontWeight: '',
    },
  },
  body: {
    large: {
      fontSize: '',
      lineHeight: '',
      fontWeight: '',
    },
    medium: {
      fontSize: '',
      lineHeight: '',
      fontWeight: '',
    },
    small: {
      fontSize: '',
      lineHeight: '',
      fontWeight: '',
    },
  },
} as const

const spacing = {
  small: '',
  medium: '',
  large: '',
} as const

const breakpoints = {
  mobile: '',
  tablet: '',
  desktop: '',
} as const

export const theme = {
  colors,
  typography,
  spacing,
  breakpoints,
} as const

// 타입 추론을 위한 타입 설정
export type Theme = typeof theme
