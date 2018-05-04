import React, { Component } from 'react';

// Libraries
import Loader from '../components/Loader';

// Components
import Alert     from '../components/Alert';
import AppHeader from '../components/AppHeader';
import AppFooter from '../components/AppFooter';

export default class LayoutMain extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: 'LayoutMain',
      pendingItems: 0, // if > 0 the loading bar is displayed
      totalItems: 0,
    };
  }

  // Alert messages settings
  _callAlert = (c) => this._alert = c;
  _showAlert = (type, message) => this._alert.open(type, message);

  // Preloader settings
  _setLoader = (ammount) => {
    let updatedCount = this.state.pendingItems + ammount;
    this.setState({pendingItems: updatedCount});
    if (ammount.toString().charAt(0) !== "-") {
      this.setState({totalItems: updatedCount})
    }
  };

  render() {
    const {pendingItems, totalItems} = this.state;
    const childrenWithProps = React.cloneElement(this.props.children, {
      showAlert: this._showAlert,
      pendingItems: pendingItems,
      setLoader: this._setLoader
    });

    return (
      <div id="app-layout" className={`app-layout--main ${pendingItems>0 ? 'is-loading' : 'is-ready'}`}>
        <Loader pendingItems={pendingItems} totalItems={totalItems} />
        <Alert ref={this._callAlert} />
        <AppHeader id="app-header" pendingItems={pendingItems} setLoader={this._setLoader}/>
         {childrenWithProps}
        <AppFooter pendingItems={pendingItems} setLoader={this._setLoader}/>
      </div>
    );
  }
}
