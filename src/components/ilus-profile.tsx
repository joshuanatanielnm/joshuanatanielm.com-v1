import * as React from "react";

import { Icon } from "@chakra-ui/react";
import type { IconProps } from "@chakra-ui/react";

const IlusProfile: React.FC<IconProps> = (props) => {
  return (
    <Icon {...props}>
      <img src="/public/ilus.png" alt="hellow"/>
    </Icon>
  )
}

export default IlusProfile
