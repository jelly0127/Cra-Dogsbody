import { Button } from 'antd'
import React from 'react'
type ChildProps = {
  name: string
  data: string
  setData: (data: { name: string; data: string }) => void
}

export default function Child(props: ChildProps) {
  const { name, data, setData } = props
  return (
    <div>
      <h1>ComponentsProps</h1>
      <h3>propsFromName:{name}</h3>
      <h3>propsFromData:{data}</h3>
      <Button
        onClick={() => {
          setData({ name: 'childComponents', data: 'child' })
        }}
      >
        changePropsName
      </Button>
    </div>
  )
}
