import { Input } from "antd"
import React, { useImperativeHandle, useRef } from "react"

const { Search } = Input

const FancyInput = React.forwardRef((props, ref) => {
  const inputRef = useRef<Input>(null)

  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current?.focus()
    },
  }))

  return <Input ref={inputRef} style={{ width: 270 }} />
})

const UseRef: React.FC = () => {
  const fancyInputEl = useRef<Input>(null)

  const onSearch = () => {
    fancyInputEl.current?.focus()
  }

  return (
    <>
      <Search
        enterButton="focus next input"
        onSearch={onSearch}
        style={{ width: 270 }}
      />
      <br />
      <br />
      <FancyInput ref={fancyInputEl} />
    </>
  )
}

export default UseRef
