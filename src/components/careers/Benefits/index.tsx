import * as React from 'react'
import styled from 'styled-components'
import BenefitsCard from './Card'
import ContentWrapper from '../../Layout/ContentWrapper'

import BookIcon from '../../../assets/icon-book.svg'
import BulbIcon from '../../../assets/icon-bulb.svg'
import BuildingIcon from '../../../assets/icon-building.svg'
import CalendarIcon from '../../../assets/icon-calendar.svg'
import TeamIcon from '../../../assets/icon-team.svg'
import LaptopIcon from '../../../assets/icon-laptop.svg'
import TokensIcon from '../../../assets/icon-tokens.svg'
import GlobeIcon from '../../../assets/icon-globe.svg'
import BgGray from '../../../assets/bg-gray.svg'
import { SectionTitle, Text } from '../styled'
import { sizes } from '../../../styles/styleUtils'

const Grid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;

  @media screen and (max-width: ${sizes.md}px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 20px;
  }
`

const SectionHeader = styled.div`
  margin: 0 auto 80px;
  max-width: 732px;
  text-align: center;
`

const SBgGray = styled(BgGray)`
  position: absolute;
  top: 50px;
  width: 2000px;
  transform: translateX(-50%);
  left: 50%;
  min-width: 100%;

  @media screen and (max-width: 980px) {
    top: 300px;
  }
  fill: #e9e9e9;
`

const Section = styled.section`
  background-color: ${(p) => p.theme.palette.white};
  position: relative;
  padding: 100px 0;

  @media screen and (max-width: ${sizes.md}px) {
    padding: 64px 0;
  }
`

const Benefits = () => {
  return (
    <Section>
      <SBgGray />
      <ContentWrapper>
        <SectionHeader>
          <SectionTitle>Our Benefits</SectionTitle>
          <Text>
            We strive to make the lives of our employees better every day. As
            such, we have developed some innovative benefits for them.
          </Text>
        </SectionHeader>
        <Grid>
          <BenefitsCard icon={BookIcon} title="Continuous Learning">
            Our personal education and conference budgets will help you grow
            professionally!
          </BenefitsCard>
          <BenefitsCard
            icon={BulbIcon}
            title="Embrace Your Entrepreneurial Spirit"
          >
            You can use your Friday afternoons for research or a side project in
            our ecosystem!
          </BenefitsCard>
          <BenefitsCard icon={BuildingIcon} title="Company & Team Retreats">
            Build your team spirit on cool trips and retreats.
          </BenefitsCard>
          <BenefitsCard icon={CalendarIcon} title="Flexibility">
            Flexible working schedules and hybrid working policies have been a
            part of our culture for a long time.
          </BenefitsCard>
          <BenefitsCard icon={TeamIcon} title="Flat Hierarchies">
            You will not get lost in complicated vertical structures here.
          </BenefitsCard>
          <BenefitsCard icon={LaptopIcon} title="Newest Technology">
            We make sure to provide you with the best equipment, subscriptions
            and hardware you need.
          </BenefitsCard>
          <BenefitsCard icon={TokensIcon} title="Token Plan">
            We believe it's important for all colleagues to have a stake in our
            mission, which is why every employee receives a bonus token plan.
          </BenefitsCard>
          <BenefitsCard icon={GlobeIcon} title="Visa Support">
            We'll assist you along the way with all you need to get a visa and
            join us in one of our offices.
          </BenefitsCard>
        </Grid>
      </ContentWrapper>
    </Section>
  )
}

export default Benefits
