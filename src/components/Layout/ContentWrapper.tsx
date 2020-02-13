import styled from 'styled-components'

const SWrapper = styled.div`
  margin: 0 auto;
  max-width: 1200px;

  @media screen and (max-width: 840px) {
    max-width: 630px;
    padding: 0 10px;
  }
  @media screen and (max-width: 767px) {
    padding: 0 23px;
  }
`

export default SWrapper
