import React from 'react';
import PropTypes from 'prop-types';
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

const StyledUl = styled.ul`
  display: flex;
  flex-direction: ${p => p.flexDirection};
  list-style-type: none;
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

const StyledLi = styled.li`
  display: flex;

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

export default class List extends React.Component {
  static propTypes = {
    /** list of data */
    data: PropTypes.array.isRequired,
    /** callback function to render item in list, defined as renderItem({item, index}) */
    renderItem: PropTypes.func.isRequired,
  }

  render() {
    const {
      data,
      renderItem
    } = this.props;

    let items = [];
    for (let index = 0; index < data.length; index++) {
      let item = data[index];
      items.push(
        <StyledLi key={index}>
          {renderItem({item, index})}
        </StyledLi>
      )
    }

    return (
      <StyledUl flexDirection="column" {...this.props}>
        {items}
      </StyledUl>
    )
  }
}
