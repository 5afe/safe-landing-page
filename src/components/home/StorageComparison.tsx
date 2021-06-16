import React from 'react'
import styled from 'styled-components'
import RedCross from '../../assets/cross-red.svg'
import QuestionIcon from '../../assets/question-icon.svg'
import GreenTick from '../../assets/tick-green.svg'
import GreyTick from '../../assets/tick-grey.svg'
import ContentWrapper from '../Layout/ContentWrapper'

const Container = styled.section`
  color: ${(p) => p.theme.palette.navy};
  background: ${(p) => p.theme.palette.white};
  padding: 70px 20px;
  @media screen and (max-width: 980px) {
    padding: 20px 12px;
  }
`

const SWrapper = styled(ContentWrapper)`
  height: 100%;
  @media screen and (max-width: 980px) {
    display: block;
    padding: 0 0 40px 0;
  }
`

const SHeading = styled.h2`
  width: 100%;
  text-align: center;
  font-size: 44px;
  line-height: 1.18;
  padding-bottom: 50px;
  font-weight: 800;
  letter-spacing: 0.56px;
  @media screen and (max-width: 980px) {
    padding: 40px 0 30px;
    font-size: 36px;
  }
`

const Grid = styled.div`
  display: grid;
  text-align: center;
  grid-template-areas:
    '. . . . . .'
    '. . . . . .'
    '. . . . . .'
    '. . . . . .'
    '. . . . . .'
    '. . . . . .'
    '. . . . . .'
    '. . . . . .';
  font-size: 24px;
  line-height: 1.25;
  padding: 0 5px;
  grid-auto-flow: row;
  grid-auto-columns: 1fr;

  & > div > div {
    height: 80px;
    display: flex;
    align-items: center;
  }

  @media screen and (max-width: 980px) {
    padding: 0 10px;
    grid-template-areas:
      '. .'
      '. .'
      '. .'
      '. .'
      '. .'
      '. .'
      '. .'
      '. .';

    & > div > div {
      height: 50px;
    }
  }
`

const Column = styled.div`
  --border: 1px solid red;
  @media screen and (max-width: 980px) {
    margin-top: 50px;

    & > div:first-child {
      display: none;
    }
  }
`

const ColumnFirst = styled.div`
  & > div:first-child > h4 {
    display: none;
  }
  @media screen and (max-width: 980px) {
    & > div:first-child > h4 {
      display: block;
    }
    margin-bottom: 40px;
  }
`

const ColumnHidden = styled.div`
  display: none;
  @media screen and (max-width: 980px) {
    display: block;
    margin-bottom: 40px;
  }
`

const GridTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 800;
  padding: 0 5px;
  @media screen and (max-width: 980px) {
    justify-content: left;
    padding: 0;
  }
`

const GridFeature = styled.div`
  width: 270px;
  display: flex;
  justify-content: flex-start;
  text-align: left;
`

const GridContent = styled.div`
  justify-content: center;
  @media screen and (max-width: 980px) {
    justify-content: flex-end;
  }
`

const TooltipWrapper = styled.div`
  position: relative;
  cursor: pointer;

  &:hover {
    & > div {
      display: block;
    }
  }
`

const Tooltip = styled.div`
  position: absolute;
  font-weight: normal;
  left: -95px;
  top: 35px;
  z-index: 100;
  padding: 10px;
  width: 227px;
  border-radius: 4px;
  box-shadow: 1px 3px 16px 0 rgba(40, 54, 61, 0.18);
  background: #fff;
  font-size: 16px;
  letter-spacing: 0.36px;
  display: none;

  &:before {
    content: '';
    position: absolute;
    display: block;
    width: 0;
    height: 0;
    border-top: 10px solid transparent;
    border-right: 10px solid transparent;
    border-left: 10px solid transparent;
    border-bottom: 10px solid white;
    top: -19px;
    left: 102px;
  }
`

const SQuestionIcon = styled(QuestionIcon)`
  margin-left: 5px;
  display: block;
