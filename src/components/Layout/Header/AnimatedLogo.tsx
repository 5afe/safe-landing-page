import React, { useEffect, useState, Fragment, ReactElement, ReactNode } from 'react'

const useInterval = (delay: number): number => {
  const [count, setCount] = useState<number>(0)

  useEffect(() => {
    const id = setInterval(() => {
      setCount((prev) => prev + 1)
    }, delay)

    return () => clearInterval(id)
  }, [delay])

  return count
}

const AnimatedLogo = ({ children }: { children: ReactNode }): ReactElement => {
  const RESTART_DELAY = 2 * 60e3 // 2 minutes
  const restartKey = useInterval(RESTART_DELAY)

  return (
    <Fragment key={String(restartKey)}>
      {children}
    </Fragment>
  )
}

export default AnimatedLogo
