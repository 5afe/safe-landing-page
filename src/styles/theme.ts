export interface ITheme {
  palette: {
    darkPrimary: string
    primary: string
    primaryHover: string
    white: string
    pink: string
    navy: string
    greyGreen: string
    lightGrey: string
    lightGreyBackground: string
    darkGrey: string
    darkGreyHover: string
    darkGreyBackground: string
    grey: string
    greyPale: string
    darkGreenBlue: string
    slateGray: string
    primaryBlack500: string
  }
  spacing: {
    unit: number
  }
}

const mainTheme = {
  palette: {
    darkPrimary: '#FF8515',
    primary: '#008c73',
    primaryHover: '#005546',
    white: '#FFFFFF',
    pink: '#f7f5f5',
    navy: '#001428',
    greyGreen: '#b3b5b3',
    lightGrey: '#d4d5d3',
    lightGreyBackground: '#fdfdfd',
    darkGrey: '#b2b5b2',
    darkGreyHover: '#859092',
    darkGreyBackground: '#f0efee',
    grey: '#f5f5f5',
    greyPale: '#e8e7e6',
    darkGreenBlue: '#1e594f',
    slateGray: '#5d6d74',
    primaryBlack500: '#162D45',
  },
  spacing: {
    unit: 8,
  },
}

export default mainTheme
