import styled from 'styled-components'

export const SectionTitle = styled.h2`
  font-size: 45px;
  font-weight: bolder;
  text-align: center;
  margin-bottom: 32px;
`

export const Text = styled.p`
  font-size: 24px;
  line-height: 32px;
  margin-bottom: 32px;

  @media screen and (max-width: 768px) {
    font-size: 20px;
    line-height: 28px;
    margin-bottom: 24px;
  }
`
