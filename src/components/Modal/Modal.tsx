import React, { FC } from 'react'
import { Modal } from 'antd'
import styled from 'styled-components'
const MyModal = styled(Modal)`
  width: ${(prop: any) => prop.width}px;
  .ant-modal-content {
    height: 100%;
    width: 100%;
  }
  .ant-modal-title {
    text-align: center;
    margin-top: 20px;
  }
`
interface PropsData {
  title?: string
  isModalOpen: boolean
  setIsModalOpen: () => void
  child?: React.ReactElement
  bodyStyle?: object
  width?: number
}
const ModalBox: FC<PropsData> = props => {
  const { title = ' ', isModalOpen = false, setIsModalOpen, child, bodyStyle, width = 320 } = props
  return (
    <MyModal
      width={width}
      bodyStyle={bodyStyle}
      title={title}
      open={isModalOpen}
      onCancel={setIsModalOpen}
      footer={null}
      maskClosable
    >
      <>{child}</>
    </MyModal>
  )
}
export default ModalBox
