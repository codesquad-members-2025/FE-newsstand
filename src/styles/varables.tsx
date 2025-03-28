export const variables = {
  colors: {
    grayscale: {
      50: '#fefefe',
      100: '#f7f7fc',
      200: '#eff0f6',
      300: '#d9dbe9',
      400: '#bec1d5',
      500: '#a0a3bd',
      600: '#6e7191',
      700: '#4e4b66',
      800: '#2a2a44',
      900: '#14142b',
    },
    accent: {
      blue: '#007aff',
      red: '#ff3b30',
    },
    text: {
      strong: '#14142b', // grayscale-900
      bold: '#4e4b66', // grayscale-700
      default: '#6e7191', // grayscale-600
      weak: '#a0a3bd', // grayscale-500
      whiteDefault: '#fefefe', // grayscale-50
      whiteWeak: '#f7f7fc', // grayscale-100
      brand: '#007aff', // accent-blue
      danger: '#ff3b30', // accent-red
    },
    surface: {
      default: '#fefefe', // grayscale-50
      alt: '#f7f7fc', // grayscale-100
      brand: '#007aff', // accent-blue
      danger: '#ff3b30', // accent-red
    },
    border: {
      default: '#eff0f6', // grayscale-200
      bold: '#bec1d5', // grayscale-400
    },
  },
} as const

// 타입 추출
export type Variables = typeof variables
