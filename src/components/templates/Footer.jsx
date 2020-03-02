import React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
// import { MainActions } from '../../redux/actions';
import {
  Div,
  Link,
  Title
} from '../atoms';

const Container = styled(Div)`
  width: 100vw;
  overflow: none;
  display: flex;
  flex-direction: row;
  padding: ${p => p.theme.space.xs};
`;

const Nav = styled.nav`
  margin: auto;
  display: flex;
  flex-direction: column;
`;

const NavLink = styled(Link)`
  color: ${p => p.theme.colors.white};
`;

class Footer extends React.Component {
  render() {
    return (
      <Container bg="negative" color="white">
        <Nav>
          <Title>Web App</Title>
        </Nav>
        <Nav>
          <Title>Contact</Title>
          <Div>Phone Number: (929)357-4296</Div>
          <Div>Email: info@thecentrinal.com</Div>
          <Div>Made in NYC</Div>
        </Nav>
        <Nav>
          <Title>Company</Title>
          <NavLink to="/Home">Home</NavLink>
          <NavLink to="/About">About</NavLink>
          <NavLink to="/Contact">Contact</NavLink>
        </Nav>
        <Nav>
          <Title>Links</Title>
          <NavLink to="/">Link 4</NavLink>
          <NavLink to="/">Link 5</NavLink>
        </Nav>
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  let { theme } = state.main
  return {
    main: { theme }
  }
}


const mapDispatchToProps = (dispatch) => {
  return {
    // setTheme: (theme) => dispatch(MainActions.setTheme(theme)),
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Footer);
