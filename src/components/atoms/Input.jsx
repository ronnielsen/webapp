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

export default styled.input`
  border-radius: 8px;
  padding: 8px;
  background-color: transparent;
  color: ${p => p.theme.colors.black};
  border: 1px solid ${p => p.theme.colors.negative};
  font-size: ${p => p.theme.fontSizes.medium};
  width: 200px;
  height: 40px;

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
