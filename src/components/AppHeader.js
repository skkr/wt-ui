import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default class AppHeader extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: 'header'
    };
  }

  componentWillMount() {
    setTimeout(() => {
      this.props.setLoader(+1);
    }, 1);
  }

  componentDidMount() {
    setTimeout(() => {
      this.props.setLoader(-1);
    }, 400);
  }

  render() {
    const {currentUser} = this.context;

    const lifLogo = 'img/content/logo-wt-w.png';
    const background = 'img/style/bg-header.png';

    return (
      <header id="app-header" className="app-header--themed" style={{'height': 121}}>

        <div className="container">
          <div className="row">
            <div className="col">
          <h1>
          {/* {currentUser.name} */}
            <Link to="/" hrefLang="en">
              <img className="brand-badge__logo" src={lifLogo} alt="WindingTree PWA" width="200"/>
            </Link>
            {/* <Link className="brand-badge" to="/" hrefLang="en">
              <img className="brand-badge__logo" src={lifLogo} alt="WindingTree PWA" width="250"/>
            </Link> */}
          </h1>

            </div>
          </div>
        </div>
      </header>
    );
  }
}
