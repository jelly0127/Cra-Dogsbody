import reactLogo from '@/logo.svg'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount } from '../../redux/counterSlice'
import CONFIG from '@/config'
import '@/App.less'
import { Link } from 'react-router-dom'
import userIcon from '@/images/jelly.jpg'
export default function Test() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const count = useSelector((state: any) => state.counter.value)
  const dispatch = useDispatch()
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
      <h3>router</h3>

      <p>Click jump to main page</p>
      <Link to={'main'}>Main</Link>
      <p>Click jump to history page</p>
      <Link to={'History'}>History</Link>

      <div className="test_box">
        <br />
        <h3>redux</h3>
        <div className="test_box_list">
          <button aria-label="Increment value" onClick={() => dispatch(increment())}>
            Increment
          </button>
          <button aria-label="Decrement value" onClick={() => dispatch(decrement())}>
            Decrement
          </button>
          <button aria-label="incrementByAmount value" onClick={() => dispatch(incrementByAmount(6))}>
            incrementByAmount
          </button>
          <button
            onClick={() => {
              console.log('CONFIG', CONFIG)
            }}
          >
            config
          </button>
        </div>
        <p>{count}</p>
      </div>
    </div>
  )
}
