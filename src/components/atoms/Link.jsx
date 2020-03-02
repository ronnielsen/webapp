import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
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

const StyledA = styled.a`
  cursor: pointer;

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

const StyledLink = styled(Link).attrs({active: null})`
  cursor: pointer;

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

export default (props) => {
  const LinkComponent = props.href ? StyledA : StyledLink;
  return (
    <LinkComponent {...props} />
  )
}
