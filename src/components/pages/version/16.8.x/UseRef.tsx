import { Input } from "antd"
import React, { useRef } from "react"

const { Search } = Input

const UseRef: React.FC = () => {
  const inputEl = useRef<Input>(null)

  const onSearch = () => {
    inputEl.current?.focus()
  }

  return (
    <>
      <Search
        enterButton="聚焦"
        onSearch={onSearch}
        ref={inputEl}
        style={{ width: 200 }}
      />
    </>
  )
}

export default UseRef
