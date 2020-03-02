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

export default styled.h1`
  margin: 0px;
  padding: 0px;
  font-size: ${props => props.theme.fontSizes.large};
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
