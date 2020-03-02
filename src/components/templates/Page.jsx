import React from 'react';
import styled, { ThemeProvider, createGlobalStyle  } from 'styled-components';
import { connect } from 'react-redux'
import { Div } from '../atoms';
import Header from './Header';
import Footer from './Footer';

const Container = styled(Div)`
  width: 100vw;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
`;

const Content = styled(Div)`
  width: 100%;
  max-width: 800px;
  min-height: 100vh;
  display: flex;
  margin: 0px auto 0px auto;
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
          <Header />
          <Content>
            {this.props.children}
          </Content>
          <Footer />
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
