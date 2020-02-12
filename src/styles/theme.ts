export interface ITheme {
  palette: {
    darkPrimary: string
    primary: string
    midPrimary: string
    lightPrimary: string
    black: string
    white: string
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
    navy: '#001428'
  },
  spacing: {
    unit: 8,
  },
}

export default mainTheme
