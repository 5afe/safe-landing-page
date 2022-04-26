import * as React from 'react'
import styled from 'styled-components'
import BenefitsCard from './Card'

import BookIcon from '../../../assets/icon-book.svg'
import BulbIcon from '../../../assets/icon-bulb.svg'
import BuildingIcon from '../../../assets/icon-building.svg'
import CalendarIcon from '../../../assets/icon-calendar.svg'
import TeamIcon from '../../../assets/icon-team.svg'
import LaptopIcon from '../../../assets/icon-laptop.svg'
import TokensIcon from '../../../assets/icon-tokens.svg'
import GlobeIcon from '../../../assets/icon-globe.svg'

const Benefits = () => {
  const Grid = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 20px;

    @media screen and (max-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
      gap: 20px;
    }
  `

  return (
    <section>
      <Grid>
        <BenefitsCard icon={BookIcon} title="Continuous Learning">
          Our personal education and confernce budgets will help you to grow
          professionally!
        </BenefitsCard>
        <BenefitsCard
          icon={BulbIcon}
          title="Embrace Your Entrepreneurial Spirit"
        >
          You can use your Friday afternoons on research or a side project in
          our ecosystem!
        </BenefitsCard>
        <BenefitsCard icon={BuildingIcon} title="Company & Team Retreats">
          Build your team spirit on cool trips and retreats
        </BenefitsCard>
        <BenefitsCard icon={CalendarIcon} title="Flexibility">
          Flexible Working Schedules and remote working policies have been a
          part of our culture for a long time
        </BenefitsCard>
        <BenefitsCard icon={TeamIcon} title="Flat Hierarchies">
          You will not get lost in complicated vertical structures here
        </BenefitsCard>
        <BenefitsCard icon={LaptopIcon} title="Newest Technology">
          We make sure to provide you the best equipment, subscriptions and
          hardware you need!
        </BenefitsCard>
        <BenefitsCard icon={TokensIcon} title="Token Plan">
          We believe it's important for all colleagues to have a stake in our
          mission, which is why every employee has a bonus token plan.
        </BenefitsCard>
        <BenefitsCard icon={GlobeIcon} title="Visa Support">
          We'll assist you along the way with all you need to get a visa and
          join us in one of our offices.
        </BenefitsCard>
      </Grid>
    </section>
  )
}

export default Benefits
