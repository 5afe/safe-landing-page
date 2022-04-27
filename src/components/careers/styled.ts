import styled from 'styled-components'

export const SectionTitle = styled.h2<{ noCenter?: boolean }>`
  font-size: 45px;
  font-weight: bolder;
  text-align: ${(props) => (props.noCenter ? 'left' : 'center')};
  margin-bottom: 32px;

  @media screen and (max-width: 768px) {
    font-size: 32px;
    line-height: 38px;
    text-align: center;
  }
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

export const SecondaryText = styled.p`
  font-size: 16px;
  line-height: 24px;
`
