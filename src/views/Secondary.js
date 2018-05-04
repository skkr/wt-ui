import React, {Component} from 'react';
import {Link} from 'react-router-dom';

// Components
// import Component from '../components/Component.js'

// Libraries
import Image           from "react-graceful-image";
import ScrollAnimation from 'react-animate-on-scroll';

export default class Secondary extends Component {

  static defaultProps =  {
    goBackMsg: 'Go back to the main view'
  }

  constructor(props) {
    super(props);
    this.state = {
      name: 'Secondary',
    };
  }

  componentWillMount() {
    setTimeout(() => {
      this.props.setLoader(+1);
    }, 1);
  }

  componentDidMount() {
    window.scrollTo(0, 0);

    setTimeout(() => {
      this.props.setLoader(-1);
    }, 3000);
  }

  render () {
    const {showAlert, goBackMsg} = this.props;

    const test = "img/content/test.jpg";
    const test2 = "img/content/test2.jpg";

    return (
      <article id="app-content" role="main" className="container">

        <div className="row">
          <div className="col-12">

          <div className="page-header">
            <ScrollAnimation animateIn="tdFadeInRight" animateOnce={true} duration={3} offset={0} >
              <h1>Included Libraries</h1>
            </ScrollAnimation>
            <p className="lead mb-3">This content is only a sample to be taken as a reference.</p>
          </div>

            <p className="mb-0">import Image from "react-graceful-image"; </p>
            <p className="mb-4">import ScrollAnimation from 'react-animate-on-scroll'; </p>

            <p>
              <Image
                src={test} alt="test"
                width="300" height={400}
                placeholderColor="#f8f8f8"
                alt="My awesome image"
              />
              <Image
                src={test2} alt="test"
                width="300" height={400}
                placeholderColor="#f8f8f8"
                alt="My awesome image"
              />
            </p>

            <p>
              <i className="wicon-back text--sm text-accent mr-1"/>
              <Link to="/" hrefLang="en">
                {this.props.goBackMsg}
              </Link>
            </p>

          </div>
        </div>
      </article>
    )
  }
}
