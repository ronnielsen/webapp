import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
// import { MainActions } from '../../redux/actions';
import {
  Div,
  Link
} from '../atoms';

const Container = styled(Div)`
  width: 100vw;
  height: 60px;
  overflow: none;
  display: flex;
  flex-direction: row;
`;

const Nav = styled.nav`
  margin: auto;
  display: flex;
  flex-direction: row;
`;

const NavLink = styled(Link)`
  color: ${p => p.active ? p.theme.colors.white : p.theme.colors.negative};
  margin: ${p => p.theme.space.sm};
`;

class Header extends React.Component {
  render() {
    let { pathname } = this.props.location;
    return (
      <Container bg="primary" color="white">
        <Nav>
          <NavLink
            to="/Home"
            active={pathname === "/Home" || pathname === '/'}>
            Home
          </NavLink>
          <NavLink
            to="/About"
            active={pathname === "/About"}>
            About
          </NavLink>
          <NavLink
            to="/Contact"
            active={pathname === "/Contact"}>
            Contact
          </NavLink>
          <NavLink to="/">Link 4</NavLink>
          <NavLink to="/">Link 5</NavLink>
        </Nav>
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  let { theme } = state.main;
  return {
    main: { theme }
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    // setTheme: (theme) => dispatch(MainActions.setTheme(theme)),
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Header));
