import React, {Component} from 'react';
import {WTextImg} from '../widgets/w-text-img/w-text-img';
import {Footer} from '../footer';

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    overflow: 'hidden'
  },
  main: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column'
  }
};

export class About extends Component {
  constructor() {
    super();
    this.state = {title:"About"};
  }

  render() {
    return (
      <div style={styles.container}>
        <main style={styles.main}>
          <h1>About</h1>
        </main>
        <Footer/>
      </div>
    );
  }
}