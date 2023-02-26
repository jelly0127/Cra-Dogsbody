import { useEffect, useState } from 'react'
//定义size对象
interface WindowTop {
  height: number
}

const useWindowTop = () => {
  const [top, setTop] = useState<WindowTop>({
    height: document.documentElement.scrollTop,
  })

  useEffect(() => {
    const fun = () => {
      setTop({
        height: document.documentElement.scrollTop,
      })
    }
    window.addEventListener('scroll', fun)
    return () => {
      window.removeEventListener('scroll', fun)
    }
  }, [])

  return top
}

export default useWindowTop
