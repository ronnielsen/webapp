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

export default styled.label`
  padding: 8px;
  background-color: transparent;
  color: ${p => p.theme.colors.black};
  width: 130px;
  height: 40px;
  text-align: right;

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
