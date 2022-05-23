import { useEffect, useState } from 'react'
import { Job } from 'components/careers/Positions/index'

const JOBS_API_URL = 'https://safe-global.breezy.hr/json'

export const usePositions = () => {
  const [positions, setPositions] = useState<Job[]>([])

  useEffect(() => {
    let isCurrent = true

    const getOpenPositions = async () => {
      try {
        const data = await fetch(JOBS_API_URL)
        const jobs: Job[] = await data.json()

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
