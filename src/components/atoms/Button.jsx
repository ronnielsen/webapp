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

export default styled.button`
  height: 40px;
  color: ${props => props.theme.colors.white};
  background-color: ${props => props.theme.colors.primary};
  border-radius: ${props => props.theme.radii.medium};
  border: none;
  opacity: ${p => p.disabled ? 0.25 : 1};
  cursor: ${p => p.disabled ? 'not-allowed' : 'pointer'};

  &:hover {
    filter: brightness(110%);
  }

  &:active {
    filter: brightness(90%);
  }

  &:active, &:focus {
    outline: none;
  }

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
