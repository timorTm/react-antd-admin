import { Typography } from "antd"
import React from "react"
import UseRef from "components/pages/version/16.8.x/UseRef"

const { Title } = Typography

export default () => (
  <Typography>
    <Title>16.8.x</Title>
    <Title level={2}>useRef</Title>
    <UseRef />
  </Typography>
)
