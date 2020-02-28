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

export default styled.section`
  width: 100%;
  max-width: 800px;
  margin: auto;

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
