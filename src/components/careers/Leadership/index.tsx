import * as React from 'react'
import styled from 'styled-components'
import LeadershipCard from './Card'

const Leadership = () => {
  const Grid = styled.div`
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 24px;

    @media screen and (max-width: 768px) {
      grid-template-columns: repeat(2, 1fr);
      grid-row-gap: 48px;
      grid-column-gap: 16px;
    }
  `

  return (
    <section>
      <Grid>
        <LeadershipCard
          imageURL="/images/richard.png"
          name="Richard Meissner"
          position="Tech lead"
          social={{
            twitter: 'https://twitter.com/gnosisSafe',
            discord: 'https://discord.gg/AjG7AQD9Qn',
            github: 'https://github.com/safe-global',
          }}
        />
        <LeadershipCard
          imageURL="/images/tobias.png"
          name="Tobias Schubotz"
          position="Product & Operations"
          social={{
            twitter: 'https://twitter.com/gnosisSafe',
            medium: 'https://medium.com/@gnosisPM',
            discord: 'https://discord.gg/AjG7AQD9Qn',
            github: 'https://github.com/safe-global',
          }}
        />
        <LeadershipCard
          imageURL="/images/lukas.png"
          name="Lukas Schor"
          position="Ecosystem"
          social={{
            twitter: 'https://twitter.com/gnosisSafe',
            medium: 'https://medium.com/@gnosisPM',
            discord: 'https://discord.gg/AjG7AQD9Qn',
            github: 'https://github.com/safe-global',
          }}
        />
        <LeadershipCard
          imageURL="/images/christoph.png"
          name="Christoph Simmchen"
          position="Legal & Operations"
          social={{
            twitter: 'https://twitter.com/gnosisSafe',
            medium: 'https://medium.com/@gnosisPM',
            discord: 'https://discord.gg/AjG7AQD9Qn',
          }}
        />
      </Grid>
    </section>
  )
}

export default Leadership
