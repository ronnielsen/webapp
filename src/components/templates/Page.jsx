import React from 'react';
import styled, { ThemeProvider, createGlobalStyle  } from 'styled-components';
import { connect } from 'react-redux'
import { Div } from '../atoms';

const Container = styled(Div)`
  width: 100vw;
  height: 100vh;
  overflow-x: none;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
`;

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: Roboto;
  }

  body {
    margin: 0;
    background-color: ${p => p.theme.colors.background};
    color: ${p => p.theme.colors.text};
  }
`

class Page extends React.Component {
  render() {
    let { theme } = this.props.main;
    return (
      <ThemeProvider theme={theme}>
        <Container>
          {this.props.children}
        </Container>
        <GlobalStyle />
      </ThemeProvider>
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
    // init: () => dispatch(MainActions.init()),
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(Page);
