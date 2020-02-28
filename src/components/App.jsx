import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { store, persistor } from '../redux';
import { SetupLogger } from "../tools";
import Router from './Router';


export default class App extends React.Component {

  state = {
    key: "persist-key-1"
  }

  constructor(props) {
    super(props);
    SetupLogger.init()
  }

  componentDidCatch(error,errorInfo) {
    this.setState({
      key: this.state.key + ".0"
    })
  }

  renderLoading() {
    return (
      <div>Loading...</div>
    )
  }

  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={this.renderLoading()} persistor={persistor}>
          <Router />
        </PersistGate>
      </Provider>
    )
  }
}
