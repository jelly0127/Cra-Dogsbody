import reactLogo from '@/logo.svg'
import CONFIG from '@/config'
import '@/App.less'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount } from '../../redux/reducer'
import { Link } from 'react-router-dom'
import userIcon from '@/images/jelly.jpg'
import { FC, memo, useCallback, useReducer, useRef, useState } from 'react'
import { Button } from 'antd'
import { useMemo } from 'react'
import Child from './child'

//useReducer
const initialCount = 0
function init(initialCount: any) {
  return { count: initialCount }
}
function reducer(state: { count: number }, action: { type?: string; payload?: number }) {
  switch (action.type) {
    case 'increments':
      return { count: state.count + 1 }
    case 'decrements':
      return { count: state.count - 1 }
    case 'reset':
      return init(action.payload)
    default:
      throw new Error()
  }
}
const set = new Set()
const Test: FC = memo(() => {
  const [state, dispatchs] = useReducer(reducer, initialCount, init)

  const count = useSelector((state: { counter: { value: number } }) => state.counter.value)
  const dispatch = useDispatch()
  const [counts, setCounts] = useState(1)
  const [value, setValue] = useState(1)

  const [time, setTime] = useState(0)
  const timer: any = useRef(null)

  const [propsData, setPropsData] = useState({
    name: 'TestComponents',
    data: 'Test',
  })
  const handleStart = useCallback(() => {
    console.log('timer.current', timer.current)
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    timer.current == null
      ? (timer.current = setInterval(() => {
          setTime(time => time + 1)
        }, 100))
      : null
  }, [time])

  const handlePause = useCallback(() => {
    clearInterval(timer.current)
    timer.current = null
  }, [time])

  const callback = useCallback(() => {
    console.log(counts)
  }, [counts])
  set.add(callback)
  const expensive = useMemo(() => {
    console.log('compute')
    let sum = 0
    for (let i = 0; i < counts * 100; i++) {
      sum += i
    }
    return sum
  }, [counts])

  return (
    <div className="App">
      <div>
        <a href="https://reactjs.org" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Craco + React</h1>
      <h2>Jelly</h2>
      <img src={userIcon} alt="" />
      <br />
      <Child name={propsData.name} data={propsData.data} setData={setPropsData} />
      <br />
      <h1>router</h1>
      <p>Click jump to main page</p>
      <Link to={'main'}>Main</Link>
      <p>Click jump to history page</p>
      <Link to={'History'}>History</Link>
      <h1>useCallback</h1>
      <div>
        <h1>Count: {counts}</h1>
        <h1>Set.size: {set.size}</h1>
        <h1>Value: {value}</h1>
        <div>
          <Button onClick={() => setCounts(counts => counts + 1)}>Counts + 1</Button>
          <Button onClick={() => setValue(value => value + 2)}>Value + 2</Button>
        </div>
      </div>
      <br />
      <div className="test_box">
        <h1>useMemo</h1>
        <div>
          <h1>Count: {counts}</h1>
          <h1>Expensive: {expensive}</h1>
          <div>
            <Button onClick={() => setCounts(counts => counts + 1)}>Count + 1</Button>
          </div>
        </div>
        <br />
        <h1>useRef</h1>
        <div>
          <p>{time / 10} seconds</p>
          <Button onClick={handleStart}>??????</Button>
          <Button onClick={handlePause}>??????</Button>
        </div>

        <br />
        <h1>useReducer</h1>
        <h4>count:{state.count}</h4>
        <div className="test_box_list">
          <Button aria-label="Increment value" onClick={() => dispatchs({ type: 'increments' })}>
            Increment
          </Button>
          <Button aria-label="Decrement value" onClick={() => dispatchs({ type: 'decrements' })}>
            Decrement
          </Button>
          <Button aria-label="incrementByAmount value" onClick={() => dispatchs({ type: 'reset', payload: 6 })}>
            reset
          </Button>
        </div>
        <br />
        <h1>redux</h1>
        <div className="test_box_list">
          <Button aria-label="Increment value" onClick={() => dispatch(increment())}>
            Increment
          </Button>
          <Button aria-label="Decrement value" onClick={() => dispatch(decrement())}>
            Decrement
          </Button>
          <Button aria-label="incrementByAmount value" onClick={() => dispatch(incrementByAmount(6))}>
            incrementByAmount
          </Button>
          <Button
            onClick={() => {
              console.log('CONFIG', CONFIG)
            }}
          >
            config
          </Button>
        </div>
        <p>{count}</p>
      </div>
    </div>
  )
})
export default Test
