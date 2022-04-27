import { useEffect, useState } from 'react'
import { Jobs } from 'components/careers/Positions/index'

const JOBS_API_URL = 'https://boards-api.greenhouse.io/v1/boards/gnosis/jobs'

export const usePositions = () => {
  const [positions, setPositions] = useState<Jobs>()

  useEffect(() => {
    let isCurrent = true

    const getOpenPositions = async () => {
      try {
        const data = await fetch(JOBS_API_URL)
        const jobs: Jobs = await data.json()

        if (isCurrent) {
          setPositions(jobs)
        }
      } catch (e) {
        console.error(e)
      }
    }

    getOpenPositions()

    return () => {
      isCurrent = false
    }
  }, [])

  return positions
}
