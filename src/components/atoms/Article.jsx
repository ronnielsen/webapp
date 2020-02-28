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

export default styled.article`
  margin: ${props => props.theme.space.xl};
  padding: ${props => props.theme.space.xxl};
  border-radius: ${props => props.theme.radii.medium};
  overflow: scroll;

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
