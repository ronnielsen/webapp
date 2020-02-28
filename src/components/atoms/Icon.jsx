import React from 'react';
import * as material from 'styled-icons/material';
import styled from 'styled-components';
import {
  color,
  space,
  border,
  typography,
  layout,
  shadow,
  flexbox,
  grid,
  position,
  background
} from 'styled-system';

class BaseIcon extends React.Component {
  render() {
    let {
      name,
      size,
      className
    } = this.props;
    let IconComponent = material[name];
    return IconComponent ? <IconComponent size={size} className={className} /> : <i>i</i>
  }
}

const Icon = styled(BaseIcon)`
  ${flexbox}
  ${space}
  ${color}
  ${border}
  ${typography}
  ${layout}
  ${shadow}
  ${grid}
  ${position}
  ${background}
`;


export default Icon;
