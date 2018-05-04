import React, {Component} from 'react';

class Preloader extends Component {

  constructor() {
    super();
    this.state = {
      name: 'preloader',
    };
  }

  render() {
    const {pendingItems, totalItems} = this.props;

    const loadBlock = 100 / totalItems;
    const progressBarWidth = loadBlock * (totalItems - pendingItems);

    return (
      <div className={`preloader animated ${pendingItems===0 ? 'preloader--hidden' : 'preloader--visible'}`}>
        <div
          className="preloader__bar"
          style={{
            width: progressBarWidth + '%',
            transitionDuration: (pendingItems === 0) && '.1s'
          }}>
        </div>
        {pendingItems} of {totalItems}
      </div>
      )

  }

}

Preloader.defaultProps = {
  pendingItems: 0,
  totalItems: 0,
}

export default Preloader;
