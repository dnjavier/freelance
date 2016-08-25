import React, {Component} from 'react';

const styles = {
  container: {
    height: '100vh',
    position: 'relative'
  }
};

export class WTextImg extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <div style={styles.container}>
        <h2 className="main-title">
            Work
        </h2>
        
      </div>
    );
  }
}