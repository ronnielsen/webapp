import React from 'react';
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

const Figure = styled.figure`
  margin: 0px;
`;

const Img = styled.img`
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

class Image extends React.Component {
  render() {
    return (
      <Figure>
        <Img {...this.props} />
      </Figure>
    )
  }
}

export default Image;
