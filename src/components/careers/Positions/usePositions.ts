import { useEffect, useState } from 'react'
import { Department, Job } from 'components/careers/Positions/index'

const JOBS_API_URL =
  'https://boards-api.greenhouse.io/v1/boards/gnosis/departments/4065869002'

export const usePositions = () => {
  const [positions, setPositions] = useState<Job[]>([])

  useEffect(() => {
    let isCurrent = true

    const getOpenPositions = async () => {
      try {
        const data = await fetch(JOBS_API_URL)
        const department: Department = await data.json()
        const jobs = department.jobs

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
