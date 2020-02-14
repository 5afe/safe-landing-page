import styled from 'styled-components'

const SInput = styled.input`
  background-color: transparent;
  color: ${p => p.theme.palette.navy};
  border: 0;
  border-bottom: ${p => `3px solid ${p.theme.palette.navy}`};
  text-decoration: none;
  font-size: 16px;
  padding-bottom: 10px;
  letter-spacing: 0.36px;

  &::placeholder {
    color: ${p => p.theme.palette.navy};
    font-family: Averta;
  }

  &:active, &:focus {
    outline: 0;
    border-bottom-color: ${p => p.theme.palette.pink};
  }
`

export default SInput
