import React, {Component} from 'react';
import {HpHead} from './hp-head/hp-head';
import {Services} from './services/services';
import {Description} from './description/description';
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

export class Home extends Component {
  constructor() {
    super();
    this.state = {title:"Web Agency"};
  }

  render() {
    return (
      <div style={styles.container}>
        <main style={styles.main}>
          <HpHead hpTitle={this.state.title} />
          <Services />
          <Description />
          <WTextImg />
        </main>
        <Footer/>
      </div>
    );
  }
}
