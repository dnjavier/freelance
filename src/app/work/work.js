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

export class Work extends Component {
  constructor() {
    super();
    this.state = {title:"Work"};
  }

  render() {
    return (
      <div style={styles.container}>
        <main style={styles.main}>
          <h1>Work</h1>
        </main>
        <Footer/>
      </div>
    );
  }
}