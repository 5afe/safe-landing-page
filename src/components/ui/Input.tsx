import styled from 'styled-components'

const SInput = styled.input`
  color: ${(p) => p.theme.palette.navy};
  border: 0;
  border-radius: 5px;
  border-bottom: ${(p) => `3px solid ${p.theme.palette.pink}`};
  text-decoration: none;
  font-size: 16px;
  padding: 16px;
  letter-spacing: 0.36px;
  transition: border-bottom-color 0.3s;

  &::placeholder {
    color: ${(p) => p.theme.palette.slateGray};
    font-family: Averta;
  }

  &:active,
  &:focus {
    outline: 0;
    border-bottom-color: ${(p) => `${p.theme.palette.navy}`};
    border-radius: 5px 5px 0 0;
  }
`

export default SInput
