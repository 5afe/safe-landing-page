export interface ITheme {
  palette: {
    darkPrimary: string
    primary: string
    white: string
    pink: string
    navy: string
    greyGreen: string
    lightGrey: string
    greyBackground: string
    darkGreenBlue: string
    slateGray: string
  }
  spacing: {
    unit: number
  }
}

const mainTheme = {
  palette: {
    darkPrimary: '#FF8515',
    primary: '#008c73',
    white: '#FFFFFF',
    pink: '#f7f5f5',
    navy: '#001428',
    greyGreen: '#b3b5b3',
    lightGrey: '#d4d5d3',
    greyBackground: '#f4f4f4',
    darkGreenBlue: '#1e594f',
    slateGray: '#5d6d74'
  },
  spacing: {
    unit: 8,
  },
}

export default mainTheme
