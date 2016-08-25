import React, {Component} from 'react';

const styles = {
  container: {
    height: '100vh',
    position: 'relative',

    marginLeft: '-50%',
    width: '200%'
  }
};

export class Description extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div style={styles.container} className="rotated-line">
        <h2 className="main-title">
            Description
        </h2>
        
      </div>
    );
  }
}