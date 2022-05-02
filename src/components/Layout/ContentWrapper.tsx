import styled from 'styled-components'

const SWrapper = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  position: relative;
  flex-grow: 1;
  padding: 0 16px;

  @media screen and (max-width: 980px) {
    width: 100%;
    max-width: 100%;
  }
`

export default SWrapper
