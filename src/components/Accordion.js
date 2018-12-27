import React, { Component } from 'react';
import { Collapse } from 'react-collapse';

export default class Accordion extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: 'accordion',
      activeItem: 0
    };

  }

  componentWillMount() {
    this.setState({
      activeItem: this.props.openItem
    });
  }


  render() {
    const self = this;
    const {activeItem} = this.state;
    let {children, openItem} = this.props;
    const minHeight = this.props.minHeight - 40; /* padding */
    var accordeonItems = React.Children.map(children, function(child, index) {
      return (

        <Collapse
          isOpened={(activeItem == index) ? true : false}
          springConfig={(activeItem !== index) && {stiffness: 90, damping: 30}}
          onClick={() => {self.setState({ activeItem: index })}}
          style={{minHeight: minHeight}}>

          {child}

        </Collapse>
      )
    });

    return (
      <React.Fragment>
        {accordeonItems}
      </React.Fragment>
    );
  }
}
