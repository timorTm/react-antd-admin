import { Button, Input } from "antd"
import { InputProps } from "antd/es/input"
import React, { useRef } from "react"

const FancyInput = React.forwardRef<Input, InputProps>((props, ref) => {
  return <Input {...props} ref={ref} />
})

const UseRef: React.FC = () => {
  const fancyInputEl = useRef<Input>(null)

  const handleClick = () => {
    fancyInputEl.current?.focus()
  }

  return (
    <>
      <FancyInput ref={fancyInputEl} style={{ width: 270 }} />
      <Button onClick={handleClick} type="primary">
        focus
      </Button>
    </>
  )
}

export default UseRef