`

const Features = () => (
  <>
    <GridFeature>
      <span>Multi-signature</span>
      <TooltipWrapper>
        <SQuestionIcon />
        <Tooltip>
          Multi-signature allows you define an access/control-scheme through
          multiple signers that need to confirm transactions.
        </Tooltip>
      </TooltipWrapper>
    </GridFeature>
    <GridFeature>
      <span>DeFi integrations</span>
      <TooltipWrapper>
        <SQuestionIcon />
        <Tooltip>
          Easily interact with popular decentralized finance protocols to
          invest, trade and manage digital assets.
        </Tooltip>
      </TooltipWrapper>
    </GridFeature>
    <GridFeature>
      <span>Privacy</span>
      <TooltipWrapper>
        <SQuestionIcon />
        <Tooltip>
          No need to share any personal data such as names, addresses or phone
          numbers.
        </Tooltip>
      </TooltipWrapper>
    </GridFeature>
    <GridFeature>
      <span>Collectibles ("NFTs")</span>
      <TooltipWrapper>
        <SQuestionIcon />
        <Tooltip>
          Store ERC-721 tokens such as digital arts, ENS names or game-assets.
        </Tooltip>
      </TooltipWrapper>
    </GridFeature>
    <GridFeature>
      <span>Gasless signatures</span>
      <TooltipWrapper>
        <SQuestionIcon />
        <Tooltip>
          Multi-signature transactions can be signed off-chain, saving you
          network fees and time.
        </Tooltip>
      </TooltipWrapper>
    </GridFeature>
    <GridFeature>
      <span>Open source</span>
      <TooltipWrapper>
        <SQuestionIcon />
        <Tooltip>
          All components of the Gnosis Safe (frontend, backend, contracts) have
          been open sourced.
        </Tooltip>
      </TooltipWrapper>
    </GridFeature>
    <GridFeature>
      <span>Formally verified</span>
      <TooltipWrapper>
        <SQuestionIcon />
        <Tooltip>
          The core contracts of the Gnosis Safe have been formally verified,
          which is the highest security standard for Ethereum-based protocols.
        </Tooltip>
      </TooltipWrapper>
    </GridFeature>
  </>
)

const StorageComparison = () => (
  <Container>
    <SWrapper>
      <SHeading>Compare storage solutions</SHeading>
      <Grid>
        <ColumnFirst>
          <GridTitle>
            <h4>Gnosis Safe</h4>
          </GridTitle>
          <Features />
        </ColumnFirst>
        <Column>
          <GridTitle>
            <h4>Gnosis Safe</h4>
          </GridTitle>
          <GridContent>
            <GreenTick />
          </GridContent>
          <GridContent>
            <GreenTick />
          </GridContent>
          <GridContent>
            <GreenTick />
          </GridContent>
          <GridContent>
            <GreenTick />
          </GridContent>
          <GridContent>
            <GreenTick />
          </GridContent>
          <GridContent>
            <GreenTick />
          </GridContent>
          <GridContent>
            <GreenTick />
          </GridContent>
        </Column>

        <ColumnHidden>
          <GridTitle>
            <h4>'Old' Multisig</h4>
            <TooltipWrapper>
              <SQuestionIcon />
              <Tooltip>
                Legacy multi-signature wallet by Gnosis. Gnosis Safe is the
                successor to the Gnosis Multisig.
              </Tooltip>
            </TooltipWrapper>
          </GridTitle>
          <Features />
        </ColumnHidden>
        <Column>
          <GridTitle>
            <h4>
              'Old'
              <br />
              Multisig
            </h4>
            <TooltipWrapper>
              <SQuestionIcon />
              <Tooltip>
                Legacy multi-signature wallet by Gnosis. Gnosis Safe is the
                successor to the Gnosis Multisig.
              </Tooltip>
            </TooltipWrapper>
          </GridTitle>
          <GridContent>
            <GreenTick />
          </GridContent>
          <GridContent>
            <RedCross />
          </GridContent>
          <GridContent>
            <GreenTick />
          </GridContent>
          <GridContent>
            <RedCross />
          </GridContent>
          <GridContent>
            <RedCross />
          </GridContent>
          <GridContent>
            <GreenTick />
          </GridContent>
          <GridContent>
            <RedCross />
          </GridContent>
        </Column>

        <ColumnHidden>
          <GridTitle>
            <h4>Software wallet ("EOA")</h4>
          </GridTitle>
          <Features />
        </ColumnHidden>
        <Column>
          <GridTitle>
            <h4>Software wallet ("EOA")</h4>
          </GridTitle>
          <GridContent>
            <RedCross />
          </GridContent>
          <GridContent>
            <GreyTick />
          </GridContent>
          <GridContent>
            <GreyTick />
          </GridContent>
          <GridContent>
            <GreyTick />
          </GridContent>
          <GridContent>–</GridContent>
          <GridContent>
            <GreyTick />
          </GridContent>
          <GridContent>
            <RedCross />
          </GridContent>
        </Column>

        <ColumnHidden>
          <GridTitle>
            <h4>Hardware wallet</h4>
          </GridTitle>
          <Features />
        </ColumnHidden>
        <Column>
          <GridTitle>
            <h4>Hardware wallet</h4>
          </GridTitle>
          <GridContent>
            <RedCross />
          </GridContent>
          <GridContent>
            <RedCross />
          </GridContent>
          <GridContent>
            <GreenTick />
          </GridContent>
          <GridContent>
            <RedCross />
          </GridContent>
          <GridContent>–</GridContent>
          <GridContent>
            <RedCross />
          </GridContent>
          <GridContent>
            <RedCross />
          </GridContent>
        </Column>

        <ColumnHidden>
          <GridTitle>
            <h4>Centralised exchange</h4>
          </GridTitle>
          <Features />
        </ColumnHidden>
        <Column>
          <GridTitle>
            <h4>Centralised exchange</h4>
          </GridTitle>
          <GridContent>
            <RedCross />
          </GridContent>
          <GridContent>
            <RedCross />
          </GridContent>
          <GridContent>
            <RedCross />
          </GridContent>
          <GridContent>
            <RedCross />
          </GridContent>
          <GridContent>–</GridContent>
          <GridContent>
            <RedCross />
          </GridContent>
          <GridContent>
            <RedCross />
          </GridContent>
        </Column>
      </Grid>
    </SWrapper>
  </Container>
)

export default StorageComparison
