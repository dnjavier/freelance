import React, {Component} from 'react';
import {Link} from 'react-router';

const styles = {
  row: {
    marginTop: '200px'
  }
};

export class WText extends Component {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
        <div className="container fullscreen w-dark rotated-line">
          <div style={styles.row} className="row">
            <div className="col-md-12">
              <h2>Titulo</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam magni, eos veritatis veniam! Provident voluptatem a, explicabo temporibus quibusdam omnis facere nisi aliquam inventore voluptate voluptas, dolorum libero hic aspernatur!</p>
              <Link to="/work" className="btn btn-main">See work</Link>
            </div>
          </div>
        </div>
    );
  }
}