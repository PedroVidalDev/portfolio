import { useEffect, useState } from 'react'

const easeOutExpo = (x: number): number => {
  return x === 1 ? 1 : 1 - Math.pow(2, -10 * x)
}

export const useCountUp = (
  end: number,
  duration: number = 2000,
  start: number = 0,
) => {
  const [count, setCount] = useState(start)

  useEffect(() => {
    let startTimestamp: number | null = null
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp
      const progress = Math.min((timestamp - startTimestamp) / duration, 1)

      const easedProgress = easeOutExpo(progress)

      setCount(Math.floor(easedProgress * (end - start) + start))
      if (progress < 1) {
        window.requestAnimationFrame(step)
      }
    }
    window.requestAnimationFrame(step)
  }, [end, duration, start])

  return count
}
